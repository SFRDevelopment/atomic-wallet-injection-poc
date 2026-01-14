(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [364],
  {
    11703: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(5832),
        s = i.n(a);
      for (var u in a)
        ["default"].indexOf(u) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(u);
      var n = i(11704),
        l = i(5),
        r = !1,
        m = null,
        c = null,
        d = null,
        o = Object(l["a"])(s.a, n["a"], n["b"], r, m, c, d);
      t["default"] = o.exports;
    },
    11704: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return e.isSetFee
            ? i(
                "form",
                {
                  staticClass: "fee-constructor fee-constructor-old",
                  attrs: { novalidate: "" },
                },
                [
                  i(
                    "button",
                    {
                      staticClass: "button small-gray",
                      attrs: { type: "button" },
                      on: { click: e.setDefault },
                    },
                    [e._v("\n    " + e._s(e.$t("button.setDefault")) + "\n  ")],
                  ),
                  e._v(" "),
                  i("p", { staticClass: "fee-constructor__estimated-time" }, [
                    e.estimatedTime
                      ? i("span", { staticClass: "text-gray" }, [
                          e._v(
                            "\n      " +
                              e._s(e.$t("sendCoin.estimatedTime")) +
                              ": " +
                              e._s(e.estimatedTime) +
                              "\n    ",
                          ),
                        ])
                      : e._e(),
                  ]),
                  e._v(" "),
                  e.coinsWithGas.has(e.wallet.deprecatedParent)
                    ? i("div", { staticClass: "gas-range" }, [
                        e.defaultGasPrice && e.isCustomGasPrice
                          ? i(
                              "p",
                              [
                                i("numeric-range", {
                                  attrs: {
                                    "model-value": e.gasPrice,
                                    "default-value": e.defaultGasPrice,
                                    minimum: e.minGasPrice,
                                    maximum: e.maxGasPrice,
                                    "numeric-input": {
                                      text: e.$t("label.gasPrice"),
                                      units: e.getGasPriceUnits(),
                                    },
                                  },
                                  on: {
                                    change: function (t) {
                                      (e.setFieldProperValue("gasPrice", t),
                                        e.limitGasPrice());
                                    },
                                  },
                                }),
                              ],
                              1,
                            )
                          : e._e(),
                        e._v(" "),
                        i(
                          "p",
                          [
                            i("numeric-range", {
                              attrs: {
                                "model-value": e.gasLimit,
                                "default-value": e.defaultGasLimit,
                                minimum:
                                  e.feePlugin.minGasLimit || e.MIN_GAS_LIMIT,
                                maximum: e.maxGasLimitComp,
                                "numeric-input": {
                                  text: e.$t("label.gasLimit"),
                                  units: "",
                                },
                              },
                              on: {
                                change: function (t) {
                                  (e.setFieldProperValue("gasLimit", t),
                                    e.limitGasLimit());
                                },
                              },
                            }),
                          ],
                          1,
                        ),
                      ])
                    : i("numeric-range", {
                        attrs: {
                          "model-value": e.satoshiPerByte,
                          "default-value": e.defaultSatPerByte,
                          minimum: e.minSatoshiPerByte,
                          maximum: e.maxSatoshiPerByte,
                          "numeric-input": {
                            text: e.$t("label.feesPerByte"),
                            units: "sat/B",
                          },
                          "sat-per-byte": "",
                        },
                        on: {
                          change: function (t) {
                            (e.setFieldProperValue("satoshiPerByte", t),
                              e.limitSatoshiPerByte());
                          },
                        },
                      }),
                  e._v(" "),
                  ["ETH", "BSC", "AVAX", "MATIC"].includes(
                    e.wallet.deprecatedParent,
                  ) && +e.wallet.feeWallet.nonce
                    ? i("p", { staticClass: "text-gray nonce m-t-10" }, [
                        e._v("\n    " + e._s(e.$t("label.nonce")) + ":\n    "),
                        i("span", { staticClass: "text-white" }, [
                          e._v(
                            "\n      " +
                              e._s(e.wallet.feeWallet.nonce) +
                              "\n    ",
                          ),
                        ]),
                      ])
                    : e._e(),
                ],
                1,
              )
            : e._e();
        },
        s = [];
    },
    3864: function (e, t, i) {
      "use strict";
      var a = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = a(i(232));
      const u = 100,
        n = "0",
        l =
          "linear-gradient(to right, #2FA6FA 0%, #2FA6FA {value}%, #8290AD {value}%, #8290AD 100%)",
        r = /^-?\d+(\.\d+)?$/;
      t.default = {
        name: "NumericRange",
        props: {
          maximum: { required: !0, type: String, default: "100000" },
          minimum: { required: !0, type: String, default: "1" },
          defaultValue: { type: String, default: "" },
          satPerByte: { type: Boolean, default: !1 },
          numericInput: { type: Object, default: null },
          modelValue: { type: String, default: "" },
        },
        data: () => ({ middle: 0, value: "", style: { background: null } }),
        computed: {
          isError() {
            return 0 === Number(this.value);
          },
        },
        watch: {
          modelValue(e) {
            this.value = e;
          },
        },
        created() {
          this.initValues();
        },
        mounted() {
          this.$bus.$on("numeric::range::default", this.initValues);
        },
        beforeDestroy() {
          this.$bus.$off("numeric::range::default", this.initValues);
        },
        methods: {
          initValues() {
            this.changeValue(this.defaultValue);
          },
          changeValue(e) {
            if (!e)
              return (
                (this.$refs.numericInput.value = n),
                (this.value = n),
                this.$emit("change", n),
                (this.style.background = l.replace(/{value}/gi, 0)),
                !1
              );
            if (e && !r.test(e))
              return ((this.$refs.numericInput.value = this.value), !1);
            let t = new s.default(e);
            const i = new s.default(this.maximum),
              a = new s.default(this.minimum);
            let m = 0;
            if (e) {
              const e = t.gt(i) ? i.toNumber() : t.toNumber(),
                s = t.minus(a).multipliedBy(u);
              ((m = s.dividedBy(i.minus(a)).toFixed()),
                (this.value = e),
                t.gt(i) && (this.$refs.numericInput.value = this.value),
                this.$emit("change", e));
            } else ((this.value = ""), this.$emit("change", ""));
            this.style.background = l.replace(/{value}/gi, m);
          },
        },
      };
    },
    5795: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(3864),
        s = i.n(a);
      for (var u in a)
        ["default"].indexOf(u) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(u);
      var n = i(5796),
        l = i(5),
        r = !1,
        m = null,
        c = null,
        d = null,
        o = Object(l["a"])(s.a, n["a"], n["b"], r, m, c, d);
      t["default"] = o.exports;
    },
    5796: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "range" }, [
            e.numericInput
              ? i("p", { staticClass: "feePerByte" }, [
                  i("span", { staticClass: "text-white" }, [
                    e._v(" " + e._s(e.numericInput.text) + "  "),
                  ]),
                  e._v(" "),
                  i("span", { staticClass: "text-white" }, [
                    i("input", {
                      ref: "numericInput",
                      staticClass: "fee-input",
                      class: { error: e.isError },
                      attrs: {
                        type: "number",
                        max: e.maximum,
                        min: e.minimum,
                        placeholder: parseInt(e.minimum),
                      },
                      domProps: { value: e.value },
                      on: {
                        input: function (t) {
                          return e.changeValue(t.target.value);
                        },
                      },
                    }),
                  ]),
                  e._v(" \n    " + e._s(e.numericInput.units) + "\n  "),
                ])
              : e._e(),
            e._v(" "),
            i("input", {
              style: e.style,
              attrs: { max: e.maximum, min: e.minimum, type: "range" },
              domProps: { value: e.value || e.minimum },
              on: {
                input: function (t) {
                  return e.changeValue(t.target.value);
                },
              },
            }),
          ]);
        },
        s = [];
    },
    5832: function (e, t, i) {
      "use strict";
      var a = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = a(i(800)),
        u = a(i(5795));
      const n = "21000",
        l = "200",
        r = "300000",
        m = "1",
        c = m,
        d = "400",
        o = "1000",
        h = new Set([
          "ETH",
          "LUNA",
          "LUNC",
          "BSC",
          "AVAX",
          "MATIC",
          "FLR",
          "FTM",
          "FIL",
          "ETHOP",
          "OP",
          "S",
        ]),
        f = 1e9,
        g = 1e3;
      t.default = {
        name: "FeeConstructor",
        components: { NumericRange: u.default },
        props: {
          wallet: { type: Object, required: !0 },
          feePlugin: { type: Object, required: !0, default: () => ({}) },
          isSetFee: { type: Boolean, default: !1 },
          minimumValue: { type: String, default: "0" },
          maximumValue: { type: String, default: "0" },
        },
        data() {
          return {
            gasPrice: m,
            gasLimit: n,
            maxGasLimit: r,
            minGasPrice: m,
            maxGasPrice: l,
            satoshiPerByte: c,
            minSatoshiPerByte: c,
            coinsWithGas: h,
            estimatedTime: "",
            defaultGasPrice: m,
            defaultGasLimit: n,
            defaultSatPerByte: c,
          };
        },
        computed: {
          maxSatoshiPerByte() {
            return "LTC" === this.wallet.ticker ? o : d;
          },
          isCustomGasPrice() {
            return !["FIL"].includes(this.wallet.deprecatedParent);
          },
          maxGasLimitComp() {
            return +this.defaultGasLimit > +this.maxGasLimit
              ? this.defaultGasLimit
              : this.maxGasLimit;
          },
          debounceTimeForGas() {
            const e = new Set(["OP"]);
            return e.has(this.wallet.deprecatedParent) ? 500 : 0;
          },
        },
        watch: {
          "wallet.id"() {
            this.setData();
          },
        },
        mounted() {
          this.setData();
        },
        methods: {
          setGasInfo() {
            ((this.gasLimit =
              +this.feePlugin.minGasLimit > +this.feePlugin.defaultGasLimit
                ? this.feePlugin.minGasLimit
                : this.feePlugin.defaultGasLimit || this.defaultGasLimit),
              (this.gasPrice =
                this.feePlugin.defaultGasPrice || this.defaultGasPrice),
              (this.satoshiPerByte =
                this.feePlugin.defaultSatPerByte || this.defaultSatPerByte),
              (this.defaultGasLimit = String(this.gasLimit)));
          },
          setData() {
            var e, t, i;
            ((this.defaultGasPrice = this.feePlugin.defaultGasPrice),
              (this.defaultGasLimit = this.feePlugin.defaultGasLimit || n),
              (this.defaultSatPerByte = this.feePlugin.defaultSatPerByte),
              (this.maxGasPrice = String(
                (null === (e = this.wallet) ||
                void 0 === e ||
                null === (t = e.feeWallet) ||
                void 0 === t
                  ? void 0
                  : t.defaultMaxGasPrice) || l,
              )),
              (this.minGasPrice =
                null === (i = this.feePlugin) || void 0 === i
                  ? void 0
                  : i.nodeGasPrice),
              this.setGasInfo(),
              this.getFeeAndEmitValue());
          },
          getLimitedValue(e, t, i) {
            return Number(t) > Number(e) || Number.isNaN(Number(e))
              ? t
              : Number(i) < Number(e)
                ? i
                : e;
          },
          limitSatoshiPerByte() {
            this.$debounce(() => {
              const e = this.getLimitedValue(this.satoshiPerByte, 1);
              this.setFieldProperValue("satoshiPerByte", e);
            }, g);
          },
          limitGasPrice() {
            this.$debounce(() => {
              const e = this.getLimitedValue(this.gasPrice, 1);
              this.setFieldProperValue("gasPrice", e);
            }, g);
          },
          limitGasLimit() {
            this.$debounce(() => {
              const e = this.feePlugin.minGasLimit || n,
                t = this.getLimitedValue(
                  this.gasLimit,
                  e,
                  this.maxGasLimitComp,
                );
              this.setFieldProperValue("gasLimit", t);
            }, g);
          },
          async getFeeAndEmitValue() {
            let e = null;
            (this.coinsWithGas.has(this.wallet.feeWallet.ticker)
              ? ((e = new s.default(this.gasPrice).multipliedBy(f).toString()),
                this.$emit("setCustomGas", [e, this.gasLimit]))
              : this.$emit("setCustomSatoshi", this.satoshiPerByte),
              await this.getEstimatedTime(),
              this.$emit("change"));
          },
          setFieldProperValue(e, t) {
            const i = Number(t);
            (i || 0 === i) &&
              ((this[e] = i),
              this.$debounce(this.getFeeAndEmitValue, this.debounceTimeForGas));
          },
          setDefault() {
            this.$bus.$emit("numeric::range::default");
          },
          async getEstimatedTime() {
            var e;
            if (!["ETH", "BTC", "BSC"].includes(this.wallet.id)) return;
            const t = {
              ETH: this.gasPrice,
              BTC: this.satoshiPerByte,
              BSC: this.gasPrice,
            };
            this.estimatedTime = await (null === (e = this.wallet) ||
            void 0 === e
              ? void 0
              : e.getEstimatedTimeTx(t[this.wallet.id], "label"));
          },
          getGasPriceUnits() {
            return this.wallet.feeWallet.getGasPriceUnits
              ? this.wallet.feeWallet.getGasPriceUnits()
              : "GWEI";
          },
        },
      };
    },
  },
]);
