
import React from 'react';
import styled from 'styled-components';
import { RED, WHITE, BLUE_OPACITY } from '../../style/variables/Variables';

// import { Container } from './styles';

export default function teams() {
  return (
    <Wrapper>
      <Title>Select your team</Title>
    </Wrapper>
  );
} 

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${ BLUE_OPACITY };
`;

const Title = styled.div`
  font-size: 25px;
  color: ${ RED };
  text-transform: capitalize;
  text-shadow: -1px 0 ${ WHITE }, 0 1px ${ WHITE }, 1px 0 ${ WHITE }, 0 -1px ${ WHITE };
`;