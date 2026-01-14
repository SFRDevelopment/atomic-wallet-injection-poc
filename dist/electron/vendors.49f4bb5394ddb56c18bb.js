(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [351, 32],
  {
    2694: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var i = n(r(230)),
          s = r(19),
          a = r(27),
          o = n(r(7838)),
          c = n(r(7839)),
          l = n(r(794)),
          d = r(2806);
        function u(e, t, r) {
          (h(e, t), t.set(e, r));
        }
        function h(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function f(e, t) {
          return e.get(g(e, t));
        }
        function T(e, t, r) {
          return (e.set(g(e, t), r), r);
        }
        function g(e, t, r) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : r;
          throw new TypeError("Private element is not present on this object");
        }
        const p = new l.default(() => r.e(431).then(r.t.bind(null, 10492, 7))),
          m = "Algorand",
          x = "ALGO",
          w = "m/44'/283'/0'/0/0",
          y = 6,
          v = "100000",
          A = "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
          E = "mainnet-v1.0",
          P = 1e3,
          b = "last-round";
        var O = new WeakMap();
        class ALGOCoin extends (0, d.HasProviders)(i.default) {
          constructor(e) {
            let {
              alias: t,
              notify: r,
              feeData: n,
              explorers: i,
              txWebUrl: s,
              socket: a,
              id: l,
            } = e;
            const d = {
              id: l,
              alias: t,
              notify: r,
              name: m,
              ticker: x,
              decimal: y,
              unspendableBalance: v,
              explorers: i,
              txWebUrl: s,
              socket: a,
            };
            (super(d),
              u(this, O, void 0),
              this.setExplorersModules([o.default, c.default]),
              this.loadExplorers(d),
              (this.derivation = w),
              (this.fee = n.fee),
              (this.transactions = []));
          }
          async loadWallet(t) {
            const r = await p.get(),
              n = r.secretKeyToMnemonic(t),
              i = r.mnemonicToSecretKey(n);
            if (!i)
              throw new s.WalletError({
                type: a.WALLET_ERROR,
                error: new Error("can't get a privateKey!"),
                instance: this,
              });
            return (
              T(O, this, e.from(i.sk).toString("hex")),
              (this.address = i.addr),
              { id: this.id, privateKey: f(O, this), address: this.address }
            );
          }
          async getInfo() {
            const { balance: e = null } = await this.getProvider(
              "balance",
            ).getInfo(this.address);
            return ((this.balance = e), { balance: e });
          }
          async getAddress() {
            if (f(O, this)) {
              const t = new Uint8Array(e.from(f(O, this), "hex")),
                r = await p.get(),
                n = r.secretKeyToMnemonic(t),
                i = r.mnemonicToSecretKey(n);
              return i.addr;
            }
            throw new s.WalletError({
              type: a.WALLET_ERROR,
              error: new Error("privateKey is empty!"),
              instance: this,
            });
          }
          async validateAddress(e) {
            const t = await p.get();
            return t.isValidAddress(e);
          }
          async createTransaction(e) {
            let { address: t, amount: r } = e;
            const n = await this.getProvider("send").getLatestBlock(),
              i = await this.signTransaction({
                from: this.address,
                to: t,
                fee: Number(this.fee),
                amount: Number(r),
                firstRound: n[b],
                lastRound: n[b] + P,
                note: new Uint8Array(0),
                genesisID: E,
                genesisHash: A,
                flatFee: !0,
              });
            return i.blob;
          }
          async signTransaction(t) {
            const r = new Uint8Array(e.from(f(O, this), "hex")),
              n = await p.get();
            return n.signTransaction(t, r);
          }
          setPrivateKey(e) {
            T(O, this, e);
          }
        }
        t.default = ALGOCoin;
      }).call(this, r(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    7838: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(r(129)),
        s = n(r(80)),
        a = r(19),
        o = r(27),
        c = r(67);
      const l = "v2",
        d = "payment-transaction";
      class AlgoExplorer extends i.default {
        getAllowedTickers() {
          return ["ALGO"];
        }
        getApiPrefix() {
          return l;
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}/accounts/${e}`;
        }
        modifyInfoResponse(e) {
          return { balance: e.account.amount };
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}/transaction/${e}`;
        }
        getTransactionsUrl(e) {
          return `${this.getApiPrefix()}/accounts/${e}/transactions`;
        }
        getTransactionsParams(e, t, r) {
          return (
            void 0 === t && (t = 0),
            void 0 === r && (r = this.defaultTxLimit),
            {}
          );
        }
        async getTransactions(e, t, r) {
          return (
            void 0 === t && (t = 0),
            void 0 === r && (r = this.defaultTxLimit),
            super.getTransactions(e, t, r)
          );
        }
        handleRequestError(e, t) {
          var r;
          if (
            (null === (r = e.response) || void 0 === r ? void 0 : r.status) ===
            o.HTTP_STATUS_NOT_FOUND
          )
            switch (t.type) {
              case o.GET_BALANCE_TYPE:
                return { account: { amount: "0" } };
              case o.GET_TRANSACTIONS_TYPE:
                return { transactions: [] };
            }
          return super.handleRequestError(e, t);
        }
        modifyTransactionsResponse(e, t) {
          if (
            !1 ===
            Array.isArray(null === e || void 0 === e ? void 0 : e.transactions)
          )
            throw new a.ExplorerRequestError({
              type: o.GET_TRANSACTIONS_TYPE,
              error: e,
              instance: this,
            });
          const r = e["current-round"];
          return e.transactions.map(
            (e) =>
              new s.default({
                walletid: this.wallet.id,
                ticker: this.wallet.ticker,
                name: this.wallet.name,
                alias: this.wallet.alias,
                explorer: this.constructor.name,
                txid: this.getTxHash(e),
                direction: this.getTxDirection(t, e),
                otherSideAddress: this.getTxOtherSideAddress(t, e),
                amount: this.getTxValue(t, e),
                fee: this.wallet.toCurrencyUnit(e.fee),
                feeTicker: this.wallet.parent,
                datetime: this.getTxDateTime(e),
                memo: this.getTxMemo(e),
                confirmations: this.getTxConfirmations(r, e),
              }),
          );
        }
        getTxHash(e) {
          return e.id;
        }
        getTxDirection(e, t) {
          return t[d].receiver === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? t.sender : t[d].receiver;
        }
        getTxValue(e, t) {
          return Number(
            this.wallet.toCurrencyUnit(
              this.getTxDirection(e, t)
                ? t[d].amount
                : new this.wallet.BN(t[d].amount).add(
                    new this.wallet.BN(t.fee),
                  ),
            ),
          );
        }
        getTxDateTime(e) {
          return (0, c.convertSecondsToDateTime)(e["round-time"]);
        }
        getTxConfirmations(e, t) {
          return e - t["confirmed-round"];
        }
      }
      t.default = AlgoExplorer;
    },
    7839: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(r(129));
      const s = "v2";
      class AlgoNodeExplorer extends i.default {
        getAllowedTickers() {
          return ["ALGO"];
        }
        getApiPrefix() {
          return s;
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "/transactions";
        }
        getSendTransactionParams(e) {
          return e;
        }
        getSendOptions() {
          return { headers: { "Content-Type": "application/x-binary" } };
        }
        getLatestBlockUrl() {
          return this.getApiPrefix() + "/transactions/params";
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fee) || 0);
        }
        modifySendTransactionResponse(e) {
          return { txid: e.txId };
        }
      }
      t.default = AlgoNodeExplorer;
    },
  },
]);
