const grid = document.querySelector(".grid");
const size = 16;

function create(gridSize){
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++){
        let gridSquare = document.createElement("div");
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridSquare);
    }
    let gridPixels=grid.querySelectorAll("div");
    gridPixels.forEach(gridPixel => {gridPixel.addEventListener("mouseover", color)
        
    });
}

function color(){
    if (this.style.backgroundColor = "#d8e2dc"){
        this.style.backgroundColor="#000000";
    }
}

function eraseSome(){
    let gridPixels=grid.querySelectorAll("div");
    gridPixels.forEach(gridPixel => {
        if (gridPixel.style.backgroundColor != "#d8e2dc"){
            gridPixel.style.backgroundColor ="#d8e2dc";
        }
    })
}


create(size);

restart.addEventListener('click',eraseSome);