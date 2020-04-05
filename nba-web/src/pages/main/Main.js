
import React from 'react';
import styled from 'styled-components';

import SideBar from '../../components/sidebar/SideBar';
import Routes from '../../routes/Routes';
import GlobalStyle from '../../style/global-style/GlobalStyle';

export default function Main() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SideBar />
      <ChildWrapper>
        <Routes />
      </ChildWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ChildWrapper = styled.div`
  width: 100%;
`;