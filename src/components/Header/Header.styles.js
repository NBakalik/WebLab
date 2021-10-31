import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
`
export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  margin: 0 20px 0 5%;
`
export const LogoText = styled.a`
  color: black;
  text-decoration: none;
  left: 50%;
`
export const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  text-align: center;
  flex: 5;
`
export const NavItem = styled.li`
  margin: 10px 30px;
  text-align: center;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`
export const NavWrapper = styled.div`
  width: 200px;
  flex: 1;
`

export const Search = styled.input`
  border-color: #c4c4c4;
  border-style: solid;
  border-radius: 10px;
  color: #c4c4c4;
  padding: 8px 8px;
  margin: 0;
`

