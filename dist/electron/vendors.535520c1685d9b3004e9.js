(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [418],
  {
    2700: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(r(69)),
        a = n(r(230)),
        i = r(19),
        o = r(27),
        c = n(r(8009)),
        d = n(r(794));
      function l(e, t, r) {
        (u(e, t), t.set(e, r));
      }
      function u(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function h(e, t) {
        return e.get(y(e, t));
      }
      function p(e, t, r) {
        return (e.set(y(e, t), r), r);
      }
      function y(e, t, r) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : r;
        throw new TypeError("Private element is not present on this object");
      }
      const f = new d.default(() =>
          Promise.all([
            r.e(0),
            r.e(225),
            r.e(131),
            r.e(183),
            r.e(336),
            r.e(423),
            r.e(292),
            r.e(223),
            r.e(158),
            r.e(173),
            r.e(259),
            r.e(279),
            r.e(306),
            r.e(297),
          ]).then(r.t.bind(null, 5657, 7)),
        ),
        g = "Ark",
        m = "ARK",
        T = "m/44'/111'/0'/0/0",
        w = 8,
        b = "0",
        A = 11273e3,
        E = 2;
      var v = new WeakMap();
      class ARKCoin extends a.default {
        constructor(e) {
          let {
            alias: t,
            notify: r,
            feeData: n,
            explorers: a,
            txWebUrl: i,
            socket: o,
            id: d,
          } = e;
          const u = {
            id: d,
            alias: t,
            notify: r,
            name: g,
            ticker: m,
            decimal: w,
            unspendableBalance: b,
            explorers: a,
            txWebUrl: i,
            socket: o,
            feeData: n,
          };
          (super(u),
            l(this, v, void 0),
            (0, s.default)(this, "arkecosystemCryptoObj", null),
            (this.derivation = T),
            this.setExplorersModules([c.default]),
            this.loadExplorers(u),
            (this.fee = n.fee),
            (this.transactions = []));
        }
        async getArkecosystemCryptoObj() {
          if (this.arkecosystemCryptoObj) return this.arkecosystemCryptoObj;
          const {
            Crypto: e,
            Identities: t,
            Managers: r,
            Transactions: n,
          } = await f.get();
          (r.configManager.setFromPreset("mainnet"),
            r.configManager.setHeight(A));
          const s = r.configManager.all().network.pubKeyHash,
            a = {};
          return (
            (a.Crypto = e),
            (a.Identities = t),
            (a.Transactions = n),
            (a.pubKeyHash = s),
            (this.arkecosystemCryptoObj = a),
            a
          );
        }
        loadWallet(e, t) {
          return new Promise(async (e, r) => {
            const {
                Crypto: n,
                Identities: s,
                pubKeyHash: a,
              } = await this.getArkecosystemCryptoObj(),
              c = n.HDWallet.fromMnemonic(t),
              d = c.derivePath(this.derivation);
            (d.privateKey ||
              r(
                new i.WalletError({
                  type: o.WALLET_ERROR,
                  error: new Error("can't get a privateKey!"),
                  instance: this,
                }),
              ),
              p(v, this, d.toWIF()),
              (this.address = s.Address.fromPublicKey(
                d.publicKey.toString("hex"),
                a,
              )),
              e({
                id: this.id,
                privateKey: h(v, this),
                address: this.address,
              }));
          });
        }
        async getAddress() {
          if (h(v, this)) {
            const { Identities: e, pubKeyHash: t } =
                await this.getArkecosystemCryptoObj(),
              r = e.Keys.fromWIF(h(v, this));
            return e.Address.fromPublicKey(r.publicKey, t);
          }
          return new i.WalletError({
            type: o.WALLET_ERROR,
            error: new Error("privateKey is empty!"),
            instance: this,
          });
        }
        async validateAddress(e) {
          const { Identities: t, pubKeyHash: r } =
            await this.getArkecosystemCryptoObj();
          return t.Address.validate(e, r);
        }
        async createTransaction(e) {
          let { address: t, amount: r } = e;
          const { Transactions: n } = await this.getArkecosystemCryptoObj(),
            { nonce: s } = await this.getInfo(),
            a = new this.BN(s).addn(1);
          return n.BuilderFactory.transfer()
            .version(E)
            .nonce(a.toString())
            .recipientId(t)
            .amount(r)
            .fee(this.fee)
            .signWithWif(h(v, this))
            .getStruct();
        }
        setPrivateKey(e) {
          p(v, this, e);
        }
      }
      t.default = ARKCoin;
    },
    8009: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(r(129)),
        a = r(19),
        i = r(27);
      class ArkExplorer extends s.default {
        handleRequestError(e, t) {
          var r;
          if (
            (null === (r = e.response) || void 0 === r ? void 0 : r.status) ===
            i.HTTP_STATUS_NOT_FOUND
          )
            switch (t.type) {
              case i.GET_BALANCE_TYPE:
                return {
                  account: { balance: "0", transactions: [], nonce: 0 },
                };
              case i.GET_TRANSACTIONS_TYPE:
                return [];
            }
          return super.handleRequestError(e, t);
        }
        getAllowedTickers() {
          return ["ARK"];
        }
        getApiPrefix() {
          return "api";
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}/wallets/${e}`;
        }
        modifyInfoResponse(e) {
          return {
            balance: e.data.balance,
            transactions: this.wallet.transactions,
            nonce: e.data.nonce,
          };
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}/transactions/${e}`;
        }
        getTransactionsUrl(e) {
          return `${this.getApiPrefix()}/wallets/${e}/transactions`;
        }
        getTransactionsParams(e, t, r) {
          return (
            void 0 === t && (t = 0),
            void 0 === r && (r = this.defaultTxLimit),
            {
              limit: r,
              orderBy: "timestamp:desc",
              page: t > r ? parseInt(t / r, 10) : 1,
            }
          );
        }
        modifyTransactionsResponse(e, t) {
          return super.modifyTransactionsResponse(e.data, t);
        }
        getTxHash(e) {
          return e.id;
        }
        getTxDirection(e, t) {
          return t.recipient === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? t.sender : t.recipient;
        }
        getTxValue(e, t) {
          return Number(
            this.wallet.toCurrencyUnit(
              this.getTxDirection(e, t)
                ? t.amount
                : new this.wallet.BN(t.amount).add(new this.wallet.BN(t.fee)),
            ),
          );
        }
        getTxDateTime(e) {
          return new Date(Number(e.timestamp.unix + "000"));
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "/transactions";
        }
        getSendTransactionParams(e) {
          return { transactions: [e] };
        }
        modifySendTransactionResponse(e) {
          if (e.data.invalid.length > 0)
            throw new a.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error(e.data.invalid[0]),
              instance: this,
            });
          if (0 === e.data.broadcast.length)
            throw new a.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error("Not found broadcast transaction"),
              instance: this,
            });
          return { txid: e.data.broadcast[0] };
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fee) || 0);
        }
      }
      t.default = ArkExplorer;
    },
  },
]);
