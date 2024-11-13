const field = document.querySelector(".box-container");
const generateFieldBtn = document.querySelector(".generate-field-button");
const resetBtn = document.querySelector(".reset-button");

const fieldHeight = 400;
const fieldWidth = 400;
const fieldSize = fieldHeight * fieldWidth;



generateFieldBtn.addEventListener("click", () => {
    let userInput = Number(prompt("How many squares per side?"));

    let squares = userInput**2;
    if (userInput > 100) {
        alert("Don't break the browser pls.");
    } else {
        let squareSize = fieldSize / squares;
        let squareHeightAndWidth = Math.sqrt(squareSize);
        for (i = 1; i <= squares; i++) {
            const box = document.createElement("div");
            field.appendChild(box);
            
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
            box.style.cssText = `height: ${squareHeightAndWidth}px; width: ${squareHeightAndWidth}px;`;
            
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = `${randomColor}`;
            });
        }
    }
});

resetBtn.addEventListener("click", () => {
    location.reload();
});