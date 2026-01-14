(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [204, 410],
  {
    2661: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(4898),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(7024),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
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
      const r = "appRate::disabled",
        i = 4,
        s = 1e3;
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
            ((this.isRateStars = !localStorage.getItem(r)),
              clearTimeout(this.fetchRatingDisabledTimeout),
              (this.fetchRatingDisabledTimeout = setTimeout(
                () => this.fetchRatingDisabled(),
                s,
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
              ? (localStorage.setItem(r, "1"),
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
            return u.default;
          },
        }),
        Object.defineProperty(e, "ClockIcon", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "Diamond", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "ExchangeArrow", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(e, "ExchangeWhiteArrow", {
          enumerable: !0,
          get: function () {
            return p.default;
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
            return o.default;
          },
        }),
        Object.defineProperty(e, "SuccessIcon", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var r = n(a(2867)),
        i = n(a(2869)),
        s = n(a(2871)),
        u = n(a(2873)),
        o = n(a(2876)),
        l = n(a(2878)),
        c = n(a(2843)),
        d = n(a(2880)),
        f = n(a(2882)),
        p = n(a(2884));
    },
    2843: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2780),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2857),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2857: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2867: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2782),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2868),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2868: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2869: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2783),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2870),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2870: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2871: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2784),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2872),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2872: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2873: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2785),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2875),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2874: function (t, e, a) {
      var n = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function r(t) {
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
      ((r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = i),
        (t.exports = r),
        (r.id = 2874));
    },
    2875: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2876: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2786),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2877),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2877: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2878: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2787),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2879),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2879: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2880: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2788),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2881),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2881: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2882: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2789),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2883),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2883: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2884: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2790),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2885),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2885: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    2973: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2821),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(2974),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    2974: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
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
        r = [];
    },
    3633: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(2837);
      e.default = {
        name: "AtomicSelect",
        components: { SelectArrow: n.SelectArrow },
        props: {
          label: { type: String, default: "" },
          list: { type: Array, default: () => [] },
          isError: { type: Boolean, default: !1 },
        },
        data: () => ({ activeLabel: "", isOpen: !1 }),
        methods: {
          outsideClick(t) {
            (t.stopPropagation(), (this.isOpen = !1));
          },
          setActiveLabel(t) {
            ((this.activeLabel = t), this.$emit("setActiveLabel", t));
          },
        },
      };
    },
    3975: function (t, e, a) {
      t.exports = a.p + "imgs/atomic-man-like--static.png";
    },
    4898: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = n(a(2973)),
        i = n(a(4899));
      const s = "appRate::disabled",
        u = 1e4,
        o = 250;
      e.default = {
        name: "RatePopup",
        components: { RateStars: r.default, AtomicSelect: i.default },
        data: () => ({
          userSubject: "",
          userRate: 0,
          userEmail: "",
          userComment: "",
          isRatePopup: !1,
          isValidEmail: !0,
          isValidComment: !0,
          isClickSendReview: !1,
          isSendSuccess: !1,
          selectLabel: "",
        }),
        watch: {
          userEmail(t, e) {
            t !== e && this.isClickSendReview && this.validateEmail();
          },
          userComment(t, e) {
            t !== e && this.isClickSendReview && this.validateComment();
          },
        },
        mounted() {
          (this.$bus.$on("openRatePopup", (t) => {
            (this.resetFormState(), (this.isRatePopup = !0), this.rateApp(t));
          }),
            this.$bus.$on("openRateSuccess", () => this.showClosePopup(!1)));
        },
        methods: {
          resetFormState() {
            ((this.userEmail = ""),
              (this.userComment = ""),
              (this.isClickSendReview = !1),
              (this.isValidEmail = !0),
              (this.isValidComment = !0));
          },
          setSelect(t) {
            this.userSubject = t;
          },
          rateApp(t) {
            this.userRate = t;
          },
          validateComment() {
            this.isValidComment = this.userComment.length > 0;
          },
          validateEmail() {
            const t =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.isValidEmail = t.test(String(this.userEmail).toLowerCase());
          },
          validateForm() {
            (this.validateEmail(), this.validateComment());
          },
          sendResult() {
            if (
              (this.validateForm(),
              (this.isClickSendReview = !0),
              this.isValidComment && this.isValidEmail)
            ) {
              const t = this.$wallets.hash,
                e = {
                  text: this.userComment,
                  email: this.userEmail,
                  rating: this.userRate,
                  subject: this.userSubject,
                  platform: this.appConfig.platform,
                  operatingSystem: this.appConfig.platform,
                  appVersion: this.appConfig.version,
                  atomicId: t,
                };
              (this.$reviews.sendReview(e),
                this.showClosePopup(),
                localStorage.setItem(s, "1"));
            }
          },
          showClosePopup(t) {
            (void 0 === t && (t = !0),
              (this.isRatePopup = !1),
              setTimeout(() => {
                ((this.isRatePopup = !0),
                  (this.isSendSuccess = !0),
                  t && setTimeout(() => this.closePopup(), u));
              }, o));
          },
          closePopup() {
            ((this.isSendSuccess = !1), (this.isRatePopup = !1));
          },
          neverRemind() {
            (localStorage.setItem(s, "1"), this.closePopup());
          },
        },
      };
    },
    4899: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3633),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var s = a(4900),
        u = a(5),
        o = !1,
        l = null,
        c = null,
        d = null,
        f = Object(u["a"])(r.a, s["a"], s["b"], o, l, c, d);
      e["default"] = f.exports;
    },
    4900: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: t.outsideClick,
                  expression: "outsideClick",
                },
              ],
              staticClass: "a-select",
              on: {
                click: function (e) {
                  t.isOpen = !t.isOpen;
                },
              },
            },
            [
              a(
                "div",
                {
                  staticClass: "a-select__default new-text-medium",
                  class: { "a-select__error": t.isError },
                },
                [
                  t._v(
                    "\n    " +
                      t._s(t.activeLabel || (t.isError ? "*" : "") + t.label) +
                      "\n  ",
                  ),
                ],
              ),
              t._v(" "),
              a(
                "div",
                { staticClass: "a-select__icon" },
                [a("SelectArrow")],
                1,
              ),
              t._v(" "),
              t.isOpen
                ? a(
                    "div",
                    { staticClass: "a-select__dropdown" },
                    t._l(t.list, function (e, n) {
                      return a(
                        "div",
                        {
                          key: n,
                          staticClass:
                            "a-select__dropdown-item new-text-medium",
                          on: {
                            click: function (a) {
                              return t.setActiveLabel(e);
                            },
                          },
                        },
                        [t._v("\n      " + t._s(e) + "\n    ")],
                      );
                    }),
                    0,
                  )
                : t._e(),
            ],
          );
        },
        r = [];
    },
    7024: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("transition", { attrs: { name: "fade" } }, [
            n(
              "div",
              {
                staticClass: "rate-popup",
                class: { "rate-popup_show": t.isRatePopup },
              },
              [
                n(
                  "div",
                  {
                    staticClass:
                      "rate-popup__wrap rate-popup__wrap-padding rate-popup__start-big",
                    class: { "rate-popup__wrap-small": t.isSendSuccess },
                  },
                  [
                    t.isSendSuccess
                      ? n("img", {
                          staticClass: "rate-popup__atomic",
                          attrs: { src: a(3975) },
                        })
                      : t._e(),
                    t._v(" "),
                    t.isSendSuccess
                      ? t._e()
                      : n(
                          "div",
                          {
                            staticClass: "rate-popup__close",
                            on: { click: t.closePopup },
                          },
                          [t._v("\n        ✕\n      ")],
                        ),
                    t._v(" "),
                    t.isSendSuccess
                      ? n("p", { staticClass: "rate-popup__title-big" }, [
                          t._v(
                            "\n        " +
                              t._s(t.$t("popups.ratePopup.thankYou")) +
                              "\n      ",
                          ),
                        ])
                      : n("p", { staticClass: "rate-popup__title-big" }, [
                          t._v(
                            "\n        " +
                              t._s(t.$t("popups.ratePopup.leaveYourFeedback")) +
                              "\n      ",
                          ),
                        ]),
                    t._v(" "),
                    t.isSendSuccess
                      ? n("p", { staticClass: "rate-popup__text m-t-10" }, [
                          t._v(
                            "\n        " +
                              t._s(t.$t("popups.ratePopup.forHelpingUs")) +
                              "\n      ",
                          ),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.isSendSuccess
                      ? t._e()
                      : n("RateStars", { attrs: { userRate: t.userRate } }),
                    t._v(" "),
                    t.isSendSuccess
                      ? n("div", { staticClass: "m-t-30" }, [
                          n(
                            "button",
                            {
                              staticClass:
                                "rate-popup__button rate-popup__button-small",
                              on: { click: t.closePopup },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.close")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ])
                      : t._e(),
                    t._v(" "),
                    !t.isSendSuccess && t.userRate && t.userRate < 5
                      ? n(
                          "div",
                          { staticClass: "rate-popup__content" },
                          [
                            n("div", { staticClass: "rate-popup__row" }, [
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.userEmail,
                                    expression: "userEmail",
                                  },
                                ],
                                staticClass: "rate-popup__input",
                                class: {
                                  "rate-popup__input-error": !t.isValidEmail,
                                },
                                attrs: {
                                  placeholder:
                                    (t.isValidEmail ? "" : "*") + "Your e-mail",
                                  type: "text",
                                },
                                domProps: { value: t.userEmail },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.userEmail = e.target.value);
                                  },
                                },
                              }),
                              t._v(" "),
                              !t.isValidEmail && t.userEmail
                                ? n("p", { staticClass: "rate-popup__error" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.$t("error.enterValidEmail")) +
                                        "\n          ",
                                    ),
                                  ])
                                : t._e(),
                            ]),
                            t._v(" "),
                            n("AtomicSelect", {
                              attrs: {
                                label: t.$reviews.settings.selectTitle,
                                list: t.$reviews.settings.selectValues,
                              },
                              on: { setActiveLabel: t.setSelect },
                            }),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "rate-popup__row rate-popup__textarea-wrap",
                              },
                              [
                                n("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.userComment,
                                      expression: "userComment",
                                    },
                                  ],
                                  staticClass: "rate-popup__textarea",
                                  class: {
                                    "rate-popup__textarea-error":
                                      !t.isValidComment,
                                  },
                                  attrs: {
                                    placeholder:
                                      (t.isValidComment ? "" : "*") +
                                      "Describe your issue or share your ideas",
                                  },
                                  domProps: { value: t.userComment },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.userComment = e.target.value);
                                    },
                                  },
                                }),
                              ],
                            ),
                            t._v(" "),
                            n("div", [
                              n(
                                "button",
                                {
                                  staticClass: "rate-popup__button",
                                  on: { click: t.sendResult },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("button.send")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "m-t-15" }, [
                              n(
                                "a",
                                {
                                  staticClass: "rate-popup__link",
                                  on: { click: t.neverRemind },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.$t("popups.ratePopup.neverRemindMe"),
                                      ) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ]),
                          ],
                          1,
                        )
                      : t._e(),
                  ],
                  1,
                ),
              ],
            ),
          ]);
        },
        r = [];
    },
  },
]);
