(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [323],
  {
    11571: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5765),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(11574),
        r = i(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        p = Object(r["a"])(a.a, o["a"], o["b"], l, c, d, u);
      e["default"] = p.exports;
    },
    11572: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5766),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(11573),
        r = i(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        p = Object(r["a"])(a.a, o["a"], o["b"], l, c, d, u);
      e["default"] = p.exports;
    },
    11573: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return a;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "eos-wizard" }, [
            i("div", { staticClass: "icon icon-default icon-eos" }),
            t._v(" "),
            i("div", { staticClass: "header" }, [
              t.isFirstStep
                ? i("div", { staticClass: "title" }, [
                    t._v(
                      "\n      " +
                        t._s(t.$t("eosWizard.chooseEOSAccountAddress")) +
                        "\n    ",
                    ),
                  ])
                : t._e(),
              t._v(" "),
              t.isFirstStep
                ? t._e()
                : i("div", { staticClass: "title" }, [
                    t._v(
                      "\n      " +
                        t._s(t.$t("eosWizard.activateAccount")) +
                        "\n    ",
                    ),
                  ]),
              t._v(" "),
              t.isFirstStep
                ? t._e()
                : i("div", { staticClass: "subtitle" }, [
                    t._v(
                      "\n      " +
                        t._s(
                          t.$t("eosWizard.sendEOSActivation", {
                            sum: t.coin.accountActivationSum,
                          }),
                        ) +
                        "\n    ",
                    ),
                  ]),
            ]),
            t._v(" "),
            t.isFirstStep
              ? i(
                  "div",
                  { staticClass: "step-1", class: { disabled: t.loading } },
                  [
                    i("Edit", {
                      attrs: {
                        modelValue: t.login,
                        error: t.loginError,
                        maxLength: t.charsMax,
                        specialCharactersPattern: /^[a-zA-Z1-5]+$/,
                        placeholder: t.$t("input.enterAccountAddress"),
                        type: "text",
                      },
                      on: {
                        "update:modelValue": function (e) {
                          t.login = e;
                        },
                      },
                    }),
                    t._v(
                      "\n    " +
                        t._s(
                          t.$t("eosWizard.accountAddressCharsLeft", {
                            charsLeft: t.charsLeft,
                          }),
                        ) +
                        "\n    ",
                    ),
                    i(
                      "button",
                      {
                        staticClass: "button link",
                        on: {
                          click: function (e) {
                            return t.generateName();
                          },
                        },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.$t("button.generateAccountAddress")) +
                            "\n    ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button link button-instruction",
                        on: {
                          click: function (e) {
                            return t.$electron.openExternal(
                              "https://support.atomicwallet.io/article/65-how-to-create-a-eos-account",
                            );
                          },
                        },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.$t("button.activateEOSAccountInstruction")) +
                            "\n    ",
                        ),
                      ],
                    ),
                  ],
                  1,
                )
              : i(
                  "div",
                  { staticClass: "step-2" },
                  [
                    i("p", [t._v(t._s(t.$t("eosWizard.activationAddress")))]),
                    t._v(" "),
                    i(
                      "p",
                      {
                        staticClass: "name",
                        on: {
                          click: function (e) {
                            return t.copyAddress(
                              t.coin.accountActivationAddress,
                              "account",
                            );
                          },
                        },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.coin.accountActivationAddress) +
                            "\n    ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    i("p", [t._v(t._s(t.$t("eosWizard.memoID")))]),
                    t._v(" "),
                    i(
                      "p",
                      {
                        staticClass: "name",
                        on: {
                          click: function (e) {
                            return t.copyAddress(t.signUpTxMemo, "Memo. ID");
                          },
                        },
                      },
                      [t._v("\n      " + t._s(t.signUpTxMemo) + "\n    ")],
                    ),
                    t._v(" "),
                    i("p", { staticClass: "notify" }, [
                      t._v(
                        "\n      " +
                          t._s(t.$t("eosWizard.sendEOSSwapInstructions")) +
                          "\n    ",
                      ),
                    ]),
                    t._v(" "),
                    i("p", { staticClass: "notify" }, [
                      t._v(
                        "\n      " +
                          t._s(t.$t("eosWizard.reloadBalancesInstructions")) +
                          "\n    ",
                      ),
                    ]),
                    t._v(" "),
                    i("transition", { attrs: { name: "fade" } }, [
                      t.isCopiedToClipboard
                        ? i("div", { staticClass: "message" }, [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$t(
                                    "eosWizard.notificationCopiedToClipboard",
                                    { notificationTag: t.notificationTag },
                                  ),
                                ) +
                                "\n      ",
                            ),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1,
                ),
            t._v(" "),
            i(
              "div",
              { staticClass: "footer", class: { above: t.isFirstStep } },
              [
                t.loading ? i("div", { staticClass: "loader" }) : t._e(),
                t._v(" "),
                t.isFirstStep
                  ? i(
                      "button",
                      {
                        staticClass: "button",
                        class: { disabled: t.loading },
                        on: { click: t.nextStep },
                      },
                      [t._v("\n      " + t._s(t.$t("button.next")) + "\n    ")],
                    )
                  : i(
                      "button",
                      {
                        staticClass: "button",
                        class: { disabled: t.loading },
                        on: {
                          click: function (e) {
                            return t.toggleWizardWindow(!1);
                          },
                        },
                      },
                      [
                        t._v(
                          "\n      " + t._s(t.$t("button.close")) + "\n    ",
                        ),
                      ],
                    ),
                t._v(" "),
                i("p", [
                  t._v(
                    t._s(t.$t("eosWizard.step")) +
                      " " +
                      t._s(t.isFirstStep ? 1 : 2) +
                      " / 2",
                  ),
                ]),
                t._v(" "),
                t.isFirstStep
                  ? t._e()
                  : i(
                      "button",
                      {
                        staticClass: "button link",
                        on: {
                          click: function (e) {
                            t.isFirstStep = !0;
                          },
                        },
                      },
                      [t._v("\n      " + t._s(t.$t("button.back")) + "\n    ")],
                    ),
              ],
            ),
          ]);
        },
        a = [];
    },
    11574: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return a;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "popup wizard" },
            [
              i("div", { staticClass: "close", on: { click: t.close } }, [
                t._v("\n    ✕\n  "),
              ]),
              t._v(" "),
              0 !== Object.keys(t.coin).length
                ? i("Wizard", { attrs: { coin: t.coin } })
                : t._e(),
            ],
            1,
          );
        },
        a = [];
    },
    2820: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = s(i(817));
      e.default = {
        name: "Edit",
        components: { EditSvg: a.default },
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
              const i = !e.test(t.key);
              i && t.preventDefault();
            }
          },
          onInput(t) {
            let { value: e } = t.target;
            const i = new RegExp(this.validationPattern).test(e);
            (this.isFixedNumber && (e = String(e).replace(/[^0-9]+/g, "")),
              i
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
    2842: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(2820),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(2972),
        r = i(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        p = Object(r["a"])(a.a, o["a"], o["b"], l, c, d, u);
      e["default"] = p.exports;
    },
    2972: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return a;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "form-field" },
            [
              s(
                "div",
                {
                  staticClass: "input-wrap",
                  class: {
                    "past-click": t.isPasteByClick && "" === t.modelValue,
                  },
                },
                [
                  s("input", {
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
                  s("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.error,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  s(
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
                    ? s("div", {
                        staticClass: "icon-paste",
                        on: { click: t.pasteValueFromClipboard },
                      })
                    : t._e(),
                  t._v(" "),
                  t.isPasteByClick && "" !== t.modelValue
                    ? s(
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
                    ? s(
                        "div",
                        {
                          staticClass: "icon-edit",
                          on: { click: t.editInput },
                        },
                        [s("EditSvg")],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isShowPassword
                    ? s(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === t.inputType },
                          on: { click: t.toggleTypePassword },
                        },
                        [s("img", { attrs: { src: i(811) } })],
                      )
                    : t._e(),
                  t._v(" "),
                  t.ticker
                    ? s("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.ticker) + "\n    "),
                      ])
                    : t._e(),
                ],
              ),
              t._v(" "),
              s("transition", { attrs: { name: "slide-in" } }, [
                t.error
                  ? s("div", {
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
        a = [];
    },
    5765: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = s(i(11572)),
        n = i(60);
      e.default = {
        name: "WalletWizard",
        components: { Wizard: a.default },
        props: { coin: { type: Object, default: () => ({}) } },
        methods: {
          ...(0, n.mapActions)(["toggleWizardWindow"]),
          close() {
            this.toggleWizardWindow(!1);
          },
        },
      };
    },
    5766: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = i(60),
        n = s(i(2842));
      e.default = {
        name: "Wizard",
        components: { Edit: n.default },
        props: { coin: { type: Object, default: Object } },
        data: () => ({
          loading: !1,
          isFirstStep: !0,
          notificationTag: "",
          login: "",
          loginError: "",
          charsMax: 12,
        }),
        computed: {
          charsLeft() {
            return this.charsMax - this.login.length;
          },
          signUpTxMemo() {
            return `${this.login}-${JSON.parse(this.coin.privateKey).active.publicKey}`;
          },
        },
        watch: {
          async login(t) {
            t.length
              ? t.length === this.charsMax
                ? (this.loginError = "")
                : (this.loginError = this.$t("error.accountNameLength"))
              : (this.loginError = "");
          },
        },
        methods: {
          ...(0, a.mapActions)(["toggleWizardWindow"]),
          generateName() {
            this.login = "";
            const t = "abcdefghijklmnopqrstuvwxyz12345";
            while (this.charsLeft)
              this.login += t.charAt(Math.floor(Math.random() * t.length));
          },
          copyAddress(t, e) {
            ((this.notificationTag = e), this.$copyToClipboard(t));
          },
          async validateLogin() {
            if (((this.loginError = ""), this.login.length === this.charsMax)) {
              try {
                (await this.coin.validateNewAccountName(this.login))
                  ? (await this.coin.validateAddress(this.login)) ||
                    (this.loginError = this.$t("error.invalidCharacter"))
                  : (this.loginError = this.$t("error.accountExists"));
              } catch (t) {
                this.loginError = this.$t("error.serviceUnavailable");
              }
              return this.loginError;
            }
            this.loginError = this.$t("error.accountNameLength");
          },
          async nextStep() {
            ((this.loading = !0),
              await this.validateLogin(),
              (this.loading = !1),
              (this.isFirstStep = "" !== this.loginError));
          },
        },
      };
    },
  },
]);
