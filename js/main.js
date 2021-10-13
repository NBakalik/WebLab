import {calculate, getInputValues, renderItemsList} from "./util.js";
import {addPlane, deletePlane, getAllPlanes} from "./api.js";

const searchButton = document.getElementById("button__find");
const clearButton = document.getElementById("button__clear");
const countButton = document.getElementById("button__count");
const switchButton = document.getElementById("switch");
const submitButton = document.getElementById("button__submit");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

export let index = 1;

let planes;

searchButton.addEventListener("click", () => {
    const foundPlanes = planes.filter(plane => plane.name.search(searchInput.value) !== -1);
    renderItemsList(foundPlanes);
})

window.deleteItem = (id) => {
    deletePlane(id).then(refetchAllPlanes);
}

window.editItem = (id) => {
    localStorage.setItem('planeId', id);
    window.location.href = 'http://localhost:63343/lab3/edit.html';
}

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    refetchAllPlanes();
})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    countText.innerHTML = calculate(planes);
});

switchButton.addEventListener("change", () => {
    let sortedPlanes = Array.from(planes);
    if (switchButton.checked) {
        sortedPlanes.sort(
            (first, second) => first.amountOfPeople - second.amountOfPeople);
    }
    renderItemsList(sortedPlanes);
});

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const {id, name, amountOfPeople, fuelVolume} = getInputValues();
    addPlane({
        id,
        name,
        amountOfPeople,
        fuelVolume,
    }).then(refetchAllPlanes);
})

export const refetchAllPlanes = async () => {
    const allPlanes = await getAllPlanes();
    planes = allPlanes;
    renderItemsList(planes);
};

refetchAllPlanes();
