(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [322, 407],
  {
    2958: function (a, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png";
      t.default = {
        props: { uri: { type: String, required: !0 } },
        data() {
          return { isLoaded: !1, isError: !1 };
        },
        computed: {
          formattedSrc() {
            return this.isError ? n : this.uri;
          },
        },
      };
    },
    2999: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(2958),
        d = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var i = e(3346),
        o = e(5);
      function s(a) {
        e(3343);
      }
      var c = !1,
        l = s,
        v = "data-v-1dc165ba",
        p = null,
        f = Object(o["a"])(d.a, i["a"], i["b"], c, l, v, p);
      t["default"] = f.exports;
    },
    3129: function (a, t, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var d = e(60),
        r = e(68),
        i = n(e(2999)),
        o = n(e(821)),
        s = n(e(834)),
        c = n(e(798));
      const l = 4,
        v = 6;
      t.default = {
        name: "CoinDropdown",
        components: { MemesImage: i.default, TokenTag: o.default },
        props: {
          coins: { type: Array, default: () => [] },
          showBalance: { type: Boolean, default: !1 },
          isSortByMarketCap: { type: Boolean, default: !1 },
          enableSort: { type: Boolean, default: !0 },
          isSwowTags: { type: Boolean, default: !0 },
          isShowExchangeTags: { type: Boolean, default: !1 },
          isShowSimplexTags: { type: Boolean, default: !1 },
        },
        data: () => ({ filter: "" }),
        computed: {
          ...(0, d.mapGetters)(["fiatRate", "coinRate"]),
          filteredCoins() {
            const a = this.filter.toLowerCase().trim(),
              t = this.coins.filter((t) => {
                let { isDisabled: e, name: n, ticker: d } = t;
                return (
                  !e &&
                  (n.toLowerCase().includes(a) || d.toLowerCase().includes(a))
                );
              });
            return this.enableSort
              ? this.isSortByMarketCap
                ? t.sort(this.sortByMarketCap)
                : t.sort(this.sortByAvailableBalance)
              : t;
          },
          currentCoin() {
            const a = "undefined" !== typeof this.coins[this.current],
              t = a ? this.coins[this.current] : this.tokens[this.current];
            return ((t.img = this.icon(t.icon)), t);
          },
        },
        mounted() {
          this.$refs.coinDropdown.focus();
        },
        methods: {
          formatMiddleAmount: s.default,
          formatFinance: c.default,
          selectCoin(a) {
            return (this.$emit("selectCoin", a), a);
          },
          sortByAvailableBalance(a, t) {
            return Number(t.fiatBalance) - Number(a.fiatBalance);
          },
          getTags(a) {
            if (!this.isSwowTags) return [];
            let t = [];
            const { settings: e } = this.$buy,
              n = this.isShowExchangeTags
                ? (null === e || void 0 === e ? void 0 : e.exchangesTags) || []
                : (null === e || void 0 === e ? void 0 : e.simplexTags) || [],
              d = n[a];
            return d || t;
          },
          sortByMarketCap(a, t) {
            const e = this.coinRate(this.fiatRate, a).marketCap || 0,
              n = this.coinRate(this.fiatRate, t).marketCap || 0;
            return n - e;
          },
          balance(a) {
            let { id: t, balances: e, divisibleBalance: n } = a;
            const d = localStorage.getItem(t + "-balance"),
              r = +(
                (null === e || void 0 === e ? void 0 : e.available) ||
                n ||
                d ||
                0
              );
            return +r.toFixed(r > 1 ? l : v);
          },
          isSkamToken(a) {
            return !a.confirmed && a instanceof r.Token;
          },
        },
      };
    },
    3343: function (a, t, e) {
      var n = e(3344);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var d = e(23).default;
      d("c4d8a054", n, !0, {});
    },
    3344: function (a, t, e) {
      t = a.exports = e(22)(!1);
      var n = e(385),
        d = n(e(3345));
      t.push([
        a.i,
        "\n@keyframes spinner-data-v-1dc165ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1dc165ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1dc165ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1dc165ba]{color:#6b963b\n}\n.text-red[data-v-1dc165ba]{color:#c03647\n}\n.text-gray[data-v-1dc165ba]{color:#8290ad\n}\n.text-blue[data-v-1dc165ba]{color:#00c2ff\n}\n.text-danger[data-v-1dc165ba]{color:#8c4545\n}\n.text-title[data-v-1dc165ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1dc165ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1dc165ba]{color:#f1b70b\n}\n.text-white[data-v-1dc165ba]{color:#fff\n}\n.text-bigger[data-v-1dc165ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1dc165ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1dc165ba]{font-size:14px\n}\n.text-middle-height[data-v-1dc165ba]{line-height:24px\n}\n.text-small[data-v-1dc165ba]{font-size:12px\n}\n.text-word-break[data-v-1dc165ba]{word-break:break-all\n}\n.text-right[data-v-1dc165ba]{text-align:right\n}\n.text-left[data-v-1dc165ba]{text-align:left\n}\n.text-line-middle[data-v-1dc165ba]{line-height:24px\n}\n.text-link[data-v-1dc165ba],.text-link-underline[data-v-1dc165ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1dc165ba]:hover,.text-link-underline[data-v-1dc165ba]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1dc165ba]{text-decoration:underline\n}\n.text-center[data-v-1dc165ba]{text-align:center\n}\n.text-pointer[data-v-1dc165ba]{cursor:pointer\n}\n.gap-10[data-v-1dc165ba]{gap:10px\n}\n.m-t-auto[data-v-1dc165ba]{margin-top:auto\n}\n.m-t-4[data-v-1dc165ba]{margin-top:4px\n}\n.m-t-5[data-v-1dc165ba]{margin-top:5px\n}\n.m-t-8[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-10[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-13[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-15[data-v-1dc165ba]{margin-top:15px\n}\n.m-t-16[data-v-1dc165ba]{margin-top:16px\n}\n.m-t-20[data-v-1dc165ba]{margin-top:20px\n}\n.m-t-24[data-v-1dc165ba]{margin-top:24px\n}\n.m-t-25[data-v-1dc165ba]{margin-top:25px\n}\n.m-t-26[data-v-1dc165ba]{margin-top:26px\n}\n.m-t-30[data-v-1dc165ba]{margin-top:30px\n}\n.m-t-35[data-v-1dc165ba]{margin-top:35px\n}\n.m-t-40[data-v-1dc165ba]{margin-top:40px\n}\n.m-t-45[data-v-1dc165ba]{margin-top:45px\n}\n.m-t-50[data-v-1dc165ba]{margin-top:50px\n}\n.m-t-60[data-v-1dc165ba]{margin-top:60px\n}\n.m-t-65[data-v-1dc165ba]{margin-top:65px\n}\n.m-t-80[data-v-1dc165ba]{margin-top:80px\n}\n.m-l-5[data-v-1dc165ba]{margin-left:5px\n}\n.m-l-10[data-v-1dc165ba]{margin-left:10px\n}\n.m-l-15[data-v-1dc165ba]{margin-left:15px\n}\n.m-l-20[data-v-1dc165ba]{margin-left:20px\n}\n.m-l-25[data-v-1dc165ba]{margin-left:25px\n}\n.m-l-30[data-v-1dc165ba]{margin-left:30px\n}\n.m-l-35[data-v-1dc165ba]{margin-left:35px\n}\n.m-r-5[data-v-1dc165ba]{margin-right:5px\n}\n.m-r-10[data-v-1dc165ba]{margin-right:10px\n}\n.m-r-15[data-v-1dc165ba]{margin-right:15px\n}\n.m-r-30[data-v-1dc165ba]{margin-right:30px\n}\n.m-b-5[data-v-1dc165ba]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1dc165ba]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1dc165ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1dc165ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1dc165ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1dc165ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1dc165ba]{padding-top:40px\n}\n.p-t-85[data-v-1dc165ba]{padding-top:85px !important\n}\n.hidden[data-v-1dc165ba]{opacity:0 !important\n}\n.relative[data-v-1dc165ba]{position:relative\n}\n.space-nowrap[data-v-1dc165ba]{white-space:nowrap\n}\n.uppercase[data-v-1dc165ba]{text-transform:uppercase\n}\n.lowercase[data-v-1dc165ba]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1dc165ba],.fade-leave-to[data-v-1dc165ba]{opacity:0\n}\n.fade-down-enter-active[data-v-1dc165ba],.fade-down-leave-active[data-v-1dc165ba],.fade-down-move[data-v-1dc165ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1dc165ba],.fade-down-enter-active[data-v-1dc165ba]{position:absolute !important\n}\n.fade-down-enter[data-v-1dc165ba],.fade-down-leave-to[data-v-1dc165ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1dc165ba],.scale-leave-active[data-v-1dc165ba],.scale-move[data-v-1dc165ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1dc165ba],.scale-leave-to[data-v-1dc165ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1dc165ba],.slide-leave-active[data-v-1dc165ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1dc165ba]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1dc165ba]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1dc165ba],.slide-leave[data-v-1dc165ba]{margin-bottom:0px\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1dc165ba],.slide-in-leave-active[data-v-1dc165ba]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1dc165ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1dc165ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1dc165ba],.page-fade-enter-active[data-v-1dc165ba]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1dc165ba],.page-fade-leave-to[data-v-1dc165ba],.page-fade-enter[data-v-1dc165ba]{opacity:0\n}\n.page-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.fade-out-leave-active[data-v-1dc165ba],.fade-out-enter-active[data-v-1dc165ba]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1dc165ba],.fade-out-leave-to[data-v-1dc165ba],.fade-out-enter[data-v-1dc165ba]{opacity:0\n}\n.fade-out-enter-to[data-v-1dc165ba]{opacity:1\n}\n.slide-down-enter-active[data-v-1dc165ba],.slide-down-leave-active[data-v-1dc165ba]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1dc165ba],.slide-down-enter[data-v-1dc165ba]{top:100%\n}\n.slide-down-leave[data-v-1dc165ba],.slide-down-enter-to[data-v-1dc165ba]{top:0%\n}\n.slide-out-enter-active[data-v-1dc165ba],.slide-out-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1dc165ba],.exchange-result.slide-out-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1dc165ba],.exchange-pending.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1dc165ba],.slide-left-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1dc165ba],.slide-right-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1dc165ba],.spin-down-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1dc165ba],.spin-up-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1dc165ba],.puff-out-leave-active[data-v-1dc165ba]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1dc165ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1dc165ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1dc165ba],.puff-out-enter-to[data-v-1dc165ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1dc165ba],.collapse-fade-enter-active[data-v-1dc165ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1dc165ba],.collapse-fade-leave-to[data-v-1dc165ba],.collapse-fade-enter[data-v-1dc165ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1dc165ba],.lazy-fade-enter-active[data-v-1dc165ba]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1dc165ba],.lazy-fade-leave-to[data-v-1dc165ba],.lazy-fade-enter[data-v-1dc165ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.image-with-placeholder[data-v-1dc165ba]{position:relative;width:100%;height:100%;background-size:cover;border-radius:999px;background-position:center;background-image:url(" +
          d +
          ")\n}\n.image-with-placeholder img[data-v-1dc165ba]{opacity:0;width:100%;height:100%;object-fit:cover;border-radius:999px;transition:opacity .1s ease\n}\n.image-with-placeholder img.loaded[data-v-1dc165ba]{opacity:1\n}",
        "",
      ]);
    },
    3345: function (a, t, e) {
      a.exports = e.p + "imgs/skeleton--static.png";
    },
    3346: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return d;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e(
            "div",
            { staticClass: "image-with-placeholder" },
            [
              e("sanitized-img", {
                class: { loaded: a.isLoaded },
                attrs: { src: a.formattedSrc },
                on: {
                  load: function (t) {
                    a.isLoaded = !0;
                  },
                  error: function (t) {
                    a.isError = !0;
                  },
                },
              }),
            ],
            1,
          );
        },
        d = [];
    },
    3628: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(3129),
        d = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var i = e(3859),
        o = e(5),
        s = !1,
        c = null,
        l = null,
        v = null,
        p = Object(o["a"])(d.a, i["a"], i["b"], s, c, l, v);
      t["default"] = p.exports;
    },
    3859: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return d;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e("div", { staticClass: "dropdown" }, [
            e("div", { staticClass: "search" }, [
              e("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: a.filter,
                    expression: "filter",
                  },
                ],
                ref: "coinDropdown",
                staticClass: "placeholder-white",
                attrs: {
                  "data-test-id": "send_searchcoin",
                  placeholder: a.$t("input.searchWithDots"),
                  type: "text",
                },
                domProps: { value: a.filter },
                on: {
                  input: function (t) {
                    t.target.composing || (a.filter = t.target.value);
                  },
                },
              }),
            ]),
            a._v(" "),
            e(
              "div",
              {
                staticClass: "scroll-area",
                attrs: { "data-test-id": "send_scrollcoin" },
              },
              [
                e(
                  "ul",
                  { staticClass: "search-select" },
                  [
                    0 === a.filteredCoins.length
                      ? e("li", { staticClass: "nocoins" }, [
                          e("span", [
                            a._v(" " + a._s(a.$t("message.noResults"))),
                          ]),
                        ])
                      : a._e(),
                    a._v(" "),
                    a._l(a.filteredCoins, function (t, n) {
                      return e(
                        "li",
                        {
                          key: t.id + n,
                          attrs: {
                            "data-test-id": "send_" + t.ticker.toLowerCase(),
                          },
                          on: {
                            click: function (e) {
                              return a.selectCoin(t);
                            },
                          },
                        },
                        [
                          t.imgUri
                            ? e("memes-image", {
                                staticClass: "coin-img coin-img_small",
                                attrs: { uri: t.imgUri },
                              })
                            : e("div", { class: a.$iconClass(t) }),
                          a._v(" "),
                          e(
                            "div",
                            { staticClass: "flex align-center" },
                            [
                              a.isSkamToken(t)
                                ? e("span", { staticClass: "skam-warning" }, [
                                    a._v(
                                      "\n            " +
                                        a._s(a.$t("unverified")) +
                                        "\n          ",
                                    ),
                                  ])
                                : a._e(),
                              a._v(" "),
                              e("span", [
                                a._v(
                                  "\n            " +
                                    a._s(t.ticker) +
                                    "\n          ",
                                ),
                              ]),
                              a._v(" "),
                              e("token-tag", { attrs: { wallet: t } }),
                              a._v(" "),
                              a._l(a.getTags(t.ticker), function (t) {
                                var n = t.tag,
                                  d = t.bgColor;
                                return e(
                                  "div",
                                  { key: n, staticClass: "tag small" },
                                  [
                                    e(
                                      "div",
                                      {
                                        class: "--" + n.toLowerCase(),
                                        style: { backgroundColor: d },
                                      },
                                      [
                                        a._v(
                                          "\n              " +
                                            a._s(n) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ],
                                );
                              }),
                            ],
                            2,
                          ),
                          a._v(" "),
                          a.showBalance
                            ? e("span", { staticClass: "balance" }, [
                                a._v(
                                  "\n          " +
                                    a._s(
                                      a.formatFinance(
                                        a.formatMiddleAmount(a.balance(t)),
                                      ),
                                    ) +
                                    "\n        ",
                                ),
                              ])
                            : a._e(),
                        ],
                        1,
                      );
                    }),
                  ],
                  2,
                ),
              ],
            ),
          ]);
        },
        d = [];
    },
  },
]);
