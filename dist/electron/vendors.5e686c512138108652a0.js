(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [58],
  {
    11575: function (t, n, i) {
      "use strict";
      (i.d(n, "a", function () {
        return e;
      }),
        i.d(n, "b", function () {
          return s;
        }));
      var e = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "div",
            { staticClass: "buy-bitcoin" },
            [
              e("span", { staticClass: "text-bigger text-gray" }, [
                t._v(
                  "\n    " +
                    t._s(t.$t("buyBitcoin.hint", { name: t.name })) +
                    "\n  ",
                ),
              ]),
              t._v(" "),
              t._t("text"),
              t._v(" "),
              e("img", {
                staticClass: "buy-bitcoin__image",
                attrs: { src: i(11576) },
              }),
              t._v(" "),
              e(
                "div",
                { staticClass: "buy-bitcoin__actions" },
                [
                  e(
                    "BaseButton",
                    {
                      staticClass: "uppercase",
                      attrs: { type: "primary-desktop" },
                      on: {
                        click: function (n) {
                          return t.$router.push("/simplex");
                        },
                      },
                    },
                    [
                      t._v(
                        "\n      " + t._s(t.$t("buyBitcoin.button")) + "\n    ",
                      ),
                    ],
                  ),
                  t._v(" "),
                  t._t("button"),
                ],
                2,
              ),
            ],
            2,
          );
        },
        s = [];
    },
    11576: function (t, n, i) {
      t.exports = i.p + "imgs/empty-history--static.png";
    },
    5773: function (t, n, i) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0));
      n.default = {
        name: "BuyBitcoin",
        props: { name: { type: String, default: "" } },
      };
    },
    6971: function (t, n, i) {
      "use strict";
      i.r(n);
      var e = i(5773),
        s = i.n(e);
      for (var a in e)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return e[t];
            });
          })(a);
      var u = i(11575),
        r = i(5),
        c = !1,
        o = null,
        l = null,
        p = null,
        f = Object(r["a"])(s.a, u["a"], u["b"], c, o, l, p);
      n["default"] = f.exports;
    },
  },
]);
