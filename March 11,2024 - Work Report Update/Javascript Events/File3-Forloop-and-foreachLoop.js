
//* About this topic
//* for loop and forEach Loop

let arr = [11,12,13,14,15,16];
let lengthOfArray = arr.length;

for(let i = 0; i<lengthOfArray; i++){
    console.log(i);
}

arr.forEach((currentElement,index,arr) =>{
    console.log(`currentElement ${currentElement}, index of currentElement ${index}, orignal Array ${arr}`)
})