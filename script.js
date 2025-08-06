let btnCreateCanvas = document.querySelector("#createCanvas");
let reset = document.querySelector("#reset");
let defaultCanvas = document.querySelector(".defaultCanvas");

// Create canvas
function createcanvas(userInputValue) {
  defaultCanvas.textContent = "";
  for (i = 1; i <= userInputValue * userInputValue; i++) {
    let box = document.createElement("div");
    box.style.width = 598 / parseInt(userInputValue) + "px";
    box.style.height = 498 / parseInt(userInputValue) + "px";
    box.style.borderLeft = "1px solid #5f60625d";
    box.style.borderBottom = "1px solid #5f60625d";
    const row = Math.floor(i / parseInt(userInputValue));
    const col = i % parseInt(userInputValue);

    // Borders
    if (i % parseInt(userInputValue) === 0) {
      box.style.borderRight = "1px solid #5f60625d";
    }
    if (i == parseInt(userInputValue)) {
      box.style.borderTop = "1px solid #5f60625d";
    }
    if (row == 0) {
      box.style.borderTop = "1px solid #5f60625d";
    }
    if (col == parseInt(userInputValue)) {
      box.style.borderRight = "1px solid #5f60625d";
    }
    // Color on hover
    let colorExist = false;
    let currentOpacity = 0.0;
    let color = getRandomColor();
    box.addEventListener("mouseenter", (dets) => {
      if (colorExist === false) {
        box.style.backgroundColor = color;
        colorExist = true;
      }
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      box.style.opacity = currentOpacity.toFixed(1);
    });
    defaultCanvas.appendChild(box);
  }
}

// Random color generator
function getRandomColor() {
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let digits = Math.floor(Math.random() * 16).toString(16);
    hexCode = hexCode + digits;
  }
  return hexCode;
}

// Taking user input
let userInputValue = "";
btnCreateCanvas.addEventListener("click", (dets) => {
  userInputValue = prompt("Enter number of boxes you want:");

  // Error alerts
  if (userInputValue.trim() === "") {
    alert("Input can't be empty, enter a number between 1 and 100.");
  } else if (userInputValue == 0) {
    alert("Input can't be zero, enter a number between 1 and 100.");
  } else if (userInputValue > 101) {
    alert("Input can't be greate then 100, enter a number between 1 and 100");
  } else {
    createcanvas(userInputValue);
  }
});

// Reset canvas
function resetCanvas(){
  reset.addEventListener("click", (dets)=>{
    defaultCanvas.textContent = "";
    if(!userInputValue){
      createcanvas(16);
    }else{
      createcanvas(userInputValue);
    }
  })
}

createcanvas(16);
resetCanvas();
