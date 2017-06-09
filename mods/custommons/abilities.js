'use strict';

exports.BattleAbilities = {
"stancechange": {
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
		onBeforeMovePriority: 0.5,
		onBeforeMove: function (attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Special') {
      
      } else if (move.category === 'Psysical') {
      
      },
		id: "stancechange",
		name: "Stance Change",
		rating: 5,
		num: 176,
	},
  };
