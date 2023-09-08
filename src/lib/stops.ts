type BusStop = {
	rid: number;
	rsid: number;
	id: number;
	name: string;
	lat: number;
	lng: number;
	extID: string;
	shortName: string;
};

const stops: BusStop[] = [
	{
		rid: 1,
		rsid: 65539,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 1,
		rsid: 65541,
		id: 5,
		name: 'Floral & Ackley (OB)',
		lat: 42.10733413696289,
		lng: -75.96048736572266,
		extID: '',
		shortName: '005'
	},
	{
		rid: 1,
		rsid: 65545,
		id: 9,
		name: 'Floral & Burbank (OB)',
		lat: 42.108455657958984,
		lng: -75.9524154663086,
		extID: '',
		shortName: '009'
	},
	{
		rid: 1,
		rsid: 65546,
		id: 10,
		name: 'Floral & Cleveland (OB)',
		lat: 42.10896301269531,
		lng: -75.94898986816406,
		extID: '',
		shortName: '010'
	},
	{
		rid: 1,
		rsid: 65542,
		id: 6,
		name: 'Floral & Harrison (OB)',
		lat: 42.107601165771484,
		lng: -75.95850372314453,
		extID: '',
		shortName: '006'
	},
	{
		rid: 1,
		rsid: 65547,
		id: 11,
		name: 'Floral & Main (OB)',
		lat: 42.11103057861328,
		lng: -75.94513702392578,
		extID: '',
		shortName: '011'
	},
	{
		rid: 1,
		rsid: 65540,
		id: 4,
		name: 'Floral & New York (OB)',
		lat: 42.107025146484375,
		lng: -75.9631652832031,
		extID: '',
		shortName: '004'
	},
	{
		rid: 1,
		rsid: 65543,
		id: 7,
		name: 'Floral & Roberts (OB)',
		lat: 42.10789108276367,
		lng: -75.95614624023438,
		extID: '',
		shortName: '007'
	},
	{
		rid: 1,
		rsid: 65544,
		id: 8,
		name: 'Floral & Willow (OB)',
		lat: 42.108116149902344,
		lng: -75.95433044433594,
		extID: '',
		shortName: '008'
	},
	{
		rid: 1,
		rsid: 65557,
		id: 21,
		name: 'Hawley & Court (OB)',
		lat: 42.09859848022461,
		lng: -75.91466522216797,
		extID: '',
		shortName: '020'
	},
	{
		rid: 1,
		rsid: 65554,
		id: 18,
		name: 'Main & Arthur (OB)',
		lat: 42.10029602050781,
		lng: -75.9247817993164,
		extID: '',
		shortName: '17'
	},
	{
		rid: 1,
		rsid: 65553,
		id: 17,
		name: 'Main & Cedar (OB)',
		lat: 42.10218048095703,
		lng: -75.9286117553711,
		extID: '',
		shortName: '016'
	},
	{
		rid: 1,
		rsid: 65552,
		id: 16,
		name: 'Main & Clarke (OB)',
		lat: 42.103172302246094,
		lng: -75.93034362792969,
		extID: '',
		shortName: '015'
	},
	{
		rid: 1,
		rsid: 65549,
		id: 13,
		name: 'Main & Crestmont (OB)',
		lat: 42.108272552490234,
		lng: -75.93950653076172,
		extID: '',
		shortName: '013'
	},
	{
		rid: 1,
		rsid: 65556,
		id: 20,
		name: 'Main & Front (OB)',
		lat: 42.09880447387695,
		lng: -75.9179458618164,
		extID: '',
		shortName: '019'
	},
	{
		rid: 1,
		rsid: 65550,
		id: 14,
		name: 'Main & Helen (OB)',
		lat: 42.106964111328125,
		lng: -75.93717956542969,
		extID: '',
		shortName: '014'
	},
	{
		rid: 1,
		rsid: 65548,
		id: 12,
		name: 'Main & Matthews (OB)',
		lat: 42.10957717895508,
		lng: -75.94194030761719,
		extID: '',
		shortName: '012'
	},
	{
		rid: 1,
		rsid: 65555,
		id: 19,
		name: 'Main & Murray (OB)',
		lat: 42.09950256347656,
		lng: -75.9217300415039,
		extID: '',
		shortName: '018'
	},
	{
		rid: 1,
		rsid: 65551,
		id: 15,
		name: 'Main & Schiller (OB)',
		lat: 42.105350494384766,
		lng: -75.93427276611328,
		extID: '',
		shortName: '014'
	},
	{
		rid: 1,
		rsid: 65538,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 1,
		rsid: 65558,
		id: 22,
		name: 'University Downtown Center (South)',
		lat: 42.09565734863281,
		lng: -75.91426086425781,
		extID: '',
		shortName: '021'
	},
	{
		rid: 1,
		rsid: 65537,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 2,
		rsid: 131105,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 2,
		rsid: 131116,
		id: 44,
		name: 'Court & Hawley (IB)',
		lat: 42.09883117675781,
		lng: -75.91522216796875,
		extID: '',
		shortName: '042'
	},
	{
		rid: 2,
		rsid: 131132,
		id: 60,
		name: 'Floral & Ackley (IB)',
		lat: 42.10751724243164,
		lng: -75.96007537841797,
		extID: '',
		shortName: '058'
	},
	{
		rid: 2,
		rsid: 131128,
		id: 56,
		name: 'Floral & Burbank (IB)',
		lat: 42.108642578125,
		lng: -75.95210266113281,
		extID: '',
		shortName: '054'
	},
	{
		rid: 2,
		rsid: 131127,
		id: 55,
		name: 'Floral & Cleveland (IB)',
		lat: 42.10911560058594,
		lng: -75.94873809814453,
		extID: '',
		shortName: '053'
	},
	{
		rid: 2,
		rsid: 131133,
		id: 61,
		name: 'Floral & Cook (IB)',
		lat: 42.107147216796875,
		lng: -75.96337127685547,
		extID: '',
		shortName: '059'
	},
	{
		rid: 2,
		rsid: 131131,
		id: 59,
		name: 'Floral & Harrison (IB)',
		lat: 42.107765197753906,
		lng: -75.9581604003906,
		extID: '',
		shortName: '057'
	},
	{
		rid: 2,
		rsid: 131126,
		id: 54,
		name: 'Floral & Main (IB)',
		lat: 42.11114501953125,
		lng: -75.94526672363281,
		extID: '',
		shortName: '052'
	},
	{
		rid: 2,
		rsid: 131130,
		id: 58,
		name: 'Floral & Roberts (IB)',
		lat: 42.108036041259766,
		lng: -75.9560546875,
		extID: '',
		shortName: '056'
	},
	{
		rid: 2,
		rsid: 131129,
		id: 57,
		name: 'Floral & Willow (IB)',
		lat: 42.108299255371094,
		lng: -75.95398712158203,
		extID: '',
		shortName: '055'
	},
	{
		rid: 2,
		rsid: 131120,
		id: 48,
		name: 'Main & Cedar (IB)',
		lat: 42.10240173339844,
		lng: -75.92862701416016,
		extID: '',
		shortName: '046'
	},
	{
		rid: 2,
		rsid: 131121,
		id: 49,
		name: 'Main & Clarke (IB)',
		lat: 42.10326385498047,
		lng: -75.93013763427734,
		extID: '',
		shortName: '047'
	},
	{
		rid: 2,
		rsid: 131125,
		id: 53,
		name: 'Main & Crary (IB)',
		lat: 42.1099967956543,
		lng: -75.94232177734375,
		extID: '',
		shortName: '051'
	},
	{
		rid: 2,
		rsid: 131124,
		id: 52,
		name: 'Main & Crestmont (IB)',
		lat: 42.10897445678711,
		lng: -75.94052124023438,
		extID: '',
		shortName: '050'
	},
	{
		rid: 2,
		rsid: 131117,
		id: 45,
		name: 'Main & Front (IB)',
		lat: 42.09897232055664,
		lng: -75.91796112060547,
		extID: '',
		shortName: '043'
	},
	{
		rid: 2,
		rsid: 131123,
		id: 51,
		name: 'Main & Helen (IB)',
		lat: 42.1074104309082,
		lng: -75.9376525878906,
		extID: '',
		shortName: '049'
	},
	{
		rid: 2,
		rsid: 131119,
		id: 47,
		name: 'Main & Mather (IB)',
		lat: 42.10060119628906,
		lng: -75.9251708984375,
		extID: '',
		shortName: '045'
	},
	{
		rid: 2,
		rsid: 131118,
		id: 46,
		name: 'Main & Murray (IB)',
		lat: 42.09967803955078,
		lng: -75.9217529296875,
		extID: '',
		shortName: '044'
	},
	{
		rid: 2,
		rsid: 131122,
		id: 50,
		name: 'Main & Schiller (IB)',
		lat: 42.10514831542969,
		lng: -75.93350982666016,
		extID: '',
		shortName: '048'
	},
	{
		rid: 2,
		rsid: 131134,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 2,
		rsid: 131183,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 2,
		rsid: 131115,
		id: 43,
		name: 'University Downtown Center (North)',
		lat: 42.09535217285156,
		lng: -75.91410064697266,
		extID: '',
		shortName: '041'
	},
	{
		rid: 2,
		rsid: 131073,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 3,
		rsid: 196611,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 3,
		rsid: 196648,
		id: 40,
		name: 'Leroy & Chestnut (OB)',
		lat: 42.09568405151367,
		lng: -75.9268569946289,
		extID: '',
		shortName: '038'
	},
	{
		rid: 3,
		rsid: 196647,
		id: 39,
		name: 'Leroy & Laurel (OB)',
		lat: 42.0954704284668,
		lng: -75.93101501464844,
		extID: '',
		shortName: '037'
	},
	{
		rid: 3,
		rsid: 196649,
		id: 41,
		name: 'Leroy & Murray (OB)',
		lat: 42.0954475402832,
		lng: -75.92271423339844,
		extID: '',
		shortName: '039'
	},
	{
		rid: 3,
		rsid: 196610,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 3,
		rsid: 196646,
		id: 38,
		name: 'Riverside & Beethoven (OB)',
		lat: 42.09272003173828,
		lng: -75.93632507324219,
		extID: '',
		shortName: '036'
	},
	{
		rid: 3,
		rsid: 196644,
		id: 36,
		name: 'Riverside & Columbus (OB)',
		lat: 42.09929275512695,
		lng: -75.95462799072266,
		extID: '',
		shortName: '034'
	},
	{
		rid: 3,
		rsid: 196643,
		id: 35,
		name: 'Riverside & Elfred (OB)',
		lat: 42.100341796875,
		lng: -75.9588851928711,
		extID: '',
		shortName: '033'
	},
	{
		rid: 3,
		rsid: 196642,
		id: 34,
		name: 'Riverside & Ethel (OB)',
		lat: 42.10211944580078,
		lng: -75.96139526367188,
		extID: '',
		shortName: '032'
	},
	{
		rid: 3,
		rsid: 196650,
		id: 42,
		name: 'Riverside & Front (OB)',
		lat: 42.09280014038086,
		lng: -75.92021179199219,
		extID: '',
		shortName: '040'
	},
	{
		rid: 3,
		rsid: 196645,
		id: 37,
		name: 'Riverside & Margaret (OB)',
		lat: 42.0980339050293,
		lng: -75.94927978515625,
		extID: '',
		shortName: '035'
	},
	{
		rid: 3,
		rsid: 196630,
		id: 22,
		name: 'University Downtown Center (South)',
		lat: 42.09565734863281,
		lng: -75.91426086425781,
		extID: '',
		shortName: '021'
	},
	{
		rid: 3,
		rsid: 196609,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 4,
		rsid: 262177,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 4,
		rsid: 262171,
		id: 27,
		name: 'Leroy & Beethoven (IB)',
		lat: 42.09540557861328,
		lng: -75.93444061279297,
		extID: '',
		shortName: '026'
	},
	{
		rid: 4,
		rsid: 262169,
		id: 25,
		name: 'Leroy & Chestnut (IB)',
		lat: 42.095821380615234,
		lng: -75.92662048339844,
		extID: '',
		shortName: '024'
	},
	{
		rid: 4,
		rsid: 262167,
		id: 23,
		name: 'Leroy & Front (IB)',
		lat: 42.09512710571289,
		lng: -75.9193344116211,
		extID: '',
		shortName: '022'
	},
	{
		rid: 4,
		rsid: 262170,
		id: 26,
		name: 'Leroy & Laurel (IB)',
		lat: 42.095603942871094,
		lng: -75.93058013916016,
		extID: '',
		shortName: '025'
	},
	{
		rid: 4,
		rsid: 262168,
		id: 24,
		name: 'Leroy & Murray (IB)',
		lat: 42.09558868408203,
		lng: -75.9227294921875,
		extID: '',
		shortName: '023'
	},
	{
		rid: 4,
		rsid: 262206,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 4,
		rsid: 262255,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 4,
		rsid: 262172,
		id: 28,
		name: 'Riverside & Beethoven (IB)',
		lat: 42.09257125854492,
		lng: -75.93492126464844,
		extID: '',
		shortName: '026'
	},
	{
		rid: 4,
		rsid: 262174,
		id: 30,
		name: 'Riverside & Columbus (IB)',
		lat: 42.099483489990234,
		lng: -75.95487213134766,
		extID: '',
		shortName: '028'
	},
	{
		rid: 4,
		rsid: 262176,
		id: 32,
		name: 'Riverside & Elfred (IB)',
		lat: 42.100528717041016,
		lng: -75.95895385742188,
		extID: '',
		shortName: '029'
	},
	{
		rid: 4,
		rsid: 262175,
		id: 31,
		name: 'Riverside & Ethel (IB)',
		lat: 42.10219955444336,
		lng: -75.96131134033203,
		extID: '',
		shortName: '029'
	},
	{
		rid: 4,
		rsid: 262173,
		id: 29,
		name: 'Riverside & Margaret (IB)',
		lat: 42.09809875488281,
		lng: -75.94920349121094,
		extID: '',
		shortName: '027'
	},
	{
		rid: 4,
		rsid: 262166,
		id: 22,
		name: 'University Downtown Center (South)',
		lat: 42.09565734863281,
		lng: -75.91426086425781,
		extID: '',
		shortName: '021'
	},
	{
		rid: 4,
		rsid: 262145,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 5,
		rsid: 327782,
		id: 102,
		name: 'Couper Administration',
		lat: 42.089717864990234,
		lng: -75.96564483642578,
		extID: '',
		shortName: '099'
	},
	{
		rid: 5,
		rsid: 327783,
		id: 103,
		name: 'East Gym',
		lat: 42.090972900390625,
		lng: -75.96733856201172,
		extID: '',
		shortName: '099'
	},
	{
		rid: 5,
		rsid: 327745,
		id: 65,
		name: 'Hayes',
		lat: 42.08837890625,
		lng: -75.95635986328125,
		extID: '',
		shortName: '063'
	},
	{
		rid: 5,
		rsid: 327744,
		id: 64,
		name: 'Meadows',
		lat: 42.08933639526367,
		lng: -75.9559097290039,
		extID: '',
		shortName: '062'
	},
	{
		rid: 5,
		rsid: 327742,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 5,
		rsid: 327781,
		id: 101,
		name: 'Newing',
		lat: 42.08844757080078,
		lng: -75.9628677368164,
		extID: '',
		shortName: '098'
	},
	{
		rid: 5,
		rsid: 327791,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 5,
		rsid: 327743,
		id: 63,
		name: 'UCLUB',
		lat: 42.09250259399414,
		lng: -75.9538345336914,
		extID: '',
		shortName: '061'
	},
	{
		rid: 5,
		rsid: 327681,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 5,
		rsid: 327746,
		id: 66,
		name: 'Washington & Lehigh',
		lat: 42.08251190185547,
		lng: -75.95957946777344,
		extID: '',
		shortName: '064'
	},
	{
		rid: 6,
		rsid: 393249,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 6,
		rsid: 393296,
		id: 80,
		name: 'Beehtoven & Highland',
		lat: 42.10063552856445,
		lng: -75.93531799316406,
		extID: '',
		shortName: '078'
	},
	{
		rid: 6,
		rsid: 393298,
		id: 82,
		name: 'Beethoven & Leroy',
		lat: 42.09558868408203,
		lng: -75.93476867675781,
		extID: '',
		shortName: '080'
	},
	{
		rid: 6,
		rsid: 393294,
		id: 78,
		name: 'Beethoven & Main',
		lat: 42.103965759277344,
		lng: -75.9323501586914,
		extID: '',
		shortName: '076'
	},
	{
		rid: 6,
		rsid: 393295,
		id: 79,
		name: 'Beethoven & Schubert',
		lat: 42.10190200805664,
		lng: -75.93437194824219,
		extID: '',
		shortName: '077'
	},
	{
		rid: 6,
		rsid: 393297,
		id: 81,
		name: 'Beethoven & Seminary',
		lat: 42.09766387939453,
		lng: -75.9349670410156,
		extID: '',
		shortName: '079'
	},
	{
		rid: 6,
		rsid: 393350,
		id: 134,
		name: 'Chenango & Lewis',
		lat: 42.102996826171875,
		lng: -75.9089126586914,
		extID: '',
		shortName: '134'
	},
	{
		rid: 6,
		rsid: 393309,
		id: 93,
		name: 'Conklin & Alfred',
		lat: 42.0943603515625,
		lng: -75.89812469482422,
		extID: '',
		shortName: '090'
	},
	{
		rid: 6,
		rsid: 393312,
		id: 96,
		name: 'Conklin & Livingston',
		lat: 42.09281921386719,
		lng: -75.90837097167969,
		extID: '',
		shortName: '093'
	},
	{
		rid: 6,
		rsid: 393310,
		id: 94,
		name: 'Conklin & Telegraph',
		lat: 42.093807220458984,
		lng: -75.90167999267578,
		extID: '',
		shortName: '091'
	},
	{
		rid: 6,
		rsid: 393313,
		id: 97,
		name: 'Conklin & Tremont',
		lat: 42.09260940551758,
		lng: -75.91007995605469,
		extID: '',
		shortName: '094'
	},
	{
		rid: 6,
		rsid: 393314,
		id: 98,
		name: 'Conklin & Washington',
		lat: 42.09147262573242,
		lng: -75.91423797607422,
		extID: '',
		shortName: '095'
	},
	{
		rid: 6,
		rsid: 393305,
		id: 89,
		name: 'Court & Stuyvesant',
		lat: 42.10055923461914,
		lng: -75.90445709228516,
		extID: '',
		shortName: '086'
	},
	{
		rid: 6,
		rsid: 393302,
		id: 86,
		name: 'Court & Washington',
		lat: 42.098655700683594,
		lng: -75.91368865966797,
		extID: '',
		shortName: '084'
	},
	{
		rid: 6,
		rsid: 393219,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 6,
		rsid: 393303,
		id: 87,
		name: 'Greater Binghamton Transportation Center',
		lat: 42.10062789916992,
		lng: -75.91094207763672,
		extID: '',
		shortName: '085'
	},
	{
		rid: 6,
		rsid: 393291,
		id: 75,
		name: 'Jennison & Main (OB)',
		lat: 42.11407470703125,
		lng: -75.95269012451172,
		extID: '',
		shortName: '073'
	},
	{
		rid: 6,
		rsid: 393256,
		id: 40,
		name: 'Leroy & Chestnut (OB)',
		lat: 42.09568405151367,
		lng: -75.9268569946289,
		extID: '',
		shortName: '038'
	},
	{
		rid: 6,
		rsid: 393255,
		id: 39,
		name: 'Leroy & Laurel (OB)',
		lat: 42.0954704284668,
		lng: -75.93101501464844,
		extID: '',
		shortName: '037'
	},
	{
		rid: 6,
		rsid: 393257,
		id: 41,
		name: 'Leroy & Murray (OB)',
		lat: 42.0954475402832,
		lng: -75.92271423339844,
		extID: '',
		shortName: '039'
	},
	{
		rid: 6,
		rsid: 393284,
		id: 68,
		name: 'Main & Albert (OB)',
		lat: 42.11564254760742,
		lng: -75.9637756347656,
		extID: '',
		shortName: '066'
	},
	{
		rid: 6,
		rsid: 393283,
		id: 67,
		name: 'Main & Baker (OB)',
		lat: 42.1156120300293,
		lng: -75.96576690673828,
		extID: '',
		shortName: '065'
	},
	{
		rid: 6,
		rsid: 393286,
		id: 70,
		name: 'Main & Baldwin (OB)',
		lat: 42.11579132080078,
		lng: -75.9583969116211,
		extID: '',
		shortName: '068'
	},
	{
		rid: 6,
		rsid: 393229,
		id: 13,
		name: 'Main & Crestmont (OB)',
		lat: 42.108272552490234,
		lng: -75.93950653076172,
		extID: '',
		shortName: '013'
	},
	{
		rid: 6,
		rsid: 393293,
		id: 77,
		name: 'Main & Floral (OB)',
		lat: 42.111427307128906,
		lng: -75.9456787109375,
		extID: '',
		shortName: '075'
	},
	{
		rid: 6,
		rsid: 393230,
		id: 14,
		name: 'Main & Helen (OB)',
		lat: 42.106964111328125,
		lng: -75.93717956542969,
		extID: '',
		shortName: '014'
	},
	{
		rid: 6,
		rsid: 393292,
		id: 76,
		name: 'Main & Lester (OB)',
		lat: 42.11335754394531,
		lng: -75.95072174072266,
		extID: '',
		shortName: '074'
	},
	{
		rid: 6,
		rsid: 393228,
		id: 12,
		name: 'Main & Matthews (OB)',
		lat: 42.10957717895508,
		lng: -75.94194030761719,
		extID: '',
		shortName: '012'
	},
	{
		rid: 6,
		rsid: 393231,
		id: 15,
		name: 'Main & Schiller (OB)',
		lat: 42.105350494384766,
		lng: -75.93427276611328,
		extID: '',
		shortName: '014'
	},
	{
		rid: 6,
		rsid: 393285,
		id: 69,
		name: 'Main & St Charles (OB)',
		lat: 42.11569595336914,
		lng: -75.9616470336914,
		extID: '',
		shortName: '067'
	},
	{
		rid: 6,
		rsid: 393304,
		id: 88,
		name: 'Mirabito Stadium',
		lat: 42.102783203125,
		lng: -75.9058609008789,
		extID: '',
		shortName: '086'
	},
	{
		rid: 6,
		rsid: 393278,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 6,
		rsid: 393290,
		id: 74,
		name: 'Nursing School (OB)',
		lat: 42.1131706237793,
		lng: -75.95403289794922,
		extID: '',
		shortName: '072'
	},
	{
		rid: 6,
		rsid: 393300,
		id: 84,
		name: 'Oak & Eaton',
		lat: 42.09699630737305,
		lng: -75.92048645019531,
		extID: '',
		shortName: '082'
	},
	{
		rid: 6,
		rsid: 393301,
		id: 85,
		name: 'Oak & Main',
		lat: 42.09893035888672,
		lng: -75.9198303222656,
		extID: '',
		shortName: '083'
	},
	{
		rid: 6,
		rsid: 393311,
		id: 95,
		name: 'Park Diner',
		lat: 42.09305953979492,
		lng: -75.9049377441406,
		extID: '',
		shortName: '092'
	},
	{
		rid: 6,
		rsid: 393289,
		id: 73,
		name: 'Pharmacy School (OB)',
		lat: 42.11304473876953,
		lng: -75.95655822753906,
		extID: '',
		shortName: '071'
	},
	{
		rid: 6,
		rsid: 393218,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 6,
		rsid: 393327,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 6,
		rsid: 393308,
		id: 92,
		name: 'Tompkins & Conklin',
		lat: 42.0955696105957,
		lng: -75.89411163330078,
		extID: '',
		shortName: '089'
	},
	{
		rid: 6,
		rsid: 393307,
		id: 91,
		name: 'Tompkins & Jackson',
		lat: 42.098018646240234,
		lng: -75.895263671875,
		extID: '',
		shortName: '088'
	},
	{
		rid: 6,
		rsid: 393306,
		id: 90,
		name: 'Tompkins & Webster',
		lat: 42.099124908447266,
		lng: -75.89580535888672,
		extID: '',
		shortName: '087'
	},
	{
		rid: 6,
		rsid: 393217,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 7,
		rsid: 458854,
		id: 102,
		name: 'Couper Administration',
		lat: 42.089717864990234,
		lng: -75.96564483642578,
		extID: '',
		shortName: '099'
	},
	{
		rid: 7,
		rsid: 458855,
		id: 103,
		name: 'East Gym',
		lat: 42.090972900390625,
		lng: -75.96733856201172,
		extID: '',
		shortName: '099'
	},
	{
		rid: 7,
		rsid: 458817,
		id: 65,
		name: 'Hayes',
		lat: 42.08837890625,
		lng: -75.95635986328125,
		extID: '',
		shortName: '063'
	},
	{
		rid: 7,
		rsid: 458876,
		id: 124,
		name: 'Innovative Technology Center',
		lat: 42.09322738647461,
		lng: -75.95879364013672,
		extID: '',
		shortName: '120'
	},
	{
		rid: 7,
		rsid: 458816,
		id: 64,
		name: 'Meadows',
		lat: 42.08933639526367,
		lng: -75.9559097290039,
		extID: '',
		shortName: '062'
	},
	{
		rid: 7,
		rsid: 458814,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 7,
		rsid: 458853,
		id: 101,
		name: 'Newing',
		lat: 42.08844757080078,
		lng: -75.9628677368164,
		extID: '',
		shortName: '098'
	},
	{
		rid: 7,
		rsid: 458863,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 7,
		rsid: 458815,
		id: 63,
		name: 'UCLUB',
		lat: 42.09250259399414,
		lng: -75.9538345336914,
		extID: '',
		shortName: '061'
	},
	{
		rid: 7,
		rsid: 458753,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 7,
		rsid: 458818,
		id: 66,
		name: 'Washington & Lehigh',
		lat: 42.08251190185547,
		lng: -75.95957946777344,
		extID: '',
		shortName: '064'
	},
	{
		rid: 8,
		rsid: 524394,
		id: 106,
		name: 'Clearview',
		lat: 42.089080810546875,
		lng: -75.97443389892578,
		extID: '',
		shortName: '102'
	},
	{
		rid: 8,
		rsid: 524390,
		id: 102,
		name: 'Couper Administration',
		lat: 42.089717864990234,
		lng: -75.96564483642578,
		extID: '',
		shortName: '099'
	},
	{
		rid: 8,
		rsid: 524388,
		id: 100,
		name: 'Dickinson',
		lat: 42.08723449707031,
		lng: -75.96482849121094,
		extID: '',
		shortName: '097'
	},
	{
		rid: 8,
		rsid: 524391,
		id: 103,
		name: 'East Gym',
		lat: 42.090972900390625,
		lng: -75.96733856201172,
		extID: '',
		shortName: '099'
	},
	{
		rid: 8,
		rsid: 524387,
		id: 99,
		name: 'Engineering Building',
		lat: 42.08687210083008,
		lng: -75.96829986572266,
		extID: '',
		shortName: '096'
	},
	{
		rid: 8,
		rsid: 524396,
		id: 108,
		name: 'Hillside',
		lat: 42.08713912963867,
		lng: -75.97836303710938,
		extID: '',
		shortName: '104'
	},
	{
		rid: 8,
		rsid: 524398,
		id: 110,
		name: 'Hinman',
		lat: 42.0883903503418,
		lng: -75.97309112548828,
		extID: '',
		shortName: '106'
	},
	{
		rid: 8,
		rsid: 524350,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 8,
		rsid: 524397,
		id: 109,
		name: 'Mountainview',
		lat: 42.084007263183594,
		lng: -75.97037506103516,
		extID: '',
		shortName: '105'
	},
	{
		rid: 8,
		rsid: 524389,
		id: 101,
		name: 'Newing',
		lat: 42.08844757080078,
		lng: -75.9628677368164,
		extID: '',
		shortName: '098'
	},
	{
		rid: 8,
		rsid: 524393,
		id: 105,
		name: 'Physical Facilities (CS)',
		lat: 42.09158706665039,
		lng: -75.9739074707031,
		extID: '',
		shortName: '101'
	},
	{
		rid: 8,
		rsid: 524399,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 8,
		rsid: 524395,
		id: 107,
		name: 'Susquehanna',
		lat: 42.08625411987305,
		lng: -75.97441864013672,
		extID: '',
		shortName: '103'
	},
	{
		rid: 8,
		rsid: 524289,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 8,
		rsid: 524392,
		id: 104,
		name: 'West Gym',
		lat: 42.09172821044922,
		lng: -75.9712219238281,
		extID: '',
		shortName: '100'
	},
	{
		rid: 9,
		rsid: 589857,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 9,
		rsid: 589942,
		id: 118,
		name: 'Barnes & Noble',
		lat: 42.0970573425293,
		lng: -76.00775146484375,
		extID: '',
		shortName: '114'
	},
	{
		rid: 9,
		rsid: 589940,
		id: 116,
		name: 'Burris & Rano',
		lat: 42.091468811035156,
		lng: -76.0025405883789,
		extID: '',
		shortName: '112'
	},
	{
		rid: 9,
		rsid: 589936,
		id: 112,
		name: 'Chuck E. Cheese',
		lat: 42.09613037109375,
		lng: -75.97938537597656,
		extID: '',
		shortName: '108'
	},
	{
		rid: 9,
		rsid: 589944,
		id: 120,
		name: "Denny's (IB)",
		lat: 42.0949821472168,
		lng: -75.97547149658203,
		extID: '',
		shortName: '116'
	},
	{
		rid: 9,
		rsid: 589827,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 9,
		rsid: 589939,
		id: 115,
		name: 'Holly Brook',
		lat: 42.09171676635742,
		lng: -76.00017547607422,
		extID: '',
		shortName: '111'
	},
	{
		rid: 9,
		rsid: 589886,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 9,
		rsid: 589949,
		id: 125,
		name: 'Physical Facilities (IB)',
		lat: 42.09174346923828,
		lng: -75.974365234375,
		extID: '',
		shortName: '121'
	},
	{
		rid: 9,
		rsid: 589826,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 9,
		rsid: 589935,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 9,
		rsid: 589937,
		id: 113,
		name: 'Riviera Ridge 1',
		lat: 42.09387969970703,
		lng: -75.99549865722656,
		extID: '',
		shortName: '109'
	},
	{
		rid: 9,
		rsid: 589938,
		id: 114,
		name: 'Riviera Ridge 2',
		lat: 42.09196090698242,
		lng: -75.99659729003906,
		extID: '',
		shortName: '110'
	},
	{
		rid: 9,
		rsid: 589941,
		id: 117,
		name: 'Target',
		lat: 42.093204498291016,
		lng: -76.00302124023438,
		extID: '',
		shortName: '113'
	},
	{
		rid: 9,
		rsid: 589825,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 9,
		rsid: 589943,
		id: 119,
		name: 'Walmart',
		lat: 42.09652328491211,
		lng: -76.01245880126953,
		extID: '',
		shortName: '115'
	},
	{
		rid: 10,
		rsid: 655393,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 10,
		rsid: 655363,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 10,
		rsid: 655422,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 10,
		rsid: 655481,
		id: 121,
		name: 'Oakdale Commons',
		lat: 42.12773513793945,
		lng: -75.97516632080078,
		extID: '',
		shortName: '117'
	},
	{
		rid: 10,
		rsid: 655362,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 10,
		rsid: 655471,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 10,
		rsid: 655361,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 10,
		rsid: 655482,
		id: 122,
		name: "Wegman's",
		lat: 42.123268127441406,
		lng: -75.97257995605469,
		extID: '',
		shortName: '118'
	},
	{
		rid: 11,
		rsid: 720929,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 11,
		rsid: 720958,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 11,
		rsid: 721019,
		id: 123,
		name: 'Stone Fox Courtyard',
		lat: 42.09730911254883,
		lng: -75.91321563720703,
		extID: '',
		shortName: '119'
	},
	{
		rid: 11,
		rsid: 721022,
		id: 126,
		name: 'Uclub (LN + OB)',
		lat: 42.09188461303711,
		lng: -75.95183563232422,
		extID: '',
		shortName: '122'
	},
	{
		rid: 11,
		rsid: 720897,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 12,
		rsid: 786475,
		id: 43,
		name: 'University Downtown Center (North)',
		lat: 42.09535217285156,
		lng: -75.91410064697266,
		extID: '',
		shortName: '041'
	},
	{
		rid: 12,
		rsid: 786433,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 14,
		rsid: 917537,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 14,
		rsid: 917566,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 14,
		rsid: 917615,
		id: 111,
		name: 'Rafuse',
		lat: 42.08749008178711,
		lng: -75.96456146240234,
		extID: '',
		shortName: '107'
	},
	{
		rid: 14,
		rsid: 917526,
		id: 22,
		name: 'University Downtown Center (South)',
		lat: 42.09565734863281,
		lng: -75.91426086425781,
		extID: '',
		shortName: '021'
	},
	{
		rid: 14,
		rsid: 917505,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 15,
		rsid: 983043,
		id: 3,
		name: "Denny's (OB)",
		lat: 42.09443283081055,
		lng: -75.97532653808594,
		extID: '',
		shortName: '003'
	},
	{
		rid: 15,
		rsid: 983061,
		id: 21,
		name: 'Hawley & Court (OB)',
		lat: 42.09859848022461,
		lng: -75.91466522216797,
		extID: '',
		shortName: '020'
	},
	{
		rid: 15,
		rsid: 983115,
		id: 75,
		name: 'Jennison & Main (OB)',
		lat: 42.11407470703125,
		lng: -75.95269012451172,
		extID: '',
		shortName: '073'
	},
	{
		rid: 15,
		rsid: 983108,
		id: 68,
		name: 'Main & Albert (OB)',
		lat: 42.11564254760742,
		lng: -75.9637756347656,
		extID: '',
		shortName: '066'
	},
	{
		rid: 15,
		rsid: 983058,
		id: 18,
		name: 'Main & Arthur (OB)',
		lat: 42.10029602050781,
		lng: -75.9247817993164,
		extID: '',
		shortName: '17'
	},
	{
		rid: 15,
		rsid: 983107,
		id: 67,
		name: 'Main & Baker (OB)',
		lat: 42.1156120300293,
		lng: -75.96576690673828,
		extID: '',
		shortName: '065'
	},
	{
		rid: 15,
		rsid: 983110,
		id: 70,
		name: 'Main & Baldwin (OB)',
		lat: 42.11579132080078,
		lng: -75.9583969116211,
		extID: '',
		shortName: '068'
	},
	{
		rid: 15,
		rsid: 983057,
		id: 17,
		name: 'Main & Cedar (OB)',
		lat: 42.10218048095703,
		lng: -75.9286117553711,
		extID: '',
		shortName: '016'
	},
	{
		rid: 15,
		rsid: 983056,
		id: 16,
		name: 'Main & Clarke (OB)',
		lat: 42.103172302246094,
		lng: -75.93034362792969,
		extID: '',
		shortName: '015'
	},
	{
		rid: 15,
		rsid: 983053,
		id: 13,
		name: 'Main & Crestmont (OB)',
		lat: 42.108272552490234,
		lng: -75.93950653076172,
		extID: '',
		shortName: '013'
	},
	{
		rid: 15,
		rsid: 983117,
		id: 77,
		name: 'Main & Floral (OB)',
		lat: 42.111427307128906,
		lng: -75.9456787109375,
		extID: '',
		shortName: '075'
	},
	{
		rid: 15,
		rsid: 983060,
		id: 20,
		name: 'Main & Front (OB)',
		lat: 42.09880447387695,
		lng: -75.9179458618164,
		extID: '',
		shortName: '019'
	},
	{
		rid: 15,
		rsid: 983054,
		id: 14,
		name: 'Main & Helen (OB)',
		lat: 42.106964111328125,
		lng: -75.93717956542969,
		extID: '',
		shortName: '014'
	},
	{
		rid: 15,
		rsid: 983116,
		id: 76,
		name: 'Main & Lester (OB)',
		lat: 42.11335754394531,
		lng: -75.95072174072266,
		extID: '',
		shortName: '074'
	},
	{
		rid: 15,
		rsid: 983052,
		id: 12,
		name: 'Main & Matthews (OB)',
		lat: 42.10957717895508,
		lng: -75.94194030761719,
		extID: '',
		shortName: '012'
	},
	{
		rid: 15,
		rsid: 983059,
		id: 19,
		name: 'Main & Murray (OB)',
		lat: 42.09950256347656,
		lng: -75.9217300415039,
		extID: '',
		shortName: '018'
	},
	{
		rid: 15,
		rsid: 983055,
		id: 15,
		name: 'Main & Schiller (OB)',
		lat: 42.105350494384766,
		lng: -75.93427276611328,
		extID: '',
		shortName: '014'
	},
	{
		rid: 15,
		rsid: 983109,
		id: 69,
		name: 'Main & St Charles (OB)',
		lat: 42.11569595336914,
		lng: -75.9616470336914,
		extID: '',
		shortName: '067'
	},
	{
		rid: 15,
		rsid: 983114,
		id: 74,
		name: 'Nursing School (OB)',
		lat: 42.1131706237793,
		lng: -75.95403289794922,
		extID: '',
		shortName: '072'
	},
	{
		rid: 15,
		rsid: 983113,
		id: 73,
		name: 'Pharmacy School (OB)',
		lat: 42.11304473876953,
		lng: -75.95655822753906,
		extID: '',
		shortName: '071'
	},
	{
		rid: 15,
		rsid: 983042,
		id: 2,
		name: 'Physical Facilities (OB)',
		lat: 42.09096908569336,
		lng: -75.97338104248047,
		extID: '',
		shortName: '002'
	},
	{
		rid: 15,
		rsid: 983062,
		id: 22,
		name: 'University Downtown Center (South)',
		lat: 42.09565734863281,
		lng: -75.91426086425781,
		extID: '',
		shortName: '021'
	},
	{
		rid: 15,
		rsid: 983041,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	},
	{
		rid: 16,
		rsid: 1048609,
		id: 33,
		name: 'Academic A',
		lat: 42.08875274658203,
		lng: -75.9732437133789,
		extID: '',
		shortName: '031'
	},
	{
		rid: 16,
		rsid: 1048620,
		id: 44,
		name: 'Court & Hawley (IB)',
		lat: 42.09883117675781,
		lng: -75.91522216796875,
		extID: '',
		shortName: '042'
	},
	{
		rid: 16,
		rsid: 1048705,
		id: 129,
		name: 'Jennison & Corliss (IB)',
		lat: 42.11324691772461,
		lng: -75.95336151123047,
		extID: '',
		shortName: '129'
	},
	{
		rid: 16,
		rsid: 1048707,
		id: 131,
		name: 'Main & Baldwin (IB)',
		lat: 42.11594009399414,
		lng: -75.9585189819336,
		extID: '',
		shortName: '131'
	},
	{
		rid: 16,
		rsid: 1048624,
		id: 48,
		name: 'Main & Cedar (IB)',
		lat: 42.10240173339844,
		lng: -75.92862701416016,
		extID: '',
		shortName: '046'
	},
	{
		rid: 16,
		rsid: 1048625,
		id: 49,
		name: 'Main & Clarke (IB)',
		lat: 42.10326385498047,
		lng: -75.93013763427734,
		extID: '',
		shortName: '047'
	},
	{
		rid: 16,
		rsid: 1048629,
		id: 53,
		name: 'Main & Crary (IB)',
		lat: 42.1099967956543,
		lng: -75.94232177734375,
		extID: '',
		shortName: '051'
	},
	{
		rid: 16,
		rsid: 1048628,
		id: 52,
		name: 'Main & Crestmont (IB)',
		lat: 42.10897445678711,
		lng: -75.94052124023438,
		extID: '',
		shortName: '050'
	},
	{
		rid: 16,
		rsid: 1048709,
		id: 133,
		name: 'Main & First (IB)',
		lat: 42.11578369140625,
		lng: -75.9641342163086,
		extID: '',
		shortName: '133'
	},
	{
		rid: 16,
		rsid: 1048653,
		id: 77,
		name: 'Main & Floral (OB)',
		lat: 42.111427307128906,
		lng: -75.9456787109375,
		extID: '',
		shortName: '075'
	},
	{
		rid: 16,
		rsid: 1048621,
		id: 45,
		name: 'Main & Front (IB)',
		lat: 42.09897232055664,
		lng: -75.91796112060547,
		extID: '',
		shortName: '043'
	},
	{
		rid: 16,
		rsid: 1048627,
		id: 51,
		name: 'Main & Helen (IB)',
		lat: 42.1074104309082,
		lng: -75.9376525878906,
		extID: '',
		shortName: '049'
	},
	{
		rid: 16,
		rsid: 1048704,
		id: 128,
		name: 'Main & Lester (IB)',
		lat: 42.113563537597656,
		lng: -75.95076751708984,
		extID: '',
		shortName: '128'
	},
	{
		rid: 16,
		rsid: 1048623,
		id: 47,
		name: 'Main & Mather (IB)',
		lat: 42.10060119628906,
		lng: -75.9251708984375,
		extID: '',
		shortName: '045'
	},
	{
		rid: 16,
		rsid: 1048622,
		id: 46,
		name: 'Main & Murray (IB)',
		lat: 42.09967803955078,
		lng: -75.9217529296875,
		extID: '',
		shortName: '044'
	},
	{
		rid: 16,
		rsid: 1048626,
		id: 50,
		name: 'Main & Schiller (IB)',
		lat: 42.10514831542969,
		lng: -75.93350982666016,
		extID: '',
		shortName: '048'
	},
	{
		rid: 16,
		rsid: 1048645,
		id: 69,
		name: 'Main & St Charles (OB)',
		lat: 42.11569595336914,
		lng: -75.9616470336914,
		extID: '',
		shortName: '067'
	},
	{
		rid: 16,
		rsid: 1048638,
		id: 62,
		name: 'Mohawk',
		lat: 42.086910247802734,
		lng: -75.96595001220703,
		extID: '',
		shortName: '060'
	},
	{
		rid: 16,
		rsid: 1048706,
		id: 130,
		name: 'Pharmacy School (IB)',
		lat: 42.113136291503906,
		lng: -75.95578002929688,
		extID: '',
		shortName: '130'
	},
	{
		rid: 16,
		rsid: 1048619,
		id: 43,
		name: 'University Downtown Center (North)',
		lat: 42.09535217285156,
		lng: -75.91410064697266,
		extID: '',
		shortName: '041'
	},
	{
		rid: 16,
		rsid: 1048577,
		id: 1,
		name: 'University Union',
		lat: 42.087032318115234,
		lng: -75.96710205078125,
		extID: '',
		shortName: 'UU'
	}
];

export default stops;
