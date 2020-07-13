const watchlistDataService = {
	getWatchlistByUserId(knex, userId) {
		return knex
		  .from("watchlist")
		  .select("playerId")
		  .where("userId", "LIKE", `%${userId}%`)
		  .first();
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
	deletePlayer(knex, id) {
		return knex('watchlist')
			.where({
				id
			})
			.delete()
	},
};

module.exports = watchlistDataService;
