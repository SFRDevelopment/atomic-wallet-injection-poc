(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [232],
  {
    11593: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5783),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11648),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11616: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5797),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11617),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11617: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            { staticClass: "send-coin popup staking-icx" },
            [
              t.sending
                ? t._e()
                : e(
                    "div",
                    { staticClass: "close", on: { click: t.backToWallets } },
                    [t._v("\n    ✕\n  ")],
                  ),
              t._v(" "),
              t.isPasswordShow || t.sending || t.isError || t.isSuccess
                ? t._e()
                : e(
                    "div",
                    { staticClass: "form" },
                    [
                      e("div", { staticClass: "info" }, [
                        e("div", { staticClass: "icon", class: t.icon }),
                        t._v(" "),
                        e("p", [
                          t._v(
                            t._s(t.sendText) +
                              " " +
                              t._s(t.coin.name) +
                              " (" +
                              t._s(t.coin.ticker) +
                              ")",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("EditAmount", {
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
                      e(
                        "AvailableAndFeeAmounts",
                        {
                          attrs: {
                            availableBalance: String(t.availableVotes),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            sendType: t.sendType,
                            wallet: t.coin,
                            feeLoading: t.feeLoading,
                          },
                          on: {
                            setAllAvailableBalance: t.setAllAvailableBalance,
                          },
                        },
                        [
                          e("div", { staticClass: "text" }, [
                            "Stake" === t.sendType
                              ? e(
                                  "div",
                                  { staticClass: "network-fee flex-block" },
                                  [
                                    e("p", [
                                      t._v(
                                        t._s(
                                          t.$t("stakingPage.yearlyEarning"),
                                        ) + ":",
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("p", { staticClass: "text-white" }, [
                                      t._v(
                                        t._s(t.yearlyYield) +
                                          " " +
                                          t._s(t.coin.ticker) +
                                          " ",
                                      ),
                                    ]),
                                    t._v(" "),
                                    t.hasRate(t.coin.id)
                                      ? e("p", [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.formatFinance(
                                                  t.getValueFiat({
                                                    value: t.yearlyYield,
                                                    wallet: t.coin,
                                                  }),
                                                ),
                                              ) +
                                              "\n            " +
                                              t._s(t.fiatRate) +
                                              "\n          ",
                                          ),
                                        ])
                                      : t._e(),
                                  ],
                                )
                              : t._e(),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "text" }, [
                            t.availableValidators.length > 0 &&
                            "Claim" !== t.sendType
                              ? e(
                                  "div",
                                  { staticClass: "stake-validator" },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.$t("stakingPage.validator")) +
                                        ": ",
                                    ),
                                    e(
                                      "span",
                                      {
                                        staticClass:
                                          "text-white validator-name",
                                        on: {
                                          click: function (a) {
                                            (a.stopPropagation(),
                                              (t.isChangeValidator = !0));
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.stakingValidator.name) + " ",
                                        ),
                                        t.stakingValidator.reward
                                          ? e(
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
                                                e(
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
                                      ? e("Dropdown", {
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
                          ]),
                        ],
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
                                    "\n          " +
                                      t._s(
                                        t.$t("error.insufficientFundsToSend", {
                                          fee: t.formatFinance(
                                            Number(
                                              Number(t.fee.fee).toFixed(6),
                                            ),
                                          ),
                                          feeTicker: t.fee.fee.ticker,
                                          ticker: t.coin.ticker,
                                        }),
                                      ) +
                                      "\n        ",
                                  ),
                                ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "submit-wrapper" }, [
                            e(
                              "button",
                              {
                                staticClass: "button",
                                on: { click: t.showPasswordForm },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.sendText) +
                                    "\n          ",
                                ),
                                Number(t.amount) > 0
                                  ? e("span", [
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
                ? e(
                    "div",
                    { staticClass: "form-password" },
                    [
                      e("div", { staticClass: "info" }, [
                        e("p", [
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
                          ? e("p", { staticClass: "text-small" }, [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.$t(
                                      "popups.SendVoteICX.youCanUnstakeAtAnyMoment",
                                      { ticker: t.coin.ticker },
                                    ),
                                  ) +
                                  "\n      ",
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      e("Edit", {
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
                          "update:modelValue": function (a) {
                            t.password = a;
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
                              "\n        " +
                                t._s(t.$t("button.back")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        e(
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
                ? e("div", { staticClass: "sending" }, [
                    e("div", { staticClass: "info" }, [
                      e("div", { staticClass: "icon", class: t.icon }),
                      t._v(" "),
                      e("p", [
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
                        ? e("div", { staticClass: "warning" }, [
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
                    e("div", { staticClass: "loading" }),
                  ])
                : t._e(),
              t._v(" "),
              t.sending
                ? t._e()
                : e("SendCoinResult", {
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
        s = [];
    },
    11628: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5803),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11629),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11629: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              t.showWarning
                ? t._e()
                : e("div", { staticClass: "staking-exchange" }, [
                    e(
                      "div",
                      { staticClass: "content" },
                      [
                        e("CoinIcon", { attrs: { wallet: t.coin } }),
                        t._v(" "),
                        e("div", { staticClass: "title" }, [
                          t._v(
                            "\n        " +
                              t._s(
                                t.$t("popups.tickerStaking", {
                                  ticker: t.coin.ticker,
                                }),
                              ) +
                              "\n      ",
                          ),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "text-default" }, [
                          e("span", { staticClass: "text-green" }, [
                            t._v(" +" + t._s(t.staking.reward) + "% "),
                          ]),
                          t._v(
                            "\n        " +
                              t._s(t.$t("stakingPage.yearlyYield")) +
                              "\n      ",
                          ),
                        ]),
                      ],
                      1,
                    ),
                    t._v(" "),
                    e("div", { staticClass: "content text-left" }, [
                      e("div", { staticClass: "info-wrap" }, [
                        e("p", { staticClass: "info-text tooltip-hover" }, [
                          t._v(
                            "\n          " +
                              t._s(
                                t.currentValidator ? "Staked" : "Available",
                              ) +
                              "\n          ",
                          ),
                          e("span", { staticClass: "tooltip" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t(
                                    "stakingPage.coinsAvailableForStakingAndSending",
                                  ),
                                ),
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          "p",
                          {
                            staticClass: "info-text",
                            attrs: { "data-test-id": "available_for_claim" },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.formatFinance(
                                    (t.coin.balances &&
                                      t.coin.balances.available) ||
                                      0,
                                  ),
                                ) +
                                "\n          ",
                            ),
                            e(
                              "span",
                              { staticClass: "info-text info-text-gray" },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.coin.ticker) +
                                    "\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "info-wrap relative" }, [
                        e("p", { staticClass: "info-text tooltip-hover" }, [
                          t._v(
                            "\n          " +
                              t._s(t.$t("title.rewards")) +
                              ":\n          ",
                          ),
                          e("span", { staticClass: "tooltip" }, [
                            t._v(
                              " " + t._s(t.$t("stakingPage.availableForClaim")),
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          "p",
                          {
                            staticClass: "info-text",
                            attrs: { "data-test-id": "reward_for_stake" },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.formatFinance(
                                    (t.coin.balances &&
                                      t.coin.toCurrencyUnit(
                                        t.coin.balances.rewards,
                                      )) ||
                                      0,
                                  ),
                                ) +
                                "\n          ",
                            ),
                            e(
                              "span",
                              { staticClass: "info-text info-text-gray" },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.coin.ticker) +
                                    "\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                        t._v(" "),
                        e(
                          "div",
                          { staticClass: "claim-section tooltip-hover" },
                          [
                            e(
                              "transition",
                              { attrs: { mode: "out-in", name: "fade" } },
                              [
                                t.claiming || t.claimOk || t.claimFail
                                  ? t._e()
                                  : e(
                                      "button",
                                      {
                                        key: "claim",
                                        staticClass: "button small-gray claim",
                                        attrs: {
                                          "data-test-id": "claim_button",
                                        },
                                        on: { click: t.claimReward },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.$t("title.claim")) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                              ],
                            ),
                            t._v(" "),
                            t.isRewardEnough
                              ? t._e()
                              : e("div", { staticClass: "tooltip" }, [
                                  t._v(
                                    "\n            " +
                                      t._s(t.inSufficientBalanceText) +
                                      "\n          ",
                                  ),
                                ]),
                          ],
                          1,
                        ),
                      ]),
                      t._v(" "),
                      t.errorMessage
                        ? e("div", { staticClass: "text-center m-t-30" }, [
                            e(
                              "p",
                              { staticClass: "new-text-red2 new-text-medium2" },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.errorMessage) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      t.currentValidator
                        ? e(
                            "div",
                            {
                              staticClass: "info-wrap space-nowrap offset-top",
                            },
                            [
                              e("p", { staticClass: "text-middle text-gray" }, [
                                t._v("\n          Current pool:\n          "),
                                t.currentValidator
                                  ? e(
                                      "span",
                                      {
                                        attrs: {
                                          "data-test-id": "ada_pool_value",
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(t.currentValidator) +
                                            "\n          ",
                                        ),
                                      ],
                                    )
                                  : t._e(),
                              ]),
                            ],
                          )
                        : t._e(),
                    ]),
                    t._v(" "),
                    t.isCoinDisabled([t.actionClaim, t.actionStake]) ||
                    t.disabled
                      ? e(
                          "div",
                          { staticClass: "info-wrap error" },
                          [
                            t._l([t.actionClaim, t.actionStake], function (a) {
                              return e("div", { key: a }, [
                                t.isCoinDisabled([a])
                                  ? e("p", { staticClass: "info-text multi" }, [
                                      t._v(
                                        "\n          " +
                                          t._s(t.getCoinDisabilityReason(a)) +
                                          "\n        ",
                                      ),
                                    ])
                                  : t._e(),
                              ]);
                            }),
                            t._v(" "),
                            t.disabled
                              ? e("p", { staticClass: "info-text" }, [
                                  t._v(
                                    "\n        " +
                                      t._s(
                                        t.$t(
                                          "stakingPage.minAmountToStakeIs4ADA",
                                        ),
                                      ) +
                                      "\n      ",
                                  ),
                                ])
                              : t._e(),
                          ],
                          2,
                        )
                      : t._e(),
                    t._v(" "),
                    e("div", { staticClass: "footer-section" }, [
                      e("div", { staticClass: "button-wrap" }, [
                        e(
                          "button",
                          {
                            staticClass: "button",
                            class: {
                              disabled: t.isCoinDisabled([t.actionStake]),
                            },
                            attrs: { "data-test-id": "choose_pool" },
                            on: { click: t.onClickPool },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.choosePool")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "content" }, [
                        e("p", {
                          directives: [
                            {
                              name: "text-html",
                              rawName: "v-text-html",
                              value: t.$t(
                                "coinTips." +
                                  t.coin.ticker.toLowerCase() +
                                  ".detailsOnMainPage",
                              ),
                              expression:
                                "$t(`coinTips.${coin.ticker.toLowerCase()}.detailsOnMainPage`)",
                            },
                          ],
                          staticClass: "text-small text-gray m-t-20",
                        }),
                      ]),
                    ]),
                  ]),
              t._v(" "),
              t.showWarning
                ? e("div", { staticClass: "send-coin" }, [
                    e("div", { staticClass: "form-password" }, [
                      e("div", { staticClass: "info" }, [
                        e("p", [
                          t._v(
                            "\n          " +
                              t._s(
                                t.$t("popups.tickerAlreadyStaked", {
                                  stakingBalance: t.stakingBalance,
                                  ticker: t.coin.ticker,
                                }),
                              ) +
                              "\n        ",
                          ),
                        ]),
                        t._v(" "),
                        e("p", [
                          t._v(
                            "\n          " +
                              t._s(
                                t.$t(
                                  "popups.stakingPopupADA.changePoolWarning",
                                ),
                              ) +
                              "\n        ",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "submit" }, [
                        e(
                          "button",
                          {
                            staticClass: "button",
                            attrs: { "data-test-id": "ada_cancel" },
                            on: { click: t.cancel },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.cancel")) +
                                "\n        ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        e(
                          "button",
                          {
                            staticClass: "button normal hover-white",
                            class: {
                              disabled: t.isCoinDisabled([t.actionStake]),
                            },
                            attrs: { "data-test-id": "ada_continue" },
                            on: { click: t.makeStake },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.continue")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
            ],
          );
        },
        s = [];
    },
    11630: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5804),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11631),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11631: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              e("div", { staticClass: "popup" }, [
                e("div", { staticClass: "staking-exchange" }, [
                  e(
                    "div",
                    { staticClass: "content" },
                    [
                      e("CoinIcon", {
                        attrs: { wallet: t.$wallets.getWallet(t.staking.id) },
                      }),
                      t._v(" "),
                      e("div", { staticClass: "title" }, [
                        t._v(
                          "\n          " +
                            t._s(
                              t.$t("popups.tickerStaking", {
                                ticker: t.staking.ticker,
                              }),
                            ) +
                            "\n        ",
                        ),
                      ]),
                      t._v(" "),
                      t.staking.reward
                        ? e("p", { staticClass: "text-default" }, [
                            t.staking.reward
                              ? e("span", { staticClass: "text-green" }, [
                                  t._v("+" + t._s(t.staking.reward) + "%"),
                                ])
                              : t._e(),
                            t._v(
                              "\n          " +
                                t._s(t.$t("stakingPage.yearlyYield")) +
                                "\n        ",
                            ),
                          ])
                        : t._e(),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e("div", { staticClass: "content text-left" }, [
                    e("div", { staticClass: "info-wrap" }, [
                      e("p", { staticClass: "info-text" }, [t._v("You have")]),
                      t._v(" "),
                      e("p", { staticClass: "info-text text-right" }, [
                        t._v(
                          "\n            " +
                            t._s(t.formatFinance(t.staking.balance)) +
                            "\n            ",
                        ),
                        e("span", { staticClass: "info-text info-text-gray" }, [
                          t._v(" " + t._s(t.staking.ticker)),
                          e("br"),
                        ]),
                        t._v(
                          "\n            " +
                            t._s(t.receiveBalance) +
                            "\n            ",
                        ),
                        e("span", { staticClass: "info-text info-text-gray" }, [
                          t._v(" " + t._s(t.receiveWallet.ticker)),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "info-wrap" }, [
                      e("p", { staticClass: "info-text" }, [
                        t._v("Daily reward"),
                      ]),
                      t._v(" "),
                      e("p", { staticClass: "info-text" }, [
                        t._v(
                          "\n            " +
                            t._s(t.formatFinance(t.dailyReward)) +
                            "\n            ",
                        ),
                        e("span", { staticClass: "info-text info-text-gray" }, [
                          t._v(
                            "\n              " +
                              t._s(t.receiveWallet.ticker) +
                              "\n            ",
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "content text-left" }, [
                    e("p", {
                      directives: [
                        {
                          name: "text-html",
                          rawName: "v-text-html",
                          value: t.$t(
                            "coinTips." +
                              t.coin.ticker.toLowerCase() +
                              ".detailsOnMainPage",
                          ),
                          expression:
                            "$t(`coinTips.${coin.ticker.toLowerCase()}.detailsOnMainPage`)",
                        },
                      ],
                      staticClass: "text-default",
                    }),
                  ]),
                  t._v(" "),
                  t.isCoinDisabled([t.actionBuy])
                    ? e("div", { staticClass: "info-wrap error" }, [
                        e("p", { staticClass: "info-text" }, [
                          t._v(
                            "\n          " +
                              t._s(t.getCoinDisabilityReason(t.actionBuy)) +
                              "\n        ",
                          ),
                        ]),
                      ])
                    : t._e(),
                  t._v(" "),
                  e("div", { staticClass: "footer-section" }, [
                    e("div", { staticClass: "button-wrap" }, [
                      t.isPossibleToBuy
                        ? e(
                            "button",
                            {
                              staticClass: "button",
                              class: {
                                disabled: t.isCoinDisabled([t.actionBuy]),
                              },
                              on: {
                                click: function (a) {
                                  return t.goBuy();
                                },
                              },
                            },
                            [
                              t._v(
                                "\n            " +
                                  t._s(t.$t("button.buy")) +
                                  " " +
                                  t._s(t.staking.ticker) +
                                  "\n          ",
                              ),
                            ],
                          )
                        : t._e(),
                    ]),
                  ]),
                ]),
              ]),
            ],
          );
        },
        s = [];
    },
    11632: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5805),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11633),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11633: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              attrs: { isShowClose: !t.isClaiming },
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              e("div", { staticClass: "popup" }, [
                t.isShowPasswordForm
                  ? e("div", { staticClass: "send-coin" }, [
                      e(
                        "div",
                        { staticClass: "form-password" },
                        [
                          e("div", { staticClass: "info" }, [
                            e("p", [
                              t._v(
                                t._s(t.$t("button.claim")) +
                                  t._s(t.coin.ticker),
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("Edit", {
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
                              "update:modelValue": function (a) {
                                t.inputs.password = a;
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
                                  "\n            " +
                                    t._s(t.$t("button.back")) +
                                    "\n          ",
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
                                  "\n            " +
                                    t._s(t.$t("button.confirm")) +
                                    "\n          ",
                                ),
                              ],
                            ),
                          ]),
                        ],
                        1,
                      ),
                    ])
                  : t._e(),
                t._v(" "),
                t.isClaiming || t.isError || t.isSuccess || t.isShowPasswordForm
                  ? t._e()
                  : e("div", { staticClass: "staking-exchange" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("CoinIcon", {
                            attrs: {
                              wallet: t.$wallets.getWallet(t.staking.id),
                            },
                          }),
                          t._v(" "),
                          e("div", { staticClass: "title" }, [
                            t._v(t._s(t.staking.ticker) + " staking"),
                          ]),
                          t._v(" "),
                          t.staking.reward
                            ? e("p", { staticClass: "text-default" }, [
                                t.staking.reward
                                  ? e("span", { staticClass: "text-green" }, [
                                      t._v("+" + t._s(t.staking.reward) + "%"),
                                    ])
                                  : t._e(),
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("stakingPage.yearlyYield")) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ],
                        1,
                      ),
                      t._v(" "),
                      e("div", { staticClass: "content text-left" }, [
                        e("div", { staticClass: "info-wrap" }, [
                          e("p", { staticClass: "info-text" }, [
                            t._v(
                              t._s(t.$t("settingsPage.membershipTab.youHave")),
                            ),
                          ]),
                          t._v(" "),
                          e("p", { staticClass: "info-text" }, [
                            t._v(
                              "\n            " +
                                t._s(t.formatFinance(t.staking.balance)) +
                                "\n            ",
                            ),
                            e(
                              "span",
                              { staticClass: "info-text info-text-gray" },
                              [
                                t._v(
                                  "\n              " +
                                    t._s(t.staking.ticker) +
                                    "\n            ",
                                ),
                              ],
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "info-wrap" }, [
                          e("p", { staticClass: "info-text" }, [
                            t._v(t._s(t.$t("stakingPage.unclaimed"))),
                          ]),
                          t._v(" "),
                          e("p", { staticClass: "info-text" }, [
                            t._v(
                              "\n            " +
                                t._s(t.formatFinance(t.unclaimed)) +
                                "\n            ",
                            ),
                            e(
                              "span",
                              { staticClass: "info-text info-text-gray" },
                              [
                                t._v(
                                  "\n              " +
                                    t._s(t.receiveWallet.ticker) +
                                    "\n            ",
                                ),
                              ],
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "content text-left" }, [
                        e("p", { staticClass: "text-default" }, [
                          t._v(
                            "\n          " +
                              t._s(
                                t.$t(
                                  "staking." +
                                    t.coin.ticker +
                                    ".hints.mainPage.stakingInfo",
                                ),
                              ) +
                              "\n        ",
                          ),
                        ]),
                        t._v(" "),
                        t.unclaimed > 0
                          ? e("p", { staticClass: "text-default" }, [
                              e("span", { staticClass: "text-default" }, [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.$t(
                                        "popups.stakingPopupKMD.veryImportant",
                                      ),
                                    ),
                                ),
                                e("br"),
                              ]),
                              t._v(
                                t._s(
                                  t.$t(
                                    "popups.stakingPopupKMD.claimAllYourRewards",
                                  ),
                                ) + "\n        ",
                              ),
                            ])
                          : e(
                              "p",
                              { staticClass: "text-default" },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.$t(
                                        "staking." +
                                          t.coin.ticker +
                                          ".hints.mainPage.rewardsTitle",
                                      ),
                                    ) +
                                    " ",
                                ),
                                e("br"),
                                t._v(" "),
                                t._l(
                                  t.$t(
                                    "staking." +
                                      t.coin.ticker +
                                      ".hints.mainPage.rewardsInfo",
                                  ),
                                  function (a) {
                                    return e(
                                      "span",
                                      { key: a, staticClass: "text-default" },
                                      [
                                        t._v("\n            " + t._s(a) + " "),
                                        e("br"),
                                      ],
                                    );
                                  },
                                ),
                              ],
                              2,
                            ),
                        t._v(" "),
                        t.errorMessage ||
                        t.isCoinDisabled([t.actionBuy, t.actionClaim])
                          ? e(
                              "div",
                              { staticClass: "info-wrap error" },
                              [
                                t._l(
                                  [t.actionBuy, t.actionClaim],
                                  function (a) {
                                    return e("div", { key: a }, [
                                      t.isCoinDisabled([a])
                                        ? e(
                                            "p",
                                            { staticClass: "info-text multi" },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.getCoinDisabilityReason(
                                                      a,
                                                    ),
                                                  ) +
                                                  "\n            ",
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ]);
                                  },
                                ),
                                t._v(" "),
                                t.errorMessage
                                  ? e("p", { staticClass: "info-text" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(t.errorMessage) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                              ],
                              2,
                            )
                          : t._e(),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "footer-section" }, [
                        e("div", { staticClass: "button-wrap" }, [
                          t.isPossibleToBuy
                            ? e(
                                "button",
                                {
                                  staticClass: "button",
                                  class: {
                                    disabled: t.isCoinDisabled([t.actionBuy]),
                                  },
                                  on: {
                                    click: function (a) {
                                      return t.goBuy();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.staking.ticker) +
                                      "\n            " +
                                      t._s(t.$t("button.buy")) +
                                      "\n          ",
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          e(
                            "button",
                            {
                              staticClass: "button button-margin",
                              class: {
                                disabled: t.isCoinDisabled([t.actionClaim]),
                              },
                              on: { click: t.showPasswordForm },
                            },
                            [
                              t._v(
                                "\n            " +
                                  t._s(t.$t("button.claims")) +
                                  "\n            " +
                                  t._s(t.receiveWallet.ticker) +
                                  "\n          ",
                              ),
                            ],
                          ),
                        ]),
                      ]),
                    ]),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "send-coin staking-processing" },
                  [
                    !t.isClaiming || t.isError || t.isSuccess
                      ? t._e()
                      : e("div", { staticClass: "sending" }, [
                          e(
                            "div",
                            { staticClass: "info-wrap" },
                            [
                              e("CoinIcon", {
                                attrs: {
                                  wallet: t.$wallets.getWallet(t.staking.id),
                                },
                              }),
                              t._v(" "),
                              e("p", [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.$t("popups.claimingTicker", {
                                        ticker: t.staking.ticker,
                                      }),
                                    ) +
                                    "\n          ",
                                ),
                              ]),
                            ],
                            1,
                          ),
                          t._v(" "),
                          e("div", { staticClass: "loading" }),
                        ]),
                    t._v(" "),
                    t.isClaiming || (!t.isError && !t.isSuccess)
                      ? t._e()
                      : e("SendCoinResult", {
                          attrs: {
                            amount: String(t.successClaimedAmount),
                            coin: t.coin,
                            icon: t.$iconClass(t.coin),
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            txid: t.txId,
                            contactData: {
                              issue: t.$t("title.staking"),
                              tags: ["staking_tag"],
                            },
                            mailTitle: t.$t("error.sendingError"),
                            sendType: t.$t("button.claim"),
                          },
                          on: {
                            backToForm: t.backToStake,
                            backToWallets: t.backToStakeTable,
                            tryAgain: t.backToStake,
                          },
                        }),
                  ],
                  1,
                ),
              ]),
            ],
          );
        },
        s = [];
    },
    11634: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5806),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11635),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11635: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              e("div", { staticClass: "staking-exchange" }, [
                e(
                  "div",
                  { staticClass: "content" },
                  [
                    e("CoinIcon", {
                      attrs: { wallet: t.$wallets.getWallet(t.staking.id) },
                    }),
                    t._v(" "),
                    e("div", { staticClass: "title" }, [
                      t._v(
                        "\n        " +
                          t._s(
                            t.$t("popups.tickerStaking", {
                              ticker: t.staking.displayTicker,
                            }),
                          ) +
                          "\n      ",
                      ),
                    ]),
                    t._v(" "),
                    t.reward
                      ? e("p", { staticClass: "text-default" }, [
                          e("span", { staticClass: "text-green" }, [
                            t._v(" +" + t._s(t.reward) + "% "),
                          ]),
                          t._v(
                            " " +
                              t._s(t.$t("stakingPage.perYear")) +
                              "\n      ",
                          ),
                        ])
                      : t._e(),
                  ],
                  1,
                ),
                t._v(" "),
                e("div", { staticClass: "content text-left" }, [
                  e("div", { staticClass: "info-wrap" }, [
                    e("p", { staticClass: "info-text" }, [
                      t._v(t._s(t.$t("title.available"))),
                    ]),
                    t._v(" "),
                    e("p", { staticClass: "info-text" }, [
                      t._v(
                        "\n          " +
                          t._s(t.formatFinance(t.balances.available)),
                      ),
                      e("span", { staticClass: "info-text info-text-gray" }, [
                        t._v(
                          "\n            " +
                            t._s(t.staking.displayTicker) +
                            "\n          ",
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "info-wrap" }, [
                    e("p", { staticClass: "info-text" }, [
                      t._v(t._s(t.$t("title.staked"))),
                    ]),
                    t._v(" "),
                    e("p", { staticClass: "info-text" }, [
                      t._v(
                        "\n          " +
                          t._s(t.formatFinance(t.balances.staked)) +
                          "\n          ",
                      ),
                      e("span", { staticClass: "info-text info-text-gray" }, [
                        t._v(
                          "\n            " +
                            t._s(t.staking.displayTicker) +
                            "\n          ",
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "info-wrap" }, [
                    e("p", { staticClass: "info-text" }, [
                      t._v(t._s(t.$t("title.total"))),
                    ]),
                    t._v(" "),
                    e("p", { staticClass: "info-text" }, [
                      t._v(
                        "\n          " +
                          t._s(t.formatFinance(t.balances.total)) +
                          "\n          ",
                      ),
                      e("span", { staticClass: "info-text info-text-gray" }, [
                        t._v(
                          "\n            " +
                            t._s(t.staking.displayTicker) +
                            "\n          ",
                        ),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", [
                    e("p", {
                      directives: [
                        {
                          name: "text-html",
                          rawName: "v-text-html",
                          value: t.$t(
                            "coinTips." +
                              t.coin.ticker.toLowerCase() +
                              ".detailsOnMainPage",
                          ),
                          expression:
                            "$t(`coinTips.${coin.ticker.toLowerCase()}.detailsOnMainPage`)",
                        },
                      ],
                      staticClass: "text-default",
                    }),
                  ]),
                ]),
                t._v(" "),
                t.isCoinDisabled([t.actionStake, t.actionUnstake])
                  ? e(
                      "div",
                      { staticClass: "info-wrap error" },
                      t._l([t.actionStake, t.actionUnstake], function (a) {
                        return e("div", { key: a }, [
                          t.isCoinDisabled([a])
                            ? e("p", { staticClass: "info-text multi" }, [
                                t._v(
                                  "\n          " +
                                    t._s(t.getCoinDisabilityReason(a)) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ]);
                      }),
                      0,
                    )
                  : t._e(),
                t._v(" "),
                e("div", { staticClass: "footer-section" }, [
                  e("div", { staticClass: "button-wrap" }, [
                    e(
                      "button",
                      {
                        staticClass: "button",
                        class: { disabled: t.isCoinDisabled([t.actionStake]) },
                        on: {
                          click: function (a) {
                            return t.$emit("makeStake");
                          },
                        },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.$t("button.stake")) +
                            "\n        ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    e(
                      "button",
                      {
                        staticClass: "button button-gray button-margin",
                        class: {
                          disabled: t.isCoinDisabled([t.actionUnstake]),
                        },
                        on: {
                          click: function (a) {
                            return t.$emit("makeUnstake");
                          },
                        },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.$t("button.unstake")) +
                            "\n        ",
                        ),
                      ],
                    ),
                  ]),
                ]),
              ]),
            ],
          );
        },
        s = [];
    },
    11636: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5807),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11641),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11641: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
              scopedSlots: t._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      e(
                        "div",
                        {
                          staticClass: "text text_small text_cta",
                          on: {
                            click: function (a) {
                              t.showHelpPopup = !0;
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(
                                t.$t(
                                  "staking." + t.coin.ticker + ".tipsTitle",
                                ) || t.coin.ticker + " staking hints",
                              ) +
                              "\n    ",
                          ),
                        ],
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            },
            [
              t._v(" "),
              e(
                "div",
                { staticClass: "section" },
                [
                  e("div", { staticClass: "section__header" }, [
                    e(
                      "div",
                      { staticClass: "section__icon" },
                      [
                        e("CoinIcon", {
                          attrs: { wallet: t.$wallets.getWallet(t.staking.id) },
                        }),
                      ],
                      1,
                    ),
                    t._v(" "),
                    e("div", { staticClass: "title" }, [
                      t._v(
                        "\n        " +
                          t._s(t.staking.displayTicker) +
                          t._s(t.isTRX2 ? " 2.0" : "") +
                          "\n        " +
                          t._s(t.$t("title.staking").toLowerCase()) +
                          "\n      ",
                      ),
                    ]),
                    t._v(" "),
                    t.staking.reward
                      ? e("div", { staticClass: "section__subtitle" }, [
                          e(
                            "div",
                            { staticClass: "text text_small text_green" },
                            [
                              t._v(
                                "\n          +" +
                                  t._s(t.staking.reward) +
                                  "% " +
                                  t._s(t.$t("stakingPage.yearlyYield")) +
                                  "\n        ",
                              ),
                            ],
                          ),
                        ])
                      : t._e(),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "section__body" },
                    [
                      e(
                        "div",
                        { staticClass: "section__info" },
                        t._l(t.stakingData, function (a) {
                          return e(
                            "StakingInfoItem",
                            t._b(
                              {
                                key: a.title,
                                on: { badgeClick: a.badgeClick },
                              },
                              "StakingInfoItem",
                              a,
                              !1,
                            ),
                          );
                        }),
                        1,
                      ),
                      t._v(" "),
                      e("transition", { attrs: { name: "fade" } }, [
                        t.isCoinDisabled(t.stakingAllNoWithdrawOperation)
                          ? e(
                              "div",
                              { staticClass: "section__message" },
                              t._l(
                                t.stakingAllNoWithdrawOperation,
                                function (a) {
                                  return e(
                                    "p",
                                    {
                                      key: a,
                                      staticClass:
                                        "new-text-red2 new-text-medium2",
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.getCoinDisabilityReason(a)) +
                                          "\n          ",
                                      ),
                                    ],
                                  );
                                },
                              ),
                              0,
                            )
                          : t._e(),
                        t._v(" "),
                        t.errorMessage
                          ? e("div", { staticClass: "section__message" }, [
                              e(
                                "p",
                                {
                                  staticClass: "new-text-red2 new-text-medium2",
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.errorMessage) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ])
                          : t._e(),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "section__info-row m-t-45" }, [
                        t.isTRX2
                          ? e(
                              "button",
                              {
                                staticClass: "button",
                                on: {
                                  click: function (a) {
                                    return t.$emit("make", "Stake");
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.stake")) +
                                    t._s(t.staking.displayTicker) +
                                    "\n        ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        e(
                          "button",
                          {
                            staticClass: "button outlined",
                            class: {
                              button_disabled: t.isCoinDisabled([
                                t.actionUnstake,
                              ]),
                            },
                            on: { click: t.doUnstake },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.unstake")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e(
                    "transition",
                    { attrs: { name: "fade" } },
                    [
                      t.showHelpPopup
                        ? e("SimplePopup", {
                            attrs: {
                              items: Object.values(
                                t.$t("staking." + t.coin.ticker + ".tips"),
                              ),
                              title: t.$t(
                                "staking." + t.coin.ticker + ".tipsTitle",
                              ),
                            },
                            on: {
                              onClose: function (a) {
                                t.showHelpPopup = !1;
                              },
                            },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
          );
        },
        s = [];
    },
    11642: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5810),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11643),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11643: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              e("div", { staticClass: "staking-exchange" }, [
                e(
                  "div",
                  { staticClass: "content" },
                  [
                    e("CoinIcon", { attrs: { wallet: t.coin } }),
                    t._v(" "),
                    e("div", { staticClass: "title" }, [
                      t._v(
                        "\n        " +
                          t._s(
                            t.$t("popups.tickerStaking", {
                              ticker: t.coin.ticker,
                            }),
                          ) +
                          "\n      ",
                      ),
                    ]),
                    t._v(" "),
                    t.staking.reward
                      ? e("p", { staticClass: "text-default" }, [
                          e("span", { staticClass: "text-green" }, [
                            t._v(" +" + t._s(t.staking.reward) + "% "),
                          ]),
                          t._v(
                            "\n        " +
                              t._s(t.$t("stakingPage.yearlyYield")) +
                              "\n      ",
                          ),
                        ])
                      : t._e(),
                  ],
                  1,
                ),
                t._v(" "),
                e("div", { staticClass: "content text-left" }, [
                  t.stakingBalance <= 0
                    ? e("div", { staticClass: "info-wrap" }, [
                        e("p", { staticClass: "info-text tooltip-hover" }, [
                          t._v("\n          " + t._s(t.$t("title.available"))),
                          e("span", { staticClass: "tooltip" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t(
                                    "stakingPage.coinsAvailableForStakingSending",
                                  ),
                                ),
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "info-text" }, [
                          t._v(
                            "\n          " +
                              t._s(t.formatFinance(t.available)) +
                              "\n          ",
                          ),
                          e(
                            "span",
                            { staticClass: "info-text info-text-gray" },
                            [
                              t._v(
                                "\n            " +
                                  t._s(t.coin.ticker) +
                                  "\n          ",
                              ),
                            ],
                          ),
                        ]),
                      ])
                    : e("div", { staticClass: "info-wrap" }, [
                        e("p", { staticClass: "info-text tooltip-hover" }, [
                          t._v("\n          Staked"),
                          e("span", { staticClass: "tooltip" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t(
                                    "stakingPage.coinsDelegatedToValidators",
                                  ),
                                ),
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "info-text" }, [
                          t._v(
                            "\n          " +
                              t._s(t.formatFinance(t.stakingBalance)) +
                              "\n          ",
                          ),
                          e(
                            "span",
                            { staticClass: "info-text info-text-gray" },
                            [t._v(" " + t._s(t.coin.ticker))],
                          ),
                        ]),
                      ]),
                  t._v(" "),
                  e("pre"),
                  t._v(" "),
                  t.currentValidator
                    ? e(
                        "div",
                        { staticClass: "info-wrap space-nowrap offset-top" },
                        [
                          e("p", { staticClass: "text-middle text-gray" }, [
                            t._v(
                              "\n          " +
                                t._s(t.$t("stakingPage.currentValidator")) +
                                ":\n          ",
                            ),
                            t.currentValidator
                              ? e("span", [
                                  t._v(
                                    "\n            " +
                                      t._s(t.currentValidator.name) +
                                      " - " +
                                      t._s(
                                        (
                                          100 * t.currentValidator.estimatedRoi
                                        ).toFixed(2),
                                      ) +
                                      "%\n            ",
                                  ),
                                  e("span", { staticClass: "text-gray" }, [
                                    t._v(
                                      " " +
                                        t._s(t.$t("stakingPage.yearlyYield")),
                                    ),
                                  ]),
                                ])
                              : t._e(),
                          ]),
                        ],
                      )
                    : t._e(),
                ]),
                t._v(" "),
                t.isCoinDisabled([t.actionStake])
                  ? e("div", { staticClass: "info-wrap error" }, [
                      e("p", { staticClass: "info-text" }, [
                        t._v(
                          "\n        " +
                            t._s(t.getCoinDisabilityReason(t.actionStake)) +
                            "\n      ",
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(" "),
                e("div", { staticClass: "footer-section" }, [
                  e("div", { staticClass: "button-wrap" }, [
                    e(
                      "button",
                      {
                        staticClass: "button",
                        class: {
                          disabled:
                            t.isCoinDisabled([t.actionStake]) ||
                            !Number(t.available),
                        },
                        on: {
                          click: function (a) {
                            return t.$emit("makeStake");
                          },
                        },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.$t("button.chooseBaker")) +
                            "\n        ",
                        ),
                      ],
                    ),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "content" }, [
                    e("p", {
                      directives: [
                        {
                          name: "text-html",
                          rawName: "v-text-html",
                          value: t.$t(
                            "coinTips." +
                              t.coin.ticker.toLowerCase() +
                              ".detailsOnMainPage",
                          ),
                          expression:
                            "$t(`coinTips.${coin.ticker.toLowerCase()}.detailsOnMainPage`)",
                        },
                      ],
                      staticClass: "text-small text-gray m-t-20",
                    }),
                  ]),
                ]),
              ]),
            ],
          );
        },
        s = [];
    },
    11644: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5811),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11645),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11645: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              staticClass: "staking-exchange popup",
              on: {
                close: function (a) {
                  return t.$emit("closePopup");
                },
              },
            },
            [
              e("div", { staticClass: "title not-found" }, [
                t._v("\n    " + t._s(t.$t("title.comingSoon")) + "\n  "),
              ]),
              t._v(" "),
              e("div", { staticClass: "footer-section" }, [
                e("div", { staticClass: "button-wrap" }, [
                  e(
                    "button",
                    {
                      staticClass: "button",
                      on: {
                        click: function (a) {
                          return t.$emit("closePopup");
                        },
                      },
                    },
                    [
                      t._v(
                        "\n        " + t._s(t.$t("button.goBack")) + "\n      ",
                      ),
                    ],
                  ),
                ]),
              ]),
            ],
          );
        },
        s = [];
    },
    11646: function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e(5812),
        s = e.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(n);
      var o = e(11647),
        l = e(5),
        r = !1,
        c = null,
        d = null,
        u = null,
        v = Object(l["a"])(s.a, o["a"], o["b"], r, c, d, u);
      a["default"] = v.exports;
    },
    11647: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "AtomicPopup",
            {
              on: { close: t.handleClosePopup },
              scopedSlots: t._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      t.$t("staking." + t.coin.id + ".tipsTitle") !=
                      "staking." + t.coin.id + ".tipsTitle"
                        ? e(
                            "div",
                            {
                              staticClass: "text text_small text_cta",
                              on: {
                                click: function (a) {
                                  t.isHelpPopup = !0;
                                },
                              },
                            },
                            [
                              t._v(
                                "\n      " +
                                  t._s(
                                    t.$t("staking." + t.coin.id + ".tipsTitle"),
                                  ) +
                                  "\n    ",
                              ),
                            ],
                          )
                        : t._e(),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            },
            [
              t._v(" "),
              e(
                "div",
                { staticClass: "section" },
                [
                  e("div", { staticClass: "section__header" }, [
                    e(
                      "div",
                      { staticClass: "section__icon" },
                      [e("coin-icon", { attrs: { wallet: t.coin } })],
                      1,
                    ),
                    t._v(" "),
                    e("div", { staticClass: "title" }, [
                      t._v(t._s(t.staking.displayTicker) + " staking"),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "section__subtitle" }, [
                      e("div", { staticClass: "text text_small text_green" }, [
                        t._v("+" + t._s(t.staking.reward) + "% yearly yield"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "section__body" }, [
                    e(
                      "div",
                      { staticClass: "section__info" },
                      t._l(t.config.infoItems, function (a) {
                        return e(
                          "staking-info-item",
                          t._b(
                            { key: a.title, on: { badgeClick: a.click } },
                            "staking-info-item",
                            a,
                            !1,
                          ),
                        );
                      }),
                      1,
                    ),
                    t._v(" "),
                    e(
                      "div",
                      [
                        e("transition", { attrs: { name: "fade" } }, [
                          t.detailsOnMainPage
                            ? e(
                                "div",
                                { staticClass: "section__info m-t-26" },
                                [
                                  e("p", {
                                    directives: [
                                      {
                                        name: "text-html",
                                        rawName: "v-text-html",
                                        value: t.detailsOnMainPage,
                                        expression: "detailsOnMainPage",
                                      },
                                    ],
                                    staticClass:
                                      "new-text-medium2 new-text-gray2",
                                  }),
                                ],
                              )
                            : t._e(),
                        ]),
                        t._v(" "),
                        e("transition", { attrs: { name: "fade" } }, [
                          t.errorMessage
                            ? e("div", { staticClass: "section__message" }, [
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "new-text-red2 new-text-medium2",
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.errorMessage) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        ["ZIL", "EGLD", "NEAR", "SOL"].includes(t.coin.ticker)
                          ? e("transition", { attrs: { name: "fade" } }, [
                              t.isCoinDisabled(t.stakingAllOperation)
                                ? e(
                                    "div",
                                    { staticClass: "section__message" },
                                    t._l(t.stakingAllOperation, function (a) {
                                      return e(
                                        "p",
                                        {
                                          key: a,
                                          staticClass:
                                            "new-text-red2 new-text-medium2",
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.getCoinDisabilityReason(a),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      );
                                    }),
                                    0,
                                  )
                                : t._e(),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.cosmosLikeCoins
                          .concat(["ICX"])
                          .includes(t.coin.ticker) || t.staking.isCosmosLike
                          ? e("transition", { attrs: { name: "fade" } }, [
                              t.isCoinDisabled(t.stakingAllNoWithdrawOperation)
                                ? e(
                                    "div",
                                    { staticClass: "section__message" },
                                    t._l(
                                      t.stakingAllNoWithdrawOperation,
                                      function (a) {
                                        return e(
                                          "p",
                                          {
                                            key: a,
                                            staticClass:
                                              "new-text-red2 new-text-medium2",
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.getCoinDisabilityReason(a),
                                                ) +
                                                "\n            ",
                                            ),
                                          ],
                                        );
                                      },
                                    ),
                                    0,
                                  )
                                : t._e(),
                            ])
                          : t._e(),
                        t._v(" "),
                        e("transition", { attrs: { name: "fade" } }, [
                          e("div", [
                            e(
                              "div",
                              { staticClass: "section__info-row m-t-45" },
                              [
                                ["MATIC", "BONE"].includes(t.coin.ticker)
                                  ? e(
                                      "button",
                                      {
                                        staticClass: "button",
                                        class: {
                                          button_disabled: t.isCoinDisabled([
                                            t.actionStake,
                                          ]),
                                        },
                                        attrs: {
                                          "data-test-id":
                                            "stake_" + t.staking.displayTicker,
                                        },
                                        on: {
                                          click: function (a) {
                                            return t.handleMakeEmit(
                                              0 === +t.balances.availableVotes
                                                ? "activate"
                                                : "stake",
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(
                                              0 === +t.balances.availableVotes
                                                ? "Activate"
                                                : "Stake",
                                            ) +
                                            "\n              ",
                                        ),
                                      ],
                                    )
                                  : ["ZILEVM"].includes(t.coin.id)
                                    ? e(
                                        "button",
                                        {
                                          staticClass: "button",
                                          class: {
                                            button_disabled:
                                              +t.balances.availableForStake <
                                              100,
                                          },
                                          attrs: {
                                            "data-test-id":
                                              "stake_" + t.coin.id,
                                          },
                                          on: {
                                            click: function (a) {
                                              return t.handleMakeEmit("stake");
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("button.stake")) +
                                              " " +
                                              t._s(t.staking.displayTicker) +
                                              "\n              ",
                                          ),
                                        ],
                                      )
                                    : e(
                                        "button",
                                        {
                                          staticClass: "button",
                                          attrs: {
                                            "data-test-id":
                                              "stake_" +
                                              t.staking.displayTicker,
                                          },
                                          on: {
                                            click: function (a) {
                                              return t.handleMakeEmit("stake");
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("button.stake")) +
                                              " " +
                                              t._s(t.staking.displayTicker) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                t._v(" "),
                                "ETH" === t.coin.ticker
                                  ? e(
                                      "button",
                                      {
                                        staticClass: "button outlined",
                                        attrs: {
                                          "data-test-id":
                                            "unstake_" +
                                            t.staking.displayTicker,
                                        },
                                        on: {
                                          click: function () {
                                            var a = Object.values(
                                              t.coin.tokens,
                                            ).find(function (t) {
                                              var a = t.ticker;
                                              return "stETH" === a;
                                            });
                                            t.$router.push(
                                              "/exchange?coinToSend=" +
                                                a.id +
                                                "&coinToReceive=" +
                                                t.coin.id,
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(t.$t("button.swap")) +
                                            "\n              ",
                                        ),
                                      ],
                                    )
                                  : e(
                                      "button",
                                      {
                                        staticClass: "button outlined",
                                        class: {
                                          button_disabled:
                                            t.isCoinDisabled([
                                              t.actionUnstake,
                                            ]) ||
                                            ("ZOL" === t.coin.tiker &&
                                              t.coin.balances.total <= 0),
                                        },
                                        attrs: {
                                          "data-test-id":
                                            "unstake_" +
                                            t.staking.displayTicker,
                                        },
                                        on: {
                                          click:
                                            t.config.actions.clicks.unstake,
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(t.$t("button.unstake")) +
                                            "\n              ",
                                        ),
                                      ],
                                    ),
                              ],
                            ),
                          ]),
                        ]),
                      ],
                      1,
                    ),
                  ]),
                  t._v(" "),
                  e(
                    "transition",
                    { attrs: { name: "fade" } },
                    [
                      t.isHelpPopup
                        ? e("simple-popup", {
                            attrs: {
                              items: Object.values(
                                t.$t("staking." + t.coin.id + ".tips"),
                              ),
                              title: t.$t(
                                "staking." + t.coin.id + ".tipsTitle",
                              ),
                            },
                            on: {
                              onClose: function (a) {
                                t.isHelpPopup = !1;
                              },
                            },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
          );
        },
        s = [];
    },
    11648: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return i;
      }),
        e.d(a, "b", function () {
          return s;
        }));
      var i = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i(
            "div",
            [
              t.showSendStakePopup
                ? [
                    "ADA" === t.coin.ticker
                      ? i("SendStakeADA", {
                          attrs: { coin: t.coin, sendType: t.sendType },
                          on: { closePopup: t.togglePopups },
                        })
                      : [
                            "SOL",
                            "NEAR",
                            "ATOM",
                            "BAND",
                            "OSMO",
                            "LUNA",
                            "KAVA",
                            "FET",
                            "INJ",
                            "CRO",
                            "LUNC",
                            "BONE",
                          ].includes(t.coin.ticker) ||
                          t.staking.isCosmosLike ||
                          "ZILEVM" === t.coin.id
                        ? i("SendStake", {
                            attrs: { coin: t.coin, sendType: t.sendType },
                            on: { closePopup: t.togglePopups },
                          })
                        : "AWC-986" === t.coin.ticker
                          ? i("SendStakeAWC", {
                              attrs: { coin: t.coin, sendType: t.sendType },
                              on: { closePopup: t.togglePopups },
                            })
                          : "BNB" === t.coin.ticker
                            ? i("SendStakeBNB", {
                                attrs: { coin: t.coin, sendType: t.sendType },
                                on: { closePopup: t.togglePopups },
                              })
                            : "ICX" === t.coin.ticker &&
                                ["Stake", "Unstake", "Claim"].includes(
                                  t.sendType,
                                )
                              ? i("SendStakeICX", {
                                  attrs: { coin: t.coin, sendType: t.sendType },
                                  on: { closePopup: t.togglePopups },
                                })
                              : "TRX" === t.coin.ticker
                                ? i("SendStakeTRX", {
                                    attrs: {
                                      staking: t.staking,
                                      coin: t.coin,
                                      sendType: t.sendType,
                                    },
                                    on: { closePopup: t.togglePopups },
                                  })
                                : "XTZ" === t.coin.ticker
                                  ? i("SendStakeXTZ", {
                                      attrs: {
                                        coin: t.coin,
                                        sendType: t.sendType,
                                      },
                                      on: { closePopup: t.togglePopups },
                                    })
                                  : "ZIL" === t.coin.ticker
                                    ? i("SendStakeZIL", {
                                        attrs: {
                                          coin: t.coin,
                                          sendType: t.sendType,
                                        },
                                        on: { closePopup: t.togglePopups },
                                      })
                                    : "ICX" === t.coin.ticker &&
                                        ["Vote", "Revote"].includes(t.sendType)
                                      ? i("SendVoteICX", {
                                          attrs: {
                                            coin: t.coin,
                                            sendType: t.sendType,
                                          },
                                          on: { closePopup: t.togglePopups },
                                        })
                                      : "ETH" === t.coin.ticker
                                        ? i("SendStakeETH", {
                                            attrs: {
                                              coin: t.coin,
                                              sendType: t.sendType,
                                            },
                                            on: { closePopup: t.togglePopups },
                                          })
                                        : "EGLD" === t.coin.ticker
                                          ? i("SendStakeEGLD", {
                                              attrs: {
                                                coin: t.coin,
                                                sendType: t.sendType,
                                              },
                                              on: {
                                                closePopup: t.togglePopups,
                                              },
                                            })
                                          : "FLR" === t.coin.ticker
                                            ? i("SendStakeFLR", {
                                                attrs: {
                                                  coin: t.coin,
                                                  sendType: t.sendType,
                                                },
                                                on: {
                                                  closePopup: t.togglePopups,
                                                },
                                              })
                                            : "MATIC" === t.coin.ticker
                                              ? i("SendStakeMATIC", {
                                                  attrs: {
                                                    coin: t.coin,
                                                    sendType: t.sendType,
                                                  },
                                                  on: {
                                                    closePopup: t.togglePopups,
                                                  },
                                                })
                                              : i("SendStakeHBAR", {
                                                  attrs: {
                                                    coin: t.coin,
                                                    sendType: t.sendType,
                                                  },
                                                  on: {
                                                    closePopup: t.togglePopups,
                                                  },
                                                }),
                  ]
                : [
                    [
                      "ETH",
                      "MATIC",
                      "ATOM",
                      "BAND",
                      "OSMO",
                      "LUNC",
                      "LUNA",
                      "KAVA",
                      "INJ",
                      "CRO",
                      "FLR",
                      "HBAR",
                      "BNB",
                      "ICX",
                      "ZIL",
                      "EGLD",
                      "NEAR",
                      "SOL",
                      "BONE",
                    ].includes(t.coin.ticker) || t.staking.isCosmosLike
                      ? i("StakingPopupCoin", {
                          attrs: { staking: t.staking },
                          on: { make: t.make, closePopup: t.handleClosePopup },
                        })
                      : "ADA" === t.coin.ticker
                        ? i("StakingPopupADA", {
                            attrs: { staking: t.staking },
                            on: {
                              makeClaim: t.makeClaim,
                              makeStake: t.makeStake,
                              closePopup: t.handleClosePopup,
                            },
                          })
                        : "AWC-986" === t.coin.ticker
                          ? i("StakingPopupAWC", {
                              attrs: { staking: t.staking },
                              on: {
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                closePopup: t.handleClosePopup,
                              },
                            })
                          : "XTZ" === t.coin.ticker
                            ? i("StakingPopupXTZ", {
                                attrs: { staking: t.staking },
                                on: {
                                  makeStake: t.makeStake,
                                  closePopup: t.handleClosePopup,
                                },
                              })
                            : "TRX" === t.coin.ticker
                              ? i("StakingPopupTRX", {
                                  attrs: { staking: t.staking },
                                  on: {
                                    make: t.make,
                                    closePopup: t.handleClosePopup,
                                  },
                                })
                              : "VET" === t.coin.ticker
                                ? i("StakingPopupVET", {
                                    attrs: { staking: t.staking },
                                    on: { closePopup: t.handleClosePopup },
                                  })
                                : "KMD" === t.coin.ticker
                                  ? i("StakingPopupKMD", {
                                      attrs: { staking: t.staking },
                                      on: { closePopup: t.handleClosePopup },
                                    })
                                  : i("StakingPopupNotFound", {
                                      on: { closePopup: t.handleClosePopup },
                                    }),
                  ],
              t._v(" "),
              t.showWarning && "HBAR" === t.coin.ticker
                ? i("div", { staticClass: "section__warning section" }, [
                    i(
                      "div",
                      {
                        staticClass: "section__warning-close",
                        on: {
                          click: function (a) {
                            t.showWarning = !1;
                          },
                        },
                      },
                      [i("img", { attrs: { src: e(237) } })],
                    ),
                    t._v(" "),
                    i("div", { staticClass: "section__warning-body" }, [
                      i(
                        "p",
                        { staticClass: "new-text-extra-large text-center" },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.tickerAlreadyStackedWarn) +
                              "\n      ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      i("div", { staticClass: "section__info-row m-t-45" }, [
                        i(
                          "button",
                          {
                            staticClass: "button",
                            on: {
                              click: function (a) {
                                t.showWarning = !1;
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.cancel")) +
                                "\n        ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            staticClass: "button outlined",
                            on: { click: t.makeStake },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.continue")) +
                                "\n        ",
                            ),
                          ],
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
            ],
            2,
          );
        },
        s = [];
    },
    3159: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.maskInput = l));
      const i = /[^0-9.,]+/g,
        s = /[^0-9.,]|[.,](?=.*[.,])|[.,](?=.^[0-9]{3}[.,])/g,
        n = 100,
        o = (t) => {
          if (
            (null === t || void 0 === t ? void 0 : t.length) > 1 &&
            t.startsWith("0")
          ) {
            const [, ...a] = t;
            return o(a.join(""));
          }
          return t;
        };
      function l(t, a, e) {
        let l;
        (void 0 === a && (a = n),
          !e &&
            [".", ",", "0"].some((a) => t.startsWith(a)) &&
            ((t = t.split("")), (t[0] = "0."), (t = t.join(""))));
        const r = t.replace(i, "").replace(s, ""),
          c = r.split(/\.|,/),
          [d, u] = c;
        return (
          (l = o(d)),
          e
            ? l
            : (c.splice(0, 1, l),
              u && u.length >= a && c.splice(1, 2, u.slice(0, a)),
              c.join("."))
        );
      }
    },
    5783: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = i(e(11594)),
        n = i(e(11599)),
        o = i(e(11601)),
        l = i(e(11603)),
        r = i(e(11605)),
        c = i(e(11607)),
        d = i(e(11609)),
        u = i(e(11614)),
        v = i(e(11616)),
        k = i(e(11618)),
        h = i(e(11620)),
        p = i(e(11622)),
        g = i(e(11624)),
        m = i(e(11626)),
        b = i(e(11628)),
        _ = i(e(11630)),
        f = i(e(11632)),
        w = i(e(11634)),
        C = i(e(11636)),
        S = i(e(11642)),
        y = i(e(11644)),
        $ = i(e(11646));
      a.default = {
        name: "StakingPopupTabs",
        components: {
          SendStake: s.default,
          SendStakeFLR: g.default,
          SendStakeADA: n.default,
          SendStakeAWC: o.default,
          SendStakeBNB: r.default,
          SendStakeICX: l.default,
          SendStakeTRX: c.default,
          SendStakeXTZ: d.default,
          SendStakeZIL: u.default,
          SendVoteICX: v.default,
          SendStakeETH: k.default,
          SendStakeEGLD: h.default,
          SendStakeHBAR: p.default,
          SendStakeMATIC: m.default,
          StakingPopupNotFound: y.default,
          StakingPopupCoin: $.default,
          StakingPopupKMD: f.default,
          StakingPopupADA: b.default,
          StakingPopupVET: _.default,
          StakingPopupAWC: w.default,
          StakingPopupTRX: C.default,
          StakingPopupXTZ: S.default,
        },
        props: { staking: { type: Object, default: () => ({}) } },
        data: () => ({
          showWarning: !1,
          showSendStakePopup: !1,
          sendType: "",
          payload: null,
        }),
        computed: {
          coin() {
            var t, a;
            return (
              (this.staking.contract &&
                (null ===
                  (t = (a = this.staking.walletInstance)
                    .getCoinForStakingContract) || void 0 === t
                  ? void 0
                  : t.call(a, this.staking.contract))) ||
              this.staking.walletInstance
            );
          },
          staked() {
            var t, a, e;
            return (
              (null === (t = (a = this.coin).getStakedBalance) ||
              void 0 === t ||
              null === (e = t.call(a)) ||
              void 0 === e
                ? void 0
                : e.toCurrency()) || "0"
            );
          },
          tickerAlreadyStackedWarn() {
            return (
              this.$t("message.tickerAlreadyStackedWarnA", {
                staked: this.staked,
                ticker: this.coin.ticker,
              }) +
              "\n" +
              this.$t("message.tickerAlreadyStackedWarnB", {
                ticker: this.coin.ticker,
              })
            );
          },
        },
        created() {
          (this.$bus.$on("close-staking-popup", this.handleClosePopup),
            this.coin.getInfo());
        },
        beforeDestroy() {
          this.$bus.$off("close-staking-popup", this.handleClosePopup);
        },
        methods: {
          handleClosePopup() {
            this.$emit("closePopup");
          },
          togglePopups() {
            this.showSendStakePopup = !this.showSendStakePopup;
          },
          makeStake() {
            ((this.sendType = "Stake"),
              (this.showWarning = !1),
              this.togglePopups());
          },
          makeUnstake() {
            ((this.sendType = "Unstake"), this.togglePopups());
          },
          makeWithdrawal() {
            ((this.sendType = "Withdrawal"), this.togglePopups());
          },
          makeVote() {
            ((this.sendType = "Vote"), this.togglePopups());
          },
          makeClaim() {
            ((this.sendType = "Claim"), this.togglePopups());
          },
          make(t, a) {
            "Stake" === t && "HBAR" === this.coin.ticker && +this.staked > 0
              ? (this.showWarning = !0)
              : ((this.sendType = t), (this.payload = a), this.togglePopups());
          },
        },
      };
    },
    5797: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(60),
        n = i(e(232)),
        o = e(375),
        l = i(e(2842)),
        r = i(e(3362)),
        c = i(e(2969)),
        d = i(e(2922)),
        u = i(e(3074)),
        v = e(804),
        k = i(e(798));
      const h = 100,
        p = 100;
      a.default = {
        name: "SendVoteICX",
        components: {
          Edit: l.default,
          EditAmount: c.default,
          SendCoinResult: d.default,
          Dropdown: r.default,
          AvailableAndFeeAmounts: u.default,
        },
        mixins: [o.SettingsMixin, o.SendStakeMixin],
        props: {
          sendType: { type: String, default: "Stake" },
          isStakeVotes: { type: Boolean, default: !1 },
        },
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
          stakingProfit: 0,
          selectedValidator: "",
        }),
        computed: {
          ...(0, s.mapGetters)(["fiatRate"]),
          sendText() {
            return this.$t("sendType." + this.sendType);
          },
          yearlyYield() {
            const t = 20,
              a = new n.default(t).dividedBy(p),
              e = a.multipliedBy(this.amount);
            return Number(e) || 0;
          },
          availableVotes() {
            var t, a, e, i, s, n;
            return "Vote" === this.sendType
              ? (null === (i = (s = this.coin).getAvailableVotes) ||
                void 0 === i ||
                null === (n = i.call(s)) ||
                void 0 === n
                  ? void 0
                  : n.toCurrency()) || "0"
              : (null === (t = (a = this.coin).getDelegatedVotes) ||
                void 0 === t ||
                null === (e = t.call(a)) ||
                void 0 === e
                  ? void 0
                  : e.toCurrency()) || "0";
          },
          icon() {
            return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`;
          },
          availableValidators() {
            return (this.stakingValidators || []).map((t) => {
              let { name: a, reward: e } = t;
              return { primary: a, additional: e + "%" };
            });
          },
          stakingValidator() {
            var t;
            return null === (t = this.coin) || void 0 === t
              ? void 0
              : t.predefinedValidators[0];
          },
          stakingValidators() {
            var t;
            return null === (t = this.coin) || void 0 === t
              ? void 0
              : t.predefinedValidators;
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
        created() {
          try {
            const t = [],
              a = this.stakingValidators,
              e =
                this.availableValidators.find(
                  (t) =>
                    t.primary ===
                    (this.stakingSettings &&
                      this.stakingSettings.defaultValidator),
                ) || a[0].name;
            this.selectedValidator = e ? e.primary : a[0].name || t[0];
          } catch (t) {
            (console.log("SendVoteICX: created hook failed"), console.error(t));
          }
        },
        async mounted() {
          (await this.updateBalanceAndFee(),
            (this.amount = this.availableVotes),
            this.$bus.$on("close-send-coin", this.backToWallets));
        },
        beforeDestroy() {
          this.$bus.$off("close-send-coin", this.backToWallets);
        },
        methods: {
          hasRate: v.hasRate,
          getValueFiat: v.getValueFiat,
          formatFinance: k.default,
          setAllAvailableBalance() {
            ((this.isSendAllClick = !this.isSendAllClick),
              (this.isOnSendAll = !0),
              (this.amount = String(this.availableVotes) || "0"));
          },
          async updateBalanceAndFee() {
            await this.getFee();
          },
          async validateFee() {
            const t = new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee));
            this.isFeeEnough = t.lt(this.coin.indivisibleBalance);
          },
          async getFee() {
            this.feeLoading = !0;
            const t = await this.coin.getFee();
            ((this.fee.fee = this.coin.toCurrencyUnit(t)),
              (this.fee.ticker = this.coin.ticker),
              await this.validateFee(),
              (this.feeLoading = !1));
          },
          validateAmount() {
            this.amountError = "";
            const t = this.coin.balances.availableVotes,
              a = Number(t) < Number(this.amount);
            return (
              a && (this.amountError = this.$t("error.notEnoughForVote")),
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
              this.validatePassword())
            ) {
              ((this.isPasswordShow = !1), (this.sending = !0));
              const t = this.sendType.toLowerCase(),
                a = await this.coin[t]({
                  amount: this.amount,
                  validator: this.stakingValidator.address,
                }).catch((a) => {
                  (console.log(a),
                    this.$wallets.logger.error({
                      type: "Send",
                      error: a.toString(),
                      url: `Staking ${this.coin.ticker}: ${t}`,
                      currency: this.coin.getUserTicker(),
                    }),
                    (this.isError = !0));
                });
              ((this.txid = a),
                (this.sendAmount = this.amount),
                this.isError || (this.isSuccess = !0),
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
          backToWallets() {
            (this.clearInputs(), this.$emit("closePopup"));
          },
          backToForm() {
            (this.clearInputs(),
              setTimeout(() => {
                ((this.isSuccess = !1), this.updateBalanceAndFee());
              }, h));
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
    5803: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(375),
        n = i(e(802)),
        o = i(e(798));
      const l = 4,
        r = 0.3;
      a.default = {
        name: "StakingPopupADA",
        components: { CoinIcon: n.default },
        mixins: [s.DisabledCoinMixin, s.StakingMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data() {
          return {
            claiming: !1,
            claimOk: !1,
            claimFail: !1,
            disabled: !1,
            showWarning: !1,
            currentValidator: null,
          };
        },
        computed: {
          inSufficientBalanceText() {
            return this.$t("error.networkFeeHigherThanReward", {
              amount: this.minReward,
              ticker: this.coin.ticker,
            });
          },
          isRewardEnough() {
            var t, a;
            return (
              Number(
                (null === (t = this.coin) ||
                void 0 === t ||
                null === (a = t.balances) ||
                void 0 === a
                  ? void 0
                  : a.rewards) || 0,
              ) >= this.minReward
            );
          },
          minReward() {
            return r;
          },
          stakingBalance() {
            return (
              (this.coin.balances &&
                this.coin.balances.staking &&
                this.coin.toCurrencyUnit(
                  this.coin.balances.staking.total || "0",
                )) ||
              0
            );
          },
          haveEnoughtBalance() {
            var t, a;
            return (
              ((null === (t = this.coin) ||
              void 0 === t ||
              null === (a = t.balances) ||
              void 0 === a
                ? void 0
                : a.available) || 0) > l
            );
          },
        },
        async beforeMount() {
          try {
            (await this.coin.getPredefinedValidators(),
              await this.setCurrentValidator());
          } catch (t) {
            console.error(t);
          }
        },
        methods: {
          formatFinance: o.default,
          async setCurrentValidator() {
            var t, a, e, i, s, n;
            const o =
                null !==
                  (t =
                    null === (a = this.coin.balances) ||
                    void 0 === a ||
                    null === (e = a.staking) ||
                    void 0 === e
                      ? void 0
                      : e.validator) && void 0 !== t
                  ? t
                  : "",
              l =
                null !==
                  (i = await (null ===
                    (s = this.$staking
                      .getStakingInterface(this.coin.ticker)
                      .getValidator(o)) || void 0 === s
                    ? void 0
                    : s.name)) && void 0 !== i
                  ? i
                  : null,
              r = {
                ac2d2d66a30cbb3163e68a7073bcd3f9cdd4a11a8af6e2c5653402c7:
                  "Everstake",
              };
            this.currentValidator =
              null !==
                (n =
                  null !== l && void 0 !== l
                    ? l
                    : null === r || void 0 === r
                      ? void 0
                      : r[o]) && void 0 !== n
                ? n
                : null;
          },
          clearClaimStatus(t) {
            (t ? (this.claimOk = !1) : (this.claimFail = !1),
              (this.claiming = !1));
          },
          async claimReward() {
            ((this.errorMessage = ""),
              this.isRewardEnough
                ? this.$emit("makeClaim")
                : (this.errorMessage = this.inSufficientBalanceText));
          },
          onClickPool() {
            this.haveEnoughtBalance
              ? this.currentValidator
                ? (this.showWarning = !0)
                : this.makeStake()
              : (this.disabled = !0);
          },
          cancel() {
            this.showWarning = !1;
          },
          makeStake() {
            this.haveEnoughtBalance
              ? this.$emit("makeStake")
              : (this.disabled = !0);
          },
        },
      };
    },
    5804: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(375),
        n = i(e(802)),
        o = i(e(798));
      a.default = {
        name: "StakingPopupVET",
        components: { CoinIcon: n.default },
        mixins: [s.DisabledCoinMixin, s.StakingMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data: () => ({
          settings: {
            rate: "2314.8",
            receiveWalletId: "VTHO",
            tickerToSend: "BTC",
            tickerToReceive: "VET",
          },
        }),
        methods: { formatFinance: o.default },
      };
    },
    5805: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(375),
        n = i(e(2842)),
        o = i(e(802)),
        l = i(e(2922)),
        r = i(e(798));
      const c = 0;
      a.default = {
        name: "StakingPopupKMD",
        components: {
          CoinIcon: o.default,
          SendCoinResult: l.default,
          Edit: n.default,
        },
        mixins: [s.DisabledCoinMixin, s.StakingMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data: () => ({
          settings: {
            receiveWalletId: "KMD",
            tickerToSend: "BTC",
            tickerToReceive: "KMD",
          },
          inputs: { amount: "", address: "", password: "" },
          inputsError: { amount: "", address: "", password: "" },
          inputTypePassword: "password",
          isShowPasswordForm: !1,
        }),
        methods: {
          formatFinance: r.default,
          backFromPassword() {
            ((this.isShowPasswordForm = !1), (this.inputsError.password = ""));
          },
          showPasswordForm() {
            const { isValid: t, message: a } = this.validate();
            t ? (this.isShowPasswordForm = !0) : (this.errorMessage = a);
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
          async sendCoins() {
            (await this.validatePassword()) &&
              ((this.isShowPasswordForm = !1), this.claim());
          },
          validate() {
            let t = "";
            return (
              0 === Number(this.unclaimed)
                ? (t = this.$t("message.unclaimedKMDNotFound"))
                : this.unclaimed < c &&
                  (t = this.$t("error.MinClaimAmount", {
                    amount: c,
                    ticker: "KMD",
                  })),
              { isValid: !t, message: t }
            );
          },
        },
      };
    },
    5806: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(60),
        n = e(85),
        o = e(375),
        l = i(e(802)),
        r = i(e(798));
      const c = [
        { min: 10, max: 999, persent: 17 },
        { min: 1e3, max: 9999, persent: 20 },
        { min: 1e4, persent: 23 },
      ];
      a.default = {
        name: "StakingPopupAWC",
        components: { CoinIcon: l.default },
        mixins: [o.DisabledCoinMixin, o.StakingMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data() {
          return {
            balances: { total: "0", available: "0", staked: "0", rewards: c },
          };
        },
        computed: {
          ...(0, s.mapGetters)(["stakingSettings"]),
          reward() {
            const t = this.balances.rewards.find(
              (t) =>
                this.balances.staked >= t.min && this.balances.staked <= t.max,
            );
            if (!t) {
              const t = this.balances.rewards[this.balances.rewards.length - 1];
              return this.balances.staked >= t.min
                ? t.persent
                : this.staking.reward;
            }
            return t.persent;
          },
        },
        beforeMount() {
          const { topic: t } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
          (this.$emitter.on(t, () => this.setBalances()),
            this.setBalances(),
            this.fetchCoinInfo());
        },
        beforeDestroy() {
          const { topic: t } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
          this.$emitter.removeListener(t, () => this.setBalances());
        },
        methods: {
          formatFinance: r.default,
          setBalances() {
            var t, a, e, i;
            const s = {
              total:
                null !==
                  (t = this.coin.toCurrencyUnit(this.coin.balance || 0)) &&
                void 0 !== t
                  ? t
                  : "0",
              available:
                null !==
                  (a = this.coin.balances && this.coin.balances.available) &&
                void 0 !== a
                  ? a
                  : "0",
              staked:
                null !==
                  (e = this.coin.balances && this.coin.balances.frozen) &&
                void 0 !== e
                  ? e
                  : "0",
              rewards:
                (null ===
                  (i = this.stakingSettings.find((t) => {
                    let { ticker: a } = t;
                    return a === this.coin.ticker;
                  })) || void 0 === i
                  ? void 0
                  : i.rewards) || c,
            };
            this.balances = Object.assign({}, this.balances, {
              ...this.balances,
              ...s,
            });
          },
        },
      };
    },
    5807: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(375),
        n = i(e(802)),
        o = i(e(6974)),
        l = i(e(6975)),
        r = e(85);
      a.default = {
        name: "StakingPopupTRX",
        components: {
          CoinIcon: n.default,
          SimplePopup: o.default,
          StakingInfoItem: l.default,
        },
        mixins: [s.StakingMixin, s.DisabledCoinMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data: () => ({
          total: "0",
          frozen: "0",
          reward: "0",
          staked: "0",
          availableForStake: "0",
          pendingWithdrawals: "0",
          availableWithdrawals: "0",
          showHelpPopup: !1,
          errorMessage: "",
        }),
        computed: {
          isTRX2() {
            return this.staking.isTRX2;
          },
          stakingData() {
            let t = [
              { title: this.$t("title.totalVotes"), value: this.frozen },
            ];
            return (
              this.isTRX2 &&
                (t = [
                  {
                    title: this.$t("staking.labels.available"),
                    value: this.availableForStake,
                    badge: { title: "Stake", show: this.isTRX2 },
                    badgeClick: () => this.$emit("make", "Stake"),
                  },
                  {
                    title: this.$t("staking.labels.staked"),
                    value: this.staked,
                  },
                  {
                    title: this.$t("staking.labels.unclaimedRewards"),
                    value: this.reward,
                    badge: { title: "Claim", show: !0 },
                    badgeClick: () => this.makeClaim(),
                  },
                  {
                    title: this.$t("title.totalVotes"),
                    value: this.frozen,
                    badge: {
                      title: this.$t("button.vote"),
                      show: !0,
                      disabled: !Number(this.frozen),
                    },
                    badgeClick: () => this.$emit("make", "Vote"),
                  },
                  {
                    title: this.$t("staking.labels.pendingWithdrawal"),
                    value: this.pendingWithdrawals,
                  },
                  {
                    title: this.$t("staking.labels.availableWithdrawal"),
                    value: this.availableWithdrawals,
                    badge: {
                      title: this.$t("button.withdraw"),
                      show: !0,
                      disabled: !Number(this.availableWithdrawals),
                    },
                    badgeClick: () => this.$emit("make", "Withdrawal"),
                  },
                  { title: this.$t("staking.labels.total"), value: this.total },
                ]),
              t.map((t) => ({
                ...t,
                badgeClick: t.badgeClick ? t.badgeClick : () => null,
                value: t.value,
                ticker: this.coin.ticker,
              }))
            );
          },
          minClaimAmount() {
            return this.coin.toCurrencyUnit(3 * +this.coin.fee);
          },
          isFeeEnough() {
            return (
              +this.availableForStake > +this.coin.toCurrencyUnit(this.coin.fee)
            );
          },
        },
        beforeMount() {
          var t, a;
          this.getBalances();
          const { topic: e } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
          (this.$emitter.on(e, this.getBalances),
            null === (t = this.coin) ||
              void 0 === t ||
              null === (a = t.getPredefinedValidators) ||
              void 0 === a ||
              a.call(t));
        },
        beforeDestroy() {
          const { topic: t } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
          this.$emitter.removeListener(t, this.getBalances);
        },
        methods: {
          makeClaim() {
            this.isFeeEnough
              ? this.$emit("make", "Claim")
              : (this.errorMessage = this.$t(
                  "error.networkFeeHigherThanReward",
                  { amount: this.minClaimAmount, ticker: "TRX" },
                ));
          },
          getBalances() {
            var t,
              a,
              e,
              i,
              s,
              n,
              o,
              l,
              r,
              c,
              d,
              u,
              v,
              k,
              h,
              p,
              g,
              m,
              b,
              _,
              f,
              w;
            ((this.total =
              (null === (t = (a = this.coin).getTotalBalance) ||
              void 0 === t ||
              null === (e = t.call(a)) ||
              void 0 === e
                ? void 0
                : e.toCurrency()) || "0"),
              (this.staked =
                (null === (i = (s = this.coin).getStakedBalance) ||
                void 0 === i ||
                null === (n = i.call(s)) ||
                void 0 === n
                  ? void 0
                  : n.toCurrency()) || "0"),
              (this.reward =
                (null === (o = (l = this.coin).getRewards) ||
                void 0 === o ||
                null === (r = o.call(l)) ||
                void 0 === r
                  ? void 0
                  : r.toCurrency()) || "0"),
              (this.frozen = this.isTRX2
                ? (null === (c = (d = this.coin).getFrozenVotes) || void 0 === c
                    ? void 0
                    : c.call(d).toCurrency()) || "0"
                : (null === (u = (v = this.coin).getFrozenV1Votes) ||
                  void 0 === u
                    ? void 0
                    : u.call(v).toCurrency()) || "0"),
              (this.availableForStake =
                (null === (k = (h = this.coin).getAvailableBalance) ||
                void 0 === k ||
                null === (p = k.call(h)) ||
                void 0 === p
                  ? void 0
                  : p.toCurrency()) || "0"),
              (this.availableWithdrawals =
                (null === (g = (m = this.coin).getAvailableWithdrawals) ||
                void 0 === g ||
                null === (b = g.call(m)) ||
                void 0 === b
                  ? void 0
                  : b.toCurrency()) || "0"),
              (this.pendingWithdrawals =
                (null === (_ = (f = this.coin).getPendingWithdrawals) ||
                void 0 === _ ||
                null === (w = _.call(f)) ||
                void 0 === w
                  ? void 0
                  : w.toCurrency()) || "0"));
          },
          doUnstake() {
            var t, a;
            if (this.isTRX2) return void this.$emit("make", "Unstake");
            this.errorMessage = "";
            const e =
              null === (t = (a = this.coin).getFreezeExpiration) || void 0 === t
                ? void 0
                : t.call(a);
            +e > 0
              ? (this.errorMessage = this.$t(
                  "stakingPopupTRX.unstakingAvailableInHours",
                  { expiration: e },
                ))
              : 0 === +this.frozen
                ? (this.errorMessage = this.$t(
                    "stakingPage.nothingToUnstakeDelegateTRXFirst",
                  ))
                : this.$emit("make", "Unstake");
          },
        },
      };
    },
    5810: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = i(e(802)),
        n = e(375),
        o = i(e(798));
      a.default = {
        name: "StakingPopupXTZ",
        components: { CoinIcon: s.default },
        mixins: [n.DisabledCoinMixin, n.StakingMixin],
        props: { staking: { type: Object, default: () => ({}) } },
        data() {
          return { currentValidator: null };
        },
        computed: {
          stakingBalance() {
            return this.total && this.available ? this.total : 0;
          },
          total() {
            var t, a, e;
            return +(null !==
              (t =
                null === (a = this.coin.balances) ||
                void 0 === a ||
                null === (e = a.staking) ||
                void 0 === e
                  ? void 0
                  : e.total) && void 0 !== t
              ? t
              : 0);
          },
          available() {
            var t, a;
            return +(null !==
              (t =
                null === (a = this.coin.balances) || void 0 === a
                  ? void 0
                  : a.available) && void 0 !== t
              ? t
              : 0);
          },
        },
        async beforeMount() {
          try {
            (await this.coin.getPredefinedValidators(),
              await this.setCurrentValidator());
          } catch (t) {
            console.error(t);
          }
        },
        methods: {
          formatFinance: o.default,
          async setCurrentValidator() {
            var t, a, e;
            this.currentValidator = await this.$staking
              .getStakingInterface(this.coin.ticker)
              .getValidator(
                null !==
                  (t =
                    null === (a = this.coin.balances) ||
                    void 0 === a ||
                    null === (e = a.staking) ||
                    void 0 === e
                      ? void 0
                      : e.validator) && void 0 !== t
                  ? t
                  : "",
              );
          },
        },
      };
    },
    5811: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var i = e(375);
      a.default = { name: "StakingPopupNotFound", mixins: [i.StakingMixin] };
    },
    5812: function (t, a, e) {
      "use strict";
      var i = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(85),
        n = i(e(232)),
        o = e(375),
        l = i(e(6974)),
        r = i(e(6975)),
        c = i(e(802)),
        d = e(856);
      const u = [
          "ATOM",
          "BAND",
          "OSMO",
          "LUNC",
          "FET",
          "LUNA",
          "KAVA",
          "INJ",
          "CRO",
        ],
        v = ["NEAR", "ETH", "HBAR", "EGLD", "MATIC", "LUNC", "SOL", "BONE"],
        k = [...u, "FLR", "ICX", "EGLD", "BONE"];
      a.default = {
        name: "StakingPopupCoin",
        components: {
          SimplePopup: l.default,
          StakingInfoItem: r.default,
          CoinIcon: c.default,
        },
        mixins: [o.DisabledCoinMixin],
        props: { staking: { type: Object, required: !0 } },
        data() {
          return {
            cosmosLikeCoins: u,
            config: { infoItems: {}, actions: {} },
            fee: "0",
            errorMessage: "",
            isHelpPopup: !1,
            balances: {
              total: "0",
              available: "0",
              availableForStake: "0",
              availableForUnstake: "0",
              frozenEnergy: "0",
              staked: "0",
              rewards: "0",
              unstaking: "0",
              pendingWithdrawals: "0",
              availableWithdrawals: "0",
              availableVotes: "0",
              delegatedVotes: "0",
              frozenVotes: "0",
              divisibleBalance: "0",
            },
            fetchCoinInfoTimeout: null,
          };
        },
        computed: {
          coin() {
            var t, a;
            return (
              (this.staking.contract &&
                (null ===
                  (t = (a = this.staking.walletInstance)
                    .getCoinForStakingContract) || void 0 === t
                  ? void 0
                  : t.call(a, this.staking.contract))) ||
              this.staking.walletInstance
            );
          },
          detailsOnMainPage() {
            const t = this.coin.ticker.toLowerCase(),
              a = `coinTips.${t}.detailsOnMainPage`;
            return (this.$t(a) !== a && this.$t(a)) || "";
          },
        },
        async beforeMount() {
          const { topic: t } = (0, s.STAKING_BALANCES_UPDATED)(this.coin.id);
          var a, e;
          (this.$emitter.on(t, () => this.setBalances()),
          this.$bus.$on("close-staking-exchange-popup", this.handleClosePopup),
          v.includes(this.coin.ticker)) &&
            (null === (a = (e = this.coin).getStakingInfo) ||
              void 0 === a ||
              a.call(e));
          const i = localStorage.getItem(
            `${this.coin.id}-${this.coin.ticker}-staking-fee`,
          );
          (i && (this.fee = i), this.setBalances());
          try {
            var n, o;
            await (null === (n = (o = this.coin).getStakingInfo) || void 0 === n
              ? void 0
              : n.call(o));
          } catch (c) {
            console.log(c);
          }
          try {
            var l, r;
            await (null === (l = (r = this.coin).getPredefinedValidators) ||
            void 0 === l
              ? void 0
              : l.call(r));
          } catch (c) {
            console.log(c);
          }
          ((k.includes(this.coin.ticker) || this.staking.isCosmosLike) &&
            ((this.fee = await this.coin.getFee({
              gasLimit: this.coin.stakingGasLimit,
            })),
            localStorage.setItem(
              `${this.coin.id}-${this.coin.ticker}-staking-fee`,
              this.fee,
            )),
            this.setBalances(),
            this.fetchCoinInfo());
        },
        beforeDestroy() {
          const { topic: t } = (0, s.STAKING_BALANCES_UPDATED)(this.coin.id);
          (this.$emitter.removeListener(t, () => this.setBalances()),
            this.$bus.$off(
              "close-staking-exchange-popup",
              this.handleClosePopup,
            ),
            clearTimeout(this.fetchCoinInfoTimeout));
        },
        methods: {
          fetchCoinInfo() {
            ["ZIL", "EGLD", "BONE", "MATIC"].includes(this.staking.ticker) &&
              (clearTimeout(this.fetchCoinInfoTimeout),
              (this.fetchCoinInfoTimeout = setTimeout(async () => {
                try {
                  "AWC-986" === this.staking.ticker
                    ? await this.parent.getInfo()
                    : await this.coin.getInfo();
                } catch (t) {
                  console.log(t);
                } finally {
                  this.setBalances();
                }
              }, 25e3)));
          },
          setConfig() {
            var t, a, e, i, s, o, l, r, c, v, k;
            const h = this,
              p = h.$t("staking.labels"),
              g = h.balances;
            let m = {
              staked: g.staked,
              availableWithdrawals: g.availableWithdrawals,
              pendingWithdrawals: g.pendingWithdrawals,
              total: g.total,
            };
            const b = (t) => {
              var a, e, i;
              return (
                null !==
                  (a =
                    null === (e = h.coin) ||
                    void 0 === e ||
                    null === (i = e.balances) ||
                    void 0 === i
                      ? void 0
                      : i.staking) && void 0 !== a
                  ? a
                  : []
              ).reduce(
                (a, e) => (t(a, e) ? a.add(new this.coin.BN(e.staked)) : a),
                new this.coin.BN("0"),
              );
            };
            ["SOL"].includes(h.coin.ticker) &&
              (m = {
                staked: b(
                  (t, a) => !a.isAvailableForWithdraw && !a.isDeactivated,
                ),
                availableWithdrawals: b((t, a) => a.isAvailableForWithdraw),
                pendingWithdrawals: b(
                  (t, a) => a.isDeactivated && !a.isAvailableForWithdraw,
                ),
                total() {
                  const t = new h.coin.BN(h.coin.balance)
                    .add(this.staked)
                    .add(this.pendingWithdrawals)
                    .add(this.availableWithdrawals);
                  return h.coin.toCurrencyUnit(t);
                },
              });
            const _ = this.staking.isCosmosLike ? [...u, this.coin.ticker] : u,
              f = [
                {
                  tickers: "HBAR",
                  data: {
                    actions: {
                      clicks: {
                        claim: () => h.handleMakeEmit("claim"),
                        stake: () => h.handleMakeEmit("stake"),
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (this.errorMessage = h.$t("error.needToStake"));
                        },
                      },
                    },
                    infoItems: [
                      {
                        title: p.available,
                        value: g.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                        isDisable: +g.staked > 0,
                      },
                      {
                        title: p.staked,
                        value: g.staked,
                        isDisable: 0 === +g.staked,
                      },
                      {
                        title: p.rewards,
                        value: g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show:
                            !h.isCoinDisabled([h.actionClaim]) &&
                            +g.rewards > 0,
                        },
                        click: "claim",
                      },
                    ],
                  },
                },
                {
                  tickers: "FLR",
                  data: {
                    actions: {
                      clicks: {
                        vote: () => h.handleMakeEmit("vote"),
                        stake: () => h.handleMakeEmit("stake"),
                        claim: () => {
                          const t = new n.default(h.fee.toString()),
                            a = h.coin.toCurrencyUnit(
                              t.multipliedBy(3).toString(),
                            ),
                            e = new n.default(g.rewards).gte(a);
                          e
                            ? h.handleMakeEmit("claim")
                            : (this.errorMessage = h.$t(
                                "error.networkFeeHigherThanReward",
                                { amount: a.toString(), ticker: h.coin.ticker },
                              ));
                        },
                        unstake: () => h.handleMakeEmit("unstake"),
                      },
                    },
                    infoItems: [
                      { title: p.total, value: g.total },
                      {
                        title: p.available,
                        value: g.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      { title: p.staked, value: g.staked },
                      {
                        title: p.rewards,
                        value: g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show: !h.isCoinDisabled([h.actionClaim]),
                          disabled: !(() => 0 !== +h.fee)(),
                        },
                        click: "claim",
                      },
                      {
                        title: p.availableVotes,
                        value: g.availableVotes,
                        badge: {
                          title: h.$t("button.vote"),
                          show: !h.isCoinDisabled([h.actionVote]),
                        },
                        click: "vote",
                        isDisable: 0 === +g.availableVotes,
                      },
                    ],
                  },
                },
                {
                  tickers: "ETH",
                  data: {
                    actions: {
                      clicks: { stake: () => h.handleMakeEmit("stake") },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      {
                        title: p.staked,
                        value: () => g.staked,
                        badge: { show: !1 },
                      },
                    ],
                  },
                },
                {
                  tickers: "ICX",
                  data: {
                    actions: {
                      clicks: {
                        stake: () => h.handleMakeEmit("stake"),
                        claim: () => {
                          const t = new n.default(h.fee),
                            a = h.coin.toCurrencyUnit(
                              t.multipliedBy(3).toString(),
                            ),
                            e = new n.default(g.rewards).gte(a);
                          e
                            ? h.handleMakeEmit("claim")
                            : (this.errorMessage = h.$t(
                                "error.networkFeeHigherThanReward",
                                { amount: a.toString(), ticker: h.coin.ticker },
                              ));
                        },
                        vote: () => h.handleMakeEmit("vote"),
                        revote: () => h.handleMakeEmit("revote"),
                        unstake: () => h.handleMakeEmit("unstake"),
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      { title: p.staked, value: () => g.staked },
                      {
                        title: p.rewards,
                        value: () => g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show: !h.isCoinDisabled([h.actionClaim]),
                          disabled: !(() => 0 !== +h.fee)(),
                        },
                        click: "claim",
                      },
                      { title: p.pendingWithdrawal, value: () => g.unstaking },
                      {
                        title: p.availableVotes,
                        value: () => g.availableVotes,
                        badge: {
                          title: h.$t("button.vote"),
                          show:
                            !h.isCoinDisabled([h.actionVote]) &&
                            +g.availableVotes > 0,
                        },
                        click: "vote",
                      },
                      {
                        title: p.assignedVotes,
                        value: () => g.delegatedVotes,
                        badge: {
                          title: h.$t("button.revote"),
                          show:
                            !h.isCoinDisabled([h.actionVote]) &&
                            +g.delegatedVotes > 0,
                        },
                        click: "revote",
                      },
                    ],
                  },
                },
                {
                  tickers: "ZIL",
                  data: {
                    actions: {
                      clicks: {
                        withdrawals: () => h.handleMakeEmit("withdrawals"),
                        claim: () => h.handleMakeEmit("claim"),
                        stake: () => h.handleMakeEmit("stake"),
                        unstake: () => {
                          var t, a, e, i, s, n;
                          +h.coin.toCurrencyUnit(
                            null !==
                              (t =
                                null === (a = h.coin.balances) ||
                                void 0 === a ||
                                null === (e = a.rewards) ||
                                void 0 === e
                                  ? void 0
                                  : e.total) && void 0 !== t
                              ? t
                              : "0",
                          ) > 0 ||
                          !(
                            +h.coin.toCurrencyUnit(
                              null !==
                                (i =
                                  null === (s = h.coin.balances) ||
                                  void 0 === s ||
                                  null === (n = s.staking) ||
                                  void 0 === n
                                    ? void 0
                                    : n.total) && void 0 !== i
                                ? i
                                : "0",
                            ) > 0
                          )
                            ? (this.errorMessage = h.$t(
                                "error.unstakeZILClaimRewards",
                              ))
                            : h.handleMakeEmit("unstake");
                        },
                      },
                    },
                    infoItems: [
                      {
                        title: p.total,
                        value: () => {
                          var t, a;
                          return h.coin.toCurrencyUnit(
                            null !==
                              (t =
                                null === (a = h.coin.balances) || void 0 === a
                                  ? void 0
                                  : a.total) && void 0 !== t
                              ? t
                              : "0",
                          );
                        },
                      },
                      {
                        title: p.available,
                        value: () => {
                          var t, a;
                          return null !==
                            (t =
                              null === (a = h.coin.balances) || void 0 === a
                                ? void 0
                                : a.availableForStake) && void 0 !== t
                            ? t
                            : "0";
                        },
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      {
                        title: p.staked,
                        value: () => {
                          var t, a, e, i, s, n;
                          return null !==
                            (t =
                              null === (a = h.coin) ||
                              void 0 === a ||
                              null === (e = a.toCurrencyUnit) ||
                              void 0 === e
                                ? void 0
                                : e.call(
                                    a,
                                    null !==
                                      (i =
                                        null === (s = h.coin.balances) ||
                                        void 0 === s ||
                                        null === (n = s.staking) ||
                                        void 0 === n
                                          ? void 0
                                          : n.total) && void 0 !== i
                                      ? i
                                      : "0",
                                  )) && void 0 !== t
                            ? t
                            : 0;
                        },
                      },
                      {
                        title: p.rewards,
                        value: () => {
                          var t, a, e, i, s, n;
                          return null !==
                            (t =
                              null === (a = h.coin) ||
                              void 0 === a ||
                              null === (e = a.toCurrencyUnit) ||
                              void 0 === e
                                ? void 0
                                : e.call(
                                    a,
                                    null !==
                                      (i =
                                        null === (s = h.coin.balances) ||
                                        void 0 === s ||
                                        null === (n = s.rewards) ||
                                        void 0 === n
                                          ? void 0
                                          : n.total) && void 0 !== i
                                      ? i
                                      : "0",
                                  )) && void 0 !== t
                            ? t
                            : 0;
                        },
                        badge: {
                          title: h.$t("button.claim"),
                          show:
                            !h.isCoinDisabled([h.actionClaim]) &&
                            (null === (t = h.coin.balances) ||
                            void 0 === t ||
                            null === (a = t.rewards) ||
                            void 0 === a
                              ? void 0
                              : a.total) > 0,
                          disabled: h.coin.isClaiming,
                        },
                        click: "claim",
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () => {
                          var t, a, e, i, s, n, o;
                          return null !==
                            (t =
                              null === (a = h.coin) ||
                              void 0 === a ||
                              null === (e = a.toCurrencyUnit) ||
                              void 0 === e
                                ? void 0
                                : e.call(
                                    a,
                                    null !==
                                      (i =
                                        null === (s = h.coin.balances) ||
                                        void 0 === s ||
                                        null === (n = s.withdrawals) ||
                                        void 0 === n ||
                                        null === (o = n.pendingWithdrawal) ||
                                        void 0 === o
                                          ? void 0
                                          : o.total) && void 0 !== i
                                      ? i
                                      : "0",
                                  )) && void 0 !== t
                            ? t
                            : 0;
                        },
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () => {
                          var t, a, e, i, s, n, o;
                          return null !==
                            (t =
                              null === (a = h.coin) ||
                              void 0 === a ||
                              null === (e = a.toCurrencyUnit) ||
                              void 0 === e
                                ? void 0
                                : e.call(
                                    a,
                                    null !==
                                      (i =
                                        null === (s = h.coin.balances) ||
                                        void 0 === s ||
                                        null === (n = s.withdrawals) ||
                                        void 0 === n ||
                                        null === (o = n.availableWithdrawal) ||
                                        void 0 === o
                                          ? void 0
                                          : o.total) && void 0 !== i
                                      ? i
                                      : "0",
                                  )) && void 0 !== t
                            ? t
                            : 0;
                        },
                        badge: {
                          title: h.$t("button.withdraw"),
                          disabled:
                            0 ===
                            +(null !==
                              (e =
                                null === (i = h.coin.balances) ||
                                void 0 === i ||
                                null === (s = i.withdrawals) ||
                                void 0 === s ||
                                null === (o = s.availableWithdrawal) ||
                                void 0 === o
                                  ? void 0
                                  : o.total) && void 0 !== e
                              ? e
                              : "0"),
                          show:
                            !h.isCoinDisabled([h.actionWithdraw]) &&
                            +(null !==
                              (l =
                                null === (r = h.coin.balances) ||
                                void 0 === r ||
                                null === (c = r.withdrawals) ||
                                void 0 === c ||
                                null === (v = c.availableWithdrawal) ||
                                void 0 === v
                                  ? void 0
                                  : v.total) && void 0 !== l
                              ? l
                              : "0") > 0,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
                {
                  tickers: "ZIL2",
                  contract: "v2",
                  data: {
                    actions: {
                      clicks: {
                        stake: () =>
                          h.handleMakeEmit("stake", { contract: "v2" }),
                        withdrawals: () =>
                          h.handleMakeEmit("withdrawals", { contract: "v2" }),
                        unstake: () =>
                          h.handleMakeEmit("unstake", { contract: "v2" }),
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: {
                          title: h.$t("button.stake"),
                          show: !0,
                          disabled: g.availableForStake < 100,
                        },
                        click: "stake",
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () => g.pendingWithdrawals,
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () => g.availableWithdrawals,
                        badge: {
                          title: h.$t("button.withdraw"),
                          show: +g.availableWithdrawals,
                          disabled: !g.availableWithdrawals,
                        },
                        click: "withdrawals",
                      },
                      {
                        title: p.staked,
                        value: () => [{ ticker: "shZIL", value: g.staked }],
                        badge: { show: !1 },
                      },
                    ],
                  },
                },
                {
                  tickers: "EGLD",
                  data: {
                    actions: {
                      clicks: {
                        withdrawals: () => h.handleMakeEmit("withdrawals"),
                        claim: async () => {
                          const t = h.coin.toCurrencyUnit(
                              new n.default(h.fee.toString())
                                .multipliedBy(3)
                                .toString(),
                            ),
                            a = new n.default(g.rewards).gte(t);
                          a
                            ? h.handleMakeEmit("claim")
                            : (this.errorMessage = h.$t(
                                "error.networkFeeHigherThanReward",
                                { amount: t, ticker: "EGLD" },
                              ));
                        },
                        stake: () => {
                          +g.availableForStake > 0
                            ? h.handleMakeEmit("stake")
                            : (0, d.buy)(h.coin);
                        },
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (this.errorMessage = h.$t(
                                "error.nothingToUnstake",
                              ));
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: {
                          title:
                            +g.availableForStake > 0
                              ? h.$t("button.stake")
                              : h.$t("button.buy"),
                          show: !0,
                        },
                        click: "stake",
                      },
                      { title: p.staked, value: () => g.staked },
                      {
                        title: p.rewards,
                        value: () => g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show: !h.isCoinDisabled([h.actionClaim]),
                        },
                        click: "claim",
                        disabled: !(() => 0 !== +h.fee)(),
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () => g.pendingWithdrawals,
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () => g.availableWithdrawals,
                        badge: {
                          title: h.$t("button.withdraw"),
                          show: +g.availableWithdrawals,
                          disabled: !g.availableWithdrawals,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
                {
                  tickers: "MATIC",
                  data: {
                    actions: {
                      clicks: {
                        withdrawals: () => h.handleMakeEmit("withdrawals"),
                        claim: () => {
                          +g.rewards < 1
                            ? (h.errorMessage = h.$t("error.MinClaimAmount", {
                                amount: 1,
                                ticker: "MATIC",
                              }))
                            : h.handleMakeEmit("claim");
                        },
                        stake: () => {
                          0 === +g.availableVotes
                            ? h.$bus.$emit("activate-coin", { id: h.coin.id })
                            : h.handleMakeEmit("stake");
                        },
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (h.errorMessage = h.$t(
                                "error.nothingToUnstakeForMATIC",
                              ));
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: {
                          title: h.$t("button.stake"),
                          show:
                            !h.isCoinDisabled([h.actionStake]) &&
                            +g.availableForStake > 0,
                        },
                        click: "stake",
                      },
                      { title: p.staked, value: () => g.staked },
                      {
                        title: p.rewards,
                        value: () => g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show: !h.isCoinDisabled([h.actionClaim]),
                        },
                        click: "claim",
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () => g.pendingWithdrawals,
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () => g.availableWithdrawals,
                        badge: {
                          title: h.$t("button.withdraw"),
                          show:
                            !h.isCoinDisabled([h.actionVote]) &&
                            +g.availableWithdrawals > 0,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
                {
                  tickers: "NEAR",
                  data: {
                    actions: {
                      clicks: {
                        withdrawals: () => h.handleMakeEmit("withdrawals"),
                        stake: () => {
                          +g.availableForStake > 0
                            ? h.handleMakeEmit("stake")
                            : (0, d.buy)(h.coin);
                        },
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (this.errorMessage = h.$t(
                                "error.nothingToUnstake",
                              ));
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: g.total },
                      {
                        title: p.available,
                        value: g.availableForStake,
                        badge: {
                          title:
                            +g.availableForStake > 0
                              ? h.$t("button.stake")
                              : h.$t("button.buy"),
                          show: !0,
                        },
                        click: "stake",
                      },
                      { title: p.staked, value: g.staked },
                      {
                        title: p.pendingWithdrawal,
                        value: g.pendingWithdrawals,
                      },
                      {
                        title: p.availableWithdrawal,
                        value: g.availableWithdrawals,
                        badge: {
                          title: h.$t("button.withdraw"),
                          show: +g.availableWithdrawals > 0,
                          disabled: 0 === +g.availableWithdrawals,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
                {
                  tickers: _,
                  data: {
                    actions: {
                      clicks: {
                        claim: () => {
                          const t = h.coin.toCurrencyUnit(
                              new n.default(h.fee.toString())
                                .multipliedBy(3)
                                .toString(),
                            ),
                            a = new n.default(g.rewards).gte(t);
                          a
                            ? h.handleMakeEmit("claim")
                            : (this.errorMessage = h.$t(
                                "error.networkFeeHigherThanReward",
                                { amount: t, ticker: h.coin.ticker },
                              ));
                        },
                        stake: () => h.handleMakeEmit("stake"),
                        unstake: () => h.handleMakeEmit("unstake"),
                        redelegate: () => h.handleMakeEmit("redelegate"),
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      {
                        title: p.staked,
                        value: () => g.staked,
                        badge: { title: h.$t("button.redelegate"), show: !0 },
                        click: "redelegate",
                      },
                      {
                        title: p.rewards,
                        value: () => g.rewards,
                        badge: {
                          title: h.$t("button.claim"),
                          show: !0,
                          disabled: !(() => 0 !== +h.fee)(),
                        },
                        click: "claim",
                      },
                      {
                        title: p.unbonding,
                        value: () => g.unstaking,
                        badge: { show: !1 },
                      },
                    ],
                  },
                },
                {
                  tickers: "BNB",
                  data: {
                    actions: {
                      clicks: {
                        stake: () => {
                          +g.availableForStake > 1
                            ? h.handleMakeEmit("stake")
                            : (0, d.buy)(h.coin);
                        },
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (this.errorMessage = h.$t("error.needToStake"));
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: g.total },
                      {
                        title: p.available,
                        value: g.availableForStake,
                        badge: {
                          title:
                            +g.availableForStake > 1
                              ? h.$t("button.stake")
                              : h.$t("button.buy"),
                          show: !0,
                        },
                        click: "stake",
                      },
                      { title: p.staked, value: g.staked },
                      { title: p.unbonding, value: g.unstaking },
                    ],
                  },
                },
                {
                  tickers: "SOL",
                  data: {
                    actions: {
                      clicks: {
                        stake: () => h.handleMakeEmit("stake"),
                        withdrawals: () => {
                          +m.availableWithdrawals > 0
                            ? h.handleMakeEmit("withdrawals")
                            : (this.errorMessage = h.$t(
                                "error.needToDeactivate",
                              ));
                        },
                        unstake: () => {
                          m.staked.toNumber() > 0
                            ? h.handleMakeEmit("unstake")
                            : (this.errorMessage = h.$t("error.needToStake"));
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => m.total() },
                      {
                        title: p.available,
                        value: () => h.coin.balances.availableForStake,
                        badge: { title: h.$t("button.stake"), show: !0 },
                        click: "stake",
                      },
                      {
                        title: p.staked,
                        value: () => h.coin.toCurrencyUnit(m.staked),
                        badge: { show: !1 },
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () =>
                          h.coin.toCurrencyUnit(m.pendingWithdrawals),
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () =>
                          h.coin.toCurrencyUnit(m.availableWithdrawals),
                        badge: {
                          title: h.$t("button.withdraw"),
                          show:
                            !h.isCoinDisabled([h.actionWithdraw]) &&
                            +m.availableWithdrawals > 0,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
                {
                  tickers: "BONE",
                  data: {
                    actions: {
                      clicks: {
                        withdrawals: () => h.handleMakeEmit("withdrawals"),
                        claim: () => {
                          +g.rewards < 1
                            ? (h.errorMessage = "Min amount to claim is 1 BONE")
                            : h.handleMakeEmit("claim");
                        },
                        stake: () => {
                          0 === +g.availableVotes
                            ? h.$bus.$emit("activate-coin", { id: h.coin.id })
                            : h.handleMakeEmit("stake");
                        },
                        unstake: () => {
                          +g.staked > 0
                            ? h.handleMakeEmit("unstake")
                            : (h.errorMessage = `Nothing to unstake. You should delegate ${h.coin.ticker} first`);
                        },
                      },
                    },
                    infoItems: [
                      { title: p.total, value: () => g.total },
                      {
                        title: p.available,
                        value: () => g.availableForStake,
                        badge: {
                          title: "Stake",
                          show:
                            !h.isCoinDisabled([h.actionStake]) &&
                            +g.availableForStake > 0,
                        },
                        click: "stake",
                      },
                      { title: p.staked, value: () => g.staked },
                      {
                        title: p.rewards,
                        value: () => g.rewards,
                        badge: {
                          title: "Claim",
                          show:
                            !h.isCoinDisabled([h.actionClaim]) &&
                            +g.rewards > 0,
                        },
                        click: "claim",
                      },
                      {
                        title: p.pendingWithdrawal,
                        value: () => g.pendingWithdrawals,
                      },
                      {
                        title: p.availableWithdrawal,
                        value: () => g.availableWithdrawals,
                        badge: {
                          title: "Withdraw",
                          show:
                            !h.isCoinDisabled([h.actionVote]) &&
                            +g.availableWithdrawals > 0,
                        },
                        click: "withdrawals",
                      },
                    ],
                  },
                },
              ],
              w =
                null ===
                  (k = f.find((t) => {
                    var a;
                    return (
                      ("undefined" !== typeof this.staking.contract &&
                        t.contract === this.staking.contract) ||
                      ("undefined" === typeof this.staking.contract &&
                        t.tickers === h.coin.ticker) ||
                      ("string" !== typeof t.tickers &&
                        (null === (a = t.tickers) || void 0 === a
                          ? void 0
                          : a.includes(h.coin.ticker)))
                    );
                  })) || void 0 === k
                  ? void 0
                  : k.data;
            this.config = {
              infoItems: h.formatInfoData(w),
              actions: w.actions,
            };
          },
          handleClosePopup() {
            this.$bus.$emit("close-staking-popup");
          },
          handleMakeEmit(t) {
            var a;
            const e = {
              vote: () => this.$emit("make", "Vote"),
              stake: () => this.$emit("make", "Stake"),
              claim: () => this.$emit("make", "Claim"),
              revote: () => this.$emit("make", "Revote"),
              unstake: () => this.$emit("make", "Unstake"),
              redelegate: () => this.$emit("make", "Redelegate"),
              withdrawals: () => this.$emit("make", "Withdrawal"),
              activate: () =>
                this.$bus.$emit("activate-coin", { id: this.coin.id }),
            };
            null === e ||
              void 0 === e ||
              null === (a = e[t]) ||
              void 0 === a ||
              a.call(e);
          },
          formatInfoData(t) {
            var a;
            const e = (
              null !==
                (a = null === t || void 0 === t ? void 0 : t.infoItems) &&
              void 0 !== a
                ? a
                : []
            ).map((a) => {
              var e, i;
              return {
                ...a,
                value: "function" === typeof a.value ? a.value() : a.value,
                ticker: this.staking.displayTicker,
                click:
                  null !==
                    (e =
                      null === (i = t.actions.clicks) || void 0 === i
                        ? void 0
                        : i[a.click]) && void 0 !== e
                    ? e
                    : () => null,
              };
            });
            return e;
          },
          setBalances() {
            var t,
              a,
              e,
              i,
              s,
              n,
              o,
              l,
              r,
              c,
              d,
              u,
              v,
              k,
              h,
              p,
              g,
              m,
              b,
              _,
              f,
              w,
              C,
              S,
              y,
              $,
              P,
              T,
              x,
              A,
              E,
              M;
            const F = {
              total:
                null !==
                  (t =
                    null === (a = (e = this.coin).getTotalBalance) ||
                    void 0 === a ||
                    null === (i = a.call(e)) ||
                    void 0 === i
                      ? void 0
                      : i.toCurrency()) && void 0 !== t
                  ? t
                  : "0",
              availableForStake:
                null !==
                  (s =
                    null === (n = (o = this.coin).getAvailableBalance) ||
                    void 0 === n ||
                    null === (l = n.call(o)) ||
                    void 0 === l
                      ? void 0
                      : l.toCurrency()) && void 0 !== s
                  ? s
                  : "0",
              staked:
                null !==
                  (r =
                    null === (c = (d = this.coin).getStakedBalance) ||
                    void 0 === c ||
                    null === (u = c.call(d)) ||
                    void 0 === u
                      ? void 0
                      : u.toCurrency()) && void 0 !== r
                  ? r
                  : "0",
              rewards:
                null !==
                  (v =
                    null === (k = (h = this.coin).getRewards) ||
                    void 0 === k ||
                    null === (p = k.call(h)) ||
                    void 0 === p
                      ? void 0
                      : p.toCurrency()) && void 0 !== v
                  ? v
                  : "0",
              pendingWithdrawals:
                null !==
                  (g =
                    null === (m = (b = this.coin).getPendingWithdrawals) ||
                    void 0 === m ||
                    null === (_ = m.call(b)) ||
                    void 0 === _
                      ? void 0
                      : _.toCurrency()) && void 0 !== g
                  ? g
                  : "0",
              availableWithdrawals:
                null !==
                  (f =
                    null === (w = (C = this.coin).getAvailableWithdrawals) ||
                    void 0 === w ||
                    null === (S = w.call(C)) ||
                    void 0 === S
                      ? void 0
                      : S.toCurrency()) && void 0 !== f
                  ? f
                  : "0",
              availableVotes:
                null !==
                  (y =
                    null === ($ = (P = this.coin).getAvailableVotes) ||
                    void 0 === $ ||
                    null === (T = $.call(P)) ||
                    void 0 === T
                      ? void 0
                      : T.toCurrency()) && void 0 !== y
                  ? y
                  : "0",
              unstaking:
                null !==
                  (x =
                    null === (A = (E = this.coin).getUnstakingBalance) ||
                    void 0 === A ||
                    null === (M = A.call(E)) ||
                    void 0 === M
                      ? void 0
                      : M.toCurrency()) && void 0 !== x
                  ? x
                  : "0",
            };
            ((this.balances = Object.assign({}, this.balances, {
              ...this.balances,
              ...F,
            })),
              this.setConfig());
          },
        },
      };
    },
  },
]);
