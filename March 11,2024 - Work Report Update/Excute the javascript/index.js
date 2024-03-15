const containerEl = document.querySelector(".container");
console.log(containerEl);

// document.createElement("div")
for (let index = 0; index < 10; index++) {
  const colorContainerEl = document.createElement("div");
  // set the class for select the css
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    // function called here to generate the random color in javascirpt
    const newColorCode = randomColor();
    // set the background color and set the codeGenerator into the sub-div
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

//* This function is used to generate the RandomColor

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    console.log(colorCode);
  }
  return colorCode;
}

let arr = [11, 12, 13, 14, 55];

arr.forEach((currElement, index, arr) => {
  console.log(`${currElement} and ${index} orignal array: ${arr}`);
});
