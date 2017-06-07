'use strict';

exports.BattlePokedex = {
	unown: {
		inherit: true,
		baseStats: {hp: 75, atk: 75, def: 75, spa: 75, spd: 75, spe: 75},
		abilities: {0: "Protean"},
	},
	pyukumuku: {
		inherit: true,
		baseStats: {hp: 60, atk: 30, def: 130, spa: 60, spd: 130, spe: 5},
		abilities: {0: "Prankster", 1: "Oblivious", H: "Unaware"},
	},
	guzzlord: {
		inherit: true,
		baseStats: {hp: 200, atk: 101, def: 70, spa: 97, spd: 70, spe: 43},
	},
	abomasnow: {
		inherit: true,
		abilities: {0: "Snow Warning", H: "Intimidate"},
	},
	tyranitar: {
		inherit: true,
		abilities: {0: "Sand Stream", H: "Intimidate"},
	},
	
};
