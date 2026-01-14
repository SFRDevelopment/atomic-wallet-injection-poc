(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [327, 32],
  {
    2669: function (e, t, n) {
      "use strict";
      var s = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(n(69)),
        i = n(805),
        r = s(n(230)),
        o = n(19),
        l = n(27),
        c = s(n(73)),
        d = m(n(8)),
        h = s(n(7183)),
        u = s(n(7185)),
        g = s(n(7186)),
        f = s(n(794)),
        w = n(2806);
      function m(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            s = new WeakMap();
        return (m = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            i,
            r = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((a = t ? s : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, r);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? a(r, n, i)
                : (r[n] = e[n]));
          return r;
        })(e, t);
      }
      function y(e, t, n) {
        (k(e, t), t.set(e, n));
      }
      function k(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function b(e, t, n) {
        return (e.set(p(e, t), n), n);
      }
      function T(e, t) {
        return e.get(p(e, t));
      }
      function p(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
      }
      const B = "https://dex-atlantic.binance.org/",
        v = void 0,
        x = 8,
        N = "0",
        S = 16,
        A = 3,
        E = "500000",
        C = "binanceSdk";
      var U = new WeakMap();
      class BNBCoin extends (0, w.StakingMixin)(
        (0, w.HasProviders)((0, w.HasTokensMixin)(r.default)),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: s,
            feeData: i,
            explorers: r,
            txWebUrl: o,
            socket: l,
            id: c,
            name: d,
            ticker: w,
            decimal: m,
            unspendableBalance: k,
          } = e;
          const b = {
            id: c,
            alias: t,
            notify: s,
            name: d,
            ticker: w,
            decimal: m || x,
            unspendableBalance: k || N,
            explorers: r,
            txWebUrl: o,
            socket: l,
            feeData: i,
            dependencies: {
              [C]: new f.default(() =>
                Promise.all([
                  n.e(37),
                  n.e(246),
                  n.e(130),
                  n.e(199),
                  n.e(213),
                  n.e(349),
                  n.e(161),
                  n.e(189),
                ]).then(n.t.bind(null, 8990, 7)),
              ),
            },
          };
          (super(b),
            y(this, U, void 0),
            (0, a.default)(this, "bncClient", null),
            (0, a.default)(this, "isBncClientInitialized", !1),
            this.setExplorersModules([u.default, g.default, h.default]),
            this.loadExplorers(b),
            (this.derivation = v),
            (this.fee = i.fee),
            (this.freezeFee = i.freezeFee || E),
            (this.reserveForStake = i.reserveForStake || E),
            (this.transactions = []),
            (this.tokens = {}),
            (this.fields.paymentId = !0));
        }
        async getBncClient() {
          if (!this.bncClient) {
            const { BncClient: e } = await this.loadLib(C),
              t = new e(B);
            (t.chooseNetwork("mainnet"), (this.bncClient = t));
          }
          return this.bncClient;
        }
        async initBncClient(e) {
          if (!this.isBncClientInitialized)
            try {
              (await e.initChain(),
                await e.setPrivateKey(T(U, this)),
                (this.isBncClientInitialized = !0));
            } catch (t) {
              console.warn(
                "BNB coreLibrary load FAILED. It would be attempt to re-initialize during each sendTransaction call. Error thrown:",
                t,
              );
            }
        }
        async getInitializedBncClient() {
          const e = await this.getBncClient();
          return (await this.initBncClient(e), e);
        }
        freezeTokenBalanceOnce(e) {
          return this.canRun("freezeTokenBalance") && this.freezeTokenBalance
            ? this.freezeTokenBalance(e)
            : {};
        }
        unfreezeTokenBalanceOnce(e) {
          return this.canRun("unfreezeTokenBalance") &&
            this.unfreezeTokenBalance
            ? this.unfreezeTokenBalance(e)
            : {};
        }
        get shouldSkipTokensFetchAwait() {
          return !0;
        }
        async loadWallet(e, t) {
          const [n, { crypto: s }] = await Promise.all([
            this.getBncClient(),
            this.loadLib(C),
          ]);
          return (
            b(U, this, s.getPrivateKeyFromMnemonic(t)),
            (this.address = s.getAddressFromPrivateKey(
              T(U, this),
              n.addressPrefix,
            )),
            this.initBncClient(n),
            { id: this.id, privateKey: T(U, this), address: this.address }
          );
        }
        async getTransaction(e) {
          const t = this.transactions.filter((t) => t.txid === e);
          return t.length > 0 ? t[0] : {};
        }
        async getPublicKey() {
          const { crypto: e } = await this.loadLib(C);
          return e.getPublicKeyFromPrivateKey(T(U, this));
        }
        async getAddress() {
          if (!T(U, this))
            throw new Error(
              "BNB: Could not load address from core library because the privateKey is not set",
            );
          if (!this.address) {
            const { crypto: e } = await this.loadLib(C);
            this.address = e.getAddressFromPrivateKey(T(U, this));
          }
          return this.address;
        }
        async validateAddress(e) {
          const { crypto: t } = await this.loadLib(C);
          return t.checkAddress(e, "bnb");
        }
        async createTransaction(e) {
          let { address: t, amount: n, memo: s, asset: a = "BNB" } = e;
          return { address: t, amount: n, memo: s, asset: a };
        }
        createDelegationTransaction(e) {
          let {
            account: t,
            toValidator: n,
            amount: s,
            symbol: a = "BNB",
            sideChainId: i = "bsc",
          } = e;
          return {
            delegateAddress: t,
            validatorAddress: n,
            amount: s,
            symbol: a,
            sideChainId: i,
          };
        }
        createUnDelegationTransaction(e) {
          let {
            account: t,
            toValidator: n,
            amount: s,
            symbol: a = "BNB",
            sideChainId: i = "bsc",
          } = e;
          return {
            delegateAddress: t,
            validatorAddress: n,
            amount: s,
            symbol: a,
            sideChainId: i,
          };
        }
        createReDelegationTransaction(e) {
          let {
            account: t,
            fromValidator: n,
            toValidator: s,
            amount: a,
            symbol: i = "BNB",
            sideChainId: r = "bsc",
          } = e;
          return {
            delegateAddress: t,
            validatorSrcAddress: n,
            validatorDstAddress: s,
            amount: a,
            symbol: i,
            sideChainId: r,
          };
        }
        async sendDelegationTransaction(e) {
          const t = await this.getInitializedBncClient(),
            { status: n, result: s } = await t.stake.bscDelegate(e);
          if (200 !== n)
            throw new Error(
              `${this.ticker}: sendDelegationTransaction error: ${JSON.stringify(s)}`,
            );
          const a = s[0];
          if (!a.ok)
            throw new Error(
              `BNB: asset (${this.ticker}) : sendDelegationTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(s)}`,
            );
          return { txid: a.hash };
        }
        async sendUnDelegationTransaction(e) {
          const t = await this.getInitializedBncClient(),
            { status: n, result: s } = await t.stake.bscUndelegate(e);
          if (200 !== n)
            throw new Error(
              `${this.ticker}: sendUnDelegationTransaction error: ${JSON.stringify(s)}`,
            );
          const a = s[0];
          if (!a.ok)
            throw new Error(
              `BNB: asset (${this.ticker}) : sendUnDelegationTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(s)}`,
            );
          return { txid: a.hash };
        }
        async sendReDelegationTransaction(e) {
          const t = await this.getInitializedBncClient();
          return t.stake.bscReDelegate(e);
        }
        async createTokenTransaction(e) {
          return e;
        }
        async signOrder(e) {
          const { crypto: t } = await this.loadLib(C);
          return t
            .generateSignature(this.toHex(JSON.stringify(e)), T(U, this))
            .toString("hex");
        }
        toHex(e) {
          let t = "";
          for (let n = 0; n < e.length; n += 1) {
            const s = e.charCodeAt(n).toString(S);
            t += s;
          }
          return t;
        }
        async getFee() {
          return new this.BN(this.fee);
        }
        async getFreezeFee() {
          return new this.BN(this.freezeFee);
        }
        async getInfo() {
          return (
            await this.getBalance(),
            await this.getStakingInfo(),
            { balance: this.balance, balances: this.balances, transactions: [] }
          );
        }
        async getBalance() {
          const e = await this.getProvider("balance").getBalance(this.address);
          if (!e) return this.balance;
          for (const n of Object.values(this.tokens)) {
            const t = e.find((e) => e.asset === n.ticker),
              s = t
                ? new this.BN(n.toMinimalUnit(t.free))
                    .add(new this.BN(n.toMinimalUnit(t.frozen)))
                    .add(new this.BN(n.toMinimalUnit(t.locked)))
                : "0";
            ((n.balance = s.toString()),
              (n.balances.frozen = t ? String(t.frozen) : "0"),
              (n.balances.locked = t ? String(t.locked) : "0"),
              (n.balances.available = t ? String(t.free) : n.divisibleBalance));
          }
          const t = e.find((e) => e.asset === this.ticker);
          return t
            ? ((this.balance = this.toMinimalUnit(t.free)), this.balance)
            : ((this.balance = "0"), this.balance);
        }
        async sendTransaction(e) {
          let { address: t, amount: n, memo: s, asset: a = "BNB" } = e;
          const i = this.address,
            r = this.toCurrencyUnit(n),
            o = await this.getInitializedBncClient(),
            { result: l, status: c } = await o.transfer(i, t, r, a, s);
          if (200 !== c)
            throw new Error(
              `${this.ticker}: sendTransaction error: ${JSON.stringify(l)}`,
            );
          const d = l[0];
          if (!d.ok)
            throw new Error(
              `BNB: asset (${a}) : sendTransaction error:\n        coreLib.transfer is not ok, got: ${JSON.stringify(l)}`,
            );
          return { txid: d.hash };
        }
        async sendMultiTransaction(e) {
          const t = await this.getInitializedBncClient(),
            { result: n, status: s } = await t.multiSend(this.address, e);
          if (200 !== s)
            throw new Error(
              `${this.ticker}: sendTransaction error: ${JSON.stringify(n)}`,
            );
          const a = n[0];
          if (!a.ok)
            throw new Error(
              "BNB: sendTransaction error:\n        coreLib.transfer is not ok, got: " +
                JSON.stringify(n),
            );
          return { txid: a.hash };
        }
        async placeOrder(e, t, n, s, a, i, r) {
          (void 0 === n && (n = 1),
            void 0 === s && (s = this.address),
            void 0 === a && (a = "AWC-986_BNB"),
            void 0 === i && (i = null),
            void 0 === r && (r = A));
          const c = await this.getInitializedBncClient();
          return c.placeOrder(s, a, n, t, e, i, r).catch((e) => {
            throw new o.WalletError({
              type: l.SEND_TRANSACTION_TYPE,
              error: new Error("place Order failed: " + e.message),
              instance: this,
            });
          });
        }
        async getPlaceOrderTx(e) {
          const t = await this.getInitializedBncClient();
          return t.getTx(e).catch((e) => {
            throw new o.WalletError({
              type: "GetTx",
              error: new Error("get tx failed: " + e.message),
              instance: this,
            });
          });
        }
        async setPrivateKey(e) {
          b(U, this, e);
          const t = await this.getBncClient();
          return t.setPrivateKey(e);
        }
        createToken(e) {
          return new i.BNBToken({ parent: this, ...e });
        }
        async getTokenList() {
          return d.default.get(d.ConfigKey.BnbTokens);
        }
        async getUserTokenList() {
          const e = await this.getBncClient(),
            t = await e.getBalance(this.address);
          if (!t) return [];
          const n = t
            .map((e) => e.symbol)
            .filter((e) => e.toLowerCase() !== this.ticker.toLowerCase());
          return this.getProvider("node").getTokenList(n);
        }
        getExcludedTokenList() {
          return ["BNB"];
        }
        async getTransactions(e) {
          let { address: t = this.address } = void 0 === e ? {} : e;
          const { transactions: n = [] } = await this.getProvider(
            "history",
          ).getTransactions({ address: t });
          return n;
        }
        getTokenObject(e, t) {
          return {
            contract: e.owner,
            name: e.name,
            ticker: e.symbol,
            decimal: e.decimal || x,
            parentTicker: e.ticker,
            uniqueField: e.symbol,
            confirmed: e.confirmed,
            notify: Boolean(e.notify),
          };
        }
        async freezeTokenBalance(e, t) {
          const n = await this.getInitializedBncClient(),
            s = await n.tokens.freeze(this.address, e, String(t));
          if (s.result && s.result.length > 0) return s.result[0].hash;
          if (200 !== s.status)
            throw new o.WalletError({
              type: "Freeze amount",
              error: new Error(`Freeze amount for ${e} is failed: ${s.error}`),
              instance: this,
            });
          return s;
        }
        async unfreezeTokenBalance(e, t) {
          const n = await this.getInitializedBncClient(),
            s = await n.tokens.unfreeze(this.address, e, String(t));
          if (s.result && s.result.length > 0) return s.result[0].hash;
          if (200 !== s.status)
            throw new o.WalletError({
              type: "Freeze amount",
              error: new Error(
                `Unfreeze amount for ${e} is failed: ${s.error}`,
              ),
              instance: this,
            });
          return s;
        }
        async connectSocket() {
          this.getProvider("socket").connectSocket(this.address);
        }
        async updateBalances(e) {
          const t = Object.values(this.tokens);
          e.forEach((e) => {
            const n = e.a;
            if ("BNB" === n)
              return void (this.balance = this.toMinimalUnit(e.f));
            const s = t.find((e) => e.ticker === n);
            if (!s)
              return void console.warn(
                n +
                  " is not found in the BNB token list. Balance update skipped.",
              );
            const a = e.f,
              i = e.l,
              r = e.r,
              o = new this.BN(s.toMinimalUnit(a))
                .add(new this.BN(s.toMinimalUnit(r)))
                .add(new this.BN(s.toMinimalUnit(i)));
            ((s.balance = o.toString()),
              (s.balances.frozen = r),
              (s.balances.locked = i),
              (s.balances.available = a));
          });
        }
        async availableBalance(e) {
          const t = this.balance;
          if (!t) return null;
          const n = (e && new this.BN(e)) || (await this.getFee()),
            s = new this.BN(t).sub(n).sub(new this.BN(this.unspendableBalance));
          return new this.BN(s).lt(new this.BN(0))
            ? "0"
            : this.toCurrencyUnit(s);
        }
        calculateTotal(e) {
          let { balance: t, staked: n, unstaking: s } = e;
          return new c.default(
            t.toBN().add(n.toBN()).add(s.toBN()).toString(),
            this,
          );
        }
        async calculateAvailableForStake() {
          const e = new this.BN(
            this.toMinimalUnit(await this.availableBalance()),
          ).sub(new this.BN(this.reserveForStake));
          return new c.default(e.isNeg() ? "0" : e, this);
        }
      }
      t.default = BNBCoin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    7183: function (e, t, n) {
      "use strict";
      (function (e) {
        var s = n(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var a = s(n(409)),
          i = s(n(129)),
          r = s(n(7184)),
          o = s(n(80)),
          l = s(n(81));
        const c = {
          WebSocket: e.WebSocket,
          connectionTimeout: 2e3,
          maxReconnectionDelay: 2e4,
          minReconnectionDelay: 1e4,
          maxRetries: 10,
        };
        class BinanceDex extends i.default {
          constructor() {
            (super(...arguments), (this.socket = null));
          }
          getAllowedTickers() {
            return ["BNB"];
          }
          getTransactionUrl(e) {
            return `${this.config.baseUrl}api/v1/tx/${e}`;
          }
          getTransactionParams() {
            return { format: "json" };
          }
          getLatestBlockUrl() {
            return this.config.baseUrl + "api/v1/node-info";
          }
          getBlockUrl(e) {
            return `${this.config.baseUrl}api/v2/transactions-in-block/${e}`;
          }
          async getBlock(e) {
            const t = await this.request(this.getBlockUrl(e));
            return t;
          }
          async getTransactions(e, t) {
            void 0 === t && (t = "BNB");
            const { tx: n } = await this.request(
              `${this.config.baseUrl}api/v1/transactions?address=${e}`,
            );
            return this.modifyTransactionsResponse(
              n
                .filter((e) => "TRANSFER" === e.type)
                .filter((e) => e.txAsset === t),
              e,
            );
          }
          async getMultisendTransactions(e, t) {
            this.latestBlock = await this.getLatestBlock();
            const n = await Promise.all(
              t.map(async (t) => {
                let { hash: n, height: s } = t;
                const a = await this.getBlock(s).catch((e) =>
                  console.warn("GetBlockError", e),
                );
                if (!a) return;
                const {
                    subTransactions: i = [],
                    memo: r,
                    timeStamp: o,
                  } = a.tx.find((e) => e.txHash === n),
                  l = i.find((t) => [t.toAddr, t.fromAddr].includes(e));
                if (!l) return;
                const c = l.fromAddr,
                  d = l.toAddr,
                  h = l.value,
                  u = l.txAsset,
                  g = Number(this.latestBlock) - Number(s);
                return this.modifyMultisendTransactionResponse(
                  {
                    ticker: u,
                    value: h,
                    memo: r,
                    fromAddr: c,
                    toAddr: d,
                    hash: n,
                    timeStamp: o,
                    confirmations: g,
                  },
                  e,
                );
              }),
            );
            return n.filter(Boolean);
          }
          async modifyMultisendTransactionResponse(e, t) {
            return new o.default({
              ticker: e.ticker,
              name: this.wallet.name,
              alias: this.wallet.alias,
              explorer: this.constructor.name,
              txid: this.getTxHash(e),
              fee: this.getTxFee(e),
              feeTicker: this.wallet.parent,
              direction: this.getTxDirection(t, e),
              otherSideAddress: this.getTxOtherSideAddress(t, e),
              amount: this.getTxValue(t, e),
              datetime: this.getTxDateTime(e),
              memo: this.getTxMemo(e),
              confirmations: this.getTxConfirmations(e),
            });
          }
          modifyLatestBlockResponse(e) {
            return e.sync_info.latest_block_height;
          }
          getTxHash(e) {
            return e.hash || e.txHash;
          }
          getTxDirection(e, t) {
            return t.toAddr === e;
          }
          getTxOtherSideAddress(e, t) {
            return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr;
          }
          getTxValue(e, t) {
            return t.value.replace(/(\.\d*[1-9])0+$|\.0*$/, "$1");
          }
          getTxDateTime(e) {
            return new Date(e.timeStamp);
          }
          getTxMemo(e) {
            return e.memo;
          }
          getTxConfirmations(e) {
            return e.confirmations || e.txAge;
          }
          async getTokenList(e) {
            void 0 === e && (e = []);
            const t = await this.request(
              this.config.baseUrl + "api/v1/tokens?limit=1000",
            ).catch(() => r.default);
            return t.filter((t) => e.includes(t.symbol));
          }
          setSocketClient(e) {
            this.socket
              ? this.socket.reconnect()
              : (this.socket = new a.default(
                  `${this.config.websocketUrl}${e}`,
                  void 0,
                  c,
                ));
          }
          disconnectSocket() {
            this.socket.close();
          }
          async connectSocket(e) {
            (this.setSocketClient(e),
              this.socket._listeners.message.length > 0
                ? console.warn(
                    "[BNB][websocket] already have message listener, skip",
                  )
                : this.socket.addEventListener("message", async (t) => {
                    try {
                      const n = JSON.parse(t.data);
                      if (
                        ("accounts" === n.stream &&
                          this.wallet.updateBalances(n.data.B),
                        "transfers" === n.stream)
                      ) {
                        const t = n.data,
                          s = t.H,
                          a = t.f;
                        t.t.forEach((t) => {
                          const n = t.o,
                            i = n === e;
                          t.c.forEach((e) => {
                            const t = e.a,
                              r = String(e.A).replace(
                                /(\.\d*[1-9])0+$|\.0*$/,
                                "$1",
                              ),
                              c = new o.default({
                                ticker: t,
                                txid: s,
                                direction: i,
                                otherSideAddress: i ? a : n,
                                amount: r,
                                datetime: new Date(),
                                alias: this.wallet.alias,
                              });
                            (l.default.filterAndUpdateTransactions([c]),
                              this.eventEmitter.emit(
                                `${this.wallet.parent}-${t}::new-socket-tx`,
                                { unconfirmedTx: c },
                              ));
                          });
                        });
                      }
                    } catch (n) {
                      console.error(n);
                    }
                  }));
          }
          updateParams(e) {
            (super.updateParams(e),
              e.websocketUrl &&
                this.config.websocketUrl !== e.websocketUrl &&
                ((this.config.websocketUrl = e.websocketUrl),
                this.disconnectSocket(),
                this.connectSocket(this.wallet.address)));
          }
        }
        t.default = BinanceDex;
      }).call(this, n(13));
    },
    7184: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Atomic Wallet Token","symbol":"AWC-986","original_symbol":"AWC","owner":"bnb1g5xj69c0s0x646hug7j3vr6eamlkf7jw3cr3yw"},{"name":"Harmony.BNB","symbol":"ONE-5F9","original_symbol":"ONE","owner":"bnb1a03uvqmnqzl85csnxnsx2xy28m76gkkht46f2l"},{"name":"Gifto","symbol":"GTO-908","original_symbol":"GTO","owner":"bnb1lvp8k3zenlfp2pl2nyaf428xjgh385m258gzvq"},{"name":"Raven Protocol","symbol":"RAVEN-F66","original_symbol":"RAVEN","owner":"bnb1vdjhrkgvt4y76ykyvrvh68pzqg3lvv0y5yfxyf"},{"name":"Contentos","symbol":"COS-2E4","original_symbol":"COS","owner":"bnb1u9j9hkst6gf09dkdvxlj7puk8c7vh68a0kkmht"},{"name":"Chiliz","symbol":"CHZ-ECD","original_symbol":"CHZ","owner":"bnb1cghr4z8ag440tv4wnk3l6wzynytlpvfqltm9ph"},{"name":"Rune","symbol":"RUNE-B1A","original_symbol":"RUNE","owner":"bnb1e4q8whcufp6d72w8nwmpuhxd96r4n0fstegyuy"},{"name":"Elrond","symbol":"ERD-D06","original_symbol":"ERD","owner":"bnb1m5uzzfxs7x05sl28gg96zyecn9jwgtkpyeftyn"},{"name":"Travala.com","symbol":"AVA-645","original_symbol":"AVA","owner":"bnb1dm9c7gccgd07td5r69m50u8fg8danfgqvlhj6c"},{"name":"WazirX","symbol":"WRX-ED1","original_symbol":"WRX","owner":"bnb19cvhgyrxmkw30hlqs9c5lp966drjzyylytl74z"},{"name":"NOW Token","symbol":"NOW-E68","original_symbol":"NOW","owner":"bnb1nug8ls9f0et0t558m4chmm46mf85ehpq0u8gwv"}]',
      );
    },
    7185: function (e, t, n) {
      "use strict";
      var s = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(n(129)),
        i = n(19),
        r = n(27),
        o = s(n(80)),
        l = n(384);
      const c = 8,
        d = {
          SIDECHAIN_DELEGATE: l.TxTypes.STAKE,
          SIDECHAIN_UNDELEGATE: l.TxTypes.UNDELEGATE,
          TRANSFER: l.TxTypes.TRANSFER,
        };
      class BinanceExplorer extends a.default {
        getAllowedTickers() {
          return ["BNB"];
        }
        async getBalance(e) {
          const { balance: t } = await this.request(
            `${this.config.baseUrl}api/v1/balances/${e}`,
          );
          return t;
        }
        async getAssetTransfers(e) {
          let { address: t, txArray: n } = e;
          const s = [],
            a = n.reduce((e, t) => {
              if (Object.keys(d).includes(t.txType)) {
                if (t.hasChildren)
                  return (s.push({ hash: t.txHash, height: t.blockHeight }), e);
                e.push(t);
              }
              return e;
            }, []);
          return {
            transactions: this.modifyTransactionsResponse(a, t),
            multisend: s,
          };
        }
        async getTransactions(e) {
          let { address: t } = e;
          const n = `${this.config.baseUrl}api/v1/txs?page=1&rows=100&address=${t}`,
            s = await this.request(n).catch((e) => {
              throw new i.ExplorerRequestError({
                type: r.GET_TRANSACTIONS_TYPE,
                error: e,
                instance: this,
              });
            });
          if (0 === s.txNums) return [];
          const a = await this.getAssetTransfers({
            txArray: s.txArray,
            address: t,
          });
          return a;
        }
        modifyTransactionsResponse(e, t) {
          return Array.isArray(e)
            ? e.map(
                (e) =>
                  new o.default({
                    ticker: e.txAsset,
                    name: this.wallet.name,
                    txid: this.getTxHash(e),
                    walletid: this.getTxAssetId(e.txAsset),
                    fee: this.getTxFee(e),
                    feeTicker: this.wallet.parent,
                    direction: this.getTxDirection(t, e),
                    otherSideAddress: this.getTxOtherSideAddress(t, e),
                    amount: this.getTxValue(t, e),
                    datetime: this.getTxDateTime(e),
                    memo: this.getTxMemo(e),
                    confirmations: this.getTxConfirmations(e),
                    txType: this.getTxType(e),
                    alias: this.wallet.alias,
                  }),
              )
            : [];
        }
        getTxType(e) {
          let { txType: t } = e;
          return d[t] || d.TRANSFER;
        }
        getTxAssetId(e) {
          if (e === this.wallet.ticker) return this.wallet.id;
          const t = Object.keys(this.wallet.tokens()).find(
            (t) => this.wallet.tokens()[t].ticker === e,
          );
          return this.wallet.tokens()[t].id;
        }
        getTxHash(e) {
          return e.txHash;
        }
        getTxDirection(e, t) {
          return "TRANSFER" === t.txType && (t.hasChildren || t.toAddr === e);
        }
        getTxOtherSideAddress(e, t) {
          if (t.hasChildren) return "Multiple Addresses";
          if ("TRANSFER" !== t.txType)
            try {
              return JSON.parse(t.data).validatorAddress;
            } catch {
              return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr;
            }
          return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr;
        }
        getTxValue(e, t) {
          if (void 0 === t.value) return "0";
          const n = String(t.value).replace(/(\.\d*[1-9])0+$|\.0*$/, "$1");
          let s = !1;
          return (
            -1 !== n.search("e") && (s = !0),
            s ? t.value.toFixed(c).replace(/(\.\d*[1-9])0+$|\.0*$/, "$1") : n
          );
        }
        getTxDateTime(e) {
          return new Date(e.timeStamp);
        }
        getTxMemo(e) {
          return e.memo;
        }
        getTxConfirmations(e) {
          return e.txAge;
        }
        getTxFee(e) {
          return (e && e.txFee) || 0;
        }
      }
      t.default = BinanceExplorer;
    },
    7186: function (e, t, n) {
      "use strict";
      var s = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(n(129)),
        i = n(19),
        r = n(27),
        o = s(n(73));
      const l = 0,
        c = 100;
      class BinanceBCExplorer extends a.default {
        getAllowedTickers() {
          return ["BNB", "BSC"];
        }
        getStakingInfoMethod() {
          return "get";
        }
        getStakingInfoBaseUrl(e) {
          return `${this.config.baseUrl}v1/staking/chains/bsc/delegators/${e}`;
        }
        getDelegationsUrl(e) {
          return this.getStakingInfoBaseUrl(e) + "/delegations";
        }
        getUnDelegationsUrl(e) {
          return this.getStakingInfoBaseUrl(e) + "/ubds";
        }
        getReDelegationsUrl(e) {
          return this.getStakingInfoBaseUrl(e) + "/reds";
        }
        getRewardsUrl(e) {
          return this.getStakingInfoBaseUrl(e) + "/rewards";
        }
        async getDelegations(e) {
          let {
            address: t = this.wallet.address,
            offset: n = l,
            limit: s = c,
          } = void 0 === e ? {} : e;
          const a = await this.request(
            this.getDelegationsUrl(t),
            this.getStakingInfoMethod(),
            { offset: n, limit: s },
          ).catch((e) => {
            throw new i.ExplorerRequestError({
              type: r.GET_TRANSACTIONS_TYPE,
              error: e,
              instance: this,
            });
          });
          return null === a || void 0 === a ? void 0 : a.delegations;
        }
        async getUnDelegations(e) {
          let {
            address: t = this.wallet.address,
            offset: n = l,
            limit: s = c,
          } = void 0 === e ? {} : e;
          const a = await this.request(
            this.getUnDelegationsUrl(t),
            this.getStakingInfoMethod(),
            { offset: n, limit: s },
          ).catch((e) => {
            throw new i.ExplorerRequestError({
              type: r.GET_TRANSACTIONS_TYPE,
              error: e,
              instance: this,
            });
          });
          return null === a || void 0 === a
            ? void 0
            : a.unbondingDelegations.filter((e) => {
                let { completeHeight: t } = e;
                return !t;
              });
        }
        async getReDelegations(e) {
          let {
            address: t = this.wallet.address,
            offset: n = l,
            limit: s = c,
          } = void 0 === e ? {} : e;
          const a = await this.request(
            this.getReDelegationsUrl(t),
            this.getStakingInfoMethod(),
            { offset: n, limit: s },
          ).catch((e) => {
            throw new i.ExplorerRequestError({
              type: r.GET_TRANSACTIONS_TYPE,
              error: e,
              instance: this,
            });
          });
          return null === a || void 0 === a ? void 0 : a.redelegations;
        }
        async getRewards(e) {
          let {
            address: t = this.wallet.address,
            offset: n = l,
            limit: s = c,
          } = void 0 === e ? {} : e;
          const a = await this.request(
            this.getRewardsUrl(t),
            this.getStakingInfoMethod(),
            { offset: n, limit: s },
          ).catch((e) => {
            throw new i.ExplorerRequestError({
              type: r.GET_TRANSACTIONS_TYPE,
              error: e,
              instance: this,
            });
          });
          return null === a || void 0 === a ? void 0 : a.rewardDetails;
        }
        async getUserValidators(e, t) {
          (void 0 === e && (e = this.wallet.address),
            void 0 === t && (t = void 0));
          try {
            t ||
              (t = await Promise.all([
                this.getDelegations({ address: e }),
                this.getUnDelegations({ address: e }),
              ]));
            const n = new Map();
            return (
              t
                .flatMap((e) => e)
                .forEach((e) => {
                  Object.keys(e).forEach((t) => {
                    n.set(e.validator, { ...n.get(e.validator), [t]: e[t] });
                  });
                }),
              Array.from(n.values())
            );
          } catch (n) {
            throw new i.ExplorerRequestError({
              type: r.EXTERNAL_ERROR,
              error: n,
              instance: this,
            });
          }
        }
        async fetchStakingInfo(e) {
          const [t, n, s] = await Promise.all([
              this.getDelegations({ address: e }),
              this.getUnDelegations({ address: e }),
              this.getRewards({ address: e }),
            ]),
            a = t.reduce((e, t) => e.set(t.validator, t), new Map()),
            i = n.reduce((e, t) => e.set(t.validator, t), new Map()),
            r = s.reduce((e, t) => {
              const n = e.get(t.validator);
              return (n && (t.reward += n.reward), e.set(t.validator, t));
            }, new Map()),
            l = await this.getUserValidators(e, [t, n]),
            c = l.reduce((e, t) => {
              var n, s, l;
              let { validatorName: c, validator: d, valName: h } = t;
              const u = new o.default(
                  this.wallet
                    .toMinimalUnit(
                      null === (n = a.get(d)) || void 0 === n
                        ? void 0
                        : n.amount,
                    )
                    .toString(),
                  this.wallet,
                ),
                g = new o.default(
                  this.wallet
                    .toMinimalUnit(
                      null === (s = i.get(d)) || void 0 === s
                        ? void 0
                        : s.balance,
                    )
                    .toString(),
                  this.wallet,
                );
              return (
                (e[d] = {
                  staked: u,
                  unstaked: g,
                  rewards: new o.default(
                    this.wallet
                      .toMinimalUnit(
                        null === (l = r.get(d)) || void 0 === l
                          ? void 0
                          : l.reward,
                      )
                      .toString(),
                    this.wallet,
                  ),
                  name: c || h,
                  isUnstakeAvailable:
                    u.toBN().gt(new this.wallet.BN(0)) &&
                    g.toBN().eq(new this.wallet.BN(0)),
                }),
                e
              );
            }, {}),
            [d, h, u] = ["unstaked", "staked", "rewards"].map((e) =>
              Object.values(c).reduce(
                (t, n) => t.add(n[e].toBN()),
                new this.wallet.BN("0"),
              ),
            );
          return {
            total: new o.default(h.add(d).toString(), this.wallet),
            staked: new o.default(h.toString(), this.wallet),
            unstaking: new o.default(d.toString(), this.wallet),
            rewards: new o.default(u.toString(), this.wallet),
            validators: c,
          };
        }
      }
      t.default = BinanceBCExplorer;
    },
  },
]);
