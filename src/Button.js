import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  background: ${ (props) => {
    return props.theme[props.bgColor]
  }};
`;

export default Button;