'use strict';

exports.BattlePokedex = {
	unown: {
		inherit: true,
		baseStats: {hp: 75, atk: 75, def: 75, spa: 75, spd: 75, spe: 75},
		abilities: {0: "Protean"},
	},
	pyukumuku: {
		inherit: true,
		baseStats: {hp: 60, atk: 30, def: 130, spa: 75, spd: 130, spe: 5},
		abilities: {0: "Prankster", 1: "Oblivious", H: "Unaware"},
	},
};
