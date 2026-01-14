(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [413],
  {
    11701: function (t, e, o) {
      "use strict";
      o.r(e);
      var s = o(5831),
        i = o.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return s[t];
            });
          })(a);
      var n = o(11702),
        c = o(5),
        r = !1,
        l = null,
        d = null,
        m = null,
        u = Object(c["a"])(i.a, n["a"], n["b"], r, l, d, m);
      e["default"] = u.exports;
    },
    11702: function (t, e, o) {
      "use strict";
      (o.d(e, "a", function () {
        return s;
      }),
        o.d(e, "b", function () {
          return i;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "AtomicPopup",
            {
              staticClass: "custom-token",
              attrs: { "is-show-close": "" },
              on: { close: t.handleClose },
            },
            [
              t.isConfirmScreen
                ? s("div", { staticClass: "custom-token__confirm" }, [
                    s("div", { staticClass: "custom-token__wrapper" }, [
                      s(
                        "div",
                        {
                          staticClass: "close",
                          on: {
                            click: function (e) {
                              return t.$emit("close");
                            },
                          },
                        },
                        [
                          s("div", { staticClass: "close__icon" }, [
                            s("img", { attrs: { src: o(237) } }),
                          ]),
                        ],
                      ),
                      t._v(" "),
                      s("div", { staticClass: "custom-token__header" }, [
                        s("h1", [
                          t._v(
                            t._s(
                              t.$t("coinInfo.confirmTokenDelete", {
                                ticker: t.coin.ticker,
                              }),
                            ),
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s("div", { staticClass: "custom-token__text" }, [
                        s("p", { staticClass: "text-center new-text-gray" }, [
                          t._v(
                            "\n          " +
                              t._s(t.$t("message.atomicDeleteToken")) +
                              "\n        ",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      s(
                        "div",
                        { staticClass: "custom-token__success-actions" },
                        [
                          s(
                            "BaseButton",
                            {
                              attrs: {
                                type: "error-desktop",
                                "type-width": "w210",
                              },
                              on: { click: t.removeToken },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.delete")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          s(
                            "BaseButton",
                            {
                              attrs: {
                                type: "secondary-desktop",
                                "type-width": "w210",
                              },
                              on: {
                                click: function (e) {
                                  return t.$emit("close");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ]),
                  ])
                : t._e(),
              t._v(" "),
              s("div", { staticClass: "custom-token__wrapper" }, [
                s("div", { staticClass: "custom-token__header" }, [
                  s("h1", [
                    t._v(t._s(t.$t("coinInfo.editOrDeleteCustomToken"))),
                  ]),
                ]),
                t._v(" "),
                s(
                  "div",
                  { staticClass: "custom-token__form" },
                  [
                    s("AtomicEdit", {
                      attrs: {
                        "model-value": t.form.value.contract,
                        placeholder: t.$t("input.contractAddressStartsWith0x"),
                        readonly: "",
                      },
                    }),
                    t._v(" "),
                    s("AtomicEdit", {
                      attrs: {
                        "model-value": t.form.value.name,
                        error: t.form.error.name,
                        "is-paste-from-clipboard": "",
                        placeholder: t.$t("label.tokenName"),
                      },
                      on: { "update:modelValue": t.onChangeName },
                    }),
                    t._v(" "),
                    s("AtomicEdit", {
                      attrs: {
                        "model-value": t.form.value.ticker,
                        error: t.form.error.ticker,
                        "is-paste-from-clipboard": "",
                        placeholder: t.$t("label.ticker"),
                      },
                      on: { "update:modelValue": t.onChangeTicker },
                    }),
                    t._v(" "),
                    s("AtomicEdit", {
                      attrs: {
                        "model-value": t.form.value.decimal,
                        error: t.form.error.decimal,
                        placeholder: t.$t("label.decimals"),
                      },
                      on: { "update:modelValue": t.onChangeDecimal },
                    }),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "custom-token__success-actions" },
                      [
                        s(
                          "BaseButton",
                          {
                            attrs: {
                              type: "primary-desktop",
                              "type-width": "w210",
                              disabled: !t.isValid,
                            },
                            on: { click: t.updateToken },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.update")) +
                                "\n        ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        s(
                          "BaseButton",
                          {
                            attrs: {
                              type: "error-desktop",
                              "type-width": "w210",
                            },
                            on: {
                              click: function (e) {
                                t.isConfirmScreen = !0;
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.delete")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ]),
            ],
          );
        },
        i = [];
    },
    5831: function (t, e, o) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = o(375),
        i = o(60);
      e.default = {
        name: "AddCustomTokenEditOrDelete",
        mixins: [s.AddCustomToken],
        props: { coin: { type: Object, required: !0 } },
        data() {
          return { isConfirmScreen: !1 };
        },
        mounted() {
          ((this.form.value.name = this.coin.name),
            (this.form.value.ticker = this.coin.ticker),
            (this.form.value.contract = this.coin.contract),
            (this.form.value.decimal = this.coin.decimal.toString()),
            this.$bus.$on("close-token-custom-add", this.handleClose));
        },
        beforeDestroy() {
          this.$bus.$off("close-token-custom-add", this.handleClose);
        },
        methods: {
          ...(0, i.mapActions)(["removeWalletState"]),
          async updateToken() {
            if ((await this.validateAll("update"), this.isValid))
              try {
                (await this.parent.updateCustomToken(this.coin, {
                  name: this.form.value.name,
                  ticker: this.form.value.ticker,
                  decimal: parseInt(this.form.value.decimal),
                  uniqueField: this.coin.contract.toLowerCase(),
                  visibility: !0,
                }),
                  this.$bus.$emit("alert-hint-catch", {
                    message: this.$t("message.informationHasBeenUpdated"),
                    type: "info",
                  }));
              } catch (t) {
                console.log(t);
              }
          },
          async removeToken() {
            try {
              (this.$wallets.removeWallet(this.coin),
                await this.removeWalletState(this.coin.id),
                this.$emitter.emit("save::wallets"),
                this.$bus.$emit("alert-hint-catch", {
                  message: this.$t("message.tokenHasBeenDeleted"),
                  type: "info",
                }),
                this.$bus.$emit("close-info-coin"),
                this.handleClose());
            } catch (t) {
              console.log(t);
            }
          },
          handleClose() {
            this.$emit("close");
          },
        },
      };
    },
  },
]);
