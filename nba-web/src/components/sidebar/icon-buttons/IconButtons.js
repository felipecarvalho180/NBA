
import React from 'react';
import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { pointer } from '../../../style/helpers/Helpers';
import { 
  BasketballIcon, 
  TShirtIcon, 
  CalendarCheckIcon, 
  TrophyIcon
} from '../../../style/icons/Icons';

const IconButtons = () => (
  <Wrapper>
    <ICBasketballIcon />
    <ICTShirtIcon />
    <ICCalendarIcon />
    <ICTrophyIcon />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  margin-top: 20px;
`;

const hoverStyle = css`
  color: red;
  border: solid 1px red;
  background-color: white;
`;

const ICBasketballIcon = styled(BasketballIcon)`
  margin-bottom: 10px;
  ${ pointer };

  :hover {
    ${ hoverStyle };
  };
`;

const ICTShirtIcon = styled(TShirtIcon)`
  margin-bottom: 10px;
  ${ pointer };

  :hover {
    ${ hoverStyle }
  };
`;

const ICCalendarIcon = styled(CalendarCheckIcon)`
  margin-bottom: 10px;
  ${ pointer };

  :hover {
    ${ hoverStyle }
  };
`;

const ICTrophyIcon = styled(TrophyIcon)`
  ${ pointer };
  
  :hover {
    ${ hoverStyle }
  };
`;

export default IconButtons;