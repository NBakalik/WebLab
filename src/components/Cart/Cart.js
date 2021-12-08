import {Button, ButtonWrapper, ItemsWrapper, Label, Wrapper} from "./Cart.styles";
import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";
import {useState} from "react";
import {Checkout} from "../Checkout/Checkout";

export function Cart() {
    const items = useSelector((state) => state.items);
    const [view, toggle] = useState(false);

    function toggleView() {
        toggle(!view);
    }

    if (!view) {
        return (
            <Wrapper>
                <Label>
                    Shopping cart
                </Label>
                <ItemsWrapper>
                    {items.map(item => (
                        <CartItem key={item.name} name={item.name} price={item.price}
                                  peopleAmount={item.peopleAmount}/>))}
                </ItemsWrapper>
                <ButtonWrapper>
                    <Button>Back to Catalog</Button>
                    <Button onClick={toggleView}>Continue</Button>
                </ButtonWrapper>
            </Wrapper>
        );
    } else {
        return <Checkout func={toggleView}/>
    }
}
