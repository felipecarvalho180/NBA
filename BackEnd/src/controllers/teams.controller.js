const nbaTeamList = require('../../nbaTeams.json');
const Teams = require('../models/teams.model');

module.exports = {
	async index(req, res) {
		const teams = await Teams.find();

		return res.json(teams);
	},

	async store(req, res) {
		const list = [...nbaTeamList];
		
		let newList = [];
		list.filter(team => {
			if (team.isNBAFranchise === true) {
				newList.push(team);
			}
		});

		let i = 0;
		const insertTeams = () => {
			Teams.create(
				newList[i]
			);
			i++
			console.log({ team: i });
			setTimeout(() => {
				if (i < newList.length) {
					insertTeams();
				} else {
					return res.json({ ok: true });
				}
			}, 500);
		}

		insertTeams();
	}
};