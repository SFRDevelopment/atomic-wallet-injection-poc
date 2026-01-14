(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [419],
  {
    2729: function (t, e, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = r(s(8416)),
        i = r(s(241));
      class MONCoin extends i.default {
        constructor(t) {
          (super(t), this.setExplorersModules([a.default]));
        }
      }
      e.default = MONCoin;
    },
    8416: function (t, e, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var a = r(s(129)),
        i = r(s(80));
      class MonadExplorer extends a.default {
        getTransactionsUrl() {
          return "/account/transactions";
        }
        getTransactionsParams(t) {
          return { address: t };
        }
        getInitParams() {
          const t = super.getInitParams();
          return {
            ...t,
            headers: { "x-api-key": "2tnXxTOoWdj7QtYHDA9NEtjsYTD" },
          };
        }
        async getTransactions(t) {
          let { address: e } = t;
          try {
            const t = await this.request(
                this.getTransactionsUrl(),
                this.getTransactionsMethod(),
                this.getTransactionsParams(e),
              ).catch(() => []),
              s = this.modifyTransactionsResponse(t.result.data, e);
            return s;
          } catch (s) {
            return (console.error(s), []);
          }
        }
        modifyTransactionsResponse(t, e, s) {
          return (
            void 0 === s && (s = this.wallet.ticker),
            Array.isArray(t)
              ? t.map(
                  (t) =>
                    new i.default({
                      ticker: s,
                      name: this.wallet.name,
                      walletid: this.wallet.id,
                      txid: this.getTxHash(t),
                      fee: this.getTxFee(t),
                      feeTicker: this.wallet.parent,
                      direction: this.getTxDirection(e, t),
                      otherSideAddress: this.getTxOtherSideAddress(e, t),
                      amount: this.getTxValue(t),
                      datetime: this.getTxDateTime(t),
                      confirmations: this.getTxConfirmations(t),
                      alias: this.wallet.alias,
                    }),
                )
              : []
          );
        }
        getTxHash(t) {
          return t.hash;
        }
        getTxDateTime(t) {
          return new Date(t.timestamp);
        }
        getTxDirection(t, e) {
          return t.toLowerCase() !== e.from.toLowerCase();
        }
        getTxOtherSideAddress(t, e) {
          return t.toLowerCase() === e.from.toLowerCase() ? e.to : e.from;
        }
        getTxValue(t) {
          return this.wallet.toCurrencyUnit(t.value);
        }
        getTxConfirmations(t) {
          return Number(t.status);
        }
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(t.transactionFee);
        }
      }
      e.default = MonadExplorer;
    },
  },
]);
