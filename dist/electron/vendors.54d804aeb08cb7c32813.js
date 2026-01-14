(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [310],
  {
    2748: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(5387),
        n = i.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(s);
      var o = i(8881),
        c = i(5),
        l = !1,
        r = null,
        d = null,
        h = null,
        u = Object(c["a"])(n.a, o["a"], o["b"], l, r, d, h);
      t["default"] = u.exports;
    },
    3349: function (e, t, i) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = { name: "ChangeIcon" };
    },
    3803: function (e, t, i) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = i(375);
      t.default = {
        name: "ExchangeCoin",
        components: {
          EditAmount: () => i.e(334).then(i.bind(null, 2969)),
          CoinDropdown: () => i.e(322).then(i.bind(null, 3628)),
        },
        mixins: [a.ExchangeMixin],
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
            const e = [];
            return (
              this.currencies.forEach((t) => {
                const i = this.$wallets.getWallet(t);
                if (i) {
                  const t = "EOS" !== i.ticker || i.activated;
                  t && e.push(i);
                }
              }),
              e
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
          async currencies(e, t) {
            e !== t && (await this.setExchangeData());
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
          changeActiveFilter(e) {
            this.activeFilter = e;
          },
          selectCoin(e) {
            ((this.isCoinDropdown = !1), this.$emit("selectCoin", e));
          },
          outsideClick() {
            this.isCoinDropdown = !1;
          },
          showCoinDropdown(e) {
            (e.stopPropagation(),
              this.isChangeCoin &&
                (this.isCoinDropdown = !this.isCoinDropdown));
          },
          setAmount(e) {
            this.$emit("setAmountToSend", e);
          },
        },
      };
    },
    4508: function (e, t, i) {
      "use strict";
      var a = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(i(850)),
        s = (e) => {
          const t = 9,
            i = 4;
          return (0, n.default)(e || "0", t, i);
        };
      t.default = s;
    },
    4509: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(3349),
        n = i.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(s);
      var o = i(4510),
        c = i(5),
        l = !1,
        r = null,
        d = null,
        h = null,
        u = Object(c["a"])(n.a, o["a"], o["b"], l, r, d, h);
      t["default"] = u.exports;
    },
    4510: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "change-icon",
              attrs: { "data-test-id": "change_coins" },
              on: {
                click: function (t) {
                  return e.$emit("clickAction");
                },
              },
            },
            [
              i("svg", { attrs: { fill: "none", viewBox: "0 0 35 16" } }, [
                i("path", {
                  attrs: {
                    d: "M1.67391 8H31.3261",
                    "stroke-linecap": "round",
                    "stroke-width": "3",
                  },
                }),
                e._v(" "),
                i("path", {
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
        n = [];
    },
    5387: function (e, t, i) {
      "use strict";
      var a = i(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = a(i(800)),
        s = i(60),
        o = i(68),
        c = i(375),
        l = a(i(4509)),
        r = a(i(5388)),
        d = i(233),
        h = a(i(829)),
        u = a(i(4508)),
        m = i(847);
      const v = "eth",
        T = "btc",
        g = 500,
        f = 1e4,
        S = 1,
        p = 6,
        C = 10,
        b = ["MATIC"],
        w = ["TRX"];
      t.default = {
        name: "ExchangeBasic",
        components: {
          ChangeIcon: l.default,
          ExchangeCoin: r.default,
          SendCoinResult: () => i.e(45).then(i.bind(null, 2922)),
          CashbackPromotion: () => i.e(59).then(i.bind(null, 6973)),
          ErrorPlain: () => i.e(60).then(i.bind(null, 6972)),
          CashbackInfo: () => i.e(363).then(i.bind(null, 5778)),
          AtomicCheckbox: () => i.e(381).then(i.bind(null, 3335)),
        },
        mixins: [c.ExchangeMixin, c.CashbackMixin],
        data: () => ({
          valid: { message: "", status: !0 },
          isBalanceLoading: !0,
          isNewCoinLoading: !0,
          amountToSend: "",
          amountToReceive: "...",
          availableBalance: "...",
          filteredCurrenciesExchange: [],
          minimalAmount: 0,
          validMinimalAmount: { message: "", status: !0 },
          loading: !1,
          selectedCoinToReceiveId: null,
          selectedCoinToSendId: null,
          amountToSendError: "",
          exchangeResult: {},
          currencies: [],
          isError: !1,
          feeToClaim: null,
          fetcher: null,
          pairRateInterval: null,
          feeParams: { fee: null, fiat: null, value: null, ticker: null },
          sentHash: "",
          isBuyCoin: !1,
          isCheckbox: !0,
          isMinMaxError: !1,
          checkboxValue: !1,
          isUpdatingAvailableBalance: !1,
        }),
        computed: {
          ...(0, s.mapGetters)(["currenciesExchange", "walletsState"]),
          feePrefix() {
            return d.FEE_PREFIX_IDS.includes(
              this.coinToSend.deprecatedParent,
            ) && this.$isToken(this.coinToSend)
              ? "~"
              : "";
          },
          largestValueWallet() {
            if (
              !this.walletsState.length ||
              !this.filteredCurrenciesExchange.length
            )
              return null;
            const e = this.walletsState.filter((e) =>
                this.filteredCurrenciesExchange.includes(e.id),
              ),
              t = e.reduce((e, t) => {
                const i = parseInt(e.fiatBalance, 10),
                  a = parseInt(t.fiatBalance, 10);
                return a > i ? t : e;
              });
            return t.fiatBalance ? t : null;
          },
          isActiveExchangeButton() {
            return (
              Number(this.amountToSend) > 0 &&
              this.valid.status &&
              this.validMinimalAmount.status &&
              "..." !== this.amountToReceive
            );
          },
          isExchangeDisabled() {
            return (
              !this.checkboxValue ||
              this.isCoinDisabled(this.coinToReceive) ||
              this.isCoinDisabled(this.coinToSend)
            );
          },
          coinToSend() {
            if (!this.selectedCoinToSendId) return null;
            const e = this.$wallets.getWallet(this.selectedCoinToSendId);
            return e || this.$wallets.getWallet(v);
          },
          coinToReceive() {
            if (!this.selectedCoinToReceiveId) return null;
            const e = this.$wallets.getWallet(this.selectedCoinToReceiveId);
            return e;
          },
          feeWallet() {
            var e;
            const t =
              null !== (e = this.coinToSend.feeTicker) && void 0 !== e
                ? e
                : this.coinToSend.deprecatedParent;
            return ["OP", "ARB"].includes(this.coinToSend.deprecatedParent)
              ? this.$wallets.getWallet(this.coinToSend.deprecatedParent)
              : this.$wallets.getWallet(t);
          },
          cashbackParams() {
            return { amount: this.amountToSend, wallet: this.coinToSend };
          },
          isHBARActivate() {
            return (
              ("HBAR" === this.coinToSend.id && !this.coinToSend.address) ||
              ("HBAR" === this.coinToReceive.id && !this.coinToReceive.address)
            );
          },
          exchangeRate() {
            return +this.amountToSend && +this.amountToReceive
              ? (n.default.config({ EXPONENTIAL_AT: [-20, 30] }),
                new n.default(this.amountToReceive)
                  .dividedBy(this.amountToSend)
                  .toString())
              : 0;
          },
        },
        watch: {
          async coinToSend(e, t) {
            e !== t && (await this.watchForCoins());
          },
          async coinToReceive(e, t) {
            e !== t && (await this.watchForCoins());
          },
          async largestValueWallet(e, t) {
            (null === e || void 0 === e ? void 0 : e.ticker) !==
              (null === t || void 0 === t ? void 0 : t.ticker) &&
              (this.initializeSetSelectedCoins(),
              await this.getAvailableBalance());
          },
        },
        created() {
          this.initializeSetSelectedCoins();
        },
        async beforeMount() {
          try {
            const e = await this.$exchanges.getAvailableWalletIdCollection(
              this.currenciesExchange,
              this.$wallets,
            );
            this.filteredCurrenciesExchange = e.filter(
              (e) => !d.DISABLED_COINS.includes(e),
            );
          } catch (e) {
            console.error(e);
          }
        },
        beforeDestroy() {
          (clearTimeout(this.fetcher), clearInterval(this.pairRateInterval));
        },
        async mounted() {
          (localStorage.getItem(d.ACCEPT_TERMS_STORAGE) &&
            ((this.isCheckbox = !1), (this.checkboxValue = !0)),
            await this.setMinimalAmount(),
            this.largestValueWallet || (await this.getAvailableBalance()));
        },
        methods: {
          ...(0, s.mapActions)(["updateExchangeTransactionsFromDB"]),
          formatBigAmount: u.default,
          formatFiat: h.default,
          initializeSetSelectedCoins() {
            const { coinToReceive: e, coinToSend: t } = this.$route.query;
            ((this.selectedCoinToReceiveId =
              e || localStorage.getItem("exchange::coin-to-receive-id") || T),
              (this.selectedCoinToSendId =
                t ||
                this.getSelectedCoinId(
                  localStorage.getItem("exchange::coin-to-send-id") || v,
                )));
          },
          getSelectedCoinId(e) {
            return this.largestValueWallet
              ? this.largestValueWallet instanceof o.Token
                ? this.largestValueWallet.id
                : this.largestValueWallet.ticker
              : e || v;
          },
          async buyCoin() {
            const e = this.isMinMaxError
              ? this.coinToSend.id
              : this.coinToSend.feeTicker;
            this.$buy.isAvailable({ id: e })
              ? this.$router.push(
                  "/simplex/USD/" + this.$buy.getAvailableWallet({ id: e }).id,
                )
              : ((this.selectedCoinToReceiveId = e),
                (this.selectedCoinToSendId = "BTC"),
                await this.getAvailableBalance());
          },
          isCoinDisabled(e) {
            return (
              (null === e || void 0 === e ? void 0 : e.ticker) &&
              !o.CoinRestrictionPolicy.isAllowed(e.ticker, o.ACTION_EXCHANGE)
            );
          },
          tryAgain() {
            this.isError = !1;
          },
          async watchForCoins() {
            this.clearValidation();
          },
          clearValidation() {
            ((this.amountToSendError = ""),
              (this.valid = { message: "", status: !0 }));
          },
          async setMinimalAmount() {
            if (this.coinToSend)
              if (
                ((this.validMinimalAmount = { message: "", status: !0 }),
                this.coinToSend.id === this.coinToReceive.id)
              )
                this.validMinimalAmount = {
                  message: this.$t("error.chooseDifferentCoins"),
                  status: !1,
                };
              else
                try {
                  var e;
                  const t = await this.getMinimalAmount(
                    this.coinToSend,
                    this.coinToReceive,
                  );
                  this.minimalAmount =
                    null !==
                      (e = null === t || void 0 === t ? void 0 : t.min) &&
                    void 0 !== e
                      ? e
                      : 0;
                } catch (i) {
                  var t;
                  const e =
                    "not_valid_ticker_pair" ===
                    (null === i ||
                    void 0 === i ||
                    null === (t = i.data) ||
                    void 0 === t
                      ? void 0
                      : t.error)
                      ? this.$t("error.chooseDifferentCoins")
                      : this.$t("error.pairTemporarilyUnavailable");
                  this.validMinimalAmount = { message: e, status: !1 };
                }
          },
          talkWithSupport() {
            const e = ["TFUEL", "VTHO"].includes(this.feeWallet.ticker)
                ? this.coinToSend.address
                : this.feeWallet.address,
              t = {
                additionalText: `-----------------------\n${this.$t("title.fee")}: ${this.feeToClaim} ${this.feeWallet.ticker}\n${this.$t("supportPopup.userTickerAddress", { ticker: this.feeWallet.ticker })}: ${e}`,
                subject: this.$t("supportPopup.otherIssues"),
                topic: this.$t("supportPopup.claimText", {
                  ticker: this.feeWallet.ticker,
                  coinToSend: this.coinToSend.ticker,
                  coinToReceive: this.coinToReceive.ticker,
                }),
                isNotText: !1,
                tags: ["claim"],
              };
            ((t.additionalText =
              this.$t("error.notEnoughFee", { ticker: this.feeWallet.ticker }) +
              "\n" +
              t.additionalText),
              (t.isNotText = !0),
              this.$bus.$emit("openSupportPopup", t));
          },
          async validateExchange() {
            for (const i of [
              this.selectedCoinToReceiveId,
              this.selectedCoinToSendId,
            ])
              if (
                !o.CoinRestrictionPolicy.isAllowed(
                  i.toUpperCase(),
                  o.ACTION_EXCHANGE,
                )
              )
                return void (this.valid = {
                  message: o.CoinRestrictionPolicy.getMessage(
                    i.toUpperCase(),
                    o.ACTION_EXCHANGE,
                  ),
                  status: !1,
                });
            if (!this.valid.status) return;
            const e = await this.isAvailableForSend();
            if (e) return void (this.valid = { message: e, status: !1 });
            const t = await this.getMaxMinErrorText();
            t
              ? (this.valid = { message: t, status: !1 })
              : Number(this.amountToSend) > 0 &&
                  "XRP" === this.coinToReceive.ticker &&
                  Number(this.amountToReceive) < S &&
                  Number(this.amountToReceive) > 0 &&
                  !isNaN(Number(this.amountToReceive))
                ? (this.valid = {
                    message: this.$t("error.minAmountForReceivingXRP"),
                    status: !1,
                  })
                : this.amountToSendError
                  ? (this.valid = {
                      message: this.amountToSendError,
                      status: !1,
                    })
                  : (this.valid = { message: "", status: !0 });
          },
          async getMaxMinErrorText() {
            this.isMinMaxError = !1;
            let e = this.$rates.getCoinPrice(this.coinToSend, "BTC");
            const t = this.coinToSend.ticker;
            e ||
              (await this.$rates.getRates([this.coinToSend], "BTC", !0),
              (e = this.$rates.getCoinPrice(this.coinToSend, "BTC")));
            const i = this.$rates.convertToUSD(
                this.amountToSend,
                this.coinToSend,
                "BTC",
              ),
              a = Number((C / e).toFixed(p));
            return (
              await this.setMinimalAmount(),
              a && i && Number(i) >= C
                ? `${this.$t("error.maxSwapAmountA", { maxAmount: a, ticker: t })}\n        ${this.$t("error.maxSwapAmountB")}`
                : Number(this.amountToSend) < Number(this.minimalAmount) &&
                  ((this.isBuyCoin = !b.includes(
                    this.coinToSend.deprecatedParent,
                  )),
                  (this.isMinMaxError = !0),
                  this.$t("error.minSwapAmount", {
                    minAmount: this.minimalAmount,
                    ticker: t,
                  }))
            );
          },
          getIsBuyCoin() {
            const e = this.$rates.convertToUSD(
                this.amountToSend,
                this.coinToSend,
                "BTC",
              ),
              t = this.$rates.getCoinPrice(this.coinToSend, "BTC"),
              i = Number((C / t).toFixed(p));
            (i && e && Number(e) >= C) ||
              (Number(this.amountToSend) >= Number(this.minimalAmount) &&
                (this.isBuyCoin = !b.includes(
                  this.coinToSend.deprecatedParent,
                )),
              Number(this.amountToSend) > Number(this.availableBalance || 0) &&
                (this.isBuyCoin = !b.includes(
                  this.coinToSend.deprecatedParent,
                )));
          },
          async isAvailableForSend() {
            let e = !0,
              t = !0;
            const i = this.coinToSend.toMinimalUnit(this.amountToSend),
              a = this.coinToSend.toMinimalUnit(this.availableBalance),
              { BN: n } = this.feeWallet;
            if (((t = this.amountToSend >= 0 && new n(i).lte(new n(a))), !t))
              return (
                this.getIsBuyCoin(),
                (this.isBuyCoin = !b.includes(
                  this.coinToSend.deprecatedParent,
                )),
                (this.isMinMaxError = !0),
                this.$t("error.moreDepositToSwap", {
                  ticker: this.coinToSend.ticker,
                })
              );
            if (
              (this.coinToSend instanceof o.Token
                ? (e = await this.coinToSend.isAvailableForFee(
                    new this.feeWallet.BN(this.feeParams.fee),
                    this.feeWallet.indivisibleBalance,
                  ))
                : "VET" === this.coinToSend.ticker &&
                  (e = await this.feeWallet.isAvailableForFee(
                    new this.feeWallet.BN(this.feeParams.fee),
                    this.feeWallet.indivisibleBalance,
                  )),
              ["ONT", "THETA"].includes(this.coinToSend.ticker) &&
                (e = this.feeWallet.indivisibleBalance.gte(this.feeParams.fee)),
              !e)
            ) {
              this.isBuyCoin = !1;
              const e = this.feeWallet.toCurrencyUnit(this.feeParams.fee);
              return (
                this.feeWallet.ticker !== this.coinToSend.ticker &&
                  ["TRX", "BSC", "BTT", "VTHO", "ONG", "TFUEL", "ETH"].includes(
                    this.feeWallet.ticker,
                  ) &&
                  (this.feeToClaim = e),
                "THETA" === this.coinToSend.ticker &&
                  this.$t("error.notEnoughToSwap", {
                    ticker: this.feeWallet.ticker,
                    coinToSendTicker: this.coinToSend.ticker,
                  }),
                this.$t("error.insufficientFundsToSwap", {
                  ticker: this.feeWallet.ticker,
                  coinToSendTicker: this.coinToSend.ticker,
                  fee: e,
                })
              );
            }
            const s = () => {
              const e = new this.coinToSend.BN(
                  this.coinToSend.toMinimalUnit(this.amountToSend),
                ),
                t = new this.coinToSend.BN(
                  this.coinToSend.toMinimalUnit(this.availableBalance),
                ),
                i = this.coinToSend.indivisibleBalance;
              return e.gt(t) && e.lte(i);
            };
            if (s()) {
              const {
                toCurrencyUnit: e,
                ticker: t,
                name: i,
                unspendableBalance: a,
              } = this.coinToSend;
              return this.$t("error.lockedCondition", {
                value: e(a),
                ticker: t,
                name: i,
              });
            }
            return !1;
          },
          setFeeParams() {
            try {
              const e = this.feeWallet.toCurrencyUnit(this.feeParams.fee);
              ((this.feeParams.fiat = this.$rates.convertToUSD(
                e,
                this.feeWallet,
                "USD",
              )),
                (this.feeParams.value = e),
                (this.feeParams.ticker = this.feeWallet.ticker));
            } catch (e) {
              console.error(e);
            }
          },
          async getAvailableBalance(e) {
            if ((void 0 === e && (e = !0), this.isUpdatingAvailableBalance))
              return !1;
            this.isUpdatingAvailableBalance = !0;
            const t = this.coinToSend instanceof o.Token;
            ((this.isBalanceLoading = !0),
              (this.isNewCoinLoading = !0),
              (this.feeToClaim = null));
            let i = null;
            try {
              const e = t
                ? {
                    isToken: !0,
                    contract: this.coinToSend.contract,
                    ticker: this.coinToSend.ticker,
                  }
                : { onlyCoin: !0 };
              await this.feeWallet.getInfo(e);
            } catch (s) {
              console.log(s);
            }
            try {
              var a, n;
              if (
                null !== (a = this.feeWallet) &&
                void 0 !== a &&
                null !== (n = a.isFeeDynamic) &&
                void 0 !== n &&
                n.call(a)
              ) {
                const e = t
                    ? await this.feeWallet.estimateGas(
                        "1",
                        "",
                        this.coinToSend.contract,
                        this.coinToSend.denom,
                      )
                    : this.coinToSend.gasLimit,
                  a = await this.feeWallet.getGasPrice(!1, t);
                ((i = await this.feeWallet.getFee({
                  userGasPrice: String(a),
                  gasLimit: e,
                })),
                  (this.feeParams.gasLimit = e),
                  (this.feeParams.gasPrice = a));
              } else if (
                "TRX" === this.feeWallet.ticker &&
                "TRX" !== this.coinToSend.ticker
              )
                i = await this.feeWallet.getFee({
                  address: this.feeWallet.address,
                  contract: this.coinToSend.contract,
                  amount: this.amountToSend,
                });
              else {
                const e =
                    "ADA" === this.feeWallet.ticker
                      ? this.feeWallet.address
                      : void 0,
                  t = ["LUNA", "LUNC"].includes(this.feeWallet.ticker)
                    ? {
                        denom: this.coinToSend.denom,
                        sendAmount:
                          this.coinToSend.toMinimalUnit(this.amountToSend) ||
                          "1",
                        contract: this.coinToSend.contract,
                        amount:
                          this.coinToSend.toMinimalUnit(this.amountToSend) ||
                          "0",
                      }
                    : {};
                i = await this.feeWallet.getFee({ address: e, ...t });
              }
              ((this.feeParams.fee = i),
                (this.availableBalance = await this.coinToSend.availableBalance(
                  this.coinToSend.id === this.feeWallet.id &&
                    "THETA" !== this.coinToSend.id
                    ? i
                    : "0",
                )));
            } catch (c) {
              console.error(c);
            }
            (this.setFeeParams(),
              e && (await this.setAmountToSend(this.availableBalance)),
              (this.isUpdatingAvailableBalance = !1));
          },
          async setAmountToSend(e) {
            (this.clearValidation(),
              (this.isBalanceLoading = !0),
              this.clearValidation(),
              (this.amountToReceive = "..."),
              (this.amountToSend = e),
              0 === Number(e) && (this.amountToReceive = "0"),
              (this.fetcher = setTimeout(() => {
                this.fetchRate();
              }, g)));
          },
          async changeCoins() {
            if (this.loading || this.isNewCoinLoading) return;
            const e = this.coinToReceive,
              t = this.coinToSend;
            (await Promise.allSettled([
              this.selectCoin(t, !1, !1),
              this.selectCoin(e, !0, !1),
            ]),
              await this.getAvailableBalance());
          },
          async setDefaultRate() {
            const e = this.$store.getters.coinRate(
                "USD",
                this.coinToReceive,
              ).rate,
              t = this.$store.getters.coinRate("USD", this.coinToSend).rate,
              i = new n.default(t).dividedBy(new n.default(e));
            ((this.amountToReceive = new n.default(this.amountToSend)
              .multipliedBy(i)
              .toString()),
              await this.validateExchange());
          },
          getPairRate() {
            const e = this.getRate(
              this.coinToSend,
              this.coinToReceive,
              this.amountToSend,
            );
            (e
              ? e
                  .then(async (e) => {
                    ((this.amountToReceive = String(e)),
                      await this.validateExchange());
                  })
                  .catch((e) => {
                    (console.log(e), this.setDefaultRate());
                  })
              : this.setDefaultRate(),
              (this.isNewCoinLoading = !1),
              (this.isBalanceLoading = !1));
          },
          fetchRate() {
            (clearTimeout(this.fetcher),
              clearInterval(this.pairRateInterval),
              (this.amountToReceive =
                Number(this.amountToSend) > 0 ? "..." : "0"),
              this.getPairRate(),
              (this.pairRateInterval = setInterval(() => {
                this.getPairRate();
              }, f)));
          },
          async selectCoin(e, t, i) {
            (void 0 === t && (t = !1),
              void 0 === i && (i = !0),
              t
                ? (this.selectedCoinToSendId = e.id)
                : (this.selectedCoinToReceiveId = e.id),
              i && (await this.getAvailableBalance(t)));
          },
          async exchangeCoins() {
            var e;
            ((0, m.logAction)(
              {
                btnName: this.$t("button.swap"),
                screenName: this.$route.name,
                action: "exchange",
              },
              null === (e = this.$wallets) || void 0 === e ? void 0 : e.hash,
            ),
              (this.loading = !0));
            let t = "",
              i = !1;
            (this.$ga.event("User Actions", "Swap coins", {
              clientID: this.$ga.customParams.uid,
            }),
              await this.$wallets.activateWallet(this.coinToReceive),
              localStorage.setItem(d.ACCEPT_TERMS_STORAGE, "1"),
              (this.isCheckbox = !1),
              (this.checkboxValue = !0));
            const a = this.$wallets.getWallet(
                "e1326549e8ba36b606d8cec00d930139",
              ),
              n = this.$wallets.getWallet("BNB", "atomic"),
              s = this.$wallets.getWallet("ETH", "atomic"),
              o =
                this.estimatedCashback > 0 && this.isMember
                  ? this.estimatedCashback
                  : 0,
              c = {
                hash: this.$wallets.hash,
                ethAddr: s.address,
                bnbAddr: n.address,
                estimatedAwcCashback: String(o),
                estimatedAwcCashbackRate: String(
                  this.$rates.convertToUSD(o, a, "USD"),
                ),
                awcBep2Balance: String(this.awcBalance),
                awcBep2Rate: String(
                  this.$store.getters.coinRate("USD", a).rate,
                ),
              },
              l =
                "BSV" === this.coinToReceive.ticker
                  ? this.coinToReceive.convertToLegacyAddress(
                      this.$getAddressWallet(
                        this.coinToReceive.deprecatedParent,
                      ),
                    )
                  : this.$getAddressWallet(this.coinToReceive.deprecatedParent),
              r =
                "BSV" === this.coinToSend.ticker
                  ? this.coinToSend.convertToLegacyAddress(
                      this.$getAddressWallet(this.coinToSend.deprecatedParent),
                    )
                  : this.$getAddressWallet(this.coinToSend.deprecatedParent);
            this.createExchangeTransaction(
              this.coinToSend,
              this.coinToReceive,
              l,
              r,
              this.amountToSend,
              this.amountToReceive,
              void 0,
              c,
            )
              .then(async (e) => {
                this.$ga.event("Exchange", "Create Swap Tx Succeed", {
                  clientID: this.$ga.customParams.uid,
                });
                try {
                  const t = this.validateExchangeTx(e);
                  i = t.payinAddress;
                  const a = this.coinToSend.toMinimalUnit(t.amountToSend);
                  let n = this.feeParams;
                  (w.includes(this.coinToSend.deprecatedParent) &&
                    this.$isToken(this.coinToSend) &&
                    (n = null),
                    (this.exchangeResult = await this.sendTransaction(
                      this.coinToSend,
                      t.payinAddress,
                      a,
                      t.payinExtraId,
                      t.id,
                      n,
                    )),
                    (this.sentHash = this.exchangeResult.txid),
                    await this.updateExchangeTransactionsFromDB(),
                    this.$ga.event("Exchange", "Swap Succeed", {
                      clientID: this.$ga.customParams.uid,
                    }),
                    this.$router.push({
                      name: "exchange-history",
                      params: { id: t.id },
                    }),
                    await this.getAvailableBalance());
                } catch (a) {
                  throw (
                    this.$ga.event("Exchange", "Swap Failed", {
                      clientID: this.$ga.customParams.uid,
                    }),
                    (t = "sendExchangeTransaction"),
                    (this.valid = {
                      message: this.$t("error.transactionFailed"),
                      status: !1,
                    }),
                    a
                  );
                } finally {
                  this.loading = !1;
                }
              })
              .catch((e) => {
                ((this.isError = !0),
                  this.$ga.event("Exchange", "Create Swap Tx Failed", {
                    clientID: this.$ga.customParams.uid,
                  }),
                  console.log(e),
                  t || (t = "createExchangeTransaction"),
                  (this.loading = !1),
                  (this.valid = {
                    message: this.$t("error.swapServiceUnavailable"),
                    status: !1,
                  }),
                  (e.message = JSON.stringify({
                    currentError: e.toString(),
                    exchangeErrorType: t,
                    provider: this.defaultService,
                    fromCurrency: this.coinToSend.ticker,
                    toCurrency: this.coinToReceive.ticker,
                    fromAddress: this.$getAddressWallet(
                      this.coinToSend.deprecatedParent,
                    ),
                    toAddress: this.$getAddressWallet(
                      this.coinToReceive.deprecatedParent,
                    ),
                    viaAddress: i || "",
                    inputHash: this.exchangeResult
                      ? this.exchangeResult.txid
                      : "",
                    amountTo: this.amountToSend,
                  })),
                  this.$wallets.logger.error({
                    type: "Exchange",
                    error: e,
                    currency: this.coinToSend.ticker,
                    instance: this,
                  }));
              })
              .finally(() => {
                var e;
                (0, m.logActionEnd)(
                  "action",
                  null === (e = this.$wallets) || void 0 === e
                    ? void 0
                    : e.hash,
                );
              });
          },
          openExternal() {
            this.$electron.openExternal(
              "https://atomicwallet.io/terms-of-service",
            );
          },
        },
      };
    },
    5388: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i(3803),
        n = i.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            i.d(t, e, function () {
              return a[e];
            });
          })(s);
      var o = i(5389),
        c = i(5),
        l = !1,
        r = null,
        d = null,
        h = null,
        u = Object(c["a"])(n.a, o["a"], o["b"], l, r, d, h);
      t["default"] = u.exports;
    },
    5389: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "coin-block" }, [
            i("div", { staticClass: "flex justify-center center" }, [
              e.coin
                ? i("div", {
                    key: e.coin.ticker,
                    staticClass: "coin-icon",
                    class: [e.icon, { "no-change": !e.isChangeCoin }],
                    on: { click: e.showCoinDropdown },
                  })
                : e._e(),
            ]),
            e._v(" "),
            i(
              "div",
              { staticClass: "flex-wrapper" },
              [
                i("edit-amount", {
                  attrs: {
                    "is-custom-loading": e.isLoading,
                    decimals: e.coin.decimal,
                    "is-exchange": "",
                    "is-zero-placeholder": "",
                    notes: e.minAmountNotes,
                    readonly: e.readonly,
                    "show-balance": e.isAvailableBalance,
                    wallet: e.coin,
                    "model-value": e.amount,
                    "data-test-id": "exch_inputcoin_sent",
                  },
                  on: {
                    "update:modelValue": e.setAmount,
                    setAllAvailableBalance: function (t) {
                      return e.setAmount(e.availableBalance);
                    },
                  },
                }),
                e._v(" "),
                i(
                  "div",
                  {
                    staticClass: "coinname",
                    class: {
                      "no-change": !e.isChangeCoin,
                      "coinname-big": "TRX-USDT" === e.coin.ticker,
                    },
                    attrs: { "data-test-id": "exch_coin_sent" },
                  },
                  [
                    i(
                      "span",
                      { key: e.coin.ticker, on: { click: e.showCoinDropdown } },
                      [e._v("\n        " + e._s(e.coin.ticker) + "\n      ")],
                    ),
                    e._v(" "),
                    e.isBuyCrypto && e.isCoinDropdown && e.isChangeCoin
                      ? i("coin-dropdown", {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: e.outsideClick,
                              expression: "outsideClick",
                            },
                          ],
                          ref: "coindropdown",
                          attrs: {
                            coins: e.availableCoins,
                            "enable-sort": "",
                            "is-show-exchange-tags":
                              "exchange-basic" === e.$route.name,
                            "is-show-simplex-tags":
                              "simplex-page" === e.$route.name,
                            "is-sort-by-market-cap": e.isSortByMarketCap,
                            "show-balance": "",
                          },
                          on: {
                            selectCoin: function (t) {
                              return e.selectCoin(t);
                            },
                          },
                        })
                      : e._e(),
                    e._v(" "),
                    !e.isBuyCrypto && e.isCoinDropdown && e.isChangeCoin
                      ? i("ExchangeCoinDropdown", {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: e.outsideClick,
                              expression: "outsideClick",
                            },
                          ],
                          attrs: {
                            coins: e.availableCoins,
                            filters: e.filters,
                            "new-tag-coins": e.newTagCoins,
                            "active-filter": e.activeFilter,
                          },
                          on: {
                            selectCoin: function (t) {
                              return e.selectCoin(t);
                            },
                            changeActiveFilter: e.changeActiveFilter,
                          },
                        })
                      : e._e(),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ]);
        },
        n = [];
    },
    8881: function (e, t, i) {
      "use strict";
      (i.d(t, "a", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return n;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "inner-exchange-basic" },
            [
              e.coinToSend && e.coinToReceive
                ? i(
                    "div",
                    { staticClass: "exchange-block" },
                    [
                      i(
                        "div",
                        {
                          staticClass: "block-wrapper",
                          class: [{ disabled: e.loading }],
                          attrs: { "data-test-id": "exch_buycrypto" },
                        },
                        [
                          i("exchange-coin", {
                            attrs: {
                              amount:
                                "0" === e.amountToSend ? "" : e.amountToSend,
                              "available-balance": e.availableBalance || "0",
                              coin: e.coinToSend,
                              "is-loading": e.isNewCoinLoading,
                              currencies: e.filteredCurrenciesExchange,
                              icon: e.$iconClass(e.coinToSend),
                              "is-available-balance": "",
                              "selected-coin": e.coinToSend.ticker,
                              "data-test-id": "exchange_coin_send",
                            },
                            on: {
                              selectCoin: function (t) {
                                return e.selectCoin(t, !0);
                              },
                              setAmountToSend: e.setAmountToSend,
                            },
                          }),
                        ],
                        1,
                      ),
                      e._v(" "),
                      i("change-icon", { on: { clickAction: e.changeCoins } }),
                      e._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "block-wrapper",
                          class: [{ disabled: e.loading }],
                        },
                        [
                          i("exchange-coin", {
                            attrs: {
                              amount:
                                e.coinToReceive === e.coinToSend
                                  ? "0"
                                  : e.amountToReceive,
                              coin: e.coinToReceive,
                              "is-loading": e.isBalanceLoading,
                              currencies: e.filteredCurrenciesExchange,
                              icon: e.$iconClass(e.coinToReceive),
                              "is-sort-by-market-cap": "",
                              readonly: "",
                              "selected-coin": e.coinToReceive.ticker,
                              "data-test-id": "exchange_coin_receive",
                            },
                            on: { selectCoin: e.selectCoin },
                          }),
                          e._v(" "),
                          Number(e.estimatedCashback) > 0
                            ? i("cashback-info", {
                                attrs: {
                                  "is-loading": e.isBalanceLoading,
                                  "estimated-cashback": e.estimatedCashback,
                                },
                              })
                            : e._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : e._e(),
              e._v(" "),
              i(
                "div",
                { staticClass: "error-wrapper" },
                [
                  i("transition", { attrs: { name: "fade" } }, [
                    e.isHBARActivate
                      ? i(
                          "div",
                          { staticClass: "hbar-activate" },
                          [
                            i("error-plain", {
                              attrs: {
                                message: e.$t("error.activateHBARWallet"),
                              },
                            }),
                            e._v(" "),
                            i(
                              "button",
                              {
                                staticClass: "button button-buy",
                                on: {
                                  click: function (t) {
                                    return e.$router.push("/main/receive/HBAR");
                                  },
                                },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$t("button.activate")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ],
                          1,
                        )
                      : e.validMinimalAmount.status
                        ? e.valid.status
                          ? e._e()
                          : i(
                              "div",
                              { staticClass: "flex justify-center" },
                              [
                                i("error-plain", {
                                  attrs: { message: e.valid.message },
                                }),
                                e._v(" "),
                                e.isBuyCoin
                                  ? i(
                                      "button",
                                      {
                                        staticClass: "button button-buy",
                                        attrs: { "data-test-id": "exch_buy" },
                                        on: { click: e.buyCoin },
                                      },
                                      [
                                        e._v(
                                          "\n          " +
                                            e._s(e.$t("button.buy")) +
                                            "\n          " +
                                            e._s(
                                              e.isMinMaxError
                                                ? e.coinToSend.ticker
                                                : e.coinToSend.feeTicker,
                                            ) +
                                            "\n        ",
                                        ),
                                      ],
                                    )
                                  : e._e(),
                              ],
                              1,
                            )
                        : i(
                            "div",
                            { staticClass: "flex justify-center" },
                            [
                              i("error-plain", {
                                attrs: {
                                  message: e.validMinimalAmount.message,
                                },
                              }),
                            ],
                            1,
                          ),
                  ]),
                ],
                1,
              ),
              e._v(" "),
              !e.valid.status && e.feeToClaim
                ? i(
                    "button",
                    {
                      staticClass: "button claim",
                      attrs: { "data-test-id": "exch_support" },
                      on: { click: e.talkWithSupport },
                    },
                    [e._v("\n    " + e._s(e.$t("contact_support")) + "\n  ")],
                  )
                : e._e(),
              e._v(" "),
              i("div", { staticClass: "submit-wrapper" }, [
                i(
                  "div",
                  [
                    e.isCheckbox
                      ? i(
                          "atomic-checkbox",
                          {
                            staticClass: "m-t-10 m-b-15",
                            attrs: { "model-value": e.checkboxValue },
                            on: {
                              "update:modelValue": function (t) {
                                e.checkboxValue = t;
                              },
                            },
                          },
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$t("message.accept")) +
                                "\n        ",
                            ),
                            i(
                              "a",
                              {
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      t.stopPropagation(),
                                      e.openExternal.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                e._v(
                                  " " +
                                    e._s(e.$t("message.termsOfService")) +
                                    " ",
                                ),
                              ],
                            ),
                          ],
                        )
                      : e._e(),
                  ],
                  1,
                ),
                e._v(" "),
                e.loading
                  ? i("div", { staticClass: "loading" })
                  : i(
                      "button",
                      {
                        staticClass: "button shadow w320",
                        class: [
                          {
                            active:
                              e.isActiveExchangeButton && !e.isExchangeDisabled,
                            disabled: e.isExchangeDisabled,
                          },
                        ],
                        attrs: { "data-test-id": "exch_submit_button" },
                        on: { click: e.exchangeCoins },
                      },
                      [e._v("\n      " + e._s(e.$t("button.swap")) + "\n    ")],
                    ),
              ]),
              e._v(" "),
              i("transition", { attrs: { name: "fade" } }, [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          !e.isBalanceLoading &&
                          !e.isNewCoinLoading &&
                          e.exchangeRate,
                        expression:
                          "!isBalanceLoading && !isNewCoinLoading && exchangeRate",
                      },
                    ],
                    staticClass: "exchange-rate",
                    attrs: { "data-test-id": "exch_rate" },
                  },
                  [
                    i("span", [e._v(" " + e._s(e.$t("title.swapRate")))]),
                    e._v(" "),
                    i("div", { staticClass: "rate" }, [
                      e._v(
                        "\n        1 " +
                          e._s(e.coinToSend.ticker) +
                          " ~ " +
                          e._s(e.formatBigAmount(e.exchangeRate)) +
                          " " +
                          e._s(e.coinToReceive.ticker) +
                          "\n      ",
                      ),
                    ]),
                  ],
                ),
              ]),
              e._v(" "),
              i("transition", { attrs: { name: "fade" } }, [
                e.isBalanceLoading || e.isNewCoinLoading || !e.feeParams.value
                  ? e._e()
                  : i(
                      "div",
                      {
                        staticClass: "exchange-rate m-b",
                        attrs: { "data-test-id": "exch_fee" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "exchange-rate__network-fee" },
                          [i("span", [e._v(e._s(e.$t("title.networkFee")))])],
                        ),
                        e._v(" "),
                        i("div", { staticClass: "rate" }, [
                          e._v(
                            e._s(e.feePrefix) +
                              e._s(e.feeParams.value) +
                              " " +
                              e._s(e.feeParams.ticker),
                          ),
                        ]),
                        e._v(" "),
                        i("span", [
                          e._v(
                            " $" + e._s(e.formatFiat(e.feeParams.fiat)) + " ",
                          ),
                        ]),
                      ],
                    ),
              ]),
              e._v(" "),
              i("div", { staticClass: "exchange-third-api" }, [
                i("p", [e._v(e._s(e.$t("title.swapServiceThirdParty")))]),
              ]),
              e._v(" "),
              e.isMember ? e._e() : i("cashback-promotion"),
              e._v(" "),
              i("transition", { attrs: { name: "fade-down" } }, [
                e.isError
                  ? i(
                      "div",
                      {
                        staticClass: "send-coin popup",
                        attrs: { "data-test-id": "exch_coin_popup" },
                      },
                      [
                        i("send-coin-result", {
                          attrs: {
                            amount: e.amountToSend,
                            coin: e.coinToSend,
                            icon: e.$iconClass(e.coinToSend),
                            "is-error": e.isError,
                            "mail-text":
                              e.coinToSend.ticker +
                              " > " +
                              e.coinToReceive.ticker +
                              "%0A",
                            "send-type": "Exchange",
                            "mail-title": e.$t("error.swapError"),
                            "contact-data": {
                              issue: "Swap",
                              tags: ["exchange_tag"],
                            },
                          },
                          on: { tryAgain: e.tryAgain },
                        }),
                      ],
                      1,
                    )
                  : e._e(),
              ]),
            ],
            1,
          );
        },
        n = [];
    },
  },
]);
