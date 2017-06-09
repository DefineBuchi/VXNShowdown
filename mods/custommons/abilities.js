'use strict';

exports.BattleAbilities = {
	"firestarter": {
		shortDesc: "This Pokemon's Fire-type attacks have their power multiplied by 1.5.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Firestarter boost');
				return this.chainModify(1.5);
			}
		},
		id: "firestarter",
		name: "Firestarter",
		rating: 4,
		num: -101,
	},
};
