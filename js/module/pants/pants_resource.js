// 5 structures can be selected.
// 4 of them are the same for now since only 中山/立领/礼服 不选领带
var Pants_Structures = [
    {
        // ModelStructure decide which 3D model to be used. here the image path
        "id": "default", // currently id identifies from skirt or trausers
        "version": "0.1", // mark the implication to track in git
        "root": {
            "type": "XK01",
            "children": [
                { "type": "XK02" },
                { "type": "XK01" },
                { "type": "XK04" },
                { "type": "XK05" },
                { "type": "XK06" }
            ]
        }
        , "displayOrder": [
            "XK02",
            "XK01",
            "XK04",
            "XK05",
            "XK06"
        ]
    }
];

// CORE DATA

var PANTS_CORE_DATA = {
    "secnes": [
        {
            "type":"A",
            "name":"商务",
            "styles":[
                // A-1
                {
                    "fabric": {"no": "1","brand": "jieniya","isChanged": true},
                    "fabricbrand": {"no": "jieniya","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XKBZF001",
                    "crafts": [
                        {"no": "XK02002","type": "XK02","isChanged": true},
                        {"no": "XK01001","type": "XK01","isChanged": true},
                        {"no": "XK04001","type": "XK04","isChanged": true},
                        {"no": "XK05002","type": "XK05","isChanged": true},
                        {"no": "XK06003","type": "XK06","isChanged": true}
                    ],
                    "parts": [],
                    "imageSize": 16,
                    "style": "XK01001:XK02002",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/1-1.png"
                },
                // A-2
                {
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
                    "style": "XK01001:XK02003",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/2-41.png"
                },
                // A-3
                {
                    "fabric": {"no": "19","brand": "ruyi","isChanged": true},
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
                    "style": "XK01002:XK02001",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/3-19.png"
                },
                // A-4
                {
                    "fabric": {"no": "25","brand": "ruyi","isChanged": true},
                    "fabricbrand": {"no": "ruyi","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XKBZF001",
                    "crafts": [
                        {"no": "XK02002","type": "XK02","isChanged": true},
                        {"no": "XK01002","type": "XK01","isChanged": true},
                        {"no": "XK04001","type": "XK04","isChanged": true},
                        {"no": "XK05002","type": "XK05","isChanged": true},
                        {"no": "XK06003","type": "XK06","isChanged": true}
                    ],
                    "parts": [],
                    "imageSize": 16,
                    "style": "XK01002:XK02002",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/4-25.png"
                }
            ]
        }/*,
        {
            "type":"B",
            "name":"时尚",
            "styles":[
                // B-1
                {
                    "fabric": {"no": "1","brand": "jieniya","isChanged": true},
                    "fabricbrand": {"no": "jieniya","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XKBZF001",
                    "crafts": [
                        {"no": "XK01001","type": "XK01","isChanged": true},
                        {"no": "XK04001","type": "XK04","isChanged": true},
                        {"no": "XK05002","type": "XK05","isChanged": true},
                        {"no": "XK02003","type": "XK02","isChanged": true},
                        {"no": "XK06003","type": "XK06","isChanged": true}
                    ],
                    "parts": [],
                    "imageSize": 16,
                    "style": "XK01001:XK02001",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/1.png"
                }
            ]
        },
        {
            "type":"C",
            "name":"休闲",
            "styles":[
                // C-1
                {
                    "fabric": {"no": "1","brand": "jieniya","isChanged": true},
                    "fabricbrand": {"no": "jieniya","id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"},
                    "patternNo": "XKBZF001",
                    "crafts": [
                        {"no": "XK01001","type": "XK01","isChanged": true},
                        {"no": "XK04001","type": "XK04","isChanged": true},
                        {"no": "XK05002","type": "XK05","isChanged": true},
                        {"no": "XK02003","type": "XK02","isChanged": true},
                        {"no": "XK06003","type": "XK06","isChanged": true}
                    ],
                    "parts": [],
                    "imageSize": 16,
                    "style": "XK01001:XK02001",
                    "structure": Pants_Structures[0],
                    "img":"./img/pants/1.png"
                }
            ]
        },
        {
            "type":"D",
            "name":"婚庆",
            "styles":[
                
            ]
        }*/
    ],
    "crafts":[
    {
        "type": "XK06",
        "data": [
            {
                "no": "XK06003",
                "name": "袋盖",
                "craftName": "后袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002",
                "description": "XK06003"
            },
            {
                "no": "XK06002",
                "name": "双支线袋",
                "craftName": "后袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01001",
                "description": "XK06002"
            },
            {
                "no": "XK06001",
                "name": "单支线袋",
                "craftName": "后袋",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002",
                "description": "XK06001"
            }
        ]
    },
    {
        "type": "XK05",
        "data": [
            {
                "no": "XK05002",
                "name": "直插袋",
                "craftName": "前袋",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01001",
                "description": "XK05002"
            },
            {
                "no": "XK05003",
                "name": "无贴边双支线",
                "craftName": "前袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01001",
                "description": "XK05003"
            },
            {
                "no": "XK05001",
                "name": "斜插袋",
                "craftName": "前袋",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002",
                "description": "XK05001"
            }
        ]
    },
    {
        "type": "XK04",
        "data": [
            {
                "no": "XK04001",
                "name": "宝剑头",
                "craftName": "裤腰头",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002",
                "description": "宝剑头"
            }
        ]
    },
    {
        "type": "XK02",
        "data": [
            {
                "no": "XK02003",
                "name": "双褶",
                "craftName": "前褶",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01001",
                "description": "XK02003"
            },
            {
                "no": "XK02002",
                "name": "单褶",
                "craftName": "前褶",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002,XK01001",
                "description": "XK02002"
            },
            {
                "no": "XK02001",
                "name": "无褶",
                "craftName": "前褶",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": false,
                "applyModels": "XK01002",
                "description": "XK02001"
            }
        ]
    },
    {
        "type": "XK01",
        "data": [
            {
                "no": "XK01001",
                "name": "舒适",
                "craftName": "裤型",
                "level": 0,
                "default": false,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": true,
                "description": "XK01001"
            },
            {
                "no": "XK01002",
                "name": "修身",
                "craftName": "裤型",
                "level": 0,
                "default": true,
                "relFabric": true,
                "relPart": false,
                "hasimg": true,
                "mainModel": true,
                "description": "XK01002"
            }
        ]
    }
]
};

var Pants_RulesGroup = [{"XK01":[{"XK01001":[{"15":["XK01001"]},{"33":["XK01001"]},{"8":["XK01001"]},{"14":["XK01001"]},{"28":["XK01001"]},{"24":["XK01001"]},{"18":["XK01001"]},{"26":["XK01001"]},{"21":["XK01001"]},{"43":["XK01001"]},{"47":["XK01001"]},{"48":["XK01001"]},{"1":["XK01001"]},{"17":["XK01001"]},{"29":["XK01001"]},{"44":["XK01001"]},{"4":["XK01001"]},{"41":["XK01001"]},{"45":["XK01001"]},{"25":["XK01001"]},{"32":["XK01001"]},{"11":["XK01001"]},{"2":["XK01001"]},{"16":["XK01001"]},{"12":["XK01001"]},{"10":["XK01001"]},{"5":["XK01001"]},{"23":["XK01001"]},{"46":["XK01001"]},{"6":["XK01001"]},{"39":["XK01001"]},{"9":["XK01001"]},{"20":["XK01001"]},{"3":["XK01001"]},{"7":["XK01001"]},{"42":["XK01001"]},{"27":["XK01001"]},{"31":["XK01001"]},{"22":["XK01001"]},{"19":["XK01001"]},{"13":["XK01001"]},{"30":["XK01001"]}]},{"XK01002":[{"15":["XK01002"]},{"33":["XK01002"]},{"8":["XK01002"]},{"14":["XK01002"]},{"28":["XK01002"]},{"24":["XK01002"]},{"18":["XK01002"]},{"26":["XK01002"]},{"21":["XK01002"]},{"43":["XK01002"]},{"47":["XK01002"]},{"48":["XK01002"]},{"1":["XK01002"]},{"17":["XK01002"]},{"29":["XK01002"]},{"44":["XK01002"]},{"4":["XK01002"]},{"41":["XK01002"]},{"45":["XK01002"]},{"25":["XK01002"]},{"32":["XK01002"]},{"11":["XK01002"]},{"2":["XK01002"]},{"16":["XK01002"]},{"12":["XK01002"]},{"10":["XK01002"]},{"5":["XK01002"]},{"23":["XK01002"]},{"46":["XK01002"]},{"6":["XK01002"]},{"39":["XK01002"]},{"9":["XK01002"]},{"20":["XK01002"]},{"3":["XK01002"]},{"7":["XK01002"]},{"42":["XK01002"]},{"27":["XK01002"]},{"31":["XK01002"]},{"22":["XK01002"]},{"19":["XK01002"]},{"13":["XK01002"]},{"30":["XK01002"]}]}]},{"XK06":[{"XK06002":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]},{"XK06001":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]},{"XK06003":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]}]},{"XK05":[{"XK05001":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]},{"XK05003":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]},{"XK05002":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]}]},{"XK04":[{"XK04001":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]}]},{"XK02":[{"XK02003":[{"15":["XK01001"]},{"33":["XK01001"]},{"8":["XK01001"]},{"14":["XK01001"]},{"28":["XK01001"]},{"24":["XK01001"]},{"18":["XK01001"]},{"26":["XK01001"]},{"21":["XK01001"]},{"43":["XK01001"]},{"47":["XK01001"]},{"48":["XK01001"]},{"1":["XK01001"]},{"17":["XK01001"]},{"29":["XK01001"]},{"44":["XK01001"]},{"4":["XK01001"]},{"41":["XK01001"]},{"45":["XK01001"]},{"25":["XK01001"]},{"32":["XK01001"]},{"11":["XK01001"]},{"2":["XK01001"]},{"16":["XK01001"]},{"12":["XK01001"]},{"10":["XK01001"]},{"5":["XK01001"]},{"23":["XK01001"]},{"46":["XK01001"]},{"6":["XK01001"]},{"39":["XK01001"]},{"9":["XK01001"]},{"20":["XK01001"]},{"3":["XK01001"]},{"7":["XK01001"]},{"42":["XK01001"]},{"27":["XK01001"]},{"31":["XK01001"]},{"22":["XK01001"]},{"19":["XK01001"]},{"13":["XK01001"]},{"30":["XK01001"]}]},{"XK02001":[{"15":["XK01002"]},{"33":["XK01002"]},{"8":["XK01002"]},{"14":["XK01002"]},{"28":["XK01002"]},{"24":["XK01002"]},{"18":["XK01002"]},{"26":["XK01002"]},{"21":["XK01002"]},{"43":["XK01002"]},{"47":["XK01002"]},{"48":["XK01002"]},{"1":["XK01002"]},{"17":["XK01002"]},{"29":["XK01002"]},{"44":["XK01002"]},{"4":["XK01002"]},{"41":["XK01002"]},{"45":["XK01002"]},{"25":["XK01002"]},{"32":["XK01002"]},{"11":["XK01002"]},{"2":["XK01002"]},{"16":["XK01002"]},{"12":["XK01002"]},{"10":["XK01002"]},{"5":["XK01002"]},{"23":["XK01002"]},{"46":["XK01002"]},{"6":["XK01002"]},{"39":["XK01002"]},{"9":["XK01002"]},{"20":["XK01002"]},{"3":["XK01002"]},{"7":["XK01002"]},{"42":["XK01002"]},{"27":["XK01002"]},{"31":["XK01002"]},{"22":["XK01002"]},{"19":["XK01002"]},{"13":["XK01002"]},{"30":["XK01002"]}]},{"XK02002":[{"15":["XK01001","XK01002"]},{"33":["XK01001","XK01002"]},{"8":["XK01001","XK01002"]},{"14":["XK01001","XK01002"]},{"28":["XK01001","XK01002"]},{"24":["XK01001","XK01002"]},{"18":["XK01001","XK01002"]},{"26":["XK01001","XK01002"]},{"21":["XK01001","XK01002"]},{"43":["XK01001","XK01002"]},{"47":["XK01001","XK01002"]},{"48":["XK01001","XK01002"]},{"1":["XK01001","XK01002"]},{"17":["XK01001","XK01002"]},{"29":["XK01001","XK01002"]},{"44":["XK01001","XK01002"]},{"4":["XK01001","XK01002"]},{"41":["XK01001","XK01002"]},{"45":["XK01001","XK01002"]},{"25":["XK01001","XK01002"]},{"32":["XK01001","XK01002"]},{"11":["XK01001","XK01002"]},{"2":["XK01001","XK01002"]},{"16":["XK01001","XK01002"]},{"12":["XK01001","XK01002"]},{"10":["XK01001","XK01002"]},{"5":["XK01001","XK01002"]},{"23":["XK01001","XK01002"]},{"46":["XK01001","XK01002"]},{"6":["XK01001","XK01002"]},{"39":["XK01001","XK01002"]},{"9":["XK01001","XK01002"]},{"20":["XK01001","XK01002"]},{"3":["XK01001","XK01002"]},{"7":["XK01001","XK01002"]},{"42":["XK01001","XK01002"]},{"27":["XK01001","XK01002"]},{"31":["XK01001","XK01002"]},{"22":["XK01001","XK01002"]},{"19":["XK01001","XK01002"]},{"13":["XK01001","XK01002"]},{"30":["XK01001","XK01002"]}]}]}]
;

