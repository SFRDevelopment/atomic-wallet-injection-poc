(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [28, 334, 381],
  {
    2851: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "LoadingEllipsis" };
    },
    2957: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AtomicCheckbox",
        props: {
          modelValue: { type: Boolean, default: !1 },
          isError: { type: Boolean, default: !1 },
          size: { type: String, default: "m" },
        },
        computed: {
          proxyValue: {
            get() {
              return this.modelValue;
            },
            set(t) {
              this.$emit("update:modelValue", t);
            },
          },
        },
      };
    },
    2969: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3001),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(3444),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = p.exports;
    },
    2980: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2851),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(3067),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = p.exports;
    },
    3001: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        s = n(a(2980)),
        o = a(3159),
        r = a(804),
        c = n(a(798)),
        l = n(a(3381));
      const d = 8;
      e.default = {
        name: "EditAmount",
        components: {
          LoadingEllipsis: s.default,
          CurrencyInput: () => a.e(408).then(a.bind(null, 4605)),
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
          ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
          hasCoinRate() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return (null === t || void 0 === t ? void 0 : t.rate) > 0;
          },
          valueFiat() {
            const t = this.coinRate(this.fiatRate, this.wallet);
            return this.modelValue
              ? this.isUpdateFiat
                ? (0, l.default)(
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
          formatFinance: c.default,
          formatFiatV2: l.default,
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
              a = 1e-6;
            return e < a ? e : (0, r.roundFiat)(e);
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
              a =
                this.$rates.data[this.wallet.id] ||
                this.$rates.data[this.parentTicker.toUpperCase()],
              n = a[this.fiatRate].rate,
              i = this.coinWithWholeNumber((t / n).toFixed(e)),
              s =
                "" === i || 0 === parseFloat(i) || isNaN(parseFloat(i))
                  ? ""
                  : (0, r.numberToFixed)(i, this.decimals);
            this.updateValueInput(s);
          },
          onInput(t) {
            const e = this.modelValue.endsWith(".") && "0" === t.target.value,
              a = e ? "" : t.target.value;
            let n = (0, o.maskInput)(a, this.decimals);
            ((this.isUpdateFiat = !0), this.updateValueInput(n));
          },
          putAllAvailableBalance() {
            ((this.isUpdateFiat = !0), this.$emit("setAllAvailableBalance"));
          },
        },
      };
    },
    3067: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return a("div", { key: t });
            }),
            0,
          );
        },
        i = [];
    },
    3159: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.maskInput = r));
      const n = /[^0-9.,]+/g,
        i = /[^0-9.,]|[.,](?=.*[.,])|[.,](?=.^[0-9]{3}[.,])/g,
        s = 100,
        o = (t) => {
          if (
            (null === t || void 0 === t ? void 0 : t.length) > 1 &&
            t.startsWith("0")
          ) {
            const [, ...e] = t;
            return o(e.join(""));
          }
          return t;
        };
      function r(t, e, a) {
        let r;
        (void 0 === e && (e = s),
          !a &&
            [".", ",", "0"].some((e) => t.startsWith(e)) &&
            ((t = t.split("")), (t[0] = "0."), (t = t.join(""))));
        const c = t.replace(n, "").replace(i, ""),
          l = c.split(/\.|,/),
          [d, u] = l;
        return (
          (r = o(d)),
          a
            ? r
            : (l.splice(0, 1, r),
              u && u.length >= e && l.splice(1, 2, u.slice(0, e)),
              l.join("."))
        );
      }
    },
    3335: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2957),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(3338),
        r = a(5);
      function c(t) {
        a(3336);
      }
      var l = !1,
        d = c,
        u = "data-v-622b8c47",
        p = null,
        h = Object(r["a"])(i.a, o["a"], o["b"], l, d, u, p);
      e["default"] = h.exports;
    },
    3336: function (t, e, a) {
      var n = a(3337);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("7ee78446", n, !0, {});
    },
    3337: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          '\n@keyframes spinner-data-v-622b8c47{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-622b8c47{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-622b8c47{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-622b8c47{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-622b8c47{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-622b8c47{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-622b8c47{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-622b8c47]{color:#6b963b\n}\n.text-red[data-v-622b8c47]{color:#c03647\n}\n.text-gray[data-v-622b8c47]{color:#8290ad\n}\n.text-blue[data-v-622b8c47]{color:#00c2ff\n}\n.text-danger[data-v-622b8c47]{color:#8c4545\n}\n.text-title[data-v-622b8c47]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-622b8c47]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-622b8c47]{color:#f1b70b\n}\n.text-white[data-v-622b8c47]{color:#fff\n}\n.text-bigger[data-v-622b8c47]{font-size:18px;font-weight:500\n}\n.text-big[data-v-622b8c47]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-622b8c47]{font-size:14px\n}\n.text-middle-height[data-v-622b8c47]{line-height:24px\n}\n.text-small[data-v-622b8c47]{font-size:12px\n}\n.text-word-break[data-v-622b8c47]{word-break:break-all\n}\n.text-right[data-v-622b8c47]{text-align:right\n}\n.text-left[data-v-622b8c47]{text-align:left\n}\n.text-line-middle[data-v-622b8c47]{line-height:24px\n}\n.text-link[data-v-622b8c47],.text-link-underline[data-v-622b8c47]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-622b8c47]:hover,.text-link-underline[data-v-622b8c47]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-622b8c47]{text-decoration:underline\n}\n.text-center[data-v-622b8c47]{text-align:center\n}\n.text-pointer[data-v-622b8c47]{cursor:pointer\n}\n.gap-10[data-v-622b8c47]{gap:10px\n}\n.m-t-auto[data-v-622b8c47]{margin-top:auto\n}\n.m-t-4[data-v-622b8c47]{margin-top:4px\n}\n.m-t-5[data-v-622b8c47]{margin-top:5px\n}\n.m-t-8[data-v-622b8c47]{margin-top:10px\n}\n.m-t-10[data-v-622b8c47]{margin-top:10px\n}\n.m-t-13[data-v-622b8c47]{margin-top:10px\n}\n.m-t-15[data-v-622b8c47]{margin-top:15px\n}\n.m-t-16[data-v-622b8c47]{margin-top:16px\n}\n.m-t-20[data-v-622b8c47]{margin-top:20px\n}\n.m-t-24[data-v-622b8c47]{margin-top:24px\n}\n.m-t-25[data-v-622b8c47]{margin-top:25px\n}\n.m-t-26[data-v-622b8c47]{margin-top:26px\n}\n.m-t-30[data-v-622b8c47]{margin-top:30px\n}\n.m-t-35[data-v-622b8c47]{margin-top:35px\n}\n.m-t-40[data-v-622b8c47]{margin-top:40px\n}\n.m-t-45[data-v-622b8c47]{margin-top:45px\n}\n.m-t-50[data-v-622b8c47]{margin-top:50px\n}\n.m-t-60[data-v-622b8c47]{margin-top:60px\n}\n.m-t-65[data-v-622b8c47]{margin-top:65px\n}\n.m-t-80[data-v-622b8c47]{margin-top:80px\n}\n.m-l-5[data-v-622b8c47]{margin-left:5px\n}\n.m-l-10[data-v-622b8c47]{margin-left:10px\n}\n.m-l-15[data-v-622b8c47]{margin-left:15px\n}\n.m-l-20[data-v-622b8c47]{margin-left:20px\n}\n.m-l-25[data-v-622b8c47]{margin-left:25px\n}\n.m-l-30[data-v-622b8c47]{margin-left:30px\n}\n.m-l-35[data-v-622b8c47]{margin-left:35px\n}\n.m-r-5[data-v-622b8c47]{margin-right:5px\n}\n.m-r-10[data-v-622b8c47]{margin-right:10px\n}\n.m-r-15[data-v-622b8c47]{margin-right:15px\n}\n.m-r-30[data-v-622b8c47]{margin-right:30px\n}\n.m-b-5[data-v-622b8c47]{margin-bottom:5px !important\n}\n.m-b-15[data-v-622b8c47]{margin-bottom:15px !important\n}\n.m-b-20[data-v-622b8c47]{margin-bottom:20px !important\n}\n.m-b-30[data-v-622b8c47]{margin-bottom:30px !important\n}\n.m-b-25[data-v-622b8c47]{margin-bottom:25px !important\n}\n.m-b-50[data-v-622b8c47]{margin-bottom:50px !important\n}\n.p-t-40[data-v-622b8c47]{padding-top:40px\n}\n.p-t-85[data-v-622b8c47]{padding-top:85px !important\n}\n.hidden[data-v-622b8c47]{opacity:0 !important\n}\n.relative[data-v-622b8c47]{position:relative\n}\n.space-nowrap[data-v-622b8c47]{white-space:nowrap\n}\n.uppercase[data-v-622b8c47]{text-transform:uppercase\n}\n.lowercase[data-v-622b8c47]{text-transform:lowercase\n}\n.fade-enter-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-622b8c47]{transition:all .1s ease-out\n}\n.fade-enter[data-v-622b8c47],.fade-leave-to[data-v-622b8c47]{opacity:0\n}\n.fade-down-enter-active[data-v-622b8c47],.fade-down-leave-active[data-v-622b8c47],.fade-down-move[data-v-622b8c47]{transition:all .15s\n}\n.fade-down-leave-active[data-v-622b8c47],.fade-down-enter-active[data-v-622b8c47]{position:absolute !important\n}\n.fade-down-enter[data-v-622b8c47],.fade-down-leave-to[data-v-622b8c47]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-622b8c47],.scale-leave-active[data-v-622b8c47],.scale-move[data-v-622b8c47]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-622b8c47],.scale-leave-to[data-v-622b8c47]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-622b8c47],.slide-leave-active[data-v-622b8c47]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-622b8c47]{transition:all .2s ease\n}\n.slide-leave-active[data-v-622b8c47]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-622b8c47],.slide-leave[data-v-622b8c47]{margin-bottom:0px\n}\n.slide-enter[data-v-622b8c47],.slide-leave-to[data-v-622b8c47]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-622b8c47],.slide-in-leave-active[data-v-622b8c47]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-622b8c47]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-622b8c47]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-622b8c47]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-622b8c47],.page-fade-enter-active[data-v-622b8c47]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-622b8c47],.page-fade-leave-to[data-v-622b8c47],.page-fade-enter[data-v-622b8c47]{opacity:0\n}\n.page-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.fade-out-leave-active[data-v-622b8c47],.fade-out-enter-active[data-v-622b8c47]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-622b8c47],.fade-out-leave-to[data-v-622b8c47],.fade-out-enter[data-v-622b8c47]{opacity:0\n}\n.fade-out-enter-to[data-v-622b8c47]{opacity:1\n}\n.slide-down-enter-active[data-v-622b8c47],.slide-down-leave-active[data-v-622b8c47]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-622b8c47],.slide-down-enter[data-v-622b8c47]{top:100%\n}\n.slide-down-leave[data-v-622b8c47],.slide-down-enter-to[data-v-622b8c47]{top:0%\n}\n.slide-out-enter-active[data-v-622b8c47],.slide-out-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-622b8c47],.exchange-result.slide-out-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-622b8c47],.exchange-pending.slide-out-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-622b8c47],.slide-left-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-622b8c47],.slide-right-leave-active[data-v-622b8c47]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-622b8c47]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-622b8c47]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-622b8c47]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-622b8c47],.spin-down-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-622b8c47],.spin-up-leave-active[data-v-622b8c47]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-622b8c47]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-622b8c47]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-622b8c47]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-622b8c47],.puff-out-leave-active[data-v-622b8c47]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-622b8c47]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-622b8c47]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-622b8c47],.puff-out-enter-to[data-v-622b8c47]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-622b8c47],.collapse-fade-enter-active[data-v-622b8c47]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-622b8c47],.collapse-fade-leave-to[data-v-622b8c47],.collapse-fade-enter[data-v-622b8c47]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.lazy-fade-leave-active[data-v-622b8c47],.lazy-fade-enter-active[data-v-622b8c47]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-622b8c47],.lazy-fade-leave-to[data-v-622b8c47],.lazy-fade-enter[data-v-622b8c47]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-622b8c47]{opacity:1\n}\n.atomic__checkbox[data-v-622b8c47]{position:relative;display:inline-block;color:#fff;cursor:pointer;font-size:14px;line-height:19px\n}\n.atomic__checkbox-error[data-v-622b8c47]{z-index:-1;border:solid 2px #f75555;border-radius:6px;width:28px;height:28px;position:absolute;left:-2px;top:-2px\n}\n.atomic__checkbox_m>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_m:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_m>span[data-v-622b8c47],.atomic__checkbox_m>span *[data-v-622b8c47]{font-weight:400;font-size:14px;line-height:18px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 2px #8290ad;border-radius:4px;width:20px;height:20px;vertical-align:-8px\n}\n.atomic__checkbox_m>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:3px;left:3px;width:5px;height:10px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_m>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_m>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}\n.atomic__checkbox_s>input[data-v-622b8c47]{-webkit-appearance:none;position:absolute;left:-15px;top:-15px;border-radius:50%;width:48px;height:48px;background-color:#8290ad;outline:none;opacity:0;transition:opacity .5s,transform .5s;z-index:-1\n}\n.atomic__checkbox_s:active>input[data-v-622b8c47]{opacity:1;transform:scale(0);transition:opacity 0s,transform 0s\n}\n.atomic__checkbox_s>span[data-v-622b8c47]{display:flex;align-items:center\n}\n.atomic__checkbox_s>span[data-v-622b8c47],.atomic__checkbox_s>span *[data-v-622b8c47]{font-family:Roboto;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::before{content:"";display:inline-block;margin-right:8px;border:solid 1px #8290ad;border-radius:4px;width:18px;height:18px;vertical-align:-8px\n}\n.atomic__checkbox_s>span[data-v-622b8c47]::after{content:"";display:inline-block;position:absolute;top:4px;left:2px;width:4px;height:8px;border:solid 2px rgba(0,0,0,0);border-left:none;border-top:none;transform:translate(5.5px, 1px) rotate(45deg)\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]{color:#1f9eff\n}\n.atomic__checkbox_s>span a[data-v-622b8c47]:hover{opacity:.8\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::before{border-color:#1f9eff;background:#1f9eff\n}\n.atomic__checkbox_s>input:checked+span[data-v-622b8c47]::after{border-color:#fff\n}',
          "",
        ]));
    },
    3338: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "label",
            { class: ["atomic__checkbox", "atomic__checkbox_" + t.size] },
            [
              a("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.proxyValue,
                    expression: "proxyValue",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(t.proxyValue)
                    ? t._i(t.proxyValue, null) > -1
                    : t.proxyValue,
                },
                on: {
                  change: function (e) {
                    var a = t.proxyValue,
                      n = e.target,
                      i = !!n.checked;
                    if (Array.isArray(a)) {
                      var s = null,
                        o = t._i(a, s);
                      n.checked
                        ? o < 0 && (t.proxyValue = a.concat([s]))
                        : o > -1 &&
                          (t.proxyValue = a.slice(0, o).concat(a.slice(o + 1)));
                    } else t.proxyValue = i;
                  },
                },
              }),
              t._v(" "),
              t.isError
                ? a("div", { staticClass: "atomic__checkbox-error" })
                : t._e(),
              t._v(" "),
              a(
                "span",
                { staticClass: "atomic__checkbox-input" },
                [t._t("default")],
                2,
              ),
            ],
          );
        },
        i = [];
    },
    3349: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "ChangeIcon" };
    },
    3381: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = function (t, e) {
        void 0 === e && (e = null);
        let a = 2;
        const n = Number(t),
          i = n - Math.trunc(n),
          s = 0.01;
        return 0 === n || i < s
          ? Math.trunc(n) + ".00"
          : "BTC" === e
            ? ((a = 8), n.toFixed(a))
            : n.toFixed(a);
      };
    },
    3444: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "form-field" },
            [
              a(
                "div",
                {
                  staticClass: "input-wrap",
                  class: { "input-send-all": t.isExchange && t.showBalance },
                },
                [
                  t.loading
                    ? a("loading-ellipsis", {
                        staticClass: "form-field__loading",
                      })
                    : t._e(),
                  t._v(" "),
                  a("input", {
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
                  a("div", {
                    staticClass: "line",
                    class: {
                      "line-error": t.showError,
                      "line-true": !t.error && t.modelValue,
                    },
                  }),
                  t._v(" "),
                  a(
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
                    : a("div", { staticClass: "ticker" }, [
                        t._v("\n      " + t._s(t.wallet.ticker) + "\n    "),
                      ]),
                  t._v(" "),
                  t.isExchange && t.showBalance
                    ? a(
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
                ? a(
                    "div",
                    {
                      staticClass: "input-wrap",
                      class: { hidden: t.isFiat && !t.hasCoinRate },
                    },
                    [
                      a("currency-input", {
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
                      a(
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
              a("transition", { attrs: { name: "slide-in" } }, [
                t.showError
                  ? a(
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
                        a("div", {
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
                          ? a(
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
              t._l(t.notesList, function (e, n) {
                return a(
                  "div",
                  {
                    key: n,
                    staticClass: "note",
                    on: { click: t.putAllAvailableBalance },
                  },
                  [
                    t._v("\n    " + t._s(e.name) + "\n    "),
                    t.loading
                      ? a("loading-ellipsis")
                      : t.isExchange
                        ? a("span", [
                            a("b", [
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
                        : a("b", [
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
        i = [];
    },
    3803: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(375);
      e.default = {
        name: "ExchangeCoin",
        components: {
          EditAmount: () => a.e(334).then(a.bind(null, 2969)),
          CoinDropdown: () => a.e(322).then(a.bind(null, 3628)),
        },
        mixins: [n.ExchangeMixin],
        props: {
          icon: { type: String, default: "" },
          isLoading: { type: Boolean, default: !1 },
          coin: { type: Object, default: null },
          currencies: { type: Array, default: null },
          availableBalance: { type: String, default: "" },
          selectedCoin: { type: String, default: "" },
          amount: { type: String, default: "" },
          readonly: { type: Boolean, default: !1 },
          isAvailableBalance: { type: Boolean, default: !1 },
          isChangeCoin: { type: Boolean, default: !0 },
          isSortByMarketCap: { type: Boolean, default: !1 },
          isBuyCrypto: { type: Boolean, default: !1 },
        },
        data: () => ({ filters: [], isCoinDropdown: !1, activeFilter: "all" }),
        computed: {
          availableCoins() {
            const t = [];
            return (
              this.currencies.forEach((e) => {
                const a = this.$wallets.getWallet(e);
                if (a) {
                  const e = "EOS" !== a.ticker || a.activated;
                  e && t.push(a);
                }
              }),
              t
            );
          },
          minAmountNotes() {
            return this.isAvailableBalance
              ? [
                  {
                    name: this.$t("title.available") + ": ",
                    value: this.availableBalance,
                  },
                ]
              : null;
          },
        },
        watch: {
          async currencies(t, e) {
            t !== e && (await this.setExchangeData());
          },
        },
        async beforeMount() {
          await this.setExchangeData();
        },
        methods: {
          async setExchangeData() {
            ((this.filters = await this.$wallets.getFilters()),
              (this.newTagCoins =
                await this.$wallets.getAvailableWalletsByFilter(
                  this.filters[0],
                  this.currencies,
                )));
          },
          changeActiveFilter(t) {
            this.activeFilter = t;
          },
          selectCoin(t) {
            ((this.isCoinDropdown = !1), this.$emit("selectCoin", t));
          },
          outsideClick() {
            this.isCoinDropdown = !1;
          },
          showCoinDropdown(t) {
            (t.stopPropagation(),
              this.isChangeCoin &&
                (this.isCoinDropdown = !this.isCoinDropdown));
          },
          setAmount(t) {
            this.$emit("setAmountToSend", t);
          },
        },
      };
    },
    410: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5400),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(8890),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = p.exports;
    },
    4509: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3349),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(4510),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = p.exports;
    },
    4510: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "change-icon",
              attrs: { "data-test-id": "change_coins" },
              on: {
                click: function (e) {
                  return t.$emit("clickAction");
                },
              },
            },
            [
              a("svg", { attrs: { fill: "none", viewBox: "0 0 35 16" } }, [
                a("path", {
                  attrs: {
                    d: "M1.67391 8H31.3261",
                    "stroke-linecap": "round",
                    "stroke-width": "3",
                  },
                }),
                t._v(" "),
                a("path", {
                  attrs: {
                    d: "M25.2607 2L31.9999 8.1471L25.2607 13.765",
                    "stroke-linecap": "round",
                    "stroke-width": "3",
                  },
                }),
              ]),
            ],
          );
        },
        i = [];
    },
    5388: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3803),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var o = a(5389),
        r = a(5),
        c = !1,
        l = null,
        d = null,
        u = null,
        p = Object(r["a"])(i.a, o["a"], o["b"], c, l, d, u);
      e["default"] = p.exports;
    },
    5389: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "coin-block" }, [
            a("div", { staticClass: "flex justify-center center" }, [
              t.coin
                ? a("div", {
                    key: t.coin.ticker,
                    staticClass: "coin-icon",
                    class: [t.icon, { "no-change": !t.isChangeCoin }],
                    on: { click: t.showCoinDropdown },
                  })
                : t._e(),
            ]),
            t._v(" "),
            a(
              "div",
              { staticClass: "flex-wrapper" },
              [
                a("edit-amount", {
                  attrs: {
                    "is-custom-loading": t.isLoading,
                    decimals: t.coin.decimal,
                    "is-exchange": "",
                    "is-zero-placeholder": "",
                    notes: t.minAmountNotes,
                    readonly: t.readonly,
                    "show-balance": t.isAvailableBalance,
                    wallet: t.coin,
                    "model-value": t.amount,
                    "data-test-id": "exch_inputcoin_sent",
                  },
                  on: {
                    "update:modelValue": t.setAmount,
                    setAllAvailableBalance: function (e) {
                      return t.setAmount(t.availableBalance);
                    },
                  },
                }),
                t._v(" "),
                a(
                  "div",
                  {
                    staticClass: "coinname",
                    class: {
                      "no-change": !t.isChangeCoin,
                      "coinname-big": "TRX-USDT" === t.coin.ticker,
                    },
                    attrs: { "data-test-id": "exch_coin_sent" },
                  },
                  [
                    a(
                      "span",
                      { key: t.coin.ticker, on: { click: t.showCoinDropdown } },
                      [t._v("\n        " + t._s(t.coin.ticker) + "\n      ")],
                    ),
                    t._v(" "),
                    t.isBuyCrypto && t.isCoinDropdown && t.isChangeCoin
                      ? a("coin-dropdown", {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: t.outsideClick,
                              expression: "outsideClick",
                            },
                          ],
                          ref: "coindropdown",
                          attrs: {
                            coins: t.availableCoins,
                            "enable-sort": "",
                            "is-show-exchange-tags":
                              "exchange-basic" === t.$route.name,
                            "is-show-simplex-tags":
                              "simplex-page" === t.$route.name,
                            "is-sort-by-market-cap": t.isSortByMarketCap,
                            "show-balance": "",
                          },
                          on: {
                            selectCoin: function (e) {
                              return t.selectCoin(e);
                            },
                          },
                        })
                      : t._e(),
                    t._v(" "),
                    !t.isBuyCrypto && t.isCoinDropdown && t.isChangeCoin
                      ? a("ExchangeCoinDropdown", {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: t.outsideClick,
                              expression: "outsideClick",
                            },
                          ],
                          attrs: {
                            coins: t.availableCoins,
                            filters: t.filters,
                            "new-tag-coins": t.newTagCoins,
                            "active-filter": t.activeFilter,
                          },
                          on: {
                            selectCoin: function (e) {
                              return t.selectCoin(e);
                            },
                            changeActiveFilter: t.changeActiveFilter,
                          },
                        })
                      : t._e(),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ]);
        },
        i = [];
    },
    5400: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      a(857);
      var i = a(68),
        s = a(4),
        o = a(855),
        r = a(399),
        c = a(60),
        l = a(375),
        d = n(a(2969)),
        u = n(a(4509)),
        p = n(a(5388)),
        h = n(a(3335));
      const v = 200,
        m = "USD",
        b = "btc",
        f = 500,
        x = [
          "quoteId",
          "paymentId",
          "orderId",
          "userId",
          "cookieUaid",
          "coockieSession",
          "totalFiatAmount",
          "requestedCoinAmount",
        ],
        g = "accept::terms::simplex",
        y = "Subscription for pair is currently unavailable",
        _ = [40401, 40430];
      e.default = {
        name: "SimplexExchange",
        components: {
          EditAmount: d.default,
          ChangeIcon: u.default,
          ExchangeCoin: p.default,
          AtomicCheckbox: h.default,
          CashbackInfo: () => a.e(405).then(a.bind(null, 5778)),
          FiatDropdownV2: () => a.e(382).then(a.bind(null, 11586)),
          CashbackPromotion: () => a.e(59).then(a.bind(null, 6973)),
        },
        mixins: [l.CashbackMixin],
        data: () => ({
          selectedCoinToReceive: b,
          selectedCoinToReceiveId: b,
          selectedFiatToSend: m,
          requestedFiatAmount: "" + v,
          totalFiatAmount: "",
          requestedCoinAmount: "...",
          amountError: "",
          userId: void 0,
          quoteId: void 0,
          paymentId: void 0,
          orderId: void 0,
          cookieUaid: void 0,
          cookieSession: void 0,
          isFiatDropdown: !1,
          isFiatLoading: !1,
          loadingSimplexForm: !1,
          requestToken: null,
          exchangeSettings: null,
          checkboxValue: !1,
          isCheckbox: !0,
          updateEstimationTimerID: null,
          errorMessage: "",
          subscriptionMin: "",
          subscriptionMax: "",
          isSubscriptionPurchase: !1,
        }),
        computed: {
          ...(0, c.mapGetters)(["coinRate"]),
          availableCurrencies() {
            try {
              return this.simplex.getAvailableWallets();
            } catch {
              return [];
            }
          },
          cashbackParams() {
            return {
              amount: this.requestedCoinAmount,
              wallet: this.coinToReceive,
            };
          },
          isButtonAccepted() {
            return (
              Number(this.requestedCoinAmount) &&
              Number(this.requestedFiatAmount) &&
              !this.isFiatLoading &&
              !this.loadingSimplexForm
            );
          },
          coinToReceive() {
            return this.$wallets.getWallet(
              this.selectedCoinToReceiveId,
              "atomic",
            );
          },
          coinSendAddress() {
            return this.coinToReceive.address;
          },
          hasFiatRate() {
            return Object.keys(this.$buy.settings.fiats).includes(
              this.fiatRate,
            );
          },
          simplexTransaction() {
            const t =
                this.estimatedCashback > 0 && this.isMember
                  ? this.estimatedCashback
                  : 0,
              e = {
                buyParams: {
                  paymentId: this.paymentId,
                  quoteId: this.quoteId,
                  atomicId: this.$wallets.hash,
                  status: "Attempt",
                  fromCurrency: this.selectedFiatToSend,
                  toCurrency: this.coinToReceive.ticker,
                  amountSend: this.requestedFiatAmount,
                  amountReceive: this.requestedCoinAmount,
                  payoutAddress: this.coinSendAddress,
                },
                cashbackParams: {
                  atomicId: this.$wallets.hash,
                  bnbAddress: this.$wallets.getWallet("BNB").address,
                  ethAddress: this.$wallets.getWallet("ETH").address,
                  expectedCashbackAmount: t,
                  expectedCashbackAmountRate: String(
                    this.$rates.convertToUSD(t, "AWC", "USD"),
                  ),
                  awcBep2Balance: this.awcBalance,
                  awcBep2Rate: String(
                    this.coinRate(
                      "USD",
                      this.$wallets.getWallet(
                        "e1326549e8ba36b606d8cec00d930139",
                      ),
                    ).rate,
                  ),
                  exchangeService: "Simplex",
                  platform: `${this.appConfig.platform} ${this.appConfig.version}`,
                  walletVersion: this.appConfig.version,
                },
              };
            return e;
          },
          isCoinDisabled() {
            var t;
            return !i.CoinRestrictionPolicy.isAllowed(
              null === (t = this.selectedCoinToReceive) || void 0 === t
                ? void 0
                : t.toUpperCase(),
              i.ACTION_BUY,
            );
          },
          exchangePair() {
            return {
              from: {
                type: r.CurrencyType.Fiat,
                ticker: this.selectedFiatToSend,
                amount: this.requestedFiatAmount,
              },
              to: {
                type: r.CurrencyType.Asset,
                ticker: this.$isToken(this.coinToReceive)
                  ? this.coinToReceive.ticker
                  : this.coinToReceive.id,
                network: this.$isToken(this.coinToReceive)
                  ? this.coinToReceive.network
                  : null,
                address: this.coinSendAddress,
              },
            };
          },
        },
        watch: {
          async isSubscriptionPurchase() {
            await this.updateEstimation();
          },
          async selectedFiatToSend(t, e) {
            t !== e &&
              (await this.updateExchangeSettings(),
              await this.updateEstimation());
          },
          fiatRate(t) {
            this.selectedFiatToSend = this.hasFiatRate ? t : m;
          },
          userId(t) {
            this.setUserID(t);
          },
          async requestedFiatAmount(t, e) {
            t !== e && (await this.updateEstimation());
          },
        },
        async beforeMount() {
          ((this.simplex = new o.Simplex(this.$buy.settings.simplexApiUrl)),
            await this.updateExchangeSettings());
        },
        async mounted() {
          localStorage.getItem(g) &&
            ((this.isCheckbox = !1), (this.checkboxValue = !0));
          const t = localStorage.getItem("simplex::receiveCoinId");
          if (
            (this.$route.params.value &&
              (this.requestedFiatAmount = Math.max(
                this.$route.params.value,
                v,
              ).toString()),
            this.$route.params.walletToReceive)
          ) {
            const t = this.$wallets.getWallet(
              this.$route.params.walletToReceive,
            );
            ((this.selectedCoinToReceiveId = t.id),
              (this.selectedCoinToReceive = t.ticker));
          } else
            t && "undefined" !== t
              ? ((this.selectedCoinToReceive = localStorage.getItem(
                  "simplex::receiveCoin",
                )),
                (this.selectedCoinToReceiveId = t))
              : ((this.selectedCoinToReceive = b),
                (this.selectedCoinToReceiveId = b));
          ((this.selectedFiatToSend = (this.hasFiatRate && this.fiatRate) || m),
            await this.updateEstimation());
        },
        methods: {
          ...(0, c.mapActions)([
            "setUserID",
            "setSimplexSession",
            "setSimplexNewTransaction",
          ]),
          async updateEstimation() {
            ((this.errorMessage = ""),
              this.updateEstimationTimerID &&
                clearTimeout(this.updateEstimationTimerID),
              (this.updateEstimationTimerID = setTimeout(async () => {
                if (this.isSubscriptionPurchase)
                  return (
                    await this.setSubscriptionMinMax(),
                    void (
                      this.errorMessage ||
                      (this.validationAmount(), await this.getCoinPrice())
                    )
                  );
                (this.validationAmount(), await this.getCoinPrice());
              }, f)));
          },
          async getSubsciptionEstimation() {
            try {
              const { to: t } = await o.exchangerV2.getEstimation({
                ...this.exchangePair,
                provider: r.ProviderName.Guardarian,
              });
              return t.amount;
            } catch (t) {
              this.errorMessage = y;
            }
          },
          async setSubscriptionMinMax() {
            ((this.isFiatLoading = !0),
              (this.requestedCoinAmount = "..."),
              (this.errorMessage = ""));
            try {
              const {
                from: { min: t, max: e },
              } = await o.exchangerV2.getMinMax({
                ...this.exchangePair,
                provider: r.ProviderName.Guardarian,
              });
              ((this.subscriptionMin = t), (this.subscriptionMax = e));
            } catch (t) {
              ((this.errorMessage = y),
                (this.subscriptionMin = ""),
                (this.subscriptionMax = ""),
                (this.amountError = ""));
            } finally {
              this.isFiatLoading = !1;
            }
          },
          async getSubscribtionUrl() {
            try {
              const { checkoutUrl: t } = await o.exchangerV2.createSubscription(
                this.exchangePair,
              );
              return t;
            } catch (t) {
              this.errorMessage = t.response.data.message;
            }
          },
          getCoinDisabilityReason() {
            var t;
            return i.CoinRestrictionPolicy.getMessage(
              null === (t = this.selectedCoinToReceive) || void 0 === t
                ? void 0
                : t.toUpperCase(),
              i.ACTION_BUY,
            );
          },
          async updateExchangeSettings() {
            ((this.exchangeSettings = await this.$buy.getSettings(
              this.selectedFiatToSend,
            )),
              (this.requestedFiatAmount = String(
                +(this.exchangeSettings.default || this.exchangeSettings.min),
              )));
          },
          onInput(t) {
            ((this.requestedFiatAmount = t),
              (this.isFiatLoading = !0),
              this.updateEstimation());
          },
          async selectForReceive(t) {
            ((this.isFiatLoading = !0),
              (this.selectedCoinToReceive = t.ticker),
              (this.selectedCoinToReceiveId = t.id),
              localStorage.setItem("simplex::receiveCoin", t.ticker),
              localStorage.setItem("simplex::receiveCoinId", t.id),
              await this.updateEstimation());
          },
          toggleFiatDropdown(t) {
            (t.stopPropagation(), (this.isFiatDropdown = !this.isFiatDropdown));
          },
          selectFiat(t) {
            ((this.isFiatLoading = !0),
              (this.selectedFiatToSend = t.code),
              (this.isFiatDropdown = !1));
          },
          validationAmount() {
            this.amountError = "";
            let {
              min: t,
              max: e,
              char: a,
            } = Object.values(this.$buy.settings.fiats).find(
              (t) => t.code === this.selectedFiatToSend,
            );
            (this.isSubscriptionPurchase &&
              ((t = this.subscriptionMin), (e = this.subscriptionMax)),
              +this.requestedFiatAmount < +t
                ? (this.amountError = `Minimum order amount is ${a}${t}`)
                : +this.requestedFiatAmount > +e &&
                  (this.amountError = `Maximum amount is ${a}${e}`));
          },
          setExchangeInfo(t) {
            t.token === this.requestToken &&
              x.forEach((e) => {
                Object.prototype.hasOwnProperty.call(t, e) && (this[e] = t[e]);
              });
          },
          clearExchangeInfo() {
            x.forEach((t) => {
              Object.prototype.hasOwnProperty.call(this, t) &&
                (this[t] = void 0);
            });
          },
          async getCoinPrice() {
            if (
              ((this.requestedCoinAmount = "..."),
              (this.isFiatLoading = !0),
              this.amountError)
            )
              this.isFiatLoading = !1;
            else {
              this.requestToken = Math.random().toString(36).substring(2, 15);
              try {
                if (this.isSubscriptionPurchase)
                  return void (this.requestedCoinAmount =
                    await this.getSubsciptionEstimation());
                const t = await this.simplex.getExchangeRate(
                  this.selectedFiatToSend,
                  this.coinToReceive,
                  this.requestedFiatAmount,
                  this.$wallets.hash,
                  this.requestToken,
                );
                this.setExchangeInfo(t);
              } catch (t) {
                if (_.includes(null === t || void 0 === t ? void 0 : t.code))
                  return void (this.errorMessage = this.$t(
                    "region_is_not_supported",
                  ));
                this.errorMessage = this.$t("pair_is_unavailable");
              } finally {
                this.isFiatLoading = !1;
              }
            }
          },
          hideAcceptTerms() {
            ((this.isCheckbox = !1),
              (this.checkboxValue = !0),
              localStorage.setItem(g, "1"));
          },
          async submitSimplexForm() {
            if (
              ((this.loadingSimplexForm = !0),
              this.amountError || this.errorMessage)
            )
              return void (this.loadingSimplexForm = !1);
            if (this.isSubscriptionPurchase) {
              try {
                const t = await this.getSubscribtionUrl();
                t &&
                  (this.$router.push({
                    name: "guardarian-webview-tab",
                    query: { checkoutUrl: t },
                  }),
                  this.hideAcceptTerms());
              } catch (i) {
                (console.error(i), (this.errorMessage = y));
              }
              return;
            }
            (this.$ga.event("User Actions", "Create Simplex Swap Tx", {
              clientID: this.$ga.customParams.uid,
            }),
              this.hideAcceptTerms(),
              await this.$wallets.activateWallet(this.coinToReceive));
            const { ip: t, geo: e } = await (0, s.getGeo)(),
              { paymentRequestPayload: a, submitRequestPayload: n } =
                await this.simplex.createExchangeTransaction({
                  userId: this.userId,
                  quoteId: this.quoteId,
                  paymentId: this.paymentId,
                  orderId: this.orderId,
                  cookieSession: this.cookieSession,
                  cookieUaid: this.cookieUaid,
                  fiatTicker: this.selectedFiatToSend,
                  fiatAmount: this.requestedFiatAmount,
                  coinAmount: this.requestedCoinAmount,
                  coinAddress: this.coinSendAddress,
                  coin: this.coinToReceive,
                  ip: t,
                  geo: e,
                });
            try {
              const t = await this.simplex.makeExchange({
                paymentRequestPayload: a,
                submitRequestPayload: n,
              });
              (this.setSimplexSession(t),
                this.setSimplexNewTransaction(this.simplexTransaction),
                this.$ga.event("User Actions", "Swap fiat", {
                  clientID: this.$ga.customParams.uid,
                }),
                this.$router.push("/simplex/webview"),
                this.clearExchangeInfo());
            } catch (i) {
              throw i;
            } finally {
              this.loadingSimplexForm = !1;
            }
          },
          openExternal() {
            this.$electron.openExternal(
              "https://atomicwallet.io/terms-of-service",
            );
          },
        },
      };
    },
    8890: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "inner-exchange" },
            [
              a(
                "div",
                { staticClass: "exchange-block" },
                [
                  a("div", { staticClass: "block-wrapper" }, [
                    a("div", { staticClass: "coin-block" }, [
                      a("div", { staticClass: "flex justify-center center" }, [
                        a(
                          "div",
                          {
                            staticClass: "coin-icon",
                            on: { click: t.toggleFiatDropdown },
                          },
                          [
                            a("AtomicFlagIcon", {
                              attrs: { "flag-code": t.selectedFiatToSend },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      t._v(" "),
                      a(
                        "div",
                        { staticClass: "flex-wrapper" },
                        [
                          a("edit-amount", {
                            attrs: {
                              "model-value": t.requestedFiatAmount,
                              error: t.amountError,
                              "is-exchange": "",
                              type: "text",
                            },
                            on: { "update:modelValue": t.onInput },
                          }),
                          t._v(" "),
                          a(
                            "div",
                            { staticClass: "coinname fiat" },
                            [
                              a(
                                "span",
                                { on: { click: t.toggleFiatDropdown } },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(t.selectedFiatToSend) +
                                      "\n            ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              t.isFiatDropdown
                                ? a("fiat-dropdown-v2", {
                                    directives: [
                                      {
                                        name: "click-outside",
                                        rawName: "v-click-outside",
                                        value: t.toggleFiatDropdown,
                                        expression: "toggleFiatDropdown",
                                      },
                                    ],
                                    class: { visible: t.isFiatDropdown },
                                    attrs: {
                                      "avaliable-fiats": Object.values(
                                        t.$buy.settings.fiats,
                                      ),
                                    },
                                    on: { selectFiatCoin: t.selectFiat },
                                  })
                                : t._e(),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  a("change-icon", { staticClass: "no-hover" }),
                  t._v(" "),
                  a(
                    "div",
                    { staticClass: "block-wrapper" },
                    [
                      a("exchange-coin", {
                        attrs: {
                          amount: t.requestedCoinAmount,
                          coin: t.coinToReceive,
                          currencies: t.availableCurrencies,
                          icon: t.$iconClass(t.coinToReceive),
                          readonly: "",
                          "is-buy-crypto": "",
                          "selected-coin": t.selectedCoinToReceive,
                        },
                        on: { selectCoin: t.selectForReceive },
                      }),
                      t._v(" "),
                      a(
                        "transition",
                        { attrs: { name: "fade" } },
                        [
                          Number(t.estimatedCashback) > 0
                            ? a("cashback-info", {
                                attrs: {
                                  "estimated-cashback": t.estimatedCashback,
                                },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t._v(" "),
              a(
                "div",
                { staticClass: "error-wrapper" },
                [
                  a("transition", { attrs: { name: "fade" } }, [
                    t.errorMessage
                      ? a("div", { staticClass: "flex justify-center" }, [
                          a("span", { staticClass: "new-text-red2" }, [
                            t._v(" " + t._s(t.errorMessage) + " "),
                          ]),
                        ])
                      : t.isCoinDisabled
                        ? a("div", { staticClass: "flex justify-center" }, [
                            a("span", { staticClass: "text-red" }, [
                              t._v(
                                "\n          " +
                                  t._s(t.getCoinDisabilityReason()) +
                                  "\n        ",
                              ),
                            ]),
                          ])
                        : t._e(),
                  ]),
                ],
                1,
              ),
              t._v(" "),
              a("div", { staticClass: "exchange-rate" }, [
                a("div", [
                  a("p", [
                    t._v(
                      "\n        " +
                        t._s(
                          t.$t("simplexPage.includedFee", {
                            fee: t.exchangeSettings && t.exchangeSettings.fee,
                            fiatToSend: t.selectedFiatToSend.toUpperCase(),
                          }),
                        ) +
                        "\n      ",
                    ),
                  ]),
                  t._v(" "),
                  a("p", [t._v(t._s(t.$t("simplexPage.averageDeliveryTime")))]),
                ]),
              ]),
              t._v(" "),
              a("div", { staticClass: "submit-wrapper" }, [
                a(
                  "div",
                  [
                    t.isCheckbox
                      ? a(
                          "atomic-checkbox",
                          {
                            staticClass: "m-b-15",
                            attrs: { "model-value": t.checkboxValue },
                            on: {
                              "update:modelValue": function (e) {
                                t.checkboxValue = e;
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("message.accept")) +
                                "\n        ",
                            ),
                            a(
                              "a",
                              {
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(),
                                      e.stopPropagation(),
                                      t.openExternal.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [t._v(" Terms of Service ")],
                            ),
                          ],
                        )
                      : t._e(),
                  ],
                  1,
                ),
                t._v(" "),
                a(
                  "button",
                  {
                    staticClass: "button shadow",
                    class: {
                      accepted: !t.isCoinDisabled && t.isButtonAccepted,
                      disabled:
                        !t.checkboxValue || t.errorMessage || t.isCoinDisabled,
                    },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.submitSimplexForm.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [t._v("\n      " + t._s(t.$t("button.continue")) + "\n    ")],
                ),
              ]),
              t._v(" "),
              t._m(0),
              t._v(" "),
              t.isMember ? t._e() : a("cashback-promotion"),
            ],
            1,
          );
        },
        i = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "exchange-purchase" }, [
              n("img", { attrs: { src: a(927) } }),
              t._v(" "),
              n("img", { attrs: { src: a(925) } }),
            ]);
          },
        ];
    },
  },
]);
