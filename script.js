const field = document.querySelector(".box-container");
const generateFieldBtn = document.querySelector(".generate-field-button");
const fieldHeight = 960;
const fieldWidth = 960;
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
            box.style.cssText = `border: none; height: ${squareHeightAndWidth}px; width: ${squareHeightAndWidth}px; background-color: #e0e2db;`;
            field.appendChild(box);
        }
    }
})