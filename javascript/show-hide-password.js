
const pswrdFields = document.querySelectorAll("form .input-group input[type='password']")

for (let i = 0; i < pswrdFields.length; i++) {

    const input = pswrdFields[i];
    const icon = pswrdFields[i].nextElementSibling;

    icon.setAttribute("title", 'Show Password');
    icon.style.display = 'none';

    input.addEventListener("input", () => {
        if (input.value.length > 0) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });

    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-eye")
        icon.classList.toggle("fa-eye-slash");
        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute("title", 'Hide Password');
        }
        else {
            input.type = 'password'
            icon.setAttribute("title", 'Show Password');
        }
    });

}





