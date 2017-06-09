'use strict';

exports.BattlePokedex = {
	pyrix: {
		num: -9000,
		species: "Pyrix",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 110, atk: 60, def: 85, spa: 120, spd: 90, spe: 70},
		abilities: {0: "Intimidate", 1: "Storm Drain", H: "Simple"},
		heightm: 0.5,
		weightkg: 0.1,
		color: "Red",
		eggGroups: ["Amorphous"],
	},
	malwarrior: {
		num: -9001,
		species: "Malwarrior",
		baseForme: "Observer",
		types: ["Electric", "Normal"],
		baseStats: {hp: 100, atk: 75, def: 120, spa: 75, spd: 120, spe: 100},
		abilities: {0: "Modify Program"},
		heightm: 1.7,
		weightkg: 1,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Mage", "Fighter"],
	},
	malwarriormage: {
		num: -9001,
		species: "Malwarrior-Mage",
		baseSpecies: "Malwarrior",
		forme: "Mage",
		formeLetter: "M",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 100, atk: 20, def: 120, spa: 160, spd: 50, spe: 100},
		abilities: {0: "Stance Change"},
		heightm: 1.7,
		weightkg: 1.5,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	malwarriorfighter: {
		num: -9001,
		species: "Malwarrior-Fighter",
		baseSpecies: "Malwarrior",
		forme: "Fighter",
		formeLetter: "F",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 100, atk: 160, def: 50, spa: 20, spd: 120, spe: 100},
		abilities: {0: "Stance Change"},
		heightm: 1.7,
		weightkg: 2,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	naucess: {
		num: -9002,
		species: "Naucess",
		types: ["Fairy", "Poison"],
		baseStats: {hp: 110, atk: 100, def: 60, spa: 100, spd: 60, spe: 75},
		abilities: {0: "Queenly Majesty", 1: "Moody", H: "Firestarter"},
		heightm: 1,
		weightkg: 15,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
};
