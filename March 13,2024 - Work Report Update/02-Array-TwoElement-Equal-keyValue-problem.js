//Two Sum - GFG pratice problem

function TwoSumFunction(nums, targetValue) {
  let sizeofArray = nums.length;
  for (let index = 0; index < sizeofArray - 1; index++) {
    let firstIndex = index;
    let secondIndex = index + 1;

    let firstElement = nums[firstIndex];
    let secondElement = nums[secondIndex];

    let resultTwoSum = firstElement + secondElement;

    if (resultTwoSum == targetValue) {
      return [firstIndex, secondIndex];
    }
  }
  // if Target Value is not present into the given array Then we can return -1
  return -1;
}

let nums = [5, 7, 11, 13, 14, 15];
let targetValue = 1;

let TwosumResult = TwoSumFunction(nums, targetValue); //* call function to checkout the element is present or not
console.log(TwoSumFunction(nums, targetValue));
