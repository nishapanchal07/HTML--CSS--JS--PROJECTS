const birthdayEl = document.getElementById("birthday");
const buttonEl = document.querySelector("button");
const resultEl = document.getElementById("result");

buttonEl.addEventListener("click", () => {
    const birthdayValue = birthdayEl.value;

    if (birthdayValue === "") {
        resultEl.innerHTML = "Please enter your date of birth!";
        return;
    }

    const birthDate = new Date(birthdayValue);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    resultEl.innerHTML = `Your age is ${age} years old.`;
});