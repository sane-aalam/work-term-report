// Function to merge two sorted parts of array
function merge(arr, left, middle, right) {
  // Length of both sorted aub arrays
  let l1 = middle - left + 1;
  let l2 = right - middle;
  // Create new subarrays
  let arr1 = new Array(l1);
  let arr2 = new Array(l2);

  for (let i = 0; i < l1; ++i) {
    arr1[i] = arr[left + i];
  }
  for (let i = 0; i < l2; ++i) {
    arr2[i] = arr[middle + 1 + i];
  }

  // Two Pointer Algorithm
  let i = 0,
    j = 0,
    k = left;

  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      arr[k] = arr1[i];
      ++i;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }
  // Update the remaining elements
  while (i < l1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < l2) {
    arr[k] = arr1[j];
    j++;
    k++;
  }
  delete arr1;
  delete arr2;
}

// Function to implement merger sort in javaScript
function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  // on the basic of the middle index, we will apply divide-and-conquer Appraoch
  let middle = left + parseInt((right - left) / 2);

  // Div-and-conquer Appraoch
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);

  // merge them
  merge(arr, left, middle, right);
}

const arr = [38, 27, 43, 10];
console.log("Original array before sort: " + arr);
mergeSort(arr, 0, arr.length - 1);
console.log("After sorting : " + arr);
