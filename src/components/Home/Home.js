import {
    Button, Facts,
    FactsWrapper,
    HeroWrapper,
    Image,
    ImageText,
    ItemList,
    ItemsLabel,
    Label,
    TextWrapper, Fact, FactLabel, FactText
} from "./Home.styles";
import Airport from "../../images/airport.jpg"
import AirbusFuture from "../../images/airbusFuture.jpg"
import AirbusZero from "../../images/AirbusZEROe.png"
import Gulfstream from "../../images/gulfstrim.jpg"
import {HomeItem} from "../HomeItem/HomeItem";
import {DestinationItems} from "../DestinationItems/DestinationItems";

export function Home() {
    return (
        <div>
            <HeroWrapper>
                <TextWrapper>
                    <Label>"Kyiv" International Airport</Label>
                    <ImageText>Your gateway to the world</ImageText>
                </TextWrapper>
                <Image src={Airport}/>
            </HeroWrapper>
            <ItemsLabel>Our planes</ItemsLabel>
            <ItemList>
                <HomeItem model={AirbusFuture} name={'AirbusFuture'}/>
                <HomeItem model={AirbusZero} name={'Airbus ZeroE'}/>
                <HomeItem model={Gulfstream} name={'Gulfstream ZeroE'}/>
            </ItemList>
            <Button>View more</Button>
            <FactsWrapper>
                <ItemsLabel>Facts</ItemsLabel>
                <Facts>
                    <Fact>
                        <FactLabel>450</FactLabel>
                        <FactText>Planes</FactText>
                    </Fact>
                    <Fact>
                        <FactLabel>93</FactLabel>
                        <FactText>Shops</FactText>
                    </Fact>
                    <Fact>
                        <FactLabel>25</FactLabel>
                        <FactText>Terminals</FactText>
                    </Fact>
                    <Fact>
                        <FactLabel>670</FactLabel>
                        <FactText>Parking Lots</FactText>
                    </Fact>
                </Facts>
            </FactsWrapper>
            <ItemsLabel style={{marginTop: '200px'}}>Your Destinations</ItemsLabel>
            <DestinationItems/>
        </div>
    );
}
