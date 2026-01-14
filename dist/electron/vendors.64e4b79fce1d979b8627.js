(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [353, 32],
  {
    2708: function (e, t, s) {
      "use strict";
      var n = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(s(230)),
        r = n(s(794)),
        i = n(s(4940)),
        l = s(2806),
        o = n(s(4941));
      const c = "GAS-2 Old",
        u = "GAS",
        d = "m/44'/888'/0'/0",
        f = 8,
        h = "0";
      class GASCoin extends (0, o.default)(
        (0, l.NeoMixin)((0, l.HasProviders)(a.default)),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: n,
            feeData: a,
            explorers: l,
            txWebUrl: o,
            socket: b,
            id: w,
          } = e;
          const v = {
            id: w,
            alias: t,
            notify: n,
            name: c,
            ticker: u,
            decimal: f,
            unspendableBalance: h,
            txWebUrl: o,
            explorers: l,
            socket: b,
            dependencies: {
              coreLib: new r.default(() =>
                s.e(62).then(s.t.bind(null, 6646, 7)),
              ),
            },
          };
          (super(v),
            (this.derivation = d),
            this.setExplorersModules([i.default]),
            this.loadExplorers(v));
        }
      }
      t.default = GASCoin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    4940: function (e, t, s) {
      "use strict";
      var n = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(s(129));
      const r = 10,
        i = {
          NEO: "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",
          GAS: "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7",
        };
      class NeoscanExplorer extends a.default {
        getAllowedTickers() {
          return ["NEO", "GAS"];
        }
        async getInfo(e) {
          const [t, { unclaimed: s }] = await Promise.all([
              this.request("get_balance/" + e),
              this.request("get_unclaimed/" + e),
            ]),
            n = this.modifyInfoResponse(t),
            a = this.wallet.ticker.substr(0, 3).toLowerCase(),
            r = this.wallet.toMinimalUnit(n[a]);
          return {
            balance: r,
            balances: {
              available: this.wallet.toCurrencyUnit(r),
              rewards: s,
              ...n,
            },
          };
        }
        getTransactionUrl(e) {
          return "get_transaction/" + e;
        }
        getTransactionsUrl(e) {
          return `get_last_transactions_by_address/${e}/0`;
        }
        modifyInfoResponse(e) {
          const t = {};
          return (
            e.balance.forEach((e) => {
              let { asset_symbol: s, amount: n } = e;
              ["NEO", "GAS"].includes(s) && (t[s.toLowerCase()] = n);
            }),
            t
          );
        }
        modifyTransactionsResponse(e, t) {
          return super.modifyTransactionsResponse(
            this.filterTransactionList(e, t),
            t,
          );
        }
        filterTransactionList(e, t) {
          const s = this.wallet.ticker.substr(0, 3);
          return e.filter((e) => {
            let n = !1;
            return (
              this.getTxDirection(t, e)
                ? e.vouts.forEach((e) => {
                    e.asset === i[s] && (n = !0);
                  })
                : e.vin.forEach((e) => {
                    e.asset === i[s] && (n = !0);
                  }),
              n
            );
          });
        }
        getTxHash(e) {
          return e.txid;
        }
        getTxDirection(e, t) {
          const s =
            t.vouts &&
            t.vouts.find((t) => {
              let { address_hash: s } = t;
              return s !== e;
            });
          return !s;
        }
        getTxOtherSideAddress(e, t) {
          if (!t.vin) return "...";
          if (this.getTxDirection(e, t))
            return t.vin.length > 0 ? t.vin[0].address_hash : "-";
          let s = new this.wallet.BN(0),
            n = "...";
          const a = this.wallet.ticker.substr(0, 3);
          return (
            t.vouts.forEach((t) => {
              t.address_hash !== e &&
                t.asset === i[a] &&
                s.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) &&
                ((s = new this.wallet.BN(this.wallet.toMinimalUnit(t.value))),
                (n = t.address_hash));
            }),
            n
          );
        }
        getTxValue(e, t) {
          let s = new this.wallet.BN(0),
            n = new this.wallet.BN(0);
          const a = this.wallet.ticker.substr(0, 3);
          (t.vin.forEach((t) => {
            t.address_hash === e &&
              t.asset === i[a] &&
              (s = s.add(
                new this.wallet.BN(this.wallet.toMinimalUnit(t.value)),
              ));
          }),
            t.vouts.forEach((t) => {
              t.address_hash === e &&
                t.asset === i[a] &&
                (n = n.add(
                  new this.wallet.BN(this.wallet.toMinimalUnit(t.value)),
                ));
            }));
          const r = s.sub(n),
            l = r.abs();
          return Number(this.wallet.toCurrencyUnit(l));
        }
        getTxDateTime(e) {
          return new Date(Number(e.time + "000"));
        }
        getTxConfirmations(e) {
          return r;
        }
        async sendTransaction(e) {
          return this.wallet.sendTransaction(e);
        }
        getTxFee(e) {
          return (e && e.net_fee) || 0;
        }
        getTxFeeTicker() {
          return "GAS";
        }
      }
      t.default = NeoscanExplorer;
    },
    4941: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = (e) =>
        class extends e {
          constructor() {
            (super(...arguments), (this.isDisabled = !0));
          }
          async getBalance() {
            return "0";
          }
          async getTransactions() {
            return [];
          }
          async getInfo() {
            const e = "0";
            return ((this.balance = e), { balance: e });
          }
          getUnspentOutputs() {
            return [];
          }
          getUTXO() {
            return [];
          }
          sendTransaction() {
            return null;
          }
          getTransaction() {
            return null;
          }
          updateCoinParamsFromServer() {}
        };
      t.default = n;
    },
  },
]);
