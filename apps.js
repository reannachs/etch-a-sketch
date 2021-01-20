const grid = document.querySelector(".grid");

function create(gridSize){
    let gridArea = gridSize * gridSize;

    for (let i = 1; i <= gridArea; i++){
        let gridSquare = document.createElement("div");
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridSquare);
        console.log("hello")
    }
}

create(16);