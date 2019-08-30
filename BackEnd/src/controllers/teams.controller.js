const nbaTeamList = require('../../nba.json');
const Teams = require('../models/teams.model');

module.exports = {
    async index(req, res) {
        const teams = await Teams.find();

        return res.json(teams);
    },

    async store(req, res) {
        const list = [...nbaTeamList];
        
        list.forEach( async team => {
            if(team.isNBAFranchise === true) {
                await Teams.create({
                    ...team
                })
            }
        })
        
        return res.json({ ok });
    }
};