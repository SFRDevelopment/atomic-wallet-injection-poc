(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [271],
  {
    11697: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(5829),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(11698),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    11698: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "send-coin popup" },
            [
              t.sending
                ? t._e()
                : s(
                    "div",
                    { staticClass: "close", on: { click: t.backToWallets } },
                    [t._v("\n    ✕\n  ")],
                  ),
              t._v(" "),
              t.isPasswordShow || t.sending || t.isError || t.isSuccess
                ? t._e()
                : s(
                    "div",
                    { staticClass: "form" },
                    [
                      s("div", { staticClass: "info" }, [
                        s("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        s("p", [t._v(t._s(t.$t("title.claimSpark")))]),
                      ]),
                      t._v(" "),
                      s("Edit", {
                        attrs: {
                          modelValue: t.inputs.address,
                          error: t.inputsError.address,
                          readonly: "",
                          placeholder: t.$t("input.myFlareAddress"),
                        },
                        on: {
                          "update:modelValue": function (e) {
                            t.inputs.address = e;
                          },
                        },
                      }),
                      t._v(" "),
                      s("AvailableAndFeeAmounts", {
                        attrs: {
                          feeBalance: t.coin.toCurrencyUnit(t.coin.fee),
                          feeWallet: t.coin,
                          isDisableAvailable: "",
                          wallet: t.coin,
                        },
                      }),
                      t._v(" "),
                      s(
                        "div",
                        { staticClass: "submit" },
                        [
                          s("transition", { attrs: { name: "page-fade" } }, [
                            t.isClaimAvailable
                              ? t._e()
                              : s("div", { staticClass: "error" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(t.$t("error.nothingToClaim")) +
                                      "\n        ",
                                  ),
                                ]),
                          ]),
                          t._v(" "),
                          s("div", { staticClass: "submit-wrapper" }, [
                            t.initSend
                              ? s("div", { staticClass: "loader" })
                              : s(
                                  "button",
                                  {
                                    staticClass: "button",
                                    class: { disabled: !t.isClaimAvailable },
                                    on: { click: t.showPasswordForm },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.$t("title.claim")),
                                    ),
                                    Number(t.inputs.amount) > 0
                                      ? s("span", [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.formatFinance(
                                                  t.inputs.amount,
                                                ),
                                              ) +
                                              " " +
                                              t._s(t.coin.ticker) +
                                              "\n          ",
                                          ),
                                        ])
                                      : t._e(),
                                  ],
                                ),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
              t._v(" "),
              t.isPasswordShow
                ? s(
                    "div",
                    { staticClass: "form-password" },
                    [
                      s("div", { staticClass: "info" }, [
                        s("p", [t._v(t._s(t.$t("title.claimSpark")))]),
                      ]),
                      t._v(" "),
                      s("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                          modelValue: t.inputs.password,
                          error: t.inputsError.password,
                          focus: "",
                          isShowPassword: "",
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
                      s("div", { staticClass: "submit" }, [
                        s(
                          "button",
                          {
                            staticClass: "button normal hover-white",
                            on: { click: t.backFromPassword },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("button.back")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        s(
                          "button",
                          { staticClass: "button", on: { click: t.sendCoins } },
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
                  )
                : t._e(),
              t._v(" "),
              t.sending
                ? s("div", { staticClass: "sending" }, [
                    s("div", { staticClass: "info" }, [
                      s("div", { staticClass: "icon", class: t.icon }),
                      t._v(" "),
                      s("p", [t._v(t._s(t.$t("title.claimingSpark")))]),
                    ]),
                    t._v(" "),
                    s("div", { staticClass: "loading" }),
                  ])
                : t._e(),
              t._v(" "),
              t.sending
                ? t._e()
                : s("SendCoinResult", {
                    attrs: {
                      amount: String(t.inputs.amount),
                      coin: t.coin,
                      icon: t.icon,
                      isError: t.isError,
                      isSuccess: t.isSuccess,
                      sendType: "Claim",
                      txid: t.txid,
                      mailTitle: t.$t("error.sendingError"),
                    },
                    on: {
                      backToForm: t.backToForm,
                      backToWallets: t.backToWallets,
                      tryAgain: t.tryAgain,
                    },
                  }),
            ],
            1,
          );
        },
        i = [];
    },
    2820: function (t, e, s) {
      "use strict";
      var a = s(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(s(817));
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
              const s = !e.test(t.key);
              s && t.preventDefault();
            }
          },
          onInput(t) {
            let { value: e } = t.target;
            const s = new RegExp(this.validationPattern).test(e);
            (this.isFixedNumber && (e = String(e).replace(/[^0-9]+/g, "")),
              s
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
    2821: function (t, e, s) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = s(2837);
      const i = "appRate::disabled",
        n = 4,
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
            t >= n
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
    2842: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(2820),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(2972),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    2851: function (t, e, s) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "LoadingEllipsis" };
    },
    2922: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(2942),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(3239),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    2942: function (t, e, s) {
      "use strict";
      var a = s(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(s(802)),
        n = a(s(2973));
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
        components: { CoinIcon: i.default, RateStars: n.default },
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
            let s = this.$t("sendCoin.successfulMessage", {
              amount: this.amount,
              ticker: e,
              resultMessage: this.resultMessage,
            });
            return (
              "DOGE" === e &&
                (s += ", " + this.$t("sendCoin.DOGEsuccessfulMessagePostfix")),
              s
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
            var t, e, s;
            const a =
                (null === (t = this.contactData) || void 0 === t
                  ? void 0
                  : t.issue) || this.$t("supportPopup.transactionIssue"),
              i =
                "ClaimADA" === this.sendType
                  ? this.coin.address
                  : this.$getAddressWallet(this.coin.deprecatedParent),
              n = `\n-----------------------\n${this.$t("supportPopup.userTickerAddress", { ticker: this.coin.ticker })}\n${i}`,
              o = {
                isNotText: !0,
                additionalText: `${this.$t("supportPopup.unsuccessSending")}${n}`,
                subject: a,
              };
            ((null === (e = this.contactData) ||
            void 0 === e ||
            null === (s = e.tags) ||
            void 0 === s
              ? void 0
              : s.length) > 0 && (o.tags = this.contactData.tags),
              r[this.sendType] &&
                (o.additionalText = `${this.$t("sendProcess." + this.sendType)} ${this.$t("sendProcess.unsuccess")}${n}`),
              ["Activate", "ActivateAutoclaim"].includes(this.sendType) &&
                (o.additionalText = `${this.$t("supportPopup.unsuccessActivation")}${n}`),
              this.$bus.$emit("openSupportPopup", o));
          },
        },
      };
    },
    2972: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
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
                        [a("img", { attrs: { src: s(811) } })],
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
    2973: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(2821),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(2974),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    2974: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return t.isRateStars
            ? s("div", { staticClass: "rate-stars" }, [
                t._e(),
                t._v(" "),
                s(
                  "div",
                  { staticClass: "rate-stars__wrap" },
                  t._l(5, function (e) {
                    return s(
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
                          click: function (s) {
                            t.isRate && t.rateApp(e);
                          },
                          mouseleave: function (e) {
                            t.isRate && t.disableHoverStart();
                          },
                          mouseover: function (s) {
                            t.isRate && t.hoverStart(e);
                          },
                        },
                      },
                      [s("RateStart")],
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
    2980: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(2851),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(3067),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    3067: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return s("div", { key: t });
            }),
            0,
          );
        },
        i = [];
    },
    3074: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s(3363),
        i = s.n(a);
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(n);
      var r = s(4606),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        p = Object(o["a"])(i.a, r["a"], r["b"], l, c, u, d);
      e["default"] = p.exports;
    },
    3239: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
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
                            attrs: { src: s(3240) },
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
                                t._l(t.hints, function (e, s) {
                                  return a("li", { key: s }, [
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
    3240: function (t, e, s) {
      t.exports = s.p + "imgs/doge--static.png";
    },
    3363: function (t, e, s) {
      "use strict";
      var a = s(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = s(60),
        n = s(804),
        r = a(s(2980)),
        o = a(s(798));
      e.default = {
        name: "AvailableAndFeeAmounts",
        components: { LoadingEllipsis: r.default },
        props: {
          availableBalance: { type: String, default: "" },
          wallet: { type: Object, default: null },
          feeBalance: { type: String, default: "" },
          feeWallet: { type: Object, default: null },
          isCustomFeeSupported: { type: Boolean, default: !1 },
          isRate: { type: Boolean, default: !1 },
          sendType: { type: String, default: "Send" },
          isDisableAvailable: { type: Boolean, default: !1 },
          isSendAll: { type: Boolean, default: !0 },
          feeLoading: { type: Boolean, default: !1 },
        },
        computed: {
          ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
          hasCoinRate() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return (null === t || void 0 === t ? void 0 : t.rate) > 0;
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
        methods: { getValueFiat: n.getValueFiat, formatFinance: o.default },
      };
    },
    4606: function (t, e, s) {
      "use strict";
      (s.d(e, "a", function () {
        return a;
      }),
        s.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "available-fee-amounts" },
            [
              t.isDisableAvailable
                ? t._e()
                : s(
                    "div",
                    {
                      staticClass: "available",
                      class: { "no-hover": "Withdrawal" === t.sendType },
                      attrs: { "data-test-id": "available_fiat" },
                    },
                    [
                      s(
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
                          s("p", { staticClass: "text-gray" }, [
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
                            ? s(
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
                            : s("LoadingEllipsis"),
                          t._v(" "),
                          t.availableBalance && t.hasCoinRate
                            ? s(
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
                                      "\n        " +
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
                        ? s(
                            "button",
                            {
                              staticClass: "button small-gray",
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
              s(
                "div",
                { staticClass: "network-fee" },
                [
                  s("p", { staticClass: "text-gray" }, [
                    t._v(t._s(t.$t("title.networkFee")) + ":"),
                  ]),
                  t._v(" "),
                  t.feeLoading
                    ? s("LoadingEllipsis")
                    : s(
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
                            "\n      " +
                              t._s(t.feeBalance) +
                              " " +
                              t._s(t.feeWallet && t.feeWallet.ticker) +
                              "\n    ",
                          ),
                        ],
                      ),
                  t._v(" "),
                  t.feeBalance && t.feeWallet && t.hasCoinRate
                    ? s(
                        "p",
                        {
                          staticClass: "text-gray",
                          attrs: { "data-test-id": "amount_fee" },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(
                                t.formatFinance(
                                  t.getValueFiat({
                                    value: t.feeBalance,
                                    wallet: t.feeWallet,
                                    isFiat: !0,
                                  }),
                                ),
                              ) +
                              "\n      " +
                              t._s(t.fiatRate) +
                              "\n    ",
                          ),
                        ],
                      )
                    : t._e(),
                  t._v(" "),
                  t.isCustomFeeSupported && !t.isRate
                    ? s(
                        "button",
                        {
                          staticClass: "button small-gray is-custom-fee",
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
                  !["BTC", "ZIL"].includes(t.feeWallet.ticker)
                    ? s(
                        "button",
                        {
                          staticClass: "button small-gray is-custom-fee",
                          attrs: {
                            "data-test-id": "default_fee_button",
                            type: "button",
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
                1,
              ),
              t._v(" "),
              t._t("default"),
            ],
            2,
          );
        },
        i = [];
    },
    5829: function (t, e, s) {
      "use strict";
      var a = s(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = s(375),
        n = a(s(2842)),
        r = a(s(2922)),
        o = a(s(3074)),
        l = a(s(798));
      const c = 100;
      e.default = {
        name: "ClaimFlair",
        components: {
          Edit: n.default,
          SendCoinResult: r.default,
          AvailableAndFeeAmounts: o.default,
        },
        mixins: [i.SettingsMixin],
        props: { coin: { type: Object, default: null } },
        data: () => ({
          inputs: { amount: "", address: "", password: "" },
          inputsError: { amount: "", address: "", password: "" },
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isClaimAvailable: !0,
          isError: !1,
          isSuccess: !1,
          txid: null,
          availableBalance: 0,
          legacyUtxo: null,
        }),
        computed: {
          icon() {
            return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`;
          },
        },
        async mounted() {
          const t = this.$wallets.getWallet("ETH").address;
          ((this.inputs.address = this.$wallets.getWallet("ETH").address),
            (this.inputs.message =
              "02000000000000000000000000" + t.slice(2).toUpperCase()),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          formatFinance: l.default,
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
          async showPasswordForm() {
            ((this.initSend = !0),
              this.isClaimAvailable &&
                ((this.isPasswordShow = !0),
                setTimeout(() => {
                  this.$refs.confirmPassword.setFocus();
                }, 300)),
              (this.initSend = !1));
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isPasswordShow = !1), (this.sending = !0));
              try {
                const t = await this.coin.createClaimFlareTransaction(
                    this.inputs.message,
                  ),
                  e = await this.coin.sendTransaction(t);
                this.txid = e.txid;
              } catch (t) {
                (console.log(t), (this.isError = !0));
              }
              ((this.isSuccess = !this.isError), (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.inputs.amount = ""),
              (this.inputs.address = ""),
              (this.inputs.password = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.address = ""),
              (this.inputsError.password = ""));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, c));
          },
          backToWallets() {
            (this.clearInputs(), this.$emit("closePopup"));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, c));
          },
        },
      };
    },
  },
]);
