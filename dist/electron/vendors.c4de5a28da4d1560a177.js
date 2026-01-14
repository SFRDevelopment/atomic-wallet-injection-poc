(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [324],
  {
    3860: function (e, t, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = i(60),
        o = i(233),
        l = s(i(5768)),
        c = s(i(5770)),
        d = s(i(3348)),
        r = i(68);
      t.default = {
        name: "FilterPopup",
        components: {
          Ticker: c.default,
          SwitchToggle: l.default,
          Search: d.default,
        },
        props: {
          coins: { type: Array, default: () => [] },
          module: { type: String, default: "" },
          directions: { type: Boolean, default: !1 },
        },
        data() {
          return {
            hideZero: !1,
            isCoinsHidden: !1,
            isTokensHidden: !1,
            selected: [],
            filter: "",
            directionOptions: [
              {
                text: this.$t("filterPopup.receivedTransaction"),
                value: "Received",
              },
              { text: this.$t("filterPopup.sentTransaction"), value: "Sent" },
            ],
            settingsSelectedDirection: [],
            settingsSelectedType: [],
            typeOptions: [o.HISTORY_TITLE_REGULAR, o.HISTORY_TITLE_BASIC],
            notificationsDisabled: localStorage.getItem(
              "settings::notifications::disabled",
            ),
          };
        },
        computed: {
          ...(0, n.mapGetters)([
            "historyExcludedDirections",
            "historyExcludedTypes",
            "walletExcludedCoins",
            "alwaysExcludedCoins",
            "historyExcludedCoins",
          ]),
          excludedCoins() {
            return this.module === o.WALLET_MODULE_NAME
              ? this.walletExcludedCoins
              : this.historyExcludedCoins;
          },
          toggleAllPlaceholder() {
            return this.isCoinsHidden || this.isTokensHidden || this.isAllHidden
              ? this.$t("filterPopup.showAll")
              : this.$t("filterPopup.hideAll");
          },
          coinsAndTokens() {
            if ("" !== this.filter) {
              const e = this.filter.toLowerCase();
              return this.coins.filter(
                (t) =>
                  -1 !== t.name.toLowerCase().indexOf(e) ||
                  -1 !== t.getUserTicker().toLowerCase().indexOf(e),
              );
            }
            return this.coins;
          },
          filteredCoins() {
            const e = [],
              t = [];
            return (
              this.coinsAndTokens.forEach((i) => {
                i instanceof r.Token ? t.push(i) : e.push(i);
              }),
              {
                coins: this.filterSimilarsByKey(e, "id"),
                tokens: this.filterSimilarsByKey(t, "id"),
              }
            );
          },
          isAllHidden() {
            return (
              this.selected.length >=
              this.coins.length + this.alwaysExcludedCoins.length
            );
          },
        },
        created() {
          ((this.isCoinsHidden =
            JSON.parse(localStorage.getItem("settings::hideCoins")) || !1),
            (this.isTokensHidden =
              JSON.parse(localStorage.getItem("settings::hideTokens")) || !1));
          const e =
            this.excludedCoins.length > 0 ? this.excludedCoins.slice() : [];
          this.selected = "string" === typeof e ? e.split(",") : e;
          const t = this.historyExcludedTypes.slice(),
            i = this.historyExcludedDirections.slice();
          ((this.settingsSelectedDirection =
            "string" === typeof i && i.length > 0 ? [i] : i),
            (this.settingsSelectedType =
              "string" === typeof t && t.length > 0 ? [t] : t));
        },
        async beforeMount() {
          this.hideZero = "true" === localStorage.getItem("hidezero::filter");
        },
        methods: {
          isCoinOrTokenHidden(e) {
            return (
              this.selected.includes(e.id) ||
              this.alwaysExcludedCoins.includes(e.id)
            );
          },
          toggleAll() {
            this.isAllHidden ||
            this.selected.filter((e) => !this.alwaysExcludedCoins.includes(e))
              .length > 0
              ? ((this.selected = [...this.alwaysExcludedCoins]),
                (this.isCoinsHidden = !1),
                (this.isTokensHidden = !1),
                (this.settingsSelectedType = []),
                (this.settingsSelectedDirection = []))
              : ((this.selected = [
                  ...this.alwaysExcludedCoins,
                  ...this.coins.map((e) => e.id),
                ]),
                (this.isTokensHidden = !0),
                (this.isCoinsHidden = !0),
                (this.settingsSelectedDirection = ["Received", "Sent"]));
          },
          toggleCoins() {
            this.isCoinsHidden
              ? ((this.isCoinsHidden = !1),
                this.coins.forEach((e) => {
                  e instanceof r.Token ||
                    this.alwaysExcludedCoins.includes(e.id) ||
                    (this.selected = this.selected.filter((t) => t !== e.id));
                }))
              : ((this.isCoinsHidden = !0),
                this.coins.forEach((e) => {
                  e instanceof r.Token || this.selected.push(e.id);
                }));
          },
          toggleTokens() {
            this.isTokensHidden
              ? ((this.isTokensHidden = !1),
                this.coins.forEach((e) => {
                  e instanceof r.Token &&
                    (this.selected = this.selected.filter((t) => t !== e.id));
                }))
              : ((this.isTokensHidden = !0),
                this.coins.forEach((e) => {
                  e instanceof r.Token && this.selected.push(e.id);
                }));
          },
          toggleSelectedDirection(e) {
            this.settingsSelectedDirection.includes(e)
              ? (this.settingsSelectedDirection =
                  this.settingsSelectedDirection.filter((t) => t !== e))
              : this.settingsSelectedDirection.push(e);
          },
          isHiddenDirection(e) {
            return this.settingsSelectedDirection.includes(e);
          },
          closeFilterPopup() {
            this.$emit("close");
          },
          disableNotify() {
            if (this.notificationsDisabled)
              return (
                localStorage.removeItem("settings::notifications::disabled"),
                void (this.notificationsDisabled = !1)
              );
            (localStorage.setItem("settings::notifications::disabled", !0),
              (this.notificationsDisabled = !0));
          },
          saveHiddenCoins() {
            (localStorage.setItem("settings::hideCoins", this.isCoinsHidden),
              localStorage.setItem("settings::hideTokens", this.isTokensHidden),
              this.$emit("acceptFilter", {
                types: this.settingsSelectedType,
                directions: this.settingsSelectedDirection,
                coins: this.selected,
                hideZero: this.hideZero,
              }));
          },
          toggleSelected(e) {
            if (this.alwaysExcludedCoins.includes(e.id)) return;
            const t = this.selected.findIndex((t) => t === e.id);
            t >= 0 ? this.selected.splice(t, 1) : this.selected.push(e.id);
          },
        },
      };
    },
    3861: function (e, t, i) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "SwitchToggle",
        props: { trigger: { type: Boolean, default: !1 } },
      };
    },
    3862: function (e, t, i) {
      "use strict";
      var s = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(2999));
      t.default = {
        name: "Ticker",
        components: { MemesImage: n.default },
        props: {
          coin: { type: Object, default: () => ({}) },
          isHidden: { type: Boolean, default: !1 },
        },
      };
    },
    5767: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(3860),
        n = i.n(s);
      for (var o in s)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return s[e];
            });
          })(o);
      var l = i(5772),
        c = i(5),
        d = !1,
        r = null,
        a = null,
        u = null,
        h = Object(c["a"])(n.a, l["a"], l["b"], d, r, a, u);
      t["default"] = h.exports;
    },
    5768: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(3861),
        n = i.n(s);
      for (var o in s)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return s[e];
            });
          })(o);
      var l = i(5769),
        c = i(5),
        d = !1,
        r = null,
        a = null,
        u = null,
        h = Object(c["a"])(n.a, l["a"], l["b"], d, r, a, u);
      t["default"] = h.exports;
    },
    5769: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return s;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var s = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "span",
            {
              staticClass: "toggler",
              on: {
                click: function (t) {
                  return e.$emit("click");
                },
              },
            },
            [
              i("div", {
                staticClass: "switch",
                class: { active: !e.trigger },
              }),
            ],
          );
        },
        n = [];
    },
    5770: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(3862),
        n = i.n(s);
      for (var o in s)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return s[e];
            });
          })(o);
      var l = i(5771),
        c = i(5),
        d = !1,
        r = null,
        a = null,
        u = null,
        h = Object(c["a"])(n.a, l["a"], l["b"], d, r, a, u);
      t["default"] = h.exports;
    },
    5771: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return s;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var s = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "li",
            { staticClass: "filter-ticker", class: { grey: e.isHidden } },
            [
              e.coin.imgUri
                ? i(
                    "div",
                    { staticClass: "icon-wrapper" },
                    [i("memes-image", { attrs: { uri: e.coin.imgUri } })],
                    1,
                  )
                : i("div", { class: e.$iconClass(e.coin) }),
              e._v(" "),
              i("span", [
                e._v("\n    " + e._s(e.coin.getUserTicker()) + "\n  "),
              ]),
            ],
          );
        },
        n = [];
    },
    5772: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return s;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var s = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "transition",
            { attrs: { mode: "out-in", name: "page-fade", appear: "" } },
            [
              s("div", { staticClass: "filter-popup" }, [
                s("div", { staticClass: "top" }, [
                  s(
                    "div",
                    { staticClass: "flex-block" },
                    [
                      s("Search", {
                        attrs: { modelValue: e.filter },
                        on: {
                          "update:modelValue": function (t) {
                            e.filter = t;
                          },
                        },
                      }),
                      e._v(" "),
                      "wallet" === e.module
                        ? s(
                            "div",
                            {
                              staticClass: "filter-toggle",
                              class: { active: e.hideZero },
                              on: {
                                click: function (t) {
                                  e.hideZero = !e.hideZero;
                                },
                              },
                            },
                            [
                              s("span", [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.hideZero
                                        ? e.$t("filterPopup.showZeroBalance")
                                        : e.$t("filterPopup.hideZeroBalance"),
                                    ) +
                                    "\n          ",
                                ),
                              ]),
                              e._v(" "),
                              s("img", { attrs: { src: i(841) } }),
                            ],
                          )
                        : e._e(),
                      e._v(" "),
                      s(
                        "div",
                        {
                          staticClass: "filter-toggle",
                          class: { active: e.notificationsDisabled },
                          on: { click: e.disableNotify },
                        },
                        [
                          s("span", [
                            e._v(
                              "\n            " +
                                e._s(e.$t("filterPopup.disableNotifications")) +
                                "\n          ",
                            ),
                          ]),
                          e._v(" "),
                          s("img", { attrs: { src: i(841) } }),
                        ],
                      ),
                    ],
                    1,
                  ),
                  e._v(" "),
                  s("div", { staticClass: "flex-block" }, [
                    s(
                      "span",
                      {
                        staticClass: "filter-link",
                        on: { click: e.toggleAll },
                      },
                      [
                        e._v(
                          "\n          " +
                            e._s(e.toggleAllPlaceholder) +
                            "\n        ",
                        ),
                      ],
                    ),
                    e._v(" "),
                    s(
                      "span",
                      {
                        staticClass: "filter-link",
                        on: { click: e.closeFilterPopup },
                      },
                      [
                        e._v(
                          "\n          " +
                            e._s(e.$t("button.cancel")) +
                            "\n        ",
                        ),
                      ],
                    ),
                    e._v(" "),
                    s(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { disabled: e.isAllHidden },
                        on: { click: e.saveHiddenCoins },
                      },
                      [
                        e._v(
                          "\n          " +
                            e._s(e.$t("button.apply")) +
                            "\n        ",
                        ),
                      ],
                    ),
                  ]),
                ]),
                e._v(" "),
                s("div", { staticClass: "list-wrapper" }, [
                  e.directions
                    ? s("div", { staticClass: "options" }, [
                        s(
                          "ul",
                          e._l(e.directionOptions, function (t) {
                            return s(
                              "li",
                              {
                                key: t.value,
                                class: { grey: e.isHiddenDirection(t.value) },
                                on: {
                                  click: function (i) {
                                    return e.toggleSelectedDirection(t.value);
                                  },
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(t.text) +
                                    "\n          ",
                                ),
                              ],
                            );
                          }),
                          0,
                        ),
                      ])
                    : e._e(),
                  e._v(" "),
                  0 === e.filteredCoins.coins.length &&
                  0 === e.filteredCoins.tokens.length &&
                  e.filter
                    ? s("div", { staticClass: "no-result" }, [
                        s("span", [
                          e._v(
                            "\n          " +
                              e._s(
                                e.$t("label.noResultsFound", {
                                  seatchText: e.filter,
                                }),
                              ) +
                              "\n        ",
                          ),
                        ]),
                      ])
                    : e._e(),
                  e._v(" "),
                  e.filteredCoins.coins.length > 0
                    ? s(
                        "ul",
                        { staticClass: "ticker-list" },
                        [
                          s(
                            "p",
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$t("filterPopup.coins")) +
                                  "\n          ",
                              ),
                              s("SwitchToggle", {
                                attrs: { trigger: e.isCoinsHidden },
                                on: { click: e.toggleCoins },
                              }),
                            ],
                            1,
                          ),
                          e._v(" "),
                          e._l(e.filteredCoins.coins, function (t, i) {
                            return s("Ticker", {
                              key: i + "-coin",
                              attrs: {
                                coin: t,
                                isHidden: e.isCoinOrTokenHidden(t),
                              },
                              nativeOn: {
                                click: function (i) {
                                  return e.toggleSelected(t);
                                },
                              },
                            });
                          }),
                        ],
                        2,
                      )
                    : e._e(),
                  e._v(" "),
                  e.filteredCoins.tokens.length > 0
                    ? s(
                        "ul",
                        { staticClass: "ticker-list" },
                        [
                          s(
                            "p",
                            [
                              e._v(
                                "\n          " +
                                  e._s(e.$t("filterPopup.tokens")) +
                                  "\n          ",
                              ),
                              s("SwitchToggle", {
                                attrs: { trigger: e.isTokensHidden },
                                on: { click: e.toggleTokens },
                              }),
                            ],
                            1,
                          ),
                          e._v(" "),
                          e._l(e.filteredCoins.tokens, function (t, i) {
                            return s("Ticker", {
                              key: i + "-token",
                              attrs: {
                                coin: t,
                                isHidden: e.isCoinOrTokenHidden(t),
                              },
                              nativeOn: {
                                click: function (i) {
                                  return e.toggleSelected(t);
                                },
                              },
                            });
                          }),
                        ],
                        2,
                      )
                    : e._e(),
                ]),
              ]),
            ],
          );
        },
        n = [];
    },
  },
]);
