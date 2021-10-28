import {Image, Text, Wrapper} from "./Item.styles";

export function Item(props) {
    return (
        <Wrapper>
            <Image src={props.model}></Image>
            <Text>{props.name}</Text>
        </Wrapper>
    );
}
