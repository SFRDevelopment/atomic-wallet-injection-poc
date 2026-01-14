(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [404],
  {
    3802: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = n(2837);
      const r = ["Success", "Warning", "Error", "Report"];
      e.default = {
        name: "Alert",
        components: { AlertIcon: s.AlertIcon },
        props: {
          type: { type: String, default: "Success" },
          message: { type: String, default: "" },
        },
        created() {
          r.includes(this.type) ||
            console.error(this.type + " not found in list of types");
        },
      };
    },
    5376: function (t, e, n) {
      "use strict";
      n.r(e);
      var s = n(3802),
        r = n.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(a);
      var c = n(5377),
        o = n(5),
        i = !1,
        l = null,
        u = null,
        d = null,
        f = Object(o["a"])(r.a, c["a"], c["b"], i, l, u, d);
      e["default"] = f.exports;
    },
    5377: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "alert", class: "alert-" + t.type.toLowerCase() },
            [
              n("AlertIcon", { attrs: { type: t.type } }),
              t._v(" "),
              n(
                "div",
                { staticClass: "alert_body" },
                [
                  n("div", { staticClass: "alert_message" }, [
                    t._v("\n      " + t._s(t.message) + "\n    "),
                  ]),
                  t._v(" "),
                  t._t("default"),
                ],
                2,
              ),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
