(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [205],
  {
    11594: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5784),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11598),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11598: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.isSending },
              on: { close: t.backToWallets },
            },
            [
              i(
                "div",
                { staticClass: "send-coin popup send-stake" },
                [
                  t.isPasswordShow || t.isSending || t.isError || t.isSuccess
                    ? t._e()
                    : i(
                        "div",
                        { staticClass: "form" },
                        [
                          i("div", { staticClass: "info" }, [
                            i("div", { staticClass: "icon", class: t.icon }),
                            t._v(" "),
                            i("p", [
                              t._v(
                                t._s(t.sendText) +
                                  " " +
                                  t._s(t.coin.name) +
                                  " (" +
                                  t._s(t.coin.ticker) +
                                  ")",
                              ),
                            ]),
                            t._v(" "),
                            "Stake" === t.sendType &&
                            t.$t("coinTips." + t.coin.id + ".calculator") !=
                              "coinTips." + t.coin.id + ".calculator"
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "coinTips." +
                                            t.coin.id.toLowerCase() +
                                            ".calculator",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          i("EditAmount", {
                            staticClass: "last-child",
                            attrs: {
                              balance: t.coin.divisibleBalance,
                              decimals: t.coin.decimal,
                              error: t.inputAmountError,
                              isBuyCoin: t.isBuyCoin,
                              isFiat: "",
                              isSendAllClick: t.isSendAllClick,
                              isZeroPlaceholder: "",
                              parentTicker: t.coin.deprecatedParent,
                              readonly: t.isReadonly,
                              showBalance: "",
                              wallet: t.coin,
                              modelValue: t.inputAmount,
                              placeholder: t.$t("input.amount"),
                            },
                            on: {
                              "update:modelValue": t.setAmount,
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i("AvailableAndFeeAmounts", {
                            attrs: {
                              availableBalance: String(t.availableBalance),
                              feeBalance: t.fee.fee,
                              feeWallet: t.feeWallet,
                              isDisableAvailable: t.isDisableAvailable,
                              sendType: t.sendType,
                              wallet: t.coin,
                              feeLoading: t.feeLoading,
                              isSendAll: "Withdrawal" !== t.sendType,
                            },
                            on: {
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "text" },
                            [
                              t.availableValidators.length > 0 &&
                              "Claim" !== t.sendType
                                ? i("div", [
                                    i(
                                      "div",
                                      {
                                        class: [
                                          "stake-validator",
                                          {
                                            "one-validator":
                                              1 ===
                                              t.availableValidators.length,
                                          },
                                        ],
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              "Redelegate" === t.sendType
                                                ? t.$t(
                                                    "stakingPage.currentValidator",
                                                  )
                                                : t.$t("stakingPage.validator"),
                                            ) +
                                            ": ",
                                        ),
                                        i(
                                          "span",
                                          {
                                            staticClass:
                                              "text-white validator-name",
                                            on: {
                                              click: function (s) {
                                                return (
                                                  s.stopPropagation(),
                                                  t.toggleCurrentValidators.apply(
                                                    null,
                                                    arguments,
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.stakingValidator
                                                    .validatorName,
                                                ) +
                                                " \n              ",
                                            ),
                                            t.stakingValidator.validatorReward
                                              ? i(
                                                  "span",
                                                  { staticClass: "text-white" },
                                                  [
                                                    t._v(
                                                      "- " +
                                                        t._s(
                                                          t.stakingValidator
                                                            .validatorReward,
                                                        ) +
                                                        "%\n                ",
                                                    ),
                                                    i(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ticker additional",
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.$t(
                                                                "stakingPage.yearlyYield",
                                                              ),
                                                            ) +
                                                            " ",
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                )
                                              : t._e(),
                                          ],
                                        ),
                                        t._v(" "),
                                        t.isCurrentValidators &&
                                        t.availableValidators.length > 1
                                          ? i("Dropdown", {
                                              directives: [
                                                {
                                                  name: "click-outside",
                                                  rawName: "v-click-outside",
                                                  value:
                                                    t.toggleCurrentValidators,
                                                  expression:
                                                    "toggleCurrentValidators",
                                                },
                                              ],
                                              attrs: {
                                                elements: t.availableValidators,
                                                showAdditional: "",
                                              },
                                              on: { select: t.selectValidator },
                                            })
                                          : t._e(),
                                      ],
                                      1,
                                    ),
                                    t._v(" "),
                                    t.availableValidators.length > 0 &&
                                    "Redelegate" === t.sendType
                                      ? i(
                                          "div",
                                          {
                                            class: [
                                              "stake-validator",
                                              {
                                                "one-validator":
                                                  1 ===
                                                  t.redelegateValidators.length,
                                              },
                                            ],
                                          },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(
                                                  t.$t(
                                                    "stakingPage.redelegateTo",
                                                  ),
                                                ) +
                                                ": ",
                                            ),
                                            t.redelegateValidators.length
                                              ? i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-white validator-name",
                                                    on: {
                                                      click: function (s) {
                                                        return (
                                                          s.stopPropagation(),
                                                          t.toggleRedelegateValidators.apply(
                                                            null,
                                                            arguments,
                                                          )
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n              " +
                                                        t._s(
                                                          t
                                                            .stakingRedelegateValidator
                                                            .validatorName,
                                                        ) +
                                                        " \n              ",
                                                    ),
                                                    t.stakingRedelegateValidator
                                                      .validatorReward
                                                      ? i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-white",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                - " +
                                                                t._s(
                                                                  t
                                                                    .stakingRedelegateValidator
                                                                    .validatorReward,
                                                                ) +
                                                                "%\n                ",
                                                            ),
                                                            i(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "ticker additional",
                                                              },
                                                              [
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t.$t(
                                                                        "stakingPage.yearlyYield",
                                                                      ),
                                                                    ) +
                                                                    " ",
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        )
                                                      : t._e(),
                                                  ],
                                                )
                                              : i(
                                                  "span",
                                                  { staticClass: "text-white" },
                                                  [
                                                    t._v(
                                                      "\n              " +
                                                        t._s(
                                                          t.$t(
                                                            "stakingPage.noValidators",
                                                          ),
                                                        ) +
                                                        "\n            ",
                                                    ),
                                                  ],
                                                ),
                                            t._v(" "),
                                            t.isRedelegateValidators &&
                                            t.redelegateValidators.length > 1
                                              ? i("Dropdown", {
                                                  directives: [
                                                    {
                                                      name: "click-outside",
                                                      rawName:
                                                        "v-click-outside",
                                                      value:
                                                        t.toggleRedelegateValidators,
                                                      expression:
                                                        "toggleRedelegateValidators",
                                                    },
                                                  ],
                                                  attrs: {
                                                    elements:
                                                      t.redelegateValidators,
                                                    showAdditional: "",
                                                  },
                                                  on: {
                                                    select:
                                                      t.selectRedelegateValidator,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1,
                                        )
                                      : t._e(),
                                  ])
                                : t._e(),
                              t._v(" "),
                              i(
                                "transition",
                                { attrs: { name: "collapse-fade" } },
                                [
                                  "Stake" === t.sendType &&
                                  t.stakingValidator.validatorReward &&
                                  t.stakingProfit &&
                                  Number(t.inputAmount) > 0
                                    ? i(
                                        "div",
                                        {
                                          staticClass: "network-fee flex-block",
                                        },
                                        [
                                          i("p", [
                                            t._v(
                                              t._s(
                                                t.$t(
                                                  "stakingPage.yearlyEarning",
                                                ),
                                              ) + ":",
                                            ),
                                          ]),
                                          t._v(" "),
                                          i(
                                            "p",
                                            { staticClass: "text-white" },
                                            [
                                              t._v(
                                                t._s(t.stakingProfit) +
                                                  " " +
                                                  t._s(t.coin.ticker) +
                                                  " ",
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          i("p", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.getValueFiat({
                                                      value: t.stakingProfit,
                                                      wallet: t.coin,
                                                    }),
                                                  ),
                                                ) +
                                                "\n              " +
                                                t._s(t.fiatRate) +
                                                "\n            ",
                                            ),
                                          ]),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                            ],
                            1,
                          ),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "submit" },
                            [
                              i(
                                "transition",
                                { attrs: { name: "page-fade" } },
                                [
                                  t.showClaimError
                                    ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "error flex center justify-center",
                                        },
                                        [
                                          i(
                                            "span",
                                            { staticClass: "new-text-error" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "error.insufficientFundsToClaim",
                                                      {
                                                        ticker:
                                                          t.coin.getUserTicker(),
                                                      },
                                                    ),
                                                  ) +
                                                  "\n            ",
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t.showSendError
                                      ? i("div", { staticClass: "error" }, [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToSend",
                                                  {
                                                    fee: t.formattedFee,
                                                    feeTicker:
                                                      t.coin.deprecatedParent,
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                          i(
                                            "button",
                                            {
                                              staticClass: "button button-buy",
                                              on: { click: t.buyCoin },
                                            },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(t.$t("button.buy")) +
                                                  "\n            ",
                                              ),
                                            ],
                                          ),
                                        ])
                                      : t._e(),
                                ],
                              ),
                              t._v(" "),
                              i("div", { staticClass: "submit-wrapper" }, [
                                t.isInitSend
                                  ? i("div", { staticClass: "loader" })
                                  : i(
                                      "button",
                                      {
                                        staticClass: "button",
                                        class: {
                                          disabled:
                                            "Redelegate" === t.sendType &&
                                            !t.redelegateValidators.length,
                                        },
                                        attrs: { "data-test-id": "send_stake" },
                                        on: { click: t.showPasswordForm },
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              "Withdrawal" === t.sendType
                                                ? t.$t("button.withdraw")
                                                : t.sendText,
                                            ) +
                                            "\n            ",
                                        ),
                                        Number(t.inputAmount) > 0
                                          ? i("span", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formatFinance(
                                                      t.inputAmount,
                                                    ),
                                                  ) +
                                                  " " +
                                                  t._s(t.coin.ticker) +
                                                  "\n            ",
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
                    ? i(
                        "div",
                        { staticClass: "form-password" },
                        [
                          i("PasswordChecker", {
                            attrs: {
                              warningText: t.warningText,
                              headline: t.passwordTitle,
                            },
                            on: {
                              handleNavigateBack: function (s) {
                                t.isPasswordShow = !1;
                              },
                              handleConfirm: t.sendCoins,
                            },
                          }),
                        ],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isSending
                    ? i("AtomicSending", {
                        attrs: {
                          icon: t.icon,
                          title:
                            t.sendText +
                            " " +
                            t.resultAmount +
                            " " +
                            t.coin.ticker,
                          sendType: t.sendType,
                          warningText:
                            t.$t("coinTips." + t.coin.id + ".delegating") !=
                            "coinTips." + t.coin.id + ".delegating"
                              ? t.$t(
                                  "coinTips." +
                                    t.coin.id.toLowerCase() +
                                    ".delegating",
                                )
                              : "",
                        },
                      })
                    : t._e(),
                  t._v(" "),
                  t.isSending
                    ? t._e()
                    : i("SendCoinResult", {
                        attrs: {
                          amount: t.resultAmount,
                          coin: t.coin,
                          icon: t.icon,
                          isError: t.isError,
                          isSuccess: t.isSuccess,
                          sendType: t.sendType,
                          txid: t.txid,
                          contactData: {
                            issue: t.$t("title.staking"),
                            tags: ["staking_tag"],
                          },
                          mailTitle: t.$t("error.sendingError"),
                        },
                        on: {
                          backToForm: t.backToStake,
                          backToWallets: t.backToWallets,
                          tryAgain: t.backToStake,
                        },
                      }),
                ],
                1,
              ),
            ],
          );
        },
        a = [];
    },
    11599: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5787),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11600),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11600: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "div",
            {
              staticClass: "send-coin popup",
              attrs: { "data-test-id": "send_stake" },
            },
            [
              t.sending
                ? t._e()
                : i(
                    "div",
                    {
                      staticClass: "close",
                      attrs: { "data-test-id": "close_popup" },
                      on: { click: t.backToWallets },
                    },
                    [t._v("\n    ✕\n  ")],
                  ),
              t._v(" "),
              t.isCustomShow ||
              t.isPasswordShow ||
              t.sending ||
              t.isError ||
              t.isSuccess
                ? t._e()
                : i(
                    "div",
                    { staticClass: "form" },
                    [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendText) +
                              " " +
                              t._s(t.coin.name) +
                              " (" +
                              t._s(t.coin.ticker) +
                              ")",
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".calculator",
                                    ),
                                  ) +
                                  "\n      ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                          balance: t.coin.divisibleBalance,
                          decimals: t.coin.decimal,
                          error: t.inputsError.amount,
                          isFiat: "",
                          isSendAllClick: t.isSendAllClick,
                          isZeroPlaceholder: "",
                          parentTicker: t.coin.deprecatedParent,
                          readonly: "",
                          showBalance: "",
                          wallet: t.coin,
                          modelValue: t.inputs.amount,
                          placeholder: t.$t("input.amount"),
                        },
                        on: {
                          "update:modelValue": t.changeAmount,
                          setAllAvailableBalance: t.setAllAvailableBalance,
                        },
                      }),
                      t._v(" "),
                      i("AvailableAndFeeAmounts", {
                        attrs: {
                          availableBalance: String(t.availableBalance),
                          feeBalance: t.fee.fee,
                          feeWallet: t.feeWallet,
                          sendType: t.sendType,
                          wallet: t.coin,
                          feeLoading: t.feeLoading,
                        },
                        on: {
                          setAllAvailableBalance: t.setAllAvailableBalance,
                        },
                      }),
                      t._v(" "),
                      i(
                        "div",
                        { staticClass: "text" },
                        [
                          t.availableValidators.length > 0 &&
                          "Claim" !== t.sendType
                            ? i(
                                "div",
                                { staticClass: "stake-validator" },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(t.$t("popups.sendStakeADA.pool")) +
                                      ": \n        ",
                                  ),
                                  i(
                                    "span",
                                    {
                                      staticClass: "text-white validator-name",
                                      attrs: { "data-test-id": "pool_name" },
                                      on: {
                                        click: function (s) {
                                          (s.stopPropagation(),
                                            (t.isChangeValidator = !0));
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.stakingValidator.name) +
                                          " \n          ",
                                      ),
                                      "Stake" === t.sendType && t.stakingReward
                                        ? i(
                                            "span",
                                            { staticClass: "text-white" },
                                            [
                                              t._v(
                                                "\n            - " +
                                                  t._s(t.stakingReward) +
                                                  "%\n            ",
                                              ),
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "ticker additional",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.$t(
                                                          "stakingPage.yearlyYield",
                                                        ),
                                                      ) +
                                                      " ",
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                                  t._v(" "),
                                  t.isChangeValidator
                                    ? i("Dropdown", {
                                        directives: [
                                          {
                                            name: "click-outside",
                                            rawName: "v-click-outside",
                                            value: t.closeValidatorsDropdown,
                                            expression:
                                              "closeValidatorsDropdown",
                                          },
                                        ],
                                        attrs: {
                                          custom: "Custom pool",
                                          elements: t.availableValidators,
                                          showAdditional: "",
                                          "data-test-id": "pool_search",
                                        },
                                        on: {
                                          select: t.selectValidator,
                                          selectCustom: t.showCustomForm,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1,
                              )
                            : t._e(),
                          t._v(" "),
                          i(
                            "transition",
                            { attrs: { name: "collapse-fade" } },
                            [
                              "Stake" === t.sendType &&
                              t.stakingProfit > 0 &&
                              Number(t.inputs.amount) > 0
                                ? i(
                                    "div",
                                    { staticClass: "network-fee flex-block" },
                                    [
                                      i("p", [
                                        t._v(
                                          t._s(
                                            t.$t("stakingPage.yearlyEarning"),
                                          ) + ":",
                                        ),
                                      ]),
                                      t._v(" "),
                                      i("p", { staticClass: "text-white" }, [
                                        t._v(
                                          t._s(t.stakingProfit) +
                                            " " +
                                            t._s(t.coin.ticker) +
                                            " ",
                                        ),
                                      ]),
                                      t._v(" "),
                                      i("p", [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.formatFinance(
                                                t.getValueFiat({
                                                  value: t.stakingProfit,
                                                  wallet: t.coin,
                                                }),
                                              ),
                                            ) +
                                            "\n            " +
                                            t._s(t.fiatRate) +
                                            "\n          ",
                                        ),
                                      ]),
                                    ],
                                  )
                                : t._e(),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(" "),
                      i(
                        "div",
                        { staticClass: "submit" },
                        [
                          i(
                            "transition",
                            { attrs: { name: "page-fade" } },
                            [
                              t.isFeeEnough
                                ? t._e()
                                : [
                                    "Claim" === t.sendType
                                      ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "error flex center justify-center",
                                          },
                                          [
                                            i(
                                              "span",
                                              { staticClass: "new-text-error" },
                                              [
                                                t._v(
                                                  "\n              " +
                                                    t._s(
                                                      t.$t(
                                                        "error.insufficientFundsToClaim",
                                                        {
                                                          ticker:
                                                            t.coin.getUserTicker(),
                                                        },
                                                      ),
                                                    ) +
                                                    "\n            ",
                                                ),
                                              ],
                                            ),
                                            t._v(" "),
                                            i(
                                              "button",
                                              {
                                                staticClass:
                                                  "button button-buy",
                                                on: { click: t.buyCoin },
                                              },
                                              [
                                                t._v(
                                                  "\n              " +
                                                    t._s(t.$t("button.buy")) +
                                                    "\n            ",
                                                ),
                                              ],
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    i("div", { staticClass: "error" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "error.insufficientFundsWithSendType",
                                              {
                                                fee: Number(
                                                  Number(t.fee.fee).toFixed(6),
                                                ),
                                                feeTicker: t.feeTicker(),
                                                sendType: t.$t(
                                                  "sendType." + t.sendType,
                                                ),
                                                coin: t.coin.getUserTicker(),
                                              },
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ]),
                                  ],
                            ],
                            2,
                          ),
                          t._v(" "),
                          i("div", { staticClass: "submit-wrapper" }, [
                            i(
                              "button",
                              {
                                staticClass: "button uppercase",
                                class: { disabled: t.disableButton },
                                on: { click: t.showPasswordForm },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.sendText) +
                                    "\n        ",
                                ),
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
              t.isCustomShow
                ? i(
                    "div",
                    { staticClass: "form-custom-baker form-password" },
                    [
                      i("div", { staticClass: "info" }, [
                        i("p", [
                          t._v(t._s(t.$t("popups.sendStakeADA.customPool"))),
                        ]),
                      ]),
                      t._v(" "),
                      i("Edit", {
                        attrs: {
                          modelValue: t.customPoolName,
                          placeholder: t.$t("input.poolName"),
                          type: "text",
                        },
                        on: {
                          "update:modelValue": function (s) {
                            t.customPoolName = s;
                          },
                        },
                      }),
                      t._v(" "),
                      i("Edit", {
                        attrs: {
                          modelValue: t.customPool,
                          error: t.customPoolError,
                          placeholder: t.$t("input.customPoolId"),
                          type: "text",
                        },
                        on: {
                          "update:modelValue": function (s) {
                            t.customPool = s;
                          },
                        },
                      }),
                      t._v(" "),
                      i("div", { staticClass: "submit" }, [
                        i(
                          "button",
                          {
                            staticClass: "button normal hover-white",
                            on: { click: t.backFromCustom },
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
                        i(
                          "button",
                          {
                            staticClass: "button",
                            class: { disabled: t.disableButton },
                            on: { click: t.selectCustomValidator },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("button.save")) +
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
              t.isPasswordShow
                ? i(
                    "div",
                    { staticClass: "form-password" },
                    [
                      i("div", { staticClass: "info" }, [
                        i("p", [
                          t._v(
                            "\n        " +
                              t._s(t.sendText) +
                              " " +
                              t._s(t.coin.ticker) +
                              "\n        " +
                              t._s(
                                "Claim" !== t.sendType
                                  ? "to " + t.stakingValidator.name
                                  : "rewards",
                              ) +
                              "\n      ",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      i("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                          modelValue: t.inputs.password,
                          error: t.inputsError.password,
                          focus: "",
                          isShowPassword: "",
                          type: t.inputTypePassword,
                          placeholder: t.$t("input.password"),
                          "data-test-id": "password_field",
                        },
                        on: {
                          "enter-pressed": t.sendCoins,
                          "update:modelValue": function (s) {
                            t.inputs.password = s;
                          },
                        },
                      }),
                      t._v(" "),
                      i("div", { staticClass: "submit" }, [
                        i(
                          "button",
                          {
                            staticClass: "button normal hover-white",
                            attrs: { "data-test-id": "back_stake" },
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
                        i(
                          "button",
                          {
                            staticClass: "button",
                            attrs: { "data-test-id": "confirm_stake" },
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
                  )
                : t._e(),
              t._v(" "),
              t.sending
                ? i("div", { staticClass: "sending" }, [
                    i("div", { staticClass: "info" }, [
                      i("div", { staticClass: "icon", class: t.icon }),
                      t._v(" "),
                      i("p", [
                        t._v(t._s(t.sendText) + " " + t._s(t.coin.ticker)),
                      ]),
                      t._v(" "),
                      "Stake" === t.sendType
                        ? i("div", { staticClass: "warning" }, [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$t(
                                    "coinTips." +
                                      t.coin.ticker.toLowerCase() +
                                      ".delegating",
                                  ),
                                ) +
                                "\n      ",
                            ),
                          ])
                        : t._e(),
                    ]),
                    t._v(" "),
                    i("div", { staticClass: "loading" }),
                  ])
                : t._e(),
              t._v(" "),
              t.sending
                ? t._e()
                : i("SendCoinResult", {
                    attrs: {
                      amount: t.inputs.amount,
                      coin: t.coin,
                      icon: t.icon,
                      isError: t.isError,
                      isSuccess: t.isSuccess,
                      sendType: t.sendType,
                      txid: t.txid,
                      contactData: {
                        issue: t.$t("title.staking"),
                        tags: ["staking_tag"],
                      },
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
        a = [];
    },
    11601: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5788),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11602),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11602: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "div",
            { staticClass: "send-coin popup staking" },
            [
              t.sending
                ? t._e()
                : i(
                    "div",
                    { staticClass: "close", on: { click: t.backToWallets } },
                    [t._v("\n    ✕\n  ")],
                  ),
              t._v(" "),
              t.isPasswordShow || t.sending || t.isError || t.isSuccess
                ? t._e()
                : i(
                    "div",
                    { staticClass: "form" },
                    [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendText) +
                              " " +
                              t._s(t.coin.name) +
                              " (AWC)",
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".calculator",
                                    ),
                                  ) +
                                  "\n      ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                          balance: t.coin.divisibleBalance,
                          decimals: t.coin.decimal,
                          error: t.amountError,
                          isFiat: "",
                          isSendAllClick: t.isSendAllClick,
                          isZeroPlaceholder: "",
                          parentTicker: t.coin.deprecatedParent,
                          showBalance: "",
                          wallet: t.coin,
                          modelValue: t.amount,
                          placeholder: t.$t("input.amount"),
                        },
                        on: {
                          "update:modelValue": t.changeAmount,
                          setAllAvailableBalance: t.setAllAvailableBalance,
                        },
                      }),
                      t._v(" "),
                      i("AvailableAndFeeAmounts", {
                        attrs: {
                          availableBalance: String(t.availableBalance),
                          feeBalance: t.fee.fee,
                          feeWallet: t.feeWallet,
                          sendType: t.sendType,
                          wallet: t.coin,
                          feeLoading: t.feeLoading,
                        },
                        on: {
                          setAllAvailableBalance: t.setAllAvailableBalance,
                        },
                      }),
                      t._v(" "),
                      i("div", { staticClass: "text" }, [
                        i("div", { staticClass: "network-fee flex-block" }, [
                          i("p", [
                            t._v(t._s(t.$t("stakingPage.yearlyEarning")) + ":"),
                          ]),
                          t._v(" "),
                          i("p", { staticClass: "text-white" }, [
                            t._v(t._s(t.yearlyYield) + " AWC "),
                          ]),
                          t._v(" "),
                          t.hasRate(t.coin.id)
                            ? i("p", [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.formatFinance(
                                        t.getValueFiat({
                                          value: t.yearlyYield,
                                          wallet: t.coin,
                                        }),
                                      ),
                                    ) +
                                    "\n          " +
                                    t._s(t.fiatRate) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                      ]),
                      t._v(" "),
                      i(
                        "div",
                        { staticClass: "submit" },
                        [
                          i("transition", { attrs: { name: "page-fade" } }, [
                            t.isFeeEnough
                              ? t._e()
                              : i("div", { staticClass: "error" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t("error.insufficientFundsToSend", {
                                          fee: t.formatFinance(
                                            Number(
                                              Number(t.fee.fee).toFixed(6),
                                            ),
                                          ),
                                          feeTicker: "BNB",
                                          ticker: "AWC",
                                        }),
                                      ) +
                                      "\n        ",
                                  ),
                                ]),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "submit-wrapper" }, [
                            i(
                              "button",
                              {
                                staticClass: "button",
                                on: { click: t.showPasswordForm },
                              },
                              [
                                t._v("\n          " + t._s(t.sendText)),
                                Number(t.amount) > 0
                                  ? i("span", [
                                      t._v(
                                        " " +
                                          t._s(t.formatFinance(t.amount)) +
                                          " AWC ",
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
                ? i(
                    "div",
                    { staticClass: "form-password" },
                    [
                      i("div", { staticClass: "info" }, [
                        i("p", [
                          t._v(
                            t._s(t.sendText) +
                              " " +
                              t._s(t.formatFinance(t.amount)) +
                              " AWC",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      i("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                          modelValue: t.password,
                          error: t.passwordError,
                          focus: "",
                          isShowPassword: "",
                          type: t.inputTypePassword,
                          placeholder: t.$t("input.password"),
                        },
                        on: {
                          "enter-pressed": t.sendCoins,
                          "update:modelValue": function (s) {
                            t.password = s;
                          },
                        },
                      }),
                      t._v(" "),
                      i("div", { staticClass: "submit" }, [
                        i(
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
                        i(
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
                ? i("div", { staticClass: "sending" }, [
                    i("div", { staticClass: "info" }, [
                      i("div", { staticClass: "icon", class: t.icon }),
                      t._v(" "),
                      i("p", [
                        t._v(t._s(t.sendText) + " " + t._s(t.amount) + " AWC"),
                      ]),
                      t._v(" "),
                      "Stake" === t.sendType
                        ? i("div", { staticClass: "warning" }, [
                            t._v(
                              "\n        " +
                                t._s(
                                  t.$t(
                                    "coinTips." +
                                      t.coin.ticker.toLowerCase() +
                                      ".delegating",
                                  ),
                                ) +
                                "\n      ",
                            ),
                          ])
                        : t._e(),
                    ]),
                    t._v(" "),
                    i("div", { staticClass: "loading" }),
                  ])
                : t._e(),
              t._v(" "),
              t.sending
                ? t._e()
                : i("SendCoinResult", {
                    attrs: {
                      amount: t.sendAmount,
                      coin: t.coin,
                      icon: t.icon,
                      isError: t.isError,
                      isSuccess: t.isSuccess,
                      sendType: t.sendType,
                      txid: t.txid,
                      contactData: {
                        issue: t.$t("title.staking"),
                        tags: ["staking_tag"],
                      },
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
        a = [];
    },
    11603: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5789),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11604),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11604: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("AtomicPopup", { on: { close: t.backToWallets } }, [
            i(
              "div",
              { staticClass: "send-coin popup staking-icx send-stake" },
              [
                t.isPasswordShow || t.sending || t.isError || t.isSuccess
                  ? t._e()
                  : i(
                      "div",
                      { staticClass: "form" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.coin.name) +
                                " (" +
                                t._s(t.coin.ticker) +
                                ")",
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".calculator",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("EditAmount", {
                          staticClass: "last-child",
                          attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.amountError,
                            isFiat: "",
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: "",
                            parentTicker: t.coin.deprecatedParent,
                            readonly: "Claim" === t.sendType,
                            showBalance: "",
                            wallet: t.coin,
                            modelValue: t.amount,
                            placeholder: t.$t("input.amount"),
                          },
                          on: {
                            "update:modelValue": t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance,
                          },
                        }),
                        t._v(" "),
                        i(
                          "AvailableAndFeeAmounts",
                          {
                            attrs: {
                              availableBalance: String(t.availableBalance),
                              feeBalance: t.fee.fee,
                              feeWallet: t.feeWallet,
                              sendType: t.sendType,
                              wallet: t.coin,
                              isSendAll: "",
                              feeLoading: t.feeLoading,
                            },
                            on: {
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          },
                          [
                            i("div", { staticClass: "text" }, [
                              "Stake" === t.sendType
                                ? i(
                                    "div",
                                    { staticClass: "network-fee flex-block" },
                                    [
                                      i("p", [
                                        t._v(
                                          t._s(
                                            t.$t("stakingPage.yearlyEarning"),
                                          ) + ":",
                                        ),
                                      ]),
                                      t._v(" "),
                                      i("p", { staticClass: "text-white" }, [
                                        t._v(
                                          t._s(t.yearlyYield) +
                                            " " +
                                            t._s(t.coin.ticker) +
                                            " ",
                                        ),
                                      ]),
                                      t._v(" "),
                                      t.hasRate(t.coin.id)
                                        ? i("p", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.getValueFiat({
                                                      value: t.yearlyYield,
                                                      wallet: t.coin,
                                                    }),
                                                  ),
                                                ) +
                                                "\n              " +
                                                t._s(t.fiatRate) +
                                                "\n            ",
                                            ),
                                          ])
                                        : t._e(),
                                    ],
                                  )
                                : t._e(),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "text" }, [
                              t.availableValidators.length > 0 &&
                              "Claim" !== t.sendType &&
                              ("Unstake" !== t.sendType ||
                                "ICX" !== t.coin.ticker)
                                ? i(
                                    "div",
                                    { staticClass: "stake-validator" },
                                    [
                                      t._v("\n            Validator: "),
                                      i(
                                        "span",
                                        {
                                          staticClass:
                                            "text-white validator-name",
                                          on: {
                                            click: function (s) {
                                              (s.stopPropagation(),
                                                (t.isChangeValidator = !0));
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            t._s(t.stakingValidator.name) + " ",
                                          ),
                                          t.stakingValidator.reward
                                            ? i(
                                                "span",
                                                { staticClass: "text-white" },
                                                [
                                                  t._v(
                                                    "- " +
                                                      t._s(
                                                        t.stakingValidator
                                                          .reward,
                                                      ) +
                                                      "%",
                                                  ),
                                                  i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ticker additional",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(
                                                            t.$t(
                                                              "stakingPage.yearlyYield",
                                                            ),
                                                          ) +
                                                          "\n                ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              )
                                            : t._e(),
                                        ],
                                      ),
                                      t._v(" "),
                                      t.isChangeValidator
                                        ? i("Dropdown", {
                                            directives: [
                                              {
                                                name: "click-outside",
                                                rawName: "v-click-outside",
                                                value:
                                                  t.closeValidatorsDropdown,
                                                expression:
                                                  "closeValidatorsDropdown",
                                              },
                                            ],
                                            attrs: {
                                              elements: t.availableValidators,
                                              showAdditional: "",
                                            },
                                            on: { select: t.selectValidator },
                                          })
                                        : t._e(),
                                    ],
                                    1,
                                  )
                                : t._e(),
                            ]),
                          ],
                        ),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "submit" },
                          [
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" !== t.sendType || t.isFeeEnough
                                ? t._e()
                                : i(
                                    "div",
                                    {
                                      staticClass:
                                        "error flex center justify-center",
                                    },
                                    [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToClaim",
                                                  {
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                            ]),
                            t._v(" "),
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" === t.sendType || t.isFeeEnough
                                ? t._e()
                                : i("div", { staticClass: "error" }, [
                                    i(
                                      "span",
                                      { staticClass: "new-text-error" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.$t(
                                                "popups.sendStakeICX.youShouldHaveAtLeast",
                                              ),
                                            ) +
                                            "\n              " +
                                            t._s(
                                              t.formatFinance(
                                                Number(
                                                  Number(t.fee.fee).toFixed(6),
                                                ),
                                              ),
                                            ) +
                                            " ",
                                        ),
                                      ],
                                    ),
                                    t._v(
                                      " " +
                                        t._s(t.coin.ticker) +
                                        " to send " +
                                        t._s(t.coin.ticker) +
                                        "\n            ",
                                    ),
                                    i(
                                      "button",
                                      {
                                        staticClass: "button button-buy",
                                        on: { click: t.buyCoin },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.$t("button.buy")) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ]),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "submit-wrapper m-t-10" }, [
                              i(
                                "button",
                                {
                                  staticClass: "button",
                                  on: { click: t.showPasswordForm },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.sendText) +
                                      "\n            ",
                                  ),
                                  Number(t.amount) > 0
                                    ? i("span", [
                                        t._v(
                                          " " +
                                            t._s(t.formatFinance(t.amount)) +
                                            " " +
                                            t._s(t.coin.ticker) +
                                            " ",
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
                  ? i(
                      "div",
                      { staticClass: "form-password" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.formatFinance(t.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".stake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "Unstake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".unstake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("Edit", {
                          ref: "confirmPassword",
                          attrs: {
                            modelValue: t.password,
                            error: t.passwordError,
                            focus: "",
                            isShowPassword: "",
                            type: t.inputTypePassword,
                            placeholder: t.$t("input.password"),
                          },
                          on: {
                            "enter-pressed": t.sendCoins,
                            "update:modelValue": function (s) {
                              t.password = s;
                            },
                          },
                        }),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button normal hover-white",
                              on: { click: t.backFromPassword },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button",
                              on: { click: t.sendCoins },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n        ",
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
                  ? i("div", { staticClass: "sending" }, [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendType) +
                              " " +
                              t._s(t.amount) +
                              " " +
                              t._s(t.coin.ticker),
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".delegating",
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "loading" }),
                    ])
                  : t._e(),
                t._v(" "),
                t.sending
                  ? t._e()
                  : i("SendCoinResult", {
                      attrs: {
                        amount: t.sendAmount,
                        coin: t.coin,
                        icon: t.icon,
                        isError: t.isError,
                        isSuccess: t.isSuccess,
                        sendType: t.sendType,
                        txid: t.txid,
                        contactData: {
                          issue: t.$t("title.staking"),
                          tags: ["staking_tag"],
                        },
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
            ),
          ]);
        },
        a = [];
    },
    11605: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5790),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11606),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11606: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.sending },
              on: { close: t.backToWallets },
            },
            [
              i(
                "div",
                { staticClass: "send-coin popup send-stake" },
                [
                  t.isPasswordShow || t.sending || t.isError || t.isSuccess
                    ? t._e()
                    : i(
                        "div",
                        { staticClass: "form" },
                        [
                          i("div", { staticClass: "info" }, [
                            i("div", { staticClass: "icon", class: t.icon }),
                            t._v(" "),
                            i("p", [
                              t._v(
                                t._s(t.sendText) +
                                  " " +
                                  t._s(t.coin.name) +
                                  " (" +
                                  t._s(t.coin.ticker) +
                                  ")",
                              ),
                            ]),
                            t._v(" "),
                            "Stake" === t.sendType
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "staking." +
                                            t.coin.ticker +
                                            ".hints.calculator",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          i("EditAmount", {
                            staticClass: "last-child",
                            attrs: {
                              balance: t.coin.divisibleBalance,
                              decimals: t.coin.decimal,
                              error: t.inputsError.amount,
                              isBuyCoin: t.isBuyCoin,
                              isFiat: "",
                              isSendAllClick: t.isSendAllClick,
                              isZeroPlaceholder: "",
                              parentTicker: t.coin.deprecatedParent,
                              readonly: ["Withdrawal"].includes(t.sendType),
                              showBalance: "",
                              wallet: t.coin,
                              modelValue: t.inputs.amount,
                              placeholder: t.$t("input.amount"),
                            },
                            on: {
                              "update:modelValue": t.changeAmount,
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i("AvailableAndFeeAmounts", {
                            attrs: {
                              availableBalance: String(t.availableBalance),
                              feeBalance: t.fee.fee,
                              feeWallet: t.feeWallet,
                              sendType: t.sendType,
                              wallet: t.coin,
                              feeLoading: t.feeLoading,
                            },
                            on: {
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "text" },
                            [
                              t.availableValidators.length > 0
                                ? i(
                                    "div",
                                    { staticClass: "stake-validator" },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.$t("stakingPage.validator")) +
                                          ": ",
                                      ),
                                      i(
                                        "span",
                                        {
                                          staticClass:
                                            "text-white validator-name",
                                          on: {
                                            click: function (s) {
                                              (s.stopPropagation(),
                                                (t.isChangeValidator = !0));
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            t._s(t.stakingValidator.name) + " ",
                                          ),
                                          "Stake" === t.sendType &&
                                          t.stakingValidator.reward
                                            ? i(
                                                "span",
                                                { staticClass: "text-white" },
                                                [
                                                  t._v(
                                                    "- " +
                                                      t._s(
                                                        t.stakingValidator
                                                          .reward,
                                                      ) +
                                                      "%",
                                                  ),
                                                  i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ticker additional",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                " +
                                                          t._s(
                                                            t.$t(
                                                              "stakingPage.yearlyYield",
                                                            ),
                                                          ) +
                                                          "\n              ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              )
                                            : t._e(),
                                        ],
                                      ),
                                      t._v(" "),
                                      t.isChangeValidator
                                        ? i("Dropdown", {
                                            directives: [
                                              {
                                                name: "click-outside",
                                                rawName: "v-click-outside",
                                                value:
                                                  t.closeValidatorsDropdown,
                                                expression:
                                                  "closeValidatorsDropdown",
                                              },
                                            ],
                                            attrs: {
                                              elements: t.availableValidators,
                                              showAdditional: "",
                                            },
                                            on: { select: t.selectValidator },
                                          })
                                        : t._e(),
                                    ],
                                    1,
                                  )
                                : t._e(),
                              t._v(" "),
                              i(
                                "transition",
                                { attrs: { name: "collapse-fade" } },
                                [
                                  "Stake" === t.sendType &&
                                  t.stakingValidator.reward &&
                                  t.stakingProfit &&
                                  Number(t.inputs.amount) > 0
                                    ? i(
                                        "div",
                                        {
                                          staticClass: "network-fee flex-block",
                                        },
                                        [
                                          i("p", [
                                            t._v(
                                              t._s(
                                                t.$t(
                                                  "stakingPage.yearlyEarning",
                                                ),
                                              ) + ":",
                                            ),
                                          ]),
                                          t._v(" "),
                                          i(
                                            "p",
                                            { staticClass: "text-white" },
                                            [
                                              t._v(
                                                t._s(t.stakingProfit) +
                                                  " " +
                                                  t._s(t.coin.ticker) +
                                                  " ",
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          i("p", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.getValueFiat({
                                                      value: t.stakingProfit,
                                                      wallet: t.coin,
                                                    }),
                                                  ),
                                                ) +
                                                "\n              " +
                                                t._s(t.fiatRate) +
                                                "\n            ",
                                            ),
                                          ]),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                            ],
                            1,
                          ),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "submit p-t-40" },
                            [
                              i(
                                "transition",
                                { attrs: { name: "page-fade" } },
                                [
                                  "Unstake" !== t.sendType ||
                                  t.isUnstakeAvailable
                                    ? t._e()
                                    : i("div", { staticClass: "error" }, [
                                        i(
                                          "div",
                                          { staticClass: "new-text-error" },
                                          [
                                            i(
                                              "div",
                                              { staticClass: "new-text-error" },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t.$t(
                                                        "popups.SendStakeBNB.alreadyUnstaked",
                                                      ),
                                                    ) +
                                                    "\n              ",
                                                ),
                                              ],
                                            ),
                                            t._v(" "),
                                            i(
                                              "div",
                                              { staticClass: "new-text-error" },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t.$t(
                                                        "popups.SendStakeBNB.binanceChainRule",
                                                      ),
                                                    ) +
                                                    "\n              ",
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ]),
                                  t._v(" "),
                                  "Claim" !== t.sendType || t.isFeeEnough
                                    ? t._e()
                                    : i(
                                        "div",
                                        {
                                          staticClass:
                                            "error flex center justify-center",
                                        },
                                        [
                                          i(
                                            "span",
                                            { staticClass: "new-text-error" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "error.insufficientFundsToClaim",
                                                      {
                                                        ticker:
                                                          t.coin.getUserTicker(),
                                                      },
                                                    ),
                                                  ) +
                                                  "\n            ",
                                              ),
                                            ],
                                          ),
                                          t._v(" "),
                                          i(
                                            "button",
                                            {
                                              staticClass: "button button-buy",
                                              on: { click: t.buyCoin },
                                            },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(t.$t("button.buy")) +
                                                  "\n            ",
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                  t._v(" "),
                                  t.isFeeEnough
                                    ? t._e()
                                    : i("div", { staticClass: "error" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "error.insufficientFundsToSend",
                                                {
                                                  fee: t.formatFinance(
                                                    Number(
                                                      Number(t.fee.fee).toFixed(
                                                        6,
                                                      ),
                                                    ),
                                                  ),
                                                  feeTicker: t.fee.ticker,
                                                  ticker:
                                                    t.coin.getUserTicker(),
                                                },
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ]),
                                ],
                              ),
                              t._v(" "),
                              i("div", { staticClass: "submit-wrapper" }, [
                                t.initSend
                                  ? i("div", { staticClass: "loader" })
                                  : i(
                                      "button",
                                      {
                                        staticClass: "button",
                                        class: {
                                          disabled:
                                            "Unstake" === t.sendType &&
                                            !t.isUnstakeAvailable,
                                        },
                                        on: { click: t.showPasswordForm },
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(t.sendText) +
                                            "\n            ",
                                        ),
                                        Number(t.inputs.amount) > 0
                                          ? i("span", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formatFinance(
                                                      t.inputs.amount,
                                                    ),
                                                  ) +
                                                  " " +
                                                  t._s(t.coin.ticker),
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
                    ? i(
                        "div",
                        { staticClass: "form-password" },
                        [
                          i("div", { staticClass: "info" }, [
                            i("p", [
                              t._v(
                                t._s(t.sendText) +
                                  " " +
                                  t._s(t.formatFinance(t.inputs.amount)) +
                                  " " +
                                  t._s(t.coin.ticker),
                              ),
                            ]),
                            t._v(" "),
                            "Stake" === t.sendType
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "coinTips." +
                                            t.coin.ticker.toLowerCase() +
                                            ".stake",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                            t._v(" "),
                            "Unstake" === t.sendType
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "coinTips." +
                                            t.coin.ticker.toLowerCase() +
                                            ".unstake",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          i("Edit", {
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
                              "update:modelValue": function (s) {
                                t.inputs.password = s;
                              },
                            },
                          }),
                          t._v(" "),
                          i("div", { staticClass: "submit" }, [
                            i(
                              "button",
                              {
                                staticClass: "button normal hover-white",
                                on: { click: t.backFromPassword },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.back")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            i(
                              "button",
                              {
                                staticClass: "button",
                                on: { click: t.sendCoins },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.confirm")) +
                                    "\n        ",
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
                    ? i("div", { staticClass: "sending" }, [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendTypeVerb) +
                                " " +
                                t._s(t.inputs.amount) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".delegating",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "loading" }),
                      ])
                    : t._e(),
                  t._v(" "),
                  t.sending
                    ? t._e()
                    : i("SendCoinResult", {
                        attrs: {
                          amount: String(t.amountResult),
                          coin: t.coin,
                          icon: t.icon,
                          isError: t.isError,
                          isSuccess: t.isSuccess,
                          sendType: t.sendType,
                          txid: t.txid,
                          contactData: {
                            issue: t.$t("title.staking"),
                            tags: ["staking_tag"],
                          },
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
              ),
            ],
          );
        },
        a = [];
    },
    11607: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5791),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11608),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11608: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.sending },
              on: { close: t.backToWallets },
            },
            [
              i(
                "div",
                { staticClass: "send-coin popup send-stake" },
                [
                  "Claim" === t.sendType
                    ? [
                        t.isPasswordShow ||
                        t.sending ||
                        t.isError ||
                        t.isSuccess
                          ? t._e()
                          : i(
                              "div",
                              { staticClass: "form" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("div", {
                                    staticClass: "icon",
                                    class: t.icon,
                                  }),
                                  t._v(" "),
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(
                                          t.isTRX2
                                            ? t.staking.name
                                            : t.coin.name,
                                        ) +
                                        " (" +
                                        t._s(t.coin.ticker) +
                                        ")",
                                    ),
                                  ]),
                                  t._v(" "),
                                  "Stake" === t.sendType
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "coinTips." +
                                                  t.coin.ticker.toLowerCase() +
                                                  ".calculator",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("EditAmount", {
                                  staticClass: "last-child",
                                  attrs: {
                                    balance: t.coin.divisibleBalance,
                                    decimals: t.coin.decimal,
                                    error: t.inputsError.amount,
                                    isFiat: "",
                                    isSendAllClick: t.isSendAllClick,
                                    isZeroPlaceholder: "",
                                    parentTicker: t.coin.deprecatedParent,
                                    readonly: "",
                                    showBalance: "",
                                    wallet: t.coin,
                                    modelValue: t.inputs.amount,
                                  },
                                  on: {
                                    "update:modelValue": t.changeAmount,
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                i(
                                  "AvailableAndFeeAmounts",
                                  {
                                    attrs: {
                                      availableBalance: String(
                                        t.balanceToStake,
                                      ),
                                      feeBalance: t.fee.fee,
                                      feeWallet: t.feeWallet,
                                      sendType: t.sendType,
                                      wallet: t.coin,
                                      feeLoading: t.feeLoading,
                                      isSendAll: ![
                                        "Vote",
                                        "Withdrawal",
                                        "Claim",
                                      ].includes(t.sendType),
                                    },
                                    on: {
                                      setAllAvailableBalance:
                                        t.setAllAvailableBalance,
                                    },
                                  },
                                  [
                                    i("div", { staticClass: "text" }, [
                                      "Stake" === t.sendType
                                        ? i(
                                            "div",
                                            {
                                              staticClass:
                                                "network-fee flex-block",
                                            },
                                            [
                                              i("p", [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "stakingPage.yearlyEarning",
                                                    ),
                                                  ) + ":",
                                                ),
                                              ]),
                                              t._v(" "),
                                              i(
                                                "p",
                                                { staticClass: "text-white" },
                                                [
                                                  t._v(
                                                    t._s(t.yearlyYield) +
                                                      " " +
                                                      t._s(t.coin.ticker) +
                                                      " ",
                                                  ),
                                                ],
                                              ),
                                              t._v(" "),
                                              t.hasRate(t.coin.id)
                                                ? i("p", [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.formatFinance(
                                                            t.getValueFiat({
                                                              value:
                                                                t.yearlyYield,
                                                              wallet: t.coin,
                                                            }),
                                                          ),
                                                        ) +
                                                        "\n                " +
                                                        t._s(t.fiatRate) +
                                                        "\n              ",
                                                    ),
                                                  ])
                                                : t._e(),
                                            ],
                                          )
                                        : t._e(),
                                    ]),
                                    t._v(" "),
                                    i("div", { staticClass: "text" }, [
                                      t.availableValidators.length > 0 &&
                                      "Claim" !== t.sendType
                                        ? i(
                                            "div",
                                            { staticClass: "stake-validator" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "stakingPage.validator",
                                                    ),
                                                  ) +
                                                  ": ",
                                              ),
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-white validator-name",
                                                  on: {
                                                    click: function (s) {
                                                      (s.stopPropagation(),
                                                        (t.isChangeValidator =
                                                          !0));
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.stakingValidator.name,
                                                      ) +
                                                      " \n                ",
                                                  ),
                                                  t.stakingValidator.reward
                                                    ? i(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-white",
                                                        },
                                                        [
                                                          t._v(
                                                            "- " +
                                                              t._s(
                                                                t
                                                                  .stakingValidator
                                                                  .reward,
                                                              ) +
                                                              "%",
                                                          ),
                                                          i(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "ticker additional",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                    " +
                                                                  t._s(
                                                                    t.$t(
                                                                      "stakingPage.yearlyYield",
                                                                    ),
                                                                  ) +
                                                                  "\n                  ",
                                                              ),
                                                            ],
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                ],
                                              ),
                                              t._v(" "),
                                              t.isChangeValidator
                                                ? i("Dropdown", {
                                                    directives: [
                                                      {
                                                        name: "click-outside",
                                                        rawName:
                                                          "v-click-outside",
                                                        value:
                                                          t.closeValidatorsDropdown,
                                                        expression:
                                                          "closeValidatorsDropdown",
                                                      },
                                                    ],
                                                    attrs: {
                                                      elements:
                                                        t.availableValidators,
                                                      showAdditional: "",
                                                    },
                                                    on: {
                                                      select: t.selectValidator,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                    ]),
                                  ],
                                ),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "div",
                                    { staticClass: "submit-wrapper m-t-10" },
                                    [
                                      i(
                                        "button",
                                        {
                                          staticClass: "button",
                                          on: { click: t.showPasswordForm },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.sendText) +
                                              "\n              ",
                                          ),
                                          Number(t.inputs.amount) > 0
                                            ? i("span", [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t.formatFinance(
                                                        t.inputs.amount,
                                                      ),
                                                    ) +
                                                    " " +
                                                    t._s(t.coin.ticker) +
                                                    "\n              ",
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                              1,
                            ),
                        t._v(" "),
                        t.isPasswordShow
                          ? i(
                              "div",
                              { staticClass: "form-password" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(t.formatFinance(t.inputs.amount)) +
                                        " " +
                                        t._s(t.coin.ticker),
                                    ),
                                  ]),
                                  t._v(" "),
                                  "Claim" !== t.sendType
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "popups.sendStakeICX.coinsFrozen",
                                              ),
                                            ) +
                                            "\n            " +
                                            t._s(
                                              "Unstake" === t.sendType
                                                ? t.$t(
                                                    "popups.SendVoteICX.afterTheUnstake",
                                                  )
                                                : t.$t(
                                                    "popups.SendVoteICX.onceYouDecideToUnstakeThemLater",
                                                  ),
                                            ) +
                                            "\n            " +
                                            t._s(
                                              t.$t(
                                                "popups.SendVoteICX.blockchainRule",
                                                { ticker: t.coin.ticker },
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("Edit", {
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
                                    "update:modelValue": function (s) {
                                      t.inputs.password = s;
                                    },
                                  },
                                }),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "button",
                                    {
                                      staticClass: "button normal hover-white",
                                      on: { click: t.backFromPassword },
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
                                  i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      on: { click: t.sendCoins },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.confirm")) +
                                          "\n          ",
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
                          ? i("div", { staticClass: "sending" }, [
                              i("div", { staticClass: "info" }, [
                                i("div", {
                                  staticClass: "icon",
                                  class: t.icon,
                                }),
                                t._v(" "),
                                i("p", [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.$t(
                                          "popups.claimingTickerWithAmount",
                                          {
                                            amount: t.inputs.amount,
                                            ticker: t.coin.ticker,
                                          },
                                        ),
                                      ) +
                                      "\n          ",
                                  ),
                                ]),
                                t._v(" "),
                                "Stake" === t.sendType
                                  ? i("div", { staticClass: "warning" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "coinTips." +
                                                t.coin.ticker.toLowerCase() +
                                                ".delegating",
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                              ]),
                              t._v(" "),
                              i("div", { staticClass: "loading" }),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.sending
                          ? t._e()
                          : i("SendCoinResult", {
                              attrs: {
                                amount: String(t.inputs.amount),
                                coin: t.coin,
                                errorMessage: t.errorMessage,
                                icon: t.icon,
                                isError: t.isError,
                                isSuccess: t.isSuccess,
                                sendType: t.sendType,
                                txid: t.txid,
                                contactData: {
                                  issue: t.$t("title.staking"),
                                  tags: ["staking_tag"],
                                },
                                mailTitle: t.$t("error.sendingError"),
                              },
                              on: {
                                backToForm: t.backToForm,
                                backToWallets: t.backToWallets,
                                tryAgain: t.tryAgain,
                              },
                            }),
                      ]
                    : [
                        t.isPasswordShow ||
                        t.sending ||
                        t.isError ||
                        t.isSuccess
                          ? t._e()
                          : i(
                              "div",
                              { staticClass: "form" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("div", {
                                    staticClass: "icon",
                                    class: t.icon,
                                  }),
                                  t._v(" "),
                                  i("div", [
                                    i(
                                      "span",
                                      { staticClass: "new-text-extra-large" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.sendText) +
                                            " " +
                                            t._s(
                                              t.isTRX2
                                                ? t.staking.name
                                                : t.coin.name,
                                            ) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                    t._v(" "),
                                    i(
                                      "span",
                                      {
                                        staticClass:
                                          "new-text-extra-large new-text-gray",
                                      },
                                      [t._v(" (" + t._s(t.coin.ticker) + ") ")],
                                    ),
                                  ]),
                                  t._v(" "),
                                  "Stake" === t.sendType
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "coinTips." +
                                                  t.coin.ticker.toLowerCase() +
                                                  ".calculator",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("EditAmount", {
                                  staticClass: "last-child",
                                  attrs: {
                                    balance: t.balanceToStake,
                                    decimals: t.decimals,
                                    error: t.inputsError.amount,
                                    isBuyCoin: t.isBuyCoin,
                                    isFiat: "",
                                    isInteger: "",
                                    isSendAllClick: t.isSendAllClick,
                                    isZeroPlaceholder: "",
                                    parentTicker: t.coin.deprecatedParent,
                                    readonly: ["Vote", "Withdrawal"].includes(
                                      t.sendType,
                                    ),
                                    showBalance: "",
                                    wallet: t.coin,
                                    modelValue: String(t.inputs.amount),
                                    placeholder: t.$t("input.amount"),
                                  },
                                  on: {
                                    "update:modelValue": t.changeAmount,
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                i("AvailableAndFeeAmounts", {
                                  attrs: {
                                    availableBalance: String(
                                      t.availableBalance,
                                    ),
                                    feeBalance: t.fee.fee,
                                    feeWallet: t.feeWallet,
                                    isSendAll: ![
                                      "Vote",
                                      "Withdrawal",
                                      "Claim",
                                    ].includes(t.sendType),
                                    sendType: t.sendType,
                                    wallet: t.coin,
                                  },
                                  on: {
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                "Unstake" !== t.sendType
                                  ? i(
                                      "div",
                                      { staticClass: "text" },
                                      [
                                        t.availableValidators.length > 0
                                          ? i(
                                              "div",
                                              {
                                                staticClass: "stake-validator",
                                              },
                                              [
                                                t._v(
                                                  "\n            " +
                                                    t._s(
                                                      t.$t(
                                                        "popups.sendStakeICX.validator",
                                                      ),
                                                    ) +
                                                    ": ",
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-white validator-name",
                                                    on: {
                                                      click: function (s) {
                                                        (s.stopPropagation(),
                                                          (t.isChangeValidator =
                                                            !0));
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.stakingValidator.name,
                                                      ) + " ",
                                                    ),
                                                    "Stake" === t.sendType &&
                                                    t.stakingValidator.reward
                                                      ? i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-white",
                                                          },
                                                          [
                                                            t._v(
                                                              "- " +
                                                                t._s(
                                                                  t
                                                                    .stakingValidator
                                                                    .reward,
                                                                ) +
                                                                "%",
                                                            ),
                                                            i(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "ticker additional",
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                  " +
                                                                    t._s(
                                                                      t.$t(
                                                                        "stakingPage.yearlyYield",
                                                                      ),
                                                                    ) +
                                                                    "\n                ",
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        )
                                                      : t._e(),
                                                  ],
                                                ),
                                                t._v(" "),
                                                t.isChangeValidator
                                                  ? i("Dropdown", {
                                                      directives: [
                                                        {
                                                          name: "click-outside",
                                                          rawName:
                                                            "v-click-outside",
                                                          value:
                                                            t.closeValidatorsDropdown,
                                                          expression:
                                                            "closeValidatorsDropdown",
                                                        },
                                                      ],
                                                      attrs: {
                                                        elements:
                                                          t.availableValidators,
                                                        showAdditional: "",
                                                      },
                                                      on: {
                                                        select:
                                                          t.selectValidator,
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1,
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        i(
                                          "transition",
                                          { attrs: { name: "collapse-fade" } },
                                          [
                                            "Stake" === t.sendType &&
                                            t.stakingValidator.reward &&
                                            t.stakingProfit &&
                                            Number(t.inputs.amount) > 0
                                              ? i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "network-fee flex-block",
                                                  },
                                                  [
                                                    i("p", [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "stakingPage.yearlyEarning",
                                                          ),
                                                        ) + ":",
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    i(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-white",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.stakingProfit,
                                                          ) +
                                                            " " +
                                                            t._s(
                                                              t.coin.ticker,
                                                            ) +
                                                            " ",
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(" "),
                                                    i("p", [
                                                      t._v(
                                                        "\n                " +
                                                          t._s(
                                                            t.formatFinance(
                                                              t.getValueFiat({
                                                                value:
                                                                  t.stakingProfit,
                                                                wallet: t.coin,
                                                              }),
                                                            ),
                                                          ) +
                                                          "\n                " +
                                                          t._s(t.fiatRate) +
                                                          "\n              ",
                                                      ),
                                                    ]),
                                                  ],
                                                )
                                              : t._e(),
                                          ],
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t._v(" "),
                                i(
                                  "div",
                                  { staticClass: "submit" },
                                  [
                                    i(
                                      "transition",
                                      { attrs: { name: "page-fade" } },
                                      [
                                        t.isFeeEnough
                                          ? t._e()
                                          : i("div", { staticClass: "error" }, [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "error.insufficientFundsToSend",
                                                      {
                                                        fee: t.formatFinance(
                                                          Number(
                                                            Number(
                                                              t.fee.fee,
                                                            ).toFixed(6),
                                                          ),
                                                        ),
                                                        feeTicker:
                                                          t.coin
                                                            .deprecatedParent,
                                                        ticker:
                                                          t.coin.getUserTicker(),
                                                      },
                                                    ),
                                                  ) +
                                                  "\n            ",
                                              ),
                                            ]),
                                      ],
                                    ),
                                    t._v(" "),
                                    i(
                                      "div",
                                      { staticClass: "submit-wrapper" },
                                      [
                                        t.initSend
                                          ? i("div", { staticClass: "loader" })
                                          : i(
                                              "button",
                                              {
                                                staticClass: "button",
                                                on: {
                                                  click: t.showPasswordForm,
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n              " +
                                                    t._s(t.sendText) +
                                                    "\n              ",
                                                ),
                                                Number(t.inputs.amount) > 0
                                                  ? i("span", [
                                                      t._v(
                                                        "\n                " +
                                                          t._s(
                                                            t.formatFinance(
                                                              t.inputs.amount,
                                                            ),
                                                          ) +
                                                          " " +
                                                          t._s(t.coin.ticker) +
                                                          "\n              ",
                                                      ),
                                                    ])
                                                  : t._e(),
                                              ],
                                            ),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                        t._v(" "),
                        t.isPasswordShow
                          ? i(
                              "div",
                              { staticClass: "form-password" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(t.formatFinance(t.inputs.amount)) +
                                        " " +
                                        t._s(t.coin.ticker),
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                i("Edit", {
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
                                    "update:modelValue": function (s) {
                                      t.inputs.password = s;
                                    },
                                  },
                                }),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "button",
                                    {
                                      staticClass: "button normal hover-white",
                                      on: { click: t.backFromPassword },
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
                                  i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      on: { click: t.sendCoins },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.confirm")) +
                                          "\n          ",
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
                          ? i("div", { staticClass: "sending" }, [
                              i("div", { staticClass: "info" }, [
                                i("div", {
                                  staticClass: "icon",
                                  class: t.icon,
                                }),
                                t._v(" "),
                                i("p", [
                                  t._v(
                                    t._s(t.sendText) +
                                      " " +
                                      t._s(t.inputs.amount) +
                                      " " +
                                      t._s(t.coin.ticker),
                                  ),
                                ]),
                                t._v(" "),
                                "Stake" === t.sendType
                                  ? i("div", { staticClass: "warning" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "coinTips." +
                                                t.coin.ticker.toLowerCase() +
                                                ".delegating",
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                              ]),
                              t._v(" "),
                              i("div", { staticClass: "loading" }),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.sending
                          ? t._e()
                          : i("SendCoinResult", {
                              attrs: {
                                amount: String(t.inputs.amount),
                                coin: t.coin,
                                icon: t.icon,
                                isError: t.isError,
                                isSuccess: t.isSuccess,
                                sendType: t.sendType,
                                txid: t.txid,
                                contactData: {
                                  issue: t.$t("stakingPage.staking"),
                                  tags: ["staking_tag"],
                                },
                                mailTitle: t.$t("error.sendingError"),
                              },
                              on: {
                                backToForm: t.backToForm,
                                backToWallets: t.backToWallets,
                                tryAgain: t.tryAgain,
                              },
                            }),
                      ],
                ],
                2,
              ),
            ],
          );
        },
        a = [];
    },
    11609: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5792),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11612),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11612: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.sending },
              on: { close: t.backToWallets },
            },
            [
              e(
                "div",
                { staticClass: "send-coin popup xtz-stake" },
                [
                  t.isCustomShow ||
                  t.isPasswordShow ||
                  t.sending ||
                  t.isError ||
                  t.isSuccess
                    ? t._e()
                    : e("div", { staticClass: "form" }, [
                        e("div", { staticClass: "info" }, [
                          e("p", [
                            t._v(
                              t._s(
                                t.$t("popups.sendStakeXTZ.selectTezosBaker"),
                              ),
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "warning" }, [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.$t(
                                    "coinTips." +
                                      t.coin.ticker.toLowerCase() +
                                      ".calculator",
                                  ),
                                ) +
                                "\n        ",
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          "div",
                          { staticClass: "table xtz-validators-table" },
                          [
                            e("div", { staticClass: "table-row header" }, [
                              e("div", { staticClass: "item" }),
                              t._v(" "),
                              e("div", { staticClass: "item" }, [
                                e("div", { staticClass: "search" }, [
                                  e("input", {
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
                                      placeholder: t.$t("input.search"),
                                      type: "text",
                                    },
                                    domProps: { value: t.filter },
                                    on: {
                                      input: function (s) {
                                        s.target.composing ||
                                          (t.filter = s.target.value);
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.filter
                                    ? e(
                                        "span",
                                        {
                                          staticClass: "clear",
                                          on: {
                                            click: function (s) {
                                              t.filter = "";
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                ✕\n              ",
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "item sort-item",
                                  class: {
                                    active:
                                      "estimatedRoi" === t.activeSortField,
                                  },
                                  on: {
                                    click: function (s) {
                                      return t.sortByField("estimatedRoi");
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("title.reward")) +
                                      "\n            ",
                                  ),
                                  "estimatedRoi" === t.activeSortField
                                    ? e(
                                        "svg",
                                        {
                                          staticClass: "sort-arrow",
                                          class: [t.isSortASC ? "asc" : "desc"],
                                          attrs: { viewBox: "0 0 24 24" },
                                        },
                                        [
                                          e("path", {
                                            attrs: {
                                              d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                              fill: "#fff",
                                              stroke: "#fff",
                                            },
                                          }),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "item sort-item",
                                  class: {
                                    active: "staked" === t.activeSortField,
                                  },
                                  on: {
                                    click: function (s) {
                                      return t.sortByField("staked");
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("coinInfo.staked")) +
                                      "\n            ",
                                  ),
                                  "staked" === t.activeSortField
                                    ? e(
                                        "svg",
                                        {
                                          staticClass: "sort-arrow",
                                          class: [t.isSortASC ? "asc" : "desc"],
                                          attrs: { viewBox: "0 0 24 24" },
                                        },
                                        [
                                          e("path", {
                                            attrs: {
                                              d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                              fill: "#fff",
                                              stroke: "#fff",
                                            },
                                          }),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "item sort-item",
                                  class: {
                                    active: "capacity" === t.activeSortField,
                                  },
                                  on: {
                                    click: function (s) {
                                      return t.sortByField("capacity");
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("stakingPage.capacity")) +
                                      "\n            ",
                                  ),
                                  "capacity" === t.activeSortField
                                    ? e(
                                        "svg",
                                        {
                                          staticClass: "sort-arrow",
                                          class: { asc: t.isSortASC },
                                          attrs: { viewBox: "0 0 24 24" },
                                        },
                                        [
                                          e("path", {
                                            attrs: {
                                              d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                              fill: "#fff",
                                              stroke: "#fff",
                                            },
                                          }),
                                        ],
                                      )
                                    : t._e(),
                                ],
                              ),
                              t._v(" "),
                              e("div", { staticClass: "item" }),
                            ]),
                            t._v(" "),
                            t._l(t.availableValidators, function (s) {
                              return e(
                                "div",
                                {
                                  key: s.stakingBalance,
                                  staticClass: "table-row main",
                                  on: {
                                    click: function (i) {
                                      return t.selectValidator(s);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    { staticClass: "item logo" },
                                    [
                                      e("LazyImage", {
                                        attrs: {
                                          cached:
                                            t.cacheImage[
                                              s.name
                                                .toLowerCase()
                                                .replace(/ /g, "")
                                            ],
                                          loading: "" + s.logo,
                                          defaultImage: i(11613),
                                        },
                                        on: {
                                          imageLoaded: function (i) {
                                            t.saveCache(
                                              i,
                                              s.name
                                                .toLowerCase()
                                                .replace(/ /g, ""),
                                            );
                                          },
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  t._v(" "),
                                  e("div", { staticClass: "item name" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(s.name) +
                                        "\n          ",
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "item reward" }, [
                                    t._v(
                                      t._s((100 * s.estimatedRoi).toFixed(2)) +
                                        " %",
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "item capacity" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.formatFinance(s.staked)) +
                                        " ",
                                    ),
                                    e("span", { staticClass: "ticker" }, [
                                      t._v(" XTZ "),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "item balance" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.formatFinance(s.staked)) +
                                        " ",
                                    ),
                                    e("span", { staticClass: "ticker" }, [
                                      t._v(" XTZ "),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "item select",
                                      class: {
                                        selected:
                                          s.name === t.selectedStakingValidator,
                                      },
                                    },
                                    [e("div", { staticClass: "icon-success" })],
                                  ),
                                ],
                              );
                            }),
                            t._v(" "),
                            t.filter && !t.availableValidators.length
                              ? e("p", { staticClass: "noresult" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t("stakingPage.noResultFoundFor"),
                                      ) +
                                      ' "' +
                                      t._s(t.filter) +
                                      '"\n        ',
                                  ),
                                ])
                              : t._e(),
                          ],
                          2,
                        ),
                        t._v(" "),
                        e(
                          "div",
                          { staticClass: "submit" },
                          [
                            e("transition", { attrs: { name: "page-fade" } }, [
                              t.isFeeEnough
                                ? t._e()
                                : e("div", { staticClass: "error" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(
                                          t.$t(
                                            "error.insufficientFundsToSend",
                                            {
                                              fee: t.formatFinance(
                                                Number(
                                                  Number(t.fee.fee).toFixed(6),
                                                ),
                                              ),
                                              feeTicker: t.feeTicker(),
                                              ticker: t.coin.getUserTicker(),
                                            },
                                          ),
                                        ) +
                                        "\n          ",
                                    ),
                                  ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "submit-wrapper" }, [
                              e(
                                "button",
                                {
                                  staticClass: "button",
                                  on: { click: t.showCustomForm },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("stakingPage.customBaker")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              e(
                                "button",
                                {
                                  staticClass: "button",
                                  class: { disabled: t.disableButton },
                                  on: { click: t.showPasswordForm },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("button.stake")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ]),
                          ],
                          1,
                        ),
                      ]),
                  t._v(" "),
                  t.isCustomShow
                    ? e(
                        "div",
                        { staticClass: "form-custom-baker form-password" },
                        [
                          e("div", { staticClass: "info" }, [
                            e("p", [
                              t._v(t._s(t.$t("stakingPage.customBaker"))),
                            ]),
                          ]),
                          t._v(" "),
                          e("Edit", {
                            attrs: {
                              modelValue: t.customBaker,
                              error: t.customBakerError,
                              focus: "",
                              placeholder: t.$t(
                                "stakingPage.customBakerAddress",
                              ),
                              type: "text",
                            },
                            on: {
                              "update:modelValue": function (s) {
                                t.customBaker = s;
                              },
                            },
                          }),
                          t._v(" "),
                          e("div", { staticClass: "submit" }, [
                            e(
                              "button",
                              {
                                staticClass: "button normal hover-white",
                                on: { click: t.backFromCustom },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.back")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            e(
                              "button",
                              {
                                staticClass: "button",
                                class: { disabled: t.disableButton },
                                on: { click: t.selectCustomValidator },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.stake")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ]),
                        ],
                        1,
                      )
                    : t._e(),
                  t._v(" "),
                  t.isPasswordShow
                    ? e(
                        "div",
                        { staticClass: "form-password" },
                        [
                          e("div", { staticClass: "info" }, [
                            e("p", [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "popups.sendStakeXTZ.stakeTickerToValidator",
                                      {
                                        amount: t.formatFinance(
                                          t.inputs.amount,
                                        ),
                                        ticker: t.coin.ticker,
                                        stakingValidator:
                                          t.stakingValidator.name,
                                      },
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("Edit", {
                            ref: "confirmPassword",
                            attrs: {
                              modelValue: t.inputs.password,
                              error: t.inputsError.password,
                              isShowPassword: "",
                              type: t.inputTypePassword,
                              placeholder: t.$t("input.password"),
                            },
                            on: {
                              "enter-pressed": t.sendCoins,
                              "update:modelValue": function (s) {
                                t.inputs.password = s;
                              },
                            },
                          }),
                          t._v(" "),
                          e("div", { staticClass: "submit" }, [
                            e(
                              "button",
                              {
                                staticClass: "button normal hover-white",
                                on: { click: t.backFromPassword },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.back")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            e(
                              "button",
                              {
                                staticClass: "button",
                                on: { click: t.sendCoins },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.confirm")) +
                                    "\n        ",
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
                    ? e("div", { staticClass: "sending" }, [
                        e("div", { staticClass: "info" }, [
                          e("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          e("p", [
                            t._v(
                              t._s(t.$t("title.stake")) +
                                " " +
                                t._s(t.formatFinance(t.inputs.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "warning" }, [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.$t(
                                    "coinTips." +
                                      t.coin.ticker.toLowerCase() +
                                      ".delegating",
                                  ),
                                ) +
                                "\n        ",
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "loading" }),
                      ])
                    : t._e(),
                  t._v(" "),
                  t.sending
                    ? t._e()
                    : e("SendCoinResult", {
                        attrs: {
                          amount: t.inputs.amount,
                          coin: t.coin,
                          icon: t.icon,
                          isError: t.isError,
                          isSuccess: t.isSuccess,
                          txid: t.txid,
                          contactData: {
                            issue: t.$t("title.staking"),
                            tags: ["staking_tag"],
                          },
                          mailTitle: t.$t("error.sendingError"),
                          sendType: "Stake",
                        },
                        on: {
                          backToForm: t.backToForm,
                          backToWallets: t.backToWallets,
                          tryAgain: t.tryAgain,
                        },
                      }),
                ],
                1,
              ),
            ],
          );
        },
        a = [];
    },
    11614: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5794),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11615),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11615: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("AtomicPopup", { on: { close: t.backToWallets } }, [
            i(
              "div",
              { staticClass: "send-coin popup send-stake" },
              [
                t.isPasswordShow || t.sending || t.isError || t.isSuccess
                  ? t._e()
                  : i(
                      "div",
                      { staticClass: "form" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.coin.name) +
                                " (" +
                                t._s(t.coin.ticker) +
                                ")",
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".calculator",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("EditAmount", {
                          staticClass: "last-child",
                          attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: "Withdrawal" !== t.sendType,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: "",
                            parentTicker: t.coin.deprecatedParent,
                            readonly: ["Claim", "Withdrawal"].includes(
                              t.sendType,
                            ),
                            showBalance: "",
                            wallet: t.coin,
                            modelValue: t.inputs.amount,
                            placeholder: t.$t("input.amount"),
                          },
                          on: {
                            "update:modelValue": t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance,
                          },
                        }),
                        t._v(" "),
                        Number(t.fee.fee)
                          ? i("AvailableAndFeeAmounts", {
                              attrs: {
                                availableBalance: String(t.availableBalance),
                                feeBalance: t.fee.fee,
                                feeWallet: t.feeWallet,
                                isCustomFeeSupported: t.isCustomFee,
                                isRate: t.isRate,
                                sendType: t.sendType,
                                wallet: t.coin,
                                feeLoading: t.feeLoading,
                              },
                              on: {
                                setAllAvailableBalance:
                                  t.setAllAvailableBalance,
                                toggleCustomFee: t.toggleCustomFee,
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        t.isCustomFee && t.isRate
                          ? i("div", { staticClass: "fee-constructor" }, [
                              i(
                                "button",
                                {
                                  staticClass: "button small-gray",
                                  attrs: { type: "button" },
                                  on: { click: t.setDefaultFee },
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(t.$t("button.setDefault")) +
                                      "\n        ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              i(
                                "p",
                                {
                                  staticClass: "text-gray",
                                  style: { width: "100%" },
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(t.$t("label.gas")) +
                                      ":",
                                  ),
                                  i("span", { staticClass: "text-white" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.customGas) +
                                        "\n          ",
                                    ),
                                  ]),
                                  t._v(" "),
                                  i("NumericRange", {
                                    attrs: {
                                      defaultValue: t.coin.getGasLimit(
                                        t.sendType.toLowerCase(),
                                      ),
                                      hideButtons: "",
                                      maximum: String(t.gasRange.limitMax),
                                      minimum: String(t.gasRange.limitMin),
                                    },
                                    on: { change: t.setCustomGas },
                                  }),
                                ],
                                1,
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        "Withdrawal" !== t.sendType
                          ? i(
                              "div",
                              { staticClass: "text m-t-4" },
                              [
                                t.availableValidators.length > 0
                                  ? i(
                                      "div",
                                      { staticClass: "stake-validator" },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(
                                              t.$t("stakingPage.validator"),
                                            ) +
                                            ": ",
                                        ),
                                        i(
                                          "span",
                                          {
                                            staticClass:
                                              "text-white validator-name",
                                            on: {
                                              click: function (s) {
                                                (s.stopPropagation(),
                                                  (t.isChangeValidator = !0));
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(t.stakingValidator.name) +
                                                " \n            ",
                                            ),
                                            "Stake" === t.sendType &&
                                            t.stakingValidator.reward
                                              ? i(
                                                  "span",
                                                  { staticClass: "text-white" },
                                                  [
                                                    t._v(
                                                      "- " +
                                                        t._s(
                                                          t.stakingValidator
                                                            .reward,
                                                        ) +
                                                        "%",
                                                    ),
                                                    i(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ticker additional",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                " +
                                                            t._s(
                                                              t.$t(
                                                                "stakingPage.yearlyYield",
                                                              ),
                                                            ) +
                                                            "\n              ",
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                )
                                              : t._e(),
                                          ],
                                        ),
                                        t._v(" "),
                                        t.isChangeValidator
                                          ? i("Dropdown", {
                                              directives: [
                                                {
                                                  name: "click-outside",
                                                  rawName: "v-click-outside",
                                                  value:
                                                    t.closeValidatorsDropdown,
                                                  expression:
                                                    "closeValidatorsDropdown",
                                                },
                                              ],
                                              attrs: {
                                                elements: t.availableValidators,
                                                showAdditional: "",
                                              },
                                              on: { select: t.selectValidator },
                                            })
                                          : t._e(),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t._v(" "),
                                i(
                                  "transition",
                                  { attrs: { name: "collapse-fade" } },
                                  [
                                    "Stake" === t.sendType &&
                                    t.stakingValidator.reward &&
                                    t.stakingProfit &&
                                    Number(t.inputs.amount) > 0
                                      ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "network-fee flex-block",
                                          },
                                          [
                                            i("p", [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "stakingPage.yearlyEarning",
                                                  ),
                                                ) + ":",
                                              ),
                                            ]),
                                            t._v(" "),
                                            i(
                                              "p",
                                              { staticClass: "text-white" },
                                              [
                                                t._v(
                                                  t._s(t.stakingProfit) +
                                                    " " +
                                                    t._s(t.coin.ticker) +
                                                    " ",
                                                ),
                                              ],
                                            ),
                                            t._v(" "),
                                            i("p", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formatFinance(
                                                      t.getValueFiat({
                                                        value: t.stakingProfit,
                                                        wallet: t.coin,
                                                      }),
                                                    ),
                                                  ) +
                                                  "\n              " +
                                                  t._s(t.fiatRate) +
                                                  "\n            ",
                                              ),
                                            ]),
                                          ],
                                        )
                                      : t._e(),
                                  ],
                                ),
                              ],
                              1,
                            )
                          : t._e(),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "submit" },
                          [
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" !== t.sendType || t.isFeeEnough
                                ? t.isFeeEnough
                                  ? t.isBuffered
                                    ? i("div", { staticClass: "error" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "popups.SendStakeZIL.withdrawalPending",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e()
                                  : i("div", { staticClass: "error" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "error.insufficientFundsToSend",
                                              {
                                                fee: t.formatFinance(
                                                  Number(
                                                    Number(t.fee.fee).toFixed(
                                                      6,
                                                    ),
                                                  ),
                                                ),
                                                feeTicker: t.feeTicker(),
                                                ticker: t.coin.getUserTicker(),
                                              },
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ])
                                : i(
                                    "div",
                                    {
                                      staticClass:
                                        "error flex center justify-center",
                                    },
                                    [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToClaim",
                                                  {
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "submit-wrapper" }, [
                              t.initSend
                                ? i("div", { staticClass: "loader" })
                                : i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      class: { disabled: !t.isFeeEnough },
                                      on: { click: t.showPasswordForm },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.sendText) +
                                          "\n            ",
                                      ),
                                      Number(t.inputs.amount) > 0
                                        ? i("span", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.inputs.amount,
                                                  ),
                                                ) +
                                                " " +
                                                t._s(t.coin.ticker) +
                                                "\n            ",
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
                  ? i(
                      "div",
                      { staticClass: "form-password" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.formatFinance(t.inputs.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".stake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "Unstake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".unstake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("Edit", {
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
                            "update:modelValue": function (s) {
                              t.inputs.password = s;
                            },
                          },
                        }),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button normal hover-white",
                              on: { click: t.backFromPassword },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button",
                              on: { click: t.sendCoins },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n        ",
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
                  ? i("div", { staticClass: "sending" }, [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendTypeVerb) +
                              " " +
                              t._s(t.inputs.amount) +
                              " " +
                              t._s(t.coin.ticker),
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".delegating",
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "loading" }),
                    ])
                  : t._e(),
                t._v(" "),
                t.sending
                  ? t._e()
                  : i("SendCoinResult", {
                      attrs: {
                        amount: t.inputs.amount,
                        coin: t.coin,
                        icon: t.icon,
                        isError: t.isError,
                        isSuccess: t.isSuccess,
                        sendType: t.sendType,
                        txid: t.txid,
                        contactData: {
                          issue: t.$t("title.staking"),
                          tags: ["staking_tag"],
                        },
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
            ),
          ]);
        },
        a = [];
    },
    11618: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5798),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11619),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11619: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.sending },
              on: { close: t.backToWallets },
            },
            [
              i(
                "div",
                { staticClass: "send-coin popup send-stake" },
                [
                  t.isPasswordShow || t.sending || t.isError || t.isSuccess
                    ? t._e()
                    : i(
                        "div",
                        { staticClass: "form" },
                        [
                          i("div", { staticClass: "info" }, [
                            i("div", { staticClass: "icon", class: t.icon }),
                            t._v(" "),
                            i("p", [
                              t._v(
                                t._s(t.sendText) +
                                  " " +
                                  t._s(t.coin.name) +
                                  " (" +
                                  t._s(t.coin.ticker) +
                                  ")",
                              ),
                            ]),
                            t._v(" "),
                            "Stake" === t.sendType
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "coinTips." +
                                            t.coin.ticker.toLowerCase() +
                                            ".calculator",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          i("EditAmount", {
                            staticClass: "last-child",
                            attrs: {
                              balance: t.coin.divisibleBalance,
                              decimals: t.coin.decimal,
                              error: t.inputsError.amount,
                              isFiat: "",
                              isSendAllClick: t.isSendAllClick,
                              isZeroPlaceholder: "",
                              parentTicker: t.coin.deprecatedParent,
                              showBalance: "",
                              wallet: t.coin,
                              modelValue: t.inputs.amount,
                              placeholder: t.$t("input.amount"),
                            },
                            on: {
                              "update:modelValue": t.changeAmount,
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i("AvailableAndFeeAmounts", {
                            attrs: {
                              availableBalance: String(t.availableBalance),
                              feeBalance: t.fee.fee,
                              feeWallet: t.feeWallet,
                              sendType: t.sendType,
                              wallet: t.coin,
                              isSendAll: "",
                              feeLoading: t.feeLoading,
                            },
                            on: {
                              setAllAvailableBalance: t.setAllAvailableBalance,
                            },
                          }),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "submit p-t-40" },
                            [
                              i(
                                "transition",
                                { attrs: { name: "page-fade" } },
                                [
                                  t.isFeeEnough
                                    ? t._e()
                                    : i("div", { staticClass: "error" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "error.insufficientFundsToSend",
                                                {
                                                  fee: t.formatFinance(
                                                    Number(
                                                      Number(t.fee.fee).toFixed(
                                                        6,
                                                      ),
                                                    ),
                                                  ),
                                                  feeTicker: t.fee.ticker,
                                                  ticker:
                                                    t.coin.getUserTicker(),
                                                },
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ]),
                                ],
                              ),
                              t._v(" "),
                              i("div", { staticClass: "submit-wrapper" }, [
                                t.initSend
                                  ? i("div", { staticClass: "loader" })
                                  : i(
                                      "button",
                                      {
                                        staticClass: "button",
                                        on: { click: t.showPasswordForm },
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(t.sendText) +
                                            "\n            ",
                                        ),
                                        Number(t.inputs.amount) > 0
                                          ? i("span", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formatFinance(
                                                      t.inputs.amount,
                                                    ),
                                                  ) +
                                                  "\n              " +
                                                  t._s(t.coin.ticker) +
                                                  "\n            ",
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
                    ? i(
                        "div",
                        { staticClass: "form-password" },
                        [
                          i("div", { staticClass: "info" }, [
                            i("p", [
                              t._v(
                                t._s(t.sendText) +
                                  " " +
                                  t._s(t.formatFinance(t.inputs.amount)) +
                                  " " +
                                  t._s(t.coin.ticker),
                              ),
                            ]),
                            t._v(" "),
                            "Stake" === t.sendType
                              ? i("div", { staticClass: "warning" }, [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$t(
                                          "coinTips." +
                                            t.coin.ticker.toLowerCase() +
                                            ".stake",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          i("Edit", {
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
                              "update:modelValue": function (s) {
                                t.inputs.password = s;
                              },
                            },
                          }),
                          t._v(" "),
                          i("div", { staticClass: "submit" }, [
                            i(
                              "button",
                              {
                                staticClass: "button normal hover-white",
                                on: { click: t.backFromPassword },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.back")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            i(
                              "button",
                              {
                                staticClass: "button",
                                on: { click: t.sendCoins },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.confirm")) +
                                    "\n        ",
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
                    ? i("div", { staticClass: "sending" }, [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendTypeVerb) +
                                " " +
                                t._s(t.inputs.amount) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".delegating",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "loading" }),
                      ])
                    : t._e(),
                  t._v(" "),
                  t.sending
                    ? t._e()
                    : i("SendCoinResult", {
                        attrs: {
                          amount: t.sendAmount,
                          coin: t.coin,
                          icon: t.icon,
                          isError: t.isError,
                          isSuccess: t.isSuccess,
                          sendType: t.sendType,
                          txid: t.txid,
                          contactData: {
                            issue: t.$t("title.staking"),
                            tags: ["staking_tag"],
                          },
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
              ),
            ],
          );
        },
        a = [];
    },
    11620: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5799),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11621),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11621: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("AtomicPopup", { on: { close: t.backToWallets } }, [
            i(
              "div",
              { staticClass: "send-coin popup send-stake" },
              [
                t.isPasswordShow || t.sending || t.isError || t.isSuccess
                  ? t._e()
                  : i(
                      "div",
                      { staticClass: "form" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.coin.name) +
                                " (" +
                                t._s(t.coin.ticker) +
                                ")",
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "staking." +
                                          t.coin.ticker +
                                          ".hints.calculator",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("EditAmount", {
                          staticClass: "last-child",
                          attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: "Withdrawal" !== t.sendType,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: "",
                            parentTicker: t.coin.deprecatedParent,
                            readonly: ["Claim", "Withdrawal"].includes(
                              t.sendType,
                            ),
                            showBalance: "",
                            wallet: t.coin,
                            modelValue: t.inputs.amount,
                            placeholder: t.$t("input.amount"),
                          },
                          on: {
                            "update:modelValue": t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance,
                          },
                        }),
                        t._v(" "),
                        Number(t.fee.fee)
                          ? i("AvailableAndFeeAmounts", {
                              attrs: {
                                availableBalance: String(t.availableBalance),
                                feeBalance: t.fee.fee,
                                feeWallet: t.feeWallet,
                                isRate: t.isRate,
                                sendType: t.sendType,
                                wallet: t.coin,
                                feeLoading: t.feeLoading,
                                isSendAll: !["Claim", "Withdrawal"].includes(
                                  t.sendType,
                                ),
                              },
                              on: {
                                setAllAvailableBalance:
                                  t.setAllAvailableBalance,
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "text" },
                          [
                            t.availableValidators.length > 0
                              ? i(
                                  "div",
                                  { staticClass: "stake-validator" },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.$t("stakingPage.validator")) +
                                        ": ",
                                    ),
                                    i(
                                      "span",
                                      {
                                        staticClass:
                                          "text-white validator-name",
                                        on: {
                                          click: function (s) {
                                            (s.stopPropagation(),
                                              (t.isChangeValidator = !0));
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.stakingValidator.name) + " ",
                                        ),
                                        "Stake" === t.sendType &&
                                        t.stakingValidator.reward
                                          ? i(
                                              "span",
                                              { staticClass: "text-white" },
                                              [
                                                t._v(
                                                  "- " +
                                                    t._s(
                                                      t.stakingValidator.reward,
                                                    ) +
                                                    "%",
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ticker additional",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                yearly yield\n              ",
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            )
                                          : t._e(),
                                      ],
                                    ),
                                    t._v(" "),
                                    t.isChangeValidator
                                      ? i("Dropdown", {
                                          directives: [
                                            {
                                              name: "click-outside",
                                              rawName: "v-click-outside",
                                              value: t.closeValidatorsDropdown,
                                              expression:
                                                "closeValidatorsDropdown",
                                            },
                                          ],
                                          attrs: {
                                            elements: t.availableValidators,
                                            showAdditional: "",
                                          },
                                          on: { select: t.selectValidator },
                                        })
                                      : t._e(),
                                  ],
                                  1,
                                )
                              : t._e(),
                            t._v(" "),
                            i(
                              "transition",
                              { attrs: { name: "collapse-fade" } },
                              [
                                "Stake" === t.sendType &&
                                t.stakingValidator.reward &&
                                t.stakingProfit &&
                                Number(t.inputs.amount) > 0
                                  ? i(
                                      "div",
                                      { staticClass: "network-fee flex-block" },
                                      [
                                        i("p", [
                                          t._v(
                                            t._s(
                                              t.$t("stakingPage.yearlyEarning"),
                                            ) + ":",
                                          ),
                                        ]),
                                        t._v(" "),
                                        i("p", { staticClass: "text-white" }, [
                                          t._v(
                                            t._s(t.stakingProfit) +
                                              " " +
                                              t._s(t.coin.ticker) +
                                              " ",
                                          ),
                                        ]),
                                        t._v(" "),
                                        i("p", [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.formatFinance(
                                                  t.getValueFiat({
                                                    value: t.stakingProfit,
                                                    wallet: t.coin,
                                                  }),
                                                ),
                                              ) +
                                              "\n              " +
                                              t._s(t.fiatRate) +
                                              "\n            ",
                                          ),
                                        ]),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            ),
                          ],
                          1,
                        ),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "submit" },
                          [
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" !== t.sendType || t.isFeeEnough
                                ? t.isFeeEnough
                                  ? t._e()
                                  : i("div", { staticClass: "error" }, [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "popups.notEnoughToPayFee",
                                                  { ticker: t.feeTicker() },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ])
                                : i(
                                    "div",
                                    {
                                      staticClass:
                                        "error flex center justify-center",
                                    },
                                    [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToClaim",
                                                  {
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "submit-wrapper" }, [
                              t.initSend
                                ? i("div", { staticClass: "loader" })
                                : i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      class: { disabled: !t.isFeeEnough },
                                      on: { click: t.showPasswordForm },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.sendText) +
                                          "\n            ",
                                      ),
                                      Number(t.inputs.amount) > 0
                                        ? i("span", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.inputs.amount,
                                                  ),
                                                ) +
                                                " " +
                                                t._s(t.coin.ticker) +
                                                "\n            ",
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
                  ? i(
                      "div",
                      { staticClass: "form-password" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.formatFinance(t.inputs.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".stake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "Unstake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".unstake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("Edit", {
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
                            "update:modelValue": function (s) {
                              t.inputs.password = s;
                            },
                          },
                        }),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button normal hover-white",
                              on: { click: t.backFromPassword },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button",
                              on: { click: t.sendCoins },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n        ",
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
                  ? i("div", { staticClass: "sending" }, [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendTypeVerb) +
                              " " +
                              t._s(t.inputs.amount) +
                              " " +
                              t._s(t.coin.ticker),
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".delegating",
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "loading" }),
                    ])
                  : t._e(),
                t._v(" "),
                t.sending
                  ? t._e()
                  : i("SendCoinResult", {
                      attrs: {
                        amount: t.inputs.amount,
                        coin: t.coin,
                        icon: t.icon,
                        isError: t.isError,
                        isSuccess: t.isSuccess,
                        sendType: t.sendType,
                        txid: t.txid,
                        contactData: {
                          issue: t.$t("title.staking"),
                          tags: ["staking_tag"],
                        },
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
            ),
          ]);
        },
        a = [];
    },
    11622: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5800),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11623),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11623: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("AtomicPopup", { on: { close: t.backToWallets } }, [
            i(
              "div",
              { staticClass: "send-coin popup staking-hbar send-stake" },
              [
                t.isPasswordShow || t.sending || t.isError || t.isSuccess
                  ? t._e()
                  : i(
                      "div",
                      { staticClass: "form" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.coin.name) +
                                " (" +
                                t._s(t.coin.ticker) +
                                ")",
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".calculator",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("EditAmount", {
                          staticClass: "last-child",
                          attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.amountError,
                            isFiat: "",
                            isZeroPlaceholder: "",
                            parentTicker: t.coin.deprecatedParent,
                            readonly: "",
                            showBalance: "",
                            wallet: t.coin,
                            modelValue: t.amount,
                            placeholder: t.$t("input.amount"),
                          },
                          on: { "update:modelValue": t.changeAmount },
                        }),
                        t._v(" "),
                        i(
                          "AvailableAndFeeAmounts",
                          {
                            attrs: {
                              availableBalance: String(t.availableBalance),
                              feeBalance: t.fee.fee,
                              feeWallet: t.feeWallet,
                              sendType: t.sendType,
                              wallet: t.coin,
                              feeLoading: t.feeLoading,
                            },
                          },
                          [
                            i("div", { staticClass: "text" }, [
                              "Stake" === t.sendType
                                ? i(
                                    "div",
                                    { staticClass: "network-fee flex-block" },
                                    [
                                      i("p", [
                                        t._v(
                                          t._s(
                                            t.$t("stakingPage.yearlyEarning"),
                                          ) + ":",
                                        ),
                                      ]),
                                      t._v(" "),
                                      i("p", { staticClass: "text-white" }, [
                                        t._v(
                                          t._s(t.yearlyYield) +
                                            " " +
                                            t._s(t.coin.ticker) +
                                            " ",
                                        ),
                                      ]),
                                      t._v(" "),
                                      t.hasRate(t.coin.id)
                                        ? i("p", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.getValueFiat({
                                                      value: t.yearlyYield,
                                                      wallet: t.coin,
                                                    }),
                                                  ),
                                                ) +
                                                "\n              " +
                                                t._s(t.fiatRate) +
                                                "\n            ",
                                            ),
                                          ])
                                        : t._e(),
                                    ],
                                  )
                                : t._e(),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "text" }, [
                              t.stakingValidator.primary &&
                              t.availableValidators.length > 0 &&
                              "Claim" !== t.sendType &&
                              ("Unstake" !== t.sendType ||
                                "HBAR" !== t.coin.ticker)
                                ? i(
                                    "div",
                                    { staticClass: "stake-validator" },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("stakingPage.validator")) +
                                          ": \n            ",
                                      ),
                                      i(
                                        "span",
                                        {
                                          staticClass:
                                            "text-white validator-name",
                                          on: {
                                            click: function (s) {
                                              (s.stopPropagation(),
                                                (t.isChangeValidator = !0));
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.stakingValidator.primary) +
                                              " \n              ",
                                          ),
                                          t.stakingValidator.additional
                                            ? i(
                                                "span",
                                                { staticClass: "text-white" },
                                                [
                                                  t._v(
                                                    "\n                - " +
                                                      t._s(
                                                        t.stakingValidator
                                                          .additional,
                                                      ) +
                                                      "\n                ",
                                                  ),
                                                  i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "ticker additional",
                                                    },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.$t(
                                                              "stakingPage.yearlyYield",
                                                            ),
                                                          ) +
                                                          " ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              )
                                            : t._e(),
                                        ],
                                      ),
                                      t._v(" "),
                                      t.isChangeValidator
                                        ? i("Dropdown", {
                                            directives: [
                                              {
                                                name: "click-outside",
                                                rawName: "v-click-outside",
                                                value:
                                                  t.closeValidatorsDropdown,
                                                expression:
                                                  "closeValidatorsDropdown",
                                              },
                                            ],
                                            attrs: {
                                              elements: t.availableValidators,
                                              showAdditional: "",
                                            },
                                            on: { select: t.selectValidator },
                                          })
                                        : t._e(),
                                    ],
                                    1,
                                  )
                                : t._e(),
                            ]),
                          ],
                        ),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "submit" },
                          [
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" !== t.sendType || t.isFeeEnough
                                ? t._e()
                                : i(
                                    "div",
                                    {
                                      staticClass:
                                        "error flex center justify-center",
                                    },
                                    [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToClaim",
                                                  {
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                            ]),
                            t._v(" "),
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" === t.sendType || t.isFeeEnough
                                ? t._e()
                                : i("div", { staticClass: "error" }, [
                                    i(
                                      "span",
                                      { staticClass: "new-text-error" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              t.$t(
                                                "error.insufficientFundsToSend",
                                                {
                                                  fee: t.formatFinance(
                                                    Number(
                                                      Number(t.fee.fee).toFixed(
                                                        6,
                                                      ),
                                                    ),
                                                  ),
                                                  feeTicker: t.coin.ticker,
                                                  ticker: t.coin.ticker,
                                                },
                                              ),
                                            ) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                    t._v(" "),
                                    i(
                                      "button",
                                      {
                                        staticClass: "button button-buy",
                                        on: { click: t.buyCoin },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.$t("button.buy")) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ]),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "submit-wrapper m-t-10" }, [
                              i(
                                "button",
                                {
                                  staticClass: "button",
                                  on: { click: t.showPasswordForm },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.sendText) +
                                      "\n            ",
                                  ),
                                  Number(t.amount) > 0
                                    ? i("span", [
                                        t._v(
                                          " " +
                                            t._s(t.formatFinance(t.amount)) +
                                            " " +
                                            t._s(t.coin.ticker) +
                                            " ",
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
                  ? i(
                      "div",
                      { staticClass: "form-password" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.formatFinance(t.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".stake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "Unstake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".unstake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("Edit", {
                          ref: "confirmPassword",
                          attrs: {
                            modelValue: t.password,
                            error: t.passwordError,
                            focus: "",
                            isShowPassword: "",
                            type: t.inputTypePassword,
                            placeholder: t.$t("input.password"),
                          },
                          on: {
                            "enter-pressed": t.sendCoins,
                            "update:modelValue": function (s) {
                              t.password = s;
                            },
                          },
                        }),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button normal hover-white",
                              on: { click: t.backFromPassword },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button",
                              on: { click: t.sendCoins },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n        ",
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
                  ? i("div", { staticClass: "sending" }, [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            t._s(t.sendText) +
                              " " +
                              t._s(t.amount) +
                              " " +
                              t._s(t.coin.ticker),
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".delegating",
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "loading" }),
                    ])
                  : t._e(),
                t._v(" "),
                t.sending
                  ? t._e()
                  : i("SendCoinResult", {
                      attrs: {
                        amount: t.sendAmount,
                        coin: t.coin,
                        icon: t.icon,
                        isError: t.isError,
                        isSuccess: t.isSuccess,
                        sendType: t.sendType,
                        txid: t.txid,
                        contactData: {
                          issue: t.$t("title.staking"),
                          tags: ["staking_tag"],
                        },
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
            ),
          ]);
        },
        a = [];
    },
    11624: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5801),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11625),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11625: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.sending },
              on: { close: t.backToWallets },
            },
            [
              i(
                "div",
                { staticClass: "send-coin popup send-stake" },
                [
                  "Claim" === t.sendType
                    ? [
                        t.isPasswordShow ||
                        t.sending ||
                        t.isError ||
                        t.isSuccess
                          ? t._e()
                          : i(
                              "div",
                              { staticClass: "form" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("div", {
                                    staticClass: "icon",
                                    class: t.icon,
                                  }),
                                  t._v(" "),
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(t.coin.name) +
                                        " (" +
                                        t._s(t.coin.ticker) +
                                        ")",
                                    ),
                                  ]),
                                  t._v(" "),
                                  "Stake" === t.sendType
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "coinTips." +
                                                  t.coin.ticker.toLowerCase() +
                                                  ".calculator",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("EditAmount", {
                                  staticClass: "last-child",
                                  attrs: {
                                    balance: t.coin.divisibleBalance,
                                    decimals: t.coin.decimal,
                                    error: t.inputsError.amount,
                                    isFiat: "",
                                    isSendAllClick: t.isSendAllClick,
                                    isZeroPlaceholder: "",
                                    parentTicker: t.coin.deprecatedParent,
                                    readonly: "",
                                    showBalance: "",
                                    wallet: t.coin,
                                    modelValue: t.inputs.amount,
                                  },
                                  on: {
                                    "update:modelValue": t.changeAmount,
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                i(
                                  "AvailableAndFeeAmounts",
                                  {
                                    attrs: {
                                      availableBalance: String(
                                        t.balanceToStake,
                                      ),
                                      feeBalance: t.fee.fee,
                                      feeWallet: t.feeWallet,
                                      sendType: t.sendType,
                                      wallet: t.coin,
                                    },
                                    on: {
                                      setAllAvailableBalance:
                                        t.setAllAvailableBalance,
                                    },
                                  },
                                  [
                                    i("div", { staticClass: "text" }, [
                                      "Stake" === t.sendType
                                        ? i(
                                            "div",
                                            {
                                              staticClass:
                                                "network-fee flex-block",
                                            },
                                            [
                                              i("p", [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "stakingPage.yearlyYield",
                                                    ),
                                                  ) + ":",
                                                ),
                                              ]),
                                              t._v(" "),
                                              i(
                                                "p",
                                                { staticClass: "text-white" },
                                                [
                                                  t._v(
                                                    t._s(t.yearlyYield) +
                                                      " " +
                                                      t._s(t.coin.ticker) +
                                                      " ",
                                                  ),
                                                ],
                                              ),
                                              t._v(" "),
                                              t.hasRate(t.coin.id)
                                                ? i("p", [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.formatFinance(
                                                            t.getValueFiat({
                                                              value:
                                                                t.yearlyYield,
                                                              wallet: t.coin,
                                                            }),
                                                          ),
                                                        ) +
                                                        "\n                " +
                                                        t._s(t.fiatRate) +
                                                        "\n              ",
                                                    ),
                                                  ])
                                                : t._e(),
                                            ],
                                          )
                                        : t._e(),
                                    ]),
                                    t._v(" "),
                                    i("div", { staticClass: "text" }, [
                                      t.availableValidators.length > 0 &&
                                      "Claim" !== t.sendType
                                        ? i(
                                            "div",
                                            { staticClass: "stake-validator" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "stakingPage.validator",
                                                    ),
                                                  ) +
                                                  ": ",
                                              ),
                                              i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-white validator-name",
                                                  on: {
                                                    click: function (s) {
                                                      (s.stopPropagation(),
                                                        (t.isChangeValidator =
                                                          !0));
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.stakingValidator.name,
                                                      ) +
                                                      " \n                ",
                                                  ),
                                                  t.stakingValidator.reward
                                                    ? i(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-white",
                                                        },
                                                        [
                                                          t._v(
                                                            "- " +
                                                              t._s(
                                                                t
                                                                  .stakingValidator
                                                                  .reward,
                                                              ) +
                                                              "%",
                                                          ),
                                                          i(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "ticker additional",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                    " +
                                                                  t._s(
                                                                    t.$t(
                                                                      "stakingPage.yearlyYield",
                                                                    ),
                                                                  ) +
                                                                  "\n                  ",
                                                              ),
                                                            ],
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                ],
                                              ),
                                              t._v(" "),
                                              t.isChangeValidator
                                                ? i("Dropdown", {
                                                    directives: [
                                                      {
                                                        name: "click-outside",
                                                        rawName:
                                                          "v-click-outside",
                                                        value:
                                                          t.closeValidatorsDropdown,
                                                        expression:
                                                          "closeValidatorsDropdown",
                                                      },
                                                    ],
                                                    attrs: {
                                                      elements:
                                                        t.availableValidators,
                                                      showAdditional: "",
                                                    },
                                                    on: {
                                                      select: t.selectValidator,
                                                    },
                                                  })
                                                : t._e(),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                    ]),
                                  ],
                                ),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "div",
                                    { staticClass: "submit-wrapper m-t-10" },
                                    [
                                      i(
                                        "button",
                                        {
                                          staticClass: "button",
                                          on: { click: t.showPasswordForm },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.sendText) +
                                              "\n              ",
                                          ),
                                          Number(t.inputs.amount) > 0
                                            ? i("span", [
                                                t._v(
                                                  "\n                " +
                                                    t._s(
                                                      t.formatFinance(
                                                        t.inputs.amount,
                                                      ),
                                                    ) +
                                                    " " +
                                                    t._s(t.coin.ticker) +
                                                    "\n              ",
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                              1,
                            ),
                        t._v(" "),
                        t.isPasswordShow
                          ? i(
                              "div",
                              { staticClass: "form-password" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(t.formatFinance(t.inputs.amount)) +
                                        " " +
                                        t._s(t.coin.ticker),
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                i("Edit", {
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
                                    "update:modelValue": function (s) {
                                      t.inputs.password = s;
                                    },
                                  },
                                }),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "button",
                                    {
                                      staticClass: "button normal hover-white",
                                      on: { click: t.backFromPassword },
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
                                  i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      on: { click: t.sendCoins },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.confirm")) +
                                          "\n          ",
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
                          ? i("div", { staticClass: "sending" }, [
                              i("div", { staticClass: "info" }, [
                                i("div", {
                                  staticClass: "icon",
                                  class: t.icon,
                                }),
                                t._v(" "),
                                i("p", [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        t.$t(
                                          "popups.claimingTickerWithAmount",
                                          {
                                            amount: t.inputs.amount,
                                            ticker: t.coin.ticker,
                                          },
                                        ),
                                      ) +
                                      "\n          ",
                                  ),
                                ]),
                                t._v(" "),
                                "Stake" === t.sendType
                                  ? i("div", { staticClass: "warning" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "coinTips." +
                                                t.coin.ticker.toLowerCase() +
                                                ".delegating",
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                              ]),
                              t._v(" "),
                              i("div", { staticClass: "loading" }),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.sending
                          ? t._e()
                          : i("SendCoinResult", {
                              attrs: {
                                amount: String(t.inputs.amount),
                                coin: t.coin,
                                errorMessage: t.errorMessage,
                                icon: t.icon,
                                isError: t.isError,
                                isSuccess: t.isSuccess,
                                sendType: t.sendType,
                                txid: t.txid,
                                contactData: {
                                  issue: t.$t("title.staking"),
                                  tags: ["staking_tag"],
                                },
                                mailTitle: t.$t("error.sendingError"),
                              },
                              on: {
                                backToForm: t.backToForm,
                                backToWallets: t.backToWallets,
                                tryAgain: t.tryAgain,
                              },
                            }),
                      ]
                    : [
                        t.isPasswordShow ||
                        t.sending ||
                        t.isError ||
                        t.isSuccess
                          ? t._e()
                          : i(
                              "div",
                              { staticClass: "form" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("div", {
                                    staticClass: "icon",
                                    class: t.icon,
                                  }),
                                  t._v(" "),
                                  i("div", [
                                    i(
                                      "span",
                                      { staticClass: "new-text-extra-large" },
                                      [
                                        t._v(
                                          " " +
                                            t._s(t.sendText) +
                                            " " +
                                            t._s(t.coin.name) +
                                            " ",
                                        ),
                                      ],
                                    ),
                                    t._v(" "),
                                    i(
                                      "span",
                                      {
                                        staticClass:
                                          "new-text-extra-large new-text-gray",
                                      },
                                      [t._v(" (" + t._s(t.coin.ticker) + ") ")],
                                    ),
                                  ]),
                                  t._v(" "),
                                  "Stake" === t.sendType
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "coinTips." +
                                                  t.coin.ticker.toLowerCase() +
                                                  ".calculator",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("EditAmount", {
                                  staticClass: "last-child",
                                  attrs: {
                                    balance: t.balanceToStake,
                                    decimals: t.coin.decimal,
                                    error: t.inputsError.amount,
                                    isBuyCoin: t.isBuyCoin,
                                    isFiat: "",
                                    isSendAllClick: t.isSendAllClick,
                                    isZeroPlaceholder: "",
                                    parentTicker: t.coin.deprecatedParent,
                                    readonly: !["Stake", "Unstake"].includes(
                                      t.sendType,
                                    ),
                                    showBalance: "",
                                    wallet: t.coin,
                                    modelValue: String(t.inputs.amount),
                                    placeholder: t.$t("input.amount"),
                                  },
                                  on: {
                                    "update:modelValue": t.changeAmount,
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                i("AvailableAndFeeAmounts", {
                                  attrs: {
                                    availableBalance: String(
                                      t.availableBalance,
                                    ),
                                    feeBalance: t.fee.fee,
                                    feeWallet: t.feeWallet,
                                    isSendAll: ["Stake", "Unstake"].includes(
                                      t.sendType,
                                    ),
                                    sendType: t.sendType,
                                    wallet: t.coin,
                                    feeLoading: t.feeLoading,
                                  },
                                  on: {
                                    setAllAvailableBalance:
                                      t.setAllAvailableBalance,
                                  },
                                }),
                                t._v(" "),
                                "Unstake" !== t.sendType
                                  ? i(
                                      "div",
                                      { staticClass: "text" },
                                      [
                                        t.availableValidators.length > 0
                                          ? i(
                                              "div",
                                              {
                                                staticClass: "stake-validator",
                                              },
                                              [
                                                t._v(
                                                  "\n            " +
                                                    t._s(
                                                      t.$t(
                                                        "stakingPage.validator",
                                                      ),
                                                    ) +
                                                    ": ",
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-white validator-name",
                                                    on: {
                                                      click: function (s) {
                                                        (s.stopPropagation(),
                                                          (t.isChangeValidator =
                                                            !0));
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.stakingValidator.name,
                                                      ) + " ",
                                                    ),
                                                    "Stake" === t.sendType &&
                                                    t.stakingValidator.reward
                                                      ? i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-white",
                                                          },
                                                          [
                                                            t._v(
                                                              "- " +
                                                                t._s(
                                                                  t
                                                                    .stakingValidator
                                                                    .reward,
                                                                ) +
                                                                "%",
                                                            ),
                                                            i(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "ticker additional",
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n                  " +
                                                                    t._s(
                                                                      t.$t(
                                                                        "stakingPage.yearlyYield",
                                                                      ),
                                                                    ) +
                                                                    "\n                ",
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        )
                                                      : t._e(),
                                                  ],
                                                ),
                                                t._v(" "),
                                                t.isChangeValidator
                                                  ? i("Dropdown", {
                                                      directives: [
                                                        {
                                                          name: "click-outside",
                                                          rawName:
                                                            "v-click-outside",
                                                          value:
                                                            t.closeValidatorsDropdown,
                                                          expression:
                                                            "closeValidatorsDropdown",
                                                        },
                                                      ],
                                                      attrs: {
                                                        elements:
                                                          t.availableValidators,
                                                        showAdditional: "",
                                                      },
                                                      on: {
                                                        select:
                                                          t.selectValidator,
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1,
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        i(
                                          "transition",
                                          { attrs: { name: "collapse-fade" } },
                                          [
                                            "Stake" === t.sendType &&
                                            t.stakingValidator.reward &&
                                            t.stakingProfit &&
                                            Number(t.inputs.amount) > 0
                                              ? i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "network-fee flex-block",
                                                  },
                                                  [
                                                    i("p", [
                                                      t._v(
                                                        t._s(
                                                          t.$t(
                                                            "stakingPage.yearlyEarning",
                                                          ),
                                                        ) + ":",
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    i(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "text-white",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.stakingProfit,
                                                          ) +
                                                            " " +
                                                            t._s(
                                                              t.coin.ticker,
                                                            ) +
                                                            " ",
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(" "),
                                                    i("p", [
                                                      t._v(
                                                        "\n                " +
                                                          t._s(
                                                            t.formatFinance(
                                                              t.getValueFiat({
                                                                value:
                                                                  t.stakingProfit,
                                                                wallet: t.coin,
                                                              }),
                                                            ),
                                                          ) +
                                                          "\n                " +
                                                          t._s(t.fiatRate) +
                                                          "\n              ",
                                                      ),
                                                    ]),
                                                  ],
                                                )
                                              : t._e(),
                                          ],
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i("div", { staticClass: "submit-wrapper" }, [
                                    t.initSend
                                      ? i("div", { staticClass: "loader" })
                                      : i(
                                          "button",
                                          {
                                            staticClass: "button",
                                            on: { click: t.showPasswordForm },
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(t.sendText) +
                                                "\n              ",
                                            ),
                                            Number(t.inputs.amount) > 0
                                              ? i("span", [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.formatFinance(
                                                          t.inputs.amount,
                                                        ),
                                                      ) +
                                                      " " +
                                                      t._s(t.coin.ticker) +
                                                      "\n              ",
                                                  ),
                                                ])
                                              : t._e(),
                                          ],
                                        ),
                                  ]),
                                ]),
                              ],
                              1,
                            ),
                        t._v(" "),
                        t.isPasswordShow
                          ? i(
                              "div",
                              { staticClass: "form-password" },
                              [
                                i("div", { staticClass: "info" }, [
                                  i("p", [
                                    t._v(
                                      t._s(t.sendText) +
                                        " " +
                                        t._s(t.formatFinance(t.inputs.amount)) +
                                        " " +
                                        t._s(t.coin.ticker),
                                    ),
                                  ]),
                                  t._v(" "),
                                  t.textWarning
                                    ? i("div", { staticClass: "warning" }, [
                                        t._v(
                                          "\n            " +
                                            t._s(t.textWarning) +
                                            "\n          ",
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                i("Edit", {
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
                                    "update:modelValue": function (s) {
                                      t.inputs.password = s;
                                    },
                                  },
                                }),
                                t._v(" "),
                                i("div", { staticClass: "submit" }, [
                                  i(
                                    "button",
                                    {
                                      staticClass: "button normal hover-white",
                                      on: { click: t.backFromPassword },
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
                                  i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      on: { click: t.sendCoins },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("button.confirm")) +
                                          "\n          ",
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
                          ? i("div", { staticClass: "sending" }, [
                              i("div", { staticClass: "info" }, [
                                i("div", {
                                  staticClass: "icon",
                                  class: t.icon,
                                }),
                                t._v(" "),
                                i("p", [
                                  t._v(
                                    t._s(t.sendText) +
                                      " " +
                                      t._s(t.inputs.amount) +
                                      " " +
                                      t._s(t.coin.ticker),
                                  ),
                                ]),
                                t._v(" "),
                                "Stake" === t.sendType
                                  ? i("div", { staticClass: "warning" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "coinTips." +
                                                t.coin.ticker.toLowerCase() +
                                                ".delegating",
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                              ]),
                              t._v(" "),
                              i("div", { staticClass: "loading" }),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.sending
                          ? t._e()
                          : i("SendCoinResult", {
                              attrs: {
                                amount: String(t.inputs.amount),
                                coin: t.coin,
                                icon: t.icon,
                                isError: t.isError,
                                isSuccess: t.isSuccess,
                                sendType: t.sendType,
                                txid: t.txid,
                                contactData: {
                                  issue: t.$t("title.staking"),
                                  tags: ["staking_tag"],
                                },
                                mailTitle: t.$t("error.sendingError"),
                              },
                              on: {
                                backToForm: t.backToForm,
                                backToWallets: t.backToWallets,
                                tryAgain: t.tryAgain,
                              },
                            }),
                      ],
                ],
                2,
              ),
            ],
          );
        },
        a = [];
    },
    11626: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(5802),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(11627),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    11627: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i("AtomicPopup", { on: { close: t.backToWallets } }, [
            i(
              "div",
              { staticClass: "send-coin popup send-stake" },
              [
                t.isPasswordShow || t.sending || t.isError || t.isSuccess
                  ? t._e()
                  : i(
                      "div",
                      { staticClass: "form" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("div", { staticClass: "icon", class: t.icon }),
                          t._v(" "),
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.coin.name) +
                                " (" +
                                t._s(t.coin.ticker) +
                                ")",
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "staking." +
                                          t.coin.ticker +
                                          ".hints.calculator",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("EditAmount", {
                          staticClass: "last-child",
                          attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: "Withdrawal" !== t.sendType,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: "",
                            parentTicker: t.coin.parent,
                            readonly: [
                              "Claim",
                              "Withdrawal",
                              "Prepare",
                            ].includes(t.sendType),
                            showBalance: "",
                            wallet: t.coin,
                            modelValue: t.inputs.amount,
                            buyCoinSendWallet: t.$wallets.getWallet("eth"),
                            placeholder: t.$t("input.amount"),
                          },
                          on: {
                            "update:modelValue": t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance,
                          },
                        }),
                        t._v(" "),
                        Number(t.fee.fee)
                          ? i("AvailableAndFeeAmounts", {
                              attrs: {
                                availableBalance: String(t.availableBalance),
                                feeBalance: t.fee.fee,
                                feeWallet: t.feeWallet,
                                isRate: t.isRate,
                                sendType: t.sendType,
                                wallet: t.coin,
                                feeLoading: t.feeLoading,
                                isSendAll: ![
                                  "Claim",
                                  "Withdrawal",
                                  "Prepare",
                                ].includes(t.sendType),
                              },
                              on: {
                                setAllAvailableBalance:
                                  t.setAllAvailableBalance,
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        "Prepare" !== t.sendType
                          ? i(
                              "div",
                              { staticClass: "text" },
                              [
                                t.availableValidators.length > 0
                                  ? i(
                                      "div",
                                      { staticClass: "stake-validator" },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(
                                              t.$t("stakingPage.validator"),
                                            ) +
                                            ": ",
                                        ),
                                        i(
                                          "span",
                                          {
                                            staticClass:
                                              "text-white validator-name",
                                            on: {
                                              click: function (s) {
                                                (s.stopPropagation(),
                                                  (t.isChangeValidator = !0));
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(t.stakingValidator.name) +
                                                " \n            ",
                                            ),
                                            "Stake" === t.sendType &&
                                            t.stakingValidator.reward
                                              ? i(
                                                  "span",
                                                  { staticClass: "text-white" },
                                                  [
                                                    t._v(
                                                      "- " +
                                                        t._s(
                                                          t.stakingValidator
                                                            .reward,
                                                        ) +
                                                        "%",
                                                    ),
                                                    i(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "ticker additional",
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                " +
                                                            t._s(
                                                              t.$t(
                                                                "stakingPage.yearlyYield",
                                                              ),
                                                            ) +
                                                            "\n              ",
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                )
                                              : t._e(),
                                          ],
                                        ),
                                        t._v(" "),
                                        t.isChangeValidator
                                          ? i("Dropdown", {
                                              directives: [
                                                {
                                                  name: "click-outside",
                                                  rawName: "v-click-outside",
                                                  value:
                                                    t.closeValidatorsDropdown,
                                                  expression:
                                                    "closeValidatorsDropdown",
                                                },
                                              ],
                                              attrs: {
                                                elements: t.availableValidators,
                                                showAdditional: "",
                                              },
                                              on: { select: t.selectValidator },
                                            })
                                          : t._e(),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t._v(" "),
                                i(
                                  "transition",
                                  { attrs: { name: "collapse-fade" } },
                                  [
                                    "Stake" === t.sendType &&
                                    t.stakingValidator.reward &&
                                    t.stakingProfit &&
                                    Number(t.inputs.amount) > 0
                                      ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "network-fee flex-block",
                                          },
                                          [
                                            i("p", [
                                              t._v(
                                                t._s(
                                                  t.$t(
                                                    "stakingPage.yearlyEarning",
                                                  ),
                                                ) + ":",
                                              ),
                                            ]),
                                            t._v(" "),
                                            i(
                                              "p",
                                              { staticClass: "text-white" },
                                              [
                                                t._v(
                                                  t._s(t.stakingProfit) +
                                                    " " +
                                                    t._s(t.coin.ticker) +
                                                    " ",
                                                ),
                                              ],
                                            ),
                                            t._v(" "),
                                            i("p", [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.formatFinance(
                                                      t.getValueFiat({
                                                        value: t.stakingProfit,
                                                        wallet: t.coin,
                                                      }),
                                                    ),
                                                  ) +
                                                  "\n              " +
                                                  t._s(t.fiatRate) +
                                                  "\n            ",
                                              ),
                                            ]),
                                          ],
                                        )
                                      : t._e(),
                                  ],
                                ),
                              ],
                              1,
                            )
                          : t._e(),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "submit" },
                          [
                            i("transition", { attrs: { name: "page-fade" } }, [
                              "Claim" !== t.sendType || t.isFeeEnough
                                ? t.isFeeEnough
                                  ? t._e()
                                  : i("div", { staticClass: "error" }, [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "popups.notEnoughToPayFee",
                                                  { ticker: t.feeTicker() },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: {
                                            click: function (s) {
                                              return t.buyCoin("ETH");
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ])
                                : i(
                                    "div",
                                    {
                                      staticClass:
                                        "error flex center justify-center",
                                    },
                                    [
                                      i(
                                        "span",
                                        { staticClass: "new-text-error" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "error.insufficientFundsToClaim",
                                                  {
                                                    ticker:
                                                      t.coin.getUserTicker(),
                                                  },
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "button button-buy",
                                          on: { click: t.buyCoin },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("button.buy")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "submit-wrapper" }, [
                              t.initSend
                                ? i("div", { staticClass: "loader" })
                                : i(
                                    "button",
                                    {
                                      staticClass: "button",
                                      class: { disabled: !t.isFeeEnough },
                                      on: { click: t.showPasswordForm },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.sendText) +
                                          "\n            ",
                                      ),
                                      Number(t.inputs.amount) > 0
                                        ? i("span", [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.formatFinance(
                                                    t.inputs.amount,
                                                  ),
                                                ) +
                                                " " +
                                                t._s(t.coin.ticker) +
                                                "\n            ",
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
                  ? i(
                      "div",
                      { staticClass: "form-password" },
                      [
                        i("div", { staticClass: "info" }, [
                          i("p", [
                            t._v(
                              t._s(t.sendText) +
                                " " +
                                t._s(t.formatFinance(t.inputs.amount)) +
                                " " +
                                t._s(t.coin.ticker),
                            ),
                          ]),
                          t._v(" "),
                          "Stake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".stake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                          t._v(" "),
                          "Unstake" === t.sendType
                            ? i("div", { staticClass: "warning" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "coinTips." +
                                          t.coin.ticker.toLowerCase() +
                                          ".unstake",
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        i("Edit", {
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
                            "update:modelValue": function (s) {
                              t.inputs.password = s;
                            },
                          },
                        }),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button normal hover-white",
                              on: { click: t.backFromPassword },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.back")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button",
                              on: { click: t.sendCoins },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n        ",
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
                  ? i("div", { staticClass: "sending" }, [
                      i("div", { staticClass: "info" }, [
                        i("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        i("p", [
                          t._v(
                            "\n          " +
                              t._s(t.sendTypeVerb) +
                              " " +
                              t._s(
                                "Prepare" !== t.sendType ? t.inputs.amount : "",
                              ) +
                              " " +
                              t._s(t.coin.ticker) +
                              "\n        ",
                          ),
                        ]),
                        t._v(" "),
                        "Stake" === t.sendType
                          ? i("div", { staticClass: "warning" }, [
                              t._v(
                                "\n          " +
                                  t._s(
                                    t.$t(
                                      "coinTips." +
                                        t.coin.ticker.toLowerCase() +
                                        ".delegating",
                                    ),
                                  ) +
                                  "\n        ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "loading" }),
                    ])
                  : t._e(),
                t._v(" "),
                t.sending
                  ? t._e()
                  : i("SendCoinResult", {
                      attrs: {
                        amount: t.inputs.amount,
                        coin: t.coin,
                        icon: t.icon,
                        isError: t.isError,
                        isSuccess: t.isSuccess,
                        sendType: t.sendType,
                        txid: t.txid,
                        contactData: {
                          issue: t.$t("title.staking"),
                          tags: ["staking_tag"],
                        },
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
            ),
          ]);
        },
        a = [];
    },
    2922: function (t, s, i) {
      "use strict";
      i.r(s);
      var e = i(2942),
        a = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(s, t, function () {
              return e[t];
            });
          })(n);
      var r = i(3239),
        o = i(5),
        l = !1,
        d = null,
        c = null,
        u = null,
        h = Object(o["a"])(a.a, r["a"], r["b"], l, d, c, u);
      s["default"] = h.exports;
    },
    2942: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(802)),
        n = e(i(2973));
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
      s.default = {
        name: "SendCoinResult",
        components: { CoinIcon: a.default, RateStars: n.default },
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
            const s = "coinTips." + this.coin.ticker.toLowerCase();
            return (
              "Stake" === this.sendType && (t = s + ".successScreen"),
              "Unstake" === this.sendType &&
                (t = s + ".successScreenUnstaking"),
              t && this.$t(t) != t ? this.$t(t) : ""
            );
          },
          errorHeadline() {
            let { sendType: t } = this,
              s = this.coin.ticker;
            return (
              "Withdrawal" === t
                ? (t = "Withdraw")
                : "ActivateAutoclaim" === t && ((t = "Activate"), (s = "")),
              this.$t("sendCoin.errorHeadline", {
                type: this.$t("sendType." + t),
                additionalMessage: s,
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
              s = this.coin.ticker;
            if ("Stake" === this.sendType && ["NEO", "ONG", "KMD"].includes(s))
              return t(`${this.amount} ${"NEO" === s ? "GAS" : s}`);
            if ("Claim" === this.sendType && ["ADA", "TRX"].includes(s))
              return t(`${this.amount} ${s}`);
            if ("Claim" === this.sendType && ["XRP"].includes(s))
              return t(this.amount + " Spark");
            let i = this.$t("sendCoin.successfulMessage", {
              amount: this.amount,
              ticker: s,
              resultMessage: this.resultMessage,
            });
            return (
              "DOGE" === s &&
                (i += ", " + this.$t("sendCoin.DOGEsuccessfulMessagePostfix")),
              i
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
            var t, s, i;
            const e =
                (null === (t = this.contactData) || void 0 === t
                  ? void 0
                  : t.issue) || this.$t("supportPopup.transactionIssue"),
              a =
                "ClaimADA" === this.sendType
                  ? this.coin.address
                  : this.$getAddressWallet(this.coin.deprecatedParent),
              n = `\n-----------------------\n${this.$t("supportPopup.userTickerAddress", { ticker: this.coin.ticker })}\n${a}`,
              o = {
                isNotText: !0,
                additionalText: `${this.$t("supportPopup.unsuccessSending")}${n}`,
                subject: e,
              };
            ((null === (s = this.contactData) ||
            void 0 === s ||
            null === (i = s.tags) ||
            void 0 === i
              ? void 0
              : i.length) > 0 && (o.tags = this.contactData.tags),
              r[this.sendType] &&
                (o.additionalText = `${this.$t("sendProcess." + this.sendType)} ${this.$t("sendProcess.unsuccess")}${n}`),
              ["Activate", "ActivateAutoclaim"].includes(this.sendType) &&
                (o.additionalText = `${this.$t("supportPopup.unsuccessActivation")}${n}`),
              this.$bus.$emit("openSupportPopup", o));
          },
        },
      };
    },
    3239: function (t, s, i) {
      "use strict";
      (i.d(s, "a", function () {
        return e;
      }),
        i.d(s, "b", function () {
          return a;
        }));
      var e = function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
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
                      "DOGE" !== t.coin.ticker
                        ? e("CoinIcon", { attrs: { wallet: t.coin } })
                        : e("img", {
                            staticClass: "doge",
                            class: t.icon,
                            attrs: { src: i(3240) },
                          }),
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
                            click: function (s) {
                              return (
                                s.stopPropagation(),
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
                          staticClass: "text-link-underline",
                          on: {
                            click: function (s) {
                              return (
                                s.stopPropagation(),
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
                                click: function (s) {
                                  (s.stopPropagation(),
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
                        [e("RateStars")],
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
                              e("CoinIcon", { attrs: { wallet: t.coin } }),
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
                            e("CoinIcon", { attrs: { wallet: t.coin } }),
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
                                t._l(t.hints, function (s, i) {
                                  return e("li", { key: i }, [
                                    t._v(
                                      "\n          - " + t._s(s) + "\n        ",
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
                            click: function (s) {
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
                      ].every(function (s) {
                        return t.sendType !== s;
                      }) &&
                        "XRP" !== t.coin.ticker) ||
                      "Send" === t.sendType
                        ? e(
                            "BaseButton",
                            {
                              attrs: { type: "primary-desktop" },
                              on: {
                                click: function (s) {
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
                          click: function (s) {
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
        a = [];
    },
    5784: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = i(60),
        n = e(i(232)),
        r = i(68),
        o = i(4),
        l = i(375),
        d = i(804),
        c = e(i(3362)),
        u = e(i(2969)),
        h = e(i(11596)),
        p = e(i(2922)),
        v = e(i(5754)),
        m = e(i(3074)),
        g = e(i(798)),
        k = e(i(820));
      const w = 9,
        f = 100,
        _ = 4,
        b = 2,
        y = {
          primary: "",
          additional: "",
          validatorName: "",
          validatorAddress: "",
          validatorReward: 0,
        };
      s.default = {
        name: "SendStake",
        components: {
          Dropdown: c.default,
          EditAmount: u.default,
          SendCoinResult: p.default,
          AvailableAndFeeAmounts: m.default,
          PasswordChecker: v.default,
          AtomicSending: h.default,
        },
        mixins: [l.SendStakeMixin],
        props: {
          coin: { type: Object, default: () => ({}) },
          sendType: { type: String, default: "Stake" },
        },
        data() {
          var t, s, i, e, a, n;
          const r =
            "SOL" === this.coin.ticker
              ? (null === (t = this.coin) ||
                void 0 === t ||
                null === (s = t.balances) ||
                void 0 === s
                  ? void 0
                  : s.availableForStake) || "0"
              : null !==
                    (i =
                      null === (e = (a = this.coin).getAvailableBalance) ||
                      void 0 === e ||
                      null === (n = e.call(a)) ||
                      void 0 === n
                        ? void 0
                        : n.toCurrency()) && void 0 !== i
                ? i
                : "0";
          return {
            inputAmount: r,
            inputAmountError: "",
            fee: { ticker: "", fee: "" },
            isFeeEnough: !0,
            isInitSend: !1,
            isSending: !1,
            isPasswordShow: !1,
            isError: !1,
            isSuccess: !1,
            isSendAllClick: !1,
            isBuyCoin: !1,
            feeLoading: !1,
            availableBalance: r,
            resultAmount: "0",
            txid: null,
            isCurrentValidators: !1,
            isRedelegateValidators: !1,
            selectedStakingValidator: "",
            selectedRedelegateValidator: "",
            currentValidators: [],
            availableValidators: [],
            initValidator: !0,
          };
        },
        computed: {
          ...(0, a.mapGetters)(["stakingSettings"]),
          passwordTitle() {
            let t = this.sendType;
            return (
              "Withdrawal" === t && (t = "Withdraw"),
              `${this.sendText} ${this.inputAmount} ${this.coin.ticker}`
            );
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          isDisableAvailable() {
            return ["Claim", "Redelegate"].includes(this.sendType);
          },
          isReadonly() {
            return "SOL" === this.coin.ticker
              ? ["Unstake", "Withdrawal"].includes(this.sendType)
              : ["Claim", "Redelegate", "Withdrawal"].includes(this.sendType);
          },
          warningText() {
            const t = this.$t(
              `coinTips.${this.coin.id.toLowerCase()}.${this.sendType.toLowerCase()}`,
            );
            return t &&
              t !=
                `coinTips.${this.coin.id.toLowerCase()}.${this.sendType.toLowerCase()}`
              ? t
              : "";
          },
          redelegateValidators() {
            return this.currentValidators.filter((t) => {
              let { validatorAddress: s } = t;
              return s !== this.stakingValidator.validatorAddress;
            });
          },
          stakingValidator() {
            var t;
            const s = this.selectedStakingValidator,
              i = this.availableValidators.find((t) => {
                let { primary: i, validatorAddress: e } = t;
                return i === s || e === s;
              });
            return !i &&
              ["LUNA", "KAVA", "FET", "INJ", "CRO"].some(
                (t) => t === this.coin.ticker,
              )
              ? (0, o.randomElementFromArray)(this.availableValidators) || y
              : i ||
                  (null === (t = this.availableValidators) || void 0 === t
                    ? void 0
                    : t[0]) ||
                  y;
          },
          stakingRedelegateValidator() {
            var t;
            const s = this.redelegateValidators.find(
              (t) => t.primary === this.selectedRedelegateValidator,
            );
            return (
              s ||
              (null === (t = this.redelegateValidators) || void 0 === t
                ? void 0
                : t[0]) ||
              y
            );
          },
          stakingProfit() {
            const t = new n.default(
              this.stakingValidator.validatorReward || 0,
            ).dividedBy(f);
            return t.multipliedBy(this.inputAmount || "0") || 0;
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          showClaimError() {
            return (
              "SOL" === this.coin.ticker &&
              "Claim" === this.sendType &&
              !this.isFeeEnough
            );
          },
          showSendError() {
            return !this.isFeeEnough && !this.showClaimError.value;
          },
          formattedFee() {
            return this.formatFinance(Number(Number(this.fee.fee).toFixed(6)));
          },
          gasLimitByTypeStake() {
            return "Unstake" === this.sendType
              ? this.coin.unstakingGasLimit
              : "Claim" === this.sendType
                ? this.coin.claimRewardsGasLimit
                : "Withdrawal" === this.sendType
                  ? this.coin.withdrawGasLimit
                  : this.coin.stakingGasLimit;
          },
        },
        watch: {
          async inputAmount() {
            this.isSuccess ||
              ("LUNA" === this.coin.parent && (await this.getFee()),
              this.validateAmount());
          },
        },
        async created() {
          (await this.setData(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: d.getValueFiat,
          formatFinance: g.default,
          async setCurrentValidators() {
            var t;
            if (this.initValidator) {
              try {
                var s, i;
                if ("SOL" !== this.coin.ticker)
                  await (null ===
                    (s = (i = this.coin).getPredefinedValidators) ||
                  void 0 === s
                    ? void 0
                    : s.call(i));
              } catch (r) {
                console.log(r);
              }
              this.initValidator = !1;
            }
            let e = [];
            var a;
            "SOL" === this.coin.ticker
              ? (e =
                  this.$staking.getStakingInterface(this.coin.ticker)
                    .validators || [])
              : (e =
                  null === (a = this.coin) || void 0 === a
                    ? void 0
                    : a.predefinedValidators);
            const n = w > this.coin.decimal ? w : this.coin.decimal;
            this.currentValidators =
              (null === (t = e) || void 0 === t
                ? void 0
                : t
                    .map((t) => ({
                      address: t,
                      primary: t.name,
                      additional: t.reward + "%",
                      validatorName: t.name,
                      validatorAddress: t.address,
                      validatorReward: t.reward,
                      staked: Number(t.staked).toFixed(n),
                      validator: t.validator,
                      isDeactivated: t.isDeactivated,
                      isAvailableForWithdraw: t.isAvailableForWithdraw,
                    }))
                    .filter(Boolean)) || [];
          },
          setStakingValidator() {
            if ("SOL" === this.coin.ticker) {
              let t = null;
              const s = this.currentValidators.map((t) => {
                  let { validatorAddress: s } = t;
                  return s;
                }),
                i = this.availableValidators.filter((t) => {
                  let { validator: i = null } = t;
                  return s.includes(i);
                });
              if (
                ("Unstake" === this.sendType &&
                this.availableValidators.length > 0
                  ? (t = i.find((t) => {
                      let { isDeactivated: s } = t;
                      return !s;
                    }))
                  : "Withdrawal" === this.sendType &&
                    this.availableValidators.length > 0 &&
                    (t = i.find((t) => {
                      let { isAvailableForWithdraw: s } = t;
                      return s;
                    })),
                t)
              )
                this.selectedStakingValidator = t.validatorAddress;
              else {
                t =
                  this.stakingSettings.find((t) => {
                    let { ticker: s } = t;
                    return this.coin.ticker === s;
                  }).defaultValidator || "";
                const s = ["Unstake", "Withdrawal"].includes(this.sendType)
                    ? t
                    : localStorage.getItem(
                        `selected::${this.coin.ticker}::validator`,
                      ),
                  i = this.availableValidators.find((t) => {
                    let { validatorAddress: i, primary: e } = t;
                    return i === s || e === s;
                  });
                this.selectedStakingValidator =
                  (null === i || void 0 === i ? void 0 : i.validatorAddress) ||
                  this.availableValidators[0].validatorAddress;
              }
              return;
            }
            const t =
                this.stakingSettings.find((t) => {
                  let { ticker: s } = t;
                  return this.coin.ticker === s;
                }).defaultValidator || "",
              s =
                localStorage.getItem(
                  `selected::${this.coin.ticker}::validator`,
                ) || t;
            var i, e, a, n, r, o;
            ["Unstake", "Redelegate"].includes(this.sendType)
              ? (this.selectedStakingValidator =
                  (null === (i = this.availableValidators) ||
                  void 0 === i ||
                  null === (e = i[0]) ||
                  void 0 === e
                    ? void 0
                    : e.primary) || "")
              : (this.selectedStakingValidator =
                  (null === (a = this.currentValidators) ||
                  void 0 === a ||
                  null ===
                    (n = a.find((t) => {
                      let { validatorAddress: i, primary: e } = t;
                      return e === s || i === s;
                    })) ||
                  void 0 === n
                    ? void 0
                    : n.primary) ||
                  (null === (r = this.currentValidators) ||
                  void 0 === r ||
                  null === (o = r[0]) ||
                  void 0 === o
                    ? void 0
                    : o.primary) ||
                  "");
          },
          setAvailableBalance() {
            var t, s;
            if (((this.availableBalance = "0"), "SOL" !== this.coin.ticker))
              if (["Unstake", "Redelegate"].includes(this.sendType))
                try {
                  var i, e, a, n;
                  const t =
                      null === (i = this.currentValidators) ||
                      void 0 === i ||
                      null ===
                        (e = i.find((t) => {
                          let { primary: s } = t;
                          return s === this.selectedStakingValidator;
                        })) ||
                      void 0 === e
                        ? void 0
                        : e.validatorAddress,
                    s =
                      null === (a = this.coin) ||
                      void 0 === a ||
                      null === (n = a.getValidators) ||
                      void 0 === n
                        ? void 0
                        : n.call(a),
                    r = s[this.selectedStakingValidator] || s[t];
                  "BONE" === this.coin.ticker
                    ? (this.availableBalance = r.staked.toCurrency())
                    : (this.availableBalance = this.coin
                        .getStakedBalance(r.address)
                        .toCurrency());
                } catch (h) {
                  console.log(h);
                }
              else if ("Withdrawal" === this.sendType) {
                var r, o, l;
                this.availableBalance =
                  (null === (r = (o = this.coin).getAvailableWithdrawals) ||
                  void 0 === r ||
                  null === (l = r.call(o)) ||
                  void 0 === l
                    ? void 0
                    : l.toCurrency()) || "0";
              } else {
                var d, c, u;
                this.availableBalance =
                  (null === (d = (c = this.coin).getAvailableBalance) ||
                  void 0 === d ||
                  null === (u = d.call(c)) ||
                  void 0 === u
                    ? void 0
                    : u.toCurrency()) || "0";
              }
            else if (["Unstake", "Withdrawal"].includes(this.sendType))
              try {
                const t = this.availableValidators.find((t) => {
                  let {
                    validatorAddress: s,
                    isDeactivated: i,
                    isAvailableForWithdraw: e,
                  } = t;
                  const a = s === this.selectedStakingValidator;
                  return "Unstake" === this.sendType
                    ? !i && a
                    : "Withdrawal" === this.sendType && e && a;
                });
                this.availableBalance =
                  this.coin.toCurrencyUnit(t.staked) || "0";
              } catch (h) {
                console.log(h);
              }
            else
              this.availableBalance =
                (null === (t = this.coin) ||
                void 0 === t ||
                null === (s = t.balances) ||
                void 0 === s
                  ? void 0
                  : s.availableForStake) || "0";
          },
          setAmount(t) {
            var s, i, e;
            (void 0 === t && (t = null), (this.inputAmount = t), null == t) &&
              (this.inputAmount =
                "Claim" === this.sendType
                  ? (null === (s = (i = this.coin).getRewards) ||
                    void 0 === s ||
                    null === (e = s.call(i)) ||
                    void 0 === e
                      ? void 0
                      : e.toCurrency()) || "0"
                  : String(this.availableBalance || 0));
          },
          async getFee() {
            this.feeLoading = !0;
            try {
              if ("SOL" === this.coin.parent) {
                const t = await this.coin.getFee();
                this.fee.fee =
                  "Stake" === this.sendType
                    ? this.coin.toCurrencyUnit(t.mul(new this.coin.BN(b)))
                    : this.coin.toCurrencyUnit(t);
              } else if ("LUNA" === this.coin.parent) {
                const t = await this.coin.getFee({
                  sendAmount: this.inputAmount,
                  sendType: this.sendType,
                });
                this.fee.fee = this.coin.toCurrencyUnit(t);
              } else if ("ATOM" === this.coin.id) {
                const t = await this.coin.getFee({ sendType: this.sendType });
                this.fee.fee =
                  this.coin instanceof r.Token
                    ? this.parent.toCurrencyUnit(t)
                    : this.coin.toCurrencyUnit(t);
              } else if ("BONE" === this.coin.ticker) {
                const t = await this.coin.getFee({
                  gasLimit: this.gasLimitByTypeStake,
                });
                this.fee.fee = this.coin.toCurrencyUnit(t);
              } else {
                const t = await this.coin.getFee(0, !0);
                this.fee.fee =
                  this.coin instanceof r.Token
                    ? this.parent.toCurrencyUnit(t)
                    : this.coin.toCurrencyUnit(t);
              }
              ((this.fee.ticker = this.coin.deprecatedParent),
                this.availableForFee());
            } catch (t) {
              console.warn(t);
            } finally {
              this.feeLoading = !1;
            }
          },
          async availableForFee() {
            "BONE" === this.coin.ticker
              ? (this.isFeeEnough = await this.coin.isAvailableForFee(
                  this.coin.toMinimalUnit(this.fee.fee),
                ))
              : (this.isFeeEnough = await this.coin.isAvailableForSend(
                  this.fee.fee,
                ));
          },
          setAvailableValidators() {
            var t, s, i, e;
            if ("SOL" !== this.coin.ticker)
              ["Unstake", "Redelegate"].includes(this.sendType)
                ? "BONE" === this.coin.ticker
                  ? (this.availableValidators = Object.entries(
                      null === (t = this.coin) ||
                        void 0 === t ||
                        null === (s = t.getValidators) ||
                        void 0 === s
                        ? void 0
                        : s.call(t),
                    )
                      .map((t) => {
                        var s;
                        const i = Number(t[1].staked.toCurrency());
                        if (i <= 0) return;
                        const e = t[1].address || t[0],
                          a =
                            null === (s = this.coin) || void 0 === s
                              ? void 0
                              : s.predefinedValidators.find(
                                  (s) => s.name === t[0] || s.address === t[0],
                                );
                        return {
                          validatorName: a.name,
                          additional: `${i} ${this.coin.ticker}`,
                          primary: a.name,
                          validatorAddress: e,
                        };
                      })
                      .filter(Boolean))
                  : (this.availableValidators = Object.entries(
                      (null === (i = this.coin) ||
                      void 0 === i ||
                      null === (e = i.getValidators) ||
                      void 0 === e
                        ? void 0
                        : e.call(i)) || {},
                    )
                      .reduce((t, s) => {
                        const { address: i } = s[1] || {};
                        if (+this.coin.getStakedBalance(i).toCurrency() > 0) {
                          var e, a, n;
                          const r = s[0],
                            o =
                              null === (e = this.currentValidators) ||
                              void 0 === e
                                ? void 0
                                : e.find(
                                    (t) =>
                                      (null === t || void 0 === t
                                        ? void 0
                                        : t.primary) === r ||
                                      (null === t || void 0 === t
                                        ? void 0
                                        : t.validatorAddress) === r,
                                  ),
                            l =
                              null !==
                                (a =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.primary) && void 0 !== a
                                ? a
                                : s[0],
                            d = (0, k.default)(l, _),
                            c =
                              "Redelegate" === this.sendType
                                ? o.additional
                                : this.coin.getStakedBalance(i).toCurrency(!0);
                          return t.concat({
                            validatorAddress:
                              null !== i && void 0 !== i ? i : r,
                            validatorReward:
                              null !==
                                (n =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.validatorReward) && void 0 !== n
                                ? n
                                : "",
                            validatorName: l,
                            additional: c,
                            primary: d,
                          });
                        }
                        return t;
                      }, [])
                      .filter((t) => {
                        let { validatorReward: s } = t;
                        return +s > 0;
                      }))
                : (this.availableValidators = this.currentValidators);
            else if (this.coin.balances && this.coin.balances.staking) {
              const t = this.$staking.getStakingInterface(this.coin.ticker);
              if (["Unstake", "Withdrawal"].includes(this.sendType)) {
                const s = (s) => {
                  const i = t.getValidator(s),
                    e = t.validators.find((t) => t.address === s),
                    a = (i && i.name) || (e && e.name);
                  return a;
                };
                this.availableValidators = this.coin.balances.staking
                  .filter((t) => {
                    let {
                      validator: i,
                      isDeactivated: e,
                      isAvailableForWithdraw: a,
                    } = t;
                    return (
                      (("Withdrawal" === this.sendType && a) ||
                        ("Unstake" === this.sendType && !e)) &&
                      s(i)
                    );
                  })
                  .map((t) => ({
                    address: t,
                    validatorName: s(t.validator),
                    additional: `${this.coin.toCurrencyUnit(t.staked)} ${this.coin.ticker}`,
                    primary: s(t.validator),
                    validatorAddress: t.accountAddress,
                    validatorReward: "",
                    staked: t.staked,
                    validator: t.validator,
                    isDeactivated: t.isDeactivated,
                    isAvailableForWithdraw: t.isAvailableForWithdraw,
                  }));
              } else this.availableValidators = this.currentValidators;
            } else this.availableValidators = [];
          },
          async setData() {
            if (
              ((this.feeLoading = !0),
              await this.setCurrentValidators(),
              this.setAvailableValidators(),
              this.setStakingValidator(),
              this.setAvailableBalance(),
              this.setAmount(),
              await this.getFee(),
              "SOL" === this.coin.ticker)
            ) {
              var t, s;
              const i =
                (await (null === (t = this.coin) ||
                void 0 === t ||
                null === (s = t.getMinRent) ||
                void 0 === s
                  ? void 0
                  : s.call(t))) || 0;
              this.minRentAmount = this.coin.toCurrencyUnit(i);
            }
          },
          toggleCurrentValidators() {
            this.availableValidators.length > 1 &&
              ((this.isCurrentValidators = !this.isCurrentValidators),
              (this.isRedelegateValidators = !1));
          },
          toggleRedelegateValidators() {
            this.redelegateValidators.length > 0 &&
              ((this.isRedelegateValidators = !this.isRedelegateValidators),
              (this.isCurrentValidators = !1));
          },
          selectRedelegateValidator(t) {
            ((this.selectedRedelegateValidator = t),
              this.setAvailableBalance(),
              this.setAmount(),
              this.toggleRedelegateValidators());
          },
          selectValidator(t) {
            if (
              ((this.selectedStakingValidator = t),
              ["Unstake", "Redelegate", "Withdrawal"].includes(this.sendType))
            )
              (this.setAvailableBalance(), this.setAmount());
            else {
              var s, i;
              const e =
                "SOL" === this.coin.ticker
                  ? this.$staking
                      .getStakingInterface(this.coin.ticker)
                      .getValidator(t)
                  : null === (s = this.coin) ||
                      void 0 === s ||
                      null === (i = s.predefinedValidators) ||
                      void 0 === i
                    ? void 0
                    : i.find((s) => s.name === t);
              e &&
                localStorage.setItem(
                  `selected::${this.coin.ticker}::validator`,
                  t,
                );
            }
            (this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.toggleCurrentValidators());
          },
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.inputAmount = String(this.availableBalance) || "0"));
          },
          async validateAmount() {
            ((this.isBuyCoin = !1), (this.inputAmountError = ""));
            try {
              "" === this.inputAmount || 0 === Number(this.inputAmount)
                ? (this.inputAmountError = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.inputAmount)
                  ? "Unstake" === this.sendType &&
                    Number(this.inputAmount) > Number(this.availableBalance)
                    ? (this.inputAmountError = this.$t(
                        "error.exceedsUnstakingBalance",
                      ))
                    : "SOL" === this.coin.ticker &&
                        "Stake" === this.sendType &&
                        Number(this.inputAmount) < Number(this.minRentAmount)
                      ? (this.inputAmountError = this.$t(
                          "error.minimumStakeAmount",
                          { amount: this.minRentAmount, ticker: "SOL" },
                        ))
                      : "SOL" === this.coin.ticker &&
                          "Stake" === this.sendType &&
                          Number(this.inputAmount) >
                            Number(this.availableBalance)
                        ? (this.inputAmountError = this.$t(
                            "error.insufficientFundsForStaking",
                          ))
                        : "SOL" !== this.coin.ticker &&
                            "Stake" === this.sendType &&
                            Number(this.inputAmount) >
                              Number(this.availableBalance)
                          ? ((this.inputAmountError = this.$t(
                              "error.insufficientFundsForStaking",
                            )),
                            (this.isBuyCoin = !0))
                          : "ZILEVM" === this.coin.id &&
                              "Stake" === this.sendType &&
                              Number(this.inputAmount) < 100
                            ? ((this.inputAmountError =
                                this.$t("error.insufficientFundsForStaking") +
                                " (min: 100ZIL)"),
                              (this.isBuyCoin = !0))
                            : ["Unstake", "Withdrawal"].includes(
                                this.sendType,
                              ) ||
                              (await this.coin.isAvailableForSend(
                                this.fee.fee,
                              )) ||
                              ((this.inputAmountError = this.$t(
                                "error.insufficientFunds",
                              )),
                              (this.isBuyCoin = !0))
                  : (this.inputAmountError = this.$t("error.incorrectAmount"));
            } catch (t) {
              return void console.log(t);
            }
            return "" === this.inputAmountError;
          },
          async validateAll() {
            let t = !1;
            try {
              (await this.validateAmount()) || (t = !0);
            } catch (s) {
              ((this.inputAmountError = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          async showPasswordForm() {
            ((this.isInitSend = !0),
              !(await this.validateAll()) && this.isFeeEnough
                ? ((this.isPasswordShow = !0), (this.isInitSend = !1))
                : (this.isInitSend = !1));
          },
          async sendCoins() {
            const t = ["Unstake", "Redelegate", "Stake", "Withdrawal"].includes(
                this.sendType,
              )
                ? this.stakingValidator.validatorAddress
                : "",
              s = await this.coin.validateAddress(t),
              i = "string" === typeof s ? s : null,
              e = this.coin.toMinimalUnit(this.inputAmount);
            let a;
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              (this.resultAmount = this.inputAmount),
              (this.isPasswordShow = !1),
              (this.isSending = !0),
              "SOL" === this.coin.ticker)
            ) {
              ["Unstake", "Withdrawal"].includes(this.sendType) ||
                this.stakingValidator.address;
              a = {
                stakeAccount: t,
                amount: e,
                memo: "atomicwallet",
                validator: t,
              };
            } else
              a = ["NEAR", "BONE"].includes(this.coin.ticker)
                ? { validator: i || t, amount: e }
                : "Redelegate" === this.sendType
                  ? [t, this.stakingRedelegateValidator.validatorAddress, e, ""]
                  : [i || t, e, ""];
            try {
              var n;
              let t, s, i;
              const e = (t, s) => {
                (this.$wallets.logger.error({
                  type: "Send",
                  error: t.toString(),
                  url: "wallet." + s,
                  currency: this.coin.getUserTicker(),
                }),
                  (this.isError = !0));
              };
              ("Stake" === this.sendType
                ? (s = "createDelegationTransaction")
                : "Unstake" === this.sendType
                  ? (s =
                      "SOL" === this.coin.ticker
                        ? "createDeactivateStakeTransaction"
                        : "NEAR" === this.coin.ticker
                          ? "createUnDelegationTransaction"
                          : "BONE" === this.coin.ticker
                            ? "createUnstakeTransaction"
                            : "createUnbondingDelegationTransaction")
                  : "Redelegate" === this.sendType
                    ? (s = "createRedelegationTransaction")
                    : "Withdrawal" === this.sendType
                      ? (s =
                          "SOL" === this.coin.ticker
                            ? "createUndelegationTransaction"
                            : "BONE" === this.coin.ticker
                              ? "createWithdrawTransaction"
                              : "createWithdrawDelegationTransaction")
                      : "Claim" === this.sendType &&
                        (s = "createWithdrawDelegationTransaction"),
                s &&
                  (t =
                    "SOL" === this.coin.ticker
                      ? await this.coin[s](
                          "Claim" !== this.sendType ? a : null,
                        ).catch((t) => e(t, s))
                      : ["NEAR", "BONE"].includes(this.coin.ticker)
                        ? await this.coin[s](a).catch((t) => e(t, s))
                        : await this.coin[s](...a).catch((t) => e(t, s))),
                "Redelegate" === this.sendType
                  ? ((i = await this.coin
                      .sendTransactionOnce(t)
                      .catch((t) => e(t, "sendTransactionOnce"))),
                    this.selectValidator(""))
                  : (i = await this.coin
                      .sendTransaction(t)
                      .catch((t) => e(t, "sendTransaction"))),
                (this.txid =
                  null === (n = i) || void 0 === n ? void 0 : n.txid),
                this.isError || (this.isSuccess = !0),
                "Stake" === this.sendType &&
                  this.isSuccess &&
                  this.saveSuccessStaking(),
                this.$ga.event("Send Coin", "send tx succeed", {
                  clientID: this.$ga.customParams.uid,
                }));
            } catch (r) {
              (this.$ga.event("Send Coin", "send tx failed", {
                clientID: this.$ga.customParams.uid,
              }),
                console.log(r),
                (this.isError = !0));
            } finally {
              this.isSending = !1;
            }
          },
          clearInputs() {
            ((this.inputAmount = ""),
              (this.inputAmountError = ""),
              (this.isPasswordShow = !1),
              (this.isError = !1),
              (this.isSuccess = !1),
              (this.isSending = !1));
          },
          async backToStake() {
            (this.clearInputs(), await this.setData());
          },
          backToWallets() {
            (this.clearInputs(), this.$emit("closePopup"));
          },
        },
      };
    },
    5787: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = e(i(831)),
        r = i(375),
        o = e(i(2842)),
        l = e(i(3362)),
        d = e(i(2922)),
        c = e(i(3074)),
        u = e(i(2969)),
        h = i(804),
        p = e(i(798));
      const v = 100,
        m = 100,
        g = 56,
        k = /[0-9A-Fa-f]{6}/g,
        w = 2,
        f = 4,
        _ = 6e4,
        b = {
          primary: "",
          additional: "",
          validatorName: "",
          validatorAddress: "",
          validatorReward: 0,
        };
      s.default = {
        name: "SendStakeADA",
        components: {
          Edit: o.default,
          SendCoinResult: d.default,
          EditAmount: u.default,
          AvailableAndFeeAmounts: c.default,
          Dropdown: l.default,
        },
        mixins: [r.SettingsMixin, r.SendStakeMixin],
        props: { sendType: { type: String, default: "Stake" } },
        data: () => ({
          feeLoading: !1,
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          filter: "",
          customGas: [],
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          isCustomShow: !1,
          isFromCustom: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeCoin: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          availableBalance: 0,
          currencies: [],
          selectedStakingValidator: "",
          cacheImage: {},
          isSortASC: !1,
          activeSortField: "staked",
          customPool: "",
          customPoolName: "",
          customPoolError: "",
          customPoolSelected: !1,
          validators: [],
        }),
        computed: {
          disableButton() {
            return this.customPoolSelected
              ? this.customPoolError || !this.customPool || !this.customPoolName
              : !this.stakingValidator;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          availableValidators() {
            if (
              !this.coin.balances ||
              !this.coin.balances.staking ||
              "Send" === this.sendType
            )
              return [];
            const t = this.$staking.getStakingInterface(this.coin.ticker);
            if ("Unstake" === this.sendType) {
              const s = (s) => {
                const i = t.getValidator(s),
                  e = t.validators.find((t) => t.address === s);
                return (i && i.name) || (e && e.description.moniker);
              };
              return Object.entries(this.coin.balances.staking.validators).map(
                (t) => {
                  const i = s(t[0]);
                  return {
                    primary: i || `${t[0].substr(0, f)}...${t[0].substr(-f)}`,
                    additional: `${t[1].shares} ${this.coin.ticker}`,
                    validatorName: i || t[0],
                    validatorAddress: t[1].address,
                  };
                },
              );
            }
            return t.validators
              .filter((t) => t.visibility)
              .map((t) => {
                let { name: s, estimatedRoi: i, address: e } = t;
                return {
                  primary: s,
                  additional: i + "%",
                  validatorName: s,
                  validatorAddress: e,
                  validatorReward: i,
                };
              });
          },
          stakingReward() {
            var t, s, i, e, a, n;
            return null !==
              (t =
                null !==
                  (s =
                    null !==
                      (i =
                        null === (e = this.stakingValidator) || void 0 === e
                          ? void 0
                          : e.reward) && void 0 !== i
                      ? i
                      : null === (a = this.stakingValidator) || void 0 === a
                        ? void 0
                        : a.validatorReward) && void 0 !== s
                  ? s
                  : null === (n = this.stakingValidator) || void 0 === n
                    ? void 0
                    : n.estimatedRoi) && void 0 !== t
              ? t
              : 0;
          },
          stakingValidator() {
            if (!this.selectedStakingValidator && !this.defaultValidator)
              return b;
            const t = this.selectedStakingValidator
              ? this.$staking
                  .getStakingInterface(this.coin.ticker)
                  .getValidator(this.selectedStakingValidator)
              : this.$staking
                  .getStakingInterface(this.coin.ticker)
                  .getValidator(this.defaultValidator);
            return (
              t ||
              this.$staking.getStakingInterface(this.coin.ticker).validators[0]
            );
          },
          defaultValidator() {
            const t =
                this.stakingSettings.find((t) => {
                  let { ticker: s } = t;
                  return this.coin.ticker === s;
                }).defaultValidator ||
                this.stakingSettings[0].name ||
                "",
              s =
                t ||
                localStorage.getItem(
                  `selected::${this.coin.ticker}::validator`,
                ),
              i = this.availableValidators.find((t) => {
                let { primary: i } = t;
                return i === s;
              });
            return (
              (i && i.primary) ||
              (this.availableValidators && this.availableValidators[0].primary)
            );
          },
          stakingProfit() {
            const t = new a.default(this.stakingReward).dividedBy(m);
            return t.multipliedBy(this.availableBalance);
          },
          icon() {
            return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.deprecatedParent,
            );
          },
        },
        watch: {
          async customPool(t) {
            const s = await this.coin.validateStakePoolAddress(t);
            this.customPoolError = s ? "" : this.$t("error.invalidPollAddress");
          },
        },
        beforeMount() {
          this.validators = this.$staking.getStakingInterface(
            this.coin.ticker,
          ).validators;
        },
        async mounted() {
          (await this.updateBalanceAndFee(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: h.getValueFiat,
          formatFinance: p.default,
          validateStakePoolId(t) {
            return t.length === g && k.test(t);
          },
          sortByField(t) {
            this.activeSortField === t
              ? (this.isSortASC = !this.isSortASC)
              : (this.activeSortField = t);
          },
          adaClaimingTimeout() {
            "Claim" === this.sendType &&
              (this.$set(this.coin, "isClaiming", !0),
              setTimeout(() => {
                this.coin.isClaiming = !1;
              }, _));
          },
          sortItems(t) {
            return this.isSortASC
              ? (0, n.default)(t).asc((t) => Number(t[this.activeSortField]))
              : (0, n.default)(t).desc((t) => Number(t[this.activeSortField]));
          },
          saveCache(t, s) {
            Object.prototype.hasOwnProperty.call(this.cacheImage, s) &&
              (this.cacheImage[s] = t);
          },
          async updateBalanceAndFee() {
            await this.getFee();
            try {
              const t = this.coin.toCurrencyUnit(
                new this.coin.BN(this.coin.balance)
                  .sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee)))
                  .toString(),
              );
              this.availableBalance = Number(t) > 0 ? t : "0";
            } catch (t) {
              this.availableBalance = "0";
            }
            this.setAllAvailableBalance();
          },
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              "Claim" === this.sendType
                ? (this.inputs.amount = this.coin.toCurrencyUnit(
                    this.coin.balances.rewards,
                  ))
                : (this.inputs.amount = this.availableBalance || "0"));
          },
          setCustomGas(t) {
            this.customGas = t;
          },
          async changeFee(t) {
            (this.isOnSendAll &&
              (this.inputs.amount = await this.coin.availableBalance(
                this.coin.toMinimalUnit(t),
              )),
              (this.fee.fee = t.toString() || "0"),
              this.availableForFee());
          },
          async availableForFee() {
            this.isFeeEnough = await this.coin.isAvailableForSend(
              this.fee.fee,
              this.fee.fee,
            );
          },
          async getFee() {
            this.feeLoading = !0;
            let t = await this.coin.getFee();
            ("Claim" !== this.sendType &&
              this.coin.balances &&
              0 === Number(this.coin.balances.staking.total) &&
              (t = t.add(new this.coin.BN(this.coin.toMinimalUnit(w)))),
              (this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.feeTicker()),
              this.availableForFee(),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            if (((this.customPoolSelected = !t), this.customPoolSelected))
              return (
                (this.selectedStakingValidator = null),
                localStorage.setItem(
                  `selected::${this.coin.ticker}::validator`,
                  this.customPoolName,
                ),
                this.$bus.$emit(
                  `select::${this.coin.ticker}::validator`,
                  this.customPoolName,
                ),
                this.validators.push({
                  name: this.customPoolName,
                  address: this.customPool,
                }),
                (this.selectedStakingValidator = this.customPoolName),
                void this.closeValidatorsDropdown()
              );
            ((this.selectedStakingValidator = t),
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.closeValidatorsDropdown());
          },
          selectCustomValidator() {
            (this.selectValidator(),
              (this.isFromCustom = !0),
              (this.isCustomShow = !1));
          },
          async validateAddress() {
            const t = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : t ||
                  (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof t && (this.domainAddress = t),
              "" === this.inputsError.address
            );
          },
          validateCustom() {
            return (
              (this.inputsError.custom = ""),
              /^[0-9]*$/.test(this.inputs.custom) ||
                (this.inputsError.custom = this.$t(
                  "error.destinationTagNumber",
                )),
              "" === this.inputsError.custom
            );
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
          async validateAmount() {
            const t = await this.coin.availableBalance();
            return t > 0;
          },
          async validateAll() {
            let t = !1;
            try {
              (this.validateCustom() || (t = !0),
                (await this.validateAmount()) || (t = !0));
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          feeTicker() {
            return this.coin.deprecatedParent;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          showCustomForm() {
            ((this.customPoolSelected = !0),
              (this.isCustomShow = !this.isCustomShow));
          },
          async showPasswordForm() {
            this.isFeeEnough &&
              ((this.isPasswordShow = !0),
              setTimeout(() => {
                this.$refs.confirmPassword.setFocus();
              }, 300));
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isError = !1),
                (this.isPasswordShow = !1),
                (this.sending = !0),
                (this.inputs.address = this.stakingValidator.address),
                (this.inputs.custom = ""));
              const s = this.stakingValidator.address;
              try {
                let t;
                ((t =
                  "Claim" === this.sendType
                    ? await this.coin.claim()
                    : await this.coin.stake(s)),
                  (this.txid = t.txid),
                  (this.isSuccess = !0),
                  "ADA" === this.coin.ticker && this.adaClaimingTimeout(),
                  "Claim" !== this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  this.$wallets.logger.error({
                    type: "Send",
                    error: t.toString(),
                    url: "wallet.sendTransaction",
                    currency: this.coin.getUserTicker(),
                  }),
                  console.log(t),
                  (this.isSuccess = !1),
                  (this.isError = !0));
              }
              this.sending = !1;
            }
          },
          clearInputs() {
            ((this.customGas = []),
              (this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = this.availableBalance));
          },
          backFromCustom() {
            ((this.customPoolSelected = !1),
              (this.customPool = ""),
              (this.customPoolError = ""),
              (this.isCustomShow = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""),
              this.isFromCustom &&
                ((this.isFromCustom = !1), (this.isCustomShow = !0)));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, v));
          },
          backToWallets() {
            (this.clearInputs(), this.$emit("closePopup"));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, v));
          },
        },
      };
    },
    5788: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(375),
        r = e(i(2842)),
        o = e(i(2969)),
        l = e(i(2922)),
        d = e(i(3074)),
        c = e(i(798)),
        u = i(804);
      const h = 100,
        p = 100;
      s.default = {
        name: "SendStakeAWC",
        components: {
          Edit: r.default,
          EditAmount: o.default,
          SendCoinResult: l.default,
          AvailableAndFeeAmounts: d.default,
        },
        mixins: [n.SettingsMixin, n.SendStakeMixin],
        props: { sendType: { type: String, default: "Stake" } },
        data: () => ({
          feeLoading: !1,
          fee: { ticker: "", fee: "" },
          isFeeEnough: !0,
          inputTypePassword: "password",
          isPasswordShow: !1,
          sending: !1,
          isError: !1,
          isSuccess: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          amount: "",
          sendAmount: "",
          amountError: "",
          password: "",
          passwordError: "",
        }),
        computed: {
          yearlyYield() {
            const t = 20,
              s = new a.default(t).dividedBy(p),
              i = s.multipliedBy(this.amount);
            return Number(i) || 0;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          staked() {
            return (this.coin.balances && this.coin.balances.frozen) || 0;
          },
          availableBalance() {
            const t = (this.coin.balances && this.coin.balances.available) || 0;
            return "Stake" === this.sendType ? t : this.staked;
          },
          icon() {
            return this.$iconClass(this.coin);
          },
        },
        watch: {
          async amount() {
            this.isSuccess ||
              (await this.validateAmount(), await this.validateFee());
          },
        },
        async mounted() {
          (await this.updateBalanceAndFee(),
            (this.amount = this.availableBalance),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          hasRate: u.hasRate,
          getValueFiat: u.getValueFiat,
          formatFinance: c.default,
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.amount = String(this.availableBalance) || "0"));
          },
          async updateBalanceAndFee() {
            await this.getFee();
          },
          async validateFee() {
            const t = new this.parent.BN(
              this.parent.toMinimalUnit(this.fee.fee),
            );
            this.isFeeEnough = await this.coin.isAvailableForFee(
              t,
              this.parent.indivisibleBalance,
            );
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.parent.getFreezeFee();
            ((this.fee.fee = this.parent.toCurrencyUnit(t)),
              (this.fee.ticker = this.parent.ticker),
              await this.validateFee(),
              (this.feeLoading = !1));
          },
          validateAmount() {
            this.amountError = "";
            const t =
                "Stake" === this.sendType
                  ? this.coin.balances.available
                  : this.coin.balances.frozen,
              s = Number(t) < Number(this.amount);
            return (
              "" === this.amount || 0 === Number(this.amount)
                ? (this.amountError = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.amount)
                  ? "Stake" === this.sendType && s
                    ? (this.amountError = this.$t("error.notEnoughForStake"))
                    : "Unstake" === this.sendType &&
                      s &&
                      (this.amountError = this.$t("error.notEnoughForUnstake"))
                  : (this.amountError = this.$t("error.incorrectAmount")),
              "" === this.amountError
            );
          },
          async validatePassword() {
            return (
              (this.passwordError = ""),
              "" === this.password
                ? (this.passwordError = this.$t("error.passwordCantBeBlank"))
                : (await this.$wallets.checkPassword(this.password)) ||
                  (this.passwordError = this.$t("error.wrongPassword")),
              "" === this.passwordError
            );
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.amount = t));
          },
          showPasswordForm() {
            this.validateAmount() &&
              this.isFeeEnough &&
              (this.isPasswordShow = !0);
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isPasswordShow = !1), (this.sending = !0));
              const t =
                  "Stake" === this.sendType
                    ? "freezeTokenBalance"
                    : "unfreezeTokenBalance",
                s = await this.parent[t](this.coin.ticker, this.amount).catch(
                  (s) => {
                    (console.log(s),
                      this.$wallets.logger.error({
                        type: "Send",
                        error: s.toString(),
                        url: "Staking AWC: " + t,
                        currency: this.coin.getUserTicker(),
                      }),
                      (this.isError = !0));
                  },
                );
              ((this.txid = s),
                (this.sendAmount = this.amount),
                this.isError ||
                  ((this.isSuccess = !0),
                  "Stake" === this.sendType &&
                    this.saveSuccessStaking(this.sendAmount)),
                (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.password = ""),
              (this.passwordError = ""),
              (this.amount = ""),
              (this.amountError = ""),
              (this.isOnSendAll = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.password = ""),
              (this.isPasswordShow = !1),
              (this.passwordError = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, h));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, h));
          },
        },
      };
    },
    5789: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(375),
        r = e(i(2842)),
        o = e(i(3362)),
        l = e(i(2969)),
        d = e(i(2922)),
        c = e(i(3074)),
        u = i(804),
        h = e(i(798));
      const p = 100,
        v = 100;
      s.default = {
        name: "SendStakeICX",
        components: {
          Edit: r.default,
          EditAmount: l.default,
          SendCoinResult: d.default,
          Dropdown: o.default,
          AvailableAndFeeAmounts: c.default,
        },
        mixins: [n.SettingsMixin, n.SendStakeMixin],
        props: { sendType: { type: String, default: "Stake" } },
        data: () => ({
          feeLoading: !1,
          fee: { ticker: "", fee: "" },
          isFeeEnough: !0,
          inputTypePassword: "password",
          isPasswordShow: !1,
          sending: !1,
          isError: !1,
          isSuccess: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          amount: "",
          sendAmount: "",
          amountError: "",
          password: "",
          passwordError: "",
          isChangeValidator: !1,
          selectedValidator: "",
        }),
        computed: {
          yearlyYield() {
            const t = 20,
              s = new a.default(t).dividedBy(v),
              i = s.multipliedBy(this.amount);
            return Number(i) || 0;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          staked() {
            return this.coin.getStakedBalance();
          },
          availableBalance() {
            let t;
            if (["Stake", "Claim"].includes(this.sendType)) {
              var s, i, e;
              const n = new a.default(
                (null === (s = (i = this.coin).getAvailableBalance) ||
                void 0 === s ||
                null === (e = s.call(i)) ||
                void 0 === e
                  ? void 0
                  : e.toCurrency()) || "0",
              );
              t = n.gt(0) ? n.toString() : "0";
            } else t = this.coin.getAvailableForUnstakeBalance().toCurrency();
            return t;
          },
          icon() {
            return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          availableValidators() {
            return (this.stakingValidators || []).map((t) => {
              let { name: s, reward: i } = t;
              return { primary: s, additional: i + "%" };
            });
          },
          stakingValidator() {
            const t = this.selectedValidator
              ? this.stakingValidators.find((t) => {
                  let { address: s, name: i } = t;
                  return (
                    s === this.selectedValidator || i === this.selectedValidator
                  );
                })
              : this.stakingValidators[0];
            return t || { name: "", reward: 0, address: "" };
          },
          stakingValidators() {
            var t, s, i, e;
            return "Stake" === this.sendType
              ? null === (e = this.coin) || void 0 === e
                ? void 0
                : e.predefinedValidators
              : Object.values(
                  null !==
                    (t =
                      null === (s = this.coin) ||
                      void 0 === s ||
                      null === (i = s.getValidators) ||
                      void 0 === i
                        ? void 0
                        : i.call(s)) && void 0 !== t
                    ? t
                    : {},
                );
          },
          stakingSettings() {
            return this.$store.state.Settings.stakingSettings.find(
              (t) => t.ticker === this.coin.ticker,
            );
          },
        },
        watch: {
          async amount() {
            this.isSuccess ||
              (await this.validateAmount(), await this.validateFee());
          },
        },
        async mounted() {
          var t, s, i;
          (await this.updateBalanceAndFee(),
            (this.amount =
              "Claim" === this.sendType
                ? (null === (t = (s = this.coin).getRewards) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0"
                : this.availableBalance),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        created() {
          try {
            const t =
              this.availableValidators.find(
                (t) =>
                  t.primary ===
                  (this.stakingSettings &&
                    this.stakingSettings.defaultValidator),
              ) || this.availableValidators[0];
            this.selectedValidator =
              (null === t || void 0 === t ? void 0 : t.primary) || "";
          } catch (t) {
            (console.log("SendStakeHBAR: created hook failed"),
              console.error(t));
          }
        },
        methods: {
          hasRate: u.hasRate,
          getValueFiat: u.getValueFiat,
          formatFinance: h.default,
          setAllAvailableBalance() {
            "Claim" !== this.sendType &&
              ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.amount = String(this.availableBalance) || "0"));
          },
          async updateBalanceAndFee() {
            await this.getFee();
          },
          async validateFee() {
            var t;
            const s =
                +this.fee.fee > 0 ? this.coin.toMinimalUnit(this.fee.fee) : 0,
              i = new this.coin.BN(s);
            this.isFeeEnough = i.lt(
              (null === (t = this.coin) || void 0 === t
                ? void 0
                : t.indivisibleBalance) || 0,
            );
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.parent.getFee();
            ((this.fee.fee = this.parent.toCurrencyUnit(t)),
              (this.fee.ticker = this.parent.ticker),
              await this.validateFee(),
              (this.feeLoading = !1));
          },
          validateAmount() {
            this.amountError = "";
            const t =
                "Stake" === this.sendType
                  ? this.availableBalance
                  : this.coin.getAvailableForUnstakeBalance().toCurrency(),
              s = new a.default(t).lt(this.amount);
            return (
              "" === this.amount || 0 === Number(this.amount)
                ? (this.amountError = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.amount)
                  ? "Stake" === this.sendType && s
                    ? (this.amountError = this.$t("error.notEnoughForStake"))
                    : "Unstake" === this.sendType &&
                      s &&
                      (this.amountError = this.$t("error.notEnoughForUnstake"))
                  : (this.amountError = this.$t("error.incorrectAmount")),
              "" === this.amountError
            );
          },
          async validatePassword() {
            return (
              (this.passwordError = ""),
              "" === this.password
                ? (this.passwordError = this.$t("error.passwordCantBeBlank"))
                : (await this.$wallets.checkPassword(this.password)) ||
                  (this.passwordError = this.$t("error.wrongPassword")),
              "" === this.passwordError
            );
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.amount = t));
          },
          showPasswordForm() {
            this.validateAmount() &&
              this.isFeeEnough &&
              (this.isPasswordShow = !0);
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isPasswordShow = !1), (this.sending = !0));
              const t = this.sendType.toLowerCase(),
                s = await this.parent[t]({
                  amount: this.amount,
                  validator: this.stakingValidator.address,
                }).catch((s) => {
                  (console.log(s),
                    this.$wallets.logger.error({
                      type: "Send",
                      error: s.toString(),
                      url: `Staking ${this.coin.ticker}: ${t}`,
                      currency: this.coin.getUserTicker(),
                    }),
                    (this.isError = !0));
                });
              ((this.txid = s),
                (this.sendAmount = this.amount),
                this.isError ||
                  ((this.isSuccess = !0),
                  "Stake" === this.sendType &&
                    this.saveSuccessStaking(
                      this.amount,
                      this.stakingValidator.address,
                    )),
                (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.password = ""),
              (this.passwordError = ""),
              (this.amount = ""),
              (this.amountError = ""),
              (this.isOnSendAll = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.password = ""),
              (this.passwordError = ""),
              "Unstake" === this.sendType
                ? this.backToWallets()
                : (this.isPasswordShow = !1));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, p));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, p));
          },
          selectValidator(t) {
            ((this.selectedValidator = t), this.closeValidatorsDropdown());
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
        },
      };
    },
    5790: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(60),
        r = i(68),
        o = i(4),
        l = i(375),
        d = i(804),
        c = e(i(798)),
        u = e(i(2842)),
        h = e(i(3362)),
        p = e(i(2969)),
        v = e(i(2922)),
        m = e(i(3074));
      const g = 100,
        k = 100,
        w = 64,
        f = "1",
        _ = 2;
      s.default = {
        name: "SendStakeBNB",
        components: {
          Dropdown: h.default,
          Edit: u.default,
          EditAmount: p.default,
          SendCoinResult: v.default,
          AvailableAndFeeAmounts: m.default,
        },
        mixins: [l.SettingsMixin, l.SendStakeMixin],
        props: { sendType: { type: String, default: "Send" } },
        data: () => ({
          feeLoading: !1,
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          customGas: [],
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isBuyCoin: !1,
          isFeeEnough: !0,
          isUnstakeAvailable: !0,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          currencies: [],
          selectedStakingValidator: null,
          minAmount: f,
          amountResult: 0,
          availableValidators: [],
          stakingValidator: {},
        }),
        computed: {
          ...(0, n.mapGetters)(["stakingSettings"]),
          sendText() {
            return "Withdrawal" === this.sendType
              ? this.$t("sendType.Withdraw")
              : this.$t("sendType." + this.sendType);
          },
          stakingProfit() {
            if ("Send" === this.sendType) return;
            const t = new a.default(this.stakingValidator.reward).dividedBy(k);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          sendTypeVerb() {
            return "Unstake" === this.sendType
              ? this.$t("sendType.Unstake")
              : "Withdrawal" === this.sendType
                ? this.$t("sendProcess.Withdrawal")
                : this.$t("sendType.Stake");
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.deprecatedParent,
            );
          },
          availableBalance() {
            var t, s, i;
            if (["Unstake"].includes(this.sendType))
              try {
                return this.stakingValidator.staked;
              } catch (e) {
                return "0";
              }
            return (
              (null === (t = (s = this.coin).getAvailableBalance) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0"
            );
          },
          defaultValidator() {
            if ("Unstake" === this.sendType)
              return this.availableValidators.find((t) => {
                let { amount: s } = t;
                return Number(s) > 0;
              });
            const t =
                this.selectedStakingValidator ||
                this.stakingSettings.find((t) => {
                  let { ticker: s } = t;
                  return this.coin.ticker === s;
                }).defaultValidator ||
                this.stakingSettings[0].name ||
                "",
              s = ["Unstake"].includes(this.sendType)
                ? t
                : localStorage.getItem(
                    `selected::${this.coin.ticker}::validator`,
                  ),
              i = this.availableValidators.find((t) => {
                let { primary: i } = t;
                return i === s;
              });
            return i || (0, o.randomElementFromArray)(this.availableValidators);
          },
        },
        watch: {
          "inputs.address"() {
            ((this.domainAddress = ""),
              this.isSuccess || this.isUpdateCoin || this.validateAddress());
          },
          "inputs.custom"() {
            this.isSuccess || this.isUpdateCoin || this.validateCustom();
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
        },
        async mounted() {
          (await this.setValidators(),
            await this.updateBalanceAndFee(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: d.getValueFiat,
          formatFinance: c.default,
          setActiveValidator() {
            if ("Unstake" === this.sendType) {
              const t =
                this.availableValidators.find((t) => {
                  let { primary: s } = t;
                  return s === this.selectedStakingValidator;
                }) || this.availableValidators[0];
              t &&
                (this.stakingValidator = {
                  address: t.uniqueField,
                  name: t.primary,
                  accountAddress: t.uniqueField,
                  staked: t.amount,
                });
            } else {
              var t, s;
              this.stakingValidator =
                (null === (t = this.coin) || void 0 === t
                  ? void 0
                  : t.predefinedValidators.find((t) => {
                      let { name: s } = t;
                      return s === this.selectedStakingValidator;
                    })) ||
                (0, o.randomElementFromArray)(
                  null === (s = this.coin) || void 0 === s
                    ? void 0
                    : s.predefinedValidators,
                );
            }
          },
          async setValidators() {
            var t, s;
            if (
              (await (null === (t = (s = this.coin).getPredefinedValidators) ||
              void 0 === t
                ? void 0
                : t.call(s)),
              "Unstake" === this.sendType)
            ) {
              var i, e;
              const t =
                null === (i = this.coin) ||
                void 0 === i ||
                null === (e = i.getValidators) ||
                void 0 === e
                  ? void 0
                  : e.call(i);
              this.availableValidators = Object.keys(t)
                .map((s) => {
                  const i = t[s];
                  if (Number(i.staked.toCurrency()) > 0) return s;
                })
                .filter(Boolean)
                .map((s) => ({
                  primary: t[s].name,
                  amount: t[s].staked.toCurrency(),
                  additional: t[s].staked.toCurrency(!0),
                  uniqueField: s,
                }));
            } else {
              var a;
              this.availableValidators =
                null === (a = this.coin) || void 0 === a
                  ? void 0
                  : a.predefinedValidators.map((t) => {
                      let { name: s, address: i, reward: e } = t;
                      return {
                        primary: s,
                        uniqueField: i,
                        additional: e + "%",
                      };
                    });
            }
            (this.selectValidator(this.defaultValidator),
              this.setActiveValidator());
          },
          async updateBalanceAndFee() {
            ((this.feeLoading = !0),
              await this.coin.getInfo({ ignoreCache: !0 }),
              await this.getFee(),
              this.setAllAvailableBalance(),
              (this.feeLoading = !1));
          },
          setAllAvailableBalance() {
            "Unstake" !== this.sendType
              ? ((this.isSendAllClick = !this.isSendAllClick),
                (this.isOnSendAll = !0),
                (this.inputs.amount = String(this.availableBalance) || "0"))
              : (this.inputs.amount = this.stakingValidator.staked);
          },
          async availableForFee() {
            ((this.isFeeEnough = !0),
              this.coin instanceof r.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()),
              (this.isFeeEnough =
                Number(this.availableBalance) >= Number(this.fee.fee)));
          },
          async getFee() {
            const t = await this.coin.getFee();
            ((this.fee.fee =
              "Stake" === this.sendType
                ? this.coin.toCurrencyUnit(t.mul(new this.coin.BN(_)))
                : this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.coin.deprecatedParent),
              this.availableForFee());
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = "string" === typeof t ? t : t.name || t.primary;
            let i = "string" === typeof t ? void 0 : t.uniqueField;
            var e, a, n, r;
            ((this.selectedStakingValidator = s), i) ||
              (i =
                null ===
                  (e = this.availableValidators.find((t) => {
                    let { primary: i } = t;
                    return i === s;
                  })) || void 0 === e
                  ? void 0
                  : e.uniqueField);
            (this.setActiveValidator(), ["Unstake"].includes(this.sendType)) &&
              (this.setAllAvailableBalance(),
              (this.isUnstakeAvailable =
                null === (a = this.coin) ||
                void 0 === a ||
                null === (n = a.getValidators) ||
                void 0 === n ||
                null === (r = n.call(a)[i]) ||
                void 0 === r
                  ? void 0
                  : r.isUnstakeAvailable));
            this.closeValidatorsDropdown();
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.deprecatedParent),
              s = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : s
                  ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(
                      this.coin.ticker,
                    ) &&
                    t === this.inputs.address &&
                    (this.inputsError.address = this.$t(
                      "error.cantSendToOwnAddress",
                    ))
                  : (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof s && (this.domainAddress = s),
              "" === this.inputsError.address
            );
          },
          validateCustom() {
            return (
              (this.inputsError.custom = ""),
              "XMR" !== this.coin.getUserTicker() ||
              /^([A-z0-9]{64})?$/.test(this.inputs.custom)
                ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND"].includes(
                    this.coin.deprecatedParent,
                  ) ||
                  /^[0-9]*$/.test(this.inputs.custom) ||
                  (this.inputsError.custom = this.$t(
                    "error.destinationTagNumber",
                  ))
                : (this.inputsError.custom = this.$t(
                    "error.destinationTagHexadecimal",
                  )),
              ["BNB"].includes(this.coin.deprecatedParent) &&
                this.inputs.custom.length > w &&
                (this.inputsError.custom = this.$t(
                  "error.destinationTagHexadecimal",
                )),
              "" === this.inputsError.custom
            );
          },
          async validateAmount() {
            ((this.inputsError.amount = ""), (this.isBuyCoin = !1));
            try {
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : "Unstake" === this.sendType && this.checkUnstakeAmount()
                  ? (this.inputsError.amount = this.$t(
                      "error.minimumUnstakingAmount",
                      { amount: 1, ticker: "BNB" },
                    ))
                  : "Unstake" === this.sendType && this.checkUnstakeHold()
                    ? (this.inputsError.amount = this.$t("error.unstakeAll", {
                        amount: 1,
                        ticker: "BNB",
                      }))
                    : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                      ? "Stake" === this.sendType &&
                        Number(this.inputs.amount) < Number(this.minAmount)
                        ? (this.inputsError.amount = this.$t(
                            "error.minimumStakeAmount",
                            { amount: this.minAmount || f, ticker: "BNB" },
                          ))
                        : ["Stake"].includes(this.sendType) &&
                            Number(this.inputs.amount) >
                              Number(this.availableBalance)
                          ? ((this.inputsError.amount = this.$t(
                              "error.insufficientFundsForStaking",
                            )),
                            (this.isBuyCoin = !0))
                          : ["Unstake"].includes(this.sendType) &&
                              Number(this.inputs.amount) >
                                Number(this.availableBalance)
                            ? (this.inputsError.amount =
                                this.$t("error.amountTooBig"))
                            : "Stake" !== this.sendType ||
                              (await this.coin.isAvailableForSend(
                                this.fee.fee,
                              )) ||
                              ((this.inputsError.amount = this.$t(
                                "error.insufficientFunds",
                              )),
                              (this.isBuyCoin = !0))
                      : (this.inputsError.amount = this.$t(
                          "error.incorrectAmount",
                        ));
            } catch (t) {
              return;
            }
            return "" === this.inputsError.amount;
          },
          checkUnstakeHold() {
            const t = new a.default(this.inputs.amount),
              s = new a.default(this.availableBalance),
              i = s.minus(t);
            return !i.isNegative() && !i.eq(0) && i.lt(1);
          },
          checkUnstakeAmount() {
            return new a.default(this.inputs.amount).lt(1);
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
            let t = !1;
            try {
              (this.validateCustom() || (t = !0),
                (await this.validateAmount()) || (t = !0));
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
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
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ("Stake" === this.sendType &&
                ((this.inputs.address = this.stakingValidator.address),
                (this.inputs.custom = "atomicwallet")),
                "Unstake" === this.sendType &&
                  ((this.inputs.address = this.stakingValidator.accountAddress),
                  (this.inputs.custom = "atomicwallet")),
                "Withdrawal" === this.sendType &&
                  (this.inputs.address = this.stakingValidator.accountAddress),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              let i = {
                toValidator: this.domainAddress || this.inputs.address,
                account: this.coin.address,
                amount: this.inputs.amount,
                memo: this.inputs.custom,
              };
              this.amountResult = this.inputs.amount;
              try {
                var t;
                let s,
                  e = {};
                ("Stake" === this.sendType &&
                  (s = await this.coin.createDelegationTransaction(i)),
                  "Unstake" === this.sendType &&
                    (s = await this.coin.createUnDelegationTransaction(i)),
                  (e =
                    "Unstake" === this.sendType
                      ? await this.coin
                          .sendUnDelegationTransaction(s)
                          .catch((t) => {
                            (console.log(t),
                              this.$wallets.logger.error({
                                type: "Send",
                                error: t.toString(),
                                url: "wallet.sendTransaction",
                                currency: this.coin.getUserTicker(),
                              }),
                              (this.isError = !0));
                          })
                      : await this.coin
                          .sendDelegationTransaction(s)
                          .catch((t) => {
                            (console.log(t),
                              this.$wallets.logger.error({
                                type: "Send",
                                error: t.toString(),
                                url: "wallet.sendTransaction",
                                currency: this.coin.getUserTicker(),
                              }),
                              (this.isError = !0));
                          })),
                  this.isError || (this.isSuccess = !0),
                  (this.txid =
                    null === (t = e) || void 0 === t ? void 0 : t.txid),
                  "Stake" === this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (s) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(s),
                  (this.isError = !0));
              }
              ((this.sending = !1),
                this.isSuccess &&
                  setTimeout(() => {
                    this.updateBalanceAndFee();
                  }, g));
            }
          },
          clearInputs() {
            ((this.customGas = []),
              (this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""),
              (this.inputs.address = ""));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, g));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, g));
          },
        },
      };
    },
    5791: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(68),
        r = i(375),
        o = e(i(2842)),
        l = e(i(3362)),
        d = e(i(2969)),
        c = e(i(2922)),
        u = e(i(3074)),
        h = i(4),
        p = i(804),
        v = e(i(798));
      const m = 100,
        g = 100,
        k = 3e4;
      s.default = {
        name: "SendStakeTRX",
        components: {
          Dropdown: l.default,
          Edit: o.default,
          EditAmount: d.default,
          SendCoinResult: c.default,
          AvailableAndFeeAmounts: u.default,
        },
        mixins: [r.SettingsMixin, r.SendStakeMixin],
        props: {
          sendType: { type: String, default: "Stake" },
          staking: { type: Object, default: () => ({}) },
        },
        data: () => ({
          feeLoading: !1,
          inputs: { amount: "", password: "" },
          inputsError: { amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isUpdateCoin: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          errorMessage: "",
          isOnSendAll: !1,
          amountError: "",
          isSendAllClick: !1,
          txid: null,
          availableBalance: "0",
          balanceToStake: "0",
          selectedStakingValidator: "",
          isBuyCoin: !1,
          sendAmount: "",
        }),
        computed: {
          isTRX2() {
            return this.staking.isTRX2;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          isStakeVotes() {
            return "Vote" === this.sendType;
          },
          availableValidators() {
            var t;
            return null === (t = this.coin) || void 0 === t
              ? void 0
              : t.predefinedValidators
                  .map((t) => {
                    let { name: s, reward: i } = t;
                    return { primary: s, additional: i + "%" };
                  })
                  .filter(Boolean);
          },
          stakingValidator() {
            const t = this.selectedStakingValidator
              ? this.getPredefinedValidator(this.selectedStakingValidator)
              : (0, h.randomElementFromArray)(this.coin.predefinedValidators);
            if (!t) {
              var s, i;
              const t = Object.keys(
                  null === (s = this.coin) ||
                    void 0 === s ||
                    null === (i = s.getValidators) ||
                    void 0 === i
                    ? void 0
                    : i.call(s),
                ),
                e = t.find((t) => t === this.selectedStakingValidator);
              return { address: t[e].address, name: e };
            }
            return t;
          },
          stakingProfit() {
            const t = new a.default(this.stakingValidator.reward).dividedBy(g);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          decimals() {
            return this.isStakeVotes ? 0 : this.coin.decimal;
          },
        },
        watch: {
          sending(t) {
            "Claim" === this.sendType &&
              t &&
              setTimeout(() => {
                this.isSuccess || ((this.sending = !1), (this.isError = !0));
              }, k);
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
          "fee.fee"() {
            this.setAvailableBalance();
          },
          "coin.divisibleBalance"() {
            this.setAvailableBalance();
          },
        },
        created() {
          this.setStakingValidator();
        },
        async mounted() {
          (await this.updateAndSetAmount(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          hasRate: p.hasRate,
          getValueFiat: p.getValueFiat,
          formatFinance: v.default,
          setAvailableBalance() {
            try {
              var t, s, i;
              if ("Unstake" === this.sendType || "Vote" === this.sendType)
                this.availableBalance =
                  (null === (t = (s = this.coin).getFrozenVotes) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0";
              else if ("Withdrawal" === this.sendType) {
                var e, a, n;
                this.availableBalance =
                  (null === (e = (a = this.coin).getAvailableWithdrawals) ||
                  void 0 === e ||
                  null === (n = e.call(a)) ||
                  void 0 === n
                    ? void 0
                    : n.toCurrency()) || "0";
              } else if ("Claim" === this.sendType) {
                var r, o, l;
                this.availableBalance =
                  (null === (r = (o = this.coin).getRewards) ||
                  void 0 === r ||
                  null === (l = r.call(o)) ||
                  void 0 === l
                    ? void 0
                    : l.toCurrency()) || "0";
              } else {
                var d, c, u;
                this.availableBalance =
                  (null === (d = (c = this.coin).getAvailableBalance) ||
                  void 0 === d ||
                  null === (u = d.call(c)) ||
                  void 0 === u
                    ? void 0
                    : u.toCurrency()) || "0";
              }
            } catch (h) {
              this.availableBalance = "0";
            }
          },
          async updateAndSetAmount() {
            (await this.updateBalanceAndFee(),
              (this.balanceToStake = this.availableBalance),
              this.setAmount());
          },
          getPredefinedValidator(t) {
            var s;
            return null === (s = this.coin) || void 0 === s
              ? void 0
              : s.predefinedValidators.find(
                  (s) => s.name === t || s.address === t,
                );
          },
          setAmount() {
            "Unstake" === this.sendType || "Claim" === this.sendType
              ? (this.inputs.amount = this.availableBalance)
              : (this.inputs.amount = this.balanceToStake);
          },
          async updateBalanceAndFee() {
            (await this.getFee(), this.setAvailableBalance());
          },
          setAllAvailableBalance() {
            "Claim" !== this.sendType &&
              ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.inputs.amount = String(this.balanceToStake)));
          },
          async availableForFee() {
            ((this.isFeeEnough = !0),
              this.coin instanceof n.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()));
          },
          async getFee() {
            this.feeLoading = !0;
            const t = "1002000",
              s = await this.coin.getFee({
                contract: t,
                address: this.coin.address,
              });
            ((this.fee.fee =
              this.coin instanceof n.Token
                ? this.parent.toCurrencyUnit(s)
                : this.coin.toCurrencyUnit(s)),
              (this.fee.ticker = this.coin.deprecatedParent),
              this.availableForFee(),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = this.getPredefinedValidator(t);
            (s &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              (this.selectedStakingValidator = t),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.closeValidatorsDropdown());
          },
          async validateAmount() {
            ((this.isBuyCoin = !1), (this.inputsError.amount = ""));
            try {
              var t, s, i;
              const r = new RegExp("^[0-9]+(.[0-9]+)?$");
              var e, a, n;
              if ("Claim" === this.sendType)
                return (
                  (null === (e = (a = this.coin).getRewards) ||
                  void 0 === e ||
                  null === (n = e.call(a)) ||
                  void 0 === n
                    ? void 0
                    : n.toCurrency()) || !1
                );
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : r.test(this.inputs.amount)
                  ? "Unstake" === this.sendType &&
                    Number(this.inputs.amount) > Number(this.availableBalance)
                    ? (this.inputsError.amount = this.$t(
                        "error.exceedsUnstakingBalance",
                      ))
                    : (!this.isStakeVotes &&
                          "Stake" === this.sendType &&
                          Number(this.inputs.amount) >
                            Number(
                              (null ===
                                (t = (s = this.coin).getAvailableBalance) ||
                              void 0 === t ||
                              null === (i = t.call(s)) ||
                              void 0 === i
                                ? void 0
                                : i.toCurrency()) || "0",
                            )) ||
                        (this.isStakeVotes &&
                          Number(this.inputs.amount) >
                            Number(this.balanceToStake))
                      ? ((this.inputsError.amount = this.$t(
                          "error.insufficientFundsForStaking",
                        )),
                        (this.isBuyCoin = !0))
                      : Number(this.inputs.amount) < 1 &&
                        (this.inputsError.amount = this.$t(
                          "error.minStakeAmount",
                        ))
                  : (this.inputsError.amount = this.$t(
                      "error.incorrectAmount",
                    ));
            } catch (r) {
              return;
            }
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
            let t = !1;
            try {
              (await this.validateAmount()) || (t = !0);
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
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
          sendLoggerError(t, s) {
            (this.$wallets.logger.error({
              type: "Send",
              error: t.toString(),
              url: s,
              currency: this.coin.getUserTicker(),
            }),
              (this.isError = !0));
          },
          async createTransactions(t, s) {
            let i;
            if ("Unstake" === this.sendType)
              i = await this.coin[t](s).catch((s) => {
                (this.sendLoggerError(s, "wallet." + t), (this.isError = !0));
              });
            else if ("Withdrawal" === this.sendType)
              i = await this.coin[t]().catch((s) => {
                (this.sendLoggerError(s, "wallet." + t), (this.isError = !0));
              });
            else {
              let e;
              if ("Claim" === this.sendType)
                e = await this.coin[t]().catch((s) => {
                  (this.sendLoggerError(s, "wallet." + t), (this.isError = !0));
                });
              else {
                const i = this.stakingValidator.address;
                e = await this.coin[t](i, s).catch((s) => {
                  (this.sendLoggerError(s, "wallet." + t), (this.isError = !0));
                });
              }
              i = await this.coin.sendRawTransaction(e).catch((t) => {
                (this.sendLoggerError(t, "wallet.sendRawTransaction"),
                  (this.isError = !0));
              });
            }
            return i && i.txid;
          },
          async createStakeVotes() {
            try {
              const t = this.availableBalance,
                s = "createVoteTransaction";
              this.txid = await this.createTransactions(s, t);
            } catch (t) {
              (console.log(t), (this.isError = !0));
            }
          },
          async createWithdrawal() {
            try {
              const t = this.availableBalance,
                s = "createWithdrawFrozenTransaction";
              this.txid = await this.createTransactions(s, t);
            } catch (t) {
              (console.log(t), (this.isError = !0));
            }
          },
          async createStakeOrUnstake() {
            try {
              const t = this.coin.toMinimalUnit(this.inputs.amount),
                s =
                  "Unstake" === this.sendType
                    ? "createUnfreezeTransaction"
                    : "createDelegationTransaction";
              ((this.txid = await this.createTransactions(s, t)),
                "Stake" !== this.sendType ||
                  this.isError ||
                  (this.saveSuccessStaking(t),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  })));
            } catch (t) {
              (this.$ga.event("Send Coin", "send tx failed", {
                clientID: this.$ga.customParams.uid,
              }),
                (this.isError = !0));
            }
          },
          async sendCoins() {
            (this.$ga.event("User Actions", "Send Coin", {
              clientID: this.$ga.customParams.uid,
            }),
              (await this.validatePassword()) &&
                ((this.isPasswordShow = !1),
                (this.sending = !0),
                this.isStakeVotes
                  ? await this.createStakeVotes()
                  : ["Stake", "Unstake"].includes(this.sendType)
                    ? await this.createStakeOrUnstake()
                    : "Withdrawal" === this.sendType
                      ? await this.createWithdrawal()
                      : "Claim" === this.sendType && (await this.createClaim()),
                (this.isSuccess = !this.isError),
                (this.sending = !1)));
          },
          async createClaim() {
            try {
              const t = this.availableBalance,
                s = "createWithdrawRewardTransaction";
              this.txid = await this.createTransactions(s, t);
            } catch (t) {
              (console.log(t), (this.isError = !0));
            }
          },
          clearInputs() {
            ((this.inputs.password = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""));
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
              setTimeout(async () => {
                await this.updateAndSetAmount();
              }, m));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(async () => {
                ((this.isSuccess = !1), await this.updateAndSetAmount());
              }, m));
          },
        },
      };
    },
    5792: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = e(i(831)),
        r = i(68),
        o = i(375),
        l = e(i(2842)),
        d = e(i(11610)),
        c = e(i(2922)),
        u = e(i(798));
      const h = 100,
        p = 64;
      s.default = {
        name: "SendStakeXTZ",
        components: {
          Edit: l.default,
          SendCoinResult: c.default,
          LazyImage: d.default,
        },
        mixins: [o.SettingsMixin, o.SendStakeMixin],
        data: () => ({
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          filter: "",
          customGas: [],
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          isCustomShow: !1,
          isFromCustom: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeCoin: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          availableBalance: 0,
          currencies: [],
          selectedStakingValidator: "",
          cacheImage: {},
          isSortASC: !1,
          activeSortField: "staked",
          customBaker: "",
          customBakerError: "",
          customBakerSelected: !1,
        }),
        computed: {
          disableButton() {
            return this.customBakerSelected
              ? this.customBakerError || !this.customBaker
              : !this.stakingValidator;
          },
          availableValidators() {
            const t = this.filter.replace(/ /g, "").toLowerCase();
            let s = this.$staking
              .getStakingInterface(this.coin.ticker)
              .validators.map(
                (t) =>
                  t.address.toLowerCase() !==
                    (this.coin.balances &&
                      this.coin.balances.staking &&
                      this.coin.balances.staking.validator.toLowerCase()) && t,
              )
              .filter((s) =>
                t
                  ? s && s.name.replace(/ /g, "").toLowerCase().indexOf(t) >= 0
                  : s,
              );
            return (
              (s = s.map((t) => {
                const s = Math.ceil(t.stakingBalance),
                  i = Math.ceil(t.stakingCapacity - t.stakingBalance);
                return { staked: s, capacity: i, ...t };
              })),
              this.sortItems(s)
            );
          },
          stakingValidator() {
            if (
              this.customBakerSelected &&
              this.customBaker &&
              !this.customBakerError
            )
              return { address: this.customBaker, name: this.customBaker };
            const t =
              this.selectedStakingValidator &&
              this.$staking
                .getStakingInterface(this.coin.ticker)
                .getValidator(this.selectedStakingValidator);
            return t;
          },
          stakingProfit() {
            const t = new a.default(this.stakingValidator.estimatedRoi),
              s = this.availableBalance;
            return t.multipliedBy(s);
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.deprecatedParent,
            );
          },
        },
        watch: {
          async customBaker(t) {
            const s = await this.coin.validateAddress(t);
            if (!s)
              return void (this.customBakerError = this.$t(
                "error.invalidBakerAddress",
              ));
            const i = await this.coin.node.isValidator(t);
            this.customBakerError = i ? "" : this.$t("error.notBakerAddress");
          },
          "fee.fee"() {
            const t = this.coin.toCurrencyUnit(
              new this.coin.BN(this.coin.balance)
                .sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee)))
                .toString(),
            );
            this.availableBalance = Number(t) > 0 ? t : "0";
          },
          "coin.divisibleBalance"() {
            const t = this.coin.toCurrencyUnit(
              new this.coin.BN(this.coin.balance)
                .sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee)))
                .toString(),
            );
            this.availableBalance = Number(t) > 0 ? t : "0";
          },
        },
        async mounted() {
          (await this.updateBalanceAndFee(),
            (this.inputs.amount = this.availableBalance),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          formatFinance: u.default,
          sortByField(t) {
            this.activeSortField === t
              ? (this.isSortASC = !this.isSortASC)
              : (this.activeSortField = t);
          },
          sortItems(t) {
            return this.isSortASC
              ? (0, n.default)(t).asc((t) => Number(t[this.activeSortField]))
              : (0, n.default)(t).desc((t) => Number(t[this.activeSortField]));
          },
          saveCache(t, s) {
            Object.prototype.hasOwnProperty.call(this.cacheImage, s) &&
              (this.cacheImage[s] = t);
          },
          async updateBalanceAndFee() {
            await this.getFee();
            try {
              const t = this.coin.toCurrencyUnit(
                new this.coin.BN(this.coin.balance)
                  .sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee)))
                  .toString(),
              );
              this.availableBalance = Number(t) > 0 ? t : "0";
            } catch (t) {
              this.availableBalance = "0";
            }
          },
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.inputs.amount = this.availableBalance || "0"));
          },
          setCustomGas(t) {
            this.customGas = t;
          },
          async changeFee(t) {
            (this.isOnSendAll &&
              (this.inputs.amount = await this.coin.availableBalance(
                this.coin.toMinimalUnit(t),
              )),
              (this.fee.fee = t.toString() || "0"),
              this.availableForFee());
          },
          async availableForFee() {
            ((this.isFeeEnough = !0),
              this.coin instanceof r.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()));
          },
          async getFee() {
            const t = await this.coin.getFee(0, !0);
            ("ONT" === this.coin.ticker
              ? (this.fee.fee = t)
              : (this.fee.fee =
                  this.coin instanceof r.Token
                    ? this.coin.deprecatedParent.toCurrencyUnit(t)
                    : this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.feeTicker()),
              this.availableForFee());
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            let { name: s } = void 0 === t ? {} : t;
            if (((this.customBakerSelected = !s), this.customBakerSelected))
              return (
                (this.selectedStakingValidator = null),
                localStorage.setItem(
                  `selected::${this.coin.ticker}::validator`,
                  "custom",
                ),
                void this.$bus.$emit(
                  `select::${this.coin.ticker}::validator`,
                  "custom",
                )
              );
            const i = this.$staking
              .getStakingInterface(this.coin.ticker)
              .getValidator(s);
            (i &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                s,
              ),
              (this.selectedStakingValidator = s),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, s));
          },
          selectCustomValidator() {
            (this.selectValidator(),
              (this.isFromCustom = !0),
              (this.isCustomShow = !1),
              this.showPasswordForm());
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.deprecatedParent),
              s = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : s
                  ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(
                      this.coin.ticker,
                    ) &&
                    t === this.inputs.address &&
                    (this.inputsError.address = this.$t(
                      "error.cantSendToOwnAddress",
                    ))
                  : (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof s && (this.domainAddress = s),
              "" === this.inputsError.address
            );
          },
          validateCustom() {
            return (
              (this.inputsError.custom = ""),
              "XMR" !== this.coin.getUserTicker() ||
              /^([A-z0-9]{64})?$/.test(this.inputs.custom)
                ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM"].includes(
                    this.coin.deprecatedParent,
                  ) ||
                  /^[0-9]*$/.test(this.inputs.custom) ||
                  (this.inputsError.custom = this.$t(
                    "error.destinationTagNumber",
                  ))
                : (this.inputsError.custom = this.$t(
                    "error.destinationTagHexadecimal",
                  )),
              ["BNB"].includes(this.coin.deprecatedParent) &&
                this.inputs.custom.length > p &&
                (this.inputsError.custom = this.$t("error.maximumMemoLength")),
              "" === this.inputsError.custom
            );
          },
          async validateAmount() {
            return (
              (this.inputsError.amount = ""),
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : this.coin.balance
                  ? /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                    ? Number(this.inputs.amount) >
                      Number(this.coin.balances.available)
                      ? (this.inputsError.amount = this.$t(
                          "error.insufficientFundsForStaking",
                        ))
                      : (await this.coin.isAvailableForSend(this.fee.fee)) ||
                        (this.inputsError.amount = this.$t(
                          "error.insufficientFunds",
                        ))
                    : (this.inputsError.amount = this.$t(
                        "error.incorrectAmount",
                      ))
                  : (this.inputsError.amount = this.$t(
                      "error.blockExplorerUnavailable",
                    )),
              "" === this.inputsError.amount
            );
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
            let t = !1;
            try {
              (this.validateCustom() || (t = !0),
                (await this.validateAmount()) || (t = !0));
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          feeTicker() {
            return this.coin.deprecatedParent;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          showCustomForm() {
            ((this.customBakerSelected = !0),
              (this.isCustomShow = !this.isCustomShow));
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
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.inputs.address = this.stakingValidator.address),
                (this.inputs.custom = ""),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              let s = [
                this.domainAddress || this.inputs.address,
                this.coin.toMinimalUnit(this.inputs.amount),
                this.inputs.custom,
              ];
              try {
                const t = await this.coin
                    .createDelegationTransaction(...s)
                    .catch((t) => {
                      (console.log(t),
                        this.$wallets.logger.error({
                          type: "Send",
                          error: t.toString(),
                          url: "wallet.createDelegationTransaction",
                          currency: this.coin.getUserTicker(),
                        }),
                        (this.isError = !0));
                    }),
                  i = await this.coin.sendTransaction(t).catch((t) => {
                    (console.log(t),
                      this.$wallets.logger.error({
                        type: "Send",
                        error: t.toString(),
                        url: "wallet.sendTransaction",
                        currency: this.coin.getUserTicker(),
                      }),
                      (this.isError = !0));
                  });
                ((this.txid = i.txid),
                  (this.isSuccess = !0),
                  this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(t),
                  (this.isError = !0));
              }
              this.sending = !1;
            }
          },
          clearInputs() {
            ((this.customGas = []),
              (this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = this.availableBalance));
          },
          backFromCustom() {
            ((this.customBakerSelected = !1),
              (this.customBaker = ""),
              (this.customBakerError = ""),
              (this.isCustomShow = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""),
              this.isFromCustom &&
                ((this.isFromCustom = !1), (this.isCustomShow = !0)));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, h));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, h));
          },
        },
      };
    },
    5794: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(60),
        r = i(68),
        o = i(375),
        l = i(804),
        d = e(i(2842)),
        c = e(i(3362)),
        u = e(i(2969)),
        h = e(i(2922)),
        p = e(i(3074)),
        v = e(i(5795)),
        m = e(i(798));
      const g = 4,
        k = 100,
        w = 100,
        f = 64,
        _ = 10;
      s.default = {
        name: "SendStakeZIL",
        components: {
          Dropdown: c.default,
          Edit: d.default,
          EditAmount: u.default,
          SendCoinResult: h.default,
          AvailableAndFeeAmounts: p.default,
          NumericRange: v.default,
        },
        mixins: [o.SettingsMixin, o.SendStakeMixin],
        props: { sendType: { type: String, default: "Send" } },
        data: () => ({
          feeLoading: !1,
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          customGas: [],
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isBuffered: !1,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          currencies: [],
          selectedStakingValidator: null,
          isBuyCoin: !1,
          availableValidators: [],
          stakingValidator: {},
        }),
        computed: {
          ...(0, n.mapGetters)(["stakingSettings"]),
          gasRange() {
            var t;
            return (
              (null === (t = this.coin) || void 0 === t
                ? void 0
                : t.getGasRange()) || {}
            );
          },
          sendText() {
            return "Withdrawal" === this.sendType
              ? this.$t("sendType.Withdraw")
              : this.$t("sendType." + this.sendType);
          },
          isCustomFee() {
            return ["Claim", "Unstake"].includes(this.sendType);
          },
          rewardAmount() {
            const t =
              this.coin.balances.rewards.validators &&
              Object.keys(this.coin.balances.rewards.validators);
            if (!t) return "0";
            const s =
              this.coin.balances.rewards.validators[
                this.stakingValidator.address
              ];
            return this.coin.toCurrencyUnit(s);
          },
          stakingProfit() {
            if ("Send" === this.sendType) return;
            const t = new a.default(this.stakingValidator.reward).dividedBy(w);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          sendTypeVerb() {
            var t, s;
            return (
              {
                unstake: "Unstake",
                claim: "Claiming",
                withdrawal: "Withdrawing",
              }[
                null === (t = this.sendType) ||
                void 0 === t ||
                null === (s = t.toLowerCase) ||
                void 0 === s
                  ? void 0
                  : s.call(t)
              ] || "Stake"
            );
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.deprecatedParent,
            );
          },
          defaultValidator() {
            var t, s;
            const i =
                this.selectedStakingValidator ||
                this.stakingSettings.find((t) => {
                  let { ticker: s } = t;
                  return this.coin.ticker === s;
                }).defaultValidator ||
                this.stakingSettings[0].name ||
                "",
              e =
                i ||
                localStorage.getItem(
                  `selected::${this.coin.ticker}::validator`,
                ),
              a = this.availableValidators.find((t) => {
                let { primary: s } = t;
                return s === e;
              });
            return (
              (a && a.primary) ||
              (null === (t = this.availableValidators) ||
              void 0 === t ||
              null === (s = t[0]) ||
              void 0 === s
                ? void 0
                : s.primary) ||
              ""
            );
          },
          availableBalance() {
            var t;
            if (!this.coin || !this.coin.balances) return "0";
            const s =
              (null ===
                (t = this.$staking
                  .getStakingInterface(this.coin.ticker)
                  .validators.find((t) => t.name === this.defaultValidator)) ||
              void 0 === t
                ? void 0
                : t.address) || "";
            if ("Unstake" === this.sendType)
              try {
                const { validators: t } = this.coin.balances.staking,
                  i = t[this.defaultValidator] || t[s];
                return this.coin.toCurrencyUnit(i.amount) || "0";
              } catch (i) {
                return "0";
              }
            return "Claim" === this.sendType || "Withdrawal" === this.sendType
              ? this.coin.balances.available || "0"
              : this.coin.balances.availableForStake || "0";
          },
          availableWithdrawal() {
            var t, s;
            const { total: i = 0 } =
              (null === (t = this.coin.balances) ||
              void 0 === t ||
              null === (s = t.withdrawals) ||
              void 0 === s
                ? void 0
                : s.availableWithdrawal) || {};
            return i && this.coin.toCurrencyUnit(i);
          },
        },
        watch: {
          "inputs.address"() {
            ((this.domainAddress = ""),
              this.isSuccess || this.isUpdateCoin || this.validateAddress());
          },
          "inputs.custom"() {
            this.isSuccess || this.isUpdateCoin || this.validateCustom();
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
          customGas() {
            (this.getFee(),
              "Stake" === this.sendType &&
                (this.inputs.amount = String(this.availableBalance || 0)),
              "Claim" === this.sendType &&
                (this.inputs.amount = this.rewardAmount));
          },
          selectedStakingValidator() {
            ("Unstake" === this.sendType && this.checkBuffered(),
              "Claim" === this.sendType && this.setAllAvailableBalance());
          },
        },
        async mounted() {
          (await this.setValidators(),
            await this.getFee(),
            "Stake" === this.sendType &&
              (this.inputs.amount = String(this.availableBalance || 0)),
            "Unstake" === this.sendType &&
              (this.inputs.amount = String(
                Math.max(+this.availableBalance - _, 0),
              )),
            "Claim" === this.sendType &&
              (this.inputs.amount = this.rewardAmount),
            "Withdrawal" === this.sendType &&
              (this.inputs.amount = "" + this.availableWithdrawal),
            (this.customGas = this.coin.getGasLimit(
              this.sendType.toLowerCase(),
            )),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: l.getValueFiat,
          formatFinance: m.default,
          setActiveValidator() {
            var t, s, i, e;
            const a =
                (null === (t = this.coin.balances) ||
                void 0 === t ||
                null === (s = t.staking) ||
                void 0 === s
                  ? void 0
                  : s.validators) || [],
              n = this.$staking.getStakingInterface(this.coin.ticker),
              r = this.defaultValidator
                ? n.getValidator(this.defaultValidator)
                : n.validators[0],
              o = Object.keys(a).find((t) => t === (r && r.address)),
              l = {
                address:
                  (null === (i = a[o]) || void 0 === i ? void 0 : i.address) ||
                  "",
                name: o || "",
                buffered:
                  (null === (e = a[o]) || void 0 === e ? void 0 : e.buffered) ||
                  "",
              };
            r
              ? ((r.buffered = l.buffered), (this.stakingValidator = r))
              : (this.stakingValidator = l);
          },
          async setValidators() {
            var t, s;
            this.availableValidators = [];
            const i = this.$staking.getStakingInterface(this.coin.ticker),
              e =
                (null === (t = this.coin.balances) ||
                void 0 === t ||
                null === (s = t.staking) ||
                void 0 === s
                  ? void 0
                  : s.validators) || [];
            if ("Unstake" === this.sendType) {
              const t = (t) => {
                  const s = i.getValidator(t),
                    e = i.validators.find((s) => s.address === t),
                    a = (s && s.name) || (e && e.name);
                  return a;
                },
                s = Object.entries(e).filter((s) => t(s[0]));
              this.availableValidators = s.map((s) => ({
                primary: t(s[0]),
                additional: `${(0, l.numberToFixed)(this.coin.toCurrencyUnit(s[1].amount), g)} ${this.coin.ticker}`,
              }));
            } else
              "Claim" === this.sendType
                ? (this.availableValidators = i.validators
                    .map((t) => {
                      let { name: s, address: i } = t;
                      return {
                        primary: s,
                        additional: this.coin.toCurrencyUnit(this.getReward(i)),
                      };
                    })
                    .filter((t) => {
                      let { additional: s } = t;
                      return Number(s);
                    })
                    .filter(Boolean))
                : (this.availableValidators = i.validators
                    .map((t) => {
                      let { name: s } = t;
                      return { primary: s };
                    })
                    .filter(Boolean));
            this.setActiveValidator();
          },
          checkBuffered() {
            this.isBuffered =
              this.stakingValidator.buffered && "Unstake" === this.sendType;
          },
          setDefaultFee() {
            ((this.customGas = this.coin.getGasLimit(
              this.sendType.toLowerCase(),
            )),
              this.$bus.$emit("numeric::range::default"));
          },
          getReward(t) {
            return (
              (this.coin.balances.rewards.validators &&
                this.coin.balances.rewards.validators[t]) ||
              "0"
            );
          },
          isValidMinStakeRemaining() {
            const t = new this.coin.BN(
                this.coin.toMinimalUnit(this.inputs.amount),
              ),
              s = new this.coin.BN(this.coin.toMinimalUnit(_));
            return new this.coin.BN(this.coin.balances.staking.total)
              .sub(t)
              .gte(s);
          },
          toggleCustomFee() {
            this.isRate = !this.isRate;
          },
          setAllAvailableBalance() {
            "Claim" !== this.sendType
              ? ((this.isSendAllClick = !this.isSendAllClick),
                (this.isOnSendAll = !0),
                "Unstake" !== this.sendType
                  ? (this.inputs.amount = String(this.availableBalance) || "0")
                  : (this.inputs.amount = String(
                      Math.max(+this.availableBalance - _, 0),
                    )))
              : (this.inputs.amount = this.rewardAmount);
          },
          setCustomGas(t) {
            t != this.customGas && (this.customGas = t);
          },
          async availableForFee() {
            ((this.isFeeEnough = !0),
              this.coin instanceof r.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()));
            const { available: t } = this.coin.balances;
            this.isFeeEnough = Number(t) >= Number(this.fee.fee);
          },
          async getFee() {
            this.feeLoading = !0;
            let t = this.customGas;
            const s = await this.coin.getFee({ gasLimit: t || 1 });
            ("ONT" === this.coin.ticker
              ? (this.fee.fee = s)
              : (this.fee.fee =
                  this.coin instanceof r.Token
                    ? this.parent.toCurrencyUnit(s)
                    : this.coin.toCurrencyUnit(s)),
              (this.fee.ticker = this.feeTicker()),
              this.availableForFee(),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = this.$staking
              .getStakingInterface(this.coin.ticker)
              .getValidator(t);
            (s &&
              "Stake" === this.sendType &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              (this.selectedStakingValidator = t),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.setActiveValidator(),
              this.closeValidatorsDropdown(),
              "Unstake" === this.sendType &&
                (this.inputs.amount = String(this.availableBalance || 0)));
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.deprecatedParent),
              s = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : s
                  ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(
                      this.coin.ticker,
                    ) &&
                    t === this.inputs.address &&
                    (this.inputsError.address = this.$t(
                      "error.cantSendToOwnAddress",
                    ))
                  : (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof s && (this.domainAddress = s),
              "" === this.inputsError.address
            );
          },
          validateCustom() {
            return (
              (this.inputsError.custom = ""),
              "XMR" !== this.coin.getUserTicker() ||
              /^([A-z0-9]{64})?$/.test(this.inputs.custom)
                ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND"].includes(
                    this.parent.getUserTicker(),
                  ) ||
                  /^[0-9]*$/.test(this.inputs.custom) ||
                  (this.inputsError.custom = this.$t(
                    "error.destinationTagNumber",
                  ))
                : (this.inputsError.custom = this.$t(
                    "error.destinationTagHexadecimal",
                  )),
              ["BNB"].includes(this.parent.getUserTicker()) &&
                this.inputs.custom.length > f &&
                (this.inputsError.custom = this.$t("error.maximumMemoLength")),
              "" === this.inputsError.custom
            );
          },
          async validateAmount() {
            if (
              ((this.isBuyCoin = !1),
              (this.inputsError.amount = ""),
              "Claim" === this.sendType)
            )
              return "" === this.inputsError.amount;
            try {
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : this.coin.balance &&
                  (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                    ? "Unstake" !== this.sendType &&
                      Number(this.inputs.amount) < _
                      ? (this.inputsError.amount = this.$t(
                          "error.minimumStakeAmount",
                          { amount: _, ticker: "ZIL" },
                        ))
                      : "Unstake" === this.sendType &&
                          Number(this.inputs.amount) >
                            Number(this.coin.balances.staking)
                        ? (this.inputsError.amount = this.$t(
                            "error.exceedsUnstakingBalance",
                          ))
                        : "Stake" === this.sendType &&
                            Number(this.inputs.amount) >
                              Number(this.coin.balances.availableForStake)
                          ? ((this.inputsError.amount = this.$t(
                              "error.insufficientFundsForStaking",
                            )),
                            (this.isBuyCoin = !0))
                          : "Unstake" === this.sendType ||
                              (await this.coin.isAvailableForSend(this.fee.fee))
                            ? "Unstake" !== this.sendType ||
                              this.isValidMinStakeRemaining() ||
                              (this.inputsError.amount = this.$t(
                                "error.minimumRemainingStakedAmount",
                              ))
                            : ((this.inputsError.amount = this.$t(
                                "error.insufficientFunds",
                              )),
                              (this.isBuyCoin = !0))
                    : (this.inputsError.amount = this.$t(
                        "error.incorrectAmount",
                      )));
            } catch (t) {
              return;
            }
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
            let t = !1;
            try {
              (this.validateCustom() || (t = !0),
                (await this.validateAmount()) || (t = !0));
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          feeTicker() {
            return this.coin.deprecatedParent;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          async showPasswordForm() {
            ((this.initSend = !0),
              this.checkBuffered(),
              (await this.validateAll()) || !this.isFeeEnough || this.isBuffered
                ? (this.initSend = !1)
                : ((this.isPasswordShow = !0),
                  (this.initSend = !1),
                  setTimeout(() => {
                    this.$refs.confirmPassword.setFocus();
                  }, 300)));
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              this.validatePassword())
            ) {
              ("Stake" === this.sendType &&
                ((this.inputs.address = this.stakingValidator.address),
                (this.inputs.custom = "atomicwallet")),
                "Unstake" === this.sendType &&
                  ((this.inputs.address = this.stakingValidator.address),
                  (this.inputs.custom = "atomicwallet")),
                "Claim" === this.sendType &&
                  (this.inputs.address = this.stakingValidator.address),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              let s = {
                validator: this.domainAddress || this.inputs.address,
                amount: this.coin.toMinimalUnit(this.inputs.amount),
                memo: this.inputs.custom,
                gasLimit: this.customGas,
              };
              try {
                let t;
                ("Stake" === this.sendType &&
                  (t = await this.coin
                    .createDelegationTransaction(s)
                    .catch((t) => {
                      (console.log(t),
                        this.$wallets.logger.error({
                          type: "Send",
                          error: t.toString(),
                          url: "wallet.createDelegationTransaction",
                          currency: this.coin.getUserTicker(),
                        }),
                        (this.isError = !0));
                    })),
                  "Unstake" === this.sendType &&
                    (t = await this.coin
                      .createUnDelegationTransaction(s)
                      .catch((t) => {
                        (console.log(t),
                          this.$wallets.logger.error({
                            type: "Send",
                            error: t.toString(),
                            url: "wallet.createUnbondingDelegationTransaction",
                            currency: this.coin.getUserTicker(),
                          }),
                          (this.isError = !0));
                      })),
                  "Claim" === this.sendType &&
                    (t = await this.coin
                      .createClaimTransaction(s)
                      .catch((t) => {
                        (console.log(t),
                          this.$wallets.logger.error({
                            type: "Send",
                            error: t.toString(),
                            url: "wallet.createUnbondingDelegationTransaction",
                            currency: this.coin.getUserTicker(),
                          }),
                          (this.isError = !0));
                      })),
                  "Withdrawal" === this.sendType &&
                    (t = await this.coin.completeWithdrawal().catch((t) => {
                      (console.log(t),
                        this.$wallets.logger.error({
                          type: "Send",
                          error: t.toString(),
                          url: "wallet.completeWithdrawal",
                          currency: this.coin.getUserTicker(),
                        }),
                        (this.isError = !0));
                    })));
                const i = await this.coin.sendTransaction(t).catch((t) => {
                  (console.log(t),
                    this.$wallets.logger.error({
                      type: "Send",
                      error: t.toString(),
                      url: "wallet.sendTransaction",
                      currency: this.coin.getUserTicker(),
                    }),
                    (this.isError = !0));
                });
                ((this.txid = i.txid),
                  (this.isSuccess = !0),
                  "Stake" === this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(t),
                  (this.isError = !0));
              }
              this.sending = !1;
            }
          },
          clearInputs() {
            ((this.customGas = []),
              (this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""),
              (this.inputs.address = ""));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.getFee();
              }, k));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.getFee());
              }, k));
          },
        },
      };
    },
    5798: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = i(60),
        n = i(68),
        r = i(375),
        o = e(i(2842)),
        l = e(i(2969)),
        d = e(i(2922)),
        c = e(i(3074)),
        u = e(i(798));
      const h = 100;
      s.default = {
        name: "SendStakeETH",
        components: {
          Edit: o.default,
          EditAmount: l.default,
          SendCoinResult: d.default,
          AvailableAndFeeAmounts: c.default,
        },
        mixins: [r.SettingsMixin, r.SendStakeMixin],
        props: {
          sendType: { type: String, default: "Send" },
          coin: { type: Object, default: () => ({}) },
        },
        data: () => ({
          feeLoading: !1,
          inputs: { amount: "", password: "" },
          inputsError: { amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isUpdateCoin: !1,
          isError: !1,
          isSuccess: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          sendAmount: "",
        }),
        computed: {
          ...(0, a.mapGetters)(["stakingSettings"]),
          icon() {
            return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          sendTypeVerb() {
            return this.$t("title.stake");
          },
          availableBalance() {
            var t, s, i;
            return (
              (null === (t = (s = this.coin).getAvailableBalance) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0"
            );
          },
          stETH() {
            return Object.values(this.coin.tokens).find((t) => {
              let { ticker: s } = t;
              return "stETH" === s;
            });
          },
        },
        watch: {
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
        },
        async mounted() {
          (await this.updateBalanceAndFee(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          formatFinance: u.default,
          async updateBalanceAndFee() {
            ((this.feeLoading = !0),
              await this.coin.getInfo({ ignoreCache: !0 }),
              await this.getFee(),
              this.setAllAvailableBalance());
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.coin.getFee({
              gasLimit: this.coin.stakingGasLimit,
            });
            ((this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.feeTicker),
              (this.feeLoading = !1));
          },
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.inputs.amount = String(this.availableBalance) || "0"));
          },
          async availableForFee() {
            ((this.isFeeEnough = !0),
              this.coin instanceof n.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()),
              (this.isFeeEnough =
                Number(this.availableBalance) >= Number(this.fee.fee)));
          },
          async validateAmount() {
            this.inputsError.amount = "";
            try {
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                  ? "Stake" === this.sendType &&
                    Number(this.inputs.amount) > Number(this.availableBalance)
                    ? (this.inputsError.amount = this.$t(
                        "error.insufficientFundsForStaking",
                      ))
                    : "Stake" !== this.sendType ||
                      (await this.coin.isAvailableForSend(this.fee.fee)) ||
                      (this.inputsError.amount = this.$t(
                        "error.insufficientFunds",
                      ))
                  : (this.inputsError.amount = this.$t(
                      "error.incorrectAmount",
                    ));
            } catch (t) {
              return !1;
            }
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
            let t = !1;
            const s = !(await this.validateAmount());
            try {
              s && (t = !0);
            } catch (i) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          async showPasswordForm() {
            this.initSend = !0;
            const t = !(await this.validateAll());
            t && this.isFeeEnough
              ? ((this.isPasswordShow = !0),
                (this.initSend = !1),
                setTimeout(() => {
                  this.$refs.confirmPassword.setFocus();
                }, h))
              : (this.initSend = !1);
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isPasswordShow = !1),
                (this.sending = !0),
                (this.sendAmount = this.inputs.amount));
              try {
                const t = {
                    amount: this.coin.toMinimalUnit(this.inputs.amount),
                    address: this.stETH.contract,
                    gasLimit: this.coin.stakingGasLimit,
                  },
                  s = await this.coin
                    .createDelegationTransaction(t)
                    .catch((t) => {
                      (this.$wallets.logger.error({
                        type: "Stake",
                        error: t.toString(),
                        url: "wallet.createDelegationTransaction",
                        currency: this.coin.getUserTicker(),
                      }),
                        (this.isError = !0));
                    }),
                  i = await this.coin.sendTransaction(s).catch((t) => {
                    (this.$wallets.logger.error({
                      type: "Stake",
                      error: t.toString(),
                      url: "wallet.sendTransaction",
                      currency: this.coin.getUserTicker(),
                    }),
                      (this.isError = !0));
                  });
                ((this.txid = i.txid),
                  (this.isSuccess = !0),
                  "Stake" === this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(t),
                  (this.isError = !0));
              }
              ((this.sending = !1),
                this.isSuccess &&
                  setTimeout(() => {
                    this.updateBalanceAndFee();
                  }, h));
            }
          },
          clearInputs() {
            ((this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""),
              (this.inputs.address = ""));
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
              }, h));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, h));
          },
        },
      };
    },
    5799: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(60),
        r = i(68),
        o = i(375),
        l = i(804),
        d = e(i(2842)),
        c = e(i(3362)),
        u = e(i(2969)),
        h = e(i(2922)),
        p = e(i(3074)),
        v = i(4),
        m = e(i(798));
      const g = "1",
        k = 4,
        w = 100,
        f = 100,
        _ = 64;
      s.default = {
        name: "SendStakeEGLD",
        components: {
          Dropdown: c.default,
          Edit: d.default,
          EditAmount: u.default,
          SendCoinResult: h.default,
          AvailableAndFeeAmounts: p.default,
        },
        mixins: [o.SettingsMixin, o.SendStakeMixin],
        props: { sendType: { type: String, default: "Send" } },
        data: () => ({
          feeLoading: !1,
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isBuffered: !1,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          currencies: [],
          selectedStakingValidator: null,
          isBuyCoin: !1,
          minAmount: g,
        }),
        computed: {
          ...(0, n.mapGetters)(["stakingSettings"]),
          sendText() {
            return "Withdrawal" === this.sendType
              ? this.$t("sendType.Withdraw")
              : this.$t("sendType." + this.sendType);
          },
          availableValidators() {
            var t, s;
            if ("Send" === this.sendType) return;
            const i = (t) => {
              const s = this.getPredefinedValidator(t),
                i = this.getPredefinedValidator(t),
                e = (s && s.name) || (i && i.name);
              return e;
            };
            if ("Unstake" === this.sendType) {
              var e, a;
              const t = Object.entries(
                null === (e = this.coin) ||
                  void 0 === e ||
                  null === (a = e.getValidators) ||
                  void 0 === a
                  ? void 0
                  : a.call(e),
              ).filter((t) => i(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].staked.toCurrency()) <= 0))
                    return {
                      primary: i(t[0]),
                      additional: `${(0, l.numberToFixed)(t[1].staked.toCurrency(), k)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            if ("Withdrawal" === this.sendType) {
              var n, r;
              const t = Object.entries(
                null === (n = this.coin) ||
                  void 0 === n ||
                  null === (r = n.getValidators) ||
                  void 0 === r
                  ? void 0
                  : r.call(n),
              ).filter((t) => i(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].availableWithdrawals.toCurrency()) <= 0))
                    return {
                      primary: i(t[0]),
                      additional: `${(0, l.numberToFixed)(t[1].availableWithdrawals.toCurrency(), k)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            if ("Claim" === this.sendType) {
              var o, d;
              const t = Object.entries(
                null === (o = this.coin) ||
                  void 0 === o ||
                  null === (d = o.getValidators) ||
                  void 0 === d
                  ? void 0
                  : d.call(o),
              ).filter((t) => i(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].rewards.toCurrency()) <= 0))
                    return {
                      primary: i(t[0]),
                      additional: `${(0, l.numberToFixed)(t[1].rewards.toCurrency(), k)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            return (
              (null === (t = this.coin) ||
              void 0 === t ||
              null === (s = t.predefinedValidators) ||
              void 0 === s
                ? void 0
                : s
                    .map((t) => {
                      let { name: s, reward: i } = t;
                      return { primary: s, additional: i + "%" };
                    })
                    .filter(Boolean)) || []
            );
          },
          stakingValidator() {
            var t, s, i;
            if ("Send" === this.sendType) return;
            const e =
                this.selectedStakingValidator || this.defaultValidator
                  ? this.getPredefinedValidator(
                      this.selectedStakingValidator || this.defaultValidator,
                    )
                  : (0, v.randomElementFromArray)(
                      (null === (t = this.coin) || void 0 === t
                        ? void 0
                        : t.predefinedValidators) || [],
                    ),
              a =
                (null === (s = this.coin) ||
                void 0 === s ||
                null === (i = s.getValidators) ||
                void 0 === i
                  ? void 0
                  : i.call(s)) || {},
              n = Object.keys(a).find((t) => t === (e && e.address));
            var r;
            return (
              e || {
                address:
                  (null === (r = a[n]) || void 0 === r ? void 0 : r.address) ||
                  "",
                name: n || "",
              }
            );
          },
          stakingProfit() {
            if ("Send" === this.sendType) return;
            const t = new a.default(this.stakingValidator.reward).dividedBy(f);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          sendTypeVerb() {
            return this.sendType
              ? this.$t("sendProcess." + this.sendType)
              : this.$t("sendType.Stake");
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.deprecatedParent,
            );
          },
          defaultValidator() {
            var t;
            return (
              (null ===
                (t = (0, v.randomElementFromArray)(this.availableValidators)) ||
              void 0 === t
                ? void 0
                : t.primary) || ""
            );
          },
          availableBalance() {
            var t, s, i;
            if (!this.coin || !this.coin.balances) return "0";
            const e = this.getPredefinedValidator(
              this.selectedStakingValidator || this.defaultValidator,
            ).address;
            if ("Unstake" === this.sendType)
              try {
                var a, n;
                const t =
                    null === (a = this.coin) ||
                    void 0 === a ||
                    null === (n = a.getValidators) ||
                    void 0 === n
                      ? void 0
                      : n.call(a),
                  s = t[e];
                return s.staked.toCurrency();
              } catch (l) {
                return "0";
              }
            if ("Withdrawal" === this.sendType)
              try {
                var r, o;
                const t =
                    null === (r = this.coin) ||
                    void 0 === r ||
                    null === (o = r.getValidators) ||
                    void 0 === o
                      ? void 0
                      : o.call(r),
                  s = t[e];
                return s.availableWithdrawals.toCurrency();
              } catch (l) {
                return "0";
              }
            return (
              (null === (t = (s = this.coin).getAvailableBalance) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0"
            );
          },
          availableWithdrawal() {
            var t, s, i;
            return (
              (null === (t = (s = this.coin).getAvailableWithdrawals) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0"
            );
          },
        },
        watch: {
          "inputs.address"() {
            ((this.domainAddress = ""),
              this.isSuccess || this.isUpdateCoin || this.validateAddress());
          },
          "inputs.custom"() {
            this.isSuccess || this.isUpdateCoin || this.validateCustom();
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
          selectedStakingValidator() {
            "Claim" === this.sendType && this.setAllAvailableBalance();
          },
        },
        async mounted() {
          (await this.getFee(),
            this.setAllAvailableBalance(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: l.getValueFiat,
          formatFinance: m.default,
          setAllAvailableBalance() {
            var t, s;
            ((this.isSendAllClick = !this.isSendAllClick),
            (this.isOnSendAll = !0),
            "Claim" === this.sendType)
              ? (this.inputs.amount =
                  null === (t = this.coin) ||
                  void 0 === t ||
                  null === (s = t.getValidators) ||
                  void 0 === s
                    ? void 0
                    : s
                        .call(t)
                        [this.stakingValidator.address].rewards.toCurrency())
              : (this.inputs.amount = String(this.availableBalance) || "0");
          },
          getPredefinedValidator(t) {
            var s, i;
            return (
              (null === (s = this.coin) ||
              void 0 === s ||
              null === (i = s.predefinedValidators) ||
              void 0 === i
                ? void 0
                : i.find((s) => s.name === t || s.address === t)) || {
                address: "",
                name: "",
              }
            );
          },
          async availableForFee() {
            var t, s, i;
            ((this.isFeeEnough = !0),
              this.coin instanceof r.Token &&
                (this.isFeeEnough = await this.coin.isAvailableForFee()));
            const e =
              (null === (t = (s = this.coin).getAvailableBalance) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0";
            this.isFeeEnough = Number(e) >= Number(this.fee.fee);
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.coin.getFee({
              gasLimit: this.coin.stakingGasLimit,
            });
            ((this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.feeTicker()),
              this.availableForFee(),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = this.getPredefinedValidator(t);
            (s &&
              "Stake" === this.sendType &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              (this.selectedStakingValidator = t),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.closeValidatorsDropdown(),
              ["Unstake", "Withdrawal"].includes(this.sendType) &&
                (this.inputs.amount = String(this.availableBalance || 0)));
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.deprecatedParent),
              s = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : s
                  ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(
                      this.coin.ticker,
                    ) &&
                    t === this.inputs.address &&
                    (this.inputsError.address = this.$t(
                      "error.cantSendToOwnAddress",
                    ))
                  : (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof s && (this.domainAddress = s),
              "" === this.inputsError.address
            );
          },
          validateCustom() {
            return (
              (this.inputsError.custom = ""),
              "XMR" !== this.coin.getUserTicker() ||
              /^([A-z0-9]{64})?$/.test(this.inputs.custom)
                ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND"].includes(
                    this.parent.getUserTicker(),
                  ) ||
                  /^[0-9]*$/.test(this.inputs.custom) ||
                  (this.inputsError.custom = this.$t(
                    "error.destinationTagNumber",
                  ))
                : (this.inputsError.custom = this.$t(
                    "error.destinationTagHexadecimal",
                  )),
              ["BNB"].includes(this.parent.getUserTicker()) &&
                this.inputs.custom.length > _ &&
                (this.inputsError.custom = this.$t("error.maximumMemoLength")),
              "" === this.inputsError.custom
            );
          },
          async validateAmount() {
            ((this.inputsError.amount = ""), (this.isBuyCoin = !1));
            try {
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : "Unstake" === this.sendType && this.checkUnstakeAmount()
                  ? (this.inputsError.amount = this.$t(
                      "error.minimumUnstakingAmount",
                      { amount: 1, ticker: "EGLD" },
                    ))
                  : "Unstake" === this.sendType && this.checkUnstakeHold()
                    ? (this.inputsError.amount = this.$t("error.unstakeAll", {
                        amount: 1,
                        ticker: "EGLD",
                      }))
                    : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                      ? "Stake" === this.sendType &&
                        Number(this.inputs.amount) < Number(this.minAmount)
                        ? (this.inputsError.amount = this.$t(
                            "error.minimumStakeAmount",
                            { amount: this.minAmount || g, ticker: "EGLD" },
                          ))
                        : ["Stake"].includes(this.sendType) &&
                            Number(this.inputs.amount) >
                              Number(this.availableBalance)
                          ? ((this.inputsError.amount = this.$t(
                              "error.insufficientFunds",
                            )),
                            (this.isBuyCoin = !0))
                          : ["Unstake"].includes(this.sendType) &&
                              Number(this.inputs.amount) >
                                Number(this.availableBalance)
                            ? (this.inputsError.amount =
                                this.$t("error.amountTooBig"))
                            : "Stake" !== this.sendType ||
                              (await this.coin.isAvailableForSend(
                                this.fee.fee,
                              )) ||
                              ((this.inputsError.amount = this.$t(
                                "error.insufficientFunds",
                              )),
                              (this.isBuyCoin = !0))
                      : (this.inputsError.amount = this.$t(
                          "error.incorrectAmount",
                        ));
            } catch (t) {
              return;
            }
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
            let t = !1;
            try {
              (this.validateCustom() || (t = !0),
                (await this.validateAmount()) || (t = !0));
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          feeTicker() {
            return this.coin.deprecatedParent;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          async showPasswordForm() {
            ((this.initSend = !0),
              (await this.validateAll()) || !this.isFeeEnough || this.isBuffered
                ? (this.initSend = !1)
                : ((this.isPasswordShow = !0),
                  (this.initSend = !1),
                  setTimeout(() => {
                    this.$refs.confirmPassword.setFocus();
                  }, 300)));
          },
          sendErrorLogs(t, s) {
            (console.log(t, s),
              this.$wallets.logger.error({
                type: "Send",
                error: t.toString(),
                url: "wallet." + s,
                currency: this.coin.getUserTicker(),
              }),
              (this.isError = !0));
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.inputs.address = this.stakingValidator.address),
                (this.inputs.custom = "atomicwallet"),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              const s = {
                validator: this.domainAddress || this.inputs.address,
                amount: this.coin.toMinimalUnit(this.inputs.amount),
              };
              try {
                let t;
                ("Stake" === this.sendType &&
                  (t = await this.coin
                    .createDelegationTransaction(s)
                    .catch((t) =>
                      this.sendErrorLogs(t, "createDelegationTransaction"),
                    )),
                  "Unstake" === this.sendType &&
                    (t = await this.coin
                      .createUnDelegationTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(t, "createUnDelegationTransaction"),
                      )),
                  "Withdrawal" === this.sendType &&
                    (t = await this.coin
                      .createWithdrawTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(
                          t,
                          "createWithdrawDelegationTransaction",
                        ),
                      )),
                  "Claim" === this.sendType &&
                    (t = await this.coin
                      .createClaimTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(
                          t,
                          "createWithdrawDelegationTransaction",
                        ),
                      )));
                const i = await this.coin
                  .sendTransaction(t)
                  .catch((t) => this.sendErrorLogs(t, "sendTransaction"));
                ((this.txid = i.txid),
                  (this.isSuccess = !0),
                  "Stake" === this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(t),
                  (this.isError = !0));
              }
              (this.$bus.$emit("get-near-balances"), (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""),
              (this.inputs.address = ""));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.getFee();
              }, w));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.getFee());
              }, w));
          },
          checkUnstakeAmount() {
            return new a.default(this.inputs.amount).lt(1);
          },
          checkUnstakeHold() {
            const t = new a.default(this.inputs.amount),
              s = new a.default(this.availableBalance),
              i = s.minus(t);
            return !i.isNegative() && !i.eq(0) && i.lt(1);
          },
        },
      };
    },
    5800: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(4),
        r = i(375),
        o = e(i(2842)),
        l = e(i(3362)),
        d = e(i(2969)),
        c = e(i(2922)),
        u = e(i(3074)),
        h = i(804),
        p = e(i(798));
      const v = 100,
        m = 100;
      s.default = {
        name: "SendStakeHBAR",
        components: {
          Edit: o.default,
          EditAmount: d.default,
          SendCoinResult: c.default,
          Dropdown: l.default,
          AvailableAndFeeAmounts: u.default,
        },
        mixins: [r.SettingsMixin, r.SendStakeMixin],
        props: { sendType: { type: String, default: "Stake" } },
        data: () => ({
          feeLoading: !1,
          fee: { ticker: "", fee: "" },
          isFeeEnough: !0,
          inputTypePassword: "password",
          isPasswordShow: !1,
          sending: !1,
          isError: !1,
          isSuccess: !1,
          isOnSendAll: !1,
          txid: null,
          amount: "",
          sendAmount: "",
          amountError: "",
          password: "",
          passwordError: "",
          isChangeValidator: !1,
          selectedValidator: "",
        }),
        computed: {
          yearlyYield() {
            const t = 20,
              s = new a.default(t).dividedBy(m),
              i = s.multipliedBy(this.amount);
            return Number(i) || 0;
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          staked() {
            return this.coin.getStakedBalance();
          },
          availableBalance() {
            var t, s, i, e, a, n;
            return "Claim" === this.sendType
              ? (null === (e = (a = this.coin).getRewards) ||
                void 0 === e ||
                null === (n = e.call(a)) ||
                void 0 === n
                  ? void 0
                  : n.toCurrency()) || "0"
              : "Stake" === this.sendType
                ? (null === (t = (s = this.coin).getAvailableBalance) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0"
                : this.coin.getAvailableForUnstakeBalance().toCurrency();
          },
          icon() {
            return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          availableValidators() {
            let t = [];
            var s, i, e, a, n;
            "Stake" === this.sendType
              ? (t =
                  null !==
                    (s =
                      null === (i = this.coin) || void 0 === i
                        ? void 0
                        : i.predefinedValidators) && void 0 !== s
                    ? s
                    : [])
              : (t = Object.values(
                  null !==
                    (e =
                      null === (a = this.coin) ||
                      void 0 === a ||
                      null === (n = a.getValidators) ||
                      void 0 === n
                        ? void 0
                        : n.call(a)) && void 0 !== e
                    ? e
                    : {},
                ));
            return t.map((t) => {
              let { name: s, reward: i, address: e } = t;
              return { primary: s, additional: i + "%", address: e, name: s };
            });
          },
          stakingValidator() {
            var t;
            const s = (0, n.randomElementFromArray)(this.availableValidators);
            var i, e;
            if ("Stake" === this.sendType && !this.selectedValidator)
              return null !==
                (i =
                  null !==
                    (e = this.availableValidators.find((t) => {
                      var s;
                      return (
                        t.name ===
                        (null === (s = this.stakingSettings) || void 0 === s
                          ? void 0
                          : s.defaultValidator)
                      );
                    })) && void 0 !== e
                    ? e
                    : s) && void 0 !== i
                ? i
                : {};
            const a = this.availableValidators.find((t) => {
              let { primary: s } = t;
              return s === this.selectedValidator;
            });
            return null !== (t = null !== a && void 0 !== a ? a : s) &&
              void 0 !== t
              ? t
              : {};
          },
          stakingSettings() {
            return this.$store.state.Settings.stakingSettings.find(
              (t) => t.ticker === this.coin.ticker,
            );
          },
        },
        watch: {
          async amount() {
            this.isSuccess ||
              (await this.validateAmount(), await this.validateFee());
          },
        },
        async mounted() {
          var t, s, i;
          (await this.updateBalanceAndFee(),
            (this.amount =
              "Claim" === this.sendType
                ? (null === (t = (s = this.coin).getRewards) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0"
                : this.availableBalance),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        created() {
          try {
            var t, s;
            this.selectValidator(
              null !==
                (t =
                  null === (s = this.stakingValidator) || void 0 === s
                    ? void 0
                    : s.primary) && void 0 !== t
                ? t
                : "",
            );
          } catch (i) {
            console.error(i);
          }
        },
        methods: {
          hasRate: h.hasRate,
          getValueFiat: h.getValueFiat,
          formatFinance: p.default,
          async updateBalanceAndFee() {
            await this.getFee();
          },
          async validateFee() {
            var t;
            const s =
                +this.fee.fee > 0 ? this.coin.toMinimalUnit(this.fee.fee) : 0,
              i = new this.coin.BN(s);
            this.isFeeEnough = i.lt(
              (null === (t = this.coin) || void 0 === t
                ? void 0
                : t.indivisibleBalance) || 0,
            );
          },
          async getFee() {
            this.feeLoading = !0;
            const { updateAccountFee: t } = this.parent,
              s = await this.parent.getFee({ feeLimit: t });
            ((this.fee.fee = this.parent.toCurrencyUnit(s)),
              (this.fee.ticker = this.parent.ticker),
              await this.validateFee(),
              (this.feeLoading = !1));
          },
          validateAmount() {
            this.amountError = "";
            const t =
                "Stake" === this.sendType
                  ? this.availableBalance
                  : this.coin.getAvailableForUnstakeBalance().toCurrency(),
              s = new a.default(t).lt(this.amount);
            return (
              "" === this.amount || 0 === Number(this.amount)
                ? (this.amountError = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.amount)
                  ? "Stake" === this.sendType && s
                    ? (this.amountError = this.$t("error.notEnoughForStake"))
                    : "Unstake" === this.sendType &&
                      s &&
                      (this.amountError = this.$t("error.notEnoughForUnstake"))
                  : (this.amountError = this.$t("error.incorrectAmount")),
              "" === this.amountError
            );
          },
          async validatePassword() {
            return (
              (this.passwordError = ""),
              "" === this.password
                ? (this.passwordError = this.$t("error.passwordCantBeBlank"))
                : (await this.$wallets.checkPassword(this.password)) ||
                  (this.passwordError = this.$t("error.wrongPassword")),
              "" === this.passwordError
            );
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.amount = t));
          },
          showPasswordForm() {
            this.validateAmount() &&
              this.isFeeEnough &&
              (this.isPasswordShow = !0);
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.isPasswordShow = !1), (this.sending = !0));
              const t = this.sendType.toLowerCase(),
                s = await this.parent[t]({
                  amount: this.amount,
                  validator: this.stakingValidator.address,
                }).catch((s) => {
                  (console.log(s),
                    this.$wallets.logger.error({
                      type: "Send",
                      error: s.toString(),
                      url: `Staking ${this.coin.ticker}: ${t}`,
                      currency: this.coin.getUserTicker(),
                    }),
                    (this.isError = !0));
                });
              ((this.txid = s),
                (this.sendAmount = this.amount),
                this.isError ||
                  ((this.isSuccess = !0),
                  "Stake" === this.sendType &&
                    this.saveSuccessStaking(
                      this.amount,
                      this.stakingValidator.address,
                    )),
                (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.password = ""),
              (this.passwordError = ""),
              (this.amount = ""),
              (this.amountError = ""),
              (this.isOnSendAll = !1));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.password = ""),
              (this.passwordError = ""),
              "Unstake" === this.sendType
                ? this.backToWallets()
                : (this.isPasswordShow = !1));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.password = ""),
              setTimeout(() => {
                this.updateBalanceAndFee();
              }, v));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, v));
          },
          selectValidator(t) {
            ((this.selectedValidator = t), this.closeValidatorsDropdown());
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
        },
      };
    },
    5801: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(375),
        r = e(i(2842)),
        o = e(i(3362)),
        l = e(i(2969)),
        d = e(i(2922)),
        c = e(i(3074)),
        u = i(804),
        h = e(i(798));
      const p = 100,
        v = 100,
        m = 3e4,
        g = (t) => {
          if (!t) return {};
          const [s] = t.split(","),
            i = s.replace(/[^0-9]+/g, ""),
            e = new Date().getTime(),
            a = 60,
            n = 24 - (e - i) / 36e5,
            r = n >= 1,
            o = (r ? n : n * a).toFixed();
          return {
            units: r
              ? (void 0).$t("popups.SendStakeFLR.hours")
              : (void 0).$t("popups.SendStakeFLR.minutes"),
            value: o,
          };
        };
      s.default = {
        name: "SendStakeFLR",
        components: {
          Dropdown: o.default,
          Edit: r.default,
          EditAmount: l.default,
          SendCoinResult: d.default,
          AvailableAndFeeAmounts: c.default,
        },
        mixins: [n.SettingsMixin, n.SendStakeMixin],
        props: { sendType: { type: String, default: "Stake" } },
        data: () => ({
          feeLoading: !1,
          inputs: { amount: "", password: "" },
          inputsError: { amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isUpdateCoin: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          errorMessage: "",
          isOnSendAll: !1,
          amountError: "",
          isSendAllClick: !1,
          txid: null,
          availableBalance: "0",
          balanceToStake: "0",
          selectedStakingValidator: "",
          isBuyCoin: !1,
          sendAmount: "",
          availableValidators: [],
          stakingValidator: {},
        }),
        computed: {
          textWarning() {
            var t;
            return (
              this.$t(
                `coinTips.${this.coin.ticker.toLowerCase()}.${null === this || void 0 === this || null === (t = this.sendType) || void 0 === t ? void 0 : t.toLowerCase()}`,
              ) || ""
            );
          },
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          isStakeVotes() {
            return "Vote" === this.sendType;
          },
          stakingProfit() {
            const t = new a.default(this.stakingValidator.reward).dividedBy(v);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          unstakingBalance() {
            var t, s;
            return null === (t = this.coin) ||
              void 0 === t ||
              null === (s = t.getValidators) ||
              void 0 === s
              ? void 0
              : s
                  .call(t)
                  [this.stakingValidator.address].delegatedVotes.toCurrency();
          },
        },
        watch: {
          sending(t) {
            "Claim" === this.sendType &&
              t &&
              setTimeout(() => {
                this.isSuccess || ((this.sending = !1), (this.isError = !0));
              }, m);
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
          "fee.fee"(t) {
            var s, i, e;
            if ("Unstake" !== this.sendType)
              this.availableBalance =
                (null === (s = (i = this.coin).getAvailableBalance) ||
                void 0 === s ||
                null === (e = s.call(i)) ||
                void 0 === e
                  ? void 0
                  : e.toCurrency()) || "0";
            else
              try {
                this.availableBalance = this.unstakingBalance;
              } catch (a) {
                this.availableBalance = "0";
              }
          },
          "coin.divisibleBalance"() {
            var t, s, i;
            if ("Unstake" !== this.sendType)
              this.availableBalance =
                (null === (t = (s = this.coin).getAvailableBalance) ||
                void 0 === t ||
                null === (i = t.call(s)) ||
                void 0 === i
                  ? void 0
                  : i.toCurrency()) || "0";
            else
              try {
                this.availableBalance = this.unstakingBalance;
              } catch (e) {
                this.availableBalance = "0";
              }
          },
        },
        async mounted() {
          (await this.setValidators(),
            await this.updateAndSetAmount(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          hasRate: u.hasRate,
          getValueFiat: u.getValueFiat,
          formatFinance: h.default,
          async setValidators() {
            var t, s, i;
            await (null === (t = (s = this.coin).getPredefinedValidators) ||
            void 0 === t
              ? void 0
              : t.call(s));
            const e =
              (null === (i = this.coin) || void 0 === i
                ? void 0
                : i.predefinedValidators) || [];
            this.availableValidators = e
              .map((t) => {
                let { name: s, reward: i, address: e } = t;
                return { primary: s, additional: i + "%", address: e };
              })
              .filter(Boolean);
            const a = this.selectedStakingValidator
              ? this.getPredefinedValidator(this.selectedStakingValidator)
              : e[0];
            if (!a) {
              var n, r, o;
              const t = Object.keys(
                  null === (n = this.coin) ||
                    void 0 === n ||
                    null === (r = n.getValidators) ||
                    void 0 === r
                    ? void 0
                    : r.call(n),
                ),
                s = t.find((t) => t === this.selectedStakingValidator) || "";
              return {
                address:
                  (null === (o = t[s]) || void 0 === o ? void 0 : o.address) ||
                  "",
                name: s,
              };
            }
            this.stakingValidator = a || { address: "", name: "" };
          },
          async updateAndSetAmount() {
            var t, s, i, e, a, n;
            (await this.updateBalanceAndFee(),
              (this.balanceToStake = this.isStakeVotes
                ? (null === (t = (s = this.coin).getAvailableVotes) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0"
                : (null === (e = (a = this.coin).getAvailableBalance) ||
                  void 0 === e ||
                  null === (n = e.call(a)) ||
                  void 0 === n
                    ? void 0
                    : n.toCurrency()) || "0"),
              this.setAmount());
          },
          getPredefinedValidator(t) {
            var s;
            return null === (s = this.coin) || void 0 === s
              ? void 0
              : s.predefinedValidators.find(
                  (s) => s.name === t || s.address === t,
                );
          },
          setAmount() {
            if ("Unstake" === this.sendType)
              this.inputs.amount = this.availableBalance;
            else if ("Claim" === this.sendType) {
              var t, s, i;
              this.inputs.amount =
                (null === (t = (s = this.coin).getRewards) ||
                void 0 === t ||
                null === (i = t.call(s)) ||
                void 0 === i
                  ? void 0
                  : i.toCurrency()) || "0";
            } else this.inputs.amount = this.balanceToStake;
          },
          async updateBalanceAndFee() {
            await this.getFee();
            try {
              var t, s, i;
              if ("Unstake" === this.sendType)
                this.availableBalance = this.unstakingBalance;
              else
                this.availableBalance =
                  (null === (t = (s = this.coin).getAvailableBalance) ||
                  void 0 === t ||
                  null === (i = t.call(s)) ||
                  void 0 === i
                    ? void 0
                    : i.toCurrency()) || "0";
            } catch (e) {
              this.availableBalance = "0";
            }
          },
          setAllAvailableBalance() {
            "Claim" !== this.sendType &&
              ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.inputs.amount = String(
                "Unstake" === this.sendType
                  ? this.availableBalance
                  : this.balanceToStake,
              )));
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.coin.getFee({
              gasLimit: this.coin.stakingGasLimit,
            });
            ((this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.coin.deprecatedParent),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = this.getPredefinedValidator(t);
            (s &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              (this.selectedStakingValidator = t),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.closeValidatorsDropdown());
          },
          async validateAmount() {
            ((this.isBuyCoin = !1), (this.inputsError.amount = ""));
            try {
              var t, s, i;
              const r = new RegExp("^[0-9]+(.[0-9]+)?$");
              var e, a, n;
              if ("Claim" === this.sendType)
                return (
                  (null === (e = (a = this.coin).getRewards) ||
                  void 0 === e ||
                  null === (n = e.call(a)) ||
                  void 0 === n
                    ? void 0
                    : n.toCurrency()) || !1
                );
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : r.test(this.inputs.amount)
                  ? "Unstake" === this.sendType &&
                    Number(this.inputs.amount) > Number(this.unstakingBalance)
                    ? (this.inputsError.amount = this.$t(
                        "error.exceedsUnstakingBalance",
                      ))
                    : (!this.isStakeVotes &&
                          "Stake" === this.sendType &&
                          Number(this.inputs.amount) >
                            Number(
                              (null ===
                                (t = (s = this.coin).getAvailableBalance) ||
                              void 0 === t ||
                              null === (i = t.call(s)) ||
                              void 0 === i
                                ? void 0
                                : i.toCurrency()) || "0",
                            )) ||
                        (this.isStakeVotes &&
                          Number(this.inputs.amount) >
                            Number(this.balanceToStake))
                      ? ((this.inputsError.amount = this.$t(
                          "error.insufficientFundsForStaking",
                        )),
                        (this.isBuyCoin = !0))
                      : "Unstake" === this.sendType ||
                        (await this.coin.isAvailableForSend(this.fee.fee)) ||
                        ((this.inputsError.amount = this.$t(
                          "error.insufficientFunds",
                        )),
                        (this.isBuyCoin = !0))
                  : (this.inputsError.amount = this.$t(
                      "error.incorrectAmount",
                    ));
            } catch (r) {
              return;
            }
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
            let t = !1;
            try {
              (await this.validateAmount()) || (t = !0);
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          async showPasswordForm() {
            ((this.initSend = !0),
              (await this.validateAll())
                ? (this.initSend = !1)
                : ((this.isPasswordShow = !0),
                  (this.initSend = !1),
                  setTimeout(() => {
                    this.$refs.confirmPassword.setFocus();
                  }, 300)));
          },
          sendLoggerError(t, s) {
            (this.$wallets.logger.error({
              type: "Send",
              error: t.toString(),
              url: s,
              currency: this.coin.getUserTicker(),
            }),
              (this.isError = !0));
          },
          async createTransactions(t, s) {
            const i = await this.coin[t]({
                validator: this.stakingValidator.address,
                amount: s,
              }).catch((s) => {
                (this.sendLoggerError(s, "wallet." + t), (this.isError = !0));
              }),
              e = await this.coin.sendTransaction(i).catch((t) => {
                (this.sendLoggerError(t, "wallet.sendTransaction"),
                  (this.isError = !0));
              });
            return null === e || void 0 === e ? void 0 : e.txid;
          },
          async createStakeVotes() {
            try {
              var t, s, i;
              this.txid = await this.createTransactions(
                "createDelegationTransaction",
                (null === (t = (s = this.coin).getAvailableVotes) ||
                void 0 === t ||
                null === (i = t.call(s)) ||
                void 0 === i
                  ? void 0
                  : i.toCurrency()) || "0",
              );
            } catch (e) {
              (console.log(e), (this.isError = !0));
            }
          },
          async createStakeOrUnstake() {
            try {
              const t = this.coin.toMinimalUnit(this.inputs.amount),
                s =
                  "Unstake" === this.sendType
                    ? "createUnstakeTransaction"
                    : "createStakeTransaction";
              ((this.txid = await this.createTransactions(s, t)),
                "Stake" !== this.sendType ||
                  this.isError ||
                  (this.saveSuccessStaking(t),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  })));
            } catch (t) {
              (this.$ga.event("Send Coin", "send tx failed", {
                clientID: this.$ga.customParams.uid,
              }),
                (this.isError = !0));
            }
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              this.validatePassword())
            ) {
              if (
                ((this.isPasswordShow = !1),
                (this.sending = !0),
                this.isStakeVotes && "Claim" !== this.sendType)
              )
                await this.createStakeVotes();
              else if (["Stake", "Unstake"].includes(this.sendType))
                await this.createStakeOrUnstake();
              else if ("Claim" === this.sendType)
                return void (await this.createClaimFLR());
              ((this.isSuccess = !this.isError), (this.sending = !1));
            }
          },
          async createClaimFLR() {
            try {
              const t = await this.coin.createClaimTransaction();
              if (!t) return void (this.isError = !0);
              const s = await this.coin.sendTransaction(t);
              if (s && s.txid)
                return (
                  (this.txid = s.txid),
                  (this.isSuccess = !0),
                  (this.sending = !1),
                  void (this.isError = !1)
                );
              ((this.isError = !0), (this.sending = !1));
            } catch (t) {
              const { units: s, value: i } = g(t);
              ((this.errorMessage = `Claim will be available in ${i} ${s}`),
                (this.isError = !0),
                (this.sending = !1),
                (this.isSuccess = !1));
            }
          },
          clearInputs() {
            ((this.inputs.password = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""));
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
              setTimeout(async () => {
                await this.updateAndSetAmount();
              }, p));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(async () => {
                ((this.isSuccess = !1), await this.updateAndSetAmount());
              }, p));
          },
        },
      };
    },
    5802: function (t, s, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(s, "__esModule", { value: !0 }),
        (s.default = void 0));
      var a = e(i(232)),
        n = i(60),
        r = i(375),
        o = e(i(2842)),
        l = e(i(3362)),
        d = e(i(2969)),
        c = e(i(2922)),
        u = e(i(3074)),
        h = i(4),
        p = i(804),
        v = e(i(798));
      const m = 4,
        g = 100,
        k = 100;
      s.default = {
        name: "SendStakeMATIC",
        components: {
          Dropdown: l.default,
          Edit: o.default,
          EditAmount: d.default,
          SendCoinResult: c.default,
          AvailableAndFeeAmounts: u.default,
        },
        mixins: [r.SettingsMixin, r.SendStakeMixin],
        props: { sendType: { type: String, default: "Send" } },
        data: () => ({
          feeLoading: !1,
          inputs: { address: "", custom: "", amount: "", password: "" },
          inputsError: { address: "", custom: "", amount: "", password: "" },
          fee: { ticker: "", fee: "" },
          domainAddress: "",
          inputTypePassword: "password",
          isPasswordShow: !1,
          initSend: !1,
          sending: !1,
          isFeeEnough: !0,
          isBuffered: !1,
          isUpdateCoin: !1,
          isRate: !1,
          isError: !1,
          isSuccess: !1,
          isChangeValidator: !1,
          isOnSendAll: !1,
          isSendAllClick: !1,
          txid: null,
          currencies: [],
          selectedStakingValidator: null,
          isBuyCoin: !1,
        }),
        computed: {
          ...(0, n.mapGetters)(["stakingSettings"]),
          sendText() {
            return "Withdrawal" === this.sendType
              ? this.$t("sendType.Withdraw")
              : this.$t("sendType." + this.sendType);
          },
          availableValidators() {
            var t;
            if ("Send" === this.sendType) return;
            const s = (t) => {
              const s = this.getPredefinedValidator(t),
                i = this.getPredefinedValidator(t),
                e = (s && s.name) || (i && i.name);
              return e;
            };
            if ("Unstake" === this.sendType) {
              var i, e;
              const t = Object.entries(
                null === (i = this.coin) ||
                  void 0 === i ||
                  null === (e = i.getValidators) ||
                  void 0 === e
                  ? void 0
                  : e.call(i),
              ).filter((t) => s(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].staked.toCurrency()) <= 0))
                    return {
                      primary: s(t[0]),
                      additional: `${(0, p.numberToFixed)(t[1].staked.toCurrency(), m)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            if ("Withdrawal" === this.sendType) {
              var a, n;
              const t = Object.entries(
                null === (a = this.coin) ||
                  void 0 === a ||
                  null === (n = a.getValidators) ||
                  void 0 === n
                  ? void 0
                  : n.call(a),
              ).filter((t) => s(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].availableWithdrawals.toCurrency()) <= 0))
                    return {
                      primary: s(t[0]),
                      additional: `${(0, p.numberToFixed)(t[1].availableWithdrawals.toCurrency(), m)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            if ("Claim" === this.sendType) {
              var r, o;
              const t = Object.entries(
                null === (r = this.coin) ||
                  void 0 === r ||
                  null === (o = r.getValidators) ||
                  void 0 === o
                  ? void 0
                  : o.call(r),
              ).filter((t) => s(t[0]));
              return t
                .map((t) => {
                  if (!(Number(t[1].rewards.toCurrency()) <= 0))
                    return {
                      primary: s(t[0]),
                      additional: `${(0, p.numberToFixed)(t[1].rewards.toCurrency(), m)} ${this.coin.ticker}`,
                    };
                })
                .filter(Boolean);
            }
            return null === (t = this.coin) || void 0 === t
              ? void 0
              : t.predefinedValidators
                  .map((t) => {
                    let { name: s, reward: i } = t;
                    return { primary: s, additional: i + "%" };
                  })
                  .filter(Boolean);
          },
          stakingValidator() {
            var t, s, i;
            if ("Send" === this.sendType) return;
            const e =
                this.selectedStakingValidator || this.defaultValidator
                  ? this.getPredefinedValidator(
                      this.selectedStakingValidator || this.defaultValidator,
                    )
                  : (0, h.randomElementFromArray)(
                      null === (t = this.coin) || void 0 === t
                        ? void 0
                        : t.predefinedValidators,
                    ),
              a =
                null === (s = this.coin) ||
                void 0 === s ||
                null === (i = s.getValidators) ||
                void 0 === i
                  ? void 0
                  : i.call(s),
              n = Object.keys(a).find((t) => t === (e && e.address));
            return e || { address: a[n].address, name: n };
          },
          stakingProfit() {
            if ("Send" === this.sendType) return;
            const t = new a.default(this.stakingValidator.reward).dividedBy(k);
            return t.multipliedBy(this.inputs.amount);
          },
          icon() {
            return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          sendTypeVerb() {
            return this.sendType
              ? this.$t("sendProcess." + this.sendType)
              : this.$t("sendType.Stake");
          },
          placeholderPaymentId() {
            return this.getPlaceholderPaymentId(
              this.coin.ticker,
              this.coin.parent,
            );
          },
          defaultValidator() {
            return (0, h.randomElementFromArray)(this.availableValidators)
              .primary;
          },
          availableBalance() {
            var t, s, i;
            if (!this.coin || !this.coin.balances) return "0";
            const e = this.getPredefinedValidator(
              this.selectedStakingValidator || this.defaultValidator,
            ).address;
            if ("Unstake" === this.sendType)
              try {
                var a, n;
                const t =
                    null === (a = this.coin) ||
                    void 0 === a ||
                    null === (n = a.getValidators) ||
                    void 0 === n
                      ? void 0
                      : n.call(a),
                  s = t[e];
                return s.staked.toCurrency();
              } catch (u) {
                return "0";
              }
            if ("Withdrawal" === this.sendType)
              try {
                var r, o;
                const t =
                    null === (r = this.coin) ||
                    void 0 === r ||
                    null === (o = r.getValidators) ||
                    void 0 === o
                      ? void 0
                      : o.call(r),
                  s = t[e];
                return s.availableWithdrawals.toCurrency();
              } catch (u) {
                return "0";
              }
            var l, d, c;
            return "Prepare" === this.sendType
              ? (null === (l = (d = this.coin).getTotalBalance) ||
                void 0 === l ||
                null === (c = l.call(d)) ||
                void 0 === c
                  ? void 0
                  : c.toCurrency()) || "0"
              : (null === (t = (s = this.coin).getAvailableBalance) ||
                void 0 === t ||
                null === (i = t.call(s)) ||
                void 0 === i
                  ? void 0
                  : i.toCurrency()) || "0";
          },
          availableWithdrawal() {
            var t, s, i;
            return (
              (null === (t = (s = this.coin).getAvailableWithdrawals) ||
              void 0 === t ||
              null === (i = t.call(s)) ||
              void 0 === i
                ? void 0
                : i.toCurrency()) || "0"
            );
          },
          gasLimitByTypeStake() {
            return "Unstake" === this.sendType
              ? this.coin.unstakingGasLimit
              : "Claim" === this.sendType
                ? this.coin.claimRewardsGasLimit
                : "Withdrawal" === this.sendType
                  ? this.coin.withdrawGasLimit
                  : this.coin.stakingGasLimit;
          },
        },
        watch: {
          "inputs.address"() {
            ((this.domainAddress = ""),
              this.isSuccess || this.isUpdateCoin || this.validateAddress());
          },
          "inputs.amount"() {
            this.isSuccess || this.isUpdateCoin || this.validateAmount();
          },
          selectedStakingValidator() {
            "Claim" === this.sendType && this.setAllAvailableBalance();
          },
        },
        async mounted() {
          (await this.getFee(),
            this.setAllAvailableBalance(),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          getValueFiat: p.getValueFiat,
          formatFinance: v.default,
          setAllAvailableBalance() {
            var t, s;
            ((this.isSendAllClick = !this.isSendAllClick),
            (this.isOnSendAll = !0),
            "Claim" === this.sendType)
              ? (this.inputs.amount =
                  null === (t = this.coin) ||
                  void 0 === t ||
                  null === (s = t.getValidators) ||
                  void 0 === s
                    ? void 0
                    : s
                        .call(t)
                        [this.stakingValidator.address].rewards.toCurrency())
              : (this.inputs.amount = String(this.availableBalance) || "0");
          },
          getPredefinedValidator(t) {
            var s;
            return null === (s = this.coin) || void 0 === s
              ? void 0
              : s.predefinedValidators.find(
                  (s) => s.name === t || s.address === t,
                );
          },
          async availableForFee() {
            this.isFeeEnough = await this.coin.isAvailableForFee(
              this.coin.toMinimalUnit(this.fee.fee),
            );
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.coin.getFee({
              gasLimit: this.gasLimitByTypeStake,
            });
            ((this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.feeTicker()),
              await this.availableForFee(),
              (this.feeLoading = !1));
          },
          closeValidatorsDropdown() {
            this.isChangeValidator = !1;
          },
          selectValidator(t) {
            const s = this.getPredefinedValidator(t);
            (s &&
              "Stake" === this.sendType &&
              localStorage.setItem(
                `selected::${this.coin.ticker}::validator`,
                t,
              ),
              (this.selectedStakingValidator = t),
              this.$bus.$emit(`select::${this.coin.ticker}::validator`, t),
              this.closeValidatorsDropdown(),
              ["Unstake", "Withdrawal"].includes(this.sendType) &&
                (this.inputs.amount = String(this.availableBalance || 0)));
          },
          async validateAddress() {
            const t = this.$getAddressWallet(this.coin.parent),
              s = await this.coin.validateAddress(this.inputs.address);
            return (
              (this.inputsError.address = ""),
              "" === this.inputs.address
                ? (this.inputsError.address = this.$t(
                    "error.addressCantBeBlank",
                  ))
                : s
                  ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(
                      this.coin.ticker,
                    ) &&
                    t === this.inputs.address &&
                    (this.inputsError.address = this.$t(
                      "error.cantSendToOwnAddress",
                    ))
                  : (this.inputsError.address = this.$t("error.checkAddress")),
              "string" === typeof s && (this.domainAddress = s),
              "" === this.inputsError.address
            );
          },
          async validateAmount() {
            ((this.inputsError.amount = ""), (this.isBuyCoin = !1));
            try {
              "" === this.inputs.amount || 0 === Number(this.inputs.amount)
                ? (this.inputsError.amount = this.$t("error.amountCantBeBlank"))
                : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount)
                  ? ["Stake"].includes(this.sendType) &&
                    Number(this.inputs.amount) > Number(this.availableBalance)
                    ? ((this.inputsError.amount = this.$t(
                        "error.notEnoughForStake",
                      )),
                      (this.isBuyCoin = !0))
                    : ["Unstake"].includes(this.sendType) &&
                      Number(this.inputs.amount) >
                        Number(this.availableBalance) &&
                      (this.inputsError.amount = this.$t("error.amountTooBig"))
                  : (this.inputsError.amount = this.$t(
                      "error.incorrectAmount",
                    ));
            } catch (t) {
              return;
            }
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
            let t = !1;
            try {
              (await this.validateAmount()) || (t = !0);
            } catch (s) {
              ((this.inputsError.amount = this.$t(
                "error.blockExplorerUnavailable",
              )),
                (t = !0));
            }
            return t;
          },
          feeTicker() {
            return this.coin.feeTicker;
          },
          changeAmount(t) {
            ((this.isOnSendAll = !1), (this.inputs.amount = t));
          },
          async showPasswordForm() {
            ((this.initSend = !0),
              (await this.validateAll()) || !this.isFeeEnough || this.isBuffered
                ? (this.initSend = !1)
                : ((this.isPasswordShow = !0),
                  (this.initSend = !1),
                  setTimeout(() => {
                    this.$refs.confirmPassword.setFocus();
                  }, 300)));
          },
          sendErrorLogs(t, s) {
            (this.$wallets.logger.error({
              type: "Send",
              error: t.toString(),
              url: "wallet." + s,
              currency: this.coin.getUserTicker(),
            }),
              (this.isError = !0));
          },
          async sendCoins() {
            if (
              (this.$ga.event("User Actions", "Send Coin", {
                clientID: this.$ga.customParams.uid,
              }),
              await this.validatePassword())
            ) {
              ((this.inputs.address = this.stakingValidator.address),
                (this.isPasswordShow = !1),
                (this.sending = !0));
              const s = {
                validator: this.domainAddress || this.inputs.address,
                amount: this.coin.toMinimalUnit(this.inputs.amount),
              };
              try {
                let t;
                ("Prepare" === this.sendType &&
                  (t = await this.coin
                    .createApproveTransaction(s)
                    .catch((t) =>
                      this.sendErrorLogs(t, "createDelegationTransaction"),
                    )),
                  "Stake" === this.sendType &&
                    (t = await this.coin
                      .createDelegationTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(t, "createDelegationTransaction"),
                      )),
                  "Unstake" === this.sendType &&
                    (t = await this.coin
                      .createUnstakeTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(t, "createUnDelegationTransaction"),
                      )),
                  "Withdrawal" === this.sendType &&
                    (t = await this.coin
                      .createWithdrawTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(
                          t,
                          "createWithdrawDelegationTransaction",
                        ),
                      )),
                  "Claim" === this.sendType &&
                    (t = await this.coin
                      .createClaimRewardsTransaction(s)
                      .catch((t) =>
                        this.sendErrorLogs(
                          t,
                          "createWithdrawDelegationTransaction",
                        ),
                      )));
                const i = await this.coin
                  .sendTransaction(t)
                  .catch((t) => this.sendErrorLogs(t, "sendTransaction"));
                ((this.txid = i.txid),
                  (this.isSuccess = !0),
                  "Stake" === this.sendType && this.saveSuccessStaking(),
                  this.$ga.event("Send Coin", "send tx succeed", {
                    clientID: this.$ga.customParams.uid,
                  }));
              } catch (t) {
                (this.$ga.event("Send Coin", "send tx failed", {
                  clientID: this.$ga.customParams.uid,
                }),
                  console.log(t),
                  (this.isError = !0));
              }
              (this.$bus.$emit("get-near-balances"), (this.sending = !1));
            }
          },
          clearInputs() {
            ((this.domainAddress = ""),
              (this.inputs.custom = ""),
              (this.inputs.password = ""),
              (this.inputsError.address = ""),
              (this.inputsError.custom = ""),
              (this.inputsError.amount = ""),
              (this.inputsError.password = ""),
              (this.isRate = !1),
              (this.isOnSendAll = !1),
              (this.inputs.amount = ""),
              (this.inputs.address = ""));
          },
          backFromPassword() {
            ((this.inputTypePassword = "password"),
              (this.inputs.password = ""),
              (this.isPasswordShow = !1),
              (this.inputsError.password = ""));
          },
          tryAgain() {
            ((this.isError = !1),
              (this.domainAddress = ""),
              (this.inputs.password = ""),
              setTimeout(() => {
                this.getFee();
              }, g));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.getFee());
              }, g));
          },
          checkUnstakeAmount() {
            return new a.default(this.inputs.amount).lt(1);
          },
          checkUnstakeHold() {
            const t = new a.default(this.inputs.amount),
              s = new a.default(this.availableBalance),
              i = s.minus(t);
            return !i.isNegative() && !i.eq(0) && i.lt(1);
          },
        },
      };
    },
  },
]);
