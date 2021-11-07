import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Bangkok from "../../images/city/bangkok.jpg"
import NewYork from "../../images/city/newYork.jpg"
import Colombo from "../../images/city/colombo.jpg"
import Venice from "../../images/city/venice.jpg"
import {Filter} from "../Filter/Filter";
import {useState} from 'react';

export function Catalog() {
    const catalogItems = [
        {
            name: "Bangkok",
            price: 500,
            image: Bangkok
        },
        {
            name: "New York",
            price: 1500,
            image: NewYork
        },
        {
            name: "Colombo",
            price: 2000,
            image: Colombo
        },
        {
            name: "Venice",
            price: 450,
            image: Venice
        }];
    const [items, update] = useState(catalogItems);

    function updateItems(name, order, price, input) {
        let resultArray = catalogItems;
        if (price == 1)
            resultArray = catalogItems.filter(item => item.price <= 500)
        else if (price == 2)
            resultArray = catalogItems.filter(item => item.price > 500);
        if (name == "name")
            resultArray.sort((first, second) => first.name.localeCompare(second.name));
        else if (name == "price")
            resultArray.sort((first, second) => first.price - second.price);
        sortByOrder(resultArray, order, input);
    }

    function sortByOrder(array, order, input) {
        let resultArray;
        if (order == 2)
            resultArray = Array.from(array).reverse();
        else
            resultArray = Array.from(array);
        filterInput(resultArray, input);
    }

    function filterInput(array, input) {
        update(array.filter(item => item.name.search(input.value) !== -1));
    }

    return (
        <>
            <Filter function={updateItems}/>
            <Wrapper>
                {items.map(item => (
                    <CatalogItem key={item.name.toString()} name={item.name} price={item.price} image={item.image}/>))}
            </Wrapper>
        </>
    );
}
