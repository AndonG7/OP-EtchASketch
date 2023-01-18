const gridContainer = document.querySelector('.grid-container');
const slideValue = document.querySelector('span');
const inputSlider = document.querySelector('input');
const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.rainbow');
let pixels = document.querySelectorAll('.grid-element');
let color;
let toggle;

//Painter that does the work before input is given to the slider
defaultPainter();

//Code that executes when the user moves the slider
inputSlider.oninput = (() => {
    gridContainer.innerHTML = "";
    let value = inputSlider.value;
    slideValue.textContent = value;
    gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    for(let i= 0; i<value*value; i++){
        const newGridElement = document.createElement('div');
        gridContainer.appendChild(newGridElement);
        newGridElement.classList.add('grid-element');        
    }

    const newGridElements = document.querySelectorAll('.grid-element');
    newGridElements.forEach(element => 
        element.addEventListener("click", function() {
            if (toggle) {
                element.style.backgroundColor = randomColorGenerator();
            } else element.style.backgroundColor = 'black';
        }
    ));
    
    clearBtn.addEventListener("click", function() {
        for (i=0; i<newGridElements.length; i++) {
            newGridElements[i].style.backgroundColor = 'white';
        }
    });

});






    









    