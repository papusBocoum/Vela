import React from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap'


const data = {
    "name": "nivo",
    "color": "hsl(187, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(80, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(290, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(67, 70%, 50%)",
                "loc": 2952
              },
              {
                "name": "xAxis",
                "color": "hsl(49, 70%, 50%)",
                "loc": 123891
              },
              {
                "name": "yAxis",
                "color": "hsl(171, 70%, 50%)",
                "loc": 44585
              },
              {
                "name": "layers",
                "color": "hsl(68, 70%, 50%)",
                "loc": 84914
              }
            ]
          },
          {
            "name": "pie",
            "color": "hsl(179, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(206, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(56, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(27, 70%, 50%)",
                        "loc": 112564
                      },
                      {
                        "name": "slices",
                        "color": "hsl(68, 70%, 50%)",
                        "loc": 7387
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(258, 70%, 50%)",
                        "loc": 182738
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(147, 70%, 50%)",
                    "loc": 127024
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(4, 70%, 50%)",
                    "loc": 82856
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(160, 70%, 50%)",
                "loc": 22405
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(281, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(52, 70%, 50%)",
            "loc": 16119
          },
          {
            "name": "hsl",
            "color": "hsl(269, 70%, 50%)",
            "loc": 67635
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(5, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(238, 70%, 50%)",
            "loc": 65712
          },
          {
            "name": "resetClock",
            "color": "hsl(154, 70%, 50%)",
            "loc": 187869
          },
          {
            "name": "noop",
            "color": "hsl(198, 70%, 50%)",
            "loc": 2572
          },
          {
            "name": "tick",
            "color": "hsl(110, 70%, 50%)",
            "loc": 136211
          },
          {
            "name": "forceGC",
            "color": "hsl(131, 70%, 50%)",
            "loc": 107798
          },
          {
            "name": "stackTrace",
            "color": "hsl(89, 70%, 50%)",
            "loc": 103370
          },
          {
            "name": "dbg",
            "color": "hsl(215, 70%, 50%)",
            "loc": 112007
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(27, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(192, 70%, 50%)",
            "loc": 58215
          },
          {
            "name": "city",
            "color": "hsl(208, 70%, 50%)",
            "loc": 94987
          },
          {
            "name": "animal",
            "color": "hsl(339, 70%, 50%)",
            "loc": 42507
          },
          {
            "name": "movie",
            "color": "hsl(231, 70%, 50%)",
            "loc": 32433
          },
          {
            "name": "user",
            "color": "hsl(247, 70%, 50%)",
            "loc": 57238
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(70, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(61, 70%, 50%)",
            "loc": 22755
          },
          {
            "name": "intersect",
            "color": "hsl(345, 70%, 50%)",
            "loc": 43178
          },
          {
            "name": "merge",
            "color": "hsl(307, 70%, 50%)",
            "loc": 87872
          },
          {
            "name": "reverse",
            "color": "hsl(260, 70%, 50%)",
            "loc": 189422
          },
          {
            "name": "toArray",
            "color": "hsl(191, 70%, 50%)",
            "loc": 125998
          },
          {
            "name": "toObject",
            "color": "hsl(27, 70%, 50%)",
            "loc": 115820
          },
          {
            "name": "fromCSV",
            "color": "hsl(234, 70%, 50%)",
            "loc": 101856
          },
          {
            "name": "slice",
            "color": "hsl(103, 70%, 50%)",
            "loc": 151676
          },
          {
            "name": "append",
            "color": "hsl(211, 70%, 50%)",
            "loc": 186246
          },
          {
            "name": "prepend",
            "color": "hsl(7, 70%, 50%)",
            "loc": 134243
          },
          {
            "name": "shuffle",
            "color": "hsl(193, 70%, 50%)",
            "loc": 6579
          },
          {
            "name": "pick",
            "color": "hsl(263, 70%, 50%)",
            "loc": 28571
          },
          {
            "name": "plouc",
            "color": "hsl(114, 70%, 50%)",
            "loc": 23856
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(22, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(89, 70%, 50%)",
            "loc": 33657
          },
          {
            "name": "slugify",
            "color": "hsl(304, 70%, 50%)",
            "loc": 102799
          },
          {
            "name": "snakeCase",
            "color": "hsl(316, 70%, 50%)",
            "loc": 157406
          },
          {
            "name": "camelCase",
            "color": "hsl(267, 70%, 50%)",
            "loc": 162708
          },
          {
            "name": "repeat",
            "color": "hsl(316, 70%, 50%)",
            "loc": 197910
          },
          {
            "name": "padLeft",
            "color": "hsl(312, 70%, 50%)",
            "loc": 46024
          },
          {
            "name": "padRight",
            "color": "hsl(92, 70%, 50%)",
            "loc": 37002
          },
          {
            "name": "sanitize",
            "color": "hsl(241, 70%, 50%)",
            "loc": 10395
          },
          {
            "name": "ploucify",
            "color": "hsl(211, 70%, 50%)",
            "loc": 106395
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(280, 70%, 50%)",
        "children": [
          {
            "name": "whatever",
            "color": "hsl(89, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(285, 70%, 50%)",
                "loc": 184543
              },
              {
                "name": "WTF",
                "color": "hsl(327, 70%, 50%)",
                "loc": 68927
              },
              {
                "name": "lol",
                "color": "hsl(155, 70%, 50%)",
                "loc": 71181
              },
              {
                "name": "IMHO",
                "color": "hsl(280, 70%, 50%)",
                "loc": 41513
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(163, 70%, 50%)",
            "loc": 50578
          },
          {
            "name": "crap",
            "color": "hsl(11, 70%, 50%)",
            "children": [
              {
                "name": "crapA",
                "color": "hsl(62, 70%, 50%)",
                "loc": 20531
              },
              {
                "name": "crapB",
                "color": "hsl(255, 70%, 50%)",
                "children": [
                  {
                    "name": "crapB1",
                    "color": "hsl(103, 70%, 50%)",
                    "loc": 15322
                  },
                  {
                    "name": "crapB2",
                    "color": "hsl(81, 70%, 50%)",
                    "loc": 113278
                  },
                  {
                    "name": "crapB3",
                    "color": "hsl(113, 70%, 50%)",
                    "loc": 147650
                  },
                  {
                    "name": "crapB4",
                    "color": "hsl(94, 70%, 50%)",
                    "loc": 9436
                  }
                ]
              },
              {
                "name": "crapC",
                "color": "hsl(297, 70%, 50%)",
                "children": [
                  {
                    "name": "crapC1",
                    "color": "hsl(164, 70%, 50%)",
                    "loc": 69692
                  },
                  {
                    "name": "crapC2",
                    "color": "hsl(303, 70%, 50%)",
                    "loc": 162327
                  },
                  {
                    "name": "crapC3",
                    "color": "hsl(271, 70%, 50%)",
                    "loc": 111665
                  },
                  {
                    "name": "crapC4",
                    "color": "hsl(201, 70%, 50%)",
                    "loc": 45946
                  },
                  {
                    "name": "crapC5",
                    "color": "hsl(113, 70%, 50%)",
                    "loc": 189557
                  },
                  {
                    "name": "crapC6",
                    "color": "hsl(67, 70%, 50%)",
                    "loc": 63833
                  },
                  {
                    "name": "crapC7",
                    "color": "hsl(128, 70%, 50%)",
                    "loc": 46925
                  },
                  {
                    "name": "crapC8",
                    "color": "hsl(52, 70%, 50%)",
                    "loc": 198562
                  },
                  {
                    "name": "crapC9",
                    "color": "hsl(290, 70%, 50%)",
                    "loc": 62816
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

class Treemap extends React.Component{


    render(){

return(
    <ResponsiveTreeMap

    
    height={1000}
    root={data}
    identity="name"
    value="loc"
    innerPadding={3}
    outerPadding={3}
    margin={{
        "top": 10,
        "right": 10,
        "bottom": 10,
        "left": 10
    }}
    label="loc"
    labelFormat=".0s"
    labelSkipSize={12}
    labelTextColor="inherit:darker(1.2)"
    colors="nivo"
    colorBy="depth"
    borderColor="inherit:darker(0.3)"
    animate={true}
    motionStiffness={90}
    motionDamping={11}
/>
);


    }
}

export default Treemap;