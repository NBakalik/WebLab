import {LogoText, NavItem, Wrapper, Nav, Links, Search, NavWrapper, LogoImage} from './Header.styles'
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";
import Logo from "../../images/logo.png"
import SearchIcon from "../../images/480px-Search_Icon.svg.png"

export function Header(props) {
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
                {check(props.isHomePage)}
            </NavWrapper>
        </Wrapper>
    );
}

function check(isHomePage) {
    if (isHomePage) {
        return <Links>
            <InstagramOutlined style={{margin: '10px'}}/>
            <YoutubeOutlined style={{margin: '10px'}}/>
            <FacebookOutlined style={{margin: '10px'}}/>
        </Links>
    }
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Search id={"search_button"}/>
        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding:'5px'}}/>
    </div>
}

