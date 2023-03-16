const input = document.getElementById("message-input");

input.addEventListener("input" , () => {
    if(input.value === ' ' ) {
        input.value = '';
    }
})