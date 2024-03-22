// Store the data when user Enter the input field

let obj = {};
function GetValue(e) {
  let currentValue = e.target.value;
  obj[e.target.name] = currentValue;
  console.log(obj);
}


