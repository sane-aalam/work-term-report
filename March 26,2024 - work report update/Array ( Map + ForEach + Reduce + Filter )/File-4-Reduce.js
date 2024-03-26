// normal way to sum of all the Elements
const arr = [1, 1, 1, 1, 5, 9191];
let totalsum = 0;
for (let i = 0; i < arr.length; i++) {
  totalsum = arr[i] + totalsum;
}
console.log(totalsum);

// to understand this concept - Reduce Method
const numbers = [2, 4, 6];
const sum = numbers.reduce((sum, number) => {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

console.log(sum);
