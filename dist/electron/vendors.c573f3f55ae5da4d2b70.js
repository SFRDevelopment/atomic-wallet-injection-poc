(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [412],
  {
    11695: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(5828),
        n = a.n(s);
      for (var i in s)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return s[t];
            });
          })(i);
      var c = a(11696),
        l = a(5),
        o = !1,
        d = null,
        r = null,
        v = null,
        _ = Object(l["a"])(n.a, c["a"], c["b"], o, d, r, v);
      e["default"] = _.exports;
    },
    11696: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return s;
      }),
        a.d(e, "b", function () {
          return n;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "account-details popup" }, [
            a(
              "div",
              {
                staticClass: "close",
                on: {
                  click: function (e) {
                    return (
                      e.stopPropagation(),
                      e.preventDefault(),
                      t.$emit("closePopup")
                    );
                  },
                },
              },
              [t._v("\n    ✕\n  ")],
            ),
            t._v(" "),
            a(
              "div",
              { staticClass: "header-content" },
              [
                a("CoinIcon", { attrs: { wallet: t.coin } }),
                t._v(" "),
                a("div", { staticClass: "text-small-title" }, [
                  t._v(t._s(t.$t("coinInfo.eosAccount"))),
                ]),
              ],
              1,
            ),
            t._v(" "),
            a("div", { staticClass: "body-content" }, [
              a("div", { staticClass: "text-middle text-gray big-margin" }, [
                t._v(t._s(t.$t("title.available"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-bigger" }, [
                t._v("\n      " + t._s(t.coin.divisibleBalance) + " "),
                a("span", { staticClass: "text-big text-gray" }, [
                  t._v(t._s(t.coin.ticker)),
                ]),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle text-gray big-margin" }, [
                t._v(t._s(t.$t("coinInfo.staked"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-bigger" }, [
                t._v("\n      " + t._s(t.staked) + " \n      "),
                a("span", { staticClass: "text-big text-gray" }, [
                  t._v("\n        " + t._s(t.coin.ticker) + "\n      "),
                ]),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle text-gray big-margin" }, [
                t._v(t._s(t.$t("title.total"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-bigger" }, [
                t._v(
                  "\n      " +
                    t._s(
                      t.formatMiddleAmount(
                        Number(t.coin.divisibleBalance) + t.staked,
                      ),
                    ) +
                    " ",
                ),
                a("span", { staticClass: "text-big text-gray" }, [
                  t._v("\n        " + t._s(t.coin.ticker) + "\n      "),
                ]),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle m-t-20" }, [
                t._v(t._s(t.$t("coinInfo.ram"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "line-out" }, [
                a("div", {
                  staticClass: "line-inner",
                  style: {
                    width: t.getPercent(
                      t.coin.balances.ram.ramQuota,
                      t.coin.balances.ram.ramUsage,
                    ),
                  },
                }),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle" }, [
                t._v(
                  "\n      " +
                    t._s(
                      t.$t("coinInfo.ramUsed", {
                        ramUsage: t.coin.balances.ram.ramUsage,
                        ramQuota: t.coin.balances.ram.ramQuota,
                      }),
                    ) +
                    "\n    ",
                ),
              ]),
              t._v(" "),
              "RAM" === t.accountEOSError
                ? a("div", { staticClass: "text-middle text-red" }, [
                    t._v(
                      "\n      " +
                        t._s(t.$t("error.notEnoughRAMToSendEOS")) +
                        "\n    ",
                    ),
                  ])
                : t._e(),
              t._v(" "),
              a("div", { staticClass: "text-middle m-t-20" }, [
                t._v(t._s(t.$t("coinInfo.cpu"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "line-out" }, [
                a("div", {
                  staticClass: "line-inner",
                  style: {
                    width: t.getPercent(
                      t.coin.balances.cpu.max,
                      t.coin.balances.cpu.used,
                    ),
                  },
                }),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle" }, [
                t._v(
                  "\n      " +
                    t._s(
                      t.$t("coinInfo.balancesUsed", {
                        used: t.coin.balances.cpu.used,
                        max: t.coin.balances.cpu.max,
                      }),
                    ) +
                    "\n    ",
                ),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle text-gray m-t-5" }, [
                t._v("\n      " + t._s(t.$t("title.stacked")) + " \n      "),
                a("span", { staticClass: "text-big" }, [
                  t._v(
                    " " + t._s(t.coin.balances.staked.totalStakedCpu) + "  ",
                  ),
                ]),
                t._v(" "),
                a("span", { staticClass: "text-big text-gray" }, [
                  t._v("\n        " + t._s(t.coin.ticker) + "\n      "),
                ]),
              ]),
              t._v(" "),
              "CPU" === t.accountEOSError
                ? a("div", { staticClass: "text-middle text-red" }, [
                    t._v(
                      "\n      " +
                        t._s(t.$t("error.notEnoughRAMToSendEOS")) +
                        "\n    ",
                    ),
                  ])
                : t._e(),
              t._v(" "),
              a("div", { staticClass: "text-middle m-t-20" }, [
                t._v(t._s(t.$t("coinInfo.net"))),
              ]),
              t._v(" "),
              a("div", { staticClass: "line-out" }, [
                a("div", {
                  staticClass: "line-inner",
                  style: {
                    width: t.getPercent(
                      t.coin.balances.net.max,
                      t.coin.balances.net.used,
                    ),
                  },
                }),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle" }, [
                t._v(
                  "\n      " +
                    t._s(
                      t.$t("coinInfo.netUsed", {
                        used: t.coin.balances.net.used,
                        max: t.coin.balances.net.max,
                      }),
                    ) +
                    "\n    ",
                ),
              ]),
              t._v(" "),
              a("div", { staticClass: "text-middle text-gray m-t-5" }, [
                t._v("\n      " + t._s(t.$t("title.stacked")) + " \n      "),
                a("span", { staticClass: "text-big" }, [
                  t._v(
                    " " + t._s(t.coin.balances.staked.totalStakedNet) + "  ",
                  ),
                ]),
                t._v(" "),
                a("span", { staticClass: "text-big text-gray" }, [
                  t._v("\n        " + t._s(t.coin.ticker) + "\n      "),
                ]),
              ]),
            ]),
          ]);
        },
        n = [];
    },
    5828: function (t, e, a) {
      "use strict";
      var s = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(60),
        i = s(a(802)),
        c = s(a(834));
      const l = 100;
      e.default = {
        name: "AccountDetails",
        components: { CoinIcon: i.default },
        props: { coin: { type: Object, default: Object } },
        computed: {
          ...(0, n.mapGetters)(["accountEOSError"]),
          staked() {
            return (
              Number(this.coin.balances.staked.totalStakedNet) +
              Number(this.coin.balances.staked.totalStakedCpu)
            );
          },
        },
        methods: {
          formatMiddleAmount: c.default,
          getPercent(t, e) {
            const a = (e / t) * l;
            return (a > l ? l : a) + "%";
          },
        },
      };
    },
  },
]);
