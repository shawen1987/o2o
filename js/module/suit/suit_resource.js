// 5 structures can be selected.
// 4 of them are the same for now since only 中山/立领/礼服 不选领带
var Suit_Structures = [
    {
        // ModelStructure decide which 3D model to be used. here the image path
        "id": "default", // currently id identifies from skirt or trausers
        "version": "0.1", // mark the implication to track in git
        "root": {
            "type": "XF01",
            "children": [
                { "type": "XF05" },
                { "type": "XF01" },
                { "type": "XF02" },
                { "type": "XF04" },
                { "type": "XF07" },
                { "type": "XF13" },
                {
                    "type": "XF08",
                    "children": [{ "type": "XF11" }]
                }
            ]
        }
        , "displayOrder": [
            "XF05",
            "XF01",
            "XF02",
            "XF04",
            "XF07",
            "XF13",
            "XF08",
            "XF11"
        ]
    },
    {   // 五粒扣没有领带[XF13]，只能选立领[XF08004]，立领没有插花眼[XF11]
        // ModelStructure decide which 3D model to be used. here the image path
        "id": "XF01004", // currently id identifies from skirt or trausers
        "version": "0.1", // mark the implication to track in git
        "root": {
            "type": "XF01",
            "children": [
                { "type": "XF05" },
                { "type": "XF01" },
                { "type": "XF02" },
                { "type": "XF04" },
                { "type": "XF07" },
                {
                    "type": "XF08"
                }
            ]
        }
        , "displayOrder": [
            "XF05",
            "XF01",
            "XF02",
            "XF04",
            "XF07",
            "XF08"
        ]
    },
    {   // 青果领没有插花眼
        // ModelStructure decide which 3D model to be used. here the image path
        "id": "XF08003", // currently id identifies from skirt or trausers
        "version": "0.1", // mark the implication to track in git
        "root": {
            "type": "XF01",
            "children": [
                { "type": "XF05" },
                { "type": "XF01" },
                { "type": "XF02" },
                { "type": "XF04" },
                { "type": "XF07" },
                { "type": "XF13" },
                {
                    "type": "XF08"
                }
            ]
        }
        , "displayOrder": [
            "XF05",
            "XF01",
            "XF02",
            "XF04",
            "XF07",
            "XF13",
            "XF08"
        ]
    }
];

