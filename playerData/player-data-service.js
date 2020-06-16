
const playerDataService = {

	insertPlayer(knex, newMovie) {
		return knex.raw(`
		INSERT INTO players ("Team", "PlayerName" ,"Position", "AverageDraftPosition", "AverageDraftPositionPPR", "ByeWeek", "LastSeasyFantasyPoints", "ProjectedFantasyPoints") 
		VALUES ('${newMovie.movie_db_id}', 
				'${newMovie.movie_title.replace(/["']/g, "")}', 
				'${newMovie.release_date}', 
				'${newMovie.average_rating}', 
				'${newMovie.genre}', 
				'${newMovie.overview.replace(/["']/g, "")}',
				'${newMovie.img}' 
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