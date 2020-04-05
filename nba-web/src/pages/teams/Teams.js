
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { Creators as TeamSagaActions } from '../../store/sagas/team/team.saga';
import { RED, WHITE, BLUE_OPACITY } from '../../style/variables/Variables';

// import { Container } from './styles';

const Teams = () => {
  const {
    asyncGetTeams,
  } = bindActionCreators({
    asyncGetTeams: TeamSagaActions.asyncGetTeams,
  }, useDispatch());

  const [ teams, setTeams ] = useState(null);

  useEffect(() => {
    asyncGetTeams({ }, {
      onSuccess: result => {
        setTeams(result);
      }
    });
  });

  return (
    <Wrapper>
      <Title>Select your team</Title>
      <TeamsWrapper>
        { teams && teams.map(t => (
          <TeamImageWrapper
            key={ t.TeamId }
          >
            <TeamImage 
              src={ t.Logo }
            />
          </TeamImageWrapper>
        )) }
      </TeamsWrapper>
    </Wrapper>
  );
} 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const TeamsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 350px;
`;

const TeamImageWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default Teams;