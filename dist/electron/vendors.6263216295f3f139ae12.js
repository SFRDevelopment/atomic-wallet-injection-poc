(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [260, 381],
  {
    2733: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5291),
        r = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(8442),
        i = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        v = Object(i["a"])(r.a, o["a"], o["b"], d, l, c, p);
      e["default"] = v.exports;
    },
    2820: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = n(a(817));
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
    2842: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2820),
        r = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2972),
        i = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        v = Object(i["a"])(r.a, o["a"], o["b"], d, l, c, p);
      e["default"] = v.exports;
    },
    2957: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
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
    2972: function (t, e, a) {
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
          return n(
            "div",
            { staticClass: "form-field" },
            [
              n(
                "div",
                {
                  staticClass: "input-wrap",
                  class: {
                    "past-click": t.isPasteByClick && "" === t.modelValue,
                  },
                },
                [
                  n("input", {
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
                  n("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.error,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  n(
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
                    ? n("div", {
                        staticClass: "icon-paste",
                        on: { click: t.pasteValueFromClipboard },
                      })
                    : t._e(),
                  t._v(" "),
                  t.isPasteByClick && "" !== t.modelValue
                    ? n(
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
                    ? n(
                        "div",
                        {
                          staticClass: "icon-edit",
                          on: { click: t.editInput },
                        },
                        [n("EditSvg")],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isShowPassword
                    ? n(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === t.inputType },
                          on: { click: t.toggleTypePassword },
                        },
                        [n("img", { attrs: { src: a(811) } })],
                      )
                    : t._e(),
                  t._v(" "),
                  t.ticker
                    ? n("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.ticker) + "\n    "),
                      ])
                    : t._e(),
                ],
              ),
              t._v(" "),
              n("transition", { attrs: { name: "slide-in" } }, [
                t.error
                  ? n("div", {
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
    3335: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2957),
        r = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(3338),
        i = a(5);
      function d(t) {
        a(3336);
      }
      var l = !1,
        c = d,
        p = "data-v-622b8c47",
        v = null,
        m = Object(i["a"])(r.a, o["a"], o["b"], l, c, p, v);
      e["default"] = m.exports;
    },
    3336: function (t, e, a) {
      var n = a(3337);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = a(23).default;
      r("7ee78446", n, !0, {});
    },
    3337: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          '\n@keyframes spinner-data-v-622b8c47{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-622b8c47{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-622b8c47{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-622b8c47]{color:#6b963b\n}\n.text-red[data-v-622b8c47]{color:#c03647\n}\n.text-gray[data-v-622b8c47]{color:#8290ad\n}\n.text-blue[data-v-622b8c47]{color:#00c2ff\n}\n.text-danger[data-v-622b8c47]{color:#8c4545\n}\n.text-title[data-v-622b8c47]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-622b8c47]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-622b8c47]{color:#f1b70b\n}\n.text-white[data-v-622b8c47]{color:#fff\n}\n.text-bigger[data-v-622b8c47]{font-size:18px;font-weight:500\n}\n.text-big[data-v-622b8c47]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-622b8c47]{font-size:14px\n}\n.text-middle-height[data-v-622b8c47]{line-height:24px\n}\n.text-small[data-v-622b8c47]{font-size:12px\n}\n.text-word-break[data-v-622b8c47]{word-break:break-all\n}\n.text-right[data-v-622b8c47]{text-align:right\n}\n.text-left[data-v-622b8c47]{text-align:left\n}\n.text-line-middle[data-v-622b8c47]{line-height:24px\n}\n.text-link[data-v-622b8c47],.text-link-underline[data-v-622b8c47]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-622b8c47]:hover,.text-link-underline[data-v-622b8c47]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-622b8c47]{text-decoration:underline\n}\n.text-center[data-v-622b8c47]{text-align:center\n}\n.text-pointer[data-v-622b8c47]{cursor:pointer\n}\n.gap-10[data-v-622b8c47]{gap:10px\n}\n.m-t-auto[data-v-622b8c47]{margin-top:auto\n}\n.m-t-4[data-v-622b8c47]{margin-top:4px\n}\n.m-t-5[data-v-622b8c47]{margin-top:5px\n}\n.m-t-8[data-v-622b8c47]{margin-top:10px\n}\n.m-t-10[data-v-622b8c47]{margin-top:10px\n}\n.m-t-13[data-v-622b8c47]{margin-top:10px\n}\n.m-t-15[data-v-622b8c47]{margin-top:15px\n}\n.m-t-16[data-v-622b8c47]{margin-top:16px\n}\n.m-t-20[data-v-622b8c47]{margin-top:20px\n}\n.m-t-24[data-v-622b8c47]{margin-top:24px\n}\n.m-t-25[data-v-622b8c47]{margin-top:25px\n}\n.m-t-26[data-v-622b8c47]{margin-top:26px\n}\n.m-t-30[data-v-622b8c47]{margin-top:30px\n}\n.m-t-35[data-v-622b8c47]{margin-top:35px\n}\n.m-t-40[data-v-622b8c47]{margin-top:40px\n}\n.m-t-45[data-v-622b8c47]{margin-top:45px\n}\n.m-t-50[data-v-622b8c47]{margin-top:50px\n}\n.m-t-60[data-v-622b8c47]{margin-top:60px\n}\n.m-t-65[data-v-622b8c47]{margin-top:65px\n}\n.m-t-80[data-v-622b8c47]{margin-top:80px\n}\n.m-l-5[data-v-622b8c47]{margin-left:5px\n}\n.m-l-10[data-v-622b8c47]{margin-left:10px\n}\n.m-l-15[data-v-622b8c47]{margin-left:15px\n}\n.m-l-20[data-v-622b8c47]{margin-left:20px\n}\n.m-l-25[data-v-622b8c47]{margin-left:25px\n}\n.m-l-30[data-v-622b8c47]{margin-left:30px\n}\n.m-l-35[data-v-622b8c47]{margin-left:35px\n}\n.m-r-5[data-v-622b8c47]{margin-right:5px\n}\n.m-r-10[data-v-622b8c47]{margin-right:10px\n}\n.m-r-15[data-v-622b8c47]{margin-right:15px\n}\n.m-r-30[data-v-622b8c47]{margin-right:30px\n}\n.m-b-5[data-v-622b8c47]{margin-bottom:5px !important\n}\n.m-b-15[data-v-622b8c47]{margin-bottom:15px !important\n}\n.m-b-20[data-v-622b8c47]{margin-bottom:20px !important\n}\n.m-b-30[data-v-622b8c47]{margin-bottom:30px !important\n}\n.m-b-25[data-v-622b8c47]{margin-bottom:25px !important\n}\n.m-b-50[data-v-622b8c47]{margin-bottom:50px !important\n}\n.p-t-40[data-v-622b8c47]{padding-top:40px\n}\n.p-t-85[data-v-622b8c47]{padding-top:85px !important\n}\n.hidden[data-v-622b8c47]{opacity:0 !important\n}\n.relative[data-v-622b8c47]{position:relative\n}\n.space-nowrap[data-v-622b8c47]{white-space:nowrap\n}\n.uppercase[data-v-622b8c47]{text-transform:uppercase\n}\n.lowercase[data-v-622b8c47]{text-transform:lowercase\n}\n.fade-enter-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-enter[data-v-622b8c47],.fade-leave-to[data-v-622b8c47]{opacity:0\n}\n.fade-down-enter-active[data-v-622b8c47],.fade-down-leave-active[data-v-622b8c47],.fade-down-move[data-v-622b8c47]{transition:all .15s\n}\n.fade-down-leave-active[data-v-622b8c47],.fade-down-enter-active[data-v-622b8c47]{position:absolute !important\n}\n.fade-down-enter[data-v-622b8c47],.fade-down-leave-to[data-v-622b8c47]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-622b8c47],.scale-leave-active[data-v-622b8c47],.scale-move[data-v-622b8c47]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-622b8c47],.scale-leave-to[data-v-622b8c47]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-622b8c47],.slide-leave-active[data-v-622b8c47]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-622b8c47]{transition:all .2s ease\n}\n.slide-leave-active[data-v-622b8c47]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-622b8c47],.slide-leave[data-v-622b8c47]{margin-bottom:0px\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-622b8c47],.slide-in-leave-active[data-v-622b8c47]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-622b8c47]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-622b8c47]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-622b8c47],.page-fade-enter-active[data-v-622b8c47]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-622b8c47],.page-fade-leave-to[data-v-622b8c47],.page-fade-enter[data-v-622b8c47]{opacity:0\n}\n.page-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.fade-out-leave-active[data-v-622b8c47],.fade-out-enter-active[data-v-622b8c47]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-622b8c47],.fade-out-leave-to[data-v-622b8c47],.fade-out-enter[data-v-622b8c47]{opacity:0\n}\n.fade-out-enter-to[data-v-622b8c47]{opacity:1\n}\n.slide-down-enter-active[data-v-622b8c47],.slide-down-leave-active[data-v-622b8c47]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-622b8c47],.slide-down-enter[data-v-622b8c47]{top:100%\n}\n.slide-down-leave[data-v-622b8c47],.slide-down-enter-to[data-v-622b8c47]{top:0%\n}\n.slide-out-enter-active[data-v-622b8c47],.slide-out-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-622b8c47],.exchange-result.slide-out-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-622b8c47],.exchange-pending.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-622b8c47],.slide-left-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-622b8c47],.slide-right-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-622b8c47],.spin-down-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-622b8c47],.spin-up-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-622b8c47],.puff-out-leave-active[data-v-622b8c47]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-622b8c47]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-622b8c47]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-622b8c47],.puff-out-enter-to[data-v-622b8c47]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-622b8c47],.collapse-fade-enter-active[data-v-622b8c47]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-622b8c47],.collapse-fade-leave-to[data-v-622b8c47],.collapse-fade-enter[data-v-622b8c47]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.lazy-fade-leave-active[data-v-622b8c47],.lazy-fade-enter-active[data-v-622b8c47]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-622b8c47],.lazy-fade-leave-to[data-v-622b8c47],.lazy-fade-enter[data-v-622b8c47]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.atomic__checkbox[data-v-622b8c47]{position:relative;display:inline-block;color:#fff;cursor:pointer;font-size:14px;line-height:19px\n}\n.atomic__checkbox-error[data-v-622b8c47]{z-index:-1;border:solid 2px #f75555;border-radius:6px;width:28px;height:28px;position:absolute;left:-2px;top:-2px\n}\n.atomic__checkbox_m>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_m:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_m>span[data-v-622b8c47],.atomic__checkbox_m>span *[data-v-622b8c47]{font-weight:400;font-size:14px;line-height:18px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 2px #8290ad;border-radius:4px;width:20px;height:20px;vertical-align:-8px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:3px;left:3px;width:5px;height:10px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}\n.atomic__checkbox_s>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_s:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_s>span[data-v-622b8c47]{display:flex;align-items:center\n}\n.atomic__checkbox_s>span[data-v-622b8c47],.atomic__checkbox_s>span *[data-v-622b8c47]{font-family:Roboto;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 1px #8290ad;border-radius:4px;width:18px;height:18px;vertical-align:-8px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:4px;left:2px;width:4px;height:8px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}',
          "",
        ]));
    },
    3338: function (t, e, a) {
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
            "label",
            { class: ["atomic__checkbox", "atomic__checkbox_" + t.size] },
            [
              a("input", {
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
                  change: function (e) {
                    var a = t.proxyValue,
                      n = e.target,
                      r = !!n.checked;
                    if (Array.isArray(a)) {
                      var s = null,
                        o = t._i(a, s);
                      n.checked
                        ? o < 0 && (t.proxyValue = a.concat([s]))
                        : o > -1 &&
                          (t.proxyValue = a.slice(0, o).concat(a.slice(o + 1)));
                    } else t.proxyValue = r;
                  },
                },
              }),
              t._v(" "),
              t.isError
                ? a("div", { staticClass: "atomic__checkbox-error" })
                : t._e(),
              t._v(" "),
              a(
                "span",
                { staticClass: "atomic__checkbox-input" },
                [t._t("default")],
                2,
              ),
            ],
          );
        },
        r = [];
    },
    3339: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = n(a(4498));
      e.default = {
        name: "PasswordStrength",
        components: { AHintHelper: () => a.e(380).then(a.bind(null, 5746)) },
        props: { password: { type: String, required: !0 } },
        data() {
          return { showPasswordTip: !1 };
        },
        computed: {
          complexity() {
            return this.password ? (0, r.default)(this.password).value : "";
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
    3793: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(68),
        s = a(60),
        o = n(a(3335)),
        i = n(a(4495)),
        d = a(5293),
        l = a(833),
        c = a(233);
      e.default = {
        name: "SetPassword",
        components: { AtomicCheckbox: o.default, PasswordStrength: i.default },
        props: { mnemonic: { type: String, default: "" } },
        data: () => ({
          affiliateId: "",
          password: "",
          passwordConfirm: "",
          passwordType: "password",
          passwordError: "",
          passwordConfirmError: "",
          passwordConfirmType: "password",
          mnemonicError: "",
          loading: !1,
          checkboxValueError: !1,
          checkboxValue: !1,
          showLoaderSpinner: !1,
        }),
        computed: { ...(0, s.mapGetters)(["fiatRate"]) },
        watch: {
          password: {
            handler() {
              this.onInputPassword();
            },
            deep: !0,
          },
          passwordConfirm: {
            handler() {
              this.onInputRepeatPassword();
            },
            deep: !0,
          },
        },
        mounted() {
          (this.$refs.password.focus(),
            this.$emitter.on(r.WALLETS.START_LOADING_ALL, this.toggleSpinner));
        },
        beforeDestroy() {
          this.$emitter.off(r.WALLETS.START_LOADING_ALL, this.toggleSpinner);
        },
        methods: {
          ...(0, s.mapActions)([
            "getRates",
            "clearRateState",
            "setNotifyTree",
            "initChartData",
            "clearNFTStorage",
            "clearNotifyStorage",
            "setCompletedReason",
            "initSimplexTransactions",
            "initExchangeTransactions",
          ]),
          onInputPassword() {
            this.passwordError = this.password
              ? ""
              : this.$t("error.passwordRequired");
          },
          onInputRepeatPassword() {
            (this.passwordConfirm ||
              (this.passwordConfirmError = this.$t("error.passwordRequired")),
              (this.passwordConfirmError =
                this.passwordConfirm !== this.password
                  ? this.$t("error.passwordMismatch")
                  : ""));
          },
          onInputCheckbox(t) {
            ((this.checkboxValue = t), (this.checkboxValueError = !t));
          },
          toggleTypePassword() {
            this.passwordType =
              "password" === this.passwordType ? "text" : "password";
          },
          toggleTypePasswordConfirm() {
            this.passwordConfirmType =
              "password" === this.passwordConfirmType ? "text" : "password";
          },
          toggleSpinner() {
            this.showLoaderSpinner = !this.showLoaderSpinner;
          },
          focusNextEdit() {
            this.$refs.repeatPassword && this.$refs.repeatPassword.focus();
          },
          async resetWalletInfo() {
            (localStorage.clear(),
              this.clearRateState(),
              this.clearNFTStorage(),
              this.clearNotifyStorage(),
              await (0, d.clearAllTables)());
          },
          async validateAffiliate() {
            if (!this.affiliateId) return !0;
            const t = await this.$inviteFriends.getIsPromoCodeExists(
              this.affiliateId,
            );
            return t;
          },
          checkForm() {
            ((this.passwordError = ""),
              (this.passwordConfirmError = ""),
              (this.checkboxValueError = !1),
              "" === this.password &&
                (this.passwordError = this.$t("error.passwordRequired")),
              (this.passwordConfirmError = ""),
              "" === this.passwordConfirm
                ? (this.passwordConfirmError = this.$t(
                    "error.passwordRequired",
                  ))
                : this.passwordConfirm !== this.password &&
                  (this.passwordConfirmError = this.$t(
                    "error.passwordMismatch",
                  )),
              this.checkboxValue || (this.checkboxValueError = !0));
          },
          async validateForm() {
            return (
              this.checkForm(),
              this.passwordError.length
                ? (this.$refs.password.focus(), !1)
                : this.passwordConfirmError.length
                  ? (this.$refs.repeatPassword.focus(), !1)
                  : !this.checkboxValueError
            );
          },
          async generateMnemonic() {
            this.newWallet(await this.$wallets.createWallets(this.password));
          },
          async registerAsReferal() {
            this.affiliateId.length &&
              (await this.$inviteFriends.registerAsReferral(this.affiliateId));
          },
          async restoreWallet() {
            if (
              await this.$wallets.validateMnemonic(
                this.mnemonic.trim().toLowerCase(),
              )
            ) {
              (await this.$wallets.restoreWallets(
                this.mnemonic.trim().toLowerCase().replace(/\s+/g, " "),
                this.password,
              ),
                await this.getRates(),
                this.toggleSpinner());
              const t = this.$wallets
                .list()
                .filter((t) => !c.DISABLED_COINS.includes(t.deprecatedParent))
                .filter(
                  (t) => (null === t || void 0 === t ? void 0 : t.notify) || !1,
                )
                .map((t) => t.id);
              (localStorage.setItem(l.NOTIFY_FIRST_LOGIN, JSON.stringify(!0)),
                localStorage.setItem(
                  l.NOTIFY_NEW_POINT_WALLETS,
                  JSON.stringify(t),
                ),
                localStorage.setItem(
                  l.NOTIFY_OLD_POINT_WALLETS,
                  JSON.stringify([]),
                ),
                await this.$router.push({ path: "/main" }));
            }
            this.updateBalancesAndSave();
          },
          async setPassword() {
            (await this.validateForm()) &&
              ((this.loading = !0),
              this.toggleSpinner(),
              await this.resetWalletInfo(),
              localStorage.setItem("atomic-loaded", 0),
              this.mnemonic
                ? await this.restoreWallet()
                : (await this.generateMnemonic(),
                  await this.registerAsReferal()),
              localStorage.setItem("atomic-loaded", 1),
              await Promise.allSettled([
                this.getRates(),
                this.initSimplexTransactions(),
                this.initExchangeTransactions(),
                this.setNotifyTree(),
                this.setCompletedReason(),
                this.initChartData(),
              ]));
          },
          async newWallet(t) {
            this.updateBalancesAndSave().then(() => {
              this.$emit("goNext", t);
            });
          },
          async updateBalancesAndSave() {
            return Promise.all(
              this.$wallets.list().map(
                async (t) => (
                  t instanceof r.Token ||
                    (this.$bus.$emit("update", {
                      ticker: t.ticker,
                      alias: t.alias,
                    }),
                    "function" === typeof t.createToken &&
                      t.tokens &&
                      Object.values(t.tokens).forEach((t) => {
                        this.$bus.$emit("update", {
                          ticker: t.ticker,
                          alias: t.alias,
                        });
                      })),
                  t
                ),
              ),
            ).catch(console.error);
          },
          openExternal() {
            this.$electron.openExternal(
              "https://atomicwallet.io/terms-of-service",
            );
          },
        },
      };
    },
    4495: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3339),
        r = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(4499),
        i = a(5);
      function d(t) {
        a(4496);
      }
      var l = !1,
        c = d,
        p = "data-v-b5c4de70",
        v = null,
        m = Object(i["a"])(r.a, o["a"], o["b"], l, c, p, v);
      e["default"] = m.exports;
    },
    4496: function (t, e, a) {
      var n = a(4497);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = a(23).default;
      r("7c30d886", n, !0, {});
    },
    4497: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-b5c4de70{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-b5c4de70{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-b5c4de70{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-b5c4de70{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-b5c4de70{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-b5c4de70{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-b5c4de70{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-b5c4de70{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-b5c4de70{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-b5c4de70{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-b5c4de70{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-b5c4de70]{color:#6b963b\n}\n.text-red[data-v-b5c4de70]{color:#c03647\n}\n.text-gray[data-v-b5c4de70]{color:#8290ad\n}\n.text-blue[data-v-b5c4de70]{color:#00c2ff\n}\n.text-danger[data-v-b5c4de70]{color:#8c4545\n}\n.text-title[data-v-b5c4de70]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-b5c4de70]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-b5c4de70]{color:#f1b70b\n}\n.text-white[data-v-b5c4de70]{color:#fff\n}\n.text-bigger[data-v-b5c4de70]{font-size:18px;font-weight:500\n}\n.text-big[data-v-b5c4de70]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-b5c4de70]{font-size:14px\n}\n.text-middle-height[data-v-b5c4de70]{line-height:24px\n}\n.text-small[data-v-b5c4de70]{font-size:12px\n}\n.text-word-break[data-v-b5c4de70]{word-break:break-all\n}\n.text-right[data-v-b5c4de70]{text-align:right\n}\n.text-left[data-v-b5c4de70]{text-align:left\n}\n.text-line-middle[data-v-b5c4de70]{line-height:24px\n}\n.text-link[data-v-b5c4de70],.text-link-underline[data-v-b5c4de70]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-b5c4de70]:hover,.text-link-underline[data-v-b5c4de70]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-b5c4de70]{text-decoration:underline\n}\n.text-center[data-v-b5c4de70]{text-align:center\n}\n.text-pointer[data-v-b5c4de70]{cursor:pointer\n}\n.gap-10[data-v-b5c4de70]{gap:10px\n}\n.m-t-auto[data-v-b5c4de70]{margin-top:auto\n}\n.m-t-4[data-v-b5c4de70]{margin-top:4px\n}\n.m-t-5[data-v-b5c4de70]{margin-top:5px\n}\n.m-t-8[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-10[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-13[data-v-b5c4de70]{margin-top:10px\n}\n.m-t-15[data-v-b5c4de70]{margin-top:15px\n}\n.m-t-16[data-v-b5c4de70]{margin-top:16px\n}\n.m-t-20[data-v-b5c4de70]{margin-top:20px\n}\n.m-t-24[data-v-b5c4de70]{margin-top:24px\n}\n.m-t-25[data-v-b5c4de70]{margin-top:25px\n}\n.m-t-26[data-v-b5c4de70]{margin-top:26px\n}\n.m-t-30[data-v-b5c4de70]{margin-top:30px\n}\n.m-t-35[data-v-b5c4de70]{margin-top:35px\n}\n.m-t-40[data-v-b5c4de70]{margin-top:40px\n}\n.m-t-45[data-v-b5c4de70]{margin-top:45px\n}\n.m-t-50[data-v-b5c4de70]{margin-top:50px\n}\n.m-t-60[data-v-b5c4de70]{margin-top:60px\n}\n.m-t-65[data-v-b5c4de70]{margin-top:65px\n}\n.m-t-80[data-v-b5c4de70]{margin-top:80px\n}\n.m-l-5[data-v-b5c4de70]{margin-left:5px\n}\n.m-l-10[data-v-b5c4de70]{margin-left:10px\n}\n.m-l-15[data-v-b5c4de70]{margin-left:15px\n}\n.m-l-20[data-v-b5c4de70]{margin-left:20px\n}\n.m-l-25[data-v-b5c4de70]{margin-left:25px\n}\n.m-l-30[data-v-b5c4de70]{margin-left:30px\n}\n.m-l-35[data-v-b5c4de70]{margin-left:35px\n}\n.m-r-5[data-v-b5c4de70]{margin-right:5px\n}\n.m-r-10[data-v-b5c4de70]{margin-right:10px\n}\n.m-r-15[data-v-b5c4de70]{margin-right:15px\n}\n.m-r-30[data-v-b5c4de70]{margin-right:30px\n}\n.m-b-5[data-v-b5c4de70]{margin-bottom:5px !important\n}\n.m-b-15[data-v-b5c4de70]{margin-bottom:15px !important\n}\n.m-b-20[data-v-b5c4de70]{margin-bottom:20px !important\n}\n.m-b-30[data-v-b5c4de70]{margin-bottom:30px !important\n}\n.m-b-25[data-v-b5c4de70]{margin-bottom:25px !important\n}\n.m-b-50[data-v-b5c4de70]{margin-bottom:50px !important\n}\n.p-t-40[data-v-b5c4de70]{padding-top:40px\n}\n.p-t-85[data-v-b5c4de70]{padding-top:85px !important\n}\n.hidden[data-v-b5c4de70]{opacity:0 !important\n}\n.relative[data-v-b5c4de70]{position:relative\n}\n.space-nowrap[data-v-b5c4de70]{white-space:nowrap\n}\n.uppercase[data-v-b5c4de70]{text-transform:uppercase\n}\n.lowercase[data-v-b5c4de70]{text-transform:lowercase\n}\n.fade-enter-active[data-v-b5c4de70]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-b5c4de70]{transition:all .1s ease-out\n}\n.fade-enter[data-v-b5c4de70],.fade-leave-to[data-v-b5c4de70]{opacity:0\n}\n.fade-down-enter-active[data-v-b5c4de70],.fade-down-leave-active[data-v-b5c4de70],.fade-down-move[data-v-b5c4de70]{transition:all .15s\n}\n.fade-down-leave-active[data-v-b5c4de70],.fade-down-enter-active[data-v-b5c4de70]{position:absolute !important\n}\n.fade-down-enter[data-v-b5c4de70],.fade-down-leave-to[data-v-b5c4de70]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-b5c4de70],.scale-leave-active[data-v-b5c4de70],.scale-move[data-v-b5c4de70]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-b5c4de70],.scale-leave-to[data-v-b5c4de70]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-b5c4de70],.slide-leave-active[data-v-b5c4de70]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-b5c4de70]{transition:all .2s ease\n}\n.slide-leave-active[data-v-b5c4de70]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-b5c4de70],.slide-leave-to[data-v-b5c4de70]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-b5c4de70],.slide-leave[data-v-b5c4de70]{margin-bottom:0px\n}\n.slide-enter[data-v-b5c4de70],.slide-leave-to[data-v-b5c4de70]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-b5c4de70],.slide-in-leave-active[data-v-b5c4de70]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-b5c4de70]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-b5c4de70]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-b5c4de70]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-b5c4de70]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-b5c4de70],.page-fade-enter-active[data-v-b5c4de70]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-b5c4de70],.page-fade-leave-to[data-v-b5c4de70],.page-fade-enter[data-v-b5c4de70]{opacity:0\n}\n.page-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.fade-out-leave-active[data-v-b5c4de70],.fade-out-enter-active[data-v-b5c4de70]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-b5c4de70],.fade-out-leave-to[data-v-b5c4de70],.fade-out-enter[data-v-b5c4de70]{opacity:0\n}\n.fade-out-enter-to[data-v-b5c4de70]{opacity:1\n}\n.slide-down-enter-active[data-v-b5c4de70],.slide-down-leave-active[data-v-b5c4de70]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-b5c4de70],.slide-down-enter[data-v-b5c4de70]{top:100%\n}\n.slide-down-leave[data-v-b5c4de70],.slide-down-enter-to[data-v-b5c4de70]{top:0%\n}\n.slide-out-enter-active[data-v-b5c4de70],.slide-out-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-b5c4de70],.exchange-result.slide-out-enter[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-b5c4de70],.exchange-pending.slide-out-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-b5c4de70],.slide-left-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-b5c4de70],.slide-right-leave-active[data-v-b5c4de70]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-b5c4de70]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-b5c4de70]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-b5c4de70]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-b5c4de70],.spin-down-leave-active[data-v-b5c4de70]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-b5c4de70]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-b5c4de70]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-b5c4de70]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-b5c4de70],.spin-up-leave-active[data-v-b5c4de70]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-b5c4de70]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-b5c4de70]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-b5c4de70]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-b5c4de70],.puff-out-leave-active[data-v-b5c4de70]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-b5c4de70]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-b5c4de70]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-b5c4de70],.puff-out-enter-to[data-v-b5c4de70]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-b5c4de70],.collapse-fade-enter-active[data-v-b5c4de70]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-b5c4de70],.collapse-fade-leave-to[data-v-b5c4de70],.collapse-fade-enter[data-v-b5c4de70]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.lazy-fade-leave-active[data-v-b5c4de70],.lazy-fade-enter-active[data-v-b5c4de70]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-b5c4de70],.lazy-fade-leave-to[data-v-b5c4de70],.lazy-fade-enter[data-v-b5c4de70]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-b5c4de70]{opacity:1\n}\n.password-complexity[data-v-b5c4de70]{margin-top:8px;display:flex;align-items:center;gap:4px;position:relative\n}\n.password-complexity__checker>span[data-v-b5c4de70]{font-size:14px\n}\n.password-complexity__checker--Weak[data-v-b5c4de70]{color:#f75555\n}\n.password-complexity__checker--Medium[data-v-b5c4de70]{color:#f5922f\n}\n.password-complexity__checker--Strong[data-v-b5c4de70]{color:#16c784\n}\n.password-complexity__icon[data-v-b5c4de70]{display:flex;align-items:center;cursor:pointer\n}",
          "",
        ]));
    },
    4498: function (t, e, a) {
      "use strict";
      a.r(e);
      const n = [
          { id: 0, value: "Weak", minDiversity: 1, minLength: 0 },
          { id: 1, value: "Medium", minDiversity: 3, minLength: 8 },
          { id: 2, value: "Strong", minDiversity: 4, minLength: 10 },
        ],
        r = [
          { regex: /[a-z]/, message: "lowercase" },
          { regex: /[A-Z]/, message: "uppercase" },
          { regex: /\d/, message: "number" },
          {
            regex: /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~ ]/,
            message: "symbol",
          },
        ];
      e["default"] = (t) => {
        const e = {
            contains: r
              .filter(({ regex: e }) => e.test(t))
              .map(({ message: t }) => t),
            length: t.length,
            value: "",
          },
          a = n
            .filter(({ minDiversity: t }) => e.contains.length >= t)
            .filter(({ minLength: t }) => e.length >= t)
            .sort((t, e) => e.id - t.id)
            .map(({ id: t, value: e }) => ({ id: t, value: e }));
        return ((e.value = a[0].value), e);
      };
    },
    4499: function (t, e, a) {
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
          return n(
            "div",
            { staticClass: "password-complexity" },
            [
              t.showPasswordTip
                ? n(
                    "AHintHelper",
                    {
                      on: {
                        close: function (e) {
                          t.showPasswordTip = !1;
                        },
                      },
                    },
                    [
                      t._v(
                        "\n    " +
                          t._s(t.$t("label.createPasswordHint")) +
                          "\n  ",
                      ),
                    ],
                  )
                : t._e(),
              t._v(" "),
              n("div", { staticClass: "password-complexity__checker" }, [
                n("span", { staticClass: "text-gray" }, [
                  t._v(" " + t._s(t.$t("label.passwordStrength")) + ": "),
                ]),
                t._v(" "),
                t.password && t.complexity
                  ? n("span", { class: t.complexityClasses }, [
                      t._v("\n      " + t._s(t.complexityText) + "\n    "),
                    ])
                  : t._e(),
              ]),
              t._v(" "),
              n(
                "div",
                {
                  staticClass: "password-complexity__icon",
                  on: {
                    click: function (e) {
                      (e.stopPropagation(),
                        (t.showPasswordTip = !t.showPasswordTip));
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
        r = [];
    },
    5291: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = n(a(2842)),
        s = n(a(5292));
      const o = 12;
      e.default = {
        name: "RestorePage",
        components: { Edit: r.default, SetPassword: s.default },
        data() {
          return {
            step: "restore",
            mnemonicError: "",
            restoreseed: "",
            restoreseedInLowerCase: "",
          };
        },
        watch: {
          restoreseed() {
            this.restoreseed &&
              this.restoreseed.length > 0 &&
              ((this.mnemonicError = ""),
              (this.restoreseedInLowerCase = this.restoreseed
                .toLowerCase()
                .trim()));
          },
        },
        beforeDestroy() {
          this.restoreseed = "";
        },
        methods: {
          async restoreByWords() {
            if (!this.restoreseedInLowerCase)
              return void (this.mnemonicError = this.$t(
                "error.noSecretPhrase",
              ));
            const t = this.restoreseedInLowerCase.split(/\s+/).length;
            t === o
              ? (await this.$wallets.validateMnemonic(
                  this.restoreseedInLowerCase,
                ))
                ? (this.step = "setpass")
                : (this.mnemonicError = this.$t("error.invalidMnemonic"))
              : (this.mnemonicError = this.$t("error.backupPhraseLength"));
          },
          async goBack() {
            (await this.$wallets.isMnemonicStored())
              ? this.$router.push("/entry/login")
              : this.$router.push("/entry");
          },
          goToRestore() {
            this.step = "restore";
          },
        },
      };
    },
    5292: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3793),
        r = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(5294),
        i = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        v = Object(i["a"])(r.a, o["a"], o["b"], d, l, c, p);
      e["default"] = v.exports;
    },
    5293: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clearAllTables = r));
      var n = a(4);
      async function r() {
        try {
          for await (const t of n.db.tables)
            "rates" !== t.name && (await t.clear());
        } catch (t) {
          console.error(t);
        }
      }
    },
    5294: function (t, e, a) {
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
          return n("div", [
            n(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading",
                  },
                ],
              },
              [
                n("p", { staticClass: "new-text-extra-large login__title" }, [
                  t._v(t._s(t.$t("title.setPassword"))),
                ]),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "form-field m-b-25" },
                  [
                    n("div", { staticClass: "input-wrap" }, [
                      "checkbox" === t.passwordType
                        ? n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.password,
                                expression: "password",
                              },
                            ],
                            ref: "password",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(t.password)
                                ? t._i(t.password, null) > -1
                                : t.password,
                            },
                            on: {
                              focus: function (e) {
                                return t.$emit("focus");
                              },
                              keyup: function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                  ? null
                                  : (e.preventDefault(),
                                    e.stopPropagation(),
                                    t.focusNextEdit.apply(null, arguments));
                              },
                              change: function (e) {
                                var a = t.password,
                                  n = e.target,
                                  r = !!n.checked;
                                if (Array.isArray(a)) {
                                  var s = null,
                                    o = t._i(a, s);
                                  n.checked
                                    ? o < 0 && (t.password = a.concat([s]))
                                    : o > -1 &&
                                      (t.password = a
                                        .slice(0, o)
                                        .concat(a.slice(o + 1)));
                                } else t.password = r;
                              },
                            },
                          })
                        : "radio" === t.passwordType
                          ? n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.password,
                                  expression: "password",
                                },
                              ],
                              ref: "password",
                              attrs: { type: "radio" },
                              domProps: { checked: t._q(t.password, null) },
                              on: {
                                focus: function (e) {
                                  return t.$emit("focus");
                                },
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : (e.preventDefault(),
                                      e.stopPropagation(),
                                      t.focusNextEdit.apply(null, arguments));
                                },
                                change: function (e) {
                                  t.password = null;
                                },
                              },
                            })
                          : n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.password,
                                  expression: "password",
                                },
                              ],
                              ref: "password",
                              attrs: { type: t.passwordType },
                              domProps: { value: t.password },
                              on: {
                                focus: function (e) {
                                  return t.$emit("focus");
                                },
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : (e.preventDefault(),
                                      e.stopPropagation(),
                                      t.focusNextEdit.apply(null, arguments));
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    (t.password = e.target.value);
                                },
                              },
                            }),
                      t._v(" "),
                      n("div", {
                        staticClass: "line",
                        class: {
                          "line-error": t.passwordError,
                          "line-true": !t.passwordError && t.password,
                        },
                      }),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass: "placeholder",
                          class: { "is-up": t.password },
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.$t("input.password")) +
                              "\n        ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === t.passwordType },
                          on: { click: t.toggleTypePassword },
                        },
                        [n("img", { attrs: { src: a(811) } })],
                      ),
                    ]),
                    t._v(" "),
                    n("transition", { attrs: { name: "slide-in" } }, [
                      t.passwordError
                        ? n("div", {
                            directives: [
                              {
                                name: "text-html",
                                rawName: "v-text-html",
                                value: t.passwordError,
                                expression: "passwordError",
                              },
                            ],
                            staticClass: "error",
                          })
                        : t._e(),
                    ]),
                    t._v(" "),
                    t.passwordError.length
                      ? n("div", { staticStyle: { height: "24.5px" } })
                      : n("password-strength", {
                          attrs: { password: t.password },
                        }),
                  ],
                  1,
                ),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "form-field" },
                  [
                    n("div", { staticClass: "input-wrap" }, [
                      "checkbox" === t.passwordConfirmType
                        ? n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.passwordConfirm,
                                expression: "passwordConfirm",
                              },
                            ],
                            ref: "repeatPassword",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(t.passwordConfirm)
                                ? t._i(t.passwordConfirm, null) > -1
                                : t.passwordConfirm,
                            },
                            on: {
                              keyup: function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                  ? null
                                  : (e.preventDefault(),
                                    e.stopPropagation(),
                                    t.setPassword.apply(null, arguments));
                              },
                              change: function (e) {
                                var a = t.passwordConfirm,
                                  n = e.target,
                                  r = !!n.checked;
                                if (Array.isArray(a)) {
                                  var s = null,
                                    o = t._i(a, s);
                                  n.checked
                                    ? o < 0 &&
                                      (t.passwordConfirm = a.concat([s]))
                                    : o > -1 &&
                                      (t.passwordConfirm = a
                                        .slice(0, o)
                                        .concat(a.slice(o + 1)));
                                } else t.passwordConfirm = r;
                              },
                            },
                          })
                        : "radio" === t.passwordConfirmType
                          ? n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.passwordConfirm,
                                  expression: "passwordConfirm",
                                },
                              ],
                              ref: "repeatPassword",
                              attrs: { type: "radio" },
                              domProps: {
                                checked: t._q(t.passwordConfirm, null),
                              },
                              on: {
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : (e.preventDefault(),
                                      e.stopPropagation(),
                                      t.setPassword.apply(null, arguments));
                                },
                                change: function (e) {
                                  t.passwordConfirm = null;
                                },
                              },
                            })
                          : n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.passwordConfirm,
                                  expression: "passwordConfirm",
                                },
                              ],
                              ref: "repeatPassword",
                              attrs: { type: t.passwordConfirmType },
                              domProps: { value: t.passwordConfirm },
                              on: {
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : (e.preventDefault(),
                                      e.stopPropagation(),
                                      t.setPassword.apply(null, arguments));
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    (t.passwordConfirm = e.target.value);
                                },
                              },
                            }),
                      t._v(" "),
                      n("div", {
                        staticClass: "line",
                        class: {
                          "line-error": t.passwordConfirmError,
                          "line-true":
                            !t.passwordConfirmError && t.passwordConfirm,
                        },
                      }),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass: "placeholder",
                          class: { "is-up": t.passwordConfirm },
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.$t("input.repeatPassword")) +
                              "\n        ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: {
                            "close-eye": "text" === t.passwordConfirmType,
                          },
                          on: { click: t.toggleTypePasswordConfirm },
                        },
                        [n("img", { attrs: { src: a(811) } })],
                      ),
                    ]),
                    t._v(" "),
                    n("transition", { attrs: { name: "slide-in" } }, [
                      t.passwordConfirmError
                        ? n("div", {
                            directives: [
                              {
                                name: "text-html",
                                rawName: "v-text-html",
                                value: t.passwordConfirmError,
                                expression: "passwordConfirmError",
                              },
                            ],
                            staticClass: "error",
                          })
                        : t._e(),
                    ]),
                  ],
                  1,
                ),
                t._v(" "),
                n(
                  "atomic-checkbox",
                  {
                    staticClass: "m-t-50 m-b-15",
                    attrs: {
                      "model-value": t.checkboxValue,
                      "is-error": t.checkboxValueError,
                    },
                    on: { "update:modelValue": t.onInputCheckbox },
                  },
                  [
                    t._v(
                      "\n      " + t._s(t.$t("message.accept")) + "\n      ",
                    ),
                    n(
                      "a",
                      {
                        on: {
                          click: function (e) {
                            return (
                              e.preventDefault(),
                              e.stopPropagation(),
                              t.openExternal.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [t._v(" " + t._s(t.$t("message.termsOfService")) + " ")],
                    ),
                  ],
                ),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass: "button m-t-0",
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          t.setPassword.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    t._v(
                      "\n      " + t._s(t.$t("button.setPassword")) + "\n    ",
                    ),
                  ],
                ),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          t.$emit("goBack")
                        );
                      },
                    },
                  },
                  [t._v("\n      " + t._s(t.$t("button.back")) + "\n    ")],
                ),
              ],
              1,
            ),
            t._v(" "),
            n(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showLoaderSpinner,
                    expression: "showLoaderSpinner",
                  },
                ],
                staticClass: "loading-wrap",
              },
              [n("div", { staticClass: "loading" })],
            ),
          ]);
        },
        r = [];
    },
    8442: function (t, e, a) {
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
            { staticClass: "wrap", class: { little: "setpass" === t.step } },
            [
              a(
                "transition",
                { attrs: { mode: "out-in", name: "slide-left" } },
                [
                  "restore" === t.step
                    ? a(
                        "div",
                        [
                          a(
                            "p",
                            {
                              staticClass: "new-text-extra-large login__title",
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("title.restoreFromBackup")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          a("edit", {
                            attrs: {
                              modelValue: t.restoreseed,
                              error: t.mnemonicError,
                              focus: "",
                              isPasteFromClipboard: "",
                              placeholder: t.$t("input.backupPhrase"),
                              type: "text",
                            },
                            on: {
                              "enter-pressed": t.restoreByWords,
                              "update:modelValue": function (e) {
                                t.restoreseed = e;
                              },
                            },
                          }),
                          t._v(" "),
                          a(
                            "button",
                            {
                              staticClass: "m-t-65 button",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.restoreByWords.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.restoreWallet")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          a(
                            "button",
                            {
                              staticClass: "button link",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.goBack.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.back")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  "setpass" === t.step
                    ? a("set-password", {
                        attrs: { mnemonic: t.restoreseedInLowerCase },
                        on: { goBack: t.goToRestore },
                      })
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
