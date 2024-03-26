function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [38, 27, 43, 10];
console.log("Original array before sort: " + arr);
bubblesort(arr);
console.log("After sorting : " + arr);
