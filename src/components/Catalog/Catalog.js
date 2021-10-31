import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Bangkok from "../../images/city/bangkok.jpg"
import NewYork from "../../images/city/newYork.jpg"
import Colombo from "../../images/city/colombo.jpg"
import Venice from "../../images/city/venice.jpg"

let items = [
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
    },
]

export function Catalog() {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <CatalogItem name={item.name} price={item.price} image={item.image}/>))
            }
        </Wrapper>
    );
}
