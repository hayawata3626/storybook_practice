import styled from 'styled-components';

const Button = styled.button`
  width: ${ (props) => props.width ? props.width : '150px'};
  height: ${ (props) => props.height ? props.height : '50px'};
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  color: ${ (props) => props.color ? props.theme[props.color] : props.theme['onPrimary']};
  background: ${ (props) => props.bgColor ? props.theme[props.bgColor] : props.theme['primary']};
`;

export default Button;