const cities = [
  'San Jorge',
  'San Francisco',
  'San Fernando del Valle de Catamarca',
  'San Antonio Oeste',
  'Salta',
  'Rufino',
  'Rosario',
  'Río Tercero',
  'Río Segundo',
  'Río Gallegos',
  'Río Cuarto',
  'Río Ceballos',
  'Rawson',
  'Rafaela',
  'Quitilipi',
  'Punta Alta',
  'Puerto Madryn',
  'Presidencia Roque Sáenz Peña',
  'Pocito',
  'Plottier',
  'Pergamino',
  'Pérez',
  'Paraná',
  'Palpalá',
  'Olavarría',
  'Nueve de Julio',
  'Neuquén',
  'Morteros',
  'Monteros',
  'Mendoza',
  'Marcos Juárez',
  'Machagai',
  'Lincoln',
  'Libertador General San Martín',
  'Las Breñas',
  'La Rioja',
  'La Falda',
  'La Calera',
  'Laboulaye',
  'Junín',
  'Joaquín V. González',
  'Jesús María',
  'Granadero Baigorria',
  'Gobernador Gálvez',
  'General Roca',
  'General Pinedo',
  'General Pico',
  'General Enrique Mosconi',
  'Gálvez',
  'Firmat',
  'Famaillá',
  'Esquel',
  'Esperanza',
  'Embarcación',
  'Embalse',
  'El Bolsón',
  'Diamante',
  'Deán Funes',
  'Cutral-Có',
  'Cruz del Eje',
  'Crespo',
  'Cosquín',
  'Coronel Suárez',
  'Coronda',
  'Córdoba',
  'Comodoro Rivadavia',
  'Cipolletti',
  'Cinco Saltos',
  'Chivilcoy',
  'Chimbas',
  'Chilecito',
  'Charata',
  'Chacabuco',
  'Centenario',
  'Caucete',
  'Catriel',
  'Castelli',
  'Casilda',
  'Carcarañá',
  'Capitán Bermúdez',
  'Cañada de Gómez',
  'Caleta Olivia',
  'Bell Ville',
  'Bella Vista',
  'Bahía Blanca',
  'Arroyo Seco',
  'Arroyito',
  'Añatuya',
  'Alta Gracia',
  'Allen',
  'Alderetes',
  'Albardón',
  'Aguilares',
  'Villa Santa Rita',
  'Villa Mercedes',
  'San Carlos de Bariloche',
  'Adrogué',
  'Pago Pago',
  'Wolfsberg',
  'Wiener Neustadt',
  'Vienna',
  'Wels',
  'Weinzierl bei Krems',
  'Villach',
  'Traun',
  'Traiskirchen',
  'Ternitz',
  'Steyr',
  'Spittal an der Drau',
  'Schwechat',
  'Sankt Pölten',
  'Salzburg',
  'Saalfelden am Steinernen Meer',
  'Mödling',
  'Lustenau',
  'Linz',
  'Leonding',
  'Leoben',
  'Kufstein',
  'Krems an der Donau',
  'Klosterneuburg',
  'Klagenfurt am Wörthersee',
  'Kapfenberg',
  'Innsbruck',
  'Hallein',
  'Graz',
  'Feldkirch',
  'Dornbirn',
  'Bregenz',
  'Braunau am Inn',
  'Baden',
  'Amstetten',
  'Ansfelden',
  'Whyalla',
  'Rockingham',
  'Prospect',
  'Port Hedland',
  'Perth',
  'Murray Bridge',
  'Mount Isa',
  'Morphett Vale',
  'Mandurah',
  'Kwinana',
  'Kalgoorlie',
  'Gosnells',
  'Geraldton',
  'Gawler',
  'Fremantle',
  'Darwin',
  'Busselton',
  'Bunbury',
  'Armadale',
  'Alice Springs',
  'Albany',
  'Adelaide',
  'Woodridge',
  'Wodonga',
  'Werribee',
  'Warrnambool',
  'Wantirna South',
  'Wangaratta',
  'Wagga Wagga',
  'Traralgon',
  'Townsville',
  'Toowoomba',
  'Thornbury',
  'Thomastown',
  'Tarneit',
  'Taree',
  'Tamworth',
  'Sydney',
  'Surfers Paradise',
  'Sunnybank',
  'Sunbury',
  'Port Stephens',
  'Springvale',
  'Southport',
  'South Grafton',
  'Shepparton',
  'Seaford',
  'Saint Kilda',
  'Saint Albans',
  'Rowville',
  'Rockhampton',
  'Richmond',
  'Reservoir',
  'Queanbeyan',
  'Quakers Hill',
  'Preston',
  'Port Macquarie',
  'Point Cook',
  'Pakenham South',
  'Orange',
  'Nowra',
  'Northcote',
  'Noble Park',
  'Newcastle',
  'Nerang',
  'Narre Warren',
  'Narangba',
  'Mulgrave',
  'Mount Martha',
  'Mount Gambier',
  'Mount Eliza',
  'Mosman',
  'Mornington',
  'Morayfield',
  'Moe',
  'Mill Park',
  'Mildura',
  'Melton',
  'Melbourne',
  'Maryborough',
  'Marrickville',
  'Maroubra',
  'Maitland',
  'Mackay',
  'Liverpool',
  'Lismore',
  'Lilydale',
  'Launceston',
  'Lara',
  'Langwarrin',
  'Lalor',
  'Keysborough',
  'Kew',
  'Katoomba',
  'Hornsby',
  'Hobart',
  'Hawthorn South',
  'Hampton Park',
  'Griffith',
  'Greensborough',
  'Granville',
  'Goulburn',
  'Gold Coast',
  'Glenroy',
  'Glenferrie',
  'Gladstone',
  'Geelong',
  'Frankston East',
  'Frankston',
  'Forster',
  'Essendon',
  'Epping',
  'Epping',
  'Engadine',
  'Eltham',
  'Echuca',
  'Earlwood',
  'Dubbo',
  'Doncaster East',
  'Doncaster',
  'Devonport',
  'Deer Park',
  'Deception Bay',
  'Dandenong',
  'Cronulla',
  'Cranbourne',
  'Cranbourne',
  'Craigieburn',
  'Coffs Harbour',
  'Coburg',
  'Clayton',
  'Wollongong',
  'Cessnock',
  'Castle Hill',
  'Carrum Downs',
  'Carnegie',
  'Carlingford',
  'Caringbah',
  'Canberra',
  'Camberwell',
  'Caloundra',
  'Cairns',
  'Caboolture',
  'Burnie',
  'Bundaberg',
  'Buderim',
  'Brunswick',
  'Broken Hill',
  'Brisbane',
  'Boronia',
  'Blacktown',
  'Berwick',
  'Bendigo',
  'Baulkham Hills',
  'Bathurst',
  'Banora Point',
  'Bankstown',
  'Ballarat',
  'Auburn',
  'Ashfield',
  'Armidale',
  'Albury',
  'South Brisbane',
  'Cheltenham',
  'Randwick',
  'Dee Why',
  'Umina',
  'Palmerston',
  'Bracken Ridge',
  'North Ryde',
  'Hoppers Crossing',
  'Logan City',
  'Carindale',
  'Paramatta',
  'Ferntree Gully',
  'City of Parramatta',
  'Adelaide Hills',
  'Canning Vale',
  'Glenmore Park',
  'Glen Iris',
  'Balwyn North',
  'Carnegie',
  'Malvern East',
  'Brighton East',
  'Booval',
  'St Albans',
  'Endeavour Hills',
  'Clayton',
  'Taylors Lakes',
  'Roxburgh Park',
  'Wyndham Vale',
  'Willetton',
  'Thornbury',
  'Thornlie',
  'Hillside',
  'Bundoora',
  'Forest Lake',
  'Sunnybank Hills',
  'Narre Warren South',
  'Dandenong North',
  'Frankston South',
  'Sunshine West',
  'Altona Meadows',
  'West Pennant',
  'Oranjestad',
  'Babijn',
  'Angochi',
  'Mariehamn',
  'Xankandi',
  'Əhmədbəyli',
  'Shushi',
  'Salyan',
  'Saatlı',
  'Neftçala',
  'Nakhchivan',
  'Lankaran',
  'Imishli',
  'Fizuli',
  'Dzhalilabad',
  'Pushkino',
  'Beylagan',
  'Astara',
  'Şirvan',
  'Ağdam',
  'Zaqatala',
  'Zabrat',
  'Yevlakh',
  'Yelenendorf',
  'Xaçmaz',
  'Ujar',
  'Terter',
  'Sumqayıt',
  'Qaraçuxur',
  'Shamkhor',
  'Shamakhi',
  'Sheki',
  'Sabunçu',
  'Sabirabad',
  'Qusar',
  'Quba',
  'Hacıqabul',
  'Qazax',
  'Hacı Zeynalabdin',
  'Mingelchaur',
  'Maştağa',
  'Mardakan',
  'Lökbatan',
  'Kyurdarmir',
  'Khirdalan',
  'Yeni Suraxanı',
  'Geoktschai',
  'Hövsan',
  'Ganja',
  'Divichibazar',
  'Buzovna',
  'Biny Selo',
  'Barda',
  'Bilajari',
  'Baku',
  'Amirdzhan',
  'Aghsu',
  'Ağdaş',
  'Agdzhabedy',
  'Bakıxanov',
  'Zenica',
  'Visoko',
  'Velika Kladuša',
  'Tuzla',
  'Trebinje',
  'Travnik',
  'Sarajevo',
  'Prijedor',
  'Mostar',
  'Gradačac',
  'Gračanica',
  'Goražde',
  'Doboj',
  'Cazin',
  'Bugojno',
  'Brčko',
  'Bosanska Krupa',
  'Bijeljina',
  'Bihać',
  'Banja Luka',
  'Konjic',
  'Bridgetown',
  'Thākurgaon',
  'Teknāf',
  'Tungi',
  'Sylhet',
  'Dohār',
  'Jamālpur',
  'Shibganj',
  'Sātkhira',
  'Sirājganj',
  'Netrakona',
  'Narsingdi',
  'Sandwīp',
  'Shāhzādpur',
  'Rāmganj',
  'Rājshāhi',
  'Pirojpur',
  'Panchagarh',
  'Patiya',
  'Parbatipur',
  'Nārāyanganj',
  'Nālchiti',
  'Nāgarpur',
  'Nageswari',
  'Mymensingh',
  'Muktāgācha',
  'Mirzāpur',
  'Maulavi Bāzār',
  'Morrelgonj',
  'Mehendiganj',
  'Mathba',
  'Lalmanirhat',
  'Lākshām',
  'Comilla',
  'Rangpur',
  'Kushtia',
  'Kālīganj',
  'Jhingergācha',
  'Joypur Hāt',
  'Ishurdi',
  'Habiganj',
  'Gaurnadi',
  'Gafargaon',
  'Feni',
  'Rāipur',
  'Sarankhola',
  'Dhaka',
  'Chilmāri',
  'Chhāgalnāiya',
  'Lālmohan',
  'Khagrachhari',
  'Chhātak',
  'Bhātpāra Abhaynagar',
  'Bherāmāra',
  'Bhairab Bāzār',
  'Bāndarban',
  'Kālia',
  'Baniachang',
  'Bājitpur',
  'Badarganj',
  'Narail',
  'Tungipāra',
  'Sarishābāri',
  'Sakhipur',
  'Raojān',
  'Phultala',
  'Pālang'
]

module.exports = cities
