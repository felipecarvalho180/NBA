
import React from 'react';
import styled from 'styled-components';

import { BLUE } from '../../style/variables/Variables';
import NBA_Logo from '../../assets/NBAL-logo.png';

export default function SideBar() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 100vh;
  width: 80px;
  align-self: flex-start;
  background-color: ${ BLUE };
`;

const Logo = styled.img.attrs({
  src: NBA_Logo,
})`
  height: 127px;
  width: 56px;
`;