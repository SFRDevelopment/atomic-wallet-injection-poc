(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [198, 404, 410],
  {
    2744: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(5374),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(8855),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
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
    2820: function (t, e, a) {
      "use strict";
      var i = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(a(817));
      e.default = {
        name: "Edit",
        components: { EditSvg: r.default },
        props: {
          type: { type: String, default: "" },
          placeholder: { type: String, default: "" },
          modelValue: { type: String, default: "" },
          error: { type: String, default: "" },
          readonly: { type: Boolean, default: !1 },
          startWithVal: { type: String, default: "" },
          editPlaceholder: {
            type: String,
            default() {
              return this.$t("input.typeAddressOrDomainHere");
            },
          },
          isPasteFromClipboard: { type: Boolean, default: !1 },
          isPasteByClick: { type: Boolean, default: !1 },
          coin: { type: Object, default: () => ({}) },
          isShowPassword: { type: Boolean, default: !1 },
          focus: { type: Boolean, default: !1 },
          specialCharacters: { type: Boolean, default: !0 },
          specialCharactersPattern: { type: RegExp, default: () => /(?:)/ },
          validationPattern: { type: RegExp, default: () => /(?:)/ },
          ticker: { type: String, default: "" },
          isFixedNumber: { type: Boolean, default: !1 },
        },
        data: () => ({
          typetimer: null,
          forsedStartWithval: !1,
          isTextTypePassword: !1,
          text: "",
          isEditPlaceholder: !1,
        }),
        computed: {
          inputType() {
            let t = this.type;
            return (
              this.isShowPassword &&
                (t = this.isTextTypePassword ? "text" : "password"),
              t
            );
          },
        },
        mounted() {
          (("" !== this.modelValue || this.startWithVal) &&
            (this.forsedStartWithval = !0),
            this.focus && this.setFocus());
        },
        methods: {
          onBlur() {
            this.isPasteByClick &&
              "" === this.modelValue &&
              (this.isEditPlaceholder = !1);
          },
          cleanInput() {
            ((this.isEditPlaceholder = !1),
              this.$emit("update:modelValue", ""));
          },
          editInput() {
            this.$nextTick(() => {
              ((this.isEditPlaceholder = !0), this.setFocus());
            });
          },
          toggleTypePassword() {
            const t = "password" === this.inputType ? "text" : "password";
            ((this.isTextTypePassword = !this.isTextTypePassword),
              this.$emit("changeTypeRepeatPassword", t));
          },
          enterPressed() {
            this.$emit("enter-pressed");
          },
          async pasteValueFromClipboard() {
            this.$emit("update:modelValue", await this.$pasteFromClipboard());
          },
          async pasteFromClipboardToInput() {
            if (this.isPasteByClick) {
              const t = await this.$pasteFromClipboard(),
                e = new RegExp(this.validationPattern).test(t);
              "" === this.modelValue && t && e
                ? await this.pasteValueFromClipboard()
                : "" === this.modelValue && this.$refs.input.blur();
            }
          },
          keypressHandler(t) {
            let e = null;
            if (
              (this.isShowPassword &&
                (e = new RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\ )\(+=._-]+$/g)),
              this.specialCharacters ||
                (e = new RegExp(this.specialCharactersPattern)),
              e)
            ) {
              const a = !e.test(t.key);
              a && t.preventDefault();
            }
          },
          onInput(t) {
            let { value: e } = t.target;
            const a = new RegExp(this.validationPattern).test(e);
            (this.isFixedNumber && (e = String(e).replace(/[^0-9]+/g, "")),
              a
                ? ((this.$refs.input.value = e),
                  this.$emit("update:modelValue", e))
                : (this.$refs.input.value = this.modelValue));
          },
          setFocus() {
            this.$refs.input.focus();
          },
          onKeyUp() {
            const t = 500;
            (this.$emit("keyup"),
              clearTimeout(this.typetimer),
              (this.typetimer = setTimeout(() => {
                this.$emit("typed");
              }, t)));
          },
          putAllAvailableBalance() {
            (this.onKeyUp(), this.$emit("setAllAvailableBalance"));
          },
        },
      };
    },
    2837: function (t, e, a) {
      "use strict";
      var i = a(9);
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
            return n.default;
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
            return u.default;
          },
        }),
        Object.defineProperty(e, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var r = i(a(2867)),
        n = i(a(2869)),
        s = i(a(2871)),
        l = i(a(2873)),
        o = i(a(2876)),
        u = i(a(2878)),
        c = i(a(2843)),
        d = i(a(2880)),
        f = i(a(2882)),
        p = i(a(2884));
    },
    2842: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(2820),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2972),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2843: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(2780),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2857),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2857: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2782),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2868),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2868: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2783),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2870),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2870: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2784),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2872),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2872: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2785),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2875),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2874: function (t, e, a) {
      var i = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function r(t) {
        var e = n(t);
        return a(e);
      }
      function n(t) {
        if (!a.o(i, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[t];
      }
      ((r.keys = function () {
        return Object.keys(i);
      }),
        (r.resolve = n),
        (t.exports = r),
        (r.id = 2874));
    },
    2875: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2786),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2877),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2877: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2787),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2879),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2879: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2788),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2881),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2881: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2789),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2883),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2883: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
      var i = a(2790),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(2885),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    2885: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
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
    2972: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "form-field" },
            [
              i(
                "div",
                {
                  staticClass: "input-wrap",
                  class: {
                    "past-click": t.isPasteByClick && "" === t.modelValue,
                  },
                },
                [
                  i("input", {
                    ref: "input",
                    attrs: { readonly: t.readonly, type: t.inputType },
                    domProps: { value: t.modelValue },
                    on: {
                      blur: t.onBlur,
                      click: t.pasteFromClipboardToInput,
                      focus: function (e) {
                        return t.$emit("focus");
                      },
                      input: t.onInput,
                      keypress: t.keypressHandler,
                      keyup: [
                        t.onKeyUp,
                        function (e) {
                          return !e.type.indexOf("key") &&
                            t._k(e.keyCode, "enter", 13, e.key, "Enter")
                            ? null
                            : (e.preventDefault(),
                              e.stopPropagation(),
                              t.enterPressed.apply(null, arguments));
                        },
                      ],
                    },
                  }),
                  t._v(" "),
                  i("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.error,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "placeholder",
                      class: { "is-up": t.modelValue },
                    },
                    [
                      t._v(
                        "\n      " +
                          t._s(
                            t.isPasteByClick && t.isEditPlaceholder
                              ? t.editPlaceholder
                              : t.placeholder,
                          ) +
                          "\n    ",
                      ),
                    ],
                  ),
                  t._v(" "),
                  t.isPasteFromClipboard
                    ? i("div", {
                        staticClass: "icon-paste",
                        on: { click: t.pasteValueFromClipboard },
                      })
                    : t._e(),
                  t._v(" "),
                  t.isPasteByClick && "" !== t.modelValue
                    ? i(
                        "div",
                        {
                          staticClass: "icon-delete",
                          on: { click: t.cleanInput },
                        },
                        [t._v("\n      ✕\n    ")],
                      )
                    : t._e(),
                  t._v(" "),
                  t.isPasteByClick && "" === t.modelValue
                    ? i(
                        "div",
                        {
                          staticClass: "icon-edit",
                          on: { click: t.editInput },
                        },
                        [i("EditSvg")],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isShowPassword
                    ? i(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === t.inputType },
                          on: { click: t.toggleTypePassword },
                        },
                        [i("img", { attrs: { src: a(811) } })],
                      )
                    : t._e(),
                  t._v(" "),
                  t.ticker
                    ? i("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.ticker) + "\n    "),
                      ])
                    : t._e(),
                ],
              ),
              t._v(" "),
              i("transition", { attrs: { name: "slide-in" } }, [
                t.error
                  ? i("div", {
                      directives: [
                        {
                          name: "text-html",
                          rawName: "v-text-html",
                          value: t.error,
                          expression: "error",
                        },
                      ],
                      staticClass: "error",
                    })
                  : t._e(),
              ]),
              t._v(" "),
              t._t("default"),
            ],
            2,
          );
        },
        r = [];
    },
    3802: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(2837);
      const r = ["Success", "Warning", "Error", "Report"];
      e.default = {
        name: "Alert",
        components: { AlertIcon: i.AlertIcon },
        props: {
          type: { type: String, default: "Success" },
          message: { type: String, default: "" },
        },
        created() {
          r.includes(this.type) ||
            console.error(this.type + " not found in list of types");
        },
      };
    },
    5343: function (t, e, a) {
      "use strict";
      function i(t, e) {
        const a = "" + (null !== t && void 0 !== t ? t : "");
        return a.length > e ? a.slice(0, e) + "..." : a;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
    },
    5374: function (t, e, a) {
      "use strict";
      var i = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(a(2842)),
        n = i(a(8853)),
        s = i(a(5376)),
        l = i(a(5343));
      e.default = {
        name: "PrivateKeysTab",
        components: { Edit: r.default, CustomKey: n.default, Alert: s.default },
        data() {
          return {
            keys: [],
            claiming: !1,
            claimOk: !1,
            claimFail: !1,
            passwordForKey: "",
            privateKeyError: "",
            innerKeyState: "",
            btnDisabled: !1,
            filter: "",
            mnemonic: "",
          };
        },
        computed: {
          keysData() {
            const t = this.filter.toLowerCase();
            return this.keys.filter(
              (e) =>
                0 === t.length ||
                e.ticker.toLowerCase().indexOf(t) >= 0 ||
                e.name.toLowerCase().indexOf(t) >= 0,
            );
          },
        },
        beforeDestroy() {
          ((this.mnemonic = ""), (this.keys = []));
        },
        methods: {
          async claimFunds(t) {
            let e, a;
            ((this.claiming = !0),
              "YEC" === t &&
                ((a = this.$wallets.getWallet("YEC")),
                (e = this.$wallets.getWallet("ZEC"))),
              e || a || (this.claiming = !1));
            const i = await a
              .createClaimTransaction(e.privateKey)
              .catch((t) => {
                console.log(t);
              });
            if (!i) return void this.successClaim();
            const r = await a.sendTransaction(i).catch((t) => console.log(t));
            r ? this.successClaim(r) : this.successClaim();
          },
          eosTextClipboard(t, e) {
            return `${(0, l.default)(t, 16)}\n          ${(0, l.default)(e, 16)}`;
          },
          successClaim(t) {
            t ? (this.claimOk = !0) : (this.claimFail = !0);
          },
          open() {
            this.$electron.openExternal(
              "https://support.atomicwallet.io/article/94-how-to-keep-your-money-safe",
            );
          },
          clearClaimStatus(t) {
            (t ? (this.claimOk = !1) : (this.claimFail = !1),
              (this.claiming = !1));
          },
          async loadKeysData() {
            this.privateKeyError = "";
            const t = await this.$wallets.checkPassword(this.passwordForKey);
            if (t) {
              this.filter = "";
              try {
                ((this.keys = (
                  await this.$wallets.loadKeysData(this.passwordForKey)
                ).map((t) => ({ ...t, icon: this.$iconClass(t) }))),
                  (this.mnemonic = t),
                  (this.innerKeyState = !0),
                  (this.privateKeyError = ""));
              } catch (e) {
                ((this.privateKeyError = e.message), (this.keys = []));
              }
              this.passwordForKey = "";
            } else this.privateKeyError = this.$t("error.wrongPassword");
          },
        },
      };
    },
    5375: function (t, e, a) {
      "use strict";
      var i = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(a(820));
      const n = 45;
      e.default = {
        name: "CustomKey",
        components: { QrCode: () => a.e(348).then(a.bind(null, 11580)) },
        props: {
          value: { type: String, default: "" },
          title: { type: String, default: "" },
          textClipboard: { type: String, default: "" },
          isTrimValue: { type: Boolean, default: !0 },
          isQrCode: { type: Boolean, default: !0 },
        },
        methods: {
          trimValue(t) {
            return this.isTrimValue && t.length > n ? (0, r.default)(t, 16) : t;
          },
        },
      };
    },
    5376: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(3802),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(5377),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    5377: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "alert", class: "alert-" + t.type.toLowerCase() },
            [
              a("AlertIcon", { attrs: { type: t.type } }),
              t._v(" "),
              a(
                "div",
                { staticClass: "alert_body" },
                [
                  a("div", { staticClass: "alert_message" }, [
                    t._v("\n      " + t._s(t.message) + "\n    "),
                  ]),
                  t._v(" "),
                  t._t("default"),
                ],
                2,
              ),
            ],
            1,
          );
        },
        r = [];
    },
    8853: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a(5375),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(n);
      var s = a(8854),
        l = a(5),
        o = !1,
        u = null,
        c = null,
        d = null,
        f = Object(l["a"])(r.a, s["a"], s["b"], o, u, c, d);
      e["default"] = f.exports;
    },
    8854: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "custom-key" },
            [
              t.isQrCode ? a("QrCode", { attrs: { value: t.value } }) : t._e(),
              t._v(" "),
              a("div", { staticClass: "item" }, [
                a("span", [t._v("\n      " + t._s(t.title) + "\n    ")]),
                t._v(" "),
                a(
                  "span",
                  {
                    staticClass: "value",
                    attrs: { "data-test-id": "private_coin_key" },
                    on: {
                      click: function (e) {
                        return t.$copyToClipboard(t.value);
                      },
                    },
                  },
                  [
                    t._v("\n      " + t._s(t.trimValue(t.value)) + "\n      "),
                    a("transition", { attrs: { name: "fade" } }, [
                      t.isCopiedToClipboard
                        ? a("div", { staticClass: "message" }, [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.textClipboard ? t.textClipboard : t.title,
                                ) +
                                "\n          copied to clipboard\n        ",
                            ),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1,
                ),
              ]),
            ],
            1,
          );
        },
        r = [];
    },
    8855: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return i;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "tab-wrap private-keys" }, [
            t.innerKeyState
              ? t._e()
              : a(
                  "div",
                  { staticClass: "alert_wrap" },
                  [
                    a(
                      "alert",
                      {
                        attrs: {
                          message: t.$t(
                            "settingsPage.privateKeysTab.passwordHint",
                          ),
                          type: "Warning",
                        },
                      },
                      [
                        a(
                          "a",
                          {
                            staticClass:
                              "text-link-underline text-word-break text-big new-text-blue m-l-10",
                            attrs: { "data-test-id": "protect_link" },
                            on: {
                              click: function (e) {
                                return (
                                  e.stopPropagation(),
                                  t.open.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$t(
                                    "settingsPage.privateKeysTab.howToProtectWallet",
                                  ),
                                ) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
            t._v(" "),
            t.innerKeyState
              ? a("div", { staticClass: "coins" }, [
                  a("div", { staticClass: "filter" }, [
                    a("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.filter,
                          expression: "filter",
                        },
                      ],
                      staticClass: "placeholder-white",
                      attrs: {
                        placeholder: t.$t("input.search") + "...",
                        "data-test-id": "keys_filter",
                        type: "text",
                      },
                      domProps: { value: t.filter },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.filter = e.target.value);
                        },
                      },
                    }),
                  ]),
                  t._v(" "),
                  t.keys.length > 0
                    ? a(
                        "div",
                        { staticClass: "list" },
                        [
                          !Object.keys(t.keysData).length && t.filter.length
                            ? a("div", { staticClass: "noresult" }, [
                                t._v(
                                  "\n        " +
                                    t._s(
                                      t.$t("label.noResultsFound", {
                                        searchText: t.filter,
                                      }),
                                    ) +
                                    "\n      ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          a(
                            "div",
                            {
                              staticClass: "list-item",
                              attrs: { "data-test-id": "coin-key" },
                            },
                            [
                              t._m(0),
                              t._v(" "),
                              a(
                                "div",
                                { staticClass: "info" },
                                [
                                  a("custom-key", {
                                    attrs: {
                                      value: t.mnemonic,
                                      title: t.$t(
                                        "settingsPage.privateKeysTab.customKey.backupPhrase",
                                      ),
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                          ),
                          t._v(" "),
                          t._l(t.keysData, function (e, i) {
                            return a(
                              "div",
                              { key: i, staticClass: "list-item" },
                              [
                                a("div", { staticClass: "name" }, [
                                  a("div", { class: e.icon }),
                                  t._v(" "),
                                  a("span", [
                                    t._v(
                                      "\n            " +
                                        t._s(e.name) +
                                        "\n          ",
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                "EOS" === e.name
                                  ? a(
                                      "div",
                                      { staticClass: "info" },
                                      [
                                        a("custom-key", {
                                          attrs: {
                                            value: e.address,
                                            title: t.$t(
                                              "settingsPage.privateKeysTab.customKey.accountName",
                                            ),
                                          },
                                        }),
                                        t._v(" "),
                                        e.additionalKeys
                                          ? a(
                                              "div",
                                              t._l(
                                                e.additionalKeys,
                                                function (e, i) {
                                                  return a(
                                                    "span",
                                                    {
                                                      key: i,
                                                      staticClass: "value",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n              " +
                                                          t._s(i) +
                                                          ":\n              ",
                                                      ),
                                                      t._l(e, function (e, r) {
                                                        return a("custom-key", {
                                                          key: r,
                                                          attrs: {
                                                            "text-clipboard":
                                                              t.eosTextClipboard(
                                                                i,
                                                                r,
                                                              ),
                                                            title: r,
                                                            value: e,
                                                          },
                                                        });
                                                      }),
                                                    ],
                                                    2,
                                                  );
                                                },
                                              ),
                                              0,
                                            )
                                          : t._e(),
                                      ],
                                      1,
                                    )
                                  : "Monero" === e.name
                                    ? a(
                                        "div",
                                        { staticClass: "info" },
                                        [
                                          a("custom-key", {
                                            attrs: {
                                              value: e.address,
                                              title: t.$t(
                                                "settingsPage.privateKeysTab.customKey.address",
                                              ),
                                            },
                                          }),
                                          t._v(" "),
                                          e.additionalKeys
                                            ? a("custom-key", {
                                                attrs: {
                                                  value:
                                                    e.additionalKeys
                                                      .privateKeyView,
                                                  title: t.$t(
                                                    "settingsPage.privateKeysTab.customKey.viewPrivateKey",
                                                  ),
                                                },
                                              })
                                            : t._e(),
                                          t._v(" "),
                                          e.additionalKeys
                                            ? a("custom-key", {
                                                attrs: {
                                                  value:
                                                    e.additionalKeys
                                                      .privateKeySpend,
                                                  title: t.$t(
                                                    "settingsPage.privateKeysTab.customKey.spendPrivateKey",
                                                  ),
                                                },
                                              })
                                            : t._e(),
                                          t._v(" "),
                                          a("custom-key", {
                                            attrs: {
                                              value:
                                                e.additionalKeys.publicKeySpend,
                                              title: t.$t(
                                                "settingsPage.privateKeysTab.customKey.spendPublicKey",
                                              ),
                                            },
                                          }),
                                        ],
                                        1,
                                      )
                                    : "Cardano" === e.name && e.additionalKeys
                                      ? a(
                                          "div",
                                          { staticClass: "info" },
                                          [
                                            a("custom-key", {
                                              attrs: {
                                                value:
                                                  e.additionalKeys
                                                    .shelleyAddress || "",
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.address",
                                                ),
                                              },
                                            }),
                                            t._v(" "),
                                            a("custom-key", {
                                              attrs: {
                                                value:
                                                  e.additionalKeys
                                                    .shelleyPrivateKey,
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.privateKey",
                                                ),
                                              },
                                            }),
                                            t._v(" "),
                                            a("custom-key", {
                                              attrs: {
                                                value:
                                                  e.additionalKeys
                                                    .byronPrivateKey,
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.legacyPrivateKey",
                                                ),
                                              },
                                            }),
                                            t._v(" "),
                                            a("custom-key", {
                                              attrs: {
                                                value:
                                                  e.additionalKeys.byronAddress,
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.legacyAddress",
                                                ),
                                              },
                                            }),
                                          ],
                                          1,
                                        )
                                      : a(
                                          "div",
                                          { staticClass: "info" },
                                          [
                                            a("custom-key", {
                                              attrs: {
                                                value: e.address,
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.publicKey",
                                                ),
                                              },
                                            }),
                                            t._v(" "),
                                            a("custom-key", {
                                              attrs: {
                                                value: e.privateKey,
                                                title: t.$t(
                                                  "settingsPage.privateKeysTab.customKey.privateKey",
                                                ),
                                              },
                                            }),
                                          ],
                                          1,
                                        ),
                              ],
                            );
                          }),
                        ],
                        2,
                      )
                    : t._e(),
                ])
              : a(
                  "div",
                  { staticClass: "enter-form" },
                  [
                    a("edit", {
                      attrs: {
                        "model-value": t.passwordForKey,
                        error: t.privateKeyError,
                        focus: "",
                        "is-show-password": "",
                        placeholder: t.$t("input.password"),
                        type: "password",
                      },
                      on: {
                        "enter-pressed": t.loadKeysData,
                        "update:modelValue": function (e) {
                          t.passwordForKey = e;
                        },
                      },
                    }),
                    t._v(" "),
                    a(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { "data-test-id": "show_private_keys" },
                        on: {
                          click: function (e) {
                            return (
                              e.preventDefault(),
                              e.stopPropagation(),
                              t.loadKeysData.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(
                              t.$t(
                                "settingsPage.privateKeysTab.showPrivateKeys",
                              ),
                            ) +
                            "\n    ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
          ]);
        },
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "name" }, [
              a("div", { staticClass: "icon-awc" }),
              t._v(" "),
              a("span", [t._v(" Atomic ")]),
            ]);
          },
        ];
    },
  },
]);
