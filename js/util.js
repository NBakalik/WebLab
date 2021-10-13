const titleInput = document.getElementById("title");
const amountOfPeopleInput = document.getElementById("amount");
const fuelVolumeInput = document.getElementById("fuel_volume");
const itemContainer = document.getElementById("items_container");

export const clearInput = () => {
    titleInput.value = "";
    amountOfPeopleInput.value = "";
    fuelVolumeInput.value = "";
};

export const itemTemplate = ({id, name, amountOfPeople, fuelVolume}) => `
<li>
    <img class="item__photo" src="/lab3/img/plane.png" alt="plane">
        <div class="item">
            <h3 class="item__title">${name}</h3>
            <h5 class="item__info amount">Amount of people: ${amountOfPeople}</h5>
            <h5 class="item__info fuel">Volume of Fuel: ${fuelVolume}</h5>
            <div class="wrapper">
                <button class="button__remove" onClick='deleteItem(${id})'>Remove</button>
                <button class="button__edit" onClick='editItem(${id})'>Edit</button>
            </div>
        </div>
</li>`;


export const getInputValues = () => {
    if (titleInput.validity.valueMissing || titleInput.validity.patternMismatch) {
        alert('Please enter correct name')
    } else if (amountOfPeopleInput.validity.patternMismatch || amountOfPeopleInput.validity.valueMissing) {
        alert('Please enter correct amount of people')
    } else if (fuelVolumeInput.validity.patternMismatch || fuelVolumeInput.validity.valueMissing) {
        alert('Please enter correct fuel volume')
    } else {
        return {
            name: titleInput.value,
            amountOfPeople: amountOfPeopleInput.value,
            fuelVolume: fuelVolumeInput.value,
        };
    }
};

export const renderItemsList = (items) => {
    itemContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const addItemToPage = ({id, name, amountOfPeople, fuelVolume}) => {
    itemContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({id, name, amountOfPeople, fuelVolume})
    );
}

export const calculate = (arr) => {
    const arrAmountOfPeople = arr.map(plane => plane.amountOfPeople);
    return arrAmountOfPeople.reduce((sum, current) => +sum + +current);
}
