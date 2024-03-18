function ClickEvent(allInputSelect) {
  var input = document.forms["myForm"][allInputSelect];
  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.style.borderColor = "red";
      input.style.borderWidth = "5px";
      // input.value = "Enter the correct value";
      let controlAlert = false;
      return controlAlert;
    } else {
      input.style.borderColor = "";
      input.style.borderWidth = "";
      let controlAlert = false;
      return controlAlert;
    }
  });
}
