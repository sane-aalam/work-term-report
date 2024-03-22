// Feature- develops
//----store the value
//-----next Button
//-----prevous button
//-----sumbit store the data;

let data = {};

function StoreValue(e) {
  let key = e.target.id;
  let value = e.target.value;
  data[key] = value;
}

let form = document.getElementById("form");
let NextContainerShow = (document.getElementById("form2").style.display =
  "none");

let form1 = document.querySelector("#form1");
let from2 = document.querySelector("#form2");

function submitForm(event) {
  // submitForm
  event.preventDefault();

  console.log(form1);
  console.log(from2);

  if (form2.style.display == "none") {
    console.log("1st called");
    form1.style.display = "none";
    from2.style.display = "block";
    let wizardSecondActive = document.getElementById("active-second-child");
    wizardSecondActive.style.backgroundColor = "#04aa6d";
  } else if (from2.style.display == "block") {
    console.log("2st called");
    from2.style.display = "none";
    form1.style.display = "block";
    let wizardSecondActive = document.getElementById("active-second-child");
    wizardSecondActive.style.backgroundColor = "";
  }
}
