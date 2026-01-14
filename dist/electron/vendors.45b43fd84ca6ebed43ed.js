(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [38],
  {
    3066: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "clientPoint", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "create", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "creator", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "customEvent", {
          enumerable: !0,
          get: function () {
            return x.customEvent;
          },
        }),
        Object.defineProperty(t, "event", {
          enumerable: !0,
          get: function () {
            return x.event;
          },
        }),
        Object.defineProperty(t, "local", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "matcher", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "mouse", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "namespace", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "namespaces", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "select", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "selectAll", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "selection", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "selector", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "selectorAll", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "style", {
          enumerable: !0,
          get: function () {
            return v.styleValue;
          },
        }),
        Object.defineProperty(t, "touch", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "touches", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "window", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }));
      var i = r(n(8474)),
        u = r(n(4722)),
        o = r(n(8504)),
        a = r(n(6286)),
        c = r(n(8505)),
        l = r(n(5303)),
        s = r(n(5304)),
        f = r(n(4723)),
        d = r(n(6284)),
        h = r(n(8506)),
        _ = r(n(3340)),
        p = r(n(5305)),
        y = r(n(6285)),
        v = n(6289),
        g = r(n(8507)),
        b = r(n(8508)),
        m = r(n(5306)),
        x = n(5307);
    },
    3120: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = new Date(),
        i = new Date();
      function u(e, t, n, o) {
        function a(t) {
          return (
            e((t = 0 === arguments.length ? new Date() : new Date(+t))),
            t
          );
        }
        return (
          (a.floor = function (t) {
            return (e((t = new Date(+t))), t);
          }),
          (a.ceil = function (n) {
            return (e((n = new Date(n - 1))), t(n, 1), e(n), n);
          }),
          (a.round = function (e) {
            var t = a(e),
              n = a.ceil(e);
            return e - t < n - e ? t : n;
          }),
          (a.offset = function (e, n) {
            return (t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e);
          }),
          (a.range = function (n, r, i) {
            var u,
              o = [];
            if (
              ((n = a.ceil(n)),
              (i = null == i ? 1 : Math.floor(i)),
              !(n < r) || !(i > 0))
            )
              return o;
            do {
              (o.push((u = new Date(+n))), t(n, i), e(n));
            } while (u < n && n < r);
            return o;
          }),
          (a.filter = function (n) {
            return u(
              function (t) {
                if (t >= t) while ((e(t), !n(t))) t.setTime(t - 1);
              },
              function (e, r) {
                if (e >= e)
                  if (r < 0) while (++r <= 0) while ((t(e, -1), !n(e)));
                  else while (--r >= 0) while ((t(e, 1), !n(e)));
              },
            );
          }),
          n &&
            ((a.count = function (t, u) {
              return (
                r.setTime(+t),
                i.setTime(+u),
                e(r),
                e(i),
                Math.floor(n(r, i))
              );
            }),
            (a.every = function (e) {
              return (
                (e = Math.floor(e)),
                isFinite(e) && e > 0
                  ? e > 1
                    ? a.filter(
                        o
                          ? function (t) {
                              return o(t) % e === 0;
                            }
                          : function (t) {
                              return a.count(0, t) % e === 0;
                            },
                      )
                    : a
                  : null
              );
            })),
          a
        );
      }
    },
    3158: function (e, t, n) {
      "use strict";
      function r(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(e);
            break;
          default:
            this.range(t).domain(e);
            break;
        }
        return this;
      }
      function i(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.interpolator(e);
            break;
          default:
            this.interpolator(t).domain(e);
            break;
        }
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initInterpolator = i),
        (t.initRange = r));
    },
    3340: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Selection = E),
        (t.root = t.default = void 0));
      var i = r(n(8475)),
        u = r(n(8476)),
        o = r(n(8477)),
        a = r(n(8478)),
        c = r(n(6287)),
        l = r(n(8480)),
        s = r(n(8481)),
        f = r(n(8482)),
        d = r(n(8483)),
        h = r(n(8484)),
        _ = r(n(8485)),
        p = r(n(8486)),
        y = r(n(8487)),
        v = r(n(8488)),
        g = r(n(8489)),
        b = r(n(8490)),
        m = r(n(8491)),
        x = r(n(6289)),
        M = r(n(8492)),
        P = r(n(8493)),
        O = r(n(8494)),
        j = r(n(8495)),
        w = r(n(8496)),
        T = r(n(8497)),
        S = r(n(8498)),
        k = r(n(8499)),
        C = r(n(8500)),
        D = r(n(8501)),
        N = r(n(8502)),
        A = r(n(5307)),
        U = r(n(8503)),
        F = (t.root = [null]);
      function E(e, t) {
        ((this._groups = e), (this._parents = t));
      }
      function Y() {
        return new E([[document.documentElement]], F);
      }
      E.prototype = Y.prototype = {
        constructor: E,
        select: i.default,
        selectAll: u.default,
        filter: o.default,
        data: a.default,
        enter: c.default,
        exit: l.default,
        join: s.default,
        merge: f.default,
        order: d.default,
        sort: h.default,
        call: _.default,
        nodes: p.default,
        node: y.default,
        size: v.default,
        empty: g.default,
        each: b.default,
        attr: m.default,
        style: x.default,
        property: M.default,
        classed: P.default,
        text: O.default,
        html: j.default,
        raise: w.default,
        lower: T.default,
        append: S.default,
        insert: k.default,
        remove: C.default,
        clone: D.default,
        datum: N.default,
        on: A.default,
        dispatch: U.default,
      };
      t.default = Y;
    },
    3442: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.durationWeek =
          t.durationSecond =
          t.durationMinute =
          t.durationHour =
          t.durationDay =
            void 0));
      ((t.durationSecond = 1e3),
        (t.durationMinute = 6e4),
        (t.durationHour = 36e5),
        (t.durationDay = 864e5),
        (t.durationWeek = 6048e5));
    },
    3594: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.copy = p),
        (t.default = v),
        (t.identity = s),
        (t.transformer = y));
      var i = n(3065),
        u = n(3380),
        o = n(3796),
        a = r(n(8688)),
        c = r(n(6335)),
        l = [0, 1];
      function s(e) {
        return e;
      }
      function f(e, t) {
        return (t -= e = +e)
          ? function (n) {
              return (n - e) / t;
            }
          : (0, a.default)(isNaN(t) ? NaN : 0.5);
      }
      function d(e) {
        var t,
          n = e[0],
          r = e[e.length - 1];
        return (
          n > r && ((t = n), (n = r), (r = t)),
          function (e) {
            return Math.max(n, Math.min(r, e));
          }
        );
      }
      function h(e, t, n) {
        var r = e[0],
          i = e[1],
          u = t[0],
          o = t[1];
        return (
          i < r
            ? ((r = f(i, r)), (u = n(o, u)))
            : ((r = f(r, i)), (u = n(u, o))),
          function (e) {
            return u(r(e));
          }
        );
      }
      function _(e, t, n) {
        var r = Math.min(e.length, t.length) - 1,
          u = new Array(r),
          o = new Array(r),
          a = -1;
        e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        while (++a < r)
          ((u[a] = f(e[a], e[a + 1])), (o[a] = n(t[a], t[a + 1])));
        return function (t) {
          var n = (0, i.bisect)(e, t, 1, r) - 1;
          return o[n](u[n](t));
        };
      }
      function p(e, t) {
        return t
          .domain(e.domain())
          .range(e.range())
          .interpolate(e.interpolate())
          .clamp(e.clamp())
          .unknown(e.unknown());
      }
      function y() {
        var e,
          t,
          n,
          r,
          i,
          a,
          f = l,
          p = l,
          y = u.interpolate,
          v = s;
        function g() {
          return (
            (r = Math.min(f.length, p.length) > 2 ? _ : h),
            (i = a = null),
            b
          );
        }
        function b(t) {
          return isNaN((t = +t)) ? n : (i || (i = r(f.map(e), p, y)))(e(v(t)));
        }
        return (
          (b.invert = function (n) {
            return v(t((a || (a = r(p, f.map(e), u.interpolateNumber)))(n)));
          }),
          (b.domain = function (e) {
            return arguments.length
              ? ((f = o.map.call(e, c.default)), v === s || (v = d(f)), g())
              : f.slice();
          }),
          (b.range = function (e) {
            return arguments.length ? ((p = o.slice.call(e)), g()) : p.slice();
          }),
          (b.rangeRound = function (e) {
            return ((p = o.slice.call(e)), (y = u.interpolateRound), g());
          }),
          (b.clamp = function (e) {
            return arguments.length ? ((v = e ? d(f) : s), b) : v !== s;
          }),
          (b.interpolate = function (e) {
            return arguments.length ? ((y = e), g()) : y;
          }),
          (b.unknown = function (e) {
            return arguments.length ? ((n = e), b) : n;
          }),
          function (n, r) {
            return ((e = n), (t = r), g());
          }
        );
      }
      function v(e, t) {
        return y()(e, t);
      }
    },
    3796: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = t.map = void 0));
      var r = Array.prototype;
      ((t.map = r.map), (t.slice = r.slice));
    },
    3797: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = s),
        (t.linearish = l));
      var i = n(3065),
        u = c(n(3594)),
        o = n(3158),
        a = r(n(6336));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function l(e) {
        var t = e.domain;
        return (
          (e.ticks = function (e) {
            var n = t();
            return (0, i.ticks)(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (e.tickFormat = function (e, n) {
            var r = t();
            return (0, a.default)(r[0], r[r.length - 1], null == e ? 10 : e, n);
          }),
          (e.nice = function (n) {
            null == n && (n = 10);
            var r,
              u = t(),
              o = 0,
              a = u.length - 1,
              c = u[o],
              l = u[a];
            return (
              l < c && ((r = c), (c = l), (l = r), (r = o), (o = a), (a = r)),
              (r = (0, i.tickIncrement)(c, l, n)),
              r > 0
                ? ((c = Math.floor(c / r) * r),
                  (l = Math.ceil(l / r) * r),
                  (r = (0, i.tickIncrement)(c, l, n)))
                : r < 0 &&
                  ((c = Math.ceil(c * r) / r),
                  (l = Math.floor(l * r) / r),
                  (r = (0, i.tickIncrement)(c, l, n))),
              r > 0
                ? ((u[o] = Math.floor(c / r) * r),
                  (u[a] = Math.ceil(l / r) * r),
                  t(u))
                : r < 0 &&
                  ((u[o] = Math.ceil(c * r) / r),
                  (u[a] = Math.floor(l * r) / r),
                  t(u)),
              e
            );
          }),
          e
        );
      }
      function s() {
        var e = (0, u.default)(u.identity, u.identity);
        return (
          (e.copy = function () {
            return (0, u.copy)(e, s());
          }),
          o.initRange.apply(e, arguments),
          l(e)
        );
      }
    },
    3798: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4504: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.abs = void 0),
        (t.acos = u),
        (t.asin = o),
        (t.tau =
          t.sqrt =
          t.sin =
          t.pi =
          t.min =
          t.max =
          t.halfPi =
          t.epsilon =
          t.cos =
          t.atan2 =
            void 0));
      ((t.abs = Math.abs),
        (t.atan2 = Math.atan2),
        (t.cos = Math.cos),
        (t.max = Math.max),
        (t.min = Math.min),
        (t.sin = Math.sin),
        (t.sqrt = Math.sqrt),
        (t.epsilon = 1e-12));
      var r = (t.pi = Math.PI),
        i = (t.halfPi = r / 2);
      t.tau = 2 * r;
      function u(e) {
        return e > 1 ? 0 : e < -1 ? r : Math.acos(e);
      }
      function o(e) {
        return e >= 1 ? i : e <= -1 ? -i : Math.asin(e);
      }
    },
    4505: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if ((i = e.length) > 1)
          for (var n, r, i, u = 1, o = e[t[0]], a = o.length; u < i; ++u)
            for (r = o, o = e[t[u]], n = 0; n < a; ++n)
              o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4506: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.length,
          n = new Array(t);
        while (--t >= 0) n[t] = t;
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4722: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var i = r(n(5303)),
        u = n(5304);
      function o(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === u.xhtml && t.documentElement.namespaceURI === u.xhtml
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function a(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function c(e) {
        var t = (0, i.default)(e);
        return (t.local ? a : o)(t);
      }
    },
    4723: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return (
            (r.x = t.clientX),
            (r.y = t.clientY),
            (r = r.matrixTransform(e.getScreenCTM().inverse())),
            [r.x, r.y]
          );
        }
        var i = e.getBoundingClientRect();
        return [
          t.clientX - i.left - e.clientLeft,
          t.clientY - i.top - e.clientTop,
        ];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4725: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interval", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "now", {
          enumerable: !0,
          get: function () {
            return i.now;
          },
        }),
        Object.defineProperty(t, "timeout", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "timer", {
          enumerable: !0,
          get: function () {
            return i.timer;
          },
        }),
        Object.defineProperty(t, "timerFlush", {
          enumerable: !0,
          get: function () {
            return i.timerFlush;
          },
        }));
      var i = n(5315),
        u = r(n(8528)),
        o = r(n(8529));
    },
    4734: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "timeDay", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "timeDays", {
          enumerable: !0,
          get: function () {
            return l.days;
          },
        }),
        Object.defineProperty(t, "timeFriday", {
          enumerable: !0,
          get: function () {
            return s.friday;
          },
        }),
        Object.defineProperty(t, "timeFridays", {
          enumerable: !0,
          get: function () {
            return s.fridays;
          },
        }),
        Object.defineProperty(t, "timeHour", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "timeHours", {
          enumerable: !0,
          get: function () {
            return c.hours;
          },
        }),
        Object.defineProperty(t, "timeInterval", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "timeMillisecond", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "timeMilliseconds", {
          enumerable: !0,
          get: function () {
            return u.milliseconds;
          },
        }),
        Object.defineProperty(t, "timeMinute", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "timeMinutes", {
          enumerable: !0,
          get: function () {
            return a.minutes;
          },
        }),
        Object.defineProperty(t, "timeMonday", {
          enumerable: !0,
          get: function () {
            return s.monday;
          },
        }),
        Object.defineProperty(t, "timeMondays", {
          enumerable: !0,
          get: function () {
            return s.mondays;
          },
        }),
        Object.defineProperty(t, "timeMonth", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "timeMonths", {
          enumerable: !0,
          get: function () {
            return f.months;
          },
        }),
        Object.defineProperty(t, "timeSaturday", {
          enumerable: !0,
          get: function () {
            return s.saturday;
          },
        }),
        Object.defineProperty(t, "timeSaturdays", {
          enumerable: !0,
          get: function () {
            return s.saturdays;
          },
        }),
        Object.defineProperty(t, "timeSecond", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "timeSeconds", {
          enumerable: !0,
          get: function () {
            return o.seconds;
          },
        }),
        Object.defineProperty(t, "timeSunday", {
          enumerable: !0,
          get: function () {
            return s.sunday;
          },
        }),
        Object.defineProperty(t, "timeSundays", {
          enumerable: !0,
          get: function () {
            return s.sundays;
          },
        }),
        Object.defineProperty(t, "timeThursday", {
          enumerable: !0,
          get: function () {
            return s.thursday;
          },
        }),
        Object.defineProperty(t, "timeThursdays", {
          enumerable: !0,
          get: function () {
            return s.thursdays;
          },
        }),
        Object.defineProperty(t, "timeTuesday", {
          enumerable: !0,
          get: function () {
            return s.tuesday;
          },
        }),
        Object.defineProperty(t, "timeTuesdays", {
          enumerable: !0,
          get: function () {
            return s.tuesdays;
          },
        }),
        Object.defineProperty(t, "timeWednesday", {
          enumerable: !0,
          get: function () {
            return s.wednesday;
          },
        }),
        Object.defineProperty(t, "timeWednesdays", {
          enumerable: !0,
          get: function () {
            return s.wednesdays;
          },
        }),
        Object.defineProperty(t, "timeWeek", {
          enumerable: !0,
          get: function () {
            return s.sunday;
          },
        }),
        Object.defineProperty(t, "timeWeeks", {
          enumerable: !0,
          get: function () {
            return s.sundays;
          },
        }),
        Object.defineProperty(t, "timeYear", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "timeYears", {
          enumerable: !0,
          get: function () {
            return d.years;
          },
        }),
        Object.defineProperty(t, "utcDay", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "utcDays", {
          enumerable: !0,
          get: function () {
            return p.utcDays;
          },
        }),
        Object.defineProperty(t, "utcFriday", {
          enumerable: !0,
          get: function () {
            return y.utcFriday;
          },
        }),
        Object.defineProperty(t, "utcFridays", {
          enumerable: !0,
          get: function () {
            return y.utcFridays;
          },
        }),
        Object.defineProperty(t, "utcHour", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "utcHours", {
          enumerable: !0,
          get: function () {
            return _.utcHours;
          },
        }),
        Object.defineProperty(t, "utcMillisecond", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "utcMilliseconds", {
          enumerable: !0,
          get: function () {
            return u.milliseconds;
          },
        }),
        Object.defineProperty(t, "utcMinute", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "utcMinutes", {
          enumerable: !0,
          get: function () {
            return h.utcMinutes;
          },
        }),
        Object.defineProperty(t, "utcMonday", {
          enumerable: !0,
          get: function () {
            return y.utcMonday;
          },
        }),
        Object.defineProperty(t, "utcMondays", {
          enumerable: !0,
          get: function () {
            return y.utcMondays;
          },
        }),
        Object.defineProperty(t, "utcMonth", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "utcMonths", {
          enumerable: !0,
          get: function () {
            return v.utcMonths;
          },
        }),
        Object.defineProperty(t, "utcSaturday", {
          enumerable: !0,
          get: function () {
            return y.utcSaturday;
          },
        }),
        Object.defineProperty(t, "utcSaturdays", {
          enumerable: !0,
          get: function () {
            return y.utcSaturdays;
          },
        }),
        Object.defineProperty(t, "utcSecond", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "utcSeconds", {
          enumerable: !0,
          get: function () {
            return o.seconds;
          },
        }),
        Object.defineProperty(t, "utcSunday", {
          enumerable: !0,
          get: function () {
            return y.utcSunday;
          },
        }),
        Object.defineProperty(t, "utcSundays", {
          enumerable: !0,
          get: function () {
            return y.utcSundays;
          },
        }),
        Object.defineProperty(t, "utcThursday", {
          enumerable: !0,
          get: function () {
            return y.utcThursday;
          },
        }),
        Object.defineProperty(t, "utcThursdays", {
          enumerable: !0,
          get: function () {
            return y.utcThursdays;
          },
        }),
        Object.defineProperty(t, "utcTuesday", {
          enumerable: !0,
          get: function () {
            return y.utcTuesday;
          },
        }),
        Object.defineProperty(t, "utcTuesdays", {
          enumerable: !0,
          get: function () {
            return y.utcTuesdays;
          },
        }),
        Object.defineProperty(t, "utcWednesday", {
          enumerable: !0,
          get: function () {
            return y.utcWednesday;
          },
        }),
        Object.defineProperty(t, "utcWednesdays", {
          enumerable: !0,
          get: function () {
            return y.utcWednesdays;
          },
        }),
        Object.defineProperty(t, "utcWeek", {
          enumerable: !0,
          get: function () {
            return y.utcSunday;
          },
        }),
        Object.defineProperty(t, "utcWeeks", {
          enumerable: !0,
          get: function () {
            return y.utcSundays;
          },
        }),
        Object.defineProperty(t, "utcYear", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "utcYears", {
          enumerable: !0,
          get: function () {
            return g.utcYears;
          },
        }));
      var i = r(n(3120)),
        u = b(n(8692)),
        o = b(n(8693)),
        a = b(n(8694)),
        c = b(n(8695)),
        l = b(n(8696)),
        s = n(8697),
        f = b(n(8698)),
        d = b(n(8699)),
        h = b(n(8700)),
        _ = b(n(8701)),
        p = b(n(8702)),
        y = n(8703),
        v = b(n(8704)),
        g = b(n(8705));
      function b(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (b = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    4735: function (e, t, n) {
      "use strict";
      function r(e) {
        this._context = e;
      }
      function i(e) {
        return new r(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (r.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            ((this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                ((this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t));
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(e, t);
                break;
            }
          },
        }));
    },
    4736: function (e, t, n) {
      "use strict";
      function r() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    4737: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        e._context.bezierCurveTo(
          (2 * e._x0 + e._x1) / 3,
          (2 * e._y0 + e._y1) / 3,
          (e._x0 + 2 * e._x1) / 3,
          (e._y0 + 2 * e._y1) / 3,
          (e._x0 + 4 * e._x1 + t) / 6,
          (e._y0 + 4 * e._y1 + n) / 6,
        );
      }
      function i(e) {
        this._context = e;
      }
      function u(e) {
        return new i(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Basis = i),
        (t.default = u),
        (t.point = r),
        (i.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0));
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                r(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            }
            ((this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                ((this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t));
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                ((this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6,
                  ));
              default:
                r(this, e, t);
                break;
            }
            ((this._x0 = this._x1),
              (this._x1 = e),
              (this._y0 = this._y1),
              (this._y1 = t));
          },
        }));
    },
    4738: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        e._context.bezierCurveTo(
          e._x1 + e._k * (e._x2 - e._x0),
          e._y1 + e._k * (e._y2 - e._y0),
          e._x2 + e._k * (e._x1 - t),
          e._y2 + e._k * (e._y1 - n),
          e._x2,
          e._y2,
        );
      }
      function i(e, t) {
        ((this._context = e), (this._k = (1 - t) / 6));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Cardinal = i),
        (t.default = void 0),
        (t.point = r),
        (i.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x0 =
              this._x1 =
              this._x2 =
              this._y0 =
              this._y1 =
              this._y2 =
                NaN),
              (this._point = 0));
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
              case 3:
                r(this, this._x1, this._y1);
                break;
            }
            ((this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                ((this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t));
                break;
              case 1:
                ((this._point = 2), (this._x1 = e), (this._y1 = t));
                break;
              case 2:
                this._point = 3;
              default:
                r(this, e, t);
                break;
            }
            ((this._x0 = this._x1),
              (this._x1 = this._x2),
              (this._x2 = e),
              (this._y0 = this._y1),
              (this._y1 = this._y2),
              (this._y2 = t));
          },
        }));
      t.default = (function e(t) {
        function n(e) {
          return new i(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
    },
    5303: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(5304));
      function u(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          i.default.hasOwnProperty(t) ? { space: i.default[t], local: e } : e
        );
      }
    },
    5304: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.xhtml = t.default = void 0));
      var r = (t.xhtml = "http://www.w3.org/1999/xhtml");
      t.default = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    5305: function (e, t, n) {
      "use strict";
      function r() {}
      function i(e) {
        return null == e
          ? r
          : function () {
              return this.querySelector(e);
            };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
    },
    5306: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    5307: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.customEvent = d),
        (t.default = f),
        (t.event = void 0));
      var r = {},
        i = (t.event = null);
      if ("undefined" !== typeof document) {
        var u = document.documentElement;
        "onmouseenter" in u ||
          (r = { mouseenter: "mouseover", mouseleave: "mouseout" });
      }
      function o(e, t, n) {
        return (
          (e = a(e, t, n)),
          function (t) {
            var n = t.relatedTarget;
            (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
              e.call(this, t);
          }
        );
      }
      function a(e, n, r) {
        return function (u) {
          var o = i;
          t.event = i = u;
          try {
            e.call(this, this.__data__, n, r);
          } finally {
            t.event = i = o;
          }
        };
      }
      function c(e) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function (e) {
            var t = "",
              n = e.indexOf(".");
            return (
              n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
              { type: e, name: t }
            );
          });
      }
      function l(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, i = -1, u = t.length; r < u; ++r)
              ((n = t[r]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++i] = n)
                  : this.removeEventListener(n.type, n.listener, n.capture));
            ++i ? (t.length = i) : delete this.__on;
          }
        };
      }
      function s(e, t, n) {
        var i = r.hasOwnProperty(e.type) ? o : a;
        return function (r, u, o) {
          var a,
            c = this.__on,
            l = i(t, u, o);
          if (c)
            for (var s = 0, f = c.length; s < f; ++s)
              if ((a = c[s]).type === e.type && a.name === e.name)
                return (
                  this.removeEventListener(a.type, a.listener, a.capture),
                  this.addEventListener(
                    a.type,
                    (a.listener = l),
                    (a.capture = n),
                  ),
                  void (a.value = t)
                );
          (this.addEventListener(e.type, l, n),
            (a = {
              type: e.type,
              name: e.name,
              value: t,
              listener: l,
              capture: n,
            }),
            c ? c.push(a) : (this.__on = [a]));
        };
      }
      function f(e, t, n) {
        var r,
          i,
          u = c(e + ""),
          o = u.length;
        if (!(arguments.length < 2)) {
          for (a = t ? s : l, null == n && (n = !1), r = 0; r < o; ++r)
            this.each(a(u[r], t, n));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var f, d = 0, h = a.length; d < h; ++d)
            for (r = 0, f = a[d]; r < o; ++r)
              if ((i = u[r]).type === f.type && i.name === f.name)
                return f.value;
      }
      function d(e, n, r, u) {
        var o = i;
        ((e.sourceEvent = i), (t.event = i = e));
        try {
          return n.apply(r, u);
        } finally {
          t.event = i = o;
        }
      }
    },
    5308: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(5307);
      function i() {
        var e,
          t = r.event;
        while ((e = t.sourceEvent)) t = e;
        return t;
      }
    },
    5315: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Timer = y),
        (t.now = _),
        (t.timer = v),
        (t.timerFlush = g));
      var r,
        i,
        u = 0,
        o = 0,
        a = 0,
        c = 1e3,
        l = 0,
        s = 0,
        f = 0,
        d =
          "object" === typeof performance && performance.now
            ? performance
            : Date,
        h =
          "object" === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function _() {
        return s || (h(p), (s = d.now() + f));
      }
      function p() {
        s = 0;
      }
      function y() {
        this._call = this._time = this._next = null;
      }
      function v(e, t, n) {
        var r = new y();
        return (r.restart(e, t, n), r);
      }
      function g() {
        (_(), ++u);
        var e,
          t = r;
        while (t)
          ((e = s - t._time) >= 0 && t._call.call(null, e), (t = t._next));
        --u;
      }
      function b() {
        ((s = (l = d.now()) + f), (u = o = 0));
        try {
          g();
        } finally {
          ((u = 0), x(), (s = 0));
        }
      }
      function m() {
        var e = d.now(),
          t = e - l;
        t > c && ((f -= t), (l = e));
      }
      function x() {
        var e,
          t,
          n = r,
          u = 1 / 0;
        while (n)
          n._call
            ? (u > n._time && (u = n._time), (e = n), (n = n._next))
            : ((t = n._next),
              (n._next = null),
              (n = e ? (e._next = t) : (r = t)));
        ((i = e), M(u));
      }
      function M(e) {
        if (!u) {
          o && (o = clearTimeout(o));
          var t = e - s;
          t > 24
            ? (e < 1 / 0 && (o = setTimeout(b, e - d.now() - f)),
              a && (a = clearInterval(a)))
            : (a || ((l = d.now()), (a = setInterval(m, c))), (u = 1), h(b));
        }
      }
      y.prototype = v.prototype = {
        constructor: y,
        restart: function (e, t, n) {
          if ("function" !== typeof e)
            throw new TypeError("callback is not a function");
          ((n = (null == n ? _() : +n) + (null == t ? 0 : +t)),
            this._next ||
              i === this ||
              (i ? (i._next = this) : (r = this), (i = this)),
            (this._call = e),
            (this._time = n),
            M());
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), M());
        },
      };
    },
    5331: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = g),
        (t.loggish = v));
      var i = n(3065),
        u = n(5322),
        o = r(n(6337)),
        a = n(3594),
        c = n(3158);
      function l(e) {
        return Math.log(e);
      }
      function s(e) {
        return Math.exp(e);
      }
      function f(e) {
        return -Math.log(-e);
      }
      function d(e) {
        return -Math.exp(-e);
      }
      function h(e) {
        return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
      }
      function _(e) {
        return 10 === e
          ? h
          : e === Math.E
            ? Math.exp
            : function (t) {
                return Math.pow(e, t);
              };
      }
      function p(e) {
        return e === Math.E
          ? Math.log
          : (10 === e && Math.log10) ||
              (2 === e && Math.log2) ||
              ((e = Math.log(e)),
              function (t) {
                return Math.log(t) / e;
              });
      }
      function y(e) {
        return function (t) {
          return -e(-t);
        };
      }
      function v(e) {
        var t,
          n,
          r = e(l, s),
          a = r.domain,
          c = 10;
        function h() {
          return (
            (t = p(c)),
            (n = _(c)),
            a()[0] < 0 ? ((t = y(t)), (n = y(n)), e(f, d)) : e(l, s),
            r
          );
        }
        return (
          (r.base = function (e) {
            return arguments.length ? ((c = +e), h()) : c;
          }),
          (r.domain = function (e) {
            return arguments.length ? (a(e), h()) : a();
          }),
          (r.ticks = function (e) {
            var r,
              u = a(),
              o = u[0],
              l = u[u.length - 1];
            (r = l < o) && ((h = o), (o = l), (l = h));
            var s,
              f,
              d,
              h = t(o),
              _ = t(l),
              p = null == e ? 10 : +e,
              y = [];
            if (!(c % 1) && _ - h < p) {
              if (((h = Math.round(h) - 1), (_ = Math.round(_) + 1), o > 0)) {
                for (; h < _; ++h)
                  for (f = 1, s = n(h); f < c; ++f)
                    if (((d = s * f), !(d < o))) {
                      if (d > l) break;
                      y.push(d);
                    }
              } else
                for (; h < _; ++h)
                  for (f = c - 1, s = n(h); f >= 1; --f)
                    if (((d = s * f), !(d < o))) {
                      if (d > l) break;
                      y.push(d);
                    }
            } else y = (0, i.ticks)(h, _, Math.min(_ - h, p)).map(n);
            return r ? y.reverse() : y;
          }),
          (r.tickFormat = function (e, i) {
            if (
              (null == i && (i = 10 === c ? ".0e" : ","),
              "function" !== typeof i && (i = (0, u.format)(i)),
              e === 1 / 0)
            )
              return i;
            null == e && (e = 10);
            var o = Math.max(1, (c * e) / r.ticks().length);
            return function (e) {
              var r = e / n(Math.round(t(e)));
              return (r * c < c - 0.5 && (r *= c), r <= o ? i(e) : "");
            };
          }),
          (r.nice = function () {
            return a(
              (0, o.default)(a(), {
                floor: function (e) {
                  return n(Math.floor(t(e)));
                },
                ceil: function (e) {
                  return n(Math.ceil(t(e)));
                },
              }),
            );
          }),
          r
        );
      }
      function g() {
        var e = v((0, a.transformer)()).domain([1, 10]);
        return (
          (e.copy = function () {
            return (0, a.copy)(e, g()).base(e.base());
          }),
          c.initRange.apply(e, arguments),
          e
        );
      }
    },
    5332: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = l),
        (t.symlogish = c));
      var r = n(3797),
        i = n(3594),
        u = n(3158);
      function o(e) {
        return function (t) {
          return Math.sign(t) * Math.log1p(Math.abs(t / e));
        };
      }
      function a(e) {
        return function (t) {
          return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
        };
      }
      function c(e) {
        var t = 1,
          n = e(o(t), a(t));
        return (
          (n.constant = function (n) {
            return arguments.length ? e(o((t = +n)), a(t)) : t;
          }),
          (0, r.linearish)(n)
        );
      }
      function l() {
        var e = c((0, i.transformer)());
        return (
          (e.copy = function () {
            return (0, i.copy)(e, l()).constant(e.constant());
          }),
          u.initRange.apply(e, arguments)
        );
      }
    },
    5333: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = s),
        (t.powish = l),
        (t.sqrt = f));
      var r = n(3797),
        i = n(3594),
        u = n(3158);
      function o(e) {
        return function (t) {
          return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
        };
      }
      function a(e) {
        return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
      }
      function c(e) {
        return e < 0 ? -e * e : e * e;
      }
      function l(e) {
        var t = e(i.identity, i.identity),
          n = 1;
        function u() {
          return 1 === n
            ? e(i.identity, i.identity)
            : 0.5 === n
              ? e(a, c)
              : e(o(n), o(1 / n));
        }
        return (
          (t.exponent = function (e) {
            return arguments.length ? ((n = +e), u()) : n;
          }),
          (0, r.linearish)(t)
        );
      }
      function s() {
        var e = l((0, i.transformer)());
        return (
          (e.copy = function () {
            return (0, i.copy)(e, s()).exponent(e.exponent());
          }),
          u.initRange.apply(e, arguments),
          e
        );
      }
      function f() {
        return s.apply(null, arguments).exponent(0.5);
      }
    },
    5334: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isoFormat", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "isoParse", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "timeFormat", {
          enumerable: !0,
          get: function () {
            return i.timeFormat;
          },
        }),
        Object.defineProperty(t, "timeFormatDefaultLocale", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "timeFormatLocale", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "timeParse", {
          enumerable: !0,
          get: function () {
            return i.timeParse;
          },
        }),
        Object.defineProperty(t, "utcFormat", {
          enumerable: !0,
          get: function () {
            return i.utcFormat;
          },
        }),
        Object.defineProperty(t, "utcParse", {
          enumerable: !0,
          get: function () {
            return i.utcParse;
          },
        }));
      var i = c(n(5335)),
        u = r(n(6339)),
        o = r(n(6340)),
        a = r(n(8706));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    5335: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = o),
        (t.utcParse = t.utcFormat = t.timeParse = t.timeFormat = void 0));
      var i,
        u = r(n(6339));
      function o(e) {
        return (
          (i = (0, u.default)(e)),
          (t.timeFormat = i.format),
          (t.timeParse = i.parse),
          (t.utcFormat = i.utcFormat),
          (t.utcParse = i.utcParse),
          i
        );
      }
      o({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
    },
    5336: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var i = n(3794),
        u = r(n(3798)),
        o = r(n(4735)),
        a = n(5337);
      function c() {
        var e = a.x,
          t = a.y,
          n = (0, u.default)(!0),
          r = null,
          c = o.default,
          l = null;
        function s(u) {
          var o,
            a,
            s,
            f = u.length,
            d = !1;
          for (null == r && (l = c((s = (0, i.path)()))), o = 0; o <= f; ++o)
            (!(o < f && n((a = u[o]), o, u)) === d &&
              ((d = !d) ? l.lineStart() : l.lineEnd()),
              d && l.point(+e(a, o, u), +t(a, o, u)));
          if (s) return ((l = null), s + "" || null);
        }
        return (
          (s.x = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), s)
              : e;
          }),
          (s.y = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : (0, u.default)(+e)), s)
              : t;
          }),
          (s.defined = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, u.default)(!!e)), s)
              : n;
          }),
          (s.curve = function (e) {
            return arguments.length ? ((c = e), null != r && (l = c(r)), s) : c;
          }),
          (s.context = function (e) {
            return arguments.length
              ? (null == e ? (r = l = null) : (l = c((r = e))), s)
              : r;
          }),
          s
        );
      }
    },
    5337: function (e, t, n) {
      "use strict";
      function r(e) {
        return e[0];
      }
      function i(e) {
        return e[1];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.x = r),
        (t.y = i));
    },
    5338: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.point = u));
      var r = n(4504),
        i = n(4738);
      function u(e, t, n) {
        var i = e._x1,
          u = e._y1,
          o = e._x2,
          a = e._y2;
        if (e._l01_a > r.epsilon) {
          var c = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a,
            l = 3 * e._l01_a * (e._l01_a + e._l12_a);
          ((i = (i * c - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l),
            (u = (u * c - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l));
        }
        if (e._l23_a > r.epsilon) {
          var s = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a,
            f = 3 * e._l23_a * (e._l23_a + e._l12_a);
          ((o = (o * s + e._x1 * e._l23_2a - t * e._l12_2a) / f),
            (a = (a * s + e._y1 * e._l23_2a - n * e._l12_2a) / f));
        }
        e._context.bezierCurveTo(i, u, o, a, e._x2, e._y2);
      }
      function o(e, t) {
        ((this._context = e), (this._alpha = t));
      }
      o.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
              break;
          }
          ((this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha)),
            );
          }
          switch (this._point) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              u(this, e, t);
              break;
          }
          ((this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return t ? new o(e, t) : new i.Cardinal(e, 0);
        }
        return (
          (n.alpha = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.5);
    },
    5339: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = u),
        (t.sum = o));
      var i = r(n(4506));
      function u(e) {
        var t = e.map(o);
        return (0, i.default)(e).sort(function (e, n) {
          return t[e] - t[n];
        });
      }
      function o(e) {
        var t,
          n = 0,
          r = -1,
          i = e.length;
        while (++r < i) (t = +e[r][1]) && (n += t);
        return n;
      }
    },
    6284: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(3340);
      function i(e) {
        return "string" === typeof e
          ? new r.Selection(
              [[document.querySelector(e)]],
              [document.documentElement],
            )
          : new r.Selection([[e]], r.root);
      }
    },
    6285: function (e, t, n) {
      "use strict";
      function r() {
        return [];
      }
      function i(e) {
        return null == e
          ? r
          : function () {
              return this.querySelectorAll(e);
            };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
    },
    6286: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return this.matches(e);
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6287: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EnterNode = a),
        (t.default = o));
      var i = r(n(6288)),
        u = n(3340);
      function o() {
        return new u.Selection(
          this._enter || this._groups.map(i.default),
          this._parents,
        );
      }
      function a(e, t) {
        ((this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t));
      }
      a.prototype = {
        constructor: a,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
    },
    6288: function (e, t, n) {
      "use strict";
      function r(e) {
        return new Array(e.length);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6289: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.styleValue = l));
      var i = r(n(5306));
      function u(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function o(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function a(e, t, n) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, r, n);
        };
      }
      function c(e, t, n) {
        return arguments.length > 1
          ? this.each(
              (null == t ? u : "function" === typeof t ? a : o)(
                e,
                t,
                null == n ? "" : n,
              ),
            )
          : l(this.node(), e);
      }
      function l(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          (0, i.default)(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
    },
    6334: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.implicit = void 0));
      var r = n(4727),
        i = n(3796),
        u = n(3158),
        o = (t.implicit = { name: "implicit" });
      function a() {
        var e = (0, r.map)(),
          t = [],
          n = [],
          c = o;
        function l(r) {
          var i = r + "",
            u = e.get(i);
          if (!u) {
            if (c !== o) return c;
            e.set(i, (u = t.push(r)));
          }
          return n[(u - 1) % n.length];
        }
        return (
          (l.domain = function (n) {
            if (!arguments.length) return t.slice();
            ((t = []), (e = (0, r.map)()));
            var i,
              u,
              o = -1,
              a = n.length;
            while (++o < a) e.has((u = (i = n[o]) + "")) || e.set(u, t.push(i));
            return l;
          }),
          (l.range = function (e) {
            return arguments.length ? ((n = i.slice.call(e)), l) : n.slice();
          }),
          (l.unknown = function (e) {
            return arguments.length ? ((c = e), l) : c;
          }),
          (l.copy = function () {
            return a(t, n).unknown(c);
          }),
          u.initRange.apply(l, arguments),
          l
        );
      }
    },
    6335: function (e, t, n) {
      "use strict";
      function r(e) {
        return +e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6336: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = n(3065),
        i = n(5322);
      function u(e, t, n, u) {
        var o,
          a = (0, r.tickStep)(e, t, n);
        switch (((u = (0, i.formatSpecifier)(null == u ? ",f" : u)), u.type)) {
          case "s":
            var c = Math.max(Math.abs(e), Math.abs(t));
            return (
              null != u.precision ||
                isNaN((o = (0, i.precisionPrefix)(a, c))) ||
                (u.precision = o),
              (0, i.formatPrefix)(u, c)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != u.precision ||
              isNaN(
                (o = (0, i.precisionRound)(
                  a,
                  Math.max(Math.abs(e), Math.abs(t)),
                )),
              ) ||
              (u.precision = o - ("e" === u.type));
            break;
          case "f":
          case "%":
            null != u.precision ||
              isNaN((o = (0, i.precisionFixed)(a))) ||
              (u.precision = o - 2 * ("%" === u.type));
            break;
        }
        return (0, i.format)(u);
      }
    },
    6337: function (e, t, n) {
      "use strict";
      function r(e, t) {
        e = e.slice();
        var n,
          r = 0,
          i = e.length - 1,
          u = e[r],
          o = e[i];
        return (
          o < u && ((n = r), (r = i), (i = n), (n = u), (u = o), (o = n)),
          (e[r] = t.floor(u)),
          (e[i] = t.ceil(o)),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6338: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.calendar = x),
        (t.default = M));
      var i = n(3065),
        u = n(4734),
        o = n(5334),
        a = n(3796),
        c = f(n(3594)),
        l = n(3158),
        s = r(n(6337));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      var d = 1e3,
        h = 60 * d,
        _ = 60 * h,
        p = 24 * _,
        y = 7 * p,
        v = 30 * p,
        g = 365 * p;
      function b(e) {
        return new Date(e);
      }
      function m(e) {
        return e instanceof Date ? +e : +new Date(+e);
      }
      function x(e, t, n, r, u, o, l, f, M) {
        var P = (0, c.default)(c.identity, c.identity),
          O = P.invert,
          j = P.domain,
          w = M(".%L"),
          T = M(":%S"),
          S = M("%I:%M"),
          k = M("%I %p"),
          C = M("%a %d"),
          D = M("%b %d"),
          N = M("%B"),
          A = M("%Y"),
          U = [
            [l, 1, d],
            [l, 5, 5 * d],
            [l, 15, 15 * d],
            [l, 30, 30 * d],
            [o, 1, h],
            [o, 5, 5 * h],
            [o, 15, 15 * h],
            [o, 30, 30 * h],
            [u, 1, _],
            [u, 3, 3 * _],
            [u, 6, 6 * _],
            [u, 12, 12 * _],
            [r, 1, p],
            [r, 2, 2 * p],
            [n, 1, y],
            [t, 1, v],
            [t, 3, 3 * v],
            [e, 1, g],
          ];
        function F(i) {
          return (
            l(i) < i
              ? w
              : o(i) < i
                ? T
                : u(i) < i
                  ? S
                  : r(i) < i
                    ? k
                    : t(i) < i
                      ? n(i) < i
                        ? C
                        : D
                      : e(i) < i
                        ? N
                        : A
          )(i);
        }
        function E(t, n, r, u) {
          if ((null == t && (t = 10), "number" === typeof t)) {
            var o = Math.abs(r - n) / t,
              a = (0, i.bisector)(function (e) {
                return e[2];
              }).right(U, o);
            a === U.length
              ? ((u = (0, i.tickStep)(n / g, r / g, t)), (t = e))
              : a
                ? ((a = U[o / U[a - 1][2] < U[a][2] / o ? a - 1 : a]),
                  (u = a[1]),
                  (t = a[0]))
                : ((u = Math.max((0, i.tickStep)(n, r, t), 1)), (t = f));
          }
          return null == u ? t : t.every(u);
        }
        return (
          (P.invert = function (e) {
            return new Date(O(e));
          }),
          (P.domain = function (e) {
            return arguments.length ? j(a.map.call(e, m)) : j().map(b);
          }),
          (P.ticks = function (e, t) {
            var n,
              r = j(),
              i = r[0],
              u = r[r.length - 1],
              o = u < i;
            return (
              o && ((n = i), (i = u), (u = n)),
              (n = E(e, i, u, t)),
              (n = n ? n.range(i, u + 1) : []),
              o ? n.reverse() : n
            );
          }),
          (P.tickFormat = function (e, t) {
            return null == t ? F : M(t);
          }),
          (P.nice = function (e, t) {
            var n = j();
            return (e = E(e, n[0], n[n.length - 1], t))
              ? j((0, s.default)(n, e))
              : P;
          }),
          (P.copy = function () {
            return (0, c.copy)(P, x(e, t, n, r, u, o, l, f, M));
          }),
          P
        );
      }
      function M() {
        return l.initRange.apply(
          x(
            u.timeYear,
            u.timeMonth,
            u.timeWeek,
            u.timeDay,
            u.timeHour,
            u.timeMinute,
            u.timeSecond,
            u.timeMillisecond,
            o.timeFormat,
          ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
          arguments,
        );
      }
    },
    6339: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(4734);
      function i(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
          return (t.setFullYear(e.y), t);
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
      }
      function u(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
          return (t.setUTCFullYear(e.y), t);
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
      }
      function o(e, t, n) {
        return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      function a(e) {
        var t = e.dateTime,
          n = e.date,
          a = e.time,
          l = e.periods,
          s = e.days,
          f = e.shortDays,
          d = e.months,
          h = e.shortMonths,
          X = _(l),
          he = p(l),
          je = _(s),
          we = p(s),
          Te = _(f),
          Se = p(f),
          ke = _(d),
          Ce = p(d),
          De = _(h),
          Ne = p(h),
          Ae = {
            a: Xe,
            A: Ze,
            b: Qe,
            B: Je,
            c: null,
            d: E,
            e: E,
            f: R,
            g: $,
            G: ee,
            H: Y,
            I: q,
            j: W,
            L: H,
            m: L,
            M: I,
            p: Ge,
            q: $e,
            Q: Pe,
            s: Oe,
            S: B,
            u: z,
            U: V,
            V: Z,
            w: Q,
            W: J,
            x: null,
            X: null,
            y: G,
            Y: K,
            Z: te,
            "%": Me,
          },
          Ue = {
            a: Ke,
            A: et,
            b: tt,
            B: nt,
            c: null,
            d: ne,
            e: ne,
            f: ae,
            g: ge,
            G: me,
            H: re,
            I: ie,
            j: ue,
            L: oe,
            m: ce,
            M: le,
            p: rt,
            q: it,
            Q: Pe,
            s: Oe,
            S: se,
            u: fe,
            U: de,
            V: _e,
            w: pe,
            W: ye,
            x: null,
            X: null,
            y: ve,
            Y: be,
            Z: xe,
            "%": Me,
          },
          Fe = {
            a: He,
            A: Re,
            b: Le,
            B: Ie,
            c: Be,
            d: w,
            e: w,
            f: N,
            g: M,
            G: x,
            H: S,
            I: S,
            j: T,
            L: D,
            m: j,
            M: k,
            p: We,
            q: O,
            Q: U,
            s: F,
            S: C,
            u: v,
            U: g,
            V: b,
            w: y,
            W: m,
            x: ze,
            X: Ve,
            y: M,
            Y: x,
            Z: P,
            "%": A,
          };
        function Ee(e, t) {
          return function (n) {
            var r,
              i,
              u,
              o = [],
              a = -1,
              l = 0,
              s = e.length;
            n instanceof Date || (n = new Date(+n));
            while (++a < s)
              37 === e.charCodeAt(a) &&
                (o.push(e.slice(l, a)),
                null != (i = c[(r = e.charAt(++a))])
                  ? (r = e.charAt(++a))
                  : (i = "e" === r ? " " : "0"),
                (u = t[r]) && (r = u(n, i)),
                o.push(r),
                (l = a + 1));
            return (o.push(e.slice(l, a)), o.join(""));
          };
        }
        function Ye(e, t) {
          return function (n) {
            var a,
              c,
              l = o(1900, void 0, 1),
              s = qe(l, e, (n += ""), 0);
            if (s != n.length) return null;
            if ("Q" in l) return new Date(l.Q);
            if ("s" in l) return new Date(1e3 * l.s + ("L" in l ? l.L : 0));
            if (
              (t && !("Z" in l) && (l.Z = 0),
              "p" in l && (l.H = (l.H % 12) + 12 * l.p),
              void 0 === l.m && (l.m = "q" in l ? l.q : 0),
              "V" in l)
            ) {
              if (l.V < 1 || l.V > 53) return null;
              ("w" in l || (l.w = 1),
                "Z" in l
                  ? ((a = u(o(l.y, 0, 1))),
                    (c = a.getUTCDay()),
                    (a =
                      c > 4 || 0 === c
                        ? r.utcMonday.ceil(a)
                        : (0, r.utcMonday)(a)),
                    (a = r.utcDay.offset(a, 7 * (l.V - 1))),
                    (l.y = a.getUTCFullYear()),
                    (l.m = a.getUTCMonth()),
                    (l.d = a.getUTCDate() + ((l.w + 6) % 7)))
                  : ((a = i(o(l.y, 0, 1))),
                    (c = a.getDay()),
                    (a =
                      c > 4 || 0 === c
                        ? r.timeMonday.ceil(a)
                        : (0, r.timeMonday)(a)),
                    (a = r.timeDay.offset(a, 7 * (l.V - 1))),
                    (l.y = a.getFullYear()),
                    (l.m = a.getMonth()),
                    (l.d = a.getDate() + ((l.w + 6) % 7))));
            } else
              ("W" in l || "U" in l) &&
                ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0),
                (c =
                  "Z" in l
                    ? u(o(l.y, 0, 1)).getUTCDay()
                    : i(o(l.y, 0, 1)).getDay()),
                (l.m = 0),
                (l.d =
                  "W" in l
                    ? ((l.w + 6) % 7) + 7 * l.W - ((c + 5) % 7)
                    : l.w + 7 * l.U - ((c + 6) % 7)));
            return "Z" in l
              ? ((l.H += (l.Z / 100) | 0), (l.M += l.Z % 100), u(l))
              : i(l);
          };
        }
        function qe(e, t, n, r) {
          var i,
            u,
            o = 0,
            a = t.length,
            l = n.length;
          while (o < a) {
            if (r >= l) return -1;
            if (((i = t.charCodeAt(o++)), 37 === i)) {
              if (
                ((i = t.charAt(o++)),
                (u = Fe[i in c ? t.charAt(o++) : i]),
                !u || (r = u(e, n, r)) < 0)
              )
                return -1;
            } else if (i != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        function We(e, t, n) {
          var r = X.exec(t.slice(n));
          return r ? ((e.p = he[r[0].toLowerCase()]), n + r[0].length) : -1;
        }
        function He(e, t, n) {
          var r = Te.exec(t.slice(n));
          return r ? ((e.w = Se[r[0].toLowerCase()]), n + r[0].length) : -1;
        }
        function Re(e, t, n) {
          var r = je.exec(t.slice(n));
          return r ? ((e.w = we[r[0].toLowerCase()]), n + r[0].length) : -1;
        }
        function Le(e, t, n) {
          var r = De.exec(t.slice(n));
          return r ? ((e.m = Ne[r[0].toLowerCase()]), n + r[0].length) : -1;
        }
        function Ie(e, t, n) {
          var r = ke.exec(t.slice(n));
          return r ? ((e.m = Ce[r[0].toLowerCase()]), n + r[0].length) : -1;
        }
        function Be(e, n, r) {
          return qe(e, t, n, r);
        }
        function ze(e, t, r) {
          return qe(e, n, t, r);
        }
        function Ve(e, t, n) {
          return qe(e, a, t, n);
        }
        function Xe(e) {
          return f[e.getDay()];
        }
        function Ze(e) {
          return s[e.getDay()];
        }
        function Qe(e) {
          return h[e.getMonth()];
        }
        function Je(e) {
          return d[e.getMonth()];
        }
        function Ge(e) {
          return l[+(e.getHours() >= 12)];
        }
        function $e(e) {
          return 1 + ~~(e.getMonth() / 3);
        }
        function Ke(e) {
          return f[e.getUTCDay()];
        }
        function et(e) {
          return s[e.getUTCDay()];
        }
        function tt(e) {
          return h[e.getUTCMonth()];
        }
        function nt(e) {
          return d[e.getUTCMonth()];
        }
        function rt(e) {
          return l[+(e.getUTCHours() >= 12)];
        }
        function it(e) {
          return 1 + ~~(e.getUTCMonth() / 3);
        }
        return (
          (Ae.x = Ee(n, Ae)),
          (Ae.X = Ee(a, Ae)),
          (Ae.c = Ee(t, Ae)),
          (Ue.x = Ee(n, Ue)),
          (Ue.X = Ee(a, Ue)),
          (Ue.c = Ee(t, Ue)),
          {
            format: function (e) {
              var t = Ee((e += ""), Ae);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            parse: function (e) {
              var t = Ye((e += ""), !1);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcFormat: function (e) {
              var t = Ee((e += ""), Ue);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcParse: function (e) {
              var t = Ye((e += ""), !0);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
          }
        );
      }
      var c = { "-": "", _: " ", 0: "0" },
        l = /^\s*\d+/,
        s = /^%/,
        f = /[\\^$*+?|[\]().{}]/g;
      function d(e, t, n) {
        var r = e < 0 ? "-" : "",
          i = (r ? -e : e) + "",
          u = i.length;
        return r + (u < n ? new Array(n - u + 1).join(t) + i : i);
      }
      function h(e) {
        return e.replace(f, "\\$&");
      }
      function _(e) {
        return new RegExp("^(?:" + e.map(h).join("|") + ")", "i");
      }
      function p(e) {
        var t = {},
          n = -1,
          r = e.length;
        while (++n < r) t[e[n].toLowerCase()] = n;
        return t;
      }
      function y(e, t, n) {
        var r = l.exec(t.slice(n, n + 1));
        return r ? ((e.w = +r[0]), n + r[0].length) : -1;
      }
      function v(e, t, n) {
        var r = l.exec(t.slice(n, n + 1));
        return r ? ((e.u = +r[0]), n + r[0].length) : -1;
      }
      function g(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.U = +r[0]), n + r[0].length) : -1;
      }
      function b(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.V = +r[0]), n + r[0].length) : -1;
      }
      function m(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.W = +r[0]), n + r[0].length) : -1;
      }
      function x(e, t, n) {
        var r = l.exec(t.slice(n, n + 4));
        return r ? ((e.y = +r[0]), n + r[0].length) : -1;
      }
      function M(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r
          ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function P(e, t, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
        return r
          ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function O(e, t, n) {
        var r = l.exec(t.slice(n, n + 1));
        return r ? ((e.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function j(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
      }
      function w(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.d = +r[0]), n + r[0].length) : -1;
      }
      function T(e, t, n) {
        var r = l.exec(t.slice(n, n + 3));
        return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
      }
      function S(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.H = +r[0]), n + r[0].length) : -1;
      }
      function k(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.M = +r[0]), n + r[0].length) : -1;
      }
      function C(e, t, n) {
        var r = l.exec(t.slice(n, n + 2));
        return r ? ((e.S = +r[0]), n + r[0].length) : -1;
      }
      function D(e, t, n) {
        var r = l.exec(t.slice(n, n + 3));
        return r ? ((e.L = +r[0]), n + r[0].length) : -1;
      }
      function N(e, t, n) {
        var r = l.exec(t.slice(n, n + 6));
        return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function A(e, t, n) {
        var r = s.exec(t.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function U(e, t, n) {
        var r = l.exec(t.slice(n));
        return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
      }
      function F(e, t, n) {
        var r = l.exec(t.slice(n));
        return r ? ((e.s = +r[0]), n + r[0].length) : -1;
      }
      function E(e, t) {
        return d(e.getDate(), t, 2);
      }
      function Y(e, t) {
        return d(e.getHours(), t, 2);
      }
      function q(e, t) {
        return d(e.getHours() % 12 || 12, t, 2);
      }
      function W(e, t) {
        return d(1 + r.timeDay.count((0, r.timeYear)(e), e), t, 3);
      }
      function H(e, t) {
        return d(e.getMilliseconds(), t, 3);
      }
      function R(e, t) {
        return H(e, t) + "000";
      }
      function L(e, t) {
        return d(e.getMonth() + 1, t, 2);
      }
      function I(e, t) {
        return d(e.getMinutes(), t, 2);
      }
      function B(e, t) {
        return d(e.getSeconds(), t, 2);
      }
      function z(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t;
      }
      function V(e, t) {
        return d(r.timeSunday.count((0, r.timeYear)(e) - 1, e), t, 2);
      }
      function X(e) {
        var t = e.getDay();
        return t >= 4 || 0 === t
          ? (0, r.timeThursday)(e)
          : r.timeThursday.ceil(e);
      }
      function Z(e, t) {
        return (
          (e = X(e)),
          d(
            r.timeThursday.count((0, r.timeYear)(e), e) +
              (4 === (0, r.timeYear)(e).getDay()),
            t,
            2,
          )
        );
      }
      function Q(e) {
        return e.getDay();
      }
      function J(e, t) {
        return d(r.timeMonday.count((0, r.timeYear)(e) - 1, e), t, 2);
      }
      function G(e, t) {
        return d(e.getFullYear() % 100, t, 2);
      }
      function $(e, t) {
        return ((e = X(e)), d(e.getFullYear() % 100, t, 2));
      }
      function K(e, t) {
        return d(e.getFullYear() % 1e4, t, 4);
      }
      function ee(e, t) {
        var n = e.getDay();
        return (
          (e =
            n >= 4 || 0 === n
              ? (0, r.timeThursday)(e)
              : r.timeThursday.ceil(e)),
          d(e.getFullYear() % 1e4, t, 4)
        );
      }
      function te(e) {
        var t = e.getTimezoneOffset();
        return (
          (t > 0 ? "-" : ((t *= -1), "+")) +
          d((t / 60) | 0, "0", 2) +
          d(t % 60, "0", 2)
        );
      }
      function ne(e, t) {
        return d(e.getUTCDate(), t, 2);
      }
      function re(e, t) {
        return d(e.getUTCHours(), t, 2);
      }
      function ie(e, t) {
        return d(e.getUTCHours() % 12 || 12, t, 2);
      }
      function ue(e, t) {
        return d(1 + r.utcDay.count((0, r.utcYear)(e), e), t, 3);
      }
      function oe(e, t) {
        return d(e.getUTCMilliseconds(), t, 3);
      }
      function ae(e, t) {
        return oe(e, t) + "000";
      }
      function ce(e, t) {
        return d(e.getUTCMonth() + 1, t, 2);
      }
      function le(e, t) {
        return d(e.getUTCMinutes(), t, 2);
      }
      function se(e, t) {
        return d(e.getUTCSeconds(), t, 2);
      }
      function fe(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t;
      }
      function de(e, t) {
        return d(r.utcSunday.count((0, r.utcYear)(e) - 1, e), t, 2);
      }
      function he(e) {
        var t = e.getUTCDay();
        return t >= 4 || 0 === t
          ? (0, r.utcThursday)(e)
          : r.utcThursday.ceil(e);
      }
      function _e(e, t) {
        return (
          (e = he(e)),
          d(
            r.utcThursday.count((0, r.utcYear)(e), e) +
              (4 === (0, r.utcYear)(e).getUTCDay()),
            t,
            2,
          )
        );
      }
      function pe(e) {
        return e.getUTCDay();
      }
      function ye(e, t) {
        return d(r.utcMonday.count((0, r.utcYear)(e) - 1, e), t, 2);
      }
      function ve(e, t) {
        return d(e.getUTCFullYear() % 100, t, 2);
      }
      function ge(e, t) {
        return ((e = he(e)), d(e.getUTCFullYear() % 100, t, 2));
      }
      function be(e, t) {
        return d(e.getUTCFullYear() % 1e4, t, 4);
      }
      function me(e, t) {
        var n = e.getUTCDay();
        return (
          (e =
            n >= 4 || 0 === n ? (0, r.utcThursday)(e) : r.utcThursday.ceil(e)),
          d(e.getUTCFullYear() % 1e4, t, 4)
        );
      }
      function xe() {
        return "+0000";
      }
      function Me() {
        return "%";
      }
      function Pe(e) {
        return +e;
      }
      function Oe(e) {
        return Math.floor(+e / 1e3);
      }
    },
    6340: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isoSpecifier = t.default = void 0));
      var r = n(5335),
        i = (t.isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ");
      function u(e) {
        return e.toISOString();
      }
      var o = Date.prototype.toISOString ? u : (0, r.utcFormat)(i);
      t.default = o;
    },
    6341: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.copy = s),
        (t.default = f),
        (t.sequentialLog = d),
        (t.sequentialPow = _),
        (t.sequentialSqrt = p),
        (t.sequentialSymlog = h));
      var r = n(3594),
        i = n(3158),
        u = n(3797),
        o = n(5331),
        a = n(5332),
        c = n(5333);
      function l() {
        var e,
          t,
          n,
          i,
          u,
          o = 0,
          a = 1,
          c = r.identity,
          l = !1;
        function s(t) {
          return isNaN((t = +t))
            ? u
            : c(
                0 === n
                  ? 0.5
                  : ((t = (i(t) - e) * n), l ? Math.max(0, Math.min(1, t)) : t),
              );
        }
        return (
          (s.domain = function (r) {
            return arguments.length
              ? ((e = i((o = +r[0]))),
                (t = i((a = +r[1]))),
                (n = e === t ? 0 : 1 / (t - e)),
                s)
              : [o, a];
          }),
          (s.clamp = function (e) {
            return arguments.length ? ((l = !!e), s) : l;
          }),
          (s.interpolator = function (e) {
            return arguments.length ? ((c = e), s) : c;
          }),
          (s.unknown = function (e) {
            return arguments.length ? ((u = e), s) : u;
          }),
          function (r) {
            return (
              (i = r),
              (e = r(o)),
              (t = r(a)),
              (n = e === t ? 0 : 1 / (t - e)),
              s
            );
          }
        );
      }
      function s(e, t) {
        return t
          .domain(e.domain())
          .interpolator(e.interpolator())
          .clamp(e.clamp())
          .unknown(e.unknown());
      }
      function f() {
        var e = (0, u.linearish)(l()(r.identity));
        return (
          (e.copy = function () {
            return s(e, f());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function d() {
        var e = (0, o.loggish)(l()).domain([1, 10]);
        return (
          (e.copy = function () {
            return s(e, d()).base(e.base());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function h() {
        var e = (0, a.symlogish)(l());
        return (
          (e.copy = function () {
            return s(e, h()).constant(e.constant());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function _() {
        var e = (0, c.powish)(l());
        return (
          (e.copy = function () {
            return s(e, _()).exponent(e.exponent());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function p() {
        return _.apply(null, arguments).exponent(0.5);
      }
    },
    6342: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var i = n(3794),
        u = r(n(3798)),
        o = r(n(4735)),
        a = r(n(5336)),
        c = n(5337);
      function l() {
        var e = c.x,
          t = null,
          n = (0, u.default)(0),
          r = c.y,
          l = (0, u.default)(!0),
          s = null,
          f = o.default,
          d = null;
        function h(u) {
          var o,
            a,
            c,
            h,
            _,
            p = u.length,
            y = !1,
            v = new Array(p),
            g = new Array(p);
          for (null == s && (d = f((_ = (0, i.path)()))), o = 0; o <= p; ++o) {
            if (!(o < p && l((h = u[o]), o, u)) === y)
              if ((y = !y)) ((a = o), d.areaStart(), d.lineStart());
              else {
                for (d.lineEnd(), d.lineStart(), c = o - 1; c >= a; --c)
                  d.point(v[c], g[c]);
                (d.lineEnd(), d.areaEnd());
              }
            y &&
              ((v[o] = +e(h, o, u)),
              (g[o] = +n(h, o, u)),
              d.point(t ? +t(h, o, u) : v[o], r ? +r(h, o, u) : g[o]));
          }
          if (_) return ((d = null), _ + "" || null);
        }
        function _() {
          return (0, a.default)().defined(l).curve(f).context(s);
        }
        return (
          (h.x = function (n) {
            return arguments.length
              ? ((e = "function" === typeof n ? n : (0, u.default)(+n)),
                (t = null),
                h)
              : e;
          }),
          (h.x0 = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), h)
              : e;
          }),
          (h.x1 = function (e) {
            return arguments.length
              ? ((t =
                  null == e
                    ? null
                    : "function" === typeof e
                      ? e
                      : (0, u.default)(+e)),
                h)
              : t;
          }),
          (h.y = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, u.default)(+e)),
                (r = null),
                h)
              : n;
          }),
          (h.y0 = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, u.default)(+e)), h)
              : n;
          }),
          (h.y1 = function (e) {
            return arguments.length
              ? ((r =
                  null == e
                    ? null
                    : "function" === typeof e
                      ? e
                      : (0, u.default)(+e)),
                h)
              : r;
          }),
          (h.lineX0 = h.lineY0 =
            function () {
              return _().x(e).y(n);
            }),
          (h.lineY1 = function () {
            return _().x(e).y(r);
          }),
          (h.lineX1 = function () {
            return _().x(t).y(n);
          }),
          (h.defined = function (e) {
            return arguments.length
              ? ((l = "function" === typeof e ? e : (0, u.default)(!!e)), h)
              : l;
          }),
          (h.curve = function (e) {
            return arguments.length ? ((f = e), null != s && (d = f(s)), h) : f;
          }),
          (h.context = function (e) {
            return arguments.length
              ? (null == e ? (s = d = null) : (d = f((s = e))), h)
              : s;
          }),
          h
        );
      }
    },
    6343: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.curveRadialLinear = void 0),
        (t.default = o));
      var i = r(n(4735));
      t.curveRadialLinear = o(i.default);
      function u(e) {
        this._curve = e;
      }
      function o(e) {
        function t(t) {
          return new u(e(t));
        }
        return ((t._curve = e), t);
      }
      u.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (e, t) {
          this._curve.point(t * Math.sin(e), t * -Math.cos(e));
        },
      };
    },
    6344: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = c),
        (t.lineRadial = a));
      var i = o(n(6343)),
        u = r(n(5336));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function a(e) {
        var t = e.curve;
        return (
          (e.angle = e.x),
          delete e.x,
          (e.radius = e.y),
          delete e.y,
          (e.curve = function (e) {
            return arguments.length ? t((0, i.default)(e)) : t()._curve;
          }),
          e
        );
      }
      function c() {
        return a((0, u.default)().curve(i.curveRadialLinear));
      }
    },
    6345: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return [(t = +t) * Math.cos((e -= Math.PI / 2)), t * Math.sin(e)];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    6346: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slice = void 0));
      t.slice = Array.prototype.slice;
    },
    6347: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(4504);
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t / r.pi);
          (e.moveTo(n, 0), e.arc(0, 0, n, 0, r.tau));
        },
      };
    },
    6348: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t / 5) / 2;
          (e.moveTo(-3 * n, -n),
            e.lineTo(-n, -n),
            e.lineTo(-n, -3 * n),
            e.lineTo(n, -3 * n),
            e.lineTo(n, -n),
            e.lineTo(3 * n, -n),
            e.lineTo(3 * n, n),
            e.lineTo(n, n),
            e.lineTo(n, 3 * n),
            e.lineTo(-n, 3 * n),
            e.lineTo(-n, n),
            e.lineTo(-3 * n, n),
            e.closePath());
        },
      };
    },
    6349: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = Math.sqrt(1 / 3),
        i = 2 * r;
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t / i),
            u = n * r;
          (e.moveTo(0, -n),
            e.lineTo(u, 0),
            e.lineTo(0, n),
            e.lineTo(-u, 0),
            e.closePath());
        },
      };
    },
    6350: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(4504),
        i = 0.8908130915292852,
        u = Math.sin(r.pi / 10) / Math.sin((7 * r.pi) / 10),
        o = Math.sin(r.tau / 10) * u,
        a = -Math.cos(r.tau / 10) * u;
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t * i),
            u = o * n,
            c = a * n;
          (e.moveTo(0, -n), e.lineTo(u, c));
          for (var l = 1; l < 5; ++l) {
            var s = (r.tau * l) / 5,
              f = Math.cos(s),
              d = Math.sin(s);
            (e.lineTo(d * n, -f * n), e.lineTo(f * u - d * c, d * u + f * c));
          }
          e.closePath();
        },
      };
    },
    6351: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t),
            r = -n / 2;
          e.rect(r, r, n, n);
        },
      };
    },
    6352: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = Math.sqrt(3);
      t.default = {
        draw: function (e, t) {
          var n = -Math.sqrt(t / (3 * r));
          (e.moveTo(0, 2 * n),
            e.lineTo(-r * n, -n),
            e.lineTo(r * n, -n),
            e.closePath());
        },
      };
    },
    6353: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = -0.5,
        i = Math.sqrt(3) / 2,
        u = 1 / Math.sqrt(12),
        o = 3 * (u / 2 + 1);
      t.default = {
        draw: function (e, t) {
          var n = Math.sqrt(t / o),
            a = n / 2,
            c = n * u,
            l = a,
            s = n * u + n,
            f = -l,
            d = s;
          (e.moveTo(a, c),
            e.lineTo(l, s),
            e.lineTo(f, d),
            e.lineTo(r * a - i * c, i * a + r * c),
            e.lineTo(r * l - i * s, i * l + r * s),
            e.lineTo(r * f - i * d, i * f + r * d),
            e.lineTo(r * a + i * c, r * c - i * a),
            e.lineTo(r * l + i * s, r * s - i * l),
            e.lineTo(r * f + i * d, r * d - i * f),
            e.closePath());
        },
      };
    },
    6354: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CardinalClosed = o),
        (t.default = void 0));
      var i = r(n(4736)),
        u = n(4738);
      function o(e, t) {
        ((this._context = e), (this._k = (1 - t) / 6));
      }
      o.prototype = {
        areaStart: i.default,
        areaEnd: i.default,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x3, this._y3),
                this._context.closePath());
              break;
            case 2:
              (this._context.lineTo(this._x3, this._y3),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5));
              break;
          }
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              ((this._point = 1), (this._x3 = e), (this._y3 = t));
              break;
            case 1:
              ((this._point = 2),
                this._context.moveTo((this._x4 = e), (this._y4 = t)));
              break;
            case 2:
              ((this._point = 3), (this._x5 = e), (this._y5 = t));
              break;
            default:
              (0, u.point)(this, e, t);
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return new o(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
    },
    6355: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CardinalOpen = i),
        (t.default = void 0));
      var r = n(4738);
      function i(e, t) {
        ((this._context = e), (this._k = (1 - t) / 6));
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2));
              break;
            case 3:
              this._point = 4;
            default:
              (0, r.point)(this, e, t);
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return new i(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
    },
    6356: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4506));
      function u(e) {
        var t = e.map(o);
        return (0, i.default)(e).sort(function (e, n) {
          return t[e] - t[n];
        });
      }
      function o(e) {
        var t,
          n = -1,
          r = 0,
          i = e.length,
          u = -1 / 0;
        while (++n < i) (t = +e[n][1]) > u && ((u = t), (r = n));
        return r;
      }
    },
    8474: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(4722)),
        u = r(n(6284));
      function o(e) {
        return (0, u.default)((0, i.default)(e).call(document.documentElement));
      }
    },
    8475: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = n(3340),
        u = r(n(5305));
      function o(e) {
        "function" !== typeof e && (e = (0, u.default)(e));
        for (
          var t = this._groups, n = t.length, r = new Array(n), o = 0;
          o < n;
          ++o
        )
          for (
            var a, c, l = t[o], s = l.length, f = (r[o] = new Array(s)), d = 0;
            d < s;
            ++d
          )
            (a = l[d]) &&
              (c = e.call(a, a.__data__, d, l)) &&
              ("__data__" in a && (c.__data__ = a.__data__), (f[d] = c));
        return new i.Selection(r, this._parents);
      }
    },
    8476: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = n(3340),
        u = r(n(6285));
      function o(e) {
        "function" !== typeof e && (e = (0, u.default)(e));
        for (
          var t = this._groups, n = t.length, r = [], o = [], a = 0;
          a < n;
          ++a
        )
          for (var c, l = t[a], s = l.length, f = 0; f < s; ++f)
            (c = l[f]) && (r.push(e.call(c, c.__data__, f, l)), o.push(c));
        return new i.Selection(r, o);
      }
    },
    8477: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = n(3340),
        u = r(n(6286));
      function o(e) {
        "function" !== typeof e && (e = (0, u.default)(e));
        for (
          var t = this._groups, n = t.length, r = new Array(n), o = 0;
          o < n;
          ++o
        )
          for (
            var a, c = t[o], l = c.length, s = (r[o] = []), f = 0;
            f < l;
            ++f
          )
            (a = c[f]) && e.call(a, a.__data__, f, c) && s.push(a);
        return new i.Selection(r, this._parents);
      }
    },
    8478: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = s));
      var i = n(3340),
        u = n(6287),
        o = r(n(8479)),
        a = "$";
      function c(e, t, n, r, i, o) {
        for (var a, c = 0, l = t.length, s = o.length; c < s; ++c)
          (a = t[c])
            ? ((a.__data__ = o[c]), (r[c] = a))
            : (n[c] = new u.EnterNode(e, o[c]));
        for (; c < l; ++c) (a = t[c]) && (i[c] = a);
      }
      function l(e, t, n, r, i, o, c) {
        var l,
          s,
          f,
          d = {},
          h = t.length,
          _ = o.length,
          p = new Array(h);
        for (l = 0; l < h; ++l)
          (s = t[l]) &&
            ((p[l] = f = a + c.call(s, s.__data__, l, t)),
            f in d ? (i[l] = s) : (d[f] = s));
        for (l = 0; l < _; ++l)
          ((f = a + c.call(e, o[l], l, o)),
            (s = d[f])
              ? ((r[l] = s), (s.__data__ = o[l]), (d[f] = null))
              : (n[l] = new u.EnterNode(e, o[l])));
        for (l = 0; l < h; ++l) (s = t[l]) && d[p[l]] === s && (i[l] = s);
      }
      function s(e, t) {
        if (!e)
          return (
            (v = new Array(this.size())),
            (h = -1),
            this.each(function (e) {
              v[++h] = e;
            }),
            v
          );
        var n = t ? l : c,
          r = this._parents,
          u = this._groups;
        "function" !== typeof e && (e = (0, o.default)(e));
        for (
          var a = u.length,
            s = new Array(a),
            f = new Array(a),
            d = new Array(a),
            h = 0;
          h < a;
          ++h
        ) {
          var _ = r[h],
            p = u[h],
            y = p.length,
            v = e.call(_, _ && _.__data__, h, r),
            g = v.length,
            b = (f[h] = new Array(g)),
            m = (s[h] = new Array(g)),
            x = (d[h] = new Array(y));
          n(_, p, b, m, x, v, t);
          for (var M, P, O = 0, j = 0; O < g; ++O)
            if ((M = b[O])) {
              O >= j && (j = O + 1);
              while (!(P = m[j]) && ++j < g);
              M._next = P || null;
            }
        }
        return ((s = new i.Selection(s, r)), (s._enter = f), (s._exit = d), s);
      }
    },
    8479: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8480: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(6288)),
        u = n(3340);
      function o() {
        return new u.Selection(
          this._exit || this._groups.map(i.default),
          this._parents,
        );
      }
    },
    8481: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r = this.enter(),
          i = this,
          u = this.exit();
        return (
          (r = "function" === typeof e ? e(r) : r.append(e + "")),
          null != t && (i = t(i)),
          null == n ? u.remove() : n(u),
          r && i ? r.merge(i).order() : i
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8482: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(3340);
      function i(e) {
        for (
          var t = this._groups,
            n = e._groups,
            i = t.length,
            u = n.length,
            o = Math.min(i, u),
            a = new Array(i),
            c = 0;
          c < o;
          ++c
        )
          for (
            var l,
              s = t[c],
              f = n[c],
              d = s.length,
              h = (a[c] = new Array(d)),
              _ = 0;
            _ < d;
            ++_
          )
            (l = s[_] || f[_]) && (h[_] = l);
        for (; c < i; ++c) a[c] = t[c];
        return new r.Selection(a, this._parents);
      }
    },
    8483: function (e, t, n) {
      "use strict";
      function r() {
        for (var e = this._groups, t = -1, n = e.length; ++t < n; )
          for (var r, i = e[t], u = i.length - 1, o = i[u]; --u >= 0; )
            (r = i[u]) &&
              (o &&
                4 ^ r.compareDocumentPosition(o) &&
                o.parentNode.insertBefore(r, o),
              (o = r));
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8484: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(3340);
      function i(e) {
        function t(t, n) {
          return t && n ? e(t.__data__, n.__data__) : !t - !n;
        }
        e || (e = u);
        for (
          var n = this._groups, i = n.length, o = new Array(i), a = 0;
          a < i;
          ++a
        ) {
          for (
            var c, l = n[a], s = l.length, f = (o[a] = new Array(s)), d = 0;
            d < s;
            ++d
          )
            (c = l[d]) && (f[d] = c);
          f.sort(t);
        }
        return new r.Selection(o, this._parents).order();
      }
      function u(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
    },
    8485: function (e, t, n) {
      "use strict";
      function r() {
        var e = arguments[0];
        return ((arguments[0] = this), e.apply(null, arguments), this);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8486: function (e, t, n) {
      "use strict";
      function r() {
        var e = new Array(this.size()),
          t = -1;
        return (
          this.each(function () {
            e[++t] = this;
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8487: function (e, t, n) {
      "use strict";
      function r() {
        for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
          for (var r = e[t], i = 0, u = r.length; i < u; ++i) {
            var o = r[i];
            if (o) return o;
          }
        return null;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8488: function (e, t, n) {
      "use strict";
      function r() {
        var e = 0;
        return (
          this.each(function () {
            ++e;
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8489: function (e, t, n) {
      "use strict";
      function r() {
        return !this.node();
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8490: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
          for (var i, u = t[n], o = 0, a = u.length; o < a; ++o)
            (i = u[o]) && e.call(i, i.__data__, o, u);
        return this;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8491: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f));
      var i = r(n(5303));
      function u(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function o(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function a(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function c(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function l(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function s(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function f(e, t) {
        var n = (0, i.default)(e);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local
            ? r.getAttributeNS(n.space, n.local)
            : r.getAttribute(n);
        }
        return this.each(
          (null == t
            ? n.local
              ? o
              : u
            : "function" === typeof t
              ? n.local
                ? s
                : l
              : n.local
                ? c
                : a)(n, t),
        );
      }
    },
    8492: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          delete this[e];
        };
      }
      function i(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function u(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function o(e, t) {
        return arguments.length > 1
          ? this.each((null == t ? r : "function" === typeof t ? u : i)(e, t))
          : this.node()[e];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
    },
    8493: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.trim().split(/^|\s+/);
      }
      function i(e) {
        return e.classList || new u(e);
      }
      function u(e) {
        ((this._node = e), (this._names = r(e.getAttribute("class") || "")));
      }
      function o(e, t) {
        var n = i(e),
          r = -1,
          u = t.length;
        while (++r < u) n.add(t[r]);
      }
      function a(e, t) {
        var n = i(e),
          r = -1,
          u = t.length;
        while (++r < u) n.remove(t[r]);
      }
      function c(e) {
        return function () {
          o(this, e);
        };
      }
      function l(e) {
        return function () {
          a(this, e);
        };
      }
      function s(e, t) {
        return function () {
          (t.apply(this, arguments) ? o : a)(this, e);
        };
      }
      function f(e, t) {
        var n = r(e + "");
        if (arguments.length < 2) {
          var u = i(this.node()),
            o = -1,
            a = n.length;
          while (++o < a) if (!u.contains(n[o])) return !1;
          return !0;
        }
        return this.each(("function" === typeof t ? s : t ? c : l)(n, t));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = f),
        (u.prototype = {
          add: function (e) {
            var t = this._names.indexOf(e);
            t < 0 &&
              (this._names.push(e),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          remove: function (e) {
            var t = this._names.indexOf(e);
            t >= 0 &&
              (this._names.splice(t, 1),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          contains: function (e) {
            return this._names.indexOf(e) >= 0;
          },
        }));
    },
    8494: function (e, t, n) {
      "use strict";
      function r() {
        this.textContent = "";
      }
      function i(e) {
        return function () {
          this.textContent = e;
        };
      }
      function u(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function o(e) {
        return arguments.length
          ? this.each(null == e ? r : ("function" === typeof e ? u : i)(e))
          : this.node().textContent;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
    },
    8495: function (e, t, n) {
      "use strict";
      function r() {
        this.innerHTML = "";
      }
      function i(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function u(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function o(e) {
        return arguments.length
          ? this.each(null == e ? r : ("function" === typeof e ? u : i)(e))
          : this.node().innerHTML;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
    },
    8496: function (e, t, n) {
      "use strict";
      function r() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function i() {
        return this.each(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
    },
    8497: function (e, t, n) {
      "use strict";
      function r() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function i() {
        return this.each(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
    },
    8498: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4722));
      function u(e) {
        var t = "function" === typeof e ? e : (0, i.default)(e);
        return this.select(function () {
          return this.appendChild(t.apply(this, arguments));
        });
      }
    },
    8499: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var i = r(n(4722)),
        u = r(n(5305));
      function o() {
        return null;
      }
      function a(e, t) {
        var n = "function" === typeof e ? e : (0, i.default)(e),
          r = null == t ? o : "function" === typeof t ? t : (0, u.default)(t);
        return this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            r.apply(this, arguments) || null,
          );
        });
      }
    },
    8500: function (e, t, n) {
      "use strict";
      function r() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function i() {
        return this.each(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
    },
    8501: function (e, t, n) {
      "use strict";
      function r() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function i() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function u(e) {
        return this.select(e ? i : r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
    },
    8502: function (e, t, n) {
      "use strict";
      function r(e) {
        return arguments.length
          ? this.property("__data__", e)
          : this.node().__data__;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8503: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var i = r(n(5306));
      function u(e, t, n) {
        var r = (0, i.default)(e),
          u = r.CustomEvent;
        ("function" === typeof u
          ? (u = new u(t, n))
          : ((u = r.document.createEvent("Event")),
            n
              ? (u.initEvent(t, n.bubbles, n.cancelable), (u.detail = n.detail))
              : u.initEvent(t, !1, !1)),
          e.dispatchEvent(u));
      }
      function o(e, t) {
        return function () {
          return u(this, e, t);
        };
      }
      function a(e, t) {
        return function () {
          return u(this, e, t.apply(this, arguments));
        };
      }
      function c(e, t) {
        return this.each(("function" === typeof t ? a : o)(e, t));
      }
    },
    8504: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = 0;
      function i() {
        return new u();
      }
      function u() {
        this._ = "@" + (++r).toString(36);
      }
      u.prototype = i.prototype = {
        constructor: u,
        get: function (e) {
          var t = this._;
          while (!(t in e)) if (!(e = e.parentNode)) return;
          return e[t];
        },
        set: function (e, t) {
          return (e[this._] = t);
        },
        remove: function (e) {
          return this._ in e && delete e[this._];
        },
        toString: function () {
          return this._;
        },
      };
    },
    8505: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(5308)),
        u = r(n(4723));
      function o(e) {
        var t = (0, i.default)();
        return (
          t.changedTouches && (t = t.changedTouches[0]),
          (0, u.default)(e, t)
        );
      }
    },
    8506: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(3340);
      function i(e) {
        return "string" === typeof e
          ? new r.Selection(
              [document.querySelectorAll(e)],
              [document.documentElement],
            )
          : new r.Selection([null == e ? [] : e], r.root);
      }
    },
    8507: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(5308)),
        u = r(n(4723));
      function o(e, t, n) {
        arguments.length < 3 &&
          ((n = t), (t = (0, i.default)().changedTouches));
        for (var r, o = 0, a = t ? t.length : 0; o < a; ++o)
          if ((r = t[o]).identifier === n) return (0, u.default)(e, r);
        return null;
      }
    },
    8508: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(5308)),
        u = r(n(4723));
      function o(e, t) {
        null == t && (t = (0, i.default)().touches);
        for (var n = 0, r = t ? t.length : 0, o = new Array(r); n < r; ++n)
          o[n] = (0, u.default)(e, t[n]);
        return o;
      }
    },
    8528: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(5315);
      function i(e, t, n) {
        var i = new r.Timer();
        return (
          (t = null == t ? 0 : +t),
          i.restart(
            function (n) {
              (i.stop(), e(n + t));
            },
            t,
            n,
          ),
          i
        );
      }
    },
    8529: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i));
      var r = n(5315);
      function i(e, t, n) {
        var i = new r.Timer(),
          u = t;
        return null == t
          ? (i.restart(e, t, n), i)
          : ((t = +t),
            (n = null == n ? (0, r.now)() : +n),
            i.restart(
              function r(o) {
                ((o += u), i.restart(r, (u += t), n), e(o));
              },
              t,
              n,
            ),
            i);
      }
    },
    8685: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "scaleBand", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "scaleDiverging", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "scaleDivergingLog", {
          enumerable: !0,
          get: function () {
            return g.divergingLog;
          },
        }),
        Object.defineProperty(t, "scaleDivergingPow", {
          enumerable: !0,
          get: function () {
            return g.divergingPow;
          },
        }),
        Object.defineProperty(t, "scaleDivergingSqrt", {
          enumerable: !0,
          get: function () {
            return g.divergingSqrt;
          },
        }),
        Object.defineProperty(t, "scaleDivergingSymlog", {
          enumerable: !0,
          get: function () {
            return g.divergingSymlog;
          },
        }),
        Object.defineProperty(t, "scaleIdentity", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "scaleImplicit", {
          enumerable: !0,
          get: function () {
            return l.implicit;
          },
        }),
        Object.defineProperty(t, "scaleLinear", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "scaleLog", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "scaleOrdinal", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "scalePoint", {
          enumerable: !0,
          get: function () {
            return i.point;
          },
        }),
        Object.defineProperty(t, "scalePow", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "scaleQuantile", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "scaleQuantize", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "scaleSequential", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "scaleSequentialLog", {
          enumerable: !0,
          get: function () {
            return y.sequentialLog;
          },
        }),
        Object.defineProperty(t, "scaleSequentialPow", {
          enumerable: !0,
          get: function () {
            return y.sequentialPow;
          },
        }),
        Object.defineProperty(t, "scaleSequentialQuantile", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "scaleSequentialSqrt", {
          enumerable: !0,
          get: function () {
            return y.sequentialSqrt;
          },
        }),
        Object.defineProperty(t, "scaleSequentialSymlog", {
          enumerable: !0,
          get: function () {
            return y.sequentialSymlog;
          },
        }),
        Object.defineProperty(t, "scaleSqrt", {
          enumerable: !0,
          get: function () {
            return s.sqrt;
          },
        }),
        Object.defineProperty(t, "scaleSymlog", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "scaleThreshold", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "scaleTime", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "scaleUtc", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "tickFormat", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }));
      var i = m(n(8686)),
        u = r(n(8687)),
        o = r(n(3797)),
        a = r(n(5331)),
        c = r(n(5332)),
        l = m(n(6334)),
        s = m(n(5333)),
        f = r(n(8689)),
        d = r(n(8690)),
        h = r(n(8691)),
        _ = r(n(6338)),
        p = r(n(8707)),
        y = m(n(6341)),
        v = r(n(8708)),
        g = m(n(8709)),
        b = r(n(6336));
      function m(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (m = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (t.point = l));
      var i = n(3065),
        u = n(3158),
        o = r(n(6334));
      function a() {
        var e,
          t,
          n = (0, o.default)().unknown(void 0),
          r = n.domain,
          c = n.range,
          l = [0, 1],
          s = !1,
          f = 0,
          d = 0,
          h = 0.5;
        function _() {
          var n = r().length,
            u = l[1] < l[0],
            o = l[u - 0],
            a = l[1 - u];
          ((e = (a - o) / Math.max(1, n - f + 2 * d)),
            s && (e = Math.floor(e)),
            (o += (a - o - e * (n - f)) * h),
            (t = e * (1 - f)),
            s && ((o = Math.round(o)), (t = Math.round(t))));
          var _ = (0, i.range)(n).map(function (t) {
            return o + e * t;
          });
          return c(u ? _.reverse() : _);
        }
        return (
          delete n.unknown,
          (n.domain = function (e) {
            return arguments.length ? (r(e), _()) : r();
          }),
          (n.range = function (e) {
            return arguments.length ? ((l = [+e[0], +e[1]]), _()) : l.slice();
          }),
          (n.rangeRound = function (e) {
            return ((l = [+e[0], +e[1]]), (s = !0), _());
          }),
          (n.bandwidth = function () {
            return t;
          }),
          (n.step = function () {
            return e;
          }),
          (n.round = function (e) {
            return arguments.length ? ((s = !!e), _()) : s;
          }),
          (n.padding = function (e) {
            return arguments.length ? ((f = Math.min(1, (d = +e))), _()) : f;
          }),
          (n.paddingInner = function (e) {
            return arguments.length ? ((f = Math.min(1, e)), _()) : f;
          }),
          (n.paddingOuter = function (e) {
            return arguments.length ? ((d = +e), _()) : d;
          }),
          (n.align = function (e) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, e))), _())
              : h;
          }),
          (n.copy = function () {
            return a(r(), l).round(s).paddingInner(f).paddingOuter(d).align(h);
          }),
          u.initRange.apply(_(), arguments)
        );
      }
      function c(e) {
        var t = e.copy;
        return (
          (e.padding = e.paddingOuter),
          delete e.paddingInner,
          delete e.paddingOuter,
          (e.copy = function () {
            return c(t());
          }),
          e
        );
      }
      function l() {
        return c(a.apply(null, arguments).paddingInner(1));
      }
    },
    8687: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var i = n(3796),
        u = n(3797),
        o = r(n(6335));
      function a(e) {
        var t;
        function n(e) {
          return isNaN((e = +e)) ? t : e;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (t) {
              return arguments.length
                ? ((e = i.map.call(t, o.default)), n)
                : e.slice();
            }),
          (n.unknown = function (e) {
            return arguments.length ? ((t = e), n) : t;
          }),
          (n.copy = function () {
            return a(e).unknown(t);
          }),
          (e = arguments.length ? i.map.call(e, o.default) : [0, 1]),
          (0, u.linearish)(n)
        );
      }
    },
    8688: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8689: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var r = n(3065),
        i = n(3796),
        u = n(3158);
      function o() {
        var e,
          t = [],
          n = [],
          a = [];
        function c() {
          var e = 0,
            i = Math.max(1, n.length);
          a = new Array(i - 1);
          while (++e < i) a[e - 1] = (0, r.quantile)(t, e / i);
          return l;
        }
        function l(t) {
          return isNaN((t = +t)) ? e : n[(0, r.bisect)(a, t)];
        }
        return (
          (l.invertExtent = function (e) {
            var r = n.indexOf(e);
            return r < 0
              ? [NaN, NaN]
              : [
                  r > 0 ? a[r - 1] : t[0],
                  r < a.length ? a[r] : t[t.length - 1],
                ];
          }),
          (l.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (var n, i = 0, u = e.length; i < u; ++i)
              ((n = e[i]), null == n || isNaN((n = +n)) || t.push(n));
            return (t.sort(r.ascending), c());
          }),
          (l.range = function (e) {
            return arguments.length ? ((n = i.slice.call(e)), c()) : n.slice();
          }),
          (l.unknown = function (t) {
            return arguments.length ? ((e = t), l) : e;
          }),
          (l.quantiles = function () {
            return a.slice();
          }),
          (l.copy = function () {
            return o().domain(t).range(n).unknown(e);
          }),
          u.initRange.apply(l, arguments)
        );
      }
    },
    8690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(3065),
        i = n(3796),
        u = n(3797),
        o = n(3158);
      function a() {
        var e,
          t = 0,
          n = 1,
          c = 1,
          l = [0.5],
          s = [0, 1];
        function f(t) {
          return t <= t ? s[(0, r.bisect)(l, t, 0, c)] : e;
        }
        function d() {
          var e = -1;
          l = new Array(c);
          while (++e < c) l[e] = ((e + 1) * n - (e - c) * t) / (c + 1);
          return f;
        }
        return (
          (f.domain = function (e) {
            return arguments.length ? ((t = +e[0]), (n = +e[1]), d()) : [t, n];
          }),
          (f.range = function (e) {
            return arguments.length
              ? ((c = (s = i.slice.call(e)).length - 1), d())
              : s.slice();
          }),
          (f.invertExtent = function (e) {
            var r = s.indexOf(e);
            return r < 0
              ? [NaN, NaN]
              : r < 1
                ? [t, l[0]]
                : r >= c
                  ? [l[c - 1], n]
                  : [l[r - 1], l[r]];
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((e = t), f) : f;
          }),
          (f.thresholds = function () {
            return l.slice();
          }),
          (f.copy = function () {
            return a().domain([t, n]).range(s).unknown(e);
          }),
          o.initRange.apply((0, u.linearish)(f), arguments)
        );
      }
    },
    8691: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var r = n(3065),
        i = n(3796),
        u = n(3158);
      function o() {
        var e,
          t = [0.5],
          n = [0, 1],
          a = 1;
        function c(i) {
          return i <= i ? n[(0, r.bisect)(t, i, 0, a)] : e;
        }
        return (
          (c.domain = function (e) {
            return arguments.length
              ? ((t = i.slice.call(e)),
                (a = Math.min(t.length, n.length - 1)),
                c)
              : t.slice();
          }),
          (c.range = function (e) {
            return arguments.length
              ? ((n = i.slice.call(e)),
                (a = Math.min(t.length, n.length - 1)),
                c)
              : n.slice();
          }),
          (c.invertExtent = function (e) {
            var r = n.indexOf(e);
            return [t[r - 1], t[r]];
          }),
          (c.unknown = function (t) {
            return arguments.length ? ((e = t), c) : e;
          }),
          (c.copy = function () {
            return o().domain(t).range(n).unknown(e);
          }),
          u.initRange.apply(c, arguments)
        );
      }
    },
    8692: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.milliseconds = t.default = void 0));
      var i = r(n(3120)),
        u = (0, i.default)(
          function () {},
          function (e, t) {
            e.setTime(+e + t);
          },
          function (e, t) {
            return t - e;
          },
        );
      u.every = function (e) {
        return (
          (e = Math.floor(e)),
          isFinite(e) && e > 0
            ? e > 1
              ? (0, i.default)(
                  function (t) {
                    t.setTime(Math.floor(t / e) * e);
                  },
                  function (t, n) {
                    t.setTime(+t + n * e);
                  },
                  function (t, n) {
                    return (n - t) / e;
                  },
                )
              : u
            : null
        );
      };
      ((t.default = u), (t.milliseconds = u.range));
    },
    8693: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.seconds = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setTime(e - e.getMilliseconds());
          },
          function (e, t) {
            e.setTime(+e + t * u.durationSecond);
          },
          function (e, t) {
            return (t - e) / u.durationSecond;
          },
          function (e) {
            return e.getUTCSeconds();
          },
        );
      ((t.default = o), (t.seconds = o.range));
    },
    8694: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.minutes = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setTime(
              e - e.getMilliseconds() - e.getSeconds() * u.durationSecond,
            );
          },
          function (e, t) {
            e.setTime(+e + t * u.durationMinute);
          },
          function (e, t) {
            return (t - e) / u.durationMinute;
          },
          function (e) {
            return e.getMinutes();
          },
        );
      ((t.default = o), (t.minutes = o.range));
    },
    8695: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hours = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setTime(
              e -
                e.getMilliseconds() -
                e.getSeconds() * u.durationSecond -
                e.getMinutes() * u.durationMinute,
            );
          },
          function (e, t) {
            e.setTime(+e + t * u.durationHour);
          },
          function (e, t) {
            return (t - e) / u.durationHour;
          },
          function (e) {
            return e.getHours();
          },
        );
      ((t.default = o), (t.hours = o.range));
    },
    8696: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.days = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setDate(e.getDate() + t);
          },
          function (e, t) {
            return (
              (t -
                e -
                (t.getTimezoneOffset() - e.getTimezoneOffset()) *
                  u.durationMinute) /
              u.durationDay
            );
          },
          function (e) {
            return e.getDate() - 1;
          },
        );
      ((t.default = o), (t.days = o.range));
    },
    8697: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wednesdays =
          t.wednesday =
          t.tuesdays =
          t.tuesday =
          t.thursdays =
          t.thursday =
          t.sundays =
          t.sunday =
          t.saturdays =
          t.saturday =
          t.mondays =
          t.monday =
          t.fridays =
          t.friday =
            void 0));
      var i = r(n(3120)),
        u = n(3442);
      function o(e) {
        return (0, i.default)(
          function (t) {
            (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
              t.setHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setDate(e.getDate() + 7 * t);
          },
          function (e, t) {
            return (
              (t -
                e -
                (t.getTimezoneOffset() - e.getTimezoneOffset()) *
                  u.durationMinute) /
              u.durationWeek
            );
          },
        );
      }
      var a = (t.sunday = o(0)),
        c = (t.monday = o(1)),
        l = (t.tuesday = o(2)),
        s = (t.wednesday = o(3)),
        f = (t.thursday = o(4)),
        d = (t.friday = o(5)),
        h = (t.saturday = o(6));
      ((t.sundays = a.range),
        (t.mondays = c.range),
        (t.tuesdays = l.range),
        (t.wednesdays = s.range),
        (t.thursdays = f.range),
        (t.fridays = d.range),
        (t.saturdays = h.range));
    },
    8698: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.months = t.default = void 0));
      var i = r(n(3120)),
        u = (0, i.default)(
          function (e) {
            (e.setDate(1), e.setHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setMonth(e.getMonth() + t);
          },
          function (e, t) {
            return (
              t.getMonth() -
              e.getMonth() +
              12 * (t.getFullYear() - e.getFullYear())
            );
          },
          function (e) {
            return e.getMonth();
          },
        );
      ((t.default = u), (t.months = u.range));
    },
    8699: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.years = t.default = void 0));
      var i = r(n(3120)),
        u = (0, i.default)(
          function (e) {
            (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setFullYear(e.getFullYear() + t);
          },
          function (e, t) {
            return t.getFullYear() - e.getFullYear();
          },
          function (e) {
            return e.getFullYear();
          },
        );
      u.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? (0, i.default)(
              function (t) {
                (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0));
              },
              function (t, n) {
                t.setFullYear(t.getFullYear() + n * e);
              },
            )
          : null;
      };
      ((t.default = u), (t.years = u.range));
    },
    8700: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcMinutes = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setUTCSeconds(0, 0);
          },
          function (e, t) {
            e.setTime(+e + t * u.durationMinute);
          },
          function (e, t) {
            return (t - e) / u.durationMinute;
          },
          function (e) {
            return e.getUTCMinutes();
          },
        );
      ((t.default = o), (t.utcMinutes = o.range));
    },
    8701: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcHours = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setUTCMinutes(0, 0, 0);
          },
          function (e, t) {
            e.setTime(+e + t * u.durationHour);
          },
          function (e, t) {
            return (t - e) / u.durationHour;
          },
          function (e) {
            return e.getUTCHours();
          },
        );
      ((t.default = o), (t.utcHours = o.range));
    },
    8702: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcDays = t.default = void 0));
      var i = r(n(3120)),
        u = n(3442),
        o = (0, i.default)(
          function (e) {
            e.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + t);
          },
          function (e, t) {
            return (t - e) / u.durationDay;
          },
          function (e) {
            return e.getUTCDate() - 1;
          },
        );
      ((t.default = o), (t.utcDays = o.range));
    },
    8703: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcWednesdays =
          t.utcWednesday =
          t.utcTuesdays =
          t.utcTuesday =
          t.utcThursdays =
          t.utcThursday =
          t.utcSundays =
          t.utcSunday =
          t.utcSaturdays =
          t.utcSaturday =
          t.utcMondays =
          t.utcMonday =
          t.utcFridays =
          t.utcFriday =
            void 0));
      var i = r(n(3120)),
        u = n(3442);
      function o(e) {
        return (0, i.default)(
          function (t) {
            (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          function (e, t) {
            return (t - e) / u.durationWeek;
          },
        );
      }
      var a = (t.utcSunday = o(0)),
        c = (t.utcMonday = o(1)),
        l = (t.utcTuesday = o(2)),
        s = (t.utcWednesday = o(3)),
        f = (t.utcThursday = o(4)),
        d = (t.utcFriday = o(5)),
        h = (t.utcSaturday = o(6));
      ((t.utcSundays = a.range),
        (t.utcMondays = c.range),
        (t.utcTuesdays = l.range),
        (t.utcWednesdays = s.range),
        (t.utcThursdays = f.range),
        (t.utcFridays = d.range),
        (t.utcSaturdays = h.range));
    },
    8704: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcMonths = t.default = void 0));
      var i = r(n(3120)),
        u = (0, i.default)(
          function (e) {
            (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setUTCMonth(e.getUTCMonth() + t);
          },
          function (e, t) {
            return (
              t.getUTCMonth() -
              e.getUTCMonth() +
              12 * (t.getUTCFullYear() - e.getUTCFullYear())
            );
          },
          function (e) {
            return e.getUTCMonth();
          },
        );
      ((t.default = u), (t.utcMonths = u.range));
    },
    8705: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utcYears = t.default = void 0));
      var i = r(n(3120)),
        u = (0, i.default)(
          function (e) {
            (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
          },
          function (e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t);
          },
          function (e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear();
          },
          function (e) {
            return e.getUTCFullYear();
          },
        );
      u.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? (0, i.default)(
              function (t) {
                (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0));
              },
              function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n * e);
              },
            )
          : null;
      };
      ((t.default = u), (t.utcYears = u.range));
    },
    8706: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(6340),
        i = n(5335);
      function u(e) {
        var t = new Date(e);
        return isNaN(t) ? null : t;
      }
      var o = +new Date("2000-01-01T00:00:00.000Z")
        ? u
        : (0, i.utcParse)(r.isoSpecifier);
      t.default = o;
    },
    8707: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var r = n(6338),
        i = n(5334),
        u = n(4734),
        o = n(3158);
      function a() {
        return o.initRange.apply(
          (0, r.calendar)(
            u.utcYear,
            u.utcMonth,
            u.utcWeek,
            u.utcDay,
            u.utcHour,
            u.utcMinute,
            u.utcSecond,
            u.utcMillisecond,
            i.utcFormat,
          ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
          arguments,
        );
      }
    },
    8708: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var r = n(3065),
        i = n(3594),
        u = n(3158);
      function o() {
        var e = [],
          t = i.identity;
        function n(n) {
          if (!isNaN((n = +n)))
            return t(((0, r.bisect)(e, n) - 1) / (e.length - 1));
        }
        return (
          (n.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (var i, u = 0, o = t.length; u < o; ++u)
              ((i = t[u]), null == i || isNaN((i = +i)) || e.push(i));
            return (e.sort(r.ascending), n);
          }),
          (n.interpolator = function (e) {
            return arguments.length ? ((t = e), n) : t;
          }),
          (n.copy = function () {
            return o(t).domain(e);
          }),
          u.initInterpolator.apply(n, arguments)
        );
      }
    },
    8709: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = f),
        (t.divergingLog = d),
        (t.divergingPow = _),
        (t.divergingSqrt = p),
        (t.divergingSymlog = h));
      var r = n(3594),
        i = n(3158),
        u = n(3797),
        o = n(5331),
        a = n(6341),
        c = n(5332),
        l = n(5333);
      function s() {
        var e,
          t,
          n,
          i,
          u,
          o,
          a,
          c = 0,
          l = 0.5,
          s = 1,
          f = r.identity,
          d = !1;
        function h(e) {
          return isNaN((e = +e))
            ? a
            : ((e = 0.5 + ((e = +o(e)) - t) * (e < t ? i : u)),
              f(d ? Math.max(0, Math.min(1, e)) : e));
        }
        return (
          (h.domain = function (r) {
            return arguments.length
              ? ((e = o((c = +r[0]))),
                (t = o((l = +r[1]))),
                (n = o((s = +r[2]))),
                (i = e === t ? 0 : 0.5 / (t - e)),
                (u = t === n ? 0 : 0.5 / (n - t)),
                h)
              : [c, l, s];
          }),
          (h.clamp = function (e) {
            return arguments.length ? ((d = !!e), h) : d;
          }),
          (h.interpolator = function (e) {
            return arguments.length ? ((f = e), h) : f;
          }),
          (h.unknown = function (e) {
            return arguments.length ? ((a = e), h) : a;
          }),
          function (r) {
            return (
              (o = r),
              (e = r(c)),
              (t = r(l)),
              (n = r(s)),
              (i = e === t ? 0 : 0.5 / (t - e)),
              (u = t === n ? 0 : 0.5 / (n - t)),
              h
            );
          }
        );
      }
      function f() {
        var e = (0, u.linearish)(s()(r.identity));
        return (
          (e.copy = function () {
            return (0, a.copy)(e, f());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function d() {
        var e = (0, o.loggish)(s()).domain([0.1, 1, 10]);
        return (
          (e.copy = function () {
            return (0, a.copy)(e, d()).base(e.base());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function h() {
        var e = (0, c.symlogish)(s());
        return (
          (e.copy = function () {
            return (0, a.copy)(e, h()).constant(e.constant());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function _() {
        var e = (0, l.powish)(s());
        return (
          (e.copy = function () {
            return (0, a.copy)(e, _()).exponent(e.exponent());
          }),
          i.initInterpolator.apply(e, arguments)
        );
      }
      function p() {
        return _.apply(null, arguments).exponent(0.5);
      }
    },
    8754: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "arc", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "area", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "areaRadial", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "curveBasis", {
          enumerable: !0,
          get: function () {
            return M.default;
          },
        }),
        Object.defineProperty(t, "curveBasisClosed", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "curveBasisOpen", {
          enumerable: !0,
          get: function () {
            return x.default;
          },
        }),
        Object.defineProperty(t, "curveBundle", {
          enumerable: !0,
          get: function () {
            return P.default;
          },
        }),
        Object.defineProperty(t, "curveCardinal", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "curveCardinalClosed", {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, "curveCardinalOpen", {
          enumerable: !0,
          get: function () {
            return j.default;
          },
        }),
        Object.defineProperty(t, "curveCatmullRom", {
          enumerable: !0,
          get: function () {
            return k.default;
          },
        }),
        Object.defineProperty(t, "curveCatmullRomClosed", {
          enumerable: !0,
          get: function () {
            return T.default;
          },
        }),
        Object.defineProperty(t, "curveCatmullRomOpen", {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        }),
        Object.defineProperty(t, "curveLinear", {
          enumerable: !0,
          get: function () {
            return D.default;
          },
        }),
        Object.defineProperty(t, "curveLinearClosed", {
          enumerable: !0,
          get: function () {
            return C.default;
          },
        }),
        Object.defineProperty(t, "curveMonotoneX", {
          enumerable: !0,
          get: function () {
            return N.monotoneX;
          },
        }),
        Object.defineProperty(t, "curveMonotoneY", {
          enumerable: !0,
          get: function () {
            return N.monotoneY;
          },
        }),
        Object.defineProperty(t, "curveNatural", {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(t, "curveStep", {
          enumerable: !0,
          get: function () {
            return U.default;
          },
        }),
        Object.defineProperty(t, "curveStepAfter", {
          enumerable: !0,
          get: function () {
            return U.stepAfter;
          },
        }),
        Object.defineProperty(t, "curveStepBefore", {
          enumerable: !0,
          get: function () {
            return U.stepBefore;
          },
        }),
        Object.defineProperty(t, "line", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "lineRadial", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "linkHorizontal", {
          enumerable: !0,
          get: function () {
            return f.linkHorizontal;
          },
        }),
        Object.defineProperty(t, "linkRadial", {
          enumerable: !0,
          get: function () {
            return f.linkRadial;
          },
        }),
        Object.defineProperty(t, "linkVertical", {
          enumerable: !0,
          get: function () {
            return f.linkVertical;
          },
        }),
        Object.defineProperty(t, "pie", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "pointRadial", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "radialArea", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "radialLine", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "stack", {
          enumerable: !0,
          get: function () {
            return F.default;
          },
        }),
        Object.defineProperty(t, "stackOffsetDiverging", {
          enumerable: !0,
          get: function () {
            return Y.default;
          },
        }),
        Object.defineProperty(t, "stackOffsetExpand", {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, "stackOffsetNone", {
          enumerable: !0,
          get: function () {
            return q.default;
          },
        }),
        Object.defineProperty(t, "stackOffsetSilhouette", {
          enumerable: !0,
          get: function () {
            return W.default;
          },
        }),
        Object.defineProperty(t, "stackOffsetWiggle", {
          enumerable: !0,
          get: function () {
            return H.default;
          },
        }),
        Object.defineProperty(t, "stackOrderAppearance", {
          enumerable: !0,
          get: function () {
            return R.default;
          },
        }),
        Object.defineProperty(t, "stackOrderAscending", {
          enumerable: !0,
          get: function () {
            return L.default;
          },
        }),
        Object.defineProperty(t, "stackOrderDescending", {
          enumerable: !0,
          get: function () {
            return I.default;
          },
        }),
        Object.defineProperty(t, "stackOrderInsideOut", {
          enumerable: !0,
          get: function () {
            return B.default;
          },
        }),
        Object.defineProperty(t, "stackOrderNone", {
          enumerable: !0,
          get: function () {
            return z.default;
          },
        }),
        Object.defineProperty(t, "stackOrderReverse", {
          enumerable: !0,
          get: function () {
            return V.default;
          },
        }),
        Object.defineProperty(t, "symbol", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "symbolCircle", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "symbolCross", {
          enumerable: !0,
          get: function () {
            return _.default;
          },
        }),
        Object.defineProperty(t, "symbolDiamond", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "symbolSquare", {
          enumerable: !0,
          get: function () {
            return y.default;
          },
        }),
        Object.defineProperty(t, "symbolStar", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, "symbolTriangle", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "symbolWye", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "symbols", {
          enumerable: !0,
          get: function () {
            return d.symbols;
          },
        }));
      var i = r(n(8755)),
        u = r(n(6342)),
        o = r(n(5336)),
        a = r(n(8756)),
        c = r(n(8759)),
        l = r(n(6344)),
        s = r(n(6345)),
        f = n(8760),
        d = X(n(8761)),
        h = r(n(6347)),
        _ = r(n(6348)),
        p = r(n(6349)),
        y = r(n(6351)),
        v = r(n(6350)),
        g = r(n(6352)),
        b = r(n(6353)),
        m = r(n(8762)),
        x = r(n(8763)),
        M = r(n(4737)),
        P = r(n(8764)),
        O = r(n(6354)),
        j = r(n(6355)),
        w = r(n(4738)),
        T = r(n(8765)),
        S = r(n(8766)),
        k = r(n(5338)),
        C = r(n(8767)),
        D = r(n(4735)),
        N = n(8768),
        A = r(n(8769)),
        U = X(n(8770)),
        F = r(n(8771)),
        E = r(n(8772)),
        Y = r(n(8773)),
        q = r(n(4505)),
        W = r(n(8774)),
        H = r(n(8775)),
        R = r(n(6356)),
        L = r(n(5339)),
        I = r(n(8776)),
        B = r(n(8777)),
        z = r(n(4506)),
        V = r(n(8778));
      function X(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (X = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
    },
    8755: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = _));
      var i = n(3794),
        u = r(n(3798)),
        o = n(4504);
      function a(e) {
        return e.innerRadius;
      }
      function c(e) {
        return e.outerRadius;
      }
      function l(e) {
        return e.startAngle;
      }
      function s(e) {
        return e.endAngle;
      }
      function f(e) {
        return e && e.padAngle;
      }
      function d(e, t, n, r, i, u, a, c) {
        var l = n - e,
          s = r - t,
          f = a - i,
          d = c - u,
          h = d * l - f * s;
        if (!(h * h < o.epsilon))
          return (
            (h = (f * (t - u) - d * (e - i)) / h),
            [e + h * l, t + h * s]
          );
      }
      function h(e, t, n, r, i, u, a) {
        var c = e - n,
          l = t - r,
          s = (a ? u : -u) / (0, o.sqrt)(c * c + l * l),
          f = s * l,
          d = -s * c,
          h = e + f,
          _ = t + d,
          p = n + f,
          y = r + d,
          v = (h + p) / 2,
          g = (_ + y) / 2,
          b = p - h,
          m = y - _,
          x = b * b + m * m,
          M = i - u,
          P = h * y - p * _,
          O = (m < 0 ? -1 : 1) * (0, o.sqrt)((0, o.max)(0, M * M * x - P * P)),
          j = (P * m - b * O) / x,
          w = (-P * b - m * O) / x,
          T = (P * m + b * O) / x,
          S = (-P * b + m * O) / x,
          k = j - v,
          C = w - g,
          D = T - v,
          N = S - g;
        return (
          k * k + C * C > D * D + N * N && ((j = T), (w = S)),
          {
            cx: j,
            cy: w,
            x01: -f,
            y01: -d,
            x11: j * (i / M - 1),
            y11: w * (i / M - 1),
          }
        );
      }
      function _() {
        var e = a,
          t = c,
          n = (0, u.default)(0),
          r = null,
          _ = l,
          p = s,
          y = f,
          v = null;
        function g() {
          var u,
            a,
            c = +e.apply(this, arguments),
            l = +t.apply(this, arguments),
            s = _.apply(this, arguments) - o.halfPi,
            f = p.apply(this, arguments) - o.halfPi,
            g = (0, o.abs)(f - s),
            b = f > s;
          if (
            (v || (v = u = (0, i.path)()),
            l < c && ((a = l), (l = c), (c = a)),
            l > o.epsilon)
          )
            if (g > o.tau - o.epsilon)
              (v.moveTo(l * (0, o.cos)(s), l * (0, o.sin)(s)),
                v.arc(0, 0, l, s, f, !b),
                c > o.epsilon &&
                  (v.moveTo(c * (0, o.cos)(f), c * (0, o.sin)(f)),
                  v.arc(0, 0, c, f, s, b)));
            else {
              var m,
                x,
                M = s,
                P = f,
                O = s,
                j = f,
                w = g,
                T = g,
                S = y.apply(this, arguments) / 2,
                k =
                  S > o.epsilon &&
                  (r ? +r.apply(this, arguments) : (0, o.sqrt)(c * c + l * l)),
                C = (0, o.min)(
                  (0, o.abs)(l - c) / 2,
                  +n.apply(this, arguments),
                ),
                D = C,
                N = C;
              if (k > o.epsilon) {
                var A = (0, o.asin)((k / c) * (0, o.sin)(S)),
                  U = (0, o.asin)((k / l) * (0, o.sin)(S));
                ((w -= 2 * A) > o.epsilon
                  ? ((A *= b ? 1 : -1), (O += A), (j -= A))
                  : ((w = 0), (O = j = (s + f) / 2)),
                  (T -= 2 * U) > o.epsilon
                    ? ((U *= b ? 1 : -1), (M += U), (P -= U))
                    : ((T = 0), (M = P = (s + f) / 2)));
              }
              var F = l * (0, o.cos)(M),
                E = l * (0, o.sin)(M),
                Y = c * (0, o.cos)(j),
                q = c * (0, o.sin)(j);
              if (C > o.epsilon) {
                var W,
                  H = l * (0, o.cos)(P),
                  R = l * (0, o.sin)(P),
                  L = c * (0, o.cos)(O),
                  I = c * (0, o.sin)(O);
                if (g < o.pi && (W = d(F, E, L, I, H, R, Y, q))) {
                  var B = F - W[0],
                    z = E - W[1],
                    V = H - W[0],
                    X = R - W[1],
                    Z =
                      1 /
                      (0, o.sin)(
                        (0, o.acos)(
                          (B * V + z * X) /
                            ((0, o.sqrt)(B * B + z * z) *
                              (0, o.sqrt)(V * V + X * X)),
                        ) / 2,
                      ),
                    Q = (0, o.sqrt)(W[0] * W[0] + W[1] * W[1]);
                  ((D = (0, o.min)(C, (c - Q) / (Z - 1))),
                    (N = (0, o.min)(C, (l - Q) / (Z + 1))));
                }
              }
              (T > o.epsilon
                ? N > o.epsilon
                  ? ((m = h(L, I, F, E, l, N, b)),
                    (x = h(H, R, Y, q, l, N, b)),
                    v.moveTo(m.cx + m.x01, m.cy + m.y01),
                    N < C
                      ? v.arc(
                          m.cx,
                          m.cy,
                          N,
                          (0, o.atan2)(m.y01, m.x01),
                          (0, o.atan2)(x.y01, x.x01),
                          !b,
                        )
                      : (v.arc(
                          m.cx,
                          m.cy,
                          N,
                          (0, o.atan2)(m.y01, m.x01),
                          (0, o.atan2)(m.y11, m.x11),
                          !b,
                        ),
                        v.arc(
                          0,
                          0,
                          l,
                          (0, o.atan2)(m.cy + m.y11, m.cx + m.x11),
                          (0, o.atan2)(x.cy + x.y11, x.cx + x.x11),
                          !b,
                        ),
                        v.arc(
                          x.cx,
                          x.cy,
                          N,
                          (0, o.atan2)(x.y11, x.x11),
                          (0, o.atan2)(x.y01, x.x01),
                          !b,
                        )))
                  : (v.moveTo(F, E), v.arc(0, 0, l, M, P, !b))
                : v.moveTo(F, E),
                c > o.epsilon && w > o.epsilon
                  ? D > o.epsilon
                    ? ((m = h(Y, q, H, R, c, -D, b)),
                      (x = h(F, E, L, I, c, -D, b)),
                      v.lineTo(m.cx + m.x01, m.cy + m.y01),
                      D < C
                        ? v.arc(
                            m.cx,
                            m.cy,
                            D,
                            (0, o.atan2)(m.y01, m.x01),
                            (0, o.atan2)(x.y01, x.x01),
                            !b,
                          )
                        : (v.arc(
                            m.cx,
                            m.cy,
                            D,
                            (0, o.atan2)(m.y01, m.x01),
                            (0, o.atan2)(m.y11, m.x11),
                            !b,
                          ),
                          v.arc(
                            0,
                            0,
                            c,
                            (0, o.atan2)(m.cy + m.y11, m.cx + m.x11),
                            (0, o.atan2)(x.cy + x.y11, x.cx + x.x11),
                            b,
                          ),
                          v.arc(
                            x.cx,
                            x.cy,
                            D,
                            (0, o.atan2)(x.y11, x.x11),
                            (0, o.atan2)(x.y01, x.x01),
                            !b,
                          )))
                    : v.arc(0, 0, c, j, O, b)
                  : v.lineTo(Y, q));
            }
          else v.moveTo(0, 0);
          if ((v.closePath(), u)) return ((v = null), u + "" || null);
        }
        return (
          (g.centroid = function () {
            var n = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
              r =
                (+_.apply(this, arguments) + +p.apply(this, arguments)) / 2 -
                o.pi / 2;
            return [(0, o.cos)(r) * n, (0, o.sin)(r) * n];
          }),
          (g.innerRadius = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, u.default)(+t)), g)
              : e;
          }),
          (g.outerRadius = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : (0, u.default)(+e)), g)
              : t;
          }),
          (g.cornerRadius = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : (0, u.default)(+e)), g)
              : n;
          }),
          (g.padRadius = function (e) {
            return arguments.length
              ? ((r =
                  null == e
                    ? null
                    : "function" === typeof e
                      ? e
                      : (0, u.default)(+e)),
                g)
              : r;
          }),
          (g.startAngle = function (e) {
            return arguments.length
              ? ((_ = "function" === typeof e ? e : (0, u.default)(+e)), g)
              : _;
          }),
          (g.endAngle = function (e) {
            return arguments.length
              ? ((p = "function" === typeof e ? e : (0, u.default)(+e)), g)
              : p;
          }),
          (g.padAngle = function (e) {
            return arguments.length
              ? ((y = "function" === typeof e ? e : (0, u.default)(+e)), g)
              : y;
          }),
          (g.context = function (e) {
            return arguments.length ? ((v = null == e ? null : e), g) : v;
          }),
          g
        );
      }
    },
    8756: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var i = r(n(3798)),
        u = r(n(8757)),
        o = r(n(8758)),
        a = n(4504);
      function c() {
        var e = o.default,
          t = u.default,
          n = null,
          r = (0, i.default)(0),
          c = (0, i.default)(a.tau),
          l = (0, i.default)(0);
        function s(i) {
          var u,
            o,
            s,
            f,
            d,
            h = i.length,
            _ = 0,
            p = new Array(h),
            y = new Array(h),
            v = +r.apply(this, arguments),
            g = Math.min(a.tau, Math.max(-a.tau, c.apply(this, arguments) - v)),
            b = Math.min(Math.abs(g) / h, l.apply(this, arguments)),
            m = b * (g < 0 ? -1 : 1);
          for (u = 0; u < h; ++u)
            (d = y[(p[u] = u)] = +e(i[u], u, i)) > 0 && (_ += d);
          for (
            null != t
              ? p.sort(function (e, n) {
                  return t(y[e], y[n]);
                })
              : null != n &&
                p.sort(function (e, t) {
                  return n(i[e], i[t]);
                }),
              u = 0,
              s = _ ? (g - h * m) / _ : 0;
            u < h;
            ++u, v = f
          )
            ((o = p[u]),
              (d = y[o]),
              (f = v + (d > 0 ? d * s : 0) + m),
              (y[o] = {
                data: i[o],
                index: u,
                value: d,
                startAngle: v,
                endAngle: f,
                padAngle: b,
              }));
          return y;
        }
        return (
          (s.value = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, i.default)(+t)), s)
              : e;
          }),
          (s.sortValues = function (e) {
            return arguments.length ? ((t = e), (n = null), s) : t;
          }),
          (s.sort = function (e) {
            return arguments.length ? ((n = e), (t = null), s) : n;
          }),
          (s.startAngle = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, i.default)(+e)), s)
              : r;
          }),
          (s.endAngle = function (e) {
            return arguments.length
              ? ((c = "function" === typeof e ? e : (0, i.default)(+e)), s)
              : c;
          }),
          (s.padAngle = function (e) {
            return arguments.length
              ? ((l = "function" === typeof e ? e : (0, i.default)(+e)), s)
              : l;
          }),
          s
        );
      }
    },
    8757: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8758: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8759: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c));
      var i = a(n(6343)),
        u = r(n(6342)),
        o = n(6344);
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            u,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? i(o, n, u)
                : (o[n] = e[n]));
          return o;
        })(e, t);
      }
      function c() {
        var e = (0, u.default)().curve(i.curveRadialLinear),
          t = e.curve,
          n = e.lineX0,
          r = e.lineX1,
          a = e.lineY0,
          c = e.lineY1;
        return (
          (e.angle = e.x),
          delete e.x,
          (e.startAngle = e.x0),
          delete e.x0,
          (e.endAngle = e.x1),
          delete e.x1,
          (e.radius = e.y),
          delete e.y,
          (e.innerRadius = e.y0),
          delete e.y0,
          (e.outerRadius = e.y1),
          delete e.y1,
          (e.lineStartAngle = function () {
            return (0, o.lineRadial)(n());
          }),
          delete e.lineX0,
          (e.lineEndAngle = function () {
            return (0, o.lineRadial)(r());
          }),
          delete e.lineX1,
          (e.lineInnerRadius = function () {
            return (0, o.lineRadial)(a());
          }),
          delete e.lineY0,
          (e.lineOuterRadius = function () {
            return (0, o.lineRadial)(c());
          }),
          delete e.lineY1,
          (e.curve = function (e) {
            return arguments.length ? t((0, i.default)(e)) : t()._curve;
          }),
          e
        );
      }
    },
    8760: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.linkHorizontal = p),
        (t.linkRadial = v),
        (t.linkVertical = y));
      var i = n(3794),
        u = n(6346),
        o = r(n(3798)),
        a = n(5337),
        c = r(n(6345));
      function l(e) {
        return e.source;
      }
      function s(e) {
        return e.target;
      }
      function f(e) {
        var t = l,
          n = s,
          r = a.x,
          c = a.y,
          f = null;
        function d() {
          var o,
            a = u.slice.call(arguments),
            l = t.apply(this, a),
            s = n.apply(this, a);
          if (
            (f || (f = o = (0, i.path)()),
            e(
              f,
              +r.apply(this, ((a[0] = l), a)),
              +c.apply(this, a),
              +r.apply(this, ((a[0] = s), a)),
              +c.apply(this, a),
            ),
            o)
          )
            return ((f = null), o + "" || null);
        }
        return (
          (d.source = function (e) {
            return arguments.length ? ((t = e), d) : t;
          }),
          (d.target = function (e) {
            return arguments.length ? ((n = e), d) : n;
          }),
          (d.x = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, o.default)(+e)), d)
              : r;
          }),
          (d.y = function (e) {
            return arguments.length
              ? ((c = "function" === typeof e ? e : (0, o.default)(+e)), d)
              : c;
          }),
          (d.context = function (e) {
            return arguments.length ? ((f = null == e ? null : e), d) : f;
          }),
          d
        );
      }
      function d(e, t, n, r, i) {
        (e.moveTo(t, n), e.bezierCurveTo((t = (t + r) / 2), n, t, i, r, i));
      }
      function h(e, t, n, r, i) {
        (e.moveTo(t, n), e.bezierCurveTo(t, (n = (n + i) / 2), r, n, r, i));
      }
      function _(e, t, n, r, i) {
        var u = (0, c.default)(t, n),
          o = (0, c.default)(t, (n = (n + i) / 2)),
          a = (0, c.default)(r, n),
          l = (0, c.default)(r, i);
        (e.moveTo(u[0], u[1]),
          e.bezierCurveTo(o[0], o[1], a[0], a[1], l[0], l[1]));
      }
      function p() {
        return f(d);
      }
      function y() {
        return f(h);
      }
      function v() {
        var e = f(_);
        return ((e.angle = e.x), delete e.x, (e.radius = e.y), delete e.y, e);
      }
    },
    8761: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = h),
        (t.symbols = void 0));
      var i = n(3794),
        u = r(n(6347)),
        o = r(n(6348)),
        a = r(n(6349)),
        c = r(n(6350)),
        l = r(n(6351)),
        s = r(n(6352)),
        f = r(n(6353)),
        d = r(n(3798));
      t.symbols = [
        u.default,
        o.default,
        a.default,
        l.default,
        c.default,
        s.default,
        f.default,
      ];
      function h() {
        var e = (0, d.default)(u.default),
          t = (0, d.default)(64),
          n = null;
        function r() {
          var r;
          if (
            (n || (n = r = (0, i.path)()),
            e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
            r)
          )
            return ((n = null), r + "" || null);
        }
        return (
          (r.type = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, d.default)(t)), r)
              : e;
          }),
          (r.size = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : (0, d.default)(+e)), r)
              : t;
          }),
          (r.context = function (e) {
            return arguments.length ? ((n = null == e ? null : e), r) : n;
          }),
          r
        );
      }
    },
    8762: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a));
      var i = r(n(4736)),
        u = n(4737);
      function o(e) {
        this._context = e;
      }
      function a(e) {
        return new o(e);
      }
      o.prototype = {
        areaStart: i.default,
        areaEnd: i.default,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x2, this._y2),
                this._context.closePath());
              break;
            case 2:
              (this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3,
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3,
                ),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4));
              break;
          }
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              ((this._point = 1), (this._x2 = e), (this._y2 = t));
              break;
            case 1:
              ((this._point = 2), (this._x3 = e), (this._y3 = t));
              break;
            case 2:
              ((this._point = 3),
                (this._x4 = e),
                (this._y4 = t),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + e) / 6,
                  (this._y0 + 4 * this._y1 + t) / 6,
                ));
              break;
            default:
              (0, u.point)(this, e, t);
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      };
    },
    8763: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = n(4737);
      function i(e) {
        this._context = e;
      }
      function u(e) {
        return new i(e);
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var n = (this._x0 + 4 * this._x1 + e) / 6,
                i = (this._y0 + 4 * this._y1 + t) / 6;
              this._line
                ? this._context.lineTo(n, i)
                : this._context.moveTo(n, i);
              break;
            case 3:
              this._point = 4;
            default:
              (0, r.point)(this, e, t);
              break;
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      };
    },
    8764: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(4737);
      function i(e, t) {
        ((this._basis = new r.Basis(e)), (this._beta = t));
      }
      i.prototype = {
        lineStart: function () {
          ((this._x = []), (this._y = []), this._basis.lineStart());
        },
        lineEnd: function () {
          var e = this._x,
            t = this._y,
            n = e.length - 1;
          if (n > 0) {
            var r,
              i = e[0],
              u = t[0],
              o = e[n] - i,
              a = t[n] - u,
              c = -1;
            while (++c <= n)
              ((r = c / n),
                this._basis.point(
                  this._beta * e[c] + (1 - this._beta) * (i + r * o),
                  this._beta * t[c] + (1 - this._beta) * (u + r * a),
                ));
          }
          ((this._x = this._y = null), this._basis.lineEnd());
        },
        point: function (e, t) {
          (this._x.push(+e), this._y.push(+t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return 1 === t ? new r.Basis(e) : new i(e, t);
        }
        return (
          (n.beta = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.85);
    },
    8765: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(6354),
        u = r(n(4736)),
        o = n(5338);
      function a(e, t) {
        ((this._context = e), (this._alpha = t));
      }
      a.prototype = {
        areaStart: u.default,
        areaEnd: u.default,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x3, this._y3),
                this._context.closePath());
              break;
            case 2:
              (this._context.lineTo(this._x3, this._y3),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5));
              break;
          }
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha)),
            );
          }
          switch (this._point) {
            case 0:
              ((this._point = 1), (this._x3 = e), (this._y3 = t));
              break;
            case 1:
              ((this._point = 2),
                this._context.moveTo((this._x4 = e), (this._y4 = t)));
              break;
            case 2:
              ((this._point = 3), (this._x5 = e), (this._y5 = t));
              break;
            default:
              (0, o.point)(this, e, t);
              break;
          }
          ((this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return t ? new a(e, t) : new i.CardinalClosed(e, 0);
        }
        return (
          (n.alpha = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.5);
    },
    8766: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(6355),
        i = n(5338);
      function u(e, t) {
        ((this._context = e), (this._alpha = t));
      }
      u.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha)),
            );
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2));
              break;
            case 3:
              this._point = 4;
            default:
              (0, i.point)(this, e, t);
              break;
          }
          ((this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t));
        },
      };
      t.default = (function e(t) {
        function n(e) {
          return t ? new u(e, t) : new r.CardinalOpen(e, 0);
        }
        return (
          (n.alpha = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.5);
    },
    8767: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(4736));
      function u(e) {
        this._context = e;
      }
      function o(e) {
        return new u(e);
      }
      u.prototype = {
        areaStart: i.default,
        areaEnd: i.default,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (e, t) {
          ((e = +e),
            (t = +t),
            this._point
              ? this._context.lineTo(e, t)
              : ((this._point = 1), this._context.moveTo(e, t)));
        },
      };
    },
    8768: function (e, t, n) {
      "use strict";
      function r(e) {
        return e < 0 ? -1 : 1;
      }
      function i(e, t, n) {
        var i = e._x1 - e._x0,
          u = t - e._x1,
          o = (e._y1 - e._y0) / (i || (u < 0 && -0)),
          a = (n - e._y1) / (u || (i < 0 && -0)),
          c = (o * u + a * i) / (i + u);
        return (
          (r(o) + r(a)) *
            Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(c)) || 0
        );
      }
      function u(e, t) {
        var n = e._x1 - e._x0;
        return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
      }
      function o(e, t, n) {
        var r = e._x0,
          i = e._y0,
          u = e._x1,
          o = e._y1,
          a = (u - r) / 3;
        e._context.bezierCurveTo(r + a, i + a * t, u - a, o - a * n, u, o);
      }
      function a(e) {
        this._context = e;
      }
      function c(e) {
        this._context = new l(e);
      }
      function l(e) {
        this._context = e;
      }
      function s(e) {
        return new a(e);
      }
      function f(e) {
        return new c(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.monotoneX = s),
        (t.monotoneY = f),
        (a.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0));
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                o(this, this._t0, u(this, this._t0));
                break;
            }
            ((this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            var n = NaN;
            if (((e = +e), (t = +t), e !== this._x1 || t !== this._y1)) {
              switch (this._point) {
                case 0:
                  ((this._point = 1),
                    this._line
                      ? this._context.lineTo(e, t)
                      : this._context.moveTo(e, t));
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  ((this._point = 3), o(this, u(this, (n = i(this, e, t))), n));
                  break;
                default:
                  o(this, this._t0, (n = i(this, e, t)));
                  break;
              }
              ((this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = n));
            }
          },
        }),
        ((c.prototype = Object.create(a.prototype)).point = function (e, t) {
          a.prototype.point.call(this, t, e);
        }),
        (l.prototype = {
          moveTo: function (e, t) {
            this._context.moveTo(t, e);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (e, t) {
            this._context.lineTo(t, e);
          },
          bezierCurveTo: function (e, t, n, r, i, u) {
            this._context.bezierCurveTo(t, e, r, n, u, i);
          },
        }));
    },
    8769: function (e, t, n) {
      "use strict";
      function r(e) {
        this._context = e;
      }
      function i(e) {
        var t,
          n,
          r = e.length - 1,
          i = new Array(r),
          u = new Array(r),
          o = new Array(r);
        for (i[0] = 0, u[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
          ((i[t] = 1), (u[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
        for (
          i[r - 1] = 2, u[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
          t < r;
          ++t
        )
          ((n = i[t] / u[t - 1]), (u[t] -= n), (o[t] -= n * o[t - 1]));
        for (i[r - 1] = o[r - 1] / u[r - 1], t = r - 2; t >= 0; --t)
          i[t] = (o[t] - i[t + 1]) / u[t];
        for (u[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
          u[t] = 2 * e[t + 1] - i[t + 1];
        return [i, u];
      }
      function u(e) {
        return new r(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = u),
        (r.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x = []), (this._y = []));
          },
          lineEnd: function () {
            var e = this._x,
              t = this._y,
              n = e.length;
            if (n)
              if (
                (this._line
                  ? this._context.lineTo(e[0], t[0])
                  : this._context.moveTo(e[0], t[0]),
                2 === n)
              )
                this._context.lineTo(e[1], t[1]);
              else
                for (var r = i(e), u = i(t), o = 0, a = 1; a < n; ++o, ++a)
                  this._context.bezierCurveTo(
                    r[0][o],
                    u[0][o],
                    r[1][o],
                    u[1][o],
                    e[a],
                    t[a],
                  );
            ((this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null));
          },
          point: function (e, t) {
            (this._x.push(+e), this._y.push(+t));
          },
        }));
    },
    8770: function (e, t, n) {
      "use strict";
      function r(e, t) {
        ((this._context = e), (this._t = t));
      }
      function i(e) {
        return new r(e, 0.5);
      }
      function u(e) {
        return new r(e, 0);
      }
      function o(e) {
        return new r(e, 1);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = i),
        (t.stepAfter = o),
        (t.stepBefore = u),
        (r.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x = this._y = NaN), (this._point = 0));
          },
          lineEnd: function () {
            (0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line)));
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                ((this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t));
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  (this._context.lineTo(this._x, t),
                    this._context.lineTo(e, t));
                else {
                  var n = this._x * (1 - this._t) + e * this._t;
                  (this._context.lineTo(n, this._y),
                    this._context.lineTo(n, t));
                }
                break;
            }
            ((this._x = e), (this._y = t));
          },
        }));
    },
    8771: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var i = n(6346),
        u = r(n(3798)),
        o = r(n(4505)),
        a = r(n(4506));
      function c(e, t) {
        return e[t];
      }
      function l() {
        var e = (0, u.default)([]),
          t = a.default,
          n = o.default,
          r = c;
        function l(i) {
          var u,
            o,
            a = e.apply(this, arguments),
            c = i.length,
            l = a.length,
            s = new Array(l);
          for (u = 0; u < l; ++u) {
            for (var f, d = a[u], h = (s[u] = new Array(c)), _ = 0; _ < c; ++_)
              ((h[_] = f = [0, +r(i[_], d, _, i)]), (f.data = i[_]));
            h.key = d;
          }
          for (u = 0, o = t(s); u < l; ++u) s[o[u]].index = u;
          return (n(s, o), s);
        }
        return (
          (l.keys = function (t) {
            return arguments.length
              ? ((e =
                  "function" === typeof t
                    ? t
                    : (0, u.default)(i.slice.call(t))),
                l)
              : e;
          }),
          (l.value = function (e) {
            return arguments.length
              ? ((r = "function" === typeof e ? e : (0, u.default)(+e)), l)
              : r;
          }),
          (l.order = function (e) {
            return arguments.length
              ? ((t =
                  null == e
                    ? a.default
                    : "function" === typeof e
                      ? e
                      : (0, u.default)(i.slice.call(e))),
                l)
              : t;
          }),
          (l.offset = function (e) {
            return arguments.length ? ((n = null == e ? o.default : e), l) : n;
          }),
          l
        );
      }
    },
    8772: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4505));
      function u(e, t) {
        if ((r = e.length) > 0) {
          for (var n, r, u, o = 0, a = e[0].length; o < a; ++o) {
            for (u = n = 0; n < r; ++n) u += e[n][o][1] || 0;
            if (u) for (n = 0; n < r; ++n) e[n][o][1] /= u;
          }
          (0, i.default)(e, t);
        }
      }
    },
    8773: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if ((a = e.length) > 0)
          for (var n, r, i, u, o, a, c = 0, l = e[t[0]].length; c < l; ++c)
            for (u = o = 0, n = 0; n < a; ++n)
              (i = (r = e[t[n]][c])[1] - r[0]) > 0
                ? ((r[0] = u), (r[1] = u += i))
                : i < 0
                  ? ((r[1] = o), (r[0] = o += i))
                  : ((r[0] = 0), (r[1] = i));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    8774: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4505));
      function u(e, t) {
        if ((n = e.length) > 0) {
          for (var n, r = 0, u = e[t[0]], o = u.length; r < o; ++r) {
            for (var a = 0, c = 0; a < n; ++a) c += e[a][r][1] || 0;
            u[r][1] += u[r][0] = -c / 2;
          }
          (0, i.default)(e, t);
        }
      }
    },
    8775: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4505));
      function u(e, t) {
        if ((u = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
          for (var n, r, u, o = 0, a = 1; a < r; ++a) {
            for (var c = 0, l = 0, s = 0; c < u; ++c) {
              for (
                var f = e[t[c]],
                  d = f[a][1] || 0,
                  h = f[a - 1][1] || 0,
                  _ = (d - h) / 2,
                  p = 0;
                p < c;
                ++p
              ) {
                var y = e[t[p]],
                  v = y[a][1] || 0,
                  g = y[a - 1][1] || 0;
                _ += v - g;
              }
              ((l += d), (s += _ * d));
            }
            ((n[a - 1][1] += n[a - 1][0] = o), l && (o -= s / l));
          }
          ((n[a - 1][1] += n[a - 1][0] = o), (0, i.default)(e, t));
        }
      }
    },
    8776: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(5339));
      function u(e) {
        return (0, i.default)(e).reverse();
      }
    },
    8777: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o));
      var i = r(n(6356)),
        u = n(5339);
      function o(e) {
        var t,
          n,
          r = e.length,
          o = e.map(u.sum),
          a = (0, i.default)(e),
          c = 0,
          l = 0,
          s = [],
          f = [];
        for (t = 0; t < r; ++t)
          ((n = a[t]),
            c < l ? ((c += o[n]), s.push(n)) : ((l += o[n]), f.push(n)));
        return f.reverse().concat(s);
      }
    },
    8778: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var i = r(n(4506));
      function u(e) {
        return (0, i.default)(e).reverse();
      }
    },
  },
]);
