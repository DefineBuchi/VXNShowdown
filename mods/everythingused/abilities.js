'use strict';

exports.BattleAbilities = {
	"slushrush": {
		inherit: true,
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		
	},
};
