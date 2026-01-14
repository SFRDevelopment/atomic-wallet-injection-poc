(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [301],
  {
    2743: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(5373),
        s = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(r);
      var d = a(8852),
        i = a(5),
        o = !1,
        l = null,
        c = null,
        p = null,
        v = Object(i["a"])(s.a, d["a"], d["b"], o, l, c, p);
      t["default"] = v.exports;
    },
    2820: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(a(817));
      t.default = {
        name: "Edit",
        components: { EditSvg: s.default },
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
            let e = this.type;
            return (
              this.isShowPassword &&
                (e = this.isTextTypePassword ? "text" : "password"),
              e
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
            const e = "password" === this.inputType ? "text" : "password";
            ((this.isTextTypePassword = !this.isTextTypePassword),
              this.$emit("changeTypeRepeatPassword", e));
          },
          enterPressed() {
            this.$emit("enter-pressed");
          },
          async pasteValueFromClipboard() {
            this.$emit("update:modelValue", await this.$pasteFromClipboard());
          },
          async pasteFromClipboardToInput() {
            if (this.isPasteByClick) {
              const e = await this.$pasteFromClipboard(),
                t = new RegExp(this.validationPattern).test(e);
              "" === this.modelValue && e && t
                ? await this.pasteValueFromClipboard()
                : "" === this.modelValue && this.$refs.input.blur();
            }
          },
          keypressHandler(e) {
            let t = null;
            if (
              (this.isShowPassword &&
                (t = new RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\ )\(+=._-]+$/g)),
              this.specialCharacters ||
                (t = new RegExp(this.specialCharactersPattern)),
              t)
            ) {
              const a = !t.test(e.key);
              a && e.preventDefault();
            }
          },
          onInput(e) {
            let { value: t } = e.target;
            const a = new RegExp(this.validationPattern).test(t);
            (this.isFixedNumber && (t = String(t).replace(/[^0-9]+/g, "")),
              a
                ? ((this.$refs.input.value = t),
                  this.$emit("update:modelValue", t))
                : (this.$refs.input.value = this.modelValue));
          },
          setFocus() {
            this.$refs.input.focus();
          },
          onKeyUp() {
            const e = 500;
            (this.$emit("keyup"),
              clearTimeout(this.typetimer),
              (this.typetimer = setTimeout(() => {
                this.$emit("typed");
              }, e)));
          },
          putAllAvailableBalance() {
            (this.onKeyUp(), this.$emit("setAllAvailableBalance"));
          },
        },
      };
    },
    2842: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2820),
        s = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(r);
      var d = a(2972),
        i = a(5),
        o = !1,
        l = null,
        c = null,
        p = null,
        v = Object(i["a"])(s.a, d["a"], d["b"], o, l, c, p);
      t["default"] = v.exports;
    },
    2972: function (e, t, a) {
      "use strict";
      (a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return s;
        }));
      var n = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "form-field" },
            [
              n(
                "div",
                {
                  staticClass: "input-wrap",
                  class: {
                    "past-click": e.isPasteByClick && "" === e.modelValue,
                  },
                },
                [
                  n("input", {
                    ref: "input",
                    attrs: { readonly: e.readonly, type: e.inputType },
                    domProps: { value: e.modelValue },
                    on: {
                      blur: e.onBlur,
                      click: e.pasteFromClipboardToInput,
                      focus: function (t) {
                        return e.$emit("focus");
                      },
                      input: e.onInput,
                      keypress: e.keypressHandler,
                      keyup: [
                        e.onKeyUp,
                        function (t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : (t.preventDefault(),
                              t.stopPropagation(),
                              e.enterPressed.apply(null, arguments));
                        },
                      ],
                    },
                  }),
                  e._v(" "),
                  n("div", {
                    staticClass: "line",
                    class: {
                      "line-error": e.error,
                      "line-true": !e.error && e.modelValue,
                    },
                  }),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass: "placeholder",
                      class: { "is-up": e.modelValue },
                    },
                    [
                      e._v(
                        "\n      " +
                          e._s(
                            e.isPasteByClick && e.isEditPlaceholder
                              ? e.editPlaceholder
                              : e.placeholder,
                          ) +
                          "\n    ",
                      ),
                    ],
                  ),
                  e._v(" "),
                  e.isPasteFromClipboard
                    ? n("div", {
                        staticClass: "icon-paste",
                        on: { click: e.pasteValueFromClipboard },
                      })
                    : e._e(),
                  e._v(" "),
                  e.isPasteByClick && "" !== e.modelValue
                    ? n(
                        "div",
                        {
                          staticClass: "icon-delete",
                          on: { click: e.cleanInput },
                        },
                        [e._v("\n      ✕\n    ")],
                      )
                    : e._e(),
                  e._v(" "),
                  e.isPasteByClick && "" === e.modelValue
                    ? n(
                        "div",
                        {
                          staticClass: "icon-edit",
                          on: { click: e.editInput },
                        },
                        [n("EditSvg")],
                        1,
                      )
                    : e._e(),
                  e._v(" "),
                  e.isShowPassword
                    ? n(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === e.inputType },
                          on: { click: e.toggleTypePassword },
                        },
                        [n("img", { attrs: { src: a(811) } })],
                      )
                    : e._e(),
                  e._v(" "),
                  e.ticker
                    ? n("div", { staticClass: "ticker" }, [
                        e._v("\n      " + e._s(e.ticker) + "\n    "),
                      ])
                    : e._e(),
                ],
              ),
              e._v(" "),
              n("transition", { attrs: { name: "slide-in" } }, [
                e.error
                  ? n("div", {
                      directives: [
                        {
                          name: "text-html",
                          rawName: "v-text-html",
                          value: e.error,
                          expression: "error",
                        },
                      ],
                      staticClass: "error",
                    })
                  : e._e(),
              ]),
              e._v(" "),
              e._t("default"),
            ],
            2,
          );
        },
        s = [];
    },
    3339: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(a(4498));
      t.default = {
        name: "PasswordStrength",
        components: { AHintHelper: () => a.e(380).then(a.bind(null, 5746)) },
        props: { password: { type: String, required: !0 } },
        data() {
          return { showPasswordTip: !1 };
        },
        computed: {
          complexity() {
            return this.password ? (0, s.default)(this.password).value : "";
          },
          complexityText() {
            return this.complexity
              ? this.$t("passwordStrength." + this.complexity)
              : "";
          },
          complexityClasses() {
            return "password-complexity__checker--" + this.complexity;
          },
        },
      };
    },
    4495: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(3339),
        s = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(r);
      var d = a(4499),
        i = a(5);
      function o(e) {
        a(4496);
      }
      var l = !1,
        c = o,
        p = "data-v-b5c4de70",
        v = null,
        f = Object(i["a"])(s.a, d["a"], d["b"], l, c, p, v);
      t["default"] = f.exports;
    },
    4496: function (e, t, a) {
      var n = a(4497);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals));
      var s = a(23).default;
      s("7c30d886", n, !0, {});
    },
    4497: function (e, t, a) {
      ((t = e.exports = a(22)(!1)),
        t.push([
          e.i,
          "\n@keyframes spinner-data-v-b5c4de70{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-b5c4de70{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-b5c4de70{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-b5c4de70{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-b5c4de70{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-b5c4de70{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-b5c4de70{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-b5c4de70{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-b5c4de70{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-b5c4de70{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-b5c4de70{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-b5c4de70]{color:#6b963b\n}\n.text-red[data-v-b5c4de70]{color:#c03647\n}\n.text-gray[data-v-b5c4de70]{color:#8290ad\n}\n.text-blue[data-v-b5c4de70]{color:#00c2ff\n}\n.text-danger[data-v-b5c4de70]{color:#8c4545\n}\n.text-title[data-v-b5c4de70]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-b5c4de70]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-b5c4de70]{color:#f1b70b\n}\n.text-white[data-v-b5c4de70]{color:#fff\n}\n.text-bigger[data-v-b5c4de70]{font-size:18px;font-weight:500\n}\n.text-big[data-v-b5c4de70]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-b5c4de70]{font-size:14px\n}\n.text-middle-height[data-v-b5c4de70]{line-height:24px\n}\n.text-small[data-v-b5c4de70]{font-size:12px\n}\n.text-word-break[data-v-b5c4de70]{word-break:break-all\n}\n.text-right[data-v-b5c4de70]{text-align:right\n}\n.text-left[data-v-b5c4de70]{text-align:left\n}\n.text-line-middle[data-v-b5c4de70]{line-height:24px\n}\n.text-link[data-v-b5c4de70],.text-link-underline[data-v-b5c4de70]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-b5c4de70]:hover,.text-link-underline[data-v-b5c4de70]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-b5c4de70]{text-decoration:underline\n}\n.text-center[data-v-b5c4de70]{text-align:center\n}\n.text-pointer[data-v-b5c4de70]{cursor:pointer\n}\n.gap-10[data-v-b5c4de70]{gap:10px\n}\n.m-t-auto[data-v-b5c4de70]{margin-top:auto\n}\n.m-t-4[data-v-b5c4de70]{margin-top:4px\n}\n.m-t-5[data-v-b5c4de70]{margin-top:5px\n}\n.m-t-8[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-10[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-13[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-15[data-v-b5c4de70]{margin-top:15px\n}\n.m-t-16[data-v-b5c4de70]{margin-top:16px\n}\n.m-t-20[data-v-b5c4de70]{margin-top:20px\n}\n.m-t-24[data-v-b5c4de70]{margin-top:24px\n}\n.m-t-25[data-v-b5c4de70]{margin-top:25px\n}\n.m-t-26[data-v-b5c4de70]{margin-top:26px\n}\n.m-t-30[data-v-b5c4de70]{margin-top:30px\n}\n.m-t-35[data-v-b5c4de70]{margin-top:35px\n}\n.m-t-40[data-v-b5c4de70]{margin-top:40px\n}\n.m-t-45[data-v-b5c4de70]{margin-top:45px\n}\n.m-t-50[data-v-b5c4de70]{margin-top:50px\n}\n.m-t-60[data-v-b5c4de70]{margin-top:60px\n}\n.m-t-65[data-v-b5c4de70]{margin-top:65px\n}\n.m-t-80[data-v-b5c4de70]{margin-top:80px\n}\n.m-l-5[data-v-b5c4de70]{margin-left:5px\n}\n.m-l-10[data-v-b5c4de70]{margin-left:10px\n}\n.m-l-15[data-v-b5c4de70]{margin-left:15px\n}\n.m-l-20[data-v-b5c4de70]{margin-left:20px\n}\n.m-l-25[data-v-b5c4de70]{margin-left:25px\n}\n.m-l-30[data-v-b5c4de70]{margin-left:30px\n}\n.m-l-35[data-v-b5c4de70]{margin-left:35px\n}\n.m-r-5[data-v-b5c4de70]{margin-right:5px\n}\n.m-r-10[data-v-b5c4de70]{margin-right:10px\n}\n.m-r-15[data-v-b5c4de70]{margin-right:15px\n}\n.m-r-30[data-v-b5c4de70]{margin-right:30px\n}\n.m-b-5[data-v-b5c4de70]{margin-bottom:5px !important\n}\n.m-b-15[data-v-b5c4de70]{margin-bottom:15px !important\n}\n.m-b-20[data-v-b5c4de70]{margin-bottom:20px !important\n}\n.m-b-30[data-v-b5c4de70]{margin-bottom:30px !important\n}\n.m-b-25[data-v-b5c4de70]{margin-bottom:25px !important\n}\n.m-b-50[data-v-b5c4de70]{margin-bottom:50px !important\n}\n.p-t-40[data-v-b5c4de70]{padding-top:40px\n}\n.p-t-85[data-v-b5c4de70]{padding-top:85px !important\n}\n.hidden[data-v-b5c4de70]{opacity:0 !important\n}\n.relative[data-v-b5c4de70]{position:relative\n}\n.space-nowrap[data-v-b5c4de70]{white-space:nowrap\n}\n.uppercase[data-v-b5c4de70]{text-transform:uppercase\n}\n.lowercase[data-v-b5c4de70]{text-transform:lowercase\n}\n.fade-enter-active[data-v-b5c4de70]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-b5c4de70]{transition:all .1s ease-out\n}\n.fade-enter[data-v-b5c4de70],.fade-leave-to[data-v-b5c4de70]{opacity:0\n}\n.fade-down-enter-active[data-v-b5c4de70],.fade-down-leave-active[data-v-b5c4de70],.fade-down-move[data-v-b5c4de70]{transition:all .15s\n}\n.fade-down-leave-active[data-v-b5c4de70],.fade-down-enter-active[data-v-b5c4de70]{position:absolute !important\n}\n.fade-down-enter[data-v-b5c4de70],.fade-down-leave-to[data-v-b5c4de70]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-b5c4de70],.scale-leave-active[data-v-b5c4de70],.scale-move[data-v-b5c4de70]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-b5c4de70],.scale-leave-to[data-v-b5c4de70]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-b5c4de70],.slide-leave-active[data-v-b5c4de70]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-b5c4de70]{transition:all .2s ease\n}\n.slide-leave-active[data-v-b5c4de70]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-b5c4de70],.slide-leave-to[data-v-b5c4de70]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-b5c4de70],.slide-leave[data-v-b5c4de70]{margin-bottom:0px\n}\n.slide-enter[data-v-b5c4de70],.slide-leave-to[data-v-b5c4de70]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-b5c4de70],.slide-in-leave-active[data-v-b5c4de70]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-b5c4de70]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-b5c4de70]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-b5c4de70]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-b5c4de70]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-b5c4de70],.page-fade-enter-active[data-v-b5c4de70]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-b5c4de70],.page-fade-leave-to[data-v-b5c4de70],.page-fade-enter[data-v-b5c4de70]{opacity:0\n}\n.page-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.fade-out-leave-active[data-v-b5c4de70],.fade-out-enter-active[data-v-b5c4de70]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-b5c4de70],.fade-out-leave-to[data-v-b5c4de70],.fade-out-enter[data-v-b5c4de70]{opacity:0\n}\n.fade-out-enter-to[data-v-b5c4de70]{opacity:1\n}\n.slide-down-enter-active[data-v-b5c4de70],.slide-down-leave-active[data-v-b5c4de70]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-b5c4de70],.slide-down-enter[data-v-b5c4de70]{top:100%\n}\n.slide-down-leave[data-v-b5c4de70],.slide-down-enter-to[data-v-b5c4de70]{top:0%\n}\n.slide-out-enter-active[data-v-b5c4de70],.slide-out-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-b5c4de70],.exchange-result.slide-out-enter[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-b5c4de70],.exchange-pending.slide-out-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-b5c4de70],.slide-left-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-b5c4de70],.slide-right-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-b5c4de70],.spin-down-leave-active[data-v-b5c4de70]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-b5c4de70]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-b5c4de70]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-b5c4de70]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-b5c4de70],.spin-up-leave-active[data-v-b5c4de70]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-b5c4de70]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-b5c4de70]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-b5c4de70]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-b5c4de70],.puff-out-leave-active[data-v-b5c4de70]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-b5c4de70]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-b5c4de70]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-b5c4de70],.puff-out-enter-to[data-v-b5c4de70]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-b5c4de70],.collapse-fade-enter-active[data-v-b5c4de70]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-b5c4de70],.collapse-fade-leave-to[data-v-b5c4de70],.collapse-fade-enter[data-v-b5c4de70]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.lazy-fade-leave-active[data-v-b5c4de70],.lazy-fade-enter-active[data-v-b5c4de70]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-b5c4de70],.lazy-fade-leave-to[data-v-b5c4de70],.lazy-fade-enter[data-v-b5c4de70]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.password-complexity[data-v-b5c4de70]{margin-top:8px;display:flex;align-items:center;gap:4px;position:relative\n}\n.password-complexity__checker>span[data-v-b5c4de70]{font-size:14px\n}\n.password-complexity__checker--Weak[data-v-b5c4de70]{color:#f75555\n}\n.password-complexity__checker--Medium[data-v-b5c4de70]{color:#f5922f\n}\n.password-complexity__checker--Strong[data-v-b5c4de70]{color:#16c784\n}\n.password-complexity__icon[data-v-b5c4de70]{display:flex;align-items:center;cursor:pointer\n}",
          "",
        ]));
    },
    4498: function (e, t, a) {
      "use strict";
      a.r(t);
      const n = [
          { id: 0, value: "Weak", minDiversity: 1, minLength: 0 },
          { id: 1, value: "Medium", minDiversity: 3, minLength: 8 },
          { id: 2, value: "Strong", minDiversity: 4, minLength: 10 },
        ],
        s = [
          { regex: /[a-z]/, message: "lowercase" },
          { regex: /[A-Z]/, message: "uppercase" },
          { regex: /\d/, message: "number" },
          {
            regex: /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~ ]/,
            message: "symbol",
          },
        ];
      t["default"] = (e) => {
        const t = {
            contains: s
              .filter(({ regex: t }) => t.test(e))
              .map(({ message: e }) => e),
            length: e.length,
            value: "",
          },
          a = n
            .filter(({ minDiversity: e }) => t.contains.length >= e)
            .filter(({ minLength: e }) => t.length >= e)
            .sort((e, t) => t.id - e.id)
            .map(({ id: e, value: t }) => ({ id: e, value: t }));
        return ((t.value = a[0].value), t);
      };
    },
    4499: function (e, t, a) {
      "use strict";
      (a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return s;
        }));
      var n = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "password-complexity" },
            [
              e.showPasswordTip
                ? n(
                    "AHintHelper",
                    {
                      on: {
                        close: function (t) {
                          e.showPasswordTip = !1;
                        },
                      },
                    },
                    [
                      e._v(
                        "\n    " +
                          e._s(e.$t("label.createPasswordHint")) +
                          "\n  ",
                      ),
                    ],
                  )
                : e._e(),
              e._v(" "),
              n("div", { staticClass: "password-complexity__checker" }, [
                n("span", { staticClass: "text-gray" }, [
                  e._v(" " + e._s(e.$t("label.passwordStrength")) + ": "),
                ]),
                e._v(" "),
                e.password && e.complexity
                  ? n("span", { class: e.complexityClasses }, [
                      e._v("\n      " + e._s(e.complexityText) + "\n    "),
                    ])
                  : e._e(),
              ]),
              e._v(" "),
              n(
                "div",
                {
                  staticClass: "password-complexity__icon",
                  on: {
                    click: function (t) {
                      (t.stopPropagation(),
                        (e.showPasswordTip = !e.showPasswordTip));
                    },
                  },
                },
                [
                  n("img", {
                    attrs: { src: a(848), width: "14", height: "14" },
                  }),
                ],
              ),
            ],
            1,
          );
        },
        s = [];
    },
    5373: function (e, t, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(a(2842)),
        r = n(a(4495));
      const d = 5e3;
      t.default = {
        name: "SecurityTab",
        components: { Edit: s.default, PasswordStrength: r.default },
        data: () => ({
          oldPassword: "",
          newPassword: "",
          repeatNewPassword: "",
          newPasswordError: "",
          repeatNewPasswordError: "",
          oldPasswordError: "",
          passwordWasSuccessfullyChanged: !1,
          btnDisabled: !1,
          repeatPasswordType: "password",
        }),
        watch: {
          oldPassword() {
            this.btnDisabled = !1;
          },
          newPassword() {
            ((this.btnDisabled = !1),
              this.newPassword.length && this.checkNewPassword());
          },
          repeatNewPassword() {
            this.btnDisabled = !1;
          },
        },
        methods: {
          changeTypeRepeatPassword(e) {
            this.repeatPasswordType = e;
          },
          checkNewPassword() {
            return (
              (this.newPasswordError = ""),
              "" === this.newPassword &&
                ((this.newPasswordError = this.$t("error.enterNewPassword")),
                this.$refs.newPasswordRef.setFocus()),
              "" === this.newPasswordError
            );
          },
          changeOldPassword() {
            return (
              (this.oldPasswordError = ""),
              (this.repeatNewPasswordError = ""),
              "" === this.oldPassword
                ? ((this.oldPasswordError = this.$t("error.enterNewPassword")),
                  this.$refs.oldPasswordRef.setFocus(),
                  !1)
                : !!this.checkNewPassword() &&
                  (this.newPassword !== this.repeatNewPassword
                    ? ((this.repeatNewPasswordError = this.$t(
                        "error.passwordMismatch",
                      )),
                      this.$refs.repeatNewPasswordRef.setFocus(),
                      !1)
                    : void (
                        this.btnDisabled ||
                        ((this.btnDisabled = !0),
                        this.$wallets
                          .changePassword(this.oldPassword, this.newPassword)
                          .then(() => {
                            ((this.btnDisabled = !1),
                              (this.oldPassword = ""),
                              (this.newPassword = ""),
                              (this.repeatNewPassword = ""),
                              (this.oldPasswordError = ""),
                              (this.newPasswordError = ""),
                              (this.repeatNewPasswordError = ""),
                              (this.passwordWasSuccessfullyChanged = !0),
                              setTimeout(() => {
                                this.passwordWasSuccessfullyChanged = !1;
                              }, d));
                          })
                          .catch((e) => {
                            ((this.oldPasswordError =
                              null === e || void 0 === e ? void 0 : e.message),
                              (this.btnDisabled = !1));
                          }))
                      ))
            );
          },
        },
      };
    },
    8852: function (e, t, a) {
      "use strict";
      (a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return s;
        }));
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "tab-wrap security" }, [
            a("div", { staticClass: "text" }, [
              e._v(
                "\n    " +
                  e._s(e.$t("settingsPage.securityTab.changePasswordHint")) +
                  "\n  ",
              ),
            ]),
            e._v(" "),
            a(
              "div",
              { staticClass: "inputs" },
              [
                a("Edit", {
                  ref: "oldPasswordRef",
                  attrs: {
                    modelValue: e.oldPassword,
                    error: e.oldPasswordError,
                    focus: "",
                    isShowPassword: "",
                    placeholder: e.$t("input.oldPassword"),
                    type: "password",
                    "data-test-id": "old_password",
                  },
                  on: {
                    changeTypeRepeatPassword: e.changeTypeRepeatPassword,
                    "enter-pressed": e.changeOldPassword,
                    "update:modelValue": function (t) {
                      e.oldPassword = t;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "Edit",
                  {
                    ref: "newPasswordRef",
                    attrs: {
                      modelValue: e.newPassword,
                      error: e.newPasswordError,
                      type: e.repeatPasswordType,
                      placeholder: e.$t("input.newPassword"),
                      "data-test-id": "new_password",
                    },
                    on: {
                      "enter-pressed": e.changeOldPassword,
                      "update:modelValue": function (t) {
                        e.newPassword = t;
                      },
                    },
                  },
                  [
                    e.newPasswordError.length
                      ? a("div", { staticStyle: { height: "24.5px" } })
                      : a("PasswordStrength", {
                          attrs: { password: e.newPassword },
                        }),
                  ],
                  1,
                ),
                e._v(" "),
                a("Edit", {
                  ref: "repeatNewPasswordRef",
                  attrs: {
                    modelValue: e.repeatNewPassword,
                    error: e.repeatNewPasswordError,
                    type: e.repeatPasswordType,
                    placeholder: e.$t("input.repeatNewPassword"),
                    "data-test-id": "repeat_new_password",
                  },
                  on: {
                    "enter-pressed": e.changeOldPassword,
                    "update:modelValue": function (t) {
                      e.repeatNewPassword = t;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "button",
                  {
                    staticClass: "button",
                    attrs: { "data-test-id": "change_password_button" },
                    on: {
                      click: function (t) {
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          e.changeOldPassword.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    e._v(
                      "\n      " +
                        e._s(e.$t("button.changePassword")) +
                        "\n    ",
                    ),
                  ],
                ),
                e._v(" "),
                a("transition", { attrs: { mode: "out-in", name: "fade" } }, [
                  e.passwordWasSuccessfullyChanged
                    ? a("div", { staticClass: "message" }, [
                        e._v(
                          "\n        " +
                            e._s(e.$t("label.passwordChanged")) +
                            "\n      ",
                        ),
                      ])
                    : e._e(),
                ]),
              ],
              1,
            ),
          ]);
        },
        s = [];
    },
  },
]);
