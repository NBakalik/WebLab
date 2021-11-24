import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: 68px;
  text-align: center;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 220px;
`

export const Button = styled.button`
  padding: 18px 32px;
  background-color: #f3f3f3;
  border: solid #c4c4c4 1px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

