const titleInput = document.getElementById("title");
const amountOfPeopleInput = document.getElementById("amount");
const fuelVolumeInput = document.getElementById("fuel_volume");
const itemContainer = document.getElementById("items_container");

let index = 4;
export const clearInput = () => {
    titleInput.value = "";
    amountOfPeopleInput.value = "";
    fuelVolumeInput.value = "";
};

export const itemTemplate = ({id, name, amount, fuelVolume}) => `
<li>
    <img class="item__photo" src="/lab3/img/plane.png" alt="plane">
        <div class="item">
            <h3 class="item__title">${name}</h3>
            <h5 class="item__info amount">Amount of people: ${amount}</h5>
            <h5 class="item__info fuel">Volume of Fuel: ${fuelVolume}</h5>
            <button id="${id}" class="button__remove" onClick='reply_click(${id})'>Remove</button>
        </div>
</li>
<script type="text/javascript">
    
</script>`;


export const getInputValues = () => {

    return {
        id: index++,
        name: titleInput.value,
        amount: amountOfPeopleInput.value,
        fuelVolume: fuelVolumeInput.value,
    };
};

export const renderItemsList = (items) => {
    itemContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const addItemToPage = ({id, name, amount, fuelVolume}) => {
    itemContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({id, name, amount, fuelVolume})
    );
}

export const calculate = (arr) => {
    const arrAmountOfPeople = arr.map(plane => plane.amount);
    return arrAmountOfPeople.reduce((sum, current) => +sum + +current);
}
