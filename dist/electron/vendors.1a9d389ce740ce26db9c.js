(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [333],
  {
    2736: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5348),
        r = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      var i = n(8802),
        l = n(5);
      function s(t) {
        n(8798);
      }
      var c = !1,
        p = s,
        d = null,
        f = null,
        u = Object(l["a"])(r.a, i["a"], i["b"], c, p, d, f);
      e["default"] = u.exports;
    },
    5348: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(n(831)),
        o = a(n(232)),
        i = n(60),
        l = n(68),
        s = n(375),
        c = a(n(6269)),
        p = a(n(3189)),
        d = a(n(8800)),
        f = n(400),
        u = a(n(829));
      const m = 2,
        h = 1.6;
      e.default = {
        name: "Portfolio",
        components: {
          Coin: c.default,
          TableItems: p.default,
          DonutChart: d.default,
          SendCoin: () => n.e(52).then(n.bind(null, 6969)),
          CoinInfo: () => n.e(44).then(n.bind(null, 6968)),
          ReceiveCoin: () => n.e(56).then(n.bind(null, 6970)),
          BuyBitcoin: () => n.e(58).then(n.bind(null, 6971)),
        },
        mixins: [s.WalletsTables],
        data() {
          return {
            activeSortField: "portfolio",
            isSortASC: !1,
            excludedFields: ["chart"],
          };
        },
        computed: {
          ...(0, i.mapGetters)(["walletsState", "walletExcludedCoins"]),
          header() {
            return [
              { key: "name", title: this.$t("tableHeaders.name") },
              { key: "balance", title: this.$t("tableHeaders.balance") },
              { key: "value", title: this.$t("tableHeaders.value") },
              { key: "price", title: this.$t("tableHeaders.price") },
              { key: "change", title: this.$t("tableHeaders.change") },
              { key: "portfolio", title: this.$t("tableHeaders.portfolio") },
              { key: "marketCap", title: this.$t("tableHeaders.marketCap") },
              { key: "chart", title: this.$t("tableHeaders.chart") },
            ];
          },
          filterWallets() {
            return this.walletsState.filter((t) => {
              let { divisibleBalance: e, ticker: n, id: a } = t;
              const r = this.walletExcludedCoins.includes(a),
                o = this.getCoinBalance(e, n, a);
              return !r && o > 0;
            });
          },
          walletsForTable() {
            var t;
            return (
              null !== (t = this.filterWallets) && void 0 !== t ? t : []
            ).map((t) => {
              var e;
              let { id: n } = t,
                a = 0,
                r = 0;
              const i = this.$wallets.getWallet(n),
                {
                  name: s,
                  ticker: c,
                  isToken: p = i instanceof l.Token,
                  contract: d,
                  confirmed: f,
                  fiatBalance: u,
                  divisibleBalance: h,
                  imgUri: v,
                } = i,
                {
                  rate: g,
                  change: x = 0,
                  marketCap: b = 0,
                } = this.coinRate(this.fiatRate, i),
                y = i.deprecatedParent,
                w = localStorage.getItem(n + "-balance"),
                k = +(null !== (e = null !== h && void 0 !== h ? h : w) &&
                void 0 !== e
                  ? e
                  : 0);
              if (k > 0) {
                var C, S;
                const t = localStorage.getItem(`cache::${n}-balance-fiat`),
                  e =
                    null !==
                      (C =
                        null !== (S = null !== u && void 0 !== u ? u : t) &&
                        void 0 !== S
                          ? S
                          : k * g) && void 0 !== C
                      ? C
                      : 0;
                ((a = this.formatFiat(e, this.fiatRate, 1)),
                  (r = this.fixedBalance(k)),
                  localStorage.setItem(n + "-balance", k),
                  localStorage.setItem(`cache::${n}-balance-fiat`, e));
              }
              const _ = new o.default(a)
                  .dividedBy(this.valueForOnePercent())
                  .toString(),
                P = this.formatFiat(g, this.fiatRate),
                $ = "" + this.$iconClass(i),
                F = 0 === g,
                B = this.chartDataTickerByZoom({ ticker: c }).data;
              return {
                id: n,
                rate: g,
                name: s,
                icon: $,
                value: a,
                price: P,
                parent: y,
                ticker: c,
                change: x,
                balance: k,
                isToken: p,
                contract: d,
                marketCap: b,
                portfolio: _,
                confirmed: f,
                chartData: B,
                fiatBalance: u,
                fixedBalance: r,
                isPlaceholder: F,
                fiatRate: this.fiatRate,
                portfolioToShow: Number(_ || 0).toString(m),
                deprecatedParent: y,
                imgUri: v,
              };
            });
          },
          sortedTableItems() {
            const t = this.walletsForTable.slice(),
              e = ["name"].includes(this.activeSortField);
            return this.isSortASC
              ? (0, r.default)(t).asc((t) =>
                  e
                    ? t[this.activeSortField]
                    : t.isPlaceholder
                      ? f.HACK_SORT_VALUE
                      : Number(t[this.activeSortField]),
                )
              : (0, r.default)(t).desc((t) =>
                  e
                    ? t[this.activeSortField]
                    : t.isPlaceholder
                      ? -f.HACK_SORT_VALUE
                      : Number(t[this.activeSortField]),
                );
          },
          chartData() {
            const t = (0, r.default)(this.walletsForTable)
                .asc((t) => Number(t.portfolio))
                .filter((t) => {
                  let { confirmed: e } = t;
                  return !!e;
                })
                .reverse(),
              {
                fiteredTableItems: e,
                otherPercents: n,
                otherBalance: a,
              } = this.filteredPortfolio(t),
              o = e.map((t) => {
                let {
                  name: e,
                  value: n,
                  ticker: a,
                  balance: r,
                  portfolio: o,
                  fixedBalance: i,
                  id: l,
                  contract: s,
                } = t;
                return {
                  name: e,
                  value: n,
                  ticker: a,
                  id: l,
                  balance: r,
                  portfolio: o,
                  fixedBalance: i,
                  contract: s,
                };
              });
            return (
              n > 0 &&
                o.push({
                  name: "Other",
                  value: a,
                  ticker: "",
                  balance: "",
                  portfolio: h,
                }),
              o
                .sort((t, e) => Number(t.portfolio) - Number(e.portfolio))
                .reverse()
            );
          },
        },
        methods: {
          formatFiat: u.default,
          filteredPortfolio(t) {
            const e = [];
            let n = 0,
              a = 0;
            return (
              t.forEach((t) => {
                Number(t.portfolio) < h
                  ? ((n += Number(t.portfolio)), (a += Number(t.value)))
                  : e.push(t);
              }),
              { fiteredTableItems: e, otherPercents: n, otherBalance: a }
            );
          },
          sortByField(t) {
            this.excludedFields.includes(t) ||
              (this.activeSortField === t
                ? (this.isSortASC = !this.isSortASC)
                : ((this.isSortASC = !0), (this.activeSortField = t)));
          },
        },
      };
    },
    5349: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = s(n(6271)),
        o = n(60),
        i = a(n(798)),
        l = a(n(829));
      function s(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            a = new WeakMap();
        return (s = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            o,
            i = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return i;
          if ((r = e ? a : n)) {
            if (r.has(t)) return r.get(t);
            r.set(t, i);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((o =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (o.get || o.set)
                ? r(i, n, o)
                : (i[n] = t[n]));
          return i;
        })(t, e);
      }
      const c = 400,
        p = 0.01,
        d = 8;
      e.default = {
        name: "DonutChart",
        props: { data: { type: Array, default: () => [] } },
        data: () => ({ svg: null }),
        computed: {
          ...(0, o.mapGetters)(["fiatRate", "fiatCharacter", "balanceSummary"]),
          portfolioBalance() {
            const t = this.getCacheFiatBalance(),
              e = (0, l.default)(
                this.balanceSummary(this.fiatRate),
                this.fiatRate,
              );
            return (0, i.default)(e || t);
          },
        },
        watch: {
          data: {
            handler(t, e) {
              t.length !== e.length &&
                this.$nextTick(() => {
                  this.updateChart();
                });
            },
            deep: !0,
          },
          portfolioBalance() {
            this.updateChart();
          },
        },
        mounted() {
          this.createChart();
        },
        methods: {
          getCacheFiatBalance() {
            const t = localStorage.getItem(this.fiatRate + "-fiatBalance");
            return "undefined" !== t && t ? t : null;
          },
          updateChart() {
            (this.svg && this.svg.remove(), this.createChart());
          },
          createChart() {
            if (!this.$refs.donutChart) return;
            const t = c,
              e = t / 2,
              { portfolioBalance: n, fiatCharacter: a, getCoinColor: o } = this,
              s = 3,
              f = 60,
              u = 200,
              m = r
                .arc()
                .innerRadius(e - d)
                .outerRadius(e),
              h = r
                .arc()
                .innerRadius(e - d - s)
                .outerRadius(e + s),
              v = r
                .arc()
                .innerRadius(e - d - f)
                .outerRadius(e),
              g = r
                .pie()
                .value((t) => {
                  let { portfolio: e } = t;
                  return e;
                })
                .sort(null)
                .padAngle(p);
            this.svg = r
              .select(this.$refs.donutChart)
              .append("svg")
              .attr("class", "pie")
              .attr("width", t)
              .attr("height", t);
            const x = this.svg
                .append("g")
                .attr("transform", `translate(${e}, ${e})`),
              b = (t / 2) * -1,
              y = `<p class="text-top">${a}${n}</p>`,
              w = x
                .append("svg:foreignObject")
                .attr("width", t)
                .attr("height", t)
                .attr("x", b)
                .attr("y", b)
                .append("xhtml:div")
                .attr("class", "donut-chart__info")
                .html(() => y),
              k = 1 === this.data.length && "100" === this.data[0].portfolio,
              C = function (t, e) {
                (void 0 === e && (e = !1),
                  r
                    .selectAll(".g-pie")
                    .transition()
                    .attr("style", e ? "opacity:0.5;" : "opacity:1;")
                    .duration(u));
                const n = r.select(t.parentNode);
                (n.transition().attr("style", "opacity:1;").duration(u),
                  n
                    .select(".g-pie-item")
                    .transition()
                    .attr("d", e && !k ? h : m)
                    .duration(u),
                  e || w.html(() => y));
              },
              S = (t) =>
                `<p class="text-top">${t}</p><p class="text-bottom text-gray">Other assets</p>`,
              _ = function (t, e) {
                void 0 === e && (e = null);
                const n = e
                  ? `class="text-bottom" style="color:${o(e)};"`
                  : 'class="text-top"';
                return `<p ${n}>${t}</p>`;
              },
              P = x
                .selectAll("path")
                .data(g(this.data))
                .enter()
                .append("g")
                .attr("class", "g-pie")
                .on("mouseover", function (t) {
                  let { data: e = null } = t;
                  const n = (0, i.default)(Number((0, l.default)(e.value))),
                    o = _(a + n),
                    s =
                      "Other" !== e.name
                        ? `${o}${_(`${e.balance} ${e.ticker}`, e.contract || e.id)}`
                        : "" + S(o);
                  (!k && r.select(this).style("cursor", "pointer"),
                    w.html(() => s));
                })
                .on("mouseout", function () {
                  r.select(this).style("cursor", "none");
                });
            (P.append("path")
              .attr("d", v)
              .attr("fill", "transparent")
              .on("mouseover", function () {
                C(this, !0);
              })
              .on("mouseout", function () {
                C(this, !1);
              }),
              P.append("path")
                .attr("class", "g-pie-item")
                .attr("d", m)
                .attr("fill", (t) => {
                  let { data: e = null } = t;
                  return k ? "#8290AD" : o(e.contract || e.id);
                })
                .on("mouseover", function () {
                  C(this, !0);
                })
                .on("mouseout", function () {
                  C(this, !1);
                }));
          },
          getCoinColor(t) {
            if (!t) return "#8290AD";
            const e = t.split("*")[0].toLowerCase(),
              n =
                document.querySelector(".icon.icon-" + e) ||
                document.querySelector(".icon");
            if (!n) return;
            const a = getComputedStyle(n)
                .getPropertyValue("background")
                .split("rgb"),
              r = "rgb" + a[2].split(")")[0] + ")";
            return r;
          },
        },
      };
    },
    8798: function (t, e, n) {
      var a = n(8799);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals));
      var r = n(23).default;
      r("16d7b138", a, !0, {});
    },
    8799: function (t, e, n) {
      ((e = t.exports = n(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.portfolio__loading{position:absolute;width:90px;height:90px;top:calc(50% - 45px);left:calc(50% - 45px)\n}",
          "",
        ]));
    },
    8800: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5349),
        r = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      var i = n(8801),
        l = n(5),
        s = !1,
        c = null,
        p = null,
        d = null,
        f = Object(l["a"])(r.a, i["a"], i["b"], s, c, p, d);
      e["default"] = f.exports;
    },
    8801: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { ref: "donutChart", staticClass: "donut-chart" });
        },
        r = [];
    },
    8802: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return r;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "main",
            { staticClass: "portfolio" },
            [
              t.chartData
                ? t.sortedTableItems.length
                  ? n(
                      "div",
                      { staticClass: "wallet-table scroll-list2" },
                      [
                        n("donut-chart", { attrs: { data: t.chartData } }),
                        t._v(" "),
                        n(
                          "table-items",
                          {
                            attrs: {
                              "active-sort-field": t.activeSortField,
                              "excluded-fields": t.excludedFields,
                              header: t.header,
                              "is-sort-a-s-c": t.isSortASC,
                              "is-empty": !1,
                              items: t.sortedTableItems,
                              "space-between": "",
                              "is-sortable": "",
                            },
                            on: { sortByField: t.sortByField },
                          },
                          t._l(t.sortedTableItems, function (e, a) {
                            return n("coin", {
                              key: a + "-coin-" + e.ticker,
                              ref: e.ticker + "-" + e.deprecatedParent,
                              refInFor: !0,
                              attrs: {
                                slot: "table-rows",
                                coin: e,
                                "is-portfolio": "",
                                "data-test-id": "portfolio_coin",
                              },
                              on: {
                                toggleCoinInfoPopup: t.toggleCoinInfoPopup,
                                changeCoin: t.changeActiveCoin,
                              },
                              slot: "table-rows",
                            });
                          }),
                          1,
                        ),
                      ],
                      1,
                    )
                  : n("buy-bitcoin", { attrs: { name: "portfolio" } })
                : n("div", { staticClass: "loading portfolio__loading" }),
              t._v(" "),
              t.showCoinInfoPopup
                ? n("coin-info", {
                    key: "coinInfo",
                    attrs: { coin: t.activeCoin },
                    on: {
                      closePopup: t.closeCoinInfoPopup,
                      changeCoin: t.changeActiveCoin,
                      toggleReceiveCoin: t.toggleReceiveCoinPopup,
                      toggleSendCoin: t.toggleSendCoinPopup,
                    },
                  })
                : t._e(),
              t._v(" "),
              t.showSendCoinPopup
                ? n("send-coin", {
                    key: "sendCoin",
                    attrs: { coin: t.activeCoin },
                    on: {
                      changeCoin: t.changeActiveCoin,
                      closePopup: t.closeSendCoinPopup,
                    },
                  })
                : t._e(),
              t._v(" "),
              t.showReceiveCoinPopup
                ? n("receive-coin", {
                    key: "receiveCoin",
                    attrs: { coin: t.activeCoin },
                    on: {
                      changeCoin: t.changeActiveCoin,
                      closePopup: t.closeReceiveCoinPopup,
                    },
                  })
                : t._e(),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
