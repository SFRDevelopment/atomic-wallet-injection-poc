(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [295, 32],
  {
    2676: function (e, t, r) {
      "use strict";
      (function (e) {
        var s = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var a = s(r(2654)),
          n = s(r(11)),
          i = s(r(230)),
          o = r(805),
          c = s(r(7212)),
          d = s(r(7213)),
          l = s(r(28)),
          u = P(r(8)),
          f = r(3269),
          h = r(19),
          m = r(27),
          T = s(r(3210)),
          g = s(r(815)),
          p = s(r(2858)),
          y = s(r(3279)),
          w = s(r(794)),
          b = s(r(4105)),
          k = s(r(158)),
          v = s(r(382)),
          E = s(r(386));
        function P(e, t) {
          if ("function" == typeof WeakMap)
            var r = new WeakMap(),
              s = new WeakMap();
          return (P = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var a,
              n,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t ? s : r)) {
              if (a.has(e)) return a.get(e);
              a.set(e, i);
            }
            for (const r in e)
              "default" !== r &&
                {}.hasOwnProperty.call(e, r) &&
                ((n =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, r)) &&
                (n.get || n.set)
                  ? a(i, r, n)
                  : (i[r] = e[r]));
            return i;
          })(e, t);
        }
        function x(e, t, r) {
          (N(e, t), t.set(e, r));
        }
        function N(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function B(e, t) {
          return e.get(A(e, t));
        }
        function C(e, t, r) {
          return (e.set(A(e, t), r), r);
        }
        function A(e, t, r) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : r;
          throw new TypeError("Private element is not present on this object");
        }
        const S = new w.default(() => r.e(16).then(r.t.bind(null, 2655, 7))),
          R = "BNB Smart Chain",
          L = "BSC",
          _ = "m/44'/0'/0'/0/0",
          U = 18,
          D = "0",
          O = 56,
          I = 1e4,
          G = 1e9,
          M = "0xbdd5468D969e585E38B5a0EEADDb56D5B76814ff",
          F = "150000",
          K = "0x0";
        var $ = new WeakMap();
        class BSCCoin extends (0, E.default)(
          (0, f.NftMixin)(
            (0, b.default)((0, k.default)((0, v.default)(i.default))),
          ),
        ) {
          constructor(e) {
            var t, r;
            (super({
              ...e,
              name: null !== (t = e.name) && void 0 !== t ? t : R,
              ticker: null !== (r = e.ticker) && void 0 !== r ? r : L,
              decimal: U,
              unspendableBalance: D,
            }),
              x(this, $, void 0),
              (this.derivation = _),
              this.setExplorersModules([
                g.default,
                p.default,
                y.default,
                T.default,
              ]),
              this.loadExplorers(e));
            const { feeData: s, explorers: a, txWebUrl: n } = e;
            (this.setFeeData(s), (this.bannedTokens = []));
            const i = a.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3 = new g.default({
              wallet: this.instance,
              config: { ...i, webUrl: n },
            })),
              (this.baseUrl = i.baseUrl),
              this.initProvider(this.baseUrl),
              (this.fields.paymentId = !1),
              (this.tokens = {}),
              (this.nonce = new this.BN("0")));
          }
          setFeeData(e) {
            (void 0 === e && (e = {}),
              super.setFeeData(e),
              (this.gasLimit = String(e.gasLimit)),
              (this.nftGasLimitCoefficient = e.nftGasLimitCoefficient),
              (this.nftGasPriceCoefficient = e.nftGasPriceCoefficient),
              (this.gasLimitCoefficient = e.gasLimitCoefficient),
              (this.gasPriceCoefficient = e.gasPriceCoefficient),
              (this.defaultGasPrice = new this.BN(e.defaultGasPrice * G)),
              (this.defaultMaxGasPrice = e.defaultMaxGasPrice),
              (this.resendTimeout = e.resendTimeout));
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(L + ": getTransactions: address is not loaded");
            const {
                transactions: e = [],
                tokenTransactions: t = [],
                failed: r = [],
              } = await this.getProvider("history").getTransactions({
                address: this.address,
              }),
              s = await Promise.all(
                r.map((e) => {
                  let { txid: t } = e;
                  return this.getProvider("history").getTransaction(
                    this.address,
                    t,
                    this.tokens,
                  );
                }),
              );
            return e.concat(t).concat(s);
          }
          isFeeDynamic() {
            return !0;
          }
          initProvider(e) {
            try {
              this.coreLibrary = new a.default(e);
            } catch (t) {
              (l.default.error({ instance: this, error: t }),
                setTimeout(() => this.initProvider(e), I));
            }
          }
          loadWallet(e) {
            return new Promise(async (t, r) => {
              const { hdkey: s } = await S.get(),
                a = s.fromMasterSeed(e),
                n = a.getWallet(),
                i = await this.coreLibrary.eth.accounts.privateKeyToAccount(
                  n.getPrivateKeyString(),
                );
              i
                ? (C($, this, i.privateKey),
                  (this.address = i.address),
                  this.getNonce(),
                  t({
                    id: this.id,
                    privateKey: B($, this),
                    address: this.address,
                  }))
                : r(new Error(L + " cant get a wallet!"));
            });
          }
          getAddress() {
            try {
              C(
                $,
                this,
                this.coreLibrary.eth.accounts.privateKeyToAccount(B($, this))
                  .address,
              );
            } catch (e) {
              l.default.error({ instance: this, error: e });
            }
            return B($, this);
          }
          async validateAddress(e) {
            return this.coreLibrary.utils.isAddress(e);
          }
          async createTransaction(e) {
            let t,
              {
                address: r,
                amount: s,
                paymentData: a = null,
                nonce: n,
                userGasPrice: i,
                gasLimit: o = this.gasLimit,
                multiplier: c = this.gasPriceCoefficient,
              } = e;
            if ((await this.getNonce(), !i)) {
              const e = await this.getGasPrice();
              t = Number(e.toString()) * c;
            }
            const d = {
              to: r,
              value: s,
              gas: o || (await this.estimateGas(s, r)),
              chainId: O,
              gasPrice: new this.BN(i || t),
              nonce: n || this.nonce,
            };
            ((this.nonce = this.nonce.add(new this.BN(1))),
              "" !== a && null !== a && (d.data = a));
            const l = await this.coreLibrary.eth.accounts.signTransaction(
              d,
              B($, this),
            );
            return l.rawTransaction;
          }
          async createTokenTransaction(e) {
            let {
              address: t,
              amount: r,
              custom: s,
              userGasPrice: a,
              gasLimit: n,
              contract: i,
              multiplier: o,
              nonce: c,
            } = e;
            const d = this.getProvider("send").createSendTokenContract(
              i,
              this.address,
              t,
              r,
              c,
            );
            return this.createTransaction({
              address: i,
              amount: "0x0",
              paymentData: d,
              userGasPrice: a,
              gasLimit: n || (await this.estimateGas(r, t)),
              multiplier: o,
              nonce: c,
            });
          }
          async getNftGasPrice(e) {
            void 0 === e && (e = 1);
            try {
              const t = await this.getProvider("nft-send").getGasPrice();
              return new n.default(t).mul(new n.default(e)).toString();
            } catch (t) {
              throw (
                console.warn(t),
                new h.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: t,
                  instance: this,
                })
              );
            }
          }
          async estimateGasForSendNft(e, t, r, s, a) {
            void 0 === a && (a = 1);
            try {
              const n = await this.getProvider("nft-send").estimateGas(
                e,
                t,
                r,
                s,
              );
              return Math.ceil(n * a).toString();
            } catch (n) {
              throw (
                console.warn(n),
                new h.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          async getNftTransferGasParams(e, t, r) {
            let { userGasPrice: s, userGasLimit: a } = r;
            const {
                address: i,
                nftGasPriceCoefficient: o,
                nftGasLimitCoefficient: c,
                gasPriceCoefficient: d,
                gasLimitCoefficient: l,
                defaultGasPrice: u,
                gasLimit: f = F,
              } = this,
              h = o || d,
              m = c || l,
              T = [
                new n.default(u).mul(new n.default(h)).toString(),
                Math.ceil(Number(f) * m).toString(),
              ],
              g = (await this.getNonce()).toNumber(),
              [p, y] = await Promise.allSettled([
                s || this.getNftGasPrice(h),
                a || this.estimateGasForSendNft(i, e, g, t, m),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : T[t])),
              );
            return { gasLimit: y, gasPrice: p, nonce: g };
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: r,
              tokenStandard: s,
              toAddress: a,
              userOptions: i = {},
            } = e;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  a,
                  t,
                  r,
                  s,
                ),
                { gasLimit: o, gasPrice: c } =
                  await this.getNftTransferGasParams(a, e, i);
              return new n.default(c).mul(new n.default(o));
            } catch (o) {
              throw new h.ExternalError({
                type: m.EXTERNAL_ERROR,
                error: o,
                instance: this,
              });
            }
          }
          async createNftTransaction(e) {
            let {
              toAddress: t,
              contractAddress: r,
              data: s,
              userOptions: a = {},
            } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: n,
                  nonce: i,
                } = await this.getNftTransferGasParams(t, s, a),
                o = { to: r, value: K, gas: e, data: s, nonce: i, gasPrice: n },
                { rawTransaction: c } =
                  await this.coreLibrary.eth.accounts.signTransaction(
                    o,
                    B($, this),
                  );
              return c;
            } catch (n) {
              throw (
                console.warn(n),
                new h.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          async getNonce() {
            return (
              (this.nonce = new this.BN(
                await this.coreLibrary.eth.getTransactionCount(
                  this.address,
                  "pending",
                ),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let { userGasPrice: t = null, gasLimit: r = null } =
              void 0 === e ? {} : e;
            const s = t || (await this.getGasPrice());
            return new n.default(String(s)).mul(
              new this.BN(r || this.gasLimit),
            );
          }
          async getGasPrice(e) {
            void 0 === e && (e = !1);
            const { fastest: t = null, standard: r = null } =
              await this.getProvider("node").getGasPrice();
            if (e) return r || this.defaultGasPrice;
            if (!t) return this.defaultGasPrice;
            const s = new this.BN(this.gasPriceCoefficient),
              a = new this.BN(Number(r) / G),
              n = a.add(s);
            return new this.BN(Number(n) * G);
          }
          async estimateGas(e, t, r, s) {
            void 0 === s && (s = F);
            const a = this.getProvider("send").createSendTokenContract(
                r,
                this.address,
                M,
                e,
              ),
              n = await this.coreLibrary.eth
                .estimateGas({
                  from: this.address,
                  nonce: Number(this.nonce.add(new this.BN(1))),
                  to: r,
                  data: a,
                })
                .catch((e) => l.default.error({ instance: this, error: e }));
            return n ? Math.ceil(n * this.gasLimitCoefficient).toString() : s;
          }
          async availableBalance(e) {
            if (!this.balance) return null;
            const t = (e && new this.BN(e)) || (await this.getFee()),
              r = new this.BN(this.balance)
                .sub(t)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(r).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(r);
          }
          async getInfo(e) {
            if (e && e.isToken) {
              const t = await this.getProvider(
                  "node",
                ).getTokenBalanceByContractAddress({
                  address: this.address,
                  contractAddress: e.contract.toLowerCase(),
                }),
                r = [e.contract, e.contract.toLowerCase()];
              r.forEach((e) => {
                this.tokens[e] && (this.tokens[e].balance = t.toString());
              });
            }
            const t = await this.getProvider("balance")
              .getInfo(this.address)
              .catch((e) => console.warn(e));
            if (
              (t && t.balance && (this.balance = t.balance),
              null === e || void 0 === e || !e.onlyCoin)
            ) {
              const e = Object.values(this.tokens);
              this.getProvider("node").getTokensInfo(e, this.address);
            }
            return { balance: t.balance };
          }
          createToken(e) {
            return new o.BSCToken({ parent: this, ...e });
          }
          async getUserTokenList() {
            const e =
              (await this.getProvider("token")
                .getUserTokenList(this.address)
                .catch((e) => console.warn(e))) || [];
            return (
              e.forEach((e) => {
                const t = e.contract,
                  r = this.tokens[t],
                  s = this.tokens[t.toLowerCase()];
                (r && (r.balance = e.balance), s && (s.balance = e.balance));
              }),
              e
            );
          }
          async getTokenList() {
            let e;
            this.bannedTokens = await this.getBannedTokenList();
            try {
              e = await u.default.get(u.ConfigKey.BscTokens);
            } catch (t) {
              l.default.error({ instance: this, error: t });
            }
            return e || c.default;
          }
          async getBannedTokenList() {
            let e;
            try {
              e = await u.default.get("bsc-tokens-banned");
            } catch (t) {
              l.default.error({ instance: this, error: t });
            }
            return e || d.default;
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            C($, this, e);
          }
          getGasRange(e) {
            return (void 0 === e && (e = "send"), this.feeData[e]);
          }
          async getEstimatedTimeCfg(e) {
            void 0 === e && (e = !1);
            try {
              const t = !this.gasPriceConfig || e;
              this.gasPriceConfig = t
                ? await this.web3.getGasPriceConfig()
                : this.gasPriceConfig;
            } catch (t) {
              console.error(t);
            }
            return this.gasPriceConfig;
          }
          async getEstimatedTimeTx(e, t) {
            void 0 === t && (t = !1);
            const r = 10,
              s = await this.getEstimatedTimeCfg(),
              a = ["fastest", "fast", "average"].find(
                (t) => (null === s || void 0 === s ? void 0 : s[t]) <= e * r,
              );
            if (t) {
              const e = {
                fastest: "<30 sec",
                fast: "<2 min",
                average: "<5 min",
              };
              return e[a] || "<30 min";
            }
            return a;
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, B($, this));
          }
          signWithCustomSigner(t) {
            let { data: r, signer: s } = t;
            return s({ ...r, privateKey: e.from(B($, this).slice(2), "hex") });
          }
        }
        t.default = BSCCoin;
      }).call(this, r(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2858: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(r(8)),
        n = s(r(129)),
        i = s(r(81)),
        o = s(r(28)),
        c = s(r(80)),
        d = r(4),
        l = r(27),
        u = r(67);
      const f = 2;
      class BlockbookV2Explorer extends n.default {
        constructor() {
          (super(...arguments), (this.version = f), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: r, scriptPubKey: s } = e;
          const a = await this.getTransaction(t, r),
            n = await this.getUnspentOutputs(t, s),
            o = this.calculateBalance(n).toString();
          (await i.default.filterAndUpdateTransactions([a]),
            this.eventEmitter.emit(
              `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
              { unconfirmedTx: a, unconfirmedBalance: o },
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
            r = new this.wallet.BN(e.balance),
            s = r.add(t).toString(),
            a = {};
          return (
            e.tokens &&
              e.tokens.forEach((e) => {
                a[e.symbol] = e.balance;
              }),
            {
              balance: s,
              tokenBalances: a,
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
        getTransactionsParams(e, t, r, s) {
          (void 0 === t && (t = 0), void 0 === r && (r = this.defaultTxLimit));
          const a = this.getInfoParams();
          return { ...a, page: s, pageSize: r, details: "txs", filter: "All" };
        }
        async getTokenTransactions(e) {
          let { address: t, offset: r, limit: s, pageNum: a, contract: n } = e;
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * l.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * l.ONE_MINUTE >
              this.lastGetTxsRequestTime &&
            (this.lastGetTxsRequestTime = Date.now());
          try {
            const e = await this.request(
              this.getTransactionsUrl(t, r || 0, s || this.defaultTxLimit, a),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                r || 0,
                s || this.defaultTxLimit,
                a,
                n,
              ),
              l.GET_TRANSACTIONS_TYPE,
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
        getTokenTransactionsParams(e, t, r, s, a) {
          const n = this.getTransactionsParams(e, t, r, s);
          return { ...n, contract: a };
        }
        modifyTransactionResponse(e, t) {
          if (e.tokenTransfers && 0 === Number(e.value)) {
            const r = {};
            e.tokenTransfers.forEach((s) => {
              s.symbol &&
                (r[s.token] || (r[s.token] = []),
                r[s.token].push(
                  this.getTransactionFromTokenTransfer({
                    transfer: s,
                    selfAddress: t,
                    tx: e,
                  }),
                ));
            });
            for (const e in r) {
              const s = r[e];
              if (0 !== s.length)
                for (const e of s) {
                  const { otherSideAddress: r } = e;
                  if (
                    [r.toLowerCase(), t.toLowerCase()].includes(t.toLowerCase())
                  )
                    return e;
                }
            }
          }
          return super.modifyTransactionResponse(e, t);
        }
        modifyTransactionsResponse(e, t) {
          const r = e && !!e.transactions,
            s = r
              ? e.transactions.filter(
                  (e) =>
                    e.tokenTransfers &&
                    Array.isArray(e.tokenTransfers) &&
                    0 === Number(e.value),
                )
              : [],
            a = r
              ? e.transactions.filter(
                  (e) =>
                    (!e.tokenTransfers || 0 !== Number(e.value)) &&
                    !(e.ethereumSpecific && 0 === e.ethereumSpecific.status),
                )
              : [],
            n = r
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            i = super.modifyTransactionsResponse(a, t);
          return s.length > 0
            ? {
                transactions: i,
                failed: n,
                tokenTransactions: this.modifyTokenTransactionsResponse(s, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: i, failed: n }
              : i;
        }
        modifyTokenTransactionsResponse(e, t) {
          var r;
          return null !==
            (r =
              null === e || void 0 === e
                ? void 0
                : e
                    .map((e) => {
                      var r;
                      return null === (r = e.tokenTransfers) || void 0 === r
                        ? void 0
                        : r
                            .filter((e) =>
                              this.filterTokenTransferTransactions(t, e),
                            )
                            .map((r) =>
                              this.getTransactionFromTokenTransfer({
                                transfer: r,
                                selfAddress: t,
                                tx: e,
                              }),
                            );
                    })
                    .flat()) && void 0 !== r
            ? r
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
          var t, r;
          let { transfer: s, selfAddress: a, tx: n } = e;
          const i =
            (null === (t = this.wallet.tokens()[s.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            s.decimals ||
            this.wallet.decimal;
          return new c.default({
            ticker: s.symbol.toUpperCase(),
            txid: this.getTxHash(n),
            walletid: (0, d.getTokenId)({
              ticker: s.symbol,
              contract: null !== (r = s.token) && void 0 !== r ? r : s.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(n),
            feeTicker: this.wallet.parent,
            direction: s.to.toLowerCase() === a.toLowerCase(),
            otherSideAddress:
              s.to.toLowerCase() === a.toLowerCase()
                ? s.from.toLowerCase()
                : s.to.toLowerCase(),
            amount: s.value ? (0, u.toCurrency)(s.value, i) : "0",
            datetime: this.getTxDateTime(n),
            memo: this.getTxMemo(n),
            confirmations: this.getTxConfirmations(n),
            nonce: this.getTxNonce(n),
            alias: this.wallet.alias,
          });
        }
        getUnspentOutputsUrl(e) {
          return `${this.getApiPrefix()}utxo/${e}`;
        }
        getUnspentOutputsParams(e) {
          return this.getInfoParams();
        }
        modifyUnspentOutputsResponse(e, t, r) {
          if (!r) throw this.createError("No scriptPubKey");
          return t.map((t) => {
            let { txid: s, vout: a, value: n, height: i } = t;
            return {
              txid: s,
              txId: s,
              vout: a,
              script: r,
              value: n,
              address: e,
              outputIndex: a,
              satoshis: Number(n),
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
          let r = new this.wallet.BN(0),
            s = new this.wallet.BN(0);
          if (!t.vin || !t.vout) return "0";
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout.forEach((e) => {
                Array.isArray(e.addresses) &&
                  e.addresses.length > 0 &&
                  (s = s.add(new this.wallet.BN(e.value)));
              }),
              this.wallet.toCurrencyUnit(s)
            );
          const a = new this.wallet.BN(t.fees);
          let n = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((n = n.concat(t.addresses)),
              t.addresses.includes(e) &&
                (r = r.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((n = n.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (s = s.add(new this.wallet.BN(t.value))));
            }));
          const i = n.every((t) => t === e),
            o = this.wallet.decimal;
          if (i) {
            if ("KMD" === this.wallet.ticker) {
              const e = s.sub(r);
              if (e.gten(0)) return (0, u.toCurrency)(e, o);
            }
            return (0, u.toCurrency)(t.fees, o);
          }
          const c = this.getTxDirection(e, t),
            d = c ? s : r.sub(s).sub(a);
          return (0, u.toCurrency)(d, o);
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
          const r =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: r } = t;
                  return r.some((t) => t === e);
                }),
            s =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: r } = t;
                  return r.some((t) => t === e);
                }),
            a =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: r } = t;
                  return r.some((t) => t !== e);
                });
          return !(!s || r) || !(!r || !s || a || "KMD" !== this.wallet.ticker);
        }
        getTxOtherSideAddress(e, t) {
          if (!e) throw new Error("selfAddress is not defined");
          const r = this.getTxDirection(e, t);
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return r
              ? t.vin[0].addresses[0]
              : (t.vout[0].addresses && t.vout[0].addresses[0]) || e;
          if (!t.vin) return "...";
          let s = [],
            a = [];
          if (
            (t.vout.forEach((e) => {
              s = s.concat(e.addresses);
            }),
            t.vin.forEach((e) => {
              a = a.concat(e.addresses);
            }),
            r)
          ) {
            const r =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: r } = t;
                  return r.some((t) => t !== e);
                });
            return r ? a.find((t) => t !== e) : "Claim";
          }
          const n = s.reduce((t, r) => (r === e ? t + 1 : t), 0);
          if (n === s.length) return e;
          const i = s.find((t) => t !== e);
          return i;
        }
        calculateBalance(e) {
          return (
            void 0 === e && (e = []),
            e.reduce((e, t) => {
              let { value: r } = t;
              return new this.wallet.BN(r).add(e);
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
            e = await a.default.get("ethereum-tokens-banned");
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
          let { info: t, tokenTicker: r } = e;
          if ("undefined" === t && "undefined" === t.tokenBalances)
            throw new Error(
              "BlockbookV2Explorer: getTokenBalanceByContractAddress error: info.tokenBalances must be object",
            );
          return t.tokenBalances[r];
        }
        async getTransactionUnmodified(e) {
          return this.request(
            this.getTransactionUrl(e),
            this.getTransactionMethod(),
            this.getTransactionParams(e),
            l.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = BlockbookV2Explorer;
    },
    3210: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erc721Abi = t.erc1155Abi = t.default = void 0));
      var a = s(r(2654)),
        n = r(27),
        i = r(19),
        o = r(67),
        c = s(r(129)),
        d = r(813);
      const l = "transactionHash",
        u = "0x0",
        f = (t.erc1155Abi = [
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
        h = (t.erc721Abi = [
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
          let { wallet: t, config: r } = e;
          (super({ wallet: t, config: r }),
            (this.baseUrl = (0, o.getStringWithEnsuredEndChar)(r.baseUrl, "/")),
            (this.web3 = new a.default(r.baseUrl)),
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
        estimateGas(e, t, r, s) {
          void 0 === r && (r = null);
          const a = { from: e, to: t, data: s };
          return (r && (a.nonce = r + 1), this.web3.eth.estimateGas(a));
        }
        sendTransaction(e) {
          return new Promise((t, r) => {
            this.wallet.coreLibrary.eth
              .sendSignedTransaction(e)
              .on(l, (e) => {
                t({ tx: e });
              })
              .catch((e) => r(e));
          });
        }
        async getNftContractData(e, t, r, s, a) {
          if (![d.ERC721_TOKEN_STANDARD, d.ERC1155_TOKEN_STANDARD].includes(a))
            throw new i.InternalError({
              type: n.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: o } = e,
            c = {
              [d.ERC1155_TOKEN_STANDARD]: (e, t, r, s) => {
                const a = new this.web3.eth.Contract(f, r);
                return a.methods.safeTransferFrom(e, t, s, 1, u).encodeABI();
              },
              [d.ERC721_TOKEN_STANDARD]: (e, t, r, s) => {
                const a = new this.web3.eth.Contract(h, r);
                return a.methods.safeTransferFrom(e, t, s).encodeABI();
              },
            };
          return c[a](o, t, r, s);
        }
        async sendNft(e, t, r, s, a, o) {
          try {
            const n = await this.getNftContractData(e, t, r, s, a),
              i = await e.createNftTransaction({
                toAddress: t,
                contractAddress: r,
                data: n,
                userOptions: o,
              });
            return await this.sendTransaction(i);
          } catch (c) {
            throw (
              console.warn(c),
              new i.ExternalError({
                type: n.EXTERNAL_ERROR,
                error: c,
                instance: this,
              })
            );
          }
        }
      }
      t.default = ETHNftExplorer;
    },
    3269: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NftMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var a = s(r(823));
    },
    3279: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(r(14)),
        n = r(19),
        i = r(27),
        o = s(r(129)),
        c = r(3280),
        d = r(67),
        l = r(160),
        u = r(813),
        f = r(384);
      const h = "https://deep-index.moralis.io/api/v2/",
        m = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        T = [
          [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
          [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD],
        ],
        g = "get",
        p = 100,
        y = 100,
        w = "NFT";
      class MoralisExplorer extends o.default {
        constructor(e) {
          let { wallet: t, config: r } = e;
          (super({ wallet: t, config: r }), (this.chain = r.chain || "eth"));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        async getInfo(e, t) {
          try {
            const r = await this.request(
              this.getInfoUrl(e),
              this.getInfoMethod(),
              this.getInfoParams(e, this.chain, t),
            );
            return this.modifyInfoResponse(r);
          } catch (r) {
            throw new n.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: r,
              instance: this,
            });
          }
        }
        getInfoUrl(e) {
          return `/${e}/nft`;
        }
        getIsApiKeyRequired(e) {
          return (0, d.getStringWithEnsuredEndChar)(e, "/") === h;
        }
        getInitParams() {
          const e = super.getInitParams(),
            t = { accept: "application/json" };
          return (
            this.getIsApiKeyRequired(
              null === e || void 0 === e ? void 0 : e.baseURL,
            ) && (t["X-API-Key"] = m),
            { ...e, headers: t }
          );
        }
        getInfoParams(e, t, r) {
          return { chain: t, format: "decimal", exclude_spam: !r };
        }
        async modifyInfoResponse(e) {
          const { result: t } = e,
            r = [],
            s = t.map((e, t) => {
              const {
                token_address: s,
                token_id: o,
                token_uri: d,
                contract_type: l,
                metadata: u,
              } = e;
              if (!u) {
                const e = (0, c.getTransformedTokenUri)({
                  tokenId: o,
                  tokenUri: d,
                });
                return (
                  r.push(
                    Promise.all([
                      t,
                      a.default.get(e).catch((e) => {
                        throw new Error(JSON.stringify({ index: t, error: e }));
                      }),
                    ]),
                  ),
                  { contractAddress: s, tokenId: o, tokenStandard: l }
                );
              }
              try {
                const { name: e, description: t, image: r } = JSON.parse(u);
                return {
                  contractAddress: s,
                  tokenId: o,
                  tokenStandard: l,
                  name: e,
                  description: t,
                  imageUrl: r,
                };
              } catch (f) {
                throw (
                  console.warn(f),
                  new n.InternalError({
                    type: i.INTERNAL_ERROR,
                    error: f,
                    instance: this,
                  })
                );
              }
            });
          try {
            const e = await Promise.allSettled(r);
            e.forEach((e) => {
              if ("fulfilled" === e.status) {
                const {
                    value: [t, { data: r }],
                  } = e,
                  { name: a, description: n, image: i } = r;
                s[t] = { ...s[t], name: a, description: n, imageUrl: i };
              } else {
                const {
                  reason: { message: r },
                } = e;
                try {
                  const { index: e, message: t } = JSON.parse(r);
                  console.warn(
                    "Failed to get NFT metadata for tokenUri=" + s[e],
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
              new n.ExternalError({
                type: i.EXTERNAL_ERROR,
                error: o,
                instance: this,
              })
            );
          }
          return s;
        }
        fixTokenStandard(e) {
          for (const [t, r] of T) if (t.test(e)) return r;
          return u.UNRECOGNIZED_TOKEN_STANDARD;
        }
        async fetchNftList(e, t) {
          const { address: r } = e,
            s = await this.getInfo(r, t);
          return s.map((t) => {
            let {
              contractAddress: r,
              tokenId: s,
              tokenStandard: a,
              name: n,
              description: i,
              imageUrl: o,
            } = t;
            return new l.ETHNftToken(
              r,
              s,
              e.id,
              this.fixTokenStandard(a),
              n,
              i,
              o,
            );
          });
        }
        async getRawTokenTransactions(e) {
          let {
            address: t,
            limit: r = this.defaultTxLimit,
            cursor: s = null,
          } = e;
          try {
            const e = await this.request(
              this.getTokenTransactionsUrl(t),
              g,
              this.getTokenTransactionsParams(r, s),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyRawTokenTransactionsResponse(e, t);
          } catch (a) {
            return (console.warn(a), []);
          }
        }
        getTokenTransactionsUrl(e) {
          return `/${e}/erc20/transfers`;
        }
        getTokenTransactionsParams(e, t) {
          const r = e > p ? p : e;
          return { chain: this.chain, limit: r, cursor: t };
        }
        modifyRawTokenTransactionsResponse(e, t) {
          const {
              total: r,
              page: s,
              page_size: a,
              cursor: n,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            o = i.reduce((e, r, s) => {
              try {
                const s = this.getTokenTxDirection(t, r);
                return (
                  e.push({
                    contract: r.address,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: r.transaction_hash,
                    direction: s,
                    otherSideAddress: s ? r.from_address : r.to_address,
                    value: r.value,
                    datetime: new Date(r.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    ticker: r.token_symbol,
                    name: r.token_name,
                  }),
                  e
                );
              } catch (a) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(a),
                  e
                );
              }
            }, []);
          return {
            total: r,
            page: s,
            pageSize: a,
            cursor: n,
            rawTokenTransactions: o,
          };
        }
        getTokenTxDirection(e, t) {
          return t.to_address.toLowerCase() === e.toLowerCase();
        }
        async getUserTokenList(e) {
          const t = await this.request(
            this.getUserTokenListUrl(e),
            g,
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
            limit: r = this.defaultTxLimit,
            cursor: s = null,
          } = e;
          try {
            const e = await this.request(
              this.getNftTransactionsUrl(t),
              g,
              this.getNftTransactionsParams(r, s),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyNftTransactionsResponse(e, t);
          } catch (a) {
            return (console.warn(a), []);
          }
        }
        getNftTransactionsUrl(e) {
          return `/${e}/nft/transfers`;
        }
        getNftTransactionsParams(e, t) {
          const r = e > y ? y : e;
          return {
            chain: this.chain,
            limit: r,
            format: "decimal",
            direction: "both",
            cursor: t,
          };
        }
        modifyNftTransactionsResponse(e, t) {
          const {
              total: r,
              page: s,
              page_size: a,
              cursor: n,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            o = i.reduce((e, r, s) => {
              try {
                const s = this.getTokenTxDirection(t, r);
                return (
                  e.push({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    contract: r.token_address,
                    contractType: r.contract_type,
                    tokenId: r.token_id,
                    txid: r.transaction_hash,
                    direction: s,
                    otherSideAddress: s ? r.from_address : r.to_address,
                    datetime: new Date(r.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    txType: f.TxTypes.TRANSFERNFT,
                    isNft: !0,
                    amount: w,
                  }),
                  e
                );
              } catch (a) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(a),
                  e
                );
              }
            }, []);
          return {
            total: r,
            page: s,
            pageSize: a,
            cursor: n,
            nftTransactions: o,
          };
        }
      }
      t.default = MoralisExplorer;
    },
    3280: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getTransformedTokenUri", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var a = s(r(3281));
    },
    3281: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const s = new Map([
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
        a = (e) => {
          const { tokenUri: t } = e;
          let r = t;
          return (
            s.forEach((t, s) => {
              let [a, n] = t;
              const i = n(e);
              r = s.test(r) ? r.replace(a, i) : r;
            }),
            r
          );
        };
      t.default = a;
    },
    4105: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const s = (e) =>
        class extends e {
          onConfirmSocketTx(e) {
            (this.getInfo(),
              null !== e && void 0 !== e && e.direction
                ? this.eventEmitter.emit("socket::newtx", {
                    id: this.id,
                    ticker: this.ticker,
                    amount: e.amount,
                    txid: e.txid,
                  })
                : this.eventEmitter.emit("socket::newtx::outgoing", {
                    id: this.id,
                    ticker: this.ticker,
                  }));
          }
        };
      t.default = s;
    },
    7212: function (e) {
      e.exports = JSON.parse(
        '[{"type":"BEP20","name":"Atomic Wallet Token","contract":"0x798af7725376765e7f3ca86d5e0cf1beaef19f34","transfers":1,"ticker":"AWC","decimal":8,"visibility":true},{"type":"BEP20","name":"PancakeSwap","contract":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","transfers":1,"ticker":"CAKE","decimal":18,"visibility":true},{"type":"BEP20","name":"Binance USD","contract":"0xe9e7cea3dedca5984780bafc599bd69add087d56","transfers":1,"ticker":"BUSD","decimal":18,"visibility":true},{"type":"BEP20","name":"Tether USD","contract":"0x55d398326f99059ff775485246999027b3197955","transfers":1,"ticker":"USDT","decimal":18,"visibility":true},{"type":"BEP20","name":"Wall Street Games","contract":"0xa58950f05fea2277d2608748412bf9f802ea4901","transfers":1,"ticker":"WSG","decimal":18,"visibility":true},{"type":"BEP20","name":"Baby Doge Coin","contract":"0xc748673057861a797275cd8a068abb95a902e8de","transfers":1,"ticker":"BABYDOGE","decimal":9,"visibility":true},{"type":"BEP20","name":"FEG Token","contract":"0xacfc95585d80ab62f67a14c566c1b7a49fe91167","transfers":1,"ticker":"FEG","decimal":9,"visibility":true},{"type":"BEP20","name":"Plant Vs Undead","contract":"0x31471e0791fcdbe82fbf4c44943255e923f1b794","transfers":1,"ticker":"PVU","decimal":18,"visibility":true},{"type":"BEP20","name":"Shiba Inu","contract":"0x2859e4544c4bb03966803b044a93563bd2d0dd4d","transfers":1,"ticker":"SHIB","decimal":18,"visibility":true},{"type":"BEP20","name":"SafeMoon","contract":"0x42981d0bfbaf196529376ee702f2a9eb9092fcb5","transfers":1,"ticker":"SFM","decimal":9,"visibility":true},{"type":"BEP20","name":"USDCoin","contract":"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","transfers":1,"ticker":"USDC","decimal":18,"visibility":true},{"type":"BEP20","name":"STEPN","contract":"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1","transfers":1,"ticker":"GMT","decimal":8,"visibility":true},{"type":"BEP20","name":"Flux","contract":"0xaff9084f2374585879e8b434c399e29e80cce635","transfers":1,"ticker":"FLUX","decimal":8,"visibility":true},{"type":"BEP20","name":"CEEK VR","contract":"0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66","transfers":1,"ticker":"CEEK","decimal":18,"visibility":true},{"type":"BEP20","name":"Trust Wallet Token","contract":"0x4b0f1812e5df2a09796481ff14017e6005508003","transfers":1,"ticker":"TWT","decimal":18,"visibility":true},{"type":"BEP20","name":"Elrond","contract":"0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe","transfers":1,"ticker":"EGLD","decimal":18,"visibility":true},{"type":"BEP20","name":"Flow","contract":"0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2","transfers":1,"ticker":"FLOW","decimal":18,"visibility":true},{"type":"BEP20","name":"Filecoin","contract":"0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153","transfers":1,"ticker":"FIL","decimal":18,"visibility":true},{"type":"BEP20","name":"eCash","contract":"0x0ef2e7602add1733bfdb17ac3094d0421b502ca3","transfers":1,"ticker":"XEC","decimal":18,"visibility":true},{"type":"BEP20","name":"IOTA","contract":"0xd944f1d1e9d5f9bb90b62f9d45e447d989580782","transfers":1,"ticker":"MIOTA","decimal":18,"visibility":true},{"type":"BEP20","name":"Fantom","contract":"0xad29abb318791d579433d831ed122afeaf29dcfe","transfers":1,"ticker":"FTM","decimal":18,"visibility":true},{"type":"BEP20","name":"Flux","contract":"0xaff9084f2374585879e8b434c399e29e80cce635","transfers":1,"ticker":"FLUX","decimal":8,"visibility":true},{"type":"BEP20","name":"ROSE","contract":"0x6c6d604d3f07abe287c1a3df0281e999a83495c0","transfers":1,"ticker":"ROSE","decimal":18,"visibility":true},{"type":"BEP20","name":"IoTeX","contract":"0x9678e42cebeb63f23197d726b29b1cb20d0064e5","transfers":1,"ticker":"IOTX","decimal":18,"visibility":true},{"type":"BEP20","name":"ABBC Coin","contract":"0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d","transfers":1,"ticker":"ABBC","decimal":8,"visibility":true},{"type":"BEP20","name":"Swipe","contract":"0x47bead2563dcbf3bf2c9407fea4dc236faba485a","transfers":1,"ticker":"SXP","decimal":18,"visibility":true},{"type":"BEP20","name":"EverRise","contract":"0xc17c30e98541188614df99239cabd40280810ca3","transfers":1,"ticker":"RISE","decimal":18,"visibility":true}]',
      );
    },
    7213: function (e) {
      e.exports = JSON.parse(
        '["0xa43D8B1F070B8E2fD2de4e01369369d5fd7d4784","0x0198be93B7cae38Da7E2FD966946412CC36447BF","0x3b4DEB27A46e746776a661eCf523c42ED0400d54"]',
      );
    },
  },
]);
