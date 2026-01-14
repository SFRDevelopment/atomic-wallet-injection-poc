(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [407],
  {
    3129: function (t, e, a) {
      "use strict";
      var s = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        n = a(68),
        o = s(a(2999)),
        r = s(a(821)),
        l = s(a(834)),
        c = s(a(798));
      const u = 4,
        d = 6;
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
                let { isDisabled: a, name: s, ticker: i } = e;
                return (
                  !a &&
                  (s.toLowerCase().includes(t) || i.toLowerCase().includes(t))
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
          formatMiddleAmount: l.default,
          formatFinance: c.default,
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
              s = this.isShowExchangeTags
                ? (null === a || void 0 === a ? void 0 : a.exchangesTags) || []
                : (null === a || void 0 === a ? void 0 : a.simplexTags) || [],
              i = s[t];
            return i || e;
          },
          sortByMarketCap(t, e) {
            const a = this.coinRate(this.fiatRate, t).marketCap || 0,
              s = this.coinRate(this.fiatRate, e).marketCap || 0;
            return s - a;
          },
          balance(t) {
            let { id: e, balances: a, divisibleBalance: s } = t;
            const i = localStorage.getItem(e + "-balance"),
              n = +(
                (null === a || void 0 === a ? void 0 : a.available) ||
                s ||
                i ||
                0
              );
            return +n.toFixed(n > 1 ? u : d);
          },
          isSkamToken(t) {
            return !t.confirmed && t instanceof n.Token;
          },
        },
      };
    },
    3628: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(3129),
        i = a.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return s[t];
            });
          })(n);
      var o = a(3859),
        r = a(5),
        l = !1,
        c = null,
        u = null,
        d = null,
        f = Object(r["a"])(i.a, o["a"], o["b"], l, c, u, d);
      e["default"] = f.exports;
    },
    3859: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return s;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var s = function () {
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
                    t._l(t.filteredCoins, function (e, s) {
                      return a(
                        "li",
                        {
                          key: e.id + s,
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
                                var s = e.tag,
                                  i = e.bgColor;
                                return a(
                                  "div",
                                  { key: s, staticClass: "tag small" },
                                  [
                                    a(
                                      "div",
                                      {
                                        class: "--" + s.toLowerCase(),
                                        style: { backgroundColor: i },
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
  },
]);
