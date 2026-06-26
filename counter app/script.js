const counter = document.getElementById(`counter`)
const incrementBtn = document.getElementById(`incrementBtn`)
const decrementBtn = document.getElementById(`decrementBtn`)
const resentBtn = document.getElementById(`resetBtn`)

let count = 0;

//update count

function updateCounter() {
    counter.textContent = count
}

//increment

incrementBtn.addEventListener(`click`, () => {
    count++;
    updateCounter()
})

//decrement

decrementBtn.addEventListener(`click`, () => {
    count--;
    updateCounter()
})

//reset

resentBtn.addEventListener(`click`, () => {
    count = 0;
    updateCounter()
})