// CORE DATA
var SUIT_CORE_DATA = {
    "secnes": [
        {
            "type":1,
            "name":"商务正装",
            "styles":[
                // 1-1
                {
                    "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01001","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00902","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1109","type": "prod.part.lingdai","isChanged": true},
                        {"no": "AA013127-1101","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01001",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/1_1.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                // 1-2
                {
                    "fabric": {"no": "53","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01002","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08002","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1192","type": "prod.part.lingdai","isChanged": true},
                        {"no": "WZZNJ","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01002",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/1-2-1033019.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                //1-3
                {
                    "fabric": {"no": "57","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01003","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1033","type": "prod.part.lingdai","isChanged": true},
                        {"no": "A020034-32L-GOLD","type": "prod.part.kouzi","isChanged": true}  
                    ],
                    "imageSize": 16,
                    "style": "XF01003",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/3-3-1044071.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                //1-5
                {
                    "fabric": {"no": "33","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01004","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF08004","type": "XF08","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "2042_GOLD","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01004",
                    "structure": Suit_Structures[1],
                    "img":"./img/suit/1-5-1030626.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "33","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                //1-6
                {
                    "fabric": {"no": "49","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01005","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08002","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1144","type": "prod.part.lingdai","isChanged": true},
                        {"no": "EH020678-DM-BD","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01005",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/2-6-1011012.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                }
            ]
        },
        {
            "type":2,
            "name":"都市时尚",
            "styles":[
                /*{
                    "name":"XF01003",
                    "title":"",
                    "desc":[],
                    "img":"./img/suit/1_1.png"
                }*/
                // 2-1
                {
                   "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01001","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00902","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1109","type": "prod.part.lingdai","isChanged": true},
                        {"no": "AA013127-1101","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01001",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/1_1.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01002",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                // 2-2
                {
                   "fabric": {"no": "53","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01002","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08002","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1192","type": "prod.part.lingdai","isChanged": true},
                        {"no": "WZZNJ","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01002",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/1-2-1033019.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02001","type": "XK02","isChanged": true},
                            {"no": "XK01002","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01002",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                },
                //2-3
                {
                    "fabric": {"no": "57","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01003","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1033","type": "prod.part.lingdai","isChanged": true},
                        {"no": "A020034-32L-GOLD","type": "prod.part.kouzi","isChanged": true}  
                    ],
                    "imageSize": 16,
                    "style": "XF01003",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/3-3-1044071.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "1","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02001","type": "XK02","isChanged": true},
                            {"no": "XK01002","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01002",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png"
                    }
                }
            ]
        },
        {
            "type":3,
            "name":"休闲单西",
            "styles":[
                /*{
                    "name":"XF01004",
                    "title":"",
                    "desc":[],
                    "img":"./img/suit/1_2.png"
                }*/
                //3-1
                {
                    "fabric": {"no": "28","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05003","type": "XF05","isChanged": true},
                        {"no": "XF01001","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1033","type": "prod.part.lingdai","isChanged": true},
                        {"no": "WZZNJ","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01001",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/3_1.png",
                    "coordinatesAbility":false
                },
                // 3-2
                {
                   "fabric": {"no": "53","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01002","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08002","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1192","type": "prod.part.lingdai","isChanged": true},
                        {"no": "WZZNJ","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01002",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/1-2-1033019.png",
                    "coordinatesAbility":false
                },
                //3-3
                {
                    "fabric": {"no": "57","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05002","type": "XF05","isChanged": true},
                        {"no": "XF01003","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08001","type": "XF08","isChanged": true},
                        {"no": "XF11001","type": "XF11","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1033","type": "prod.part.lingdai","isChanged": true},
                        {"no": "A020034-32L-GOLD","type": "prod.part.kouzi","isChanged": true}  
                    ],
                    "imageSize": 16,
                    "style": "XF01003",
                    "structure": Suit_Structures[0],
                    "img":"./img/suit/3-3-1044071.png",
                    "coordinatesAbility":false
                }
            ]
        },
        {
            "type":4,
            "name":"婚庆礼服",
            "styles":[
                /*{
                    "name":"XF01005",
                    "title":"",
                    "desc":[],
                    "img":"./img/suit/1_1.png"
                }*/
                // 4-1
                {
                    "fabric": {"no": "41","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XFBZF001",
                    "crafts": [
                        {"no": "XF05001","type": "XF05","isChanged": true},
                        {"no": "XF01001","type": "XF01","isChanged": true},
                        {"no": "XF02003","type": "XF02","isChanged": true},
                        {"no": "XF04001","type": "XF04","isChanged": true},
                        {"no": "XF07002","type": "XF07","isChanged": true},
                        {"no": "XF13001","type": "XF13","isChanged": true},
                        {"no": "XF08003","type": "XF08","isChanged": true}
                    ],
                    "parts": [
                        {"no": "00617","type": "prod.part.xian","isChanged": true},
                        {"no": "FDMS1144","type": "prod.part.lingdai","isChanged": true},
                        {"no": "WZZNJ","type": "prod.part.kouzi","isChanged": true}
                    ],
                    "imageSize": 16,
                    "style": "XF01001",
                    "structure": Suit_Structures[2],
                    "img":"./img/suit/4-1-AA38-1.png",
                    "coordinatesAbility":true,
                    "isCoordinates":true,
                    "pants":{
                        "fabric": {"no": "41","brand": "ruyi","isChanged": true},
                        "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                        "patternNo": "XKBZF001",
                        "crafts": [
                            {"no": "XK02003","type": "XK02","isChanged": true},
                            {"no": "XK01001","type": "XK01","isChanged": true},
                            {"no": "XK04001","type": "XK04","isChanged": true},
                            {"no": "XK05002","type": "XK05","isChanged": true},
                            {"no": "XK06003","type": "XK06","isChanged": true}
                        ],
                        "parts": [],
                        "imageSize": 16,
                        "style": "XK01001",
                        "structure": Pants_Structures[0],
                        "img":"./img/pants/1-1.png",
                        "coordinatesAbility":false
                    }
                }
            ]
        }
    ],
    "crafts": [
    {
        "type": "XF05",
        "data": [
            {
                "no": "XF05003",
                "name": "无分叉",
                "craftName": "分叉",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01002",
                "description": "XF05003"
            },
            {
                "no": "XF05001",
                "name": "单分叉",
                "craftName": "分叉",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01001",
                "description": "XF05001"
            },
            {
                "no": "XF05002",
                "name": "双分叉",
                "craftName": "分叉",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01004",
                "description": "XF05002"
            }
        ]
    },
    {
        "type": "XF04",
        "data": [
            {
                "no": "XF04003",
                "name": "明贴袋",
                "craftName": "手巾袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01005",
                "description": "明贴袋"
            },
            {
                "no": "XF04001",
                "name": "正常手巾袋",
                "craftName": "手巾袋",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01001",
                "description": "正常手巾袋"
            },
            {
                "no": "XF04002",
                "name": "弧形小圆角袋",
                "craftName": "手巾袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01002",
                "description": "弧形小圆角袋"
            }
        ]
    },
    {
        "type": "XF11",
        "data": [
            {
                "no": "XF11001",
                "name": "插花眼",
                "craftName": "插花眼",
                "level": 0,
                "default": true,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.xian",
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08002",
                "description": "XF11001"
            }
        ]
    },
    {
        "type": "XF02",
        "data": [
            {
                "no": "XF02006",
                "name": "正常口袋加票据袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "正常口袋加票据袋"
            },
            {
                "no": "XF02007",
                "name": "单支线袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "单支线袋"
            },
            {
                "no": "XF02004",
                "name": "斜正常口袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "斜正常口袋"
            },
            {
                "no": "XF02005",
                "name": "双支线袋加票据袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "双支线袋加票据袋"
            },
            {
                "no": "XF02002",
                "name": "斜双支线袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "斜双支线袋"
            },
            {
                "no": "XF02003",
                "name": "正常口袋",
                "craftName": "下口袋",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "正常口袋"
            },
            {
                "no": "XF02001",
                "name": "双支线袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "双支线袋"
            },
            {
                "no": "XF02008",
                "name": "斜单支线袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "斜单支线袋"
            },
            {
                "no": "XF02009",
                "name": "明贴袋",
                "craftName": "下口袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "明贴袋"
            }
        ]
    },
    {
        "type": "XF09",
        "data": [
            {
                "no": "XF09001",
                "name": "正常",
                "craftName": "胸巾",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01003",
                "description": "XF09001"
            },
            {
                "no": "XF09002",
                "name": "弧形小圆角",
                "craftName": "胸巾",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01002",
                "description": "XF09002"
            }
        ]
    },
    {
        "type": "XF08",
        "data": [
            {
                "no": "XF08001",
                "name": "平驳领",
                "craftName": "领型",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01005",
                "description": "XF08001"
            },
            {
                "no": "XF08002",
                "name": "戗驳领",
                "craftName": "领型",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01001",
                "description": "XF08002"
            },
            {
                "no": "XF08003",
                "name": "青果领",
                "craftName": "领型",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01005",
                "description": "XF08003"
            },
            {
                "no": "XF08004",
                "name": "立领",
                "craftName": "领型",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01004",
                "description": "XF08004"
            }
        ]
    },
    {
        "type": "XF07",
        "data": [
            {
                "no": "XF07002",
                "name": "三粒平扣",
                "craftName": "袖扣",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "XF07002"
            },
            {
                "no": "XF07001",
                "name": "四粒平扣",
                "craftName": "袖扣",
                "level": 0,
                "default": true,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "XF07001"
            },
            {
                "no": "XF07003",
                "name": "五粒平扣",
                "craftName": "袖扣",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
                "description": "XF07003"
            }
        ]
    },
    {
        "type": "XF13",
        "data": [
            {
                "no": "XF13001",
                "name": "领带",
                "craftName": "领带",
                "level": 0,
                "default": true,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.lingdai",
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XF01003",
                "description": "XF13001"
            }
        ]
    },
    {
        "type": "XF01",
        "data": [
            {
                "no": "XF01001",
                "name": "单排一粒扣",
                "craftName": "门襟",
                "level": 0,
                "default": true,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": true,
                "description": "恰到好处的腰部修身，有款有型，简约玩味时尚。<br />适合场合：休闲场合"
            },
            {
                "no": "XF01002",
                "name": "单排二粒扣",
                "craftName": "门襟",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": true,
                "description": "精致匠心工艺，集经典、端庄、严谨于一身，成功男士，品味生活。<br />休闲场合：商务、宴会、休闲等场合"
            },
            {
                "no": "XF01005",
                "name": "双排六粒扣",
                "craftName": "门襟",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": true,
                "description": "会上瘾的单品：贵族式的腔调，商业大腕的气息，服装界真正的“贵公子”。<br />适合场合：外交、表演等场合"
            },
            {
                "no": "XF01003",
                "name": "单排三粒扣",
                "craftName": "门襟",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": true,
                "description": "绅士格型，复古百搭，凸显尊贵品味。<br />适合场合：商务、宴会等正式场合"
            },
            {
                "no": "XF01004",
                "name": "单排五粒扣",
                "craftName": "门襟",
                "level": 0,
                "default": false,
                "relFabric": false,
                "relPart": true,
                "relVal": "prod.part.kouzi",
                "hasimg": true,
                "mainModel": true,
                "description": "中华立领，品质传承，极具民族特色，精致更经典。<br />适合场合：商务、宴会等正式场合"
            }
        ]
    }
]
};
// rulegroups defination:
//// RuleGroup - Model related
//var rulesGroup = 
//{
//    "craftType": [
//        {
//            "crafId": [
//                {
//                    "craftAttributeValue": [
//                        "[connnectCrafId|connnectCrafIdsFolderName]"
//                    ]   
//                }
//            ]
//        }
//    ]
//}
//;
var Suit_RulesGroup = [{"XF09":[{"XF09002":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]},{"XF09001":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01003","XF01002","XF01005"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]}]},{"XF07":[{"XF07001":[{"EC000184":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127-1103":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"A020034-34L":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042_GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-DM-BD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"baokou-bk":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"A020034-32L-GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-BT":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EC000599":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"FY-227":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127-1101":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-SMK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"BLSK1052":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-M":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-HD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"YX4975":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"77ZBK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-B":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1835_BLUE":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"DW809-1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"WZZNJ":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13LBK0262":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF07003":[{"EC000184":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127-1103":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"A020034-34L":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042_GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-DM-BD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"baokou-bk":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"A020034-32L-GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-BT":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EC000599":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"FY-227":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127-1101":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-SMK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"BLSK1052":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-M":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-HD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"YX4975":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"77ZBK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-B":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1835_BLUE":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"DW809-1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"WZZNJ":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13LBK0262":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF07002":[{"EC000184":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"A020034-34L":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042_GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-DM-BD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"baokou-bk":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"A020034-32L-GOLD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2042":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-BT":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EC000599":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"FY-227":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127-1101":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"AA013127":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-SMK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"BLSK1052":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-M":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"EH020678-24L-HD":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"YX4975":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"77ZBK":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2H021229-B":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1835_BLUE":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"DW809-1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"WZZNJ":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13LBK0262":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]}]},{"XF11":[{"XF11001":[{"00617":["XF08001","XF08002"]},{"00902":["XF08001","XF08002"]},{"09696":["XF08001","XF08002"]}]}]},{"XF02":[{"XF02004":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02003":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02001":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02007":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02008":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02005":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"24":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"26":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"47":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"29":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"23":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"39":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"34":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"27":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"22":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"30":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02002":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02006":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"24":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"26":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"47":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"29":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"23":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"39":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"34":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"27":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"31":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"22":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"30":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]},{"XF02009":[{"15":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"33":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"8":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"14":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"28":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"59":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"18":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"21":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"43":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"35":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"48":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"1":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"17":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"44":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"55":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"4":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"41":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"45":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"25":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"51":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"62":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"56":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"49":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"11":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"60":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"54":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"2":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"53":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"16":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"12":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"10":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"5":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"46":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"6":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"57":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"50":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"9":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"20":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"3":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"37":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"7":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"58":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"52":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"42":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"19":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]},{"13":["XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005"]}]}]},{"XF08":[{"XF08001":[{"15":["XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01001","XF01003","XF01002","XF01005"]},{"59":["XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01001","XF01003","XF01002","XF01005"]},{"51":["XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01001","XF01003","XF01002","XF01005"]},{"60":["XF08001"]},{"54":["XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01001","XF01003","XF01002","XF01005"]}]},{"XF08002":[{"15":["XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01001","XF01003","XF01002","XF01005"]},{"59":["XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01001","XF01003","XF01002","XF01005"]},{"51":["XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01001","XF01003","XF01002","XF01005"]},{"54":["XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01001","XF01003","XF01002","XF01005"]}]},{"XF08004":[{"15":["XF01004"]},{"33":["XF01004"]},{"8":["XF01004"]},{"14":["XF01004"]},{"28":["XF01004"]},{"24":["XF01004"]},{"59":["XF01004"]},{"18":["XF01004"]},{"26":["XF01004"]},{"21":["XF01004"]},{"43":["XF01004"]},{"47":["XF01004"]},{"35":["XF01004"]},{"48":["XF01004"]},{"1":["XF01004"]},{"17":["XF01004"]},{"29":["XF01004"]},{"44":["XF01004"]},{"55":["XF01004"]},{"4":["XF01004"]},{"41":["XF01004"]},{"45":["XF01004"]},{"25":["XF01004"]},{"51":["XF01004"]},{"62":["XF01004"]},{"56":["XF01004"]},{"49":["XF01004"]},{"11":["XF01004"]},{"60":["XF08004"]},{"54":["XF01004"]},{"2":["XF01004"]},{"53":["XF01004"]},{"16":["XF01004"]},{"12":["XF01004"]},{"10":["XF01004"]},{"5":["XF01004"]},{"23":["XF01004"]},{"46":["XF01004"]},{"6":["XF01004"]},{"57":["XF01004"]},{"39":["XF01004"]},{"50":["XF01004"]},{"9":["XF01004"]},{"20":["XF01004"]},{"3":["XF01004"]},{"37":["XF01004"]},{"7":["XF01004"]},{"34":["XF01004"]},{"58":["XF01004"]},{"52":["XF01004"]},{"42":["XF01004"]},{"27":["XF01004"]},{"31":["XF01004"]},{"22":["XF01004"]},{"19":["XF01004"]},{"13":["XF01004"]},{"30":["XF01004"]}]},{"XF08003":[{"15":["XF01001","XF01002","XF01005"]},{"33":["XF01001","XF01002","XF01005"]},{"8":["XF01001","XF01002","XF01005"]},{"14":["XF01001","XF01002","XF01005"]},{"63":["XF01001","XF01002","XF01005"]},{"28":["XF01001","XF01002","XF01005"]},{"24":["XF01001","XF01002","XF01005"]},{"59":["XF01001","XF01002","XF01005"]},{"18":["XF01001","XF01002","XF01005"]},{"26":["XF01001","XF01002","XF01005"]},{"21":["XF01001","XF01002","XF01005"]},{"43":["XF01001","XF01002","XF01005"]},{"47":["XF01001","XF01002","XF01005"]},{"35":["XF01001","XF01002","XF01005"]},{"48":["XF01001","XF01002","XF01005"]},{"1":["XF01001","XF01002","XF01005"]},{"17":["XF01001","XF01002","XF01005"]},{"29":["XF01001","XF01002","XF01005"]},{"44":["XF01001","XF01002","XF01005"]},{"55":["XF01001","XF01002","XF01005"]},{"4":["XF01001","XF01002","XF01005"]},{"41":["XF01001","XF01002","XF01005"]},{"45":["XF01001","XF01002","XF01005"]},{"25":["XF01001","XF01002","XF01005"]},{"32":["XF01001","XF01002","XF01005"]},{"51":["XF01001","XF01002","XF01005"]},{"62":["XF01001","XF01002","XF01005"]},{"56":["XF01001","XF01002","XF01005"]},{"49":["XF01001","XF01002","XF01005"]},{"61":["XF01001","XF01002","XF01005"]},{"11":["XF01001","XF01002","XF01005"]},{"60":["XF01001","XF01002","XF08003","XF01005"]},{"54":["XF01001","XF01002","XF01005"]},{"2":["XF01001","XF01002","XF01005"]},{"53":["XF01001","XF01002","XF01005"]},{"16":["XF01001","XF01002","XF01005"]},{"12":["XF01001","XF01002","XF01005"]},{"10":["XF01001","XF01002","XF01005"]},{"5":["XF01001","XF01002","XF01005"]},{"23":["XF01001","XF01002","XF01005"]},{"46":["XF01001","XF01002","XF01005"]},{"6":["XF01001","XF01002","XF01005"]},{"57":["XF01001","XF01002","XF01005"]},{"39":["XF01001","XF01002","XF01005"]},{"50":["XF01001","XF01002","XF01005"]},{"9":["XF01001","XF01002","XF01005"]},{"20":["XF01001","XF01002","XF01005"]},{"3":["XF01001","XF01002","XF01005"]},{"37":["XF01001","XF01002","XF01005"]},{"7":["XF01001","XF01002","XF01005"]},{"34":["XF01001","XF01002","XF01005"]},{"58":["XF01001","XF01002","XF01005"]},{"52":["XF01001","XF01002","XF01005"]},{"42":["XF01001","XF01002","XF01005"]},{"27":["XF01001","XF01002","XF01005"]},{"31":["XF01001","XF01002","XF01005"]},{"22":["XF01001","XF01002","XF01005"]},{"19":["XF01001","XF01002","XF01005"]},{"13":["XF01001","XF01002","XF01005"]},{"30":["XF01001","XF01002","XF01005"]}]}]},{"XF01":[{"XF01004":[{"EC000184":["XF01004"]},{"15":["XF01004"]},{"33":["XF01004"]},{"AA013127-1103":["XF01004"]},{"8":["XF01004"]},{"14":["XF01004"]},{"28":["XF01004"]},{"24":["XF01004"]},{"18":["XF01004"]},{"26":["XF01004"]},{"21":["XF01004"]},{"43":["XF01004"]},{"47":["XF01004"]},{"35":["XF01004"]},{"A020034-34L":["XF01004"]},{"48":["XF01004"]},{"1":["XF01004"]},{"17":["XF01004"]},{"29":["XF01004"]},{"44":["XF01004"]},{"2042_GOLD":["XF01004"]},{"EH020678-DM-BD":["XF01004"]},{"4":["XF01004"]},{"41":["XF01004"]},{"A020034-32L-GOLD":["XF01004"]},{"2042":["XF01004"]},{"45":["XF01004"]},{"EH020678-24L-BT":["XF01004"]},{"25":["XF01004"]},{"32":["XF01004"]},{"11":["XF01004"]},{"54":["XF01004"]},{"2":["XF01004"]},{"16":["XF01004"]},{"EC000599":["XF01004"]},{"12":["XF01004"]},{"FY-227":["XF01004"]},{"10":["XF01004"]},{"AA013127-1101":["XF01004"]},{"5":["XF01004"]},{"A030025-32L":["XF01004"]},{"AA013127":["XF01004"]},{"23":["XF01004"]},{"2H021229-SMK":["XF01004"]},{"BLSK1052":["XF01004"]},{"2H021229-M":["XF01004"]},{"EH020678-24L-HD":["XF01004"]},{"46":["XF01004"]},{"6":["XF01004"]},{"39":["XF01004"]},{"9":["XF01004"]},{"YX4975":["XF01004"]},{"77ZBK":["XF01004"]},{"20":["XF01004"]},{"3":["XF01004"]},{"37":["XF01004"]},{"7":["XF01004"]},{"2H021229-B":["XF01004"]},{"34":["XF01004"]},{"1835_BLUE":["XF01004"]},{"DW809-1":["XF01004"]},{"42":["XF01004"]},{"27":["XF01004"]},{"31":["XF01004"]},{"22":["XF01004"]},{"19":["XF01004"]},{"13":["XF01004"]},{"A020034-32L":["XF01004"]},{"30":["XF01004"]},{"WZZNJ_bak":["XF01004"]},{"EH020678-DM-HD":["XF01004"]},{"WZZNJ":["XF01004"]},{"13LBK0262":["XF01004"]}]},{"XF01001":[{"EC000184":["XF01001"]},{"AA013127-1103":["XF01001"]},{"A020034-34L":["XF01001"]},{"2042_GOLD":["XF01001"]},{"EH020678-DM-BD":["XF01001"]},{"baokou-bk":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"A020034-32L-GOLD":["XF01001"]},{"2042":["XF01001"]},{"EH020678-24L-BT":["XF01001"]},{"EC000599":["XF01001"]},{"FY-227":["XF01001"]},{"AA013127-1101":["XF01001"]},{"AA013127":["XF01001"]},{"2H021229-SMK":["XF01001"]},{"BLSK1052":["XF01001"]},{"2H021229-M":["XF01001"]},{"EH020678-24L-HD":["XF01001"]},{"YX4975":["XF01001"]},{"77ZBK":["XF01001"]},{"2H021229-B":["XF01001"]},{"1835_BLUE":["XF01001"]},{"DW809-1":["XF01001"]},{"WZZNJ":["XF01001"]},{"13LBK0262":["XF01001"]}]},{"XF01003":[{"EC000184":["XF01003"]},{"AA013127-1103":["XF01003"]},{"A020034-34L":["XF01003"]},{"2042_GOLD":["XF01003"]},{"EH020678-DM-BD":["XF01003"]},{"A020034-32L-GOLD":["XF01003"]},{"2042":["XF01003"]},{"EH020678-24L-BT":["XF01003"]},{"EC000599":["XF01003"]},{"FY-227":["XF01003"]},{"AA013127-1101":["XF01003"]},{"AA013127":["XF01003"]},{"2H021229-SMK":["XF01003"]},{"BLSK1052":["XF01003"]},{"2H021229-M":["XF01003"]},{"EH020678-24L-HD":["XF01003"]},{"YX4975":["XF01003"]},{"77ZBK":["XF01003"]},{"2H021229-B":["XF01003"]},{"1835_BLUE":["XF01003"]},{"DW809-1":["XF01003"]},{"WZZNJ":["XF01003"]},{"13LBK0262":["XF01003"]}]},{"XF01002":[{"EC000184":["XF01002"]},{"AA013127-1103":["XF01002"]},{"A020034-34L":["XF01002"]},{"2042_GOLD":["XF01002"]},{"EH020678-DM-BD":["XF01002"]},{"baokou-bk":["XF08001,XF08002,XF01002,XF08003,XF01001,XF08004"]},{"A020034-32L-GOLD":["XF01002"]},{"2042":["XF01002"]},{"EH020678-24L-BT":["XF01002"]},{"EC000599":["XF01002"]},{"FY-227":["XF01002"]},{"AA013127-1101":["XF01002"]},{"AA013127":["XF01002"]},{"2H021229-SMK":["XF01002"]},{"BLSK1052":["XF01002"]},{"2H021229-M":["XF01002"]},{"EH020678-24L-HD":["XF01002"]},{"YX4975":["XF01002"]},{"77ZBK":["XF01002"]},{"2H021229-B":["XF01002"]},{"1835_BLUE":["XF01002"]},{"DW809-1":["XF01002"]},{"WZZNJ":["XF01002"]},{"13LBK0262":["XF01002"]}]},{"XF01005":[{"EC000184":["XF01005"]},{"15":["XF01005"]},{"33":["XF01005"]},{"AA013127-1103":["XF01005"]},{"8":["XF01005"]},{"14":["XF01005"]},{"28":["XF01005"]},{"24":["XF01005"]},{"18":["XF01005"]},{"26":["XF01005"]},{"21":["XF01005"]},{"43":["XF01005"]},{"47":["XF01005"]},{"35":["XF01005"]},{"A020034-34L":["XF01005"]},{"48":["XF01005"]},{"1":["XF01005"]},{"17":["XF01005"]},{"29":["XF01005"]},{"44":["XF01005"]},{"2042_GOLD":["XF01005"]},{"EH020678-DM-BD":["XF01005"]},{"4":["XF01005"]},{"41":["XF01005"]},{"A020034-32L-GOLD":["XF01005"]},{"2042":["XF01005"]},{"45":["XF01005"]},{"EH020678-24L-BT":["XF01005"]},{"25":["XF01005"]},{"32":["XF01005"]},{"11":["XF01005"]},{"2":["XF01005"]},{"16":["XF01005"]},{"EC000599":["XF01005"]},{"12":["XF01005"]},{"FY-227":["XF01005"]},{"10":["XF01005"]},{"WZZNJ_Bak":["XF01005"]},{"AA013127-1101":["XF01005"]},{"5":["XF01005"]},{"A030025-32L":["XF01005"]},{"AA013127":["XF01005"]},{"23":["XF01005"]},{"2H021229-SMK":["XF01005"]},{"BLSK1052":["XF01005"]},{"2H021229-M":["XF01005"]},{"EH020678-24L-HD":["XF01005"]},{"46":["XF01005"]},{"6":["XF01005"]},{"39":["XF01005"]},{"9":["XF01005"]},{"YX4975":["XF01005"]},{"77ZBK":["XF01005"]},{"20":["XF01005"]},{"3":["XF01005"]},{"37":["XF01005"]},{"7":["XF01005"]},{"2H021229-B":["XF01005"]},{"34":["XF01005"]},{"1835_BLUE":["XF01005"]},{"DW809-1":["XF01005"]},{"42":["XF01005"]},{"27":["XF01005"]},{"31":["XF01005"]},{"22":["XF01005"]},{"19":["XF01005"]},{"13":["XF01005"]},{"A020034-32L":["XF01005"]},{"30":["XF01005"]},{"EH020678-DM-HD":["XF01005"]},{"WZZNJ":["XF01005"]},{"13LBK0262":["XF01005"]}]}]},{"XF05":[{"XF05002":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"32":["XF01004"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"60":["XF01001","XF01002"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004"]},{"31":["XF01004"]},{"22":["XF01004"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004"]}]},{"XF05003":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"32":["XF01004"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01003","XF01005"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]},{"XF05001":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"32":["XF01004"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004"]},{"31":["XF01004"]},{"22":["XF01004"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004"]}]}]},{"XF13":[{"XF13001":[{"FDZP316":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1144":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1033":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1110":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1178":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1037":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1118":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1112":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1158":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1032":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1192":["XF01001","XF01003","XF01002","XF01005"]},{"FDMS1109":["XF01001","XF01003","XF01002","XF01005"]}]}]},{"XF04":[{"XF04001":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"60":["XF01001","XF01002"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]},{"XF04002":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004","XF01001","XF01003","XF01002"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"60":["XF01001","XF01002"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01004","XF01001","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]},{"XF04003":[{"15":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"33":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"8":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"14":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"28":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"24":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"59":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"18":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"26":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"21":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"43":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"47":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"35":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"48":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"1":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"17":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"29":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"44":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"55":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"4":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"41":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"45":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"25":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"51":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"62":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"56":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"49":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"11":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"60":["XF01001","XF01002"]},{"54":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"2":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"53":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"16":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"12":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"10":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"5":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"23":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"46":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"6":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"57":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"39":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"50":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"9":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"20":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"3":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"37":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"7":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"34":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"58":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"52":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"42":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"27":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"31":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"22":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"19":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"13":["XF01004","XF01001","XF01003","XF01002","XF01005"]},{"30":["XF01004","XF01001","XF01003","XF01002","XF01005"]}]}]}]
;

var suitDefaultModel =
{
    "patternNo": "XFBZF001",
    "imageSize": 16,
    "fabric": {
        "type": "格子", "no": "305867-002-00022","name":"305867-002-00022","brandNo": "ML001","price":4900,"isChanged": true
    },
    "parts": [
        { "type": "prod.part.xian", "no": "00617", "isChanged": true },
        { "type": "prod.part.lingdai", "no": "FDMS1033", "isChanged": true },
        { "type": "prod.part.kouzi", "no": "E11020520", "isChanged": true }
    ],
    // above is basic
    // below is the current customization
    "style": "XF01001",
    "structure": Suit_Structures[0],
    "crafts": [
        { "type": "XF05", "no": "XF05001", "isChanged": true,"name":"单分叉"},
        { "type": "XF01", "no": "XF01001", "isChanged": true,"name":"单排一粒扣" },
        { "type": "XF02", "no": "XF02001", "isChanged": true,"name":"双支线袋" },
        { "type": "XF04", "no": "XF04001", "isChanged": true,"name":"正常手巾袋" },
        { "type": "XF07", "no": "XF07001", "isChanged": true,"name":"四粒平扣" },
        { "type": "XF13", "no": "XF13001", "isChanged": true,"name":"领带" },
        { "type": "XF08", "no": "XF08001", "isChanged": true,"name":"戗驳领" },
        { "type": "XF11", "no": "XF11001", "isChanged": true,"name":"插花眼" }
    ]
};

suitDefaultModel = {
    "fabric": {
        "no": "1",
        "name": "9196.0001.0001",
        "craftName": "面料",
        "brand": "ruyi",
        "price": 8888,
        "level": 3,
        "hasimg": true,
        "relFabric": false,
        "isChanged": true
    },
    "fabricbrand": {
        "no": "ruyi",
        "name": "如意",
        "id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"
    },
    "patternNo": "XFBZF001",
    "crafts": [
         {
            "no": "XF05003",
            "name": "无分叉",
            "craftName": "分叉",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF01002",
            "description": "XF05003",
            "type": "XF05",
            "isChanged": true
        },
        {
            "no": "XF01001",
            "name": "单排一粒扣",
            "craftName": "门襟",
            "level": 0,
            "default": true,
            "relFabric": false,
            "relPart": true,
            "relVal": "prod.part.kouzi",
            "hasimg": true,
            "mainModel": true,
            "description": "单排一粒扣",
            "type": "XF01",
            "isChanged": true
        },
        
        {
            "no": "XF02006",
            "name": "正常口袋加票据袋",
            "craftName": "下口袋",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
            "description": "正常口袋加票据袋",
            "type": "XF02",
            "isChanged": true
        },
        {
            "no": "XF04003",
            "name": "明贴袋",
            "craftName": "手巾袋",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF01005",
            "description": "明贴袋",
            "type": "XF04",
            "isChanged": true
        },
        {
            "no": "XF07002",
            "name": "三粒平扣",
            "craftName": "袖扣",
            "level": 0,
            "default": false,
            "relFabric": false,
            "relPart": true,
            "relVal": "prod.part.kouzi",
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF08001,XF01003,XF08002,XF01002,XF01001,XF01004,XF08003,XF08004,XF01005",
            "description": "XF07002",
            "type": "XF07",
            "isChanged": true
        },
        {
            "no": "XF13001",
            "name": "领带",
            "craftName": "领带",
            "level": 0,
            "default": true,
            "relFabric": false,
            "relPart": true,
            "relVal": "prod.part.lingdai",
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF01003",
            "description": "XF13001",
            "type": "XF13",
            "isChanged": true
        },
        {
            "no": "XF08001",
            "name": "平驳领",
            "craftName": "领型",
            "level": 0,
            "default": true,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XF01005",
            "description": "XF08001",
            "type": "XF08",
            "isChanged": true
        }
    ],
    "parts": [
        {
            "no": "00617",
            "name": "00617",
            "craftName": "针线",
            "hasimg": true,
            "relFabric": false,
            "description": "00617",
            "type": "prod.part.xian",
            "isChanged": true
        },
        {
            "no": "FDMS1037",
            "name": "FDMS1037",
            "craftName": "领带",
            "hasimg": true,
            "relFabric": false,
            "description": "FDMS1037",
            "type": "prod.part.lingdai",
            "isChanged": true
        },
        {
            "no": "EC000184",
            "name": "EC000184",
            "craftName": "扣子",
            "hasimg": true,
            "relFabric": false,
            "description": "EC000184",
            "type": "prod.part.kouzi",
            "isChanged": true
        }
    ],
    "imageSize": 16,
    "style": "XF01001",
    "structure": Suit_Structures[0]
};



