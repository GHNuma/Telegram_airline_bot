const vaults = [
    {
        code: 'usd',
        name: 'US Dollar',
        country: ''
    },
    {
        code: 'eur',
        name: 'Euro',
        country: ''
    },
    {
        code: 'gbp',
        name: 'British Pound Sterling',
        country: ''
    },
    {
        code: 'jpy',
        name: 'Japanese Yen',
        country: ''
    },
    {
        code: 'chf',
        name: 'Swiss Franc',
        country: ''
    },
    {
        code: 'cny',
        name: 'Chinese Yuan Renminbi',
        country: ''
    },
    {
        code: 'rub',
        name: 'Russian Ruble',
        country: ''
    },
    {
        code: 'aed',
        name: 'United Arab Emirates Dirham',
        country: ''
    },
    {
        code: 'afn',
        name: 'Afghan Afghani',
        country: ''
    },
    {
        code: 'all',
        name: 'Albanian Lek',
        country: ''
    },
    {
        code: 'amd',
        name: 'Armenian Dram',
        country: ''
    },
    {
        code: 'aoa',
        name: 'Angolan Kwanza',
        country: ''
    },
    {
        code: 'ars',
        name: 'Argentine Peso',
        country: ''
    },
    {
        code: 'aud',
        name: 'Australian Dollar',
        country: ''
    },
    {
        code: 'azn',
        name: 'Azerbaijani Manat',
        country: ''
    },
    {
        code: 'bdt',
        name: 'Bangladeshi Taka',
        country: ''
    },
    {
        code: 'bgn',
        name: 'Bulgarian Lev',
        country: ''
    },
    {
        code: 'bhd',
        name: 'Bahraini Dinar',
        country: ''
    },
    {
        code: 'bif',
        name: 'Burundian Franc',
        country: ''
    },
    {
        code: 'bnd',
        name: 'Brunei Dollar',
        country: ''
    },
    {
        code: 'bob',
        name: 'Bolivian Boliviano',
        country: ''
    },
    {
        code: 'brl',
        name: 'Brazilian Real',
        country: ''
    },
    {
        code: 'bwp',
        name: 'Botswana Pula',
        country: ''
    },
    {
        code: 'byn',
        name: 'Belarusian Ruble',
        country: ''
    },
    {
        code: 'cad',
        name: 'Canadian Dollar',
        country: ''
    },
    {
        code: 'cdf',
        name: 'Congolese Franc',
        country: ''
    },
    {
        code: 'clp',
        name: 'Chilean Peso',
        country: ''
    },
    {
        code: 'cop',
        name: 'Colombian Peso',
        country: ''
    },
    {
        code: 'crc',
        name: 'Costa Rican Colon',
        country: ''
    },
    {
        code: 'cup',
        name: 'Cuban Peso',
        country: ''
    },
    {
        code: 'czk',
        name: 'Czech Koruna',
        country: ''
    },
    {
        code: 'djf',
        name: 'Djiboutian Franc',
        country: ''
    },
    {
        code: 'dkk',
        name: 'Danish Krone',
        country: ''
    },
    {
        code: 'dzd',
        name: 'Algerian Dinar',
        country: ''
    },
    {
        code: 'egp',
        name: 'Egyptian Pound',
        country: ''
    },
    {
        code: 'ern',
        name: 'Eritrean Nakfa',
        country: ''
    },
    {
        code: 'etb',
        name: 'Ethiopian Birr',
        country: ''
    },
    {
        code: 'gel',
        name: 'Georgian Lari',
        country: ''
    },
    {
        code: 'ghs',
        name: 'Ghanaian Cedi',
        country: ''
    },
    {
        code: 'gnf',
        name: 'Guinean Franc',
        country: ''
    },
    {
        code: 'gtq',
        name: 'Guatemalan Quetzal',
        country: ''
    },
    {
        code: 'hkd',
        name: 'Hong Kong Dollar',
        country: ''
    },
    {
        code: 'hnl',
        name: 'Honduran Lempira',
        country: ''
    },
    {
        code: 'hrk',
        name: 'Croatian Kuna',
        country: ''
    },
    {
        code: 'htg',
        name: 'Haitian Gourde',
        country: ''
    },
    {
        code: 'huf',
        name: 'Hungarian Forint',
        country: ''
    },
    {
        code: 'idr',
        name: 'Indonesian Rupiah',
        country: ''
    },
    {
        code: 'ils',
        name: 'Israeli Shekel',
        country: ''
    },
    {
        code: 'inr',
        name: 'Indian Rupee',
        country: ''
    },
    {
        code: 'iqd',
        name: 'Iraqi Dinar',
        country: ''
    },
    {
        code: 'irr',
        name: 'Iranian Rial',
        country: ''
    },
    {
        code: 'isk',
        name: 'Icelandic Krona',
        country: ''
    },
    {
        code: 'jmd',
        name: 'Jamaican Dollar',
        country: ''
    },
    {
        code: 'jod',
        name: 'Jordanian Dinar',
        country: ''
    },
    {
        code: 'kes',
        name: 'Kenyan Shilling',
        country: ''
    },
    {
        code: 'kgs',
        name: 'Kyrgyzstani Som',
        country: ''
    },
    {
        code: 'khr',
        name: 'Cambodian Riel',
        country: ''
    },
    {
        code: 'kmf',
        name: 'Comorian Franc',
        country: ''
    },
    {
        code: 'kpw',
        name: 'North Korean Won',
        country: ''
    },
    {
        code: 'krw',
        name: 'South Korean Won',
        country: ''
    },
    {
        code: 'kwd',
        name: 'Kuwaiti Dinar',
        country: ''
    },
    {
        code: 'kzt',
        name: 'Kazakhstani Tenge',
        country: ''
    },
    {
        code: 'lak',
        name: 'Laotian Kip',
        country: ''
    },
    {
        code: 'lbp',
        name: 'Lebanese Pound',
        country: ''
    },
    {
        code: 'lkr',
        name: 'Sri Lankan Rupee',
        country: ''
    },
    {
        code: 'lrd',
        name: 'Liberian Dollar',
        country: ''
    },
    {
        code: 'lsl',
        name: 'Lesotho Loti',
        country: ''
    },
    {
        code: 'ltl',
        name: 'Lithuanian Litas',
        country: ''
    },
    {
        code: 'lvl',
        name: 'Latvian Lats',
        country: ''
    },
    {
        code: 'lyd',
        name: 'Libyan Dinar',
        country: ''
    },
    {
        code: 'mad',
        name: 'Moroccan Dirham',
        country: ''
    },
    {
        code: 'mdl',
        name: 'Moldovan Leu',
        country: ''
    },
    {
        code: 'mga',
        name: 'Malagasy Ariary',
        country: ''
    },
    {
        code: 'mkd',
        name: 'Macedonian Denar',
        country: ''
    },
    {
        code: 'mmk',
        name: 'Myanmar Kyat',
        country: ''
    },
    {
        code: 'mnt',
        name: 'Mongolian Tugrik',
        country: ''
    },
    {
        code: 'mop',
        name: 'Macanese Pataca',
        country: ''
    },
    {
        code: 'mro',
        name: 'Mauritanian Ouguiya',
        country: ''
    },
    {
        code: 'mur',
        name: 'Mauritian Rupee',
        country: ''
    },
    {
        code: 'mvr',
        name: 'Maldivian Rufiyaa',
        country: ''
    },
    {
        code: 'mwk',
        name: 'Malawian Kwacha',
        country: ''
    },
    {
        code: 'mxn',
        name: 'Mexican Peso',
        country: ''
    },
    {
        code: 'myr',
        name: 'Malaysian Ringgit',
        country: ''
    },
    {
        code: 'mzn',
        name: 'Mozambican Metical',
        country: ''
    },
    {
        code: 'nad',
        name: 'Namibian Dollar',
        country: ''
    },
    {
        code: 'ngn',
        name: 'Nigerian Naira',
        country: ''
    },
    {
        code: 'nio',
        name: 'Nicaraguan Cordoba',
        country: ''
    },
    {
        code: 'nok',
        name: 'Norwegian Krone',
        country: ''
    },
    {
        code: 'npr',
        name: 'Nepalese Rupee',
        country: ''
    },
    {
        code: 'nzd',
        name: 'New Zealand Dollar',
        country: ''
    },
    {
        code: 'omr',
        name: 'Omani Rial',
        country: ''
    },
    {
        code: 'pab',
        name: 'Panamanian Balboa',
        country: ''
    },
    {
        code: 'pen',
        name: 'Peruvian Sol',
        country: ''
    },
    {
        code: 'pgk',
        name: 'Papua New Guinean Kina',
        country: ''
    },
    {
        code: 'php',
        name: 'Philippine Peso',
        country: ''
    },
    {
        code: 'pkr',
        name: 'Pakistani Rupee',
        country: ''
    },
    {
        code: 'pln',
        name: 'Polish Zloty',
        country: ''
    },
    {
        code: 'pyg',
        name: 'Paraguayan Guarani',
        country: ''
    },
    {
        code: 'qar',
        name: 'Qatari Riyal',
        country: ''
    },
    {
        code: 'ron',
        name: 'Romanian Leu',
        country: ''
    },
    {
        code: 'rsd',
        name: 'Serbian Dinar',
        country: ''
    },
    {
        code: 'rwf',
        name: 'Rwandan Franc',
        country: ''
    },
    {
        code: 'sar',
        name: 'Saudi Riyal',
        country: ''
    },
    {
        code: 'sbd',
        name: 'Solomon Islands Dollar',
        country: ''
    },
    {
        code: 'scr',
        name: 'Seychellois Rupee',
        country: ''
    },
    {
        code: 'sdg',
        name: 'Sudanese Pound',
        country: ''
    },
    {
        code: 'sek',
        name: 'Swedish Krona',
        country: ''
    },
    {
        code: 'sgd',
        name: 'Singapore Dollar',
        country: ''
    },
    {
        code: 'sll',
        name: 'Sierra Leonean Leone',
        country: ''
    },
    {
        code: 'sos',
        name: 'Somali Shilling',
        country: ''
    },
    {
        code: 'srd',
        name: 'Surinamese Dollar',
        country: ''
    },
    {
        code: 'svc',
        name: 'Salvadoran Colon',
        country: ''
    },
    {
        code: 'szl',
        name: 'Swazi Lilangeni',
        country: ''
    },
    {
        code: 'thb',
        name: 'Thai Baht',
        country: ''
    },
    {
        code: 'tjs',
        name: 'Tajikistani Somoni',
        country: ''
    },
    {
        code: 'tnd',
        name: 'Tunisian Dinar',
        country: ''
    },
    {
        code: 'top',
        name: 'Tongan Paʻanga',
        country: ''
    },
    {
        code: 'try',
        name: 'Turkish Lira',
        country: ''
    },
    {
        code: 'ttd',
        name: 'Trinidad and Tobago Dollar',
        country: ''
    },
    {
        code: 'twd',
        name: 'New Taiwan Dollar',
        country: ''
    },
    {
        code: 'tzs',
        name: 'Tanzanian Shilling',
        country: ''
    },
    {
        code: 'uah',
        name: 'Ukrainian Hryvnia',
        country: ''
    },
    {
        code: 'ugx',
        name: 'Ugandan Shilling',
        country: ''
    },
    {
        code: 'uyu',
        name: 'Uruguayan Peso',
        country: ''
    },
    {
        code: 'uzs',
        name: 'Uzbekistani Som',
        country: ''
    },
    {
        code: 'vef',
        name: 'Venezuelan Bolivar',
        country: ''
    },
    {
        code: 'vnd',
        name: 'Vietnamese Dong',
        country: ''
    },
    {
        code: 'vuv',
        name: 'Vanuatu Vatu',
        country: ''
    },
    {
        code: 'wst',
        name: 'Samoan Tala',
        country: ''
    },
    {
        code: 'xaf',
        name: 'Central African CFA Franc',
        country: ''
    },
    {
        code: 'xag',
        name: 'Silver Ounce',
        country: ''
    },
    {
        code: 'xau',
        name: 'Gold Ounce',
        country: ''
    },
    {
        code: 'xcd',
        name: 'East Caribbean Dollar',
        country: ''
    },
    {
        code: 'xdr',
        name: 'Special Drawing Rights',
        country: ''
    },
    {
        code: 'xof',
        name: 'West African CFA Franc',
        country: ''
    },
    {
        code: 'xpd',
        name: 'Palladium Ounce',
        country: ''
    },
    {
        code: 'xpf',
        name: 'CFP Franc',
        country: ''
    },
    {
        code: 'xpt',
        name: 'Platinum Ounce',
        country: ''
    },
    {
        code: 'yer',
        name: 'Yemeni Rial',
        country: ''
    },
    {
        code: 'zar',
        name: 'South African Rand',
        country: ''
    },
    {
        code: 'zmw',
        name: 'Zambian Kwacha',
        country: ''
    }
];

module.exports=vaults