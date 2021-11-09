import {GlobalWrapper, FilterSelector, LabelText, ApplyButton, FilterWrapper, HorLine} from "./Filter.styles";
import {useState} from 'react';
import {LogoImage, LogoText, Nav, NavItem, NavWrapper, Search, Wrapper} from "../Header/Header.styles";
import SearchIcon from "../../images/480px-Search_Icon.svg.png";
import Logo from "../../images/logo.png";
import {Link} from "react-router-dom";

export function Filter(props) {
    const [name, changeName] = useState("DEFAULT");
    const [order, changeOrder] = useState("DEFAULT");
    const [price, changePrice] = useState("DEFAULT");

    function handleName(nameSelector) {
        changeName(nameSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function handlePrice(priceSelector) {
        changePrice(priceSelector.target.value);
    }

    function updateItems() {
        const input = document.getElementById("search_input");
        props.function(name, order, price, input);
    }

    return (
        <>
            <Wrapper>
                <LogoImage src={Logo}/>
                <LogoText>Airport</LogoText>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <NavWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Search id="search_input" placeholder={""}/>
                        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding: '5px'}}/>
                    </div>
                </NavWrapper>
            </Wrapper>
            <HorLine/>
            <GlobalWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="name" onChange={handleName}>
                        <option value="DEFAULT">Choose filter</option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="DEFAULT">Choose order</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector id="price" onChange={handlePrice}>
                        <option value="DEFAULT">Choose price</option>
                        <option value="1">&lt;=500</option>
                        <option value="2">&gt;500</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton onClick={updateItems}>Apply</ApplyButton>
            </GlobalWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}
