const header = document.querySelector("header");
const container = document.querySelector(".flex-container");

function createGrid() {
  //Determine the size of the canvas
  let gridSize = parseInt(document.getElementById("gridSizeInput").value);

  //Validate gridSize input value
  if (gridSize < 1 || gridSize > 100) {
    alert("Please enter between 1 and 100");
    return; // ==> to exit the function if the number is not within the specified range
  }

  //Clear existing grid
  let gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";

  //Set grid styles
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  //Loop to create cells
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("cell");
      gridCell.addEventListener("mouseover", colorChoice);
      gridContainer.appendChild(gridCell);
    }
  }
}

// function createGrid() {
//   // Determine the size of the canvas
//   let gridSize = parseInt(document.getElementById("gridSizeInput").value);
//
//   // Validate gridSize input value
//   if (gridSize < 1 || gridSize > 100) {
//     alert("Please enter a number between 1 and 100");
//     return;
//   }
//
//   // Clear existing grid
//   let gridContainer = document.getElementById("gridContainer");
//   gridContainer.innerHTML = "";
//
//   // Set grid styles
//   gridContainer.style.display = "flex";
//   gridContainer.style.flexWrap = "wrap";
//   gridContainer.style.width = "400px"; //
//
//   // Calculate the size of each cell based on the grid size
//   let cellSize = 100 / gridSize;
//
//   // Loop to create cells
//   for (let i = 0; i < gridSize * gridSize; i++) {
//     let gridCell = document.createElement("div");
//     gridCell.classList.add("cell");
//     gridCell.style.width = `calc(${cellSize}% - 2px)`; // Subtracting 2px to account for borders/margins
//     gridCell.style.height = `calc(${cellSize}% - 2px)`;
//     gridCell.addEventListener("mouseover", colorChoice);
//     gridContainer.appendChild(gridCell);
//   }
// }

function resetGrid() {
  let gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";
}

let color = "black";
function colorChoice() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}
