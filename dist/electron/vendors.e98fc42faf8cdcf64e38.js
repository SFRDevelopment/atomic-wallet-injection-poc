(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [363, 405],
  {
    2851: function (t, a, n) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "LoadingEllipsis" };
    },
    2980: function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n(2851),
        s = n.n(e);
      for (var i in e)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(a, t, function () {
              return e[t];
            });
          })(i);
      var r = n(3067),
        u = n(5),
        l = !1,
        c = null,
        o = null,
        d = null,
        f = Object(u["a"])(s.a, r["a"], r["b"], l, c, o, d);
      a["default"] = f.exports;
    },
    3067: function (t, a, n) {
      "use strict";
      (n.d(a, "a", function () {
        return e;
      }),
        n.d(a, "b", function () {
          return s;
        }));
      var e = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return n("div", { key: t });
            }),
            0,
          );
        },
        s = [];
    },
    3863: function (t, a, n) {
      "use strict";
      var e = n(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var s = e(n(2980)),
        i = e(n(798));
      a.default = {
        name: "CashbackInfo",
        components: { LoadingEllipsis: s.default },
        props: {
          estimatedCashback: { type: String, default: "" },
          isLoading: { type: Boolean, default: !1 },
        },
        methods: {
          formatFinance: i.default,
          goToCashbackClub() {
            this.$router.push("/settings");
          },
        },
      };
    },
    5778: function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n(3863),
        s = n.n(e);
      for (var i in e)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(a, t, function () {
              return e[t];
            });
          })(i);
      var r = n(5779),
        u = n(5),
        l = !1,
        c = null,
        o = null,
        d = null,
        f = Object(u["a"])(s.a, r["a"], r["b"], l, c, o, d);
      a["default"] = f.exports;
    },
    5779: function (t, a, n) {
      "use strict";
      (n.d(a, "a", function () {
        return e;
      }),
        n.d(a, "b", function () {
          return s;
        }));
      var e = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n("transition", { attrs: { name: "fade", appear: "" } }, [
            n(
              "div",
              {
                staticClass: "cashback-info",
                on: { click: t.goToCashbackClub },
              },
              [
                n(
                  "span",
                  {
                    staticClass: "text-gray",
                    attrs: { "data-test-id": "exchange_reward" },
                  },
                  [t._v("\n      " + t._s(t.$t("title.reward")) + ": \n    ")],
                ),
                t._v(" "),
                n("span", [
                  n(
                    "span",
                    { staticClass: "relative" },
                    [
                      t._v(
                        "\n        " +
                          t._s(t.formatFinance(t.estimatedCashback)),
                      ),
                      n("span", { staticClass: "text-gray" }, [t._v("  AWC ")]),
                      t._v(" "),
                      t.isLoading
                        ? n("LoadingEllipsis", {
                            staticClass: "cashback-info__loading",
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                ]),
              ],
            ),
          ]);
        },
        s = [];
    },
  },
]);
