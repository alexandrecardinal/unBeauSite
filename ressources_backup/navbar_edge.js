/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'CommanditesB',
                            symbolName: 'CommanditesB',
                            type: 'rect',
                            rect: ['487px', '2px', '114', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'MembresB',
                            symbolName: 'MembresB',
                            type: 'rect',
                            rect: ['344px', '2px', '114', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'MediaB',
                            symbolName: 'MediaB',
                            type: 'rect',
                            rect: ['230px', '2px', '114', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'JournalB',
                            symbolName: 'JournalB',
                            type: 'rect',
                            rect: ['116px', '2px', '114', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'AccueilB',
                            symbolName: 'AccueilB',
                            type: 'rect',
                            rect: ['1px', '2px', '114', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Sword',
                            symbolName: 'Sword',
                            type: 'rect',
                            rect: ['-1px', '39px', '117', '118', 'auto', 'auto']
                        },
                        {
                            id: 'SwordCopy',
                            symbolName: 'Sword',
                            type: 'rect',
                            rect: ['114px', '39px', '117', '118', 'auto', 'auto']
                        },
                        {
                            id: 'SwordCopy2',
                            symbolName: 'Sword',
                            type: 'rect',
                            rect: ['227px', '39px', '117', '118', 'auto', 'auto']
                        },
                        {
                            id: 'SwordCopy3',
                            symbolName: 'Sword',
                            type: 'rect',
                            rect: ['342px', '39px', '117', '118', 'auto', 'auto']
                        },
                        {
                            id: 'SwordCopy4',
                            symbolName: 'Sword',
                            type: 'rect',
                            rect: ['507px', '39px', '117', '118', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1600px', '50px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Sword": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '117px', '118px', 'auto', 'auto'],
                            id: 'sword2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sword.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '117px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "replay": 500,
                        "stop": 2750
                    },
                    data: [
                        [
                            "eid47",
                            "top",
                            500,
                            125,
                            "easeOutQuad",
                            "${sword2}",
                            '0px',
                            '-13px'
                        ],
                        [
                            "eid48",
                            "top",
                            625,
                            125,
                            "easeOutQuad",
                            "${sword2}",
                            '-13px',
                            '0px'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            125,
                            "easeOutQuad",
                            "${sword2}",
                            '0px',
                            '-13px'
                        ],
                        [
                            "eid79",
                            "top",
                            1375,
                            125,
                            "easeOutQuad",
                            "${sword2}",
                            '-13px',
                            '0px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${sword2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            2750,
                            250,
                            "easeOutQuad",
                            "${sword2}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            },
            "JournalB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['19px', '9px', '82px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(210,180,140,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'AccueilCopy',
                            text: '<p style=\"margin: 0px;\">​Journal</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy15',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy14',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy13',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy12',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '114px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid112",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy13}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid114",
                            "color",
                            0,
                            1000,
                            "easeOutQuad",
                            "${AccueilCopy}",
                            'rgba(210,180,140,1)',
                            'rgba(237,86,96,1.00)'
                        ]
                    ]
                }
            },
            "MediaB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '9px', '68px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(210,180,140,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'AccueilCopy2',
                            text: '<p style=\"margin: 0px;\">​Média</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy19',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy18',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy17',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy16',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '114px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid117",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy16}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid125",
                            "width",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy2}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid120",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy19}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy17}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy2}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy18}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid121",
                            "color",
                            0,
                            1000,
                            "easeOutQuad",
                            "${AccueilCopy2}",
                            'rgba(210,180,140,1)',
                            'rgba(237,86,96,1.00)'
                        ]
                    ]
                }
            },
            "MembresB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['8px', '9px', '106px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(210,180,140,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'AccueilCopy3',
                            text: '<p style=\"margin: 0px;\">​Membres</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy23',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy22',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy21',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy20',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '114px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid138",
                            "width",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy3}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid140",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy3}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid130",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy23}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy20}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy22}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy21}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid131",
                            "color",
                            0,
                            1000,
                            "easeOutQuad",
                            "${AccueilCopy3}",
                            'rgba(210,180,140,1)',
                            'rgba(237,86,96,1.00)'
                        ]
                    ]
                }
            },
            "CommanditesB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4px', '9px', '153px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(210,180,140,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'AccueilCopy4',
                            text: '<p style=\"margin: 0px;\">​Commandites</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy27',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy26',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['149px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy25',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['149px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy24',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '156px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid143",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy26}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy25}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy27}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid145",
                            "color",
                            0,
                            1000,
                            "easeOutQuad",
                            "${AccueilCopy4}",
                            'rgba(210,180,140,1)',
                            'rgba(237,86,96,1.00)'
                        ],
                        [
                            "eid157",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${RectangleCopy25}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid155",
                            "width",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy4}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid154",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${AccueilCopy4}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid141",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy24}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid156",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${RectangleCopy24}",
                            '149px',
                            '149px'
                        ]
                    ]
                }
            },
            "AccueilB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['19px', '9px', '82px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(210,180,140,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'Accueil',
                            text: '<p style=\"margin: 0px;\">Accueil</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '0px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RectangleCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        },
                        {
                            rect: ['106px', '37px', '8px', '9px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,184,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '114px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid175",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${RectangleCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid179",
                            "color",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Accueil}",
                            'rgba(210,180,140,1)',
                            'rgba(237,86,96,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("navbar_edgeActions.js");
})("EDGE-365579533");
