import {calculate, clearInput, getInputValues, renderItemsList} from "./util.js";

const searchButton = document.getElementById("button__find");
const clearButton = document.getElementById("button__clear");
const countButton = document.getElementById("button__count");
const switchButton = document.getElementById("switch");
const submitButton = document.getElementById("button__submit");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

let planes = [
    {
        id: 1,
        name: "Boeing",
        amount: 150,
        fuelVolume: 5000,
    },
    {
        id: 2,
        name: "Plane",
        amount: 250,
        fuelVolume: 7000,
    },
    {
        id: 3,
        name: "Plane",
        amount: 250,
        fuelVolume: 7000,
    }
];

const addItem = ({id, name, amount, fuelVolume}) => {
    countText.classList.add("hidden");
    const newItem = {
        id,
        name,
        amount,
        fuelVolume
    };
    planes.push(newItem);
}

searchButton.addEventListener("click", () => {
    const foundPlanes = planes.filter(plane => plane.name.search(searchInput.value) !== -1);
    renderItemsList(foundPlanes);
})

window.reply_click = (id) => {
    const arrAmountOfPeople = planes.map(plane => plane.id);
    const index = arrAmountOfPeople.indexOf(id);
    planes.splice(index, 1);
    renderItemsList(planes);
}

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderItemsList(planes);
})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    countText.innerHTML = calculate(planes);
});

switchButton.addEventListener("change", () => {
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
    renderItemsList(planes);
    clearInput();
})

renderItemsList(planes)
