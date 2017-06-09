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
		baseStats: {hp: 90, atk: 97, def: 85, spa: 92, spd: 85, spe: 70},
	},
	tyranitar: {
		inherit: true,
		abilities: {0: "Sand Stream", H: "Intimidate"},
		baseStats: {hp: 100, atk: 124, def: 110, spa: 95, spd: 100, spe: 81},
	},
	tyranitarmega: {
		inherit: true,
		baseStats: {hp: 100, atk: 164, def: 150, spa: 95, spd: 125, spe: 76},
	},
};
