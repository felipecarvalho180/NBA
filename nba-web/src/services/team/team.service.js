
import httpClient from '../../client/http-client/HttpClient';
import Team from '../../model/team/TeamModel';

const getTeams = async () => {
  let response = await httpClient.get({
    path: 'https://api.sportsdata.io/v3/nba/scores/json/teams'
  });
  
  const result = response.data.map(rd => (new Team({
    ...rd,
    TeamId: rd.NbaDotComTeamID,
    Logo: rd.WikipediaLogoUrl
  })));

  return result;
};

export default {
  getTeams,
};