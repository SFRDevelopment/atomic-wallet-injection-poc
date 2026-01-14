(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [287, 324],
  {
    2958: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const n = "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png";
      e.default = {
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
    2999: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2958),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var d = a(3346),
        o = a(5);
      function r(t) {
        a(3343);
      }
      var c = !1,
        l = r,
        v = "data-v-1dc165ba",
        p = null,
        f = Object(o["a"])(i.a, d["a"], d["b"], c, l, v, p);
      e["default"] = f.exports;
    },
    3343: function (t, e, a) {
      var n = a(3344);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("c4d8a054", n, !0, {});
    },
    3344: function (t, e, a) {
      e = t.exports = a(22)(!1);
      var n = a(385),
        i = n(a(3345));
      e.push([
        t.i,
        "\n@keyframes spinner-data-v-1dc165ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1dc165ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1dc165ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1dc165ba]{color:#6b963b\n}\n.text-red[data-v-1dc165ba]{color:#c03647\n}\n.text-gray[data-v-1dc165ba]{color:#8290ad\n}\n.text-blue[data-v-1dc165ba]{color:#00c2ff\n}\n.text-danger[data-v-1dc165ba]{color:#8c4545\n}\n.text-title[data-v-1dc165ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1dc165ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1dc165ba]{color:#f1b70b\n}\n.text-white[data-v-1dc165ba]{color:#fff\n}\n.text-bigger[data-v-1dc165ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1dc165ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1dc165ba]{font-size:14px\n}\n.text-middle-height[data-v-1dc165ba]{line-height:24px\n}\n.text-small[data-v-1dc165ba]{font-size:12px\n}\n.text-word-break[data-v-1dc165ba]{word-break:break-all\n}\n.text-right[data-v-1dc165ba]{text-align:right\n}\n.text-left[data-v-1dc165ba]{text-align:left\n}\n.text-line-middle[data-v-1dc165ba]{line-height:24px\n}\n.text-link[data-v-1dc165ba],.text-link-underline[data-v-1dc165ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1dc165ba]:hover,.text-link-underline[data-v-1dc165ba]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1dc165ba]{text-decoration:underline\n}\n.text-center[data-v-1dc165ba]{text-align:center\n}\n.text-pointer[data-v-1dc165ba]{cursor:pointer\n}\n.gap-10[data-v-1dc165ba]{gap:10px\n}\n.m-t-auto[data-v-1dc165ba]{margin-top:auto\n}\n.m-t-4[data-v-1dc165ba]{margin-top:4px\n}\n.m-t-5[data-v-1dc165ba]{margin-top:5px\n}\n.m-t-8[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-10[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-13[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-15[data-v-1dc165ba]{margin-top:15px\n}\n.m-t-16[data-v-1dc165ba]{margin-top:16px\n}\n.m-t-20[data-v-1dc165ba]{margin-top:20px\n}\n.m-t-24[data-v-1dc165ba]{margin-top:24px\n}\n.m-t-25[data-v-1dc165ba]{margin-top:25px\n}\n.m-t-26[data-v-1dc165ba]{margin-top:26px\n}\n.m-t-30[data-v-1dc165ba]{margin-top:30px\n}\n.m-t-35[data-v-1dc165ba]{margin-top:35px\n}\n.m-t-40[data-v-1dc165ba]{margin-top:40px\n}\n.m-t-45[data-v-1dc165ba]{margin-top:45px\n}\n.m-t-50[data-v-1dc165ba]{margin-top:50px\n}\n.m-t-60[data-v-1dc165ba]{margin-top:60px\n}\n.m-t-65[data-v-1dc165ba]{margin-top:65px\n}\n.m-t-80[data-v-1dc165ba]{margin-top:80px\n}\n.m-l-5[data-v-1dc165ba]{margin-left:5px\n}\n.m-l-10[data-v-1dc165ba]{margin-left:10px\n}\n.m-l-15[data-v-1dc165ba]{margin-left:15px\n}\n.m-l-20[data-v-1dc165ba]{margin-left:20px\n}\n.m-l-25[data-v-1dc165ba]{margin-left:25px\n}\n.m-l-30[data-v-1dc165ba]{margin-left:30px\n}\n.m-l-35[data-v-1dc165ba]{margin-left:35px\n}\n.m-r-5[data-v-1dc165ba]{margin-right:5px\n}\n.m-r-10[data-v-1dc165ba]{margin-right:10px\n}\n.m-r-15[data-v-1dc165ba]{margin-right:15px\n}\n.m-r-30[data-v-1dc165ba]{margin-right:30px\n}\n.m-b-5[data-v-1dc165ba]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1dc165ba]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1dc165ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1dc165ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1dc165ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1dc165ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1dc165ba]{padding-top:40px\n}\n.p-t-85[data-v-1dc165ba]{padding-top:85px !important\n}\n.hidden[data-v-1dc165ba]{opacity:0 !important\n}\n.relative[data-v-1dc165ba]{position:relative\n}\n.space-nowrap[data-v-1dc165ba]{white-space:nowrap\n}\n.uppercase[data-v-1dc165ba]{text-transform:uppercase\n}\n.lowercase[data-v-1dc165ba]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1dc165ba],.fade-leave-to[data-v-1dc165ba]{opacity:0\n}\n.fade-down-enter-active[data-v-1dc165ba],.fade-down-leave-active[data-v-1dc165ba],.fade-down-move[data-v-1dc165ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1dc165ba],.fade-down-enter-active[data-v-1dc165ba]{position:absolute !important\n}\n.fade-down-enter[data-v-1dc165ba],.fade-down-leave-to[data-v-1dc165ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1dc165ba],.scale-leave-active[data-v-1dc165ba],.scale-move[data-v-1dc165ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1dc165ba],.scale-leave-to[data-v-1dc165ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1dc165ba],.slide-leave-active[data-v-1dc165ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1dc165ba]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1dc165ba]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1dc165ba],.slide-leave[data-v-1dc165ba]{margin-bottom:0px\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1dc165ba],.slide-in-leave-active[data-v-1dc165ba]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1dc165ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1dc165ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1dc165ba],.page-fade-enter-active[data-v-1dc165ba]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1dc165ba],.page-fade-leave-to[data-v-1dc165ba],.page-fade-enter[data-v-1dc165ba]{opacity:0\n}\n.page-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.fade-out-leave-active[data-v-1dc165ba],.fade-out-enter-active[data-v-1dc165ba]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1dc165ba],.fade-out-leave-to[data-v-1dc165ba],.fade-out-enter[data-v-1dc165ba]{opacity:0\n}\n.fade-out-enter-to[data-v-1dc165ba]{opacity:1\n}\n.slide-down-enter-active[data-v-1dc165ba],.slide-down-leave-active[data-v-1dc165ba]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1dc165ba],.slide-down-enter[data-v-1dc165ba]{top:100%\n}\n.slide-down-leave[data-v-1dc165ba],.slide-down-enter-to[data-v-1dc165ba]{top:0%\n}\n.slide-out-enter-active[data-v-1dc165ba],.slide-out-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1dc165ba],.exchange-result.slide-out-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1dc165ba],.exchange-pending.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1dc165ba],.slide-left-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1dc165ba],.slide-right-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1dc165ba],.spin-down-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1dc165ba],.spin-up-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1dc165ba],.puff-out-leave-active[data-v-1dc165ba]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1dc165ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1dc165ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1dc165ba],.puff-out-enter-to[data-v-1dc165ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1dc165ba],.collapse-fade-enter-active[data-v-1dc165ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1dc165ba],.collapse-fade-leave-to[data-v-1dc165ba],.collapse-fade-enter[data-v-1dc165ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1dc165ba],.lazy-fade-enter-active[data-v-1dc165ba]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1dc165ba],.lazy-fade-leave-to[data-v-1dc165ba],.lazy-fade-enter[data-v-1dc165ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.image-with-placeholder[data-v-1dc165ba]{position:relative;width:100%;height:100%;background-size:cover;border-radius:999px;background-position:center;background-image:url(" +
          i +
          ")\n}\n.image-with-placeholder img[data-v-1dc165ba]{opacity:0;width:100%;height:100%;object-fit:cover;border-radius:999px;transition:opacity .1s ease\n}\n.image-with-placeholder img.loaded[data-v-1dc165ba]{opacity:1\n}",
        "",
      ]);
    },
    3345: function (t, e, a) {
      t.exports = a.p + "imgs/skeleton--static.png";
    },
    3346: function (t, e, a) {
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
            { staticClass: "image-with-placeholder" },
            [
              a("sanitized-img", {
                class: { loaded: t.isLoaded },
                attrs: { src: t.formattedSrc },
                on: {
                  load: function (e) {
                    t.isLoaded = !0;
                  },
                  error: function (e) {
                    t.isError = !0;
                  },
                },
              }),
            ],
            1,
          );
        },
        i = [];
    },
    3860: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        s = a(233),
        d = n(a(5768)),
        o = n(a(5770)),
        r = n(a(3348)),
        c = a(68);
      e.default = {
        name: "FilterPopup",
        components: {
          Ticker: o.default,
          SwitchToggle: d.default,
          Search: r.default,
        },
        props: {
          coins: { type: Array, default: () => [] },
          module: { type: String, default: "" },
          directions: { type: Boolean, default: !1 },
        },
        data() {
          return {
            hideZero: !1,
            isCoinsHidden: !1,
            isTokensHidden: !1,
            selected: [],
            filter: "",
            directionOptions: [
              {
                text: this.$t("filterPopup.receivedTransaction"),
                value: "Received",
              },
              { text: this.$t("filterPopup.sentTransaction"), value: "Sent" },
            ],
            settingsSelectedDirection: [],
            settingsSelectedType: [],
            typeOptions: [s.HISTORY_TITLE_REGULAR, s.HISTORY_TITLE_BASIC],
            notificationsDisabled: localStorage.getItem(
              "settings::notifications::disabled",
            ),
          };
        },
        computed: {
          ...(0, i.mapGetters)([
            "historyExcludedDirections",
            "historyExcludedTypes",
            "walletExcludedCoins",
            "alwaysExcludedCoins",
            "historyExcludedCoins",
          ]),
          excludedCoins() {
            return this.module === s.WALLET_MODULE_NAME
              ? this.walletExcludedCoins
              : this.historyExcludedCoins;
          },
          toggleAllPlaceholder() {
            return this.isCoinsHidden || this.isTokensHidden || this.isAllHidden
              ? this.$t("filterPopup.showAll")
              : this.$t("filterPopup.hideAll");
          },
          coinsAndTokens() {
            if ("" !== this.filter) {
              const t = this.filter.toLowerCase();
              return this.coins.filter(
                (e) =>
                  -1 !== e.name.toLowerCase().indexOf(t) ||
                  -1 !== e.getUserTicker().toLowerCase().indexOf(t),
              );
            }
            return this.coins;
          },
          filteredCoins() {
            const t = [],
              e = [];
            return (
              this.coinsAndTokens.forEach((a) => {
                a instanceof c.Token ? e.push(a) : t.push(a);
              }),
              {
                coins: this.filterSimilarsByKey(t, "id"),
                tokens: this.filterSimilarsByKey(e, "id"),
              }
            );
          },
          isAllHidden() {
            return (
              this.selected.length >=
              this.coins.length + this.alwaysExcludedCoins.length
            );
          },
        },
        created() {
          ((this.isCoinsHidden =
            JSON.parse(localStorage.getItem("settings::hideCoins")) || !1),
            (this.isTokensHidden =
              JSON.parse(localStorage.getItem("settings::hideTokens")) || !1));
          const t =
            this.excludedCoins.length > 0 ? this.excludedCoins.slice() : [];
          this.selected = "string" === typeof t ? t.split(",") : t;
          const e = this.historyExcludedTypes.slice(),
            a = this.historyExcludedDirections.slice();
          ((this.settingsSelectedDirection =
            "string" === typeof a && a.length > 0 ? [a] : a),
            (this.settingsSelectedType =
              "string" === typeof e && e.length > 0 ? [e] : e));
        },
        async beforeMount() {
          this.hideZero = "true" === localStorage.getItem("hidezero::filter");
        },
        methods: {
          isCoinOrTokenHidden(t) {
            return (
              this.selected.includes(t.id) ||
              this.alwaysExcludedCoins.includes(t.id)
            );
          },
          toggleAll() {
            this.isAllHidden ||
            this.selected.filter((t) => !this.alwaysExcludedCoins.includes(t))
              .length > 0
              ? ((this.selected = [...this.alwaysExcludedCoins]),
                (this.isCoinsHidden = !1),
                (this.isTokensHidden = !1),
                (this.settingsSelectedType = []),
                (this.settingsSelectedDirection = []))
              : ((this.selected = [
                  ...this.alwaysExcludedCoins,
                  ...this.coins.map((t) => t.id),
                ]),
                (this.isTokensHidden = !0),
                (this.isCoinsHidden = !0),
                (this.settingsSelectedDirection = ["Received", "Sent"]));
          },
          toggleCoins() {
            this.isCoinsHidden
              ? ((this.isCoinsHidden = !1),
                this.coins.forEach((t) => {
                  t instanceof c.Token ||
                    this.alwaysExcludedCoins.includes(t.id) ||
                    (this.selected = this.selected.filter((e) => e !== t.id));
                }))
              : ((this.isCoinsHidden = !0),
                this.coins.forEach((t) => {
                  t instanceof c.Token || this.selected.push(t.id);
                }));
          },
          toggleTokens() {
            this.isTokensHidden
              ? ((this.isTokensHidden = !1),
                this.coins.forEach((t) => {
                  t instanceof c.Token &&
                    (this.selected = this.selected.filter((e) => e !== t.id));
                }))
              : ((this.isTokensHidden = !0),
                this.coins.forEach((t) => {
                  t instanceof c.Token && this.selected.push(t.id);
                }));
          },
          toggleSelectedDirection(t) {
            this.settingsSelectedDirection.includes(t)
              ? (this.settingsSelectedDirection =
                  this.settingsSelectedDirection.filter((e) => e !== t))
              : this.settingsSelectedDirection.push(t);
          },
          isHiddenDirection(t) {
            return this.settingsSelectedDirection.includes(t);
          },
          closeFilterPopup() {
            this.$emit("close");
          },
          disableNotify() {
            if (this.notificationsDisabled)
              return (
                localStorage.removeItem("settings::notifications::disabled"),
                void (this.notificationsDisabled = !1)
              );
            (localStorage.setItem("settings::notifications::disabled", !0),
              (this.notificationsDisabled = !0));
          },
          saveHiddenCoins() {
            (localStorage.setItem("settings::hideCoins", this.isCoinsHidden),
              localStorage.setItem("settings::hideTokens", this.isTokensHidden),
              this.$emit("acceptFilter", {
                types: this.settingsSelectedType,
                directions: this.settingsSelectedDirection,
                coins: this.selected,
                hideZero: this.hideZero,
              }));
          },
          toggleSelected(t) {
            if (this.alwaysExcludedCoins.includes(t.id)) return;
            const e = this.selected.findIndex((e) => e === t.id);
            e >= 0 ? this.selected.splice(e, 1) : this.selected.push(t.id);
          },
        },
      };
    },
    3861: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "SwitchToggle",
        props: { trigger: { type: Boolean, default: !1 } },
      };
    },
    3862: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(2999));
      e.default = {
        name: "Ticker",
        components: { MemesImage: i.default },
        props: {
          coin: { type: Object, default: () => ({}) },
          isHidden: { type: Boolean, default: !1 },
        },
      };
    },
    5767: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3860),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var d = a(5772),
        o = a(5),
        r = !1,
        c = null,
        l = null,
        v = null,
        p = Object(o["a"])(i.a, d["a"], d["b"], r, c, l, v);
      e["default"] = p.exports;
    },
    5768: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3861),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var d = a(5769),
        o = a(5),
        r = !1,
        c = null,
        l = null,
        v = null,
        p = Object(o["a"])(i.a, d["a"], d["b"], r, c, l, v);
      e["default"] = p.exports;
    },
    5769: function (t, e, a) {
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
            "span",
            {
              staticClass: "toggler",
              on: {
                click: function (e) {
                  return t.$emit("click");
                },
              },
            },
            [
              a("div", {
                staticClass: "switch",
                class: { active: !t.trigger },
              }),
            ],
          );
        },
        i = [];
    },
    5770: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3862),
        i = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      var d = a(5771),
        o = a(5),
        r = !1,
        c = null,
        l = null,
        v = null,
        p = Object(o["a"])(i.a, d["a"], d["b"], r, c, l, v);
      e["default"] = p.exports;
    },
    5771: function (t, e, a) {
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
            "li",
            { staticClass: "filter-ticker", class: { grey: t.isHidden } },
            [
              t.coin.imgUri
                ? a(
                    "div",
                    { staticClass: "icon-wrapper" },
                    [a("memes-image", { attrs: { uri: t.coin.imgUri } })],
                    1,
                  )
                : a("div", { class: t.$iconClass(t.coin) }),
              t._v(" "),
              a("span", [
                t._v("\n    " + t._s(t.coin.getUserTicker()) + "\n  "),
              ]),
            ],
          );
        },
        i = [];
    },
    5772: function (t, e, a) {
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
            n = t._self._c || e;
          return n(
            "transition",
            { attrs: { mode: "out-in", name: "page-fade", appear: "" } },
            [
              n("div", { staticClass: "filter-popup" }, [
                n("div", { staticClass: "top" }, [
                  n(
                    "div",
                    { staticClass: "flex-block" },
                    [
                      n("Search", {
                        attrs: { modelValue: t.filter },
                        on: {
                          "update:modelValue": function (e) {
                            t.filter = e;
                          },
                        },
                      }),
                      t._v(" "),
                      "wallet" === t.module
                        ? n(
                            "div",
                            {
                              staticClass: "filter-toggle",
                              class: { active: t.hideZero },
                              on: {
                                click: function (e) {
                                  t.hideZero = !t.hideZero;
                                },
                              },
                            },
                            [
                              n("span", [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.hideZero
                                        ? t.$t("filterPopup.showZeroBalance")
                                        : t.$t("filterPopup.hideZeroBalance"),
                                    ) +
                                    "\n          ",
                                ),
                              ]),
                              t._v(" "),
                              n("img", { attrs: { src: a(841) } }),
                            ],
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "div",
                        {
                          staticClass: "filter-toggle",
                          class: { active: t.notificationsDisabled },
                          on: { click: t.disableNotify },
                        },
                        [
                          n("span", [
                            t._v(
                              "\n            " +
                                t._s(t.$t("filterPopup.disableNotifications")) +
                                "\n          ",
                            ),
                          ]),
                          t._v(" "),
                          n("img", { attrs: { src: a(841) } }),
                        ],
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  n("div", { staticClass: "flex-block" }, [
                    n(
                      "span",
                      {
                        staticClass: "filter-link",
                        on: { click: t.toggleAll },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.toggleAllPlaceholder) +
                            "\n        ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    n(
                      "span",
                      {
                        staticClass: "filter-link",
                        on: { click: t.closeFilterPopup },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.$t("button.cancel")) +
                            "\n        ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    n(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { disabled: t.isAllHidden },
                        on: { click: t.saveHiddenCoins },
                      },
                      [
                        t._v(
                          "\n          " +
                            t._s(t.$t("button.apply")) +
                            "\n        ",
                        ),
                      ],
                    ),
                  ]),
                ]),
                t._v(" "),
                n("div", { staticClass: "list-wrapper" }, [
                  t.directions
                    ? n("div", { staticClass: "options" }, [
                        n(
                          "ul",
                          t._l(t.directionOptions, function (e) {
                            return n(
                              "li",
                              {
                                key: e.value,
                                class: { grey: t.isHiddenDirection(e.value) },
                                on: {
                                  click: function (a) {
                                    return t.toggleSelectedDirection(e.value);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(e.text) +
                                    "\n          ",
                                ),
                              ],
                            );
                          }),
                          0,
                        ),
                      ])
                    : t._e(),
                  t._v(" "),
                  0 === t.filteredCoins.coins.length &&
                  0 === t.filteredCoins.tokens.length &&
                  t.filter
                    ? n("div", { staticClass: "no-result" }, [
                        n("span", [
                          t._v(
                            "\n          " +
                              t._s(
                                t.$t("label.noResultsFound", {
                                  seatchText: t.filter,
                                }),
                              ) +
                              "\n        ",
                          ),
                        ]),
                      ])
                    : t._e(),
                  t._v(" "),
                  t.filteredCoins.coins.length > 0
                    ? n(
                        "ul",
                        { staticClass: "ticker-list" },
                        [
                          n(
                            "p",
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("filterPopup.coins")) +
                                  "\n          ",
                              ),
                              n("SwitchToggle", {
                                attrs: { trigger: t.isCoinsHidden },
                                on: { click: t.toggleCoins },
                              }),
                            ],
                            1,
                          ),
                          t._v(" "),
                          t._l(t.filteredCoins.coins, function (e, a) {
                            return n("Ticker", {
                              key: a + "-coin",
                              attrs: {
                                coin: e,
                                isHidden: t.isCoinOrTokenHidden(e),
                              },
                              nativeOn: {
                                click: function (a) {
                                  return t.toggleSelected(e);
                                },
                              },
                            });
                          }),
                        ],
                        2,
                      )
                    : t._e(),
                  t._v(" "),
                  t.filteredCoins.tokens.length > 0
                    ? n(
                        "ul",
                        { staticClass: "ticker-list" },
                        [
                          n(
                            "p",
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.$t("filterPopup.tokens")) +
                                  "\n          ",
                              ),
                              n("SwitchToggle", {
                                attrs: { trigger: t.isTokensHidden },
                                on: { click: t.toggleTokens },
                              }),
                            ],
                            1,
                          ),
                          t._v(" "),
                          t._l(t.filteredCoins.tokens, function (e, a) {
                            return n("Ticker", {
                              key: a + "-token",
                              attrs: {
                                coin: e,
                                isHidden: t.isCoinOrTokenHidden(e),
                              },
                              nativeOn: {
                                click: function (a) {
                                  return t.toggleSelected(e);
                                },
                              },
                            });
                          }),
                        ],
                        2,
                      )
                    : t._e(),
                ]),
              ]),
            ],
          );
        },
        i = [];
    },
  },
]);
