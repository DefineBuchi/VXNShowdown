'use strict';

exports.BattleMovedex = {
	"batonpass": {
		inherit: true,
		selfSwitch: true,
	},
	"hiddenpowerfairy": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		isViable: true,
		name: "Hidden Power Fairy",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Fairy",
		contestType: "Clever",
	},
	"hiddenpowernormal": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Normal",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
	},
	"hiddenpower": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			move.type = pokemon.hpType || 'Normal';
		},
	},
};
