'use strict';

exports.BattleAbilities = {
	"modifyprogram": {
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Name' || attacker.transformed) return;
			if (move.category === 'Special') {
				pokemon.formeChange('Name-Mage');
				this.add('-formechange', attacker, 'Name-Mage', '[from] ability: Modify Program');
			} else if (move.category === 'Psysical') {
				attacker.formeChange('Name-Fighter');
				this.add('-formechange', attacker, 'Name-Fighter', '[from] ability: Modify Program');
			} else if (move.category === 'Status') {
				attacker.formeChange('Name');
				this.add('-formechange', attacker, 'Name', '[from] ability: Modify Program');
			},
		},
		id: "modifyprogram",
		name: "Modify Program",
		rating: 5,
		num: -1,
	},
};
