
import React from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing'


// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const data = {
    "name": "nivo",
    "color": "hsl(263, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(210, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(138, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(317, 70%, 50%)",
                "loc": 69625
              },
              {
                "name": "xAxis",
                "color": "hsl(358, 70%, 50%)",
                "loc": 17842
              },
              {
                "name": "yAxis",
                "color": "hsl(359, 70%, 50%)",
                "loc": 624
              },
              {
                "name": "layers",
                "color": "hsl(60, 70%, 50%)",
                "loc": 157039
              }
            ]
          },
          {
            "name": "pie",
            "color": "hsl(58, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(159, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(119, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(147, 70%, 50%)",
                        "loc": 181521
                      },
                      {
                        "name": "slices",
                        "color": "hsl(293, 70%, 50%)",
                        "loc": 111895
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(108, 70%, 50%)",
                        "loc": 4071
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(291, 70%, 50%)",
                    "loc": 97666
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(221, 70%, 50%)",
                    "loc": 187897
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(350, 70%, 50%)",
                "loc": 189567
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(55, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(87, 70%, 50%)",
            "loc": 1658
          },
          {
            "name": "hsl",
            "color": "hsl(251, 70%, 50%)",
            "loc": 81126
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(149, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(331, 70%, 50%)",
            "loc": 68008
          },
          {
            "name": "resetClock",
            "color": "hsl(162, 70%, 50%)",
            "loc": 163028
          },
          {
            "name": "noop",
            "color": "hsl(19, 70%, 50%)",
            "loc": 105107
          },
          {
            "name": "tick",
            "color": "hsl(39, 70%, 50%)",
            "loc": 157659
          },
          {
            "name": "forceGC",
            "color": "hsl(220, 70%, 50%)",
            "loc": 152582
          },
          {
            "name": "stackTrace",
            "color": "hsl(287, 70%, 50%)",
            "loc": 63958
          },
          {
            "name": "dbg",
            "color": "hsl(138, 70%, 50%)",
            "loc": 138098
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(123, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(214, 70%, 50%)",
            "loc": 20655
          },
          {
            "name": "city",
            "color": "hsl(152, 70%, 50%)",
            "loc": 3839
          },
          {
            "name": "animal",
            "color": "hsl(176, 70%, 50%)",
            "loc": 171640
          },
          {
            "name": "movie",
            "color": "hsl(49, 70%, 50%)",
            "loc": 61259
          },
          {
            "name": "user",
            "color": "hsl(108, 70%, 50%)",
            "loc": 8388
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(32, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(149, 70%, 50%)",
            "loc": 32395
          },
          {
            "name": "intersect",
            "color": "hsl(219, 70%, 50%)",
            "loc": 144664
          },
          {
            "name": "merge",
            "color": "hsl(219, 70%, 50%)",
            "loc": 120078
          },
          {
            "name": "reverse",
            "color": "hsl(336, 70%, 50%)",
            "loc": 92396
          },
          {
            "name": "toArray",
            "color": "hsl(205, 70%, 50%)",
            "loc": 85309
          },
          {
            "name": "toObject",
            "color": "hsl(337, 70%, 50%)",
            "loc": 127101
          },
          {
            "name": "fromCSV",
            "color": "hsl(21, 70%, 50%)",
            "loc": 114295
          },
          {
            "name": "slice",
            "color": "hsl(7, 70%, 50%)",
            "loc": 21420
          },
          {
            "name": "append",
            "color": "hsl(46, 70%, 50%)",
            "loc": 30722
          },
          {
            "name": "prepend",
            "color": "hsl(201, 70%, 50%)",
            "loc": 136119
          },
          {
            "name": "shuffle",
            "color": "hsl(11, 70%, 50%)",
            "loc": 35957
          },
          {
            "name": "pick",
            "color": "hsl(258, 70%, 50%)",
            "loc": 36929
          },
          {
            "name": "plouc",
            "color": "hsl(24, 70%, 50%)",
            "loc": 90920
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(9, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(233, 70%, 50%)",
            "loc": 8781
          },
          {
            "name": "slugify",
            "color": "hsl(255, 70%, 50%)",
            "loc": 57338
          },
          {
            "name": "snakeCase",
            "color": "hsl(230, 70%, 50%)",
            "loc": 104019
          },
          {
            "name": "camelCase",
            "color": "hsl(54, 70%, 50%)",
            "loc": 109459
          },
          {
            "name": "repeat",
            "color": "hsl(159, 70%, 50%)",
            "loc": 198498
          },
          {
            "name": "padLeft",
            "color": "hsl(24, 70%, 50%)",
            "loc": 42660
          },
          {
            "name": "padRight",
            "color": "hsl(93, 70%, 50%)",
            "loc": 82335
          },
          {
            "name": "sanitize",
            "color": "hsl(326, 70%, 50%)",
            "loc": 122419
          },
          {
            "name": "ploucify",
            "color": "hsl(141, 70%, 50%)",
            "loc": 160928
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(331, 70%, 50%)",
        "children": [
          {
            "name": "whatever",
            "color": "hsl(87, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(147, 70%, 50%)",
                "loc": 19063
              },
              {
                "name": "WTF",
                "color": "hsl(16, 70%, 50%)",
                "loc": 20882
              },
              {
                "name": "lol",
                "color": "hsl(31, 70%, 50%)",
                "loc": 6231
              },
              {
                "name": "IMHO",
                "color": "hsl(115, 70%, 50%)",
                "loc": 148543
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(272, 70%, 50%)",
            "loc": 150077
          },
          {
            "name": "crap",
            "color": "hsl(344, 70%, 50%)",
            "children": [
              {
                "name": "crapA",
                "color": "hsl(218, 70%, 50%)",
                "loc": 99090
              },
              {
                "name": "crapB",
                "color": "hsl(78, 70%, 50%)",
                "children": [
                  {
                    "name": "crapB1",
                    "color": "hsl(26, 70%, 50%)",
                    "loc": 62362
                  },
                  {
                    "name": "crapB2",
                    "color": "hsl(87, 70%, 50%)",
                    "loc": 88240
                  },
                  {
                    "name": "crapB3",
                    "color": "hsl(154, 70%, 50%)",
                    "loc": 103583
                  },
                  {
                    "name": "crapB4",
                    "color": "hsl(259, 70%, 50%)",
                    "loc": 151219
                  }
                ]
              },
              {
                "name": "crapC",
                "color": "hsl(302, 70%, 50%)",
                "children": [
                  {
                    "name": "crapC1",
                    "color": "hsl(14, 70%, 50%)",
                    "loc": 78747
                  },
                  {
                    "name": "crapC2",
                    "color": "hsl(340, 70%, 50%)",
                    "loc": 100415
                  },
                  {
                    "name": "crapC3",
                    "color": "hsl(274, 70%, 50%)",
                    "loc": 5701
                  },
                  {
                    "name": "crapC4",
                    "color": "hsl(68, 70%, 50%)",
                    "loc": 172982
                  },
                  {
                    "name": "crapC5",
                    "color": "hsl(347, 70%, 50%)",
                    "loc": 32039
                  },
                  {
                    "name": "crapC6",
                    "color": "hsl(75, 70%, 50%)",
                    "loc": 115169
                  },
                  {
                    "name": "crapC7",
                    "color": "hsl(39, 70%, 50%)",
                    "loc": 92529
                  },
                  {
                    "name": "crapC8",
                    "color": "hsl(56, 70%, 50%)",
                    "loc": 188611
                  },
                  {
                    "name": "crapC9",
                    "color": "hsl(68, 70%, 50%)",
                    "loc": 187353
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };


class Bubble extends React.Component{

render(){
    return(
        <ResponsiveBubble
        root={data}
        height={900}
        margin={{
            "top": 20,
            "right": 20,
            "bottom": 20,
            "left": 20
        }}
        identity="name"
        value="loc"
        colors="dark2"
        colorBy="depth"
        padding={7}
        leavesOnly={true}
        labelWidth={4}
        labelTextColor="inherit:darker(0.8)"
        borderWidth={2}
        defs={[
            {
                "id": "lines",
                "type": "patternLines",
                "background": "none",
                "color": "inherit",
                "rotation": -45,
                "lineWidth": 5,
                "spacing": 8
            }
        ]}
        fill={[
            {
                "match": {
                    "depth": 1
                },
                "id": "lines"
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />


    );

}

}

export default Bubble;