const allInputs = document.querySelectorAll("form .input-group input[type='password'");
const input1 = allInputs[0];
const input2 = allInputs[1];
const form = document.querySelector("form");
const errorMessage = document.getElementById("password-error");


input2.addEventListener("change", () => {
    if (input1.value === input2.value) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
})

form.addEventListener("submit", (e) => {

    if (input1.value === input2.value) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        e.preventDefault();
    }

})