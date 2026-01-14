(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [267],
  {
    2735: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5297),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(8797),
        s = n(5);
      function l(e) {
        n(8446);
      }
      var c = !1,
        d = l,
        p = null,
        u = null,
        f = Object(s["a"])(i.a, r["a"], r["b"], c, d, p, u);
      t["default"] = f.exports;
    },
    3e3: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "AtomicSearch",
        props: {
          modelValue: { type: String, default: "" },
          placeholder: {
            type: String,
            default() {
              return this.$t("input.search");
            },
          },
          noTopClear: { type: Boolean, default: !1 },
        },
        computed: {
          searchInput: {
            get() {
              return this.modelValue;
            },
            set(e) {
              this.$debounce(() => {
                this.$emit("update:modelValue", e);
              }, 250);
            },
          },
        },
      };
    },
    3348: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(3e3),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(3443),
        s = n(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        u = Object(s["a"])(i.a, r["a"], r["b"], l, c, d, p);
      t["default"] = u.exports;
    },
    3443: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "search" }, [
            n("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: e.searchInput,
                  expression: "searchInput",
                },
              ],
              attrs: {
                placeholder: e.placeholder,
                type: "text",
                "data-test-id": "wallet_search_coin",
              },
              domProps: { value: e.searchInput },
              on: {
                input: function (t) {
                  t.target.composing || (e.searchInput = t.target.value);
                },
              },
            }),
            e._v(" "),
            e.searchInput
              ? n(
                  "span",
                  {
                    class: ["clear", e.noTopClear && "clear_noTop"],
                    attrs: { id: "search_clear" },
                    on: {
                      click: function (t) {
                        return e.$emit("update:modelValue", "");
                      },
                    },
                  },
                  [e._v("\n    ✕\n  ")],
                )
              : e._e(),
          ]);
        },
        i = [];
    },
    3799: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "FilterButton",
        props: {
          active: { type: Boolean, default: !1 },
          highlight: { type: Boolean, default: !1 },
        },
      };
    },
    5297: function (e, t, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(60),
        o = a(n(8448));
      t.default = {
        name: "MainPage",
        components: {
          TableCoins: o.default,
          AddCustomTokenOrCoinTabs: () => n.e(247).then(n.bind(null, 11551)),
        },
        data() {
          return { isPopupAddNewTokenOrCoin: !1 };
        },
        computed: {
          ...(0, i.mapGetters)([
            "fiatRate",
            "isUpdatingFiat",
            "alwaysExcludedCoins",
          ]),
        },
        beforeMount() {
          if (!localStorage.getItem("WALLET_EXCLUDED_COINS")) {
            const e = this.$wallets.getHiddenWallets(),
              t = e
                .map((e) => {
                  let { id: t } = e;
                  return t;
                })
                .concat(this.alwaysExcludedCoins);
            this.setWalletExcludedCoins(t);
          }
          (this.$wallets.initUpdateBalances(),
            this.$wallets.initUpdateTransactions(),
            this.$wallets.initUpdateNft());
        },
        methods: {
          ...(0, i.mapActions)(["setWalletExcludedCoins"]),
          openPopupAddNewTokenOrCoin() {
            this.isPopupAddNewTokenOrCoin = !0;
          },
          closePopupAddNewTokenOrCoin() {
            this.isPopupAddNewTokenOrCoin = !1;
          },
        },
      };
    },
    5298: function (e, t, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = a(n(831)),
        o = a(n(232)),
        r = n(60),
        s = n(68),
        l = n(375),
        c = a(n(6269)),
        d = a(n(3189)),
        p = a(n(3348)),
        u = a(n(5344)),
        f = a(n(8792)),
        m = a(n(8794)),
        h = n(233),
        g = n(400),
        v = a(n(829)),
        x = n(833);
      const b = () => n.e(30).then(n.bind(null, 5758)),
        w = () => n.e(44).then(n.bind(null, 6968)),
        y = () => n.e(52).then(n.bind(null, 6969)),
        k = () => n.e(56).then(n.bind(null, 6970)),
        C = () => n.e(323).then(n.bind(null, 11571)),
        _ = () => n.e(324).then(n.bind(null, 5767)),
        S = "marketCap",
        z = 4,
        P = 6,
        T = 40,
        O = 1e3;
      t.default = {
        name: "TableCoins",
        components: {
          Coin: c.default,
          TableItems: d.default,
          Search: p.default,
          CoinInfo: w,
          SendCoin: y,
          ReceiveCoin: k,
          FilterPopup: _,
          AtomicBanner: b,
          WalletWizard: C,
          FilterButton: u.default,
          RefreshButton: f.default,
          EmptySearchResult: m.default,
        },
        mixins: [l.WalletsTables],
        data() {
          return {
            activeSortField: S,
            wasSortingByUserAction: !1,
            isSortASC: !1,
            searchText: "",
            isFiltersPopup: !1,
            hideZero: !1,
            excludedFields: ["name", "controls", "chart"],
            resendParams: null,
            page: 1,
          };
        },
        computed: {
          ...(0, r.mapGetters)([
            "fiatRate",
            "coinRate",
            "walletsNotify",
            "balanceSummary",
            "walletsState",
            "walletExcludedCoins",
            "defaultExcludedCoins",
          ]),
          tableFields() {
            return [
              { key: "name", slot: "header-row-1" },
              { key: "balance", title: this.$t("tableHeaders.balance") },
              { key: "value", title: this.$t("tableHeaders.value") },
              { key: "price", title: this.$t("tableHeaders.price") },
              { key: "change", title: this.$t("tableHeaders.change") },
              { key: "portfolio", title: this.$t("tableHeaders.portfolio") },
              { key: "marketCap", title: this.$t("tableHeaders.marketCap") },
              { key: "chart", title: this.$t("tableHeaders.chart") },
              { key: "controls", slot: "header-row-2" },
            ];
          },
          onePercentOfSummary() {
            const e = localStorage.getItem(this.fiatRate + "-fiatBalance"),
              t = this.balanceSummary(this.fiatRate);
            return new o.default(t || e).dividedBy(100).toNumber() || 1;
          },
          wallets() {
            const e = this.searchText.toLowerCase().trim();
            return this.walletsState
              .reduce((e, t) => {
                var n;
                let { id: a } = t,
                  i = 0,
                  r = 0;
                const l = this.$wallets.getWallet(a);
                if (!l) return e;
                const {
                    name: c,
                    ticker: d,
                    isToken: p = l instanceof s.Token,
                    contract: u,
                    confirmed: f,
                    fiatBalance: m,
                    divisibleBalance: h,
                    imgUri: g,
                  } = l,
                  {
                    rate: x,
                    change: b = 0,
                    marketCap: w = 0,
                  } = this.coinRate(this.fiatRate, l),
                  y = l.deprecatedParent,
                  k = localStorage.getItem(a + "-balance"),
                  C = +(null !== (n = null !== h && void 0 !== h ? h : k) &&
                  void 0 !== n
                    ? n
                    : 0);
                if (C > 0) {
                  var _, S;
                  const e = localStorage.getItem(`cache::${a}-balance-fiat`),
                    t =
                      null !==
                        (_ =
                          null !== (S = null !== m && void 0 !== m ? m : e) &&
                          void 0 !== S
                            ? S
                            : C * x) && void 0 !== _
                        ? _
                        : 0;
                  ((i = (0, v.default)(t, this.fiatRate, 1)),
                    (r = this.fixedBalance(C)),
                    localStorage.setItem(a + "-balance", C),
                    localStorage.setItem(`cache::${a}-balance-fiat`, t));
                }
                const z = new o.default(i)
                    .dividedBy(this.onePercentOfSummary)
                    .toString(),
                  P = (0, v.default)(x, this.fiatRate);
                return (
                  e.push({
                    id: a,
                    rate: x,
                    name: c,
                    value: i,
                    price: P,
                    parent: y,
                    ticker: d,
                    imgUri: g,
                    change: b,
                    balance: C,
                    isToken: p,
                    contract: u,
                    marketCap: w,
                    portfolio: z,
                    confirmed: f,
                    fiatBalance: m,
                    fixedBalance: r,
                  }),
                  e
                );
              }, [])
              .filter((t) => {
                let { balance: n, ticker: a, name: i, id: o } = t;
                const r =
                    !(e.length > 0) ||
                    -1 !== a.toLowerCase().indexOf(e) ||
                    -1 !== i.toLowerCase().indexOf(e),
                  s = !this.walletExcludedCoins.includes(o);
                return s && r && !(this.hideZero && 0 === n);
              });
          },
          sortedWallets() {
            const e = this.isSortASC ? "asc" : "desc",
              t = JSON.parse(localStorage.getItem(x.NOTIFY_NEW_POINT_WALLETS));
            return (0, i.default)(this.wallets)[e]((e) => {
              if (!this.wasSortingByUserAction) {
                const n = this.checkFilteringNotify(e);
                if (n && t.includes(e.id))
                  return this.isSortASC
                    ? -g.HACK_SORT_VALUE
                    : g.HACK_SORT_VALUE;
              }
              return 0 !== e.rate && e.confirmed
                ? Number(e[this.activeSortField])
                : this.isSortASC
                  ? g.HACK_SORT_VALUE
                  : -g.HACK_SORT_VALUE;
            });
          },
          banner() {
            return this.$store.state.Banner.banner;
          },
          highlight() {
            const e = this.defaultExcludedCoins.slice().sort().join(),
              t = this.walletExcludedCoins.slice().sort().join();
            return e !== t && this.walletExcludedCoins.length > 0;
          },
          coinListForSettings() {
            const e = this.$wallets
              .list()
              .filter((e) => !h.DISABLED_COINS.includes(e.deprecatedParent))
              .sort((e, t) => e.ticker.localeCompare(t.ticker));
            return e;
          },
          itemsToShow() {
            var e;
            return null !== (e = this.sortedWallets) && void 0 !== e && e.length
              ? this.sortedWallets.slice(0, T * this.page)
              : [];
          },
          isAllItemsVisible() {
            return this.page === this.totalPages;
          },
          totalPages() {
            var e;
            return null !== (e = this.sortedWallets) && void 0 !== e && e.length
              ? Math.ceil(this.sortedWallets.length / T)
              : 1;
          },
        },
        watch: {
          $route: {
            handler(e) {
              let t = null;
              ([
                "main-coin-id-receive",
                "main-coin-id-info",
                "main-coin-id-send",
              ].includes(e.name) && (t = this.$wallets.getWallet(e.params.id)),
                "main-coin-id-receive" === e.name
                  ? this.toggleReceiveCoinPopup(t)
                  : "main-coin-id-info" === e.name
                    ? this.toggleCoinInfoPopup(t)
                    : "main-coin-id-send" === e.name &&
                      this.toggleSendCoinPopup(t, e.params.tx));
            },
            immediate: !0,
          },
        },
        created() {
          const e = localStorage.getItem("activeSortField");
          (e && (this.wasSortingByUserAction = !0),
            (this.activeSortField = e || S),
            (this.hideZero =
              "true" === localStorage.getItem("hidezero::filter")));
        },
        mounted() {
          this.$emitter.emit("save::wallets");
        },
        methods: {
          ...(0, r.mapActions)([
            "toggleWizardWindow",
            "setWalletExcludedCoins",
            "disableDefaultExcludedCoins",
            "closeBanner",
          ]),
          checkScrollPosition(e) {
            this.$debounce(() => {
              if (this.isAllItemsVisible) return;
              const {
                scrollHeight: t,
                clientHeight: n,
                scrollTop: a,
              } = e.target;
              t - (a + n) < O && this.page++;
            }, 300);
          },
          handleOpenAddNewTokenOrCoin() {
            this.$emit("handleOpenAddNewTokenOrCoin");
          },
          infoClose() {
            (this.closeCoinInfoPopup(),
              this.$router.push({ name: "main-page" }));
          },
          fixedBalance(e) {
            return Number(e > 1 ? e.toFixed(z) : e.toFixed(P));
          },
          checkFilteringNotify(e) {
            const t = `${e.ticker.split("-").join("")}-${e.parent && e.parent !== e.ticker ? e.parent : ""}`,
              n = "walletTableTickerInfo-" + t;
            return this.walletsNotify.includes(n);
          },
          handleBannerNavigate(e) {
            let { type: t, url: n, page: a, action: i } = e;
            if ("main" === a) {
              const e = ["receive", "info"],
                n = this.$wallets.getWallet(i);
              e.includes(t) &&
                ("receive" === t
                  ? this.toggleReceiveCoinPopup(n)
                  : "info" === t && this.toggleCoinInfoPopup(n));
            } else this.$router.push(n);
          },
          acceptFilter(e) {
            let { coins: t, hideZero: n } = e;
            (this.disableDefaultExcludedCoins(),
              this.setWalletExcludedCoins(t),
              this.toggleFiltersPopup(),
              (this.hideZero = n),
              localStorage.setItem("hidezero::filter", this.hideZero));
          },
          toggleFiltersPopup() {
            this.isFiltersPopup = !this.isFiltersPopup;
          },
          toggleWizard(e) {
            this.toggleWizardWindow(e);
          },
          sortByField(e) {
            this.excludedFields.includes(e) ||
              ((this.wasSortingByUserAction = !0),
              this.activeSortField === e
                ? (this.isSortASC = !this.isSortASC)
                : ((this.activeSortField = e),
                  (this.isSortASC = !1),
                  localStorage.setItem("activeSortField", e)));
          },
        },
      };
    },
    5344: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(3799),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(5345),
        s = n(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        u = Object(s["a"])(i.a, r["a"], r["b"], l, c, d, p);
      t["default"] = u.exports;
    },
    5345: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            {
              staticClass: "filter-button",
              class: { active: e.active, highlight: e.highlight },
              attrs: { "data-test-id": "wallet_filter_button" },
              on: {
                click: function (t) {
                  return e.$emit("click");
                },
              },
            },
            [n("i"), n("i"), n("i")],
          );
        },
        i = [];
    },
    5346: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const a = 3e3;
      t.default = {
        name: "RefreshButton",
        data() {
          return { isLoading: !1, updateBalancesTimeoutID: null };
        },
        beforeDestroy() {
          clearTimeout(this.updateBalancesTimeoutID);
        },
        methods: {
          async updateBalances() {
            ((this.isLoading = !0),
              this.updateBalancesTimeoutID &&
                clearTimeout(this.updateBalancesTimeoutID),
              this.$ga.event("User Actions", "Update balance", {
                clientID: this.$ga.customParams.uid,
              }),
              (this.updateBalancesTimeoutID = setTimeout(async () => {
                (await this.$wallets.updateBalances(), (this.isLoading = !1));
              }, a)));
          },
        },
      };
    },
    5347: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "EmptySearchResult",
        props: {
          title: { type: String, required: !0 },
          description: { type: String, required: !0 },
          buttonText: { type: String, default: "" },
        },
        emits: ["buttonClick"],
        methods: {
          handleButtonClick() {
            this.$emit("buttonClick");
          },
        },
      };
    },
    8446: function (e, t, n) {
      var a = n(8447);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals));
      var i = n(23).default;
      i("ccf27422", a, !0, {});
    },
    8447: function (e, t, n) {
      ((t = e.exports = n(22)(!1)),
        t.push([
          e.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.eos-wizard{text-align:center\n}\n.eos-wizard .icon{font-size:45px;margin-top:30px\n}\n.eos-wizard .header{margin:15px 0 70px;display:block\n}\n.eos-wizard .header .title{font-size:24px;margin:auto\n}\n.eos-wizard .header .subtitle{color:#e8eef7;font-size:14px;margin-top:15px\n}\n.eos-wizard .step-1{max-width:250px;margin:0 auto;transition:opacity .3s\n}\n.eos-wizard .step-1 p{color:#8290ad;padding-top:10px;line-height:1.1;font-size:13px;text-align:left\n}\n.eos-wizard .step-1 button{margin-top:10px;border-bottom:1px dashed;border-radius:0\n}\n.eos-wizard .step-1.disabled{pointer-events:none;opacity:.5\n}\n.eos-wizard .step-1 .button-instruction{margin:30px -50px\n}\n.eos-wizard .step-2{width:400px;margin:-30px auto 0;word-break:break-all\n}\n.eos-wizard .step-2 p{color:#8290ad;font-size:14px;line-height:16px;margin-bottom:5px\n}\n.eos-wizard .step-2 p.name{color:#fff;cursor:pointer;font-size:20px;line-height:24px;margin-bottom:30px\n}\n.eos-wizard .step-2 p.notify{padding:0\n}\n.eos-wizard .footer{position:absolute;bottom:60px;left:50%;transform:translateX(-50%)\n}\n.eos-wizard .footer.above{bottom:75px\n}\n.eos-wizard .footer p{font-size:11px;color:#8290ad;margin:10px 0\n}\n.eos-wizard .footer .loader{width:45px;height:45px;top:-8%;left:31%\n}\n.eos-wizard .footer .button{font-size:12px;text-transform:uppercase;transition:all .3s\n}\n.eos-wizard .footer .button.disabled{pointer-events:none;opacity:0\n}\n.eos-wizard .message{bottom:250px;top:auto\n}\n.main-coins{height:100vh;position:initial;height:100vh;background:#1f2843;position:relative\n}\n.main-coins .connection-notify{position:absolute;bottom:0;width:100%;right:0;height:40px;background:#1f8efa;text-align:center;line-height:40px\n}\n.main-coins .control-table{position:absolute;top:10px;right:20px;z-index:1\n}\n.main-coins .control-table .add-token{margin-top:15px;transform:translate(0, 0);border-radius:100%;width:24px;height:24px;font-size:20px;background:rgba(0,0,0,0);text-align:center;cursor:pointer;display:block;border:2px solid #8290ad;color:#8290ad;transition:all .3s;line-height:20px;user-select:none\n}\n.main-coins .control-table .add-token:hover{color:#fff;border-color:#fff\n}\n.main-coins .control-table .refresh-btn{width:24px;height:24px;margin-top:15px;transition:all .3s;cursor:pointer;user-select:none;color:#8290ad;background:#8290ad;font-size:24px\n}\n.main-coins .control-table .refresh-btn:hover{color:#e8eef7;background:#fff\n}\n.main-coins .control-table .refresh-btn--updating{color:rgba(0,0,0,0);animation:spinner 1s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);cursor:default;background:#1f8efa\n}\n.actions{height:0;display:flex;flex-direction:column;align-items:flex-end;position:relative;z-index:10;gap:10px;margin-right:19px\n}",
          "",
        ]));
    },
    8448: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5298),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(8796),
        s = n(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        u = Object(s["a"])(i.a, r["a"], r["b"], l, c, d, p);
      t["default"] = u.exports;
    },
    8792: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5346),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(8793),
        s = n(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        u = Object(s["a"])(i.a, r["a"], r["b"], l, c, d, p);
      t["default"] = u.exports;
    },
    8793: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", {
            staticClass: "refresh-btn icon-refresh",
            class: { "refresh-btn--updating": e.isLoading },
            attrs: { "data-test-id": "wallet_refresh_button" },
            on: { click: e.updateBalances },
          });
        },
        i = [];
    },
    8794: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5347),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      var r = n(8795),
        s = n(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        u = Object(s["a"])(i.a, r["a"], r["b"], l, c, d, p);
      t["default"] = u.exports;
    },
    8795: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "empty-search" }, [
            e._m(0),
            e._v(" "),
            n("h3", { staticClass: "empty-search__title" }, [
              e._v(e._s(e.title)),
            ]),
            e._v(" "),
            n("p", { staticClass: "empty-search__description new-text-gray" }, [
              e._v(e._s(e.description)),
            ]),
            e._v(" "),
            e.buttonText
              ? n(
                  "button",
                  {
                    staticClass: "button uppercase",
                    on: { click: e.handleButtonClick },
                  },
                  [e._v("\n    " + e._s(e.buttonText) + "\n  ")],
                )
              : e._e(),
          ]);
        },
        i = [
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("div", { staticClass: "empty-search__icon" }, [
              a("img", { attrs: { src: n(884) } }),
            ]);
          },
        ];
    },
    8796: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "main-coins" },
            [
              e.banner
                ? n("atomic-banner", {
                    staticStyle: { padding: "10px" },
                    attrs: {
                      link: e.banner.desktopLink,
                      button: e.banner.button,
                      "is-can-close": e.banner.closeButtonVisible,
                      img: e.banner.pictureUrl,
                      title: e.banner.title,
                      text: e.banner.text,
                    },
                    on: {
                      navigate: e.handleBannerNavigate,
                      close: e.closeBanner,
                    },
                  })
                : e._e(),
              e._v(" "),
              e.showReceiveCoinPopup || e.showCoinInfoPopup
                ? e._e()
                : n(
                    "div",
                    {
                      staticClass: "scroll-list2 wallet-table",
                      on: {
                        "&scroll": function (t) {
                          return e.checkScrollPosition.apply(null, arguments);
                        },
                      },
                    },
                    [
                      n("search", {
                        staticClass: "table-search-fix",
                        attrs: { "model-value": e.searchText },
                        on: {
                          "update:modelValue": function (t) {
                            e.searchText = t;
                          },
                        },
                      }),
                      e._v(" "),
                      n(
                        "table-items",
                        {
                          attrs: {
                            "active-sort-field": e.activeSortField,
                            "excluded-fields": e.excludedFields,
                            header: e.tableFields,
                            "is-empty": !1,
                            "is-sort-a-s-c": e.isSortASC,
                            "is-sortable": !0,
                            items: e.sortedWallets,
                            "space-between": !0,
                            "is-main": !0,
                          },
                          on: { sortByField: e.sortByField },
                        },
                        [
                          n("template", { slot: "header-row-2" }, [
                            n(
                              "div",
                              { staticClass: "control-table" },
                              [
                                n("filter-button", {
                                  attrs: { highlight: e.highlight },
                                  on: { click: e.toggleFiltersPopup },
                                }),
                                e._v(" "),
                                n("refresh-button"),
                                e._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "add-token",
                                    on: {
                                      click: e.handleOpenAddNewTokenOrCoin,
                                    },
                                  },
                                  [e._v("\n            +\n          ")],
                                ),
                              ],
                              1,
                            ),
                          ]),
                          e._v(" "),
                          e.itemsToShow.length || (!e.searchText && !e.hideZero)
                            ? e._e()
                            : n("empty-search-result", {
                                attrs: {
                                  slot: "empty",
                                  title: e.$t("emptyState.title"),
                                  description: e.$t("emptyState.description"),
                                  "button-text": e.$t("emptyState.buttonText"),
                                  "data-test-id": "wallet_custom_token",
                                },
                                on: { buttonClick: e.toggleFiltersPopup },
                                slot: "empty",
                              }),
                          e._v(" "),
                          e._l(e.itemsToShow, function (t) {
                            return n("coin", {
                              key: "coin-" + t.id + "-" + t.ticker,
                              ref: t.ticker + "-" + t.deprecatedParent,
                              refInFor: !0,
                              attrs: {
                                slot: "table-rows",
                                coin: t,
                                "data-test-id": "main_coins",
                              },
                              on: {
                                toggleCoinInfoPopup: e.toggleCoinInfoPopup,
                              },
                              slot: "table-rows",
                            });
                          }),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
              e._v(" "),
              e.showCoinInfoPopup
                ? n("coin-info", {
                    key: "coinInfo",
                    attrs: { coin: e.activeCoin },
                    on: {
                      closePopup: e.infoClose,
                      changeCoin: e.changeActiveCoin,
                      toggleReceiveCoin: e.toggleReceiveCoinPopup,
                      toggleSendCoin: e.toggleSendCoinPopup,
                    },
                  })
                : e._e(),
              e._v(" "),
              e.showSendCoinPopup
                ? n("send-coin", {
                    key: "sendCoin-" + e.activeCoin.id,
                    attrs: { coin: e.activeCoin, "tx-params": e.resendParams },
                    on: {
                      changeCoin: e.changeActiveCoin,
                      closePopup: e.closeSendCoinPopup,
                    },
                  })
                : e._e(),
              e._v(" "),
              e.showReceiveCoinPopup
                ? n("receive-coin", {
                    key: "receiveCoin",
                    attrs: { coin: e.activeCoin },
                    on: {
                      changeCoin: e.changeActiveCoin,
                      closePopup: e.closeReceiveCoinPopup,
                    },
                  })
                : e._e(),
              e._v(" "),
              e.walletWizard
                ? n("wallet-wizard", {
                    attrs: { coin: e.walletWizard },
                    on: { toggleWizard: e.toggleWizard },
                  })
                : e._e(),
              e._v(" "),
              e.isFiltersPopup
                ? n("filter-popup", {
                    attrs: { coins: e.coinListForSettings, module: "wallet" },
                    on: {
                      acceptFilter: e.acceptFilter,
                      close: e.toggleFiltersPopup,
                    },
                  })
                : e._e(),
            ],
            1,
          );
        },
        i = [];
    },
    8797: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "main",
            [
              n(
                "KeepAlive",
                { attrs: { max: "5" } },
                [
                  n("TableCoins", {
                    on: {
                      handleOpenAddNewTokenOrCoin: e.openPopupAddNewTokenOrCoin,
                    },
                  }),
                ],
                1,
              ),
              e._v(" "),
              e.isPopupAddNewTokenOrCoin
                ? n("AddCustomTokenOrCoinTabs", {
                    on: { close: e.closePopupAddNewTokenOrCoin },
                  })
                : e._e(),
            ],
            1,
          );
        },
        i = [];
    },
  },
]);
