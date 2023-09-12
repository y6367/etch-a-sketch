const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
let boxCount = 20;
let temp = `${32 / boxCount}vw`;
let box;

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
            console.log('lol')
        })
    });
}

boxCreate();


reset.addEventListener("click", () => {
    boxCount = prompt("Please enter the number of pixels per line up to 100.")
    updateTemp();
    console.log(boxCount)
    box.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    boxCreate()
})