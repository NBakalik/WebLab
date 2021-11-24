import {
    Wrapper,
    Image,
    Text,
    Price,
    Button,
    Counter,
    CounterWrapper,
    PeopleText,
    ButtonWrapper
} from "./CartItem.styles";
import {CloseOutlined} from '@ant-design/icons'
import Bangkok from "../../images/city/bangkok.jpg";
import NewYork from "../../images/city/newYork.jpg";
import Colombo from "../../images/city/colombo.jpg";
import Venice from "../../images/city/venice.jpg";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/actions";

export function CartItem(item) {
    const [peopleAmount, change] = useState(1);
    const dispatch = useDispatch();

    function decrement() {
        if (peopleAmount > 1)
            change(peopleAmount - 1);
    }

    function increment() {
        change(peopleAmount + 1);
    }

    function returnImage(name) {
        if (name == "Bangkok")
            return Bangkok;
        if (name == "New York")
            return NewYork;
        if (name == "Colombo")
            return Colombo;
        if (name == "Venice")
            return Venice;
    }

    function removeItem(name) {
        dispatch(deleteItem({name}))
    }

    return (
        <>
            <Wrapper>
                <Image src={returnImage(item.name)}/>
                <Text>{item.name}</Text>
                <CounterWrapper>
                    <PeopleText>Count of people:</PeopleText>
                    <ButtonWrapper>
                        <Button onClick={decrement}>-</Button>
                        <Counter>{peopleAmount}</Counter>
                        <Button onClick={increment}>+</Button>
                    </ButtonWrapper>
                </CounterWrapper>
                <Price>Price: {item.price * peopleAmount}</Price>
                <CloseOutlined style={{alignSelf: "flex-start"}} onClick={() => removeItem(item.name)}/>
            </Wrapper>
        </>
    );
}
