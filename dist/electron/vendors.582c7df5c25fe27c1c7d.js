(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [411],
  {
    11658: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5815),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      var c = n(11659),
        o = n(5),
        r = !1,
        l = null,
        u = null,
        f = null,
        d = Object(o["a"])(i.a, c["a"], c["b"], r, l, u, f);
      e["default"] = d.exports;
    },
    11659: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "section", attrs: { "data-test-id": "nft_empty" } },
            [
              n("div", { staticClass: "section__item" }, [
                n("div", { staticClass: "title" }, [
                  t._v(t._s(t.$t("nftPage.title"))),
                ]),
              ]),
              t._v(" "),
              n("div", { staticClass: "nft-overlay" }),
              t._v(" "),
              n(
                "div",
                { staticClass: "section__column section__column_center" },
                [
                  n(
                    "BaseButton",
                    {
                      staticClass: "m-b-30 w170",
                      attrs: {
                        type: "primary-desktop",
                        "data-test-id": "receive_nft",
                      },
                      on: {
                        click: function (e) {
                          return t.$emit("openReceive");
                        },
                      },
                    },
                    [
                      t._v(
                        "\n      " +
                          t._s(t.$t("nftPage.receiveNft")) +
                          "\n    ",
                      ),
                    ],
                  ),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass: "link",
                      attrs: { "data-test-id": "what_is_nft" },
                      on: {
                        click: function (e) {
                          return t.$electron.openExternal(
                            "https://atomicwallet.io/academy/articles/what-is-a-non-fungible-token",
                          );
                        },
                      },
                    },
                    [
                      t._v(
                        "\n      " + t._s(t.$t("nftPage.whatIsNft")) + "\n    ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
            ],
          );
        },
        i = [];
    },
    5815: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "NFTEmpty",
        props: { isLoading: { type: Boolean, default: !0 } },
      };
    },
  },
]);
