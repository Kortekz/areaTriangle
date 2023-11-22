// Area of triangle

// formula = A = 1/2 × b × h.

let display = document.querySelector('[data-display]')
let btn = document.querySelector('[data-btn]')
btn.addEventListener('click', area)
let divide = 0.5

function area(){
    let input = document.querySelector('[data-height]').value
    let input2 = document.querySelector('[data-base]').value
    let area = eval (`${divide} * ${input2} * ${input}`)
    display.value = area.toFixed(2)
}
