(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [52, 334],
  {
    11565: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5762),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(11566),
        r = i(5),
        l = !1,
        d = null,
        u = null,
        c = null,
        h = Object(r["a"])(a.a, o["a"], o["b"], l, d, u, c);
      e["default"] = h.exports;
    },
    11566: function (t, e, i) {
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
            { staticClass: "available-fee-amounts" },
            [
              t.isDisableAvailable
                ? t._e()
                : i(
                    "div",
                    {
                      staticClass: "available",
                      class: { "no-hover": "Withdrawal" === t.sendType },
                      attrs: { "data-test-id": "available_fiat" },
                    },
                    [
                      i(
                        "div",
                        {
                          staticStyle: { width: "max-content" },
                          on: {
                            click: function (e) {
                              t.isCanSetAllAvailableBalance &&
                                t.$emit("setAllAvailableBalance");
                            },
                          },
                        },
                        [
                          i("p", { staticClass: "text-gray" }, [
                            t._v(
                              "\n        " +
                                t._s(
                                  "Unstake" === t.sendType
                                    ? t.$t("sendCoin.stackedAmount")
                                    : t.$t("title.available"),
                                ) +
                                ":\n      ",
                            ),
                          ]),
                          t._v(" "),
                          t.availableBalance
                            ? i(
                                "p",
                                {
                                  staticClass: "text-white",
                                  attrs: { "data-test-id": "ticker_available" },
                                },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(
                                        t.formatFinance(t.availableBalance),
                                      ) +
                                      " " +
                                      t._s(t.wallet.ticker) +
                                      "\n      ",
                                  ),
                                ],
                              )
                            : i("loading-ellipsis"),
                          t._v(" "),
                          t.availableBalance && t.hasRate(t.wallet.id)
                            ? i(
                                "p",
                                {
                                  staticClass: "text-gray",
                                  attrs: { "data-test-id": "amount_available" },
                                },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(
                                        t.formatFinance(
                                          t.getValueFiat({
                                            value: t.availableBalance,
                                            wallet: t.wallet,
                                          }),
                                        ),
                                      ) +
                                      " " +
                                      t._s(t.fiatRate) +
                                      "\n      ",
                                  ),
                                ],
                              )
                            : t._e(),
                        ],
                        1,
                      ),
                      t._v(" "),
                      t.isCanSetAllAvailableBalance
                        ? i(
                            "button",
                            {
                              staticClass: "button small-gray",
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  return t.$emit("setAllAvailableBalance");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n      " +
                                  t._s(
                                    t.$t("sendCoin.sendTypeAll", {
                                      sendType: t.sendType,
                                    }),
                                  ) +
                                  "\n    ",
                              ),
                            ],
                          )
                        : t._e(),
                    ],
                  ),
              t._v(" "),
              i(
                "div",
                { staticClass: "network-fee" },
                [
                  i("p", { staticClass: "text-gray" }, [
                    t._v(t._s(t.$t("title.networkFee")) + ":"),
                  ]),
                  t._v(" "),
                  t.isFeePluginInitialized
                    ? [
                        i(
                          "p",
                          {
                            class: [
                              "text-white",
                              { "is-custom-fee": t.isCustomFeeSupported },
                            ],
                            attrs: { "data-test-id": "ticker_fee" },
                            on: {
                              click: function (e) {
                                t.isCustomFeeSupported &&
                                  t.$emit("toggleCustomFee");
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.feePrefix) +
                                t._s(t.fee.toCurrency(t.feeTicker)) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        t.hasRate(t.wallet.id)
                          ? i(
                              "p",
                              {
                                staticClass: "text-gray",
                                attrs: { "data-test-id": "amount_fee" },
                              },
                              [
                                t._v(
                                  "\n        " + t._s(t.fiatFee) + "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                      ]
                    : i("loading-ellipsis"),
                  t._v(" "),
                  t.isCustomFeeSupported && !t.isRate
                    ? i(
                        "button",
                        {
                          staticClass: "button small-gray is-custom-fee",
                          attrs: { type: "button" },
                          on: {
                            click: function (e) {
                              t.isCustomFeeSupported &&
                                t.$emit("toggleCustomFee");
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " + t._s(t.$t("button.setFee")) + "\n    ",
                          ),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  t.isCustomFeeSupported &&
                  t.isRate &&
                  !["BTC", "ZIL"].includes(t.feeTicker)
                    ? i(
                        "button",
                        {
                          staticClass: "button small-gray is-custom-fee",
                          attrs: {
                            type: "button",
                            "data-test-id": "default_fee_button",
                          },
                          on: {
                            click: function (e) {
                              t.isCustomFeeSupported &&
                                t.$emit("setDefaultFee");
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.$t("button.setDefault")) +
                              "\n    ",
                          ),
                        ],
                      )
                    : t._e(),
                ],
                2,
              ),
              t._v(" "),
              t._t("default"),
            ],
            2,
          );
        },
        a = [];
    },
    11567: function (t, e, i) {
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
            { staticClass: "send-coin popup" },
            [
              t.sending
                ? t._e()
                : i(
                    "div",
                    { staticClass: "close", on: { click: t.backToWallets } },
                    [t._v("\n    ✕\n  ")],
                  ),
              t._v(" "),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        !t.isPasswordShow &&
                        !t.sending &&
                        !t.isError &&
                        !t.isSuccess,
                      expression:
                        "!isPasswordShow && !sending && !isError && !isSuccess",
                    },
                  ],
                  staticClass: "form",
                },
                [
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "click-outside",
                          rawName: "v-click-outside",
                          value: t.closeCoinDropdown,
                          expression: "closeCoinDropdown",
                        },
                      ],
                      staticClass: "info send-coin",
                    },
                    [
                      t.coin.imgUri
                        ? i("memes-image", {
                            staticClass: "coin-img",
                            attrs: { uri: t.coin.imgUri },
                          })
                        : i("div", {
                            staticClass: "icon",
                            class: t.icon,
                            attrs: { "data-test-id": "send_icon" },
                            on: { click: t.toggleDropdown },
                          }),
                      t._v(" "),
                      i("p", [
                        t._v(
                          "\n        " +
                            t._s(t.$t("button.send")) +
                            "\n        ",
                        ),
                        i(
                          "span",
                          {
                            staticClass: "border",
                            attrs: { "data-test-id": "send_coin" },
                          },
                          [
                            i("span", { on: { click: t.toggleDropdown } }, [
                              t.isSkamToken
                                ? i("span", { staticClass: "skam-warning" }, [
                                    t._v(
                                      "\n              " +
                                        t._s(t.$t("unverified")) +
                                        "\n            ",
                                    ),
                                  ])
                                : t._e(),
                              t._v(
                                "\n            " +
                                  t._s(t.coin.name) +
                                  "\n          ",
                              ),
                            ]),
                            t._v(" "),
                            i(
                              "span",
                              {
                                staticClass: "text-small",
                                on: { click: t.toggleDropdown },
                              },
                              [
                                t._v(
                                  "\n            (" +
                                    t._s(t.coin.ticker) +
                                    ")\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      t.isChangeCoin
                        ? i("coin-dropdown", {
                            attrs: {
                              coins: t.dropdownCoins,
                              "show-balance": "",
                            },
                            on: { selectCoin: t.selectCoin },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                  t._v(" "),
                  i("edit", {
                    attrs: {
                      "model-value": t.inputs.address,
                      error: t.inputsError.address,
                      "is-paste-by-click": "",
                      placeholder: t.$t("message.pasteAddressOrDomain"),
                      "data-test-id": "send_input_address",
                    },
                    on: {
                      "update:modelValue": function (e) {
                        t.inputs.address = e;
                      },
                    },
                  }),
                  t._v(" "),
                  t.coin.config && t.coin.config.memoRegexp
                    ? i("edit", {
                        attrs: {
                          "model-value": t.inputs.custom,
                          "edit-placeholder": t.editPlaceholderPaymentId,
                          error: t.inputsError.custom,
                          "is-paste-by-click": "",
                          placeholder: t.placeholderPaymentId,
                          "data-test-id": "send_input_paymentId",
                        },
                        on: {
                          "update:modelValue": function (e) {
                            t.inputs.custom = e;
                          },
                        },
                      })
                    : t._e(),
                  t._v(" "),
                  i("edit-amount", {
                    staticClass: "last-child-send-coin",
                    attrs: {
                      balance: t.coin.divisibleBalance,
                      decimals: t.coin.decimal,
                      error: t.inputsError.amount,
                      "is-buy-coin": t.isBuyCoin,
                      "is-fiat": "",
                      "is-send-all-click": t.isSendAllClick,
                      "is-zero-placeholder": "",
                      "parent-ticker": t.coin.deprecatedParent,
                      "show-balance": "",
                      wallet: t.coin,
                      "model-value": t.inputs.amount,
                      placeholder: t.$t("input.amount"),
                      "data-test-id": "send_amount",
                    },
                    on: {
                      "update:modelValue": t.changeAmount,
                      setAllAvailableBalance: t.setAllAvailableBalance,
                    },
                  }),
                  t._v(" "),
                  i("available-and-fee-amounts-v2", {
                    attrs: {
                      "data-test-id": "send_networkfee",
                      fee: t.fee,
                      wallet: t.coin,
                      "is-rate": t.isRate,
                      "available-balance": String(t.availableBalance),
                      "is-custom-fee-supported": t.isCustomFeeSupported,
                      "is-fee-plugin-initialized": t.isFeePluginInitialized,
                    },
                    on: {
                      setDefaultFee: t.setDefaultFee,
                      toggleCustomFee: t.toggleCustomFee,
                      setAllAvailableBalance: t.setAllAvailableBalance,
                    },
                  }),
                  t._v(" "),
                  t.showFeeInputs && t.feePlugin.initialized
                    ? i("fee-constructor", {
                        attrs: {
                          "data-test-id": "send_controlfee",
                          wallet: t.coin,
                          "fee-plugin": t.feePlugin,
                          "is-set-fee": t.isRate,
                        },
                        on: {
                          change: t.updateBalanceAndFee,
                          setCustomGas: t.setCustomGas,
                          setCustomSatoshi: t.setCustomSatoshi,
                        },
                      })
                    : t._e(),
                  t._v(" "),
                  i(
                    "div",
                    { staticClass: "submit" },
                    [
                      i("transition", { attrs: { name: "page-fade" } }, [
                        t.isCoinDisabled([t.actionSend])
                          ? i("div", { staticClass: "error" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.getCoinDisabilityReason(t.actionSend),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.isFeeEnough
                          ? t._e()
                          : i("div", { staticClass: "error" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t("error.insufficientFundsToSend", {
                                      fee: t.fee.toCurrency(
                                        t.coin.feeWallet.ticker,
                                      ),
                                      feeTicker: "",
                                      ticker: t.coin.getUserTicker(),
                                    }),
                                  ) +
                                  "\n        ",
                              ),
                            ]),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "submit-wrapper" }, [
                        t.initSend
                          ? i("div", { staticClass: "loader" })
                          : i(
                              "button",
                              {
                                staticClass: "button",
                                attrs: {
                                  disabled: t.isDisabled,
                                  "data-test-id": "send_coin_button",
                                },
                                on: { click: t.showPasswordForm },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.send")) +
                                    "\n          ",
                                ),
                                Number(t.inputs.amount) > 0
                                  ? i("span", [
                                      t._v(
                                        " " +
                                          t._s(t.inputs.amount) +
                                          " " +
                                          t._s(t.coin.ticker) +
                                          " ",
                                      ),
                                    ])
                                  : t._e(),
                              ],
                            ),
                        t._v(" "),
                        "XMR" === t.coin.ticker && t.xmrHasFrozenBalance
                          ? i("div", { staticClass: "warn" }, [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("message.balanceNotAvailable")) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t._v(" "),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isPasswordShow,
                      expression: "isPasswordShow",
                    },
                  ],
                  staticClass: "form-password",
                },
                [
                  i("div", { staticClass: "info" }, [
                    i("p", [
                      t._v(
                        t._s(t.$t("sendCoin.send")) +
                          " " +
                          t._s(t.inputs.amount) +
                          " " +
                          t._s(t.coin.ticker),
                      ),
                    ]),
                    t._v(" "),
                    i("p", { staticClass: "text-small" }, [
                      t._v(
                        "\n        " + t._s(t.$t("sendCoin.toAddress")) + " ",
                      ),
                      i("br"),
                      t._v("\n        " + t._s(t.inputs.address) + "\n      "),
                    ]),
                  ]),
                  t._v(" "),
                  i("edit", {
                    ref: "confirmPassword",
                    attrs: {
                      "model-value": t.inputs.password,
                      error: t.inputsError.password,
                      focus: "",
                      "is-show-password": "",
                      type: t.inputTypePassword,
                      placeholder: t.$t("input.password"),
                    },
                    on: {
                      "enter-pressed": t.sendCoins,
                      "update:modelValue": function (e) {
                        t.inputs.password = e;
                      },
                    },
                  }),
                  t._v(" "),
                  i("div", { staticClass: "submit" }, [
                    i(
                      "button",
                      {
                        staticClass: "button normal hover-white",
                        attrs: { "data-test-id": "back_send" },
                        on: { click: t.backFromPassword },
                      },
                      [
                        t._v(
                          "\n        " + t._s(t.$t("button.back")) + "\n      ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { "data-test-id": "confirm_send" },
                        on: { click: t.sendCoins },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("button.confirm")) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ]),
                ],
                1,
              ),
              t._v(" "),
              t.sending
                ? i("div", { staticClass: "sending" }, [
                    i("div", { staticClass: "info" }, [
                      i("div", { staticClass: "icon", class: t.icon }),
                      t._v(" "),
                      i("p", [
                        t._v(
                          t._s(t.$t("sendCoin.sending")) +
                            " " +
                            t._s(t.inputs.amount) +
                            " " +
                            t._s(t.coin.ticker),
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    i("div", { staticClass: "loading" }),
                  ])
                : t._e(),
              t._v(" "),
              t.sending
                ? t._e()
                : i("send-coin-result", {
                    attrs: {
                      amount: t.amountResult,
                      coin: t.coin,
                      icon: t.icon,
                      "is-error": t.isError,
                      "is-success": t.isSuccess,
                      "send-type": "Send",
                      "contact-data": { tags: ["send_tag"] },
                      txid: t.txid,
                      "mail-title": t.$t("error.sendingError"),
                    },
                    on: {
                      backToForm: t.backToForm,
                      backToWallets: t.backToWallets,
                      tryAgain: t.backToForm,
                    },
                  }),
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
        d = null,
        u = null,
        c = null,
        h = Object(r["a"])(a.a, o["a"], o["b"], l, d, u, c);
      e["default"] = h.exports;
    },
    2851: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "LoadingEllipsis" };
    },
    2969: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(3001),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(3444),
        r = i(5),
        l = !1,
        d = null,
        u = null,
        c = null,
        h = Object(r["a"])(a.a, o["a"], o["b"], l, d, u, c);
      e["default"] = h.exports;
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
    2980: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(2851),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(3067),
        r = i(5),
        l = !1,
        d = null,
        u = null,
        c = null,
        h = Object(r["a"])(a.a, o["a"], o["b"], l, d, u, c);
      e["default"] = h.exports;
    },
    3001: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = i(60),
        n = s(i(2980)),
        o = i(3159),
        r = i(804),
        l = s(i(798)),
        d = s(i(3381));
      const u = 8;
      e.default = {
        name: "EditAmount",
        components: {
          LoadingEllipsis: n.default,
          CurrencyInput: () => i.e(408).then(i.bind(null, 4605)),
        },
        props: {
          readonly: { type: Boolean, default: !1 },
          isExchange: { type: Boolean, default: !1 },
          modelValue: { type: String, default: "" },
          error: { type: String, default: "" },
          placeholder: { type: String, default: "" },
          decimals: { type: Number, default: 0 },
          showBalance: { type: Boolean, default: !1 },
          isFiat: { type: Boolean, default: !1 },
          notes: { type: Array, default: () => [] },
          isZeroPlaceholder: { type: Boolean, default: !1 },
          wallet: { type: Object, default: null },
          parentTicker: { type: String, default: "" },
          focus: { type: Boolean, default: !1 },
          isSendAllClick: { type: Boolean, default: !1 },
          isInteger: { type: Boolean, default: !1 },
          isCustomLoading: { type: Boolean, default: !1 },
          isBuyCoin: { type: Boolean, default: !1 },
        },
        data: () => ({
          isUpdateFiat: !0,
          isLoadingBalance: !0,
          currentCoin: null,
          currentFiat: "",
          prevValue: "0",
        }),
        computed: {
          ...(0, a.mapGetters)(["fiatRate", "coinRate"]),
          hasCoinRate() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return (null === t || void 0 === t ? void 0 : t.rate) > 0;
          },
          valueFiat() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return this.modelValue
              ? this.isUpdateFiat
                ? (0, d.default)(
                    this.getValueFiat(
                      null === t || void 0 === t ? void 0 : t.rate,
                    ),
                  )
                : this.getValueFiat(
                    null === t || void 0 === t ? void 0 : t.rate,
                  )
              : this.currentFiat;
          },
          notesList() {
            return "undefined" !== typeof this.notes ? this.notes : [];
          },
          loading() {
            return this.isLoadingBalance || this.isCustomLoading;
          },
          showError() {
            return this.error && !this.loading;
          },
        },
        watch: {
          notes: {
            handler() {
              this.setIsLoadingBalance();
            },
            deep: !0,
          },
          isSendAllClick() {
            this.isUpdateFiat = !0;
          },
          modelValue() {
            this.isInteger &&
              this.updateValueInput(Math.floor(this.modelValue));
          },
        },
        mounted() {
          (this.focus && this.$refs.input.focus(), this.setIsLoadingBalance());
        },
        methods: {
          numberToFixed: r.numberToFixed,
          formatFinance: l.default,
          formatFiatV2: d.default,
          buyCoin() {
            this.$buy.isAvailable(this.wallet)
              ? this.$router.push(
                  "/simplex/USD/" +
                    this.$buy.getAvailableWallet(this.wallet).id,
                )
              : this.$router.push({
                  path: "/exchange",
                  query: { coinToSend: "BTC", coinToReceive: this.wallet.id },
                });
          },
          setIsLoadingBalance() {
            let t = !1;
            if (this.showBalance && this.notes[0]) {
              const e = this.notes[0].value;
              t = "" === e || "..." === e;
            }
            this.isLoadingBalance = t;
          },
          setCurrentCoin() {
            this.currentCoin !== this.wallet.ticker.toUpperCase() &&
              ((this.currentCoin = this.wallet.ticker.toUpperCase()),
              (this.isUpdateFiat = !0));
          },
          getValueFiat(t) {
            if (!this.isFiat) return null;
            if (isNaN(this.modelValue)) return "";
            if ((this.setCurrentCoin(), !this.isUpdateFiat))
              return this.currentFiat;
            if (0 === Number(this.modelValue)) return "0.";
            const e = (this.modelValue * t).toFixed(u),
              i = 1e-6;
            return e < i ? e : (0, r.roundFiat)(e);
          },
          updateValueInput(t) {
            ((this.$refs.input.value = t), this.$emit("update:modelValue", t));
          },
          coinWithWholeNumber(t) {
            let e = t;
            return (
              ("NEO" !== this.currentCoin && "ONT" !== this.currentCoin) ||
                (e = Math.ceil(e)),
              e
            );
          },
          onInputFiat(t) {
            (this.setCurrentCoin(),
              (this.isUpdateFiat = !1),
              (this.currentFiat = t));
            const e = 20,
              i =
                this.$rates.data[this.wallet.id] ||
                this.$rates.data[this.parentTicker.toUpperCase()],
              s = i[this.fiatRate].rate,
              a = this.coinWithWholeNumber((t / s).toFixed(e)),
              n =
                "" === a || 0 === parseFloat(a) || isNaN(parseFloat(a))
                  ? ""
                  : (0, r.numberToFixed)(a, this.decimals);
            this.updateValueInput(n);
          },
          onInput(t) {
            const e = this.modelValue.endsWith(".") && "0" === t.target.value,
              i = e ? "" : t.target.value;
            let s = (0, o.maskInput)(i, this.decimals);
            ((this.isUpdateFiat = !0), this.updateValueInput(s));
          },
          putAllAvailableBalance() {
            ((this.isUpdateFiat = !0), this.$emit("setAllAvailableBalance"));
          },
        },
      };
    },
    3067: function (t, e, i) {
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
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return i("div", { key: t });
            }),
            0,
          );
        },
        a = [];
    },
    3159: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.maskInput = r));
      const s = /[^0-9.,]+/g,
        a = /[^0-9.,]|[.,](?=.*[.,])|[.,](?=.^[0-9]{3}[.,])/g,
        n = 100,
        o = (t) => {
          if (
            (null === t || void 0 === t ? void 0 : t.length) > 1 &&
            t.startsWith("0")
          ) {
            const [, ...e] = t;
            return o(e.join(""));
          }
          return t;
        };
      function r(t, e, i) {
        let r;
        (void 0 === e && (e = n),
          !i &&
            [".", ",", "0"].some((e) => t.startsWith(e)) &&
            ((t = t.split("")), (t[0] = "0."), (t = t.join(""))));
        const l = t.replace(s, "").replace(a, ""),
          d = l.split(/\.|,/),
          [u, c] = d;
        return (
          (r = o(u)),
          i
            ? r
            : (d.splice(0, 1, r),
              c && c.length >= e && d.splice(1, 2, c.slice(0, e)),
              d.join("."))
        );
      }
    },
    3381: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = function (t, e) {
        void 0 === e && (e = null);
        let i = 2;
        const s = Number(t),
          a = s - Math.trunc(s),
          n = 0.01;
        return 0 === s || a < n
          ? Math.trunc(s) + ".00"
          : "BTC" === e
            ? ((i = 8), s.toFixed(i))
            : s.toFixed(i);
      };
    },
    3444: function (t, e, i) {
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
            { staticClass: "form-field" },
            [
              i(
                "div",
                {
                  staticClass: "input-wrap",
                  class: { "input-send-all": t.isExchange && t.showBalance },
                },
                [
                  t.loading
                    ? i("loading-ellipsis", {
                        staticClass: "form-field__loading",
                      })
                    : t._e(),
                  t._v(" "),
                  i("input", {
                    ref: "input",
                    class: { "placeholder-white": t.isZeroPlaceholder },
                    attrs: {
                      placeholder: t.isZeroPlaceholder ? "0.00" : "",
                      readonly: t.readonly,
                      "data-test-id": "amount_id",
                    },
                    domProps: { value: t.modelValue },
                    on: {
                      focus: function (e) {
                        return t.$emit("focus");
                      },
                      input: t.onInput,
                    },
                  }),
                  t._v(" "),
                  i("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.showError,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "placeholder",
                      class: { "is-up": t.modelValue || t.isZeroPlaceholder },
                    },
                    [t._v("\n      " + t._s(t.placeholder) + "\n    ")],
                  ),
                  t._v(" "),
                  t.isExchange
                    ? t._e()
                    : i("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.wallet.ticker) + "\n    "),
                      ]),
                  t._v(" "),
                  t.isExchange && t.showBalance
                    ? i(
                        "div",
                        {
                          staticClass: "send-all",
                          attrs: { "data-test-id": "send_all_id" },
                          on: { click: t.putAllAvailableBalance },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.$t("button.sendAll")) +
                              "\n    ",
                          ),
                        ],
                      )
                    : t._e(),
                ],
                1,
              ),
              t._v(" "),
              t.isFiat
                ? i(
                    "div",
                    {
                      staticClass: "input-wrap",
                      class: { hidden: t.isFiat && !t.hasCoinRate },
                    },
                    [
                      i("currency-input", {
                        attrs: {
                          readonly: t.readonly,
                          "initial-value": t.valueFiat,
                          formatter: t.formatFiatV2,
                          placeholder: t.isZeroPlaceholder ? "0.00" : "",
                          "data-test-id": "currency_id",
                        },
                        on: { onInput: t.onInputFiat },
                      }),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "ticker grey",
                          attrs: { "data-test-id": "rate_id" },
                        },
                        [t._v("\n      " + t._s(t.fiatRate) + "\n    ")],
                      ),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              i("transition", { attrs: { name: "slide-in" } }, [
                t.showError
                  ? i(
                      "div",
                      {
                        staticClass: "flex",
                        class: {
                          "buy-coin": t.isBuyCoin,
                          "error-amount-fix":
                            t.isFiat && !t.hasCoinRate && !t.isBuyCoin,
                        },
                      },
                      [
                        i("div", {
                          directives: [
                            {
                              name: "text-html",
                              rawName: "v-text-html",
                              value: t.error,
                              expression: "error",
                            },
                          ],
                          staticClass: "error",
                          class: { "error-amount": t.isFiat && t.hasCoinRate },
                        }),
                        t._v(" "),
                        t.isBuyCoin
                          ? i(
                              "button",
                              {
                                staticClass: "button button-buy",
                                on: { click: t.buyCoin },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("button.buy")) +
                                    " " +
                                    t._s(t.wallet.ticker || "") +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                      ],
                    )
                  : t._e(),
              ]),
              t._v(" "),
              t._l(t.notesList, function (e, s) {
                return i(
                  "div",
                  {
                    key: s,
                    staticClass: "note",
                    on: { click: t.putAllAvailableBalance },
                  },
                  [
                    t._v("\n    " + t._s(e.name) + "\n    "),
                    t.loading
                      ? i("loading-ellipsis")
                      : t.isExchange
                        ? i("span", [
                            i("b", [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.formatFinance(t.numberToFixed(e.value)),
                                  ) +
                                  "\n      ",
                              ),
                            ]),
                            t._v(
                              "\n      " + t._s(t.wallet.ticker.toUpperCase()),
                            ),
                          ])
                        : i("b", [
                            t._v(
                              "\n      " +
                                t._s(t.formatFinance(e.value)) +
                                "\n    ",
                            ),
                          ]),
                  ],
                  1,
                );
              }),
            ],
            2,
          );
        },
        a = [];
    },
    5761: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = i(68),
        n = i(60),
        o = i(375),
        r = s(i(232)),
        l = s(i(2842)),
        d = s(i(2969)),
        u = s(i(11565)),
        c = s(i(2999)),
        h = i(233),
        p = i(847);
      const m = 100,
        f = 64,
        v = 28,
        g = 256,
        C = 36,
        _ = 50,
        y = 1e9,
        b = [
          "XRP",
          "EOS",
          "VET",
          "VTHO",
          "TRX",
          "BTT",
          "HBAR",
          "THETA",
          "TFUEL",
        ],
        w = ["MATIC"],
        F = new Set([
          "ETH",
          "LUNC",
          "BSC",
          "AVAX",
          "MATIC",
          "FLR",
          "S",
          "FTM",
          "FIL",
          "OP",
        ]),
        P = new Set(["LTC", "BTC"]),
        A = [...F, ...P],
        k = ["LUNC", "LUNA", "TRX"];
      e.default = {
        name: "SendCoin",
        components: {
          Edit: l.default,
          EditAmount: d.default,
          AvailableAndFeeAmountsV2: u.default,
          MemesImage: c.default,
          SendCoinResult: () => i.e(45).then(i.bind(null, 2922)),
          FeeConstructor: () => i.e(364).then(i.bind(null, 11703)),
          CoinDropdown: () => i.e(407).then(i.bind(null, 3628)),
        },
        mixins: [o.DisabledCoinMixin, o.SettingsMixin, o.ExchangeMixin],
        props: {
          coin: { type: Object, default: null },
          txParams: { type: Object, default: null },
        },
        data() {
          return {
            inputs: {
              address: "",
              custom: "",
              amount: "",
              password: "",
              nonce: "",
            },
            inputsError: {
              address: "",
              custom: "",
              amount: "",
              password: "",
              nonce: "",
            },
            amountResult: "",
            domainAddress: "",
            inputTypePassword: "password",
            isPasswordShow: !1,
            initSend: !1,
            sending: !1,
            isFeeEnough: !0,
            isUpdateCoin: !1,
            isRate: !1,
            isError: !1,
            isSuccess: !1,
            isChangeCoin: !1,
            isOnSendAll: !1,
            isSendAllClick: !1,
            txid: null,
            availableBalance: "",
            xmrHasFrozenBalance: !1,
            isBuyCoin: !1,
            isSendCoinDisable: !1,
            filteredCurrenciesExchangeIds: new Set(),
            fee: null,
            feePlugin: {},
            estimatedTime: null,
            feeConfig: null,
            initFee: null,
            initFeePlugin: !1,
          };
        },
        computed: {
          ...(0, n.mapGetters)(["currenciesExchange", "isOffline"]),
          isFeePluginInitialized() {
            var t, e;
            return Boolean(
              this.fee &&
              ((null === (t = this.feePlugin) || void 0 === t
                ? void 0
                : t.customGas.length) ||
                (null === (e = this.feePlugin) || void 0 === e
                  ? void 0
                  : e.initialized)) &&
              this.initFee,
            );
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          isAvailableForBuyOrExchange() {
            var t;
            return (
              !w.includes(this.coin.deprecatedParent) &&
              (this.$buy.isAvailable(this.coin) ||
                this.filteredCurrenciesExchangeIds.has(
                  null === (t = this.coin) || void 0 === t ? void 0 : t.id,
                ))
            );
          },
          placeholderPaymentId() {
            return this.coin.config.paymentIdLabelType
              ? `${this.$t("input.clickToPaste")} ${this.$t(h.PAYMENT_TYPES_TRANSLATIONS[this.coin.config.paymentIdLabelType])}`
              : "";
          },
          editPlaceholderPaymentId() {
            return this.$t("input.typePlaceholderHere", {
              placeholderPaymentId: this.$t(
                h.PAYMENT_TYPES_TRANSLATIONS[
                  this.coin.config.paymentIdLabelType
                ],
              ),
            });
          },
          dropdownCoins() {
            return this.$wallets
              .list()
              .filter((t) =>
                "EOS" === t.ticker
                  ? t.activated
                  : !h.DISABLED_COINS.includes(t.deprecatedParent),
              );
          },
          isCustomFeeSupported() {
            var t, e;
            const i =
              A.includes(this.coin.deprecatedParent) ||
              A.includes(this.coin.ticker);
            return (
              (null === (t = this.feePlugin) ||
              void 0 === t ||
              null === (e = t.isCustomFeeSupported) ||
              void 0 === e
                ? void 0
                : e.call(t)) ||
              i ||
              !1
            );
          },
          isDisabled() {
            if (
              !Number(this.inputs.amount) ||
              this.isOffline ||
              this.isCoinDisabled([this.actionSend]) ||
              this.isSendCoinDisable ||
              !this.isFeeEnough ||
              this.inputsError.address ||
              this.inputsError.custom ||
              !this.inputs.address
            )
              return !0;
            const t = this.coin.deprecatedParent;
            return P.has(t)
              ? this.feePlugin.satPerByte < 1
              : !(!F.has(t) || !this.isRate) &&
                  (!+(null === (e = this.feePlugin.customGas) || void 0 === e
                    ? void 0
                    : e[0]) ||
                    !+(null === (i = this.feePlugin.customGas) || void 0 === i
                      ? void 0
                      : i[1]) ||
                    +(null === (s = this.feePlugin.customGas) || void 0 === s
                      ? void 0
                      : s[1]) < +this.feePlugin.minGasLimit);
            var e, i, s;
          },
          isSkamToken() {
            return !this.coin.confirmed && this.coin instanceof a.Token;
          },
          showFeeInputs() {
            return (
              this.isCustomFeeSupported &&
              (!!this.feePlugin.defaultGasLimit ||
                !!this.feePlugin.defaultSatPerByte)
            );
          },
        },
        watch: {
          "inputs.address"() {
            this.$debounce(async () => {
              ((this.domainAddress = ""),
                this.isSuccess ||
                  this.isUpdateCoin ||
                  !(await this.validateAddress()) ||
                  (await this.updateBalanceAndFee()));
            });
          },
          "inputs.custom"() {
            this.$debounce(async () => {
              this.isSuccess ||
                this.isUpdateCoin ||
                (this.validateCustom(),
                "TON" === this.coin.id && (await this.updateBalanceAndFee()));
            });
          },
          async "coin.id"() {
            ((this.initFeePlugin = !1),
              (this.feePlugin = null),
              await this.setFeePlugin(),
              await this.updateBalanceAndFee());
          },
        },
        async mounted() {
          (await this.setFeePlugin(),
            this.txParams &&
              ((this.inputs.address = this.txParams.otherSideAddress),
              (this.inputs.nonce = this.txParams.nonce),
              this.txParams.amount && this.changeAmount(this.txParams.amount)),
            this.$bus.$on("close-send-coin", this.backToWallets),
            (this.xmrHasFrozenBalance =
              await this.$history.xmrHasFrozenBalance()),
            (this.filteredCurrenciesExchangeIds = new Set(
              (await this.getFilteredCurrencies()) || [],
            )));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          ...(0, n.mapActions)(["changeAccountEOSError"]),
          isDust(t) {
            var e, i, s, a, n;
            const o =
              null !==
                (e =
                  null !==
                    (i =
                      null === (s = this.coin) || void 0 === s
                        ? void 0
                        : s.dustAmount) && void 0 !== i
                    ? i
                    : null === (a = this.coin) ||
                        void 0 === a ||
                        null === (n = a.config) ||
                        void 0 === n
                      ? void 0
                      : n.dustAmount) &&
              void 0 !== e &&
              e;
            if (o) {
              const e = new this.coin.BN(o),
                i = new this.coin.BN(this.coin.toMinimalUnit(t)),
                s = new this.coin.BN(
                  this.coin.toMinimalUnit(this.availableBalance),
                ),
                a = s.sub(i);
              if (a.gt(new this.coin.BN(0)) && a.lt(e))
                return this.$t("error.minChangeAmount", {
                  ticker: this.coin.ticker,
                  amount: this.coin.toCurrencyUnit(o),
                });
              if (i.lt(e))
                return this.$t("error.minAmountForSend", {
                  ticker: this.coin.ticker,
                  amount: this.coin.toCurrencyUnit(o),
                });
            }
            return !1;
          },
          setDefaultFee() {
            this.$bus.$emit("set-default-fee");
          },
          setCustomGas(t) {
            this.feePlugin.setCustomGas(t);
          },
          setCustomSatoshi(t) {
            this.feePlugin.setCustomSatoshi(t);
          },
          async updateEstimatedTimeCfg() {
            const t = { AVAX: "avax-c-gas-price" }[this.coin.ticker];
            if (t) this.feeConfig = await a.ConfigManager.get(t);
            else {
              var e, i;
              const t = await (null === (e = this.coin.feeWallet) ||
              void 0 === e ||
              null === (i = e.getEstimatedTimeCfg) ||
              void 0 === i
                ? void 0
                : i.call(e, !0));
              t && (this.feeConfig = t);
            }
          },
          async removeReplacedTx() {
            const t =
              this.txParams && this.txParams.nonce === this.inputs.nonce;
            t &&
              (await this.$history.removeTransaction({
                ticker: this.coin.ticker,
                txid: this.txParams.txid,
              }),
              this.$wallets.removeTransaction(this.txParams));
          },
          async updateBalanceAndFee(t, e) {
            (void 0 === t && (t = this.inputs.amount),
              void 0 === e && (e = this.domainAddress || this.inputs.address),
              await this.$debounce(async () => {
                ((this.fee = await this.initFee.calculate(t || 0, e || "")),
                  await this.setAvailableBalance(),
                  await this.availableForFee());
              }, 100));
          },
          async setAvailableBalance() {
            ["ETH", "BSC", "AVAX"].includes(this.coin.deprecatedParent) &&
              !this.txParams &&
              (this.inputs.nonce = String(this.coin.feeWallet.nonce));
            try {
              ((this.availableBalance =
                (await this.coin.availableBalance(
                  this.coin.toMinimalUnit(this.fee.toCurrency()),
                )) || "0"),
                this.isOnSendAll &&
                  this.changeAmount(this.availableBalance, !0));
            } catch (t) {
              this.availableBalance = "0";
            }
          },
          toggleCustomFee() {
            (this.$ga.event("User Actions", "Custom fee", {
              clientID: this.$ga.customParams.uid,
            }),
              (this.isRate = !this.isRate));
          },
          async setAllAvailableBalance() {
            (await this.updateBalanceAndFee(),
              (this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              await this.setAvailableBalance());
          },
          setEstimatedTime(t) {
            this.estimatedTime = t;
          },
          async availableForFee() {
            if (
              ((this.isFeeEnough = !0),
              "ONT" === this.coin.ticker &&
                "BSC" !== this.coin.deprecatedParent)
            ) {
              const { divisibleBalance: t } = this.$wallets.getWallet("ONG");
              this.isFeeEnough = +t >= +this.fee.toCurrency();
            } else {
              var t;
              const e = new this.coin.feeWallet.BN(this.fee.toMinimal()),
                i = new this.coin.feeWallet.BN(
                  (null === (t = this.coin.feeWallet) || void 0 === t
                    ? void 0
                    : t.indivisibleBalance) || 0,
                );
              ["OP", "ARB"].includes(this.coin.deprecatedParent)
                ? (this.isFeeEnough = i.gt(e))
                : this.coin.isAvailableForFee &&
                  (this.isFeeEnough = await this.coin.isAvailableForFee(e, i));
            }
          },
          closeCoinDropdown() {
            this.isChangeCoin = !1;
          },
          toggleDropdown() {
            (event.preventDefault(), (this.isChangeCoin = !this.isChangeCoin));
          },
          selectCoin(t) {
            ((this.isUpdateCoin = !0),
              this.$emit("changeCoin", t),
              this.closeCoinDropdown(),
              this.clearInputs(),
              this.$nextTick(async () => {
                (await this.setFeePlugin(), (this.isUpdateCoin = !1));
              }));
          },
          async setFeePlugin() {
            ((this.feePlugin = new a.FeePlugin(this.coin)),
              (this.initFee = await this.feePlugin.init(!0)),
              this.initFeePlugin ||
                (this.feePlugin.defaultGasPrice &&
                  this.feePlugin.setCustomGas([
                    new r.default(this.feePlugin.defaultGasPrice)
                      .multipliedBy(y)
                      .toString(),
                  ]),
                (this.initFeePlugin = !0)),
              this.fee || this.updateBalanceAndFee(),
              await this.updateEstimatedTimeCfg());
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.deprecatedParent);
            if (((this.inputsError.address = ""), "" === this.inputs.address))
              this.inputsError.address = this.$t("error.addressCantBeBlank");
            else if (b.includes(this.coin.ticker) && t === this.inputs.address)
              this.inputsError.address = this.$t("error.cantSendToOwnAddress");
            else
              try {
                var e, i;
                const t = this.domainAddress || this.inputs.address,
                  s =
                    "NEO3" === this.coin.id
                      ? await (null === (e = this.coin) || void 0 === e
                          ? void 0
                          : e.validateAddress(t))
                      : await (null === (i = this.coin.feeWallet) ||
                        void 0 === i
                          ? void 0
                          : i.validateAddress(t));
                s
                  ? (this.domainAddress =
                      "string" === typeof s ? s : this.domainAddress)
                  : (this.inputsError.address = this.$t("error.checkAddress"));
              } catch (s) {
                (console.log(s),
                  (this.inputsError.address = this.$t("error.checkAddress")));
              }
            return "" === this.inputsError.address;
          },
          validateCustom() {
            var t;
            if (
              null === (t = this.coin.config) ||
              void 0 === t ||
              !t.memoRegexp
            )
              return !0;
            const e =
              this.coin.feeWallet.getUserTicker() || this.coin.getUserTicker();
            this.inputsError.custom = "";
            const i = this.coin.validateMemo(this.inputs.custom);
            console.log(i);
            const s = {
              XMR: this.$t("error.destinationTagHexadecimal"),
              HBAR: this.$t("error.maxMemoLength", { maxLength: _ }),
              XLM: this.$t("error.XLMMemoLength", { maxLength: v }),
              OSMO: this.$t("error.memoNumber"),
              BNB: this.$t("error.maxMemoLength", { maxLength: f }),
              LUNA: this.$t("error.maxMemoLength", { maxLength: g }),
              LUNC: this.$t("error.maxMemoLength", { maxLength: g }),
            };
            if (!i) {
              if (
                (Object.keys(s).includes(e)
                  ? (this.inputsError.custom = s[e])
                  : [
                      "EOS",
                      "XLM",
                      "KIN",
                      "BNB",
                      "XEM",
                      "ATOM",
                      "BAND",
                      "HBAR",
                      "LUNC",
                      "LUNA",
                      "KAVA",
                      "TON",
                      "FET",
                      "INJ",
                      "CRO",
                    ].includes(e) ||
                    (this.inputsError.custom = this.$t(
                      "error.destinationTagNumber",
                    )),
                "TON" === this.coin.deprecatedParent &&
                  this.coin.deprecatedParent !== this.coin.id)
              )
                return (
                  (this.inputsError.custom = this.$t("error.maxMemoLength", {
                    maxLength: C,
                  })),
                  !1
                );
              ["XLM"].includes(this.coin.feeWallet.getUserTicker())
                ? ((this.isSendCoinDisable = !0),
                  (this.inputsError.custom = this.$t("error.XLMMemoLength", {
                    maxLength: v,
                  })))
                : (this.isSendCoinDisable = !1);
            }
            return "" === this.inputsError.custom;
          },
          async validateAmount() {
            ((this.isBuyCoin = !1), (this.inputsError.amount = ""));
            const t = this.isDust(this.inputs.amount);
            if ("" === this.inputs.amount || 0 === Number(this.inputs.amount))
              this.inputsError.amount = this.$t("error.amountCantBeBlank");
            else if (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount))
              if (t) this.inputsError.amount = t;
              else if ("MATIC" === this.coin.ticker) {
                var e;
                if (
                  !(await this.coin.isAvailableForSend(
                    this.inputs.amount,
                    this.fee.toCurrency(),
                  ))
                )
                  ((this.inputsError.amount = this.$t("error.needMoreFunds", {
                    ticker:
                      null !== (e = this.coin.feeTicker) && void 0 !== e
                        ? e
                        : this.coin.deprecatedParent,
                  })),
                    (this.isBuyCoin = this.isAvailableForBuyOrExchange));
                +this.inputs.amount > +this.coin.balance &&
                  ((this.inputsError.amount = this.$t("error.needMoreFunds", {
                    ticker: this.coin.getUserTicker(),
                  })),
                  (this.isBuyCoin = this.isAvailableForBuyOrExchange));
              } else
                (await this.coin.isAvailableForSend(
                  this.inputs.amount,
                  this.fee.toCurrency(),
                )) ||
                  ((this.inputsError.amount = this.$t("error.needMoreFunds", {
                    ticker: this.coin.ticker,
                  })),
                  (this.isBuyCoin = this.isAvailableForBuyOrExchange));
            else this.inputsError.amount = this.$t("error.incorrectAmount");
            return "" === this.inputsError.amount;
          },
          async validatePassword() {
            return (
              (this.inputsError.password = ""),
              "" === this.inputs.password
                ? (this.inputsError.password = this.$t(
                    "error.passwordCantBeBlank",
                  ))
                : (await this.$wallets.checkPassword(this.inputs.password)) ||
                  (this.inputsError.password = this.$t("error.wrongPassword")),
              "" === this.inputsError.password
            );
          },
          async validateAll() {
            try {
              return !(
                (await this.validateAddress()) &&
                this.validateCustom() &&
                (await this.validateAmount())
              );
            } catch (t) {
              return (
                (this.inputsError.amount = this.$t(
                  "error.blockExplorerUnavailable",
                )),
                !0
              );
            }
          },
          changeAmount(t, e) {
            (void 0 === e && (e = !1),
              (this.isOnSendAll = e),
              (this.inputs.amount = t),
              this.$debounce(async () => {
                const t = await this.validateAmount(),
                  e =
                    k.includes(this.coin.deprecatedParent) ||
                    k.includes(this.coin.ticker);
                e && t && (await this.updateBalanceAndFee());
              }));
          },
          async showPasswordForm() {
            ((this.initSend = !0),
              !(await this.validateAll()) && this.isFeeEnough
                ? ((this.isPasswordShow = !0),
                  (this.initSend = !1),
                  setTimeout(() => {
                    this.$refs.confirmPassword.setFocus();
                  }, 300))
                : (this.initSend = !1));
          },
          async sendCoins() {
            var t;
            if (
              ((0, p.logAction)(
                {
                  btnName: this.$t("button.confirm"),
                  screenName: this.$route.name,
                  action: "send",
                },
                null === (t = this.$wallets) || void 0 === t ? void 0 : t.hash,
              ),
              await this.validatePassword())
            ) {
              var e;
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
                (this.amountResult = this.inputs.amount),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              const t = this.coin instanceof a.Token,
                s = {
                  txStatType: a.TX_STAT_TYPES.SEND,
                  address: this.domainAddress || this.inputs.address,
                  amount: this.coin.toMinimalUnit(this.inputs.amount),
                  memo: this.inputs.custom,
                  userFee: this.coin.toMinimalUnit(this.fee.toCurrency()),
                  userGasPrice: Number(
                    this.feePlugin.customGas[0] ||
                      this.feePlugin.defaultGasPrice * y,
                  ),
                  gasLimit:
                    this.feePlugin.customGas[1] ||
                    this.feePlugin.defaultGasLimit,
                  isSendAll: this.isOnSendAll,
                  nonce: this.inputs.nonce,
                };
              "ONT" === this.coin.ticker &&
                "BSC" !== this.coin.deprecatedParent &&
                (s.asset = this.coin.ticker);
              try {
                let e,
                  i = {};
                t && (i = await this.coin.createTransaction(s));
                const a = this.$wallets.getWallet(this.coin.deprecatedParent);
                e = await a[
                  t ? "createTokenTransactionOnce" : "createTransactionOnce"
                ](t ? i : s);
                const n = await a.sendTransaction(e);
                if ("EOS" === this.coin.ticker && n.error)
                  return (
                    this.changeAccountEOSError(n.error),
                    this.$ga.event("Send Coin", "send tx failed", {
                      clientID: this.$ga.customParams.uid,
                    }),
                    (this.isError = !0),
                    void (this.sending = !1)
                  );
                ((this.txid = n.txid),
                  (this.isSuccess = !0),
                  n &&
                    n.txid &&
                    (await this.coin.feeWallet
                      .checkTransaction({
                        ...s,
                        txid: n.txid,
                        coin: this.coin,
                        fee: this.fee.toCurrency(),
                      })
                      .catch((t) => console.warn(t)),
                    this.removeReplacedTx()),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (i) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(i),
                  (this.isError = !0));
              }
              ((0, p.logActionEnd)(
                "send",
                null === (e = this.$wallets) || void 0 === e ? void 0 : e.hash,
              ),
                (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputs.amount = ""),
              (this.inputs.address = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.isError = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          backToForm() {
            ((this.isUpdateCoin = !0),
              this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1),
                  this.updateBalanceAndFee(),
                  (this.isUpdateCoin = !0));
              }, m));
          },
        },
      };
    },
    5762: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = i(60),
        n = i(233),
        o = i(804),
        r = s(i(2980)),
        l = s(i(798));
      e.default = {
        name: "AvailableAndFeeAmountsV2",
        components: { LoadingEllipsis: r.default },
        props: {
          fee: { type: Object, default: null },
          wallet: { type: Object, default: null },
          isRate: { type: Boolean, default: !1 },
          sendType: { type: String, default: "Send" },
          isSendAll: { type: Boolean, default: !0 },
          availableBalance: { type: String, default: "" },
          isDisableAvailable: { type: Boolean, default: !1 },
          isCustomFeeSupported: { type: Boolean, default: !1 },
          isFeePluginInitialized: { type: Boolean, default: !1 },
        },
        computed: {
          ...(0, a.mapGetters)(["fiatRate", "coinRate"]),
          feePrefix() {
            return n.FEE_PREFIX_IDS.includes(this.wallet.deprecatedParent) &&
              this.$isToken(this.wallet)
              ? "~"
              : "";
          },
          fiatFee() {
            try {
              return this.fee.toFiat(this.fiatRate, !0);
            } catch (t) {
              return (console.error(t), "");
            }
          },
          feeTicker() {
            var t, e;
            return (
              (null === (t = this.wallet) ||
              void 0 === t ||
              null === (e = t.feeWallet) ||
              void 0 === e
                ? void 0
                : e.ticker) || ""
            );
          },
          isCanSetAllAvailableBalance() {
            return (
              this.isSendAll &&
              !(
                ["Claim", "Withdrawal"].includes(this.sendType) &&
                ["ZIL", "NEAR"].includes(this.wallet.ticker)
              )
            );
          },
        },
        methods: {
          hasRate: o.hasRate,
          getValueFiat: o.getValueFiat,
          formatFinance: l.default,
        },
      };
    },
    6969: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5761),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = i(11567),
        r = i(5),
        l = !1,
        d = null,
        u = null,
        c = null,
        h = Object(r["a"])(a.a, o["a"], o["b"], l, d, u, c);
      e["default"] = h.exports;
    },
  },
]);
