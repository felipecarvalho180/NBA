
class Team {
  constructor({
    City,
    Conference,
    Division,
    Key,
    Name,
    TeamId,
    PrimaryColor,
    SecondaryColor,
    TertiaryColor,
    StadiumID,
    Logo,
  }) {
    this.City = City;
    this.Conference = Conference;
    this.Division = Division;
    this.Key = Key;
    this.Name = Name;
    this.TeamId = TeamId;
    this.PrimaryColor = PrimaryColor;
    this.SecondaryColor = SecondaryColor;
    this.TertiaryColor = TertiaryColor;
    this.StadiumID = StadiumID;
    this.Logo = Logo;
  }
};

export default Team;