(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [182, 410],
  {
    2751: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5401),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(8891),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2780: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "SuccessMark",
        props: { color: { type: String, default: "white" } },
      };
    },
    2782: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "Diamond" };
    },
    2783: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "RateStart" };
    },
    2784: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ClockIcon" };
    },
    2785: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AlertIcon",
        props: { type: { type: String, default: "Success" } },
        computed: {
          imgPath() {
            return a(2874)(`./alert-${this.type.toLowerCase()}.svg`);
          },
          iconClass() {
            return "alert_icon_" + this.type.toLowerCase();
          },
        },
      };
    },
    2786: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SelectArrow" };
    },
    2787: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SuccessIcon" };
    },
    2788: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2789: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "PortfolioChart" };
    },
    2790: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2821: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(2837);
      const s = "appRate::disabled",
        i = 4,
        r = 1e3;
      e.default = {
        name: "RateStars",
        components: { RateStart: n.RateStart },
        props: {
          userRate: { type: Number, default: 0 },
          isRate: { type: Boolean, default: !0 },
        },
        data: () => ({
          fetchRatingDisabledTimeout: null,
          isRateStars: !1,
          hoverStars: [],
        }),
        mounted() {
          this.fetchRatingDisabled();
        },
        destroyed() {
          clearTimeout(this.fetchRatingDisabledTimeout);
        },
        methods: {
          fetchRatingDisabled() {
            ((this.isRateStars = !localStorage.getItem(s)),
              clearTimeout(this.fetchRatingDisabledTimeout),
              (this.fetchRatingDisabledTimeout = setTimeout(
                () => this.fetchRatingDisabled(),
                r,
              )));
          },
          hoverStart(t) {
            if (!this.userRate) {
              this.disableHoverStart();
              for (let e = 0; e <= t; e += 1) this.hoverStars.push(e);
            }
          },
          disableHoverStart() {
            this.userRate || (this.hoverStars = []);
          },
          rateApp(t) {
            t >= i
              ? (localStorage.setItem(s, "1"),
                this.$bus.$emit("openRateSuccess"),
                this.$electron.openExternal(
                  "https://www.trustpilot.com/evaluate/atomicwallet.io",
                ))
              : this.$bus.$emit("openRatePopup", t);
          },
        },
      };
    },
    2837: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AlertIcon", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "ClockIcon", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "Diamond", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "ExchangeArrow", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(e, "ExchangeWhiteArrow", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(e, "PortfolioChart", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(e, "RateStart", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "SelectArrow", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(e, "SuccessIcon", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }));
      var s = n(a(2867)),
        i = n(a(2869)),
        r = n(a(2871)),
        l = n(a(2873)),
        c = n(a(2876)),
        o = n(a(2878)),
        d = n(a(2843)),
        u = n(a(2880)),
        f = n(a(2882)),
        v = n(a(2884));
    },
    2843: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2780),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2857),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2857: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            { attrs: { height: "7", viewBox: "0 0 10 7", width: "10" } },
            [
              a("path", {
                class: "fill-" + t.color,
                attrs: {
                  d: "M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L4.2 4.4L1.7 1.9C1.3 1.5 0.7 1.5 0.3 1.9C-0.1 2.3 -0.1 2.9 0.3 3.3L3.5 6.4C3.6 6.5 3.6 6.5 3.7 6.5L3.8 6.6C3.9 6.6 4 6.7 4.2 6.7C4.4 6.7 4.5 6.7 4.6 6.6C4.6 6.6 4.7 6.6 4.7 6.5C4.8 6.5 4.9 6.4 4.9 6.3L9.7 1.5C10.1 1.3 10.1 0.7 9.7 0.3Z",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2867: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2782),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2868),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2868: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "23",
                viewBox: "0 0 26 23",
                width: "26",
              },
            },
            [
              a("path", {
                attrs: {
                  "clip-rule": "evenodd",
                  d: "M7.97124 0.0823455C8.07955 0.0281928 8.19898 0 8.32007 0H17.6799C17.801 0 17.9204 0.0281928 18.0287 0.0823455L21.6558 1.89589C21.7763 1.95326 21.8837 2.04234 21.9643 2.16056L25.855 7.86691C25.8924 7.91923 25.9226 7.9753 25.9456 8.03369C25.9659 8.08494 25.9803 8.13759 25.9892 8.19075C26.0034 8.27463 26.0034 8.35902 25.9905 8.4408C25.9854 8.47314 25.9782 8.50507 25.9692 8.53641C25.9377 8.64541 25.8825 8.74801 25.8051 8.83569C25.8007 8.84071 25.7962 8.84567 25.7917 8.85057L13.5875 22.6127C13.5628 22.6411 13.5361 22.6674 13.5078 22.6917C13.4509 22.7405 13.3876 22.7806 13.3199 22.811C13.2426 22.8458 13.1596 22.868 13.074 22.8761C13.0495 22.8785 13.0248 22.8797 13 22.8797C12.9861 22.8797 12.9722 22.8793 12.9583 22.8785C12.8624 22.8734 12.7691 22.8507 12.6828 22.8122C12.632 22.7896 12.5837 22.7616 12.5387 22.7286C12.4927 22.6949 12.4503 22.6561 12.4125 22.6127L0.208288 8.85056C0.20355 8.84545 0.198886 8.84028 0.194297 8.83505C0.116572 8.74679 0.0612785 8.64345 0.0300574 8.5337C-0.00107025 8.42473 -0.00868813 8.3086 0.0103344 8.19336C0.0193362 8.13836 0.0343341 8.08388 0.0555126 8.03092C0.0783245 7.97357 0.108147 7.9185 0.144899 7.86703L4.03462 2.16212C4.0381 2.15698 4.04164 2.15189 4.04525 2.14684C4.12466 2.03548 4.22827 1.95109 4.344 1.89597L7.97124 0.0823455ZM4.94073 3.60232L1.9533 7.98389L6.66374 10.0565L7.46269 4.8633L4.94073 3.60232ZM8.98923 5.19992L8.18925 10.3998H17.8107L17.0108 5.19992H8.98923ZM18.5373 4.8633L19.3363 10.0565L24.0467 7.98389L21.0593 3.60232L18.5373 4.8633ZM8.5042 1.55998L6.42423 2.59996L8.5042 3.63995H17.4958L19.5758 2.59996L17.4958 1.55998H8.5042ZM3.72894 10.4695L9.34444 16.8018L6.71591 11.7837L3.72894 10.4695ZM8.56917 11.9598L13 20.4187L17.4308 11.9598H8.56917ZM19.2841 11.7837L16.6556 16.8018L22.2711 10.4695L19.2841 11.7837Z",
                  fill: "#00C2FF",
                  "fill-rule": "evenodd",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2869: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2783),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2870),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2870: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            { attrs: { height: "38", viewBox: "0 0 38 38", width: "38" } },
            [
              a("path", {
                attrs: {
                  d: "M25.8069 11.4453L34.8195 12.3099C37.9555 12.6108 38.9173 15.6741 36.4957 17.6867L29.4398 23.5509L32.0592 33.1041C32.9194 36.2415 30.2506 38.1407 27.5775 36.2525L19.0041 30.1967L10.4307 36.2525C7.76847 38.1331 5.08875 36.2419 5.94907 33.1041L8.56846 23.5509L1.51257 17.6867C-0.919172 15.6657 0.0388109 12.6122 3.18825 12.3099L12.1992 11.4453L16.1693 2.29209C17.4125 -0.574326 20.5965 -0.57289 21.8387 2.29238L25.8069 11.4453Z",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2871: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2784),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2872),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2872: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "18",
                viewBox: "0 0 18 18",
                width: "18",
              },
            },
            [
              a("path", {
                attrs: {
                  d: "M9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM8.25 5C8.66421 5 9 5.33579 9 5.75V8.9849L11.7692 10.05C12.1558 10.1987 12.3487 10.6326 12.2 11.0192C12.0513 11.4058 11.6174 11.5987 11.2308 11.45L7.98077 10.2C7.69112 10.0886 7.5 9.81033 7.5 9.5V5.75C7.5 5.33579 7.83579 5 8.25 5Z",
                  fill: "white",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2873: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2785),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2875),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2874: function (t, e, a) {
      var n = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function s(t) {
        var e = i(t);
        return a(e);
      }
      function i(t) {
        if (!a.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      ((s.keys = function () {
        return Object.keys(n);
      }),
        (s.resolve = i),
        (t.exports = s),
        (s.id = 2874));
    },
    2875: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("div", { staticClass: "alert_icon", class: t.iconClass }, [
              a("div", [a("img", { attrs: { src: t.imgPath } })]),
            ]),
          ]);
        },
        s = [];
    },
    2876: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2786),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2877),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2877: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            { attrs: { height: "6", viewBox: "0 0 10 6", width: "10" } },
            [
              a("path", {
                attrs: {
                  d: "M1.45442 0.691051C1.06285 0.384877 0.497225 0.454099 0.19105 0.845663C-0.115124 1.23723 -0.0459015 1.80286 0.345663 2.10903L4.4423 5.3123C4.76791 5.5669 5.22507 5.56699 5.55078 5.31252L9.65074 2.10925C10.0424 1.80323 10.1119 1.23763 9.80585 0.845942C9.49983 0.454257 8.93423 0.384813 8.54255 0.690833L4.99691 3.46101L1.45442 0.691051Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2878: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2787),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2879),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2879: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "18",
                viewBox: "0 0 18 18",
                width: "18",
              },
            },
            [
              a("path", {
                attrs: {
                  "clip-rule": "evenodd",
                  d: "M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9ZM12.2803 7.78033C12.5732 7.48744 12.5732 7.01256 12.2803 6.71967C11.9874 6.42678 11.5126 6.42678 11.2197 6.71967L8 9.93934L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L7.46967 11.5303C7.76256 11.8232 8.23744 11.8232 8.53033 11.5303L12.2803 7.78033Z",
                  fill: "#00E05A",
                  "fill-rule": "evenodd",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2880: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2788),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2881),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2881: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            {
              attrs: {
                "data-test-id": "exchange_arrow",
                fill: "none",
                height: "16",
                viewBox: "0 0 18 16",
                width: "18",
              },
            },
            [
              a("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2882: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2789),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2883),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2883: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            { attrs: { width: "24", height: "24", viewBox: "0 0 24 24" } },
            [
              a("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M18.9193 14C18.0526 17.0034 15.2832 19.2 12.0007 19.2C9.33593 19.2 7.00928 17.7524 5.76428 15.6006L1.6084 18C2.0905 18.835 2.66825 19.6035 3.32628 20.2919C3.43835 20.4091 3.55277 20.524 3.66947 20.6366C4.74436 21.6735 6.01052 22.5075 7.4085 23.0866C8.85424 23.6854 10.3931 23.9917 11.9379 23.9998L12.0007 24L12.0745 23.9998C13.0921 23.9935 14.111 23.8579 15.1065 23.5911C17.0564 23.0686 18.8329 22.0657 20.28 20.6864L20.3319 20.6366C20.4194 20.5522 20.5055 20.4666 20.5903 20.3796C20.6228 20.3464 20.6551 20.3129 20.6871 20.2793C20.9811 19.9708 21.2596 19.6458 21.5209 19.3051C22.719 17.7439 23.5082 15.9206 23.8329 14H18.9193Z",
                  fill: "#979EB0",
                },
              }),
              t._v(" "),
              a("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M12 4.8V0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0327 1.51011 19.3429 2.38172 20.4498 3.47939C20.4735 3.50289 20.4971 3.5265 20.5206 3.5502C21.6183 4.65706 22.4899 5.96731 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12H19.2C19.2 8.02355 15.9764 4.8 12 4.8Z",
                  fill: "#B8BDCC",
                },
              }),
              t._v(" "),
              a("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M10 0.167725C8.59684 0.404905 7.24167 0.890715 6 1.60758C5.54395 1.87088 5.10723 2.16304 4.69219 2.48167C3.82363 3.14849 3.05039 3.93126 2.39385 4.80816C2.10928 5.1883 1.84658 5.58614 1.60771 5.99989C0.686133 7.59609 0.146387 9.37994 0.0258789 11.2121C0.00869141 11.4739 0 11.7366 0 11.9999C0 12.3547 0.0157227 12.7085 0.0469727 13.0603C0.141835 14.1298 0.379722 15.1804 0.753126 16.1841L4.76391 13.8684L5.00854 13.7272C4.87228 13.1738 4.8 12.5953 4.8 11.9999C4.8 8.71741 6.99657 5.94797 10 5.0813V0.167725Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2884: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2790),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2885),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2885: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "svg",
            {
              attrs: {
                "data-test-id": "exchange_white_arrow",
                fill: "none",
                height: "16",
                viewBox: "0 0 18 16",
                width: "18",
              },
            },
            [
              a("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#ffffff",
                },
              }),
            ],
          );
        },
        s = [];
    },
    2959: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "TableItems",
        props: {
          excludedFields: { type: Array, default: () => [] },
          items: { type: Array, default: () => [] },
          noResultText: {
            type: String,
            default() {
              return this.$t("message.noResults");
            },
          },
          filter: { type: String, default: "" },
          header: { type: Array, default: () => [] },
          isMain: { type: Boolean, default: !1 },
          isEmpty: { type: Boolean, default: !1 },
          isHeaderBorder: { type: Boolean, default: !1 },
          isSortable: { type: Boolean, default: !1 },
          activeSortField: { type: String, default: "" },
          isSortASC: { type: Boolean, default: !1 },
          spaceBetween: { type: Boolean, default: !1 },
        },
      };
    },
    2973: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2821),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(2974),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    2974: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return t.isRateStars
            ? a("div", { staticClass: "rate-stars" }, [
                t._e(),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "rate-stars__wrap" },
                  t._l(5, function (e) {
                    return a(
                      "div",
                      {
                        key: e,
                        staticClass: "rate-stars__item",
                        class: {
                          "rate-stars__item--hover":
                            t.hoverStars.length > 0 && t.hoverStars.includes(e),
                          "rate-stars__item--active": e <= t.userRate,
                          "rate-stars__item--good": 5 === t.userRate,
                        },
                        on: {
                          click: function (a) {
                            t.isRate && t.rateApp(e);
                          },
                          mouseleave: function (e) {
                            t.isRate && t.disableHoverStart();
                          },
                          mouseover: function (a) {
                            t.isRate && t.hoverStart(e);
                          },
                        },
                      },
                      [a("RateStart")],
                      1,
                    );
                  }),
                  0,
                ),
              ])
            : t._e();
        },
        s = [];
    },
    3189: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2959),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(3347),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    3347: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "table table-new" }, [
            !t.isEmpty && t.header && t.header.length > 0
              ? a(
                  "div",
                  {
                    staticClass: "header header-new",
                    class: { border: t.isHeaderBorder },
                    attrs: { "data-test-id": "wallet_" },
                  },
                  [
                    a(
                      "div",
                      {
                        staticClass: "table-row table-heading flex-wrap center",
                        class: { "space-between": t.spaceBetween },
                      },
                      [
                        t._l(t.header, function (e, n) {
                          return a(
                            "div",
                            {
                              key: "header-" + n + "-" + Math.random(),
                              staticClass: "item",
                            },
                            [
                              e.slot
                                ? t._t(e.slot)
                                : a(
                                    "div",
                                    {
                                      class: {
                                        "sort-active":
                                          t.activeSortField === e.key,
                                        "sort-enable":
                                          t.isSortable &&
                                          !t.excludedFields.includes(e.key),
                                      },
                                      on: {
                                        click: function (a) {
                                          t.isSortable &&
                                            t.$emit("sortByField", e.key);
                                        },
                                      },
                                    },
                                    [
                                      t.isSortable
                                        ? a(
                                            "svg",
                                            {
                                              staticClass: "sort-arrow",
                                              class: { asc: t.isSortASC },
                                              attrs: { viewBox: "0 0 24 24" },
                                            },
                                            [
                                              a("path", {
                                                attrs: {
                                                  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                                  fill: "#fff",
                                                  stroke: "#fff",
                                                },
                                              }),
                                            ],
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      e.title
                                        ? a(
                                            "span",
                                            {
                                              class: [
                                                "text-middle",
                                                e.key,
                                                {
                                                  "text-gray":
                                                    t.activeSortField !== e.key,
                                                },
                                              ],
                                              attrs: {
                                                "data-test-id":
                                                  "wallet_sort_" + e.key,
                                              },
                                            },
                                            [t._v(t._s(e.title))],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                            ],
                            2,
                          );
                        }),
                        t._v(" "),
                        t.isMain ? a("div", { staticClass: "item" }) : t._e(),
                      ],
                      2,
                    ),
                  ],
                )
              : t._e(),
            t._v(" "),
            a(
              "div",
              { staticClass: "main" },
              [
                t._t("empty", function () {
                  return [
                    !t.items.length && t.filter.length
                      ? a("div", { staticClass: "empty" }, [
                          t._v(
                            "\n        " + t._s(t.noResultText) + "\n      ",
                          ),
                        ])
                      : t._e(),
                  ];
                }),
                t._v(" "),
                t.$scopedSlots["table-rows"] ? t._t("table-rows") : t._e(),
              ],
              2,
            ),
          ]);
        },
        s = [];
    },
    3804: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = n(a(798)),
        i = a(824);
      e.default = {
        name: "ExchangeHistoryItem",
        components: {
          CoinIcon: () => Promise.resolve().then(a.bind(null, 802)),
          SuccessMark: () => Promise.resolve().then(a.bind(null, 2843)),
          AtomicFlagIcon: () => Promise.resolve().then(a.bind(null, 849)),
        },
        props: {
          typeOfExchange: {
            type: String,
            required: !0,
            validator(t) {
              return ["exchange", "simplex"].includes(t);
            },
          },
          walletReceive: { type: Object, required: !0 },
          walletSend: { type: Object, required: !0 },
          amountSend: { type: String, required: !0 },
          amountReceive: { type: String, required: !0 },
          date: { type: String, required: !0 },
          status: { type: String, required: !0 },
          transactionId: { type: String, required: !0 },
        },
        computed: {
          approxSign() {
            return this.isSuccess || this.isFailed ? "" : "≈ ";
          },
          statusFormatted() {
            return (0, i.getStatusFormatted)(this.status, this.typeOfExchange);
          },
          isSuccess() {
            return i.SUCCESS_STATUSES.includes(this.statusFormatted);
          },
          isFailed() {
            return i.FAILED_STATUSES.includes(this.statusFormatted);
          },
          isPending() {
            return i.WAITING_STATUSES.includes(this.statusFormatted);
          },
          isSimplex() {
            return "simplex" === this.typeOfExchange;
          },
          isExchange() {
            return "exchange" === this.typeOfExchange;
          },
        },
        methods: { formatFinance: s.default },
      };
    },
    3805: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = a(2837),
        i = n(a(802)),
        r = n(a(2973)),
        l = n(a(821)),
        c = n(a(4739)),
        o = n(a(820)),
        d = a(824);
      e.default = {
        name: "NewExchangeResult",
        components: {
          Diamond: s.Diamond,
          CoinIcon: i.default,
          TokenTag: l.default,
          RateStars: r.default,
          SuccessMark: s.SuccessMark,
          ExchangeArrow: s.ExchangeArrow,
        },
        props: {
          typeOfExchange: {
            type: String,
            required: !0,
            validator(t) {
              return ["exchange", "simplex"].includes(t);
            },
          },
          walletReceive: { type: Object, required: !0 },
          walletSend: { type: Object, required: !0 },
          amountSend: { type: [String, Number], required: !0 },
          amountReceive: { type: [String, Number], required: !0 },
          amountCashback: { type: [String, null], required: !0 },
          status: { type: String, required: !0 },
          date: { type: String, required: !0 },
          transactionID: { type: String, required: !0 },
          sentHash: { type: [Object, String], default: null },
          receivedHash: { type: [Object, String], default: null },
          provider: { type: String, default: "" },
          repeated: { type: String, default: "" },
        },
        data() {
          return { amountMembershipCashback: 0 };
        },
        computed: {
          EXCHANGE_TRANSACTIONS_STEPS() {
            return d.EXCHANGE_TRANSACTIONS_STEPS;
          },
          currentExchangeStep() {
            if (this.isExchange) {
              var t;
              if (this.statusFormatted === d.EXCHANGE_STATUSES_PAIRS.finish)
                return Object.keys(this.EXCHANGE_TRANSACTIONS_STEPS).length;
              const e = Object.entries(d.EXCHANGE_STATUSES_PAIRS).find(
                (t) => t[1] === this.statusFormatted,
              );
              return null !==
                (t = Object.keys(this.EXCHANGE_TRANSACTIONS_STEPS).findIndex(
                  (t) => t === e[1],
                )) && void 0 !== t
                ? t
                : 0;
            }
            return 0;
          },
          contactSupport() {
            const t = this.formatTextByType(
              {
                subject: this.$t("exchangeResult.buyCrypto"),
                tags: ["buycrypto_tag"],
              },
              {
                subject: this.$t("exchangeResult.exchange"),
                tags: ["exchange_tag"],
              },
            );
            return {
              additionalText: `-----------------------\n${this.walletSend.ticker} > ${this.walletReceive.ticker}\n${this.formatTextByType(this.$t("exchangeResult.paymentID"), this.$t("exchangeResult.orderID"))}: ${this.transactionID}`,
              ...t,
            };
          },
          statusFormatted() {
            return (0, d.getStatusFormatted)(this.status, this.typeOfExchange);
          },
          isCompleted() {
            return d.SUCCESS_STATUSES.includes(this.statusFormatted);
          },
          isFailed() {
            return d.FAILED_STATUSES.includes(this.statusFormatted);
          },
          isPending() {
            return d.WAITING_STATUSES.includes(this.statusFormatted);
          },
          isAwait() {
            return (
              !this.statusFormatted ||
              d.AWAIT_STATUSES.includes(this.statusFormatted)
            );
          },
          approxSign() {
            return this.isCompleted ? "" : "≈ ";
          },
          isSimplex() {
            return "simplex" === this.typeOfExchange;
          },
          isExchange() {
            return "exchange" === this.typeOfExchange;
          },
          statusClass() {
            return d.SUCCESS_STATUSES.includes(this.statusFormatted)
              ? "new-text-green"
              : d.FAILED_STATUSES.includes(this.statusFormatted)
                ? "new-text-error"
                : (d.WAITING_STATUSES.includes(this.statusFormatted),
                  "new-text-gray");
          },
          walletReceiveNetworkName() {
            var t, e;
            const a =
                null !== (t = this.walletReceive.feeTicker) && void 0 !== t
                  ? t
                  : this.walletReceive.deprecatedParent,
              n = this.$wallets.getWallet(a);
            return null !==
              (e = null === n || void 0 === n ? void 0 : n.name) && void 0 !== e
              ? e
              : "";
          },
          isMemberCashback() {
            const t = this.$cashback.currentLevel(
              this.amountMembershipCashback,
            );
            return (
              !("basic" === (null === t || void 0 === t ? void 0 : t.class)) &&
              !!t
            );
          },
        },
        async beforeCreate() {
          try {
            this.amountMembershipCashback = await this.$membership.getBalance();
          } catch (t) {
            console.error("Error get current level cashback");
          }
        },
        methods: {
          fixedExchangeValue: c.default,
          formatTextTrimMiddle: o.default,
          openTransactionExplorerExternal(t, e) {
            const { explorer: a } = this.$wallets.getWallet(t.deprecatedParent);
            this.$electron.openExternal(a.webUrl + e);
          },
          formatTextByType(t, e) {
            return this.isSimplex ? t : e;
          },
        },
      };
    },
    4739: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(830);
      e.default = function (t, e) {
        void 0 === e && (e = n.MAX_VALUE_SIZE);
        const a = String(t);
        if (a.length > e && a.includes(".")) {
          const [t, n] = a.split(".");
          return t.length >= e
            ? Number(t)
            : Number(`${t}.${n.substr(0, Math.min(n.length, e - t.length))}`);
        }
        return t;
      };
    },
    5391: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3804),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(5394),
        l = a(5);
      function c(t) {
        a(5392);
      }
      var o = !1,
        d = c,
        u = "data-v-3b8fc776",
        f = null,
        v = Object(l["a"])(s.a, r["a"], r["b"], o, d, u, f);
      e["default"] = v.exports;
    },
    5392: function (t, e, a) {
      var n = a(5393);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var s = a(23).default;
      s("82be5e0a", n, !0, {});
    },
    5393: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-3b8fc776{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-3b8fc776{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-3b8fc776{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-3b8fc776{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-3b8fc776{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-3b8fc776{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-3b8fc776{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-3b8fc776{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-3b8fc776{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-3b8fc776{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-3b8fc776{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-3b8fc776]{color:#6b963b\n}\n.text-red[data-v-3b8fc776]{color:#c03647\n}\n.text-gray[data-v-3b8fc776]{color:#8290ad\n}\n.text-blue[data-v-3b8fc776]{color:#00c2ff\n}\n.text-danger[data-v-3b8fc776]{color:#8c4545\n}\n.text-title[data-v-3b8fc776]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-3b8fc776]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-3b8fc776]{color:#f1b70b\n}\n.text-white[data-v-3b8fc776]{color:#fff\n}\n.text-bigger[data-v-3b8fc776]{font-size:18px;font-weight:500\n}\n.text-big[data-v-3b8fc776]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-3b8fc776]{font-size:14px\n}\n.text-middle-height[data-v-3b8fc776]{line-height:24px\n}\n.text-small[data-v-3b8fc776]{font-size:12px\n}\n.text-word-break[data-v-3b8fc776]{word-break:break-all\n}\n.text-right[data-v-3b8fc776]{text-align:right\n}\n.text-left[data-v-3b8fc776]{text-align:left\n}\n.text-line-middle[data-v-3b8fc776]{line-height:24px\n}\n.text-link[data-v-3b8fc776],.text-link-underline[data-v-3b8fc776]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-3b8fc776]:hover,.text-link-underline[data-v-3b8fc776]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-3b8fc776]{text-decoration:underline\n}\n.text-center[data-v-3b8fc776]{text-align:center\n}\n.text-pointer[data-v-3b8fc776]{cursor:pointer\n}\n.gap-10[data-v-3b8fc776]{gap:10px\n}\n.m-t-auto[data-v-3b8fc776]{margin-top:auto\n}\n.m-t-4[data-v-3b8fc776]{margin-top:4px\n}\n.m-t-5[data-v-3b8fc776]{margin-top:5px\n}\n.m-t-8[data-v-3b8fc776]{margin-top:10px\n}\n.m-t-10[data-v-3b8fc776]{margin-top:10px\n}\n.m-t-13[data-v-3b8fc776]{margin-top:10px\n}\n.m-t-15[data-v-3b8fc776]{margin-top:15px\n}\n.m-t-16[data-v-3b8fc776]{margin-top:16px\n}\n.m-t-20[data-v-3b8fc776]{margin-top:20px\n}\n.m-t-24[data-v-3b8fc776]{margin-top:24px\n}\n.m-t-25[data-v-3b8fc776]{margin-top:25px\n}\n.m-t-26[data-v-3b8fc776]{margin-top:26px\n}\n.m-t-30[data-v-3b8fc776]{margin-top:30px\n}\n.m-t-35[data-v-3b8fc776]{margin-top:35px\n}\n.m-t-40[data-v-3b8fc776]{margin-top:40px\n}\n.m-t-45[data-v-3b8fc776]{margin-top:45px\n}\n.m-t-50[data-v-3b8fc776]{margin-top:50px\n}\n.m-t-60[data-v-3b8fc776]{margin-top:60px\n}\n.m-t-65[data-v-3b8fc776]{margin-top:65px\n}\n.m-t-80[data-v-3b8fc776]{margin-top:80px\n}\n.m-l-5[data-v-3b8fc776]{margin-left:5px\n}\n.m-l-10[data-v-3b8fc776]{margin-left:10px\n}\n.m-l-15[data-v-3b8fc776]{margin-left:15px\n}\n.m-l-20[data-v-3b8fc776]{margin-left:20px\n}\n.m-l-25[data-v-3b8fc776]{margin-left:25px\n}\n.m-l-30[data-v-3b8fc776]{margin-left:30px\n}\n.m-l-35[data-v-3b8fc776]{margin-left:35px\n}\n.m-r-5[data-v-3b8fc776]{margin-right:5px\n}\n.m-r-10[data-v-3b8fc776]{margin-right:10px\n}\n.m-r-15[data-v-3b8fc776]{margin-right:15px\n}\n.m-r-30[data-v-3b8fc776]{margin-right:30px\n}\n.m-b-5[data-v-3b8fc776]{margin-bottom:5px !important\n}\n.m-b-15[data-v-3b8fc776]{margin-bottom:15px !important\n}\n.m-b-20[data-v-3b8fc776]{margin-bottom:20px !important\n}\n.m-b-30[data-v-3b8fc776]{margin-bottom:30px !important\n}\n.m-b-25[data-v-3b8fc776]{margin-bottom:25px !important\n}\n.m-b-50[data-v-3b8fc776]{margin-bottom:50px !important\n}\n.p-t-40[data-v-3b8fc776]{padding-top:40px\n}\n.p-t-85[data-v-3b8fc776]{padding-top:85px !important\n}\n.hidden[data-v-3b8fc776]{opacity:0 !important\n}\n.relative[data-v-3b8fc776]{position:relative\n}\n.space-nowrap[data-v-3b8fc776]{white-space:nowrap\n}\n.uppercase[data-v-3b8fc776]{text-transform:uppercase\n}\n.lowercase[data-v-3b8fc776]{text-transform:lowercase\n}\n.fade-enter-active[data-v-3b8fc776]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-3b8fc776]{transition:all .1s ease-out\n}\n.fade-enter[data-v-3b8fc776],.fade-leave-to[data-v-3b8fc776]{opacity:0\n}\n.fade-down-enter-active[data-v-3b8fc776],.fade-down-leave-active[data-v-3b8fc776],.fade-down-move[data-v-3b8fc776]{transition:all .15s\n}\n.fade-down-leave-active[data-v-3b8fc776],.fade-down-enter-active[data-v-3b8fc776]{position:absolute !important\n}\n.fade-down-enter[data-v-3b8fc776],.fade-down-leave-to[data-v-3b8fc776]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-3b8fc776],.scale-leave-active[data-v-3b8fc776],.scale-move[data-v-3b8fc776]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-3b8fc776],.scale-leave-to[data-v-3b8fc776]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-3b8fc776],.slide-leave-active[data-v-3b8fc776]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-3b8fc776]{transition:all .2s ease\n}\n.slide-leave-active[data-v-3b8fc776]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-3b8fc776],.slide-leave-to[data-v-3b8fc776]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-3b8fc776],.slide-leave[data-v-3b8fc776]{margin-bottom:0px\n}\n.slide-enter[data-v-3b8fc776],.slide-leave-to[data-v-3b8fc776]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-3b8fc776],.slide-in-leave-active[data-v-3b8fc776]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-3b8fc776]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-3b8fc776]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-3b8fc776]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-3b8fc776]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-3b8fc776],.page-fade-enter-active[data-v-3b8fc776]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-3b8fc776],.page-fade-leave-to[data-v-3b8fc776],.page-fade-enter[data-v-3b8fc776]{opacity:0\n}\n.page-fade-enter-to[data-v-3b8fc776]{opacity:1\n}\n.fade-out-leave-active[data-v-3b8fc776],.fade-out-enter-active[data-v-3b8fc776]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-3b8fc776],.fade-out-leave-to[data-v-3b8fc776],.fade-out-enter[data-v-3b8fc776]{opacity:0\n}\n.fade-out-enter-to[data-v-3b8fc776]{opacity:1\n}\n.slide-down-enter-active[data-v-3b8fc776],.slide-down-leave-active[data-v-3b8fc776]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-3b8fc776],.slide-down-enter[data-v-3b8fc776]{top:100%\n}\n.slide-down-leave[data-v-3b8fc776],.slide-down-enter-to[data-v-3b8fc776]{top:0%\n}\n.slide-out-enter-active[data-v-3b8fc776],.slide-out-leave-active[data-v-3b8fc776]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-3b8fc776]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-3b8fc776]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-3b8fc776]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-3b8fc776],.exchange-result.slide-out-enter[data-v-3b8fc776]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-3b8fc776],.exchange-pending.slide-out-enter[data-v-3b8fc776]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-3b8fc776],.slide-left-leave-active[data-v-3b8fc776]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-3b8fc776]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-3b8fc776]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-3b8fc776]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-3b8fc776],.slide-right-leave-active[data-v-3b8fc776]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-3b8fc776]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-3b8fc776]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-3b8fc776]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-3b8fc776],.spin-down-leave-active[data-v-3b8fc776]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-3b8fc776]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-3b8fc776]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-3b8fc776]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-3b8fc776],.spin-up-leave-active[data-v-3b8fc776]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-3b8fc776]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-3b8fc776]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-3b8fc776]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-3b8fc776],.puff-out-leave-active[data-v-3b8fc776]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-3b8fc776]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-3b8fc776]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-3b8fc776],.puff-out-enter-to[data-v-3b8fc776]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-3b8fc776],.collapse-fade-enter-active[data-v-3b8fc776]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-3b8fc776],.collapse-fade-leave-to[data-v-3b8fc776],.collapse-fade-enter[data-v-3b8fc776]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-3b8fc776]{opacity:1\n}\n.lazy-fade-leave-active[data-v-3b8fc776],.lazy-fade-enter-active[data-v-3b8fc776]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-3b8fc776],.lazy-fade-leave-to[data-v-3b8fc776],.lazy-fade-enter[data-v-3b8fc776]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-3b8fc776]{opacity:1\n}\n.simplex-flag[data-v-3b8fc776]{width:34px;height:34px\n}",
          "",
        ]));
    },
    5394: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "table-row with-hover",
              attrs: { "data-test-id": "exch_history" },
            },
            [
              a("div", { staticClass: "flex-wrap center" }, [
                a("div", { staticClass: "item" }, [
                  a(
                    "div",
                    { staticClass: "flex-wrap center" },
                    [
                      t.isSimplex
                        ? a("atomic-flag-icon", {
                            staticClass: "simplex-flag",
                            attrs: { "flag-code": t.walletSend.ticker },
                          })
                        : a("coin-icon", { attrs: { wallet: t.walletSend } }),
                      t._v(" "),
                      a("div", { staticClass: "m-l-10" }, [
                        a("span", { staticClass: "text-bigger" }, [
                          t._v(
                            " " + t._s(t.formatFinance(t.amountSend)) + "  ",
                          ),
                        ]),
                        t._v(" "),
                        a("span", { staticClass: "text-middle text-gray" }, [
                          t._v(
                            "\n            " +
                              t._s(t.walletSend.ticker.toUpperCase()) +
                              "\n          ",
                          ),
                        ]),
                      ]),
                    ],
                    1,
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "item" }, [
                  a(
                    "div",
                    { staticClass: "flex-wrap center" },
                    [
                      a("coin-icon", { attrs: { wallet: t.walletReceive } }),
                      t._v(" "),
                      a("div", { staticClass: "m-l-10" }, [
                        a("span", { staticClass: "text-bigger" }, [
                          t._v(
                            "\n            " +
                              t._s(t.approxSign) +
                              t._s(t.formatFinance(t.amountReceive)) +
                              " \n          ",
                          ),
                        ]),
                        t._v(" "),
                        a("span", { staticClass: "text-middle text-gray" }, [
                          t._v(
                            "\n            " +
                              t._s(t.walletReceive.ticker.toUpperCase()) +
                              "\n          ",
                          ),
                        ]),
                      ]),
                    ],
                    1,
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "item" }, [
                  a("span", { staticClass: "text-middle text-gray" }, [
                    t._v(
                      "\n        " + t._s(t.$formatDate(t.date)) + "\n      ",
                    ),
                  ]),
                ]),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "item text-right" },
                  [
                    t.isPending
                      ? a("div", {
                          staticClass: "history-status history-status--pending",
                          attrs: { "data-test-id": "exchange_pending" },
                        })
                      : t.isSuccess
                        ? a("success-mark", {
                            attrs: {
                              color: "green",
                              "data-test-id": "exchange_success",
                            },
                          })
                        : t.isFailed
                          ? a("div", {
                              staticClass:
                                "history-status history-status--failed",
                              attrs: { "data-test-id": "exchange_failed" },
                            })
                          : t._e(),
                  ],
                  1,
                ),
              ]),
            ],
          );
        },
        s = [];
    },
    5395: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3805),
        s = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var r = a(5396),
        l = a(5),
        c = !1,
        o = null,
        d = null,
        u = null,
        f = Object(l["a"])(s.a, r["a"], r["b"], c, o, d, u);
      e["default"] = f.exports;
    },
    5396: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "transition",
            { attrs: { name: "fade-down", appear: "" } },
            [
              n(
                "AtomicPopup",
                {
                  on: {
                    close: function (e) {
                      return t.$emit("closePopup");
                    },
                  },
                },
                [
                  n("div", { staticClass: "section simplex-result" }, [
                    n("div", { staticClass: "simplex-result__container" }, [
                      n("div", { staticClass: "section__header" }, [
                        n("div", { staticClass: "new-text-headline" }, [
                          t._v(
                            "\n            " +
                              t._s(
                                t.formatTextByType(
                                  t.$t("exchangeResult.buyWith", {
                                    sendTicker: t.walletSend.ticker,
                                    receiveTicker: t.walletReceive.ticker,
                                  }),
                                  t.$t("exchangeResult.swapTo", {
                                    sendTicker: t.walletSend.ticker,
                                    receiveTicker: t.walletReceive.ticker,
                                  }),
                                ),
                              ) +
                              "\n          ",
                          ),
                        ]),
                        t._v(" "),
                        n(
                          "div",
                          {
                            class: ["new-text-medium2", t.statusClass],
                            staticStyle: { "text-transform": "capitalize" },
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.statusFormatted) +
                                "\n          ",
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "section__body m-b-20" }, [
                        n(
                          "div",
                          {
                            staticClass:
                              "flex align-center simplex-result__coins",
                          },
                          [
                            t.isSimplex
                              ? n(
                                  "div",
                                  { staticClass: "flex align-center" },
                                  [
                                    n("AtomicFlagIcon", {
                                      staticClass: "simplex-flag",
                                      attrs: { flagCode: t.walletSend.ticker },
                                    }),
                                    t._v(" "),
                                    n("div", { staticClass: "m-l-10" }, [
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "new-text-medium new-text-gray",
                                        },
                                        [
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.$t("exchangeResult.youSent"),
                                              ) +
                                              "\n                ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      n("div", [
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "new-title-extra-large",
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(
                                                  t.fixedExchangeValue(
                                                    t.amountSend,
                                                  ),
                                                ) +
                                                "\n                  ",
                                            ),
                                          ],
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "new-text-large new-text-gray",
                                          },
                                          [
                                            t._v(
                                              "\n                    " +
                                                t._s(t.walletSend.ticker) +
                                                "\n                  ",
                                            ),
                                          ],
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  1,
                                )
                              : n(
                                  "div",
                                  { staticClass: "flex align-center" },
                                  [
                                    n("CoinIcon", {
                                      attrs: { wallet: t.walletSend },
                                    }),
                                    t._v(" "),
                                    n("div", { staticClass: "m-l-10" }, [
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "new-text-medium new-text-gray",
                                        },
                                        [
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.$t("exchangeResult.youSent"),
                                              ) +
                                              "\n                ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      n(
                                        "div",
                                        { staticClass: "flex align-center" },
                                        [
                                          n("div", [
                                            n(
                                              "span",
                                              {
                                                staticClass:
                                                  "new-title-extra-large",
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(t.approxSign) +
                                                    t._s(
                                                      t.fixedExchangeValue(
                                                        t.amountSend,
                                                      ),
                                                    ) +
                                                    "\n                    ",
                                                ),
                                              ],
                                            ),
                                            t._v(" "),
                                            n(
                                              "span",
                                              {
                                                staticClass:
                                                  "new-text-large new-text-gray",
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(t.walletSend.ticker) +
                                                    "\n                    ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          t._v(" "),
                                          n("TokenTag", {
                                            attrs: { wallet: t.walletSend },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ]),
                                  ],
                                  1,
                                ),
                            t._v(" "),
                            n("ExchangeArrow"),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "flex align-center" },
                              [
                                n("CoinIcon", {
                                  attrs: { wallet: t.walletReceive },
                                }),
                                t._v(" "),
                                n("div", { staticClass: "m-l-10" }, [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium new-text-gray",
                                    },
                                    [t._v(t._s(t.$t("exchangeResult.youGet")))],
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "flex align-center" },
                                    [
                                      n("div", [
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "new-title-extra-large",
                                          },
                                          [
                                            t._v(
                                              "\n                      " +
                                                t._s(t.approxSign) +
                                                t._s(
                                                  t.fixedExchangeValue(
                                                    t.amountReceive,
                                                  ),
                                                ) +
                                                "\n                    ",
                                            ),
                                          ],
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "new-text-large new-text-gray",
                                          },
                                          [
                                            t._v(
                                              "\n                      " +
                                                t._s(t.walletReceive.ticker) +
                                                "\n                    ",
                                            ),
                                          ],
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("TokenTag", {
                                        attrs: { wallet: t.walletReceive },
                                      }),
                                    ],
                                    1,
                                  ),
                                ]),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        t._v(" "),
                        !t.isExchange || t.isCompleted || t.isFailed
                          ? t._e()
                          : n(
                              "div",
                              { staticClass: "simplex-result__status" },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "simplex-result__status-list",
                                  },
                                  t._l(
                                    Object.keys(t.EXCHANGE_TRANSACTIONS_STEPS),
                                    function (e, a) {
                                      return n(
                                        "div",
                                        {
                                          key: a,
                                          staticClass:
                                            "simplex-result__status-item",
                                        },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "simplex-result__status-content",
                                            },
                                            [
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "simplex-result__status-circle",
                                                  class: {
                                                    "simplex-result__status-circle--green":
                                                      a < t.currentExchangeStep,
                                                  },
                                                },
                                                [
                                                  a < t.currentExchangeStep
                                                    ? n("SuccessMark")
                                                    : t._e(),
                                                  t._v(" "),
                                                  a === t.currentExchangeStep
                                                    ? n("div", {
                                                        staticClass:
                                                          "simplex-result__status-loading",
                                                      })
                                                    : t._e(),
                                                ],
                                                1,
                                              ),
                                              t._v(" "),
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "simplex-result__status-name m-t-5",
                                                },
                                                [
                                                  n(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "new-text-small",
                                                      class: [
                                                        {
                                                          "new-text-gray":
                                                            a !==
                                                            t.currentExchangeStep,
                                                        },
                                                      ],
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                      " +
                                                          t._s(
                                                            t
                                                              .EXCHANGE_TRANSACTIONS_STEPS[
                                                              e
                                                            ],
                                                          ) +
                                                          "\n                    ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "simplex-result__status-line",
                                            },
                                            [
                                              n("div", {
                                                class: {
                                                  "simplex-result__status-line--done":
                                                    a < t.currentExchangeStep,
                                                },
                                              }),
                                            ],
                                          ),
                                        ],
                                      );
                                    },
                                  ),
                                  0,
                                ),
                              ],
                            ),
                        t._v(" "),
                        n(
                          "div",
                          { staticClass: "simplex-result__table" },
                          [
                            n("div", { staticClass: "flex align-center" }, [
                              n(
                                "div",
                                {
                                  staticClass: "new-text-medium new-text-gray",
                                },
                                [t._v(t._s(t.$t("exchangeResult.date")))],
                              ),
                              t._v(" "),
                              n("div", { staticClass: "new-text-medium" }, [
                                t._v(
                                  "\n                " +
                                    t._s(t.$formatDate(t.date)) +
                                    "\n              ",
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "flex align-center" }, [
                              n(
                                "div",
                                {
                                  staticClass: "new-text-medium new-text-gray",
                                },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(
                                        t.formatTextByType(
                                          t.$t("exchangeResult.paymentID"),
                                          t.$t("exchangeResult.orderID"),
                                        ),
                                      ) +
                                      "\n              ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              n("div", { staticClass: "flex align-center" }, [
                                n(
                                  "div",
                                  {
                                    staticClass: "new-text-medium",
                                    staticStyle: { position: "relative" },
                                  },
                                  [
                                    n("span", [
                                      t._v(
                                        "\n                    " +
                                          t._s(t.transactionID) +
                                          "\n                  ",
                                      ),
                                    ]),
                                    t._v(" "),
                                    n(
                                      "transition",
                                      { attrs: { name: "fade" } },
                                      [
                                        t.isCopiedToClipboard ===
                                        t.transactionID
                                          ? n(
                                              "div",
                                              { staticClass: "message" },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.formatTextByType(
                                                        t.$t(
                                                          "exchangeResult.paymentID",
                                                        ),
                                                        t.$t(
                                                          "exchangeResult.orderID",
                                                        ),
                                                      ),
                                                    ) +
                                                    "\n                      " +
                                                    t._s(
                                                      t.$t(
                                                        "exchangeResult.isCopied",
                                                      ),
                                                    ) +
                                                    "\n                    ",
                                                ),
                                              ],
                                            )
                                          : t._e(),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  [
                                    n("icon", {
                                      staticClass: "m-l-15",
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        name: "copy-square-twice",
                                        width: "24",
                                        height: "24",
                                      },
                                      on: {
                                        click: function (e) {
                                          return (
                                            e.stopPropagation(),
                                            t.$copyToClipboard(t.transactionID)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            t.isExchange || (t.isSimplex && !t.isFailed)
                              ? n("div", { staticClass: "flex align-center" }, [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium new-text-gray",
                                    },
                                    [
                                      t._v(
                                        t._s(t.$t("exchangeResult.cashback")),
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  t.isMemberCashback
                                    ? n(
                                        "div",
                                        { staticClass: "new-text-medium" },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.amountCashback) +
                                              "\n                ",
                                          ),
                                          n(
                                            "span",
                                            {
                                              staticClass:
                                                "new-text-medium new-text-gray",
                                            },
                                            [t._v(" AWC ")],
                                          ),
                                        ],
                                      )
                                    : n(
                                        "div",
                                        {
                                          staticClass:
                                            "flex align-center hover-opacity",
                                          on: {
                                            click: function (e) {
                                              return t.$router.push({
                                                name: "membership-tab",
                                              });
                                            },
                                          },
                                        },
                                        [
                                          n("Diamond"),
                                          t._v(" "),
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "new-text-medium new-text-blue m-l-10",
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.$t(
                                                      "exchangeResult.getMembership",
                                                    ),
                                                  ) +
                                                  "\n                ",
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.isExchange
                              ? [
                                  t.sentHash
                                    ? n(
                                        "div",
                                        { staticClass: "flex align-center" },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "new-text-medium new-text-gray",
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.$t(
                                                      "exchangeResult.sentHash",
                                                    ),
                                                  ) +
                                                  "\n                ",
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "new-text-medium hover-decoration relative",
                                              attrs: {
                                                "data-test-id": "exch_sentHash",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.openTransactionExplorerExternal(
                                                    t.walletSend,
                                                    t.sentHash,
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              n(
                                                "span",
                                                {
                                                  staticClass:
                                                    "new-text-circle-end",
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(
                                                        t.formatTextTrimMiddle(
                                                          t.sentHash,
                                                          28,
                                                        ),
                                                      ) +
                                                      "\n                  ",
                                                  ),
                                                ],
                                              ),
                                              t._v(" "),
                                              n(
                                                "transition",
                                                { attrs: { name: "fade" } },
                                                [
                                                  t.isCopiedToClipboard ===
                                                  t.sentHash
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "message",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                      " +
                                                              t._s(
                                                                t.$t(
                                                                  "exchangeResult.sentHashCopiedToClipboard",
                                                                ),
                                                              ) +
                                                              "\n                    ",
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                ],
                                              ),
                                            ],
                                            1,
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            [
                                              n("icon", {
                                                staticClass: "m-l-15",
                                                staticStyle: {
                                                  cursor: "pointer",
                                                },
                                                attrs: {
                                                  name: "copy-square-twice",
                                                  width: "24",
                                                  height: "24",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.$copyToClipboard(
                                                        t.sentHash,
                                                      )
                                                    );
                                                  },
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.receivedHash
                                    ? n(
                                        "div",
                                        { staticClass: "flex align-center" },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "new-text-medium new-text-gray",
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(
                                                    t.$t(
                                                      "exchangeResult.receivedHash",
                                                    ),
                                                  ) +
                                                  "\n                ",
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "new-text-medium hover-decoration relative",
                                              attrs: {
                                                "data-test-id":
                                                  "exch_receivedhash",
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.openTransactionExplorerExternal(
                                                    t.walletReceive,
                                                    t.receivedHash,
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              n(
                                                "span",
                                                {
                                                  staticClass:
                                                    "new-text-circle-end",
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(
                                                        t.formatTextTrimMiddle(
                                                          t.receivedHash,
                                                          28,
                                                        ),
                                                      ) +
                                                      "\n                  ",
                                                  ),
                                                ],
                                              ),
                                              t._v(" "),
                                              n(
                                                "transition",
                                                { attrs: { name: "fade" } },
                                                [
                                                  t.isCopiedToClipboard ===
                                                  t.receivedHash
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "message",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                      " +
                                                              t._s(
                                                                t.$t(
                                                                  "exchangeResult.receivedHashCopiedToClipboard",
                                                                ),
                                                              ) +
                                                              "\n                    ",
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                ],
                                              ),
                                            ],
                                            1,
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            [
                                              n("icon", {
                                                staticClass: "m-l-15",
                                                staticStyle: {
                                                  cursor: "pointer",
                                                },
                                                attrs: {
                                                  name: "copy-square-twice",
                                                  width: "24",
                                                  height: "24",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.$copyToClipboard(
                                                        t.receivedHash,
                                                      )
                                                    );
                                                  },
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]
                              : t._e(),
                            t._v(" "),
                            t.isPending
                              ? n("div", { staticClass: "flex align-center" }, [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium new-text-gray",
                                    },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(
                                            t.$t(
                                              "exchangeResult.estimatedTime",
                                            ),
                                          ) +
                                          "\n              ",
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  n("div", { staticClass: "new-text-medium" }, [
                                    t._v(
                                      t._s(t.$t("exchangeResult.timeRange")),
                                    ),
                                  ]),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.isSimplex && t.provider
                              ? n("div", { staticClass: "flex align-center" }, [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium new-text-gray",
                                    },
                                    [
                                      t._v(
                                        t._s(t.$t("exchangeResult.provider")),
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "flex align-center" },
                                    [
                                      n("img", {
                                        attrs: {
                                          src: a(5397)(
                                            "./provider-" +
                                              t.provider.toLowerCase() +
                                              ".svg",
                                          ),
                                          type: "image/svg+xml",
                                        },
                                      }),
                                      t._v(" "),
                                      n(
                                        "span",
                                        { staticClass: "new-text-medium" },
                                        [t._v(" " + t._s(t.provider) + " ")],
                                      ),
                                    ],
                                  ),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.repeated
                              ? n("div", { staticClass: "flex align-center" }, [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium new-text-gray",
                                    },
                                    [
                                      t._v(
                                        t._s(t.$t("exchangeResult.repeated")),
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "flex align-center" },
                                    [
                                      n(
                                        "span",
                                        { staticClass: "new-text-medium" },
                                        [t._v(" " + t._s(t.repeated) + " ")],
                                      ),
                                    ],
                                  ),
                                ])
                              : t._e(),
                          ],
                          2,
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "m-t-24 m-b-20",
                            staticStyle: { width: "100%" },
                          },
                          [
                            t.isAwait || t.isPending
                              ? n(
                                  "div",
                                  {
                                    staticClass:
                                      "new-text-medium new-text-gray",
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.$t(
                                            "exchangeResult.exchangeRateExplanation",
                                          ),
                                        ) +
                                        "\n            ",
                                    ),
                                  ],
                                )
                              : t._e(),
                            t._v(" "),
                            t.isCompleted
                              ? n(
                                  "div",
                                  { staticClass: "m-t-10 flex justify-center" },
                                  [n("RateStars")],
                                  1,
                                )
                              : t._e(),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "section__footer" },
                        [
                          t.isSimplex
                            ? [
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "new-button new-button-large new-button-yellow",
                                    on: {
                                      click: function (e) {
                                        return t.$router.push("/simplex");
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.$t("exchangeResult.buyMore")) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "new-button new-button-large new-button-blue",
                                    on: {
                                      click: function (e) {
                                        return t.$emit("closePopup");
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.$t("exchangeResult.orderHistory"),
                                        ) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ]
                            : t.isExchange
                              ? [
                                  t.isFailed
                                    ? n(
                                        "button",
                                        {
                                          staticClass:
                                            "new-button new-button-large new-button-green_fill",
                                          on: {
                                            click: function (e) {
                                              return t.$emit(
                                                "exchangeFailedContinue",
                                                t.transactionID,
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t("exchangeResult.continue"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      )
                                    : n(
                                        "button",
                                        {
                                          staticClass:
                                            "new-button new-button-large new-button-yellow",
                                          on: {
                                            click: function (e) {
                                              return t.$router.push(
                                                "/exchange",
                                              );
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t("exchangeResult.newSwap"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                  t._v(" "),
                                  t.isFailed
                                    ? n(
                                        "button",
                                        {
                                          staticClass:
                                            "new-button new-button-large new-button-yellow",
                                          on: {
                                            click: function (e) {
                                              t.$router.push({
                                                name: t.formatTextByType(
                                                  "simplex-page",
                                                  "exchange-basic",
                                                ),
                                              });
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t("exchangeResult.newSwap"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      )
                                    : n(
                                        "button",
                                        {
                                          staticClass:
                                            "new-button new-button-large new-button-blue",
                                          on: {
                                            click: function (e) {
                                              return t.$emit("closePopup");
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "exchangeResult.orderHistory",
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                ]
                              : t._e(),
                          t._v(" "),
                          n(
                            "button",
                            {
                              staticClass:
                                "new-button new-button-large new-button-transparent",
                              on: {
                                click: function (e) {
                                  return t.$bus.$emit(
                                    "openSupportPopup",
                                    t.contactSupport,
                                  );
                                },
                              },
                            },
                            [
                              t._v(
                                "\n            " +
                                  t._s(t.$t("exchangeResult.contactUs")) +
                                  "\n          ",
                              ),
                            ],
                          ),
                        ],
                        2,
                      ),
                    ]),
                  ]),
                ],
              ),
            ],
            1,
          );
        },
        s = [];
    },
    5397: function (t, e, a) {
      var n = {
        "./provider-guardarian.svg": 863,
        "./provider-simplex.svg": 864,
      };
      function s(t) {
        var e = i(t);
        return a(e);
      }
      function i(t) {
        if (!a.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      ((s.keys = function () {
        return Object.keys(n);
      }),
        (s.resolve = i),
        (t.exports = s),
        (s.id = 5397));
    },
    5401: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = n(a(3189)),
        i = n(a(5391)),
        r = n(a(5395)),
        l = a(375),
        c = a(824),
        o = a(399);
      e.default = {
        name: "SimplexHistory",
        components: {
          TableItems: s.default,
          ExchangeHistoryItem: i.default,
          NewExchangeResult: r.default,
        },
        mixins: [l.ExchangeMixin],
        data: () => ({
          loading: !0,
          txs: [],
          activeSimplexTransactionID: null,
          subscription: null,
        }),
        computed: {
          header() {
            return [
              { title: this.$t("simplexPage.header.youSent") },
              { title: this.$t("simplexPage.header.youGot") },
            ];
          },
          activeSimplexTransaction() {
            return this.txs.find(
              (t) => t.id === this.activeSimplexTransactionID,
            );
          },
        },
        async mounted() {
          ((this.subscription = this.$simplexDb
            .getLiveTransactions()
            .subscribe({
              next: (t) => {
                ((this.txs = this.formatedTxs(t)),
                  console.log(this.txs),
                  (this.loading = !1));
              },
              error: (t) => {
                (console.error(t), (this.loading = !1));
              },
            })),
            await this.$simplexDb.getTransactionList());
        },
        beforeDestroy() {
          this.subscription && this.subscription.unsubscribe();
        },
        methods: {
          formatWallet: c.formatWallet,
          formatedTxs(t) {
            return t
              .map((t) => ({
                amountToReceive: t.to.amount || 0,
                toCurrency: t.to.id,
                amountToSend: t.from.amount || 0,
                fromCurrency: t.from.ticker,
                status: t.status,
                provider: t.provider,
                id: t.id,
                repeated:
                  t.provider === o.ProviderName.Guardarian
                    ? this.$t("simplexPage.monthly")
                    : "",
                timestamp: t.date,
                expectedCashbackAmount: t.cashbackAmount,
              }))
              .sort((t, e) => new Date(e.timestamp) - new Date(t.timestamp));
          },
          toggleOrderDetails(t) {
            (void 0 === t && (t = null), (this.activeSimplexTransactionID = t));
          },
        },
      };
    },
    8891: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return s;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticStyle: { height: "100%" } },
            [
              a(
                "div",
                { staticClass: "exchange-history scroll-list2" },
                [
                  t.loading
                    ? a("div", { staticClass: "loader" })
                    : a(
                        "table-items",
                        {
                          attrs: {
                            header: t.header,
                            "is-empty": 0 === t.txs.length,
                            items: t.txs,
                          },
                        },
                        [
                          t.txs.length
                            ? t._e()
                            : a(
                                "div",
                                { attrs: { slot: "empty" }, slot: "empty" },
                                [
                                  a("div", { staticClass: "empty" }, [
                                    t._v(
                                      t._s(
                                        t.$t("simplexPage.ordersAppearHere"),
                                      ),
                                    ),
                                  ]),
                                ],
                              ),
                          t._v(" "),
                          a(
                            "div",
                            {
                              attrs: { slot: "table-rows" },
                              slot: "table-rows",
                            },
                            t._l(t.txs, function (e) {
                              return a("exchange-history-item", {
                                key: "simplex-history-" + e.id,
                                attrs: {
                                  "transaction-id": e.id,
                                  "type-of-exchange": "simplex",
                                  date: e.timestamp,
                                  "amount-receive":
                                    e.amountToReceive.toString(),
                                  "amount-send": e.amountToSend.toString(),
                                  "wallet-receive": t.formatWallet(
                                    t.$exchanges.getReceiverWalletByTx(
                                      t.$wallets,
                                      e,
                                    ),
                                  ),
                                  "wallet-send": { ticker: e.fromCurrency },
                                  status: t.$firstLetterCapitalize(e.status),
                                },
                                nativeOn: {
                                  click: function (a) {
                                    return (
                                      a.preventDefault(),
                                      t.toggleOrderDetails(e.id)
                                    );
                                  },
                                },
                              });
                            }),
                            1,
                          ),
                        ],
                      ),
                ],
                1,
              ),
              t._v(" "),
              a(
                "transition",
                { attrs: { name: "fade-down" } },
                [
                  t.activeSimplexTransaction
                    ? a("new-exchange-result", {
                        attrs: {
                          "type-of-exchange": "simplex",
                          "wallet-receive": t.formatWallet(
                            t.$exchanges.getReceiverWalletByTx(
                              t.$wallets,
                              t.activeSimplexTransaction,
                            ),
                          ),
                          "wallet-send": {
                            ticker: t.activeSimplexTransaction.fromCurrency,
                          },
                          "amount-send":
                            t.activeSimplexTransaction.amountToSend,
                          "amount-receive":
                            t.activeSimplexTransaction.amountToReceive,
                          "amount-cashback":
                            t.activeSimplexTransaction.expectedCashbackAmount,
                          status: t.$firstLetterCapitalize(
                            t.activeSimplexTransaction.status,
                          ),
                          provider: t.$firstLetterCapitalize(
                            t.activeSimplexTransaction.provider,
                          ),
                          repeated: t.activeSimplexTransaction.repeated,
                          date: t.activeSimplexTransaction.timestamp,
                          "transaction-i-d": t.activeSimplexTransaction.id,
                        },
                        on: {
                          closePopup: function (e) {
                            return t.toggleOrderDetails(null);
                          },
                        },
                      })
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        s = [];
    },
  },
]);
