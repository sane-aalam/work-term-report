let arr = [11, 12, 13, 14, 15, 17, 19];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Linear Search Algorithm 
function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return 1;
    }
  }
  return 0;
}

let key = 19;
let isPresentOrNot = LinearSearch(arr, key);
console.log(isPresentOrNot);
