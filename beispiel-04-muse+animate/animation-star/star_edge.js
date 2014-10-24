/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'star2',
                type: 'rect',
                rect: ['10px', '311px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'star2',
                symbolName: 'star',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '309px'],
                ["style", "width", '963px']
            ],
            "${_star2}": [
                ["motion", "location", '69.5px 367.5px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "transform", "${_star2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 3000 },
                { id: "eid5", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "motion", "${_star2}", [[69.5, 367.5, 0, 0],[446.58, 114.91, 1293.02, 3.08, 982.83, 2.34],[908.48, 368.5, 0, 0]]], position: 0, duration: 3000 }            ]
        }
    }
},
"star": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.05214', '0.05214']],
                    id: 'star',
                    type: 'image',
                    rect: ['-1086px', '-1029px', '2290px', '2170px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_star}": [
                ["style", "top", '-1029px'],
                ["transform", "scaleY", '0.05214'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.05214'],
                ["style", "left", '-1086px']
            ],
            "${symbolSelector}": [
                ["style", "height", '113px'],
                ["style", "width", '119px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-23061077");
