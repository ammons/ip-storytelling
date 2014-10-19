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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'EllipseLI',
                            type: 'ellipse',
                            rect: ['200px', '0px', '400px', '400px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseRE',
                            type: 'ellipse',
                            rect: ['200px', '0px', '400px', '400px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    labels: {
                        "Beschriftung 1": 3000
                    },
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${EllipseLI}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid8",
                            "left",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${EllipseLI}",
                            '200px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${EllipseRE}",
                            '400px',
                            '200px'
                        ],
                        [
                            "eid7",
                            "left",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${EllipseRE}",
                            '200px',
                            '400px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("edgeAni");
