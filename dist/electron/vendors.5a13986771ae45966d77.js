(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [405],
  {
    3863: function (a, t, s) {
      "use strict";
      var e = s(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = e(s(2980)),
        i = e(s(798));
      t.default = {
        name: "CashbackInfo",
        components: { LoadingEllipsis: n.default },
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
    5778: function (a, t, s) {
      "use strict";
      s.r(t);
      var e = s(3863),
        n = s.n(e);
      for (var i in e)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            s.d(t, a, function () {
              return e[a];
            });
          })(i);
      var r = s(5779),
        o = s(5),
        c = !1,
        l = null,
        u = null,
        d = null,
        f = Object(o["a"])(n.a, r["a"], r["b"], c, l, u, d);
      t["default"] = f.exports;
    },
    5779: function (a, t, s) {
      "use strict";
      (s.d(t, "a", function () {
        return e;
      }),
        s.d(t, "b", function () {
          return n;
        }));
      var e = function () {
          var a = this,
            t = a.$createElement,
            s = a._self._c || t;
          return s("transition", { attrs: { name: "fade", appear: "" } }, [
            s(
              "div",
              {
                staticClass: "cashback-info",
                on: { click: a.goToCashbackClub },
              },
              [
                s(
                  "span",
                  {
                    staticClass: "text-gray",
                    attrs: { "data-test-id": "exchange_reward" },
                  },
                  [a._v("\n      " + a._s(a.$t("title.reward")) + ": \n    ")],
                ),
                a._v(" "),
                s("span", [
                  s(
                    "span",
                    { staticClass: "relative" },
                    [
                      a._v(
                        "\n        " +
                          a._s(a.formatFinance(a.estimatedCashback)),
                      ),
                      s("span", { staticClass: "text-gray" }, [a._v("  AWC ")]),
                      a._v(" "),
                      a.isLoading
                        ? s("LoadingEllipsis", {
                            staticClass: "cashback-info__loading",
                          })
                        : a._e(),
                    ],
                    1,
                  ),
                ]),
              ],
            ),
          ]);
        },
        n = [];
    },
  },
]);
