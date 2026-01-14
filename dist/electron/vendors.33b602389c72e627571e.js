(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [39],
  {
    3065: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ascending", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "bisect", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "bisectLeft", {
          enumerable: !0,
          get: function () {
            return u.bisectLeft;
          },
        }),
        Object.defineProperty(t, "bisectRight", {
          enumerable: !0,
          get: function () {
            return u.bisectRight;
          },
        }),
        Object.defineProperty(t, "bisector", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "cross", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "descending", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "deviation", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "extent", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "histogram", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "max", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "mean", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "median", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "merge", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "min", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "pairs", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "permute", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "quantile", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "range", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "scan", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "shuffle", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "sum", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "thresholdFreedmanDiaconis", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "thresholdScott", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "thresholdSturges", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "tickIncrement", {
          enumerable: !0,
          get: function () {
            return k.tickIncrement;
          },
        }),
        Object.defineProperty(t, "tickStep", {
          enumerable: !0,
          get: function () {
            return k.tickStep;
          },
        }),
        Object.defineProperty(t, "ticks", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "transpose", {
          enumerable: !0,
          get: function () {
            return N.default;
          },
        }),
        Object.defineProperty(t, "variance", {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        Object.defineProperty(t, "zip", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }));
      var u = E(n(6272)),
        i = r(n(3917)),
        o = r(n(6273)),
        a = r(n(8450)),
        c = r(n(8451)),
        l = r(n(6275)),
        f = r(n(6277)),
        s = r(n(8452)),
        d = r(n(8455)),
        h = r(n(8456)),
        p = r(n(6281)),
        v = r(n(8457)),
        y = r(n(8458)),
        b = r(n(8459)),
        g = r(n(8460)),
        m = r(n(6282)),
        w = r(n(6274)),
        O = r(n(8461)),
        _ = r(n(5301)),
        M = r(n(6279)),
        P = r(n(8462)),
        j = r(n(8463)),
        x = r(n(8464)),
        k = E(n(6280)),
        N = r(n(6283)),
        I = r(n(6276)),
        A = r(n(8465));
      function E(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (E = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    3341: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "color", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "cubehelix", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "gray", {
          enumerable: !0,
          get: function () {
            return i.gray;
          },
        }),
        Object.defineProperty(t, "hcl", {
          enumerable: !0,
          get: function () {
            return i.hcl;
          },
        }),
        Object.defineProperty(t, "hsl", {
          enumerable: !0,
          get: function () {
            return u.hsl;
          },
        }),
        Object.defineProperty(t, "lab", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "lch", {
          enumerable: !0,
          get: function () {
            return i.lch;
          },
        }),
        Object.defineProperty(t, "rgb", {
          enumerable: !0,
          get: function () {
            return u.rgb;
          },
        }));
      var u = a(n(5310)),
        i = a(n(8511)),
        o = r(n(8512));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    3917: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    3918: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "dispatch", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }));
      var u = r(n(8472));
    },
    3920: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4500: function (e, t, n) {
      "use strict";
      function r(e) {
        return null === e ? NaN : +e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4727: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "entries", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "keys", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "map", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "nest", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "set", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "values", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var u = r(n(8569)),
        i = r(n(8570)),
        o = r(n(5316)),
        a = r(n(8571)),
        c = r(n(8572)),
        l = r(n(8573));
    },
    5301: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(4500));
      function i(e, t, n) {
        if ((null == n && (n = u.default), (r = e.length))) {
          if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
          if (t >= 1) return +n(e[r - 1], r - 1, e);
          var r,
            i = (r - 1) * t,
            o = Math.floor(i),
            a = +n(e[o], o, e),
            c = +n(e[o + 1], o + 1, e);
          return a + (c - a) * (i - o);
        }
      }
    },
    5302: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "drag", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "dragDisable", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "dragEnable", {
          enumerable: !0,
          get: function () {
            return i.yesdrag;
          },
        }));
      var u = r(n(8473)),
        i = o(n(6290));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    5310: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Color = i),
        (t.Rgb = k),
        (t.darker = t.brighter = void 0),
        (t.default = _),
        (t.hsl = F),
        (t.hslConvert = R),
        (t.rgb = x),
        (t.rgbConvert = j));
      var r = u(n(5311));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function i() {}
      var o = (t.darker = 0.7),
        a = (t.brighter = 1 / o),
        c = "\\s*([+-]?\\d+)\\s*",
        l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        f = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        s = /^#([0-9a-f]{3,8})$/,
        d = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
        h = new RegExp("^rgb\\(" + [f, f, f] + "\\)$"),
        p = new RegExp("^rgba\\(" + [c, c, c, l] + "\\)$"),
        v = new RegExp("^rgba\\(" + [f, f, f, l] + "\\)$"),
        y = new RegExp("^hsl\\(" + [l, f, f] + "\\)$"),
        b = new RegExp("^hsla\\(" + [l, f, f, l] + "\\)$"),
        g = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function m() {
        return this.rgb().formatHex();
      }
      function w() {
        return R(this).formatHsl();
      }
      function O() {
        return this.rgb().formatRgb();
      }
      function _(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = s.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? M(t)
                : 3 === n
                  ? new k(
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      ((15 & t) << 4) | (15 & t),
                      1,
                    )
                  : 8 === n
                    ? P(
                        (t >> 24) & 255,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        (255 & t) / 255,
                      )
                    : 4 === n
                      ? P(
                          ((t >> 12) & 15) | ((t >> 8) & 240),
                          ((t >> 8) & 15) | ((t >> 4) & 240),
                          ((t >> 4) & 15) | (240 & t),
                          (((15 & t) << 4) | (15 & t)) / 255,
                        )
                      : null)
            : (t = d.exec(e))
              ? new k(t[1], t[2], t[3], 1)
              : (t = h.exec(e))
                ? new k(
                    (255 * t[1]) / 100,
                    (255 * t[2]) / 100,
                    (255 * t[3]) / 100,
                    1,
                  )
                : (t = p.exec(e))
                  ? P(t[1], t[2], t[3], t[4])
                  : (t = v.exec(e))
                    ? P(
                        (255 * t[1]) / 100,
                        (255 * t[2]) / 100,
                        (255 * t[3]) / 100,
                        t[4],
                      )
                    : (t = y.exec(e))
                      ? E(t[1], t[2] / 100, t[3] / 100, 1)
                      : (t = b.exec(e))
                        ? E(t[1], t[2] / 100, t[3] / 100, t[4])
                        : g.hasOwnProperty(e)
                          ? M(g[e])
                          : "transparent" === e
                            ? new k(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function M(e) {
        return new k((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function P(e, t, n, r) {
        return (r <= 0 && (e = t = n = NaN), new k(e, t, n, r));
      }
      function j(e) {
        return (
          e instanceof i || (e = _(e)),
          e ? ((e = e.rgb()), new k(e.r, e.g, e.b, e.opacity)) : new k()
        );
      }
      function x(e, t, n, r) {
        return 1 === arguments.length
          ? j(e)
          : new k(e, t, n, null == r ? 1 : r);
      }
      function k(e, t, n, r) {
        ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
      }
      function N() {
        return "#" + A(this.r) + A(this.g) + A(this.b);
      }
      function I() {
        var e = this.opacity;
        return (
          (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
          (1 === e ? "rgb(" : "rgba(") +
            Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
            ", " +
            Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
            (1 === e ? ")" : ", " + e + ")")
        );
      }
      function A(e) {
        return (
          (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
          (e < 16 ? "0" : "") + e.toString(16)
        );
      }
      function E(e, t, n, r) {
        return (
          r <= 0
            ? (e = t = n = NaN)
            : n <= 0 || n >= 1
              ? (e = t = NaN)
              : t <= 0 && (e = NaN),
          new C(e, t, n, r)
        );
      }
      function R(e) {
        if (e instanceof C) return new C(e.h, e.s, e.l, e.opacity);
        if ((e instanceof i || (e = _(e)), !e)) return new C();
        if (e instanceof C) return e;
        e = e.rgb();
        var t = e.r / 255,
          n = e.g / 255,
          r = e.b / 255,
          u = Math.min(t, n, r),
          o = Math.max(t, n, r),
          a = NaN,
          c = o - u,
          l = (o + u) / 2;
        return (
          c
            ? ((a =
                t === o
                  ? (n - r) / c + 6 * (n < r)
                  : n === o
                    ? (r - t) / c + 2
                    : (t - n) / c + 4),
              (c /= l < 0.5 ? o + u : 2 - o - u),
              (a *= 60))
            : (c = l > 0 && l < 1 ? 0 : a),
          new C(a, c, l, e.opacity)
        );
      }
      function F(e, t, n, r) {
        return 1 === arguments.length
          ? R(e)
          : new C(e, t, n, null == r ? 1 : r);
      }
      function C(e, t, n, r) {
        ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
      }
      function q(e, t, n) {
        return (
          255 *
          (e < 60
            ? t + ((n - t) * e) / 60
            : e < 180
              ? n
              : e < 240
                ? t + ((n - t) * (240 - e)) / 60
                : t)
        );
      }
      ((0, r.default)(i, _, {
        copy: function (e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: m,
        formatHex: m,
        formatHsl: w,
        formatRgb: O,
        toString: O,
      }),
        (0, r.default)(
          k,
          x,
          (0, r.extend)(i, {
            brighter: function (e) {
              return (
                (e = null == e ? a : Math.pow(a, e)),
                new k(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? o : Math.pow(o, e)),
                new k(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: N,
            formatHex: N,
            formatRgb: I,
            toString: I,
          }),
        ),
        (0, r.default)(
          C,
          F,
          (0, r.extend)(i, {
            brighter: function (e) {
              return (
                (e = null == e ? a : Math.pow(a, e)),
                new C(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? o : Math.pow(o, e)),
                new C(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                u = 2 * n - r;
              return new k(
                q(e >= 240 ? e - 240 : e + 120, u, r),
                q(e, u, r),
                q(e < 120 ? e + 240 : e - 120, u, r),
                this.opacity,
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = this.opacity;
              return (
                (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
                (1 === e ? "hsl(" : "hsla(") +
                  (this.h || 0) +
                  ", " +
                  100 * (this.s || 0) +
                  "%, " +
                  100 * (this.l || 0) +
                  "%" +
                  (1 === e ? ")" : ", " + e + ")")
              );
            },
          }),
        ));
    },
    5311: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        ((e.prototype = t.prototype = n), (n.constructor = e));
      }
      function u(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.extend = u));
    },
    5316: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prefix = t.default = void 0));
      var r = (t.prefix = "$");
      function u() {}
      function i(e, t) {
        var n = new u();
        if (e instanceof u)
          e.each(function (e, t) {
            n.set(t, e);
          });
        else if (Array.isArray(e)) {
          var r,
            i = -1,
            o = e.length;
          if (null == t) while (++i < o) n.set(i, e[i]);
          else while (++i < o) n.set(t((r = e[i]), i, e), r);
        } else if (e) for (var a in e) n.set(a, e[a]);
        return n;
      }
      u.prototype = i.prototype = {
        constructor: u,
        has: function (e) {
          return r + e in this;
        },
        get: function (e) {
          return this[r + e];
        },
        set: function (e, t) {
          return ((this[r + e] = t), this);
        },
        remove: function (e) {
          var t = r + e;
          return t in this && delete this[t];
        },
        clear: function () {
          for (var e in this) e[0] === r && delete this[e];
        },
        keys: function () {
          var e = [];
          for (var t in this) t[0] === r && e.push(t.slice(1));
          return e;
        },
        values: function () {
          var e = [];
          for (var t in this) t[0] === r && e.push(this[t]);
          return e;
        },
        entries: function () {
          var e = [];
          for (var t in this)
            t[0] === r && e.push({ key: t.slice(1), value: this[t] });
          return e;
        },
        size: function () {
          var e = 0;
          for (var t in this) t[0] === r && ++e;
          return e;
        },
        empty: function () {
          for (var e in this) if (e[0] === r) return !1;
          return !0;
        },
        each: function (e) {
          for (var t in this) t[0] === r && e(this[t], t.slice(1), this);
        },
      };
      t.default = i;
    },
    5317: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = p));
      var r = {},
        u = {},
        i = 34,
        o = 10,
        a = 13;
      function c(e) {
        return new Function(
          "d",
          "return {" +
            e
              .map(function (e, t) {
                return JSON.stringify(e) + ": d[" + t + '] || ""';
              })
              .join(",") +
            "}",
        );
      }
      function l(e, t) {
        var n = c(e);
        return function (r, u) {
          return t(n(r), u, e);
        };
      }
      function f(e) {
        var t = Object.create(null),
          n = [];
        return (
          e.forEach(function (e) {
            for (var r in e) r in t || n.push((t[r] = r));
          }),
          n
        );
      }
      function s(e, t) {
        var n = e + "",
          r = n.length;
        return r < t ? new Array(t - r + 1).join(0) + n : n;
      }
      function d(e) {
        return e < 0 ? "-" + s(-e, 6) : e > 9999 ? "+" + s(e, 6) : s(e, 4);
      }
      function h(e) {
        var t = e.getUTCHours(),
          n = e.getUTCMinutes(),
          r = e.getUTCSeconds(),
          u = e.getUTCMilliseconds();
        return isNaN(e)
          ? "Invalid Date"
          : d(e.getUTCFullYear(), 4) +
              "-" +
              s(e.getUTCMonth() + 1, 2) +
              "-" +
              s(e.getUTCDate(), 2) +
              (u
                ? "T" +
                  s(t, 2) +
                  ":" +
                  s(n, 2) +
                  ":" +
                  s(r, 2) +
                  "." +
                  s(u, 3) +
                  "Z"
                : r
                  ? "T" + s(t, 2) + ":" + s(n, 2) + ":" + s(r, 2) + "Z"
                  : n || t
                    ? "T" + s(t, 2) + ":" + s(n, 2) + "Z"
                    : "");
      }
      function p(e) {
        var t = new RegExp('["' + e + "\n\r]"),
          n = e.charCodeAt(0);
        function s(e, t) {
          var n,
            r,
            u = d(e, function (e, u) {
              if (n) return n(e, u - 1);
              ((r = e), (n = t ? l(e, t) : c(e)));
            });
          return ((u.columns = r || []), u);
        }
        function d(e, t) {
          var c,
            l = [],
            f = e.length,
            s = 0,
            d = 0,
            h = f <= 0,
            p = !1;
          function v() {
            if (h) return u;
            if (p) return ((p = !1), r);
            var t,
              c,
              l = s;
            if (e.charCodeAt(l) === i) {
              while (
                (s++ < f && e.charCodeAt(s) !== i) ||
                e.charCodeAt(++s) === i
              );
              return (
                (t = s) >= f
                  ? (h = !0)
                  : (c = e.charCodeAt(s++)) === o
                    ? (p = !0)
                    : c === a && ((p = !0), e.charCodeAt(s) === o && ++s),
                e.slice(l + 1, t - 1).replace(/""/g, '"')
              );
            }
            while (s < f) {
              if ((c = e.charCodeAt((t = s++))) === o) p = !0;
              else if (c === a) ((p = !0), e.charCodeAt(s) === o && ++s);
              else if (c !== n) continue;
              return e.slice(l, t);
            }
            return ((h = !0), e.slice(l, f));
          }
          (e.charCodeAt(f - 1) === o && --f, e.charCodeAt(f - 1) === a && --f);
          while ((c = v()) !== u) {
            var y = [];
            while (c !== r && c !== u) (y.push(c), (c = v()));
            (t && null == (y = t(y, d++))) || l.push(y);
          }
          return l;
        }
        function p(t, n) {
          return t.map(function (t) {
            return n
              .map(function (e) {
                return m(t[e]);
              })
              .join(e);
          });
        }
        function v(t, n) {
          return (
            null == n && (n = f(t)),
            [n.map(m).join(e)].concat(p(t, n)).join("\n")
          );
        }
        function y(e, t) {
          return (null == t && (t = f(e)), p(e, t).join("\n"));
        }
        function b(e) {
          return e.map(g).join("\n");
        }
        function g(t) {
          return t.map(m).join(e);
        }
        function m(e) {
          return null == e
            ? ""
            : e instanceof Date
              ? h(e)
              : t.test((e += ""))
                ? '"' + e.replace(/"/g, '""') + '"'
                : e;
        }
        return {
          parse: s,
          parseRows: d,
          format: v,
          formatBody: y,
          formatRows: b,
          formatRow: g,
          formatValue: m,
        };
      }
    },
    5318: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e.ok) throw new Error(e.status + " " + e.statusText);
        return e.text();
      }
      function u(e, t) {
        return fetch(e, t).then(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
    },
    5319: function (e, t, n) {
      "use strict";
      function r() {
        return 1e-6 * (Math.random() - 0.5);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6272: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.bisectRight = t.bisectLeft = void 0));
      var u = r(n(3917)),
        i = r(n(6273)),
        o = (0, i.default)(u.default),
        a = (t.bisectRight = o.right);
      ((t.bisectLeft = o.left), (t.default = a));
    },
    6273: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(3917));
      function i(e) {
        return (
          1 === e.length && (e = o(e)),
          {
            left: function (t, n, r, u) {
              (null == r && (r = 0), null == u && (u = t.length));
              while (r < u) {
                var i = (r + u) >>> 1;
                e(t[i], n) < 0 ? (r = i + 1) : (u = i);
              }
              return r;
            },
            right: function (t, n, r, u) {
              (null == r && (r = 0), null == u && (u = t.length));
              while (r < u) {
                var i = (r + u) >>> 1;
                e(t[i], n) > 0 ? (u = i) : (r = i + 1);
              }
              return r;
            },
          }
        );
      }
      function o(e) {
        return function (t, n) {
          return (0, u.default)(e(t), n);
        };
      }
    },
    6274: function (e, t, n) {
      "use strict";
      function r(e, t) {
        null == t && (t = u);
        var n = 0,
          r = e.length - 1,
          i = e[0],
          o = new Array(r < 0 ? 0 : r);
        while (n < r) o[n] = t(i, (i = e[++n]));
        return o;
      }
      function u(e, t) {
        return [e, t];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.pair = u));
    },
    6275: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(6276));
      function i(e, t) {
        var n = (0, u.default)(e, t);
        return n ? Math.sqrt(n) : n;
      }
    },
    6276: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(4500));
      function i(e, t) {
        var n,
          r,
          i = e.length,
          o = 0,
          a = -1,
          c = 0,
          l = 0;
        if (null == t)
          while (++a < i)
            isNaN((n = (0, u.default)(e[a]))) ||
              ((r = n - c), (c += r / ++o), (l += r * (n - c)));
        else
          while (++a < i)
            isNaN((n = (0, u.default)(t(e[a], a, e)))) ||
              ((r = n - c), (c += r / ++o), (l += r * (n - c)));
        if (o > 1) return l / (o - 1);
      }
    },
    6277: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n,
          r,
          u,
          i = e.length,
          o = -1;
        if (null == t) {
          while (++o < i)
            if (null != (n = e[o]) && n >= n) {
              r = u = n;
              while (++o < i)
                null != (n = e[o]) && (r > n && (r = n), u < n && (u = n));
            }
        } else
          while (++o < i)
            if (null != (n = t(e[o], o, e)) && n >= n) {
              r = u = n;
              while (++o < i)
                null != (n = t(e[o], o, e)) &&
                  (r > n && (r = n), u < n && (u = n));
            }
        return [r, u];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6278: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = t.map = void 0));
      var r = Array.prototype;
      ((t.slice = r.slice), (t.map = r.map));
    },
    6279: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        ((e = +e),
          (t = +t),
          (n =
            (u = arguments.length) < 2
              ? ((t = e), (e = 0), 1)
              : u < 3
                ? 1
                : +n));
        var r = -1,
          u = 0 | Math.max(0, Math.ceil((t - e) / n)),
          i = new Array(u);
        while (++r < u) i[r] = e + r * n;
        return i;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6280: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = o),
        (t.tickIncrement = a),
        (t.tickStep = c));
      var r = Math.sqrt(50),
        u = Math.sqrt(10),
        i = Math.sqrt(2);
      function o(e, t, n) {
        var r,
          u,
          i,
          o,
          c = -1;
        if (((t = +t), (e = +e), (n = +n), e === t && n > 0)) return [e];
        if (
          ((r = t < e) && ((u = e), (e = t), (t = u)),
          0 === (o = a(e, t, n)) || !isFinite(o))
        )
          return [];
        if (o > 0) {
          ((e = Math.ceil(e / o)),
            (t = Math.floor(t / o)),
            (i = new Array((u = Math.ceil(t - e + 1)))));
          while (++c < u) i[c] = (e + c) * o;
        } else {
          ((e = Math.floor(e * o)),
            (t = Math.ceil(t * o)),
            (i = new Array((u = Math.ceil(e - t + 1)))));
          while (++c < u) i[c] = (e - c) / o;
        }
        return (r && i.reverse(), i);
      }
      function a(e, t, n) {
        var o = (t - e) / Math.max(0, n),
          a = Math.floor(Math.log(o) / Math.LN10),
          c = o / Math.pow(10, a);
        return a >= 0
          ? (c >= r ? 10 : c >= u ? 5 : c >= i ? 2 : 1) * Math.pow(10, a)
          : -Math.pow(10, -a) / (c >= r ? 10 : c >= u ? 5 : c >= i ? 2 : 1);
      }
      function c(e, t, n) {
        var o = Math.abs(t - e) / Math.max(0, n),
          a = Math.pow(10, Math.floor(Math.log(o) / Math.LN10)),
          c = o / a;
        return (
          c >= r ? (a *= 10) : c >= u ? (a *= 5) : c >= i && (a *= 2),
          t < e ? -a : a
        );
      }
    },
    6281: function (e, t, n) {
      "use strict";
      function r(e) {
        return Math.ceil(Math.log(e.length) / Math.LN2) + 1;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6282: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n,
          r,
          u = e.length,
          i = -1;
        if (null == t) {
          while (++i < u)
            if (null != (n = e[i]) && n >= n) {
              r = n;
              while (++i < u) null != (n = e[i]) && r > n && (r = n);
            }
        } else
          while (++i < u)
            if (null != (n = t(e[i], i, e)) && n >= n) {
              r = n;
              while (++i < u) null != (n = t(e[i], i, e)) && r > n && (r = n);
            }
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6283: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(6282));
      function i(e) {
        if (!(i = e.length)) return [];
        for (var t = -1, n = (0, u.default)(e, o), r = new Array(n); ++t < n; )
          for (var i, a = -1, c = (r[t] = new Array(i)); ++a < i; )
            c[a] = e[a][t];
        return r;
      }
      function o(e) {
        return e.length;
      }
    },
    6290: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = o),
        (t.yesdrag = a));
      var u = n(3066),
        i = r(n(6291));
      function o(e) {
        var t = e.document.documentElement,
          n = (0, u.select)(e).on("dragstart.drag", i.default, !0);
        "onselectstart" in t
          ? n.on("selectstart.drag", i.default, !0)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function a(e, t) {
        var n = e.document.documentElement,
          r = (0, u.select)(e).on("dragstart.drag", null);
        (t &&
          (r.on("click.drag", i.default, !0),
          setTimeout(function () {
            r.on("click.drag", null);
          }, 0)),
          "onselectstart" in n
            ? r.on("selectstart.drag", null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect));
      }
    },
    6291: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.nopropagation = u));
      var r = n(3066);
      function u() {
        r.event.stopImmediatePropagation();
      }
      function i() {
        (r.event.preventDefault(), r.event.stopImmediatePropagation());
      }
    },
    6292: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.rad2deg = t.deg2rad = void 0));
      ((t.deg2rad = Math.PI / 180), (t.rad2deg = 180 / Math.PI));
    },
    6302: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "easeBack", {
          enumerable: !0,
          get: function () {
            return s.backInOut;
          },
        }),
        Object.defineProperty(t, "easeBackIn", {
          enumerable: !0,
          get: function () {
            return s.backIn;
          },
        }),
        Object.defineProperty(t, "easeBackInOut", {
          enumerable: !0,
          get: function () {
            return s.backInOut;
          },
        }),
        Object.defineProperty(t, "easeBackOut", {
          enumerable: !0,
          get: function () {
            return s.backOut;
          },
        }),
        Object.defineProperty(t, "easeBounce", {
          enumerable: !0,
          get: function () {
            return f.bounceOut;
          },
        }),
        Object.defineProperty(t, "easeBounceIn", {
          enumerable: !0,
          get: function () {
            return f.bounceIn;
          },
        }),
        Object.defineProperty(t, "easeBounceInOut", {
          enumerable: !0,
          get: function () {
            return f.bounceInOut;
          },
        }),
        Object.defineProperty(t, "easeBounceOut", {
          enumerable: !0,
          get: function () {
            return f.bounceOut;
          },
        }),
        Object.defineProperty(t, "easeCircle", {
          enumerable: !0,
          get: function () {
            return l.circleInOut;
          },
        }),
        Object.defineProperty(t, "easeCircleIn", {
          enumerable: !0,
          get: function () {
            return l.circleIn;
          },
        }),
        Object.defineProperty(t, "easeCircleInOut", {
          enumerable: !0,
          get: function () {
            return l.circleInOut;
          },
        }),
        Object.defineProperty(t, "easeCircleOut", {
          enumerable: !0,
          get: function () {
            return l.circleOut;
          },
        }),
        Object.defineProperty(t, "easeCubic", {
          enumerable: !0,
          get: function () {
            return i.cubicInOut;
          },
        }),
        Object.defineProperty(t, "easeCubicIn", {
          enumerable: !0,
          get: function () {
            return i.cubicIn;
          },
        }),
        Object.defineProperty(t, "easeCubicInOut", {
          enumerable: !0,
          get: function () {
            return i.cubicInOut;
          },
        }),
        Object.defineProperty(t, "easeCubicOut", {
          enumerable: !0,
          get: function () {
            return i.cubicOut;
          },
        }),
        Object.defineProperty(t, "easeElastic", {
          enumerable: !0,
          get: function () {
            return d.elasticOut;
          },
        }),
        Object.defineProperty(t, "easeElasticIn", {
          enumerable: !0,
          get: function () {
            return d.elasticIn;
          },
        }),
        Object.defineProperty(t, "easeElasticInOut", {
          enumerable: !0,
          get: function () {
            return d.elasticInOut;
          },
        }),
        Object.defineProperty(t, "easeElasticOut", {
          enumerable: !0,
          get: function () {
            return d.elasticOut;
          },
        }),
        Object.defineProperty(t, "easeExp", {
          enumerable: !0,
          get: function () {
            return c.expInOut;
          },
        }),
        Object.defineProperty(t, "easeExpIn", {
          enumerable: !0,
          get: function () {
            return c.expIn;
          },
        }),
        Object.defineProperty(t, "easeExpInOut", {
          enumerable: !0,
          get: function () {
            return c.expInOut;
          },
        }),
        Object.defineProperty(t, "easeExpOut", {
          enumerable: !0,
          get: function () {
            return c.expOut;
          },
        }),
        Object.defineProperty(t, "easeLinear", {
          enumerable: !0,
          get: function () {
            return r.linear;
          },
        }),
        Object.defineProperty(t, "easePoly", {
          enumerable: !0,
          get: function () {
            return o.polyInOut;
          },
        }),
        Object.defineProperty(t, "easePolyIn", {
          enumerable: !0,
          get: function () {
            return o.polyIn;
          },
        }),
        Object.defineProperty(t, "easePolyInOut", {
          enumerable: !0,
          get: function () {
            return o.polyInOut;
          },
        }),
        Object.defineProperty(t, "easePolyOut", {
          enumerable: !0,
          get: function () {
            return o.polyOut;
          },
        }),
        Object.defineProperty(t, "easeQuad", {
          enumerable: !0,
          get: function () {
            return u.quadInOut;
          },
        }),
        Object.defineProperty(t, "easeQuadIn", {
          enumerable: !0,
          get: function () {
            return u.quadIn;
          },
        }),
        Object.defineProperty(t, "easeQuadInOut", {
          enumerable: !0,
          get: function () {
            return u.quadInOut;
          },
        }),
        Object.defineProperty(t, "easeQuadOut", {
          enumerable: !0,
          get: function () {
            return u.quadOut;
          },
        }),
        Object.defineProperty(t, "easeSin", {
          enumerable: !0,
          get: function () {
            return a.sinInOut;
          },
        }),
        Object.defineProperty(t, "easeSinIn", {
          enumerable: !0,
          get: function () {
            return a.sinIn;
          },
        }),
        Object.defineProperty(t, "easeSinInOut", {
          enumerable: !0,
          get: function () {
            return a.sinInOut;
          },
        }),
        Object.defineProperty(t, "easeSinOut", {
          enumerable: !0,
          get: function () {
            return a.sinOut;
          },
        }));
      var r = n(8549),
        u = n(8550),
        i = n(8551),
        o = n(8552),
        a = n(8553),
        c = n(8554),
        l = n(8555),
        f = n(8556),
        s = n(8557),
        d = n(8558);
    },
    6303: function (e, t, n) {
      "use strict";
      function r(e) {
        return 1.0009775171065494 * (Math.pow(2, -10 * e) - 0.0009765625);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.tpmt = r));
    },
    6304: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tau = t.sin = t.pi = t.max = t.halfPi = t.cos = void 0));
      ((t.cos = Math.cos), (t.sin = Math.sin));
      var r = (t.pi = Math.PI);
      ((t.halfPi = r / 2), (t.tau = 2 * r), (t.max = Math.max));
    },
    6305: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
      var u = n(3065),
        i = n(6306),
        o = r(n(8575)),
        a = r(n(8576)),
        c = r(n(6307)),
        l = r(n(8577)),
        f = r(n(8578)),
        s = [
          [],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [0.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [0.5, 1],
            ],
            [
              [1, 0.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 0.5],
              [1, 1.5],
            ],
          ],
          [
            [
              [1, 0.5],
              [0.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [1, 1.5],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 0.5],
            ],
            [
              [1.5, 1],
              [1, 1.5],
            ],
          ],
          [
            [
              [1.5, 1],
              [1, 0.5],
            ],
          ],
          [
            [
              [0.5, 1],
              [1.5, 1],
            ],
          ],
          [
            [
              [1, 1.5],
              [1.5, 1],
            ],
          ],
          [
            [
              [0.5, 1],
              [1, 1.5],
            ],
          ],
          [],
        ];
      function d() {
        var e = 1,
          t = 1,
          n = u.thresholdSturges,
          r = y;
        function d(e) {
          var t = n(e);
          if (Array.isArray(t)) t = t.slice().sort(o.default);
          else {
            var r = (0, u.extent)(e),
              i = r[0],
              a = r[1];
            ((t = (0, u.tickStep)(i, a, t)),
              (t = (0, u.range)(
                Math.floor(i / t) * t,
                Math.floor(a / t) * t,
                t,
              )));
          }
          return t.map(function (t) {
            return h(e, t);
          });
        }
        function h(e, t) {
          var n = [],
            u = [];
          return (
            p(e, t, function (i) {
              (r(i, e, t), (0, a.default)(i) > 0 ? n.push([i]) : u.push(i));
            }),
            u.forEach(function (e) {
              for (var t, r = 0, u = n.length; r < u; ++r)
                if (-1 !== (0, l.default)((t = n[r])[0], e))
                  return void t.push(e);
            }),
            { type: "MultiPolygon", value: t, coordinates: n }
          );
        }
        function p(n, r, u) {
          var i,
            o,
            a,
            c,
            l,
            f,
            d = new Array(),
            h = new Array();
          ((i = o = -1), (c = n[0] >= r), s[c << 1].forEach(p));
          while (++i < e - 1)
            ((a = c), (c = n[i + 1] >= r), s[a | (c << 1)].forEach(p));
          s[c << 0].forEach(p);
          while (++o < t - 1) {
            ((i = -1),
              (c = n[o * e + e] >= r),
              (l = n[o * e] >= r),
              s[(c << 1) | (l << 2)].forEach(p));
            while (++i < e - 1)
              ((a = c),
                (c = n[o * e + e + i + 1] >= r),
                (f = l),
                (l = n[o * e + i + 1] >= r),
                s[a | (c << 1) | (l << 2) | (f << 3)].forEach(p));
            s[c | (l << 3)].forEach(p);
          }
          ((i = -1), (l = n[o * e] >= r), s[l << 2].forEach(p));
          while (++i < e - 1)
            ((f = l),
              (l = n[o * e + i + 1] >= r),
              s[(l << 2) | (f << 3)].forEach(p));
          function p(e) {
            var t,
              n,
              r = [e[0][0] + i, e[0][1] + o],
              a = [e[1][0] + i, e[1][1] + o],
              c = v(r),
              l = v(a);
            (t = h[c])
              ? (n = d[l])
                ? (delete h[t.end],
                  delete d[n.start],
                  t === n
                    ? (t.ring.push(a), u(t.ring))
                    : (d[t.start] = h[n.end] =
                        {
                          start: t.start,
                          end: n.end,
                          ring: t.ring.concat(n.ring),
                        }))
                : (delete h[t.end], t.ring.push(a), (h[(t.end = l)] = t))
              : (t = d[l])
                ? (n = h[c])
                  ? (delete d[t.start],
                    delete h[n.end],
                    t === n
                      ? (t.ring.push(a), u(t.ring))
                      : (d[n.start] = h[t.end] =
                          {
                            start: n.start,
                            end: t.end,
                            ring: n.ring.concat(t.ring),
                          }))
                  : (delete d[t.start],
                    t.ring.unshift(r),
                    (d[(t.start = c)] = t))
                : (d[c] = h[l] = { start: c, end: l, ring: [r, a] });
          }
          s[l << 3].forEach(p);
        }
        function v(t) {
          return 2 * t[0] + t[1] * (e + 1) * 4;
        }
        function y(n, r, u) {
          n.forEach(function (n) {
            var i,
              o = n[0],
              a = n[1],
              c = 0 | o,
              l = 0 | a,
              f = r[l * e + c];
            (o > 0 &&
              o < e &&
              c === o &&
              ((i = r[l * e + c - 1]), (n[0] = o + (u - i) / (f - i) - 0.5)),
              a > 0 &&
                a < t &&
                l === a &&
                ((i = r[(l - 1) * e + c]),
                (n[1] = a + (u - i) / (f - i) - 0.5)));
          });
        }
        return (
          (d.contour = h),
          (d.size = function (n) {
            if (!arguments.length) return [e, t];
            var r = Math.ceil(n[0]),
              u = Math.ceil(n[1]);
            if (!(r > 0) || !(u > 0)) throw new Error("invalid size");
            return ((e = r), (t = u), d);
          }),
          (d.thresholds = function (e) {
            return arguments.length
              ? ((n =
                  "function" === typeof e
                    ? e
                    : Array.isArray(e)
                      ? (0, c.default)(i.slice.call(e))
                      : (0, c.default)(e)),
                d)
              : n;
          }),
          (d.smooth = function (e) {
            return arguments.length ? ((r = e ? y : f.default), d) : r === y;
          }),
          d
        );
      }
    },
    6306: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = void 0));
      var r = Array.prototype;
      t.slice = r.slice;
    },
    6307: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6308: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "autoType", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "csvFormat", {
          enumerable: !0,
          get: function () {
            return i.csvFormat;
          },
        }),
        Object.defineProperty(t, "csvFormatBody", {
          enumerable: !0,
          get: function () {
            return i.csvFormatBody;
          },
        }),
        Object.defineProperty(t, "csvFormatRow", {
          enumerable: !0,
          get: function () {
            return i.csvFormatRow;
          },
        }),
        Object.defineProperty(t, "csvFormatRows", {
          enumerable: !0,
          get: function () {
            return i.csvFormatRows;
          },
        }),
        Object.defineProperty(t, "csvFormatValue", {
          enumerable: !0,
          get: function () {
            return i.csvFormatValue;
          },
        }),
        Object.defineProperty(t, "csvParse", {
          enumerable: !0,
          get: function () {
            return i.csvParse;
          },
        }),
        Object.defineProperty(t, "csvParseRows", {
          enumerable: !0,
          get: function () {
            return i.csvParseRows;
          },
        }),
        Object.defineProperty(t, "dsvFormat", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "tsvFormat", {
          enumerable: !0,
          get: function () {
            return o.tsvFormat;
          },
        }),
        Object.defineProperty(t, "tsvFormatBody", {
          enumerable: !0,
          get: function () {
            return o.tsvFormatBody;
          },
        }),
        Object.defineProperty(t, "tsvFormatRow", {
          enumerable: !0,
          get: function () {
            return o.tsvFormatRow;
          },
        }),
        Object.defineProperty(t, "tsvFormatRows", {
          enumerable: !0,
          get: function () {
            return o.tsvFormatRows;
          },
        }),
        Object.defineProperty(t, "tsvFormatValue", {
          enumerable: !0,
          get: function () {
            return o.tsvFormatValue;
          },
        }),
        Object.defineProperty(t, "tsvParse", {
          enumerable: !0,
          get: function () {
            return o.tsvParse;
          },
        }),
        Object.defineProperty(t, "tsvParseRows", {
          enumerable: !0,
          get: function () {
            return o.tsvParseRows;
          },
        }));
      var u = r(n(5317)),
        i = n(8581),
        o = n(8582),
        a = r(n(8583));
    },
    6309: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = f),
        (t.x = o),
        (t.y = a));
      var r = n(3918),
        u = n(4727),
        i = n(4725);
      function o(e) {
        return e.x;
      }
      function a(e) {
        return e.y;
      }
      var c = 10,
        l = Math.PI * (3 - Math.sqrt(5));
      function f(e) {
        var t,
          n = 1,
          o = 0.001,
          a = 1 - Math.pow(o, 1 / 300),
          f = 0,
          s = 0.6,
          d = (0, u.map)(),
          h = (0, i.timer)(v),
          p = (0, r.dispatch)("tick", "end");
        function v() {
          (y(), p.call("tick", t), n < o && (h.stop(), p.call("end", t)));
        }
        function y(r) {
          var u,
            i,
            o = e.length;
          void 0 === r && (r = 1);
          for (var c = 0; c < r; ++c)
            for (
              n += (f - n) * a,
                d.each(function (e) {
                  e(n);
                }),
                u = 0;
              u < o;
              ++u
            )
              ((i = e[u]),
                null == i.fx ? (i.x += i.vx *= s) : ((i.x = i.fx), (i.vx = 0)),
                null == i.fy ? (i.y += i.vy *= s) : ((i.y = i.fy), (i.vy = 0)));
          return t;
        }
        function b() {
          for (var t, n = 0, r = e.length; n < r; ++n) {
            if (
              ((t = e[n]),
              (t.index = n),
              null != t.fx && (t.x = t.fx),
              null != t.fy && (t.y = t.fy),
              isNaN(t.x) || isNaN(t.y))
            ) {
              var u = c * Math.sqrt(n),
                i = n * l;
              ((t.x = u * Math.cos(i)), (t.y = u * Math.sin(i)));
            }
            (isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0);
          }
        }
        function g(t) {
          return (t.initialize && t.initialize(e), t);
        }
        return (
          null == e && (e = []),
          b(),
          (t = {
            tick: y,
            restart: function () {
              return (h.restart(v), t);
            },
            stop: function () {
              return (h.stop(), t);
            },
            nodes: function (n) {
              return arguments.length ? ((e = n), b(), d.each(g), t) : e;
            },
            alpha: function (e) {
              return arguments.length ? ((n = +e), t) : n;
            },
            alphaMin: function (e) {
              return arguments.length ? ((o = +e), t) : o;
            },
            alphaDecay: function (e) {
              return arguments.length ? ((a = +e), t) : +a;
            },
            alphaTarget: function (e) {
              return arguments.length ? ((f = +e), t) : f;
            },
            velocityDecay: function (e) {
              return arguments.length ? ((s = 1 - e), t) : 1 - s;
            },
            force: function (e, n) {
              return arguments.length > 1
                ? (null == n ? d.remove(e) : d.set(e, g(n)), t)
                : d.get(e);
            },
            find: function (t, n, r) {
              var u,
                i,
                o,
                a,
                c,
                l = 0,
                f = e.length;
              for (null == r ? (r = 1 / 0) : (r *= r), l = 0; l < f; ++l)
                ((a = e[l]),
                  (u = t - a.x),
                  (i = n - a.y),
                  (o = u * u + i * i),
                  o < r && ((c = a), (r = o)));
              return c;
            },
            on: function (e, n) {
              return arguments.length > 1 ? (p.on(e, n), t) : p.on(e);
            },
          })
        );
      }
    },
    8450: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = n(6274);
      function u(e, t, n) {
        var u,
          i,
          o,
          a,
          c = e.length,
          l = t.length,
          f = new Array(c * l);
        for (null == n && (n = r.pair), u = o = 0; u < c; ++u)
          for (a = e[u], i = 0; i < l; ++i, ++o) f[o] = n(a, t[i]);
        return f;
      }
    },
    8451: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8452: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
      var u = n(6278),
        i = r(n(6272)),
        o = r(n(8453)),
        a = r(n(6277)),
        c = r(n(8454)),
        l = r(n(6279)),
        f = n(6280),
        s = r(n(6281));
      function d() {
        var e = c.default,
          t = a.default,
          n = s.default;
        function r(r) {
          var u,
            o,
            a = r.length,
            c = new Array(a);
          for (u = 0; u < a; ++u) c[u] = e(r[u], u, r);
          var s = t(c),
            d = s[0],
            h = s[1],
            p = n(c, d, h);
          Array.isArray(p) ||
            ((p = (0, f.tickStep)(d, h, p)),
            (p = (0, l.default)(Math.ceil(d / p) * p, h, p)));
          var v = p.length;
          while (p[0] <= d) (p.shift(), --v);
          while (p[v - 1] > h) (p.pop(), --v);
          var y,
            b = new Array(v + 1);
          for (u = 0; u <= v; ++u)
            ((y = b[u] = []),
              (y.x0 = u > 0 ? p[u - 1] : d),
              (y.x1 = u < v ? p[u] : h));
          for (u = 0; u < a; ++u)
            ((o = c[u]),
              d <= o && o <= h && b[(0, i.default)(p, o, 0, v)].push(r[u]));
          return b;
        }
        return (
          (r.value = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, o.default)(t)), r)
              : e;
          }),
          (r.domain = function (e) {
            return arguments.length
              ? ((t =
                  "function" === typeof e ? e : (0, o.default)([e[0], e[1]])),
                r)
              : t;
          }),
          (r.thresholds = function (e) {
            return arguments.length
              ? ((n =
                  "function" === typeof e
                    ? e
                    : Array.isArray(e)
                      ? (0, o.default)(u.slice.call(e))
                      : (0, o.default)(e)),
                r)
              : n;
          }),
          r
        );
      }
    },
    8453: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8454: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8455: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var u = n(6278),
        i = r(n(3917)),
        o = r(n(4500)),
        a = r(n(5301));
      function c(e, t, n) {
        return (
          (e = u.map.call(e, o.default).sort(i.default)),
          Math.ceil(
            (n - t) /
              (2 *
                ((0, a.default)(e, 0.75) - (0, a.default)(e, 0.25)) *
                Math.pow(e.length, -1 / 3)),
          )
        );
      }
    },
    8456: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(6275));
      function i(e, t, n) {
        return Math.ceil(
          (n - t) / (3.5 * (0, u.default)(e) * Math.pow(e.length, -1 / 3)),
        );
      }
    },
    8457: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n,
          r,
          u = e.length,
          i = -1;
        if (null == t) {
          while (++i < u)
            if (null != (n = e[i]) && n >= n) {
              r = n;
              while (++i < u) null != (n = e[i]) && n > r && (r = n);
            }
        } else
          while (++i < u)
            if (null != (n = t(e[i], i, e)) && n >= n) {
              r = n;
              while (++i < u) null != (n = t(e[i], i, e)) && n > r && (r = n);
            }
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8458: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(4500));
      function i(e, t) {
        var n,
          r = e.length,
          i = r,
          o = -1,
          a = 0;
        if (null == t)
          while (++o < r) isNaN((n = (0, u.default)(e[o]))) ? --i : (a += n);
        else
          while (++o < r)
            isNaN((n = (0, u.default)(t(e[o], o, e)))) ? --i : (a += n);
        if (i) return a / i;
      }
    },
    8459: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var u = r(n(3917)),
        i = r(n(4500)),
        o = r(n(5301));
      function a(e, t) {
        var n,
          r = e.length,
          a = -1,
          c = [];
        if (null == t)
          while (++a < r) isNaN((n = (0, i.default)(e[a]))) || c.push(n);
        else
          while (++a < r)
            isNaN((n = (0, i.default)(t(e[a], a, e)))) || c.push(n);
        return (0, o.default)(c.sort(u.default), 0.5);
      }
    },
    8460: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r,
          u = e.length,
          i = -1,
          o = 0;
        while (++i < u) o += e[i].length;
        n = new Array(o);
        while (--u >= 0) {
          ((r = e[u]), (t = r.length));
          while (--t >= 0) n[--o] = r[t];
        }
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8461: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = t.length,
          r = new Array(n);
        while (n--) r[n] = e[t[n]];
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8462: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(3917));
      function i(e, t) {
        if ((n = e.length)) {
          var n,
            r,
            i = 0,
            o = 0,
            a = e[o];
          null == t && (t = u.default);
          while (++i < n)
            (t((r = e[i]), a) < 0 || 0 !== t(a, a)) && ((a = r), (o = i));
          return 0 === t(a, a) ? o : void 0;
        }
      }
    },
    8463: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r,
          u,
          i = (null == n ? e.length : n) - (t = null == t ? 0 : +t);
        while (i)
          ((u = (Math.random() * i--) | 0),
            (r = e[i + t]),
            (e[i + t] = e[u + t]),
            (e[u + t] = r));
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8464: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n,
          r = e.length,
          u = -1,
          i = 0;
        if (null == t) while (++u < r) (n = +e[u]) && (i += n);
        else while (++u < r) (n = +t(e[u], u, e)) && (i += n);
        return i;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8465: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(6283));
      function i() {
        return (0, u.default)(arguments);
      }
    },
    8466: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "axisBottom", {
          enumerable: !0,
          get: function () {
            return r.axisBottom;
          },
        }),
        Object.defineProperty(t, "axisLeft", {
          enumerable: !0,
          get: function () {
            return r.axisLeft;
          },
        }),
        Object.defineProperty(t, "axisRight", {
          enumerable: !0,
          get: function () {
            return r.axisRight;
          },
        }),
        Object.defineProperty(t, "axisTop", {
          enumerable: !0,
          get: function () {
            return r.axisTop;
          },
        }));
      var r = n(8467);
    },
    8467: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.axisBottom = m),
        (t.axisLeft = w),
        (t.axisRight = g),
        (t.axisTop = b));
      var u = n(8468),
        i = r(n(8469)),
        o = 1,
        a = 2,
        c = 3,
        l = 4,
        f = 1e-6;
      function s(e) {
        return "translate(" + (e + 0.5) + ",0)";
      }
      function d(e) {
        return "translate(0," + (e + 0.5) + ")";
      }
      function h(e) {
        return function (t) {
          return +e(t);
        };
      }
      function p(e) {
        var t = Math.max(0, e.bandwidth() - 1) / 2;
        return (
          e.round() && (t = Math.round(t)),
          function (n) {
            return +e(n) + t;
          }
        );
      }
      function v() {
        return !this.__axis;
      }
      function y(e, t) {
        var n = [],
          r = null,
          y = null,
          b = 6,
          g = 6,
          m = 3,
          w = e === o || e === l ? -1 : 1,
          O = e === l || e === a ? "x" : "y",
          _ = e === o || e === c ? s : d;
        function M(u) {
          var s = null == r ? (t.ticks ? t.ticks.apply(t, n) : t.domain()) : r,
            d =
              null == y
                ? t.tickFormat
                  ? t.tickFormat.apply(t, n)
                  : i.default
                : y,
            M = Math.max(b, 0) + m,
            P = t.range(),
            j = +P[0] + 0.5,
            x = +P[P.length - 1] + 0.5,
            k = (t.bandwidth ? p : h)(t.copy()),
            N = u.selection ? u.selection() : u,
            I = N.selectAll(".domain").data([null]),
            A = N.selectAll(".tick").data(s, t).order(),
            E = A.exit(),
            R = A.enter().append("g").attr("class", "tick"),
            F = A.select("line"),
            C = A.select("text");
          ((I = I.merge(
            I.enter()
              .insert("path", ".tick")
              .attr("class", "domain")
              .attr("stroke", "currentColor"),
          )),
            (A = A.merge(R)),
            (F = F.merge(
              R.append("line")
                .attr("stroke", "currentColor")
                .attr(O + "2", w * b),
            )),
            (C = C.merge(
              R.append("text")
                .attr("fill", "currentColor")
                .attr(O, w * M)
                .attr("dy", e === o ? "0em" : e === c ? "0.71em" : "0.32em"),
            )),
            u !== N &&
              ((I = I.transition(u)),
              (A = A.transition(u)),
              (F = F.transition(u)),
              (C = C.transition(u)),
              (E = E.transition(u)
                .attr("opacity", f)
                .attr("transform", function (e) {
                  return isFinite((e = k(e)))
                    ? _(e)
                    : this.getAttribute("transform");
                })),
              R.attr("opacity", f).attr("transform", function (e) {
                var t = this.parentNode.__axis;
                return _(t && isFinite((t = t(e))) ? t : k(e));
              })),
            E.remove(),
            I.attr(
              "d",
              e === l || e == a
                ? g
                  ? "M" + w * g + "," + j + "H0.5V" + x + "H" + w * g
                  : "M0.5," + j + "V" + x
                : g
                  ? "M" + j + "," + w * g + "V0.5H" + x + "V" + w * g
                  : "M" + j + ",0.5H" + x,
            ),
            A.attr("opacity", 1).attr("transform", function (e) {
              return _(k(e));
            }),
            F.attr(O + "2", w * b),
            C.attr(O, w * M).text(d),
            N.filter(v)
              .attr("fill", "none")
              .attr("font-size", 10)
              .attr("font-family", "sans-serif")
              .attr(
                "text-anchor",
                e === a ? "start" : e === l ? "end" : "middle",
              ),
            N.each(function () {
              this.__axis = k;
            }));
        }
        return (
          (M.scale = function (e) {
            return arguments.length ? ((t = e), M) : t;
          }),
          (M.ticks = function () {
            return ((n = u.slice.call(arguments)), M);
          }),
          (M.tickArguments = function (e) {
            return arguments.length
              ? ((n = null == e ? [] : u.slice.call(e)), M)
              : n.slice();
          }),
          (M.tickValues = function (e) {
            return arguments.length
              ? ((r = null == e ? null : u.slice.call(e)), M)
              : r && r.slice();
          }),
          (M.tickFormat = function (e) {
            return arguments.length ? ((y = e), M) : y;
          }),
          (M.tickSize = function (e) {
            return arguments.length ? ((b = g = +e), M) : b;
          }),
          (M.tickSizeInner = function (e) {
            return arguments.length ? ((b = +e), M) : b;
          }),
          (M.tickSizeOuter = function (e) {
            return arguments.length ? ((g = +e), M) : g;
          }),
          (M.tickPadding = function (e) {
            return arguments.length ? ((m = +e), M) : m;
          }),
          M
        );
      }
      function b(e) {
        return y(o, e);
      }
      function g(e) {
        return y(a, e);
      }
      function m(e) {
        return y(c, e);
      }
      function w(e) {
        return y(l, e);
      }
    },
    8468: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = void 0));
      t.slice = Array.prototype.slice;
    },
    8469: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8470: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "brush", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "brushSelection", {
          enumerable: !0,
          get: function () {
            return r.brushSelection;
          },
        }),
        Object.defineProperty(t, "brushX", {
          enumerable: !0,
          get: function () {
            return r.brushX;
          },
        }),
        Object.defineProperty(t, "brushY", {
          enumerable: !0,
          get: function () {
            return r.brushY;
          },
        }));
      var r = u(n(8471));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    8471: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.brushSelection = C),
        (t.brushX = q),
        (t.brushY = z),
        (t.default = T));
      var u = n(3918),
        i = n(5302),
        o = n(3380),
        a = n(3066),
        c = n(5314),
        l = r(n(8560)),
        f = r(n(8561)),
        s = d(n(8562));
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      var h = { name: "drag" },
        p = { name: "space" },
        v = { name: "handle" },
        y = { name: "center" };
      function b(e) {
        return [+e[0], +e[1]];
      }
      function g(e) {
        return [b(e[0]), b(e[1])];
      }
      function m(e) {
        return function (t) {
          return (0, a.touch)(t, a.event.touches, e);
        };
      }
      var w = {
          name: "x",
          handles: ["w", "e"].map(N),
          input: function (e, t) {
            return null == e
              ? null
              : [
                  [+e[0], t[0][1]],
                  [+e[1], t[1][1]],
                ];
          },
          output: function (e) {
            return e && [e[0][0], e[1][0]];
          },
        },
        O = {
          name: "y",
          handles: ["n", "s"].map(N),
          input: function (e, t) {
            return null == e
              ? null
              : [
                  [t[0][0], +e[0]],
                  [t[1][0], +e[1]],
                ];
          },
          output: function (e) {
            return e && [e[0][1], e[1][1]];
          },
        },
        _ = {
          name: "xy",
          handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(N),
          input: function (e) {
            return null == e ? null : g(e);
          },
          output: function (e) {
            return e;
          },
        },
        M = {
          overlay: "crosshair",
          selection: "move",
          n: "ns-resize",
          e: "ew-resize",
          s: "ns-resize",
          w: "ew-resize",
          nw: "nwse-resize",
          ne: "nesw-resize",
          se: "nwse-resize",
          sw: "nesw-resize",
        },
        P = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        j = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        x = {
          overlay: 1,
          selection: 1,
          n: null,
          e: 1,
          s: null,
          w: -1,
          nw: -1,
          ne: 1,
          se: 1,
          sw: -1,
        },
        k = {
          overlay: 1,
          selection: 1,
          n: -1,
          e: null,
          s: 1,
          w: null,
          nw: -1,
          ne: -1,
          se: 1,
          sw: 1,
        };
      function N(e) {
        return { type: e };
      }
      function I() {
        return !a.event.ctrlKey && !a.event.button;
      }
      function A() {
        var e = this.ownerSVGElement || this;
        return e.hasAttribute("viewBox")
          ? ((e = e.viewBox.baseVal),
            [
              [e.x, e.y],
              [e.x + e.width, e.y + e.height],
            ])
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value],
            ];
      }
      function E() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function R(e) {
        while (!e.__brush) if (!(e = e.parentNode)) return;
        return e.__brush;
      }
      function F(e) {
        return e[0][0] === e[1][0] || e[0][1] === e[1][1];
      }
      function C(e) {
        var t = e.__brush;
        return t ? t.dim.output(t.selection) : null;
      }
      function q() {
        return S(w);
      }
      function z() {
        return S(O);
      }
      function T() {
        return S(_);
      }
      function S(e) {
        var t,
          n = A,
          r = I,
          d = E,
          b = !0,
          _ = (0, u.dispatch)("start", "brush", "end"),
          C = 6;
        function q(t) {
          var n = t
            .property("__brush", V)
            .selectAll(".overlay")
            .data([N("overlay")]);
          (n
            .enter()
            .append("rect")
            .attr("class", "overlay")
            .attr("pointer-events", "all")
            .attr("cursor", M.overlay)
            .merge(n)
            .each(function () {
              var e = R(this).extent;
              (0, a.select)(this)
                .attr("x", e[0][0])
                .attr("y", e[0][1])
                .attr("width", e[1][0] - e[0][0])
                .attr("height", e[1][1] - e[0][1]);
            }),
            t
              .selectAll(".selection")
              .data([N("selection")])
              .enter()
              .append("rect")
              .attr("class", "selection")
              .attr("cursor", M.selection)
              .attr("fill", "#777")
              .attr("fill-opacity", 0.3)
              .attr("stroke", "#fff")
              .attr("shape-rendering", "crispEdges"));
          var r = t.selectAll(".handle").data(e.handles, function (e) {
            return e.type;
          });
          (r.exit().remove(),
            r
              .enter()
              .append("rect")
              .attr("class", function (e) {
                return "handle handle--" + e.type;
              })
              .attr("cursor", function (e) {
                return M[e.type];
              }),
            t
              .each(z)
              .attr("fill", "none")
              .attr("pointer-events", "all")
              .on("mousedown.brush", W)
              .filter(d)
              .on("touchstart.brush", W)
              .on("touchmove.brush", D)
              .on("touchend.brush touchcancel.brush", B)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"));
        }
        function z() {
          var e = (0, a.select)(this),
            t = R(this).selection;
          t
            ? (e
                .selectAll(".selection")
                .style("display", null)
                .attr("x", t[0][0])
                .attr("y", t[0][1])
                .attr("width", t[1][0] - t[0][0])
                .attr("height", t[1][1] - t[0][1]),
              e
                .selectAll(".handle")
                .style("display", null)
                .attr("x", function (e) {
                  return "e" === e.type[e.type.length - 1]
                    ? t[1][0] - C / 2
                    : t[0][0] - C / 2;
                })
                .attr("y", function (e) {
                  return "s" === e.type[0] ? t[1][1] - C / 2 : t[0][1] - C / 2;
                })
                .attr("width", function (e) {
                  return "n" === e.type || "s" === e.type
                    ? t[1][0] - t[0][0] + C
                    : C;
                })
                .attr("height", function (e) {
                  return "e" === e.type || "w" === e.type
                    ? t[1][1] - t[0][1] + C
                    : C;
                }))
            : e
                .selectAll(".selection,.handle")
                .style("display", "none")
                .attr("x", null)
                .attr("y", null)
                .attr("width", null)
                .attr("height", null);
        }
        function T(e, t, n) {
          var r = e.__brush.emitter;
          return !r || (n && r.clean) ? new S(e, t, n) : r;
        }
        function S(e, t, n) {
          ((this.that = e),
            (this.args = t),
            (this.state = e.__brush),
            (this.active = 0),
            (this.clean = n));
        }
        function W() {
          if ((!t || a.event.touches) && r.apply(this, arguments)) {
            var n,
              u,
              o,
              l,
              f,
              d,
              g,
              _,
              N,
              I,
              A,
              E = this,
              C = a.event.target.__data__.type,
              q =
                "selection" === (b && a.event.metaKey ? (C = "overlay") : C)
                  ? h
                  : b && a.event.altKey
                    ? y
                    : v,
              S = e === O ? null : x[C],
              W = e === w ? null : k[C],
              D = R(E),
              B = D.extent,
              V = D.selection,
              L = B[0][0],
              H = B[0][1],
              Y = B[1][0],
              U = B[1][1],
              X = 0,
              $ = 0,
              K = S && W && b && a.event.shiftKey,
              Q = a.event.touches
                ? m(a.event.changedTouches[0].identifier)
                : a.mouse,
              Z = Q(E),
              J = Z,
              G = T(E, arguments, !0).beforestart();
            ("overlay" === C
              ? (V && (N = !0),
                (D.selection = V =
                  [
                    [(n = e === O ? L : Z[0]), (o = e === w ? H : Z[1])],
                    [(f = e === O ? Y : n), (g = e === w ? U : o)],
                  ]))
              : ((n = V[0][0]), (o = V[0][1]), (f = V[1][0]), (g = V[1][1])),
              (u = n),
              (l = o),
              (d = f),
              (_ = g));
            var ee = (0, a.select)(E).attr("pointer-events", "none"),
              te = ee.selectAll(".overlay").attr("cursor", M[C]);
            if (a.event.touches) ((G.moved = re), (G.ended = ie));
            else {
              var ne = (0, a.select)(a.event.view)
                .on("mousemove.brush", re, !0)
                .on("mouseup.brush", ie, !0);
              (b && ne.on("keydown.brush", oe, !0).on("keyup.brush", ae, !0),
                (0, i.dragDisable)(a.event.view));
            }
            ((0, s.nopropagation)(), (0, c.interrupt)(E), z.call(E), G.start());
          }
          function re() {
            var e = Q(E);
            (!K ||
              I ||
              A ||
              (Math.abs(e[0] - J[0]) > Math.abs(e[1] - J[1])
                ? (A = !0)
                : (I = !0)),
              (J = e),
              (N = !0),
              (0, s.default)(),
              ue());
          }
          function ue() {
            var e;
            switch (((X = J[0] - Z[0]), ($ = J[1] - Z[1]), q)) {
              case p:
              case h:
                (S &&
                  ((X = Math.max(L - n, Math.min(Y - f, X))),
                  (u = n + X),
                  (d = f + X)),
                  W &&
                    (($ = Math.max(H - o, Math.min(U - g, $))),
                    (l = o + $),
                    (_ = g + $)));
                break;
              case v:
                (S < 0
                  ? ((X = Math.max(L - n, Math.min(Y - n, X))),
                    (u = n + X),
                    (d = f))
                  : S > 0 &&
                    ((X = Math.max(L - f, Math.min(Y - f, X))),
                    (u = n),
                    (d = f + X)),
                  W < 0
                    ? (($ = Math.max(H - o, Math.min(U - o, $))),
                      (l = o + $),
                      (_ = g))
                    : W > 0 &&
                      (($ = Math.max(H - g, Math.min(U - g, $))),
                      (l = o),
                      (_ = g + $)));
                break;
              case y:
                (S &&
                  ((u = Math.max(L, Math.min(Y, n - X * S))),
                  (d = Math.max(L, Math.min(Y, f + X * S)))),
                  W &&
                    ((l = Math.max(H, Math.min(U, o - $ * W))),
                    (_ = Math.max(H, Math.min(U, g + $ * W)))));
                break;
            }
            (d < u &&
              ((S *= -1),
              (e = n),
              (n = f),
              (f = e),
              (e = u),
              (u = d),
              (d = e),
              C in P && te.attr("cursor", M[(C = P[C])])),
              _ < l &&
                ((W *= -1),
                (e = o),
                (o = g),
                (g = e),
                (e = l),
                (l = _),
                (_ = e),
                C in j && te.attr("cursor", M[(C = j[C])])),
              D.selection && (V = D.selection),
              I && ((u = V[0][0]), (d = V[1][0])),
              A && ((l = V[0][1]), (_ = V[1][1])),
              (V[0][0] === u &&
                V[0][1] === l &&
                V[1][0] === d &&
                V[1][1] === _) ||
                ((D.selection = [
                  [u, l],
                  [d, _],
                ]),
                z.call(E),
                G.brush()));
          }
          function ie() {
            if (((0, s.nopropagation)(), a.event.touches)) {
              if (a.event.touches.length) return;
              (t && clearTimeout(t),
                (t = setTimeout(function () {
                  t = null;
                }, 500)));
            } else
              ((0, i.dragEnable)(a.event.view, N),
                ne.on(
                  "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                  null,
                ));
            (ee.attr("pointer-events", "all"),
              te.attr("cursor", M.overlay),
              D.selection && (V = D.selection),
              F(V) && ((D.selection = null), z.call(E)),
              G.end());
          }
          function oe() {
            switch (a.event.keyCode) {
              case 16:
                K = S && W;
                break;
              case 18:
                q === v &&
                  (S && ((f = d - X * S), (n = u + X * S)),
                  W && ((g = _ - $ * W), (o = l + $ * W)),
                  (q = y),
                  ue());
                break;
              case 32:
                (q !== v && q !== y) ||
                  (S < 0 ? (f = d - X) : S > 0 && (n = u - X),
                  W < 0 ? (g = _ - $) : W > 0 && (o = l - $),
                  (q = p),
                  te.attr("cursor", M.selection),
                  ue());
                break;
              default:
                return;
            }
            (0, s.default)();
          }
          function ae() {
            switch (a.event.keyCode) {
              case 16:
                K && ((I = A = K = !1), ue());
                break;
              case 18:
                q === y &&
                  (S < 0 ? (f = d) : S > 0 && (n = u),
                  W < 0 ? (g = _) : W > 0 && (o = l),
                  (q = v),
                  ue());
                break;
              case 32:
                q === p &&
                  (a.event.altKey
                    ? (S && ((f = d - X * S), (n = u + X * S)),
                      W && ((g = _ - $ * W), (o = l + $ * W)),
                      (q = y))
                    : (S < 0 ? (f = d) : S > 0 && (n = u),
                      W < 0 ? (g = _) : W > 0 && (o = l),
                      (q = v)),
                  te.attr("cursor", M[C]),
                  ue());
                break;
              default:
                return;
            }
            (0, s.default)();
          }
        }
        function D() {
          T(this, arguments).moved();
        }
        function B() {
          T(this, arguments).ended();
        }
        function V() {
          var t = this.__brush || { selection: null };
          return ((t.extent = g(n.apply(this, arguments))), (t.dim = e), t);
        }
        return (
          (q.move = function (t, n) {
            t.selection
              ? t
                  .on("start.brush", function () {
                    T(this, arguments).beforestart().start();
                  })
                  .on("interrupt.brush end.brush", function () {
                    T(this, arguments).end();
                  })
                  .tween("brush", function () {
                    var t = this,
                      r = t.__brush,
                      u = T(t, arguments),
                      i = r.selection,
                      a = e.input(
                        "function" === typeof n ? n.apply(this, arguments) : n,
                        r.extent,
                      ),
                      c = (0, o.interpolate)(i, a);
                    function l(e) {
                      ((r.selection = 1 === e && null === a ? null : c(e)),
                        z.call(t),
                        u.brush());
                    }
                    return null !== i && null !== a ? l : l(1);
                  })
              : t.each(function () {
                  var t = this,
                    r = arguments,
                    u = t.__brush,
                    i = e.input(
                      "function" === typeof n ? n.apply(t, r) : n,
                      u.extent,
                    ),
                    o = T(t, r).beforestart();
                  ((0, c.interrupt)(t),
                    (u.selection = null === i ? null : i),
                    z.call(t),
                    o.start().brush().end());
                });
          }),
          (q.clear = function (e) {
            q.move(e, null);
          }),
          (S.prototype = {
            beforestart: function () {
              return (
                1 === ++this.active &&
                  ((this.state.emitter = this), (this.starting = !0)),
                this
              );
            },
            start: function () {
              return (
                this.starting
                  ? ((this.starting = !1), this.emit("start"))
                  : this.emit("brush"),
                this
              );
            },
            brush: function () {
              return (this.emit("brush"), this);
            },
            end: function () {
              return (
                0 === --this.active &&
                  (delete this.state.emitter, this.emit("end")),
                this
              );
            },
            emit: function (t) {
              (0, a.customEvent)(
                new f.default(q, t, e.output(this.state.selection)),
                _.apply,
                _,
                [t, this.that, this.args],
              );
            },
          }),
          (q.extent = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, l.default)(g(e))), q)
              : n;
          }),
          (q.filter = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, l.default)(!!e)), q)
              : r;
          }),
          (q.touchable = function (e) {
            return arguments.length
              ? ((d = "function" === typeof e ? e : (0, l.default)(!!e)), q)
              : d;
          }),
          (q.handleSize = function (e) {
            return arguments.length ? ((C = +e), q) : C;
          }),
          (q.keyModifiers = function (e) {
            return arguments.length ? ((b = !!e), q) : b;
          }),
          (q.on = function () {
            var e = _.on.apply(_, arguments);
            return e === _ ? q : e;
          }),
          q
        );
      }
    },
    8472: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = { value: function () {} };
      function u() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          r[e] = [];
        }
        return new i(r);
      }
      function i(e) {
        this._ = e;
      }
      function o(e, t) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function (e) {
            var n = "",
              r = e.indexOf(".");
            if (
              (r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))),
              e && !t.hasOwnProperty(e))
            )
              throw new Error("unknown type: " + e);
            return { type: e, name: n };
          });
      }
      function a(e, t) {
        for (var n, r = 0, u = e.length; r < u; ++r)
          if ((n = e[r]).name === t) return n.value;
      }
      function c(e, t, n) {
        for (var u = 0, i = e.length; u < i; ++u)
          if (e[u].name === t) {
            ((e[u] = r), (e = e.slice(0, u).concat(e.slice(u + 1))));
            break;
          }
        return (null != n && e.push({ name: t, value: n }), e);
      }
      i.prototype = u.prototype = {
        constructor: i,
        on: function (e, t) {
          var n,
            r = this._,
            u = o(e + "", r),
            i = -1,
            l = u.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" !== typeof t)
              throw new Error("invalid callback: " + t);
            while (++i < l)
              if ((n = (e = u[i]).type)) r[n] = c(r[n], e.name, t);
              else if (null == t) for (n in r) r[n] = c(r[n], e.name, null);
            return this;
          }
          while (++i < l)
            if ((n = (e = u[i]).type) && (n = a(r[n], e.name))) return n;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new i(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, u = new Array(n), i = 0; i < n; ++i)
              u[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (r = this._[e], i = 0, n = r.length; i < n; ++i)
            r[i].value.apply(t, u);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var r = this._[e], u = 0, i = r.length; u < i; ++u)
            r[u].value.apply(t, n);
        },
      };
      t.default = u;
    },
    8473: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = v));
      var u = n(3918),
        i = n(3066),
        o = f(n(6290)),
        a = f(n(6291)),
        c = r(n(8509)),
        l = r(n(8510));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function s() {
        return !i.event.ctrlKey && !i.event.button;
      }
      function d() {
        return this.parentNode;
      }
      function h(e) {
        return null == e ? { x: i.event.x, y: i.event.y } : e;
      }
      function p() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function v() {
        var e,
          t,
          n,
          r,
          f = s,
          v = d,
          y = h,
          b = p,
          g = {},
          m = (0, u.dispatch)("start", "drag", "end"),
          w = 0,
          O = 0;
        function _(e) {
          e.on("mousedown.drag", M)
            .filter(b)
            .on("touchstart.drag", x)
            .on("touchmove.drag", k)
            .on("touchend.drag touchcancel.drag", N)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function M() {
          if (!r && f.apply(this, arguments)) {
            var u = I(
              "mouse",
              v.apply(this, arguments),
              i.mouse,
              this,
              arguments,
            );
            u &&
              ((0, i.select)(i.event.view)
                .on("mousemove.drag", P, !0)
                .on("mouseup.drag", j, !0),
              (0, o.default)(i.event.view),
              (0, a.nopropagation)(),
              (n = !1),
              (e = i.event.clientX),
              (t = i.event.clientY),
              u("start"));
          }
        }
        function P() {
          if (((0, a.default)(), !n)) {
            var r = i.event.clientX - e,
              u = i.event.clientY - t;
            n = r * r + u * u > O;
          }
          g.mouse("drag");
        }
        function j() {
          ((0, i.select)(i.event.view).on("mousemove.drag mouseup.drag", null),
            (0, o.yesdrag)(i.event.view, n),
            (0, a.default)(),
            g.mouse("end"));
        }
        function x() {
          if (f.apply(this, arguments)) {
            var e,
              t,
              n = i.event.changedTouches,
              r = v.apply(this, arguments),
              u = n.length;
            for (e = 0; e < u; ++e)
              (t = I(n[e].identifier, r, i.touch, this, arguments)) &&
                ((0, a.nopropagation)(), t("start"));
          }
        }
        function k() {
          var e,
            t,
            n = i.event.changedTouches,
            r = n.length;
          for (e = 0; e < r; ++e)
            (t = g[n[e].identifier]) && ((0, a.default)(), t("drag"));
        }
        function N() {
          var e,
            t,
            n = i.event.changedTouches,
            u = n.length;
          for (
            r && clearTimeout(r),
              r = setTimeout(function () {
                r = null;
              }, 500),
              e = 0;
            e < u;
            ++e
          )
            (t = g[n[e].identifier]) && ((0, a.nopropagation)(), t("end"));
        }
        function I(e, t, n, r, u) {
          var o,
            a,
            c,
            f = n(t, e),
            s = m.copy();
          if (
            (0, i.customEvent)(
              new l.default(_, "beforestart", o, e, w, f[0], f[1], 0, 0, s),
              function () {
                return (
                  null != (i.event.subject = o = y.apply(r, u)) &&
                  ((a = o.x - f[0] || 0), (c = o.y - f[1] || 0), !0)
                );
              },
            )
          )
            return function d(h) {
              var p,
                v = f;
              switch (h) {
                case "start":
                  ((g[e] = d), (p = w++));
                  break;
                case "end":
                  (delete g[e], --w);
                case "drag":
                  ((f = n(t, e)), (p = w));
                  break;
              }
              (0, i.customEvent)(
                new l.default(
                  _,
                  h,
                  o,
                  e,
                  p,
                  f[0] + a,
                  f[1] + c,
                  f[0] - v[0],
                  f[1] - v[1],
                  s,
                ),
                s.apply,
                s,
                [h, r, u],
              );
            };
        }
        return (
          (_.filter = function (e) {
            return arguments.length
              ? ((f = "function" === typeof e ? e : (0, c.default)(!!e)), _)
              : f;
          }),
          (_.container = function (e) {
            return arguments.length
              ? ((v = "function" === typeof e ? e : (0, c.default)(e)), _)
              : v;
          }),
          (_.subject = function (e) {
            return arguments.length
              ? ((y = "function" === typeof e ? e : (0, c.default)(e)), _)
              : y;
          }),
          (_.touchable = function (e) {
            return arguments.length
              ? ((b = "function" === typeof e ? e : (0, c.default)(!!e)), _)
              : b;
          }),
          (_.on = function () {
            var e = m.on.apply(m, arguments);
            return e === m ? _ : e;
          }),
          (_.clickDistance = function (e) {
            return arguments.length ? ((O = (e = +e) * e), _) : Math.sqrt(O);
          }),
          _
        );
      }
    },
    8509: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8510: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, u, i, o, a, c, l) {
        ((this.target = e),
          (this.type = t),
          (this.subject = n),
          (this.identifier = r),
          (this.active = u),
          (this.x = i),
          (this.y = o),
          (this.dx = a),
          (this.dy = c),
          (this._ = l));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (r.prototype.on = function () {
          var e = this._.on.apply(this._, arguments);
          return e === this._ ? this : e;
        }));
    },
    8511: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hcl = x),
        (t.Lab = g),
        (t.default = b),
        (t.gray = y),
        (t.hcl = j),
        (t.lch = P));
      var r = o(n(5311)),
        u = n(5310),
        i = n(6292);
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      var a = 18,
        c = 0.96422,
        l = 1,
        f = 0.82521,
        s = 4 / 29,
        d = 6 / 29,
        h = 3 * d * d,
        p = d * d * d;
      function v(e) {
        if (e instanceof g) return new g(e.l, e.a, e.b, e.opacity);
        if (e instanceof x) return k(e);
        e instanceof u.Rgb || (e = (0, u.rgbConvert)(e));
        var t,
          n,
          r = _(e.r),
          i = _(e.g),
          o = _(e.b),
          a = m((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / l);
        return (
          r === i && i === o
            ? (t = n = a)
            : ((t = m((0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / c)),
              (n = m((0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / f))),
          new g(116 * a - 16, 500 * (t - a), 200 * (a - n), e.opacity)
        );
      }
      function y(e, t) {
        return new g(e, 0, 0, null == t ? 1 : t);
      }
      function b(e, t, n, r) {
        return 1 === arguments.length
          ? v(e)
          : new g(e, t, n, null == r ? 1 : r);
      }
      function g(e, t, n, r) {
        ((this.l = +e), (this.a = +t), (this.b = +n), (this.opacity = +r));
      }
      function m(e) {
        return e > p ? Math.pow(e, 1 / 3) : e / h + s;
      }
      function w(e) {
        return e > d ? e * e * e : h * (e - s);
      }
      function O(e) {
        return (
          255 *
          (e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055)
        );
      }
      function _(e) {
        return (e /= 255) <= 0.04045
          ? e / 12.92
          : Math.pow((e + 0.055) / 1.055, 2.4);
      }
      function M(e) {
        if (e instanceof x) return new x(e.h, e.c, e.l, e.opacity);
        if ((e instanceof g || (e = v(e)), 0 === e.a && 0 === e.b))
          return new x(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
        var t = Math.atan2(e.b, e.a) * i.rad2deg;
        return new x(
          t < 0 ? t + 360 : t,
          Math.sqrt(e.a * e.a + e.b * e.b),
          e.l,
          e.opacity,
        );
      }
      function P(e, t, n, r) {
        return 1 === arguments.length
          ? M(e)
          : new x(n, t, e, null == r ? 1 : r);
      }
      function j(e, t, n, r) {
        return 1 === arguments.length
          ? M(e)
          : new x(e, t, n, null == r ? 1 : r);
      }
      function x(e, t, n, r) {
        ((this.h = +e), (this.c = +t), (this.l = +n), (this.opacity = +r));
      }
      function k(e) {
        if (isNaN(e.h)) return new g(e.l, 0, 0, e.opacity);
        var t = e.h * i.deg2rad;
        return new g(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
      }
      ((0, r.default)(
        g,
        b,
        (0, r.extend)(u.Color, {
          brighter: function (e) {
            return new g(
              this.l + a * (null == e ? 1 : e),
              this.a,
              this.b,
              this.opacity,
            );
          },
          darker: function (e) {
            return new g(
              this.l - a * (null == e ? 1 : e),
              this.a,
              this.b,
              this.opacity,
            );
          },
          rgb: function () {
            var e = (this.l + 16) / 116,
              t = isNaN(this.a) ? e : e + this.a / 500,
              n = isNaN(this.b) ? e : e - this.b / 200;
            return (
              (t = c * w(t)),
              (e = l * w(e)),
              (n = f * w(n)),
              new u.Rgb(
                O(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
                O(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
                O(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
                this.opacity,
              )
            );
          },
        }),
      ),
        (0, r.default)(
          x,
          j,
          (0, r.extend)(u.Color, {
            brighter: function (e) {
              return new x(
                this.h,
                this.c,
                this.l + a * (null == e ? 1 : e),
                this.opacity,
              );
            },
            darker: function (e) {
              return new x(
                this.h,
                this.c,
                this.l - a * (null == e ? 1 : e),
                this.opacity,
              );
            },
            rgb: function () {
              return k(this).rgb();
            },
          }),
        ));
    },
    8512: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Cubehelix = b),
        (t.default = y));
      var r = o(n(5311)),
        u = n(5310),
        i = n(6292);
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      var a = -0.14861,
        c = 1.78277,
        l = -0.29227,
        f = -0.90649,
        s = 1.97294,
        d = s * f,
        h = s * c,
        p = c * l - f * a;
      function v(e) {
        if (e instanceof b) return new b(e.h, e.s, e.l, e.opacity);
        e instanceof u.Rgb || (e = (0, u.rgbConvert)(e));
        var t = e.r / 255,
          n = e.g / 255,
          r = e.b / 255,
          o = (p * r + d * t - h * n) / (p + d - h),
          a = r - o,
          c = (s * (n - o) - l * a) / f,
          v = Math.sqrt(c * c + a * a) / (s * o * (1 - o)),
          y = v ? Math.atan2(c, a) * i.rad2deg - 120 : NaN;
        return new b(y < 0 ? y + 360 : y, v, o, e.opacity);
      }
      function y(e, t, n, r) {
        return 1 === arguments.length
          ? v(e)
          : new b(e, t, n, null == r ? 1 : r);
      }
      function b(e, t, n, r) {
        ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
      }
      (0, r.default)(
        b,
        y,
        (0, r.extend)(u.Color, {
          brighter: function (e) {
            return (
              (e = null == e ? u.brighter : Math.pow(u.brighter, e)),
              new b(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker: function (e) {
            return (
              (e = null == e ? u.darker : Math.pow(u.darker, e)),
              new b(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb: function () {
            var e = isNaN(this.h) ? 0 : (this.h + 120) * i.deg2rad,
              t = +this.l,
              n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
              r = Math.cos(e),
              o = Math.sin(e);
            return new u.Rgb(
              255 * (t + n * (a * r + c * o)),
              255 * (t + n * (l * r + f * o)),
              255 * (t + n * (s * r)),
              this.opacity,
            );
          },
        }),
      );
    },
    8549: function (e, t, n) {
      "use strict";
      function r(e) {
        return +e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.linear = r));
    },
    8550: function (e, t, n) {
      "use strict";
      function r(e) {
        return e * e;
      }
      function u(e) {
        return e * (2 - e);
      }
      function i(e) {
        return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.quadIn = r),
        (t.quadInOut = i),
        (t.quadOut = u));
    },
    8551: function (e, t, n) {
      "use strict";
      function r(e) {
        return e * e * e;
      }
      function u(e) {
        return --e * e * e + 1;
      }
      function i(e) {
        return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cubicIn = r),
        (t.cubicInOut = i),
        (t.cubicOut = u));
    },
    8552: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.polyOut = t.polyInOut = t.polyIn = void 0));
      var r = 3;
      ((t.polyIn = (function e(t) {
        function n(e) {
          return Math.pow(e, t);
        }
        return ((t = +t), (n.exponent = e), n);
      })(r)),
        (t.polyOut = (function e(t) {
          function n(e) {
            return 1 - Math.pow(1 - e, t);
          }
          return ((t = +t), (n.exponent = e), n);
        })(r)),
        (t.polyInOut = (function e(t) {
          function n(e) {
            return (
              ((e *= 2) <= 1 ? Math.pow(e, t) : 2 - Math.pow(2 - e, t)) / 2
            );
          }
          return ((t = +t), (n.exponent = e), n);
        })(r)));
    },
    8553: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sinIn = i),
        (t.sinInOut = a),
        (t.sinOut = o));
      var r = Math.PI,
        u = r / 2;
      function i(e) {
        return 1 === +e ? 1 : 1 - Math.cos(e * u);
      }
      function o(e) {
        return Math.sin(e * u);
      }
      function a(e) {
        return (1 - Math.cos(r * e)) / 2;
      }
    },
    8554: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.expIn = u),
        (t.expInOut = o),
        (t.expOut = i));
      var r = n(6303);
      function u(e) {
        return (0, r.tpmt)(1 - +e);
      }
      function i(e) {
        return 1 - (0, r.tpmt)(e);
      }
      function o(e) {
        return (
          ((e *= 2) <= 1 ? (0, r.tpmt)(1 - e) : 2 - (0, r.tpmt)(e - 1)) / 2
        );
      }
    },
    8555: function (e, t, n) {
      "use strict";
      function r(e) {
        return 1 - Math.sqrt(1 - e * e);
      }
      function u(e) {
        return Math.sqrt(1 - --e * e);
      }
      function i(e) {
        return (
          ((e *= 2) <= 1
            ? 1 - Math.sqrt(1 - e * e)
            : Math.sqrt(1 - (e -= 2) * e) + 1) / 2
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.circleIn = r),
        (t.circleInOut = i),
        (t.circleOut = u));
    },
    8556: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bounceIn = h),
        (t.bounceInOut = v),
        (t.bounceOut = p));
      var r = 4 / 11,
        u = 6 / 11,
        i = 8 / 11,
        o = 3 / 4,
        a = 9 / 11,
        c = 10 / 11,
        l = 15 / 16,
        f = 21 / 22,
        s = 63 / 64,
        d = 1 / r / r;
      function h(e) {
        return 1 - p(1 - e);
      }
      function p(e) {
        return (e = +e) < r
          ? d * e * e
          : e < i
            ? d * (e -= u) * e + o
            : e < c
              ? d * (e -= a) * e + l
              : d * (e -= f) * e + s;
      }
      function v(e) {
        return ((e *= 2) <= 1 ? 1 - p(1 - e) : p(e - 1) + 1) / 2;
      }
    },
    8557: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.backOut = t.backInOut = t.backIn = void 0));
      var r = 1.70158;
      ((t.backIn = (function e(t) {
        function n(e) {
          return (e = +e) * e * (t * (e - 1) + e);
        }
        return ((t = +t), (n.overshoot = e), n);
      })(r)),
        (t.backOut = (function e(t) {
          function n(e) {
            return --e * e * ((e + 1) * t + e) + 1;
          }
          return ((t = +t), (n.overshoot = e), n);
        })(r)),
        (t.backInOut = (function e(t) {
          function n(e) {
            return (
              ((e *= 2) < 1
                ? e * e * ((t + 1) * e - t)
                : (e -= 2) * e * ((t + 1) * e + t) + 2) / 2
            );
          }
          return ((t = +t), (n.overshoot = e), n);
        })(r)));
    },
    8558: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.elasticOut = t.elasticInOut = t.elasticIn = void 0));
      var r = n(6303),
        u = 2 * Math.PI,
        i = 1,
        o = 0.3;
      ((t.elasticIn = (function e(t, n) {
        var i = Math.asin(1 / (t = Math.max(1, t))) * (n /= u);
        function o(e) {
          return t * (0, r.tpmt)(-(--e)) * Math.sin((i - e) / n);
        }
        return (
          (o.amplitude = function (t) {
            return e(t, n * u);
          }),
          (o.period = function (n) {
            return e(t, n);
          }),
          o
        );
      })(i, o)),
        (t.elasticOut = (function e(t, n) {
          var i = Math.asin(1 / (t = Math.max(1, t))) * (n /= u);
          function o(e) {
            return 1 - t * (0, r.tpmt)((e = +e)) * Math.sin((e + i) / n);
          }
          return (
            (o.amplitude = function (t) {
              return e(t, n * u);
            }),
            (o.period = function (n) {
              return e(t, n);
            }),
            o
          );
        })(i, o)),
        (t.elasticInOut = (function e(t, n) {
          var i = Math.asin(1 / (t = Math.max(1, t))) * (n /= u);
          function o(e) {
            return (
              ((e = 2 * e - 1) < 0
                ? t * (0, r.tpmt)(-e) * Math.sin((i - e) / n)
                : 2 - t * (0, r.tpmt)(e) * Math.sin((i + e) / n)) / 2
            );
          }
          return (
            (o.amplitude = function (t) {
              return e(t, n * u);
            }),
            (o.period = function (n) {
              return e(t, n);
            }),
            o
          );
        })(i, o)));
    },
    8560: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8561: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        ((this.target = e), (this.type = t), (this.selection = n));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8562: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.nopropagation = u));
      var r = n(3066);
      function u() {
        r.event.stopImmediatePropagation();
      }
      function i() {
        (r.event.preventDefault(), r.event.stopImmediatePropagation());
      }
    },
    8563: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "chord", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "ribbon", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var u = r(n(8564)),
        i = r(n(8565));
    },
    8564: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var r = n(3065),
        u = n(6304);
      function i(e) {
        return function (t, n) {
          return e(
            t.source.value + t.target.value,
            n.source.value + n.target.value,
          );
        };
      }
      function o() {
        var e = 0,
          t = null,
          n = null,
          o = null;
        function a(i) {
          var a,
            c,
            l,
            f,
            s,
            d,
            h = i.length,
            p = [],
            v = (0, r.range)(h),
            y = [],
            b = [],
            g = (b.groups = new Array(h)),
            m = new Array(h * h);
          ((a = 0), (s = -1));
          while (++s < h) {
            ((c = 0), (d = -1));
            while (++d < h) c += i[s][d];
            (p.push(c), y.push((0, r.range)(h)), (a += c));
          }
          (t &&
            v.sort(function (e, n) {
              return t(p[e], p[n]);
            }),
            n &&
              y.forEach(function (e, t) {
                e.sort(function (e, r) {
                  return n(i[t][e], i[t][r]);
                });
              }),
            (a = (0, u.max)(0, u.tau - e * h) / a),
            (f = a ? e : u.tau / h),
            (c = 0),
            (s = -1));
          while (++s < h) {
            ((l = c), (d = -1));
            while (++d < h) {
              var w = v[s],
                O = y[w][d],
                _ = i[w][O],
                M = c,
                P = (c += _ * a);
              m[O * h + w] = {
                index: w,
                subindex: O,
                startAngle: M,
                endAngle: P,
                value: _,
              };
            }
            ((g[w] = { index: w, startAngle: l, endAngle: c, value: p[w] }),
              (c += f));
          }
          s = -1;
          while (++s < h) {
            d = s - 1;
            while (++d < h) {
              var j = m[d * h + s],
                x = m[s * h + d];
              (j.value || x.value) &&
                b.push(
                  j.value < x.value
                    ? { source: x, target: j }
                    : { source: j, target: x },
                );
            }
          }
          return o ? b.sort(o) : b;
        }
        return (
          (a.padAngle = function (t) {
            return arguments.length ? ((e = (0, u.max)(0, t)), a) : e;
          }),
          (a.sortGroups = function (e) {
            return arguments.length ? ((t = e), a) : t;
          }),
          (a.sortSubgroups = function (e) {
            return arguments.length ? ((n = e), a) : n;
          }),
          (a.sortChords = function (e) {
            return arguments.length
              ? (null == e ? (o = null) : ((o = i(e))._ = e), a)
              : o && o._;
          }),
          a
        );
      }
    },
    8565: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h));
      var u = n(8566),
        i = r(n(8567)),
        o = n(6304),
        a = n(3794);
      function c(e) {
        return e.source;
      }
      function l(e) {
        return e.target;
      }
      function f(e) {
        return e.radius;
      }
      function s(e) {
        return e.startAngle;
      }
      function d(e) {
        return e.endAngle;
      }
      function h() {
        var e = c,
          t = l,
          n = f,
          r = s,
          h = d,
          p = null;
        function v() {
          var i,
            c = u.slice.call(arguments),
            l = e.apply(this, c),
            f = t.apply(this, c),
            s = +n.apply(this, ((c[0] = l), c)),
            d = r.apply(this, c) - o.halfPi,
            v = h.apply(this, c) - o.halfPi,
            y = s * (0, o.cos)(d),
            b = s * (0, o.sin)(d),
            g = +n.apply(this, ((c[0] = f), c)),
            m = r.apply(this, c) - o.halfPi,
            w = h.apply(this, c) - o.halfPi;
          if (
            (p || (p = i = (0, a.path)()),
            p.moveTo(y, b),
            p.arc(0, 0, s, d, v),
            (d === m && v === w) ||
              (p.quadraticCurveTo(0, 0, g * (0, o.cos)(m), g * (0, o.sin)(m)),
              p.arc(0, 0, g, m, w)),
            p.quadraticCurveTo(0, 0, y, b),
            p.closePath(),
            i)
          )
            return ((p = null), i + "" || null);
        }
        return (
          (v.radius = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, i.default)(+e)), v)
              : n;
          }),
          (v.startAngle = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, i.default)(+e)), v)
              : r;
          }),
          (v.endAngle = function (e) {
            return arguments.length
              ? ((h = "function" === typeof e ? e : (0, i.default)(+e)), v)
              : h;
          }),
          (v.source = function (t) {
            return arguments.length ? ((e = t), v) : e;
          }),
          (v.target = function (e) {
            return arguments.length ? ((t = e), v) : t;
          }),
          (v.context = function (e) {
            return arguments.length ? ((p = null == e ? null : e), v) : p;
          }),
          v
        );
      }
    },
    8566: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = void 0));
      t.slice = Array.prototype.slice;
    },
    8567: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8569: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(5316));
      function i() {
        var e,
          t,
          n,
          r = [],
          i = [];
        function f(n, i, o, a) {
          if (i >= r.length)
            return (null != e && n.sort(e), null != t ? t(n) : n);
          var c,
            l,
            s,
            d = -1,
            h = n.length,
            p = r[i++],
            v = (0, u.default)(),
            y = o();
          while (++d < h)
            (s = v.get((c = p((l = n[d])) + ""))) ? s.push(l) : v.set(c, [l]);
          return (
            v.each(function (e, t) {
              a(y, t, f(e, i, o, a));
            }),
            y
          );
        }
        function s(e, n) {
          if (++n > r.length) return e;
          var u,
            o = i[n - 1];
          return (
            null != t && n >= r.length
              ? (u = e.entries())
              : ((u = []),
                e.each(function (e, t) {
                  u.push({ key: t, values: s(e, n) });
                })),
            null != o
              ? u.sort(function (e, t) {
                  return o(e.key, t.key);
                })
              : u
          );
        }
        return (n = {
          object: function (e) {
            return f(e, 0, o, a);
          },
          map: function (e) {
            return f(e, 0, c, l);
          },
          entries: function (e) {
            return s(f(e, 0, c, l), 0);
          },
          key: function (e) {
            return (r.push(e), n);
          },
          sortKeys: function (e) {
            return ((i[r.length - 1] = e), n);
          },
          sortValues: function (t) {
            return ((e = t), n);
          },
          rollup: function (e) {
            return ((t = e), n);
          },
        });
      }
      function o() {
        return {};
      }
      function a(e, t, n) {
        e[t] = n;
      }
      function c() {
        return (0, u.default)();
      }
      function l(e, t, n) {
        e.set(t, n);
      }
    },
    8570: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = u(n(5316));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function i() {}
      var o = r.default.prototype;
      function a(e, t) {
        var n = new i();
        if (e instanceof i)
          e.each(function (e) {
            n.add(e);
          });
        else if (e) {
          var r = -1,
            u = e.length;
          if (null == t) while (++r < u) n.add(e[r]);
          else while (++r < u) n.add(t(e[r], r, e));
        }
        return n;
      }
      i.prototype = a.prototype = {
        constructor: i,
        has: o.has,
        add: function (e) {
          return ((e += ""), (this[r.prefix + e] = e), this);
        },
        remove: o.remove,
        clear: o.clear,
        values: o.keys,
        size: o.size,
        empty: o.empty,
        each: o.each,
      };
      t.default = a;
    },
    8571: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8572: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8573: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = [];
        for (var n in e) t.push({ key: n, value: e[n] });
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8574: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "contourDensity", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "contours", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }));
      var u = r(n(6305)),
        i = r(n(8579));
    },
    8575: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e - t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8576: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = 0,
          n = e.length,
          r = e[n - 1][1] * e[0][0] - e[n - 1][0] * e[0][1];
        while (++t < n) r += e[t - 1][1] * e[t][0] - e[t - 1][0] * e[t][1];
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8577: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n,
          r = -1,
          i = t.length;
        while (++r < i) if ((n = u(e, t[r]))) return n;
        return 0;
      }
      function u(e, t) {
        for (
          var n = t[0], r = t[1], u = -1, o = 0, a = e.length, c = a - 1;
          o < a;
          c = o++
        ) {
          var l = e[o],
            f = l[0],
            s = l[1],
            d = e[c],
            h = d[0],
            p = d[1];
          if (i(l, d, t)) return 0;
          s > r !== p > r && n < ((h - f) * (r - s)) / (p - s) + f && (u = -u);
        }
        return u;
      }
      function i(e, t, n) {
        var r;
        return o(e, t, n) && a(e[(r = +(e[0] === t[0]))], n[r], t[r]);
      }
      function o(e, t, n) {
        return (t[0] - e[0]) * (n[1] - e[1]) === (n[0] - e[0]) * (t[1] - e[1]);
      }
      function a(e, t, n) {
        return (e <= t && t <= n) || (n <= t && t <= e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8578: function (e, t, n) {
      "use strict";
      function r() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8579: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
      var u = n(3065),
        i = n(6306),
        o = n(8580),
        a = r(n(6307)),
        c = r(n(6305));
      function l(e) {
        return e[0];
      }
      function f(e) {
        return e[1];
      }
      function s() {
        return 1;
      }
      function d() {
        var e = l,
          t = f,
          n = s,
          r = 960,
          d = 500,
          h = 20,
          p = 2,
          v = 3 * h,
          y = (r + 2 * v) >> p,
          b = (d + 2 * v) >> p,
          g = (0, a.default)(20);
        function m(r) {
          var i = new Float32Array(y * b),
            a = new Float32Array(y * b);
          (r.forEach(function (r, u, o) {
            var a = (+e(r, u, o) + v) >> p,
              c = (+t(r, u, o) + v) >> p,
              l = +n(r, u, o);
            a >= 0 && a < y && c >= 0 && c < b && (i[a + c * y] += l);
          }),
            (0, o.blurX)(
              { width: y, height: b, data: i },
              { width: y, height: b, data: a },
              h >> p,
            ),
            (0, o.blurY)(
              { width: y, height: b, data: a },
              { width: y, height: b, data: i },
              h >> p,
            ),
            (0, o.blurX)(
              { width: y, height: b, data: i },
              { width: y, height: b, data: a },
              h >> p,
            ),
            (0, o.blurY)(
              { width: y, height: b, data: a },
              { width: y, height: b, data: i },
              h >> p,
            ),
            (0, o.blurX)(
              { width: y, height: b, data: i },
              { width: y, height: b, data: a },
              h >> p,
            ),
            (0, o.blurY)(
              { width: y, height: b, data: a },
              { width: y, height: b, data: i },
              h >> p,
            ));
          var l = g(i);
          if (!Array.isArray(l)) {
            var f = (0, u.max)(i);
            ((l = (0, u.tickStep)(0, f, l)),
              (l = (0, u.range)(0, Math.floor(f / l) * l, l)),
              l.shift());
          }
          return (0, c.default)().thresholds(l).size([y, b])(i).map(w);
        }
        function w(e) {
          return (
            (e.value *= Math.pow(2, -2 * p)),
            e.coordinates.forEach(O),
            e
          );
        }
        function O(e) {
          e.forEach(_);
        }
        function _(e) {
          e.forEach(M);
        }
        function M(e) {
          ((e[0] = e[0] * Math.pow(2, p) - v),
            (e[1] = e[1] * Math.pow(2, p) - v));
        }
        function P() {
          return (
            (v = 3 * h),
            (y = (r + 2 * v) >> p),
            (b = (d + 2 * v) >> p),
            m
          );
        }
        return (
          (m.x = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, a.default)(+t)), m)
              : e;
          }),
          (m.y = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : (0, a.default)(+e)), m)
              : t;
          }),
          (m.weight = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, a.default)(+e)), m)
              : n;
          }),
          (m.size = function (e) {
            if (!arguments.length) return [r, d];
            var t = Math.ceil(e[0]),
              n = Math.ceil(e[1]);
            if (!(t >= 0) && !(t >= 0)) throw new Error("invalid size");
            return ((r = t), (d = n), P());
          }),
          (m.cellSize = function (e) {
            if (!arguments.length) return 1 << p;
            if (!((e = +e) >= 1)) throw new Error("invalid cell size");
            return ((p = Math.floor(Math.log(e) / Math.LN2)), P());
          }),
          (m.thresholds = function (e) {
            return arguments.length
              ? ((g =
                  "function" === typeof e
                    ? e
                    : Array.isArray(e)
                      ? (0, a.default)(i.slice.call(e))
                      : (0, a.default)(e)),
                m)
              : g;
          }),
          (m.bandwidth = function (e) {
            if (!arguments.length) return Math.sqrt(h * (h + 1));
            if (!((e = +e) >= 0)) throw new Error("invalid bandwidth");
            return ((h = Math.round((Math.sqrt(4 * e * e + 1) - 1) / 2)), P());
          }),
          m
        );
      }
    },
    8580: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        for (var r = e.width, u = e.height, i = 1 + (n << 1), o = 0; o < u; ++o)
          for (var a = 0, c = 0; a < r + n; ++a)
            (a < r && (c += e.data[a + o * r]),
              a >= n &&
                (a >= i && (c -= e.data[a - i + o * r]),
                (t.data[a - n + o * r] =
                  c / Math.min(a + 1, r - 1 + i - a, i))));
      }
      function u(e, t, n) {
        for (var r = e.width, u = e.height, i = 1 + (n << 1), o = 0; o < r; ++o)
          for (var a = 0, c = 0; a < u + n; ++a)
            (a < u && (c += e.data[o + a * r]),
              a >= n &&
                (a >= i && (c -= e.data[o + (a - i) * r]),
                (t.data[o + (a - n) * r] =
                  c / Math.min(a + 1, u - 1 + i - a, i))));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.blurX = r),
        (t.blurY = u));
    },
    8581: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.csvParseRows =
          t.csvParse =
          t.csvFormatValue =
          t.csvFormatRows =
          t.csvFormatRow =
          t.csvFormatBody =
          t.csvFormat =
            void 0));
      var u = r(n(5317)),
        i = (0, u.default)(",");
      ((t.csvParse = i.parse),
        (t.csvParseRows = i.parseRows),
        (t.csvFormat = i.format),
        (t.csvFormatBody = i.formatBody),
        (t.csvFormatRows = i.formatRows),
        (t.csvFormatRow = i.formatRow),
        (t.csvFormatValue = i.formatValue));
    },
    8582: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tsvParseRows =
          t.tsvParse =
          t.tsvFormatValue =
          t.tsvFormatRows =
          t.tsvFormatRow =
          t.tsvFormatBody =
          t.tsvFormat =
            void 0));
      var u = r(n(5317)),
        i = (0, u.default)("\t");
      ((t.tsvParse = i.parse),
        (t.tsvParseRows = i.parseRows),
        (t.tsvFormat = i.format),
        (t.tsvFormatBody = i.formatBody),
        (t.tsvFormatRows = i.formatRows),
        (t.tsvFormatRow = i.formatRow),
        (t.tsvFormatValue = i.formatValue));
    },
    8583: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var t in e) {
          var n,
            r,
            i = e[t].trim();
          if (i)
            if ("true" === i) i = !0;
            else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN((n = +i))) {
              if (
                !(r = i.match(
                  /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/,
                ))
              )
                continue;
              (u &&
                r[4] &&
                !r[7] &&
                (i = i.replace(/-/g, "/").replace(/T/, " ")),
                (i = new Date(i)));
            } else i = n;
          else i = null;
          e[t] = i;
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
      var u =
        new Date("2019-01-01T00:00").getHours() ||
        new Date("2019-07-01T00:00").getHours();
    },
    8584: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "blob", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "buffer", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "csv", {
          enumerable: !0,
          get: function () {
            return o.csv;
          },
        }),
        Object.defineProperty(t, "dsv", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "html", {
          enumerable: !0,
          get: function () {
            return f.html;
          },
        }),
        Object.defineProperty(t, "image", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "json", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "svg", {
          enumerable: !0,
          get: function () {
            return f.svg;
          },
        }),
        Object.defineProperty(t, "text", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "tsv", {
          enumerable: !0,
          get: function () {
            return o.tsv;
          },
        }),
        Object.defineProperty(t, "xml", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }));
      var u = r(n(8585)),
        i = r(n(8586)),
        o = s(n(8587)),
        a = r(n(8588)),
        c = r(n(8589)),
        l = r(n(5318)),
        f = s(n(8590));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var u,
            i,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((u = t ? r : n)) {
            if (u.has(e)) return u.get(e);
            u.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (u = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? u(o, n, i)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    8585: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e.ok) throw new Error(e.status + " " + e.statusText);
        return e.blob();
      }
      function u(e, t) {
        return fetch(e, t).then(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
    },
    8586: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e.ok) throw new Error(e.status + " " + e.statusText);
        return e.arrayBuffer();
      }
      function u(e, t) {
        return fetch(e, t).then(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
    },
    8587: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.csv = void 0),
        (t.default = a),
        (t.tsv = void 0));
      var u = n(6308),
        i = r(n(5318));
      function o(e) {
        return function (t, n, r) {
          return (
            2 === arguments.length &&
              "function" === typeof n &&
              ((r = n), (n = void 0)),
            (0, i.default)(t, n).then(function (t) {
              return e(t, r);
            })
          );
        };
      }
      function a(e, t, n, r) {
        3 === arguments.length &&
          "function" === typeof n &&
          ((r = n), (n = void 0));
        var o = (0, u.dsvFormat)(e);
        return (0, i.default)(t, n).then(function (e) {
          return o.parse(e, r);
        });
      }
      ((t.csv = o(u.csvParse)), (t.tsv = o(u.tsvParse)));
    },
    8588: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return new Promise(function (n, r) {
          var u = new Image();
          for (var i in t) u[i] = t[i];
          ((u.onerror = r),
            (u.onload = function () {
              n(u);
            }),
            (u.src = e));
        });
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8589: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e.ok) throw new Error(e.status + " " + e.statusText);
        if (204 !== e.status && 205 !== e.status) return e.json();
      }
      function u(e, t) {
        return fetch(e, t).then(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
    },
    8590: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.svg = t.html = t.default = void 0));
      var u = r(n(5318));
      function i(e) {
        return function (t, n) {
          return (0, u.default)(t, n).then(function (t) {
            return new DOMParser().parseFromString(t, e);
          });
        };
      }
      ((t.default = i("application/xml")),
        (t.html = i("text/html")),
        (t.svg = i("image/svg+xml")));
    },
    8591: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "forceCenter", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "forceCollide", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "forceLink", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "forceManyBody", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "forceRadial", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "forceSimulation", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "forceX", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "forceY", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var u = r(n(8592)),
        i = r(n(8593)),
        o = r(n(8607)),
        a = r(n(8608)),
        c = r(n(8609)),
        l = r(n(6309)),
        f = r(n(8610)),
        s = r(n(8611));
    },
    8592: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n;
        function r() {
          var r,
            u,
            i = n.length,
            o = 0,
            a = 0;
          for (r = 0; r < i; ++r) ((u = n[r]), (o += u.x), (a += u.y));
          for (o = o / i - e, a = a / i - t, r = 0; r < i; ++r)
            ((u = n[r]), (u.x -= o), (u.y -= a));
        }
        return (
          null == e && (e = 0),
          null == t && (t = 0),
          (r.initialize = function (e) {
            n = e;
          }),
          (r.x = function (t) {
            return arguments.length ? ((e = +t), r) : e;
          }),
          (r.y = function (e) {
            return arguments.length ? ((t = +e), r) : t;
          }),
          r
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8593: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var u = r(n(3920)),
        i = r(n(5319)),
        o = n(5320);
      function a(e) {
        return e.x + e.vx;
      }
      function c(e) {
        return e.y + e.vy;
      }
      function l(e) {
        var t,
          n,
          r = 1,
          l = 1;
        function f() {
          for (var e, u, f, d, h, p, v, y = t.length, b = 0; b < l; ++b)
            for (u = (0, o.quadtree)(t, a, c).visitAfter(s), e = 0; e < y; ++e)
              ((f = t[e]),
                (p = n[f.index]),
                (v = p * p),
                (d = f.x + f.vx),
                (h = f.y + f.vy),
                u.visit(g));
          function g(e, t, n, u, o) {
            var a = e.data,
              c = e.r,
              l = p + c;
            if (!a) return t > d + l || u < d - l || n > h + l || o < h - l;
            if (a.index > f.index) {
              var s = d - a.x - a.vx,
                y = h - a.y - a.vy,
                b = s * s + y * y;
              b < l * l &&
                (0 === s && ((s = (0, i.default)()), (b += s * s)),
                0 === y && ((y = (0, i.default)()), (b += y * y)),
                (b = ((l - (b = Math.sqrt(b))) / b) * r),
                (f.vx += (s *= b) * (l = (c *= c) / (v + c))),
                (f.vy += (y *= b) * l),
                (a.vx -= s * (l = 1 - l)),
                (a.vy -= y * l));
            }
          }
        }
        function s(e) {
          if (e.data) return (e.r = n[e.data.index]);
          for (var t = (e.r = 0); t < 4; ++t)
            e[t] && e[t].r > e.r && (e.r = e[t].r);
        }
        function d() {
          if (t) {
            var r,
              u,
              i = t.length;
            for (n = new Array(i), r = 0; r < i; ++r)
              ((u = t[r]), (n[u.index] = +e(u, r, t)));
          }
        }
        return (
          "function" !== typeof e && (e = (0, u.default)(null == e ? 1 : +e)),
          (f.initialize = function (e) {
            ((t = e), d());
          }),
          (f.iterations = function (e) {
            return arguments.length ? ((l = +e), f) : l;
          }),
          (f.strength = function (e) {
            return arguments.length ? ((r = +e), f) : r;
          }),
          (f.radius = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), d(), f)
              : e;
          }),
          f
        );
      }
    },
    8607: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var u = r(n(3920)),
        i = r(n(5319)),
        o = n(4727);
      function a(e) {
        return e.index;
      }
      function c(e, t) {
        var n = e.get(t);
        if (!n) throw new Error("missing: " + t);
        return n;
      }
      function l(e) {
        var t,
          n,
          r,
          l,
          f,
          s = a,
          d = v,
          h = (0, u.default)(30),
          p = 1;
        function v(e) {
          return 1 / Math.min(l[e.source.index], l[e.target.index]);
        }
        function y(r) {
          for (var u = 0, o = e.length; u < p; ++u)
            for (var a, c, l, s, d, h, v, y = 0; y < o; ++y)
              ((a = e[y]),
                (c = a.source),
                (l = a.target),
                (s = l.x + l.vx - c.x - c.vx || (0, i.default)()),
                (d = l.y + l.vy - c.y - c.vy || (0, i.default)()),
                (h = Math.sqrt(s * s + d * d)),
                (h = ((h - n[y]) / h) * r * t[y]),
                (s *= h),
                (d *= h),
                (l.vx -= s * (v = f[y])),
                (l.vy -= d * v),
                (c.vx += s * (v = 1 - v)),
                (c.vy += d * v));
        }
        function b() {
          if (r) {
            var u,
              i,
              a = r.length,
              d = e.length,
              h = (0, o.map)(r, s);
            for (u = 0, l = new Array(a); u < d; ++u)
              ((i = e[u]),
                (i.index = u),
                "object" !== typeof i.source && (i.source = c(h, i.source)),
                "object" !== typeof i.target && (i.target = c(h, i.target)),
                (l[i.source.index] = (l[i.source.index] || 0) + 1),
                (l[i.target.index] = (l[i.target.index] || 0) + 1));
            for (u = 0, f = new Array(d); u < d; ++u)
              ((i = e[u]),
                (f[u] =
                  l[i.source.index] / (l[i.source.index] + l[i.target.index])));
            ((t = new Array(d)), g(), (n = new Array(d)), m());
          }
        }
        function g() {
          if (r)
            for (var n = 0, u = e.length; n < u; ++n) t[n] = +d(e[n], n, e);
        }
        function m() {
          if (r)
            for (var t = 0, u = e.length; t < u; ++t) n[t] = +h(e[t], t, e);
        }
        return (
          null == e && (e = []),
          (y.initialize = function (e) {
            ((r = e), b());
          }),
          (y.links = function (t) {
            return arguments.length ? ((e = t), b(), y) : e;
          }),
          (y.id = function (e) {
            return arguments.length ? ((s = e), y) : s;
          }),
          (y.iterations = function (e) {
            return arguments.length ? ((p = +e), y) : p;
          }),
          (y.strength = function (e) {
            return arguments.length
              ? ((d = "function" === typeof e ? e : (0, u.default)(+e)), g(), y)
              : d;
          }),
          (y.distance = function (e) {
            return arguments.length
              ? ((h = "function" === typeof e ? e : (0, u.default)(+e)), m(), y)
              : h;
          }),
          y
        );
      }
    },
    8608: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var u = r(n(3920)),
        i = r(n(5319)),
        o = n(5320),
        a = n(6309);
      function c() {
        var e,
          t,
          n,
          r,
          c = (0, u.default)(-30),
          l = 1,
          f = 1 / 0,
          s = 0.81;
        function d(r) {
          var u,
            i = e.length,
            c = (0, o.quadtree)(e, a.x, a.y).visitAfter(p);
          for (n = r, u = 0; u < i; ++u) ((t = e[u]), c.visit(v));
        }
        function h() {
          if (e) {
            var t,
              n,
              u = e.length;
            for (r = new Array(u), t = 0; t < u; ++t)
              ((n = e[t]), (r[n.index] = +c(n, t, e)));
          }
        }
        function p(e) {
          var t,
            n,
            u,
            i,
            o,
            a = 0,
            c = 0;
          if (e.length) {
            for (u = i = o = 0; o < 4; ++o)
              (t = e[o]) &&
                (n = Math.abs(t.value)) &&
                ((a += t.value), (c += n), (u += n * t.x), (i += n * t.y));
            ((e.x = u / c), (e.y = i / c));
          } else {
            ((t = e), (t.x = t.data.x), (t.y = t.data.y));
            do {
              a += r[t.data.index];
            } while ((t = t.next));
          }
          e.value = a;
        }
        function v(e, u, o, a) {
          if (!e.value) return !0;
          var c = e.x - t.x,
            d = e.y - t.y,
            h = a - u,
            p = c * c + d * d;
          if ((h * h) / s < p)
            return (
              p < f &&
                (0 === c && ((c = (0, i.default)()), (p += c * c)),
                0 === d && ((d = (0, i.default)()), (p += d * d)),
                p < l && (p = Math.sqrt(l * p)),
                (t.vx += (c * e.value * n) / p),
                (t.vy += (d * e.value * n) / p)),
              !0
            );
          if (!(e.length || p >= f)) {
            (e.data !== t || e.next) &&
              (0 === c && ((c = (0, i.default)()), (p += c * c)),
              0 === d && ((d = (0, i.default)()), (p += d * d)),
              p < l && (p = Math.sqrt(l * p)));
            do {
              e.data !== t &&
                ((h = (r[e.data.index] * n) / p),
                (t.vx += c * h),
                (t.vy += d * h));
            } while ((e = e.next));
          }
        }
        return (
          (d.initialize = function (t) {
            ((e = t), h());
          }),
          (d.strength = function (e) {
            return arguments.length
              ? ((c = "function" === typeof e ? e : (0, u.default)(+e)), h(), d)
              : c;
          }),
          (d.distanceMin = function (e) {
            return arguments.length ? ((l = e * e), d) : Math.sqrt(l);
          }),
          (d.distanceMax = function (e) {
            return arguments.length ? ((f = e * e), d) : Math.sqrt(f);
          }),
          (d.theta = function (e) {
            return arguments.length ? ((s = e * e), d) : Math.sqrt(s);
          }),
          d
        );
      }
    },
    8609: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(3920));
      function i(e, t, n) {
        var r,
          i,
          o,
          a = (0, u.default)(0.1);
        function c(e) {
          for (var u = 0, a = r.length; u < a; ++u) {
            var c = r[u],
              l = c.x - t || 1e-6,
              f = c.y - n || 1e-6,
              s = Math.sqrt(l * l + f * f),
              d = ((o[u] - s) * i[u] * e) / s;
            ((c.vx += l * d), (c.vy += f * d));
          }
        }
        function l() {
          if (r) {
            var t,
              n = r.length;
            for (i = new Array(n), o = new Array(n), t = 0; t < n; ++t)
              ((o[t] = +e(r[t], t, r)),
                (i[t] = isNaN(o[t]) ? 0 : +a(r[t], t, r)));
          }
        }
        return (
          "function" !== typeof e && (e = (0, u.default)(+e)),
          null == t && (t = 0),
          null == n && (n = 0),
          (c.initialize = function (e) {
            ((r = e), l());
          }),
          (c.strength = function (e) {
            return arguments.length
              ? ((a = "function" === typeof e ? e : (0, u.default)(+e)), l(), c)
              : a;
          }),
          (c.radius = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), l(), c)
              : e;
          }),
          (c.x = function (e) {
            return arguments.length ? ((t = +e), c) : t;
          }),
          (c.y = function (e) {
            return arguments.length ? ((n = +e), c) : n;
          }),
          c
        );
      }
    },
    8610: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(3920));
      function i(e) {
        var t,
          n,
          r,
          i = (0, u.default)(0.1);
        function o(e) {
          for (var u, i = 0, o = t.length; i < o; ++i)
            ((u = t[i]), (u.vx += (r[i] - u.x) * n[i] * e));
        }
        function a() {
          if (t) {
            var u,
              o = t.length;
            for (n = new Array(o), r = new Array(o), u = 0; u < o; ++u)
              n[u] = isNaN((r[u] = +e(t[u], u, t))) ? 0 : +i(t[u], u, t);
          }
        }
        return (
          "function" !== typeof e && (e = (0, u.default)(null == e ? 0 : +e)),
          (o.initialize = function (e) {
            ((t = e), a());
          }),
          (o.strength = function (e) {
            return arguments.length
              ? ((i = "function" === typeof e ? e : (0, u.default)(+e)), a(), o)
              : i;
          }),
          (o.x = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), a(), o)
              : e;
          }),
          o
        );
      }
    },
    8611: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var u = r(n(3920));
      function i(e) {
        var t,
          n,
          r,
          i = (0, u.default)(0.1);
        function o(e) {
          for (var u, i = 0, o = t.length; i < o; ++i)
            ((u = t[i]), (u.vy += (r[i] - u.y) * n[i] * e));
        }
        function a() {
          if (t) {
            var u,
              o = t.length;
            for (n = new Array(o), r = new Array(o), u = 0; u < o; ++u)
              n[u] = isNaN((r[u] = +e(t[u], u, t))) ? 0 : +i(t[u], u, t);
          }
        }
        return (
          "function" !== typeof e && (e = (0, u.default)(null == e ? 0 : +e)),
          (o.initialize = function (e) {
            ((t = e), a());
          }),
          (o.strength = function (e) {
            return arguments.length
              ? ((i = "function" === typeof e ? e : (0, u.default)(+e)), a(), o)
              : i;
          }),
          (o.y = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), a(), o)
              : e;
          }),
          o
        );
      }
    },
  },
]);
