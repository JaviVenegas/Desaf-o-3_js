let color = ""
const ky = document.querySelector("#key")

function changeColor(newColor) {
    color = newColor;
    ky.style.backgroundColor = color;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        changeColor('pink')
    } else if (e.key === 's') {
        changeColor('orange')
    } else if (e.key === 'd') {
        changeColor('lightblue')
    }
})

function createDiv(newColor) {
    let ky= document.createElement('div')
    ky.style.backgroundColor = newColor
    ky.style.width = "200px"
    ky.style.height = "200px"
    document.body.appendChild(ky)
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'q') {
        createDiv('purple');
    } else if (e.key === 'w') {
        createDiv('grey')
    } else if (e.key === 'e') {
        createDiv('brown')
    }
})

