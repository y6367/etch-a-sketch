const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const rgbBtn = document.querySelector('.rgb');
const blackBtn = document.querySelector('.black')
let boxCount = 20;
let temp = `${32 / boxCount}vw`;
let box;
let rgb1;
let rgb2;
let rgb3;
let rbg;
let rainbowStatus = 'off';


function randomRgb() {
    rgb1 = Math.floor(Math.random() * 255);
    rgb2 = Math.floor(Math.random() * 255);
    rgb3 = Math.floor(Math.random() * 255);
    rgb = `rgb(${rgb1} ${rgb2} ${rgb3})`
}
randomRgb()

function updateTemp() {
    temp = `${32 / boxCount}vw`;
}

function boxInit() {
    const boxes = document.createElement('div');
    boxes.classList.add('box');
    boxes.style.height = `${temp}`
    boxes.style.width = `${temp}`
    container.append(boxes);
}

function boxCreate() {
    for (i = 0; i < boxCount * boxCount; i++) {
        boxInit()
    }
    box = document.querySelectorAll('.box')
    box.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add('active')
            // randomRgb();
            // box.style.backgroundColor = rgb;
            console.log('lol')
        })
    });
}

boxCreate();


reset.addEventListener("click", () => {
    boxCount = prompt("Please enter the number of pixels per line up to 100.")
    if (boxCount > 100 || isNaN(boxCount) || boxCount < 1) {
        boxCount = prompt("Please enter a valid number between 1 - 100")
    }
    updateTemp();
    console.log(boxCount)
    box.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    boxCreate()
})

rgbBtn.addEventListener("click", () => {
    box = document.querySelectorAll('.box')
    if (rainbowStatus === 'on') {
        rainbowStatus = 'off';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
                console.log('lol')
            })
        });
    } else if (rainbowStatus === 'off') {
        rainbowStatus = 'on';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                randomRgb();
                box.style.backgroundColor = rgb;
                console.log('lol')
            })
        });
    }
    console.log(rainbowStatus) 
})

//old black button, doesnt need because rainbow toggles.

// blackBtn.addEventListener("click", () => {
//     box = document.querySelectorAll('.box')
//     box.forEach(box => {
//         box.addEventListener("mouseover", () => {
//             box.style.backgroundColor = "black";
//             console.log('lol')
//         })
//     });
// }) 