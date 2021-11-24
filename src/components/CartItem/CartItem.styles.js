import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 32px;
  margin: 20px;
`

export const Text = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  margin: 0 0 0 32px;
  font-size: 32px;
  flex: 1;
`

export const Price = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  margin: 0 20px 0 0;
  font-size: 32px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
`

export const PeopleText = styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  margin: 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Counter = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 32px;
  margin: 10px 10px;
`

export const Button = styled.button`
  padding: 18px 22px;
  background-color: #f3f3f3;
  border: solid #c4c4c4 1px;
  border-radius: 10px;
  margin: 10px 10px;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`