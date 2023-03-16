// DOM elements
const searchInput = document.getElementById("searchInput");
const searchIcon = searchInput.parentElement.children[0].children[0];
const xIcon = searchInput.parentElement.children[0].children[1];

const users = document.getElementById("users").children;

// toggle search and cross icons
function toggleSearchCrossIcons() {
    xIcon.classList.toggle("d-none");
    searchIcon.classList.toggle("d-none");
}

// clear the value of input by clicking on xIcon
xIcon.addEventListener("click", () => {
    searchInput.value = '';
    toggleSearchCrossIcons();
    resetUsers();
})

// filter the users by searched text
function filterUsers(inputName) {
    resetUsers();
    for (let i = 0; i < users.length; i++) {
        const name = users[i].getAttribute('title').trim().toLowerCase();
        if (!name.includes(inputName)) {
            users[i].classList.add("d-none");
        } else {
            // high lighting the searched keyword
            const nameBreakIndex = name.indexOf(inputName);
            const nameText = users[i].getAttribute("title");
            const firstPart = nameText.substring(0, nameBreakIndex);
            const middelPart = nameText.substring(nameBreakIndex, nameBreakIndex + inputName.length);
            const lastPart = nameText.substring(firstPart.length + middelPart.length, name.length);

            const nameEl = users[i].children[1].children[0].children[0];
            nameEl.innerHTML = `${firstPart}<span>${middelPart}</span>${lastPart}`;
        }
    }
}

// Reset the Users from searched text
function resetUsers() {
    for (let i = 0; i < users.length; i++) {
        users[i].classList.remove("d-none");
        const name = users[i].children[1].children[0].children[0];
        name.innerHTML = users[i].getAttribute("title");
    }
}

// function to get the value of search input and call an function to filter the users
searchInput.addEventListener("input", () => {
    if (searchInput.value === ' ') {
        searchInput.value = '';
    } else {
        const inputText = searchInput.value.trim().toLowerCase();
        if (inputText.length > 0) {
            xIcon.classList.remove("d-none");
            searchIcon.classList.add("d-none");
            filterUsers(inputText);
        } else {
            toggleSearchCrossIcons();
            resetUsers();
        }
    }
});