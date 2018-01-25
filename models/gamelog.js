const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamelogSchema = new Schema({
    game_season: { type: Number },
	player_team: { type: String },
	opposing_team: { type: String },
	home_or_away: { type: Boolean },
	gs: { type: Boolean },
	mp: { type: Number },
	pts: { type: Number },
	fg: { type: Number },
	fga: { type: Number },
	fg3: { type: Number },
	fg3a: { type: Number },
	ft: { type: Number },
	fta: { type: Number },
	o_reb: { type: Number },
	d_reb: { type: Number },
	ast: { type: Number },
	stl: { type: Number },
	blk: { type: Number },
	tov: { type: Number },
	pf: { type: Number },
	plus_minus: { type: Number },
});

mongoose.model('gamelog', GamelogSchema);