import {updatePlane} from "./api.js";

const titleInput = document.getElementById("title");
const amountOfPeopleInput = document.getElementById("amount");
const fuelVolumeInput = document.getElementById("fuel_volume");
const submitButton = document.getElementById("button__submit");

submitButton.addEventListener('click', event => {
    event.preventDefault();
    const {id, name, amountOfPeople, fuelVolume} = getInputValues();
    updatePlane({
        id,
        name,
        amountOfPeople,
        fuelVolume,
    });
    window.location.href = 'http://localhost:63343/lab3/index.html?_ijt=5hb60ng0qcslmmf1g59ak53cmn';
})

const getInputValues = () => {
    if (titleInput.validity.valueMissing || titleInput.validity.patternMismatch) {
        alert('Please enter correct name')
    } else if (amountOfPeopleInput.validity.patternMismatch || amountOfPeopleInput.validity.valueMissing) {
        alert('Please enter correct amount of people')
    } else if (fuelVolumeInput.validity.patternMismatch || fuelVolumeInput.validity.valueMissing) {
        alert('Please enter correct fuel volume')
    } else {
        return {
            id: parseInt(localStorage.getItem('planeId')),
            name: titleInput.value,
            amountOfPeople: amountOfPeopleInput.value,
            fuelVolume: fuelVolumeInput.value,
        };
    }
};
