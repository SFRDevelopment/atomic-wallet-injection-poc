(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [59],
  {
    11585: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return a;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "cashback-promotion",
              on: { click: t.goToCashbackClub },
            },
            [
              n("span", { staticClass: "text-gray" }, [
                t._v("\n    " + t._s(t.clubMessage) + "\n  "),
              ]),
            ],
          );
        },
        a = [];
    },
    5777: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "CashbackPromotion",
        data() {
          return { clubMessage: this.$t("message.joinMembershipProgram") };
        },
        methods: {
          goToCashbackClub() {
            this.$router.push("/settings");
          },
        },
      };
    },
    6973: function (t, e, n) {
      "use strict";
      n.r(e);
      var s = n(5777),
        a = n.n(s);
      for (var r in s)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(r);
      var u = n(11585),
        o = n(5),
        i = !1,
        c = null,
        l = null,
        f = null,
        b = Object(o["a"])(a.a, u["a"], u["b"], i, c, l, f);
      e["default"] = b.exports;
    },
  },
]);
