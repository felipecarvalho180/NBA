
import React, {Component} from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Label>Thainá</Label>
        <Label>Eu te amo</Label>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

const Label = styled.Text`
  color: #000;
  font-size: 20px;
  align-self: center;
  font-family: Flood;
`;

export default App;
