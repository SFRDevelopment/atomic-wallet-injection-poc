(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [408],
  {
    11590: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return r;
        }));
      var u = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "currency-input" }, [
            n("input", {
              ref: "input",
              staticClass: "placeholder-white",
              attrs: {
                type: "text",
                readonly: e.readonly,
                placeholder: e.placeholder,
              },
              domProps: { value: e.initialValue },
              on: { input: e.onInput },
            }),
          ]);
        },
        r = [];
    },
    4605: function (e, t, n) {
      "use strict";
      n.r(t);
      var u = n(5781),
        r = n.n(u);
      for (var a in u)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return u[e];
            });
          })(a);
      var l = n(11590),
        i = n(5),
        o = !1,
        d = null,
        s = null,
        c = null,
        p = Object(i["a"])(r.a, l["a"], l["b"], o, d, s, c);
      t["default"] = p.exports;
    },
    5781: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var u = n(3159);
      t.default = {
        name: "CurrencyInput",
        props: {
          initialValue: { required: !0, type: [Number, String], default: "" },
          options: { required: !1, type: Object, default: () => ({}) },
          formatter: { required: !1, type: Function, default: null },
          readonly: { type: Boolean, default: !1 },
          placeholder: { type: String, default: "" },
          decimals: { type: Number, default: 2 },
        },
        methods: {
          onInput(e) {
            let { target: t } = e;
            const { value: n } = t,
              r = (0, u.maskInput)(n, this.decimals);
            ((t.value = r), this.$emit("onInput", r));
          },
        },
      };
    },
  },
]);
