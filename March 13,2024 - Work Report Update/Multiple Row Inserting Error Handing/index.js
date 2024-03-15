const data = [
  {
    name: "Kapil",
    age: 21,
    status: "Active",
    city: "Rampur",
  },
  {
    name: "Rohal",
    age: 21,
    status: "Active",
    city: "Jaipur",
  },
  {
    name: "John",
    age: 21,
    status: "Active",
    city: "New City",
  },
  {
    name: "Sapil",
    age: 21,
    status: "Active",
    city: "Rampur",
  },
];

// 2-D Array of object - to store the Frequency of, inserting into the Row(column)
var resultData = [];

function buttonClickInsert() {
  resultData.push(data[resultData.length]);
  console.log("resultData", JSON.stringify(resultData));
  addRowLogic();
  resultData.push(data[resultData.length]);
  console.log(resultData);
}

// Error Handing concept - to fix the only one Element inserted into table
var oneByIndexControl = -1;

function addRowLogic() {
  let tableBody = document.getElementById("tableBody");
  //remove all existing rows

  oneByIndexControl = oneByIndexControl + 1;

  if (oneByIndexControl > data.length) {
    alert("you have finished all the data into Object of Array");
    oneByIndexControl = 0;
    console.log(oneByIndexControl);
  }

  var nameUser = data[oneByIndexControl].name;
  var ageUser = data[oneByIndexControl].age;
  var statusUser = data[oneByIndexControl].status;
  var cityUser = data[oneByIndexControl].city;

  // Create the row in HTML
  var tr = document.createElement("tr");

  // Create the col in HTML
  let nameCell = document.createElement("td");
  let ageCell = document.createElement("td");
  let statusCell = document.createElement("td");
  let cityCell = document.createElement("td");

  nameCell.appendChild(document.createTextNode(nameUser));
  ageCell.appendChild(document.createTextNode(ageUser));
  statusCell.appendChild(document.createTextNode(statusUser));
  cityCell.appendChild(document.createTextNode(cityUser));

  // Append Child-4 used to insert the Table-Row
  tr.appendChild(nameCell);
  tr.appendChild(ageCell);
  tr.appendChild(statusCell);
  tr.appendChild(cityCell);

  tableBody.appendChild(tr);
}

// Remove Function called- When will click the remove row button
function buttonClickRemove() {
  let tableBody = document.getElementById("tableBody");
  let removeChild = tableBody.firstChild;
  removeChild.remove();
  // we have to pop the object into the Array of object
  resultData.pop();
}
