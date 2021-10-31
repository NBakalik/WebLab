import {Image, Label, Text, TextWrapper, Wrapper} from './DestinationItems.styles'
import Bangkok from "../../images/city/bangkok.jpg"
import NewYork from "../../images/city/newYork.jpg"
import Venice from "../../images/city/venice.jpg"
import Colombo from "../../images/city/colombo.jpg"
import {Button} from "../Home/Home.styles";

export function DestinationItems() {
    return (
        <div>
            <Wrapper>
                <Image src={Bangkok}/>
                <TextWrapper>
                    <Label>Bangkok</Label>
                    <Text>Sights, sounds and smells? Does it enlighten, enrich and entertain? Book a cheap flight to
                        Bangkok, Thailand.</Text>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <TextWrapper style={{textAlign: 'right'}}>
                    <Label>New York</Label>
                    <Text>Discover all the great things to do and see in New York. Book online your safe and guided
                        tour.</Text>
                </TextWrapper>
                <Image src={NewYork}/>
            </Wrapper>
            <Wrapper>
                <Image src={Venice}/>
                <TextWrapper>
                    <Label>Venice</Label>
                    <Text>Explore the most famous sights of Venice, then sit back and relax on a gondola ride through
                        the peaceful canals.</Text>
                </TextWrapper>
            </Wrapper>
            <Wrapper>
                <TextWrapper style={{textAlign: 'right'}}>
                    <Label>Colombo</Label>
                    <Text>Explore the sights of Colombo, from the commercial district and oriental bazaar, to sacred
                        temples and mosques.</Text>
                </TextWrapper>
                <Image src={Colombo}/>
            </Wrapper>
            <Button>Read more</Button>
        </div>
    );
}
