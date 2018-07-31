import React, { Component } from 'react';
import styled from 'styled-components';

class Label extends Component {
  render(props){
    return(
      <LabelCom {...this.props}>Hello, storybook!</LabelCom>
    )
  }
}

const LabelCom = styled.div`
  color: #fff;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  text-align:center;
  background: ${(props) => {
    return props.type === "success" ? "green" : "red"
  }};
`;

export default Label;