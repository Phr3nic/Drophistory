'use strict';

const DefaultSettings = {
	enable: true,

	logMode: {
		party: true,
		self: true,
		file: true,
		chat: true
	}

	rarityColours: [
		'#ffffff', 	//white
		'#22ff00',	//green
		'#00ccff',	//blue
		'#ffcc00',	//yellow
		'#c63db6'	//mythical
	],

	whitelist: [
		//SoH Map
		206884,
	
		//Amarun's Relic I-V
		89040,
		89041,
		89042,
		89043,
		89044,

		//Ishara's Halidom I-V
		89140,
		89141,
		89142,
		89143,
		89144,

		//Exodor Belt/Mask Tokens
		209123,
		209124,
		209127,
	
		//Zenobia
		206976,
		206960,
	
		//Gear crates
		90923,
		206951,
		206953,
		206952,
		206950,
		209126,
		209125,
	
		//Warlord accs
		89805,
		89806,
		89807,
		89808,
		89898,
		89899,
		89900,
	
		//Resizing stones
		89809,
		89810,
		89901,
		89902,

		//Exodor Gear pieces
		89509,
		89510,
		89511,
		89512,
		89513,
		89514,
		89515,
		89516,
		89517,
		89518,
		89519,
		89520,
		89521,
		89522,
		89523,
		89524,
		89525,
		89526,
		89527,
		89528,
		89529,
		89530,
		89531,
		89532,
		89533,
		89534,
		89535,
		89536,
		89537,
		89538,
		89539,
		89540,
		89541,
		89542,
		89543,
		89544,
		89545,
		89546,
		89547,
		89548,
		89549,
		89550,
		89551,
		89552,
		89553,
		89554,
		89555,
		89556,
		89557,
		89558,
		89559,
		89560,
		89561,
		89562,
		89563,
		89564,
		89565,
		89566,
		89567,
		89568,
		89569,
		89570,
		89571,
		89572,
		89573,
		89574,
		89575,
		89576,
		89577,
		89578,
		89579,
		89580,
		89581,
		89582,
		89583,
		89584,
		89585,
		89586,
		89587,
		89588,
		89589,
		89590,
		89591,
		89592,
		89593,
		89594,
		89595,
		89596,
		89597,
		89598,
		89599,
		89600,
		89601,
		89602,
		89603,
		89604,
		89605,
		89606,
		89607,
		89608,
		89609,
		89610,
		89611,
		89612,
		89613,
		89614,
		89615,
		89616,
		89617,
		89618,
		89619,
		89620,
		89621,
		89622,
		89623,
		89624,
		89625,
		89626,
		89627,
		89628,
		89629,
		89630,
		89631,
		89632,
		89633,
		89634,
		89635,
		89636,
		89637,
		89638,
		89639,
		89640,
		89641,
		89642,
		89643,
		89644,
		89645,
		89646,
		89647,
		89648,
		89649,
		89650,
		89651,
		89652,
		89653,
		89654,
		89655,
		89656,
		89657,
		89658,
		89659,
		89660,
		89661,
		89662,
		89663,
		89664,
		89665,
		89666,
		89667,
		89668,
		89669,
		89670,
		89671,
		89672,
		89673,
		89674,
		89675,
		89676,
		89677,
		89678,
		89679,
		89680,
		89681,
		89682,
		89683,
		89684
	],
	exoItems: [
		{
			"id": 88867,
			"statString": " (0 stats)"
		},
		{
			"id": 88868,
			"statString": " (1 stat)"
		},
		{
			"id": 88869,
			"statString": " (2 stats)"
		},
		{
			"id": 88870,
			"statString": " (3 stats)"
		},
		{
			"id": 88871,
			"statString": " (0 stats)"
		},
		{
			"id": 88872,
			"statString": " (1 stat)"
		},
		{
			"id": 88873,
			"statString": " (2 stats)"
		},
		{
			"id": 88874,
			"statString": " (3 stats)"
		},
		{
			"id": 89509,
			"statString": " (0 stats)"
		},
		{
			"id": 89510,
			"statString": " (1 stat)"
		},
		{
			"id": 89511,
			"statString": " (2 stats)"
		},
		{
			"id": 89512,
			"statString": " (3 stats)"
		},
		{
			"id": 89513,
			"statString": " (0 stats)"
		},
		{
			"id": 89514,
			"statString": " (1 stat)"
		},
		{
			"id": 89515,
			"statString": " (2 stats)"
		},
		{
			"id": 89516,
			"statString": " (3 stats)"
		},
		{
			"id": 89517,
			"statString": " (0 stats)"
		},
		{
			"id": 89518,
			"statString": " (1 stat)"
		},
		{
			"id": 89519,
			"statString": " (2 stats)"
		},
		{
			"id": 89520,
			"statString": " (3 stats)"
		},
		{
			"id": 89521,
			"statString": " (0 stats)"
		},
		{
			"id": 89522,
			"statString": " (1 stat)"
		},
		{
			"id": 89523,
			"statString": " (2 stats)"
		},
		{
			"id": 89524,
			"statString": " (3 stats)"
		},
		{
			"id": 89525,
			"statString": " (0 stats)"
		},
		{
			"id": 89526,
			"statString": " (1 stat)"
		},
		{
			"id": 89527,
			"statString": " (2 stats)"
		},
		{
			"id": 89528,
			"statString": " (3 stats)"
		},
		{
			"id": 89529,
			"statString": " (0 stats)"
		},
		{
			"id": 89530,
			"statString": " (1 stat)"
		},
		{
			"id": 89531,
			"statString": " (2 stats)"
		},
		{
			"id": 89532,
			"statString": " (3 stats)"
		},
		{
			"id": 89533,
			"statString": " (0 stats)"
		},
		{
			"id": 89534,
			"statString": " (1 stat)"
		},
		{
			"id": 89535,
			"statString": " (2 stats)"
		},
		{
			"id": 89536,
			"statString": " (3 stats)"
		},
		{
			"id": 89537,
			"statString": " (0 stats)"
		},
		{
			"id": 89538,
			"statString": " (1 stat)"
		},
		{
			"id": 89539,
			"statString": " (2 stats)"
		},
		{
			"id": 89540,
			"statString": " (3 stats)"
		},
		{
			"id": 89541,
			"statString": " (0 stats)"
		},
		{
			"id": 89542,
			"statString": " (1 stat)"
		},
		{
			"id": 89543,
			"statString": " (2 stats)"
		},
		{
			"id": 89544,
			"statString": " (3 stats)"
		},
		{
			"id": 89545,
			"statString": " (0 stats)"
		},
		{
			"id": 89546,
			"statString": " (1 stat)"
		},
		{
			"id": 89547,
			"statString": " (2 stats)"
		},
		{
			"id": 89548,
			"statString": " (3 stats)"
		},
		{
			"id": 89549,
			"statString": " (0 stats)"
		},
		{
			"id": 89550,
			"statString": " (1 stat)"
		},
		{
			"id": 89551,
			"statString": " (2 stats)"
		},
		{
			"id": 89552,
			"statString": " (3 stats)"
		},
		{
			"id": 89553,
			"statString": " (0 stats)"
		},
		{
			"id": 89554,
			"statString": " (1 stat)"
		},
		{
			"id": 89555,
			"statString": " (2 stats)"
		},
		{
			"id": 89556,
			"statString": " (3 stats)"
		},
		{
			"id": 89557,
			"statString": " (0 stats)"
		},
		{
			"id": 89558,
			"statString": " (1 stat)"
		},
		{
			"id": 89559,
			"statString": " (2 stats)"
		},
		{
			"id": 89560,
			"statString": " (3 stats)"
		},
		{
			"id": 89561,
			"statString": " (0 stats)"
		},
		{
			"id": 89562,
			"statString": " (1 stat)"
		},
		{
			"id": 89563,
			"statString": " (2 stats)"
		},
		{
			"id": 89564,
			"statString": " (3 stats)"
		},
		{
			"id": 89565,
			"statString": " (0 stats)"
		},
		{
			"id": 89566,
			"statString": " (1 stat)"
		},
		{
			"id": 89567,
			"statString": " (2 stats)"
		},
		{
			"id": 89568,
			"statString": " (3 stats)"
		},
		{
			"id": 89569,
			"statString": " (0 stats)"
		},
		{
			"id": 89570,
			"statString": " (1 stat)"
		},
		{
			"id": 89571,
			"statString": " (2 stats)"
		},
		{
			"id": 89572,
			"statString": " (3 stats)"
		},
		{
			"id": 89573,
			"statString": " (0 stats)"
		},
		{
			"id": 89574,
			"statString": " (1 stat)"
		},
		{
			"id": 89575,
			"statString": " (2 stats)"
		},
		{
			"id": 89576,
			"statString": " (3 stats)"
		},
		{
			"id": 89577,
			"statString": " (0 stats)"
		},
		{
			"id": 89578,
			"statString": " (1 stat)"
		},
		{
			"id": 89579,
			"statString": " (2 stats)"
		},
		{
			"id": 89580,
			"statString": " (3 stats)"
		},
		{
			"id": 89581,
			"statString": " (0 stats)"
		},
		{
			"id": 89582,
			"statString": " (1 stat)"
		},
		{
			"id": 89583,
			"statString": " (2 stats)"
		},
		{
			"id": 89584,
			"statString": " (3 stats)"
		},
		{
			"id": 89585,
			"statString": " (0 stats)"
		},
		{
			"id": 89586,
			"statString": " (1 stat)"
		},
		{
			"id": 89587,
			"statString": " (2 stats)"
		},
		{
			"id": 89588,
			"statString": " (3 stats)"
		},
		{
			"id": 89589,
			"statString": " (0 stats)"
		},
		{
			"id": 89590,
			"statString": " (1 stat)"
		},
		{
			"id": 89591,
			"statString": " (2 stats)"
		},
		{
			"id": 89592,
			"statString": " (3 stats)"
		},
		{
			"id": 89593,
			"statString": " (0 stats)"
		},
		{
			"id": 89594,
			"statString": " (1 stat)"
		},
		{
			"id": 89595,
			"statString": " (2 stats)"
		},
		{
			"id": 89596,
			"statString": " (3 stats)"
		},
		{
			"id": 89597,
			"statString": " (0 stats)"
		},
		{
			"id": 89598,
			"statString": " (1 stat)"
		},
		{
			"id": 89599,
			"statString": " (2 stats)"
		},
		{
			"id": 89600,
			"statString": " (3 stats)"
		},
		{
			"id": 89601,
			"statString": " (0 stats)"
		},
		{
			"id": 89602,
			"statString": " (1 stat)"
		},
		{
			"id": 89603,
			"statString": " (2 stats)"
		},
		{
			"id": 89604,
			"statString": " (3 stats)"
		},
		{
			"id": 89605,
			"statString": " (0 stats)"
		},
		{
			"id": 89606,
			"statString": " (1 stat)"
		},
		{
			"id": 89607,
			"statString": " (2 stats)"
		},
		{
			"id": 89608,
			"statString": " (3 stats)"
		},
		{
			"id": 89609,
			"statString": " (0 stats)"
		},
		{
			"id": 89610,
			"statString": " (1 stat)"
		},
		{
			"id": 89611,
			"statString": " (2 stats)"
		},
		{
			"id": 89612,
			"statString": " (3 stats)"
		},
		{
			"id": 89613,
			"statString": " (0 stats)"
		},
		{
			"id": 89614,
			"statString": " (1 stat)"
		},
		{
			"id": 89615,
			"statString": " (2 stats)"
		},
		{
			"id": 89616,
			"statString": " (3 stats)"
		},
		{
			"id": 89617,
			"statString": " (0 stats)"
		},
		{
			"id": 89618,
			"statString": " (1 stat)"
		},
		{
			"id": 89619,
			"statString": " (2 stats)"
		},
		{
			"id": 89620,
			"statString": " (3 stats)"
		},
		{
			"id": 89621,
			"statString": " (0 stats)"
		},
		{
			"id": 89622,
			"statString": " (1 stat)"
		},
		{
			"id": 89623,
			"statString": " (2 stats)"
		},
		{
			"id": 89624,
			"statString": " (3 stats)"
		},
		{
			"id": 89625,
			"statString": " (0 stats)"
		},
		{
			"id": 89626,
			"statString": " (1 stat)"
		},
		{
			"id": 89627,
			"statString": " (2 stats)"
		},
		{
			"id": 89628,
			"statString": " (3 stats)"
		},
		{
			"id": 89629,
			"statString": " (0 stats)"
		},
		{
			"id": 89630,
			"statString": " (1 stat)"
		},
		{
			"id": 89631,
			"statString": " (2 stats)"
		},
		{
			"id": 89632,
			"statString": " (3 stats)"
		},
		{
			"id": 89633,
			"statString": " (0 stats)"
		},
		{
			"id": 89634,
			"statString": " (1 stat)"
		},
		{
			"id": 89635,
			"statString": " (2 stats)"
		},
		{
			"id": 89636,
			"statString": " (3 stats)"
		},
		{
			"id": 89637,
			"statString": " (0 stats)"
		},
		{
			"id": 89638,
			"statString": " (1 stat)"
		},
		{
			"id": 89639,
			"statString": " (2 stats)"
		},
		{
			"id": 89640,
			"statString": " (3 stats)"
		},
		{
			"id": 89641,
			"statString": " (0 stats)"
		},
		{
			"id": 89642,
			"statString": " (1 stat)"
		},
		{
			"id": 89643,
			"statString": " (2 stats)"
		},
		{
			"id": 89644,
			"statString": " (3 stats)"
		},
		{
			"id": 89645,
			"statString": " (0 stats)"
		},
		{
			"id": 89646,
			"statString": " (1 stat)"
		},
		{
			"id": 89647,
			"statString": " (2 stats)"
		},
		{
			"id": 89648,
			"statString": " (3 stats)"
		},
		{
			"id": 89649,
			"statString": " (0 stats)"
		},
		{
			"id": 89650,
			"statString": " (1 stat)"
		},
		{
			"id": 89651,
			"statString": " (2 stats)"
		},
		{
			"id": 89652,
			"statString": " (3 stats)"
		},
		{
			"id": 89653,
			"statString": " (0 stats)"
		},
		{
			"id": 89654,
			"statString": " (1 stat)"
		},
		{
			"id": 89655,
			"statString": " (2 stats)"
		},
		{
			"id": 89656,
			"statString": " (3 stats)"
		},
		{
			"id": 89657,
			"statString": " (0 stats)"
		},
		{
			"id": 89658,
			"statString": " (1 stat)"
		},
		{
			"id": 89659,
			"statString": " (2 stats)"
		},
		{
			"id": 89660,
			"statString": " (3 stats)"
		},
		{
			"id": 89661,
			"statString": " (0 stats)"
		},
		{
			"id": 89662,
			"statString": " (1 stat)"
		},
		{
			"id": 89663,
			"statString": " (2 stats)"
		},
		{
			"id": 89664,
			"statString": " (3 stats)"
		},
		{
			"id": 89665,
			"statString": " (0 stats)"
		},
		{
			"id": 89666,
			"statString": " (1 stat)"
		},
		{
			"id": 89667,
			"statString": " (2 stats)"
		},
		{
			"id": 89668,
			"statString": " (3 stats)"
		},
		{
			"id": 89669,
			"statString": " (0 stats)"
		},
		{
			"id": 89670,
			"statString": " (1 stat)"
		},
		{
			"id": 89671,
			"statString": " (2 stats)"
		},
		{
			"id": 89672,
			"statString": " (3 stats)"
		},
		{
			"id": 89673,
			"statString": " (0 stats)"
		},
		{
			"id": 89674,
			"statString": " (1 stat)"
		},
		{
			"id": 89675,
			"statString": " (2 stats)"
		},
		{
			"id": 89676,
			"statString": " (3 stats)"
		},
		{
			"id": 89677,
			"statString": " (0 stats)"
		},
		{
			"id": 89678,
			"statString": " (1 stat)"
		},
		{
			"id": 89679,
			"statString": " (2 stats)"
		},
		{
			"id": 89680,
			"statString": " (3 stats)"
		},
		{
			"id": 89681,
			"statString": " (0 stats)"
		},
		{
			"id": 89682,
			"statString": " (1 stat)"
		},
		{
			"id": 89683,
			"statString": " (2 stats)"
		},
		{
			"id": 89684,
			"statString": " (3 stats)"
		},
		{
			"id": 89685,
			"statString": " (0 stats)"
		},
		{
			"id": 89686,
			"statString": " (1 stat)"
		},
		{
			"id": 89687,
			"statString": " (2 stats)"
		},
		{
			"id": 89688,
			"statString": " (3 stats)"
		},
		{
			"id": 89689,
			"statString": " (0 stats)"
		},
		{
			"id": 89690,
			"statString": " (1 stat)"
		},
		{
			"id": 89691,
			"statString": " (2 stats)"
		},
		{
			"id": 89692,
			"statString": " (3 stats)"
		}
	]
};

function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) {
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if (from_ver === null) {
		return DefaultSettings;
	} else {
		if (from_ver + 1 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 1, settings);
			return MigrateSettings(from_ver + 1, to_ver, settings);
		}
		switch (to_ver) {

		}

		return settings;
	}
}

module.exports = MigrateSettings;
