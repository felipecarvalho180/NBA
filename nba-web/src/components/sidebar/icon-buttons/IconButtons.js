
import React from 'react';
import styled from 'styled-components';

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

const ICBasketballIcon = styled(BasketballIcon)`
  margin-bottom: 10px;
  ${ pointer }
`;

const ICTShirtIcon = styled(TShirtIcon)`
  margin-bottom: 10px;
  ${ pointer }
`;

const ICCalendarIcon = styled(CalendarCheckIcon)`
  margin-bottom: 10px;
  ${ pointer }
`;

const ICTrophyIcon = styled(TrophyIcon)`
  ${ pointer }
`;

export default IconButtons;