const header = document.querySelector("header");
const container = document.querySelector(".flex-container");
const canvas = document.querySelector(".canvas");

function createGrid() {
  //Determine the size of the canvas
  let gridSize = parseInt(document.getElementById("gridSizeInput").value);

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
      gridContainer.appendChild(gridCell);
    }
  }
}

function resetGrid() {
  let gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";
}
