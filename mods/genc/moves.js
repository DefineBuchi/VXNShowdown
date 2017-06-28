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
		contestType: "Beautiful",
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
	"ultimatesupernova": {
		num: -9004,
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "ultimatesupernova",
		isViable: true,
		name: "Ultimate Supernova",
		pp: 1,
		priority: 0,
		flags: {},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Cosmic Power", target);
			this.add('-anim', source, "Giga Impact", target);
			this.add('-anim', target, "Explosion", source);
		},
		isZ: "cosmiumz",
		secondary: false,
		target: "normal",
		type: "Cosmic",
		contestType: "Clever",
	},
	"psychoboost": {
		inherit: true,
		basePower: 130,
	},
	"prismaticlaser": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"cometpunch": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"meteormash": {
		inherit: true,
		type: "Cosmic",
		secondary: false,
		accuracy: 100,
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		flags: {contact: 1, protect: 1, mirror: 1},
		contestType: "Clever",
	},
	"moonblast": {
		inherit: true,
		type: "Cosmic",
		basePower: 90,
		contestType: "Clever",
	},
	"wish": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"healingwish": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"moonlight": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"morningsun": {
		inherit: true,
		type: "Cosmic",
		contestType: "Clever",
	},
	"steampunkslam": {
		num: -9002,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
		shortDesc: "20% chance to raise the user's Attack by 1.",
		id: "steampunkslam",
		isViable: true,
		name: "Steampunk Slam",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Shift Gear", target);
			this.add('-anim', source, "Heavy Slam", target);
		},
		target: "normal",
		type: "Steel",
		zMovePower: 175,
		contestType: "Cool",
	},
	"blindingbeam": {
		num: -9003,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1.",
		id: "blindingbeam",
		isViable: true,
		name: "Blinding Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Light of Ruin", target);
		},
		target: "normal",
		type: "Fairy",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"disruptionbeacon": {
		num: -9005,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Changes the foe's ability to Truant on switch in.",
		shortDesc: "Changes the foe's ability to Truant on switch in.",
		id: "disruptionbeacon",
		isViable: true,
		name: "Disruption Beacon",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'disruptionbeacon',
		effect: {
			// this is a side condition
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Disruption Beacon');
			},
			onSwitchIn: function (pokemon) {
				let bannedAbilities = {
					comatose: 1,
					multitype: 1,
					stancechange: 1,
					truant: 1,
					rkssystem: 1,
				};
				if (bannedAbilities[pokemon.ability]) {
					return false;
				} else {
					let oldAbility = pokemon.setAbility('truant');
					if (oldAbility) {
						this.add('-ability', pokemon, 'Truant', '[from] move: Disruption Beacon');
						return;
					}
					return false;
				},
			},
		},
		secondary: false,
		target: "foeSide",
		type: "Steel",
		zMoveBoost: {atk: 1},
		contestType: "Tough",
	},
};
