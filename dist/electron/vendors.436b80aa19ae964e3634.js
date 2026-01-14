(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [334],
  {
    2851: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "LoadingEllipsis" };
    },
    2969: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i(3001),
        n = i.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(s);
      var l = i(3444),
        r = i(5),
        o = !1,
        u = null,
        d = null,
        c = null,
        h = Object(r["a"])(n.a, l["a"], l["b"], o, u, d, c);
      e["default"] = h.exports;
    },
    2980: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i(2851),
        n = i.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(s);
      var l = i(3067),
        r = i(5),
        o = !1,
        u = null,
        d = null,
        c = null,
        h = Object(r["a"])(n.a, l["a"], l["b"], o, u, d, c);
      e["default"] = h.exports;
    },
    3001: function (t, e, i) {
      "use strict";
      var a = i(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(60),
        s = a(i(2980)),
        l = i(3159),
        r = i(804),
        o = a(i(798)),
        u = a(i(3381));
      const d = 8;
      e.default = {
        name: "EditAmount",
        components: {
          LoadingEllipsis: s.default,
          CurrencyInput: () => i.e(408).then(i.bind(null, 4605)),
        },
        props: {
          readonly: { type: Boolean, default: !1 },
          isExchange: { type: Boolean, default: !1 },
          modelValue: { type: String, default: "" },
          error: { type: String, default: "" },
          placeholder: { type: String, default: "" },
          decimals: { type: Number, default: 0 },
          showBalance: { type: Boolean, default: !1 },
          isFiat: { type: Boolean, default: !1 },
          notes: { type: Array, default: () => [] },
          isZeroPlaceholder: { type: Boolean, default: !1 },
          wallet: { type: Object, default: null },
          parentTicker: { type: String, default: "" },
          focus: { type: Boolean, default: !1 },
          isSendAllClick: { type: Boolean, default: !1 },
          isInteger: { type: Boolean, default: !1 },
          isCustomLoading: { type: Boolean, default: !1 },
          isBuyCoin: { type: Boolean, default: !1 },
        },
        data: () => ({
          isUpdateFiat: !0,
          isLoadingBalance: !0,
          currentCoin: null,
          currentFiat: "",
          prevValue: "0",
        }),
        computed: {
          ...(0, n.mapGetters)(["fiatRate", "coinRate"]),
          hasCoinRate() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return (null === t || void 0 === t ? void 0 : t.rate) > 0;
          },
          valueFiat() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return this.modelValue
              ? this.isUpdateFiat
                ? (0, u.default)(
                    this.getValueFiat(
                      null === t || void 0 === t ? void 0 : t.rate,
                    ),
                  )
                : this.getValueFiat(
                    null === t || void 0 === t ? void 0 : t.rate,
                  )
              : this.currentFiat;
          },
          notesList() {
            return "undefined" !== typeof this.notes ? this.notes : [];
          },
          loading() {
            return this.isLoadingBalance || this.isCustomLoading;
          },
          showError() {
            return this.error && !this.loading;
          },
        },
        watch: {
          notes: {
            handler() {
              this.setIsLoadingBalance();
            },
            deep: !0,
          },
          isSendAllClick() {
            this.isUpdateFiat = !0;
          },
          modelValue() {
            this.isInteger &&
              this.updateValueInput(Math.floor(this.modelValue));
          },
        },
        mounted() {
          (this.focus && this.$refs.input.focus(), this.setIsLoadingBalance());
        },
        methods: {
          numberToFixed: r.numberToFixed,
          formatFinance: o.default,
          formatFiatV2: u.default,
          buyCoin() {
            this.$buy.isAvailable(this.wallet)
              ? this.$router.push(
                  "/simplex/USD/" +
                    this.$buy.getAvailableWallet(this.wallet).id,
                )
              : this.$router.push({
                  path: "/exchange",
                  query: { coinToSend: "BTC", coinToReceive: this.wallet.id },
                });
          },
          setIsLoadingBalance() {
            let t = !1;
            if (this.showBalance && this.notes[0]) {
              const e = this.notes[0].value;
              t = "" === e || "..." === e;
            }
            this.isLoadingBalance = t;
          },
          setCurrentCoin() {
            this.currentCoin !== this.wallet.ticker.toUpperCase() &&
              ((this.currentCoin = this.wallet.ticker.toUpperCase()),
              (this.isUpdateFiat = !0));
          },
          getValueFiat(t) {
            if (!this.isFiat) return null;
            if (isNaN(this.modelValue)) return "";
            if ((this.setCurrentCoin(), !this.isUpdateFiat))
              return this.currentFiat;
            if (0 === Number(this.modelValue)) return "0.";
            const e = (this.modelValue * t).toFixed(d),
              i = 1e-6;
            return e < i ? e : (0, r.roundFiat)(e);
          },
          updateValueInput(t) {
            ((this.$refs.input.value = t), this.$emit("update:modelValue", t));
          },
          coinWithWholeNumber(t) {
            let e = t;
            return (
              ("NEO" !== this.currentCoin && "ONT" !== this.currentCoin) ||
                (e = Math.ceil(e)),
              e
            );
          },
          onInputFiat(t) {
            (this.setCurrentCoin(),
              (this.isUpdateFiat = !1),
              (this.currentFiat = t));
            const e = 20,
              i =
                this.$rates.data[this.wallet.id] ||
                this.$rates.data[this.parentTicker.toUpperCase()],
              a = i[this.fiatRate].rate,
              n = this.coinWithWholeNumber((t / a).toFixed(e)),
              s =
                "" === n || 0 === parseFloat(n) || isNaN(parseFloat(n))
                  ? ""
                  : (0, r.numberToFixed)(n, this.decimals);
            this.updateValueInput(s);
          },
          onInput(t) {
            const e = this.modelValue.endsWith(".") && "0" === t.target.value,
              i = e ? "" : t.target.value;
            let a = (0, l.maskInput)(i, this.decimals);
            ((this.isUpdateFiat = !0), this.updateValueInput(a));
          },
          putAllAvailableBalance() {
            ((this.isUpdateFiat = !0), this.$emit("setAllAvailableBalance"));
          },
        },
      };
    },
    3067: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i.d(e, "b", function () {
          return n;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return i("div", { key: t });
            }),
            0,
          );
        },
        n = [];
    },
    3159: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.maskInput = r));
      const a = /[^0-9.,]+/g,
        n = /[^0-9.,]|[.,](?=.*[.,])|[.,](?=.^[0-9]{3}[.,])/g,
        s = 100,
        l = (t) => {
          if (
            (null === t || void 0 === t ? void 0 : t.length) > 1 &&
            t.startsWith("0")
          ) {
            const [, ...e] = t;
            return l(e.join(""));
          }
          return t;
        };
      function r(t, e, i) {
        let r;
        (void 0 === e && (e = s),
          !i &&
            [".", ",", "0"].some((e) => t.startsWith(e)) &&
            ((t = t.split("")), (t[0] = "0."), (t = t.join(""))));
        const o = t.replace(a, "").replace(n, ""),
          u = o.split(/\.|,/),
          [d, c] = u;
        return (
          (r = l(d)),
          i
            ? r
            : (u.splice(0, 1, r),
              c && c.length >= e && u.splice(1, 2, c.slice(0, e)),
              u.join("."))
        );
      }
    },
    3381: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = function (t, e) {
        void 0 === e && (e = null);
        let i = 2;
        const a = Number(t),
          n = a - Math.trunc(a),
          s = 0.01;
        return 0 === a || n < s
          ? Math.trunc(a) + ".00"
          : "BTC" === e
            ? ((i = 8), a.toFixed(i))
            : a.toFixed(i);
      };
    },
    3444: function (t, e, i) {
      "use strict";
      (i.d(e, "a", function () {
        return a;
      }),
        i.d(e, "b", function () {
          return n;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "form-field" },
            [
              i(
                "div",
                {
                  staticClass: "input-wrap",
                  class: { "input-send-all": t.isExchange && t.showBalance },
                },
                [
                  t.loading
                    ? i("loading-ellipsis", {
                        staticClass: "form-field__loading",
                      })
                    : t._e(),
                  t._v(" "),
                  i("input", {
                    ref: "input",
                    class: { "placeholder-white": t.isZeroPlaceholder },
                    attrs: {
                      placeholder: t.isZeroPlaceholder ? "0.00" : "",
                      readonly: t.readonly,
                      "data-test-id": "amount_id",
                    },
                    domProps: { value: t.modelValue },
                    on: {
                      focus: function (e) {
                        return t.$emit("focus");
                      },
                      input: t.onInput,
                    },
                  }),
                  t._v(" "),
                  i("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.showError,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "placeholder",
                      class: { "is-up": t.modelValue || t.isZeroPlaceholder },
                    },
                    [t._v("\n      " + t._s(t.placeholder) + "\n    ")],
                  ),
                  t._v(" "),
                  t.isExchange
                    ? t._e()
                    : i("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.wallet.ticker) + "\n    "),
                      ]),
                  t._v(" "),
                  t.isExchange && t.showBalance
                    ? i(
                        "div",
                        {
                          staticClass: "send-all",
                          attrs: { "data-test-id": "send_all_id" },
                          on: { click: t.putAllAvailableBalance },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.$t("button.sendAll")) +
                              "\n    ",
                          ),
                        ],
                      )
                    : t._e(),
                ],
                1,
              ),
              t._v(" "),
              t.isFiat
                ? i(
                    "div",
                    {
                      staticClass: "input-wrap",
                      class: { hidden: t.isFiat && !t.hasCoinRate },
                    },
                    [
                      i("currency-input", {
                        attrs: {
                          readonly: t.readonly,
                          "initial-value": t.valueFiat,
                          formatter: t.formatFiatV2,
                          placeholder: t.isZeroPlaceholder ? "0.00" : "",
                          "data-test-id": "currency_id",
                        },
                        on: { onInput: t.onInputFiat },
                      }),
                      t._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "ticker grey",
                          attrs: { "data-test-id": "rate_id" },
                        },
                        [t._v("\n      " + t._s(t.fiatRate) + "\n    ")],
                      ),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              i("transition", { attrs: { name: "slide-in" } }, [
                t.showError
                  ? i(
                      "div",
                      {
                        staticClass: "flex",
                        class: {
                          "buy-coin": t.isBuyCoin,
                          "error-amount-fix":
                            t.isFiat && !t.hasCoinRate && !t.isBuyCoin,
                        },
                      },
                      [
                        i("div", {
                          directives: [
                            {
                              name: "text-html",
                              rawName: "v-text-html",
                              value: t.error,
                              expression: "error",
                            },
                          ],
                          staticClass: "error",
                          class: { "error-amount": t.isFiat && t.hasCoinRate },
                        }),
                        t._v(" "),
                        t.isBuyCoin
                          ? i(
                              "button",
                              {
                                staticClass: "button button-buy",
                                on: { click: t.buyCoin },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("button.buy")) +
                                    " " +
                                    t._s(t.wallet.ticker || "") +
                                    "\n      ",
                                ),
                              ],
                            )
                          : t._e(),
                      ],
                    )
                  : t._e(),
              ]),
              t._v(" "),
              t._l(t.notesList, function (e, a) {
                return i(
                  "div",
                  {
                    key: a,
                    staticClass: "note",
                    on: { click: t.putAllAvailableBalance },
                  },
                  [
                    t._v("\n    " + t._s(e.name) + "\n    "),
                    t.loading
                      ? i("loading-ellipsis")
                      : t.isExchange
                        ? i("span", [
                            i("b", [
                              t._v(
                                "\n        " +
                                  t._s(
                                    t.formatFinance(t.numberToFixed(e.value)),
                                  ) +
                                  "\n      ",
                              ),
                            ]),
                            t._v(
                              "\n      " + t._s(t.wallet.ticker.toUpperCase()),
                            ),
                          ])
                        : i("b", [
                            t._v(
                              "\n      " +
                                t._s(t.formatFinance(e.value)) +
                                "\n    ",
                            ),
                          ]),
                  ],
                  1,
                );
              }),
            ],
            2,
          );
        },
        n = [];
    },
  },
]);
