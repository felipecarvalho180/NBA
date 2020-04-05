
import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { BasketballBall } from '@styled-icons/fa-solid/BasketballBall';
import { Tshirt } from '@styled-icons/fa-solid/Tshirt';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { Trophy } from '@styled-icons/fa-solid/Trophy';

import { WHITE } from '../variables/Variables';

const iconBaseStyle = css`
  height: 20px;
  width: 20px;
  padding: 5px;
  border: 1px solid ${ WHITE };
  border-radius: 5px;
  color: ${ WHITE };
  ${ transitions(['color', 'border', 'background-color'], 'ease-in-out .5s') };
`;

export const BasketballIcon = styled(BasketballBall)`
  ${ iconBaseStyle }
`;

export const TShirtIcon = styled(Tshirt)`
  ${ iconBaseStyle }
`;

export const CalendarCheckIcon = styled(CalendarCheck)`
  ${ iconBaseStyle }
`;

export const TrophyIcon = styled(Trophy)`
  ${ iconBaseStyle }
`;