var pantsDefaultModel ={
    "structure": Pants_Structures[0],
    "fabricbrand": {"no": "jieniya","name": "如意","id": "a250412f-c31f-487b-8ba5-5cd76867f7a3"},
    "fabric": {
        "no": "20",
        "type": "305867-73M-00012",
        "name": "305867-73M-00012",
        "craftName": "面料",
        "price": 11111,
        "level": 3,
        "hasimg": true,
        "relFabric": false,
        "isChanged": true
    },
    "patternNo": "XKBZF001",
    "crafts": [
        {
            "no": "XK01001",
            "name": "舒适",
            "craftName": "裤型",
            "level": 0,
            "default": true,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": true,
            "type": "XK01",
            "isChanged": true
        },
        {
            "no": "XK02003",
            "name": "双褶",
            "craftName": "前褶",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "type": "XK02",
            "isChanged": true
        },
        {
            "no": "XK04001",
            "name": "宝剑头",
            "craftName": "裤腰头",
            "level": 0,
            "default": true,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "type": "XK04",
            "isChanged": true
        },
        {
            "no": "XK05002",
            "name": "直插袋",
            "craftName": "前袋",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "type": "XK05",
            "isChanged": true
        },
        {
            "no": "XK06003",
            "name": "袋盖",
            "craftName": "后袋",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "type": "XK06",
            "isChanged": true
        }
    ],
    "parts": [],
    "imageSize": 16,
    "style": "XK01001"
}

