import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  background: ${ props => props.theme.primary };
`;

export default Button;