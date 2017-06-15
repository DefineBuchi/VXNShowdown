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
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			punch: 1,
		},
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
	"lightofruin": {
		inherit: true,
		isUnreleased: false,
	},
};
