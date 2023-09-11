const container = document.querySelector('.container');


document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelectorAll('.box')
    box.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add('active')
            console.log('lol')
        })
    });
})

function boxCreate() {
    const boxes = document.createElement('div');
    boxes.classList.add('box')
    container.append(boxes);
}

for (i = 0; i < 256; i++) {
    boxCreate()
}