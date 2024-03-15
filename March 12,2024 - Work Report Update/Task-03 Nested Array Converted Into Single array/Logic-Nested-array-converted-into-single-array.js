//*---------- Normal Loop using------------
/* step by step explained 
1- traversal the array 
2- every element, we have to checkout the current Number or objects
3- if current element is number, simple we can push into ResultArray
4- else current element is array [111,35,34],Then go to this inner array, 
  a) traversal the inner array 
  b) take the inner element one by one push into the ResultArray
*/

// create the element in javascript using
let arr = [11, 12, 14, [111, 35, 34], 15];
console.log(arr);
console.log(arr.length);

let resultArray = [];


for (let index = 0; index < arr.length; index++) {
  let currentElementType = typeof arr[index];

  // check the data type of object
  if (currentElementType === "object") {
    let InnerArray = arr[index];

    // console 2 lines
    console.log(InnerArray);
    console.log(InnerArray.length);

    InnerArray.forEach((Element) => {
      let popObjectElement = Element;
      resultArray.push(popObjectElement);
    });
    // check the data type of current element in number
  } else if (currentElementType === "number") {
    let popNumberElement = arr[index];
    resultArray.push(popNumberElement);
  }
}
console.log(resultArray);

//* Time complexity - 0(n2)
//* Space compleixty - 0(1)


