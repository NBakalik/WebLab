import {LogoText, NavItem, Wrapper, Nav, Links, NavWrapper, LogoImage} from './Header.styles'
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";
import Logo from "../../images/logo.png"

export function Header() {
    return (
        <Wrapper>
            <LogoImage src={Logo}/>
            <LogoText>Airport</LogoText>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <NavWrapper>
                <Links>
                    <InstagramOutlined style={{margin: '10px'}}/>
                    <YoutubeOutlined style={{margin: '10px'}}/>
                    <FacebookOutlined style={{margin: '10px'}}/>
                </Links>
            </NavWrapper>
        </Wrapper>
    );

}



