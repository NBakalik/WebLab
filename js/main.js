import {calculate, clearInput, getInputValues, renderItemsList} from "./util.js";

const searchButton = document.getElementById("button__find");
const clearButton = document.getElementById("button__clear");
const countButton = document.getElementById("button__count");
const switchButton = document.getElementById("switch");
const submitButton = document.getElementById("button__submit");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

export let index = 1;

let planes = convertStorageToArray();
renderItemsList(planes);

const addItem = ({id, name, amount, fuelVolume}) => {
    countText.classList.add("hidden");
    const newItem = {
        id,
        name,
        amount,
        fuelVolume
    };
    if (localStorage.getItem('index') != null) {
        localStorage.setItem('index', (+localStorage.getItem('index') + 1).toString());
        localStorage.setItem(localStorage.getItem('index'), JSON.stringify(newItem));
    } else {
        localStorage.setItem(index.toString(), JSON.stringify(newItem));
        localStorage.setItem('index', index.toString());
    }
    let planes = convertStorageToArray();
    renderItemsList(planes);
}

searchButton.addEventListener("click", () => {
    let planes = convertStorageToArray();
    const foundPlanes = planes.filter(plane => plane.name.search(searchInput.value) !== -1);
    renderItemsList(foundPlanes);
})

window.deleteItem = (id) => {
    localStorage.removeItem(id.toString())
    let planes = convertStorageToArray();
    renderItemsList(planes);
}

window.editItem = (id) => {
    localStorage.setItem('planeId', id);
    window.location.href = 'http://localhost:63342/lab3/edit.html?';
}

function convertStorageToArray() {
    let tempPlanes = []
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key) || key === 'planeId' || key === 'index') {
            continue;
        }
        tempPlanes.push(JSON.parse(localStorage.getItem(key)));
        console.log(localStorage.getItem(key))
    }
    return tempPlanes;
}

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    let planes = convertStorageToArray();
    renderItemsList(planes);
})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    let planes = convertStorageToArray();
    countText.innerHTML = calculate(planes);
});

switchButton.addEventListener("change", () => {
    let planes = convertStorageToArray();
    let sortedPlanes = Array.from(planes);
    if (switchButton.checked) {
        sortedPlanes.sort(
            (first, second) => first.amount - second.amount);
    }
    renderItemsList(sortedPlanes);
});

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const {id, name, amount, fuelVolume} = getInputValues();
    addItem({id, name, amount, fuelVolume});
    let planes = convertStorageToArray();
    renderItemsList(planes);
    clearInput();
})
