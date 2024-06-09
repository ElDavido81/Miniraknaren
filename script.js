let firstValue = null
let secondValue = null
const display = document.querySelector('.display')
const knappar = document.querySelectorAll('.knapp')

knappar.forEach(knapp => {
  knapp.addEventListener('click', event => {
    if (knapp.value === "Sum") {
      if (firstValue !== null && secondValue !== null) {
        const total = firstValue + secondValue;
        display.innerText = total
      }
    } else if (knapp.value === "+") {
      display.innerText = "+"
    } else {
      const numValue = Number(knapp.value);
      if (!isNaN(numValue)) {
        if (firstValue === null) {
          firstValue = numValue
        } else {
          secondValue = numValue
        }
        display.innerText = knapp.value
      }
    }
  })
})