(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [379, 32],
  {
    2688: function (e, t, i) {
      "use strict";
      var s = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(230)),
        r = s(i(7623)),
        a = s(i(794)),
        d = i(2806);
      const o = "Verge",
        l = "XVG",
        u = "m/44'/77'/0'/0/0",
        c = 6,
        h = "0";
      class XVGCoin extends (0, d.HasProviders)(
        (0, d.BitcoreMixin)((0, d.BitcoinLikeFeeMixin)(n.default)),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: s,
            feeData: n,
            explorers: d,
            txWebUrl: f,
            socket: x,
            id: g,
          } = e;
          const p = {
            id: g,
            alias: t,
            notify: s,
            name: o,
            ticker: l,
            decimal: c,
            unspendableBalance: h,
            explorers: d,
            txWebUrl: f,
            socket: x,
            dependencies: {
              bitcore: new a.default(() =>
                Promise.all([i.e(22), i.e(169)]).then(i.t.bind(null, 10426, 7)),
              ),
            },
          };
          (super(p),
            (this.derivation = u),
            this.setExplorersModules([r.default]),
            this.loadExplorers(p),
            (this.fee = n.fee),
            (this.feePerByte = n.feePerByte),
            (this.coefficient = n.coefficient),
            (this.transactions = []),
            (this.networkName = "mainnet"));
        }
        async getBalance() {
          const { balance: e } = await this.getProvider("balance").getInfo(
            this.address,
          );
          return e;
        }
        async getFee() {
          return new this.BN(this.fee);
        }
      }
      t.default = XVGCoin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    7623: function (e, t, i) {
      "use strict";
      var s = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(129)),
        r = s(i(80)),
        a = i(27);
      class VergeInsightExplorer extends n.default {
        constructor() {
          (super(...arguments), (this.canPaginate = !0));
        }
        getAllowedTickers() {
          return ["XVG"];
        }
        getApiPrefix() {
          return "api/XVG/mainnet/";
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}address/${e}/balance`;
        }
        modifyInfoResponse(e) {
          return { balance: e.confirmed };
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}tx/${e}/coins`;
        }
        getTransactionsUrl(e) {
          return `${this.getApiPrefix()}address/${e}/txs`;
        }
        getTransactionsParams(e, t, i, s) {
          return { pageNum: s };
        }
        modifyTransactionsResponse(e, t, i) {
          return t.map((e) => {
            const t = this.getTxDirection(i, e);
            return new r.default({
              ticker: this.wallet.ticker,
              name: this.wallet.name,
              walletid: this.wallet.id,
              txid: this.getTxHash(e),
              direction: t,
              otherSideAddress: this.getTxOtherSideAddress(i, e, t),
              amount: this.getTxValue(i, e, t),
              datetime: this.getTxDateTime(e),
              alias: this.wallet.alias,
            });
          });
        }
        getUnspentOutputsUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getUnspentOutputsParams() {
          return { unspent: !0 };
        }
        modifyUnspentOutputsResponse(e, t) {
          return t.map((e) => {
            let {
              value: t,
              script: i,
              mintTxid: s,
              mintIndex: n,
              address: r,
            } = e;
            return {
              satoshis: t,
              value: t,
              script: i,
              txid: s,
              vout: n,
              address: r,
            };
          });
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "tx/send";
        }
        getSendTransactionParam() {
          return "rawTx";
        }
        getTxDateTime(e) {
          return new Date(e.blockTimeNormalized);
        }
        getTxValue(e, t, i) {
          const s = i ? (t) => t.address === e : (t) => t.address !== e,
            n = t.outputs
              .filter(s)
              .reduce(
                (e, t) => e.add(new this.wallet.BN(t.value)),
                new this.wallet.BN(0),
              );
          return this.wallet.toCurrencyUnit(n);
        }
        getTxDirection(e, t) {
          return t.inputs.every((t) => t.address !== e);
        }
        getTxOtherSideAddress(e, t, i) {
          if (i) return t.inputs[0].address;
          const s = t.outputs.find((t) => t.address !== e);
          return (null === s || void 0 === s ? void 0 : s.address) || e;
        }
        calculateBalance(e) {
          return (
            void 0 === e && (e = []),
            e.reduce((e, t) => {
              let { value: i } = t;
              return new this.wallet.BN(i).add(e);
            }, new this.wallet.BN("0"))
          );
        }
        modifyTransactionResponse(e, t) {
          const i = this.getTxDirection(t, e);
          return new r.default({
            ticker: this.wallet.ticker,
            name: this.wallet.name,
            walletid: this.wallet.id,
            txid: this.getTxHash(e),
            fee: this.getTxFee(e),
            feeTicker: this.wallet.parent,
            direction: i,
            otherSideAddress: this.getTxOtherSideAddress(t, e, i),
            amount: this.getTxValue(t, e, i),
            datetime: this.getTxDateTime(e),
            confirmations: this.getTxConfirmations(e),
            alias: this.wallet.alias,
          });
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit(
            (null === e || void 0 === e ? void 0 : e.fee) ||
              this.wallet.feeDefault ||
              0,
          );
        }
        getTxConfirmations(e) {
          return e.confirmations;
        }
        getTxHash(e) {
          return e.txid;
        }
        async getTransactionCoins(e) {
          return this.request(`${this.getApiPrefix()}tx/${e}/coins`);
        }
        async getTransaction(e) {
          return this.request(`${this.getApiPrefix()}tx/${e}`);
        }
        async getTransactions(e) {
          let {
            address: t,
            offset: i = 0,
            limit: s = this.defaultTxLimit,
            pageNum: n,
          } = e;
          const r = await this.request(
              this.getTransactionsUrl(t),
              this.getTransactionsMethod(),
              this.getTransactionsParams(
                t,
                i || 0,
                s || this.defaultTxLimit,
                n,
              ),
              a.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            ),
            d = [];
          return (
            r.forEach((e) => {
              (e.mintTxid &&
                -1 === d.findIndex((t) => t === e.mintTxid) &&
                d.push(e.mintTxid),
                e.spentTxid &&
                  -1 === d.findIndex((t) => t === e.spentTxid) &&
                  d.push(e.spentTxid));
            }),
            Promise.all(
              d.map(async (e) => {
                const i = await this.getTransaction(e),
                  s = await this.getTransactionCoins(e);
                return this.modifyTransactionResponse(
                  { txid: e, ...i, ...s },
                  t,
                );
              }),
            )
          );
        }
      }
      t.default = VergeInsightExplorer;
    },
  },
]);
