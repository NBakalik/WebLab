import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  border-radius: 25px;
  padding: 10px;
  text-align: center;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

export const Image = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 15px;
`

export const Text = styled.p`
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 10px;
`

