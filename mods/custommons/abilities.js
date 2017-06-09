'use strict';

exports.BattleAbilities = {
	"modifyprogram": {
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Malwarrior' || attacker.transformed) return;
			if (move.category === 'Special') {
				attacker.formeChange('Malwarrior-Mage');
				this.add('-formechange', attacker, 'Malwarrior-Mage', '[from] ability: Modify Program');
			} else if (move.category === 'Psysical') {
				attacker.formeChange('Malwarrior-Fighter');
				this.add('-formechange', attacker, 'Name-Fighter', '[from] ability: Modify Program');
			} else if (move.category === 'Status') {
				attacker.formeChange('Malwarrior');
				this.add('-formechange', attacker, 'Malwarrior', '[from] ability: Modify Program');
			},
		},
		id: "modifyprogram",
		name: "Modify Program",
		rating: 5,
		num: -1,
	},
};
