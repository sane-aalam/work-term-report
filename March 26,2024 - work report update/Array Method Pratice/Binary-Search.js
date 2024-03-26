let arr = [11, 12, 13, 14, 15, 17, 19];

function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  // element is not present into the array
  return -1;
}

// let target = 191;
let target = 19;
let Result = binarySearch(arr, target);
console.log(Result);
