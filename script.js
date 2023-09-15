const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const rgbBtn = document.querySelector('.rgb');
const fadeBtn = document.querySelector('.fade')

let pauseStatus = 'off';
let boxCount = 20;
let temp = `${32 / boxCount}vw`;
let box;
let rgb1;
let rgb2;
let rgb3;
let rbg;
let rainbowStatus = 'off';
let fadePer = 10;
let fadeRgb;
let fadeStatus = 'off';

//keydown to pause.
// document.addEventListener("keydown", (e) => {
//     if (e.keycode === 8 || pauseStatus === 'on') {
//         console.log('2')
//         pauseStatus = 'off'
//         box.forEach((div) => {
//             div.parentNode.removeChild(div);
//         });
//     } else if (e.keycode === 8 || pauseStatus === 'off') {
//         console.log('saeadx')
//         pauseStatus = 'on'
//     }
// })


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
function updateFade() {
    fadeRgb = `rgb(${12.75 * fadePer} ${12.75 * fadePer} ${12.75 * fadePer})`;
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
            // console.log('lol')
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
    fadeStatus = 'off';
    rainbowStatus = 'off';
})

rgbBtn.addEventListener("click", () => {
    box = document.querySelectorAll('.box')
    if (rainbowStatus === 'on') {
        rainbowStatus = 'off';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
                // console.log('lol')
            })
        });
    } else if (rainbowStatus === 'off') {
        rainbowStatus = 'on';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                randomRgb();
                box.style.backgroundColor = rgb;
                // console.log('lol')
            })
        });
    }
    console.log(rainbowStatus) 
})

fadeBtn.addEventListener("click", () => {
    fadePer = 20
    console.log('yes')

    box = document.querySelectorAll('.box')
    if (fadeStatus === 'on') {
        fadeStatus = 'off';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
                // console.log('lol')
            })
        });
    } else if (fadeStatus === 'off') {
        fadeStatus = 'on';
        box.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = fadeRgb;
                fadePer--
                updateFade();
                if (fadePer === 0) {
                    fadePer = 20;
                }
                // console.log(fadeRgb)
                // console.log(fadePer)
                // console.log('lol') 
           })
        });
    }

})


//old black button, dont need because rainbow toggles with black.

// blackBtn.addEventListener("click", () => {
//     box = document.querySelectorAll('.box')
//     box.forEach(box => {
//         box.addEventListener("mouseover", () => {
//             box.style.backgroundColor = "black";
//             console.log('lol')
//         })
//     });
// }) 

25.5