const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue.toFixed(1);

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Underweight";
    } else if (bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal weight";
    } else if (bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
    } else {
        weightConditionEl.innerText = "Obese";
    }
}

btnEl.addEventListener("click", calculateBMI);