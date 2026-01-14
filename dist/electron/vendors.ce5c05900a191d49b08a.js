(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [34],
  {
    2827: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.abs = void 0),
        (t.acos = u),
        (t.asin = i),
        (t.halfPi =
          t.floor =
          t.exp =
          t.epsilon2 =
          t.epsilon =
          t.degrees =
          t.cos =
          t.ceil =
          t.atan2 =
          t.atan =
            void 0),
        (t.haversin = c),
        (t.tau =
          t.tan =
          t.sqrt =
          t.sin =
          t.sign =
          t.radians =
          t.quarterPi =
          t.pow =
          t.pi =
          t.log =
            void 0));
      ((t.epsilon = 1e-6), (t.epsilon2 = 1e-12));
      var r = (t.pi = Math.PI),
        a = (t.halfPi = r / 2),
        f =
          ((t.quarterPi = r / 4),
          (t.tau = 2 * r),
          (t.degrees = 180 / r),
          (t.radians = r / 180),
          (t.abs = Math.abs),
          (t.atan = Math.atan),
          (t.atan2 = Math.atan2),
          (t.cos = Math.cos),
          (t.ceil = Math.ceil),
          (t.exp = Math.exp),
          (t.floor = Math.floor),
          (t.log = Math.log),
          (t.pow = Math.pow),
          (t.sin = Math.sin));
      ((t.sign =
        Math.sign ||
        function (e) {
          return e > 0 ? 1 : e < 0 ? -1 : 0;
        }),
        (t.sqrt = Math.sqrt),
        (t.tan = Math.tan));
      function u(e) {
        return e > 1 ? 0 : e < -1 ? r : Math.acos(e);
      }
      function i(e) {
        return e > 1 ? a : e < -1 ? -a : Math.asin(e);
      }
      function c(e) {
        return (e = f(e / 2)) * e;
      }
    },
    2836: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = (e.length / 6) | 0,
          n = new Array(t),
          r = 0;
        while (r < t) n[r] = "#" + e.slice(6 * r, 6 * ++r);
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    2919: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(3380);
      function a(e) {
        return (0, r.interpolateRgbBasis)(e[e.length - 1]);
      }
    },
    3342: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = g),
        (t.projectionMutator = _));
      var a = r(n(6316)),
        f = r(n(6322)),
        u = r(n(4731)),
        i = r(n(6315)),
        c = r(n(5323)),
        o = n(2827),
        d = n(4730),
        l = n(4732),
        s = n(5326),
        b = r(n(8637)),
        p = (0, l.transformer)({
          point: function (e, t) {
            this.stream.point(e * o.radians, t * o.radians);
          },
        });
      function h(e) {
        return (0, l.transformer)({
          point: function (t, n) {
            var r = e(t, n);
            return this.stream.point(r[0], r[1]);
          },
        });
      }
      function v(e, t, n, r, a) {
        function f(f, u) {
          return ((f *= r), (u *= a), [t + e * f, n - e * u]);
        }
        return (
          (f.invert = function (f, u) {
            return [((f - t) / e) * r, ((n - u) / e) * a];
          }),
          f
        );
      }
      function y(e, t, n, r, a, f) {
        var u = (0, o.cos)(f),
          i = (0, o.sin)(f),
          c = u * e,
          d = i * e,
          l = u / e,
          s = i / e,
          b = (i * n - u * t) / e,
          p = (i * t + u * n) / e;
        function h(e, f) {
          return ((e *= r), (f *= a), [c * e - d * f + t, n - d * e - c * f]);
        }
        return (
          (h.invert = function (e, t) {
            return [r * (l * e - s * t + b), a * (p - s * e - l * t)];
          }),
          h
        );
      }
      function g(e) {
        return _(function () {
          return e;
        })();
      }
      function _(e) {
        var t,
          n,
          r,
          l,
          g,
          _,
          m,
          P,
          O,
          M,
          j = 150,
          w = 480,
          x = 250,
          E = 0,
          S = 0,
          A = 0,
          N = 0,
          R = 0,
          q = 0,
          k = 1,
          z = 1,
          B = null,
          C = a.default,
          W = null,
          L = c.default,
          D = 0.5;
        function I(e) {
          return P(e[0] * o.radians, e[1] * o.radians);
        }
        function G(e) {
          return (
            (e = P.invert(e[0], e[1])),
            e && [e[0] * o.degrees, e[1] * o.degrees]
          );
        }
        function T() {
          var e = y(j, 0, 0, k, z, q).apply(null, t(E, S)),
            r = (q ? y : v)(j, w - e[0], x - e[1], k, z, q);
          return (
            (n = (0, d.rotateRadians)(A, N, R)),
            (m = (0, i.default)(t, r)),
            (P = (0, i.default)(n, m)),
            (_ = (0, b.default)(m, D)),
            Y()
          );
        }
        function Y() {
          return ((O = M = null), I);
        }
        return (
          (I.stream = function (e) {
            return O && M === e ? O : (O = p(h(n)(C(_(L((M = e)))))));
          }),
          (I.preclip = function (e) {
            return arguments.length ? ((C = e), (B = void 0), Y()) : C;
          }),
          (I.postclip = function (e) {
            return arguments.length
              ? ((L = e), (W = r = l = g = null), Y())
              : L;
          }),
          (I.clipAngle = function (e) {
            return arguments.length
              ? ((C = +e
                  ? (0, f.default)((B = e * o.radians))
                  : ((B = null), a.default)),
                Y())
              : B * o.degrees;
          }),
          (I.clipExtent = function (e) {
            return arguments.length
              ? ((L =
                  null == e
                    ? ((W = r = l = g = null), c.default)
                    : (0, u.default)(
                        (W = +e[0][0]),
                        (r = +e[0][1]),
                        (l = +e[1][0]),
                        (g = +e[1][1]),
                      )),
                Y())
              : null == W
                ? null
                : [
                    [W, r],
                    [l, g],
                  ];
          }),
          (I.scale = function (e) {
            return arguments.length ? ((j = +e), T()) : j;
          }),
          (I.translate = function (e) {
            return arguments.length ? ((w = +e[0]), (x = +e[1]), T()) : [w, x];
          }),
          (I.center = function (e) {
            return arguments.length
              ? ((E = (e[0] % 360) * o.radians),
                (S = (e[1] % 360) * o.radians),
                T())
              : [E * o.degrees, S * o.degrees];
          }),
          (I.rotate = function (e) {
            return arguments.length
              ? ((A = (e[0] % 360) * o.radians),
                (N = (e[1] % 360) * o.radians),
                (R = e.length > 2 ? (e[2] % 360) * o.radians : 0),
                T())
              : [A * o.degrees, N * o.degrees, R * o.degrees];
          }),
          (I.angle = function (e) {
            return arguments.length
              ? ((q = (e % 360) * o.radians), T())
              : q * o.degrees;
          }),
          (I.reflectX = function (e) {
            return arguments.length ? ((k = e ? -1 : 1), T()) : k < 0;
          }),
          (I.reflectY = function (e) {
            return arguments.length ? ((z = e ? -1 : 1), T()) : z < 0;
          }),
          (I.precision = function (e) {
            return arguments.length
              ? ((_ = (0, b.default)(m, (D = e * e))), Y())
              : (0, o.sqrt)(D);
          }),
          (I.fitExtent = function (e, t) {
            return (0, s.fitExtent)(I, e, t);
          }),
          (I.fitSize = function (e, t) {
            return (0, s.fitSize)(I, e, t);
          }),
          (I.fitWidth = function (e, t) {
            return (0, s.fitWidth)(I, e, t);
          }),
          (I.fitHeight = function (e, t) {
            return (0, s.fitHeight)(I, e, t);
          }),
          function () {
            return (
              (t = e.apply(this, arguments)),
              (I.invert = t.invert && G),
              T()
            );
          }
        );
      }
    },
    3380: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolate", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "interpolateArray", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "interpolateBasis", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "interpolateBasisClosed", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "interpolateCubehelix", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "interpolateCubehelixLong", {
          enumerable: !0,
          get: function () {
            return O.cubehelixLong;
          },
        }),
        Object.defineProperty(t, "interpolateDate", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "interpolateDiscrete", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "interpolateHcl", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "interpolateHclLong", {
          enumerable: !0,
          get: function () {
            return P.hclLong;
          },
        }),
        Object.defineProperty(t, "interpolateHsl", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "interpolateHslLong", {
          enumerable: !0,
          get: function () {
            return _.hslLong;
          },
        }),
        Object.defineProperty(t, "interpolateHue", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "interpolateLab", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "interpolateNumber", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "interpolateNumberArray", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "interpolateObject", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "interpolateRgb", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "interpolateRgbBasis", {
          enumerable: !0,
          get: function () {
            return g.rgbBasis;
          },
        }),
        Object.defineProperty(t, "interpolateRgbBasisClosed", {
          enumerable: !0,
          get: function () {
            return g.rgbBasisClosed;
          },
        }),
        Object.defineProperty(t, "interpolateRound", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "interpolateString", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "interpolateTransformCss", {
          enumerable: !0,
          get: function () {
            return v.interpolateTransformCss;
          },
        }),
        Object.defineProperty(t, "interpolateTransformSvg", {
          enumerable: !0,
          get: function () {
            return v.interpolateTransformSvg;
          },
        }),
        Object.defineProperty(t, "interpolateZoom", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "piecewise", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "quantize", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }));
      var a = r(n(5309)),
        f = r(n(6296)),
        u = r(n(5312)),
        i = r(n(6294)),
        c = r(n(6297)),
        o = r(n(8513)),
        d = r(n(8514)),
        l = r(n(4724)),
        s = r(n(5313)),
        b = r(n(6298)),
        p = r(n(8515)),
        h = r(n(6299)),
        v = n(8516),
        y = r(n(8519)),
        g = w(n(6293)),
        _ = w(n(8520)),
        m = r(n(8521)),
        P = w(n(8522)),
        O = w(n(8523)),
        M = r(n(8524)),
        j = r(n(8525));
      function w(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (w = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
    },
    3593: function (e, t, n) {
      "use strict";
      function r() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    3794: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "path", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var a = r(n(8568));
    },
    3795: function (e, t, n) {
      "use strict";
      function r(e, t) {
        e && f.hasOwnProperty(e.type) && f[e.type](e, t);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var a = {
          Feature: function (e, t) {
            r(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            var n = e.features,
              a = -1,
              f = n.length;
            while (++a < f) r(n[a].geometry, t);
          },
        },
        f = {
          Sphere: function (e, t) {
            t.sphere();
          },
          Point: function (e, t) {
            ((e = e.coordinates), t.point(e[0], e[1], e[2]));
          },
          MultiPoint: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) ((e = n[r]), t.point(e[0], e[1], e[2]));
          },
          LineString: function (e, t) {
            u(e.coordinates, t, 0);
          },
          MultiLineString: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) u(n[r], t, 0);
          },
          Polygon: function (e, t) {
            i(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) i(n[r], t);
          },
          GeometryCollection: function (e, t) {
            var n = e.geometries,
              a = -1,
              f = n.length;
            while (++a < f) r(n[a], t);
          },
        };
      function u(e, t, n) {
        var r,
          a = -1,
          f = e.length - n;
        t.lineStart();
        while (++a < f) ((r = e[a]), t.point(r[0], r[1], r[2]));
        t.lineEnd();
      }
      function i(e, t) {
        var n = -1,
          r = e.length;
        t.polygonStart();
        while (++n < r) u(e[n], t, 1);
        t.polygonEnd();
      }
      function c(e, t) {
        e && a.hasOwnProperty(e.type) ? a[e.type](e, t) : r(e, t);
      }
    },
    3919: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = o),
        (t.gamma = c),
        (t.hue = i));
      var a = r(n(6295));
      function f(e, t) {
        return function (n) {
          return e + n * t;
        };
      }
      function u(e, t, n) {
        return (
          (e = Math.pow(e, n)),
          (t = Math.pow(t, n) - e),
          (n = 1 / n),
          function (r) {
            return Math.pow(e + r * t, n);
          }
        );
      }
      function i(e, t) {
        var n = t - e;
        return n
          ? f(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
          : (0, a.default)(isNaN(e) ? t : e);
      }
      function c(e) {
        return 1 === (e = +e)
          ? o
          : function (t, n) {
              return n - t ? u(t, n, e) : (0, a.default)(isNaN(t) ? n : t);
            };
      }
      function o(e, t) {
        var n = t - e;
        return n ? f(e, n) : (0, a.default)(isNaN(e) ? t : e);
      }
    },
    3921: function (e, t, n) {
      "use strict";
      function r() {
        return new a();
      }
      function a() {
        this.reset();
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (a.prototype = {
          constructor: a,
          reset: function () {
            this.s = this.t = 0;
          },
          add: function (e) {
            (u(f, e, this.t),
              u(this, f.s, this.s),
              this.s ? (this.t += f.t) : (this.s = f.t));
          },
          valueOf: function () {
            return this.s;
          },
        }));
      var f = new a();
      function u(e, t, n) {
        var r = (e.s = t + n),
          a = r - t,
          f = r - a;
        e.t = t - f + (n - a);
      }
    },
    3922: function (e, t, n) {
      "use strict";
      function r() {
        return Math.random();
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4501: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cartesian = f),
        (t.cartesianAddInPlace = c),
        (t.cartesianCross = i),
        (t.cartesianDot = u),
        (t.cartesianNormalizeInPlace = d),
        (t.cartesianScale = o),
        (t.spherical = a));
      var r = n(2827);
      function a(e) {
        return [(0, r.atan2)(e[1], e[0]), (0, r.asin)(e[2])];
      }
      function f(e) {
        var t = e[0],
          n = e[1],
          a = (0, r.cos)(n);
        return [a * (0, r.cos)(t), a * (0, r.sin)(t), (0, r.sin)(n)];
      }
      function u(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function i(e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      }
      function c(e, t) {
        ((e[0] += t[0]), (e[1] += t[1]), (e[2] += t[2]));
      }
      function o(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t];
      }
      function d(e) {
        var t = (0, r.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        ((e[0] /= t), (e[1] /= t), (e[2] /= t));
      }
    },
    4502: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.azimuthalInvert = f),
        (t.azimuthalRaw = a));
      var r = n(2827);
      function a(e) {
        return function (t, n) {
          var a = (0, r.cos)(t),
            f = (0, r.cos)(n),
            u = e(a * f);
          return [u * f * (0, r.sin)(t), u * (0, r.sin)(n)];
        };
      }
      function f(e) {
        return function (t, n) {
          var a = (0, r.sqrt)(t * t + n * n),
            f = e(a),
            u = (0, r.sin)(f),
            i = (0, r.cos)(f);
          return [(0, r.atan2)(t * u, a * i), (0, r.asin)(a && (n * u) / a)];
        };
      }
    },
    4503: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a) {
        var f,
          u = e.children,
          i = -1,
          c = u.length,
          o = e.value && (r - t) / e.value;
        while (++i < c)
          ((f = u[i]),
            (f.y0 = n),
            (f.y1 = a),
            (f.x0 = t),
            (f.x1 = t += f.value * o));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4724: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4728: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(4729);
      function a(e) {
        return ((e = (0, r.formatDecimalParts)(Math.abs(e))), e ? e[1] : NaN);
      }
    },
    4729: function (e, t, n) {
      "use strict";
      function r(e) {
        return Math.abs((e = Math.round(e))) >= 1e21
          ? e.toLocaleString("en").replace(/,/g, "")
          : e.toString(10);
      }
      function a(e, t) {
        if (
          (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var n,
          r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.formatDecimalParts = a));
    },
    4730: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = l),
        (t.rotateRadians = i));
      var a = r(n(6315)),
        f = n(2827);
      function u(e, t) {
        return [
          (0, f.abs)(e) > f.pi ? e + Math.round(-e / f.tau) * f.tau : e,
          t,
        ];
      }
      function i(e, t, n) {
        return (e %= f.tau)
          ? t || n
            ? (0, a.default)(o(e), d(t, n))
            : o(e)
          : t || n
            ? d(t, n)
            : u;
      }
      function c(e) {
        return function (t, n) {
          return (
            (t += e),
            [t > f.pi ? t - f.tau : t < -f.pi ? t + f.tau : t, n]
          );
        };
      }
      function o(e) {
        var t = c(e);
        return ((t.invert = c(-e)), t);
      }
      function d(e, t) {
        var n = (0, f.cos)(e),
          r = (0, f.sin)(e),
          a = (0, f.cos)(t),
          u = (0, f.sin)(t);
        function i(e, t) {
          var i = (0, f.cos)(t),
            c = (0, f.cos)(e) * i,
            o = (0, f.sin)(e) * i,
            d = (0, f.sin)(t),
            l = d * n + c * r;
          return [
            (0, f.atan2)(o * a - l * u, c * n - d * r),
            (0, f.asin)(l * a + o * u),
          ];
        }
        return (
          (i.invert = function (e, t) {
            var i = (0, f.cos)(t),
              c = (0, f.cos)(e) * i,
              o = (0, f.sin)(e) * i,
              d = (0, f.sin)(t),
              l = d * a - o * u;
            return [
              (0, f.atan2)(o * a + d * u, c * n + l * r),
              (0, f.asin)(l * n - c * r),
            ];
          }),
          i
        );
      }
      function l(e) {
        function t(t) {
          return (
            (t = e(t[0] * f.radians, t[1] * f.radians)),
            (t[0] *= f.degrees),
            (t[1] *= f.degrees),
            t
          );
        }
        return (
          (e = i(
            e[0] * f.radians,
            e[1] * f.radians,
            e.length > 2 ? e[2] * f.radians : 0,
          )),
          (t.invert = function (t) {
            return (
              (t = e.invert(t[0] * f.radians, t[1] * f.radians)),
              (t[0] *= f.degrees),
              (t[1] *= f.degrees),
              t
            );
          }),
          t
        );
      }
      u.invert = u;
    },
    4731: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var a = n(2827),
        f = r(n(6318)),
        u = r(n(8627)),
        i = r(n(6319)),
        c = n(3065),
        o = 1e9,
        d = -o;
      function l(e, t, n, r) {
        function l(a, f) {
          return e <= a && a <= n && t <= f && f <= r;
        }
        function s(a, f, u, i) {
          var c = 0,
            o = 0;
          if (
            null == a ||
            (c = b(a, u)) !== (o = b(f, u)) ||
            (h(a, f) < 0) ^ (u > 0)
          )
            do {
              i.point(0 === c || 3 === c ? e : n, c > 1 ? r : t);
            } while ((c = (c + u + 4) % 4) !== o);
          else i.point(f[0], f[1]);
        }
        function b(r, f) {
          return (0, a.abs)(r[0] - e) < a.epsilon
            ? f > 0
              ? 0
              : 3
            : (0, a.abs)(r[0] - n) < a.epsilon
              ? f > 0
                ? 2
                : 1
              : (0, a.abs)(r[1] - t) < a.epsilon
                ? f > 0
                  ? 1
                  : 0
                : f > 0
                  ? 3
                  : 2;
        }
        function p(e, t) {
          return h(e.x, t.x);
        }
        function h(e, t) {
          var n = b(e, 1),
            r = b(t, 1);
          return n !== r
            ? n - r
            : 0 === n
              ? t[1] - e[1]
              : 1 === n
                ? e[0] - t[0]
                : 2 === n
                  ? e[1] - t[1]
                  : t[0] - e[0];
        }
        return function (a) {
          var b,
            h,
            v,
            y,
            g,
            _,
            m,
            P,
            O,
            M,
            j,
            w = a,
            x = (0, f.default)(),
            E = {
              point: S,
              lineStart: q,
              lineEnd: k,
              polygonStart: N,
              polygonEnd: R,
            };
          function S(e, t) {
            l(e, t) && w.point(e, t);
          }
          function A() {
            for (var t = 0, n = 0, a = h.length; n < a; ++n)
              for (
                var f,
                  u,
                  i = h[n],
                  c = 1,
                  o = i.length,
                  d = i[0],
                  l = d[0],
                  s = d[1];
                c < o;
                ++c
              )
                ((f = l),
                  (u = s),
                  (d = i[c]),
                  (l = d[0]),
                  (s = d[1]),
                  u <= r
                    ? s > r && (l - f) * (r - u) > (s - u) * (e - f) && ++t
                    : s <= r && (l - f) * (r - u) < (s - u) * (e - f) && --t);
            return t;
          }
          function N() {
            ((w = x), (b = []), (h = []), (j = !0));
          }
          function R() {
            var e = A(),
              t = j && e,
              n = (b = (0, c.merge)(b)).length;
            ((t || n) &&
              (a.polygonStart(),
              t && (a.lineStart(), s(null, null, 1, a), a.lineEnd()),
              n && (0, i.default)(b, p, e, s, a),
              a.polygonEnd()),
              (w = a),
              (b = h = v = null));
          }
          function q() {
            ((E.point = z),
              h && h.push((v = [])),
              (M = !0),
              (O = !1),
              (m = P = NaN));
          }
          function k() {
            (b && (z(y, g), _ && O && x.rejoin(), b.push(x.result())),
              (E.point = S),
              O && w.lineEnd());
          }
          function z(a, f) {
            var i = l(a, f);
            if ((h && v.push([a, f]), M))
              ((y = a),
                (g = f),
                (_ = i),
                (M = !1),
                i && (w.lineStart(), w.point(a, f)));
            else if (i && O) w.point(a, f);
            else {
              var c = [
                  (m = Math.max(d, Math.min(o, m))),
                  (P = Math.max(d, Math.min(o, P))),
                ],
                s = [
                  (a = Math.max(d, Math.min(o, a))),
                  (f = Math.max(d, Math.min(o, f))),
                ];
              (0, u.default)(c, s, e, t, n, r)
                ? (O || (w.lineStart(), w.point(c[0], c[1])),
                  w.point(s[0], s[1]),
                  i || w.lineEnd(),
                  (j = !1))
                : i && (w.lineStart(), w.point(a, f), (j = !1));
            }
            ((m = a), (P = f), (O = i));
          }
          return E;
        };
      }
    },
    4732: function (e, t, n) {
      "use strict";
      function r(e) {
        return { stream: a(e) };
      }
      function a(e) {
        return function (t) {
          var n = new f();
          for (var r in e) n[r] = e[r];
          return ((n.stream = t), n);
        };
      }
      function f() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.transformer = a),
        (f.prototype = {
          constructor: f,
          point: function (e, t) {
            this.stream.point(e, t);
          },
          sphere: function () {
            this.stream.sphere();
          },
          lineStart: function () {
            this.stream.lineStart();
          },
          lineEnd: function () {
            this.stream.lineEnd();
          },
          polygonStart: function () {
            this.stream.polygonStart();
          },
          polygonEnd: function () {
            this.stream.polygonEnd();
          },
        }));
    },
    4733: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a) {
        var f,
          u = e.children,
          i = -1,
          c = u.length,
          o = e.value && (a - n) / e.value;
        while (++i < c)
          ((f = u[i]),
            (f.x0 = t),
            (f.x1 = r),
            (f.y0 = n),
            (f.y1 = n += f.value * o));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    5309: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = p));
      var a = n(3341),
        f = r(n(6293)),
        u = n(6296),
        i = r(n(6297)),
        c = r(n(4724)),
        o = r(n(6298)),
        d = r(n(6299)),
        l = r(n(6295)),
        s = b(n(5313));
      function b(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (b = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function p(e, t) {
        var n,
          r = typeof t;
        return null == t || "boolean" === r
          ? (0, l.default)(t)
          : ("number" === r
              ? c.default
              : "string" === r
                ? (n = (0, a.color)(t))
                  ? ((t = n), f.default)
                  : d.default
                : t instanceof a.color
                  ? f.default
                  : t instanceof Date
                    ? i.default
                    : (0, s.isNumberArray)(t)
                      ? s.default
                      : Array.isArray(t)
                        ? u.genericArray
                        : ("function" !== typeof t.valueOf &&
                              "function" !== typeof t.toString) ||
                            isNaN(t)
                          ? o.default
                          : c.default)(e, t);
      }
    },
    5312: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a) {
        var f = e * e,
          u = f * e;
        return (
          ((1 - 3 * e + 3 * f - u) * t +
            (4 - 6 * f + 3 * u) * n +
            (1 + 3 * e + 3 * f - 3 * u) * r +
            u * a) /
          6
        );
      }
      function a(e) {
        var t = e.length - 1;
        return function (n) {
          var a =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            f = e[a],
            u = e[a + 1],
            i = a > 0 ? e[a - 1] : 2 * f - u,
            c = a < t - 1 ? e[a + 2] : 2 * u - f;
          return r((n - a / t) * t, i, f, u, c);
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.basis = r),
        (t.default = a));
    },
    5313: function (e, t, n) {
      "use strict";
      function r(e, t) {
        t || (t = []);
        var n,
          r = e ? Math.min(t.length, e.length) : 0,
          a = t.slice();
        return function (f) {
          for (n = 0; n < r; ++n) a[n] = e[n] * (1 - f) + t[n] * f;
          return a;
        };
      }
      function a(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.isNumberArray = a));
    },
    5320: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "quadtree", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var a = r(n(8594));
    },
    5321: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a) {
        ((this.node = e),
          (this.x0 = t),
          (this.y0 = n),
          (this.x1 = r),
          (this.y1 = a));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    5322: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "FormatSpecifier", {
          enumerable: !0,
          get: function () {
            return u.FormatSpecifier;
          },
        }),
        Object.defineProperty(t, "format", {
          enumerable: !0,
          get: function () {
            return a.format;
          },
        }),
        Object.defineProperty(t, "formatDefaultLocale", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "formatLocale", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "formatPrefix", {
          enumerable: !0,
          get: function () {
            return a.formatPrefix;
          },
        }),
        Object.defineProperty(t, "formatSpecifier", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "precisionFixed", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "precisionPrefix", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "precisionRound", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }));
      var a = d(n(8612)),
        f = r(n(6310)),
        u = d(n(6311)),
        i = r(n(8619)),
        c = r(n(8620)),
        o = r(n(8621));
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
    },
    5323: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    5324: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.conicEqualAreaRaw = u),
        (t.default = i));
      var r = n(2827),
        a = n(5325),
        f = n(8638);
      function u(e, t) {
        var n = (0, r.sin)(e),
          a = (n + (0, r.sin)(t)) / 2;
        if ((0, r.abs)(a) < r.epsilon) return (0, f.cylindricalEqualAreaRaw)(e);
        var u = 1 + n * (2 * a - n),
          i = (0, r.sqrt)(u) / a;
        function c(e, t) {
          var n = (0, r.sqrt)(u - 2 * a * (0, r.sin)(t)) / a;
          return [n * (0, r.sin)((e *= a)), i - n * (0, r.cos)(e)];
        }
        return (
          (c.invert = function (e, t) {
            var n = i - t,
              f = (0, r.atan2)(e, (0, r.abs)(n)) * (0, r.sign)(n);
            return (
              n * a < 0 && (f -= r.pi * (0, r.sign)(e) * (0, r.sign)(n)),
              [f / a, (0, r.asin)((u - (e * e + n * n) * a * a) / (2 * a))]
            );
          }),
          c
        );
      }
      function i() {
        return (0, a.conicProjection)(u).scale(155.424).center([0, 33.6442]);
      }
    },
    5325: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.conicProjection = f));
      var r = n(2827),
        a = n(3342);
      function f(e) {
        var t = 0,
          n = r.pi / 3,
          f = (0, a.projectionMutator)(e),
          u = f(t, n);
        return (
          (u.parallels = function (e) {
            return arguments.length
              ? f((t = e[0] * r.radians), (n = e[1] * r.radians))
              : [t * r.degrees, n * r.degrees];
          }),
          u
        );
      }
    },
    5326: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fitExtent = i),
        (t.fitHeight = d),
        (t.fitSize = c),
        (t.fitWidth = o));
      var a = r(n(3795)),
        f = r(n(6325));
      function u(e, t, n) {
        var r = e.clipExtent && e.clipExtent();
        return (
          e.scale(150).translate([0, 0]),
          null != r && e.clipExtent(null),
          (0, a.default)(n, e.stream(f.default)),
          t(f.default.result()),
          null != r && e.clipExtent(r),
          e
        );
      }
      function i(e, t, n) {
        return u(
          e,
          function (n) {
            var r = t[1][0] - t[0][0],
              a = t[1][1] - t[0][1],
              f = Math.min(r / (n[1][0] - n[0][0]), a / (n[1][1] - n[0][1])),
              u = +t[0][0] + (r - f * (n[1][0] + n[0][0])) / 2,
              i = +t[0][1] + (a - f * (n[1][1] + n[0][1])) / 2;
            e.scale(150 * f).translate([u, i]);
          },
          n,
        );
      }
      function c(e, t, n) {
        return i(e, [[0, 0], t], n);
      }
      function o(e, t, n) {
        return u(
          e,
          function (n) {
            var r = +t,
              a = r / (n[1][0] - n[0][0]),
              f = (r - a * (n[1][0] + n[0][0])) / 2,
              u = -a * n[0][1];
            e.scale(150 * a).translate([f, u]);
          },
          n,
        );
      }
      function d(e, t, n) {
        return u(
          e,
          function (n) {
            var r = +t,
              a = r / (n[1][1] - n[0][1]),
              f = -a * n[0][0],
              u = (r - a * (n[1][1] + n[0][1])) / 2;
            e.scale(150 * a).translate([f, u]);
          },
          n,
        );
      }
    },
    5327: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.mercatorProjection = o),
        (t.mercatorRaw = i));
      var a = n(2827),
        f = r(n(4730)),
        u = r(n(3342));
      function i(e, t) {
        return [e, (0, a.log)((0, a.tan)((a.halfPi + t) / 2))];
      }
      function c() {
        return o(i).scale(961 / a.tau);
      }
      function o(e) {
        var t,
          n,
          r,
          c = (0, u.default)(e),
          o = c.center,
          d = c.scale,
          l = c.translate,
          s = c.clipExtent,
          b = null;
        function p() {
          var u = a.pi * d(),
            o = c((0, f.default)(c.rotate()).invert([0, 0]));
          return s(
            null == b
              ? [
                  [o[0] - u, o[1] - u],
                  [o[0] + u, o[1] + u],
                ]
              : e === i
                ? [
                    [Math.max(o[0] - u, b), t],
                    [Math.min(o[0] + u, n), r],
                  ]
                : [
                    [b, Math.max(o[1] - u, t)],
                    [n, Math.min(o[1] + u, r)],
                  ],
          );
        }
        return (
          (c.scale = function (e) {
            return arguments.length ? (d(e), p()) : d();
          }),
          (c.translate = function (e) {
            return arguments.length ? (l(e), p()) : l();
          }),
          (c.center = function (e) {
            return arguments.length ? (o(e), p()) : o();
          }),
          (c.clipExtent = function (e) {
            return arguments.length
              ? (null == e
                  ? (b = t = n = r = null)
                  : ((b = +e[0][0]),
                    (t = +e[0][1]),
                    (n = +e[1][0]),
                    (r = +e[1][1])),
                p())
              : null == b
                ? null
                : [
                    [b, t],
                    [n, r],
                  ];
          }),
          p()
        );
      }
      i.invert = function (e, t) {
        return [e, 2 * (0, a.atan)((0, a.exp)(t)) - a.halfPi];
      };
    },
    5328: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Node = m),
        (t.computeHeight = _),
        (t.default = h));
      var a = r(n(8653)),
        f = r(n(8654)),
        u = r(n(8655)),
        i = r(n(8656)),
        c = r(n(8657)),
        o = r(n(8658)),
        d = r(n(8659)),
        l = r(n(8660)),
        s = r(n(8661)),
        b = r(n(8662)),
        p = r(n(8663));
      function h(e, t) {
        var n,
          r,
          a,
          f,
          u,
          i = new m(e),
          c = +e.value && (i.value = e.value),
          o = [i];
        null == t && (t = y);
        while ((n = o.pop()))
          if (
            (c && (n.value = +n.data.value), (a = t(n.data)) && (u = a.length))
          )
            for (n.children = new Array(u), f = u - 1; f >= 0; --f)
              (o.push((r = n.children[f] = new m(a[f]))),
                (r.parent = n),
                (r.depth = n.depth + 1));
        return i.eachBefore(_);
      }
      function v() {
        return h(this).eachBefore(g);
      }
      function y(e) {
        return e.children;
      }
      function g(e) {
        e.data = e.data.data;
      }
      function _(e) {
        var t = 0;
        do {
          e.height = t;
        } while ((e = e.parent) && e.height < ++t);
      }
      function m(e) {
        ((this.data = e), (this.depth = this.height = 0), (this.parent = null));
      }
      m.prototype = h.prototype = {
        constructor: m,
        count: a.default,
        each: f.default,
        eachAfter: i.default,
        eachBefore: u.default,
        sum: c.default,
        sort: o.default,
        path: d.default,
        ancestors: l.default,
        descendants: s.default,
        leaves: b.default,
        links: p.default,
        copy: v,
      };
    },
    5329: function (e, t, n) {
      "use strict";
      function r(e) {
        return null == e ? null : a(e);
      }
      function a(e) {
        if ("function" !== typeof e) throw new Error();
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.optional = r),
        (t.required = a));
    },
    5330: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.phi = t.default = void 0),
        (t.squarifyRatio = i));
      var a = r(n(4503)),
        f = r(n(4733)),
        u = (t.phi = (1 + Math.sqrt(5)) / 2);
      function i(e, t, n, r, u, i) {
        var c,
          o,
          d,
          l,
          s,
          b,
          p,
          h,
          v,
          y,
          g,
          _ = [],
          m = t.children,
          P = 0,
          O = 0,
          M = m.length,
          j = t.value;
        while (P < M) {
          ((d = u - n), (l = i - r));
          do {
            s = m[O++].value;
          } while (!s && O < M);
          for (
            b = p = s,
              y = Math.max(l / d, d / l) / (j * e),
              g = s * s * y,
              v = Math.max(p / g, g / b);
            O < M;
            ++O
          ) {
            if (
              ((s += o = m[O].value),
              o < b && (b = o),
              o > p && (p = o),
              (g = s * s * y),
              (h = Math.max(p / g, g / b)),
              h > v)
            ) {
              s -= o;
              break;
            }
            v = h;
          }
          (_.push((c = { value: s, dice: d < l, children: m.slice(P, O) })),
            c.dice
              ? (0, a.default)(c, n, r, u, j ? (r += (l * s) / j) : i)
              : (0, f.default)(c, n, r, j ? (n += (d * s) / j) : u, i),
            (j -= s),
            (P = O));
        }
        return _;
      }
      t.default = (function e(t) {
        function n(e, n, r, a, f) {
          i(t, e, n, r, a, f);
        }
        return (
          (n.ratio = function (t) {
            return e((t = +t) > 1 ? t : 1);
          }),
          n
        );
      })(u);
    },
    6293: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.rgbBasisClosed = t.rgbBasis = t.default = void 0));
      var a = n(3341),
        f = r(n(5312)),
        u = r(n(6294)),
        i = c(n(3919));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      t.default = (function e(t) {
        var n = (0, i.gamma)(t);
        function r(e, t) {
          var r = n((e = (0, a.rgb)(e)).r, (t = (0, a.rgb)(t)).r),
            f = n(e.g, t.g),
            u = n(e.b, t.b),
            c = (0, i.default)(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = r(t)),
              (e.g = f(t)),
              (e.b = u(t)),
              (e.opacity = c(t)),
              e + ""
            );
          };
        }
        return ((r.gamma = e), r);
      })(1);
      function o(e) {
        return function (t) {
          var n,
            r,
            f = t.length,
            u = new Array(f),
            i = new Array(f),
            c = new Array(f);
          for (n = 0; n < f; ++n)
            ((r = (0, a.rgb)(t[n])),
              (u[n] = r.r || 0),
              (i[n] = r.g || 0),
              (c[n] = r.b || 0));
          return (
            (u = e(u)),
            (i = e(i)),
            (c = e(c)),
            (r.opacity = 1),
            function (e) {
              return ((r.r = u(e)), (r.g = i(e)), (r.b = c(e)), r + "");
            }
          );
        };
      }
      ((t.rgbBasis = o(f.default)), (t.rgbBasisClosed = o(u.default)));
    },
    6294: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(5312);
      function a(e) {
        var t = e.length;
        return function (n) {
          var a = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
            f = e[(a + t - 1) % t],
            u = e[a % t],
            i = e[(a + 1) % t],
            c = e[(a + 2) % t];
          return (0, r.basis)((n - a / t) * t, f, u, i, c);
        };
      }
    },
    6295: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6296: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.genericArray = c));
      var a = r(n(5309)),
        f = u(n(5313));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function i(e, t) {
        return ((0, f.isNumberArray)(t) ? f.default : c)(e, t);
      }
      function c(e, t) {
        var n,
          r = t ? t.length : 0,
          f = e ? Math.min(r, e.length) : 0,
          u = new Array(f),
          i = new Array(r);
        for (n = 0; n < f; ++n) u[n] = (0, a.default)(e[n], t[n]);
        for (; n < r; ++n) i[n] = t[n];
        return function (e) {
          for (n = 0; n < f; ++n) i[n] = u[n](e);
          return i;
        };
      }
    },
    6297: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = new Date();
        return (
          (e = +e),
          (t = +t),
          function (r) {
            return (n.setTime(e * (1 - r) + t * r), n);
          }
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6298: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(5309));
      function f(e, t) {
        var n,
          r = {},
          f = {};
        for (n in ((null !== e && "object" === typeof e) || (e = {}),
        (null !== t && "object" === typeof t) || (t = {}),
        t))
          n in e ? (r[n] = (0, a.default)(e[n], t[n])) : (f[n] = t[n]);
        return function (e) {
          for (n in r) f[n] = r[n](e);
          return f;
        };
      }
    },
    6299: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = r(n(4724)),
        f = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        u = new RegExp(f.source, "g");
      function i(e) {
        return function () {
          return e;
        };
      }
      function c(e) {
        return function (t) {
          return e(t) + "";
        };
      }
      function o(e, t) {
        var n,
          r,
          o,
          d = (f.lastIndex = u.lastIndex = 0),
          l = -1,
          s = [],
          b = [];
        ((e += ""), (t += ""));
        while ((n = f.exec(e)) && (r = u.exec(t)))
          ((o = r.index) > d &&
            ((o = t.slice(d, o)), s[l] ? (s[l] += o) : (s[++l] = o)),
            (n = n[0]) === (r = r[0])
              ? s[l]
                ? (s[l] += r)
                : (s[++l] = r)
              : ((s[++l] = null), b.push({ i: l, x: (0, a.default)(n, r) })),
            (d = u.lastIndex));
        return (
          d < t.length && ((o = t.slice(d)), s[l] ? (s[l] += o) : (s[++l] = o)),
          s.length < 2
            ? b[0]
              ? c(b[0].x)
              : i(t)
            : ((t = b.length),
              function (e) {
                for (var n, r = 0; r < t; ++r) s[(n = b[r]).i] = n.x(e);
                return s.join("");
              })
        );
      }
    },
    6310: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = p));
      var a = r(n(4728)),
        f = r(n(8613)),
        u = r(n(8614)),
        i = r(n(6311)),
        c = r(n(8615)),
        o = r(n(8616)),
        d = n(6312),
        l = r(n(8618)),
        s = Array.prototype.map,
        b = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function p(e) {
        var t =
            void 0 === e.grouping || void 0 === e.thousands
              ? l.default
              : (0, f.default)(s.call(e.grouping, Number), e.thousands + ""),
          n = void 0 === e.currency ? "" : e.currency[0] + "",
          r = void 0 === e.currency ? "" : e.currency[1] + "",
          p = void 0 === e.decimal ? "." : e.decimal + "",
          h =
            void 0 === e.numerals
              ? l.default
              : (0, u.default)(s.call(e.numerals, String)),
          v = void 0 === e.percent ? "%" : e.percent + "",
          y = void 0 === e.minus ? "-" : e.minus + "",
          g = void 0 === e.nan ? "NaN" : e.nan + "";
        function _(e) {
          e = (0, i.default)(e);
          var a = e.fill,
            f = e.align,
            u = e.sign,
            l = e.symbol,
            s = e.zero,
            _ = e.width,
            m = e.comma,
            P = e.precision,
            O = e.trim,
            M = e.type;
          ("n" === M
            ? ((m = !0), (M = "g"))
            : o.default[M] || (void 0 === P && (P = 12), (O = !0), (M = "g")),
            (s || ("0" === a && "=" === f)) &&
              ((s = !0), (a = "0"), (f = "=")));
          var j =
              "$" === l
                ? n
                : "#" === l && /[boxX]/.test(M)
                  ? "0" + M.toLowerCase()
                  : "",
            w = "$" === l ? r : /[%p]/.test(M) ? v : "",
            x = o.default[M],
            E = /[defgprs%]/.test(M);
          function S(e) {
            var n,
              r,
              i,
              o = j,
              l = w;
            if ("c" === M) ((l = x(e) + l), (e = ""));
            else {
              e = +e;
              var v = e < 0 || 1 / e < 0;
              if (
                ((e = isNaN(e) ? g : x(Math.abs(e), P)),
                O && (e = (0, c.default)(e)),
                v && 0 === +e && "+" !== u && (v = !1),
                (o =
                  (v ? ("(" === u ? u : y) : "-" === u || "(" === u ? "" : u) +
                  o),
                (l =
                  ("s" === M ? b[8 + d.prefixExponent / 3] : "") +
                  l +
                  (v && "(" === u ? ")" : "")),
                E)
              ) {
                ((n = -1), (r = e.length));
                while (++n < r)
                  if (((i = e.charCodeAt(n)), 48 > i || i > 57)) {
                    ((l = (46 === i ? p + e.slice(n + 1) : e.slice(n)) + l),
                      (e = e.slice(0, n)));
                    break;
                  }
              }
            }
            m && !s && (e = t(e, 1 / 0));
            var S = o.length + e.length + l.length,
              A = S < _ ? new Array(_ - S + 1).join(a) : "";
            switch (
              (m &&
                s &&
                ((e = t(A + e, A.length ? _ - l.length : 1 / 0)), (A = "")),
              f)
            ) {
              case "<":
                e = o + e + l + A;
                break;
              case "=":
                e = o + A + e + l;
                break;
              case "^":
                e = A.slice(0, (S = A.length >> 1)) + o + e + l + A.slice(S);
                break;
              default:
                e = A + o + e + l;
                break;
            }
            return h(e);
          }
          return (
            (P =
              void 0 === P
                ? 6
                : /[gprs]/.test(M)
                  ? Math.max(1, Math.min(21, P))
                  : Math.max(0, Math.min(20, P))),
            (S.toString = function () {
              return e + "";
            }),
            S
          );
        }
        function m(e, t) {
          var n = _(((e = (0, i.default)(e)), (e.type = "f"), e)),
            r =
              3 * Math.max(-8, Math.min(8, Math.floor((0, a.default)(t) / 3))),
            f = Math.pow(10, -r),
            u = b[8 + r / 3];
          return function (e) {
            return n(f * e) + u;
          };
        }
        return { format: _, formatPrefix: m };
      }
    },
    6311: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FormatSpecifier = f),
        (t.default = a));
      var r =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function a(e) {
        if (!(t = r.exec(e))) throw new Error("invalid format: " + e);
        var t;
        return new f({
          fill: t[1],
          align: t[2],
          sign: t[3],
          symbol: t[4],
          zero: t[5],
          width: t[6],
          comma: t[7],
          precision: t[8] && t[8].slice(1),
          trim: t[9],
          type: t[10],
        });
      }
      function f(e) {
        ((this.fill = void 0 === e.fill ? " " : e.fill + ""),
          (this.align = void 0 === e.align ? ">" : e.align + ""),
          (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
          (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
          (this.zero = !!e.zero),
          (this.width = void 0 === e.width ? void 0 : +e.width),
          (this.comma = !!e.comma),
          (this.precision = void 0 === e.precision ? void 0 : +e.precision),
          (this.trim = !!e.trim),
          (this.type = void 0 === e.type ? "" : e.type + ""));
      }
      ((a.prototype = f.prototype),
        (f.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        }));
    },
    6312: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.prefixExponent = void 0));
      var r = n(4729);
      function a(e, n) {
        var a = (0, r.formatDecimalParts)(e, n);
        if (!a) return e + "";
        var f = a[0],
          u = a[1],
          i =
            u -
            (t.prefixExponent =
              3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) +
            1,
          c = f.length;
        return i === c
          ? f
          : i > c
            ? f + new Array(i - c + 1).join("0")
            : i > 0
              ? f.slice(0, i) + "." + f.slice(i)
              : "0." +
                new Array(1 - i).join("0") +
                (0, r.formatDecimalParts)(e, Math.max(0, n + i - 1))[0];
      }
    },
    6313: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areaStream = t.areaRingSum = void 0),
        (t.default = m));
      var a,
        f,
        u,
        i,
        c,
        o = r(n(3921)),
        d = n(2827),
        l = r(n(3593)),
        s = r(n(3795)),
        b = (t.areaRingSum = (0, o.default)()),
        p = (0, o.default)(),
        h = (t.areaStream = {
          point: l.default,
          lineStart: l.default,
          lineEnd: l.default,
          polygonStart: function () {
            (b.reset(), (h.lineStart = v), (h.lineEnd = y));
          },
          polygonEnd: function () {
            var e = +b;
            (p.add(e < 0 ? d.tau + e : e),
              (this.lineStart = this.lineEnd = this.point = l.default));
          },
          sphere: function () {
            p.add(d.tau);
          },
        });
      function v() {
        h.point = g;
      }
      function y() {
        _(a, f);
      }
      function g(e, t) {
        ((h.point = _),
          (a = e),
          (f = t),
          (e *= d.radians),
          (t *= d.radians),
          (u = e),
          (i = (0, d.cos)((t = t / 2 + d.quarterPi))),
          (c = (0, d.sin)(t)));
      }
      function _(e, t) {
        ((e *= d.radians), (t *= d.radians), (t = t / 2 + d.quarterPi));
        var n = e - u,
          r = n >= 0 ? 1 : -1,
          a = r * n,
          f = (0, d.cos)(t),
          o = (0, d.sin)(t),
          l = c * o,
          s = i * f + l * (0, d.cos)(a),
          p = l * r * (0, d.sin)(a);
        (b.add((0, d.atan2)(p, s)), (u = e), (i = f), (c = o));
      }
      function m(e) {
        return (p.reset(), (0, s.default)(e, h), 2 * p);
      }
    },
    6314: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.circleStream = c),
        (t.default = d));
      var a = n(4501),
        f = r(n(8625)),
        u = n(2827),
        i = n(4730);
      function c(e, t, n, r, f, i) {
        if (n) {
          var c = (0, u.cos)(t),
            d = (0, u.sin)(t),
            l = r * n;
          null == f
            ? ((f = t + r * u.tau), (i = t - l / 2))
            : ((f = o(c, f)),
              (i = o(c, i)),
              (r > 0 ? f < i : f > i) && (f += r * u.tau));
          for (var s, b = f; r > 0 ? b > i : b < i; b -= l)
            ((s = (0, a.spherical)([
              c,
              -d * (0, u.cos)(b),
              -d * (0, u.sin)(b),
            ])),
              e.point(s[0], s[1]));
        }
      }
      function o(e, t) {
        ((t = (0, a.cartesian)(t)),
          (t[0] -= e),
          (0, a.cartesianNormalizeInPlace)(t));
        var n = (0, u.acos)(-t[1]);
        return ((-t[2] < 0 ? -n : n) + u.tau - u.epsilon) % u.tau;
      }
      function d() {
        var e,
          t,
          n = (0, f.default)([0, 0]),
          r = (0, f.default)(90),
          a = (0, f.default)(6),
          o = { point: d };
        function d(n, r) {
          (e.push((n = t(n, r))), (n[0] *= u.degrees), (n[1] *= u.degrees));
        }
        function l() {
          var f = n.apply(this, arguments),
            d = r.apply(this, arguments) * u.radians,
            l = a.apply(this, arguments) * u.radians;
          return (
            (e = []),
            (t = (0, i.rotateRadians)(
              -f[0] * u.radians,
              -f[1] * u.radians,
              0,
            ).invert),
            c(o, d, l, 1),
            (f = { type: "Polygon", coordinates: [e] }),
            (e = t = null),
            f
          );
        }
        return (
          (l.center = function (e) {
            return arguments.length
              ? ((n =
                  "function" === typeof e ? e : (0, f.default)([+e[0], +e[1]])),
                l)
              : n;
          }),
          (l.radius = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, f.default)(+e)), l)
              : r;
          }),
          (l.precision = function (e) {
            return arguments.length
              ? ((a = "function" === typeof e ? e : (0, f.default)(+e)), l)
              : a;
          }),
          l
        );
      }
    },
    6315: function (e, t, n) {
      "use strict";
      function r(e, t) {
        function n(n, r) {
          return ((n = e(n, r)), t(n[0], n[1]));
        }
        return (
          e.invert &&
            t.invert &&
            (n.invert = function (n, r) {
              return ((n = t.invert(n, r)), n && e.invert(n[0], n[1]));
            }),
          n
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6316: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(6317)),
        f = n(2827);
      t.default = (0, a.default)(
        function () {
          return !0;
        },
        u,
        c,
        [-f.pi, -f.halfPi],
      );
      function u(e) {
        var t,
          n = NaN,
          r = NaN,
          a = NaN;
        return {
          lineStart: function () {
            (e.lineStart(), (t = 1));
          },
          point: function (u, c) {
            var o = u > 0 ? f.pi : -f.pi,
              d = (0, f.abs)(u - n);
            ((0, f.abs)(d - f.pi) < f.epsilon
              ? (e.point(n, (r = (r + c) / 2 > 0 ? f.halfPi : -f.halfPi)),
                e.point(a, r),
                e.lineEnd(),
                e.lineStart(),
                e.point(o, r),
                e.point(u, r),
                (t = 0))
              : a !== o &&
                d >= f.pi &&
                ((0, f.abs)(n - a) < f.epsilon && (n -= a * f.epsilon),
                (0, f.abs)(u - o) < f.epsilon && (u -= o * f.epsilon),
                (r = i(n, r, u, c)),
                e.point(a, r),
                e.lineEnd(),
                e.lineStart(),
                e.point(o, r),
                (t = 0)),
              e.point((n = u), (r = c)),
              (a = o));
          },
          lineEnd: function () {
            (e.lineEnd(), (n = r = NaN));
          },
          clean: function () {
            return 2 - t;
          },
        };
      }
      function i(e, t, n, r) {
        var a,
          u,
          i = (0, f.sin)(e - n);
        return (0, f.abs)(i) > f.epsilon
          ? (0, f.atan)(
              ((0, f.sin)(t) * (u = (0, f.cos)(r)) * (0, f.sin)(n) -
                (0, f.sin)(r) * (a = (0, f.cos)(t)) * (0, f.sin)(e)) /
                (a * u * i),
            )
          : (t + r) / 2;
      }
      function c(e, t, n, r) {
        var a;
        if (null == e)
          ((a = n * f.halfPi),
            r.point(-f.pi, a),
            r.point(0, a),
            r.point(f.pi, a),
            r.point(f.pi, 0),
            r.point(f.pi, -a),
            r.point(0, -a),
            r.point(-f.pi, -a),
            r.point(-f.pi, 0),
            r.point(-f.pi, a));
        else if ((0, f.abs)(e[0] - t[0]) > f.epsilon) {
          var u = e[0] < t[0] ? f.pi : -f.pi;
          ((a = (n * u) / 2), r.point(-u, a), r.point(0, a), r.point(u, a));
        } else r.point(t[0], t[1]);
      }
    },
    6317: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = r(n(6318)),
        f = r(n(6319)),
        u = n(2827),
        i = r(n(6321)),
        c = n(3065);
      function o(e, t, n, r) {
        return function (u) {
          var o,
            s,
            b,
            p = t(u),
            h = (0, a.default)(),
            v = t(h),
            y = !1,
            g = {
              point: _,
              lineStart: P,
              lineEnd: O,
              polygonStart: function () {
                ((g.point = M),
                  (g.lineStart = j),
                  (g.lineEnd = w),
                  (s = []),
                  (o = []));
              },
              polygonEnd: function () {
                ((g.point = _),
                  (g.lineStart = P),
                  (g.lineEnd = O),
                  (s = (0, c.merge)(s)));
                var e = (0, i.default)(o, r);
                (s.length
                  ? (y || (u.polygonStart(), (y = !0)),
                    (0, f.default)(s, l, e, n, u))
                  : e &&
                    (y || (u.polygonStart(), (y = !0)),
                    u.lineStart(),
                    n(null, null, 1, u),
                    u.lineEnd()),
                  y && (u.polygonEnd(), (y = !1)),
                  (s = o = null));
              },
              sphere: function () {
                (u.polygonStart(),
                  u.lineStart(),
                  n(null, null, 1, u),
                  u.lineEnd(),
                  u.polygonEnd());
              },
            };
          function _(t, n) {
            e(t, n) && u.point(t, n);
          }
          function m(e, t) {
            p.point(e, t);
          }
          function P() {
            ((g.point = m), p.lineStart());
          }
          function O() {
            ((g.point = _), p.lineEnd());
          }
          function M(e, t) {
            (b.push([e, t]), v.point(e, t));
          }
          function j() {
            (v.lineStart(), (b = []));
          }
          function w() {
            (M(b[0][0], b[0][1]), v.lineEnd());
            var e,
              t,
              n,
              r,
              a = v.clean(),
              f = h.result(),
              i = f.length;
            if ((b.pop(), o.push(b), (b = null), i))
              if (1 & a) {
                if (((n = f[0]), (t = n.length - 1) > 0)) {
                  for (
                    y || (u.polygonStart(), (y = !0)), u.lineStart(), e = 0;
                    e < t;
                    ++e
                  )
                    u.point((r = n[e])[0], r[1]);
                  u.lineEnd();
                }
              } else
                (i > 1 && 2 & a && f.push(f.pop().concat(f.shift())),
                  s.push(f.filter(d)));
          }
          return g;
        };
      }
      function d(e) {
        return e.length > 1;
      }
      function l(e, t) {
        return (
          ((e = e.x)[0] < 0 ? e[1] - u.halfPi - u.epsilon : u.halfPi - e[1]) -
          ((t = t.x)[0] < 0 ? t[1] - u.halfPi - u.epsilon : u.halfPi - t[1])
        );
      }
    },
    6318: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(3593));
      function f() {
        var e,
          t = [];
        return {
          point: function (t, n, r) {
            e.push([t, n, r]);
          },
          lineStart: function () {
            t.push((e = []));
          },
          lineEnd: a.default,
          rejoin: function () {
            t.length > 1 && t.push(t.pop().concat(t.shift()));
          },
          result: function () {
            var n = t;
            return ((t = []), (e = null), n);
          },
        };
      }
    },
    6319: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var a = r(n(6320)),
        f = n(2827);
      function u(e, t, n, r) {
        ((this.x = e),
          (this.z = t),
          (this.o = n),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null));
      }
      function i(e, t, n, r, i) {
        var o,
          d,
          l = [],
          s = [];
        if (
          (e.forEach(function (e) {
            if (!((t = e.length - 1) <= 0)) {
              var t,
                n,
                r = e[0],
                c = e[t];
              if ((0, a.default)(r, c)) {
                if (!r[2] && !c[2]) {
                  for (i.lineStart(), o = 0; o < t; ++o)
                    i.point((r = e[o])[0], r[1]);
                  return void i.lineEnd();
                }
                c[0] += 2 * f.epsilon;
              }
              (l.push((n = new u(r, e, null, !0))),
                s.push((n.o = new u(r, null, n, !1))),
                l.push((n = new u(c, e, null, !1))),
                s.push((n.o = new u(c, null, n, !0))));
            }
          }),
          l.length)
        ) {
          for (s.sort(t), c(l), c(s), o = 0, d = s.length; o < d; ++o)
            s[o].e = n = !n;
          var b,
            p,
            h = l[0];
          while (1) {
            var v = h,
              y = !0;
            while (v.v) if ((v = v.n) === h) return;
            ((b = v.z), i.lineStart());
            do {
              if (((v.v = v.o.v = !0), v.e)) {
                if (y)
                  for (o = 0, d = b.length; o < d; ++o)
                    i.point((p = b[o])[0], p[1]);
                else r(v.x, v.n.x, 1, i);
                v = v.n;
              } else {
                if (y)
                  for (b = v.p.z, o = b.length - 1; o >= 0; --o)
                    i.point((p = b[o])[0], p[1]);
                else r(v.x, v.p.x, -1, i);
                v = v.p;
              }
              ((v = v.o), (b = v.z), (y = !y));
            } while (!v.v);
            i.lineEnd();
          }
        }
      }
      function c(e) {
        if ((t = e.length)) {
          var t,
            n,
            r = 0,
            a = e[0];
          while (++r < t) ((a.n = n = e[r]), (n.p = a), (a = n));
          ((a.n = n = e[0]), (n.p = a));
        }
      }
    },
    6320: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(2827);
      function a(e, t) {
        return (
          (0, r.abs)(e[0] - t[0]) < r.epsilon &&
          (0, r.abs)(e[1] - t[1]) < r.epsilon
        );
      }
    },
    6321: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = r(n(3921)),
        f = n(4501),
        u = n(2827),
        i = (0, a.default)();
      function c(e) {
        return (0, u.abs)(e[0]) <= u.pi
          ? e[0]
          : (0, u.sign)(e[0]) * ((((0, u.abs)(e[0]) + u.pi) % u.tau) - u.pi);
      }
      function o(e, t) {
        var n = c(t),
          r = t[1],
          a = (0, u.sin)(r),
          o = [(0, u.sin)(n), -(0, u.cos)(n), 0],
          d = 0,
          l = 0;
        (i.reset(),
          1 === a
            ? (r = u.halfPi + u.epsilon)
            : -1 === a && (r = -u.halfPi - u.epsilon));
        for (var s = 0, b = e.length; s < b; ++s)
          if ((h = (p = e[s]).length))
            for (
              var p,
                h,
                v = p[h - 1],
                y = c(v),
                g = v[1] / 2 + u.quarterPi,
                _ = (0, u.sin)(g),
                m = (0, u.cos)(g),
                P = 0;
              P < h;
              ++P, y = M, _ = w, m = x, v = O
            ) {
              var O = p[P],
                M = c(O),
                j = O[1] / 2 + u.quarterPi,
                w = (0, u.sin)(j),
                x = (0, u.cos)(j),
                E = M - y,
                S = E >= 0 ? 1 : -1,
                A = S * E,
                N = A > u.pi,
                R = _ * w;
              if (
                (i.add(
                  (0, u.atan2)(
                    R * S * (0, u.sin)(A),
                    m * x + R * (0, u.cos)(A),
                  ),
                ),
                (d += N ? E + S * u.tau : E),
                N ^ (y >= n) ^ (M >= n))
              ) {
                var q = (0, f.cartesianCross)(
                  (0, f.cartesian)(v),
                  (0, f.cartesian)(O),
                );
                (0, f.cartesianNormalizeInPlace)(q);
                var k = (0, f.cartesianCross)(o, q);
                (0, f.cartesianNormalizeInPlace)(k);
                var z = (N ^ (E >= 0) ? -1 : 1) * (0, u.asin)(k[2]);
                (r > z || (r === z && (q[0] || q[1]))) &&
                  (l += N ^ (E >= 0) ? 1 : -1);
              }
            }
        return (d < -u.epsilon || (d < u.epsilon && i < -u.epsilon)) ^ (1 & l);
      }
    },
    6322: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = n(4501),
        f = n(6314),
        u = n(2827),
        i = r(n(6320)),
        c = r(n(6317));
      function o(e) {
        var t = (0, u.cos)(e),
          n = 6 * u.radians,
          r = t > 0,
          o = (0, u.abs)(t) > u.epsilon;
        function d(t, r, a, u) {
          (0, f.circleStream)(u, e, n, a, t, r);
        }
        function l(e, n) {
          return (0, u.cos)(e) * (0, u.cos)(n) > t;
        }
        function s(e) {
          var t, n, a, f, c;
          return {
            lineStart: function () {
              ((f = a = !1), (c = 1));
            },
            point: function (d, s) {
              var h,
                v = [d, s],
                y = l(d, s),
                g = r
                  ? y
                    ? 0
                    : p(d, s)
                  : y
                    ? p(d + (d < 0 ? u.pi : -u.pi), s)
                    : 0;
              if (
                (!t && (f = a = y) && e.lineStart(),
                y !== a &&
                  ((h = b(t, v)),
                  (!h || (0, i.default)(t, h) || (0, i.default)(v, h)) &&
                    (v[2] = 1)),
                y !== a)
              )
                ((c = 0),
                  y
                    ? (e.lineStart(), (h = b(v, t)), e.point(h[0], h[1]))
                    : ((h = b(t, v)), e.point(h[0], h[1], 2), e.lineEnd()),
                  (t = h));
              else if (o && t && r ^ y) {
                var _;
                g & n ||
                  !(_ = b(v, t, !0)) ||
                  ((c = 0),
                  r
                    ? (e.lineStart(),
                      e.point(_[0][0], _[0][1]),
                      e.point(_[1][0], _[1][1]),
                      e.lineEnd())
                    : (e.point(_[1][0], _[1][1]),
                      e.lineEnd(),
                      e.lineStart(),
                      e.point(_[0][0], _[0][1], 3)));
              }
              (!y || (t && (0, i.default)(t, v)) || e.point(v[0], v[1]),
                (t = v),
                (a = y),
                (n = g));
            },
            lineEnd: function () {
              (a && e.lineEnd(), (t = null));
            },
            clean: function () {
              return c | ((f && a) << 1);
            },
          };
        }
        function b(e, n, r) {
          var f = (0, a.cartesian)(e),
            i = (0, a.cartesian)(n),
            c = [1, 0, 0],
            o = (0, a.cartesianCross)(f, i),
            d = (0, a.cartesianDot)(o, o),
            l = o[0],
            s = d - l * l;
          if (!s) return !r && e;
          var b = (t * d) / s,
            p = (-t * l) / s,
            h = (0, a.cartesianCross)(c, o),
            v = (0, a.cartesianScale)(c, b),
            y = (0, a.cartesianScale)(o, p);
          (0, a.cartesianAddInPlace)(v, y);
          var g = h,
            _ = (0, a.cartesianDot)(v, g),
            m = (0, a.cartesianDot)(g, g),
            P = _ * _ - m * ((0, a.cartesianDot)(v, v) - 1);
          if (!(P < 0)) {
            var O = (0, u.sqrt)(P),
              M = (0, a.cartesianScale)(g, (-_ - O) / m);
            if (
              ((0, a.cartesianAddInPlace)(M, v), (M = (0, a.spherical)(M)), !r)
            )
              return M;
            var j,
              w = e[0],
              x = n[0],
              E = e[1],
              S = n[1];
            x < w && ((j = w), (w = x), (x = j));
            var A = x - w,
              N = (0, u.abs)(A - u.pi) < u.epsilon,
              R = N || A < u.epsilon;
            if (
              (!N && S < E && ((j = E), (E = S), (S = j)),
              R
                ? N
                  ? (E + S > 0) ^
                    (M[1] < ((0, u.abs)(M[0] - w) < u.epsilon ? E : S))
                  : E <= M[1] && M[1] <= S
                : (A > u.pi) ^ (w <= M[0] && M[0] <= x))
            ) {
              var q = (0, a.cartesianScale)(g, (-_ + O) / m);
              return (
                (0, a.cartesianAddInPlace)(q, v),
                [M, (0, a.spherical)(q)]
              );
            }
          }
        }
        function p(t, n) {
          var a = r ? e : u.pi - e,
            f = 0;
          return (
            t < -a ? (f |= 1) : t > a && (f |= 2),
            n < -a ? (f |= 4) : n > a && (f |= 8),
            f
          );
        }
        return (0, c.default)(l, s, d, r ? [0, -e] : [-u.pi, e - u.pi]);
      }
    },
    6323: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var a = r(n(6324)),
        f = [null, null],
        u = { type: "LineString", coordinates: f };
      function i(e, t) {
        return ((f[0] = e), (f[1] = t), (0, a.default)(u));
      }
    },
    6324: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = y));
      var a,
        f,
        u,
        i = r(n(3921)),
        c = n(2827),
        o = r(n(3593)),
        d = r(n(3795)),
        l = (0, i.default)(),
        s = {
          sphere: o.default,
          point: o.default,
          lineStart: b,
          lineEnd: o.default,
          polygonStart: o.default,
          polygonEnd: o.default,
        };
      function b() {
        ((s.point = h), (s.lineEnd = p));
      }
      function p() {
        s.point = s.lineEnd = o.default;
      }
      function h(e, t) {
        ((e *= c.radians),
          (t *= c.radians),
          (a = e),
          (f = (0, c.sin)(t)),
          (u = (0, c.cos)(t)),
          (s.point = v));
      }
      function v(e, t) {
        ((e *= c.radians), (t *= c.radians));
        var n = (0, c.sin)(t),
          r = (0, c.cos)(t),
          i = (0, c.abs)(e - a),
          o = (0, c.cos)(i),
          d = (0, c.sin)(i),
          s = r * d,
          b = u * n - f * r * o,
          p = f * n + u * r * o;
        (l.add((0, c.atan2)((0, c.sqrt)(s * s + b * b), p)),
          (a = e),
          (f = n),
          (u = r));
      }
      function y(e) {
        return (l.reset(), (0, d.default)(e, s), +l);
      }
    },
    6325: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3593)),
        f = 1 / 0,
        u = f,
        i = -f,
        c = i,
        o = {
          point: d,
          lineStart: a.default,
          lineEnd: a.default,
          polygonStart: a.default,
          polygonEnd: a.default,
          result: function () {
            var e = [
              [f, u],
              [i, c],
            ];
            return ((i = c = -(u = f = 1 / 0)), e);
          },
        };
      function d(e, t) {
        (e < f && (f = e),
          e > i && (i = e),
          t < u && (u = t),
          t > c && (c = t));
      }
      t.default = o;
    },
    6326: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(5324));
      function f() {
        return (0, a.default)()
          .parallels([29.5, 45.5])
          .scale(1070)
          .translate([480, 250])
          .rotate([96, 0])
          .center([-0.6, 38.7]);
      }
    },
    6327: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = u),
        (t.equirectangularRaw = f));
      var a = r(n(3342));
      function f(e, t) {
        return [e, t];
      }
      function u() {
        return (0, a.default)(f).scale(152.63);
      }
      f.invert = f;
    },
    6328: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = d),
        (t.packEnclose = o));
      var a = r(n(6329));
      function f(e, t, n) {
        var r,
          a,
          f,
          u,
          i = e.x - t.x,
          c = e.y - t.y,
          o = i * i + c * c;
        o
          ? ((a = t.r + n.r),
            (a *= a),
            (u = e.r + n.r),
            (u *= u),
            a > u
              ? ((r = (o + u - a) / (2 * o)),
                (f = Math.sqrt(Math.max(0, u / o - r * r))),
                (n.x = e.x - r * i - f * c),
                (n.y = e.y - r * c + f * i))
              : ((r = (o + a - u) / (2 * o)),
                (f = Math.sqrt(Math.max(0, a / o - r * r))),
                (n.x = t.x + r * i - f * c),
                (n.y = t.y + r * c + f * i)))
          : ((n.x = t.x + n.r), (n.y = t.y));
      }
      function u(e, t) {
        var n = e.r + t.r - 1e-6,
          r = t.x - e.x,
          a = t.y - e.y;
        return n > 0 && n * n > r * r + a * a;
      }
      function i(e) {
        var t = e._,
          n = e.next._,
          r = t.r + n.r,
          a = (t.x * n.r + n.x * t.r) / r,
          f = (t.y * n.r + n.y * t.r) / r;
        return a * a + f * f;
      }
      function c(e) {
        ((this._ = e), (this.next = null), (this.previous = null));
      }
      function o(e) {
        if (!(o = e.length)) return 0;
        var t, n, r, o, d, l, s, b, p, h, v;
        if (((t = e[0]), (t.x = 0), (t.y = 0), !(o > 1))) return t.r;
        if (((n = e[1]), (t.x = -n.r), (n.x = t.r), (n.y = 0), !(o > 2)))
          return t.r + n.r;
        (f(n, t, (r = e[2])),
          (t = new c(t)),
          (n = new c(n)),
          (r = new c(r)),
          (t.next = r.previous = n),
          (n.next = t.previous = r),
          (r.next = n.previous = t));
        e: for (s = 3; s < o; ++s) {
          (f(t._, n._, (r = e[s])),
            (r = new c(r)),
            (b = n.next),
            (p = t.previous),
            (h = n._.r),
            (v = t._.r));
          do {
            if (h <= v) {
              if (u(b._, r._)) {
                ((n = b), (t.next = n), (n.previous = t), --s);
                continue e;
              }
              ((h += b._.r), (b = b.next));
            } else {
              if (u(p._, r._)) {
                ((t = p), (t.next = n), (n.previous = t), --s);
                continue e;
              }
              ((v += p._.r), (p = p.previous));
            }
          } while (b !== p.next);
          ((r.previous = t),
            (r.next = n),
            (t.next = n.previous = n = r),
            (d = i(t)));
          while ((r = r.next) !== n) (l = i(r)) < d && ((t = r), (d = l));
          n = t.next;
        }
        ((t = [n._]), (r = n));
        while ((r = r.next) !== n) t.push(r._);
        for (r = (0, a.default)(t), s = 0; s < o; ++s)
          ((t = e[s]), (t.x -= r.x), (t.y -= r.y));
        return r.r;
      }
      function d(e) {
        return (o(e), e);
      }
    },
    6329: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(8665);
      function a(e) {
        var t,
          n,
          a = 0,
          u = (e = (0, r.shuffle)(r.slice.call(e))).length,
          c = [];
        while (a < u)
          ((t = e[a]), n && i(n, t) ? ++a : ((n = o((c = f(c, t)))), (a = 0)));
        return n;
      }
      function f(e, t) {
        var n, r;
        if (c(t, e)) return [t];
        for (n = 0; n < e.length; ++n)
          if (u(t, e[n]) && c(l(e[n], t), e)) return [e[n], t];
        for (n = 0; n < e.length - 1; ++n)
          for (r = n + 1; r < e.length; ++r)
            if (
              u(l(e[n], e[r]), t) &&
              u(l(e[n], t), e[r]) &&
              u(l(e[r], t), e[n]) &&
              c(s(e[n], e[r], t), e)
            )
              return [e[n], e[r], t];
        throw new Error();
      }
      function u(e, t) {
        var n = e.r - t.r,
          r = t.x - e.x,
          a = t.y - e.y;
        return n < 0 || n * n < r * r + a * a;
      }
      function i(e, t) {
        var n = e.r - t.r + 1e-6,
          r = t.x - e.x,
          a = t.y - e.y;
        return n > 0 && n * n > r * r + a * a;
      }
      function c(e, t) {
        for (var n = 0; n < t.length; ++n) if (!i(e, t[n])) return !1;
        return !0;
      }
      function o(e) {
        switch (e.length) {
          case 1:
            return d(e[0]);
          case 2:
            return l(e[0], e[1]);
          case 3:
            return s(e[0], e[1], e[2]);
        }
      }
      function d(e) {
        return { x: e.x, y: e.y, r: e.r };
      }
      function l(e, t) {
        var n = e.x,
          r = e.y,
          a = e.r,
          f = t.x,
          u = t.y,
          i = t.r,
          c = f - n,
          o = u - r,
          d = i - a,
          l = Math.sqrt(c * c + o * o);
        return {
          x: (n + f + (c / l) * d) / 2,
          y: (r + u + (o / l) * d) / 2,
          r: (l + a + i) / 2,
        };
      }
      function s(e, t, n) {
        var r = e.x,
          a = e.y,
          f = e.r,
          u = t.x,
          i = t.y,
          c = t.r,
          o = n.x,
          d = n.y,
          l = n.r,
          s = r - u,
          b = r - o,
          p = a - i,
          h = a - d,
          v = c - f,
          y = l - f,
          g = r * r + a * a - f * f,
          _ = g - u * u - i * i + c * c,
          m = g - o * o - d * d + l * l,
          P = b * p - s * h,
          O = (p * m - h * _) / (2 * P) - r,
          M = (h * v - p * y) / P,
          j = (b * _ - s * m) / (2 * P) - a,
          w = (s * y - b * v) / P,
          x = M * M + w * w - 1,
          E = 2 * (f + O * M + j * w),
          S = O * O + j * j - f * f,
          A = -(x ? (E + Math.sqrt(E * E - 4 * x * S)) / (2 * x) : S / E);
        return { x: r + O + M * A, y: a + j + w * A, r: A };
      }
    },
    6330: function (e, t, n) {
      "use strict";
      function r() {
        return 0;
      }
      function a(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.constantZero = r),
        (t.default = a));
    },
    6331: function (e, t, n) {
      "use strict";
      function r(e) {
        ((e.x0 = Math.round(e.x0)),
          (e.y0 = Math.round(e.y0)),
          (e.x1 = Math.round(e.x1)),
          (e.y1 = Math.round(e.y1)));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6332: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922));
      t.default = (function e(t) {
        function n(e, n) {
          var r, a;
          return (
            (e = null == e ? 0 : +e),
            (n = null == n ? 1 : +n),
            function () {
              var f;
              if (null != r) ((f = r), (r = null));
              else
                do {
                  ((r = 2 * t() - 1), (f = 2 * t() - 1), (a = r * r + f * f));
                } while (!a || a > 1);
              return e + n * f * Math.sqrt((-2 * Math.log(a)) / a);
            }
          );
        }
        return ((n.source = e), n);
      })(a.default);
    },
    6333: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922));
      t.default = (function e(t) {
        function n(e) {
          return function () {
            for (var n = 0, r = 0; r < e; ++r) n += t();
            return n;
          };
        }
        return ((n.source = e), n);
      })(a.default);
    },
    8513: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.length;
        return function (n) {
          return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8514: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(3919);
      function a(e, t) {
        var n = (0, r.hue)(+e, +t);
        return function (e) {
          var t = n(e);
          return t - 360 * Math.floor(t / 360);
        };
      }
    },
    8515: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return Math.round(e * (1 - n) + t * n);
          }
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8516: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.interpolateTransformSvg = t.interpolateTransformCss = void 0));
      var a = r(n(4724)),
        f = n(8517);
      function u(e, t, n, r) {
        function f(e) {
          return e.length ? e.pop() + " " : "";
        }
        function u(e, r, f, u, i, c) {
          if (e !== f || r !== u) {
            var o = i.push("translate(", null, t, null, n);
            c.push(
              { i: o - 4, x: (0, a.default)(e, f) },
              { i: o - 2, x: (0, a.default)(r, u) },
            );
          } else (f || u) && i.push("translate(" + f + t + u + n);
        }
        function i(e, t, n, u) {
          e !== t
            ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
              u.push({
                i: n.push(f(n) + "rotate(", null, r) - 2,
                x: (0, a.default)(e, t),
              }))
            : t && n.push(f(n) + "rotate(" + t + r);
        }
        function c(e, t, n, u) {
          e !== t
            ? u.push({
                i: n.push(f(n) + "skewX(", null, r) - 2,
                x: (0, a.default)(e, t),
              })
            : t && n.push(f(n) + "skewX(" + t + r);
        }
        function o(e, t, n, r, u, i) {
          if (e !== n || t !== r) {
            var c = u.push(f(u) + "scale(", null, ",", null, ")");
            i.push(
              { i: c - 4, x: (0, a.default)(e, n) },
              { i: c - 2, x: (0, a.default)(t, r) },
            );
          } else
            (1 === n && 1 === r) || u.push(f(u) + "scale(" + n + "," + r + ")");
        }
        return function (t, n) {
          var r = [],
            a = [];
          return (
            (t = e(t)),
            (n = e(n)),
            u(t.translateX, t.translateY, n.translateX, n.translateY, r, a),
            i(t.rotate, n.rotate, r, a),
            c(t.skewX, n.skewX, r, a),
            o(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, a),
            (t = n = null),
            function (e) {
              var t,
                n = -1,
                f = a.length;
              while (++n < f) r[(t = a[n]).i] = t.x(e);
              return r.join("");
            }
          );
        };
      }
      ((t.interpolateTransformCss = u(f.parseCss, "px, ", "px)", "deg)")),
        (t.interpolateTransformSvg = u(f.parseSvg, ", ", ")", ")")));
    },
    8517: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseCss = o),
        (t.parseSvg = d));
      var r,
        a,
        f,
        u,
        i = c(n(8518));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function o(e) {
        return "none" === e
          ? i.identity
          : (r ||
              ((r = document.createElement("DIV")),
              (a = document.documentElement),
              (f = document.defaultView)),
            (r.style.transform = e),
            (e = f
              .getComputedStyle(a.appendChild(r), null)
              .getPropertyValue("transform")),
            a.removeChild(r),
            (e = e.slice(7, -1).split(",")),
            (0, i.default)(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
      }
      function d(e) {
        return null == e
          ? i.identity
          : (u ||
              (u = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            u.setAttribute("transform", e),
            (e = u.transform.baseVal.consolidate())
              ? ((e = e.matrix), (0, i.default)(e.a, e.b, e.c, e.d, e.e, e.f))
              : i.identity);
      }
    },
    8518: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.identity = void 0));
      var r = 180 / Math.PI;
      t.identity = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      };
      function a(e, t, n, a, f, u) {
        var i, c, o;
        return (
          (i = Math.sqrt(e * e + t * t)) && ((e /= i), (t /= i)),
          (o = e * n + t * a) && ((n -= e * o), (a -= t * o)),
          (c = Math.sqrt(n * n + a * a)) && ((n /= c), (a /= c), (o /= c)),
          e * a < t * n && ((e = -e), (t = -t), (o = -o), (i = -i)),
          {
            translateX: f,
            translateY: u,
            rotate: Math.atan2(t, e) * r,
            skewX: Math.atan(o) * r,
            scaleX: i,
            scaleY: c,
          }
        );
      }
    },
    8519: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
      var r = Math.SQRT2,
        a = 2,
        f = 4,
        u = 1e-12;
      function i(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      function c(e) {
        return ((e = Math.exp(e)) - 1 / e) / 2;
      }
      function o(e) {
        return ((e = Math.exp(2 * e)) - 1) / (e + 1);
      }
      function d(e, t) {
        var n,
          d,
          l = e[0],
          s = e[1],
          b = e[2],
          p = t[0],
          h = t[1],
          v = t[2],
          y = p - l,
          g = h - s,
          _ = y * y + g * g;
        if (_ < u)
          ((d = Math.log(v / b) / r),
            (n = function (e) {
              return [l + e * y, s + e * g, b * Math.exp(r * e * d)];
            }));
        else {
          var m = Math.sqrt(_),
            P = (v * v - b * b + f * _) / (2 * b * a * m),
            O = (v * v - b * b - f * _) / (2 * v * a * m),
            M = Math.log(Math.sqrt(P * P + 1) - P),
            j = Math.log(Math.sqrt(O * O + 1) - O);
          ((d = (j - M) / r),
            (n = function (e) {
              var t = e * d,
                n = i(M),
                f = (b / (a * m)) * (n * o(r * t + M) - c(M));
              return [l + f * y, s + f * g, (b * n) / i(r * t + M)];
            }));
        }
        return ((n.duration = 1e3 * d), n);
      }
    },
    8520: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hslLong = t.default = void 0));
      var r = n(3341),
        a = f(n(3919));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function u(e) {
        return function (t, n) {
          var f = e((t = (0, r.hsl)(t)).h, (n = (0, r.hsl)(n)).h),
            u = (0, a.default)(t.s, n.s),
            i = (0, a.default)(t.l, n.l),
            c = (0, a.default)(t.opacity, n.opacity);
          return function (e) {
            return (
              (t.h = f(e)),
              (t.s = u(e)),
              (t.l = i(e)),
              (t.opacity = c(e)),
              t + ""
            );
          };
        };
      }
      ((t.default = u(a.hue)), (t.hslLong = u(a.default)));
    },
    8521: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var a = n(3341),
        f = r(n(3919));
      function u(e, t) {
        var n = (0, f.default)((e = (0, a.lab)(e)).l, (t = (0, a.lab)(t)).l),
          r = (0, f.default)(e.a, t.a),
          u = (0, f.default)(e.b, t.b),
          i = (0, f.default)(e.opacity, t.opacity);
        return function (t) {
          return (
            (e.l = n(t)),
            (e.a = r(t)),
            (e.b = u(t)),
            (e.opacity = i(t)),
            e + ""
          );
        };
      }
    },
    8522: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hclLong = t.default = void 0));
      var r = n(3341),
        a = f(n(3919));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function u(e) {
        return function (t, n) {
          var f = e((t = (0, r.hcl)(t)).h, (n = (0, r.hcl)(n)).h),
            u = (0, a.default)(t.c, n.c),
            i = (0, a.default)(t.l, n.l),
            c = (0, a.default)(t.opacity, n.opacity);
          return function (e) {
            return (
              (t.h = f(e)),
              (t.c = u(e)),
              (t.l = i(e)),
              (t.opacity = c(e)),
              t + ""
            );
          };
        };
      }
      ((t.default = u(a.hue)), (t.hclLong = u(a.default)));
    },
    8523: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.cubehelixLong = void 0));
      var r = n(3341),
        a = f(n(3919));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function u(e) {
        return (function t(n) {
          function f(t, f) {
            var u = e((t = (0, r.cubehelix)(t)).h, (f = (0, r.cubehelix)(f)).h),
              i = (0, a.default)(t.s, f.s),
              c = (0, a.default)(t.l, f.l),
              o = (0, a.default)(t.opacity, f.opacity);
            return function (e) {
              return (
                (t.h = u(e)),
                (t.s = i(e)),
                (t.l = c(Math.pow(e, n))),
                (t.opacity = o(e)),
                t + ""
              );
            };
          }
          return ((n = +n), (f.gamma = t), f);
        })(1);
      }
      ((t.default = u(a.hue)), (t.cubehelixLong = u(a.default)));
    },
    8524: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = 0,
          r = t.length - 1,
          a = t[0],
          f = new Array(r < 0 ? 0 : r);
        while (n < r) f[n] = e(a, (a = t[++n]));
        return function (e) {
          var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
          return f[t](e - t);
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8525: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8568: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = Math.PI,
        a = 2 * r,
        f = 1e-6,
        u = a - f;
      function i() {
        ((this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = ""));
      }
      function c() {
        return new i();
      }
      i.prototype = c.prototype = {
        constructor: i,
        moveTo: function (e, t) {
          this._ +=
            "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (e, t) {
          this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
        },
        quadraticCurveTo: function (e, t, n, r) {
          this._ +=
            "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (e, t, n, r, a, f) {
          this._ +=
            "C" +
            +e +
            "," +
            +t +
            "," +
            +n +
            "," +
            +r +
            "," +
            (this._x1 = +a) +
            "," +
            (this._y1 = +f);
        },
        arcTo: function (e, t, n, a, u) {
          ((e = +e), (t = +t), (n = +n), (a = +a), (u = +u));
          var i = this._x1,
            c = this._y1,
            o = n - e,
            d = a - t,
            l = i - e,
            s = c - t,
            b = l * l + s * s;
          if (u < 0) throw new Error("negative radius: " + u);
          if (null === this._x1)
            this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
          else if (b > f)
            if (Math.abs(s * o - d * l) > f && u) {
              var p = n - i,
                h = a - c,
                v = o * o + d * d,
                y = p * p + h * h,
                g = Math.sqrt(v),
                _ = Math.sqrt(b),
                m =
                  u * Math.tan((r - Math.acos((v + b - y) / (2 * g * _))) / 2),
                P = m / _,
                O = m / g;
              (Math.abs(P - 1) > f &&
                (this._ += "L" + (e + P * l) + "," + (t + P * s)),
                (this._ +=
                  "A" +
                  u +
                  "," +
                  u +
                  ",0,0," +
                  +(s * p > l * h) +
                  "," +
                  (this._x1 = e + O * o) +
                  "," +
                  (this._y1 = t + O * d)));
            } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
          else;
        },
        arc: function (e, t, n, i, c, o) {
          ((e = +e), (t = +t), (n = +n), (o = !!o));
          var d = n * Math.cos(i),
            l = n * Math.sin(i),
            s = e + d,
            b = t + l,
            p = 1 ^ o,
            h = o ? i - c : c - i;
          if (n < 0) throw new Error("negative radius: " + n);
          (null === this._x1
            ? (this._ += "M" + s + "," + b)
            : (Math.abs(this._x1 - s) > f || Math.abs(this._y1 - b) > f) &&
              (this._ += "L" + s + "," + b),
            n &&
              (h < 0 && (h = (h % a) + a),
              h > u
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    p +
                    "," +
                    (e - d) +
                    "," +
                    (t - l) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    p +
                    "," +
                    (this._x1 = s) +
                    "," +
                    (this._y1 = b))
                : h > f &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(h >= r) +
                    "," +
                    p +
                    "," +
                    (this._x1 = e + n * Math.cos(c)) +
                    "," +
                    (this._y1 = t + n * Math.sin(c)))));
        },
        rect: function (e, t, n, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +e) +
            "," +
            (this._y0 = this._y1 = +t) +
            "h" +
            +n +
            "v" +
            +r +
            "h" +
            -n +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      t.default = c;
    },
    8594: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = y));
      var a = v(n(8595)),
        f = r(n(8596)),
        u = r(n(8597)),
        i = r(n(8598)),
        c = r(n(8599)),
        o = v(n(8600)),
        d = r(n(8601)),
        l = r(n(8602)),
        s = r(n(8603)),
        b = r(n(8604)),
        p = v(n(8605)),
        h = v(n(8606));
      function v(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (v = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function y(e, t, n) {
        var r = new g(
          null == t ? p.defaultX : t,
          null == n ? h.defaultY : n,
          NaN,
          NaN,
          NaN,
          NaN,
        );
        return null == e ? r : r.addAll(e);
      }
      function g(e, t, n, r, a, f) {
        ((this._x = e),
          (this._y = t),
          (this._x0 = n),
          (this._y0 = r),
          (this._x1 = a),
          (this._y1 = f),
          (this._root = void 0));
      }
      function _(e) {
        var t = { data: e.data },
          n = t;
        while ((e = e.next)) n = n.next = { data: e.data };
        return t;
      }
      var m = (y.prototype = g.prototype);
      ((m.copy = function () {
        var e,
          t,
          n = new g(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return n;
        if (!r.length) return ((n._root = _(r)), n);
        e = [{ source: r, target: (n._root = new Array(4)) }];
        while ((r = e.pop()))
          for (var a = 0; a < 4; ++a)
            (t = r.source[a]) &&
              (t.length
                ? e.push({ source: t, target: (r.target[a] = new Array(4)) })
                : (r.target[a] = _(t)));
        return n;
      }),
        (m.add = a.default),
        (m.addAll = a.addAll),
        (m.cover = f.default),
        (m.data = u.default),
        (m.extent = i.default),
        (m.find = c.default),
        (m.remove = o.default),
        (m.removeAll = o.removeAll),
        (m.root = d.default),
        (m.size = l.default),
        (m.visit = s.default),
        (m.visitAfter = b.default),
        (m.x = p.default),
        (m.y = h.default));
    },
    8595: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = +this._x.call(null, e),
          n = +this._y.call(null, e);
        return a(this.cover(t, n), t, n, e);
      }
      function a(e, t, n, r) {
        if (isNaN(t) || isNaN(n)) return e;
        var a,
          f,
          u,
          i,
          c,
          o,
          d,
          l,
          s,
          b = e._root,
          p = { data: r },
          h = e._x0,
          v = e._y0,
          y = e._x1,
          g = e._y1;
        if (!b) return ((e._root = p), e);
        while (b.length)
          if (
            ((o = t >= (f = (h + y) / 2)) ? (h = f) : (y = f),
            (d = n >= (u = (v + g) / 2)) ? (v = u) : (g = u),
            (a = b),
            !(b = b[(l = (d << 1) | o)]))
          )
            return ((a[l] = p), e);
        if (
          ((i = +e._x.call(null, b.data)),
          (c = +e._y.call(null, b.data)),
          t === i && n === c)
        )
          return ((p.next = b), a ? (a[l] = p) : (e._root = p), e);
        do {
          ((a = a ? (a[l] = new Array(4)) : (e._root = new Array(4))),
            (o = t >= (f = (h + y) / 2)) ? (h = f) : (y = f),
            (d = n >= (u = (v + g) / 2)) ? (v = u) : (g = u));
        } while ((l = (d << 1) | o) === (s = ((c >= u) << 1) | (i >= f)));
        return ((a[s] = b), (a[l] = p), e);
      }
      function f(e) {
        var t,
          n,
          r,
          f,
          u = e.length,
          i = new Array(u),
          c = new Array(u),
          o = 1 / 0,
          d = 1 / 0,
          l = -1 / 0,
          s = -1 / 0;
        for (n = 0; n < u; ++n)
          isNaN((r = +this._x.call(null, (t = e[n])))) ||
            isNaN((f = +this._y.call(null, t))) ||
            ((i[n] = r),
            (c[n] = f),
            r < o && (o = r),
            r > l && (l = r),
            f < d && (d = f),
            f > s && (s = f));
        if (o > l || d > s) return this;
        for (this.cover(o, d).cover(l, s), n = 0; n < u; ++n)
          a(this, i[n], c[n], e[n]);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addAll = f),
        (t.default = r));
    },
    8596: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (isNaN((e = +e)) || isNaN((t = +t))) return this;
        var n = this._x0,
          r = this._y0,
          a = this._x1,
          f = this._y1;
        if (isNaN(n))
          ((a = (n = Math.floor(e)) + 1), (f = (r = Math.floor(t)) + 1));
        else {
          var u,
            i,
            c = a - n,
            o = this._root;
          while (n > e || e >= a || r > t || t >= f)
            switch (
              ((i = ((t < r) << 1) | (e < n)),
              (u = new Array(4)),
              (u[i] = o),
              (o = u),
              (c *= 2),
              i)
            ) {
              case 0:
                ((a = n + c), (f = r + c));
                break;
              case 1:
                ((n = a - c), (f = r + c));
                break;
              case 2:
                ((a = n + c), (r = f - c));
                break;
              case 3:
                ((n = a - c), (r = f - c));
                break;
            }
          this._root && this._root.length && (this._root = o);
        }
        return (
          (this._x0 = n),
          (this._y0 = r),
          (this._x1 = a),
          (this._y1 = f),
          this
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8597: function (e, t, n) {
      "use strict";
      function r() {
        var e = [];
        return (
          this.visit(function (t) {
            if (!t.length)
              do {
                e.push(t.data);
              } while ((t = t.next));
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8598: function (e, t, n) {
      "use strict";
      function r(e) {
        return arguments.length
          ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
          : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8599: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(5321));
      function f(e, t, n) {
        var r,
          f,
          u,
          i,
          c,
          o,
          d,
          l = this._x0,
          s = this._y0,
          b = this._x1,
          p = this._y1,
          h = [],
          v = this._root;
        (v && h.push(new a.default(v, l, s, b, p)),
          null == n
            ? (n = 1 / 0)
            : ((l = e - n), (s = t - n), (b = e + n), (p = t + n), (n *= n)));
        while ((o = h.pop()))
          if (
            !(
              !(v = o.node) ||
              (f = o.x0) > b ||
              (u = o.y0) > p ||
              (i = o.x1) < l ||
              (c = o.y1) < s
            )
          )
            if (v.length) {
              var y = (f + i) / 2,
                g = (u + c) / 2;
              (h.push(
                new a.default(v[3], y, g, i, c),
                new a.default(v[2], f, g, y, c),
                new a.default(v[1], y, u, i, g),
                new a.default(v[0], f, u, y, g),
              ),
                (d = ((t >= g) << 1) | (e >= y)) &&
                  ((o = h[h.length - 1]),
                  (h[h.length - 1] = h[h.length - 1 - d]),
                  (h[h.length - 1 - d] = o)));
            } else {
              var _ = e - +this._x.call(null, v.data),
                m = t - +this._y.call(null, v.data),
                P = _ * _ + m * m;
              if (P < n) {
                var O = Math.sqrt((n = P));
                ((l = e - O),
                  (s = t - O),
                  (b = e + O),
                  (p = t + O),
                  (r = v.data));
              }
            }
        return r;
      }
    },
    8600: function (e, t, n) {
      "use strict";
      function r(e) {
        if (
          isNaN((f = +this._x.call(null, e))) ||
          isNaN((u = +this._y.call(null, e)))
        )
          return this;
        var t,
          n,
          r,
          a,
          f,
          u,
          i,
          c,
          o,
          d,
          l,
          s,
          b = this._root,
          p = this._x0,
          h = this._y0,
          v = this._x1,
          y = this._y1;
        if (!b) return this;
        if (b.length)
          while (1) {
            if (
              ((o = f >= (i = (p + v) / 2)) ? (p = i) : (v = i),
              (d = u >= (c = (h + y) / 2)) ? (h = c) : (y = c),
              (t = b),
              !(b = b[(l = (d << 1) | o)]))
            )
              return this;
            if (!b.length) break;
            (t[(l + 1) & 3] || t[(l + 2) & 3] || t[(l + 3) & 3]) &&
              ((n = t), (s = l));
          }
        while (b.data !== e) if (((r = b), !(b = b.next))) return this;
        return (
          (a = b.next) && delete b.next,
          r
            ? (a ? (r.next = a) : delete r.next, this)
            : t
              ? (a ? (t[l] = a) : delete t[l],
                (b = t[0] || t[1] || t[2] || t[3]) &&
                  b === (t[3] || t[2] || t[1] || t[0]) &&
                  !b.length &&
                  (n ? (n[s] = b) : (this._root = b)),
                this)
              : ((this._root = a), this)
        );
      }
      function a(e) {
        for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (t.removeAll = a));
    },
    8601: function (e, t, n) {
      "use strict";
      function r() {
        return this._root;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8602: function (e, t, n) {
      "use strict";
      function r() {
        var e = 0;
        return (
          this.visit(function (t) {
            if (!t.length)
              do {
                ++e;
              } while ((t = t.next));
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8603: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(5321));
      function f(e) {
        var t,
          n,
          r,
          f,
          u,
          i,
          c = [],
          o = this._root;
        o && c.push(new a.default(o, this._x0, this._y0, this._x1, this._y1));
        while ((t = c.pop()))
          if (
            !e((o = t.node), (r = t.x0), (f = t.y0), (u = t.x1), (i = t.y1)) &&
            o.length
          ) {
            var d = (r + u) / 2,
              l = (f + i) / 2;
            ((n = o[3]) && c.push(new a.default(n, d, l, u, i)),
              (n = o[2]) && c.push(new a.default(n, r, l, d, i)),
              (n = o[1]) && c.push(new a.default(n, d, f, u, l)),
              (n = o[0]) && c.push(new a.default(n, r, f, d, l)));
          }
        return this;
      }
    },
    8604: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(5321));
      function f(e) {
        var t,
          n = [],
          r = [];
        this._root &&
          n.push(
            new a.default(this._root, this._x0, this._y0, this._x1, this._y1),
          );
        while ((t = n.pop())) {
          var f = t.node;
          if (f.length) {
            var u,
              i = t.x0,
              c = t.y0,
              o = t.x1,
              d = t.y1,
              l = (i + o) / 2,
              s = (c + d) / 2;
            ((u = f[0]) && n.push(new a.default(u, i, c, l, s)),
              (u = f[1]) && n.push(new a.default(u, l, c, o, s)),
              (u = f[2]) && n.push(new a.default(u, i, s, l, d)),
              (u = f[3]) && n.push(new a.default(u, l, s, o, d)));
          }
          r.push(t);
        }
        while ((t = r.pop())) e(t.node, t.x0, t.y0, t.x1, t.y1);
        return this;
      }
    },
    8605: function (e, t, n) {
      "use strict";
      function r(e) {
        return e[0];
      }
      function a(e) {
        return arguments.length ? ((this._x = e), this) : this._x;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.defaultX = r));
    },
    8606: function (e, t, n) {
      "use strict";
      function r(e) {
        return e[1];
      }
      function a(e) {
        return arguments.length ? ((this._y = e), this) : this._y;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.defaultY = r));
    },
    8612: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = u),
        (t.formatPrefix = t.format = void 0));
      var a,
        f = r(n(6310));
      function u(e) {
        return (
          (a = (0, f.default)(e)),
          (t.format = a.format),
          (t.formatPrefix = a.formatPrefix),
          a
        );
      }
      u({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-",
      });
    },
    8613: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return function (n, r) {
          var a = n.length,
            f = [],
            u = 0,
            i = e[0],
            c = 0;
          while (a > 0 && i > 0) {
            if (
              (c + i + 1 > r && (i = Math.max(1, r - c)),
              f.push(n.substring((a -= i), a + i)),
              (c += i + 1) > r)
            )
              break;
            i = e[(u = (u + 1) % e.length)];
          }
          return f.reverse().join(t);
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8614: function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t) {
          return t.replace(/[0-9]/g, function (t) {
            return e[+t];
          });
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8615: function (e, t, n) {
      "use strict";
      function r(e) {
        e: for (var t, n = e.length, r = 1, a = -1; r < n; ++r)
          switch (e[r]) {
            case ".":
              a = t = r;
              break;
            case "0":
              (0 === a && (a = r), (t = r));
              break;
            default:
              if (!+e[r]) break e;
              a > 0 && (a = 0);
              break;
          }
        return a > 0 ? e.slice(0, a) + e.slice(t + 1) : e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8616: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(4729)),
        f = r(n(6312)),
        u = r(n(8617));
      t.default = {
        "%": function (e, t) {
          return (100 * e).toFixed(t);
        },
        b: function (e) {
          return Math.round(e).toString(2);
        },
        c: function (e) {
          return e + "";
        },
        d: a.default,
        e: function (e, t) {
          return e.toExponential(t);
        },
        f: function (e, t) {
          return e.toFixed(t);
        },
        g: function (e, t) {
          return e.toPrecision(t);
        },
        o: function (e) {
          return Math.round(e).toString(8);
        },
        p: function (e, t) {
          return (0, u.default)(100 * e, t);
        },
        r: u.default,
        s: f.default,
        X: function (e) {
          return Math.round(e).toString(16).toUpperCase();
        },
        x: function (e) {
          return Math.round(e).toString(16);
        },
      };
    },
    8617: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(4729);
      function a(e, t) {
        var n = (0, r.formatDecimalParts)(e, t);
        if (!n) return e + "";
        var a = n[0],
          f = n[1];
        return f < 0
          ? "0." + new Array(-f).join("0") + a
          : a.length > f + 1
            ? a.slice(0, f + 1) + "." + a.slice(f + 1)
            : a + new Array(f - a.length + 2).join("0");
      }
    },
    8618: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8619: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(4728));
      function f(e) {
        return Math.max(0, -(0, a.default)(Math.abs(e)));
      }
    },
    8620: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(4728));
      function f(e, t) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor((0, a.default)(t) / 3))) -
            (0, a.default)(Math.abs(e)),
        );
      }
    },
    8621: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(4728));
      function f(e, t) {
        return (
          (e = Math.abs(e)),
          (t = Math.abs(t) - e),
          Math.max(0, (0, a.default)(t) - (0, a.default)(e)) + 1
        );
      }
    },
    8622: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "geoAlbers", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "geoAlbersUsa", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "geoArea", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "geoAzimuthalEqualArea", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "geoAzimuthalEqualAreaRaw", {
          enumerable: !0,
          get: function () {
            return m.azimuthalEqualAreaRaw;
          },
        }),
        Object.defineProperty(t, "geoAzimuthalEquidistant", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "geoAzimuthalEquidistantRaw", {
          enumerable: !0,
          get: function () {
            return P.azimuthalEquidistantRaw;
          },
        }),
        Object.defineProperty(t, "geoBounds", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "geoCentroid", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "geoCircle", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "geoClipAntimeridian", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "geoClipCircle", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "geoClipExtent", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "geoClipRectangle", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "geoConicConformal", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "geoConicConformalRaw", {
          enumerable: !0,
          get: function () {
            return O.conicConformalRaw;
          },
        }),
        Object.defineProperty(t, "geoConicEqualArea", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "geoConicEqualAreaRaw", {
          enumerable: !0,
          get: function () {
            return M.conicEqualAreaRaw;
          },
        }),
        Object.defineProperty(t, "geoConicEquidistant", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "geoConicEquidistantRaw", {
          enumerable: !0,
          get: function () {
            return j.conicEquidistantRaw;
          },
        }),
        Object.defineProperty(t, "geoContains", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "geoDistance", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "geoEqualEarth", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "geoEqualEarthRaw", {
          enumerable: !0,
          get: function () {
            return w.equalEarthRaw;
          },
        }),
        Object.defineProperty(t, "geoEquirectangular", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "geoEquirectangularRaw", {
          enumerable: !0,
          get: function () {
            return x.equirectangularRaw;
          },
        }),
        Object.defineProperty(t, "geoGnomonic", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, "geoGnomonicRaw", {
          enumerable: !0,
          get: function () {
            return E.gnomonicRaw;
          },
        }),
        Object.defineProperty(t, "geoGraticule", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "geoGraticule10", {
          enumerable: !0,
          get: function () {
            return p.graticule10;
          },
        }),
        Object.defineProperty(t, "geoIdentity", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(t, "geoInterpolate", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "geoLength", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "geoMercator", {
          enumerable: !0,
          get: function () {
            return N.default;
          },
        }),
        Object.defineProperty(t, "geoMercatorRaw", {
          enumerable: !0,
          get: function () {
            return N.mercatorRaw;
          },
        }),
        Object.defineProperty(t, "geoNaturalEarth1", {
          enumerable: !0,
          get: function () {
            return R.default;
          },
        }),
        Object.defineProperty(t, "geoNaturalEarth1Raw", {
          enumerable: !0,
          get: function () {
            return R.naturalEarth1Raw;
          },
        }),
        Object.defineProperty(t, "geoOrthographic", {
          enumerable: !0,
          get: function () {
            return q.default;
          },
        }),
        Object.defineProperty(t, "geoOrthographicRaw", {
          enumerable: !0,
          get: function () {
            return q.orthographicRaw;
          },
        }),
        Object.defineProperty(t, "geoPath", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "geoProjection", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(t, "geoProjectionMutator", {
          enumerable: !0,
          get: function () {
            return A.projectionMutator;
          },
        }),
        Object.defineProperty(t, "geoRotation", {
          enumerable: !0,
          get: function () {
            return B.default;
          },
        }),
        Object.defineProperty(t, "geoStereographic", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "geoStereographicRaw", {
          enumerable: !0,
          get: function () {
            return k.stereographicRaw;
          },
        }),
        Object.defineProperty(t, "geoStream", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(t, "geoTransform", {
          enumerable: !0,
          get: function () {
            return W.default;
          },
        }),
        Object.defineProperty(t, "geoTransverseMercator", {
          enumerable: !0,
          get: function () {
            return z.default;
          },
        }),
        Object.defineProperty(t, "geoTransverseMercatorRaw", {
          enumerable: !0,
          get: function () {
            return z.transverseMercatorRaw;
          },
        }));
      var a = r(n(6313)),
        f = r(n(8623)),
        u = r(n(8624)),
        i = r(n(6314)),
        c = r(n(6316)),
        o = r(n(6322)),
        d = r(n(8626)),
        l = r(n(4731)),
        s = r(n(8628)),
        b = r(n(6323)),
        p = L(n(8629)),
        h = r(n(8630)),
        v = r(n(6324)),
        y = r(n(8631)),
        g = r(n(6326)),
        _ = r(n(8639)),
        m = L(n(8640)),
        P = L(n(8641)),
        O = L(n(8642)),
        M = L(n(5324)),
        j = L(n(8643)),
        w = L(n(8644)),
        x = L(n(6327)),
        E = L(n(8645)),
        S = r(n(8646)),
        A = L(n(3342)),
        N = L(n(5327)),
        R = L(n(8647)),
        q = L(n(8648)),
        k = L(n(8649)),
        z = L(n(8650)),
        B = r(n(4730)),
        C = r(n(3795)),
        W = r(n(4732));
      function L(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (L = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
    },
    8623: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = R));
      var a,
        f,
        u,
        i,
        c,
        o,
        d,
        l,
        s,
        b,
        p = r(n(3921)),
        h = n(6313),
        v = n(4501),
        y = n(2827),
        g = r(n(3795)),
        _ = (0, p.default)(),
        m = {
          point: P,
          lineStart: M,
          lineEnd: j,
          polygonStart: function () {
            ((m.point = w),
              (m.lineStart = x),
              (m.lineEnd = E),
              _.reset(),
              h.areaStream.polygonStart());
          },
          polygonEnd: function () {
            (h.areaStream.polygonEnd(),
              (m.point = P),
              (m.lineStart = M),
              (m.lineEnd = j),
              h.areaRingSum < 0
                ? ((a = -(u = 180)), (f = -(i = 90)))
                : _ > y.epsilon
                  ? (i = 90)
                  : _ < -y.epsilon && (f = -90),
              (b[0] = a),
              (b[1] = u));
          },
          sphere: function () {
            ((a = -(u = 180)), (f = -(i = 90)));
          },
        };
      function P(e, t) {
        (s.push((b = [(a = e), (u = e)])), t < f && (f = t), t > i && (i = t));
      }
      function O(e, t) {
        var n = (0, v.cartesian)([e * y.radians, t * y.radians]);
        if (l) {
          var r = (0, v.cartesianCross)(l, n),
            o = [r[1], -r[0], 0],
            d = (0, v.cartesianCross)(o, r);
          ((0, v.cartesianNormalizeInPlace)(d), (d = (0, v.spherical)(d)));
          var p,
            h = e - c,
            g = h > 0 ? 1 : -1,
            _ = d[0] * y.degrees * g,
            m = (0, y.abs)(h) > 180;
          (m ^ (g * c < _ && _ < g * e)
            ? ((p = d[1] * y.degrees), p > i && (i = p))
            : ((_ = ((_ + 360) % 360) - 180),
              m ^ (g * c < _ && _ < g * e)
                ? ((p = -d[1] * y.degrees), p < f && (f = p))
                : (t < f && (f = t), t > i && (i = t))),
            m
              ? e < c
                ? S(a, e) > S(a, u) && (u = e)
                : S(e, u) > S(a, u) && (a = e)
              : u >= a
                ? (e < a && (a = e), e > u && (u = e))
                : e > c
                  ? S(a, e) > S(a, u) && (u = e)
                  : S(e, u) > S(a, u) && (a = e));
        } else s.push((b = [(a = e), (u = e)]));
        (t < f && (f = t), t > i && (i = t), (l = n), (c = e));
      }
      function M() {
        m.point = O;
      }
      function j() {
        ((b[0] = a), (b[1] = u), (m.point = P), (l = null));
      }
      function w(e, t) {
        if (l) {
          var n = e - c;
          _.add((0, y.abs)(n) > 180 ? n + (n > 0 ? 360 : -360) : n);
        } else ((o = e), (d = t));
        (h.areaStream.point(e, t), O(e, t));
      }
      function x() {
        h.areaStream.lineStart();
      }
      function E() {
        (w(o, d),
          h.areaStream.lineEnd(),
          (0, y.abs)(_) > y.epsilon && (a = -(u = 180)),
          (b[0] = a),
          (b[1] = u),
          (l = null));
      }
      function S(e, t) {
        return (t -= e) < 0 ? t + 360 : t;
      }
      function A(e, t) {
        return e[0] - t[0];
      }
      function N(e, t) {
        return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t;
      }
      function R(e) {
        var t, n, r, c, o, d, l;
        if (
          ((i = u = -(a = f = 1 / 0)),
          (s = []),
          (0, g.default)(e, m),
          (n = s.length))
        ) {
          for (s.sort(A), t = 1, r = s[0], o = [r]; t < n; ++t)
            ((c = s[t]),
              N(r, c[0]) || N(r, c[1])
                ? (S(r[0], c[1]) > S(r[0], r[1]) && (r[1] = c[1]),
                  S(c[0], r[1]) > S(r[0], r[1]) && (r[0] = c[0]))
                : o.push((r = c)));
          for (
            d = -1 / 0, n = o.length - 1, t = 0, r = o[n];
            t <= n;
            r = c, ++t
          )
            ((c = o[t]),
              (l = S(r[1], c[0])) > d && ((d = l), (a = c[0]), (u = r[1])));
        }
        return (
          (s = b = null),
          a === 1 / 0 || f === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [a, f],
                [u, i],
              ]
        );
      }
    },
    8624: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = z));
      var a,
        f,
        u,
        i,
        c,
        o,
        d,
        l,
        s,
        b,
        p,
        h,
        v,
        y,
        g,
        _,
        m = n(2827),
        P = r(n(3593)),
        O = r(n(3795)),
        M = {
          sphere: P.default,
          point: j,
          lineStart: x,
          lineEnd: A,
          polygonStart: function () {
            ((M.lineStart = N), (M.lineEnd = R));
          },
          polygonEnd: function () {
            ((M.lineStart = x), (M.lineEnd = A));
          },
        };
      function j(e, t) {
        ((e *= m.radians), (t *= m.radians));
        var n = (0, m.cos)(t);
        w(n * (0, m.cos)(e), n * (0, m.sin)(e), (0, m.sin)(t));
      }
      function w(e, t, n) {
        (++a, (u += (e - u) / a), (i += (t - i) / a), (c += (n - c) / a));
      }
      function x() {
        M.point = E;
      }
      function E(e, t) {
        ((e *= m.radians), (t *= m.radians));
        var n = (0, m.cos)(t);
        ((y = n * (0, m.cos)(e)),
          (g = n * (0, m.sin)(e)),
          (_ = (0, m.sin)(t)),
          (M.point = S),
          w(y, g, _));
      }
      function S(e, t) {
        ((e *= m.radians), (t *= m.radians));
        var n = (0, m.cos)(t),
          r = n * (0, m.cos)(e),
          a = n * (0, m.sin)(e),
          u = (0, m.sin)(t),
          i = (0, m.atan2)(
            (0, m.sqrt)(
              (i = g * u - _ * a) * i +
                (i = _ * r - y * u) * i +
                (i = y * a - g * r) * i,
            ),
            y * r + g * a + _ * u,
          );
        ((f += i),
          (o += i * (y + (y = r))),
          (d += i * (g + (g = a))),
          (l += i * (_ + (_ = u))),
          w(y, g, _));
      }
      function A() {
        M.point = j;
      }
      function N() {
        M.point = q;
      }
      function R() {
        (k(h, v), (M.point = j));
      }
      function q(e, t) {
        ((h = e), (v = t), (e *= m.radians), (t *= m.radians), (M.point = k));
        var n = (0, m.cos)(t);
        ((y = n * (0, m.cos)(e)),
          (g = n * (0, m.sin)(e)),
          (_ = (0, m.sin)(t)),
          w(y, g, _));
      }
      function k(e, t) {
        ((e *= m.radians), (t *= m.radians));
        var n = (0, m.cos)(t),
          r = n * (0, m.cos)(e),
          a = n * (0, m.sin)(e),
          u = (0, m.sin)(t),
          i = g * u - _ * a,
          c = _ * r - y * u,
          h = y * a - g * r,
          v = (0, m.sqrt)(i * i + c * c + h * h),
          P = (0, m.asin)(v),
          O = v && -P / v;
        ((s += O * i),
          (b += O * c),
          (p += O * h),
          (f += P),
          (o += P * (y + (y = r))),
          (d += P * (g + (g = a))),
          (l += P * (_ + (_ = u))),
          w(y, g, _));
      }
      function z(e) {
        ((a = f = u = i = c = o = d = l = s = b = p = 0), (0, O.default)(e, M));
        var t = s,
          n = b,
          r = p,
          h = t * t + n * n + r * r;
        return h < m.epsilon2 &&
          ((t = o),
          (n = d),
          (r = l),
          f < m.epsilon && ((t = u), (n = i), (r = c)),
          (h = t * t + n * n + r * r),
          h < m.epsilon2)
          ? [NaN, NaN]
          : [
              (0, m.atan2)(n, t) * m.degrees,
              (0, m.asin)(r / (0, m.sqrt)(h)) * m.degrees,
            ];
      }
    },
    8625: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8626: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var a = r(n(4731));
      function f() {
        var e,
          t,
          n,
          r = 0,
          f = 0,
          u = 960,
          i = 500;
        return (n = {
          stream: function (n) {
            return e && t === n ? e : (e = (0, a.default)(r, f, u, i)((t = n)));
          },
          extent: function (a) {
            return arguments.length
              ? ((r = +a[0][0]),
                (f = +a[0][1]),
                (u = +a[1][0]),
                (i = +a[1][1]),
                (e = t = null),
                n)
              : [
                  [r, f],
                  [u, i],
                ];
          },
        });
      }
    },
    8627: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a, f) {
        var u,
          i = e[0],
          c = e[1],
          o = t[0],
          d = t[1],
          l = 0,
          s = 1,
          b = o - i,
          p = d - c;
        if (((u = n - i), b || !(u > 0))) {
          if (((u /= b), b < 0)) {
            if (u < l) return;
            u < s && (s = u);
          } else if (b > 0) {
            if (u > s) return;
            u > l && (l = u);
          }
          if (((u = a - i), b || !(u < 0))) {
            if (((u /= b), b < 0)) {
              if (u > s) return;
              u > l && (l = u);
            } else if (b > 0) {
              if (u < l) return;
              u < s && (s = u);
            }
            if (((u = r - c), p || !(u > 0))) {
              if (((u /= p), p < 0)) {
                if (u < l) return;
                u < s && (s = u);
              } else if (p > 0) {
                if (u > s) return;
                u > l && (l = u);
              }
              if (((u = f - c), p || !(u < 0))) {
                if (((u /= p), p < 0)) {
                  if (u > s) return;
                  u > l && (l = u);
                } else if (p > 0) {
                  if (u < l) return;
                  u < s && (s = u);
                }
                return (
                  l > 0 && ((e[0] = i + l * b), (e[1] = c + l * p)),
                  s < 1 && ((t[0] = i + s * b), (t[1] = c + s * p)),
                  !0
                );
              }
            }
          }
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8628: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h));
      var a = r(n(6321)),
        f = r(n(6323)),
        u = n(2827),
        i = {
          Feature: function (e, t) {
            return o(e.geometry, t);
          },
          FeatureCollection: function (e, t) {
            var n = e.features,
              r = -1,
              a = n.length;
            while (++r < a) if (o(n[r].geometry, t)) return !0;
            return !1;
          },
        },
        c = {
          Sphere: function () {
            return !0;
          },
          Point: function (e, t) {
            return d(e.coordinates, t);
          },
          MultiPoint: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) if (d(n[r], t)) return !0;
            return !1;
          },
          LineString: function (e, t) {
            return l(e.coordinates, t);
          },
          MultiLineString: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) if (l(n[r], t)) return !0;
            return !1;
          },
          Polygon: function (e, t) {
            return s(e.coordinates, t);
          },
          MultiPolygon: function (e, t) {
            var n = e.coordinates,
              r = -1,
              a = n.length;
            while (++r < a) if (s(n[r], t)) return !0;
            return !1;
          },
          GeometryCollection: function (e, t) {
            var n = e.geometries,
              r = -1,
              a = n.length;
            while (++r < a) if (o(n[r], t)) return !0;
            return !1;
          },
        };
      function o(e, t) {
        return !(!e || !c.hasOwnProperty(e.type)) && c[e.type](e, t);
      }
      function d(e, t) {
        return 0 === (0, f.default)(e, t);
      }
      function l(e, t) {
        for (var n, r, a, i = 0, c = e.length; i < c; i++) {
          if (((r = (0, f.default)(e[i], t)), 0 === r)) return !0;
          if (
            i > 0 &&
            ((a = (0, f.default)(e[i], e[i - 1])),
            a > 0 &&
              n <= a &&
              r <= a &&
              (n + r - a) * (1 - Math.pow((n - r) / a, 2)) < u.epsilon2 * a)
          )
            return !0;
          n = r;
        }
        return !1;
      }
      function s(e, t) {
        return !!(0, a.default)(e.map(b), p(t));
      }
      function b(e) {
        return ((e = e.map(p)), e.pop(), e);
      }
      function p(e) {
        return [e[0] * u.radians, e[1] * u.radians];
      }
      function h(e, t) {
        return (e && i.hasOwnProperty(e.type) ? i[e.type] : o)(e, t);
      }
    },
    8629: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.graticule10 = c));
      var r = n(3065),
        a = n(2827);
      function f(e, t, n) {
        var f = (0, r.range)(e, t - a.epsilon, n).concat(t);
        return function (e) {
          return f.map(function (t) {
            return [e, t];
          });
        };
      }
      function u(e, t, n) {
        var f = (0, r.range)(e, t - a.epsilon, n).concat(t);
        return function (e) {
          return f.map(function (t) {
            return [t, e];
          });
        };
      }
      function i() {
        var e,
          t,
          n,
          i,
          c,
          o,
          d,
          l,
          s,
          b,
          p,
          h,
          v = 10,
          y = v,
          g = 90,
          _ = 360,
          m = 2.5;
        function P() {
          return { type: "MultiLineString", coordinates: O() };
        }
        function O() {
          return (0, r.range)((0, a.ceil)(i / g) * g, n, g)
            .map(p)
            .concat((0, r.range)((0, a.ceil)(l / _) * _, d, _).map(h))
            .concat(
              (0, r.range)((0, a.ceil)(t / v) * v, e, v)
                .filter(function (e) {
                  return (0, a.abs)(e % g) > a.epsilon;
                })
                .map(s),
            )
            .concat(
              (0, r.range)((0, a.ceil)(o / y) * y, c, y)
                .filter(function (e) {
                  return (0, a.abs)(e % _) > a.epsilon;
                })
                .map(b),
            );
        }
        return (
          (P.lines = function () {
            return O().map(function (e) {
              return { type: "LineString", coordinates: e };
            });
          }),
          (P.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                p(i).concat(
                  h(d).slice(1),
                  p(n).reverse().slice(1),
                  h(l).reverse().slice(1),
                ),
              ],
            };
          }),
          (P.extent = function (e) {
            return arguments.length
              ? P.extentMajor(e).extentMinor(e)
              : P.extentMinor();
          }),
          (P.extentMajor = function (e) {
            return arguments.length
              ? ((i = +e[0][0]),
                (n = +e[1][0]),
                (l = +e[0][1]),
                (d = +e[1][1]),
                i > n && ((e = i), (i = n), (n = e)),
                l > d && ((e = l), (l = d), (d = e)),
                P.precision(m))
              : [
                  [i, l],
                  [n, d],
                ];
          }),
          (P.extentMinor = function (n) {
            return arguments.length
              ? ((t = +n[0][0]),
                (e = +n[1][0]),
                (o = +n[0][1]),
                (c = +n[1][1]),
                t > e && ((n = t), (t = e), (e = n)),
                o > c && ((n = o), (o = c), (c = n)),
                P.precision(m))
              : [
                  [t, o],
                  [e, c],
                ];
          }),
          (P.step = function (e) {
            return arguments.length
              ? P.stepMajor(e).stepMinor(e)
              : P.stepMinor();
          }),
          (P.stepMajor = function (e) {
            return arguments.length ? ((g = +e[0]), (_ = +e[1]), P) : [g, _];
          }),
          (P.stepMinor = function (e) {
            return arguments.length ? ((v = +e[0]), (y = +e[1]), P) : [v, y];
          }),
          (P.precision = function (r) {
            return arguments.length
              ? ((m = +r),
                (s = f(o, c, 90)),
                (b = u(t, e, m)),
                (p = f(l, d, 90)),
                (h = u(i, n, m)),
                P)
              : m;
          }),
          P.extentMajor([
            [-180, -90 + a.epsilon],
            [180, 90 - a.epsilon],
          ]).extentMinor([
            [-180, -80 - a.epsilon],
            [180, 80 + a.epsilon],
          ])
        );
      }
      function c() {
        return i()();
      }
    },
    8630: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(2827);
      function a(e, t) {
        var n = e[0] * r.radians,
          a = e[1] * r.radians,
          f = t[0] * r.radians,
          u = t[1] * r.radians,
          i = (0, r.cos)(a),
          c = (0, r.sin)(a),
          o = (0, r.cos)(u),
          d = (0, r.sin)(u),
          l = i * (0, r.cos)(n),
          s = i * (0, r.sin)(n),
          b = o * (0, r.cos)(f),
          p = o * (0, r.sin)(f),
          h =
            2 *
            (0, r.asin)(
              (0, r.sqrt)(
                (0, r.haversin)(u - a) + i * o * (0, r.haversin)(f - n),
              ),
            ),
          v = (0, r.sin)(h),
          y = h
            ? function (e) {
                var t = (0, r.sin)((e *= h)) / v,
                  n = (0, r.sin)(h - e) / v,
                  a = n * l + t * b,
                  f = n * s + t * p,
                  u = n * c + t * d;
                return [
                  (0, r.atan2)(f, a) * r.degrees,
                  (0, r.atan2)(u, (0, r.sqrt)(a * a + f * f)) * r.degrees,
                ];
              }
            : function () {
                return [n * r.degrees, a * r.degrees];
              };
        return ((y.distance = h), y);
      }
    },
    8631: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = s));
      var a = r(n(5323)),
        f = r(n(3795)),
        u = r(n(8632)),
        i = r(n(6325)),
        c = r(n(8633)),
        o = r(n(8634)),
        d = r(n(8635)),
        l = r(n(8636));
      function s(e, t) {
        var n,
          r,
          s = 4.5;
        function b(e) {
          return (
            e &&
              ("function" === typeof s &&
                r.pointRadius(+s.apply(this, arguments)),
              (0, f.default)(e, n(r))),
            r.result()
          );
        }
        return (
          (b.area = function (e) {
            return ((0, f.default)(e, n(u.default)), u.default.result());
          }),
          (b.measure = function (e) {
            return ((0, f.default)(e, n(d.default)), d.default.result());
          }),
          (b.bounds = function (e) {
            return ((0, f.default)(e, n(i.default)), i.default.result());
          }),
          (b.centroid = function (e) {
            return ((0, f.default)(e, n(c.default)), c.default.result());
          }),
          (b.projection = function (t) {
            return arguments.length
              ? ((n = null == t ? ((e = null), a.default) : (e = t).stream), b)
              : e;
          }),
          (b.context = function (e) {
            return arguments.length
              ? ((r =
                  null == e
                    ? ((t = null), new l.default())
                    : new o.default((t = e))),
                "function" !== typeof s && r.pointRadius(s),
                b)
              : t;
          }),
          (b.pointRadius = function (e) {
            return arguments.length
              ? ((s = "function" === typeof e ? e : (r.pointRadius(+e), +e)), b)
              : s;
          }),
          b.projection(e).context(t)
        );
      }
    },
    8632: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a,
        f,
        u,
        i,
        c = r(n(3921)),
        o = n(2827),
        d = r(n(3593)),
        l = (0, c.default)(),
        s = (0, c.default)(),
        b = {
          point: d.default,
          lineStart: d.default,
          lineEnd: d.default,
          polygonStart: function () {
            ((b.lineStart = p), (b.lineEnd = y));
          },
          polygonEnd: function () {
            ((b.lineStart = b.lineEnd = b.point = d.default),
              l.add((0, o.abs)(s)),
              s.reset());
          },
          result: function () {
            var e = l / 2;
            return (l.reset(), e);
          },
        };
      function p() {
        b.point = h;
      }
      function h(e, t) {
        ((b.point = v), (a = u = e), (f = i = t));
      }
      function v(e, t) {
        (s.add(i * e - u * t), (u = e), (i = t));
      }
      function y() {
        v(a, f);
      }
      t.default = b;
    },
    8633: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r,
        a,
        f,
        u,
        i = n(2827),
        c = 0,
        o = 0,
        d = 0,
        l = 0,
        s = 0,
        b = 0,
        p = 0,
        h = 0,
        v = 0,
        y = {
          point: g,
          lineStart: _,
          lineEnd: O,
          polygonStart: function () {
            ((y.lineStart = M), (y.lineEnd = j));
          },
          polygonEnd: function () {
            ((y.point = g), (y.lineStart = _), (y.lineEnd = O));
          },
          result: function () {
            var e = v
              ? [p / v, h / v]
              : b
                ? [l / b, s / b]
                : d
                  ? [c / d, o / d]
                  : [NaN, NaN];
            return ((c = o = d = l = s = b = p = h = v = 0), e);
          },
        };
      function g(e, t) {
        ((c += e), (o += t), ++d);
      }
      function _() {
        y.point = m;
      }
      function m(e, t) {
        ((y.point = P), g((f = e), (u = t)));
      }
      function P(e, t) {
        var n = e - f,
          r = t - u,
          a = (0, i.sqrt)(n * n + r * r);
        ((l += (a * (f + e)) / 2),
          (s += (a * (u + t)) / 2),
          (b += a),
          g((f = e), (u = t)));
      }
      function O() {
        y.point = g;
      }
      function M() {
        y.point = w;
      }
      function j() {
        x(r, a);
      }
      function w(e, t) {
        ((y.point = x), g((r = f = e), (a = u = t)));
      }
      function x(e, t) {
        var n = e - f,
          r = t - u,
          a = (0, i.sqrt)(n * n + r * r);
        ((l += (a * (f + e)) / 2),
          (s += (a * (u + t)) / 2),
          (b += a),
          (a = u * e - f * t),
          (p += a * (f + e)),
          (h += a * (u + t)),
          (v += 3 * a),
          g((f = e), (u = t)));
      }
      t.default = y;
    },
    8634: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var a = n(2827),
        f = r(n(3593));
      function u(e) {
        this._context = e;
      }
      u.prototype = {
        _radius: 4.5,
        pointRadius: function (e) {
          return ((this._radius = e), this);
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (0 === this._line && this._context.closePath(), (this._point = NaN));
        },
        point: function (e, t) {
          switch (this._point) {
            case 0:
              (this._context.moveTo(e, t), (this._point = 1));
              break;
            case 1:
              this._context.lineTo(e, t);
              break;
            default:
              (this._context.moveTo(e + this._radius, t),
                this._context.arc(e, t, this._radius, 0, a.tau));
              break;
          }
        },
        result: f.default,
      };
    },
    8635: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a,
        f,
        u,
        i,
        c,
        o = r(n(3921)),
        d = n(2827),
        l = r(n(3593)),
        s = (0, o.default)(),
        b = {
          point: l.default,
          lineStart: function () {
            b.point = p;
          },
          lineEnd: function () {
            (a && h(f, u), (b.point = l.default));
          },
          polygonStart: function () {
            a = !0;
          },
          polygonEnd: function () {
            a = null;
          },
          result: function () {
            var e = +s;
            return (s.reset(), e);
          },
        };
      function p(e, t) {
        ((b.point = h), (f = i = e), (u = c = t));
      }
      function h(e, t) {
        ((i -= e),
          (c -= t),
          s.add((0, d.sqrt)(i * i + c * c)),
          (i = e),
          (c = t));
      }
      t.default = b;
    },
    8636: function (e, t, n) {
      "use strict";
      function r() {
        this._string = [];
      }
      function a(e) {
        return (
          "m0," +
          e +
          "a" +
          e +
          "," +
          e +
          " 0 1,1 0," +
          -2 * e +
          "a" +
          e +
          "," +
          e +
          " 0 1,1 0," +
          2 * e +
          "z"
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = r),
        (r.prototype = {
          _radius: 4.5,
          _circle: a(4.5),
          pointRadius: function (e) {
            return (
              (e = +e) !== this._radius &&
                ((this._radius = e), (this._circle = null)),
              this
            );
          },
          polygonStart: function () {
            this._line = 0;
          },
          polygonEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (0 === this._line && this._string.push("Z"), (this._point = NaN));
          },
          point: function (e, t) {
            switch (this._point) {
              case 0:
                (this._string.push("M", e, ",", t), (this._point = 1));
                break;
              case 1:
                this._string.push("L", e, ",", t);
                break;
              default:
                (null == this._circle && (this._circle = a(this._radius)),
                  this._string.push("M", e, ",", t, this._circle));
                break;
            }
          },
          result: function () {
            if (this._string.length) {
              var e = this._string.join("");
              return ((this._string = []), e);
            }
            return null;
          },
        }));
    },
    8637: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var r = n(4501),
        a = n(2827),
        f = n(4732),
        u = 16,
        i = (0, a.cos)(30 * a.radians);
      function c(e, t) {
        return +t ? d(e, t) : o(e);
      }
      function o(e) {
        return (0, f.transformer)({
          point: function (t, n) {
            ((t = e(t, n)), this.stream.point(t[0], t[1]));
          },
        });
      }
      function d(e, t) {
        function n(r, f, u, c, o, d, l, s, b, p, h, v, y, g) {
          var _ = l - r,
            m = s - f,
            P = _ * _ + m * m;
          if (P > 4 * t && y--) {
            var O = c + p,
              M = o + h,
              j = d + v,
              w = (0, a.sqrt)(O * O + M * M + j * j),
              x = (0, a.asin)((j /= w)),
              E =
                (0, a.abs)((0, a.abs)(j) - 1) < a.epsilon ||
                (0, a.abs)(u - b) < a.epsilon
                  ? (u + b) / 2
                  : (0, a.atan2)(M, O),
              S = e(E, x),
              A = S[0],
              N = S[1],
              R = A - r,
              q = N - f,
              k = m * R - _ * q;
            ((k * k) / P > t ||
              (0, a.abs)((_ * R + m * q) / P - 0.5) > 0.3 ||
              c * p + o * h + d * v < i) &&
              (n(r, f, u, c, o, d, A, N, E, (O /= w), (M /= w), j, y, g),
              g.point(A, N),
              n(A, N, E, O, M, j, l, s, b, p, h, v, y, g));
          }
        }
        return function (t) {
          var a,
            f,
            i,
            c,
            o,
            d,
            l,
            s,
            b,
            p,
            h,
            v,
            y = {
              point: g,
              lineStart: _,
              lineEnd: P,
              polygonStart: function () {
                (t.polygonStart(), (y.lineStart = O));
              },
              polygonEnd: function () {
                (t.polygonEnd(), (y.lineStart = _));
              },
            };
          function g(n, r) {
            ((n = e(n, r)), t.point(n[0], n[1]));
          }
          function _() {
            ((s = NaN), (y.point = m), t.lineStart());
          }
          function m(a, f) {
            var i = (0, r.cartesian)([a, f]),
              c = e(a, f);
            (n(
              s,
              b,
              l,
              p,
              h,
              v,
              (s = c[0]),
              (b = c[1]),
              (l = a),
              (p = i[0]),
              (h = i[1]),
              (v = i[2]),
              u,
              t,
            ),
              t.point(s, b));
          }
          function P() {
            ((y.point = g), t.lineEnd());
          }
          function O() {
            (_(), (y.point = M), (y.lineEnd = j));
          }
          function M(e, t) {
            (m((a = e), t),
              (f = s),
              (i = b),
              (c = p),
              (o = h),
              (d = v),
              (y.point = m));
          }
          function j() {
            (n(s, b, l, p, h, v, f, i, a, c, o, d, u, t), (y.lineEnd = P), P());
          }
          return y;
        };
      }
    },
    8638: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cylindricalEqualAreaRaw = a));
      var r = n(2827);
      function a(e) {
        var t = (0, r.cos)(e);
        function n(e, n) {
          return [e * t, (0, r.sin)(n) / t];
        }
        return (
          (n.invert = function (e, n) {
            return [e / t, (0, r.asin)(n * t)];
          }),
          n
        );
      }
    },
    8639: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = n(2827),
        f = r(n(6326)),
        u = r(n(5324)),
        i = n(5326);
      function c(e) {
        var t = e.length;
        return {
          point: function (n, r) {
            var a = -1;
            while (++a < t) e[a].point(n, r);
          },
          sphere: function () {
            var n = -1;
            while (++n < t) e[n].sphere();
          },
          lineStart: function () {
            var n = -1;
            while (++n < t) e[n].lineStart();
          },
          lineEnd: function () {
            var n = -1;
            while (++n < t) e[n].lineEnd();
          },
          polygonStart: function () {
            var n = -1;
            while (++n < t) e[n].polygonStart();
          },
          polygonEnd: function () {
            var n = -1;
            while (++n < t) e[n].polygonEnd();
          },
        };
      }
      function o() {
        var e,
          t,
          n,
          r,
          o,
          d,
          l = (0, f.default)(),
          s = (0, u.default)()
            .rotate([154, 0])
            .center([-2, 58.5])
            .parallels([55, 65]),
          b = (0, u.default)()
            .rotate([157, 0])
            .center([-3, 19.9])
            .parallels([8, 18]),
          p = {
            point: function (e, t) {
              d = [e, t];
            },
          };
        function h(e) {
          var t = e[0],
            a = e[1];
          return (
            (d = null),
            n.point(t, a),
            d || (r.point(t, a), d) || (o.point(t, a), d)
          );
        }
        function v() {
          return ((e = t = null), h);
        }
        return (
          (h.invert = function (e) {
            var t = l.scale(),
              n = l.translate(),
              r = (e[0] - n[0]) / t,
              a = (e[1] - n[1]) / t;
            return (
              a >= 0.12 && a < 0.234 && r >= -0.425 && r < -0.214
                ? s
                : a >= 0.166 && a < 0.234 && r >= -0.214 && r < -0.115
                  ? b
                  : l
            ).invert(e);
          }),
          (h.stream = function (n) {
            return e && t === n
              ? e
              : (e = c([l.stream((t = n)), s.stream(n), b.stream(n)]));
          }),
          (h.precision = function (e) {
            return arguments.length
              ? (l.precision(e), s.precision(e), b.precision(e), v())
              : l.precision();
          }),
          (h.scale = function (e) {
            return arguments.length
              ? (l.scale(e),
                s.scale(0.35 * e),
                b.scale(e),
                h.translate(l.translate()))
              : l.scale();
          }),
          (h.translate = function (e) {
            if (!arguments.length) return l.translate();
            var t = l.scale(),
              f = +e[0],
              u = +e[1];
            return (
              (n = l
                .translate(e)
                .clipExtent([
                  [f - 0.455 * t, u - 0.238 * t],
                  [f + 0.455 * t, u + 0.238 * t],
                ])
                .stream(p)),
              (r = s
                .translate([f - 0.307 * t, u + 0.201 * t])
                .clipExtent([
                  [f - 0.425 * t + a.epsilon, u + 0.12 * t + a.epsilon],
                  [f - 0.214 * t - a.epsilon, u + 0.234 * t - a.epsilon],
                ])
                .stream(p)),
              (o = b
                .translate([f - 0.205 * t, u + 0.212 * t])
                .clipExtent([
                  [f - 0.214 * t + a.epsilon, u + 0.166 * t + a.epsilon],
                  [f - 0.115 * t - a.epsilon, u + 0.234 * t - a.epsilon],
                ])
                .stream(p)),
              v()
            );
          }),
          (h.fitExtent = function (e, t) {
            return (0, i.fitExtent)(h, e, t);
          }),
          (h.fitSize = function (e, t) {
            return (0, i.fitSize)(h, e, t);
          }),
          (h.fitWidth = function (e, t) {
            return (0, i.fitWidth)(h, e, t);
          }),
          (h.fitHeight = function (e, t) {
            return (0, i.fitHeight)(h, e, t);
          }),
          h.scale(1070)
        );
      }
    },
    8640: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.azimuthalEqualAreaRaw = void 0),
        (t.default = c));
      var a = n(2827),
        f = n(4502),
        u = r(n(3342)),
        i = (t.azimuthalEqualAreaRaw = (0, f.azimuthalRaw)(function (e) {
          return (0, a.sqrt)(2 / (1 + e));
        }));
      function c() {
        return (0, u.default)(i).scale(124.75).clipAngle(179.999);
      }
      i.invert = (0, f.azimuthalInvert)(function (e) {
        return 2 * (0, a.asin)(e / 2);
      });
    },
    8641: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.azimuthalEquidistantRaw = void 0),
        (t.default = c));
      var a = n(2827),
        f = n(4502),
        u = r(n(3342)),
        i = (t.azimuthalEquidistantRaw = (0, f.azimuthalRaw)(function (e) {
          return (e = (0, a.acos)(e)) && e / (0, a.sin)(e);
        }));
      function c() {
        return (0, u.default)(i).scale(79.4188).clipAngle(179.999);
      }
      i.invert = (0, f.azimuthalInvert)(function (e) {
        return e;
      });
    },
    8642: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.conicConformalRaw = i),
        (t.default = c));
      var r = n(2827),
        a = n(5325),
        f = n(5327);
      function u(e) {
        return (0, r.tan)((r.halfPi + e) / 2);
      }
      function i(e, t) {
        var n = (0, r.cos)(e),
          a =
            e === t
              ? (0, r.sin)(e)
              : (0, r.log)(n / (0, r.cos)(t)) / (0, r.log)(u(t) / u(e)),
          i = (n * (0, r.pow)(u(e), a)) / a;
        if (!a) return f.mercatorRaw;
        function c(e, t) {
          i > 0
            ? t < -r.halfPi + r.epsilon && (t = -r.halfPi + r.epsilon)
            : t > r.halfPi - r.epsilon && (t = r.halfPi - r.epsilon);
          var n = i / (0, r.pow)(u(t), a);
          return [n * (0, r.sin)(a * e), i - n * (0, r.cos)(a * e)];
        }
        return (
          (c.invert = function (e, t) {
            var n = i - t,
              f = (0, r.sign)(a) * (0, r.sqrt)(e * e + n * n),
              u = (0, r.atan2)(e, (0, r.abs)(n)) * (0, r.sign)(n);
            return (
              n * a < 0 && (u -= r.pi * (0, r.sign)(e) * (0, r.sign)(n)),
              [u / a, 2 * (0, r.atan)((0, r.pow)(i / f, 1 / a)) - r.halfPi]
            );
          }),
          c
        );
      }
      function c() {
        return (0, a.conicProjection)(i).scale(109.5).parallels([30, 30]);
      }
    },
    8643: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.conicEquidistantRaw = u),
        (t.default = i));
      var r = n(2827),
        a = n(5325),
        f = n(6327);
      function u(e, t) {
        var n = (0, r.cos)(e),
          a = e === t ? (0, r.sin)(e) : (n - (0, r.cos)(t)) / (t - e),
          u = n / a + e;
        if ((0, r.abs)(a) < r.epsilon) return f.equirectangularRaw;
        function i(e, t) {
          var n = u - t,
            f = a * e;
          return [n * (0, r.sin)(f), u - n * (0, r.cos)(f)];
        }
        return (
          (i.invert = function (e, t) {
            var n = u - t,
              f = (0, r.atan2)(e, (0, r.abs)(n)) * (0, r.sign)(n);
            return (
              n * a < 0 && (f -= r.pi * (0, r.sign)(e) * (0, r.sign)(n)),
              [f / a, u - (0, r.sign)(a) * (0, r.sqrt)(e * e + n * n)]
            );
          }),
          i
        );
      }
      function i() {
        return (0, a.conicProjection)(u).scale(131.154).center([0, 13.9389]);
      }
    },
    8644: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = b),
        (t.equalEarthRaw = s));
      var a = r(n(3342)),
        f = n(2827),
        u = 1.340264,
        i = -0.081106,
        c = 893e-6,
        o = 0.003796,
        d = (0, f.sqrt)(3) / 2,
        l = 12;
      function s(e, t) {
        var n = (0, f.asin)(d * (0, f.sin)(t)),
          r = n * n,
          a = r * r * r;
        return [
          (e * (0, f.cos)(n)) / (d * (u + 3 * i * r + a * (7 * c + 9 * o * r))),
          n * (u + i * r + a * (c + o * r)),
        ];
      }
      function b() {
        return (0, a.default)(s).scale(177.158);
      }
      s.invert = function (e, t) {
        for (var n, r, a, s = t, b = s * s, p = b * b * b, h = 0; h < l; ++h)
          if (
            ((r = s * (u + i * b + p * (c + o * b)) - t),
            (a = u + 3 * i * b + p * (7 * c + 9 * o * b)),
            (s -= n = r / a),
            (b = s * s),
            (p = b * b * b),
            (0, f.abs)(n) < f.epsilon2)
          )
            break;
        return [
          (d * e * (u + 3 * i * b + p * (7 * c + 9 * o * b))) / (0, f.cos)(s),
          (0, f.asin)((0, f.sin)(s) / d),
        ];
      };
    },
    8645: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.gnomonicRaw = i));
      var a = n(2827),
        f = n(4502),
        u = r(n(3342));
      function i(e, t) {
        var n = (0, a.cos)(t),
          r = (0, a.cos)(e) * n;
        return [(n * (0, a.sin)(e)) / r, (0, a.sin)(t) / r];
      }
      function c() {
        return (0, u.default)(i).scale(144.049).clipAngle(60);
      }
      i.invert = (0, f.azimuthalInvert)(a.atan);
    },
    8646: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = r(n(4731)),
        f = r(n(5323)),
        u = n(4732),
        i = n(5326),
        c = n(2827);
      function o() {
        var e,
          t,
          n,
          r,
          o,
          d,
          l,
          s = 1,
          b = 0,
          p = 0,
          h = 1,
          v = 1,
          y = 0,
          g = null,
          _ = 1,
          m = 1,
          P = (0, u.transformer)({
            point: function (e, t) {
              var n = j([e, t]);
              this.stream.point(n[0], n[1]);
            },
          }),
          O = f.default;
        function M() {
          return ((_ = s * h), (m = s * v), (d = l = null), j);
        }
        function j(n) {
          var r = n[0] * _,
            a = n[1] * m;
          if (y) {
            var f = a * e - r * t;
            ((r = r * e + a * t), (a = f));
          }
          return [r + b, a + p];
        }
        return (
          (j.invert = function (n) {
            var r = n[0] - b,
              a = n[1] - p;
            if (y) {
              var f = a * e + r * t;
              ((r = r * e - a * t), (a = f));
            }
            return [r / _, a / m];
          }),
          (j.stream = function (e) {
            return d && l === e ? d : (d = P(O((l = e))));
          }),
          (j.postclip = function (e) {
            return arguments.length
              ? ((O = e), (g = n = r = o = null), M())
              : O;
          }),
          (j.clipExtent = function (e) {
            return arguments.length
              ? ((O =
                  null == e
                    ? ((g = n = r = o = null), f.default)
                    : (0, a.default)(
                        (g = +e[0][0]),
                        (n = +e[0][1]),
                        (r = +e[1][0]),
                        (o = +e[1][1]),
                      )),
                M())
              : null == g
                ? null
                : [
                    [g, n],
                    [r, o],
                  ];
          }),
          (j.scale = function (e) {
            return arguments.length ? ((s = +e), M()) : s;
          }),
          (j.translate = function (e) {
            return arguments.length ? ((b = +e[0]), (p = +e[1]), M()) : [b, p];
          }),
          (j.angle = function (n) {
            return arguments.length
              ? ((y = (n % 360) * c.radians),
                (t = (0, c.sin)(y)),
                (e = (0, c.cos)(y)),
                M())
              : y * c.degrees;
          }),
          (j.reflectX = function (e) {
            return arguments.length ? ((h = e ? -1 : 1), M()) : h < 0;
          }),
          (j.reflectY = function (e) {
            return arguments.length ? ((v = e ? -1 : 1), M()) : v < 0;
          }),
          (j.fitExtent = function (e, t) {
            return (0, i.fitExtent)(j, e, t);
          }),
          (j.fitSize = function (e, t) {
            return (0, i.fitSize)(j, e, t);
          }),
          (j.fitWidth = function (e, t) {
            return (0, i.fitWidth)(j, e, t);
          }),
          (j.fitHeight = function (e, t) {
            return (0, i.fitHeight)(j, e, t);
          }),
          j
        );
      }
    },
    8647: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.naturalEarth1Raw = u));
      var a = r(n(3342)),
        f = n(2827);
      function u(e, t) {
        var n = t * t,
          r = n * n;
        return [
          e *
            (0.8707 -
              0.131979 * n +
              r * (r * (0.003971 * n - 0.001529 * r) - 0.013791)),
          t *
            (1.007226 +
              n * (0.015085 + r * (0.028874 * n - 0.044475 - 0.005916 * r))),
        ];
      }
      function i() {
        return (0, a.default)(u).scale(175.295);
      }
      u.invert = function (e, t) {
        var n,
          r = t,
          a = 25;
        do {
          var u = r * r,
            i = u * u;
          r -= n =
            (r *
              (1.007226 +
                u * (0.015085 + i * (0.028874 * u - 0.044475 - 0.005916 * i))) -
              t) /
            (1.007226 +
              u *
                (0.045255 + i * (0.259866 * u - 0.311325 - 0.005916 * 11 * i)));
        } while ((0, f.abs)(n) > f.epsilon && --a > 0);
        return [
          e /
            (0.8707 +
              (u = r * r) *
                (u * (u * u * u * (0.003971 - 0.001529 * u) - 0.013791) -
                  0.131979)),
          r,
        ];
      };
    },
    8648: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.orthographicRaw = i));
      var a = n(2827),
        f = n(4502),
        u = r(n(3342));
      function i(e, t) {
        return [(0, a.cos)(t) * (0, a.sin)(e), (0, a.sin)(t)];
      }
      function c() {
        return (0, u.default)(i)
          .scale(249.5)
          .clipAngle(90 + a.epsilon);
      }
      i.invert = (0, f.azimuthalInvert)(a.asin);
    },
    8649: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.stereographicRaw = i));
      var a = n(2827),
        f = n(4502),
        u = r(n(3342));
      function i(e, t) {
        var n = (0, a.cos)(t),
          r = 1 + (0, a.cos)(e) * n;
        return [(n * (0, a.sin)(e)) / r, (0, a.sin)(t) / r];
      }
      function c() {
        return (0, u.default)(i).scale(250).clipAngle(142);
      }
      i.invert = (0, f.azimuthalInvert)(function (e) {
        return 2 * (0, a.atan)(e);
      });
    },
    8650: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = u),
        (t.transverseMercatorRaw = f));
      var r = n(2827),
        a = n(5327);
      function f(e, t) {
        return [(0, r.log)((0, r.tan)((r.halfPi + t) / 2)), -e];
      }
      function u() {
        var e = (0, a.mercatorProjection)(f),
          t = e.center,
          n = e.rotate;
        return (
          (e.center = function (e) {
            return arguments.length
              ? t([-e[1], e[0]])
              : ((e = t()), [e[1], -e[0]]);
          }),
          (e.rotate = function (e) {
            return arguments.length
              ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90])
              : ((e = n()), [e[0], e[1], e[2] - 90]);
          }),
          n([0, 0, 90]).scale(159.155)
        );
      }
      f.invert = function (e, t) {
        return [-t, 2 * (0, r.atan)((0, r.exp)(e)) - r.halfPi];
      };
    },
    8651: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "cluster", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "hierarchy", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "pack", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "packEnclose", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "packSiblings", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "partition", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "stratify", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "tree", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "treemap", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "treemapBinary", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "treemapDice", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "treemapResquarify", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "treemapSlice", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "treemapSliceDice", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "treemapSquarify", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }));
      var a = r(n(8652)),
        f = r(n(5328)),
        u = r(n(8664)),
        i = r(n(6328)),
        c = r(n(6329)),
        o = r(n(8666)),
        d = r(n(8667)),
        l = r(n(8668)),
        s = r(n(8669)),
        b = r(n(8670)),
        p = r(n(4503)),
        h = r(n(4733)),
        v = r(n(8671)),
        y = r(n(5330)),
        g = r(n(8672));
    },
    8652: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e.parent === t.parent ? 1 : 2;
      }
      function a(e) {
        return e.reduce(f, 0) / e.length;
      }
      function f(e, t) {
        return e + t.x;
      }
      function u(e) {
        return 1 + e.reduce(i, 0);
      }
      function i(e, t) {
        return Math.max(e, t.y);
      }
      function c(e) {
        var t;
        while ((t = e.children)) e = t[0];
        return e;
      }
      function o(e) {
        var t;
        while ((t = e.children)) e = t[t.length - 1];
        return e;
      }
      function d() {
        var e = r,
          t = 1,
          n = 1,
          f = !1;
        function i(r) {
          var i,
            d = 0;
          r.eachAfter(function (t) {
            var n = t.children;
            n
              ? ((t.x = a(n)), (t.y = u(n)))
              : ((t.x = i ? (d += e(t, i)) : 0), (t.y = 0), (i = t));
          });
          var l = c(r),
            s = o(r),
            b = l.x - e(l, s) / 2,
            p = s.x + e(s, l) / 2;
          return r.eachAfter(
            f
              ? function (e) {
                  ((e.x = (e.x - r.x) * t), (e.y = (r.y - e.y) * n));
                }
              : function (e) {
                  ((e.x = ((e.x - b) / (p - b)) * t),
                    (e.y = (1 - (r.y ? e.y / r.y : 1)) * n));
                },
          );
        }
        return (
          (i.separation = function (t) {
            return arguments.length ? ((e = t), i) : e;
          }),
          (i.size = function (e) {
            return arguments.length
              ? ((f = !1), (t = +e[0]), (n = +e[1]), i)
              : f
                ? null
                : [t, n];
          }),
          (i.nodeSize = function (e) {
            return arguments.length
              ? ((f = !0), (t = +e[0]), (n = +e[1]), i)
              : f
                ? [t, n]
                : null;
          }),
          i
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
    },
    8653: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = 0,
          n = e.children,
          r = n && n.length;
        if (r) while (--r >= 0) t += n[r].value;
        else t = 1;
        e.value = t;
      }
      function a() {
        return this.eachAfter(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
    },
    8654: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r,
          a,
          f = this,
          u = [f];
        do {
          ((t = u.reverse()), (u = []));
          while ((f = t.pop()))
            if ((e(f), (n = f.children), n))
              for (r = 0, a = n.length; r < a; ++r) u.push(n[r]);
        } while (u.length);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8655: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r = this,
          a = [r];
        while ((r = a.pop()))
          if ((e(r), (t = r.children), t))
            for (n = t.length - 1; n >= 0; --n) a.push(t[n]);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8656: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r,
          a = this,
          f = [a],
          u = [];
        while ((a = f.pop()))
          if ((u.push(a), (t = a.children), t))
            for (n = 0, r = t.length; n < r; ++n) f.push(t[n]);
        while ((a = u.pop())) e(a);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8657: function (e, t, n) {
      "use strict";
      function r(e) {
        return this.eachAfter(function (t) {
          var n = +e(t.data) || 0,
            r = t.children,
            a = r && r.length;
          while (--a >= 0) n += r[a].value;
          t.value = n;
        });
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8658: function (e, t, n) {
      "use strict";
      function r(e) {
        return this.eachBefore(function (t) {
          t.children && t.children.sort(e);
        });
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8659: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = this,
          n = a(t, e),
          r = [t];
        while (t !== n) ((t = t.parent), r.push(t));
        var f = r.length;
        while (e !== n) (r.splice(f, 0, e), (e = e.parent));
        return r;
      }
      function a(e, t) {
        if (e === t) return e;
        var n = e.ancestors(),
          r = t.ancestors(),
          a = null;
        ((e = n.pop()), (t = r.pop()));
        while (e === t) ((a = e), (e = n.pop()), (t = r.pop()));
        return a;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8660: function (e, t, n) {
      "use strict";
      function r() {
        var e = this,
          t = [e];
        while ((e = e.parent)) t.push(e);
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8661: function (e, t, n) {
      "use strict";
      function r() {
        var e = [];
        return (
          this.each(function (t) {
            e.push(t);
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8662: function (e, t, n) {
      "use strict";
      function r() {
        var e = [];
        return (
          this.eachBefore(function (t) {
            t.children || e.push(t);
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8663: function (e, t, n) {
      "use strict";
      function r() {
        var e = this,
          t = [];
        return (
          e.each(function (n) {
            n !== e && t.push({ source: n.parent, target: n });
          }),
          t
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8664: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var r = n(6328),
        a = n(5329),
        f = u(n(6330));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function i(e) {
        return Math.sqrt(e.value);
      }
      function c() {
        var e = null,
          t = 1,
          n = 1,
          r = f.constantZero;
        function u(a) {
          return (
            (a.x = t / 2),
            (a.y = n / 2),
            e
              ? a.eachBefore(o(e)).eachAfter(d(r, 0.5)).eachBefore(l(1))
              : a
                  .eachBefore(o(i))
                  .eachAfter(d(f.constantZero, 1))
                  .eachAfter(d(r, a.r / Math.min(t, n)))
                  .eachBefore(l(Math.min(t, n) / (2 * a.r))),
            a
          );
        }
        return (
          (u.radius = function (t) {
            return arguments.length ? ((e = (0, a.optional)(t)), u) : e;
          }),
          (u.size = function (e) {
            return arguments.length ? ((t = +e[0]), (n = +e[1]), u) : [t, n];
          }),
          (u.padding = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, f.default)(+e)), u)
              : r;
          }),
          u
        );
      }
      function o(e) {
        return function (t) {
          t.children || (t.r = Math.max(0, +e(t) || 0));
        };
      }
      function d(e, t) {
        return function (n) {
          if ((a = n.children)) {
            var a,
              f,
              u,
              i = a.length,
              c = e(n) * t || 0;
            if (c) for (f = 0; f < i; ++f) a[f].r += c;
            if (((u = (0, r.packEnclose)(a)), c))
              for (f = 0; f < i; ++f) a[f].r -= c;
            n.r = u + c;
          }
        };
      }
      function l(e) {
        return function (t) {
          var n = t.parent;
          ((t.r *= e), n && ((t.x = n.x + e * t.x), (t.y = n.y + e * t.y)));
        };
      }
    },
    8665: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shuffle = r),
        (t.slice = void 0));
      t.slice = Array.prototype.slice;
      function r(e) {
        var t,
          n,
          r = e.length;
        while (r)
          ((n = (Math.random() * r--) | 0),
            (t = e[r]),
            (e[r] = e[n]),
            (e[n] = t));
        return e;
      }
    },
    8666: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var a = r(n(6331)),
        f = r(n(4503));
      function u() {
        var e = 1,
          t = 1,
          n = 0,
          r = !1;
        function u(f) {
          var u = f.height + 1;
          return (
            (f.x0 = f.y0 = n),
            (f.x1 = e),
            (f.y1 = t / u),
            f.eachBefore(i(t, u)),
            r && f.eachBefore(a.default),
            f
          );
        }
        function i(e, t) {
          return function (r) {
            r.children &&
              (0, f.default)(
                r,
                r.x0,
                (e * (r.depth + 1)) / t,
                r.x1,
                (e * (r.depth + 2)) / t,
              );
            var a = r.x0,
              u = r.y0,
              i = r.x1 - n,
              c = r.y1 - n;
            (i < a && (a = i = (a + i) / 2),
              c < u && (u = c = (u + c) / 2),
              (r.x0 = a),
              (r.y0 = u),
              (r.x1 = i),
              (r.y1 = c));
          };
        }
        return (
          (u.round = function (e) {
            return arguments.length ? ((r = !!e), u) : r;
          }),
          (u.size = function (n) {
            return arguments.length ? ((e = +n[0]), (t = +n[1]), u) : [e, t];
          }),
          (u.padding = function (e) {
            return arguments.length ? ((n = +e), u) : n;
          }),
          u
        );
      }
    },
    8667: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d));
      var r = n(5329),
        a = n(5328),
        f = "$",
        u = { depth: -1 },
        i = {};
      function c(e) {
        return e.id;
      }
      function o(e) {
        return e.parentId;
      }
      function d() {
        var e = c,
          t = o;
        function n(n) {
          var r,
            c,
            o,
            d,
            l,
            s,
            b,
            p = n.length,
            h = new Array(p),
            v = {};
          for (c = 0; c < p; ++c)
            ((r = n[c]),
              (l = h[c] = new a.Node(r)),
              null != (s = e(r, c, n)) &&
                (s += "") &&
                ((b = f + (l.id = s)), (v[b] = b in v ? i : l)));
          for (c = 0; c < p; ++c)
            if (((l = h[c]), (s = t(n[c], c, n)), null != s && (s += ""))) {
              if (((d = v[f + s]), !d)) throw new Error("missing: " + s);
              if (d === i) throw new Error("ambiguous: " + s);
              (d.children ? d.children.push(l) : (d.children = [l]),
                (l.parent = d));
            } else {
              if (o) throw new Error("multiple roots");
              o = l;
            }
          if (!o) throw new Error("no root");
          if (
            ((o.parent = u),
            o
              .eachBefore(function (e) {
                ((e.depth = e.parent.depth + 1), --p);
              })
              .eachBefore(a.computeHeight),
            (o.parent = null),
            p > 0)
          )
            throw new Error("cycle");
          return o;
        }
        return (
          (n.id = function (t) {
            return arguments.length ? ((e = (0, r.required)(t)), n) : e;
          }),
          (n.parentId = function (e) {
            return arguments.length ? ((t = (0, r.required)(e)), n) : t;
          }),
          n
        );
      }
    },
    8668: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = s));
      var r = n(5328);
      function a(e, t) {
        return e.parent === t.parent ? 1 : 2;
      }
      function f(e) {
        var t = e.children;
        return t ? t[0] : e.t;
      }
      function u(e) {
        var t = e.children;
        return t ? t[t.length - 1] : e.t;
      }
      function i(e, t, n) {
        var r = n / (t.i - e.i);
        ((t.c -= r), (t.s += n), (e.c += r), (t.z += n), (t.m += n));
      }
      function c(e) {
        var t,
          n = 0,
          r = 0,
          a = e.children,
          f = a.length;
        while (--f >= 0)
          ((t = a[f]), (t.z += n), (t.m += n), (n += t.s + (r += t.c)));
      }
      function o(e, t, n) {
        return e.a.parent === t.parent ? e.a : n;
      }
      function d(e, t) {
        ((this._ = e),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = t));
      }
      function l(e) {
        var t,
          n,
          r,
          a,
          f,
          u = new d(e, 0),
          i = [u];
        while ((t = i.pop()))
          if ((r = t._.children))
            for (t.children = new Array((f = r.length)), a = f - 1; a >= 0; --a)
              (i.push((n = t.children[a] = new d(r[a], a))), (n.parent = t));
        return (((u.parent = new d(null, 0)).children = [u]), u);
      }
      function s() {
        var e = a,
          t = 1,
          n = 1,
          r = null;
        function d(a) {
          var f = l(a);
          if ((f.eachAfter(s), (f.parent.m = -f.z), f.eachBefore(b), r))
            a.eachBefore(h);
          else {
            var u = a,
              i = a,
              c = a;
            a.eachBefore(function (e) {
              (e.x < u.x && (u = e),
                e.x > i.x && (i = e),
                e.depth > c.depth && (c = e));
            });
            var o = u === i ? 1 : e(u, i) / 2,
              d = o - u.x,
              p = t / (i.x + o + d),
              v = n / (c.depth || 1);
            a.eachBefore(function (e) {
              ((e.x = (e.x + d) * p), (e.y = e.depth * v));
            });
          }
          return a;
        }
        function s(t) {
          var n = t.children,
            r = t.parent.children,
            a = t.i ? r[t.i - 1] : null;
          if (n) {
            c(t);
            var f = (n[0].z + n[n.length - 1].z) / 2;
            a ? ((t.z = a.z + e(t._, a._)), (t.m = t.z - f)) : (t.z = f);
          } else a && (t.z = a.z + e(t._, a._));
          t.parent.A = p(t, a, t.parent.A || r[0]);
        }
        function b(e) {
          ((e._.x = e.z + e.parent.m), (e.m += e.parent.m));
        }
        function p(t, n, r) {
          if (n) {
            var a,
              c = t,
              d = t,
              l = n,
              s = c.parent.children[0],
              b = c.m,
              p = d.m,
              h = l.m,
              v = s.m;
            while (((l = u(l)), (c = f(c)), l && c))
              ((s = f(s)),
                (d = u(d)),
                (d.a = t),
                (a = l.z + h - c.z - b + e(l._, c._)),
                a > 0 && (i(o(l, t, r), t, a), (b += a), (p += a)),
                (h += l.m),
                (b += c.m),
                (v += s.m),
                (p += d.m));
            (l && !u(d) && ((d.t = l), (d.m += h - p)),
              c && !f(s) && ((s.t = c), (s.m += b - v), (r = t)));
          }
          return r;
        }
        function h(e) {
          ((e.x *= t), (e.y = e.depth * n));
        }
        return (
          (d.separation = function (t) {
            return arguments.length ? ((e = t), d) : e;
          }),
          (d.size = function (e) {
            return arguments.length
              ? ((r = !1), (t = +e[0]), (n = +e[1]), d)
              : r
                ? null
                : [t, n];
          }),
          (d.nodeSize = function (e) {
            return arguments.length
              ? ((r = !0), (t = +e[0]), (n = +e[1]), d)
              : r
                ? [t, n]
                : null;
          }),
          d
        );
      }
      d.prototype = Object.create(r.Node.prototype);
    },
    8669: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var a = r(n(6331)),
        f = r(n(5330)),
        u = n(5329),
        i = c(n(6330));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
      function o() {
        var e = f.default,
          t = !1,
          n = 1,
          r = 1,
          c = [0],
          o = i.constantZero,
          d = i.constantZero,
          l = i.constantZero,
          s = i.constantZero,
          b = i.constantZero;
        function p(e) {
          return (
            (e.x0 = e.y0 = 0),
            (e.x1 = n),
            (e.y1 = r),
            e.eachBefore(h),
            (c = [0]),
            t && e.eachBefore(a.default),
            e
          );
        }
        function h(t) {
          var n = c[t.depth],
            r = t.x0 + n,
            a = t.y0 + n,
            f = t.x1 - n,
            u = t.y1 - n;
          (f < r && (r = f = (r + f) / 2),
            u < a && (a = u = (a + u) / 2),
            (t.x0 = r),
            (t.y0 = a),
            (t.x1 = f),
            (t.y1 = u),
            t.children &&
              ((n = c[t.depth + 1] = o(t) / 2),
              (r += b(t) - n),
              (a += d(t) - n),
              (f -= l(t) - n),
              (u -= s(t) - n),
              f < r && (r = f = (r + f) / 2),
              u < a && (a = u = (a + u) / 2),
              e(t, r, a, f, u)));
        }
        return (
          (p.round = function (e) {
            return arguments.length ? ((t = !!e), p) : t;
          }),
          (p.size = function (e) {
            return arguments.length ? ((n = +e[0]), (r = +e[1]), p) : [n, r];
          }),
          (p.tile = function (t) {
            return arguments.length ? ((e = (0, u.required)(t)), p) : e;
          }),
          (p.padding = function (e) {
            return arguments.length
              ? p.paddingInner(e).paddingOuter(e)
              : p.paddingInner();
          }),
          (p.paddingInner = function (e) {
            return arguments.length
              ? ((o = "function" === typeof e ? e : (0, i.default)(+e)), p)
              : o;
          }),
          (p.paddingOuter = function (e) {
            return arguments.length
              ? p.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e)
              : p.paddingTop();
          }),
          (p.paddingTop = function (e) {
            return arguments.length
              ? ((d = "function" === typeof e ? e : (0, i.default)(+e)), p)
              : d;
          }),
          (p.paddingRight = function (e) {
            return arguments.length
              ? ((l = "function" === typeof e ? e : (0, i.default)(+e)), p)
              : l;
          }),
          (p.paddingBottom = function (e) {
            return arguments.length
              ? ((s = "function" === typeof e ? e : (0, i.default)(+e)), p)
              : s;
          }),
          (p.paddingLeft = function (e) {
            return arguments.length
              ? ((b = "function" === typeof e ? e : (0, i.default)(+e)), p)
              : b;
          }),
          p
        );
      }
    },
    8670: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a) {
        var f,
          u,
          i = e.children,
          c = i.length,
          o = new Array(c + 1);
        for (o[0] = u = f = 0; f < c; ++f) o[f + 1] = u += i[f].value;
        function d(e, t, n, r, a, f, u) {
          if (e >= t - 1) {
            var c = i[e];
            return ((c.x0 = r), (c.y0 = a), (c.x1 = f), void (c.y1 = u));
          }
          var l = o[e],
            s = n / 2 + l,
            b = e + 1,
            p = t - 1;
          while (b < p) {
            var h = (b + p) >>> 1;
            o[h] < s ? (b = h + 1) : (p = h);
          }
          s - o[b - 1] < o[b] - s && e + 1 < b && --b;
          var v = o[b] - l,
            y = n - v;
          if (f - r > u - a) {
            var g = (r * y + f * v) / n;
            (d(e, b, v, r, a, g, u), d(b, t, y, g, a, f, u));
          } else {
            var _ = (a * y + u * v) / n;
            (d(e, b, v, r, a, f, _), d(b, t, y, r, _, f, u));
          }
        }
        d(0, c, e.value, t, n, r, a);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8671: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var a = r(n(4503)),
        f = r(n(4733));
      function u(e, t, n, r, u) {
        (1 & e.depth ? f.default : a.default)(e, t, n, r, u);
      }
    },
    8672: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(4503)),
        f = r(n(4733)),
        u = n(5330);
      t.default = (function e(t) {
        function n(e, n, r, i, c) {
          if ((o = e._squarify) && o.ratio === t) {
            var o,
              d,
              l,
              s,
              b,
              p = -1,
              h = o.length,
              v = e.value;
            while (++p < h) {
              for (
                d = o[p], l = d.children, s = d.value = 0, b = l.length;
                s < b;
                ++s
              )
                d.value += l[s].value;
              (d.dice
                ? (0, a.default)(d, n, r, i, (r += ((c - r) * d.value) / v))
                : (0, f.default)(d, n, r, (n += ((i - n) * d.value) / v), c),
                (v -= d.value));
            }
          } else
            ((e._squarify = o = (0, u.squarifyRatio)(t, e, n, r, i, c)),
              (o.ratio = t));
        }
        return (
          (n.ratio = function (t) {
            return e((t = +t) > 1 ? t : 1);
          }),
          n
        );
      })(u.phi);
    },
    8673: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "polygonArea", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "polygonCentroid", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "polygonContains", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "polygonHull", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "polygonLength", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var a = r(n(8674)),
        f = r(n(8675)),
        u = r(n(8676)),
        i = r(n(8678)),
        c = r(n(8679));
    },
    8674: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n = -1,
          r = e.length,
          a = e[r - 1],
          f = 0;
        while (++n < r) ((t = a), (a = e[n]), (f += t[1] * a[0] - t[0] * a[1]));
        return f / 2;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8675: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r = -1,
          a = e.length,
          f = 0,
          u = 0,
          i = e[a - 1],
          c = 0;
        while (++r < a)
          ((t = i),
            (i = e[r]),
            (c += n = t[0] * i[1] - i[0] * t[1]),
            (f += (t[0] + i[0]) * n),
            (u += (t[1] + i[1]) * n));
        return ((c *= 3), [f / c, u / c]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8676: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var a = r(n(8677));
      function f(e, t) {
        return e[0] - t[0] || e[1] - t[1];
      }
      function u(e) {
        for (var t = e.length, n = [0, 1], r = 2, f = 2; f < t; ++f) {
          while (r > 1 && (0, a.default)(e[n[r - 2]], e[n[r - 1]], e[f]) <= 0)
            --r;
          n[r++] = f;
        }
        return n.slice(0, r);
      }
      function i(e) {
        if ((n = e.length) < 3) return null;
        var t,
          n,
          r = new Array(n),
          a = new Array(n);
        for (t = 0; t < n; ++t) r[t] = [+e[t][0], +e[t][1], t];
        for (r.sort(f), t = 0; t < n; ++t) a[t] = [r[t][0], -r[t][1]];
        var i = u(r),
          c = u(a),
          o = c[0] === i[0],
          d = c[c.length - 1] === i[i.length - 1],
          l = [];
        for (t = i.length - 1; t >= 0; --t) l.push(e[r[i[t]][2]]);
        for (t = +o; t < c.length - d; ++t) l.push(e[r[c[t]][2]]);
        return l;
      }
    },
    8677: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8678: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (
          var n,
            r,
            a = e.length,
            f = e[a - 1],
            u = t[0],
            i = t[1],
            c = f[0],
            o = f[1],
            d = !1,
            l = 0;
          l < a;
          ++l
        )
          ((f = e[l]),
            (n = f[0]),
            (r = f[1]),
            r > i !== o > i &&
              u < ((c - n) * (i - r)) / (o - r) + n &&
              (d = !d),
            (c = n),
            (o = r));
        return d;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8679: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          r = -1,
          a = e.length,
          f = e[a - 1],
          u = f[0],
          i = f[1],
          c = 0;
        while (++r < a)
          ((t = u),
            (n = i),
            (f = e[r]),
            (u = f[0]),
            (i = f[1]),
            (t -= u),
            (n -= i),
            (c += Math.sqrt(t * t + n * n)));
        return c;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8680: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "randomBates", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "randomExponential", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "randomIrwinHall", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "randomLogNormal", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "randomNormal", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "randomUniform", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var a = r(n(8681)),
        f = r(n(6332)),
        u = r(n(8682)),
        i = r(n(8683)),
        c = r(n(6333)),
        o = r(n(8684));
    },
    8681: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922));
      t.default = (function e(t) {
        function n(e, n) {
          return (
            (e = null == e ? 0 : +e),
            (n = null == n ? 1 : +n),
            1 === arguments.length ? ((n = e), (e = 0)) : (n -= e),
            function () {
              return t() * n + e;
            }
          );
        }
        return ((n.source = e), n);
      })(a.default);
    },
    8682: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922)),
        f = r(n(6332));
      t.default = (function e(t) {
        function n() {
          var e = f.default.source(t).apply(this, arguments);
          return function () {
            return Math.exp(e());
          };
        }
        return ((n.source = e), n);
      })(a.default);
    },
    8683: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922)),
        f = r(n(6333));
      t.default = (function e(t) {
        function n(e) {
          var n = f.default.source(t)(e);
          return function () {
            return n() / e;
          };
        }
        return ((n.source = e), n);
      })(a.default);
    },
    8684: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(3922));
      t.default = (function e(t) {
        function n(e) {
          return function () {
            return -Math.log(1 - t()) / e;
          };
        }
        return ((n.source = e), n);
      })(a.default);
    },
    8710: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateBlues", {
          enumerable: !0,
          get: function () {
            return B.default;
          },
        }),
        Object.defineProperty(t, "interpolateBrBG", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "interpolateBuGn", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "interpolateBuPu", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "interpolateCividis", {
          enumerable: !0,
          get: function () {
            return G.default;
          },
        }),
        Object.defineProperty(t, "interpolateCool", {
          enumerable: !0,
          get: function () {
            return Y.cool;
          },
        }),
        Object.defineProperty(t, "interpolateCubehelixDefault", {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(t, "interpolateGnBu", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "interpolateGreens", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(t, "interpolateGreys", {
          enumerable: !0,
          get: function () {
            return W.default;
          },
        }),
        Object.defineProperty(t, "interpolateInferno", {
          enumerable: !0,
          get: function () {
            return Z.inferno;
          },
        }),
        Object.defineProperty(t, "interpolateMagma", {
          enumerable: !0,
          get: function () {
            return Z.magma;
          },
        }),
        Object.defineProperty(t, "interpolateOrRd", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "interpolateOranges", {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        Object.defineProperty(t, "interpolatePRGn", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "interpolatePiYG", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "interpolatePlasma", {
          enumerable: !0,
          get: function () {
            return Z.plasma;
          },
        }),
        Object.defineProperty(t, "interpolatePuBu", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(t, "interpolatePuBuGn", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, "interpolatePuOr", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "interpolatePuRd", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(t, "interpolatePurples", {
          enumerable: !0,
          get: function () {
            return L.default;
          },
        }),
        Object.defineProperty(t, "interpolateRainbow", {
          enumerable: !0,
          get: function () {
            return Y.default;
          },
        }),
        Object.defineProperty(t, "interpolateRdBu", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "interpolateRdGy", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "interpolateRdPu", {
          enumerable: !0,
          get: function () {
            return N.default;
          },
        }),
        Object.defineProperty(t, "interpolateRdYlBu", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "interpolateRdYlGn", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "interpolateReds", {
          enumerable: !0,
          get: function () {
            return D.default;
          },
        }),
        Object.defineProperty(t, "interpolateSinebow", {
          enumerable: !0,
          get: function () {
            return X.default;
          },
        }),
        Object.defineProperty(t, "interpolateSpectral", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "interpolateTurbo", {
          enumerable: !0,
          get: function () {
            return H.default;
          },
        }),
        Object.defineProperty(t, "interpolateViridis", {
          enumerable: !0,
          get: function () {
            return Z.default;
          },
        }),
        Object.defineProperty(t, "interpolateWarm", {
          enumerable: !0,
          get: function () {
            return Y.warm;
          },
        }),
        Object.defineProperty(t, "interpolateYlGn", {
          enumerable: !0,
          get: function () {
            return q.default;
          },
        }),
        Object.defineProperty(t, "interpolateYlGnBu", {
          enumerable: !0,
          get: function () {
            return R.default;
          },
        }),
        Object.defineProperty(t, "interpolateYlOrBr", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "interpolateYlOrRd", {
          enumerable: !0,
          get: function () {
            return z.default;
          },
        }),
        Object.defineProperty(t, "schemeAccent", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "schemeBlues", {
          enumerable: !0,
          get: function () {
            return B.scheme;
          },
        }),
        Object.defineProperty(t, "schemeBrBG", {
          enumerable: !0,
          get: function () {
            return p.scheme;
          },
        }),
        Object.defineProperty(t, "schemeBuGn", {
          enumerable: !0,
          get: function () {
            return M.scheme;
          },
        }),
        Object.defineProperty(t, "schemeBuPu", {
          enumerable: !0,
          get: function () {
            return j.scheme;
          },
        }),
        Object.defineProperty(t, "schemeCategory10", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "schemeDark2", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "schemeGnBu", {
          enumerable: !0,
          get: function () {
            return w.scheme;
          },
        }),
        Object.defineProperty(t, "schemeGreens", {
          enumerable: !0,
          get: function () {
            return C.scheme;
          },
        }),
        Object.defineProperty(t, "schemeGreys", {
          enumerable: !0,
          get: function () {
            return W.scheme;
          },
        }),
        Object.defineProperty(t, "schemeOrRd", {
          enumerable: !0,
          get: function () {
            return x.scheme;
          },
        }),
        Object.defineProperty(t, "schemeOranges", {
          enumerable: !0,
          get: function () {
            return I.scheme;
          },
        }),
        Object.defineProperty(t, "schemePRGn", {
          enumerable: !0,
          get: function () {
            return h.scheme;
          },
        }),
        Object.defineProperty(t, "schemePaired", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "schemePastel1", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "schemePastel2", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "schemePiYG", {
          enumerable: !0,
          get: function () {
            return v.scheme;
          },
        }),
        Object.defineProperty(t, "schemePuBu", {
          enumerable: !0,
          get: function () {
            return S.scheme;
          },
        }),
        Object.defineProperty(t, "schemePuBuGn", {
          enumerable: !0,
          get: function () {
            return E.scheme;
          },
        }),
        Object.defineProperty(t, "schemePuOr", {
          enumerable: !0,
          get: function () {
            return y.scheme;
          },
        }),
        Object.defineProperty(t, "schemePuRd", {
          enumerable: !0,
          get: function () {
            return A.scheme;
          },
        }),
        Object.defineProperty(t, "schemePurples", {
          enumerable: !0,
          get: function () {
            return L.scheme;
          },
        }),
        Object.defineProperty(t, "schemeRdBu", {
          enumerable: !0,
          get: function () {
            return g.scheme;
          },
        }),
        Object.defineProperty(t, "schemeRdGy", {
          enumerable: !0,
          get: function () {
            return _.scheme;
          },
        }),
        Object.defineProperty(t, "schemeRdPu", {
          enumerable: !0,
          get: function () {
            return N.scheme;
          },
        }),
        Object.defineProperty(t, "schemeRdYlBu", {
          enumerable: !0,
          get: function () {
            return m.scheme;
          },
        }),
        Object.defineProperty(t, "schemeRdYlGn", {
          enumerable: !0,
          get: function () {
            return P.scheme;
          },
        }),
        Object.defineProperty(t, "schemeReds", {
          enumerable: !0,
          get: function () {
            return D.scheme;
          },
        }),
        Object.defineProperty(t, "schemeSet1", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "schemeSet2", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "schemeSet3", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "schemeSpectral", {
          enumerable: !0,
          get: function () {
            return O.scheme;
          },
        }),
        Object.defineProperty(t, "schemeTableau10", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "schemeYlGn", {
          enumerable: !0,
          get: function () {
            return q.scheme;
          },
        }),
        Object.defineProperty(t, "schemeYlGnBu", {
          enumerable: !0,
          get: function () {
            return R.scheme;
          },
        }),
        Object.defineProperty(t, "schemeYlOrBr", {
          enumerable: !0,
          get: function () {
            return k.scheme;
          },
        }),
        Object.defineProperty(t, "schemeYlOrRd", {
          enumerable: !0,
          get: function () {
            return z.scheme;
          },
        }));
      var a = r(n(8711)),
        f = r(n(8712)),
        u = r(n(8713)),
        i = r(n(8714)),
        c = r(n(8715)),
        o = r(n(8716)),
        d = r(n(8717)),
        l = r(n(8718)),
        s = r(n(8719)),
        b = r(n(8720)),
        p = F(n(8721)),
        h = F(n(8722)),
        v = F(n(8723)),
        y = F(n(8724)),
        g = F(n(8725)),
        _ = F(n(8726)),
        m = F(n(8727)),
        P = F(n(8728)),
        O = F(n(8729)),
        M = F(n(8730)),
        j = F(n(8731)),
        w = F(n(8732)),
        x = F(n(8733)),
        E = F(n(8734)),
        S = F(n(8735)),
        A = F(n(8736)),
        N = F(n(8737)),
        R = F(n(8738)),
        q = F(n(8739)),
        k = F(n(8740)),
        z = F(n(8741)),
        B = F(n(8742)),
        C = F(n(8743)),
        W = F(n(8744)),
        L = F(n(8745)),
        D = F(n(8746)),
        I = F(n(8747)),
        G = r(n(8748)),
        T = r(n(8749)),
        Y = F(n(8750)),
        X = r(n(8751)),
        H = r(n(8752)),
        Z = F(n(8753));
      function F(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (F = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            f,
            u = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return u;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, u);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((f =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (f.get || f.set)
                ? a(u, n, f)
                : (u[n] = e[n]));
          return u;
        })(e, t);
      }
    },
    8711: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf",
      );
    },
    8712: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666",
      );
    },
    8713: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666",
      );
    },
    8714: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928",
      );
    },
    8715: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2",
      );
    },
    8716: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc",
      );
    },
    8717: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999",
      );
    },
    8718: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3",
      );
    },
    8719: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f",
      );
    },
    8720: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(n(2836));
      t.default = (0, a.default)(
        "4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab",
      );
    },
    8721: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8722: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8723: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8724: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8725: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8726: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8727: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8728: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8729: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8730: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8731: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8732: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8733: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8734: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8735: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8736: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8737: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8738: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8739: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8740: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8741: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8742: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8743: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8744: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8745: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8746: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8747: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.scheme = t.default = void 0));
      var a = r(n(2836)),
        f = r(n(2919)),
        u = (t.scheme = new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704",
          )
          .map(a.default));
      t.default = (0, f.default)(u);
    },
    8748: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (e = Math.max(0, Math.min(1, e))),
          "rgb(" +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  -4.54 -
                    e *
                      (35.34 -
                        e *
                          (2381.73 -
                            e * (6402.7 - e * (7024.72 - 2710.57 * e)))),
                ),
              ),
            ) +
            ", " +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  32.49 +
                    e *
                      (170.73 +
                        e * (52.82 - e * (131.46 - e * (176.58 - 67.37 * e)))),
                ),
              ),
            ) +
            ", " +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  81.24 +
                    e *
                      (442.36 -
                        e *
                          (2482.43 -
                            e * (6167.24 - e * (6614.94 - 2475.67 * e)))),
                ),
              ),
            ) +
            ")"
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8749: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(3341),
        a = n(3380);
      t.default = (0, a.interpolateCubehelixLong)(
        (0, r.cubehelix)(300, 0.5, 0),
        (0, r.cubehelix)(-240, 0.5, 1),
      );
    },
    8750: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cool = void 0),
        (t.default = u),
        (t.warm = void 0));
      var r = n(3341),
        a = n(3380),
        f =
          ((t.warm = (0, a.interpolateCubehelixLong)(
            (0, r.cubehelix)(-100, 0.75, 0.35),
            (0, r.cubehelix)(80, 1.5, 0.8),
          )),
          (t.cool = (0, a.interpolateCubehelixLong)(
            (0, r.cubehelix)(260, 0.75, 0.35),
            (0, r.cubehelix)(80, 1.5, 0.8),
          )),
          (0, r.cubehelix)());
      function u(e) {
        (e < 0 || e > 1) && (e -= Math.floor(e));
        var t = Math.abs(e - 0.5);
        return (
          (f.h = 360 * e - 100),
          (f.s = 1.5 - 1.5 * t),
          (f.l = 0.8 - 0.9 * t),
          f + ""
        );
      }
    },
    8751: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(3341),
        a = (0, r.rgb)(),
        f = Math.PI / 3,
        u = (2 * Math.PI) / 3;
      function i(e) {
        var t;
        return (
          (e = (0.5 - e) * Math.PI),
          (a.r = 255 * (t = Math.sin(e)) * t),
          (a.g = 255 * (t = Math.sin(e + f)) * t),
          (a.b = 255 * (t = Math.sin(e + u)) * t),
          a + ""
        );
      }
    },
    8752: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (e = Math.max(0, Math.min(1, e))),
          "rgb(" +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  34.61 +
                    e *
                      (1172.33 -
                        e *
                          (10793.56 -
                            e * (33300.12 - e * (38394.49 - 14825.05 * e)))),
                ),
              ),
            ) +
            ", " +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  23.31 +
                    e *
                      (557.33 +
                        e *
                          (1225.33 -
                            e * (3574.96 - e * (1073.77 + 707.56 * e)))),
                ),
              ),
            ) +
            ", " +
            Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  27.2 +
                    e *
                      (3211.1 -
                        e *
                          (15327.97 -
                            e * (27814 - e * (22569.18 - 6838.66 * e)))),
                ),
              ),
            ) +
            ")"
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8753: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.plasma = t.magma = t.inferno = t.default = void 0));
      var a = r(n(2836));
      function f(e) {
        var t = e.length;
        return function (n) {
          return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
        };
      }
      ((t.default = f(
        (0, a.default)(
          "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725",
        ),
      )),
        (t.magma = f(
          (0, a.default)(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf",
          ),
        )),
        (t.inferno = f(
          (0, a.default)(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",
          ),
        )),
        (t.plasma = f(
          (0, a.default)(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921",
          ),
        )));
    },
  },
]);
