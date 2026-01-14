(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [286, 32],
  {
    2674: function (e, t, s) {
      "use strict";
      (function (e) {
        var r = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var n = r(s(69)),
          a = r(s(230)),
          i = s(805),
          o = r(s(28)),
          c = N(s(8)),
          l = r(s(7208)),
          d = r(s(823)),
          u = s(19),
          h = s(27),
          f = r(s(815)),
          T = r(s(3210)),
          g = r(s(4925)),
          m = r(s(3279)),
          p = r(s(846)),
          w = r(s(4107)),
          y = r(s(794)),
          k = r(s(382)),
          v = r(s(158)),
          b = r(s(386));
        function N(e, t) {
          if ("function" == typeof WeakMap)
            var s = new WeakMap(),
              r = new WeakMap();
          return (N = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var n,
              a,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t ? r : s)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const s in e)
              "default" !== s &&
                {}.hasOwnProperty.call(e, s) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, s)) &&
                (a.get || a.set)
                  ? n(i, s, a)
                  : (i[s] = e[s]));
            return i;
          })(e, t);
        }
        function E(e, t, s) {
          (x(e, t), t.set(e, s));
        }
        function x(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function A(e, t) {
          return e.get(C(e, t));
        }
        function P(e, t, s) {
          return (e.set(C(e, t), s), s);
        }
        function C(e, t, s) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : s;
          throw new TypeError("Private element is not present on this object");
        }
        const L = "Polygon",
          R = "MATIC",
          B = "m/44'/0'/0'/0/0",
          S = 18,
          _ = "0",
          O = 137,
          U = 10 ** 9,
          I = "0x0",
          M = "150000";
        var D = new WeakMap();
        class MATICCoin extends (0, b.default)(
          (0, d.default)((0, v.default)((0, k.default)(a.default))),
        ) {
          constructor(e) {
            var t, r, a;
            (super({
              ...e,
              name: null !== (t = e.name) && void 0 !== t ? t : L,
              ticker: null !== (r = e.ticker) && void 0 !== r ? r : R,
              decimal: S,
              unspendableBalance: _,
              chainId: null !== (a = e.chainId) && void 0 !== a ? a : O,
              dependencies: {
                web3: new y.default(() =>
                  Promise.resolve().then(s.t.bind(null, 2654, 7)),
                ),
                hdkey: new y.default(() =>
                  s.e(16).then(s.t.bind(null, 2655, 7)),
                ),
              },
            }),
              E(this, D, void 0),
              (0, n.default)(this, "web3BaseUrl", void 0),
              (0, n.default)(this, "coreLibrary", null),
              (this.derivation = B));
            const { feeData: i, explorers: o } = e;
            (this.setExplorersModules([
              f.default,
              w.default,
              T.default,
              g.default,
              m.default,
              p.default,
            ]),
              this.loadExplorers(e),
              this.setFeeData(i),
              (this.gasPriceConfig = null),
              (this.bannedTokens = []));
            const c = o.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3BaseUrl = c.baseUrl),
              (this.fields.paymentId = !1),
              (this.tokens = {}),
              (this.nonce = new this.BN("0")),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (e, t, s) => {
                  this.eventEmitter.emit("socket::tx::confirmed", {
                    id: e,
                    ticker: s,
                  });
                },
              ));
          }
          async initCoreLibrary() {
            if (this.coreLibrary) return;
            const { default: e } = await this.loadLib("web3");
            this.coreLibrary = new e(this.web3BaseUrl);
          }
          async getCoreLibrary() {
            return (
              this.coreLibrary || (await this.initCoreLibrary()),
              this.coreLibrary
            );
          }
          setFeeData(e) {
            (void 0 === e && (e = {}),
              super.setFeeData(e),
              (this.gasLimit = String(e.gasLimit)),
              (this.nftGasLimitCoefficient = e.nftGasLimitCoefficient),
              (this.nftGasPriceCoefficient = e.nftGasPriceCoefficient),
              (this.gasLimitCoefficient = e.gasLimitCoefficient),
              (this.gasPriceCoefficient = e.gasPriceCoefficient),
              (this.defaultGasPrice = new this.BN(e.defaultGasPrice * U)),
              (this.defaultMaxGasPrice = e.defaultMaxGasPrice),
              (this.resendTimeout = e.resendTimeout),
              (this.tokenGasLimit = e.tokenGasLimit));
          }
          async getTransactions() {
            if (!this.address)
              throw new Error("MATIC: getTransactions: address is not loaded");
            try {
              const [e, t] = await Promise.allSettled([
                this.getProvider("history").getTransactions({
                  address: this.address,
                }),
                this.getProvider("history").getTokenTransactions({
                  address: this.address,
                }),
              ]);
              if ("rejected" === e.status) throw new Error(e.reason);
              if ("rejected" === t.status) throw new Error(t.reason);
              return [...e.value, ...(t.value || [])];
            } catch (e) {
              return (console.error(e), []);
            }
          }
          getExcludedTokenList() {
            return ["TRX", "EOS", "ICX", "VEN", "AION", "BTT", "KIN", "BNB"]
              .concat(Array.isArray(this.bannedTokens) ? this.bannedTokens : [])
              .map((e) => e.toLowerCase());
          }
          async loadWallet(e) {
            const [t, { hdkey: s }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib("hdkey"),
              ]),
              r = s.fromMasterSeed(e),
              n = r.getWallet(),
              a = await t.eth.accounts.privateKeyToAccount(
                n.getPrivateKeyString(),
              );
            if (!a) throw new Error(this.ticker + " wallet cannot be loaded");
            (P(D, this, a.privateKey), (this.address = a.address));
            try {
              await this.getNonce();
            } catch (i) {
              console.warn(i);
            }
            return {
              id: this.id,
              privateKey: A(D, this),
              address: this.address,
            };
          }
          async getAddress() {
            if (!A(D, this))
              throw new Error(this.ticker + " private key is empty");
            const e = await this.getCoreLibrary();
            return e.eth.accounts.privateKeyToAccount(A(D, this)).address;
          }
          async validateAddress(e) {
            const t = await this.getCoreLibrary();
            return t.utils.isAddress(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              amount: s,
              paymentData: r = null,
              nonce: n,
              userGasPrice: a,
              gasLimit: i,
              multiplier: o = this.gasPriceCoefficient,
            } = e;
            const c = a || (0, l.default)(await this.getGasPrice(), o);
            await this.getNonce();
            const d = {
              to: t,
              value: s,
              gas: i || this.gasLimit,
              chainId: this.chainId,
              gasPrice: new this.BN(c),
              nonce: n || this.nonce,
            };
            ((this.nonce = this.nonce.add(new this.BN(1))), r && (d.data = r));
            const u = await this.getCoreLibrary(),
              h = await u.eth.accounts.signTransaction(d, A(D, this));
            return h.rawTransaction;
          }
          async createNftTransaction(e) {
            let {
              toAddress: t,
              contractAddress: s,
              data: r,
              userOptions: n = {},
            } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: a,
                  nonce: i,
                } = await this.getNftTransferGasParams(t, r, n),
                o = { to: s, value: I, gas: e, data: r, nonce: i, gasPrice: a },
                c = await this.getCoreLibrary(),
                { rawTransaction: l } = await c.eth.accounts.signTransaction(
                  o,
                  A(D, this),
                );
              return l;
            } catch (a) {
              throw (
                console.warn(a),
                new u.ExternalError({
                  type: h.EXTERNAL_ERROR,
                  error: a,
                  instance: this,
                })
              );
            }
          }
          createTokens(e, t) {
            return (
              void 0 === e && (e = []),
              super.createTokens(
                e.filter((e) => {
                  let { ticker: t } = e;
                  return t !== this.ticker;
                }),
                t,
              )
            );
          }
          async createTokenTransaction(e) {
            let {
              address: t,
              amount: s,
              userGasPrice: r,
              gasLimit: n,
              contract: a,
              multiplier: i,
              nonce: o,
            } = e;
            const c = this.getProvider("send").createSendTokenContract(
              a,
              this.address,
              t,
              s,
              o,
            );
            return this.createTransaction({
              address: a,
              amount: "0x0",
              paymentData: c,
              userGasPrice: r,
              gasLimit: n || (await this.estimateGas(s, t)),
              multiplier: i,
              nonce: o,
            });
          }
          async getNonce() {
            const e = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await e.eth.getTransactionCount(this.address, "pending"),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let {
              userGasPrice: t = null,
              gasLimit: s = null,
              multiplier: r = this.gasPriceCoefficient,
            } = void 0 === e ? {} : e;
            const n = new this.BN(t || (await this.getGasPrice(!0)));
            return n.mul((0, l.default)(s || this.gasLimit, r));
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: s,
              tokenStandard: r,
              toAddress: n,
              userOptions: a = {},
            } = e;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  n,
                  t,
                  s,
                  r,
                ),
                { gasLimit: i, gasPrice: o } =
                  await this.getNftTransferGasParams(n, e, a);
              return new this.BN(o).mul(new this.BN(i));
            } catch (i) {
              throw new u.ExternalError({
                type: h.EXTERNAL_ERROR,
                error: i,
                instance: this,
              });
            }
          }
          async getNftTransferGasParams(e, t, s) {
            let { userGasPrice: r, userGasLimit: n } = s;
            const {
                address: a,
                nftGasPriceCoefficient: i,
                nftGasLimitCoefficient: o,
                gasPriceCoefficient: c,
                gasLimitCoefficient: l,
                defaultGasPrice: d,
                gasLimit: u = M,
              } = this,
              h = i || c,
              f = o || l,
              T = [
                new this.BN(d).mul(new this.BN(h)).toString(),
                Math.ceil(Number(u) * f).toString(),
              ],
              g = (await this.getNonce()).toNumber(),
              [m, p] = await Promise.allSettled([
                r || this.getNftGasPrice(h),
                n || this.estimateGasForSendNft(a, e, g, t, f),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : T[t])),
              );
            return { gasLimit: p, gasPrice: m, nonce: g };
          }
          async estimateGasForSendNft(e, t, s, r, n) {
            void 0 === n && (n = 1);
            try {
              const a = await this.getProvider("nft-send").estimateGas(
                e,
                t,
                s,
                r,
              );
              return Math.ceil(a * n).toString();
            } catch (a) {
              throw (
                console.warn(a),
                new u.ExternalError({
                  type: h.EXTERNAL_ERROR,
                  error: a,
                  instance: this,
                })
              );
            }
          }
          async getNftGasPrice(e) {
            void 0 === e && (e = 1);
            try {
              const t = await this.getProvider("nft-send").getGasPrice();
              return new this.BN(t).mul(new this.BN(e)).toString();
            } catch (t) {
              throw (
                console.warn(t),
                new u.ExternalError({
                  type: h.EXTERNAL_ERROR,
                  error: t,
                  instance: this,
                })
              );
            }
          }
          async getGasPrice(e) {
            void 0 === e && (e = !1);
            const { fastest: t = null, safeLow: s = null } =
              await this.getModerateGasPrice();
            return t && s ? new this.BN(e ? s : t) : this.defaultGasPrice;
          }
          async getModerateGasPrice() {
            try {
              const e = await c.default.get("polygon-gas-price");
              if (e && e.fastest && e.safeLow)
                return {
                  fastest: new this.BN(e.fastest).mul(new this.BN(U)),
                  safeLow: new this.BN(e.safeLow).mul(new this.BN(U)),
                };
              throw new Error(this.ticker + ": failed to get gas price");
            } catch (e) {
              return (console.warn(e), {});
            }
          }
          async estimateGas() {
            return new this.BN(this.tokenGasLimit)
              .mul(new this.BN(this.gasLimitCoefficient))
              .toString();
          }
          async availableBalance(e) {
            if (!this.balance) return null;
            const t = (e && new this.BN(e)) || (await this.getFee()),
              s = new this.BN(this.balance)
                .sub(new this.BN(t))
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(s).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(s);
          }
          async getInfo(e) {
            if (
              (await this.initCoreLibrary(),
              null !== e && void 0 !== e && e.isToken)
            ) {
              const t = await this.getProvider(
                  "node",
                ).getTokenBalanceByContractAddress({
                  address: this.address,
                  contractAddress: e.contract.toLowerCase(),
                }),
                s = [e.contract, e.contract.toLowerCase()];
              s.forEach((e) => {
                this.tokens[e] && (this.tokens[e].balance = t.toString());
              });
            }
            const t = await this.getProvider("balance").getInfo(this.address);
            return (
              null !== t &&
                void 0 !== t &&
                t.balance &&
                (this.balance = t.balance),
              (null !== e && void 0 !== e && e.onlyCoin) ||
                this.getProvider("node").getTokensInfo(
                  Object.values(this.tokens),
                  this.address,
                ),
              { balance: t.balance }
            );
          }
          createToken(e) {
            return new i.MATICToken({ parent: this, ...e });
          }
          async getUserTokenList() {
            const e =
              (await this.getProvider("tokenlist")
                .getUserTokenList(this.address)
                .catch((e) => console.warn(e))) || [];
            return (
              e
                .filter((e) => e.contract_ticker_symbol !== this.ticker)
                .forEach((e) => {
                  const t = e.contract,
                    s = this.tokens[t],
                    r = this.tokens[t.toLowerCase()];
                  (s && (s.balance = e.balance), r && (r.balance = e.balance));
                }),
              e
            );
          }
          async getTokenLists(e) {
            try {
              const t = await c.default.get(e);
              return t || [];
            } catch (t) {
              return (o.default.error({ instance: this, error: t }), []);
            }
          }
          async getTokenList() {
            return this.getTokenLists(c.ConfigKey.PolygonTokens);
          }
          async getBannedTokenList() {
            return this.getTokenLists("polygon-tokens-banned");
          }
          getTokenFromUserList(e, t) {
            return { ...e, source: t, visibility: !0 };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          async setPrivateKey(e) {
            P(D, this, e);
          }
          isFeeDynamic() {
            return !0;
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, A(D, this));
          }
          signWithCustomSigner(t) {
            let { data: s, signer: r } = t;
            return r({ ...s, privateKey: e.from(A(D, this).slice(2), "hex") });
          }
        }
        t.default = MATICCoin;
      }).call(this, s(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2853: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var n = r(s(2886)),
        a = r(s(2887)),
        i = r(s(2888));
    },
    2858: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(8)),
        a = r(s(129)),
        i = r(s(81)),
        o = r(s(28)),
        c = r(s(80)),
        l = s(4),
        d = s(27),
        u = s(67);
      const h = 2;
      class BlockbookV2Explorer extends a.default {
        constructor() {
          (super(...arguments), (this.version = h), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: s, scriptPubKey: r } = e;
          const n = await this.getTransaction(t, s),
            a = await this.getUnspentOutputs(t, r),
            o = this.calculateBalance(a).toString();
          (await i.default.filterAndUpdateTransactions([n]),
            this.eventEmitter.emit(
              `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
              { unconfirmedTx: n, unconfirmedBalance: o },
            ));
        }
        getAllowedTickers() {
          return [
            "BTC",
            "BSC",
            "BCD",
            "BTG",
            "BCH",
            "BSV",
            "DOGE",
            "LTC",
            "DGB",
            "DASH",
            "RVN",
            "KMD",
            "ETH",
            "DCR",
            "QTUM",
            "ZEC",
            "YEC",
            "GRS",
          ];
        }
        getNnTickers() {
          return ["DOGE", "ZEC"];
        }
        getApiPrefix() {
          return `api/v${this.version}/`;
        }
        getLatestBlockUrl() {
          return this.getApiPrefix() + "block-index/last";
        }
        getBlockUrl(e) {
          return `${this.getApiPrefix()}block/${e}`;
        }
        getBlockMethod() {
          return "get";
        }
        getBlockParams() {
          return {};
        }
        getBlockOptions() {
          return {};
        }
        getAddressUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getInfoOptions() {
          return this.config.options || {};
        }
        getUserTokenListParams() {
          return {};
        }
        getTransactionsOptions() {
          return "BSC" === this.wallet.ticker
            ? { headers: { "api-key": "ypa5Llv3B3fyToNsMkkaiEIIGKdcRYqU" } }
            : {};
        }
        getInfoParams() {
          return this.config.options || {};
        }
        getSendOptions() {
          var e;
          return "BSV" === this.wallet.ticker
            ? { headers: { "Content-Type": "text/plain" } }
            : null !== (e = this.config) && void 0 !== e && e.useJson
              ? { headers: { "Content-Type": "application/json" } }
              : {};
        }
        modifyInfoResponse(e) {
          const t = new this.wallet.BN(e.unconfirmedBalance),
            s = new this.wallet.BN(e.balance),
            r = s.add(t).toString(),
            n = {};
          return (
            e.tokens &&
              e.tokens.forEach((e) => {
                n[e.symbol] = e.balance;
              }),
            {
              balance: r,
              tokenBalances: n,
              unconfirmedBalance: t.toString(),
              transactions: [],
            }
          );
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}tx/${e}`;
        }
        getTransactionParams() {
          return this.getInfoParams();
        }
        getTransactionsUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getTransactionsParams(e, t, s, r) {
          (void 0 === t && (t = 0), void 0 === s && (s = this.defaultTxLimit));
          const n = this.getInfoParams();
          return { ...n, page: r, pageSize: s, details: "txs", filter: "All" };
        }
        async getTokenTransactions(e) {
          let { address: t, offset: s, limit: r, pageNum: n, contract: a } = e;
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE >
              this.lastGetTxsRequestTime &&
            (this.lastGetTxsRequestTime = Date.now());
          try {
            const e = await this.request(
              this.getTransactionsUrl(t, s || 0, r || this.defaultTxLimit, n),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                s || 0,
                r || this.defaultTxLimit,
                n,
                a,
              ),
              d.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyTokenTransactionsResponse(
              (null === e || void 0 === e ? void 0 : e.transactions) || [],
              t,
            );
          } catch {
            return [];
          }
        }
        getTokenTransactionsParams(e, t, s, r, n) {
          const a = this.getTransactionsParams(e, t, s, r);
          return { ...a, contract: n };
        }
        modifyTransactionResponse(e, t) {
          if (e.tokenTransfers && 0 === Number(e.value)) {
            const s = {};
            e.tokenTransfers.forEach((r) => {
              r.symbol &&
                (s[r.token] || (s[r.token] = []),
                s[r.token].push(
                  this.getTransactionFromTokenTransfer({
                    transfer: r,
                    selfAddress: t,
                    tx: e,
                  }),
                ));
            });
            for (const e in s) {
              const r = s[e];
              if (0 !== r.length)
                for (const e of r) {
                  const { otherSideAddress: s } = e;
                  if (
                    [s.toLowerCase(), t.toLowerCase()].includes(t.toLowerCase())
                  )
                    return e;
                }
            }
          }
          return super.modifyTransactionResponse(e, t);
        }
        modifyTransactionsResponse(e, t) {
          const s = e && !!e.transactions,
            r = s
              ? e.transactions.filter(
                  (e) =>
                    e.tokenTransfers &&
                    Array.isArray(e.tokenTransfers) &&
                    0 === Number(e.value),
                )
              : [],
            n = s
              ? e.transactions.filter(
                  (e) =>
                    (!e.tokenTransfers || 0 !== Number(e.value)) &&
                    !(e.ethereumSpecific && 0 === e.ethereumSpecific.status),
                )
              : [],
            a = s
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            i = super.modifyTransactionsResponse(n, t);
          return r.length > 0
            ? {
                transactions: i,
                failed: a,
                tokenTransactions: this.modifyTokenTransactionsResponse(r, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: i, failed: a }
              : i;
        }
        modifyTokenTransactionsResponse(e, t) {
          var s;
          return null !==
            (s =
              null === e || void 0 === e
                ? void 0
                : e
                    .map((e) => {
                      var s;
                      return null === (s = e.tokenTransfers) || void 0 === s
                        ? void 0
                        : s
                            .filter((e) =>
                              this.filterTokenTransferTransactions(t, e),
                            )
                            .map((s) =>
                              this.getTransactionFromTokenTransfer({
                                transfer: s,
                                selfAddress: t,
                                tx: e,
                              }),
                            );
                    })
                    .flat()) && void 0 !== s
            ? s
            : [];
        }
        filterTokenTransferTransactions(e, t) {
          return !(
            ![t.to.toLowerCase(), t.from.toLowerCase()].includes(
              e.toLowerCase(),
            ) || !t.symbol
          );
        }
        getTransactionFromTokenTransfer(e) {
          var t, s;
          let { transfer: r, selfAddress: n, tx: a } = e;
          const i =
            (null === (t = this.wallet.tokens()[r.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            r.decimals ||
            this.wallet.decimal;
          return new c.default({
            ticker: r.symbol.toUpperCase(),
            txid: this.getTxHash(a),
            walletid: (0, l.getTokenId)({
              ticker: r.symbol,
              contract: null !== (s = r.token) && void 0 !== s ? s : r.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(a),
            feeTicker: this.wallet.parent,
            direction: r.to.toLowerCase() === n.toLowerCase(),
            otherSideAddress:
              r.to.toLowerCase() === n.toLowerCase()
                ? r.from.toLowerCase()
                : r.to.toLowerCase(),
            amount: r.value ? (0, u.toCurrency)(r.value, i) : "0",
            datetime: this.getTxDateTime(a),
            memo: this.getTxMemo(a),
            confirmations: this.getTxConfirmations(a),
            nonce: this.getTxNonce(a),
            alias: this.wallet.alias,
          });
        }
        getUnspentOutputsUrl(e) {
          return `${this.getApiPrefix()}utxo/${e}`;
        }
        getUnspentOutputsParams(e) {
          return this.getInfoParams();
        }
        modifyUnspentOutputsResponse(e, t, s) {
          if (!s) throw this.createError("No scriptPubKey");
          return t.map((t) => {
            let { txid: r, vout: n, value: a, height: i } = t;
            return {
              txid: r,
              txId: r,
              vout: n,
              script: s,
              value: a,
              address: e,
              outputIndex: n,
              satoshis: Number(a),
              height: i,
            };
          });
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "sendtx/";
        }
        getSendTransactionParams(e) {
          var t;
          return null !== (t = this.config) && void 0 !== t && t.useJson
            ? JSON.stringify(e)
            : e;
        }
        modifySendTransactionResponse(e) {
          return { txid: e.result };
        }
        getTxDateTime(e) {
          return e.blockTime
            ? new Date(Number(e.blockTime + "000"))
            : new Date();
        }
        getTxValue(e, t) {
          let s = new this.wallet.BN(0),
            r = new this.wallet.BN(0);
          if (!t.vin || !t.vout) return "0";
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout.forEach((e) => {
                Array.isArray(e.addresses) &&
                  e.addresses.length > 0 &&
                  (r = r.add(new this.wallet.BN(e.value)));
              }),
              this.wallet.toCurrencyUnit(r)
            );
          const n = new this.wallet.BN(t.fees);
          let a = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((a = a.concat(t.addresses)),
              t.addresses.includes(e) &&
                (s = s.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((a = a.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (r = r.add(new this.wallet.BN(t.value))));
            }));
          const i = a.every((t) => t === e),
            o = this.wallet.decimal;
          if (i) {
            if ("KMD" === this.wallet.ticker) {
              const e = r.sub(s);
              if (e.gten(0)) return (0, u.toCurrency)(e, o);
            }
            return (0, u.toCurrency)(t.fees, o);
          }
          const c = this.getTxDirection(e, t),
            l = c ? r : s.sub(r).sub(n);
          return (0, u.toCurrency)(l, o);
        }
        getTxNonce(e) {
          if (e.ethereumSpecific) return e.ethereumSpecific.nonce;
        }
        getTxDirection(e, t) {
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout[0].addresses &&
              t.vout[0].addresses[0].toLowerCase() === e.toLowerCase()
            );
          const s =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t === e);
                }),
            r =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t === e);
                }),
            n =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t !== e);
                });
          return !(!r || s) || !(!s || !r || n || "KMD" !== this.wallet.ticker);
        }
        getTxOtherSideAddress(e, t) {
          if (!e) throw new Error("selfAddress is not defined");
          const s = this.getTxDirection(e, t);
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return s
              ? t.vin[0].addresses[0]
              : (t.vout[0].addresses && t.vout[0].addresses[0]) || e;
          if (!t.vin) return "...";
          let r = [],
            n = [];
          if (
            (t.vout.forEach((e) => {
              r = r.concat(e.addresses);
            }),
            t.vin.forEach((e) => {
              n = n.concat(e.addresses);
            }),
            s)
          ) {
            const s =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t !== e);
                });
            return s ? n.find((t) => t !== e) : "Claim";
          }
          const a = r.reduce((t, s) => (s === e ? t + 1 : t), 0);
          if (a === r.length) return e;
          const i = r.find((t) => t !== e);
          return i;
        }
        calculateBalance(e) {
          return (
            void 0 === e && (e = []),
            e.reduce((e, t) => {
              let { value: s } = t;
              return new this.wallet.BN(s).add(e);
            }, new this.wallet.BN("0"))
          );
        }
        getUserTokenList(e) {
          return this.request(
            this.getInfoUrl(e),
            "get",
            this.getUserTokenListParams(),
            "",
            this.getTransactionsOptions(),
          ).then((e) =>
            e.tokens.map((e) => ({
              contractAddress: e.contract,
              decimals: 0,
              ...e,
            })),
          );
        }
        async getBannedTokensList() {
          let e;
          try {
            e = await n.default.get("ethereum-tokens-banned");
          } catch (t) {
            o.default.error({ instance: this, error: t });
          }
          return Array.isArray(e) ? e : [];
        }
        async getNonce(e) {
          const t = await this.request(this.getInfoUrl(e));
          return t.nonce;
        }
        getTokensInfo() {
          return 0;
        }
        getTokenBalanceByContractAddress(e) {
          let { info: t, tokenTicker: s } = e;
          if ("undefined" === t && "undefined" === t.tokenBalances)
            throw new Error(
              "BlockbookV2Explorer: getTokenBalanceByContractAddress error: info.tokenBalances must be object",
            );
          return t.tokenBalances[s];
        }
        async getTransactionUnmodified(e) {
          return this.request(
            this.getTransactionUrl(e),
            this.getTransactionMethod(),
            this.getTransactionParams(e),
            d.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = BlockbookV2Explorer;
    },
    2886: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = (e) =>
        class extends e {
          getSendTransactionUrl() {
            return this.config.baseUrl;
          }
          getSendTransactionParams(e) {
            return { method: "sendrawtransaction", params: [e] };
          }
          modifySendTransactionResponse(e) {
            return { txid: e.result };
          }
        };
      t.default = r;
    },
    2887: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = (e) =>
        class extends e {
          getTransactionsModifiedResponse(e, t, s) {
            return (
              void 0 === s && (s = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(e) },
                super.getTransactionsModifiedResponse(e, t, s),
              )
            );
          }
          getTransactionNativeType(e) {
            const t = Array.isArray(
              null === e || void 0 === e ? void 0 : e.messages,
            )
              ? e.messages
              : [];
            return t.map((e) => {
              let { "@type": t } = e;
              return t.split(".").pop();
            })[0];
          }
          getTransactionType(e) {
            const t = this.getTransactionNativeType(e),
              s = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === s[t] ? "transfer" : s[t];
          }
        };
      t.default = r;
    },
    2888: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(81));
      const a = ["reward", "unfreeze", "freeze", "vote"],
        i = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: s,
                tokens: r,
                type: i,
                scriptPubKey: o,
              } = e;
              const c = await this.getTransaction(t, s, r);
              (await n.default.filterAndUpdateTransactions([c]),
                "receive" === i &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${c.walletid}::new-socket-tx`,
                    { unconfirmedTx: c },
                  ),
                "confirm" === i &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    c.walletid,
                    c,
                    c.ticker,
                  ),
                a.forEach((e) => {
                  i === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${i}`,
                      c || {},
                    );
                }));
            }
          };
      t.default = i;
    },
    3210: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erc721Abi = t.erc1155Abi = t.default = void 0));
      var n = r(s(2654)),
        a = s(27),
        i = s(19),
        o = s(67),
        c = r(s(129)),
        l = s(813);
      const d = "transactionHash",
        u = "0x0",
        h = (t.erc1155Abi = [
          {
            inputs: [
              { internalType: "address", name: "_from", type: "address" },
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint256", name: "_id", type: "uint256" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ]),
        f = (t.erc721Abi = [
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
        ]);
      class ETHNftExplorer extends c.default {
        constructor(e) {
          let { wallet: t, config: s } = e;
          (super({ wallet: t, config: s }),
            (this.baseUrl = (0, o.getStringWithEnsuredEndChar)(s.baseUrl, "/")),
            (this.web3 = new n.default(s.baseUrl)),
            (this.ticker = t.ticker));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        makeNftInfoUrl(e, t) {
          return `${this.baseUrl}${e}?a=${t}`;
        }
        async getGasPrice() {
          return this.web3.eth.getGasPrice();
        }
        estimateGas(e, t, s, r) {
          void 0 === s && (s = null);
          const n = { from: e, to: t, data: r };
          return (s && (n.nonce = s + 1), this.web3.eth.estimateGas(n));
        }
        sendTransaction(e) {
          return new Promise((t, s) => {
            this.wallet.coreLibrary.eth
              .sendSignedTransaction(e)
              .on(d, (e) => {
                t({ tx: e });
              })
              .catch((e) => s(e));
          });
        }
        async getNftContractData(e, t, s, r, n) {
          if (![l.ERC721_TOKEN_STANDARD, l.ERC1155_TOKEN_STANDARD].includes(n))
            throw new i.InternalError({
              type: a.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: o } = e,
            c = {
              [l.ERC1155_TOKEN_STANDARD]: (e, t, s, r) => {
                const n = new this.web3.eth.Contract(h, s);
                return n.methods.safeTransferFrom(e, t, r, 1, u).encodeABI();
              },
              [l.ERC721_TOKEN_STANDARD]: (e, t, s, r) => {
                const n = new this.web3.eth.Contract(f, s);
                return n.methods.safeTransferFrom(e, t, r).encodeABI();
              },
            };
          return c[n](o, t, s, r);
        }
        async sendNft(e, t, s, r, n, o) {
          try {
            const a = await this.getNftContractData(e, t, s, r, n),
              i = await e.createNftTransaction({
                toAddress: t,
                contractAddress: s,
                data: a,
                userOptions: o,
              });
            return await this.sendTransaction(i);
          } catch (c) {
            throw (
              console.warn(c),
              new i.ExternalError({
                type: a.EXTERNAL_ERROR,
                error: c,
                instance: this,
              })
            );
          }
        }
      }
      t.default = ETHNftExplorer;
    },
    3279: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(14)),
        a = s(19),
        i = s(27),
        o = r(s(129)),
        c = s(3280),
        l = s(67),
        d = s(160),
        u = s(813),
        h = s(384);
      const f = "https://deep-index.moralis.io/api/v2/",
        T = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        g = [
          [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
          [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD],
        ],
        m = "get",
        p = 100,
        w = 100,
        y = "NFT";
      class MoralisExplorer extends o.default {
        constructor(e) {
          let { wallet: t, config: s } = e;
          (super({ wallet: t, config: s }), (this.chain = s.chain || "eth"));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        async getInfo(e, t) {
          try {
            const s = await this.request(
              this.getInfoUrl(e),
              this.getInfoMethod(),
              this.getInfoParams(e, this.chain, t),
            );
            return this.modifyInfoResponse(s);
          } catch (s) {
            throw new a.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: s,
              instance: this,
            });
          }
        }
        getInfoUrl(e) {
          return `/${e}/nft`;
        }
        getIsApiKeyRequired(e) {
          return (0, l.getStringWithEnsuredEndChar)(e, "/") === f;
        }
        getInitParams() {
          const e = super.getInitParams(),
            t = { accept: "application/json" };
          return (
            this.getIsApiKeyRequired(
              null === e || void 0 === e ? void 0 : e.baseURL,
            ) && (t["X-API-Key"] = T),
            { ...e, headers: t }
          );
        }
        getInfoParams(e, t, s) {
          return { chain: t, format: "decimal", exclude_spam: !s };
        }
        async modifyInfoResponse(e) {
          const { result: t } = e,
            s = [],
            r = t.map((e, t) => {
              const {
                token_address: r,
                token_id: o,
                token_uri: l,
                contract_type: d,
                metadata: u,
              } = e;
              if (!u) {
                const e = (0, c.getTransformedTokenUri)({
                  tokenId: o,
                  tokenUri: l,
                });
                return (
                  s.push(
                    Promise.all([
                      t,
                      n.default.get(e).catch((e) => {
                        throw new Error(JSON.stringify({ index: t, error: e }));
                      }),
                    ]),
                  ),
                  { contractAddress: r, tokenId: o, tokenStandard: d }
                );
              }
              try {
                const { name: e, description: t, image: s } = JSON.parse(u);
                return {
                  contractAddress: r,
                  tokenId: o,
                  tokenStandard: d,
                  name: e,
                  description: t,
                  imageUrl: s,
                };
              } catch (h) {
                throw (
                  console.warn(h),
                  new a.InternalError({
                    type: i.INTERNAL_ERROR,
                    error: h,
                    instance: this,
                  })
                );
              }
            });
          try {
            const e = await Promise.allSettled(s);
            e.forEach((e) => {
              if ("fulfilled" === e.status) {
                const {
                    value: [t, { data: s }],
                  } = e,
                  { name: n, description: a, image: i } = s;
                r[t] = { ...r[t], name: n, description: a, imageUrl: i };
              } else {
                const {
                  reason: { message: s },
                } = e;
                try {
                  const { index: e, message: t } = JSON.parse(s);
                  console.warn(
                    "Failed to get NFT metadata for tokenUri=" + r[e],
                    t,
                  );
                } catch (t) {
                  console.warn(t);
                }
              }
            });
          } catch (o) {
            throw (
              console.warn(o),
              new a.ExternalError({
                type: i.EXTERNAL_ERROR,
                error: o,
                instance: this,
              })
            );
          }
          return r;
        }
        fixTokenStandard(e) {
          for (const [t, s] of g) if (t.test(e)) return s;
          return u.UNRECOGNIZED_TOKEN_STANDARD;
        }
        async fetchNftList(e, t) {
          const { address: s } = e,
            r = await this.getInfo(s, t);
          return r.map((t) => {
            let {
              contractAddress: s,
              tokenId: r,
              tokenStandard: n,
              name: a,
              description: i,
              imageUrl: o,
            } = t;
            return new d.ETHNftToken(
              s,
              r,
              e.id,
              this.fixTokenStandard(n),
              a,
              i,
              o,
            );
          });
        }
        async getRawTokenTransactions(e) {
          let {
            address: t,
            limit: s = this.defaultTxLimit,
            cursor: r = null,
          } = e;
          try {
            const e = await this.request(
              this.getTokenTransactionsUrl(t),
              m,
              this.getTokenTransactionsParams(s, r),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyRawTokenTransactionsResponse(e, t);
          } catch (n) {
            return (console.warn(n), []);
          }
        }
        getTokenTransactionsUrl(e) {
          return `/${e}/erc20/transfers`;
        }
        getTokenTransactionsParams(e, t) {
          const s = e > p ? p : e;
          return { chain: this.chain, limit: s, cursor: t };
        }
        modifyRawTokenTransactionsResponse(e, t) {
          const {
              total: s,
              page: r,
              page_size: n,
              cursor: a,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            o = i.reduce((e, s, r) => {
              try {
                const r = this.getTokenTxDirection(t, s);
                return (
                  e.push({
                    contract: s.address,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: s.transaction_hash,
                    direction: r,
                    otherSideAddress: r ? s.from_address : s.to_address,
                    value: s.value,
                    datetime: new Date(s.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    ticker: s.token_symbol,
                    name: s.token_name,
                  }),
                  e
                );
              } catch (n) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(n),
                  e
                );
              }
            }, []);
          return {
            total: s,
            page: r,
            pageSize: n,
            cursor: a,
            rawTokenTransactions: o,
          };
        }
        getTokenTxDirection(e, t) {
          return t.to_address.toLowerCase() === e.toLowerCase();
        }
        async getUserTokenList(e) {
          const t = await this.request(
            this.getUserTokenListUrl(e),
            m,
            this.getInfoParams(e, this.chain),
            "",
            this.getTransactionsOptions(),
          );
          return this.modifyUserTokenList(t);
        }
        modifyUserTokenList(e) {
          return (
            void 0 === e && (e = []),
            e.map((e) => ({
              contract: e.token_address,
              contractAddress: e.token_address,
              decimals: 0,
              ...e,
            }))
          );
        }
        getUserTokenListUrl(e) {
          return `/${e}/erc20`;
        }
        async getNftTransactions(e) {
          let {
            address: t,
            limit: s = this.defaultTxLimit,
            cursor: r = null,
          } = e;
          try {
            const e = await this.request(
              this.getNftTransactionsUrl(t),
              m,
              this.getNftTransactionsParams(s, r),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyNftTransactionsResponse(e, t);
          } catch (n) {
            return (console.warn(n), []);
          }
        }
        getNftTransactionsUrl(e) {
          return `/${e}/nft/transfers`;
        }
        getNftTransactionsParams(e, t) {
          const s = e > w ? w : e;
          return {
            chain: this.chain,
            limit: s,
            format: "decimal",
            direction: "both",
            cursor: t,
          };
        }
        modifyNftTransactionsResponse(e, t) {
          const {
              total: s,
              page: r,
              page_size: n,
              cursor: a,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            o = i.reduce((e, s, r) => {
              try {
                const r = this.getTokenTxDirection(t, s);
                return (
                  e.push({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    contract: s.token_address,
                    contractType: s.contract_type,
                    tokenId: s.token_id,
                    txid: s.transaction_hash,
                    direction: r,
                    otherSideAddress: r ? s.from_address : s.to_address,
                    datetime: new Date(s.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    txType: h.TxTypes.TRANSFERNFT,
                    isNft: !0,
                    amount: y,
                  }),
                  e
                );
              } catch (n) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(n),
                  e
                );
              }
            }, []);
          return {
            total: s,
            page: r,
            pageSize: n,
            cursor: a,
            nftTransactions: o,
          };
        }
      }
      t.default = MoralisExplorer;
    },
    3280: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getTransformedTokenUri", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var n = r(s(3281));
    },
    3281: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = new Map([
          [
            /https:\/\/api\.opensea\.io\/api\/v1\/metadata\/.*\/0x{id}\/?$/,
            [
              "0x{id}",
              (e) => {
                let { tokenId: t } = e;
                return t;
              },
            ],
          ],
        ]),
        n = (e) => {
          const { tokenUri: t } = e;
          let s = t;
          return (
            r.forEach((t, r) => {
              let [n, a] = t;
              const i = a(e);
              s = r.test(s) ? s.replace(n, i) : s;
            }),
            s
          );
        };
      t.default = n;
    },
    4107: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(2853),
        a = r(s(2858));
      class BlockbookV2WithBlockscannerExplorer extends (0,
      n.HasBlockscannerMixin)(a.default) {}
      t.default = BlockbookV2WithBlockscannerExplorer;
    },
    4925: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(129)),
        a = r(s(80)),
        i = s(19),
        o = s(4),
        c = s(27),
        l = s(67);
      const d = 1e3,
        u = "PC65R3S3YXXM8H2WIRJQWCSUUAR8JKRGJ4",
        h = "account",
        f = "txlist",
        T = "tokentx",
        g = "balance",
        m = 0,
        p = 99999999,
        w = "desc",
        y = "1",
        k = ["No transactions found"];
      class PolyscanExplorer extends n.default {
        constructor(e) {
          let { wallet: t, config: s } = e;
          super({ wallet: t, config: s });
        }
        getAllowedTickers() {
          return ["MATIC"];
        }
        modifyGeneralResponse(e) {
          const { status: t, message: s } =
            (null === e || void 0 === e ? void 0 : e.data) || {};
          if (t === y || k.includes(s)) return e.data;
          throw new i.ExplorerRequestError({
            type: c.GET_BALANCE_TYPE,
            error: new Error(JSON.stringify(e)),
            instance: this,
          });
        }
        getTransactionsUrl(e) {
          return "";
        }
        getTransactionsParams(e) {
          return {
            module: h,
            action: f,
            address: e,
            startblock: m,
            endblock: p,
            sort: w,
            apikey: u,
          };
        }
        async getBalance(e) {
          const t = { module: h, action: g, address: e, apikey: u },
            s = await this.request("", "get", t);
          return this.modifyGeneralResponse(s);
        }
        modifyTransactionsResponse(e, t) {
          return super.modifyTransactionsResponse(e.result, t);
        }
        getTransactionsModifiedResponse() {
          return new a.default(
            super.getTransactionsModifiedResponse(...arguments),
          );
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDateTime(e) {
          return new Date(Number(e.timeStamp) * d);
        }
        getTxFee(e) {
          const t = new this.wallet.BN(e.gasPrice).mul(
            new this.wallet.BN(e.gasUsed),
          );
          return this.wallet.toCurrencyUnit(t);
        }
        getTxConfirmations(e) {
          return Number(e.confirmations);
        }
        getTxDirection(e, t) {
          return e.toLowerCase() !== t.from.toLowerCase();
        }
        getTxOtherSideAddress(e, t) {
          return e.toLowerCase() === t.from.toLowerCase() ? t.to : t.from;
        }
        getTxValue(e, t) {
          return this.wallet.toCurrencyUnit(t.value);
        }
        async getTokenTransactions(e) {
          let { address: t } = e;
          const s = {
              module: h,
              action: T,
              address: t,
              startblock: m,
              endblock: p,
              sort: w,
              apikey: u,
            },
            r = await this.request(
              this.getTransactionsUrl(t),
              this.getTransactionsMethod(),
              s,
              c.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
          return r.result.map(
            (e) =>
              new a.default({
                ticker: e.tokenSymbol,
                name: e.tokenName,
                walletid: (0, o.getTokenId)({
                  ticker: e.tokenSymbol,
                  contract: e.contractAddress,
                  parent: this.wallet.parent,
                }),
                txid: this.getTxHash(e),
                direction: this.getTxDirection(t, e),
                otherSideAddress: this.getTxOtherSideAddress(t, e),
                amount: this.getTokenTxAmount(e),
                datetime: this.getTxDateTime(e),
                confirmations: this.getTxConfirmations(e),
                nonce: this.getTxNonce(e),
                alias: this.wallet.alias,
                fee: this.getTxFee(e),
                feeTicker: this.getTxFeeTicker(),
              }),
          );
        }
        getTokenTxAmount(e) {
          return (0, l.toCurrency)(e.value, Number(e.tokenDecimal));
        }
      }
      t.default = PolyscanExplorer;
    },
    7208: function (e, t, s) {
      "use strict";
      (s.r(t),
        s.d(t, "default", function () {
          return o;
        }));
      var r = s(11),
        n = s.n(r),
        a = Math.pow;
      const i = a(10, 3);
      function o(e, t, s = i) {
        const r = new n.a(t * s);
        return new n.a(e).mul(r).div(new n.a(s));
      }
    },
  },
]);