pantsDefaultModel =
{
    "structure": Pants_Structures[0],
    "fabric": {
        "no": "1",
        "name": "9196.0001.0001",
        "craftName": "面料",
        "brand": "jieniya",
        "price": 8888,
        "level": 3,
        "hasimg": true,
        "relFabric": false,
        "isChanged": true
    },
    "fabricbrand": {
        "no": "jieniya",
        "name": "如意",
        "id": "201b1ff9-98a9-4cfa-b559-6e19332ed74a"
    },
    "patternNo": "XKBZF001",
    "crafts": [
        {
            "no": "XK02003",
            "name": "双褶",
            "craftName": "前褶",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "description": "XK02003",
            "type": "XK02",
            "isChanged": true
        },
        {
            "no": "XK01001",
            "name": "舒适",
            "craftName": "裤型",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": true,
            "description": "XK01001",
            "type": "XK01",
            "isChanged": true
        },
        {
            "no": "XK04001",
            "name": "宝剑头",
            "craftName": "裤腰头",
            "level": 0,
            "default": true,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "description": "宝剑头",
            "type": "XK04",
            "isChanged": true
        },
        {
            "no": "XK05002",
            "name": "直插袋",
            "craftName": "前袋",
            "level": 0,
            "default": true,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "description": "XK05002",
            "type": "XK05",
            "isChanged": true
        },
        {
            "no": "XK06003",
            "name": "袋盖",
            "craftName": "后袋",
            "level": 0,
            "default": false,
            "relFabric": true,
            "relPart": false,
            "hasimg": true,
            "mainModel": false,
            "applyModels": "XK01001",
            "description": "XK06003",
            "type": "XK06",
            "isChanged": true
        }
    ],
    "parts": [],
    "imageSize": 16,
    "style": "XK01001"
}
;

