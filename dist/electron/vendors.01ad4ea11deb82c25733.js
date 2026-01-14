(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [44, 407, 410],
  {
    11564: function (t, e, a) {
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
            { staticClass: "coin-info popup" },
            [
              t.banner
                ? n(
                    "atomic-banner",
                    t._b(
                      {
                        staticStyle: { padding: "10px" },
                        on: { close: t.closeBanner },
                      },
                      "atomic-banner",
                      t.banner,
                      !1,
                    ),
                  )
                : t._e(),
              t._v(" "),
              t.isSavedTransactionPopup
                ? t._e()
                : n(
                    "div",
                    {
                      staticClass: "close",
                      attrs: { "data-test-id": "wall_exite" },
                      on: { click: t.closePopup },
                    },
                    [n("div", { staticClass: "close__icon" }, [t._v("✕")])],
                  ),
              t._v(" "),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "click-outside",
                      rawName: "v-click-outside",
                      value: t.closeSettingsDropdown,
                      expression: "closeSettingsDropdown",
                    },
                  ],
                  staticClass: "settings",
                },
                [
                  n("div", { staticClass: "settings__icons" }, [
                    n(
                      "div",
                      {
                        staticClass: "settings__icon",
                        attrs: { "data-test-id": "wall_setting" },
                        on: { click: t.toggleSettingsDropdown },
                      },
                      [
                        n(
                          "svg",
                          {
                            attrs: {
                              fill: "none",
                              height: "24",
                              viewBox: "0 0 24 24",
                              width: "24",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                "clip-rule": "evenodd",
                                d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
                                "fill-rule": "evenodd",
                                stroke: "#8290AD",
                                "stroke-linecap": "round",
                                "stroke-width": "2",
                              },
                            }),
                            t._v(" "),
                            n("path", {
                              attrs: {
                                "clip-rule": "evenodd",
                                d: "M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z",
                                "fill-rule": "evenodd",
                                stroke: "#8290AD",
                                "stroke-linecap": "round",
                                "stroke-width": "2",
                              },
                            }),
                          ],
                        ),
                      ],
                    ),
                    t._v(" "),
                    n("div", {
                      staticClass: "settings__icon empty",
                      attrs: { "data-test-id": "wall_setting" },
                      on: { click: t.closeSettingsDropdown },
                    }),
                  ]),
                  t._v(" "),
                  t.isSettingsDropdown
                    ? n("div", { staticClass: "settings__menu" }, [
                        "EOS" === t.coin.ticker
                          ? n(
                              "div",
                              {
                                staticClass: "settings__menu-item text-gray",
                                attrs: { "data-test-id": "wall_eos_account" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(),
                                      e.stopPropagation(),
                                      t.toggleAccountDetails.apply(
                                        null,
                                        arguments,
                                      )
                                    );
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("coinInfo.accountDetail")) +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        t.coin.isCustom
                          ? n(
                              "div",
                              {
                                staticClass: "settings__menu-item text-gray",
                                attrs: { "data-test-id": "wall_delete_token" },
                                on: {
                                  click: function (e) {
                                    t.isEditToken = !0;
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("coinInfo.editOrDeleteToken")) +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        "ADA" === t.coin.ticker
                          ? n(
                              "div",
                              {
                                staticClass: "settings__menu-item text-gray",
                                attrs: { "data-test-id": "wall_claim_ada" },
                                on: { click: t.openClaimPopup },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("popups.claimADA.title")) +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        "XMR" === t.coin.ticker
                          ? n(
                              "div",
                              {
                                staticClass: "settings__menu-item text-gray",
                                attrs: {
                                  "data-test-id": "wall_share_view_xmr",
                                },
                                on: { click: t.openShareViewKey },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("coinInfo.shareViewKey")) +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        t.isIncludeAirdrops
                          ? n(
                              "div",
                              {
                                staticClass: "settings__menu-item text-gray",
                                on: { click: t.handleActivateAutoclaimDrops },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("coinInfo.flareDropsAutoclaim")) +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "settings__menu-item text-gray",
                            attrs: { "data-test-id": "wall_export_trade" },
                            on: { click: t.exportTransactions },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("coinInfo.exportTransactions")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ])
                    : t._e(),
                ],
              ),
              t._v(" "),
              n(
                "div",
                {
                  staticClass: "scroll-list3",
                  class: { "no-scroll": !t.transactions.length },
                  on: { scroll: t.handleScroll },
                },
                [
                  n(
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
                      staticClass: "coin-wrap",
                    },
                    [
                      t.coin.imgUri
                        ? n("memes-image", {
                            staticClass: "coin-img",
                            attrs: { uri: t.coin.imgUri },
                          })
                        : n("div", {
                            staticClass: "icon",
                            class: t.icon,
                            attrs: { "data-test-id": "wall_icon" },
                            on: { click: t.toggleDropdown },
                          }),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "dropdown-wrap flex" },
                        [
                          n(
                            "atomic-notify-point",
                            {
                              attrs: {
                                UID:
                                  "walletTableTickerInfo-" +
                                  t.coin.ticker.split("-").join("") +
                                  "-" +
                                  (t.coin.deprecatedParent &&
                                  t.coin.deprecatedParent !== t.coin.ticker
                                    ? t.coin.deprecatedParent
                                    : ""),
                                type: "hidden",
                              },
                            },
                            [
                              n("p", { staticClass: "flex center" }, [
                                t.isSkamToken
                                  ? n("span", { staticClass: "skam-warning" }, [
                                      t._v(
                                        "\n              " +
                                          t._s(t.$t("unverified")) +
                                          "\n            ",
                                      ),
                                    ])
                                  : t._e(),
                                t._v(" "),
                                n(
                                  "a",
                                  {
                                    staticClass: "name",
                                    attrs: { "data-test-id": "wall_coin" },
                                    on: { click: t.toggleDropdown },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.coin.name) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ]),
                              t._v(" "),
                              n("token-tag", {
                                attrs: { wallet: t.coin, "is-big": "" },
                              }),
                            ],
                            1,
                          ),
                          t._v(" "),
                          t.isChangeCoin
                            ? n("coin-dropdown", {
                                attrs: {
                                  "show-balance": "",
                                  coins: t.dropdownCoins,
                                },
                                on: { selectCoin: t.selectCoin },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "info" },
                    [
                      n(
                        "span",
                        {
                          staticClass: "balance",
                          attrs: { "data-test-id": "wall_amount_coin_balance" },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.formatFinance(t.balance)) +
                              "\n      ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "span",
                        {
                          staticClass: "text-gray text-bigger",
                          attrs: { "data-test-id": "wall_amount_coin_ticker" },
                        },
                        [t._v("\n        " + t._s(t.coin.ticker) + "\n      ")],
                      ),
                      t._v(" "),
                      n(
                        "p",
                        {
                          staticClass: "fiat-balance",
                          attrs: { "data-test-id": "wall_amount_fiat" },
                        },
                        [
                          t.isUpdatingFiat
                            ? [t._v("--.--")]
                            : [
                                t._v(
                                  t._s(t.fiatBalance) + " " + t._s(t.fiatRate),
                                ),
                              ],
                        ],
                        2,
                      ),
                      t._v(" "),
                      n("div", { staticClass: "buttons-wrapper" }, [
                        n(
                          "button",
                          {
                            staticClass: "button uppercase",
                            attrs: { "data-test-id": "wall_receive" },
                            on: { click: t.openReceiveCoin },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.$t("button.receive")) +
                                "\n        ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        "FIO" !== t.coin.ticker
                          ? n(
                              "button",
                              {
                                staticClass: "button uppercase",
                                attrs: { "data-test-id": "wall_send" },
                                on: { click: t.openSendCoin },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.send")) +
                                    "\n        ",
                                ),
                              ],
                            )
                          : n(
                              "button",
                              {
                                staticClass: "button uppercase",
                                attrs: { "data-test-id": "wall_receive_fio" },
                                on: { click: t.reserveFio },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.reserveFio")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                        t._v(" "),
                        t.showSwapCoinButton
                          ? n(
                              "button",
                              {
                                staticClass: "button uppercase",
                                attrs: { "data-test-id": "wall_send" },
                                on: { click: t.openSwapCoin },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.swap")) +
                                    "\n        ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        t.showBuyCoinButton
                          ? n(
                              "button",
                              {
                                staticClass: "button uppercase",
                                attrs: { "data-test-id": "wall_send" },
                                on: {
                                  click: function (e) {
                                    return t.openBuyCoin();
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("button.buy")) +
                                    "\n        ",
                                ),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        !t.hasAirdrop && t.isIncludeAirdrops
                          ? n(
                              "div",
                              {
                                staticClass: "gift-autoclaim",
                                on: { click: t.handleActivateAutoclaimDrops },
                              },
                              [n("img", { attrs: { src: a(860) } })],
                            )
                          : t._e(),
                      ]),
                      t._v(" "),
                      n("transition", { attrs: { name: "fade" } }, [
                        t.serviceMessage
                          ? n(
                              "div",
                              { staticClass: "alert-wrap" },
                              [
                                n("alert", {
                                  attrs: {
                                    "data-test-id": "wall_service_message",
                                    message: t.serviceMessage,
                                    type: "Report",
                                  },
                                }),
                              ],
                              1,
                            )
                          : t._e(),
                      ]),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n("div", { staticClass: "tabs" }, [
                    n(
                      "div",
                      {
                        staticClass: "tab-title",
                        class: [{ active: "transactions" === t.activeTab }],
                        attrs: { "data-test-id": "wall_transaction" },
                        on: {
                          click: function (e) {
                            return t.changeActiveTab("transactions");
                          },
                        },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("coinInfo.transactionsTab")) +
                            "\n      ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    t.isChartTabVisible
                      ? n(
                          "div",
                          {
                            staticClass: "tab-title",
                            class: { active: "chart" === t.activeTab },
                            attrs: { "data-test-id": "wall_price_chart" },
                            on: {
                              click: function (e) {
                                return t.changeActiveTab("chart");
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("coinInfo.priceChart")) +
                                "\n      ",
                            ),
                          ],
                        )
                      : t._e(),
                    t._v(" "),
                    n("div", { staticClass: "tab__wrap" }, [
                      t.isArticles
                        ? n(
                            "div",
                            {
                              staticClass: "tab-title",
                              class: { active: "about" === t.activeTab },
                              attrs: { "data-test-id": "wall_about" },
                              on: {
                                click: function (e) {
                                  return t.changeActiveTab("about");
                                },
                              },
                            },
                            [
                              n(
                                "atomic-notify-point",
                                {
                                  attrs: {
                                    UID:
                                      "tababout-" +
                                      t.coin.ticker.split("-").join("") +
                                      "-" +
                                      (t.coin.deprecatedParent &&
                                      t.coin.deprecatedParent !== t.coin.ticker
                                        ? t.coin.deprecatedParent
                                        : ""),
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("label.about")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ]),
                  ]),
                  t._v(" "),
                  t.isChartVisible
                    ? n("chart-price", { attrs: { coin: t.coin } })
                    : t._e(),
                  t._v(" "),
                  t.isArticles
                    ? n("about-tab", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "about" === t.activeTab,
                            expression: "activeTab === 'about'",
                          },
                        ],
                        attrs: { coin: t.coin, articles: t.articlesCoin },
                      })
                    : t._e(),
                  t._v(" "),
                  n(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "transactions" === t.activeTab,
                          expression: "activeTab === 'transactions'",
                        },
                      ],
                      staticClass: "history",
                    },
                    [
                      n(
                        "table-items",
                        {
                          attrs: {
                            "is-empty": 0 === t.transactions.length,
                            items: t.transactions,
                          },
                        },
                        [
                          t.transactions.length
                            ? t._e()
                            : n(
                                "div",
                                {
                                  staticClass: "no_tx",
                                  attrs: { slot: "empty" },
                                  slot: "empty",
                                },
                                [
                                  n("span", [
                                    t._v(
                                      "\n            " +
                                        t._s(t.emptyHistoryText) +
                                        "\n          ",
                                    ),
                                  ]),
                                ],
                              ),
                          t._v(" "),
                          t._l(t.transactions, function (e, a) {
                            return n("history-table-row", {
                              key: "row-" + a + "-" + Math.random(),
                              attrs: {
                                slot: "table-rows",
                                "index-tx": a,
                                "opened-ids": t.openedIds,
                                tx: e,
                              },
                              on: {
                                addOpenedId: t.addOpenedId,
                                removeOpenedId: t.removeOpenedId,
                                resendCoin: t.resendCoin,
                              },
                              slot: "table-rows",
                            });
                          }),
                        ],
                        2,
                      ),
                      t._v(" "),
                      !t.isAllTransaction && t.transactions.length
                        ? n("div", { staticClass: "history__control" }, [
                            t.isLoadingTransaction
                              ? n("div", { staticClass: "loading" })
                              : t._e(),
                          ])
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t._v(" "),
              t.isSavedTransactionPopup
                ? n("div", { staticClass: "saved-transaction popup" }, [
                    n("div", {
                      staticClass: "popup-background",
                      on: {
                        click: function (e) {
                          t.isSavedTransactionPopup = !1;
                        },
                      },
                    }),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "popup-wrap",
                        attrs: { "data-test-id": "wall_save_transact" },
                      },
                      [
                        n("div", { staticClass: "success-icon" }, [
                          n(
                            "svg",
                            {
                              attrs: {
                                fill: "none",
                                height: "18",
                                viewBox: "0 0 26 18",
                                width: "26",
                              },
                            },
                            [
                              n("path", {
                                attrs: {
                                  d: "M1.33203 8.47684L9.35287 16.334L24.6654 1.33398",
                                  stroke: "white",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                },
                              }),
                            ],
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "text-title" }, [
                          t._v(
                            t._s(t.$t("message.transactionsSavedToDesktop")),
                          ),
                        ]),
                        t._v(" "),
                        n(
                          "button",
                          {
                            staticClass: "button uppercase",
                            attrs: { "data-test-id": "wall_alert_close" },
                            on: {
                              click: function (e) {
                                t.isSavedTransactionPopup = !1;
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("button.close")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ],
                    ),
                  ])
                : t._e(),
              t._v(" "),
              "EOS" === t.coin.ticker && t.isAccountDetails
                ? n("account-details", {
                    directives: [
                      {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: t.closeAccountDetails,
                        expression: "closeAccountDetails",
                      },
                    ],
                    attrs: { coin: t.coin },
                    on: { closePopup: t.toggleAccountDetails },
                  })
                : t._e(),
              t._v(" "),
              "ADA" === t.coin.ticker && t.isClaimPopup
                ? n("claim-a-d-a", {
                    attrs: { coin: t.coin },
                    on: { closePopup: t.openClaimPopup },
                  })
                : t._e(),
              t._v(" "),
              "XRP" === t.coin.ticker && t.isClaimPopup
                ? n("claim-flair", {
                    attrs: { coin: t.coin },
                    on: { closePopup: t.openClaimPopup },
                  })
                : t._e(),
              t._v(" "),
              t.isEditToken
                ? n("add-custom-token-edit-or-delete", {
                    attrs: { coin: t.coin },
                    on: {
                      close: function (e) {
                        t.isEditToken = !1;
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
    2780: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "SuccessMark",
        props: { color: { type: String, default: "white" } },
      };
    },
    2782: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "Diamond" };
    },
    2783: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "RateStart" };
    },
    2784: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ClockIcon" };
    },
    2785: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AlertIcon",
        props: { type: { type: String, default: "Success" } },
        computed: {
          imgPath() {
            return a(2874)(`./alert-${this.type.toLowerCase()}.svg`);
          },
          iconClass() {
            return "alert_icon_" + this.type.toLowerCase();
          },
        },
      };
    },
    2786: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SelectArrow" };
    },
    2787: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "SuccessIcon" };
    },
    2788: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2789: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "PortfolioChart" };
    },
    2790: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ExchangeArrow" };
    },
    2837: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AlertIcon", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "ClockIcon", {
          enumerable: !0,
          get: function () {
            return o.default;
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
            return u.default;
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
            return v.default;
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
            return l.default;
          },
        }),
        Object.defineProperty(e, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }));
      var i = n(a(2867)),
        s = n(a(2869)),
        o = n(a(2871)),
        r = n(a(2873)),
        c = n(a(2876)),
        l = n(a(2878)),
        d = n(a(2843)),
        u = n(a(2880)),
        v = n(a(2882)),
        p = n(a(2884));
    },
    2843: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2780),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2857),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2857: function (t, e, a) {
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
            "svg",
            { attrs: { height: "7", viewBox: "0 0 10 7", width: "10" } },
            [
              a("path", {
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
    2867: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2782),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2868),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2868: function (t, e, a) {
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
              a("path", {
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
    2869: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2783),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2870),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2870: function (t, e, a) {
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
            "svg",
            { attrs: { height: "38", viewBox: "0 0 38 38", width: "38" } },
            [
              a("path", {
                attrs: {
                  d: "M25.8069 11.4453L34.8195 12.3099C37.9555 12.6108 38.9173 15.6741 36.4957 17.6867L29.4398 23.5509L32.0592 33.1041C32.9194 36.2415 30.2506 38.1407 27.5775 36.2525L19.0041 30.1967L10.4307 36.2525C7.76847 38.1331 5.08875 36.2419 5.94907 33.1041L8.56846 23.5509L1.51257 17.6867C-0.919172 15.6657 0.0388109 12.6122 3.18825 12.3099L12.1992 11.4453L16.1693 2.29209C17.4125 -0.574326 20.5965 -0.57289 21.8387 2.29238L25.8069 11.4453Z",
                },
              }),
            ],
          );
        },
        i = [];
    },
    2871: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2784),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2872),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2872: function (t, e, a) {
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
              a("path", {
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
    2873: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2785),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2875),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2874: function (t, e, a) {
      var n = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function i(t) {
        var e = s(t);
        return a(e);
      }
      function s(t) {
        if (!a.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      ((i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = s),
        (t.exports = i),
        (i.id = 2874));
    },
    2875: function (t, e, a) {
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
          return a("div", [
            a("div", { staticClass: "alert_icon", class: t.iconClass }, [
              a("div", [a("img", { attrs: { src: t.imgPath } })]),
            ]),
          ]);
        },
        i = [];
    },
    2876: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2786),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2877),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2877: function (t, e, a) {
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
            "svg",
            { attrs: { height: "6", viewBox: "0 0 10 6", width: "10" } },
            [
              a("path", {
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
    2878: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2787),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2879),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2879: function (t, e, a) {
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
              a("path", {
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
    2880: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2788),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2881),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2881: function (t, e, a) {
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
              a("path", {
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
    2882: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2789),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2883),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2883: function (t, e, a) {
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
            "svg",
            { attrs: { width: "24", height: "24", viewBox: "0 0 24 24" } },
            [
              a("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M18.9193 14C18.0526 17.0034 15.2832 19.2 12.0007 19.2C9.33593 19.2 7.00928 17.7524 5.76428 15.6006L1.6084 18C2.0905 18.835 2.66825 19.6035 3.32628 20.2919C3.43835 20.4091 3.55277 20.524 3.66947 20.6366C4.74436 21.6735 6.01052 22.5075 7.4085 23.0866C8.85424 23.6854 10.3931 23.9917 11.9379 23.9998L12.0007 24L12.0745 23.9998C13.0921 23.9935 14.111 23.8579 15.1065 23.5911C17.0564 23.0686 18.8329 22.0657 20.28 20.6864L20.3319 20.6366C20.4194 20.5522 20.5055 20.4666 20.5903 20.3796C20.6228 20.3464 20.6551 20.3129 20.6871 20.2793C20.9811 19.9708 21.2596 19.6458 21.5209 19.3051C22.719 17.7439 23.5082 15.9206 23.8329 14H18.9193Z",
                  fill: "#979EB0",
                },
              }),
              t._v(" "),
              a("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M12 4.8V0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0327 1.51011 19.3429 2.38172 20.4498 3.47939C20.4735 3.50289 20.4971 3.5265 20.5206 3.5502C21.6183 4.65706 22.4899 5.96731 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12H19.2C19.2 8.02355 15.9764 4.8 12 4.8Z",
                  fill: "#B8BDCC",
                },
              }),
              t._v(" "),
              a("path", {
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
    2884: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2790),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(2885),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    2885: function (t, e, a) {
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
              a("path", {
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
    3129: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        s = a(68),
        o = n(a(2999)),
        r = n(a(821)),
        c = n(a(834)),
        l = n(a(798));
      const d = 4,
        u = 6;
      e.default = {
        name: "CoinDropdown",
        components: { MemesImage: o.default, TokenTag: r.default },
        props: {
          coins: { type: Array, default: () => [] },
          showBalance: { type: Boolean, default: !1 },
          isSortByMarketCap: { type: Boolean, default: !1 },
          enableSort: { type: Boolean, default: !0 },
          isSwowTags: { type: Boolean, default: !0 },
          isShowExchangeTags: { type: Boolean, default: !1 },
          isShowSimplexTags: { type: Boolean, default: !1 },
        },
        data: () => ({ filter: "" }),
        computed: {
          ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
          filteredCoins() {
            const t = this.filter.toLowerCase().trim(),
              e = this.coins.filter((e) => {
                let { isDisabled: a, name: n, ticker: i } = e;
                return (
                  !a &&
                  (n.toLowerCase().includes(t) || i.toLowerCase().includes(t))
                );
              });
            return this.enableSort
              ? this.isSortByMarketCap
                ? e.sort(this.sortByMarketCap)
                : e.sort(this.sortByAvailableBalance)
              : e;
          },
          currentCoin() {
            const t = "undefined" !== typeof this.coins[this.current],
              e = t ? this.coins[this.current] : this.tokens[this.current];
            return ((e.img = this.icon(e.icon)), e);
          },
        },
        mounted() {
          this.$refs.coinDropdown.focus();
        },
        methods: {
          formatMiddleAmount: c.default,
          formatFinance: l.default,
          selectCoin(t) {
            return (this.$emit("selectCoin", t), t);
          },
          sortByAvailableBalance(t, e) {
            return Number(e.fiatBalance) - Number(t.fiatBalance);
          },
          getTags(t) {
            if (!this.isSwowTags) return [];
            let e = [];
            const { settings: a } = this.$buy,
              n = this.isShowExchangeTags
                ? (null === a || void 0 === a ? void 0 : a.exchangesTags) || []
                : (null === a || void 0 === a ? void 0 : a.simplexTags) || [],
              i = n[t];
            return i || e;
          },
          sortByMarketCap(t, e) {
            const a = this.coinRate(this.fiatRate, t).marketCap || 0,
              n = this.coinRate(this.fiatRate, e).marketCap || 0;
            return n - a;
          },
          balance(t) {
            let { id: e, balances: a, divisibleBalance: n } = t;
            const i = localStorage.getItem(e + "-balance"),
              s = +(
                (null === a || void 0 === a ? void 0 : a.available) ||
                n ||
                i ||
                0
              );
            return +s.toFixed(s > 1 ? d : u);
          },
          isSkamToken(t) {
            return !t.confirmed && t instanceof s.Token;
          },
        },
      };
    },
    3628: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3129),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(3859),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
    3800: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(375),
        s = n(a(802)),
        o = a(233),
        r = a(2837),
        c = n(a(798)),
        l = n(a(4508)),
        d = n(a(820));
      const u = 1e3,
        v = 1150,
        p = 1300,
        f = [38, 15],
        h = [42, 20],
        m = [55, 22],
        g = [60, 25];
      e.default = {
        name: "HistoryTableRow",
        components: { CoinIcon: s.default, SuccessMark: r.SuccessMark },
        mixins: [i.SettingsMixin, i.TransactionMixin],
        props: {
          openedIds: { type: Array, default: () => [] },
          indexTx: { type: Number, default: 0 },
        },
        data: () => ({ showCopy: !1, isCopyAddress: !0, resizeEvent: null }),
        computed: {
          isTxSign() {
            const t = [
              "reward",
              "claim",
              "transfer",
              "regular",
              "transfer nft",
            ].includes(this.txType);
            return (
              (this.isPendingTx && (t || !this.txType)) || t || !this.txType
            );
          },
          activeOpened() {
            return this.openedIds.includes(this.idRow);
          },
          idRow() {
            return `${this.tx.txid}txid${this.indexTx}`;
          },
          isSuccessTx() {
            return !this.isPending && 0 !== Number(this.tx.confirmations);
          },
          isPendingTx() {
            return 0 === Number(this.tx.confirmations);
          },
          currentCoin() {
            return (
              this.tx.walletid && this.$wallets.getWallet(this.tx.walletid)
            );
          },
          placeholderPaymentId() {
            var t;
            const e =
              null === (t = this.currentCoin.config) || void 0 === t
                ? void 0
                : t.paymentIdLabelType;
            return e ? this.$t(o.PAYMENT_TYPES_TRANSLATIONS[e]) : "";
          },
          columnText() {
            return this.isOperation
              ? this.$t("historyPage.operation")
              : this.tx.direction
                ? this.$t("historyPage.from")
                : this.$t("historyPage.to");
          },
          successCopyText() {
            return this.isCopiedToClipboard ===
              `${this.parent.explorer.webUrl}${this.tx.txid}`
              ? this.$t("historyPage.hashCopied")
              : this.$t("historyPage.addressCopied");
          },
        },
        beforeDestroy() {
          window.removeEventListener("resize", this.resizeHandler);
        },
        beforeMount() {
          window.addEventListener("resize", this.resizeHandler);
        },
        methods: {
          formatFinance: c.default,
          formatBigAmount: l.default,
          formatTextTrimMiddle: d.default,
          resendTx() {
            "main-page" === this.$route.name
              ? this.$emit("resendCoin", this.tx)
              : this.$router.push({
                  path: "/main/send/" + this.tx.walletid,
                  params: { tx: this.tx },
                });
          },
          toggleItem() {
            const t = this.activeOpened ? "removeOpenedId" : "addOpenedId";
            this.$emit(t, this.idRow);
          },
          maxAddressSize() {
            return this.windowWidth < u
              ? f
              : this.windowWidth < v
                ? h
                : this.windowWidth < p
                  ? m
                  : g;
          },
          resizeHandler(t) {
            this.windowWidth = t.target.innerWidth;
          },
        },
      };
    },
    3859: function (t, e, a) {
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
          return a("div", { staticClass: "dropdown" }, [
            a("div", { staticClass: "search" }, [
              a("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.filter,
                    expression: "filter",
                  },
                ],
                ref: "coinDropdown",
                staticClass: "placeholder-white",
                attrs: {
                  "data-test-id": "send_searchcoin",
                  placeholder: t.$t("input.searchWithDots"),
                  type: "text",
                },
                domProps: { value: t.filter },
                on: {
                  input: function (e) {
                    e.target.composing || (t.filter = e.target.value);
                  },
                },
              }),
            ]),
            t._v(" "),
            a(
              "div",
              {
                staticClass: "scroll-area",
                attrs: { "data-test-id": "send_scrollcoin" },
              },
              [
                a(
                  "ul",
                  { staticClass: "search-select" },
                  [
                    0 === t.filteredCoins.length
                      ? a("li", { staticClass: "nocoins" }, [
                          a("span", [
                            t._v(" " + t._s(t.$t("message.noResults"))),
                          ]),
                        ])
                      : t._e(),
                    t._v(" "),
                    t._l(t.filteredCoins, function (e, n) {
                      return a(
                        "li",
                        {
                          key: e.id + n,
                          attrs: {
                            "data-test-id": "send_" + e.ticker.toLowerCase(),
                          },
                          on: {
                            click: function (a) {
                              return t.selectCoin(e);
                            },
                          },
                        },
                        [
                          e.imgUri
                            ? a("memes-image", {
                                staticClass: "coin-img coin-img_small",
                                attrs: { uri: e.imgUri },
                              })
                            : a("div", { class: t.$iconClass(e) }),
                          t._v(" "),
                          a(
                            "div",
                            { staticClass: "flex align-center" },
                            [
                              t.isSkamToken(e)
                                ? a("span", { staticClass: "skam-warning" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.$t("unverified")) +
                                        "\n          ",
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              a("span", [
                                t._v(
                                  "\n            " +
                                    t._s(e.ticker) +
                                    "\n          ",
                                ),
                              ]),
                              t._v(" "),
                              a("token-tag", { attrs: { wallet: e } }),
                              t._v(" "),
                              t._l(t.getTags(e.ticker), function (e) {
                                var n = e.tag,
                                  i = e.bgColor;
                                return a(
                                  "div",
                                  { key: n, staticClass: "tag small" },
                                  [
                                    a(
                                      "div",
                                      {
                                        class: "--" + n.toLowerCase(),
                                        style: { backgroundColor: i },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(n) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ],
                                );
                              }),
                            ],
                            2,
                          ),
                          t._v(" "),
                          t.showBalance
                            ? a("span", { staticClass: "balance" }, [
                                t._v(
                                  "\n          " +
                                    t._s(
                                      t.formatFinance(
                                        t.formatMiddleAmount(t.balance(e)),
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : t._e(),
                        ],
                        1,
                      );
                    }),
                  ],
                  2,
                ),
              ],
            ),
          ]);
        },
        i = [];
    },
    4508: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(850)),
        s = (t) => {
          const e = 9,
            a = 4;
          return (0, i.default)(t || "0", e, a);
        };
      e.default = s;
    },
    5352: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3800),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(5355),
        r = a(5);
      function c(t) {
        a(5353);
      }
      var l = !1,
        d = c,
        u = "data-v-c9389166",
        v = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], l, d, u, v);
      e["default"] = p.exports;
    },
    5353: function (t, e, a) {
      var n = a(5354);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("77474030", n, !0, {});
    },
    5354: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-c9389166{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-c9389166{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-c9389166{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-c9389166{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-c9389166{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-c9389166{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-c9389166{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-c9389166{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-c9389166{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-c9389166{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-c9389166{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-c9389166]{color:#6b963b\n}\n.text-red[data-v-c9389166]{color:#c03647\n}\n.text-gray[data-v-c9389166]{color:#8290ad\n}\n.text-blue[data-v-c9389166]{color:#00c2ff\n}\n.text-danger[data-v-c9389166]{color:#8c4545\n}\n.text-title[data-v-c9389166]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-c9389166]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-c9389166]{color:#f1b70b\n}\n.text-white[data-v-c9389166]{color:#fff\n}\n.text-bigger[data-v-c9389166]{font-size:18px;font-weight:500\n}\n.text-big[data-v-c9389166]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-c9389166]{font-size:14px\n}\n.text-middle-height[data-v-c9389166]{line-height:24px\n}\n.text-small[data-v-c9389166]{font-size:12px\n}\n.text-word-break[data-v-c9389166]{word-break:break-all\n}\n.text-right[data-v-c9389166]{text-align:right\n}\n.text-left[data-v-c9389166]{text-align:left\n}\n.text-line-middle[data-v-c9389166]{line-height:24px\n}\n.text-link[data-v-c9389166],.text-link-underline[data-v-c9389166]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-c9389166]:hover,.text-link-underline[data-v-c9389166]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-c9389166]{text-decoration:underline\n}\n.text-center[data-v-c9389166]{text-align:center\n}\n.text-pointer[data-v-c9389166]{cursor:pointer\n}\n.gap-10[data-v-c9389166]{gap:10px\n}\n.m-t-auto[data-v-c9389166]{margin-top:auto\n}\n.m-t-4[data-v-c9389166]{margin-top:4px\n}\n.m-t-5[data-v-c9389166]{margin-top:5px\n}\n.m-t-8[data-v-c9389166]{margin-top:10px\n}\n.m-t-10[data-v-c9389166]{margin-top:10px\n}\n.m-t-13[data-v-c9389166]{margin-top:10px\n}\n.m-t-15[data-v-c9389166]{margin-top:15px\n}\n.m-t-16[data-v-c9389166]{margin-top:16px\n}\n.m-t-20[data-v-c9389166]{margin-top:20px\n}\n.m-t-24[data-v-c9389166]{margin-top:24px\n}\n.m-t-25[data-v-c9389166]{margin-top:25px\n}\n.m-t-26[data-v-c9389166]{margin-top:26px\n}\n.m-t-30[data-v-c9389166]{margin-top:30px\n}\n.m-t-35[data-v-c9389166]{margin-top:35px\n}\n.m-t-40[data-v-c9389166]{margin-top:40px\n}\n.m-t-45[data-v-c9389166]{margin-top:45px\n}\n.m-t-50[data-v-c9389166]{margin-top:50px\n}\n.m-t-60[data-v-c9389166]{margin-top:60px\n}\n.m-t-65[data-v-c9389166]{margin-top:65px\n}\n.m-t-80[data-v-c9389166]{margin-top:80px\n}\n.m-l-5[data-v-c9389166]{margin-left:5px\n}\n.m-l-10[data-v-c9389166]{margin-left:10px\n}\n.m-l-15[data-v-c9389166]{margin-left:15px\n}\n.m-l-20[data-v-c9389166]{margin-left:20px\n}\n.m-l-25[data-v-c9389166]{margin-left:25px\n}\n.m-l-30[data-v-c9389166]{margin-left:30px\n}\n.m-l-35[data-v-c9389166]{margin-left:35px\n}\n.m-r-5[data-v-c9389166]{margin-right:5px\n}\n.m-r-10[data-v-c9389166]{margin-right:10px\n}\n.m-r-15[data-v-c9389166]{margin-right:15px\n}\n.m-r-30[data-v-c9389166]{margin-right:30px\n}\n.m-b-5[data-v-c9389166]{margin-bottom:5px !important\n}\n.m-b-15[data-v-c9389166]{margin-bottom:15px !important\n}\n.m-b-20[data-v-c9389166]{margin-bottom:20px !important\n}\n.m-b-30[data-v-c9389166]{margin-bottom:30px !important\n}\n.m-b-25[data-v-c9389166]{margin-bottom:25px !important\n}\n.m-b-50[data-v-c9389166]{margin-bottom:50px !important\n}\n.p-t-40[data-v-c9389166]{padding-top:40px\n}\n.p-t-85[data-v-c9389166]{padding-top:85px !important\n}\n.hidden[data-v-c9389166]{opacity:0 !important\n}\n.relative[data-v-c9389166]{position:relative\n}\n.space-nowrap[data-v-c9389166]{white-space:nowrap\n}\n.uppercase[data-v-c9389166]{text-transform:uppercase\n}\n.lowercase[data-v-c9389166]{text-transform:lowercase\n}\n.fade-enter-active[data-v-c9389166]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-c9389166]{transition:all .1s ease-out\n}\n.fade-enter[data-v-c9389166],.fade-leave-to[data-v-c9389166]{opacity:0\n}\n.fade-down-enter-active[data-v-c9389166],.fade-down-leave-active[data-v-c9389166],.fade-down-move[data-v-c9389166]{transition:all .15s\n}\n.fade-down-leave-active[data-v-c9389166],.fade-down-enter-active[data-v-c9389166]{position:absolute !important\n}\n.fade-down-enter[data-v-c9389166],.fade-down-leave-to[data-v-c9389166]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-c9389166],.scale-leave-active[data-v-c9389166],.scale-move[data-v-c9389166]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-c9389166],.scale-leave-to[data-v-c9389166]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-c9389166],.slide-leave-active[data-v-c9389166]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-c9389166]{transition:all .2s ease\n}\n.slide-leave-active[data-v-c9389166]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-c9389166],.slide-leave-to[data-v-c9389166]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-c9389166],.slide-leave[data-v-c9389166]{margin-bottom:0px\n}\n.slide-enter[data-v-c9389166],.slide-leave-to[data-v-c9389166]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-c9389166],.slide-in-leave-active[data-v-c9389166]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-c9389166]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-c9389166]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-c9389166]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-c9389166]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-c9389166],.page-fade-enter-active[data-v-c9389166]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-c9389166],.page-fade-leave-to[data-v-c9389166],.page-fade-enter[data-v-c9389166]{opacity:0\n}\n.page-fade-enter-to[data-v-c9389166]{opacity:1\n}\n.fade-out-leave-active[data-v-c9389166],.fade-out-enter-active[data-v-c9389166]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-c9389166],.fade-out-leave-to[data-v-c9389166],.fade-out-enter[data-v-c9389166]{opacity:0\n}\n.fade-out-enter-to[data-v-c9389166]{opacity:1\n}\n.slide-down-enter-active[data-v-c9389166],.slide-down-leave-active[data-v-c9389166]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-c9389166],.slide-down-enter[data-v-c9389166]{top:100%\n}\n.slide-down-leave[data-v-c9389166],.slide-down-enter-to[data-v-c9389166]{top:0%\n}\n.slide-out-enter-active[data-v-c9389166],.slide-out-leave-active[data-v-c9389166]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-c9389166]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-c9389166]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-c9389166]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-c9389166],.exchange-result.slide-out-enter[data-v-c9389166]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-c9389166],.exchange-pending.slide-out-enter[data-v-c9389166]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-c9389166],.slide-left-leave-active[data-v-c9389166]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-c9389166]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-c9389166]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-c9389166]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-c9389166],.slide-right-leave-active[data-v-c9389166]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-c9389166]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-c9389166]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-c9389166]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-c9389166],.spin-down-leave-active[data-v-c9389166]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-c9389166]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-c9389166]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-c9389166]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-c9389166],.spin-up-leave-active[data-v-c9389166]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-c9389166]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-c9389166]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-c9389166]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-c9389166],.puff-out-leave-active[data-v-c9389166]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-c9389166]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-c9389166]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-c9389166],.puff-out-enter-to[data-v-c9389166]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-c9389166],.collapse-fade-enter-active[data-v-c9389166]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-c9389166],.collapse-fade-leave-to[data-v-c9389166],.collapse-fade-enter[data-v-c9389166]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-c9389166]{opacity:1\n}\n.lazy-fade-leave-active[data-v-c9389166],.lazy-fade-enter-active[data-v-c9389166]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-c9389166],.lazy-fade-leave-to[data-v-c9389166],.lazy-fade-enter[data-v-c9389166]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-c9389166]{opacity:1\n}\n.unsigned-amount[data-v-c9389166]{padding-left:12px\n}",
          "",
        ]));
    },
    5355: function (t, e, a) {
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
          return t.tx && t.tx.walletid
            ? a(
                "div",
                {
                  staticClass: "table-row with-hover",
                  attrs: { "data-test-id": "wall_pay" },
                  on: { click: t.toggleItem },
                },
                [
                  a("div", { staticClass: "flex-wrap flex-wrap-fix" }, [
                    a("div", { staticClass: "item" }, [
                      a(
                        "div",
                        {
                          staticClass: "flex-wrap center",
                          attrs: { "data-test-id": "wall_pay_sent" },
                        },
                        [
                          a("coin-icon", { attrs: { wallet: t.currentCoin } }),
                          t._v(" "),
                          a("div", { staticClass: "m-l-10" }, [
                            (t.tx.direction || t.isOperation) && t.isTxSign
                              ? a(
                                  "span",
                                  {
                                    staticClass:
                                      "text-big text-green text-operator",
                                  },
                                  [t._v("\n            +\n          ")],
                                )
                              : !t.tx.direction && t.isTxSign
                                ? a(
                                    "span",
                                    {
                                      staticClass:
                                        "text-big text-red text-operator negative-operator",
                                    },
                                    [t._v("\n            -\n          ")],
                                  )
                                : t._e(),
                            t._v(" "),
                            a(
                              "span",
                              {
                                staticClass: "text-big",
                                class: { "unsigned-amount": !t.isTxSign },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.formatFinance(
                                        t.formatBigAmount(t.tx.amount),
                                      ),
                                    ),
                                ),
                              ],
                            ),
                            t._v(" "),
                            a("span", { staticClass: "text-big text-gray" }, [
                              t._v(
                                "\n            " +
                                  t._s(t.amountUnit) +
                                  "\n          ",
                              ),
                            ]),
                          ]),
                        ],
                        1,
                      ),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "item" }, [
                      a("p", { staticClass: "text-small text-gray" }, [
                        t._v("\n        " + t._s(t.columnText) + "\n      "),
                      ]),
                      t._v(" "),
                      t.description
                        ? a(
                            "a",
                            {
                              staticClass: "text-link text-word-break",
                              attrs: { "data-test-id": "wall_pay_to" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(),
                                    t.$copyToClipboard(t.description)
                                  );
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.formatTextTrimMiddle(t.description, 14),
                                  ) +
                                  "\n      ",
                              ),
                            ],
                          )
                        : a("p", [t._v("Secure network")]),
                      t._v(" "),
                      t.activeOpened
                        ? a("div", [
                            t.isOperation
                              ? t._e()
                              : a(
                                  "p",
                                  {
                                    staticClass: "text-small text-gray m-t-20",
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(
                                          t.tx.direction
                                            ? t.$t("historyPage.to")
                                            : t.$t("historyPage.from"),
                                        ) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                            t._v(" "),
                            t.isOperation
                              ? t._e()
                              : a(
                                  "a",
                                  {
                                    staticClass: "text-link text-word-break",
                                    attrs: { "data-test-id": "wall_pay_from" },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(),
                                          t.$copyToClipboard(
                                            t.tx.direction
                                              ? t.address
                                              : t.parentAddress,
                                          )
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(
                                          t.tx.direction
                                            ? t.address
                                            : t.parentAddress,
                                        ) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                            t._v(" "),
                            t.tx.memo &&
                            t.tx.memo.length &&
                            "undefined" !== t.tx.memo
                              ? a(
                                  "p",
                                  {
                                    staticClass: "text-small text-gray m-t-20",
                                    attrs: {
                                      "data-test-id": "wall_pay_placeholder",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.placeholderPaymentId) +
                                        "\n        ",
                                    ),
                                  ],
                                )
                              : t._e(),
                            t._v(" "),
                            t.tx.memo &&
                            t.tx.memo.length &&
                            "undefined" !== t.tx.memo
                              ? a(
                                  "a",
                                  {
                                    staticClass: "text-link text-word-break",
                                    attrs: { "data-test-id": "wall_pay_memo" },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(),
                                          t.$copyToClipboard(t.tx.memo)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.tx.memo) +
                                        "\n        ",
                                    ),
                                  ],
                                )
                              : t._e(),
                            t._v(" "),
                            null !== t.tx.fee &&
                            Number(t.tx.fee) >= 0 &&
                            (!t.tx.direction || t.isOperation)
                              ? a(
                                  "div",
                                  { staticClass: "flex align-flex-end" },
                                  [
                                    a("div", [
                                      a(
                                        "p",
                                        {
                                          staticClass:
                                            "text-small text-gray m-t-20",
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("title.networkFee")) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      t._v(" "),
                                      a(
                                        "p",
                                        {
                                          staticClass:
                                            "text-link text-word-break m-t-4",
                                          attrs: {
                                            "data-test-id": "wall_pay_fee",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(t.tx.fee) +
                                              "\n              " +
                                              t._s(
                                                t.tx.feeTicker ||
                                                  t.currentCoin
                                                    .deprecatedParent,
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ]),
                                    t._v(" "),
                                    t.isResendButton
                                      ? a(
                                          "button",
                                          {
                                            staticClass:
                                              "button resend-button m-l-30",
                                            attrs: {
                                              "data-test-id": "wall_pay_resend",
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.resendTx.apply(
                                                    null,
                                                    arguments,
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(t.$t("button.resend")) +
                                                "\n          ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                  ],
                                )
                              : t._e(),
                            t._v(" "),
                            a(
                              "p",
                              { staticClass: "text-small text-gray m-t-20" },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("historyPage.hash")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            a("div", [
                              a(
                                "a",
                                {
                                  staticClass:
                                    "text-link-underline text-word-break",
                                  attrs: { "data-test-id": "wall_pay_hash" },
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        t.open.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.tx.txid) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              +t.tx.nonce
                                ? a("div", { staticClass: "flex" }, [
                                    a(
                                      "p",
                                      {
                                        staticClass:
                                          "text-small text-gray m-t-5 m-r-10",
                                        style: { color: "#858FAD" },
                                      },
                                      [
                                        t._v(
                                          "\n              Nonce:\n            ",
                                        ),
                                      ],
                                    ),
                                    t._v(" "),
                                    a(
                                      "a",
                                      {
                                        staticClass:
                                          "text-word-break text-small text-gray m-t-5",
                                        style: { color: "#858FAD" },
                                        attrs: {
                                          "data-test-id": "wall_pay_nonce",
                                        },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.stopPropagation(),
                                              t.$copyToClipboard(t.tx.nonce)
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.tx.nonce) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ])
                                : t._e(),
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "button-center" }, [
                              a(
                                "button",
                                {
                                  staticClass: "button copy",
                                  attrs: { "data-test-id": "wall_pay_copy" },
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        t.$copyToClipboard(
                                          "" +
                                            t.parent.explorer.webUrl +
                                            t.tx.txid,
                                        )
                                      );
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("button.copy")) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ]),
                          ])
                        : t._e(),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "item" }, [
                      a(
                        "p",
                        {
                          staticClass: "text-middle text-gray text-right",
                          attrs: { "data-test-id": "wall_pay_time" },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$formatDate(t.tx.timestamp)) +
                              "\n      ",
                          ),
                        ],
                      ),
                    ]),
                    t._v(" "),
                    a(
                      "div",
                      { staticClass: "item" },
                      [
                        t.isPendingTx
                          ? a("div", { staticClass: "history-status" })
                          : t.isSuccessTx
                            ? a("success-mark", { attrs: { color: "green" } })
                            : a("div", {
                                staticClass:
                                  "history-status history-status-fail",
                              }),
                      ],
                      1,
                    ),
                  ]),
                  t._v(" "),
                  a("transition", { attrs: { name: "fade-down" } }, [
                    t.isCopiedToClipboard
                      ? a(
                          "div",
                          {
                            staticClass: "message",
                            style: {
                              left: "50%",
                              top: t.activeOpened ? "45%" : "30px",
                            },
                            attrs: { "data-test-id": "wall_copied_alert" },
                          },
                          [
                            t._v(
                              "\n      " + t._s(t.successCopyText) + "\n    ",
                            ),
                          ],
                        )
                      : t._e(),
                  ]),
                ],
                1,
              )
            : t._e();
        },
        i = [];
    },
    5760: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        s = a(68),
        o = a(855),
        r = a(375),
        c = n(a(3189)),
        l = n(a(821)),
        d = n(a(3628)),
        u = n(a(5352)),
        v = n(a(3364)),
        p = n(a(2999)),
        f = a(233),
        h = a(804),
        m = n(a(798)),
        g = a(847);
      const C = "coinInfo::activeTab",
        _ = 100,
        x = 5e4,
        b = ["FLR"],
        w = (t) =>
          t
            .filter((t) => {
              let { amount: e } = t;
              return "0" !== e;
            })
            .sort((t, e) => e.timestamp - t.timestamp);
      e.default = {
        name: "CoinInfo",
        components: {
          AtomicNotifyPoint: v.default,
          TableItems: c.default,
          TokenTag: l.default,
          CoinDropdown: d.default,
          HistoryTableRow: u.default,
          MemesImage: p.default,
          Alert: () => a.e(404).then(a.bind(null, 5376)),
          AboutTab: () => a.e(300).then(a.bind(null, 11685)),
          ChartPrice: () => a.e(406).then(a.bind(null, 11693)),
          AccountDetails: () => a.e(412).then(a.bind(null, 11695)),
          ClaimFlair: () => a.e(271).then(a.bind(null, 11697)),
          ClaimADA: () => a.e(255).then(a.bind(null, 11699)),
          AddCustomTokenEditOrDelete: () => a.e(413).then(a.bind(null, 11701)),
          AtomicBanner: () => a.e(30).then(a.bind(null, 5758)),
        },
        mixins: [r.ExchangeMixin, r.HistoryMixin],
        props: { coin: { type: Object, default: null } },
        data() {
          return {
            fiatBalance: "0.00",
            isEditToken: !1,
            isAccountDetails: !1,
            isAllTransaction: !1,
            activeTab: "",
            serviceMessage: "",
            transactions: [],
            articlesCoin: [],
            filteredCurrenciesExchange: [],
            filteredCurrenciesBuy: [],
            isChangeCoin: !1,
            isClaimPopup: !1,
            isSettingsDropdown: !1,
            isSavedTransactionPopup: !1,
            isLoadingTransaction: !1,
            autoUpdateTransactionsCounter: !1,
            banner: null,
          };
        },
        computed: {
          ...(0, i.mapGetters)([
            "fiatRate",
            "coinRate",
            "serviceMessageSettings",
            "isChartDataPrice",
            "isChartDataLoading",
            "isUpdatingFiat",
            "chartDataMainEndpoint",
            "hasAutoclaimAirdropByTicker",
            "currenciesExchange",
          ]),
          isIncludeAirdrops() {
            return b.includes(this.coin.deprecatedParent);
          },
          emptyHistoryText() {
            return this.$t("coinInfo.emptyHistoryText", {
              ticker: this.coin.ticker,
            });
          },
          fiat() {
            return (0, h.getValueFiat)({
              value: this.balance,
              wallet: this.coin,
            });
          },
          isChartVisible() {
            return this.isChartTabVisible && "chart" === this.activeTab;
          },
          isChartTabVisible() {
            return (
              this.coin.confirmed && this.isChartDataPrice(this.coin.ticker)
            );
          },
          isPriceChart() {
            const t = this.coinRate(this.fiatRate, this.coin).rate > 0;
            return (
              this.coin.confirmed &&
              t &&
              (this.isChartDataPrice(this.coin.ticker) ||
                !!this.isChartDataLoading[this.chartDataMainEndpoint])
            );
          },
          balance() {
            var t, e, a;
            return null !==
              (t =
                null !==
                  (e =
                    null === (a = this.coin) || void 0 === a
                      ? void 0
                      : a.divisibleBalance) && void 0 !== e
                  ? e
                  : localStorage.getItem(this.coin.id + "-balance")) &&
              void 0 !== t
              ? t
              : 0;
          },
          dropdownCoins() {
            return this.filterSimilarsByKey(
              this.$wallets
                .list()
                .filter((t) =>
                  "EOS" === t.ticker
                    ? t.activated
                    : (t.ticker !== this.coin.ticker ||
                        t.deprecatedParent !== this.coin.deprecatedParent) &&
                      !f.DISABLED_COINS.includes(t.deprecatedParent),
                ),
              "id",
            );
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          isArticles() {
            return this.articlesCoin && this.articlesCoin.length > 0;
          },
          isToken() {
            return this.coin instanceof s.Token;
          },
          showSwapCoinButton() {
            const t = "EOS" !== this.coin.ticker || this.coin.activated;
            return (
              "FIO" !== this.coin.ticker &&
              this.filteredCurrenciesExchange.includes(this.coin.id) &&
              t
            );
          },
          availableBuyCoin() {
            const t = [];
            this.filteredCurrenciesBuy.forEach((e) => {
              const a = this.$wallets.getWallet(e);
              if (a) {
                const e = "EOS" !== a.ticker || a.activated;
                e && t.push(a);
              }
            });
            const e = t.filter(
              (t) =>
                t.ticker === this.coin.ticker &&
                t.deprecatedParent === this.coin.deprecatedParent,
            );
            return e.length > 0;
          },
          showBuyCoinButton() {
            return "FIO" !== this.coin.ticker && this.availableBuyCoin;
          },
          hasAirdrop() {
            var t, e, a;
            return (
              !!this.isIncludeAirdrops &&
              ((null ===
                (t = this.$wallets.getWallet(this.coin.deprecatedParent)) ||
              void 0 === t ||
              null === (e = t.balances) ||
              void 0 === e ||
              null === (a = e.additional) ||
              void 0 === a
                ? void 0
                : a.activeAutoClaim) ||
                this.hasAutoclaimAirdropByTicker({ ticker: this.coin.ticker }))
            );
          },
          isSkamToken() {
            return !this.coin.confirmed && this.coin instanceof s.Token;
          },
        },
        watch: {
          coin: {
            async handler() {
              (this.checkForSkamToken(),
                await this.initCoin(),
                (this.fiatBalance = (0, h.calculateFiatValue)(
                  this.balance,
                  this.coin,
                )));
            },
            immediate: !0,
          },
          isUpdatingFiat: {
            handler() {
              this.fiatBalance = (0, h.calculateFiatValue)(
                this.balance,
                this.coin,
              );
            },
            immediate: !0,
          },
          balance: {
            async handler() {
              ((this.fiatBalance = (0, h.calculateFiatValue)(
                this.balance,
                this.coin,
              )),
                await this.updateTransactions());
            },
            immediate: !0,
          },
        },
        async beforeMount() {
          try {
            const t = await this.$exchanges.getAvailableWalletIdCollection(
              this.currenciesExchange,
              this.$wallets,
            );
            this.filteredCurrenciesExchange = t.filter(
              (t) => !f.DISABLED_COINS.includes(t),
            );
            const e = new o.Simplex(this.$buy.settings.simplexApiUrl);
            this.filteredCurrenciesBuy = e
              .getAvailableWallets()
              .filter((t) => !f.DISABLED_COINS.includes(t));
          } catch (t) {
            console.error(t);
          }
        },
        mounted() {
          var t;
          (this.$bus.$on("close-info-coin", this.closePopup),
            this.$emitter.on("socket::newtx::outgoing", this.socketTxHandler),
            this.$emitter.on("socket::newtx", this.socketTxHandler),
            this.$emitter.on("socket::tx::confirmed", this.socketTxHandler),
            (0, g.logAsset)(
              this.coin.ticker,
              null === (t = this.$wallets) || void 0 === t ? void 0 : t.hash,
            ),
            "about" !== localStorage.getItem(C) ||
              this.isArticles ||
              localStorage.setItem(C, "chart"),
            (this.activeTab = this.isPriceChart
              ? localStorage.getItem(C) || "chart"
              : "transactions"));
        },
        beforeDestroy() {
          (this.$bus.$off("close-info-coin", this.closePopup),
            this.$emitter.off("socket::newtx::outgoing", this.socketTxHandler),
            this.$emitter.off("socket::newtx", this.socketTxHandler),
            this.$emitter.off("socket::tx::confirmed", this.socketTxHandler),
            clearTimeout(this.autoUpdateTransactionsCounter));
        },
        methods: {
          getValueFiat: h.getValueFiat,
          formatFinance: m.default,
          async initCoin() {
            ((this.transactions = w(this.coin.transactions)),
              this.updateTab(),
              this.setServiceMessage(),
              (this.articlesCoin = await this.coin.getAboutInfo()),
              await this.updateTransactionsAndBalance(),
              (this.fiatBalance = (0, h.calculateFiatValue)(
                this.balance,
                this.coin,
              )),
              this.$forceUpdate());
          },
          closeAccountDetails() {
            this.isAccountDetails = !1;
          },
          handleActivateAutoclaimDrops() {
            const t = this.$wallets.getWallet(this.coin.deprecatedParent);
            this.$bus.$emit("activate-coin", {
              id: t.id,
              type: "autoclaim-drops",
            });
          },
          toggleAccountDetails() {
            ((this.isAccountDetails = !this.isAccountDetails),
              this.closeSettingsDropdown());
          },
          resendCoin(t) {
            this.openSendCoin(t);
          },
          changeActiveTab(t) {
            ((this.activeTab = t), localStorage.setItem(C, t));
          },
          async socketTxHandler(t) {
            let { id: e } = t;
            const a = this.$wallets.getWallet(e);
            (this.coin.id !== a.id &&
              this.coin.deprecatedParent !== a.deprecatedParent) ||
              (await this.updateTransactions());
          },
          makeCsv(t, e, a) {
            const n = t.transactions
              .sort((t, e) => e.timestamp - t.timestamp)
              .map((t) => {
                const n = t.amount || "0";
                let i = t.direction ? n : "- " + n;
                i =
                  t.otherSideAddress &&
                  t.otherSideAddress.toLowerCase() === e.toLowerCase()
                    ? this.$t("coinInfo.makeCsv.sendTransactionToYourself")
                    : i;
                const s = `${a}${t.txid}`,
                  o = new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "full",
                    timeStyle: "long",
                  }).format(t.datetime),
                  r = t.direction
                    ? this.$t("coinInfo.makeCsv.incoming")
                    : this.$t("coinInfo.makeCsv.outgoing");
                return {
                  "TX ID": t.txid,
                  "TX URL": s,
                  [this.$t("coinInfo.makeCsv.txType")]: r,
                  [this.$t("coinInfo.makeCsv.coinAmount")]: i,
                  Asset: t.wallet || t.ticker,
                  Date: o,
                };
              });
            return `"${Object.keys(n[0]).join('","')}"\n        ${n.map((t) => `"${Object.values(t).join('","')}"`).join("\n")}`;
          },
          async exportTransactions() {
            const t = this.coin.name.toLowerCase().replace(/ /gi, "_"),
              e = this.$formatDate(new Date(), "DD.MM.YYYY"),
              a = `${t}-atomicwallet-${e}.csv`,
              n = this.$wallets.getWallet(this.coin.deprecatedParent),
              { address: i, explorer: s } = n,
              { webUrl: o } = s,
              r = this.coin.transactions.length
                ? this.makeCsv(this.coin, i, o)
                : "";
            this.isSavedTransactionPopup =
              await this.$electron.ipcRenderer.invoke("exportTransactions", {
                fileName: a,
                body: r,
              });
          },
          closeSettingsDropdown() {
            this.isSettingsDropdown = !1;
          },
          toggleSettingsDropdown() {
            this.isSettingsDropdown = !this.isSettingsDropdown;
          },
          setServiceMessage() {
            this.serviceMessage = "";
            const t = this.serviceMessageSettings.filter((t) => {
              var e;
              let a =
                0 === t.platforms.length ||
                t.platforms.includes(this.appConfig.platform);
              return (
                (a =
                  a &&
                  ((t.isCoins && !(this.coin instanceof s.Token)) ||
                    (t.isTokens && this.coin instanceof s.Token) ||
                    (t.isBNBTokens &&
                      "BNBToken" === this.coin.constructor.name) ||
                    (t.isETHTokens &&
                      "ETHToken" === this.coin.constructor.name) ||
                    (null !==
                      (e = null === t || void 0 === t ? void 0 : t.tickers) &&
                    void 0 !== e
                      ? e
                      : []
                    ).includes(this.coin.ticker))),
                (a =
                  a &&
                  (0 === t.desktopVersions.length ||
                    t.desktopVersions.includes(this.appConfig.version))),
                a
              );
            });
            this.serviceMessage =
              (null === t || void 0 === t ? void 0 : t.length) > 0
                ? t
                    .map((t) => {
                      let { message: e } = t;
                      return e;
                    })
                    .join("<br/>")
                : "";
          },
          async handleScroll(t) {
            const e = t.target,
              a = e.offsetHeight + e.scrollTop + 10 >= e.scrollHeight;
            !a ||
              this.isLoadingTransaction ||
              this.isAllTransaction ||
              (await this.updateTransactions());
          },
          async updateTransactions(t) {
            (void 0 === t && (t = !1),
              clearTimeout(this.autoUpdateTransactionsCounter));
            try {
              this.isLoadingTransaction = !0;
              const e = Math.ceil(_ / this.coin.getTxLimit()),
                a =
                  t && !this.isAllTransaction
                    ? await this.$wallets.getTransactionsByWallet(this.coin, e)
                    : await this.$wallets.getTransactionsByWallet(this.coin);
              (this.$wallets.loadTransactions(a || []),
                (this.transactions = w(this.coin.transactions)),
                (this.isAllTransaction = this.transactions.length < _ || !t));
            } catch (e) {
              (console.log("updateTransactions", e),
                (this.isAllTransaction = !0));
            } finally {
              this.isLoadingTransaction = !1;
            }
            this.autoUpdateTransactionsCounter = setTimeout(async () => {
              await this.updateTransactions();
            }, x);
          },
          updateBalance() {
            const t = this.$wallets.getWallet(
                this.coin.deprecatedParent || this.coin.parent,
              ),
              e = new Set([
                "ETH",
                "AVAX",
                "BSC",
                "LUNC",
                "MATIC",
                "SOL",
                "TON",
              ]);
            this.coin instanceof s.Token &&
            (e.has(this.coin.deprecatedParent) || "EVM" === t.networkType)
              ? t.getInfo({
                  isToken: !0,
                  contract: this.coin.contract,
                  ticker: this.coin.ticker,
                  mint: this.coin.mint,
                })
              : t.getInfo({ onlyCoin: !0 });
          },
          async updateTransactionsAndBalance() {
            try {
              await this.updateBalance();
            } catch (t) {
              console.log("updateTransactionsAndBalance", t);
            }
            await this.updateTransactions(!0);
          },
          reserveFio() {
            const t =
              "https://reg.fioprotocol.io/ref/atomic?publicKey=" +
              this.coin.publicKey;
            this.$electron.openExternal(t);
          },
          openClaimPopup() {
            this.isClaimPopup = !this.isClaimPopup;
          },
          openShareViewKey() {
            (this.closeSettingsDropdown(),
              this.$bus.$emit("openSupportPopup", {
                additionalText: `-----------------------\n ${this.$t("supportPopup.userTickerAddress", { ticker: "XMR" })}: ${this.coin.address}\n${this.$t("supportPopup.userTickerViewKey", { ticker: "XMR" })}: ${this.coin.privateKeyView}`,
                subject: "Balance issue",
                tags: ["xmr_view_key"],
              }));
          },
          openSendCoin(t) {
            var e, a, n;
            ((0, g.logAction)(
              {
                btnName: this.$t("button.send"),
                screenName: this.$route.name,
                action: "exchange",
              },
              null === (e = this.$wallets) || void 0 === e ? void 0 : e.hash,
            ),
              (0, g.logScreenTime)(
                { name: "CoinInfo" },
                null === this ||
                  void 0 === this ||
                  null === (a = this.$wallets) ||
                  void 0 === a
                  ? void 0
                  : a.hash,
              ),
              (0, g.logScreen)(
                { name: "main-coin-id-send" },
                null === this ||
                  void 0 === this ||
                  null === (n = this.$wallets) ||
                  void 0 === n
                  ? void 0
                  : n.hash,
              ),
              this.$emit("toggleSendCoin", this.coin, t));
          },
          openReceiveCoin() {
            var t, e, a;
            ((0, g.logAction)(
              {
                btnName: this.$t("button.receive"),
                screenName: this.$route.name,
                action: "exchange",
              },
              null === (t = this.$wallets) || void 0 === t ? void 0 : t.hash,
            ),
              (0, g.logScreenTime)(
                { name: "CoinInfo" },
                null === this ||
                  void 0 === this ||
                  null === (e = this.$wallets) ||
                  void 0 === e
                  ? void 0
                  : e.hash,
              ),
              (0, g.logScreen)(
                { name: "main-coin-id-receive" },
                null === this ||
                  void 0 === this ||
                  null === (a = this.$wallets) ||
                  void 0 === a
                  ? void 0
                  : a.hash,
              ),
              this.$emit("toggleReceiveCoin", this.coin));
          },
          openSwapCoin() {
            var t;
            ((0, g.logAction)(
              {
                btnName: this.$t("button.swap"),
                screenName: this.$route.name,
                action: "exchange",
              },
              null === (t = this.$wallets) || void 0 === t ? void 0 : t.hash,
            ),
              this.$router.push({
                path: "/exchange",
                query: { coinToReceive: this.coin.id },
              }));
          },
          openBuyCoin() {
            var t;
            ((0, g.logAction)(
              {
                btnName: this.$t("button.buy"),
                screenName: this.$route.name,
                action: "exchange",
              },
              null === (t = this.$wallets) || void 0 === t ? void 0 : t.hash,
            ),
              this.$router.push({ path: "/simplex/USD/" + this.coin.id }));
          },
          closePopup() {
            this.$emit("closePopup");
          },
          closeDropdown() {
            this.isChangeCoin = !1;
          },
          toggleDropdown() {
            this.isChangeCoin = !this.isChangeCoin;
          },
          selectCoin(t) {
            (this.$emit("changeCoin", t),
              this.closeDropdown(),
              this.closeBanner());
          },
          showBanner() {
            this.banner = {
              title: this.$t("notice"),
              text: this.$t("skam_warning"),
              img: { type: "internal", data: a(867) },
            };
          },
          closeBanner() {
            this.banner = null;
          },
          checkForSkamToken() {
            this.isSkamToken && this.showBanner();
          },
          updateTab() {
            const t = localStorage.getItem(C);
            switch (t) {
              case "about":
                if (this.isArticles) break;
                this.changeActiveTab("chart");
              default:
                this.isPriceChart || this.changeActiveTab("transactions");
            }
          },
        },
      };
    },
    6968: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5760),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(11564),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        v = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = v.exports;
    },
  },
]);
