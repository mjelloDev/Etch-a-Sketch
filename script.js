const container = document.querySelector(".container");
const header = document.querySelector("header");

//Create h1 element inside header
const h1 = document.createElement("h1");
h1.textContent = "Etch a Sketch";
header.appendChild(h1);

//Create 16x16 div element with grid class
const gridCanvas = 16 * 16;

for (let i = 0; i < gridCanvas; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
}
