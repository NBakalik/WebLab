import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 600px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const CheckoutText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  align-self: center;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 350;
  font-size: 22px;
`

export const ErrorText = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 350;
  color: red;
  margin: 0;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: solid 1px;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BackButton = styled.button`
  margin-top: 30px;
  padding: 18px 32px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  width: 50%;
  margin-right: 45px;
  align-self: center;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`
export const ContinueButton = styled.button`
  margin-top: 30px;
  padding: 18px 32px;
  background-color: #686868;
  border: none;
  color: white;
  border-radius: 10px;
  width: 50%;
  margin-left: 45px;
  align-self: center;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

export const Image = styled.img`
  width: 500px;
  height: 500px;
  align-self: center;
`