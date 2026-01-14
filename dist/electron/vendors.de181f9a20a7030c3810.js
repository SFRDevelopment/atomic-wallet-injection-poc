(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [56, 407],
  {
    11568: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5764),
        n = i.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(a);
      var r = i(11569),
        o = i(5),
        c = !1,
        l = null,
        u = null,
        d = null,
        h = Object(o["a"])(n.a, r["a"], r["b"], c, l, u, d);
      e["default"] = h.exports;
    },
    11569: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return n;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "hedera-activation" }, [
            "info" === t.status
              ? i("div", [
                  i("p", { staticClass: "text-middle text-gray" }, [
                    t._v(
                      "You should activate your account to receive an address.",
                    ),
                  ]),
                  t._v(" "),
                  i("p", { staticClass: "text-middle text-gray" }, [
                    t._v("It’s free for Atomic users and takes 1 min."),
                  ]),
                  t._v(" "),
                  i("div", { staticClass: "submit" }, [
                    i(
                      "button",
                      {
                        staticClass: "button uppercase",
                        on: { click: t.activateAccount },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("eosWizard.activateAccount")) +
                            "\n      ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button uppercase",
                        on: { click: t.talkWithSupport },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("button.contactSupports")) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ]),
                ])
              : i("div", { staticClass: "activating" }, [
                  i("div", {
                    staticClass: "icon",
                    class: t.$iconClass(t.coin),
                  }),
                  t._v(" "),
                  "success" === t.status
                    ? i("div", [
                        i("div", { staticClass: "text-green text-bigger" }, [
                          t._v(t._s(t.$t("message.activationSuccessful"))),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "submit" }, [
                          i(
                            "button",
                            {
                              staticClass: "button uppercase",
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
                        ]),
                      ])
                    : "error" === t.status
                      ? i("div", [
                          i("div", { staticClass: "text-bigger" }, [
                            t._v(t._s(t.$t("error.cantActivateNow"))),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "submit" }, [
                            i(
                              "button",
                              {
                                staticClass: "button uppercase",
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
                          ]),
                        ])
                      : "activating" === t.status
                        ? i("div", [
                            i("div", { staticClass: "text-bigger" }, [
                              t._v(t._s(t.$t("message.activatingAccount"))),
                            ]),
                            t._v(" "),
                            i("div", { staticClass: "loading" }),
                          ])
                        : t._e(),
                ]),
          ]);
        },
        n = [];
    },
    11570: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return n;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "coin-receive popup" },
            [
              i(
                "div",
                {
                  staticClass: "close",
                  attrs: { "data-test-id": "rec_close" },
                  on: { click: t.backToWallets },
                },
                [t._v("\n    ✕\n  ")],
              ),
              t._v(" "),
              t.isHederaActivating
                ? i("hedera-activation", {
                    on: {
                      done: t.onHederaActivationDone,
                      close: function (e) {
                        t.isHederaActivating = !1;
                      },
                    },
                  })
                : [
                    i(
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
                          ? i("memes-image", {
                              staticClass: "coin-img",
                              attrs: { uri: t.coin.imgUri },
                            })
                          : i("div", {
                              class: ["icon", t.icon],
                              attrs: { "data-test-id": "rec_icon_coin" },
                              on: { click: t.toggleDropdown },
                            }),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "dropdown-wrap" },
                          [
                            i(
                              "div",
                              { staticClass: "flex center" },
                              [
                                t.isSkamToken
                                  ? i("span", { staticClass: "skam-warning" }, [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("unverified")) +
                                          "\n          ",
                                      ),
                                    ])
                                  : t._e(),
                                t._v(" "),
                                i(
                                  "a",
                                  {
                                    staticClass: "name",
                                    attrs: { "data-test-id": "rec_coin" },
                                    on: { click: t.toggleDropdown },
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(t.coin.name) +
                                        "\n          ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                i("token-tag", {
                                  attrs: { wallet: t.coin, "is-big": "" },
                                }),
                              ],
                              1,
                            ),
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
                      ],
                      1,
                    ),
                    t._v(" "),
                    t.isCoinActivated && t.address
                      ? i("div", { staticClass: "address-wrapper" }, [
                          i(
                            "p",
                            {
                              staticClass: "text-small",
                              attrs: { "data-test-id": "rec_address_coti" },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.$t("receiveCoin.tickerAddress", {
                                      ticker: t.coin.ticker,
                                    }),
                                  ) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          i("img", {
                            staticClass: "qr-code",
                            attrs: {
                              src: t.qrCodeImage,
                              "data-test-id": "rec_addressqr_coti",
                            },
                          }),
                          t._v(" "),
                          i(
                            "a",
                            {
                              staticClass: "address",
                              attrs: { "data-test-id": "rec_pubKey_coti" },
                              on: {
                                click: function (e) {
                                  return t.$copyToClipboard(t.address);
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " + t._s(t.address) + "\n        ",
                              ),
                              i("transition", { attrs: { name: "fade" } }, [
                                t.isCopiedToClipboard
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "message",
                                        attrs: {
                                          "data-test-id": "rec_tooltipscopy",
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(
                                              t.$t(
                                                "message.addressCopiedToClipboard",
                                              ),
                                            ) +
                                            "\n          ",
                                        ),
                                      ],
                                    )
                                  : t._e(),
                              ]),
                            ],
                            1,
                          ),
                          t._v(" "),
                          t.isNeedWarnings
                            ? i(
                                "div",
                                {
                                  staticClass: "warning_wrap",
                                  attrs: {
                                    "data-test-id": "rec_sendtoken_erc-20",
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium text-gray new-title-bold",
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(
                                            t.$t(
                                              "receiveCoin.sendOnlySelectedTokens",
                                              { tokenName: t.getMessage },
                                            ),
                                          ) +
                                          "\n        ",
                                      ),
                                    ],
                                  ),
                                  t._v(" "),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "new-text-medium text-gray new-title-bold",
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(
                                            t.$t("message.sendingCoinsRisk"),
                                          ) +
                                          "\n        ",
                                      ),
                                    ],
                                  ),
                                ],
                              )
                            : t._e(),
                          t._v(" "),
                          i(
                            "button",
                            {
                              staticClass: "button small-gray",
                              attrs: { "data-test-id": "rec_copy" },
                              on: {
                                click: function (e) {
                                  return t.$copyToClipboard(t.address);
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
                          t.isHaveUnspendableBalance
                            ? i(
                                "p",
                                {
                                  staticClass: "text-small m-t",
                                  attrs: {
                                    "data-test-id": "rec_unspendable_balance",
                                  },
                                },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(t.unspendableBalanceTitle) +
                                      "\n      ",
                                  ),
                                ],
                              )
                            : t._e(),
                        ])
                      : i("div", { staticClass: "address-wrapper" }, [
                          i(
                            "button",
                            {
                              staticClass: "button",
                              attrs: { "data-test-id": "" },
                              on: { click: t.activateWallet },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.activate")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ]),
                    t._v(" "),
                    t.additionalInfo
                      ? i("div", { staticClass: "address-wrapper" }, [
                          i(
                            "p",
                            {
                              staticClass: "text-small m-t",
                              attrs: { "data-test-id": "rec_infoactivate" },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.additionalInfo) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ])
                      : t._e(),
                  ],
            ],
            2,
          );
        },
        n = [];
    },
    3129: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(60),
        a = i(68),
        r = s(i(2999)),
        o = s(i(821)),
        c = s(i(834)),
        l = s(i(798));
      const u = 4,
        d = 6;
      e.default = {
        name: "CoinDropdown",
        components: { MemesImage: r.default, TokenTag: o.default },
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
          ...(0, n.mapGetters)(["fiatRate", "coinRate"]),
          filteredCoins() {
            const t = this.filter.toLowerCase().trim(),
              e = this.coins.filter((e) => {
                let { isDisabled: i, name: s, ticker: n } = e;
                return (
                  !i &&
                  (s.toLowerCase().includes(t) || n.toLowerCase().includes(t))
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
            const { settings: i } = this.$buy,
              s = this.isShowExchangeTags
                ? (null === i || void 0 === i ? void 0 : i.exchangesTags) || []
                : (null === i || void 0 === i ? void 0 : i.simplexTags) || [],
              n = s[t];
            return n || e;
          },
          sortByMarketCap(t, e) {
            const i = this.coinRate(this.fiatRate, t).marketCap || 0,
              s = this.coinRate(this.fiatRate, e).marketCap || 0;
            return s - i;
          },
          balance(t) {
            let { id: e, balances: i, divisibleBalance: s } = t;
            const n = localStorage.getItem(e + "-balance"),
              a = +(
                (null === i || void 0 === i ? void 0 : i.available) ||
                s ||
                n ||
                0
              );
            return +a.toFixed(a > 1 ? u : d);
          },
          isSkamToken(t) {
            return !t.confirmed && t instanceof a.Token;
          },
        },
      };
    },
    3628: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(3129),
        n = i.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(a);
      var r = i(3859),
        o = i(5),
        c = !1,
        l = null,
        u = null,
        d = null,
        h = Object(o["a"])(n.a, r["a"], r["b"], c, l, u, d);
      e["default"] = h.exports;
    },
    3857: function (t, e, i) {
      (function (e, i) {
        t.exports = i();
      })(0, function () {
        "use strict";
        var t = function () {},
          e = Object.prototype.hasOwnProperty,
          i = Array.prototype.slice;
        function s(e, i) {
          var s;
          return (
            "function" === typeof Object.create
              ? (s = Object.create(e))
              : ((t.prototype = e), (s = new t()), (t.prototype = null)),
            i && a(!0, s, i),
            s
          );
        }
        function n(t, e, i, n) {
          var r = this;
          return (
            "string" !== typeof t && ((n = i), (i = e), (e = t), (t = null)),
            "function" !== typeof e &&
              ((n = i),
              (i = e),
              (e = function () {
                return r.apply(this, arguments);
              })),
            a(!1, e, r, n),
            (e.prototype = s(r.prototype, i)),
            (e.prototype.constructor = e),
            (e.class_ = t || r.class_),
            (e.super_ = r),
            e
          );
        }
        function a(t, s, n) {
          var a, r;
          n = i.call(arguments, 2);
          for (var o = 0, c = n.length; o < c; o++)
            for (a in ((r = n[o]), r)) (t && !e.call(r, a)) || (s[a] = r[a]);
        }
        var r = n;
        function o() {}
        ((o.class_ = "Nevis"), (o.super_ = Object), (o.extend = r));
        var c = o,
          l = c,
          u = l.extend(
            function (t, e, i) {
              ((this.qrious = t),
                (this.element = e),
                (this.element.qrious = t),
                (this.enabled = Boolean(i)));
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
                  i = e.padding || 0,
                  s = Math.floor((e.size - 2 * i) / t.width);
                return Math.max(1, s);
              },
              getOffset: function (t) {
                var e = this.qrious,
                  i = e.padding;
                if (null != i) return i;
                var s = this.getModuleSize(t),
                  n = Math.floor((e.size - s * t.width) / 2);
                return Math.max(0, n);
              },
              render: function (t) {
                this.enabled && (this.resize(), this.reset(), this.draw(t));
              },
              reset: function () {},
              resize: function () {},
            },
          ),
          d = u,
          h = d.extend({
            draw: function (t) {
              var e,
                i,
                s = this.qrious,
                n = this.getModuleSize(t),
                a = this.getOffset(t),
                r = this.element.getContext("2d");
              for (
                r.fillStyle = s.foreground,
                  r.globalAlpha = s.foregroundAlpha,
                  e = 0;
                e < t.width;
                e++
              )
                for (i = 0; i < t.width; i++)
                  t.buffer[i * t.width + e] &&
                    r.fillRect(n * e + a, n * i + a, n, n);
            },
            reset: function () {
              var t = this.qrious,
                e = this.element.getContext("2d"),
                i = t.size;
              ((e.lineWidth = 1),
                e.clearRect(0, 0, i, i),
                (e.fillStyle = t.background),
                (e.globalAlpha = t.backgroundAlpha),
                e.fillRect(0, 0, i, i));
            },
            resize: function () {
              var t = this.element;
              t.width = t.height = this.qrious.size;
            },
          }),
          f = h,
          _ = l.extend(null, {
            BLOCK: [
              0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24,
              24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26,
              28, 28, 24, 26, 26, 26, 28, 28,
            ],
          }),
          v = _,
          p = l.extend(null, {
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
          m = p,
          g = l.extend(null, {
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
          k = g,
          b = l.extend(null, {
            BLOCK: [
              3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117,
              2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098,
              831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345,
              3177,
            ],
          }),
          C = b,
          w = l.extend(
            function (t) {
              var e,
                i,
                s,
                n,
                a,
                r = t.value.length;
              ((this._badness = []),
                (this._level = m.LEVELS[t.level]),
                (this._polynomial = []),
                (this._value = t.value),
                (this._version = 0),
                (this._stringBuffer = []));
              while (this._version < 40)
                if (
                  (this._version++,
                  (s = 4 * (this._level - 1) + 16 * (this._version - 1)),
                  (n = m.BLOCKS[s++]),
                  (a = m.BLOCKS[s++]),
                  (e = m.BLOCKS[s++]),
                  (i = m.BLOCKS[s]),
                  (s = e * (n + a) + a - 3 + (this._version <= 9)),
                  r <= s)
                )
                  break;
              ((this._dataBlock = e),
                (this._eccBlock = i),
                (this._neccBlock1 = n),
                (this._neccBlock2 = a));
              var o = (this.width = 17 + 4 * this._version);
              ((this.buffer = w._createArray(o * o)),
                (this._ecc = w._createArray(e + (e + i) * (n + a) + a)),
                (this._mask = w._createArray((o * (o + 1) + 1) / 2)),
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
                var i,
                  s = this.buffer,
                  n = this.width;
                for (s[t + n * e] = 1, i = -2; i < 2; i++)
                  ((s[t + i + n * (e - 2)] = 1),
                    (s[t - 2 + n * (e + i + 1)] = 1),
                    (s[t + 2 + n * (e + i)] = 1),
                    (s[t + i + 1 + n * (e + 2)] = 1));
                for (i = 0; i < 2; i++)
                  (this._setMask(t - 1, e + i),
                    this._setMask(t + 1, e - i),
                    this._setMask(t - i, e - 1),
                    this._setMask(t + i, e + 1));
              },
              _appendData: function (t, e, i, s) {
                var n,
                  a,
                  r,
                  o = this._polynomial,
                  c = this._stringBuffer;
                for (a = 0; a < s; a++) c[i + a] = 0;
                for (a = 0; a < e; a++) {
                  if (((n = k.LOG[c[t + a] ^ c[i]]), 255 !== n))
                    for (r = 1; r < s; r++)
                      c[i + r - 1] =
                        c[i + r] ^ k.EXPONENT[w._modN(n + o[s - r])];
                  else for (r = i; r < i + s; r++) c[r] = c[r + 1];
                  c[i + s - 1] = 255 === n ? 0 : k.EXPONENT[w._modN(n + o[0])];
                }
              },
              _appendEccToData: function () {
                var t,
                  e = 0,
                  i = this._dataBlock,
                  s = this._calculateMaxLength(),
                  n = this._eccBlock;
                for (t = 0; t < this._neccBlock1; t++)
                  (this._appendData(e, i, s, n), (e += i), (s += n));
                for (t = 0; t < this._neccBlock2; t++)
                  (this._appendData(e, i + 1, s, n), (e += i + 1), (s += n));
              },
              _applyMask: function (t) {
                var e,
                  i,
                  s,
                  n,
                  a = this.buffer,
                  r = this.width;
                switch (t) {
                  case 0:
                    for (n = 0; n < r; n++)
                      for (s = 0; s < r; s++)
                        (s + n) & 1 ||
                          this._isMasked(s, n) ||
                          (a[s + n * r] ^= 1);
                    break;
                  case 1:
                    for (n = 0; n < r; n++)
                      for (s = 0; s < r; s++)
                        1 & n || this._isMasked(s, n) || (a[s + n * r] ^= 1);
                    break;
                  case 2:
                    for (n = 0; n < r; n++)
                      for (e = 0, s = 0; s < r; s++, e++)
                        (3 === e && (e = 0),
                          e || this._isMasked(s, n) || (a[s + n * r] ^= 1));
                    break;
                  case 3:
                    for (i = 0, n = 0; n < r; n++, i++)
                      for (3 === i && (i = 0), e = i, s = 0; s < r; s++, e++)
                        (3 === e && (e = 0),
                          e || this._isMasked(s, n) || (a[s + n * r] ^= 1));
                    break;
                  case 4:
                    for (n = 0; n < r; n++)
                      for (e = 0, i = (n >> 1) & 1, s = 0; s < r; s++, e++)
                        (3 === e && ((e = 0), (i = !i)),
                          i || this._isMasked(s, n) || (a[s + n * r] ^= 1));
                    break;
                  case 5:
                    for (i = 0, n = 0; n < r; n++, i++)
                      for (3 === i && (i = 0), e = 0, s = 0; s < r; s++, e++)
                        (3 === e && (e = 0),
                          (s & n & 1) + !(!e | !i) ||
                            this._isMasked(s, n) ||
                            (a[s + n * r] ^= 1));
                    break;
                  case 6:
                    for (i = 0, n = 0; n < r; n++, i++)
                      for (3 === i && (i = 0), e = 0, s = 0; s < r; s++, e++)
                        (3 === e && (e = 0),
                          ((s & n & 1) + (e && e === i)) & 1 ||
                            this._isMasked(s, n) ||
                            (a[s + n * r] ^= 1));
                    break;
                  case 7:
                    for (i = 0, n = 0; n < r; n++, i++)
                      for (3 === i && (i = 0), e = 0, s = 0; s < r; s++, e++)
                        (3 === e && (e = 0),
                          ((e && e === i) + ((s + n) & 1)) & 1 ||
                            this._isMasked(s, n) ||
                            (a[s + n * r] ^= 1));
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
                  i = this._eccBlock,
                  s = this._polynomial;
                for (s[0] = 1, t = 0; t < i; t++) {
                  for (s[t + 1] = 1, e = t; e > 0; e--)
                    s[e] = s[e]
                      ? s[e - 1] ^ k.EXPONENT[w._modN(k.LOG[s[e]] + t)]
                      : s[e - 1];
                  s[0] = k.EXPONENT[w._modN(k.LOG[s[0]] + t)];
                }
                for (t = 0; t <= i; t++) s[t] = k.LOG[s[t]];
              },
              _checkBadness: function () {
                var t,
                  e,
                  i,
                  s,
                  n,
                  a = 0,
                  r = this._badness,
                  o = this.buffer,
                  c = this.width;
                for (n = 0; n < c - 1; n++)
                  for (s = 0; s < c - 1; s++)
                    ((o[s + c * n] &&
                      o[s + 1 + c * n] &&
                      o[s + c * (n + 1)] &&
                      o[s + 1 + c * (n + 1)]) ||
                      !(
                        o[s + c * n] ||
                        o[s + 1 + c * n] ||
                        o[s + c * (n + 1)] ||
                        o[s + 1 + c * (n + 1)]
                      )) &&
                      (a += w.N2);
                var l = 0;
                for (n = 0; n < c; n++) {
                  for (i = 0, r[0] = 0, t = 0, s = 0; s < c; s++)
                    ((e = o[s + c * n]),
                      t === e ? r[i]++ : (r[++i] = 1),
                      (t = e),
                      (l += t ? 1 : -1));
                  a += this._getBadness(i);
                }
                l < 0 && (l = -l);
                var u = 0,
                  d = l;
                ((d += d << 2), (d <<= 1));
                while (d > c * c) ((d -= c * c), u++);
                for (a += u * w.N4, s = 0; s < c; s++) {
                  for (i = 0, r[0] = 0, t = 0, n = 0; n < c; n++)
                    ((e = o[s + c * n]),
                      t === e ? r[i]++ : (r[++i] = 1),
                      (t = e));
                  a += this._getBadness(i);
                }
                return a;
              },
              _convertBitStream: function (t) {
                var e,
                  i,
                  s = this._ecc,
                  n = this._version;
                for (i = 0; i < t; i++) s[i] = this._value.charCodeAt(i);
                var a = (this._stringBuffer = s.slice()),
                  r = this._calculateMaxLength();
                t >= r - 2 && ((t = r - 2), n > 9 && t--);
                var o = t;
                if (n > 9) {
                  ((a[o + 2] = 0), (a[o + 3] = 0));
                  while (o--)
                    ((e = a[o]),
                      (a[o + 3] |= 255 & (e << 4)),
                      (a[o + 2] = e >> 4));
                  ((a[2] |= 255 & (t << 4)),
                    (a[1] = t >> 4),
                    (a[0] = 64 | (t >> 12)));
                } else {
                  ((a[o + 1] = 0), (a[o + 2] = 0));
                  while (o--)
                    ((e = a[o]),
                      (a[o + 2] |= 255 & (e << 4)),
                      (a[o + 1] = e >> 4));
                  ((a[1] |= 255 & (t << 4)), (a[0] = 64 | (t >> 4)));
                }
                o = t + 3 - (n < 10);
                while (o < r) ((a[o++] = 236), (a[o++] = 17));
              },
              _getBadness: function (t) {
                var e,
                  i = 0,
                  s = this._badness;
                for (e = 0; e <= t; e++) s[e] >= 5 && (i += w.N1 + s[e] - 5);
                for (e = 3; e < t - 1; e += 2)
                  s[e - 2] === s[e + 2] &&
                    s[e + 2] === s[e - 1] &&
                    s[e - 1] === s[e + 1] &&
                    3 * s[e - 1] === s[e] &&
                    (0 === s[e - 3] ||
                      e + 3 > t ||
                      3 * s[e - 3] >= 4 * s[e] ||
                      3 * s[e + 3] >= 4 * s[e]) &&
                    (i += w.N3);
                return i;
              },
              _finish: function () {
                var t, e;
                this._stringBuffer = this.buffer.slice();
                var i = 0,
                  s = 3e4;
                for (e = 0; e < 8; e++) {
                  if (
                    (this._applyMask(e),
                    (t = this._checkBadness()),
                    t < s && ((s = t), (i = e)),
                    7 === i)
                  )
                    break;
                  this.buffer = this._stringBuffer.slice();
                }
                (i !== e && this._applyMask(i),
                  (s = m.FINAL_FORMAT[i + ((this._level - 1) << 3)]));
                var n = this.buffer,
                  a = this.width;
                for (e = 0; e < 8; e++, s >>= 1)
                  1 & s &&
                    ((n[a - 1 - e + 8 * a] = 1),
                    e < 6 ? (n[8 + a * e] = 1) : (n[8 + a * (e + 1)] = 1));
                for (e = 0; e < 7; e++, s >>= 1)
                  1 & s &&
                    ((n[8 + a * (a - 7 + e)] = 1),
                    e ? (n[6 - e + 8 * a] = 1) : (n[7 + 8 * a] = 1));
              },
              _interleaveBlocks: function () {
                var t,
                  e,
                  i = this._dataBlock,
                  s = this._ecc,
                  n = this._eccBlock,
                  a = 0,
                  r = this._calculateMaxLength(),
                  o = this._neccBlock1,
                  c = this._neccBlock2,
                  l = this._stringBuffer;
                for (t = 0; t < i; t++) {
                  for (e = 0; e < o; e++) s[a++] = l[t + e * i];
                  for (e = 0; e < c; e++) s[a++] = l[o * i + t + e * (i + 1)];
                }
                for (e = 0; e < c; e++) s[a++] = l[o * i + t + e * (i + 1)];
                for (t = 0; t < n; t++)
                  for (e = 0; e < o + c; e++) s[a++] = l[r + t + e * n];
                this._stringBuffer = s;
              },
              _insertAlignments: function () {
                var t,
                  e,
                  i,
                  s = this._version,
                  n = this.width;
                if (s > 1)
                  for (t = v.BLOCK[s], i = n - 7; ; ) {
                    e = n - 7;
                    while (e > t - 3) {
                      if ((this._addAlignment(e, i), e < t)) break;
                      e -= t;
                    }
                    if (i <= t + 9) break;
                    ((i -= t),
                      this._addAlignment(6, i),
                      this._addAlignment(i, 6));
                  }
              },
              _insertFinders: function () {
                var t,
                  e,
                  i,
                  s,
                  n = this.buffer,
                  a = this.width;
                for (t = 0; t < 3; t++) {
                  for (
                    e = 0,
                      s = 0,
                      1 === t && (e = a - 7),
                      2 === t && (s = a - 7),
                      n[s + 3 + a * (e + 3)] = 1,
                      i = 0;
                    i < 6;
                    i++
                  )
                    ((n[s + i + a * e] = 1),
                      (n[s + a * (e + i + 1)] = 1),
                      (n[s + 6 + a * (e + i)] = 1),
                      (n[s + i + 1 + a * (e + 6)] = 1));
                  for (i = 1; i < 5; i++)
                    (this._setMask(s + i, e + 1),
                      this._setMask(s + 1, e + i + 1),
                      this._setMask(s + 5, e + i),
                      this._setMask(s + i + 1, e + 5));
                  for (i = 2; i < 4; i++)
                    ((n[s + i + a * (e + 2)] = 1),
                      (n[s + 2 + a * (e + i + 1)] = 1),
                      (n[s + 4 + a * (e + i)] = 1),
                      (n[s + i + 1 + a * (e + 4)] = 1));
                }
              },
              _insertTimingGap: function () {
                var t,
                  e,
                  i = this.width;
                for (e = 0; e < 7; e++)
                  (this._setMask(7, e),
                    this._setMask(i - 8, e),
                    this._setMask(7, e + i - 7));
                for (t = 0; t < 8; t++)
                  (this._setMask(t, 7),
                    this._setMask(t + i - 8, 7),
                    this._setMask(t, i - 8));
              },
              _insertTimingRowAndColumn: function () {
                var t,
                  e = this.buffer,
                  i = this.width;
                for (t = 0; t < i - 14; t++)
                  1 & t
                    ? (this._setMask(8 + t, 6), this._setMask(6, 8 + t))
                    : ((e[8 + t + 6 * i] = 1), (e[6 + i * (8 + t)] = 1));
              },
              _insertVersion: function () {
                var t,
                  e,
                  i,
                  s,
                  n = this.buffer,
                  a = this._version,
                  r = this.width;
                if (a > 6)
                  for (t = C.BLOCK[a - 7], e = 17, i = 0; i < 6; i++)
                    for (s = 0; s < 3; s++, e--)
                      1 & (e > 11 ? a >> (e - 12) : t >> e)
                        ? ((n[5 - i + r * (2 - s + r - 11)] = 1),
                          (n[2 - s + r - 11 + r * (5 - i)] = 1))
                        : (this._setMask(5 - i, 2 - s + r - 11),
                          this._setMask(2 - s + r - 11, 5 - i));
              },
              _isMasked: function (t, e) {
                var i = w._getMaskBit(t, e);
                return 1 === this._mask[i];
              },
              _pack: function () {
                var t,
                  e,
                  i,
                  s = 1,
                  n = 1,
                  a = this.width,
                  r = a - 1,
                  o = a - 1,
                  c =
                    (this._dataBlock + this._eccBlock) *
                      (this._neccBlock1 + this._neccBlock2) +
                    this._neccBlock2;
                for (e = 0; e < c; e++)
                  for (t = this._stringBuffer[e], i = 0; i < 8; i++, t <<= 1) {
                    128 & t && (this.buffer[r + a * o] = 1);
                    do {
                      (n
                        ? r--
                        : (r++,
                          s
                            ? 0 !== o
                              ? o--
                              : ((r -= 2), (s = !s), 6 === r && (r--, (o = 9)))
                            : o !== a - 1
                              ? o++
                              : ((r -= 2),
                                (s = !s),
                                6 === r && (r--, (o -= 8)))),
                        (n = !n));
                    } while (this._isMasked(r, o));
                  }
              },
              _reverseMask: function () {
                var t,
                  e,
                  i = this.width;
                for (t = 0; t < 9; t++) this._setMask(t, 8);
                for (t = 0; t < 8; t++)
                  (this._setMask(t + i - 8, 8), this._setMask(8, t));
                for (e = 0; e < 7; e++) this._setMask(8, e + i - 7);
              },
              _setMask: function (t, e) {
                var i = w._getMaskBit(t, e);
                this._mask[i] = 1;
              },
              _syncMask: function () {
                var t,
                  e,
                  i = this.width;
                for (e = 0; e < i; e++)
                  for (t = 0; t <= e; t++)
                    this.buffer[t + i * e] && this._setMask(t, e);
              },
            },
            {
              _createArray: function (t) {
                var e,
                  i = [];
                for (e = 0; e < t; e++) i[e] = 0;
                return i;
              },
              _getMaskBit: function (t, e) {
                var i;
                return (
                  t > e && ((i = t), (t = e), (e = i)),
                  (i = e),
                  (i += e * e),
                  (i >>= 1),
                  (i += t),
                  i
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
          B = w,
          y = d.extend({
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
          A = y,
          M = l.extend(
            function (t, e, i, s) {
              ((this.name = t),
                (this.modifiable = Boolean(e)),
                (this.defaultValue = i),
                (this._valueTransformer = s));
            },
            {
              transform: function (t) {
                var e = this._valueTransformer;
                return "function" === typeof e ? e(t, this) : t;
              },
            },
          ),
          T = M,
          x = l.extend(null, {
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
          O = x,
          $ = l.extend(
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
                return $._get(this.options[t], e);
              },
              getAll: function (t) {
                var e,
                  i = this.options,
                  s = {};
                for (e in i) O.hasOwn(i, e) && (s[e] = $._get(i[e], t));
                return s;
              },
              init: function (t, e, i) {
                var s, n;
                for (s in ("function" !== typeof i && (i = O.noop),
                this.options))
                  O.hasOwn(this.options, s) &&
                    ((n = this.options[s]),
                    $._set(n, n.defaultValue, e),
                    $._createAccessor(n, e, i));
                this._setAll(t, e, !0);
              },
              set: function (t, e, i) {
                return this._set(t, e, i);
              },
              setAll: function (t, e) {
                return this._setAll(t, e);
              },
              _set: function (t, e, i, s) {
                var n = this.options[t];
                if (!n) throw new Error("Invalid option: " + t);
                if (!n.modifiable && !s)
                  throw new Error("Option cannot be modified: " + t);
                return $._set(n, e, i);
              },
              _setAll: function (t, e, i) {
                if (!t) return !1;
                var s,
                  n = !1;
                for (s in t)
                  O.hasOwn(t, s) && this._set(s, t[s], e, i) && (n = !0);
                return n;
              },
            },
            {
              _createAccessor: function (t, e, i) {
                var s = {
                  get: function () {
                    return $._get(t, e);
                  },
                };
                (t.modifiable &&
                  (s.set = function (s) {
                    $._set(t, s, e) && i(s, t);
                  }),
                  Object.defineProperty(e, t.name, s));
              },
              _get: function (t, e) {
                return e["_" + t.name];
              },
              _set: function (t, e, i) {
                var s = "_" + t.name,
                  n = i[s],
                  a = t.transform(null != e ? e : t.defaultValue);
                return ((i[s] = a), a !== n);
              },
            },
          ),
          S = $,
          N = l.extend(
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
          E = N,
          L = new S([
            new T("background", !0, "white"),
            new T("backgroundAlpha", !0, 1, O.abs),
            new T("element"),
            new T("foreground", !0, "black"),
            new T("foregroundAlpha", !0, 1, O.abs),
            new T("level", !0, "L", O.toUpperCase),
            new T("mime", !0, "image/png"),
            new T("padding", !0, null, O.abs),
            new T("size", !0, 100, O.abs),
            new T("value", !0, ""),
          ]),
          R = new E(),
          D = l.extend(
            function (t) {
              L.init(t, this, this.update.bind(this));
              var e = L.get("element", this),
                i = R.getService("element"),
                s = e && i.isCanvas(e) ? e : i.createCanvas(),
                n = e && i.isImage(e) ? e : i.createImage();
              ((this._canvasRenderer = new f(this, s, !0)),
                (this._imageRenderer = new A(this, n, n === e)),
                this.update());
            },
            {
              get: function () {
                return L.getAll(this);
              },
              set: function (t) {
                L.setAll(t, this) && this.update();
              },
              toDataURL: function (t) {
                return this.canvas.toDataURL(t || this.mime);
              },
              update: function () {
                var t = new B({ level: this.level, value: this.value });
                (this._canvasRenderer.render(t), this._imageRenderer.render(t));
              },
            },
            {
              use: function (t) {
                R.setService(t.getName(), t);
              },
            },
          );
        Object.defineProperties(D.prototype, {
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
        var P = D,
          I = P,
          H = l.extend({ getName: function () {} }),
          U = H,
          W = U.extend({
            createCanvas: function () {},
            createImage: function () {},
            getName: function () {
              return "element";
            },
            isCanvas: function (t) {},
            isImage: function (t) {},
          }),
          q = W,
          j = q.extend({
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
          z = j;
        I.use(new z());
        var F = I;
        return F;
      });
    },
    3859: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return n;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "dropdown" }, [
            i("div", { staticClass: "search" }, [
              i("input", {
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
            i(
              "div",
              {
                staticClass: "scroll-area",
                attrs: { "data-test-id": "send_scrollcoin" },
              },
              [
                i(
                  "ul",
                  { staticClass: "search-select" },
                  [
                    0 === t.filteredCoins.length
                      ? i("li", { staticClass: "nocoins" }, [
                          i("span", [
                            t._v(" " + t._s(t.$t("message.noResults"))),
                          ]),
                        ])
                      : t._e(),
                    t._v(" "),
                    t._l(t.filteredCoins, function (e, s) {
                      return i(
                        "li",
                        {
                          key: e.id + s,
                          attrs: {
                            "data-test-id": "send_" + e.ticker.toLowerCase(),
                          },
                          on: {
                            click: function (i) {
                              return t.selectCoin(e);
                            },
                          },
                        },
                        [
                          e.imgUri
                            ? i("memes-image", {
                                staticClass: "coin-img coin-img_small",
                                attrs: { uri: e.imgUri },
                              })
                            : i("div", { class: t.$iconClass(e) }),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "flex align-center" },
                            [
                              t.isSkamToken(e)
                                ? i("span", { staticClass: "skam-warning" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.$t("unverified")) +
                                        "\n          ",
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              i("span", [
                                t._v(
                                  "\n            " +
                                    t._s(e.ticker) +
                                    "\n          ",
                                ),
                              ]),
                              t._v(" "),
                              i("token-tag", { attrs: { wallet: e } }),
                              t._v(" "),
                              t._l(t.getTags(e.ticker), function (e) {
                                var s = e.tag,
                                  n = e.bgColor;
                                return i(
                                  "div",
                                  { key: s, staticClass: "tag small" },
                                  [
                                    i(
                                      "div",
                                      {
                                        class: "--" + s.toLowerCase(),
                                        style: { backgroundColor: n },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(s) +
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
                            ? i("span", { staticClass: "balance" }, [
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
        n = [];
    },
    5763: function (t, e, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = s(i(3857)),
        a = s(i(3628)),
        r = s(i(11568)),
        o = s(i(821)),
        c = s(i(2999)),
        l = i(68);
      const u = [
        "ETH",
        "BNB",
        "TRX",
        "THETA",
        "MATIC",
        "OP",
        "ARB",
        "BSC",
        "TON",
        "ONT",
        "VET",
        "FTM",
        "SUI",
        "SOL",
      ];
      e.default = {
        name: "ReceiveCoin",
        components: {
          CoinDropdown: a.default,
          HederaActivation: r.default,
          MemesImage: c.default,
          TokenTag: o.default,
        },
        props: { coin: { type: Object, default: null } },
        data() {
          var t;
          const e =
            null !== (t = this.$getAddressWallet(this.coin.deprecatedParent)) &&
            void 0 !== t
              ? t
              : "";
          return {
            isCoinActivated: !1,
            isActivating: !1,
            isChangeCoin: !1,
            isHederaActivating: !1,
            address: e,
          };
        },
        computed: {
          qrCodeImage() {
            return new n.default({
              value: this.address,
              size: 200,
              mime: "image/png",
            }).toDataURL();
          },
          getMessage() {
            var t;
            return null !==
              (t = {
                BNB: "BNB BEP-2",
                ETH: "Ethereum ERC-20",
                TRX: "TRX",
                THETA: "THETA",
                OP: "OP",
                ARB: "ARB",
                TON: "TON",
                BSC: "BSC",
                MATIC: "Polygon",
                ONT: "ONT",
                SUI: "SUI",
                VET: "VET",
                FTM: "FTM",
                SOL: "SOL",
              }[this.coin.deprecatedParent]) && void 0 !== t
              ? t
              : "";
          },
          icon() {
            return this.$iconClass(this.coin);
          },
          dropdownCoins() {
            return this.$wallets
              .list()
              .filter((t) =>
                "EOS" === t.ticker
                  ? t.activated
                  : t.ticker !== this.coin.ticker,
              );
          },
          unspendableBalance() {
            return this.coin.toCurrencyUnit(this.coin.unspendableBalance);
          },
          isNeedWarnings() {
            return (
              u.includes(this.coin.deprecatedParent) &&
              this.coin instanceof l.Token
            );
          },
          isHaveUnspendableBalance() {
            return Number(this.coin.unspendableBalance) > 0;
          },
          unspendableBalanceTitle() {
            const t = this.$t("receiveCoin.unspendableBalancePrefix", {
              balance: this.unspendableBalance,
              ticker: this.coin.ticker,
            });
            switch (this.coin.ticker) {
              case "ALGO":
              case "XTZ":
              case "XRP":
              case "XLM":
                return this.$t("receiveCoin.unspendableBalanceToAccount", {
                  prefix: t,
                });
              case "NEAR":
                return this.$t("receiveCoin.unspendableBalanceForStorage", {
                  prefix: t,
                });
              default:
                return t + ".";
            }
          },
          additionalInfo() {
            if (!this.address || !this.isCoinActivated) return "";
            const t = this.$t("receiveCoin.requiredBalancePostfix");
            switch (this.coin.ticker) {
              case "DOT":
                return "1 DOT " + t;
              case "NEAR":
                const e = this.coin.toCurrencyUnit(this.coin.activationAmount);
                return `${e} NEAR ${t}`;
              default:
                return "";
            }
          },
          isSkamToken() {
            return !this.coin.confirmed && this.coin instanceof l.Token;
          },
        },
        watch: {
          coin: {
            immediate: !0,
            handler() {
              this.setData();
            },
          },
        },
        mounted() {
          this.$bus.$on("close-info-coin", this.backToWallets);
        },
        beforeDestroy() {
          this.$bus.$off("close-info-coin", this.backToWallets);
        },
        methods: {
          setData() {
            var t, e;
            ((this.isCoinActivated =
              (null === (t = this.coin) || void 0 === t
                ? void 0
                : t.isActivated) || !1),
              (this.address =
                null !==
                  (e = this.$getAddressWallet(this.coin.deprecatedParent)) &&
                void 0 !== e
                  ? e
                  : ""));
          },
          async activateWallet() {
            "HBAR" !== this.coin.ticker || this.coin.address
              ? this.isActivating ||
                ((this.isActivating = !0),
                await this.$wallets.activateWallet(this.coin),
                this.$route.query.redirect
                  ? this.$router.push(this.$route.query.redirect)
                  : ((this.isActivating = !1),
                    (this.isCoinActivated = !0),
                    this.$emit("changeCoin", this.coin),
                    this.setData()))
              : (this.isHederaActivating = !0);
          },
          onHederaActivationDone(t) {
            this.$emit("changeCoin", t);
          },
          closeDropdown() {
            this.isChangeCoin = !1;
          },
          toggleDropdown() {
            this.isChangeCoin = !this.isChangeCoin;
          },
          async selectCoin(t) {
            (this.$emit("changeCoin", t), this.closeDropdown());
          },
          backToWallets() {
            this.$emit("closePopup");
          },
        },
      };
    },
    5764: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "HederaActivation",
        data: () => ({ status: "info" }),
        computed: {
          coin() {
            return this.$wallets.getWallet("HBAR");
          },
        },
        methods: {
          async activateAccount() {
            this.status = "activating";
            try {
              (this.$emit(
                "done",
                await this.$wallets.activateWallet(this.coin),
              ),
                (this.status = "success"));
            } catch {
              this.status = "error";
            }
            this.isActivating = !1;
          },
          talkWithSupport() {
            const t = {
              isNotText: !1,
              tags: ["send_tag"],
              subject: this.$t("supportPopup.nonce"),
            };
            this.$bus.$emit("openSupportPopup", t);
          },
        },
      };
    },
    6970: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(5763),
        n = i.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(a);
      var r = i(11570),
        o = i(5),
        c = !1,
        l = null,
        u = null,
        d = null,
        h = Object(o["a"])(n.a, r["a"], r["b"], c, l, u, d);
      e["default"] = h.exports;
    },
  },
]);
