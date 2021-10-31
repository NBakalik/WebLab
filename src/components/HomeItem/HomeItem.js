import {Image, Text, Wrapper} from "./HomeItem.styles";

export function HomeItem({name, model}) {
    return (
        <Wrapper>
            <Image src={model}/>
            <Text>{name}</Text>
        </Wrapper>
    );
}
