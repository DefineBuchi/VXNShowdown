'use strict';

exports.BattleAbilities = {
	"magicalpower": {
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpAPriority: 5,
		onModifySpA: function (spa) {
			return this.chainModify(2);
		},
		id: "magicalpower",
		name: "Magical Power",
		rating: 5,
		num: -100,
	},
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
