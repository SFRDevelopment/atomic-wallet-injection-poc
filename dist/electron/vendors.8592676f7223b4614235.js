(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [193, 45, 410],
  {
    2658: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(4891),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(6977),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2780: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "SuccessMark",
        props: { color: { type: String, default: "white" } },
      };
    },
    2782: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "Diamond" };
    },
    2783: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "RateStart" };
    },
    2784: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ClockIcon" };
    },
    2785: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AlertIcon",
        props: { type: { type: String, default: "Success" } },
        computed: {
          imgPath() {
            return n(2874)(`./alert-${this.type.toLowerCase()}.svg`);
          },
          iconClass() {
            return "alert_icon_" + this.type.toLowerCase();
          },
        },
      };
    },
    2786: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SelectArrow" };
    },
    2787: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SuccessIcon" };
    },
    2788: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2789: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "PortfolioChart" };
    },
    2790: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2820: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(817));
      e.default = {
        name: "Edit",
        components: { EditSvg: i.default },
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
              const n = !e.test(t.key);
              n && t.preventDefault();
            }
          },
          onInput(t) {
            let { value: e } = t.target;
            const n = new RegExp(this.validationPattern).test(e);
            (this.isFixedNumber && (e = String(e).replace(/[^0-9]+/g, "")),
              n
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
    2821: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = n(2837);
      const i = "appRate::disabled",
        s = 4,
        r = 1e3;
      e.default = {
        name: "RateStars",
        components: { RateStart: a.RateStart },
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
              for (let e = 0; e <= t; e += 1) this.hoverStars.push(e);
            }
          },
          disableHoverStart() {
            this.userRate || (this.hoverStars = []);
          },
          rateApp(t) {
            t >= s
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
    2837: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AlertIcon", {
          enumerable: !0,
          get: function () {
            return o.default;
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
            return i.default;
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
            return s.default;
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
            return u.default;
          },
        }),
        Object.defineProperty(e, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }));
      var i = a(n(2867)),
        s = a(n(2869)),
        r = a(n(2871)),
        o = a(n(2873)),
        c = a(n(2876)),
        u = a(n(2878)),
        l = a(n(2843)),
        d = a(n(2880)),
        f = a(n(2882)),
        p = a(n(2884));
    },
    2842: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2820),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2972),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2843: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2780),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2857),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2857: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            { attrs: { height: "7", viewBox: "0 0 10 7", width: "10" } },
            [
              n("path", {
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
    2867: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2782),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2868),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2868: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
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
              n("path", {
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
    2869: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2783),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2870),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2870: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            { attrs: { height: "38", viewBox: "0 0 38 38", width: "38" } },
            [
              n("path", {
                attrs: {
                  d: "M25.8069 11.4453L34.8195 12.3099C37.9555 12.6108 38.9173 15.6741 36.4957 17.6867L29.4398 23.5509L32.0592 33.1041C32.9194 36.2415 30.2506 38.1407 27.5775 36.2525L19.0041 30.1967L10.4307 36.2525C7.76847 38.1331 5.08875 36.2419 5.94907 33.1041L8.56846 23.5509L1.51257 17.6867C-0.919172 15.6657 0.0388109 12.6122 3.18825 12.3099L12.1992 11.4453L16.1693 2.29209C17.4125 -0.574326 20.5965 -0.57289 21.8387 2.29238L25.8069 11.4453Z",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2871: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2784),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2872),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2872: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
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
              n("path", {
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
    2873: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2785),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2875),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2874: function (t, e, n) {
      var a = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function i(t) {
        var e = s(t);
        return n(e);
      }
      function s(t) {
        if (!n.o(a, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return a[t];
      }
      ((i.keys = function () {
        return Object.keys(a);
      }),
        (i.resolve = s),
        (t.exports = i),
        (i.id = 2874));
    },
    2875: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "alert_icon", class: t.iconClass }, [
              n("div", [n("img", { attrs: { src: t.imgPath } })]),
            ]),
          ]);
        },
        i = [];
    },
    2876: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2786),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2877),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2877: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            { attrs: { height: "6", viewBox: "0 0 10 6", width: "10" } },
            [
              n("path", {
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
    2878: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2787),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2879),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2879: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
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
              n("path", {
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
    2880: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2788),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2881),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2881: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
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
              n("path", {
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
    2882: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2789),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2883),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2883: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "svg",
            { attrs: { width: "24", height: "24", viewBox: "0 0 24 24" } },
            [
              n("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M18.9193 14C18.0526 17.0034 15.2832 19.2 12.0007 19.2C9.33593 19.2 7.00928 17.7524 5.76428 15.6006L1.6084 18C2.0905 18.835 2.66825 19.6035 3.32628 20.2919C3.43835 20.4091 3.55277 20.524 3.66947 20.6366C4.74436 21.6735 6.01052 22.5075 7.4085 23.0866C8.85424 23.6854 10.3931 23.9917 11.9379 23.9998L12.0007 24L12.0745 23.9998C13.0921 23.9935 14.111 23.8579 15.1065 23.5911C17.0564 23.0686 18.8329 22.0657 20.28 20.6864L20.3319 20.6366C20.4194 20.5522 20.5055 20.4666 20.5903 20.3796C20.6228 20.3464 20.6551 20.3129 20.6871 20.2793C20.9811 19.9708 21.2596 19.6458 21.5209 19.3051C22.719 17.7439 23.5082 15.9206 23.8329 14H18.9193Z",
                  fill: "#979EB0",
                },
              }),
              t._v(" "),
              n("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M12 4.8V0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0327 1.51011 19.3429 2.38172 20.4498 3.47939C20.4735 3.50289 20.4971 3.5265 20.5206 3.5502C21.6183 4.65706 22.4899 5.96731 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12H19.2C19.2 8.02355 15.9764 4.8 12 4.8Z",
                  fill: "#B8BDCC",
                },
              }),
              t._v(" "),
              n("path", {
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
    2884: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2790),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2885),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2885: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
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
              n("path", {
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
    2922: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2942),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(3239),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2942: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(802)),
        s = a(n(2973));
      const r = {
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
      e.default = {
        name: "SendCoinResult",
        components: { CoinIcon: i.default, RateStars: s.default },
        props: {
          icon: { type: String, default: "" },
          coin: { type: Object, default: Object },
          amount: { type: String, default: "" },
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
            const e = "coinTips." + this.coin.ticker.toLowerCase();
            return (
              "Stake" === this.sendType && (t = e + ".successScreen"),
              "Unstake" === this.sendType &&
                (t = e + ".successScreenUnstaking"),
              t && this.$t(t) != t ? this.$t(t) : ""
            );
          },
          errorHeadline() {
            let { sendType: t } = this,
              e = this.coin.ticker;
            return (
              "Withdrawal" === t
                ? (t = "Withdraw")
                : "ActivateAutoclaim" === t && ((t = "Activate"), (e = "")),
              this.$t("sendCoin.errorHeadline", {
                type: this.$t("sendType." + t),
                additionalMessage: e,
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
              e = this.coin.ticker;
            if ("Stake" === this.sendType && ["NEO", "ONG", "KMD"].includes(e))
              return t(`${this.amount} ${"NEO" === e ? "GAS" : e}`);
            if ("Claim" === this.sendType && ["ADA", "TRX"].includes(e))
              return t(`${this.amount} ${e}`);
            if ("Claim" === this.sendType && ["XRP"].includes(e))
              return t(this.amount + " Spark");
            let n = this.$t("sendCoin.successfulMessage", {
              amount: this.amount,
              ticker: e,
              resultMessage: this.resultMessage,
            });
            return (
              "DOGE" === e &&
                (n += ", " + this.$t("sendCoin.DOGEsuccessfulMessagePostfix")),
              n
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
                return this.$t("sendResult.sent");
              case "Stake":
                return this.$t("sendResult.staked");
              case "Unstake":
                return this.$t("sendResult.unstaked");
              case "Claim":
                return this.$t("sendResult.claimed");
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
            var t, e, n;
            const a =
                (null === (t = this.contactData) || void 0 === t
                  ? void 0
                  : t.issue) || this.$t("supportPopup.transactionIssue"),
              i =
                "ClaimADA" === this.sendType
                  ? this.coin.address
                  : this.$getAddressWallet(this.coin.deprecatedParent),
              s = `\n-----------------------\n${this.$t("supportPopup.userTickerAddress", { ticker: this.coin.ticker })}\n${i}`,
              o = {
                isNotText: !0,
                additionalText: `${this.$t("supportPopup.unsuccessSending")}${s}`,
                subject: a,
              };
            ((null === (e = this.contactData) ||
            void 0 === e ||
            null === (n = e.tags) ||
            void 0 === n
              ? void 0
              : n.length) > 0 && (o.tags = this.contactData.tags),
              r[this.sendType] &&
                (o.additionalText = `${this.$t("sendProcess." + this.sendType)} ${this.$t("sendProcess.unsuccess")}${s}`),
              ["Activate", "ActivateAutoclaim"].includes(this.sendType) &&
                (o.additionalText = `${this.$t("supportPopup.unsuccessActivation")}${s}`),
              this.$bus.$emit("openSupportPopup", o));
          },
        },
      };
    },
    2972: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "form-field" },
            [
              a(
                "div",
                {
                  staticClass: "input-wrap",
                  class: {
                    "past-click": t.isPasteByClick && "" === t.modelValue,
                  },
                },
                [
                  a("input", {
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
                  a("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.error,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  a(
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
                    ? a("div", {
                        staticClass: "icon-paste",
                        on: { click: t.pasteValueFromClipboard },
                      })
                    : t._e(),
                  t._v(" "),
                  t.isPasteByClick && "" !== t.modelValue
                    ? a(
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
                    ? a(
                        "div",
                        {
                          staticClass: "icon-edit",
                          on: { click: t.editInput },
                        },
                        [a("EditSvg")],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isShowPassword
                    ? a(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === t.inputType },
                          on: { click: t.toggleTypePassword },
                        },
                        [a("img", { attrs: { src: n(811) } })],
                      )
                    : t._e(),
                  t._v(" "),
                  t.ticker
                    ? a("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.ticker) + "\n    "),
                      ])
                    : t._e(),
                ],
              ),
              t._v(" "),
              a("transition", { attrs: { name: "slide-in" } }, [
                t.error
                  ? a("div", {
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
        i = [];
    },
    2973: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2821),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(2974),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    2974: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.isRateStars
            ? n("div", { staticClass: "rate-stars" }, [
                t._e(),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "rate-stars__wrap" },
                  t._l(5, function (e) {
                    return n(
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
                          click: function (n) {
                            t.isRate && t.rateApp(e);
                          },
                          mouseleave: function (e) {
                            t.isRate && t.disableHoverStart();
                          },
                          mouseover: function (n) {
                            t.isRate && t.hoverStart(e);
                          },
                        },
                      },
                      [n("RateStart")],
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
    3239: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "result",
              class: { error: t.isError, success: t.isSuccess && !t.isError },
            },
            [
              t.isSuccess && !t.isError
                ? a(
                    "div",
                    { staticClass: "info" },
                    [
                      "DOGE" !== t.coin.ticker
                        ? a("CoinIcon", { attrs: { wallet: t.coin } })
                        : a("img", {
                            staticClass: "doge",
                            class: t.icon,
                            attrs: { src: n(3240) },
                          }),
                      t._v(" "),
                      a("p", { staticClass: "text-green" }, [
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
                      a("p", {
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
                        ? a("p", { staticClass: "warning" }, [
                            t._v(
                              "\n      " + t._s(t.successMessage) + "\n    ",
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      a(
                        "a",
                        {
                          staticClass: "text-small no-hover",
                          on: {
                            click: function (e) {
                              return (
                                e.stopPropagation(),
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
                      a(
                        "a",
                        {
                          staticClass: "text-link-underline",
                          on: {
                            click: function (e) {
                              return (
                                e.stopPropagation(),
                                t.openTransactionHash.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [t._v("\n      " + t._s(t.txid) + "\n    ")],
                      ),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "button-center" },
                        [
                          a(
                            "button",
                            {
                              staticClass: "button copy",
                              on: {
                                click: function (e) {
                                  (e.stopPropagation(),
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
                          a("transition", { attrs: { name: "fade" } }, [
                            t.isCopiedToClipboard
                              ? a("div", { staticClass: "message" }, [
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
                      a(
                        "div",
                        { staticClass: "rate-result" },
                        [a("RateStars")],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              t.isError
                ? a(
                    "div",
                    { staticClass: "info" },
                    [
                      t.errorMessage
                        ? a(
                            "div",
                            { staticClass: "info-wrap error" },
                            [
                              a("CoinIcon", { attrs: { wallet: t.coin } }),
                              t._v(" "),
                              a("p", { staticClass: "info-text" }, [
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
                            a("CoinIcon", { attrs: { wallet: t.coin } }),
                            t._v(" "),
                            a("p", [
                              t._v(
                                "\n        " +
                                  t._s(t.errorHeadline) +
                                  "\n      ",
                              ),
                            ]),
                            t._v(" "),
                            a(
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
                                t._l(t.hints, function (e, n) {
                                  return a("li", { key: n }, [
                                    t._v(
                                      "\n          - " + t._s(e) + "\n        ",
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
                ? a(
                    "div",
                    { staticClass: "submit" },
                    [
                      a(
                        "BaseButton",
                        {
                          attrs: { type: "primary-desktop" },
                          on: {
                            click: function (e) {
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
                      ].every(function (e) {
                        return t.sendType !== e;
                      }) &&
                        "XRP" !== t.coin.ticker) ||
                      "Send" === t.sendType
                        ? a(
                            "BaseButton",
                            {
                              attrs: { type: "primary-desktop" },
                              on: {
                                click: function (e) {
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
                ? a("div", { staticClass: "submit failed" }, [
                    a(
                      "button",
                      {
                        staticClass: "button platinum hover-white",
                        on: {
                          click: function (e) {
                            return t.$emit("tryAgain");
                          },
                        },
                      },
                      [t._v("\n      " + t._s(t.$t("button.back")) + "\n    ")],
                    ),
                    t._v(" "),
                    a(
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
                ? a("div", { staticClass: "version" }, [
                    a("span", [
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
    3240: function (t, e, n) {
      t.exports = n.p + "imgs/doge--static.png";
    },
    3629: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(802)),
        s = a(n(2842)),
        r = a(n(2922));
      const o = {
        activate: "activate",
        password: "password",
        result: "result",
      };
      e.default = {
        name: "WrapperActivate",
        components: {
          CoinIcon: i.default,
          Edit: s.default,
          SendCoinResult: r.default,
        },
        props: {
          stage: {
            type: String,
            required: !0,
            validator(t) {
              return Object.keys(o).includes(t);
            },
          },
          headline: { type: String, default: "" },
          text: { type: String, default: "" },
          transaction: { type: Object, required: !0 },
          coin: { type: Object, required: !0 },
        },
        data() {
          return { password: { value: "", error: null } };
        },
        computed: {
          COMPONENT_TYPES() {
            return o;
          },
          currentComponent() {
            return this.COMPONENT_TYPES[this.stage];
          },
        },
        methods: {
          handleChangeComponent(t) {
            this.$emit("forceChangeComponent", t);
          },
          handleNavigate() {
            this.$emit("navigate");
          },
          async handleValidatePassword() {
            this.password.error = null;
            const t = this.password.value;
            ("" === t
              ? (this.password.error = this.$t("error.passwordCantBeBlank"))
              : (await this.$wallets.checkPassword(t)) ||
                (this.password.error = this.$t("error.wrongPassword")),
              null === this.password.error && this.$emit("confirmPassword"));
          },
        },
      };
    },
    4891: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(60),
        s = a(n(802)),
        r = a(n(4892)),
        o = n(375);
      e.default = {
        name: "ActivateCoin",
        components: { CoinIcon: s.default, WrapperActivate: r.default },
        mixins: [o.ActivateCoinMixin],
        computed: {
          ...(0, i.mapGetters)(["fiatRate"]),
          headline() {
            return `Activating ${this.coin.ticker.toUpperCase()} account`;
          },
          text() {
            return `Before staking, you need to activate your ${this.coin.ticker.toUpperCase()} account by making a zero transaction with a small fee. You can easily do this by clicking the "Send" button below.`;
          },
          activationAddress() {
            return this.coin.address;
          },
          transactionAdditionalInfo() {
            return {
              icon: this.icon,
              coin: this.coin,
              message: " staking",
              sendType: "Activate",
              contactData: { issue: "Staking" },
            };
          },
        },
        methods: {
          async setFee() {
            await this.handleSetFee(async () => {
              const t = await this.coin.getFee({
                gasLimit: this.coin.stakingGasLimit,
              });
              return t;
            });
          },
          async handleActivateCoin() {
            await this.handleActivate(async () => {
              const t = await this.coin.createApproveTransaction({}),
                e = await this.coin.sendTransaction(t);
              return e;
            });
          },
        },
      };
    },
    4892: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(3629),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var r = n(4893),
        o = n(5),
        c = !1,
        u = null,
        l = null,
        d = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, u, l, d);
      e["default"] = f.exports;
    },
    4893: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n(
                "AtomicPopup",
                {
                  staticClass: "activate-coin",
                  on: { close: t.handleNavigate },
                },
                [
                  n("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                    t.currentComponent === t.COMPONENT_TYPES.activate
                      ? n(
                          "div",
                          { staticClass: "activate-coin__activation" },
                          [
                            n(
                              "div",
                              { staticClass: "activate-coin__icon" },
                              [t._t("icon")],
                              2,
                            ),
                            t._v(" "),
                            n("div", { staticClass: "activate-coin__info" }, [
                              n(
                                "h2",
                                {
                                  staticClass:
                                    "activate-coin__info-title new-text-headline",
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.headline) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              n("p", {
                                directives: [
                                  {
                                    name: "text-html",
                                    rawName: "v-text-html",
                                    value: t.text,
                                    expression: "text",
                                  },
                                ],
                                staticClass:
                                  "activate-coin__info-description new-text-medium2",
                              }),
                            ]),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "activate-coin__rows" },
                              [t._t("form")],
                              2,
                            ),
                            t._v(" "),
                            n("transition", { attrs: { name: "slide-left" } }, [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "activate-coin__error new-text-red2 new-text-medium",
                                },
                                [t._t("error")],
                                2,
                              ),
                            ]),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "activate-coin__actions" },
                              [t._t("actions")],
                              2,
                            ),
                          ],
                          1,
                        )
                      : t.currentComponent === t.COMPONENT_TYPES.password
                        ? n(
                            "div",
                            { staticClass: "activate-coin__password" },
                            [
                              n("h2", { staticClass: "new-text-extra-large" }, [
                                t._v(t._s(t.$t("title.sendTransaction"))),
                              ]),
                              t._v(" "),
                              n("edit", {
                                attrs: {
                                  "model-value": t.password.value,
                                  type: "password",
                                  placeholder: t.$t("input.password"),
                                  focus: "",
                                  "is-show-password": "",
                                  error: t.password.error,
                                },
                                on: {
                                  enterPressed: t.handleValidatePassword,
                                  "update:modelValue": function (e) {
                                    t.password.value = e;
                                  },
                                },
                              }),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass: "activate-coin__password-submit",
                                },
                                [
                                  n(
                                    "button",
                                    {
                                      staticClass: "button normal hover-white",
                                      on: {
                                        click: function (e) {
                                          return t.handleChangeComponent(
                                            t.COMPONENT_TYPES.activate,
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.back")) +
                                          "\n          ",
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  n(
                                    "button",
                                    {
                                      staticClass: "button",
                                      on: { click: t.handleValidatePassword },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.confirm")) +
                                          "\n          ",
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t.currentComponent === t.COMPONENT_TYPES.result
                          ? n(
                              "div",
                              { staticClass: "activate-coin__result" },
                              [
                                t.transaction.isLoading
                                  ? n(
                                      "div",
                                      { staticClass: "activate-coin__loading" },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "activate-coin__loading-info",
                                          },
                                          [
                                            n("coin-icon", {
                                              attrs: { wallet: t.coin },
                                            }),
                                            t._v(" "),
                                            n(
                                              "h2",
                                              {
                                                staticClass:
                                                  "new-title-extra-extra-large",
                                              },
                                              [t._v("Sending")],
                                            ),
                                          ],
                                          1,
                                        ),
                                        t._v(" "),
                                        n("div", {
                                          staticClass:
                                            "activate-coin__loading-loader loading",
                                        }),
                                      ],
                                    )
                                  : n(
                                      "send-coin-result",
                                      t._b(
                                        {
                                          on: {
                                            tryAgain: function (e) {
                                              return t.handleChangeComponent(
                                                t.COMPONENT_TYPES.activate,
                                              );
                                            },
                                            backToWallets: t.handleNavigate,
                                          },
                                        },
                                        "send-coin-result",
                                        t.transaction,
                                        !1,
                                      ),
                                    ),
                              ],
                              1,
                            )
                          : t._e(),
                  ]),
                ],
                1,
              ),
            ],
            1,
          );
        },
        i = [];
    },
    6977: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("WrapperActivate", {
            attrs: {
              stage: t.currentStage,
              text: t.text,
              headline: t.headline,
              coin: t.coin,
              transaction: Object.assign(
                {},
                t.transaction,
                t.transactionAdditionalInfo,
                {
                  customSuccessfulMessage:
                    "Staking account is active. You can stake your " +
                    t.coin.ticker +
                    " now!",
                },
              ),
            },
            on: {
              forceChangeComponent: t.handleChangeStage,
              confirmPassword: t.handleActivateCoin,
              navigate: t.handleNavigate,
            },
            scopedSlots: t._u([
              {
                key: "icon",
                fn: function () {
                  return [a("CoinIcon", { attrs: { wallet: t.coin } })];
                },
                proxy: !0,
              },
              {
                key: "form",
                fn: function () {
                  return [
                    a(
                      "div",
                      {
                        staticClass:
                          "flex align-center activate-coin__rows-item",
                      },
                      [
                        a(
                          "div",
                          { staticClass: "new-text-medium new-text-gray" },
                          [t._v("Activation address")],
                        ),
                        t._v(" "),
                        a(
                          "div",
                          {
                            staticClass: "flex align-center",
                            staticStyle: { width: "100%" },
                          },
                          [
                            a(
                              "div",
                              {
                                staticClass: "new-text-medium",
                                staticStyle: { position: "relative" },
                              },
                              [
                                a(
                                  "span",
                                  {
                                    staticClass:
                                      "activate-coin__rows--activation-address",
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(t.activationAddress) +
                                        "\n          ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                a("transition", { attrs: { name: "fade" } }, [
                                  t.isCopiedToClipboard
                                    ? a("div", { staticClass: "message" }, [
                                        t._v(
                                          "\n              Address is copied to clipboard\n            ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                              ],
                              1,
                            ),
                            t._v(" "),
                            a("img", {
                              staticStyle: {
                                cursor: "pointer",
                                width: "24px",
                                height: "24px",
                                "margin-left": "auto",
                              },
                              attrs: { src: n(892) },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(),
                                    t.$copyToClipboard(t.activationAddress)
                                  );
                                },
                              },
                            }),
                          ],
                        ),
                      ],
                    ),
                    t._v(" "),
                    a(
                      "div",
                      {
                        staticClass:
                          "flex align-center activate-coin__rows-item",
                      },
                      [
                        a(
                          "div",
                          { staticClass: "new-text-medium new-text-gray" },
                          [t._v("Network fee")],
                        ),
                        t._v(" "),
                        a(
                          "div",
                          { staticClass: "new-text-medium flex align-center" },
                          [
                            a("span", [
                              t._v(
                                " " +
                                  t._s(t.fee) +
                                  " " +
                                  t._s(t.coin.feeTicker) +
                                  " ",
                              ),
                            ]),
                            t._v(" "),
                            a(
                              "span",
                              {
                                staticClass: "new-text-gray",
                                staticStyle: { "margin-left": "8px" },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.fiatFee) +
                                    " " +
                                    t._s(t.fiatRate) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ];
                },
                proxy: !0,
              },
              {
                key: "error",
                fn: function () {
                  return [
                    t.feeEnough
                      ? t._e()
                      : [
                          t._v(
                            "\n      " +
                              t._s(
                                t.$t("error.insufficientFundsToPayFee", {
                                  fee: t.fee,
                                  coin: t.coin.feeTicker,
                                }),
                              ) +
                              "\n    ",
                          ),
                        ],
                  ];
                },
                proxy: !0,
              },
              {
                key: "actions",
                fn: function () {
                  return [
                    a(
                      "BaseButton",
                      {
                        attrs: {
                          type: "primary-desktop",
                          disabled: !t.feeEnough,
                        },
                        on: {
                          click: function (e) {
                            t.feeEnough && t.handleChangeStage("password");
                          },
                        },
                      },
                      [t._v("\n      Send\n    ")],
                    ),
                    t._v(" "),
                    a(
                      "BaseButton",
                      {
                        attrs: { type: "secondary-desktop" },
                        on: { click: t.handleNavigate },
                      },
                      [t._v("\n      Back\n    ")],
                    ),
                  ];
                },
                proxy: !0,
              },
            ]),
          });
        },
        i = [];
    },
  },
]);
