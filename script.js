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

    } else if (field.childNodes.length < squares) {//prevents user from creating unlimited fields

        //calculates square size and makes if fit the field container
        let squareSize = fieldSize / squares;
        let squareHeightAndWidth = Math.sqrt(squareSize);

        //creates squares
        for (let i = 1; i <= squares; i++) {
            const box = document.createElement("div");
            box.style.cssText = `height: ${squareHeightAndWidth}px; width: ${squareHeightAndWidth}px;`;
            field.appendChild(box);
            

            //sets opacity value and random color
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
            let opacityValue = 0.1;
            box.addEventListener("mouseover", () => {
                box.style.opacity = `${opacityValue += 0.1}`;
                box.style.backgroundColor = `${randomColor}`;
            });
        }
    } else {
        alert("Use the reset button first!")
    }
    
});



resetBtn.addEventListener("click", () => {
    location.reload();
});