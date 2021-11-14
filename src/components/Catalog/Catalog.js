import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Bangkok from "../../images/city/bangkok.jpg"
import NewYork from "../../images/city/newYork.jpg"
import Colombo from "../../images/city/colombo.jpg"
import Venice from "../../images/city/venice.jpg"
import {Filter} from "../Filter/Filter";
import {useState, useEffect} from 'react';
import {Header} from "../Header/Header";
import {ItemPage} from "../ItemPage/ItemPage";
import axios from "axios";
import BarWave from "react-cssfx-loading/lib/BarWave";

export function Catalog() {
    const [items, update] = useState(null);
    const [view, setView] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8077/trip`)
            .then((result) => {
                update(result.data)
            });
    }, []);

    function updateItems(name, order, price, input) {
        console.log(name,order,price)
        axios.get('http://localhost:8077/trip/param', {
            params:
                {
                    name: name,
                    order: order,
                    price: price
                }
        }).then((result) => {
            console.log(result.data)
            filterInput(result.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item => item.countryName.search(input.value) !== -1));
    }

    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage(name) {
            if (name == "Bangkok")
                return Bangkok;
            if (name == "New York")
                return NewYork;
            if (name == "Colombo")
                return Colombo;
            if (name == "Venice")
                return Venice;
        }

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.countryName} name={item.countryName} price={item.price}
                                     image={createImage(item.countryName)} text={item.description}
                                     function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Filter function={updateItems}/>
            <Wrapper style={{padding: "200px"}}>
                <BarWave color="#000" width="100px" height="100px" duration="3s"/>
            </Wrapper>
        </>
    }

    if (view == null)
        return (
            returnItems(items)
        )
    return (
        <>
            <Header/>
            <ItemPage item={view}/>
        </>
    )
}
