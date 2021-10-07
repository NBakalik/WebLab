const titleInput = document.getElementById("title");
const amountOfPeopleInput = document.getElementById("amount");
const fuelVolumeInput = document.getElementById("fuel_volume");
const submitButton = document.getElementById("button__submit");

submitButton.addEventListener('click', event => {
    event.preventDefault();
    const {id, name, amount, fuelVolume} = getInputValues();
    console.log({id, name, amount, fuelVolume})
    localStorage.setItem(localStorage.getItem('planeId'), JSON.stringify({id, name, amount, fuelVolume}));
    console.log(localStorage.getItem('planeId'))
    window.location.href = 'http://localhost:63342/lab3/index.html?';
})

const getInputValues = () => {
    return {
        id: localStorage.getItem('planeId'),
        name: titleInput.value,
        amount: amountOfPeopleInput.value,
        fuelVolume: fuelVolumeInput.value,
    };
}
