const container = document.querySelector(".container");
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
button.addEventListener("click", () =>{
  newGridSize()
})

function newGridSize() {
    let number = prompt("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        createGrid(number);
}
 
function createGrid(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = "white";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        setColor(div);
    })

    const setColor = (div) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = "#" + randomColor;
    } 
}
}
button2.addEventListener("click", reloadButton);

function reloadButton() {
    const squares = document.querySelectorAll('div');
    squares.forEach(square => {
        square.style.backgroundColor = "white"
    });
}
createGrid();