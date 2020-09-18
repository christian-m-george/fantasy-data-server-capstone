const playerDataService = {
  insertPlayer(knex, newPlayer) {
    // console.log(newPlayer, "this is log");
    newPlayer.map((player) => {
      return knex
        .raw(
          `
			INSERT INTO public.players
			("team",
			 "player_name",
			 "position",
			"average_draft_position",
			"average_draft_position_ppr",
			"bye_week",
			"last_season_fantasy_points",
			"projected_fantasy_points",
			"player_id")
			VALUES (
				'${player.Team}',
				'${player.Name.replace("'"," ")}',
				'${player.Position}',
				'${player.AverageDraftPosition}',
				'${player.AverageDraftPositionPPR}',
				'${player.ByeWeek}',
				'${player.LastSeasonFantasyPoints}',
				'${player.ProjectedFantasyPoints}',
				'${player.PlayerID}'
				)
				ON CONFLICT("player_id") DO NOTHING;
 		`
        )
        .then((rows) => {
          return rows;
        });
	});
	return "done"
  },

  getAllPlayers(knex) {
    // console.log(name);
    return knex.from("players").select('*')
  },

  getByName(knex, name) {
    console.log(name);
    return knex
      .from("movies")
      .select("*")
      .where("name", "LIKE", `%${name}%`)
      .first();
  },
};

module.exports = playerDataService;
