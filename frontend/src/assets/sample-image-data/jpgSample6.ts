import { ExifInfo, Photo } from "../../types";

const vision = {
  faceAnnotations: [
    {
      landmarks: [
        {
          type: "LEFT_EYE",
          position: {
            x: 2211.09521484375,
            y: 940.2674560546875,
            z: 0.00004506111145019531,
          },
        },
        {
          type: "RIGHT_EYE",
          position: {
            x: 2257.242431640625,
            y: 953.619384765625,
            z: -39.066280364990234,
          },
        },
        {
          type: "LEFT_OF_LEFT_EYEBROW",
          position: {
            x: 2192.32275390625,
            y: 918.3453979492188,
            z: 21.145523071289062,
          },
        },
        {
          type: "RIGHT_OF_LEFT_EYEBROW",
          position: {
            x: 2221.83935546875,
            y: 925.3029174804688,
            z: -19.576431274414062,
          },
        },
        {
          type: "LEFT_OF_RIGHT_EYEBROW",
          position: {
            x: 2243.892822265625,
            y: 931.7084350585938,
            z: -38.27692413330078,
          },
        },
        {
          type: "RIGHT_OF_RIGHT_EYEBROW",
          position: {
            x: 2282.89111328125,
            y: 943.865966796875,
            z: -47.119178771972656,
          },
        },
        {
          type: "MIDPOINT_BETWEEN_EYES",
          position: {
            x: 2226.5849609375,
            y: 943.3880615234375,
            z: -30.769025802612305,
          },
        },
        {
          type: "NOSE_TIP",
          position: {
            x: 2199.316650390625,
            y: 975.178955078125,
            z: -49.39661407470703,
          },
        },
        {
          type: "UPPER_LIP",
          position: {
            x: 2203.496826171875,
            y: 1000.99072265625,
            z: -38.9344482421875,
          },
        },
        {
          type: "LOWER_LIP",
          position: {
            x: 2199.822509765625,
            y: 1030.244873046875,
            z: -37.56550216674805,
          },
        },
        {
          type: "MOUTH_LEFT",
          position: {
            x: 2190.580078125,
            y: 1008.328369140625,
            z: -8.094097137451172,
          },
        },
        {
          type: "MOUTH_RIGHT",
          position: {
            x: 2237.2421875,
            y: 1019.0869140625,
            z: -42.62836456298828,
          },
        },
        {
          type: "MOUTH_CENTER",
          position: {
            x: 2202.656982421875,
            y: 1018.3104858398438,
            z: -36.358551025390625,
          },
        },
        {
          type: "NOSE_BOTTOM_RIGHT",
          position: {
            x: 2227.582763671875,
            y: 989.5722045898438,
            z: -40.64985656738281,
          },
        },
        {
          type: "NOSE_BOTTOM_LEFT",
          position: {
            x: 2198.778564453125,
            y: 985.0557861328125,
            z: -18.828155517578125,
          },
        },
        {
          type: "NOSE_BOTTOM_CENTER",
          position: {
            x: 2206.259521484375,
            y: 989.5694580078125,
            z: -38.183956146240234,
          },
        },
        {
          type: "LEFT_EYE_TOP_BOUNDARY",
          position: {
            x: 2211.4794921875,
            y: 934.067626953125,
            z: -2.3323540687561035,
          },
        },
        {
          type: "LEFT_EYE_RIGHT_CORNER",
          position: {
            x: 2221.525390625,
            y: 944.3889770507812,
            z: -8.399822235107422,
          },
        },
        {
          type: "LEFT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 2208.4248046875,
            y: 945.5016479492188,
            z: -0.46907925605773926,
          },
        },
        {
          type: "LEFT_EYE_LEFT_CORNER",
          position: {
            x: 2198.241943359375,
            y: 935.75927734375,
            z: 14.800766944885254,
          },
        },
        {
          type: "RIGHT_EYE_TOP_BOUNDARY",
          position: {
            x: 2258.888916015625,
            y: 947.370361328125,
            z: -42.61723709106445,
          },
        },
        {
          type: "RIGHT_EYE_RIGHT_CORNER",
          position: {
            x: 2272.37646484375,
            y: 958.71875,
            z: -43.01536560058594,
          },
        },
        {
          type: "RIGHT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 2256.145263671875,
            y: 958.8955688476562,
            z: -40.788700103759766,
          },
        },
        {
          type: "RIGHT_EYE_LEFT_CORNER",
          position: {
            x: 2246.736328125,
            y: 951.010009765625,
            z: -30.961750030517578,
          },
        },
        {
          type: "LEFT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 2214.773193359375,
            y: 918.5447998046875,
            z: -3.987955331802368,
          },
        },
        {
          type: "RIGHT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 2264.240234375,
            y: 931.3917846679688,
            z: -45.7170295715332,
          },
        },
        {
          type: "LEFT_EAR_TRAGION",
          position: {
            x: 2185.7939453125,
            y: 975.1765747070312,
            z: 92.24137878417969,
          },
        },
        {
          type: "RIGHT_EAR_TRAGION",
          position: {
            x: 2334.91552734375,
            y: 1001.2285766601562,
            z: 1.007473111152649,
          },
        },
        {
          type: "FOREHEAD_GLABELLA",
          position: {
            x: 2230.40185546875,
            y: 928.4898681640625,
            z: -30.68075180053711,
          },
        },
        {
          type: "CHIN_GNATHION",
          position: {
            x: 2195.884765625,
            y: 1064.833740234375,
            z: -32.61896514892578,
          },
        },
        {
          type: "CHIN_LEFT_GONION",
          position: {
            x: 2184.46044921875,
            y: 1024.525634765625,
            z: 56.55244064331055,
          },
        },
        {
          type: "CHIN_RIGHT_GONION",
          position: {
            x: 2294.958984375,
            y: 1050.4173583984375,
            z: -18.292251586914062,
          },
        },
        {
          type: "LEFT_CHEEK_CENTER",
          position: {
            x: 2185.9306640625,
            y: 979.2438354492188,
            z: 10.81243896484375,
          },
        },
        {
          type: "RIGHT_CHEEK_CENTER",
          position: {
            x: 2259.23779296875,
            y: 1000.8388061523438,
            z: -45.800743103027344,
          },
        },
      ],
      boundingPoly: {
        vertices: [
          {
            x: 2137,
            y: 832,
          },
          {
            x: 2365,
            y: 832,
          },
          {
            x: 2365,
            y: 1097,
          },
          {
            x: 2137,
            y: 1097,
          },
        ],
        normalizedVertices: [],
      },
      fdBoundingPoly: {
        vertices: [
          {
            x: 2168,
            y: 895,
          },
          {
            x: 2345,
            y: 895,
          },
          {
            x: 2345,
            y: 1071,
          },
          {
            x: 2168,
            y: 1071,
          },
        ],
        normalizedVertices: [],
      },
      rollAngle: 17.44686508178711,
      panAngle: -35.7392692565918,
      tiltAngle: 3.6359004974365234,
      detectionConfidence: 0.86328125,
      landmarkingConfidence: 0.3826778829097748,
      joyLikelihood: "VERY_LIKELY",
      sorrowLikelihood: "VERY_UNLIKELY",
      angerLikelihood: "VERY_UNLIKELY",
      surpriseLikelihood: "VERY_UNLIKELY",
      underExposedLikelihood: "VERY_UNLIKELY",
      blurredLikelihood: "VERY_UNLIKELY",
      headwearLikelihood: "VERY_UNLIKELY",
    },
    {
      landmarks: [
        {
          type: "LEFT_EYE",
          position: {
            x: 1835.71533203125,
            y: 506.5108337402344,
            z: -0.0005092620849609375,
          },
        },
        {
          type: "RIGHT_EYE",
          position: {
            x: 1879.6993408203125,
            y: 514.7197875976562,
            z: 29.195444107055664,
          },
        },
        {
          type: "LEFT_OF_LEFT_EYEBROW",
          position: {
            x: 1815.332275390625,
            y: 489.9514465332031,
            z: -4.166875839233398,
          },
        },
        {
          type: "RIGHT_OF_LEFT_EYEBROW",
          position: {
            x: 1852.791259765625,
            y: 489.4841613769531,
            z: 0.07730865478515625,
          },
        },
        {
          type: "LEFT_OF_RIGHT_EYEBROW",
          position: {
            x: 1877.83154296875,
            y: 490.6502990722656,
            z: 15.360416412353516,
          },
        },
        {
          type: "RIGHT_OF_RIGHT_EYEBROW",
          position: {
            x: 1896.4532470703125,
            y: 498.53741455078125,
            z: 48.078922271728516,
          },
        },
        {
          type: "MIDPOINT_BETWEEN_EYES",
          position: {
            x: 1865.3741455078125,
            y: 506.0150146484375,
            z: 4.397425651550293,
          },
        },
        {
          type: "NOSE_TIP",
          position: {
            x: 1872.4805908203125,
            y: 544.882568359375,
            z: -17.61720848083496,
          },
        },
        {
          type: "UPPER_LIP",
          position: {
            x: 1861.77783203125,
            y: 563.221435546875,
            z: -8.528326988220215,
          },
        },
        {
          type: "LOWER_LIP",
          position: {
            x: 1857.5325927734375,
            y: 588.059326171875,
            z: -8.799600601196289,
          },
        },
        {
          type: "MOUTH_LEFT",
          position: {
            x: 1827.7489013671875,
            y: 564.0449829101562,
            z: -8.799367904663086,
          },
        },
        {
          type: "MOUTH_RIGHT",
          position: {
            x: 1876.5634765625,
            y: 569.3430786132812,
            z: 19.57646942138672,
          },
        },
        {
          type: "MOUTH_CENTER",
          position: {
            x: 1858.2666015625,
            y: 575.2877197265625,
            z: -6.592955589294434,
          },
        },
        {
          type: "NOSE_BOTTOM_RIGHT",
          position: {
            x: 1874.4388427734375,
            y: 549.0975341796875,
            z: 10.728133201599121,
          },
        },
        {
          type: "NOSE_BOTTOM_LEFT",
          position: {
            x: 1844.567138671875,
            y: 545.0223388671875,
            z: -6.881951332092285,
          },
        },
        {
          type: "NOSE_BOTTOM_CENTER",
          position: {
            x: 1863.2879638671875,
            y: 554.0767822265625,
            z: -7.263108253479004,
          },
        },
        {
          type: "LEFT_EYE_TOP_BOUNDARY",
          position: {
            x: 1836.7841796875,
            y: 500.2906188964844,
            z: -2.761143684387207,
          },
        },
        {
          type: "LEFT_EYE_RIGHT_CORNER",
          position: {
            x: 1847.604736328125,
            y: 508.33319091796875,
            z: 6.333187103271484,
          },
        },
        {
          type: "LEFT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 1835.160888671875,
            y: 511.48175048828125,
            z: -1.880289077758789,
          },
        },
        {
          type: "LEFT_EYE_LEFT_CORNER",
          position: {
            x: 1821.34716796875,
            y: 505.45855712890625,
            z: -2.010514259338379,
          },
        },
        {
          type: "RIGHT_EYE_TOP_BOUNDARY",
          position: {
            x: 1882.63671875,
            y: 509.5182800292969,
            z: 27.373767852783203,
          },
        },
        {
          type: "RIGHT_EYE_RIGHT_CORNER",
          position: {
            x: 1887.5482177734375,
            y: 516.9274291992188,
            z: 40.630859375,
          },
        },
        {
          type: "RIGHT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 1880.76123046875,
            y: 519.407958984375,
            z: 28.597097396850586,
          },
        },
        {
          type: "RIGHT_EYE_LEFT_CORNER",
          position: {
            x: 1871.2550048828125,
            y: 514.400146484375,
            z: 23.05340576171875,
          },
        },
        {
          type: "LEFT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 1835.0379638671875,
            y: 484.11602783203125,
            z: -4.567548751831055,
          },
        },
        {
          type: "RIGHT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 1885.9122314453125,
            y: 488.4561462402344,
            z: 28.136558532714844,
          },
        },
        {
          type: "LEFT_EAR_TRAGION",
          position: {
            x: 1763.9844970703125,
            y: 533.4630126953125,
            z: 41.4500732421875,
          },
        },
        {
          type: "RIGHT_EAR_TRAGION",
          position: {
            x: 1886.4876708984375,
            y: 558.9486694335938,
            z: 109.60820770263672,
          },
        },
        {
          type: "FOREHEAD_GLABELLA",
          position: {
            x: 1866.8321533203125,
            y: 491.8134765625,
            z: 5.630955696105957,
          },
        },
        {
          type: "CHIN_GNATHION",
          position: {
            x: 1851.639892578125,
            y: 614.2498168945312,
            z: -5.499935150146484,
          },
        },
        {
          type: "CHIN_LEFT_GONION",
          position: {
            x: 1782.376708984375,
            y: 575.8187255859375,
            z: 16.858234405517578,
          },
        },
        {
          type: "CHIN_RIGHT_GONION",
          position: {
            x: 1873.0264892578125,
            y: 600.3447265625,
            z: 74.19214630126953,
          },
        },
        {
          type: "LEFT_CHEEK_CENTER",
          position: {
            x: 1816.732666015625,
            y: 543.760986328125,
            z: -7.985072135925293,
          },
        },
        {
          type: "RIGHT_CHEEK_CENTER",
          position: {
            x: 1884.33837890625,
            y: 554.5250244140625,
            z: 34.640769958496094,
          },
        },
      ],
      boundingPoly: {
        vertices: [
          {
            x: 1733,
            y: 409,
          },
          {
            x: 1931,
            y: 409,
          },
          {
            x: 1931,
            y: 640,
          },
          {
            x: 1733,
            y: 640,
          },
        ],
        normalizedVertices: [],
      },
      fdBoundingPoly: {
        vertices: [
          {
            x: 1752,
            y: 452,
          },
          {
            x: 1904,
            y: 452,
          },
          {
            x: 1904,
            y: 605,
          },
          {
            x: 1752,
            y: 605,
          },
        ],
        normalizedVertices: [],
      },
      rollAngle: 4.511435031890869,
      panAngle: 29.792865753173828,
      tiltAngle: 8.363622665405273,
      detectionConfidence: 0.93359375,
      landmarkingConfidence: 0.35530880093574524,
      joyLikelihood: "VERY_LIKELY",
      sorrowLikelihood: "VERY_UNLIKELY",
      angerLikelihood: "VERY_UNLIKELY",
      surpriseLikelihood: "VERY_UNLIKELY",
      underExposedLikelihood: "VERY_UNLIKELY",
      blurredLikelihood: "VERY_UNLIKELY",
      headwearLikelihood: "VERY_UNLIKELY",
    },
    {
      landmarks: [
        {
          type: "LEFT_EYE",
          position: {
            x: 1426.2513427734375,
            y: 891.4417724609375,
            z: 0.0010280609130859375,
          },
        },
        {
          type: "RIGHT_EYE",
          position: {
            x: 1458.19482421875,
            y: 898.6082763671875,
            z: 48.34040832519531,
          },
        },
        {
          type: "LEFT_OF_LEFT_EYEBROW",
          position: {
            x: 1403.5811767578125,
            y: 870.0169677734375,
            z: -11.104005813598633,
          },
        },
        {
          type: "RIGHT_OF_LEFT_EYEBROW",
          position: {
            x: 1442.68115234375,
            y: 873.6941528320312,
            z: 8.783538818359375,
          },
        },
        {
          type: "LEFT_OF_RIGHT_EYEBROW",
          position: {
            x: 1459.1241455078125,
            y: 878.4221801757812,
            z: 32.15049743652344,
          },
        },
        {
          type: "RIGHT_OF_RIGHT_EYEBROW",
          position: {
            x: 1472.91357421875,
            y: 888.4458618164062,
            z: 71.4139404296875,
          },
        },
        {
          type: "MIDPOINT_BETWEEN_EYES",
          position: {
            x: 1451.5909423828125,
            y: 892.1882934570312,
            z: 17.28484344482422,
          },
        },
        {
          type: "NOSE_TIP",
          position: {
            x: 1469.208251953125,
            y: 925.4905395507812,
            z: 1.4185981750488281,
          },
        },
        {
          type: "UPPER_LIP",
          position: {
            x: 1456.85205078125,
            y: 946.2122802734375,
            z: 5.786839485168457,
          },
        },
        {
          type: "LOWER_LIP",
          position: {
            x: 1456.5311279296875,
            y: 974.04736328125,
            z: 4.059775352478027,
          },
        },
        {
          type: "MOUTH_LEFT",
          position: {
            x: 1425.7296142578125,
            y: 949.916748046875,
            z: -7.90953254699707,
          },
        },
        {
          type: "MOUTH_RIGHT",
          position: {
            x: 1459.1153564453125,
            y: 957.920654296875,
            z: 34.804786682128906,
          },
        },
        {
          type: "MOUTH_CENTER",
          position: {
            x: 1456.6148681640625,
            y: 958.7803955078125,
            z: 6.826809883117676,
          },
        },
        {
          type: "NOSE_BOTTOM_RIGHT",
          position: {
            x: 1462.8052978515625,
            y: 932.7433471679688,
            z: 27.76495361328125,
          },
        },
        {
          type: "NOSE_BOTTOM_LEFT",
          position: {
            x: 1441.1368408203125,
            y: 927.641357421875,
            z: 0.2549896240234375,
          },
        },
        {
          type: "NOSE_BOTTOM_CENTER",
          position: {
            x: 1458.0223388671875,
            y: 934.5498046875,
            z: 7.769472122192383,
          },
        },
        {
          type: "LEFT_EYE_TOP_BOUNDARY",
          position: {
            x: 1426.773193359375,
            y: 885.9312744140625,
            z: -1.9328250885009766,
          },
        },
        {
          type: "LEFT_EYE_RIGHT_CORNER",
          position: {
            x: 1434.2939453125,
            y: 892.5406494140625,
            z: 10.139939308166504,
          },
        },
        {
          type: "LEFT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 1425.890625,
            y: 896.4295654296875,
            z: -2.0076732635498047,
          },
        },
        {
          type: "LEFT_EYE_LEFT_CORNER",
          position: {
            x: 1413.3489990234375,
            y: 890.593505859375,
            z: -7.48370361328125,
          },
        },
        {
          type: "RIGHT_EYE_TOP_BOUNDARY",
          position: {
            x: 1460.6666259765625,
            y: 892.5440063476562,
            z: 47.89031219482422,
          },
        },
        {
          type: "RIGHT_EYE_RIGHT_CORNER",
          position: {
            x: 1463.7647705078125,
            y: 898.9864501953125,
            z: 62.72602462768555,
          },
        },
        {
          type: "RIGHT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 1459.0030517578125,
            y: 901.998046875,
            z: 47.90870666503906,
          },
        },
        {
          type: "RIGHT_EYE_LEFT_CORNER",
          position: {
            x: 1451.4512939453125,
            y: 897.8032836914062,
            z: 38.27562713623047,
          },
        },
        {
          type: "LEFT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 1425.311279296875,
            y: 866.1788330078125,
            z: -3.152690887451172,
          },
        },
        {
          type: "RIGHT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 1462.9595947265625,
            y: 878.7423095703125,
            z: 49.358375549316406,
          },
        },
        {
          type: "LEFT_EAR_TRAGION",
          position: {
            x: 1335.404052734375,
            y: 910.6611328125,
            z: 8.327249526977539,
          },
        },
        {
          type: "RIGHT_EAR_TRAGION",
          position: {
            x: 1432.361328125,
            y: 919.0830688476562,
            z: 122.64264678955078,
          },
        },
        {
          type: "FOREHEAD_GLABELLA",
          position: {
            x: 1453.2900390625,
            y: 878.3228149414062,
            z: 19.064180374145508,
          },
        },
        {
          type: "CHIN_GNATHION",
          position: {
            x: 1449.9576416015625,
            y: 1001.8043212890625,
            z: 4.218664169311523,
          },
        },
        {
          type: "CHIN_LEFT_GONION",
          position: {
            x: 1368.8916015625,
            y: 961.0296630859375,
            z: -5.101865768432617,
          },
        },
        {
          type: "CHIN_RIGHT_GONION",
          position: {
            x: 1433.7786865234375,
            y: 979.6011352539062,
            z: 86.3274917602539,
          },
        },
        {
          type: "LEFT_CHEEK_CENTER",
          position: {
            x: 1414.746337890625,
            y: 928.208740234375,
            z: -13.225715637207031,
          },
        },
        {
          type: "RIGHT_CHEEK_CENTER",
          position: {
            x: 1465.09423828125,
            y: 937.32421875,
            z: 55.75635528564453,
          },
        },
      ],
      boundingPoly: {
        vertices: [
          {
            x: 1296,
            y: 779,
          },
          {
            x: 1501,
            y: 779,
          },
          {
            x: 1501,
            y: 1017,
          },
          {
            x: 1296,
            y: 1017,
          },
        ],
        normalizedVertices: [],
      },
      fdBoundingPoly: {
        vertices: [
          {
            x: 1315,
            y: 834,
          },
          {
            x: 1472,
            y: 834,
          },
          {
            x: 1472,
            y: 998,
          },
          {
            x: 1315,
            y: 998,
          },
        ],
        normalizedVertices: [],
      },
      rollAngle: -0.7810440063476562,
      panAngle: 54.01873779296875,
      tiltAngle: 9.048991203308105,
      detectionConfidence: 0.9375,
      landmarkingConfidence: 0.29526835680007935,
      joyLikelihood: "VERY_LIKELY",
      sorrowLikelihood: "VERY_UNLIKELY",
      angerLikelihood: "VERY_UNLIKELY",
      surpriseLikelihood: "VERY_UNLIKELY",
      underExposedLikelihood: "VERY_UNLIKELY",
      blurredLikelihood: "VERY_UNLIKELY",
      headwearLikelihood: "UNLIKELY",
    },
    {
      landmarks: [
        {
          type: "LEFT_EYE",
          position: {
            x: 3037.923583984375,
            y: 721.0740356445312,
            z: 0.0005946159362792969,
          },
        },
        {
          type: "RIGHT_EYE",
          position: {
            x: 3065.66357421875,
            y: 723.4872436523438,
            z: -47.180816650390625,
          },
        },
        {
          type: "LEFT_OF_LEFT_EYEBROW",
          position: {
            x: 3022.30615234375,
            y: 709.10400390625,
            z: 22.420635223388672,
          },
        },
        {
          type: "RIGHT_OF_LEFT_EYEBROW",
          position: {
            x: 3038.36181640625,
            y: 705.056640625,
            z: -16.95423698425293,
          },
        },
        {
          type: "LEFT_OF_RIGHT_EYEBROW",
          position: {
            x: 3050.31640625,
            y: 706.2508544921875,
            z: -39.3117561340332,
          },
        },
        {
          type: "RIGHT_OF_RIGHT_EYEBROW",
          position: {
            x: 3086.347900390625,
            y: 712.1786499023438,
            z: -59.77333068847656,
          },
        },
        {
          type: "MIDPOINT_BETWEEN_EYES",
          position: {
            x: 3040.628662109375,
            y: 717.8575439453125,
            z: -29.92110824584961,
          },
        },
        {
          type: "NOSE_TIP",
          position: {
            x: 3016.818359375,
            y: 750.4839477539062,
            z: -43.645748138427734,
          },
        },
        {
          type: "UPPER_LIP",
          position: {
            x: 3026.873291015625,
            y: 771.6846923828125,
            z: -38.17870330810547,
          },
        },
        {
          type: "LOWER_LIP",
          position: {
            x: 3025.33056640625,
            y: 796.5088500976562,
            z: -38.3817138671875,
          },
        },
        {
          type: "MOUTH_LEFT",
          position: {
            x: 3025.47998046875,
            y: 780.263427734375,
            z: -9.089456558227539,
          },
        },
        {
          type: "MOUTH_RIGHT",
          position: {
            x: 3057.895263671875,
            y: 782.06640625,
            z: -51.85502243041992,
          },
        },
        {
          type: "MOUTH_CENTER",
          position: {
            x: 3029.552001953125,
            y: 783.8981323242188,
            z: -37.12940216064453,
          },
        },
        {
          type: "NOSE_BOTTOM_RIGHT",
          position: {
            x: 3046.2041015625,
            y: 757.6708984375,
            z: -45.098690032958984,
          },
        },
        {
          type: "NOSE_BOTTOM_LEFT",
          position: {
            x: 3024.174072265625,
            y: 757.70849609375,
            z: -17.683563232421875,
          },
        },
        {
          type: "NOSE_BOTTOM_CENTER",
          position: {
            x: 3028.274169921875,
            y: 761.2017211914062,
            z: -37.12805938720703,
          },
        },
        {
          type: "LEFT_EYE_TOP_BOUNDARY",
          position: {
            x: 3036.5751953125,
            y: 715.8807373046875,
            z: -0.6447982788085938,
          },
        },
        {
          type: "LEFT_EYE_RIGHT_CORNER",
          position: {
            x: 3042.25927734375,
            y: 722.7845458984375,
            z: -9.532554626464844,
          },
        },
        {
          type: "LEFT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 3035.55078125,
            y: 725.3084106445312,
            z: -0.017170429229736328,
          },
        },
        {
          type: "LEFT_EYE_LEFT_CORNER",
          position: {
            x: 3031.419189453125,
            y: 720.3388671875,
            z: 14.437219619750977,
          },
        },
        {
          type: "RIGHT_EYE_TOP_BOUNDARY",
          position: {
            x: 3066.49560546875,
            y: 718.557861328125,
            z: -49.55613708496094,
          },
        },
        {
          type: "RIGHT_EYE_RIGHT_CORNER",
          position: {
            x: 3077.788330078125,
            y: 726.236328125,
            z: -54.716796875,
          },
        },
        {
          type: "RIGHT_EYE_BOTTOM_BOUNDARY",
          position: {
            x: 3065.655029296875,
            y: 727.935302734375,
            z: -48.90256881713867,
          },
        },
        {
          type: "RIGHT_EYE_LEFT_CORNER",
          position: {
            x: 3058.66748046875,
            y: 722.5211181640625,
            z: -37.2318115234375,
          },
        },
        {
          type: "LEFT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 3034.78125,
            y: 704.3180541992188,
            z: -0.2010040283203125,
          },
        },
        {
          type: "RIGHT_EYEBROW_UPPER_MIDPOINT",
          position: {
            x: 3066.6181640625,
            y: 703.3109130859375,
            z: -51.177001953125,
          },
        },
        {
          type: "LEFT_EAR_TRAGION",
          position: {
            x: 3054.236572265625,
            y: 755.8597412109375,
            z: 72.3338851928711,
          },
        },
        {
          type: "RIGHT_EAR_TRAGION",
          position: {
            x: 3130.244140625,
            y: 756.6814575195312,
            z: -38.08641052246094,
          },
        },
        {
          type: "FOREHEAD_GLABELLA",
          position: {
            x: 3041.953125,
            y: 705.2589111328125,
            z: -29.197336196899414,
          },
        },
        {
          type: "CHIN_GNATHION",
          position: {
            x: 3024.163818359375,
            y: 827.1843872070312,
            z: -36.81443786621094,
          },
        },
        {
          type: "CHIN_LEFT_GONION",
          position: {
            x: 3041.59912109375,
            y: 810.07373046875,
            z: 40.21202850341797,
          },
        },
        {
          type: "CHIN_RIGHT_GONION",
          position: {
            x: 3102.815185546875,
            y: 810.5678100585938,
            z: -47.79410934448242,
          },
        },
        {
          type: "LEFT_CHEEK_CENTER",
          position: {
            x: 3025.39306640625,
            y: 758.3764038085938,
            z: 9.652568817138672,
          },
        },
        {
          type: "RIGHT_CHEEK_CENTER",
          position: {
            x: 3072.21337890625,
            y: 763.6355590820312,
            z: -58.500335693359375,
          },
        },
      ],
      boundingPoly: {
        vertices: [
          {
            x: 2988,
            y: 630,
          },
          {
            x: 3173,
            y: 630,
          },
          {
            x: 3173,
            y: 845,
          },
          {
            x: 2988,
            y: 845,
          },
        ],
        normalizedVertices: [],
      },
      fdBoundingPoly: {
        vertices: [
          {
            x: 3005,
            y: 674,
          },
          {
            x: 3163,
            y: 674,
          },
          {
            x: 3163,
            y: 830,
          },
          {
            x: 3005,
            y: 830,
          },
        ],
        normalizedVertices: [],
      },
      rollAngle: 10.060380935668945,
      panAngle: -54.36814880371094,
      tiltAngle: 5.69498872756958,
      detectionConfidence: 0.5859375,
      landmarkingConfidence: 0.2424032837152481,
      joyLikelihood: "VERY_LIKELY",
      sorrowLikelihood: "VERY_UNLIKELY",
      angerLikelihood: "VERY_UNLIKELY",
      surpriseLikelihood: "VERY_UNLIKELY",
      underExposedLikelihood: "VERY_UNLIKELY",
      blurredLikelihood: "VERY_UNLIKELY",
      headwearLikelihood: "VERY_UNLIKELY",
    },
  ],
  landmarkAnnotations: [],
  logoAnnotations: [],
  labelAnnotations: [
    {
      locations: [],
      properties: [],
      mid: "/m/05s2s",
      locale: "",
      description: "Plant",
      score: 0.9444000124931335,
      confidence: 0,
      topicality: 0.9444000124931335,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/01g5v",
      locale: "",
      description: "Blue",
      score: 0.9198045134544373,
      confidence: 0,
      topicality: 0.9198045134544373,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/03fp41",
      locale: "",
      description: "Houseplant",
      score: 0.854662299156189,
      confidence: 0,
      topicality: 0.854662299156189,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/04g3r",
      locale: "",
      description: "Leisure",
      score: 0.7962123155593872,
      confidence: 0,
      topicality: 0.7962123155593872,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/01mzpv",
      locale: "",
      description: "Chair",
      score: 0.7473576068878174,
      confidence: 0,
      topicality: 0.7473576068878174,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/081pkj",
      locale: "",
      description: "Event",
      score: 0.7470781207084656,
      confidence: 0,
      topicality: 0.7470781207084656,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/02vwbzz",
      locale: "",
      description: "Electric blue",
      score: 0.7187007069587708,
      confidence: 0,
      topicality: 0.7187007069587708,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/03rszm",
      locale: "",
      description: "Curtain",
      score: 0.6930181980133057,
      confidence: 0,
      topicality: 0.6930181980133057,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/02jjt",
      locale: "",
      description: "Entertainment",
      score: 0.6876068115234375,
      confidence: 0,
      topicality: 0.6876068115234375,
      boundingPoly: null,
    },
    {
      locations: [],
      properties: [],
      mid: "/m/013s93",
      locale: "",
      description: "T-shirt",
      score: 0.6875602602958679,
      confidence: 0,
      topicality: 0.6875602602958679,
      boundingPoly: null,
    },
  ],
  textAnnotations: [],
  localizedObjectAnnotations: [
    {
      mid: "/m/01g317",
      languageCode: "",
      name: "Person",
      score: 0.8902283310890198,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.71484375,
            y: 0.21875,
          },
          {
            x: 0.9296875,
            y: 0.21875,
          },
          {
            x: 0.9296875,
            y: 0.73046875,
          },
          {
            x: 0.71484375,
            y: 0.73046875,
          },
        ],
      },
    },
    {
      mid: "/m/01g317",
      languageCode: "",
      name: "Person",
      score: 0.8828026056289673,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.09423828125,
            y: 0.0498046875,
          },
          {
            x: 0.322265625,
            y: 0.0498046875,
          },
          {
            x: 0.322265625,
            y: 0.83984375,
          },
          {
            x: 0.09423828125,
            y: 0.83984375,
          },
        ],
      },
    },
    {
      mid: "/m/01g317",
      languageCode: "",
      name: "Person",
      score: 0.8509603142738342,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.515625,
            y: 0.322265625,
          },
          {
            x: 0.7109375,
            y: 0.322265625,
          },
          {
            x: 0.7109375,
            y: 0.8046875,
          },
          {
            x: 0.515625,
            y: 0.8046875,
          },
        ],
      },
    },
    {
      mid: "/m/01g317",
      languageCode: "",
      name: "Person",
      score: 0.8329299688339233,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.3125,
            y: 0.3125,
          },
          {
            x: 0.474609375,
            y: 0.3125,
          },
          {
            x: 0.474609375,
            y: 0.79296875,
          },
          {
            x: 0.3125,
            y: 0.79296875,
          },
        ],
      },
    },
    {
      mid: "/m/03gx245",
      languageCode: "",
      name: "Top",
      score: 0.8296906352043152,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.58203125,
            y: 0.41015625,
          },
          {
            x: 0.6796875,
            y: 0.41015625,
          },
          {
            x: 0.6796875,
            y: 0.5625,
          },
          {
            x: 0.58203125,
            y: 0.5625,
          },
        ],
      },
    },
    {
      mid: "/m/07mhn",
      languageCode: "",
      name: "Pants",
      score: 0.8292633295059204,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.1435546875,
            y: 0.388671875,
          },
          {
            x: 0.26953125,
            y: 0.388671875,
          },
          {
            x: 0.26953125,
            y: 0.765625,
          },
          {
            x: 0.1435546875,
            y: 0.765625,
          },
        ],
      },
    },
    {
      mid: "/m/03gx245",
      languageCode: "",
      name: "Top",
      score: 0.8083474636077881,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.7890625,
            y: 0.326171875,
          },
          {
            x: 0.92578125,
            y: 0.326171875,
          },
          {
            x: 0.92578125,
            y: 0.5,
          },
          {
            x: 0.7890625,
            y: 0.5,
          },
        ],
      },
    },
    {
      mid: "/m/01n4qj",
      languageCode: "",
      name: "Shirt",
      score: 0.793529212474823,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.09765625,
            y: 0.1494140625,
          },
          {
            x: 0.26171875,
            y: 0.1494140625,
          },
          {
            x: 0.26171875,
            y: 0.458984375,
          },
          {
            x: 0.09765625,
            y: 0.458984375,
          },
        ],
      },
    },
    {
      mid: "/m/03gx245",
      languageCode: "",
      name: "Top",
      score: 0.7903185486793518,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.322265625,
            y: 0.3984375,
          },
          {
            x: 0.431640625,
            y: 0.3984375,
          },
          {
            x: 0.431640625,
            y: 0.5625,
          },
          {
            x: 0.322265625,
            y: 0.5625,
          },
        ],
      },
    },
    {
      mid: "/m/0fly7",
      languageCode: "",
      name: "Jeans",
      score: 0.7788266539573669,
      boundingPoly: {
        vertices: [],
        normalizedVertices: [
          {
            x: 0.44921875,
            y: 0.416015625,
          },
          {
            x: 0.55078125,
            y: 0.416015625,
          },
          {
            x: 0.55078125,
            y: 0.68359375,
          },
          {
            x: 0.44921875,
            y: 0.68359375,
          },
        ],
      },
    },
  ],
  safeSearchAnnotation: {
    adult: "UNLIKELY",
    spoof: "VERY_UNLIKELY",
    medical: "VERY_UNLIKELY",
    violence: "VERY_UNLIKELY",
    racy: "UNLIKELY",
  },
  imagePropertiesAnnotation: null,
  error: null,
  cropHintsAnnotation: null,
  fullTextAnnotation: null,
  webDetection: {
    webEntities: [
      {
        entityId: "/m/036jvk",
        score: 0.7109000086784363,
        description: "Photo agency",
      },
      {
        entityId: "/g/11qpzy9wz6",
        score: 0.7031999826431274,
        description: "Pexels",
      },
      {
        entityId: "/m/0jg24",
        score: 0.6392999887466431,
        description: "Image",
      },
      {
        entityId: "/m/068jd",
        score: 0.54830002784729,
        description: "Photograph",
      },
      {
        entityId: "/m/05wkw",
        score: 0.5473999977111816,
        description: "Photography",
      },
      {
        entityId: "/m/03zfrv",
        score: 0.37880000472068787,
        description: "stock.xchng",
      },
      {
        entityId: "/g/11s8fxnsmw",
        score: 0.34060001373291016,
        description: "Talented",
      },
      {
        entityId: "/m/03thgk",
        score: 0.2896000146865845,
        description: "Silhouette",
      },
      {
        entityId: "/g/120p9yhk",
        score: 0.24809999763965607,
        description: "Animation",
      },
      {
        entityId: "/g/11bc61zsd9",
        score: 0.22139999270439148,
        description: "Free People",
      },
    ],
    fullMatchingImages: [
      {
        url: "https://blog.moderngov.com/hubfs/pexels-jopwell-2422290.jpg",
        score: 0,
      },
      {
        url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?cs=srgb&dl=pexels-jopwell-2422290.jpg&fm=jpg",
        score: 0,
      },
      {
        url: "https://independentlivingacademy.org/wp-content/uploads/2020/12/IMG-3331.jpg",
        score: 0,
      },
      {
        url: "https://www.fly-highcoaching.com/wp-content/uploads/2020/10/group-of-people-near-wall-2422290-scaled.jpg",
        score: 0,
      },
      {
        url: "https://drkpurposefuljourney.com/admin/fotos_pagina/outmore/26633681.jpg",
        score: 0,
      },
      {
        url: "https://uploads-ssl.webflow.com/6201c6aacd96d324c71f7aa1/63a28f41eaa46176bc5d7445_Flat%20and%20Faceless%20.jpg",
        score: 0,
      },
      {
        url: "https://allin1contractinginc.com/Images/Camera_Roll/people_smiling.jpg",
        score: 0,
      },
      {
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/scbd1fdf73d5085e8/image/i9c85cf17b553e9b7/version/1615306478/image.jpg",
        score: 0,
      },
      {
        url: "https://assets-a1.kompasiana.com/items/album/2023/06/12/pexels-jopwell-2422290-6487168508a8b56bd0160224.jpg",
        score: 0,
      },
      {
        url: "https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/36d74ff0-cd30-48c8-9f8c-9ef14e351027/pexels-jopwell-2422290.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-36d74ff0-cd30-48c8-9f8c-9ef14e351027-ovEQMM4",
        score: 0,
      },
    ],
    partialMatchingImages: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5612AQFQ0eYe2DqnEw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1720858063861?e=2147483647&v=beta&t=xJLdeQKoRZpopMOCVDF-DIuObOal2tH2M2lt60wEtO8",
        score: 0,
      },
      {
        url: "https://media.licdn.com/dms/image/v2/D4E12AQFx2MziV_aubQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688855691477?e=2147483647&v=beta&t=XAkLHiFf978N2sTSP_1-_6HJgDviXG3LfXvzTXXIEhU",
        score: 0,
      },
      {
        url: "https://media.licdn.com/dms/image/sync/v2/D4E27AQFO05uHIH0foA/articleshare-shrink_800/articleshare-shrink_800/0/1711628504510?e=2147483647&v=beta&t=zlx8PS3YhsQCpQEXIzNKYV5PKk4MZvihk7dK4lbFYb0",
        score: 0,
      },
      {
        url: "https://media.licdn.com/dms/image/sync/v2/D5627AQEOhA7LSDUY6A/articleshare-shrink_800/articleshare-shrink_800/0/1723203662889?e=2147483647&v=beta&t=GnuDnJjfsNZFb-Ti8pQEVQX8eQ5xeAEFSxV1uXX26JI",
        score: 0,
      },
      {
        url: "https://www.siliconhillsassociationmanagement.com/images/blog/c4e36002751b782b24f08eb694153ca8-min.jpg",
        score: 0,
      },
      {
        url: "https://assets-a3.kompasiana.com/items/album/2024/06/08/pexels-jopwell-2422290-6663d4b5c925c4035c44dd42.jpg?t=o&v=410",
        score: 0,
      },
      {
        url: "https://blogs.macroairfans.com/hs-fs/hubfs/pexels-jopwell-2422290.jpg?width=374&height=270&name=pexels-jopwell-2422290.jpg",
        score: 0,
      },
      {
        url: "https://www.plkconsultancy.com/wp-content/uploads/2020/03/group-of-people-near-wall-2422290-556x400.jpg",
        score: 0,
      },
      {
        url: "https://changewellpsych.com/wp-content/uploads/2024/07/pexels-jopwell-2422290-scaled.webp",
        score: 0,
      },
      {
        url: "https://theinsurance.school/wp-content/uploads/2020/10/online-coding-course-team-video-thumb-img-300x216.jpg",
        score: 0,
      },
    ],
    pagesWithMatchingImages: [
      {
        fullMatchingImages: [
          {
            url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?cs=srgb&dl=pexels-jopwell-2422290.jpg&fm=jpg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.pexels.com/search/group%20of%20people/",
        score: 0,
        pageTitle: "Free Group Of People Photos - Pexels",
      },
      {
        fullMatchingImages: [
          {
            url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?cs=srgb&dl=pexels-jopwell-2422290.jpg&fm=jpg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.pexels.com/search/group/",
        score: 0,
        pageTitle: "Free Group Photos - Pexels",
      },
      {
        fullMatchingImages: [
          {
            url: "https://positivedevelopments.ca/wp-content/uploads/2023/12/pexels-jopwell-2422290-scaled.jpg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://positivedevelopments.ca/news-events/brain-injury-support-group/",
        score: 0,
        pageTitle: "Brain Injury Support Group - Positive Developments",
      },
      {
        fullMatchingImages: [],
        partialMatchingImages: [
          {
            url: "https://ecampusontario.pressbooks.pub/app/uploads/sites/1190/2021/09/pexels-jopwell-2422290-300x216.jpg",
            score: 0,
          },
        ],
        url: "https://ecampusontario.pressbooks.pub/interculturalcompetence/chapter/embracing-intercultural-knowledge/",
        score: 0,
        pageTitle:
          "Embracing Intercultural Knowledge - eCampusOntario Pressbooks",
      },
      {
        fullMatchingImages: [
          {
            url: "https://cdn.prod.website-files.com/62275984d0ebeff7da8c5ff9/6364ddb3c5fb427e028de80c_pexels-jopwell-2422290-2.webp",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.akimbo.eu/en/blog/disc-method-understanding-it-to-sell-better-4-personalities",
        score: 0,
        pageTitle:
          "DISC method: understanding it to sell better - 4 personalities",
      },
      {
        fullMatchingImages: [
          {
            url: "https://www.monarchks.org/wp-content/uploads/2024/01/pexels-photo-2422290.jpeg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.monarchks.org/courses/",
        score: 0,
        pageTitle: "courses - The Monarch Center",
      },
      {
        fullMatchingImages: [
          {
            url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.pexels.com/search/videos/people%20talking/",
        score: 0,
        pageTitle: "Free People Talking Videos - Pexels",
      },
      {
        fullMatchingImages: [
          {
            url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            score: 0,
          },
          {
            url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.pexels.com/photo/group-of-people-near-wall-2422290/",
        score: 0,
        pageTitle: "Free Group of People Near Wall Stock Photo - Pexels",
      },
      {
        fullMatchingImages: [
          {
            url: "https://grupoevents.com/wp-content/uploads/2022/06/now-2.jpeg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://grupoevents.com/3-ways-to-turn-your-corporate-group-into-a-team/",
        score: 0,
        pageTitle:
          "3 Ways To Turn Your Corporate Group Into A Team - Grupo Events",
      },
      {
        fullMatchingImages: [
          {
            url: "https://static.wixstatic.com/media/8496d6_b0d0a7d1bb114ee497f12b41c65abe80~mv2.jpg/v1/fill/w_980,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-jopwell-2422290.jpg",
            score: 0,
          },
        ],
        partialMatchingImages: [],
        url: "https://www.openpalm.org.uk/",
        score: 0,
        pageTitle:
          "Open Palm | A charity improving lives in the United Kingdom",
      },
    ],
    visuallySimilarImages: [
      {
        url: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg",
        score: 0,
      },
      {
        url: "x-raw-image:///0fcf0955ba89787ffdb857d344d1769f144c1aa17b724850bf2425f87814254c",
        score: 0,
      },
      {
        url: "https://boku.ac.at/fileadmin/_processed_/7/8/csm_internationales_sprachkurse_3_2_90896c9908.jpg",
        score: 0,
      },
      {
        url: "https://digitaladvertisingalliance.org/sites/aboutads/files/files/DAA_images/04%2002%2018%20-%20DAA%20Blog%20Photo%20-%20Webinar%20for%20Site%20and%20App%20Owners.jpg",
        score: 0,
      },
      {
        url: "https://stuzubi.de/wp-content/uploads/2023/07/tdm-23-07-die-beliebtesten-berufe-von-a-bis-z-1120x700-1.jpg",
        score: 0,
      },
      {
        url: "https://pshsa.s3.amazonaws.com/attachments/cjmtmnn4l02d6sbm2q2i5wafi-group-of-workers.full.jpg",
        score: 0,
      },
      {
        url: "https://ul.org/sites/default/files/styles/card/public/2023-07/Getty-1442006859-benicetoyourdevice.png?itok=PBzUB_nY",
        score: 0,
      },
      {
        url: "https://www-file.huawei.com/-/media/corporate/local-site/es/corporatewebsite/plan-de-igualdad2.jpg?la=es",
        score: 0,
      },
      {
        url: "https://cms.qut.edu.au/__data/assets/image/0010/1154296/25198-MIT-QUT-The-Future-Enterprise-Insights.jpg",
        score: 0,
      },
      {
        url: "https://www.oiahe.org.uk/media/juvcyizh/our-people.png?width=768&height=512&v=1daccb5e7091550",
        score: 0,
      },
    ],
    bestGuessLabels: [
      {
        label: "group of people",
        languageCode: "en",
      },
    ],
  },
  productSearchResults: null,
  context: null,
};

const exifInfo: ExifInfo = {
  make: "",
  model: "",
  orientation: "",
  dateTimeOriginal: "",
  imageHeight: "2591px",
  imageWidth: "3600px",
  software: "",
  exifVersion: "",
  lensMake: "",
  lensModel: "",
  exposureTime: "",
  fNumber: "",
  exposureProgram: "",
  isoSpeedRatings: 0,
  shutterSpeedValue: "",
  apertureValue: "",
  brightnessValue: "",
  exposureBiasValue: "",
  maxApertureValue: "",
  subjectDistance: "",
  meteringMode: "",
  flash: "",
  focalLength: "",
  subSecTimeOriginal: "",
  colorSpace: "",
  pixelXDimension: 0,
  pixelYDimension: 0,
  sensingMethod: "",
  sceneType: "",
  exposureMode: "",
  whiteBalance: "",
  digitalZoomRatio: "",
  focalLengthIn35mmFilm: 0,
  sceneCaptureType: "",
  contrast: "",
  saturation: "",
  sharpness: "",
  subjectDistanceRange: "",
  gpsVersionID: "",
  gpsLatitudeRef: "",
  gpsLatitude: 0,
  gpsLongitudeRef: "",
  gpsLongitude: 0,
  gpsAltitudeRef: "",
  gpsAltitude: "",
  gpsTimeStamp: "",
  gpsImgDirectionRef: "",
  gpsImgDirection: "",
  gpsDateStamp: "",
};

export const jpgSamplePhoto6: Photo = {
  filename: "jpg_sample_6.jpg",
  src: "/images/jpg_sample_6.jpg",
  exifInfo,
  vision,
  height: 2591,
  width: 3600
};
