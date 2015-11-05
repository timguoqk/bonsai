/**
 * The CSS named color map.
 *
 * @see http://www.w3.org/TR/css3-color/#svg-color
 * @exports color_map
 */
define(function() {
  'use strict';

  var colorMap = {
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    transparent: 0x00000000,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff
  };

  Object.defineProperty(colorMap, 'random', {
    get: function() {
      return ((Math.random() * 0xffffff) << 8) | 0xff;
    }
  });

  // Attractive random color algorithm
  // based on https://github.com/davidmerfield/randomColor
  var colorDictionary = {};

  function loadColorBounds() {
    function defineColor(name, hueRange, lowerBounds) {
      var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

      colorDictionary[name] = {
        hueRange: hueRange,
        lowerBounds: lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax]
      };
    }
    defineColor(
      'monochrome',
      null, [
        [0, 0],
        [100, 0]
      ]
    );

    defineColor(
      'red', [-26, 18], [
        [20, 100],
        [30, 92],
        [40, 89],
        [50, 85],
        [60, 78],
        [70, 70],
        [80, 60],
        [90, 55],
        [100, 50]
      ]
    );

    defineColor(
      'orange', [19, 46], [
        [20, 100],
        [30, 93],
        [40, 88],
        [50, 86],
        [60, 85],
        [70, 70],
        [100, 70]
      ]
    );

    defineColor(
      'yellow', [47, 62], [
        [25, 100],
        [40, 94],
        [50, 89],
        [60, 86],
        [70, 84],
        [80, 82],
        [90, 80],
        [100, 75]
      ]
    );

    defineColor(
      'green', [63, 178], [
        [30, 100],
        [40, 90],
        [50, 85],
        [60, 81],
        [70, 74],
        [80, 64],
        [90, 50],
        [100, 40]
      ]
    );

    defineColor(
      'blue', [179, 257], [
        [20, 100],
        [30, 86],
        [40, 80],
        [50, 74],
        [60, 60],
        [70, 52],
        [80, 44],
        [90, 39],
        [100, 35]
      ]
    );

    defineColor(
      'purple', [258, 282], [
        [20, 100],
        [30, 87],
        [40, 79],
        [50, 70],
        [60, 65],
        [70, 59],
        [80, 52],
        [90, 45],
        [100, 42]
      ]
    );

    defineColor(
      'pink', [283, 334], [
        [20, 100],
        [30, 90],
        [40, 86],
        [60, 84],
        [80, 80],
        [90, 75],
        [100, 73]
      ]
    );
  }
  loadColorBounds();
  Object.defineProperty(colorMap, 'attractiveRandom', {
    get: function() {
      function randomWithin(range) {
        return Math.floor(range[0] + Math.random() *
          (range[1] + 1 - range[0]));
      }

      function getColorInfo(hue) {
        // Maps red colors to make picking hue easier
        if (hue >= 334 && hue <= 360) {
          hue -= 360;
        }

        for (var colorName in colorDictionary) {
          var color = colorDictionary[colorName];
          if (color.hueRange &&
            hue >= color.hueRange[0] &&
            hue <= color.hueRange[1]) {
            return colorDictionary[colorName];
          }
        }
        return 'Color not found';
      }

      function getMinimumBrightness(H, S) {
        var lowerBounds = getColorInfo(H).lowerBounds;
        for (var i = 0; i < lowerBounds.length - 1; i++) {
          var s1 = lowerBounds[i][0],
            v1 = lowerBounds[i][1];
          var s2 = lowerBounds[i + 1][0],
            v2 = lowerBounds[i + 1][1];
          if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1),
              b = v1 - m * s1;
            return m * S + b;
          }
        }
        return 0;
      }

      function HSVtoHex(hsv) {
        function HSVtoRGB(hsv) {
          // this doesn't work for the values of 0 and 360
          // here's the hacky fix
          var h = hsv[0];
          if (h === 0) {
            h = 1;
          }
          if (h === 360) {
            h = 359;
          }

          // Rebase the h,s,v values
          h = h / 360;
          var s = hsv[1] / 100,
            v = hsv[2] / 100;

          var h_i = Math.floor(h * 6),
            f = h * 6 - h_i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            r = 256,
            g = 256,
            b = 256;

          switch (h_i) {
            case 0:
              r = v;
              g = t;
              b = p;
              break;
            case 1:
              r = q;
              g = v;
              b = p;
              break;
            case 2:
              r = p;
              g = v;
              b = t;
              break;
            case 3:
              r = p;
              g = q;
              b = v;
              break;
            case 4:
              r = t;
              g = p;
              b = v;
              break;
            case 5:
              r = v;
              g = p;
              b = q;
              break;
          }

          var result = [Math.floor(r * 255), Math
            .floor(g * 255), Math.floor(b *
              255)
          ];
          return result;
        }
        var rgb = HSVtoRGB(hsv);

        function componentToHex(c) {
          var hex = c.toString(16);
          return hex.length == 1 ? '0' + hex :
            hex;
        }
        var hex = '#' + componentToHex(rgb[0]) +
          componentToHex(rgb[1]) + componentToHex(
            rgb[2]);
        return hex;
      }

      var H = randomWithin([0, 360]);
      var S = randomWithin(getColorInfo(H).saturationRange);
      var B = randomWithin([getMinimumBrightness(H, S),
        100
      ]);
      return HSVtoHex([H, S, B]);
    }
  });

  return colorMap;
});
