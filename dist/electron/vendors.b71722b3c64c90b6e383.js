(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [406],
  {
    11693: function (t, a, i) {
      "use strict";
      i.r(a);
      var e = i(5827),
        n = i.n(e);
      for (var s in e)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(a, t, function () {
              return e[t];
            });
          })(s);
      var c = i(11694),
        o = i(5),
        r = !1,
        h = null,
        d = null,
        u = null,
        l = Object(o["a"])(n.a, c["a"], c["b"], r, h, d, u);
      a["default"] = l.exports;
    },
    11694: function (t, a, i) {
      "use strict";
      (i.d(a, "a", function () {
        return e;
      }),
        i.d(a, "b", function () {
          return n;
        }));
      var e = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i(
            "div",
            { staticClass: "chart-price" },
            [
              i("div", { staticClass: "about-coin" }, [
                i("div", { staticClass: "price" }, [
                  i("span", {
                    directives: [
                      {
                        name: "text-html",
                        rawName: "v-text-html",
                        value: t.fiatCharacter,
                        expression: "fiatCharacter",
                      },
                    ],
                    staticClass: "price",
                  }),
                  i("span", { staticClass: "price" }, [
                    t._v(
                      t._s(t.formatFinance(t.formatFiatBig(t.coinRates.rate))),
                    ),
                  ]),
                ]),
                t._v(" "),
                i(
                  "div",
                  {
                    staticClass: "change",
                    class: [
                      { "text-green": t.coinRates.change > 0 },
                      { "text-danger": t.coinRates.change < 0 },
                    ],
                  },
                  [
                    i("span", { staticClass: "text-gray" }, [t._v(" 24 H  ")]),
                    t._v(
                      "\n      " +
                        t._s(t.coinRates.change > 0 ? "+" : "") +
                        t._s(t.coinRates.change) +
                        "%\n    ",
                    ),
                  ],
                ),
              ]),
              t._v(" "),
              i("Chart", {
                attrs: {
                  coin: t.coin,
                  data: t.chartData.points,
                  dates: t.chartData.dates,
                  activeZoom: t.activeZoom,
                  isArea: "",
                  isAxis: "",
                  isLoading: !!t.isChartDataLoading[t.activeZoom],
                  "is-max-height": "",
                  isMaxWidth: "",
                  isMinMaxPoints: "",
                  isPriceChart: "",
                  isTooltip: "",
                  isYAxis: "",
                  isZoom: "",
                  zoomSettings: Object.keys(t.chartDataEndpoints),
                },
                on: { changeActiveData: t.handleChangeZoom },
              }),
            ],
            1,
          );
        },
        n = [];
    },
    5827: function (t, a, i) {
      "use strict";
      var e = i(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var n = i(60),
        s = e(i(6270)),
        c = e(i(6360)),
        o = e(i(798));
      a.default = {
        name: "ChartPrice",
        components: { Chart: s.default },
        props: { coin: { type: Object, default: null } },
        data() {
          return { activeZoom: null };
        },
        computed: {
          ...(0, n.mapGetters)([
            "fiatRate",
            "coinRate",
            "fiatCharacter",
            "chartDataTickerByZoom",
            "chartDataEndpoints",
            "chartDataMainEndpoint",
            "isChartDataLoading",
          ]),
          coinRates() {
            const { rate: t, change: a } = this.coinRate(
              this.fiatRate,
              this.coin,
            );
            return { change: a.toFixed(2), rate: t };
          },
          chartData() {
            return this.chartDataTickerByZoom({
              zoom: this.activeZoom,
              ticker: this.coin.ticker,
            });
          },
        },
        watch: {
          fiatRate() {
            this.activeZoom = this.chartDataMainEndpoint;
          },
          "coin.ticker"() {
            this.handleChangeZoom(this.chartDataMainEndpoint);
          },
        },
        created() {
          this.activeZoom = this.chartDataMainEndpoint;
        },
        methods: {
          ...(0, n.mapActions)(["updateChartData"]),
          formatFinance: o.default,
          formatFiatBig: c.default,
          async handleChangeZoom(t) {
            t === this.activeZoom ||
              this.isChartDataLoading[t] ||
              ((this.activeZoom = t),
              await this.updateChartData({
                zoom: t,
                ticker: this.coin.ticker,
              }));
          },
        },
      };
    },
  },
]);
