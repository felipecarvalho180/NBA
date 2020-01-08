
import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

export default function standing() {
  return (
    <Wrapper>
      <h1>Classificação</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;