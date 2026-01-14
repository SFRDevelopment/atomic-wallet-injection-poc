(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [157, 381, 410],
  {
    2740: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(5367),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(8837),
        s = e(5);
      function o(t) {
        e(8831);
      }
      var c = !1,
        l = o,
        p = "data-v-0d3d5541",
        v = null,
        b = Object(s["a"])(i.a, r["a"], r["b"], c, l, p, v);
      a["default"] = b.exports;
    },
    2780: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "SuccessMark",
        props: { color: { type: String, default: "white" } },
      };
    },
    2782: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "Diamond" };
    },
    2783: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "RateStart" };
    },
    2784: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ClockIcon" };
    },
    2785: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "AlertIcon",
        props: { type: { type: String, default: "Success" } },
        computed: {
          imgPath() {
            return e(2874)(`./alert-${this.type.toLowerCase()}.svg`);
          },
          iconClass() {
            return "alert_icon_" + this.type.toLowerCase();
          },
        },
      };
    },
    2786: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "SelectArrow" };
    },
    2787: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "SuccessIcon" };
    },
    2788: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ExchangeArrow" };
    },
    2789: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "PortfolioChart" };
    },
    2790: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ExchangeArrow" };
    },
    2821: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var n = e(2837);
      const i = "appRate::disabled",
        d = 4,
        r = 1e3;
      a.default = {
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
            ((this.isRateStars = !localStorage.getItem(i)),
              clearTimeout(this.fetchRatingDisabledTimeout),
              (this.fetchRatingDisabledTimeout = setTimeout(
                () => this.fetchRatingDisabled(),
                r,
              )));
          },
          hoverStart(t) {
            if (!this.userRate) {
              this.disableHoverStart();
              for (let a = 0; a <= t; a += 1) this.hoverStars.push(a);
            }
          },
          disableHoverStart() {
            this.userRate || (this.hoverStars = []);
          },
          rateApp(t) {
            t >= d
              ? (localStorage.setItem(i, "1"),
                this.$bus.$emit("openRateSuccess"),
                this.$electron.openExternal(
                  "https://www.trustpilot.com/evaluate/atomicwallet.io",
                ))
              : this.$bus.$emit("openRatePopup", t);
          },
        },
      };
    },
    2837: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "AlertIcon", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(a, "ClockIcon", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(a, "Diamond", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(a, "ExchangeArrow", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(a, "ExchangeWhiteArrow", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(a, "PortfolioChart", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(a, "RateStart", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(a, "SelectArrow", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(a, "SuccessIcon", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(a, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }));
      var i = n(e(2867)),
        d = n(e(2869)),
        r = n(e(2871)),
        s = n(e(2873)),
        o = n(e(2876)),
        c = n(e(2878)),
        l = n(e(2843)),
        p = n(e(2880)),
        v = n(e(2882)),
        b = n(e(2884));
    },
    2843: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2780),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2857),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2851: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "LoadingEllipsis" };
    },
    2857: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "7", viewBox: "0 0 10 7", width: "10" } },
            [
              e("path", {
                class: "fill-" + t.color,
                attrs: {
                  d: "M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L4.2 4.4L1.7 1.9C1.3 1.5 0.7 1.5 0.3 1.9C-0.1 2.3 -0.1 2.9 0.3 3.3L3.5 6.4C3.6 6.5 3.6 6.5 3.7 6.5L3.8 6.6C3.9 6.6 4 6.7 4.2 6.7C4.4 6.7 4.5 6.7 4.6 6.6C4.6 6.6 4.7 6.6 4.7 6.5C4.8 6.5 4.9 6.4 4.9 6.3L9.7 1.5C10.1 1.3 10.1 0.7 9.7 0.3Z",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2867: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2782),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2868),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2868: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
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
              e("path", {
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
        i = [];
    },
    2869: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2783),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2870),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2870: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "38", viewBox: "0 0 38 38", width: "38" } },
            [
              e("path", {
                attrs: {
                  d: "M25.8069 11.4453L34.8195 12.3099C37.9555 12.6108 38.9173 15.6741 36.4957 17.6867L29.4398 23.5509L32.0592 33.1041C32.9194 36.2415 30.2506 38.1407 27.5775 36.2525L19.0041 30.1967L10.4307 36.2525C7.76847 38.1331 5.08875 36.2419 5.94907 33.1041L8.56846 23.5509L1.51257 17.6867C-0.919172 15.6657 0.0388109 12.6122 3.18825 12.3099L12.1992 11.4453L16.1693 2.29209C17.4125 -0.574326 20.5965 -0.57289 21.8387 2.29238L25.8069 11.4453Z",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2871: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2784),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2872),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2872: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
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
              e("path", {
                attrs: {
                  d: "M9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM8.25 5C8.66421 5 9 5.33579 9 5.75V8.9849L11.7692 10.05C12.1558 10.1987 12.3487 10.6326 12.2 11.0192C12.0513 11.4058 11.6174 11.5987 11.2308 11.45L7.98077 10.2C7.69112 10.0886 7.5 9.81033 7.5 9.5V5.75C7.5 5.33579 7.83579 5 8.25 5Z",
                  fill: "white",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2873: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2785),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2875),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2874: function (t, a, e) {
      var n = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function i(t) {
        var a = d(t);
        return e(a);
      }
      function d(t) {
        if (!e.o(n, t)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        return n[t];
      }
      ((i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = d),
        (t.exports = i),
        (i.id = 2874));
    },
    2875: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", [
            e("div", { staticClass: "alert_icon", class: t.iconClass }, [
              e("div", [e("img", { attrs: { src: t.imgPath } })]),
            ]),
          ]);
        },
        i = [];
    },
    2876: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2786),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2877),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2877: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "6", viewBox: "0 0 10 6", width: "10" } },
            [
              e("path", {
                attrs: {
                  d: "M1.45442 0.691051C1.06285 0.384877 0.497225 0.454099 0.19105 0.845663C-0.115124 1.23723 -0.0459015 1.80286 0.345663 2.10903L4.4423 5.3123C4.76791 5.5669 5.22507 5.56699 5.55078 5.31252L9.65074 2.10925C10.0424 1.80323 10.1119 1.23763 9.80585 0.845942C9.49983 0.454257 8.93423 0.384813 8.54255 0.690833L4.99691 3.46101L1.45442 0.691051Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2878: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2787),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2879),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2879: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
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
              e("path", {
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
        i = [];
    },
    2880: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2788),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2881),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2881: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
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
              e("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2882: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2789),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2883),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2883: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { width: "24", height: "24", viewBox: "0 0 24 24" } },
            [
              e("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M18.9193 14C18.0526 17.0034 15.2832 19.2 12.0007 19.2C9.33593 19.2 7.00928 17.7524 5.76428 15.6006L1.6084 18C2.0905 18.835 2.66825 19.6035 3.32628 20.2919C3.43835 20.4091 3.55277 20.524 3.66947 20.6366C4.74436 21.6735 6.01052 22.5075 7.4085 23.0866C8.85424 23.6854 10.3931 23.9917 11.9379 23.9998L12.0007 24L12.0745 23.9998C13.0921 23.9935 14.111 23.8579 15.1065 23.5911C17.0564 23.0686 18.8329 22.0657 20.28 20.6864L20.3319 20.6366C20.4194 20.5522 20.5055 20.4666 20.5903 20.3796C20.6228 20.3464 20.6551 20.3129 20.6871 20.2793C20.9811 19.9708 21.2596 19.6458 21.5209 19.3051C22.719 17.7439 23.5082 15.9206 23.8329 14H18.9193Z",
                  fill: "#979EB0",
                },
              }),
              t._v(" "),
              e("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M12 4.8V0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0327 1.51011 19.3429 2.38172 20.4498 3.47939C20.4735 3.50289 20.4971 3.5265 20.5206 3.5502C21.6183 4.65706 22.4899 5.96731 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12H19.2C19.2 8.02355 15.9764 4.8 12 4.8Z",
                  fill: "#B8BDCC",
                },
              }),
              t._v(" "),
              e("path", {
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
        i = [];
    },
    2884: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2790),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2885),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2885: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
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
              e("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#ffffff",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2957: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "AtomicCheckbox",
        props: {
          modelValue: { type: Boolean, default: !1 },
          isError: { type: Boolean, default: !1 },
          size: { type: String, default: "m" },
        },
        computed: {
          proxyValue: {
            get() {
              return this.modelValue;
            },
            set(t) {
              this.$emit("update:modelValue", t);
            },
          },
        },
      };
    },
    2958: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      const n = "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png";
      a.default = {
        props: { uri: { type: String, required: !0 } },
        data() {
          return { isLoaded: !1, isError: !1 };
        },
        computed: {
          formattedSrc() {
            return this.isError ? n : this.uri;
          },
        },
      };
    },
    2973: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2821),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(2974),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2974: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return t.isRateStars
            ? e("div", { staticClass: "rate-stars" }, [
                t._e(),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "rate-stars__wrap" },
                  t._l(5, function (a) {
                    return e(
                      "div",
                      {
                        key: a,
                        staticClass: "rate-stars__item",
                        class: {
                          "rate-stars__item--hover":
                            t.hoverStars.length > 0 && t.hoverStars.includes(a),
                          "rate-stars__item--active": a <= t.userRate,
                          "rate-stars__item--good": 5 === t.userRate,
                        },
                        on: {
                          click: function (e) {
                            t.isRate && t.rateApp(a);
                          },
                          mouseleave: function (a) {
                            t.isRate && t.disableHoverStart();
                          },
                          mouseover: function (e) {
                            t.isRate && t.hoverStart(a);
                          },
                        },
                      },
                      [e("RateStart")],
                      1,
                    );
                  }),
                  0,
                ),
              ])
            : t._e();
        },
        i = [];
    },
    2980: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2851),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(3067),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    2999: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2958),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(3346),
        s = e(5);
      function o(t) {
        e(3343);
      }
      var c = !1,
        l = o,
        p = "data-v-1dc165ba",
        v = null,
        b = Object(s["a"])(i.a, r["a"], r["b"], c, l, p, v);
      a["default"] = b.exports;
    },
    3067: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return e("div", { key: t });
            }),
            0,
          );
        },
        i = [];
    },
    3159: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.maskInput = s));
      const n = /[^0-9.,]+/g,
        i = /[^0-9.,]|[.,](?=.*[.,])|[.,](?=.^[0-9]{3}[.,])/g,
        d = 100,
        r = (t) => {
          if (
            (null === t || void 0 === t ? void 0 : t.length) > 1 &&
            t.startsWith("0")
          ) {
            const [, ...a] = t;
            return r(a.join(""));
          }
          return t;
        };
      function s(t, a, e) {
        let s;
        (void 0 === a && (a = d),
          !e &&
            [".", ",", "0"].some((a) => t.startsWith(a)) &&
            ((t = t.split("")), (t[0] = "0."), (t = t.join(""))));
        const o = t.replace(n, "").replace(i, ""),
          c = o.split(/\.|,/),
          [l, p] = c;
        return (
          (s = r(l)),
          e
            ? s
            : (c.splice(0, 1, s),
              p && p.length >= a && c.splice(1, 2, p.slice(0, a)),
              c.join("."))
        );
      }
    },
    3335: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2957),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(3338),
        s = e(5);
      function o(t) {
        e(3336);
      }
      var c = !1,
        l = o,
        p = "data-v-622b8c47",
        v = null,
        b = Object(s["a"])(i.a, r["a"], r["b"], c, l, p, v);
      a["default"] = b.exports;
    },
    3336: function (t, a, e) {
      var n = e(3337);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = e(23).default;
      i("7ee78446", n, !0, {});
    },
    3337: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          '\n@keyframes spinner-data-v-622b8c47{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-622b8c47{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-622b8c47{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-622b8c47]{color:#6b963b\n}\n.text-red[data-v-622b8c47]{color:#c03647\n}\n.text-gray[data-v-622b8c47]{color:#8290ad\n}\n.text-blue[data-v-622b8c47]{color:#00c2ff\n}\n.text-danger[data-v-622b8c47]{color:#8c4545\n}\n.text-title[data-v-622b8c47]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-622b8c47]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-622b8c47]{color:#f1b70b\n}\n.text-white[data-v-622b8c47]{color:#fff\n}\n.text-bigger[data-v-622b8c47]{font-size:18px;font-weight:500\n}\n.text-big[data-v-622b8c47]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-622b8c47]{font-size:14px\n}\n.text-middle-height[data-v-622b8c47]{line-height:24px\n}\n.text-small[data-v-622b8c47]{font-size:12px\n}\n.text-word-break[data-v-622b8c47]{word-break:break-all\n}\n.text-right[data-v-622b8c47]{text-align:right\n}\n.text-left[data-v-622b8c47]{text-align:left\n}\n.text-line-middle[data-v-622b8c47]{line-height:24px\n}\n.text-link[data-v-622b8c47],.text-link-underline[data-v-622b8c47]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-622b8c47]:hover,.text-link-underline[data-v-622b8c47]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-622b8c47]{text-decoration:underline\n}\n.text-center[data-v-622b8c47]{text-align:center\n}\n.text-pointer[data-v-622b8c47]{cursor:pointer\n}\n.gap-10[data-v-622b8c47]{gap:10px\n}\n.m-t-auto[data-v-622b8c47]{margin-top:auto\n}\n.m-t-4[data-v-622b8c47]{margin-top:4px\n}\n.m-t-5[data-v-622b8c47]{margin-top:5px\n}\n.m-t-8[data-v-622b8c47]{margin-top:10px\n}\n.m-t-10[data-v-622b8c47]{margin-top:10px\n}\n.m-t-13[data-v-622b8c47]{margin-top:10px\n}\n.m-t-15[data-v-622b8c47]{margin-top:15px\n}\n.m-t-16[data-v-622b8c47]{margin-top:16px\n}\n.m-t-20[data-v-622b8c47]{margin-top:20px\n}\n.m-t-24[data-v-622b8c47]{margin-top:24px\n}\n.m-t-25[data-v-622b8c47]{margin-top:25px\n}\n.m-t-26[data-v-622b8c47]{margin-top:26px\n}\n.m-t-30[data-v-622b8c47]{margin-top:30px\n}\n.m-t-35[data-v-622b8c47]{margin-top:35px\n}\n.m-t-40[data-v-622b8c47]{margin-top:40px\n}\n.m-t-45[data-v-622b8c47]{margin-top:45px\n}\n.m-t-50[data-v-622b8c47]{margin-top:50px\n}\n.m-t-60[data-v-622b8c47]{margin-top:60px\n}\n.m-t-65[data-v-622b8c47]{margin-top:65px\n}\n.m-t-80[data-v-622b8c47]{margin-top:80px\n}\n.m-l-5[data-v-622b8c47]{margin-left:5px\n}\n.m-l-10[data-v-622b8c47]{margin-left:10px\n}\n.m-l-15[data-v-622b8c47]{margin-left:15px\n}\n.m-l-20[data-v-622b8c47]{margin-left:20px\n}\n.m-l-25[data-v-622b8c47]{margin-left:25px\n}\n.m-l-30[data-v-622b8c47]{margin-left:30px\n}\n.m-l-35[data-v-622b8c47]{margin-left:35px\n}\n.m-r-5[data-v-622b8c47]{margin-right:5px\n}\n.m-r-10[data-v-622b8c47]{margin-right:10px\n}\n.m-r-15[data-v-622b8c47]{margin-right:15px\n}\n.m-r-30[data-v-622b8c47]{margin-right:30px\n}\n.m-b-5[data-v-622b8c47]{margin-bottom:5px !important\n}\n.m-b-15[data-v-622b8c47]{margin-bottom:15px !important\n}\n.m-b-20[data-v-622b8c47]{margin-bottom:20px !important\n}\n.m-b-30[data-v-622b8c47]{margin-bottom:30px !important\n}\n.m-b-25[data-v-622b8c47]{margin-bottom:25px !important\n}\n.m-b-50[data-v-622b8c47]{margin-bottom:50px !important\n}\n.p-t-40[data-v-622b8c47]{padding-top:40px\n}\n.p-t-85[data-v-622b8c47]{padding-top:85px !important\n}\n.hidden[data-v-622b8c47]{opacity:0 !important\n}\n.relative[data-v-622b8c47]{position:relative\n}\n.space-nowrap[data-v-622b8c47]{white-space:nowrap\n}\n.uppercase[data-v-622b8c47]{text-transform:uppercase\n}\n.lowercase[data-v-622b8c47]{text-transform:lowercase\n}\n.fade-enter-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-enter[data-v-622b8c47],.fade-leave-to[data-v-622b8c47]{opacity:0\n}\n.fade-down-enter-active[data-v-622b8c47],.fade-down-leave-active[data-v-622b8c47],.fade-down-move[data-v-622b8c47]{transition:all .15s\n}\n.fade-down-leave-active[data-v-622b8c47],.fade-down-enter-active[data-v-622b8c47]{position:absolute !important\n}\n.fade-down-enter[data-v-622b8c47],.fade-down-leave-to[data-v-622b8c47]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-622b8c47],.scale-leave-active[data-v-622b8c47],.scale-move[data-v-622b8c47]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-622b8c47],.scale-leave-to[data-v-622b8c47]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-622b8c47],.slide-leave-active[data-v-622b8c47]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-622b8c47]{transition:all .2s ease\n}\n.slide-leave-active[data-v-622b8c47]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-622b8c47],.slide-leave[data-v-622b8c47]{margin-bottom:0px\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-622b8c47],.slide-in-leave-active[data-v-622b8c47]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-622b8c47]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-622b8c47]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-622b8c47],.page-fade-enter-active[data-v-622b8c47]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-622b8c47],.page-fade-leave-to[data-v-622b8c47],.page-fade-enter[data-v-622b8c47]{opacity:0\n}\n.page-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.fade-out-leave-active[data-v-622b8c47],.fade-out-enter-active[data-v-622b8c47]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-622b8c47],.fade-out-leave-to[data-v-622b8c47],.fade-out-enter[data-v-622b8c47]{opacity:0\n}\n.fade-out-enter-to[data-v-622b8c47]{opacity:1\n}\n.slide-down-enter-active[data-v-622b8c47],.slide-down-leave-active[data-v-622b8c47]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-622b8c47],.slide-down-enter[data-v-622b8c47]{top:100%\n}\n.slide-down-leave[data-v-622b8c47],.slide-down-enter-to[data-v-622b8c47]{top:0%\n}\n.slide-out-enter-active[data-v-622b8c47],.slide-out-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-622b8c47],.exchange-result.slide-out-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-622b8c47],.exchange-pending.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-622b8c47],.slide-left-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-622b8c47],.slide-right-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-622b8c47],.spin-down-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-622b8c47],.spin-up-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-622b8c47],.puff-out-leave-active[data-v-622b8c47]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-622b8c47]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-622b8c47]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-622b8c47],.puff-out-enter-to[data-v-622b8c47]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-622b8c47],.collapse-fade-enter-active[data-v-622b8c47]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-622b8c47],.collapse-fade-leave-to[data-v-622b8c47],.collapse-fade-enter[data-v-622b8c47]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.lazy-fade-leave-active[data-v-622b8c47],.lazy-fade-enter-active[data-v-622b8c47]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-622b8c47],.lazy-fade-leave-to[data-v-622b8c47],.lazy-fade-enter[data-v-622b8c47]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.atomic__checkbox[data-v-622b8c47]{position:relative;display:inline-block;color:#fff;cursor:pointer;font-size:14px;line-height:19px\n}\n.atomic__checkbox-error[data-v-622b8c47]{z-index:-1;border:solid 2px #f75555;border-radius:6px;width:28px;height:28px;position:absolute;left:-2px;top:-2px\n}\n.atomic__checkbox_m>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_m:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_m>span[data-v-622b8c47],.atomic__checkbox_m>span *[data-v-622b8c47]{font-weight:400;font-size:14px;line-height:18px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 2px #8290ad;border-radius:4px;width:20px;height:20px;vertical-align:-8px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:3px;left:3px;width:5px;height:10px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}\n.atomic__checkbox_s>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_s:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_s>span[data-v-622b8c47]{display:flex;align-items:center\n}\n.atomic__checkbox_s>span[data-v-622b8c47],.atomic__checkbox_s>span *[data-v-622b8c47]{font-family:Roboto;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 1px #8290ad;border-radius:4px;width:18px;height:18px;vertical-align:-8px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:4px;left:2px;width:4px;height:8px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}',
          "",
        ]));
    },
    3338: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "label",
            { class: ["atomic__checkbox", "atomic__checkbox_" + t.size] },
            [
              e("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.proxyValue,
                    expression: "proxyValue",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(t.proxyValue)
                    ? t._i(t.proxyValue, null) > -1
                    : t.proxyValue,
                },
                on: {
                  change: function (a) {
                    var e = t.proxyValue,
                      n = a.target,
                      i = !!n.checked;
                    if (Array.isArray(e)) {
                      var d = null,
                        r = t._i(e, d);
                      n.checked
                        ? r < 0 && (t.proxyValue = e.concat([d]))
                        : r > -1 &&
                          (t.proxyValue = e.slice(0, r).concat(e.slice(r + 1)));
                    } else t.proxyValue = i;
                  },
                },
              }),
              t._v(" "),
              t.isError
                ? e("div", { staticClass: "atomic__checkbox-error" })
                : t._e(),
              t._v(" "),
              e(
                "span",
                { staticClass: "atomic__checkbox-input" },
                [t._t("default")],
                2,
              ),
            ],
          );
        },
        i = [];
    },
    3343: function (t, a, e) {
      var n = e(3344);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = e(23).default;
      i("c4d8a054", n, !0, {});
    },
    3344: function (t, a, e) {
      a = t.exports = e(22)(!1);
      var n = e(385),
        i = n(e(3345));
      a.push([
        t.i,
        "\n@keyframes spinner-data-v-1dc165ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1dc165ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1dc165ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1dc165ba]{color:#6b963b\n}\n.text-red[data-v-1dc165ba]{color:#c03647\n}\n.text-gray[data-v-1dc165ba]{color:#8290ad\n}\n.text-blue[data-v-1dc165ba]{color:#00c2ff\n}\n.text-danger[data-v-1dc165ba]{color:#8c4545\n}\n.text-title[data-v-1dc165ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1dc165ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1dc165ba]{color:#f1b70b\n}\n.text-white[data-v-1dc165ba]{color:#fff\n}\n.text-bigger[data-v-1dc165ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1dc165ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1dc165ba]{font-size:14px\n}\n.text-middle-height[data-v-1dc165ba]{line-height:24px\n}\n.text-small[data-v-1dc165ba]{font-size:12px\n}\n.text-word-break[data-v-1dc165ba]{word-break:break-all\n}\n.text-right[data-v-1dc165ba]{text-align:right\n}\n.text-left[data-v-1dc165ba]{text-align:left\n}\n.text-line-middle[data-v-1dc165ba]{line-height:24px\n}\n.text-link[data-v-1dc165ba],.text-link-underline[data-v-1dc165ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1dc165ba]:hover,.text-link-underline[data-v-1dc165ba]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1dc165ba]{text-decoration:underline\n}\n.text-center[data-v-1dc165ba]{text-align:center\n}\n.text-pointer[data-v-1dc165ba]{cursor:pointer\n}\n.gap-10[data-v-1dc165ba]{gap:10px\n}\n.m-t-auto[data-v-1dc165ba]{margin-top:auto\n}\n.m-t-4[data-v-1dc165ba]{margin-top:4px\n}\n.m-t-5[data-v-1dc165ba]{margin-top:5px\n}\n.m-t-8[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-10[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-13[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-15[data-v-1dc165ba]{margin-top:15px\n}\n.m-t-16[data-v-1dc165ba]{margin-top:16px\n}\n.m-t-20[data-v-1dc165ba]{margin-top:20px\n}\n.m-t-24[data-v-1dc165ba]{margin-top:24px\n}\n.m-t-25[data-v-1dc165ba]{margin-top:25px\n}\n.m-t-26[data-v-1dc165ba]{margin-top:26px\n}\n.m-t-30[data-v-1dc165ba]{margin-top:30px\n}\n.m-t-35[data-v-1dc165ba]{margin-top:35px\n}\n.m-t-40[data-v-1dc165ba]{margin-top:40px\n}\n.m-t-45[data-v-1dc165ba]{margin-top:45px\n}\n.m-t-50[data-v-1dc165ba]{margin-top:50px\n}\n.m-t-60[data-v-1dc165ba]{margin-top:60px\n}\n.m-t-65[data-v-1dc165ba]{margin-top:65px\n}\n.m-t-80[data-v-1dc165ba]{margin-top:80px\n}\n.m-l-5[data-v-1dc165ba]{margin-left:5px\n}\n.m-l-10[data-v-1dc165ba]{margin-left:10px\n}\n.m-l-15[data-v-1dc165ba]{margin-left:15px\n}\n.m-l-20[data-v-1dc165ba]{margin-left:20px\n}\n.m-l-25[data-v-1dc165ba]{margin-left:25px\n}\n.m-l-30[data-v-1dc165ba]{margin-left:30px\n}\n.m-l-35[data-v-1dc165ba]{margin-left:35px\n}\n.m-r-5[data-v-1dc165ba]{margin-right:5px\n}\n.m-r-10[data-v-1dc165ba]{margin-right:10px\n}\n.m-r-15[data-v-1dc165ba]{margin-right:15px\n}\n.m-r-30[data-v-1dc165ba]{margin-right:30px\n}\n.m-b-5[data-v-1dc165ba]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1dc165ba]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1dc165ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1dc165ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1dc165ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1dc165ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1dc165ba]{padding-top:40px\n}\n.p-t-85[data-v-1dc165ba]{padding-top:85px !important\n}\n.hidden[data-v-1dc165ba]{opacity:0 !important\n}\n.relative[data-v-1dc165ba]{position:relative\n}\n.space-nowrap[data-v-1dc165ba]{white-space:nowrap\n}\n.uppercase[data-v-1dc165ba]{text-transform:uppercase\n}\n.lowercase[data-v-1dc165ba]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1dc165ba],.fade-leave-to[data-v-1dc165ba]{opacity:0\n}\n.fade-down-enter-active[data-v-1dc165ba],.fade-down-leave-active[data-v-1dc165ba],.fade-down-move[data-v-1dc165ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1dc165ba],.fade-down-enter-active[data-v-1dc165ba]{position:absolute !important\n}\n.fade-down-enter[data-v-1dc165ba],.fade-down-leave-to[data-v-1dc165ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1dc165ba],.scale-leave-active[data-v-1dc165ba],.scale-move[data-v-1dc165ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1dc165ba],.scale-leave-to[data-v-1dc165ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1dc165ba],.slide-leave-active[data-v-1dc165ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1dc165ba]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1dc165ba]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1dc165ba],.slide-leave[data-v-1dc165ba]{margin-bottom:0px\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1dc165ba],.slide-in-leave-active[data-v-1dc165ba]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1dc165ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1dc165ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1dc165ba],.page-fade-enter-active[data-v-1dc165ba]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1dc165ba],.page-fade-leave-to[data-v-1dc165ba],.page-fade-enter[data-v-1dc165ba]{opacity:0\n}\n.page-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.fade-out-leave-active[data-v-1dc165ba],.fade-out-enter-active[data-v-1dc165ba]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1dc165ba],.fade-out-leave-to[data-v-1dc165ba],.fade-out-enter[data-v-1dc165ba]{opacity:0\n}\n.fade-out-enter-to[data-v-1dc165ba]{opacity:1\n}\n.slide-down-enter-active[data-v-1dc165ba],.slide-down-leave-active[data-v-1dc165ba]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1dc165ba],.slide-down-enter[data-v-1dc165ba]{top:100%\n}\n.slide-down-leave[data-v-1dc165ba],.slide-down-enter-to[data-v-1dc165ba]{top:0%\n}\n.slide-out-enter-active[data-v-1dc165ba],.slide-out-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1dc165ba],.exchange-result.slide-out-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1dc165ba],.exchange-pending.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1dc165ba],.slide-left-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1dc165ba],.slide-right-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1dc165ba],.spin-down-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1dc165ba],.spin-up-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1dc165ba],.puff-out-leave-active[data-v-1dc165ba]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1dc165ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1dc165ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1dc165ba],.puff-out-enter-to[data-v-1dc165ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1dc165ba],.collapse-fade-enter-active[data-v-1dc165ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1dc165ba],.collapse-fade-leave-to[data-v-1dc165ba],.collapse-fade-enter[data-v-1dc165ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1dc165ba],.lazy-fade-enter-active[data-v-1dc165ba]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1dc165ba],.lazy-fade-leave-to[data-v-1dc165ba],.lazy-fade-enter[data-v-1dc165ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.image-with-placeholder[data-v-1dc165ba]{position:relative;width:100%;height:100%;background-size:cover;border-radius:999px;background-position:center;background-image:url(" +
          i +
          ")\n}\n.image-with-placeholder img[data-v-1dc165ba]{opacity:0;width:100%;height:100%;object-fit:cover;border-radius:999px;transition:opacity .1s ease\n}\n.image-with-placeholder img.loaded[data-v-1dc165ba]{opacity:1\n}",
        "",
      ]);
    },
    3345: function (t, a, e) {
      t.exports = e.p + "imgs/skeleton--static.png";
    },
    3346: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            { staticClass: "image-with-placeholder" },
            [
              e("sanitized-img", {
                class: { loaded: t.isLoaded },
                attrs: { src: t.formattedSrc },
                on: {
                  load: function (a) {
                    t.isLoaded = !0;
                  },
                  error: function (a) {
                    t.isError = !0;
                  },
                },
              }),
            ],
            1,
          );
        },
        i = [];
    },
    3349: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ChangeIcon" };
    },
    3801: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "MemesStatus",
        props: {
          status: { type: String, required: !0 },
          successText: { type: String, default: "" },
          operationType: { type: String, required: !0 },
          ticker: { type: String, required: !0 },
          solAmaunt: { type: String, default: "" },
        },
        computed: {
          text() {
            return "inProgress" === this.status
              ? "Transaction in process"
              : "fail" === this.status
                ? "Transaction error"
                : "success" === this.status
                  ? "sell" === this.operationType
                    ? "You sold all your " + this.ticker
                    : `You bought ${this.ticker} for ${this.solAmaunt} SOL`
                  : "";
          },
        },
      };
    },
    4509: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(3349),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(4510),
        s = e(5),
        o = !1,
        c = null,
        l = null,
        p = null,
        v = Object(s["a"])(i.a, r["a"], r["b"], o, c, l, p);
      a["default"] = v.exports;
    },
    4510: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            {
              staticClass: "change-icon",
              attrs: { "data-test-id": "change_coins" },
              on: {
                click: function (a) {
                  return t.$emit("clickAction");
                },
              },
            },
            [
              e("svg", { attrs: { fill: "none", viewBox: "0 0 35 16" } }, [
                e("path", {
                  attrs: {
                    d: "M1.67391 8H31.3261",
                    "stroke-linecap": "round",
                    "stroke-width": "3",
                  },
                }),
                t._v(" "),
                e("path", {
                  attrs: {
                    d: "M25.2607 2L31.9999 8.1471L25.2607 13.765",
                    "stroke-linecap": "round",
                    "stroke-width": "3",
                  },
                }),
              ]),
            ],
          );
        },
        i = [];
    },
    5361: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(3801),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(5364),
        s = e(5);
      function o(t) {
        e(5362);
      }
      var c = !1,
        l = o,
        p = "data-v-6bbb3c32",
        v = null,
        b = Object(s["a"])(i.a, r["a"], r["b"], c, l, p, v);
      a["default"] = b.exports;
    },
    5362: function (t, a, e) {
      var n = e(5363);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = e(23).default;
      i("7489bd04", n, !0, {});
    },
    5363: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          "\n@keyframes spinner-data-v-6bbb3c32{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-6bbb3c32{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-6bbb3c32{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-6bbb3c32{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-6bbb3c32{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-6bbb3c32{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-6bbb3c32{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-6bbb3c32{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-6bbb3c32{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-6bbb3c32{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-6bbb3c32{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-6bbb3c32]{color:#6b963b\n}\n.text-red[data-v-6bbb3c32]{color:#c03647\n}\n.text-gray[data-v-6bbb3c32]{color:#8290ad\n}\n.text-blue[data-v-6bbb3c32]{color:#00c2ff\n}\n.text-danger[data-v-6bbb3c32]{color:#8c4545\n}\n.text-title[data-v-6bbb3c32]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-6bbb3c32]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-6bbb3c32]{color:#f1b70b\n}\n.text-white[data-v-6bbb3c32]{color:#fff\n}\n.text-bigger[data-v-6bbb3c32]{font-size:18px;font-weight:500\n}\n.text-big[data-v-6bbb3c32]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-6bbb3c32]{font-size:14px\n}\n.text-middle-height[data-v-6bbb3c32]{line-height:24px\n}\n.text-small[data-v-6bbb3c32]{font-size:12px\n}\n.text-word-break[data-v-6bbb3c32]{word-break:break-all\n}\n.text-right[data-v-6bbb3c32]{text-align:right\n}\n.text-left[data-v-6bbb3c32]{text-align:left\n}\n.text-line-middle[data-v-6bbb3c32]{line-height:24px\n}\n.text-link[data-v-6bbb3c32],.text-link-underline[data-v-6bbb3c32]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-6bbb3c32]:hover,.text-link-underline[data-v-6bbb3c32]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-6bbb3c32]{text-decoration:underline\n}\n.text-center[data-v-6bbb3c32]{text-align:center\n}\n.text-pointer[data-v-6bbb3c32]{cursor:pointer\n}\n.gap-10[data-v-6bbb3c32]{gap:10px\n}\n.m-t-auto[data-v-6bbb3c32]{margin-top:auto\n}\n.m-t-4[data-v-6bbb3c32]{margin-top:4px\n}\n.m-t-5[data-v-6bbb3c32]{margin-top:5px\n}\n.m-t-8[data-v-6bbb3c32]{margin-top:10px\n}\n.m-t-10[data-v-6bbb3c32]{margin-top:10px\n}\n.m-t-13[data-v-6bbb3c32]{margin-top:10px\n}\n.m-t-15[data-v-6bbb3c32]{margin-top:15px\n}\n.m-t-16[data-v-6bbb3c32]{margin-top:16px\n}\n.m-t-20[data-v-6bbb3c32]{margin-top:20px\n}\n.m-t-24[data-v-6bbb3c32]{margin-top:24px\n}\n.m-t-25[data-v-6bbb3c32]{margin-top:25px\n}\n.m-t-26[data-v-6bbb3c32]{margin-top:26px\n}\n.m-t-30[data-v-6bbb3c32]{margin-top:30px\n}\n.m-t-35[data-v-6bbb3c32]{margin-top:35px\n}\n.m-t-40[data-v-6bbb3c32]{margin-top:40px\n}\n.m-t-45[data-v-6bbb3c32]{margin-top:45px\n}\n.m-t-50[data-v-6bbb3c32]{margin-top:50px\n}\n.m-t-60[data-v-6bbb3c32]{margin-top:60px\n}\n.m-t-65[data-v-6bbb3c32]{margin-top:65px\n}\n.m-t-80[data-v-6bbb3c32]{margin-top:80px\n}\n.m-l-5[data-v-6bbb3c32]{margin-left:5px\n}\n.m-l-10[data-v-6bbb3c32]{margin-left:10px\n}\n.m-l-15[data-v-6bbb3c32]{margin-left:15px\n}\n.m-l-20[data-v-6bbb3c32]{margin-left:20px\n}\n.m-l-25[data-v-6bbb3c32]{margin-left:25px\n}\n.m-l-30[data-v-6bbb3c32]{margin-left:30px\n}\n.m-l-35[data-v-6bbb3c32]{margin-left:35px\n}\n.m-r-5[data-v-6bbb3c32]{margin-right:5px\n}\n.m-r-10[data-v-6bbb3c32]{margin-right:10px\n}\n.m-r-15[data-v-6bbb3c32]{margin-right:15px\n}\n.m-r-30[data-v-6bbb3c32]{margin-right:30px\n}\n.m-b-5[data-v-6bbb3c32]{margin-bottom:5px !important\n}\n.m-b-15[data-v-6bbb3c32]{margin-bottom:15px !important\n}\n.m-b-20[data-v-6bbb3c32]{margin-bottom:20px !important\n}\n.m-b-30[data-v-6bbb3c32]{margin-bottom:30px !important\n}\n.m-b-25[data-v-6bbb3c32]{margin-bottom:25px !important\n}\n.m-b-50[data-v-6bbb3c32]{margin-bottom:50px !important\n}\n.p-t-40[data-v-6bbb3c32]{padding-top:40px\n}\n.p-t-85[data-v-6bbb3c32]{padding-top:85px !important\n}\n.hidden[data-v-6bbb3c32]{opacity:0 !important\n}\n.relative[data-v-6bbb3c32]{position:relative\n}\n.space-nowrap[data-v-6bbb3c32]{white-space:nowrap\n}\n.uppercase[data-v-6bbb3c32]{text-transform:uppercase\n}\n.lowercase[data-v-6bbb3c32]{text-transform:lowercase\n}\n.fade-enter-active[data-v-6bbb3c32]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-6bbb3c32]{transition:all .1s ease-out\n}\n.fade-enter[data-v-6bbb3c32],.fade-leave-to[data-v-6bbb3c32]{opacity:0\n}\n.fade-down-enter-active[data-v-6bbb3c32],.fade-down-leave-active[data-v-6bbb3c32],.fade-down-move[data-v-6bbb3c32]{transition:all .15s\n}\n.fade-down-leave-active[data-v-6bbb3c32],.fade-down-enter-active[data-v-6bbb3c32]{position:absolute !important\n}\n.fade-down-enter[data-v-6bbb3c32],.fade-down-leave-to[data-v-6bbb3c32]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-6bbb3c32],.scale-leave-active[data-v-6bbb3c32],.scale-move[data-v-6bbb3c32]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-6bbb3c32],.scale-leave-to[data-v-6bbb3c32]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-6bbb3c32],.slide-leave-active[data-v-6bbb3c32]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-6bbb3c32]{transition:all .2s ease\n}\n.slide-leave-active[data-v-6bbb3c32]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-6bbb3c32],.slide-leave-to[data-v-6bbb3c32]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-6bbb3c32],.slide-leave[data-v-6bbb3c32]{margin-bottom:0px\n}\n.slide-enter[data-v-6bbb3c32],.slide-leave-to[data-v-6bbb3c32]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-6bbb3c32],.slide-in-leave-active[data-v-6bbb3c32]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-6bbb3c32]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-6bbb3c32]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-6bbb3c32]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-6bbb3c32]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-6bbb3c32],.page-fade-enter-active[data-v-6bbb3c32]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-6bbb3c32],.page-fade-leave-to[data-v-6bbb3c32],.page-fade-enter[data-v-6bbb3c32]{opacity:0\n}\n.page-fade-enter-to[data-v-6bbb3c32]{opacity:1\n}\n.fade-out-leave-active[data-v-6bbb3c32],.fade-out-enter-active[data-v-6bbb3c32]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-6bbb3c32],.fade-out-leave-to[data-v-6bbb3c32],.fade-out-enter[data-v-6bbb3c32]{opacity:0\n}\n.fade-out-enter-to[data-v-6bbb3c32]{opacity:1\n}\n.slide-down-enter-active[data-v-6bbb3c32],.slide-down-leave-active[data-v-6bbb3c32]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-6bbb3c32],.slide-down-enter[data-v-6bbb3c32]{top:100%\n}\n.slide-down-leave[data-v-6bbb3c32],.slide-down-enter-to[data-v-6bbb3c32]{top:0%\n}\n.slide-out-enter-active[data-v-6bbb3c32],.slide-out-leave-active[data-v-6bbb3c32]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-6bbb3c32]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-6bbb3c32]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-6bbb3c32]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-6bbb3c32],.exchange-result.slide-out-enter[data-v-6bbb3c32]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-6bbb3c32],.exchange-pending.slide-out-enter[data-v-6bbb3c32]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-6bbb3c32],.slide-left-leave-active[data-v-6bbb3c32]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-6bbb3c32]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-6bbb3c32]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-6bbb3c32]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-6bbb3c32],.slide-right-leave-active[data-v-6bbb3c32]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-6bbb3c32]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-6bbb3c32]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-6bbb3c32]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-6bbb3c32],.spin-down-leave-active[data-v-6bbb3c32]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-6bbb3c32]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-6bbb3c32]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-6bbb3c32]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-6bbb3c32],.spin-up-leave-active[data-v-6bbb3c32]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-6bbb3c32]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-6bbb3c32]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-6bbb3c32]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-6bbb3c32],.puff-out-leave-active[data-v-6bbb3c32]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-6bbb3c32]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-6bbb3c32]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-6bbb3c32],.puff-out-enter-to[data-v-6bbb3c32]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-6bbb3c32],.collapse-fade-enter-active[data-v-6bbb3c32]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-6bbb3c32],.collapse-fade-leave-to[data-v-6bbb3c32],.collapse-fade-enter[data-v-6bbb3c32]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-6bbb3c32]{opacity:1\n}\n.lazy-fade-leave-active[data-v-6bbb3c32],.lazy-fade-enter-active[data-v-6bbb3c32]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-6bbb3c32],.lazy-fade-leave-to[data-v-6bbb3c32],.lazy-fade-enter[data-v-6bbb3c32]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-6bbb3c32]{opacity:1\n}\n.status[data-v-6bbb3c32]{display:flex;box-sizing:border-box;align-items:center;background:#2a3a60;padding:12px 16px;width:100%;height:48px;border-radius:8px\n}\n.status.success[data-v-6bbb3c32]{background:#243d47\n}\n.status .icon[data-v-6bbb3c32]{width:24px;height:24px;display:flex;margin-right:8px\n}\n.status .spin[data-v-6bbb3c32]{animation:spin-data-v-6bbb3c32 2s infinite linear\n}\n.status .text[data-v-6bbb3c32]{font-weight:400;font-size:14px;line-height:100%;letter-spacing:.25%;color:#fff\n}\n@keyframes spin-data-v-6bbb3c32{\nfrom{transform:rotate(0deg)\n}\nto{transform:rotate(360deg)\n}\n}",
          "",
        ]));
    },
    5364: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n("div", { class: ["status", t.status] }, [
            n("div", { class: ["icon", "inProgress" === t.status && "spin"] }, [
              "success" === t.status
                ? n("img", { attrs: { src: e(866) } })
                : t._e(),
              t._v(" "),
              "inProgress" === t.status
                ? n("img", { attrs: { src: e(861) } })
                : t._e(),
              t._v(" "),
              "fail" === t.status
                ? n("img", { attrs: { src: e(859) } })
                : t._e(),
            ]),
            t._v(" "),
            n("div", { staticClass: "text" }, [
              t._v("\n    " + t._s(t.text) + "\n  "),
            ]),
          ]);
        },
        i = [];
    },
    5367: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var i = n(e(5361)),
        d = n(e(4509)),
        r = n(e(2980)),
        s = n(e(2999)),
        o = n(e(802)),
        c = n(e(3335)),
        l = n(e(8833)),
        p = e(68),
        v = e(233),
        b = e(3159);
      const f = 1e4,
        u = 3e3;
      a.default = {
        name: "MemesSwap",
        components: {
          ChangeIcon: d.default,
          LoadingEllipsis: r.default,
          MemesImage: s.default,
          MemesStatus: i.default,
          CoinIcon: o.default,
          AtomicCheckbox: c.default,
          SendMemesResult: l.default,
          ErrorPlain: () => e.e(60).then(e.bind(null, 6972)),
        },
        data() {
          const t = !!localStorage.getItem(v.ACCEPT_TERMS_STORAGE);
          return {
            tokenMintIsValid: !1,
            amountResult: "",
            isError: !1,
            availableBalance: 0,
            feeFormatted: 0,
            isLoadingEstimate: !0,
            isLoadingAvailableBalance: !0,
            isFeeEnough: !1,
            amountToSend: "",
            amountToReceive: "",
            receivePerOneSol: "",
            isBuyToken: !0,
            isSending: !1,
            isSuccess: !1,
            isFail: !1,
            txId: "",
            txUrl: "",
            token: null,
            error: "",
            sol: 0,
            feeMinimal: 0,
            feeFiat: "",
            swapInterface: null,
            estimate: null,
            intervalUpdatingEstimate: null,
            acceptedTerms: !!localStorage.getItem(v.ACCEPT_TERMS_STORAGE),
            acceptedTermsVisible: !t,
          };
        },
        computed: {
          canSwap() {
            return (
              this.acceptedTerms &&
              !this.isLoadingEstimate &&
              !this.error &&
              this.amountToSend > 0 &&
              this.amountToSend <= this.availableBalance &&
              this.availableBalance > 0
            );
          },
          coinToSend() {
            return this.isBuyToken ? this.sol : this.token;
          },
          coinToReceive() {
            return this.isBuyToken ? this.token : this.sol;
          },
          parent() {
            return this.$wallets.getWallet(this.coinToSend.deprecatedParent);
          },
        },
        watch: {
          async amountToSend() {
            (await this.getEstimate(), this.validate());
          },
          isBuyToken() {
            this.getEstimate();
          },
        },
        async created() {
          const t = this.$route.params.id;
          ((this.sol = this.$wallets.getWallet("SOL")),
            (this.token = this.$wallets.getWallet(t)));
          const a = !!this.$route.query.sellToken;
          (a && (this.isBuyToken = !1),
            a
              ? ((this.amountToSend = this.token.divisibleBalance),
                (this.availableBalance = this.amountToSend))
              : ((this.amountToSend =
                  localStorage.getItem(v.MEME_QUICK_BUY) > 0
                    ? localStorage.getItem(v.MEME_QUICK_BUY)
                    : this.sol.divisibleBalance),
                (this.availableBalance = this.sol.divisibleBalance)),
            (this.swapInterface = new p.Swap()),
            this.getEstimate(),
            (this.intervalUpdatingEstimate = setInterval(async () => {
              await this.getEstimate();
            }, f)),
            (this.tokenMintIsValid = this.sol.isPublicKey(this.token.mint)));
        },
        async beforeMount() {
          (await this.getFee(),
            await this.getEstimate(),
            this.setAvailableBalance());
        },
        beforeDestroy() {
          clearInterval(this.intervalUpdatingEstimate);
        },
        methods: {
          onChangeSend(t) {
            let { target: a } = t;
            const e = this.amountToSend.endsWith(".") && "0" === a.value,
              n = e ? "" : a.value,
              i = (0, b.maskInput)(n);
            ((a.value = i), (this.amountToSend = i));
          },
          async changeCoins() {
            if (
              ((this.isBuyToken = !this.isBuyToken),
              (this.availableBalance = this.coinToSend.divisibleBalance),
              "SOL" === this.coinToSend.id
                ? await this.setAvailableBalance()
                : (this.amountToSend = this.availableBalance),
              !this.amountToSend || 0 === +this.amountToSend)
            )
              return (await this.getFee(), void this.validate());
            (await this.getEstimate(), this.validate());
          },
          async getFee() {
            ((this.feeMinimal = await this.swapInterface.getFee()),
              (this.feeFormatted = this.sol.toCurrencyUnit(this.feeMinimal)));
          },
          async getEstimate() {
            this.isLoadingEstimate = !0;
            try {
              const t = await this.swapInterface.getEstimate({
                sendCoin: this.coinToSend,
                receiveCoin: this.coinToReceive,
                sendAmountCurrencyUnit:
                  this.amountToSend || this.coinToSend.divisibleBalance,
              });
              if (t.error) throw new Error(t.error);
              ((this.estimate = t),
                this.setData(this.estimate.quote),
                (this.isLoadingEstimate = !1));
            } catch (t) {
              (console.error(t), (this.amountToReceive = "0"));
            } finally {
              this.cleanStatus();
            }
          },
          setData(t) {
            let {
              fee: a,
              feeMinimalUnits: e,
              feeUSD: n,
              receive: i,
              receivePerOneSend: d,
            } = t;
            ((this.feeFormatted = a),
              (this.feeMinimal = e),
              (this.feeFiat = n),
              this.amountToSend &&
                "0" !== this.amountToSend &&
                (this.amountToReceive = i),
              (this.receivePerOneSol = d));
          },
          cleanStatus() {
            setTimeout(() => {
              this.isFail = !1;
            }, u);
          },
          async setAvailableBalance() {
            this.isLoadingAvailableBalance = !0;
            try {
              "SOL" === this.coinToSend.id
                ? ((this.availableBalance =
                    (await this.coinToSend.availableBalance(this.feeMinimal)) ||
                    "0"),
                  (this.amountToSend =
                    localStorage.getItem(v.MEME_QUICK_BUY) > 0
                      ? localStorage.getItem(v.MEME_QUICK_BUY)
                      : this.availableBalance))
                : ((this.availableBalance = this.coinToSend.divisibleBalance),
                  (this.amountToSend = this.availableBalance));
            } catch (t) {
              ((this.availableBalance = "0"), (this.amountToSend = "0"));
            } finally {
              this.isLoadingAvailableBalance = !1;
            }
          },
          async exchangeCoins() {
            ((this.amountResult = this.amountToSend), (this.isSending = !0));
            try {
              const { txid: t } = await this.swapInterface.swap(this.estimate);
              if (!t) throw new Error();
              this.txId = t;
              const { explorer: a } = this.parent;
              ((this.txUrl = a.getWebTransactionUrl(t)),
                (this.isSuccess = !0),
                this.$ga.event("Exchange", "Create Swap Tx Succeed", {
                  clientID: this.$ga.customParams.uid,
                }));
            } catch (t) {
              (console.error(t), (this.isFail = !0));
            } finally {
              ((this.isSending = !1),
                localStorage.setItem(v.ACCEPT_TERMS_STORAGE, !0),
                (this.acceptedTermsVisible = !1));
            }
          },
          async buyCoin() {
            this.$router.push("/simplex/USD/SOL");
          },
          async validate() {
            const t = 0.01;
            if (this.amountToSend)
              if (+this.amountToSend > +this.availableBalance)
                this.error = {
                  message: this.$t("error.moreDepositToSwap", {
                    ticker: this.coinToSend.ticker,
                  }),
                  isBuyCoin: "SOL" === this.coinToSend.id,
                };
              else {
                if (
                  !(
                    (this.isBuyToken && +this.amountToSend < t) ||
                    (!this.isBuyToken && +this.amountToReceive < t) ||
                    0 === this.amountToSend
                  )
                )
                  return "SOL" !== this.coinToSend.id
                    ? ((this.isFeeEnough = await this.parent.isAvailableForSend(
                        this.feeFormatted,
                      )),
                      void (
                        this.isFeeEnough ||
                        (this.error = {
                          message: this.$t("error.insufficientFundsToSwap", {
                            ticker: this.coinToSend.ticker,
                            coinToSendTicker: this.coinToSend.ticker,
                            fee: this.feeFormatted,
                          }),
                        })
                      ))
                    : void (this.error = "");
                this.error = {
                  message: this.$t("error.minSwapAmount", {
                    ticker: "SOL",
                    minAmount: t,
                  }),
                  isBuyCoin: "SOL" === this.coinToSend.id,
                };
              }
            else
              this.error = {
                message: this.$t("error.largeAmount"),
                isBuyCoin: "SOL" === this.coinToSend.id,
              };
          },
          sendAll() {
            this.amountToSend = this.availableBalance;
          },
          backToForm() {
            this.isSuccess = !1;
          },
          openTerms() {
            this.$electron.openExternal(
              "https://atomicwallet.io/terms-of-service",
            );
          },
        },
      };
    },
    5368: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var i = n(e(802)),
        d = n(e(2999)),
        r = n(e(2973));
      const s = {
        Exchange: "Swap",
        Stake: "Staking",
        Unstake: "Unstaking",
        Withdraw: "Withdrawing",
        Withdrawal: "Withdrawing",
        Vote: "Voting",
        Revote: "Revoting",
        Claim: "Claiming rewards",
        ClaimADA: "ADA claiming",
        Redelegate: "Redelegate",
      };
      a.default = {
        name: "SendCoinResult",
        components: {
          CoinIcon: i.default,
          RateStars: r.default,
          MemesImage: d.default,
        },
        props: {
          icon: { type: String, default: "" },
          coin: { type: Object, default: Object },
          amount: { type: String, default: "" },
          hash: { type: String, default: "" },
          txid: { type: String, default: "" },
          isError: { type: Boolean, default: !1 },
          isSuccess: { type: Boolean, default: !1 },
          message: { type: String, default: "" },
          errorMessage: { type: String, default: "" },
          sendType: { type: String, default: "Send" },
          buttonName: { type: Object, default: null },
          contactData: { type: Object, default: null },
          customSuccessfulMessage: { type: String, default: "" },
        },
        computed: {
          successMessage() {
            let t = "";
            const a = "coinTips." + this.coin.ticker.toLowerCase();
            return (
              "Stake" === this.sendType && (t = a + ".successScreen"),
              "Unstake" === this.sendType &&
                (t = a + ".successScreenUnstaking"),
              t && this.$t(t) !== t ? this.$t(t) : ""
            );
          },
          errorHeadline() {
            let { sendType: t } = this,
              a = this.coin.ticker;
            return (
              "Withdrawal" === t
                ? (t = "Withdraw")
                : "ActivateAutoclaim" === t && ((t = "Activate"), (a = "")),
              this.$t("sendCoin.errorHeadline", {
                type: this.$t("sendType." + t),
                additionalMessage: a,
                message: this.message,
              })
            );
          },
          ticker() {
            return "AWC-986" === this.coin.ticker ? "AWC" : this.coin.ticker;
          },
          successfulMessage() {
            if (this.customSuccessfulMessage)
              return this.customSuccessfulMessage;
            const t = (t) => this.$t("sendCoin.claimingSuccess", { ticker: t }),
              a = this.coin.ticker;
            if ("Stake" === this.sendType && ["NEO", "ONG", "KMD"].includes(a))
              return t(`${this.amount} ${"NEO" === a ? "GAS" : a}`);
            if ("Claim" === this.sendType && ["ADA", "TRX"].includes(a))
              return t(`${this.amount} ${a}`);
            if ("Claim" === this.sendType && ["XRP"].includes(a))
              return t(this.amount + " Spark");
            let e = this.$t("sendCoin.successfulMessage", {
              amount: this.amount,
              ticker: a,
              resultMessage: this.resultMessage,
            });
            return (
              "DOGE" === a &&
                (e += ", " + this.$t("sendCoin.DOGEsuccessfulMessagePostfix")),
              e
            );
          },
          buttonTitle() {
            if (this.buttonName) return this.buttonName;
            switch (this.sendType) {
              case "Claim":
                return "XRP" === this.coin.ticker
                  ? {
                      back: this.$t("button.backToCoinScreen"),
                      repeat: this.$t("button.claimRepeat"),
                    }
                  : {
                      back: this.$t("button.backToStaking"),
                      repeat: this.$t("button.sendRepeat"),
                    };
              case "Stake":
                return {
                  back: this.$t("button.backToStaking"),
                  repeat: this.$t("button.stakeRepeat"),
                };
              case "Unstake":
                return {
                  back: this.$t("button.backToStaking"),
                  repeat: this.$t("button.unstakeRepeat"),
                };
              case "Activate":
                return { back: this.$t("button.backToStaking"), repeat: "" };
              case "ActivateAutoclaim":
                return { back: this.$t("button.back"), repeat: "" };
              case "Swap":
                return {
                  back: this.$t("button.backToWallet"),
                  repeat: this.$t("button.swapRepeat"),
                };
              default:
                return {
                  back: this.$t("button.backToWallet"),
                  repeat: this.$t("button.sendRepeat"),
                };
            }
          },
          resultMessage() {
            switch (this.sendType) {
              case "Send":
                return this.$t("sendResult.buy");
              case "Stake":
                return this.$t("sendResult.staked");
              case "Unstake":
                return this.$t("sendResult.unstaked");
              case "Claim":
                return this.$t("sendResult.claimed");
              case "Swap":
                return this.$t("sendResult.swapped");
              case "Redelegate":
                return this.$t("sendResult.redelegated");
              default:
                return this.$t("sendResult.sent");
            }
          },
          hints() {
            return this.$t("sendCoin.removeErrorSteps.hints");
          },
        },
        methods: {
          backActions(t) {
            this.$emit(t);
          },
          openTransactionHash() {
            const { explorer: t } = this.$wallets.getWallet(
              this.coin.deprecatedParent,
            );
            this.$electron.openExternal(`${t.webUrl}${this.txid}`);
          },
          talkWithSupport() {
            var t, a, e;
            const n =
                (null === (t = this.contactData) || void 0 === t
                  ? void 0
                  : t.issue) || this.$t("supportPopup.transactionIssue"),
              i =
                "ClaimADA" === this.sendType
                  ? this.coin.address
                  : this.$getAddressWallet(this.coin.deprecatedParent),
              d = `\n-----------------------\n${this.$t("supportPopup.userTickerAddress", { ticker: this.coin.ticker })}\n${i}`,
              r = {
                isNotText: !0,
                additionalText: `${this.$t("supportPopup.unsuccessSending")}${d}`,
                subject: n,
              };
            ((null === (a = this.contactData) ||
            void 0 === a ||
            null === (e = a.tags) ||
            void 0 === e
              ? void 0
              : e.length) > 0 && (r.tags = this.contactData.tags),
              s[this.sendType] &&
                (r.additionalText = `${this.$t("sendProcess." + this.sendType)} ${this.$t("sendProcess.unsuccess")}${d}`),
              ["Activate", "ActivateAutoclaim"].includes(this.sendType) &&
                (r.additionalText = `${this.$t("supportPopup.unsuccessActivation")}${d}`),
              this.$bus.$emit("openSupportPopup", r));
          },
        },
      };
    },
    8831: function (t, a, e) {
      var n = e(8832);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = e(23).default;
      i("77256b16", n, !0, {});
    },
    8832: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          "\n@keyframes spinner-data-v-0d3d5541{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-0d3d5541{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-0d3d5541{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-0d3d5541{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-0d3d5541{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-0d3d5541{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-0d3d5541{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-0d3d5541{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-0d3d5541{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-0d3d5541{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-0d3d5541{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-0d3d5541]{color:#6b963b\n}\n.text-red[data-v-0d3d5541]{color:#c03647\n}\n.text-gray[data-v-0d3d5541]{color:#8290ad\n}\n.text-blue[data-v-0d3d5541]{color:#00c2ff\n}\n.text-danger[data-v-0d3d5541]{color:#8c4545\n}\n.text-title[data-v-0d3d5541]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-0d3d5541]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-0d3d5541]{color:#f1b70b\n}\n.text-white[data-v-0d3d5541]{color:#fff\n}\n.text-bigger[data-v-0d3d5541]{font-size:18px;font-weight:500\n}\n.text-big[data-v-0d3d5541]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-0d3d5541]{font-size:14px\n}\n.text-middle-height[data-v-0d3d5541]{line-height:24px\n}\n.text-small[data-v-0d3d5541]{font-size:12px\n}\n.text-word-break[data-v-0d3d5541]{word-break:break-all\n}\n.text-right[data-v-0d3d5541]{text-align:right\n}\n.text-left[data-v-0d3d5541]{text-align:left\n}\n.text-line-middle[data-v-0d3d5541]{line-height:24px\n}\n.text-link[data-v-0d3d5541],.text-link-underline[data-v-0d3d5541]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-0d3d5541]:hover,.text-link-underline[data-v-0d3d5541]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-0d3d5541]{text-decoration:underline\n}\n.text-center[data-v-0d3d5541]{text-align:center\n}\n.text-pointer[data-v-0d3d5541]{cursor:pointer\n}\n.gap-10[data-v-0d3d5541]{gap:10px\n}\n.m-t-auto[data-v-0d3d5541]{margin-top:auto\n}\n.m-t-4[data-v-0d3d5541]{margin-top:4px\n}\n.m-t-5[data-v-0d3d5541]{margin-top:5px\n}\n.m-t-8[data-v-0d3d5541]{margin-top:10px\n}\n.m-t-10[data-v-0d3d5541]{margin-top:10px\n}\n.m-t-13[data-v-0d3d5541]{margin-top:10px\n}\n.m-t-15[data-v-0d3d5541]{margin-top:15px\n}\n.m-t-16[data-v-0d3d5541]{margin-top:16px\n}\n.m-t-20[data-v-0d3d5541]{margin-top:20px\n}\n.m-t-24[data-v-0d3d5541]{margin-top:24px\n}\n.m-t-25[data-v-0d3d5541]{margin-top:25px\n}\n.m-t-26[data-v-0d3d5541]{margin-top:26px\n}\n.m-t-30[data-v-0d3d5541]{margin-top:30px\n}\n.m-t-35[data-v-0d3d5541]{margin-top:35px\n}\n.m-t-40[data-v-0d3d5541]{margin-top:40px\n}\n.m-t-45[data-v-0d3d5541]{margin-top:45px\n}\n.m-t-50[data-v-0d3d5541]{margin-top:50px\n}\n.m-t-60[data-v-0d3d5541]{margin-top:60px\n}\n.m-t-65[data-v-0d3d5541]{margin-top:65px\n}\n.m-t-80[data-v-0d3d5541]{margin-top:80px\n}\n.m-l-5[data-v-0d3d5541]{margin-left:5px\n}\n.m-l-10[data-v-0d3d5541]{margin-left:10px\n}\n.m-l-15[data-v-0d3d5541]{margin-left:15px\n}\n.m-l-20[data-v-0d3d5541]{margin-left:20px\n}\n.m-l-25[data-v-0d3d5541]{margin-left:25px\n}\n.m-l-30[data-v-0d3d5541]{margin-left:30px\n}\n.m-l-35[data-v-0d3d5541]{margin-left:35px\n}\n.m-r-5[data-v-0d3d5541]{margin-right:5px\n}\n.m-r-10[data-v-0d3d5541]{margin-right:10px\n}\n.m-r-15[data-v-0d3d5541]{margin-right:15px\n}\n.m-r-30[data-v-0d3d5541]{margin-right:30px\n}\n.m-b-5[data-v-0d3d5541]{margin-bottom:5px !important\n}\n.m-b-15[data-v-0d3d5541]{margin-bottom:15px !important\n}\n.m-b-20[data-v-0d3d5541]{margin-bottom:20px !important\n}\n.m-b-30[data-v-0d3d5541]{margin-bottom:30px !important\n}\n.m-b-25[data-v-0d3d5541]{margin-bottom:25px !important\n}\n.m-b-50[data-v-0d3d5541]{margin-bottom:50px !important\n}\n.p-t-40[data-v-0d3d5541]{padding-top:40px\n}\n.p-t-85[data-v-0d3d5541]{padding-top:85px !important\n}\n.hidden[data-v-0d3d5541]{opacity:0 !important\n}\n.relative[data-v-0d3d5541]{position:relative\n}\n.space-nowrap[data-v-0d3d5541]{white-space:nowrap\n}\n.uppercase[data-v-0d3d5541]{text-transform:uppercase\n}\n.lowercase[data-v-0d3d5541]{text-transform:lowercase\n}\n.fade-enter-active[data-v-0d3d5541]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-0d3d5541]{transition:all .1s ease-out\n}\n.fade-enter[data-v-0d3d5541],.fade-leave-to[data-v-0d3d5541]{opacity:0\n}\n.fade-down-enter-active[data-v-0d3d5541],.fade-down-leave-active[data-v-0d3d5541],.fade-down-move[data-v-0d3d5541]{transition:all .15s\n}\n.fade-down-leave-active[data-v-0d3d5541],.fade-down-enter-active[data-v-0d3d5541]{position:absolute !important\n}\n.fade-down-enter[data-v-0d3d5541],.fade-down-leave-to[data-v-0d3d5541]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-0d3d5541],.scale-leave-active[data-v-0d3d5541],.scale-move[data-v-0d3d5541]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-0d3d5541],.scale-leave-to[data-v-0d3d5541]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-0d3d5541],.slide-leave-active[data-v-0d3d5541]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-0d3d5541]{transition:all .2s ease\n}\n.slide-leave-active[data-v-0d3d5541]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-0d3d5541],.slide-leave-to[data-v-0d3d5541]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-0d3d5541],.slide-leave[data-v-0d3d5541]{margin-bottom:0px\n}\n.slide-enter[data-v-0d3d5541],.slide-leave-to[data-v-0d3d5541]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-0d3d5541],.slide-in-leave-active[data-v-0d3d5541]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-0d3d5541]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-0d3d5541]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-0d3d5541]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-0d3d5541]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-0d3d5541],.page-fade-enter-active[data-v-0d3d5541]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-0d3d5541],.page-fade-leave-to[data-v-0d3d5541],.page-fade-enter[data-v-0d3d5541]{opacity:0\n}\n.page-fade-enter-to[data-v-0d3d5541]{opacity:1\n}\n.fade-out-leave-active[data-v-0d3d5541],.fade-out-enter-active[data-v-0d3d5541]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-0d3d5541],.fade-out-leave-to[data-v-0d3d5541],.fade-out-enter[data-v-0d3d5541]{opacity:0\n}\n.fade-out-enter-to[data-v-0d3d5541]{opacity:1\n}\n.slide-down-enter-active[data-v-0d3d5541],.slide-down-leave-active[data-v-0d3d5541]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-0d3d5541],.slide-down-enter[data-v-0d3d5541]{top:100%\n}\n.slide-down-leave[data-v-0d3d5541],.slide-down-enter-to[data-v-0d3d5541]{top:0%\n}\n.slide-out-enter-active[data-v-0d3d5541],.slide-out-leave-active[data-v-0d3d5541]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-0d3d5541]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-0d3d5541]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-0d3d5541]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-0d3d5541],.exchange-result.slide-out-enter[data-v-0d3d5541]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-0d3d5541],.exchange-pending.slide-out-enter[data-v-0d3d5541]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-0d3d5541],.slide-left-leave-active[data-v-0d3d5541]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-0d3d5541]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-0d3d5541]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-0d3d5541]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-0d3d5541],.slide-right-leave-active[data-v-0d3d5541]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-0d3d5541]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-0d3d5541]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-0d3d5541]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-0d3d5541],.spin-down-leave-active[data-v-0d3d5541]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-0d3d5541]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-0d3d5541]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-0d3d5541]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-0d3d5541],.spin-up-leave-active[data-v-0d3d5541]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-0d3d5541]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-0d3d5541]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-0d3d5541]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-0d3d5541],.puff-out-leave-active[data-v-0d3d5541]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-0d3d5541]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-0d3d5541]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-0d3d5541],.puff-out-enter-to[data-v-0d3d5541]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-0d3d5541],.collapse-fade-enter-active[data-v-0d3d5541]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-0d3d5541],.collapse-fade-leave-to[data-v-0d3d5541],.collapse-fade-enter[data-v-0d3d5541]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-0d3d5541]{opacity:1\n}\n.lazy-fade-leave-active[data-v-0d3d5541],.lazy-fade-enter-active[data-v-0d3d5541]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-0d3d5541],.lazy-fade-leave-to[data-v-0d3d5541],.lazy-fade-enter[data-v-0d3d5541]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-0d3d5541]{opacity:1\n}\n.inner-exchange-basic[data-v-0d3d5541]{padding-top:30px\n}\n.send-coin[data-v-0d3d5541]{padding:0 5px;padding-top:30px\n}\n.send-coin .form-password[data-v-0d3d5541]{width:100%\n}\n.error-plain[data-v-0d3d5541]{height:auto\n}\n.iframe-price[data-v-0d3d5541]{position:relative;max-width:1024px;padding:0 20px;margin:auto;width:100%;height:100%\n}\n.iframe-price iframe[data-v-0d3d5541]{border-radius:20px;border:8px solid hsla(0,0%,100%,.1019607843)\n}\n.iframe-price .iframe-hide-logo[data-v-0d3d5541]{position:absolute;z-index:1;bottom:8px;border-radius:0 0 12px 12px;height:36px;width:calc(100% - 56px);background:#111\n}\n.swap-box[data-v-0d3d5541]{padding:20px;padding-top:0;border-radius:12px;width:100%;text-align:center;display:flex;flex-direction:column;gap:8px\n}\n.swap-input[data-v-0d3d5541]{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:15px;gap:10px\n}\n.swap-input .change-icon[data-v-0d3d5541]{padding-bottom:12px\n}\n.swap-input .icon[data-v-0d3d5541]{width:72px;height:72px;font-size:72px;border-radius:50px;position:absolute;margin:auto;top:0;left:0;right:0\n}\n.swap-input .input-wrap[data-v-0d3d5541]{width:100%;display:flex;gap:10px\n}\n.swap-input .input-wrap__box[data-v-0d3d5541]{width:100%;position:relative;text-align:end\n}\n.swap-input .input-wrap input[data-v-0d3d5541]{width:100%;color:#fff;font-size:16px;text-align:left;border:none;border-bottom:1px solid #fff;margin-bottom:5px;background:rgba(0,0,0,0);padding-bottom:5px\n}\n.swap-input .input-wrap input[type=number][data-v-0d3d5541]{-moz-appearance:textfield\n}\n.swap-input .input-wrap input[data-v-0d3d5541]::-webkit-inner-spin-button,.swap-input .input-wrap input[data-v-0d3d5541]::-webkit-outer-spin-button{-webkit-appearance:none\n}\n.swap-input .input-wrap input[data-v-0d3d5541]:focus{outline:none\n}\n.swap-input .input-wrap .send-all[data-v-0d3d5541]{position:absolute;color:#8290ac;cursor:pointer;top:0;right:0\n}\n.swap-input .input-wrap .coin-name[data-v-0d3d5541]{font-size:24px;font-weight:32px\n}\n.swap-input .input-box[data-v-0d3d5541]{display:flex;padding-top:100px;align-items:flex-start;flex-direction:column;width:100%;position:relative\n}\n.swap-button[data-v-0d3d5541]{display:flex;justify-content:center;flex-direction:column;align-items:center\n}\n.swap-button .error[data-v-0d3d5541]{padding-top:5px;height:17px;color:#f75555\n}\n.swap-info[data-v-0d3d5541]{font-size:14px;color:#fff;line-height:20px;padding:5px\n}\n.swap-info span[data-v-0d3d5541]{font-size:14px;color:#8290ac;line-height:20px\n}\n.available[data-v-0d3d5541]{color:#8290ac;display:flex;gap:5px\n}\n.available-info__loading[data-v-0d3d5541]{width:60px\n}\n.header[data-v-0d3d5541]{display:flex;align-items:center;justify-content:center;padding:0;gap:10px\n}\n.header .title[data-v-0d3d5541]{font-size:28px;font-weight:32px\n}\n.header .icon[data-v-0d3d5541]{width:58px;height:58px;font-size:58px;border-radius:50%\n}\n.balance[data-v-0d3d5541]{display:flex;justify-content:center;flex-direction:column\n}\n.balance-text[data-v-0d3d5541]{font-size:28px;font-weight:32px\n}\n.balance-text span[data-v-0d3d5541]{font-size:28px;font-weight:32px;color:#8290ac\n}\n.balance-subtitle[data-v-0d3d5541]{color:#8290ac;font-size:24px\n}\n.status-wrapper[data-v-0d3d5541]{position:fixed;bottom:20px;box-shadow:0px 6px 18px 0px rgba(0,0,0,.1411764706);right:20px;z-index:9999\n}\n.icon[data-v-0d3d5541]{width:32px;height:32px\n}\n.usd-text[data-v-0d3d5541]{font-size:14px;color:#8290ac\n}\n.close__icon[data-v-0d3d5541]{cursor:pointer;position:absolute;right:10px;width:20px;z-index:100\n}\n.token-icon[data-v-0d3d5541]{position:absolute;right:8px\n}\n.token-icon img[data-v-0d3d5541]{width:20px\n}\n.swap-button__item[data-v-0d3d5541]{padding:0 60px\n}\n.arrow[data-v-0d3d5541]{font-size:20px;padding-bottom:20px;cursor:pointer\n}\n.memes-third-api[data-v-0d3d5541]{display:flex;justify-content:center;align-items:center;margin-top:10px;color:#8290ad\n}",
          "",
        ]));
    },
    8833: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(5368),
        i = e.n(n);
      for (var d in n)
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(d);
      var r = e(8836),
        s = e(5);
      function o(t) {
        e(8834);
      }
      var c = !1,
        l = o,
        p = "data-v-c465d8d0",
        v = null,
        b = Object(s["a"])(i.a, r["a"], r["b"], c, l, p, v);
      a["default"] = b.exports;
    },
    8834: function (t, a, e) {
      var n = e(8835);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = e(23).default;
      i("fdd051ca", n, !0, {});
    },
    8835: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          "\n@keyframes spinner-data-v-c465d8d0{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-c465d8d0{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-c465d8d0{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-c465d8d0{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-c465d8d0{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-c465d8d0{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-c465d8d0{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-c465d8d0{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-c465d8d0{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-c465d8d0{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-c465d8d0{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-c465d8d0]{color:#6b963b\n}\n.text-red[data-v-c465d8d0]{color:#c03647\n}\n.text-gray[data-v-c465d8d0]{color:#8290ad\n}\n.text-blue[data-v-c465d8d0]{color:#00c2ff\n}\n.text-danger[data-v-c465d8d0]{color:#8c4545\n}\n.text-title[data-v-c465d8d0]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-c465d8d0]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-c465d8d0]{color:#f1b70b\n}\n.text-white[data-v-c465d8d0]{color:#fff\n}\n.text-bigger[data-v-c465d8d0]{font-size:18px;font-weight:500\n}\n.text-big[data-v-c465d8d0]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-c465d8d0]{font-size:14px\n}\n.text-middle-height[data-v-c465d8d0]{line-height:24px\n}\n.text-small[data-v-c465d8d0]{font-size:12px\n}\n.text-word-break[data-v-c465d8d0]{word-break:break-all\n}\n.text-right[data-v-c465d8d0]{text-align:right\n}\n.text-left[data-v-c465d8d0]{text-align:left\n}\n.text-line-middle[data-v-c465d8d0]{line-height:24px\n}\n.text-link[data-v-c465d8d0],.text-link-underline[data-v-c465d8d0]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-c465d8d0]:hover,.text-link-underline[data-v-c465d8d0]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-c465d8d0]{text-decoration:underline\n}\n.text-center[data-v-c465d8d0]{text-align:center\n}\n.text-pointer[data-v-c465d8d0]{cursor:pointer\n}\n.gap-10[data-v-c465d8d0]{gap:10px\n}\n.m-t-auto[data-v-c465d8d0]{margin-top:auto\n}\n.m-t-4[data-v-c465d8d0]{margin-top:4px\n}\n.m-t-5[data-v-c465d8d0]{margin-top:5px\n}\n.m-t-8[data-v-c465d8d0]{margin-top:10px\n}\n.m-t-10[data-v-c465d8d0]{margin-top:10px\n}\n.m-t-13[data-v-c465d8d0]{margin-top:10px\n}\n.m-t-15[data-v-c465d8d0]{margin-top:15px\n}\n.m-t-16[data-v-c465d8d0]{margin-top:16px\n}\n.m-t-20[data-v-c465d8d0]{margin-top:20px\n}\n.m-t-24[data-v-c465d8d0]{margin-top:24px\n}\n.m-t-25[data-v-c465d8d0]{margin-top:25px\n}\n.m-t-26[data-v-c465d8d0]{margin-top:26px\n}\n.m-t-30[data-v-c465d8d0]{margin-top:30px\n}\n.m-t-35[data-v-c465d8d0]{margin-top:35px\n}\n.m-t-40[data-v-c465d8d0]{margin-top:40px\n}\n.m-t-45[data-v-c465d8d0]{margin-top:45px\n}\n.m-t-50[data-v-c465d8d0]{margin-top:50px\n}\n.m-t-60[data-v-c465d8d0]{margin-top:60px\n}\n.m-t-65[data-v-c465d8d0]{margin-top:65px\n}\n.m-t-80[data-v-c465d8d0]{margin-top:80px\n}\n.m-l-5[data-v-c465d8d0]{margin-left:5px\n}\n.m-l-10[data-v-c465d8d0]{margin-left:10px\n}\n.m-l-15[data-v-c465d8d0]{margin-left:15px\n}\n.m-l-20[data-v-c465d8d0]{margin-left:20px\n}\n.m-l-25[data-v-c465d8d0]{margin-left:25px\n}\n.m-l-30[data-v-c465d8d0]{margin-left:30px\n}\n.m-l-35[data-v-c465d8d0]{margin-left:35px\n}\n.m-r-5[data-v-c465d8d0]{margin-right:5px\n}\n.m-r-10[data-v-c465d8d0]{margin-right:10px\n}\n.m-r-15[data-v-c465d8d0]{margin-right:15px\n}\n.m-r-30[data-v-c465d8d0]{margin-right:30px\n}\n.m-b-5[data-v-c465d8d0]{margin-bottom:5px !important\n}\n.m-b-15[data-v-c465d8d0]{margin-bottom:15px !important\n}\n.m-b-20[data-v-c465d8d0]{margin-bottom:20px !important\n}\n.m-b-30[data-v-c465d8d0]{margin-bottom:30px !important\n}\n.m-b-25[data-v-c465d8d0]{margin-bottom:25px !important\n}\n.m-b-50[data-v-c465d8d0]{margin-bottom:50px !important\n}\n.p-t-40[data-v-c465d8d0]{padding-top:40px\n}\n.p-t-85[data-v-c465d8d0]{padding-top:85px !important\n}\n.hidden[data-v-c465d8d0]{opacity:0 !important\n}\n.relative[data-v-c465d8d0]{position:relative\n}\n.space-nowrap[data-v-c465d8d0]{white-space:nowrap\n}\n.uppercase[data-v-c465d8d0]{text-transform:uppercase\n}\n.lowercase[data-v-c465d8d0]{text-transform:lowercase\n}\n.fade-enter-active[data-v-c465d8d0]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-c465d8d0]{transition:all .1s ease-out\n}\n.fade-enter[data-v-c465d8d0],.fade-leave-to[data-v-c465d8d0]{opacity:0\n}\n.fade-down-enter-active[data-v-c465d8d0],.fade-down-leave-active[data-v-c465d8d0],.fade-down-move[data-v-c465d8d0]{transition:all .15s\n}\n.fade-down-leave-active[data-v-c465d8d0],.fade-down-enter-active[data-v-c465d8d0]{position:absolute !important\n}\n.fade-down-enter[data-v-c465d8d0],.fade-down-leave-to[data-v-c465d8d0]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-c465d8d0],.scale-leave-active[data-v-c465d8d0],.scale-move[data-v-c465d8d0]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-c465d8d0],.scale-leave-to[data-v-c465d8d0]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-c465d8d0],.slide-leave-active[data-v-c465d8d0]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-c465d8d0]{transition:all .2s ease\n}\n.slide-leave-active[data-v-c465d8d0]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-c465d8d0],.slide-leave-to[data-v-c465d8d0]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-c465d8d0],.slide-leave[data-v-c465d8d0]{margin-bottom:0px\n}\n.slide-enter[data-v-c465d8d0],.slide-leave-to[data-v-c465d8d0]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-c465d8d0],.slide-in-leave-active[data-v-c465d8d0]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-c465d8d0]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-c465d8d0]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-c465d8d0]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-c465d8d0]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-c465d8d0],.page-fade-enter-active[data-v-c465d8d0]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-c465d8d0],.page-fade-leave-to[data-v-c465d8d0],.page-fade-enter[data-v-c465d8d0]{opacity:0\n}\n.page-fade-enter-to[data-v-c465d8d0]{opacity:1\n}\n.fade-out-leave-active[data-v-c465d8d0],.fade-out-enter-active[data-v-c465d8d0]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-c465d8d0],.fade-out-leave-to[data-v-c465d8d0],.fade-out-enter[data-v-c465d8d0]{opacity:0\n}\n.fade-out-enter-to[data-v-c465d8d0]{opacity:1\n}\n.slide-down-enter-active[data-v-c465d8d0],.slide-down-leave-active[data-v-c465d8d0]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-c465d8d0],.slide-down-enter[data-v-c465d8d0]{top:100%\n}\n.slide-down-leave[data-v-c465d8d0],.slide-down-enter-to[data-v-c465d8d0]{top:0%\n}\n.slide-out-enter-active[data-v-c465d8d0],.slide-out-leave-active[data-v-c465d8d0]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-c465d8d0]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-c465d8d0]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-c465d8d0]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-c465d8d0],.exchange-result.slide-out-enter[data-v-c465d8d0]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-c465d8d0],.exchange-pending.slide-out-enter[data-v-c465d8d0]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-c465d8d0],.slide-left-leave-active[data-v-c465d8d0]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-c465d8d0]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-c465d8d0]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-c465d8d0]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-c465d8d0],.slide-right-leave-active[data-v-c465d8d0]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-c465d8d0]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-c465d8d0]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-c465d8d0]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-c465d8d0],.spin-down-leave-active[data-v-c465d8d0]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-c465d8d0]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-c465d8d0]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-c465d8d0]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-c465d8d0],.spin-up-leave-active[data-v-c465d8d0]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-c465d8d0]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-c465d8d0]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-c465d8d0]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-c465d8d0],.puff-out-leave-active[data-v-c465d8d0]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-c465d8d0]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-c465d8d0]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-c465d8d0],.puff-out-enter-to[data-v-c465d8d0]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-c465d8d0],.collapse-fade-enter-active[data-v-c465d8d0]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-c465d8d0],.collapse-fade-leave-to[data-v-c465d8d0],.collapse-fade-enter[data-v-c465d8d0]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-c465d8d0]{opacity:1\n}\n.lazy-fade-leave-active[data-v-c465d8d0],.lazy-fade-enter-active[data-v-c465d8d0]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-c465d8d0],.lazy-fade-leave-to[data-v-c465d8d0],.lazy-fade-enter[data-v-c465d8d0]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-c465d8d0]{opacity:1\n}\n.send-coin .result .icon[data-v-c465d8d0]{width:64px;height:64px;margin-bottom:16px;border-radius:50%\n}\n.send-coin .result.success[data-v-c465d8d0]{position:relative\n}\n.send-coin .result.success .submit[data-v-c465d8d0]{position:relative;width:100%\n}\n.send-coin .result.success .submit button[data-v-c465d8d0]{min-width:240px\n}",
          "",
        ]));
    },
    8836: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            {
              staticClass: "result",
              class: { error: t.isError, success: t.isSuccess && !t.isError },
            },
            [
              t.isSuccess && !t.isError
                ? e(
                    "div",
                    { staticClass: "info" },
                    [
                      t.coin.imgUri
                        ? e("memes-image", {
                            staticClass: "icon",
                            attrs: { uri: t.coin.imgUri },
                          })
                        : e("coin-icon", { attrs: { wallet: t.coin } }),
                      t._v(" "),
                      e("p", { staticClass: "text-green" }, [
                        t._v(
                          "\n      " +
                            t._s(
                              "DOGE" === t.coin.ticker
                                ? "Wow, much success"
                                : "Success",
                            ) +
                            "\n    ",
                        ),
                      ]),
                      t._v(" "),
                      e("p", {
                        directives: [
                          {
                            name: "text-html",
                            rawName: "v-text-html",
                            value: t.successfulMessage,
                            expression: "successfulMessage",
                          },
                        ],
                        staticClass: "text-small",
                      }),
                      t._v(" "),
                      t.successMessage
                        ? e("p", { staticClass: "warning" }, [
                            t._v(
                              "\n      " + t._s(t.successMessage) + "\n    ",
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "text-small no-hover",
                          on: {
                            click: function (a) {
                              return (
                                a.stopPropagation(),
                                t.openTransactionHash.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.$t("title.transactionHash")) +
                              ":\n    ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          staticClass: "text-link-underline flex-wrap center",
                          on: {
                            click: function (a) {
                              return (
                                a.stopPropagation(),
                                t.openTransactionHash.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [t._v("\n      " + t._s(t.txid) + "\n    ")],
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "button-center" },
                        [
                          e(
                            "button",
                            {
                              staticClass: "button copy",
                              on: {
                                click: function (a) {
                                  (a.stopPropagation(),
                                    t.$copyToClipboard(
                                      "" +
                                        t.$wallets.getWallet(
                                          t.coin.deprecatedParent,
                                        ).explorer.webUrl +
                                        t.txid,
                                    ));
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.copy")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          e("transition", { attrs: { name: "fade" } }, [
                            t.isCopiedToClipboard
                              ? e("div", { staticClass: "message" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(t.$t("message.copied")) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ],
                        1,
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "rate-result" },
                        [e("rate-stars")],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              t.isError
                ? e(
                    "div",
                    { staticClass: "info" },
                    [
                      t.errorMessage
                        ? e(
                            "div",
                            { staticClass: "info-wrap error" },
                            [
                              e("coin-icon", { attrs: { wallet: t.coin } }),
                              t._v(" "),
                              e("p", { staticClass: "info-text" }, [
                                t._v(
                                  "\n        " +
                                    t._s(t.errorMessage) +
                                    "\n      ",
                                ),
                              ]),
                            ],
                            1,
                          )
                        : [
                            e("coin-icon", { attrs: { wallet: t.coin } }),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "\n        " +
                                  t._s(t.errorHeadline) +
                                  "\n      ",
                              ),
                            ]),
                            t._v(" "),
                            e(
                              "ul",
                              { staticClass: "steps" },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(
                                      t.$t("sendCoin.removeErrorSteps.title"),
                                    ) +
                                    ":\n        ",
                                ),
                                t._l(t.hints, function (a, n) {
                                  return e("li", { key: n }, [
                                    t._v(
                                      "\n          - " + t._s(a) + "\n        ",
                                    ),
                                  ]);
                                }),
                              ],
                              2,
                            ),
                          ],
                    ],
                    2,
                  )
                : t._e(),
              t._v(" "),
              t.isSuccess && !t.isError
                ? e(
                    "div",
                    { staticClass: "submit" },
                    [
                      e(
                        "BaseButton",
                        {
                          attrs: { type: "primary-desktop" },
                          on: {
                            click: function (a) {
                              return t.backActions("backToWallets");
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " + t._s(t.buttonTitle.back) + "\n    ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      ([
                        "Withdrawal",
                        "Activate",
                        "ActivateAutoclaim",
                        "Claim",
                      ].every(function (a) {
                        return t.sendType !== a;
                      }) &&
                        "XRP" !== t.coin.ticker) ||
                      "Send" === t.sendType
                        ? e(
                            "BaseButton",
                            {
                              attrs: { type: "primary-desktop" },
                              on: {
                                click: function (a) {
                                  return t.backActions("backToForm");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n      " +
                                  t._s(t.buttonTitle.repeat) +
                                  "\n    ",
                              ),
                            ],
                          )
                        : t._e(),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              t.isError
                ? e("div", { staticClass: "submit failed" }, [
                    e(
                      "button",
                      {
                        staticClass: "button platinum hover-white",
                        on: {
                          click: function (a) {
                            return t.$emit("tryAgain");
                          },
                        },
                      },
                      [t._v("\n      " + t._s(t.$t("button.back")) + "\n    ")],
                    ),
                    t._v(" "),
                    e(
                      "button",
                      {
                        staticClass: "button platinum hover-white",
                        on: { click: t.talkWithSupport },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.$t("button.contactSupport")) +
                            "\n    ",
                        ),
                      ],
                    ),
                  ])
                : t._e(),
              t._v(" "),
              t.isError
                ? e("div", { staticClass: "version" }, [
                    e("span", [
                      t._v(
                        " v " +
                          t._s(t.appConfig.version) +
                          " " +
                          t._s(t.appConfig.platform) +
                          " ",
                      ),
                    ]),
                  ])
                : t._e(),
            ],
          );
        },
        i = [];
    },
    8837: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n(
            "div",
            { staticClass: "inner-exchange-basic send-coin popup" },
            [
              n(
                "div",
                { staticClass: "close" },
                [
                  n(
                    "router-link",
                    { staticClass: "close__icon", attrs: { to: "/memes" } },
                    [n("img", { attrs: { src: e(237) } })],
                  ),
                ],
                1,
              ),
              t._v(" "),
              [
                n("div", { staticClass: "swap-box" }, [
                  n(
                    "div",
                    { staticClass: "swap-input" },
                    [
                      n(
                        "div",
                        { staticClass: "input-box" },
                        [
                          n("div", { staticClass: "input-wrap" }, [
                            n("div", { staticClass: "input-wrap__box" }, [
                              n("input", {
                                attrs: { placeholder: "0.00" },
                                domProps: { value: t.amountToSend },
                                on: { input: t.onChangeSend },
                              }),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass: "send-all",
                                  attrs: { "data-test-id": "send_all_id" },
                                  on: { click: t.sendAll },
                                },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(t.$t("button.sendAll")) +
                                      "\n              ",
                                  ),
                                ],
                              ),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "coin-name" }, [
                              t._v(
                                "\n              " +
                                  t._s(t.coinToSend.ticker) +
                                  "\n            ",
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          t.coinToSend.imgUri
                            ? n("memes-image", {
                                staticClass: "icon",
                                attrs: { uri: t.coinToSend.imgUri },
                              })
                            : n("coin-icon", {
                                attrs: { wallet: t.coinToSend },
                              }),
                          t._v(" "),
                          n("div", { staticClass: "available" }, [
                            t._v(
                              "\n            " +
                                t._s(t.$t("memesPage.available")) +
                                ":\n            ",
                            ),
                            n(
                              "span",
                              {
                                class: [
                                  "relative available-info",
                                  {
                                    "available-info__loading":
                                      t.isLoadingAvailableBalance,
                                  },
                                ],
                              },
                              [
                                t.isLoadingAvailableBalance
                                  ? [
                                      n("loading-ellipsis", {
                                        staticClass: "cashback-info__loading",
                                      }),
                                    ]
                                  : [
                                      t._v(
                                        "\n                " +
                                          t._s(t.availableBalance || 0) +
                                          "\n              ",
                                      ),
                                    ],
                              ],
                              2,
                            ),
                            t._v(
                              "\n            " +
                                t._s(t.coinToSend.ticker) +
                                "\n          ",
                            ),
                          ]),
                        ],
                        1,
                      ),
                      t._v(" "),
                      n("change-icon", {
                        staticClass: "change-icon",
                        on: { clickAction: t.changeCoins },
                      }),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "input-box" },
                        [
                          n("div", { staticClass: "input-wrap" }, [
                            n("div", { staticClass: "input-wrap__box" }, [
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.amountToReceive,
                                    expression: "amountToReceive",
                                  },
                                ],
                                attrs: {
                                  placeholder: "0.00",
                                  type: "number",
                                  readonly: "",
                                },
                                domProps: { value: t.amountToReceive },
                                on: {
                                  input: function (a) {
                                    a.target.composing ||
                                      (t.amountToReceive = a.target.value);
                                  },
                                },
                              }),
                              t._v(" "),
                              n("div", { staticClass: "available" }, [
                                t._v(
                                  "\n                " +
                                    t._s(t.$t("memesPage.available")) +
                                    ":\n                ",
                                ),
                                n(
                                  "span",
                                  {
                                    class: [
                                      "relative available-info",
                                      {
                                        "available-info__loading":
                                          t.isLoadingAvailableBalance,
                                      },
                                    ],
                                  },
                                  [
                                    t.isLoadingAvailableBalance
                                      ? [
                                          n("loading-ellipsis", {
                                            staticClass:
                                              "cashback-info__loading",
                                          }),
                                        ]
                                      : [
                                          t._v(
                                            "\n                    " +
                                              t._s(
                                                t.coinToReceive
                                                  .divisibleBalance || 0,
                                              ) +
                                              "\n                  ",
                                          ),
                                        ],
                                  ],
                                  2,
                                ),
                                t._v(
                                  "\n                " +
                                    t._s(t.coinToReceive.ticker) +
                                    "\n              ",
                                ),
                              ]),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "coin-name" }, [
                              t._v(
                                "\n              " +
                                  t._s(t.coinToReceive.ticker) +
                                  "\n            ",
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          t.coinToReceive.imgUri
                            ? n("memes-image", {
                                staticClass: "icon",
                                attrs: { uri: t.coinToReceive.imgUri },
                              })
                            : n("coin-icon", {
                                attrs: { wallet: t.coinToReceive },
                              }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n(
                    "div",
                    [
                      t.acceptedTermsVisible
                        ? n(
                            "atomic-checkbox",
                            {
                              staticClass: "m-b-5",
                              attrs: { "model-value": t.acceptedTerms },
                              on: {
                                "update:modelValue": function (a) {
                                  t.acceptedTerms = a;
                                },
                              },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("message.accept")) +
                                  "\n          ",
                              ),
                              n(
                                "a",
                                {
                                  on: {
                                    click: function (a) {
                                      return (
                                        a.preventDefault(),
                                        a.stopPropagation(),
                                        t.openTerms.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(t.$t("message.termsOfService")) +
                                      " ",
                                  ),
                                ],
                              ),
                            ],
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "swap-button" },
                    [
                      n(
                        "BaseButton",
                        {
                          staticClass: "swap-button__item shadow w320",
                          attrs: {
                            type: "primary-desktop",
                            disabled: !t.canSwap,
                          },
                          on: { click: t.exchangeCoins },
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.$t("button.swap")) +
                              "\n        ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "error" },
                        [
                          t.error
                            ? [
                                n(
                                  "div",
                                  { staticClass: "flex justify-center" },
                                  [
                                    n("error-plain", {
                                      attrs: { message: t.error.message },
                                    }),
                                    t._v(" "),
                                    t.error.isBuyCoin
                                      ? n(
                                          "button",
                                          {
                                            staticClass: "button button-buy",
                                            attrs: {
                                              "data-test-id": "exch_buy",
                                            },
                                            on: { click: t.buyCoin },
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(t.$t("button.buy")) +
                                                " " +
                                                t._s(
                                                  t.isMinMaxError
                                                    ? t.coinToSend.ticker
                                                    : t.coinToSend.feeTicker,
                                                ) +
                                                "\n              ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                  ],
                                  1,
                                ),
                              ]
                            : t._e(),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n("div", { staticClass: "swap-info" }, [
                    n("span", [
                      t._v(
                        "1 " +
                          t._s(t.sol.ticker) +
                          " ≈ " +
                          t._s(t.receivePerOneSol) +
                          " " +
                          t._s(t.token.ticker),
                      ),
                    ]),
                    t._v(" "),
                    n("br"),
                    t._v(" "),
                    n("span", [
                      t._v(
                        t._s(t.$t("memesPage.fee")) +
                          " ≈ " +
                          t._s(t.feeFormatted) +
                          " " +
                          t._s(t.sol.ticker),
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "flex justify-center iframe-price" }),
                t._v(" "),
                n("div", { staticClass: "memes-third-api" }, [
                  t._v(
                    "\n      " +
                      t._s(t.$t("title.swapServiceThirdParty")) +
                      "\n    ",
                  ),
                ]),
              ],
              t._v(" "),
              n("transition", { attrs: { name: "fade-down" } }, [
                t.isSending
                  ? n("div", { staticClass: "send-coin popup" }, [
                      n("div", { staticClass: "sending" }, [
                        n("div", { staticClass: "info" }, [
                          n("p", [
                            t._v(
                              t._s(t.$t("button.swapping")) +
                                " " +
                                t._s(t.amountResult) +
                                " " +
                                t._s(t.coinToSend.ticker),
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "loading" }),
                      ]),
                    ])
                  : t._e(),
              ]),
              t._v(" "),
              n("transition", { attrs: { name: "fade-down" } }, [
                t.isSuccess
                  ? n(
                      "div",
                      { staticClass: "send-coin popup" },
                      [
                        n("send-memes-result", {
                          attrs: {
                            amount: t.amountResult,
                            coin: t.coinToSend,
                            icon: t.coinToSend.imgUri,
                            ticker: t.coinToSend.ticker,
                            "is-error": t.isError,
                            "is-success": t.isSuccess,
                            "send-type": "Swap",
                            "contact-data": { tags: ["send_tag"] },
                            txid: t.txId,
                            "mail-title": t.$t("error.sendingError"),
                          },
                          on: {
                            backToForm: t.backToForm,
                            backToWallets: function (a) {
                              return t.$router.push({ name: "memes-page" });
                            },
                            tryAgain: t.backToForm,
                          },
                        }),
                      ],
                      1,
                    )
                  : t._e(),
              ]),
              t._v(" "),
              t.isFail
                ? n(
                    "div",
                    { staticClass: "status-wrapper" },
                    [
                      n("memes-status", {
                        attrs: {
                          status: "fail",
                          "operation-type": "swap",
                          ticker: t.coinToSend.ticker,
                        },
                      }),
                    ],
                    1,
                  )
                : t._e(),
            ],
            2,
          );
        },
        i = [];
    },
  },
]);
