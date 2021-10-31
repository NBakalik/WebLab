import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 65px 100px;
  margin-bottom: 100px;
`

export const Image = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 25px;
`

export const TextWrapper = styled.div`
  padding: 60px;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 68px;
`

export const ImageText = styled.p`
  font-size: 24px;
  padding-left: 30px;
`

export const ItemsLabel = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 68px;
  text-align: center;
`

export const ItemList = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  margin-top: 30px;
  padding: 18px 32px;
  position: absolute;
  left: 50%;
  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  transform: translate(-50%, 0);

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

export const FactsWrapper = styled.div`
  margin-top: 200px;
`

export const Facts = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`

export const Fact = styled.div`
  display: flex;
  flex-direction: column;
`
export const FactLabel = styled.h3`
  font-size: 44px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`
export const FactText = styled.a`
  font-weight: 400;
`
