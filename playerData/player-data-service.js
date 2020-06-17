
const playerDataService = {

	insertPlayer(knex, newPlayer) {
		console.log(newPlayer)
		return knex.raw(`
		INSERT INTO players ("Team", "PlayerName" ,"Position", "AverageDraftPosition", "AverageDraftPositionPPR", "ByeWeek", "LastSeasyFantasyPoints", "ProjectedFantasyPoints", "PlayerID") 
		VALUES (${newPlayer.Team},
				${newPlayer.Name},
				${newPlayer.Position},
				${newPlayer.AverageDraftPosition},
				${newPlayer.AverageDraftPositionPPR},
				${newPlayer.ByeWeek},
				${newPlayer.LastSeaonFantasyPoints},
				${newPlayer.ProjectedFantasyPoints},
				${newPlayer.FantasyPlayerKey}
				)
				ON CONFLICT("Team", "Position") DO NOTHING;
 		`)
			.then(rows => {

				return rows
			})
	},

	getById(knex, id) {
		return knex
			.from('movies')
			.select('*')
			.where('movie_db_id', id)
			.first()
	},

	getByName(knex, name) {
		console.log(name)
		return knex
			.from('movies')
			.select('*')
			.where('name', 'LIKE', `%${name}%`)
			.first()
	},
}

module.exports = playerDataService;