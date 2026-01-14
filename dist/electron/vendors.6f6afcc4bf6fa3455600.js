(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [247],
  {
    11551: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5748),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11560),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    11552: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5749),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11554),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    11553: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
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
                  value: t.closeDropdown,
                  expression: "closeDropdown",
                },
              ],
              staticClass: "custom-token__network",
            },
            [
              a(
                "div",
                {
                  on: {
                    click: function (e) {
                      return (
                        e.preventDefault(),
                        t.toggleDropdown.apply(null, arguments)
                      );
                    },
                  },
                },
                [
                  a("div", { staticClass: "custom-token__network-prefix" }, [
                    a("span", [
                      t._v(" " + t._s(t.$t("addCustomToken.network")) + " "),
                    ]),
                  ]),
                  t._v(" "),
                  a("div", {
                    staticClass: "icon icon_coin",
                    class: t.activeCoin.icon,
                  }),
                  t._v(" "),
                  a("div", { staticClass: "custom-token__network-name" }, [
                    a("span", [
                      t._v("\n        " + t._s(t.activeCoin.name) + "\n      "),
                    ]),
                  ]),
                ],
              ),
              t._v(" "),
              t.isDropdownCoins
                ? a("DropdownUI", {
                    attrs: {
                      items: t.dropdownItems,
                      "search-by": ["ticker", "name"],
                    },
                    on: { onSelect: t.selectCoin },
                  })
                : t._e(),
            ],
            1,
          );
        },
        i = [];
    },
    11554: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a("div", { staticClass: "custom-token__text" }, [
                a("p", [
                  t._v(
                    "\n      " +
                      t._s(t.$t("addCustomToken.addTokenInstructions")) +
                      "\n    ",
                  ),
                ]),
              ]),
              t._v(" "),
              a("AddCustomTokenOrCoinDropdown", {
                attrs: { defaultActiveTicker: t.activeCoin.ticker },
                on: {
                  changeCoin: function (e) {
                    t.activeCoin = e;
                  },
                },
              }),
              t._v(" "),
              a("div", { staticClass: "custom-token__qr" }, [
                a("img", {
                  staticClass: "qr-code",
                  attrs: { src: t.qrCodeImage },
                }),
              ]),
              t._v(" "),
              a("div", { staticClass: "custom-token__address" }, [
                a("div", [
                  a("p", [
                    t._v(
                      t._s(
                        t.$t("addCustomToken.tokenAddress", {
                          tokenName: t.activeCoin.name,
                        }),
                      ) + ":",
                    ),
                  ]),
                ]),
                t._v(" "),
                a("div", [
                  a(
                    "p",
                    {
                      on: {
                        click: function (e) {
                          return t.$copyToClipboard(t.activeCoin.address);
                        },
                      },
                    },
                    [
                      t._v(
                        "\n        " +
                          t._s(t.activeCoin.address) +
                          "\n        ",
                      ),
                      a("transition", { attrs: { name: "fade" } }, [
                        t.isCopiedToClipboard
                          ? a("div", { staticClass: "message" }, [
                              t._v(
                                "\n            " +
                                  t._s(t.$t("message.addressCopied")) +
                                  "\n          ",
                              ),
                            ])
                          : t._e(),
                      ]),
                    ],
                    1,
                  ),
                ]),
              ]),
            ],
            1,
          );
        },
        i = [];
    },
    11555: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5751),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11557),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    11556: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("AtomicPopup", { on: { close: t.closePopup } }, [
            a("div", { staticClass: "custom-token__wrapper" }, [
              a("div", { staticClass: "custom-token__success-icon" }, [
                a(
                  "svg",
                  {
                    attrs: {
                      width: "24",
                      height: "17",
                      viewBox: "0 0 24 17",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M23.7071 0.292893C24.0976 0.683417 24.0976 1.31658 23.7071 1.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L8 14.5858L22.2929 0.292893C22.6834 -0.0976311 23.3166 -0.0976311 23.7071 0.292893Z",
                        fill: "white",
                      },
                    }),
                  ],
                ),
              ]),
              t._v(" "),
              a("div", { staticClass: "custom-token__success-text" }, [
                a("h1", [t._v("\n        " + t._s(t.headline) + "\n      ")]),
              ]),
              t._v(" "),
              a(
                "div",
                { staticClass: "custom-token__success-actions" },
                [
                  "delete" !== t.typeOfAction
                    ? a(
                        "BaseButton",
                        {
                          attrs: { type: "primary-desktop" },
                          on: { click: t.handleNavigateToCoinOrToken },
                        },
                        [t._v("\n        " + t._s(t.text) + "\n      ")],
                      )
                    : t._e(),
                  t._v(" "),
                  a(
                    "BaseButton",
                    {
                      attrs: { type: "secondary-desktop" },
                      on: { click: t.handleNavigateToWallet },
                    },
                    [
                      t._v(
                        "\n        " +
                          t._s(t.$t("button.backToWallet")) +
                          "\n      ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
            ]),
          ]);
        },
        i = [];
    },
    11557: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "custom-token__contract" },
            [
              a("div", { staticClass: "custom-token__text" }, [
                a("p", [
                  t._v(
                    "\n      " +
                      t._s(t.$t("addCustomToken.addTokenInstructions")) +
                      "\n    ",
                  ),
                ]),
              ]),
              t._v(" "),
              a("add-custom-token-or-coin-dropdown", {
                attrs: { "default-active-ticker": t.coin.id },
                on: { changeCoin: t.handleChangeCoin },
              }),
              t._v(" "),
              a(
                "div",
                { staticClass: "custom-token__form" },
                [
                  a("AtomicEdit", {
                    attrs: {
                      "model-value": t.form.value.contract,
                      error: t.form.error.contract,
                      "is-paste-from-clipboard": "",
                      placeholder: t.$t("input.contractAddressStartsWith0x"),
                    },
                    on: { "update:modelValue": t.onChangeContract },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      "model-value": t.form.value.name,
                      error: t.form.error.name,
                      "is-paste-from-clipboard": "",
                      placeholder: t.$t("input.tokenName"),
                    },
                    on: { "update:modelValue": t.onChangeName },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      "model-value": t.form.value.ticker,
                      error: t.form.error.ticker,
                      "is-paste-from-clipboard": "",
                      placeholder: t.$t("input.ticker"),
                    },
                    on: { "update:modelValue": t.onChangeTicker },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      "model-value": t.form.value.decimal,
                      error: t.form.error.decimal,
                      placeholder: t.$t("input.decimals"),
                    },
                    on: { "update:modelValue": t.onChangeDecimal },
                  }),
                  t._v(" "),
                  a(
                    "BaseButton",
                    {
                      attrs: {
                        type: "primary-desktop",
                        "type-width": "w210",
                        disabled: !t.isValid,
                      },
                      on: { click: t.addToken },
                    },
                    [
                      t._v(
                        "\n      " + t._s(t.$t("button.addToken")) + "\n    ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
              t._v(" "),
              t.createdToken
                ? a("add-custom-token-or-coin-success", {
                    attrs: { coin: t.createdToken, "type-of-action": "create" },
                    on: {
                      close: function (e) {
                        t.createdToken = null;
                      },
                    },
                  })
                : t._e(),
            ],
            1,
          );
        },
        i = [];
    },
    11558: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5753),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11559),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    11559: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "custom-token__coin" },
            [
              a("div", { staticClass: "custom-token__text" }, [
                a("p", [
                  t._v(
                    "\n      " +
                      t._s(t.$t("coinInfo.addEVMCoinForm")) +
                      "\n    ",
                  ),
                ]),
              ]),
              t._v(" "),
              a(
                "div",
                { staticClass: "custom-token__form" },
                [
                  a("AtomicEdit", {
                    attrs: {
                      modelValue: t.form.value.name,
                      error: t.form.error.name,
                      placeholder: t.$t("input.networkName"),
                    },
                    on: { "update:modelValue": t.setName },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      modelValue: t.form.value.rpcBaseUrl,
                      error: t.form.error.rpcBaseUrl,
                      isPasteFromClipboard: "",
                      placeholder: t.$t("input.newRPCURL"),
                    },
                    on: { "update:modelValue": t.setRPCURL },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      modelValue: t.form.value.chainId,
                      error: t.form.error.chainId,
                      placeholder: t.$t("input.chainID"),
                    },
                    on: { "update:modelValue": t.setChainID },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      modelValue: t.form.value.ticker,
                      error: t.form.error.ticker,
                      placeholder: t.$t("input.currencySymbol"),
                    },
                    on: { "update:modelValue": t.setCurrency },
                  }),
                  t._v(" "),
                  a("AtomicEdit", {
                    attrs: {
                      modelValue: t.form.value.explorerWebUrl,
                      error: t.form.error.explorerWebUrl,
                      placeholder: t.$t("input.blockExplorerURL"),
                    },
                    on: { "update:modelValue": t.setWebUrl },
                  }),
                  t._v(" "),
                  a(
                    "BaseButton",
                    {
                      attrs: {
                        type: "primary-desktop",
                        typeWidth: "w210",
                        disabled: !t.isValid,
                      },
                      on: { click: t.validateForm },
                    },
                    [
                      t._v(
                        "\n      " + t._s(t.$t("button.addCoin")) + "\n    ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
              t._v(" "),
              t.isPasswordStep
                ? a("PasswordChecker", {
                    attrs: { isDefaultWidth: "" },
                    on: {
                      handleNavigateBack: function (e) {
                        t.isPasswordStep = !1;
                      },
                      handleConfirm: t.addCoin,
                    },
                  })
                : t._e(),
              t._v(" "),
              t.isAdding
                ? a("AtomicPopup", { attrs: { isShowClose: !1 } }, [
                    a(
                      "div",
                      { staticClass: "custom-token__loading" },
                      [a("AtomicLoader")],
                      1,
                    ),
                  ])
                : t._e(),
              t._v(" "),
              t.createdCoin
                ? a("AddCustomTokenOrCoinSuccess", {
                    attrs: { typeOfAction: "create", coin: t.createdCoin },
                    on: { close: t.handleSuccessPopupClose },
                  })
                : t._e(),
            ],
            1,
          );
        },
        i = [];
    },
    11560: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "AtomicPopup",
            { staticClass: "custom-token", on: { close: t.close } },
            [
              a("div", { staticClass: "custom-token__header" }, [
                a("h1", [t._v(t._s(t.$t("addCustomToken.addNew")))]),
              ]),
              t._v(" "),
              a("div", { staticClass: "custom-token__wrapper" }, [
                a(
                  "ul",
                  { staticClass: "custom-token__tabs" },
                  t._l(t.menu, function (e) {
                    return a(
                      "li",
                      {
                        key: e.label,
                        class: {
                          "custom-token__tabs--active-tab":
                            t.activeMenu.label === e.label,
                        },
                        on: {
                          click: function (a) {
                            return t.handleChangeActiveMenu(e);
                          },
                        },
                      },
                      [t._v("\n        " + t._s(e.label) + "\n      ")],
                    );
                  }),
                  0,
                ),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "custom-token__component" },
                  [a(t.activeMenu.component, { tag: "component" })],
                  1,
                ),
              ]),
            ],
          );
        },
        i = [];
    },
    2820: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(817));
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
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(2972),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    2972: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
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
        i = [];
    },
    3857: function (t, e, a) {
      (function (e, a) {
        t.exports = a();
      })(0, function () {
        "use strict";
        var t = function () {},
          e = Object.prototype.hasOwnProperty,
          a = Array.prototype.slice;
        function n(e, a) {
          var n;
          return (
            "function" === typeof Object.create
              ? (n = Object.create(e))
              : ((t.prototype = e), (n = new t()), (t.prototype = null)),
            a && s(!0, n, a),
            n
          );
        }
        function i(t, e, a, i) {
          var r = this;
          return (
            "string" !== typeof t && ((i = a), (a = e), (e = t), (t = null)),
            "function" !== typeof e &&
              ((i = a),
              (a = e),
              (e = function () {
                return r.apply(this, arguments);
              })),
            s(!1, e, r, i),
            (e.prototype = n(r.prototype, a)),
            (e.prototype.constructor = e),
            (e.class_ = t || r.class_),
            (e.super_ = r),
            e
          );
        }
        function s(t, n, i) {
          var s, r;
          i = a.call(arguments, 2);
          for (var o = 0, c = i.length; o < c; o++)
            for (s in ((r = i[o]), r)) (t && !e.call(r, s)) || (n[s] = r[s]);
        }
        var r = i;
        function o() {}
        ((o.class_ = "Nevis"), (o.super_ = Object), (o.extend = r));
        var c = o,
          l = c,
          d = l.extend(
            function (t, e, a) {
              ((this.qrious = t),
                (this.element = e),
                (this.element.qrious = t),
                (this.enabled = Boolean(a)));
            },
            {
              draw: function (t) {},
              getElement: function () {
                return (
                  this.enabled || ((this.enabled = !0), this.render()),
                  this.element
                );
              },
              getModuleSize: function (t) {
                var e = this.qrious,
                  a = e.padding || 0,
                  n = Math.floor((e.size - 2 * a) / t.width);
                return Math.max(1, n);
              },
              getOffset: function (t) {
                var e = this.qrious,
                  a = e.padding;
                if (null != a) return a;
                var n = this.getModuleSize(t),
                  i = Math.floor((e.size - n * t.width) / 2);
                return Math.max(0, i);
              },
              render: function (t) {
                this.enabled && (this.resize(), this.reset(), this.draw(t));
              },
              reset: function () {},
              resize: function () {},
            },
          ),
          u = d,
          f = u.extend({
            draw: function (t) {
              var e,
                a,
                n = this.qrious,
                i = this.getModuleSize(t),
                s = this.getOffset(t),
                r = this.element.getContext("2d");
              for (
                r.fillStyle = n.foreground,
                  r.globalAlpha = n.foregroundAlpha,
                  e = 0;
                e < t.width;
                e++
              )
                for (a = 0; a < t.width; a++)
                  t.buffer[a * t.width + e] &&
                    r.fillRect(i * e + s, i * a + s, i, i);
            },
            reset: function () {
              var t = this.qrious,
                e = this.element.getContext("2d"),
                a = t.size;
              ((e.lineWidth = 1),
                e.clearRect(0, 0, a, a),
                (e.fillStyle = t.background),
                (e.globalAlpha = t.backgroundAlpha),
                e.fillRect(0, 0, a, a));
            },
            resize: function () {
              var t = this.element;
              t.width = t.height = this.qrious.size;
            },
          }),
          v = f,
          p = l.extend(null, {
            BLOCK: [
              0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24,
              24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26,
              28, 28, 24, 26, 26, 26, 28, 28,
            ],
          }),
          h = p,
          m = l.extend(null, {
            BLOCKS: [
              1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34,
              10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0,
              44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2,
              0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18,
              2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15,
              28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0,
              97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30,
              3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43,
              26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4,
              22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7,
              4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11,
              22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5,
              1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98,
              24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10,
              1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43,
              26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26,
              17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5,
              24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22,
              28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30,
              34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16,
              14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2,
              16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15,
              30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30,
              8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3,
              10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7,
              116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115,
              30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115,
              30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30,
              10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30,
              14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30,
              14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12,
              26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34,
              47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46,
              28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46,
              28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28,
              43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28,
              34, 34, 24, 30, 20, 61, 15, 30,
            ],
            FINAL_FORMAT: [
              30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522,
              20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392,
              16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608,
              1890, 597, 3340, 2107,
            ],
            LEVELS: { L: 1, M: 2, Q: 3, H: 4 },
          }),
          _ = m,
          k = l.extend(null, {
            EXPONENT: [
              1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38,
              76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96,
              192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238,
              193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210,
              185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202,
              137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127,
              254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34,
              68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124,
              248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23,
              46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168,
              77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183,
              115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179,
              123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55,
              110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28,
              56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249,
              239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122,
              244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125,
              250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0,
            ],
            LOG: [
              255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75,
              4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76,
              113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18,
              130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120,
              77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152,
              37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189,
              241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126,
              110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10,
              21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192,
              247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227,
              165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137,
              46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220,
              252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83,
              71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23,
              73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170,
              251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169,
              160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233,
              230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175,
            ],
          }),
          g = k,
          w = l.extend(null, {
            BLOCK: [
              3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117,
              2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098,
              831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345,
              3177,
            ],
          }),
          b = w,
          y = l.extend(
            function (t) {
              var e,
                a,
                n,
                i,
                s,
                r = t.value.length;
              ((this._badness = []),
                (this._level = _.LEVELS[t.level]),
                (this._polynomial = []),
                (this._value = t.value),
                (this._version = 0),
                (this._stringBuffer = []));
              while (this._version < 40)
                if (
                  (this._version++,
                  (n = 4 * (this._level - 1) + 16 * (this._version - 1)),
                  (i = _.BLOCKS[n++]),
                  (s = _.BLOCKS[n++]),
                  (e = _.BLOCKS[n++]),
                  (a = _.BLOCKS[n]),
                  (n = e * (i + s) + s - 3 + (this._version <= 9)),
                  r <= n)
                )
                  break;
              ((this._dataBlock = e),
                (this._eccBlock = a),
                (this._neccBlock1 = i),
                (this._neccBlock2 = s));
              var o = (this.width = 17 + 4 * this._version);
              ((this.buffer = y._createArray(o * o)),
                (this._ecc = y._createArray(e + (e + a) * (i + s) + s)),
                (this._mask = y._createArray((o * (o + 1) + 1) / 2)),
                this._insertFinders(),
                this._insertAlignments(),
                (this.buffer[8 + o * (o - 8)] = 1),
                this._insertTimingGap(),
                this._reverseMask(),
                this._insertTimingRowAndColumn(),
                this._insertVersion(),
                this._syncMask(),
                this._convertBitStream(r),
                this._calculatePolynomial(),
                this._appendEccToData(),
                this._interleaveBlocks(),
                this._pack(),
                this._finish());
            },
            {
              _addAlignment: function (t, e) {
                var a,
                  n = this.buffer,
                  i = this.width;
                for (n[t + i * e] = 1, a = -2; a < 2; a++)
                  ((n[t + a + i * (e - 2)] = 1),
                    (n[t - 2 + i * (e + a + 1)] = 1),
                    (n[t + 2 + i * (e + a)] = 1),
                    (n[t + a + 1 + i * (e + 2)] = 1));
                for (a = 0; a < 2; a++)
                  (this._setMask(t - 1, e + a),
                    this._setMask(t + 1, e - a),
                    this._setMask(t - a, e - 1),
                    this._setMask(t + a, e + 1));
              },
              _appendData: function (t, e, a, n) {
                var i,
                  s,
                  r,
                  o = this._polynomial,
                  c = this._stringBuffer;
                for (s = 0; s < n; s++) c[a + s] = 0;
                for (s = 0; s < e; s++) {
                  if (((i = g.LOG[c[t + s] ^ c[a]]), 255 !== i))
                    for (r = 1; r < n; r++)
                      c[a + r - 1] =
                        c[a + r] ^ g.EXPONENT[y._modN(i + o[n - r])];
                  else for (r = a; r < a + n; r++) c[r] = c[r + 1];
                  c[a + n - 1] = 255 === i ? 0 : g.EXPONENT[y._modN(i + o[0])];
                }
              },
              _appendEccToData: function () {
                var t,
                  e = 0,
                  a = this._dataBlock,
                  n = this._calculateMaxLength(),
                  i = this._eccBlock;
                for (t = 0; t < this._neccBlock1; t++)
                  (this._appendData(e, a, n, i), (e += a), (n += i));
                for (t = 0; t < this._neccBlock2; t++)
                  (this._appendData(e, a + 1, n, i), (e += a + 1), (n += i));
              },
              _applyMask: function (t) {
                var e,
                  a,
                  n,
                  i,
                  s = this.buffer,
                  r = this.width;
                switch (t) {
                  case 0:
                    for (i = 0; i < r; i++)
                      for (n = 0; n < r; n++)
                        (n + i) & 1 ||
                          this._isMasked(n, i) ||
                          (s[n + i * r] ^= 1);
                    break;
                  case 1:
                    for (i = 0; i < r; i++)
                      for (n = 0; n < r; n++)
                        1 & i || this._isMasked(n, i) || (s[n + i * r] ^= 1);
                    break;
                  case 2:
                    for (i = 0; i < r; i++)
                      for (e = 0, n = 0; n < r; n++, e++)
                        (3 === e && (e = 0),
                          e || this._isMasked(n, i) || (s[n + i * r] ^= 1));
                    break;
                  case 3:
                    for (a = 0, i = 0; i < r; i++, a++)
                      for (3 === a && (a = 0), e = a, n = 0; n < r; n++, e++)
                        (3 === e && (e = 0),
                          e || this._isMasked(n, i) || (s[n + i * r] ^= 1));
                    break;
                  case 4:
                    for (i = 0; i < r; i++)
                      for (e = 0, a = (i >> 1) & 1, n = 0; n < r; n++, e++)
                        (3 === e && ((e = 0), (a = !a)),
                          a || this._isMasked(n, i) || (s[n + i * r] ^= 1));
                    break;
                  case 5:
                    for (a = 0, i = 0; i < r; i++, a++)
                      for (3 === a && (a = 0), e = 0, n = 0; n < r; n++, e++)
                        (3 === e && (e = 0),
                          (n & i & 1) + !(!e | !a) ||
                            this._isMasked(n, i) ||
                            (s[n + i * r] ^= 1));
                    break;
                  case 6:
                    for (a = 0, i = 0; i < r; i++, a++)
                      for (3 === a && (a = 0), e = 0, n = 0; n < r; n++, e++)
                        (3 === e && (e = 0),
                          ((n & i & 1) + (e && e === a)) & 1 ||
                            this._isMasked(n, i) ||
                            (s[n + i * r] ^= 1));
                    break;
                  case 7:
                    for (a = 0, i = 0; i < r; i++, a++)
                      for (3 === a && (a = 0), e = 0, n = 0; n < r; n++, e++)
                        (3 === e && (e = 0),
                          ((e && e === a) + ((n + i) & 1)) & 1 ||
                            this._isMasked(n, i) ||
                            (s[n + i * r] ^= 1));
                    break;
                }
              },
              _calculateMaxLength: function () {
                return (
                  this._dataBlock * (this._neccBlock1 + this._neccBlock2) +
                  this._neccBlock2
                );
              },
              _calculatePolynomial: function () {
                var t,
                  e,
                  a = this._eccBlock,
                  n = this._polynomial;
                for (n[0] = 1, t = 0; t < a; t++) {
                  for (n[t + 1] = 1, e = t; e > 0; e--)
                    n[e] = n[e]
                      ? n[e - 1] ^ g.EXPONENT[y._modN(g.LOG[n[e]] + t)]
                      : n[e - 1];
                  n[0] = g.EXPONENT[y._modN(g.LOG[n[0]] + t)];
                }
                for (t = 0; t <= a; t++) n[t] = g.LOG[n[t]];
              },
              _checkBadness: function () {
                var t,
                  e,
                  a,
                  n,
                  i,
                  s = 0,
                  r = this._badness,
                  o = this.buffer,
                  c = this.width;
                for (i = 0; i < c - 1; i++)
                  for (n = 0; n < c - 1; n++)
                    ((o[n + c * i] &&
                      o[n + 1 + c * i] &&
                      o[n + c * (i + 1)] &&
                      o[n + 1 + c * (i + 1)]) ||
                      !(
                        o[n + c * i] ||
                        o[n + 1 + c * i] ||
                        o[n + c * (i + 1)] ||
                        o[n + 1 + c * (i + 1)]
                      )) &&
                      (s += y.N2);
                var l = 0;
                for (i = 0; i < c; i++) {
                  for (a = 0, r[0] = 0, t = 0, n = 0; n < c; n++)
                    ((e = o[n + c * i]),
                      t === e ? r[a]++ : (r[++a] = 1),
                      (t = e),
                      (l += t ? 1 : -1));
                  s += this._getBadness(a);
                }
                l < 0 && (l = -l);
                var d = 0,
                  u = l;
                ((u += u << 2), (u <<= 1));
                while (u > c * c) ((u -= c * c), d++);
                for (s += d * y.N4, n = 0; n < c; n++) {
                  for (a = 0, r[0] = 0, t = 0, i = 0; i < c; i++)
                    ((e = o[n + c * i]),
                      t === e ? r[a]++ : (r[++a] = 1),
                      (t = e));
                  s += this._getBadness(a);
                }
                return s;
              },
              _convertBitStream: function (t) {
                var e,
                  a,
                  n = this._ecc,
                  i = this._version;
                for (a = 0; a < t; a++) n[a] = this._value.charCodeAt(a);
                var s = (this._stringBuffer = n.slice()),
                  r = this._calculateMaxLength();
                t >= r - 2 && ((t = r - 2), i > 9 && t--);
                var o = t;
                if (i > 9) {
                  ((s[o + 2] = 0), (s[o + 3] = 0));
                  while (o--)
                    ((e = s[o]),
                      (s[o + 3] |= 255 & (e << 4)),
                      (s[o + 2] = e >> 4));
                  ((s[2] |= 255 & (t << 4)),
                    (s[1] = t >> 4),
                    (s[0] = 64 | (t >> 12)));
                } else {
                  ((s[o + 1] = 0), (s[o + 2] = 0));
                  while (o--)
                    ((e = s[o]),
                      (s[o + 2] |= 255 & (e << 4)),
                      (s[o + 1] = e >> 4));
                  ((s[1] |= 255 & (t << 4)), (s[0] = 64 | (t >> 4)));
                }
                o = t + 3 - (i < 10);
                while (o < r) ((s[o++] = 236), (s[o++] = 17));
              },
              _getBadness: function (t) {
                var e,
                  a = 0,
                  n = this._badness;
                for (e = 0; e <= t; e++) n[e] >= 5 && (a += y.N1 + n[e] - 5);
                for (e = 3; e < t - 1; e += 2)
                  n[e - 2] === n[e + 2] &&
                    n[e + 2] === n[e - 1] &&
                    n[e - 1] === n[e + 1] &&
                    3 * n[e - 1] === n[e] &&
                    (0 === n[e - 3] ||
                      e + 3 > t ||
                      3 * n[e - 3] >= 4 * n[e] ||
                      3 * n[e + 3] >= 4 * n[e]) &&
                    (a += y.N3);
                return a;
              },
              _finish: function () {
                var t, e;
                this._stringBuffer = this.buffer.slice();
                var a = 0,
                  n = 3e4;
                for (e = 0; e < 8; e++) {
                  if (
                    (this._applyMask(e),
                    (t = this._checkBadness()),
                    t < n && ((n = t), (a = e)),
                    7 === a)
                  )
                    break;
                  this.buffer = this._stringBuffer.slice();
                }
                (a !== e && this._applyMask(a),
                  (n = _.FINAL_FORMAT[a + ((this._level - 1) << 3)]));
                var i = this.buffer,
                  s = this.width;
                for (e = 0; e < 8; e++, n >>= 1)
                  1 & n &&
                    ((i[s - 1 - e + 8 * s] = 1),
                    e < 6 ? (i[8 + s * e] = 1) : (i[8 + s * (e + 1)] = 1));
                for (e = 0; e < 7; e++, n >>= 1)
                  1 & n &&
                    ((i[8 + s * (s - 7 + e)] = 1),
                    e ? (i[6 - e + 8 * s] = 1) : (i[7 + 8 * s] = 1));
              },
              _interleaveBlocks: function () {
                var t,
                  e,
                  a = this._dataBlock,
                  n = this._ecc,
                  i = this._eccBlock,
                  s = 0,
                  r = this._calculateMaxLength(),
                  o = this._neccBlock1,
                  c = this._neccBlock2,
                  l = this._stringBuffer;
                for (t = 0; t < a; t++) {
                  for (e = 0; e < o; e++) n[s++] = l[t + e * a];
                  for (e = 0; e < c; e++) n[s++] = l[o * a + t + e * (a + 1)];
                }
                for (e = 0; e < c; e++) n[s++] = l[o * a + t + e * (a + 1)];
                for (t = 0; t < i; t++)
                  for (e = 0; e < o + c; e++) n[s++] = l[r + t + e * i];
                this._stringBuffer = n;
              },
              _insertAlignments: function () {
                var t,
                  e,
                  a,
                  n = this._version,
                  i = this.width;
                if (n > 1)
                  for (t = h.BLOCK[n], a = i - 7; ; ) {
                    e = i - 7;
                    while (e > t - 3) {
                      if ((this._addAlignment(e, a), e < t)) break;
                      e -= t;
                    }
                    if (a <= t + 9) break;
                    ((a -= t),
                      this._addAlignment(6, a),
                      this._addAlignment(a, 6));
                  }
              },
              _insertFinders: function () {
                var t,
                  e,
                  a,
                  n,
                  i = this.buffer,
                  s = this.width;
                for (t = 0; t < 3; t++) {
                  for (
                    e = 0,
                      n = 0,
                      1 === t && (e = s - 7),
                      2 === t && (n = s - 7),
                      i[n + 3 + s * (e + 3)] = 1,
                      a = 0;
                    a < 6;
                    a++
                  )
                    ((i[n + a + s * e] = 1),
                      (i[n + s * (e + a + 1)] = 1),
                      (i[n + 6 + s * (e + a)] = 1),
                      (i[n + a + 1 + s * (e + 6)] = 1));
                  for (a = 1; a < 5; a++)
                    (this._setMask(n + a, e + 1),
                      this._setMask(n + 1, e + a + 1),
                      this._setMask(n + 5, e + a),
                      this._setMask(n + a + 1, e + 5));
                  for (a = 2; a < 4; a++)
                    ((i[n + a + s * (e + 2)] = 1),
                      (i[n + 2 + s * (e + a + 1)] = 1),
                      (i[n + 4 + s * (e + a)] = 1),
                      (i[n + a + 1 + s * (e + 4)] = 1));
                }
              },
              _insertTimingGap: function () {
                var t,
                  e,
                  a = this.width;
                for (e = 0; e < 7; e++)
                  (this._setMask(7, e),
                    this._setMask(a - 8, e),
                    this._setMask(7, e + a - 7));
                for (t = 0; t < 8; t++)
                  (this._setMask(t, 7),
                    this._setMask(t + a - 8, 7),
                    this._setMask(t, a - 8));
              },
              _insertTimingRowAndColumn: function () {
                var t,
                  e = this.buffer,
                  a = this.width;
                for (t = 0; t < a - 14; t++)
                  1 & t
                    ? (this._setMask(8 + t, 6), this._setMask(6, 8 + t))
                    : ((e[8 + t + 6 * a] = 1), (e[6 + a * (8 + t)] = 1));
              },
              _insertVersion: function () {
                var t,
                  e,
                  a,
                  n,
                  i = this.buffer,
                  s = this._version,
                  r = this.width;
                if (s > 6)
                  for (t = b.BLOCK[s - 7], e = 17, a = 0; a < 6; a++)
                    for (n = 0; n < 3; n++, e--)
                      1 & (e > 11 ? s >> (e - 12) : t >> e)
                        ? ((i[5 - a + r * (2 - n + r - 11)] = 1),
                          (i[2 - n + r - 11 + r * (5 - a)] = 1))
                        : (this._setMask(5 - a, 2 - n + r - 11),
                          this._setMask(2 - n + r - 11, 5 - a));
              },
              _isMasked: function (t, e) {
                var a = y._getMaskBit(t, e);
                return 1 === this._mask[a];
              },
              _pack: function () {
                var t,
                  e,
                  a,
                  n = 1,
                  i = 1,
                  s = this.width,
                  r = s - 1,
                  o = s - 1,
                  c =
                    (this._dataBlock + this._eccBlock) *
                      (this._neccBlock1 + this._neccBlock2) +
                    this._neccBlock2;
                for (e = 0; e < c; e++)
                  for (t = this._stringBuffer[e], a = 0; a < 8; a++, t <<= 1) {
                    128 & t && (this.buffer[r + s * o] = 1);
                    do {
                      (i
                        ? r--
                        : (r++,
                          n
                            ? 0 !== o
                              ? o--
                              : ((r -= 2), (n = !n), 6 === r && (r--, (o = 9)))
                            : o !== s - 1
                              ? o++
                              : ((r -= 2),
                                (n = !n),
                                6 === r && (r--, (o -= 8)))),
                        (i = !i));
                    } while (this._isMasked(r, o));
                  }
              },
              _reverseMask: function () {
                var t,
                  e,
                  a = this.width;
                for (t = 0; t < 9; t++) this._setMask(t, 8);
                for (t = 0; t < 8; t++)
                  (this._setMask(t + a - 8, 8), this._setMask(8, t));
                for (e = 0; e < 7; e++) this._setMask(8, e + a - 7);
              },
              _setMask: function (t, e) {
                var a = y._getMaskBit(t, e);
                this._mask[a] = 1;
              },
              _syncMask: function () {
                var t,
                  e,
                  a = this.width;
                for (e = 0; e < a; e++)
                  for (t = 0; t <= e; t++)
                    this.buffer[t + a * e] && this._setMask(t, e);
              },
            },
            {
              _createArray: function (t) {
                var e,
                  a = [];
                for (e = 0; e < t; e++) a[e] = 0;
                return a;
              },
              _getMaskBit: function (t, e) {
                var a;
                return (
                  t > e && ((a = t), (t = e), (e = a)),
                  (a = e),
                  (a += e * e),
                  (a >>= 1),
                  (a += t),
                  a
                );
              },
              _modN: function (t) {
                while (t >= 255) ((t -= 255), (t = (t >> 8) + (255 & t)));
                return t;
              },
              N1: 3,
              N2: 3,
              N3: 40,
              N4: 10,
            },
          ),
          C = y,
          x = u.extend({
            draw: function () {
              this.element.src = this.qrious.toDataURL();
            },
            reset: function () {
              this.element.src = "";
            },
            resize: function () {
              var t = this.element;
              t.width = t.height = this.qrious.size;
            },
          }),
          B = x,
          T = l.extend(
            function (t, e, a, n) {
              ((this.name = t),
                (this.modifiable = Boolean(e)),
                (this.defaultValue = a),
                (this._valueTransformer = n));
            },
            {
              transform: function (t) {
                var e = this._valueTransformer;
                return "function" === typeof e ? e(t, this) : t;
              },
            },
          ),
          $ = T,
          A = l.extend(null, {
            abs: function (t) {
              return null != t ? Math.abs(t) : null;
            },
            hasOwn: function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            },
            noop: function () {},
            toUpperCase: function (t) {
              return null != t ? t.toUpperCase() : null;
            },
          }),
          P = A,
          O = l.extend(
            function (t) {
              ((this.options = {}),
                t.forEach(function (t) {
                  this.options[t.name] = t;
                }, this));
            },
            {
              exists: function (t) {
                return null != this.options[t];
              },
              get: function (t, e) {
                return O._get(this.options[t], e);
              },
              getAll: function (t) {
                var e,
                  a = this.options,
                  n = {};
                for (e in a) P.hasOwn(a, e) && (n[e] = O._get(a[e], t));
                return n;
              },
              init: function (t, e, a) {
                var n, i;
                for (n in ("function" !== typeof a && (a = P.noop),
                this.options))
                  P.hasOwn(this.options, n) &&
                    ((i = this.options[n]),
                    O._set(i, i.defaultValue, e),
                    O._createAccessor(i, e, a));
                this._setAll(t, e, !0);
              },
              set: function (t, e, a) {
                return this._set(t, e, a);
              },
              setAll: function (t, e) {
                return this._setAll(t, e);
              },
              _set: function (t, e, a, n) {
                var i = this.options[t];
                if (!i) throw new Error("Invalid option: " + t);
                if (!i.modifiable && !n)
                  throw new Error("Option cannot be modified: " + t);
                return O._set(i, e, a);
              },
              _setAll: function (t, e, a) {
                if (!t) return !1;
                var n,
                  i = !1;
                for (n in t)
                  P.hasOwn(t, n) && this._set(n, t[n], e, a) && (i = !0);
                return i;
              },
            },
            {
              _createAccessor: function (t, e, a) {
                var n = {
                  get: function () {
                    return O._get(t, e);
                  },
                };
                (t.modifiable &&
                  (n.set = function (n) {
                    O._set(t, n, e) && a(n, t);
                  }),
                  Object.defineProperty(e, t.name, n));
              },
              _get: function (t, e) {
                return e["_" + t.name];
              },
              _set: function (t, e, a) {
                var n = "_" + t.name,
                  i = a[n],
                  s = t.transform(null != e ? e : t.defaultValue);
                return ((a[n] = s), s !== i);
              },
            },
          ),
          M = O,
          E = l.extend(
            function () {
              this._services = {};
            },
            {
              getService: function (t) {
                var e = this._services[t];
                if (!e)
                  throw new Error(
                    "Service is not being managed with name: " + t,
                  );
                return e;
              },
              setService: function (t, e) {
                if (this._services[t])
                  throw new Error("Service is already managed with name: " + t);
                e && (this._services[t] = e);
              },
            },
          ),
          S = E,
          N = new M([
            new $("background", !0, "white"),
            new $("backgroundAlpha", !0, 1, P.abs),
            new $("element"),
            new $("foreground", !0, "black"),
            new $("foregroundAlpha", !0, 1, P.abs),
            new $("level", !0, "L", P.toUpperCase),
            new $("mime", !0, "image/png"),
            new $("padding", !0, null, P.abs),
            new $("size", !0, 100, P.abs),
            new $("value", !0, ""),
          ]),
          V = new S(),
          I = l.extend(
            function (t) {
              N.init(t, this, this.update.bind(this));
              var e = N.get("element", this),
                a = V.getService("element"),
                n = e && a.isCanvas(e) ? e : a.createCanvas(),
                i = e && a.isImage(e) ? e : a.createImage();
              ((this._canvasRenderer = new v(this, n, !0)),
                (this._imageRenderer = new B(this, i, i === e)),
                this.update());
            },
            {
              get: function () {
                return N.getAll(this);
              },
              set: function (t) {
                N.setAll(t, this) && this.update();
              },
              toDataURL: function (t) {
                return this.canvas.toDataURL(t || this.mime);
              },
              update: function () {
                var t = new C({ level: this.level, value: this.value });
                (this._canvasRenderer.render(t), this._imageRenderer.render(t));
              },
            },
            {
              use: function (t) {
                V.setService(t.getName(), t);
              },
            },
          );
        Object.defineProperties(I.prototype, {
          canvas: {
            get: function () {
              return this._canvasRenderer.getElement();
            },
          },
          image: {
            get: function () {
              return this._imageRenderer.getElement();
            },
          },
        });
        var L = I,
          D = L,
          U = l.extend({ getName: function () {} }),
          R = U,
          z = R.extend({
            createCanvas: function () {},
            createImage: function () {},
            getName: function () {
              return "element";
            },
            isCanvas: function (t) {},
            isImage: function (t) {},
          }),
          j = z,
          W = j.extend({
            createCanvas: function () {
              return document.createElement("canvas");
            },
            createImage: function () {
              return document.createElement("img");
            },
            isCanvas: function (t) {
              return t instanceof HTMLCanvasElement;
            },
            isImage: function (t) {
              return t instanceof HTMLImageElement;
            },
          }),
          F = W;
        D.use(new F());
        var q = D;
        return q;
      });
    },
    3858: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(2842));
      e.default = {
        name: "PasswordChecker",
        components: { Edit: i.default },
        props: {
          isDefaultWidth: { type: Boolean, default: !1 },
          warningText: { type: String, default: "" },
          headline: {
            type: String,
            default() {
              return this.$t("loginPage.enterPassword");
            },
          },
          buttonTextBack: {
            type: String,
            default() {
              return this.$t("button.back");
            },
          },
          buttonTextConfirm: {
            type: String,
            default() {
              return this.$t("button.confirm");
            },
          },
        },
        data() {
          return { password: "", error: null };
        },
        methods: {
          async validatePassword() {
            return (
              (this.error = null),
              "" === this.password
                ? (this.error = this.$t("error.passwordCantBeBlank"))
                : (await this.$wallets.checkPassword(this.password)) ||
                  (this.error = this.$t("error.wrongPassword")),
              null === this.error
            );
          },
          async handleConfirm() {
            (await this.validatePassword()) &&
              this.$emit("handleConfirm", this.password);
          },
          handleNavigateBack() {
            this.$emit("handleNavigateBack");
          },
        },
      };
    },
    5748: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(11552)),
        s = n(a(11555)),
        r = n(a(11558));
      e.default = {
        name: "AddCustomTokenOrCoinTabs",
        data() {
          const t = [
              {
                label: this.$t("addCustomToken.tabs.tokenByAddress"),
                component: i.default,
              },
              {
                label: this.$t("addCustomToken.tabs.tokenByContract"),
                component: s.default,
              },
              {
                label: this.$t("addCustomToken.tabs.coin"),
                component: r.default,
              },
            ],
            e = t[0];
          return { menu: t, activeMenu: e };
        },
        mounted() {
          (this.$ga.event("User Movement", "add-token-page", {
            clientID: this.$ga.customParams.uid,
          }),
            this.$bus.$on("close-token-custom-add", this.close));
        },
        beforeDestroy() {
          this.$bus.$off("close-token-custom-add", this.close);
        },
        methods: {
          handleChangeActiveMenu(t) {
            this.activeMenu = t;
          },
          close() {
            this.$emit("close");
          },
        },
      };
    },
    5749: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(3857)),
        s = n(a(6966));
      e.default = {
        name: "AddCustomTokenByAddress",
        components: { AddCustomTokenOrCoinDropdown: s.default },
        data() {
          return { activeCoin: this.$wallets.getWallet("ETH") };
        },
        computed: {
          qrCodeImage() {
            return new i.default({
              value: this.activeCoin.address,
              size: 200,
              mime: "image/png",
            }).toDataURL();
          },
        },
      };
    },
    5750: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AddCustomTokenOrCoinDropdown",
        props: { defaultActiveTicker: { type: String, required: !0 } },
        data() {
          return { isDropdownCoins: !1, activeCoin: {} };
        },
        computed: {
          dropdownItems() {
            var t;
            return (
              null !== (t = this.$wallets.getWalletsWithCustomTokens()) &&
              void 0 !== t
                ? t
                : []
            ).map((t) => ({
              icon: this.$iconClass(t),
              ticker: t.ticker,
              name: t.name,
              title: t.name,
              address: t.address,
              id: t.id,
            }));
          },
        },
        mounted() {
          this.activeCoin = this.dropdownItems.find(
            (t) => t.id === this.defaultActiveTicker,
          );
        },
        methods: {
          selectCoin(t) {
            ((this.activeCoin = t),
              (this.isDropdownCoins = !1),
              this.$emit("changeCoin", this.activeCoin));
          },
          closeDropdown() {
            this.isDropdownCoins && (this.isDropdownCoins = !1);
          },
          toggleDropdown() {
            this.isDropdownCoins = !this.isDropdownCoins;
          },
        },
      };
    },
    5751: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(375),
        s = n(a(6966)),
        r = n(a(6967));
      e.default = {
        name: "AddCustomTokenByAddress",
        components: {
          AddCustomTokenOrCoinDropdown: s.default,
          AddCustomTokenOrCoinSuccess: r.default,
        },
        mixins: [i.AddCustomToken],
        data() {
          return { coin: this.$wallets.getWallet("ETH"), createdToken: null };
        },
        methods: {
          handleChangeCoin(t) {
            this.coin = t;
          },
          async onChangeContract(t) {
            ((this.form.value.contract = String(t).trim()),
              await this.validateContract(),
              await this.changeContract());
          },
          async addToken() {
            if ((await this.validateAll(), this.isValid))
              try {
                ((this.createdToken = (
                  await this.parent.createCustomToken(
                    {
                      name: this.form.value.name,
                      ticker: this.form.value.ticker,
                      decimal: parseInt(this.form.value.decimal),
                      contract: this.form.value.contract.toLowerCase(),
                      uniqueField: this.form.value.contract.toLowerCase(),
                    },
                    this.$wallets,
                  )
                )[0]),
                  this.$emitter.emit("save::wallets"),
                  this.clearForm());
              } catch (t) {
                console.log(t);
              }
          },
          clearForm() {
            ((this.form.value.contract = ""),
              (this.form.value.name = ""),
              (this.form.value.ticker = ""),
              (this.form.value.decimal = ""));
          },
        },
      };
    },
    5752: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(68);
      e.default = {
        name: "AddCustomTokenOrCoinSuccess",
        props: {
          coin: { type: Object, required: !0 },
          typeOfAction: {
            type: String,
            required: !0,
            validator(t) {
              return ["update", "delete", "create"].includes(t);
            },
          },
        },
        computed: {
          text() {
            return this.wallet instanceof n.Token
              ? this.$t("addCustomToken.tokenInfo")
              : this.$t("addCustomToken.coinInfo");
          },
          wallet() {
            return this.$wallets.getWallet(this.coin.id);
          },
          headline() {
            const t = this.wallet.name;
            return "create" === this.typeOfAction
              ? this.$t("addCustomToken.added", { name: t })
              : "update" === this.typeOfAction
                ? this.$t("addCustomToken.updated", { name: t })
                : "delete" === this.typeOfAction
                  ? this.$t("addCustomToken.deleted", { name: t })
                  : null;
          },
        },
        methods: {
          handleNavigateToCoinOrToken() {
            (this.$router.push("/main/info/" + this.wallet.id),
              this.$bus.$emit("close-token-custom-add"));
          },
          handleNavigateToWallet() {
            ("delete" === this.typeOfAction &&
              (this.$bus.$emit("close-info-coin"),
              this.$bus.$emit("close-send-coin")),
              this.$bus.$emit("close-token-custom-add"));
          },
          closePopup() {
            this.$emit("close");
          },
        },
      };
    },
    5753: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(403),
        s = n(a(6967)),
        r = n(a(5754));
      const o = "This field is required.";
      e.default = {
        name: "AddCustomCoin",
        components: {
          AddCustomTokenOrCoinSuccess: s.default,
          PasswordChecker: r.default,
        },
        data() {
          return {
            isAdding: !1,
            createdCoin: null,
            isPasswordStep: !1,
            form: {
              value: {
                name: null,
                rpcBaseUrl: null,
                chainId: null,
                ticker: null,
                explorerWebUrl: null,
              },
              error: {
                name: null,
                rpcBaseUrl: null,
                chainId: null,
                ticker: null,
                explorerWebUrl: null,
              },
            },
          };
        },
        computed: {
          isValid() {
            return Object.values(this.form.error).every((t) => null === t);
          },
        },
        methods: {
          setWebUrl(t) {
            this.form.value.explorerWebUrl = String(t).trim();
          },
          setRPCURL(t) {
            ((this.form.value.rpcBaseUrl = String(t).trim()),
              this.validateRPCURL());
          },
          validateRPCURL() {
            if (
              ((this.form.error.rpcBaseUrl = null), this.form.value.rpcBaseUrl)
            ) {
              const t = this.$t("error.couldNotValidateRPCCheckHTTPS");
              try {
                (0, i.isRpcBaseUrlValid)(this.form.value.rpcBaseUrl) ||
                  (this.form.error.rpcBaseUrl = t);
              } catch {
                this.form.error.rpcBaseUrl = t;
              }
            } else this.form.error.rpcBaseUrl = o;
          },
          setName(t) {
            ((this.form.value.name = String(t).trim()), this.validateName());
          },
          validateName() {
            ((this.form.error.name = null),
              this.form.value.name || (this.form.error.name = o));
          },
          setChainID(t) {
            ((this.form.value.chainId = String(t).trim()),
              this.validateChainID());
          },
          validateChainID() {
            ((this.form.error.chainId = null),
              this.form.value.chainId
                ? Number.isNaN(+this.form.value.chainId) &&
                  (this.form.error.chainId = this.$t(
                    "error.couldNotValidateChainIDNumbersOnly",
                  ))
                : (this.form.error.chainId = o));
          },
          setCurrency(t) {
            ((this.form.value.ticker = String(t).trim()),
              this.validateCurrency());
          },
          validateCurrency() {
            var t;
            ((this.form.error.ticker = null),
              this.form.value.ticker
                ? "eth" ===
                    (null !== (t = this.form.value.ticker) && void 0 !== t
                      ? t
                      : ""
                    ).toLowerCase() &&
                  (this.form.error.ticker = this.$t(
                    "error.currencySymbolTaken",
                  ))
                : (this.form.error.ticker = o));
          },
          validateAll() {
            (this.validateChainID(),
              this.validateCurrency(),
              this.validateRPCURL(),
              this.validateName());
          },
          validateForm() {
            (this.validateAll(), this.isValid && (this.isPasswordStep = !0));
          },
          handleSuccessPopupClose() {
            ((this.isPasswordStep = !1),
              (this.createdCoin = null),
              Object.keys(this.form).forEach((t) => {
                Object.prototype.hasOwnProperty.call(form, t) &&
                  Object.keys(this.form[t]).forEach((e) => {
                    this.form[t][e] = null;
                  });
              }));
          },
          async addCoin(t) {
            ((this.isPasswordStep = !1), (this.isAdding = !0));
            try {
              (null === this.form.value.explorerWebUrl &&
                (this.form.value.explorerWebUrl = ""),
                (this.createdCoin = await this.$wallets.createCustomWallet(
                  t,
                  this.form.value,
                )),
                this.$emitter.emit("save::wallets"));
            } catch (e) {
              console.error(e);
            }
            this.isAdding = !1;
          },
        },
      };
    },
    5754: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3858),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(5757),
        o = a(5);
      function c(t) {
        a(5755);
      }
      var l = !1,
        d = c,
        u = "data-v-865a6cca",
        f = null,
        v = Object(o["a"])(i.a, r["a"], r["b"], l, d, u, f);
      e["default"] = v.exports;
    },
    5755: function (t, e, a) {
      var n = a(5756);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("cdd1ade0", n, !0, {});
    },
    5756: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-865a6cca{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-865a6cca{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-865a6cca{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-865a6cca{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-865a6cca{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-865a6cca{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-865a6cca{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-865a6cca{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-865a6cca{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-865a6cca{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-865a6cca{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-865a6cca]{color:#6b963b\n}\n.text-red[data-v-865a6cca]{color:#c03647\n}\n.text-gray[data-v-865a6cca]{color:#8290ad\n}\n.text-blue[data-v-865a6cca]{color:#00c2ff\n}\n.text-danger[data-v-865a6cca]{color:#8c4545\n}\n.text-title[data-v-865a6cca]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-865a6cca]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-865a6cca]{color:#f1b70b\n}\n.text-white[data-v-865a6cca]{color:#fff\n}\n.text-bigger[data-v-865a6cca]{font-size:18px;font-weight:500\n}\n.text-big[data-v-865a6cca]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-865a6cca]{font-size:14px\n}\n.text-middle-height[data-v-865a6cca]{line-height:24px\n}\n.text-small[data-v-865a6cca]{font-size:12px\n}\n.text-word-break[data-v-865a6cca]{word-break:break-all\n}\n.text-right[data-v-865a6cca]{text-align:right\n}\n.text-left[data-v-865a6cca]{text-align:left\n}\n.text-line-middle[data-v-865a6cca]{line-height:24px\n}\n.text-link[data-v-865a6cca],.text-link-underline[data-v-865a6cca]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-865a6cca]:hover,.text-link-underline[data-v-865a6cca]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-865a6cca]{text-decoration:underline\n}\n.text-center[data-v-865a6cca]{text-align:center\n}\n.text-pointer[data-v-865a6cca]{cursor:pointer\n}\n.gap-10[data-v-865a6cca]{gap:10px\n}\n.m-t-auto[data-v-865a6cca]{margin-top:auto\n}\n.m-t-4[data-v-865a6cca]{margin-top:4px\n}\n.m-t-5[data-v-865a6cca]{margin-top:5px\n}\n.m-t-8[data-v-865a6cca]{margin-top:10px\n}\n.m-t-10[data-v-865a6cca]{margin-top:10px\n}\n.m-t-13[data-v-865a6cca]{margin-top:10px\n}\n.m-t-15[data-v-865a6cca]{margin-top:15px\n}\n.m-t-16[data-v-865a6cca]{margin-top:16px\n}\n.m-t-20[data-v-865a6cca]{margin-top:20px\n}\n.m-t-24[data-v-865a6cca]{margin-top:24px\n}\n.m-t-25[data-v-865a6cca]{margin-top:25px\n}\n.m-t-26[data-v-865a6cca]{margin-top:26px\n}\n.m-t-30[data-v-865a6cca]{margin-top:30px\n}\n.m-t-35[data-v-865a6cca]{margin-top:35px\n}\n.m-t-40[data-v-865a6cca]{margin-top:40px\n}\n.m-t-45[data-v-865a6cca]{margin-top:45px\n}\n.m-t-50[data-v-865a6cca]{margin-top:50px\n}\n.m-t-60[data-v-865a6cca]{margin-top:60px\n}\n.m-t-65[data-v-865a6cca]{margin-top:65px\n}\n.m-t-80[data-v-865a6cca]{margin-top:80px\n}\n.m-l-5[data-v-865a6cca]{margin-left:5px\n}\n.m-l-10[data-v-865a6cca]{margin-left:10px\n}\n.m-l-15[data-v-865a6cca]{margin-left:15px\n}\n.m-l-20[data-v-865a6cca]{margin-left:20px\n}\n.m-l-25[data-v-865a6cca]{margin-left:25px\n}\n.m-l-30[data-v-865a6cca]{margin-left:30px\n}\n.m-l-35[data-v-865a6cca]{margin-left:35px\n}\n.m-r-5[data-v-865a6cca]{margin-right:5px\n}\n.m-r-10[data-v-865a6cca]{margin-right:10px\n}\n.m-r-15[data-v-865a6cca]{margin-right:15px\n}\n.m-r-30[data-v-865a6cca]{margin-right:30px\n}\n.m-b-5[data-v-865a6cca]{margin-bottom:5px !important\n}\n.m-b-15[data-v-865a6cca]{margin-bottom:15px !important\n}\n.m-b-20[data-v-865a6cca]{margin-bottom:20px !important\n}\n.m-b-30[data-v-865a6cca]{margin-bottom:30px !important\n}\n.m-b-25[data-v-865a6cca]{margin-bottom:25px !important\n}\n.m-b-50[data-v-865a6cca]{margin-bottom:50px !important\n}\n.p-t-40[data-v-865a6cca]{padding-top:40px\n}\n.p-t-85[data-v-865a6cca]{padding-top:85px !important\n}\n.hidden[data-v-865a6cca]{opacity:0 !important\n}\n.relative[data-v-865a6cca]{position:relative\n}\n.space-nowrap[data-v-865a6cca]{white-space:nowrap\n}\n.uppercase[data-v-865a6cca]{text-transform:uppercase\n}\n.lowercase[data-v-865a6cca]{text-transform:lowercase\n}\n.fade-enter-active[data-v-865a6cca]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-865a6cca]{transition:all .1s ease-out\n}\n.fade-enter[data-v-865a6cca],.fade-leave-to[data-v-865a6cca]{opacity:0\n}\n.fade-down-enter-active[data-v-865a6cca],.fade-down-leave-active[data-v-865a6cca],.fade-down-move[data-v-865a6cca]{transition:all .15s\n}\n.fade-down-leave-active[data-v-865a6cca],.fade-down-enter-active[data-v-865a6cca]{position:absolute !important\n}\n.fade-down-enter[data-v-865a6cca],.fade-down-leave-to[data-v-865a6cca]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-865a6cca],.scale-leave-active[data-v-865a6cca],.scale-move[data-v-865a6cca]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-865a6cca],.scale-leave-to[data-v-865a6cca]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-865a6cca],.slide-leave-active[data-v-865a6cca]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-865a6cca]{transition:all .2s ease\n}\n.slide-leave-active[data-v-865a6cca]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-865a6cca],.slide-leave-to[data-v-865a6cca]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-865a6cca],.slide-leave[data-v-865a6cca]{margin-bottom:0px\n}\n.slide-enter[data-v-865a6cca],.slide-leave-to[data-v-865a6cca]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-865a6cca],.slide-in-leave-active[data-v-865a6cca]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-865a6cca]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-865a6cca]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-865a6cca]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-865a6cca]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-865a6cca],.page-fade-enter-active[data-v-865a6cca]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-865a6cca],.page-fade-leave-to[data-v-865a6cca],.page-fade-enter[data-v-865a6cca]{opacity:0\n}\n.page-fade-enter-to[data-v-865a6cca]{opacity:1\n}\n.fade-out-leave-active[data-v-865a6cca],.fade-out-enter-active[data-v-865a6cca]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-865a6cca],.fade-out-leave-to[data-v-865a6cca],.fade-out-enter[data-v-865a6cca]{opacity:0\n}\n.fade-out-enter-to[data-v-865a6cca]{opacity:1\n}\n.slide-down-enter-active[data-v-865a6cca],.slide-down-leave-active[data-v-865a6cca]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-865a6cca],.slide-down-enter[data-v-865a6cca]{top:100%\n}\n.slide-down-leave[data-v-865a6cca],.slide-down-enter-to[data-v-865a6cca]{top:0%\n}\n.slide-out-enter-active[data-v-865a6cca],.slide-out-leave-active[data-v-865a6cca]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-865a6cca]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-865a6cca]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-865a6cca]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-865a6cca],.exchange-result.slide-out-enter[data-v-865a6cca]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-865a6cca],.exchange-pending.slide-out-enter[data-v-865a6cca]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-865a6cca],.slide-left-leave-active[data-v-865a6cca]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-865a6cca]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-865a6cca]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-865a6cca]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-865a6cca],.slide-right-leave-active[data-v-865a6cca]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-865a6cca]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-865a6cca]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-865a6cca]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-865a6cca],.spin-down-leave-active[data-v-865a6cca]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-865a6cca]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-865a6cca]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-865a6cca]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-865a6cca],.spin-up-leave-active[data-v-865a6cca]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-865a6cca]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-865a6cca]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-865a6cca]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-865a6cca],.puff-out-leave-active[data-v-865a6cca]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-865a6cca]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-865a6cca]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-865a6cca],.puff-out-enter-to[data-v-865a6cca]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-865a6cca],.collapse-fade-enter-active[data-v-865a6cca]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-865a6cca],.collapse-fade-leave-to[data-v-865a6cca],.collapse-fade-enter[data-v-865a6cca]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-865a6cca]{opacity:1\n}\n.lazy-fade-leave-active[data-v-865a6cca],.lazy-fade-enter-active[data-v-865a6cca]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-865a6cca],.lazy-fade-leave-to[data-v-865a6cca],.lazy-fade-enter[data-v-865a6cca]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-865a6cca]{opacity:1\n}\n.password-checker__default-width[data-v-865a6cca]{width:450px;margin:150px auto\n}\n.password-checker__headline[data-v-865a6cca]{margin-bottom:44px\n}\n.password-checker__headline h3[data-v-865a6cca]{font-size:24px;line-height:30px;text-align:center\n}\n.password-checker__submit[data-v-865a6cca]{width:100%;display:flex;align-items:center;gap:36px\n}\n.password-checker__submit>button[data-v-865a6cca]{flex:50%\n}",
          "",
        ]));
    },
    5757: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("AtomicPopup", { on: { close: t.handleNavigateBack } }, [
            a(
              "div",
              {
                class: [
                  "password-checker form-password",
                  { "password-checker__default-width": t.isDefaultWidth },
                ],
              },
              [
                a("div", { staticClass: "password-checker__headline" }, [
                  a("h3", [t._v(t._s(t.headline))]),
                  t._v(" "),
                  t.warningText
                    ? a("div", { staticClass: "warning" }, [
                        t._v("\n        " + t._s(t.warningText) + "\n      "),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                a("Edit", {
                  staticClass: "password-checker__input",
                  attrs: {
                    modelValue: t.password,
                    placeholder: t.$t("input.password"),
                    type: "password",
                    focus: "",
                    isShowPassword: "",
                    error: t.error,
                  },
                  on: {
                    "enter-pressed": t.handleConfirm,
                    "update:modelValue": function (e) {
                      t.password = e;
                    },
                  },
                }),
                t._v(" "),
                a("div", { staticClass: "password-checker__submit" }, [
                  a(
                    "button",
                    {
                      staticClass: "button normal hover-white",
                      attrs: { "data-test-id": "back_button" },
                      on: { click: t.handleNavigateBack },
                    },
                    [t._v("\n        " + t._s(t.buttonTextBack) + "\n      ")],
                  ),
                  t._v(" "),
                  a(
                    "button",
                    {
                      staticClass: "button",
                      attrs: { "data-test-id": "confirm_button" },
                      on: { click: t.handleConfirm },
                    },
                    [
                      t._v(
                        "\n        " + t._s(t.buttonTextConfirm) + "\n      ",
                      ),
                    ],
                  ),
                ]),
              ],
              1,
            ),
          ]);
        },
        i = [];
    },
    6966: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5750),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11553),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
    6967: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5752),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var r = a(11556),
        o = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        f = Object(o["a"])(i.a, r["a"], r["b"], c, l, d, u);
      e["default"] = f.exports;
    },
  },
]);
