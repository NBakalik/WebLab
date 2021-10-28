import {LogoText, NavItem, Wrapper, Nav, Links} from './Header.styles'
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'

export function Header() {
    return (
        <Wrapper>
            <LogoText>Airport</LogoText>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog</NavItem>
                <NavItem>Cart</NavItem>
            </Nav>
            <Links>
                <InstagramOutlined style={{margin: '10px'}}/>
                <YoutubeOutlined style={{margin: '10px'}}/>
                <FacebookOutlined style={{margin: '10px'}}/>
            </Links>
        </Wrapper>
    );
}
