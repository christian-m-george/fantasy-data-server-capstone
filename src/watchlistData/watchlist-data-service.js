const watchlistDataService = {
	getWatchlistByUserId(knex, user_id) {
		return knex
		  .from("watchlist")
		  .select("player_id")
		  .where("user_id", user_id)
	  },
	insertPlayer(knex, newPlayer) {
		return knex
			.insert(newPlayer)
			.into('watchlist')
			.returning('*')
			.then(rows => {
				return rows[0]
			})
	},
	deletePlayer(knex, user_id, player_id) {
		return knex('watchlist')
			.where({
				user_id, player_id
			})
			.delete()
	},
};

module.exports = watchlistDataService;
