'use strict';

exports.BattleMovedex = {
	"magicalpunch": {
		num: -9000,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "magicalpunch",
		name: "Magical Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: [2, 5],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Power-Up Punch", target);
		},
		secondary: false,
		target: "normal",
		type: "Fairy",
		zMovePower: 100,
		contestType: "Cute",
	},
	"pitfall": {
		num: -9001,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "pitfall",
		isViable: true,
		name: "Pitfall",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dig", target);
		},
		target: "any",
		type: "Ground",
		zMovePower: 160,
		contestType: "Tough",
	},
	"psychoboost": {
		inherit: true,
		basePower: 130,
	},
	"prismaticlaser": {
		inherit: true,
		type: "Cosmic",
	},
	"cometpunch": {
		inherit: true,
		type: "Cosmic",
	},
	"meteormash": {
		inherit: true,
		type: "Cosmic",
	},
	"moonblast": {
		inherit: true,
		type: "Cosmic",
	},
	"wish": {
		inherit: true,
		type: "Cosmic",
	},
	"healingwish": {
		inherit: true,
		type: "Cosmic",
	},
	"moonlight": {
		inherit: true,
		type: "Cosmic",
	},
	"morningsun": {
		inherit: true,
		type: "Cosmic",
	},
};
