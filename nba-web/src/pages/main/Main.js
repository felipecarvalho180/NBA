
import React from 'react';

import { Provider } from 'react-redux';
import styled from 'styled-components';

import SideBar from '../../components/sidebar/SideBar';
import Routes from '../../routes/Routes';
import GlobalStyle from '../../style/global-style/GlobalStyle';
import store from '../../store/store';

export default function Main() {
  return (
    <Wrapper>
      <Provider store={ store }>
        <GlobalStyle />
        <SideBar />
        <ChildWrapper>
          <Routes />
        </ChildWrapper>
      </Provider>
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