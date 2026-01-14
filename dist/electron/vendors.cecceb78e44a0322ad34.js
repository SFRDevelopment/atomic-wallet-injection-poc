(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [285, 32],
  {
    2724: function (e, t, s) {
      "use strict";
      (function (e) {
        var r = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var n = r(s(69)),
          a = r(s(230)),
          i = s(805),
          o = r(s(28)),
          c = r(s(8)),
          d = s(74),
          l = s(19),
          u = s(27),
          h = s(67),
          f = r(s(80)),
          m = r(s(81)),
          T = r(s(794)),
          g = r(s(815)),
          p = r(s(4107)),
          w = r(s(3210)),
          y = r(s(4925)),
          k = r(s(3279)),
          v = r(s(846)),
          b = r(s(853)),
          x = s(3269),
          N = r(s(158)),
          E = r(s(382)),
          A = r(s(386));
        function P(e, t) {
          (L(e, t), t.add(e));
        }
        function C(e, t, s) {
          (L(e, t), t.set(e, s));
        }
        function L(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function R(e, t) {
          return e.get(B(e, t));
        }
        function S(e, t, s) {
          return (e.set(B(e, t), s), s);
        }
        function B(e, t, s) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : s;
          throw new TypeError("Private element is not present on this object");
        }
        const _ = "Ethereum ARB",
          U = "ETHARB",
          G = "ARB",
          O = "arbitrum",
          I = "m/44'/9001'/0'/0/0",
          M = 18,
          D = 1e13,
          F = 42161,
          K = 1e9,
          $ = "0x29625E10Cfe090294DC0eC579E322ce87C822745",
          j = 5e5,
          q = 15e5,
          H = "pending",
          V = "0x0",
          J = 3e3,
          W = d.ConfigKey.ArbitrumTokens,
          X = d.ConfigKey.ArbitrumTokensBanned,
          z = "insufficient funds",
          Y = "web3Sdk",
          Z = "ethereumJsWalletSdk";
        var Q = new WeakMap(),
          ee = new WeakSet();
        class ARBCoin extends (0, A.default)(
          (0, x.NftMixin)((0, N.default)((0, E.default)(a.default))),
        ) {
          constructor(e) {
            var t, r, a, i;
            (super({
              ...e,
              name: null !== (t = e.name) && void 0 !== t ? t : _,
              ticker: null !== (r = e.ticker) && void 0 !== r ? r : U,
              decimal: M,
              unspendableBalance: D,
              chainId: null !== (a = e.chainId) && void 0 !== a ? a : F,
              l2Name: G,
              network: null !== (i = e.network) && void 0 !== i ? i : O,
              dependencies: {
                [Y]: new T.default(() =>
                  Promise.resolve().then(s.t.bind(null, 2654, 7)),
                ),
                [Z]: new T.default(() => s.e(16).then(s.t.bind(null, 2655, 7))),
              },
            }),
              P(this, ee),
              C(this, Q, void 0),
              (0, n.default)(this, "web3BaseUrl", void 0),
              (0, n.default)(this, "coreLibrary", null),
              this.setExplorersModules([
                g.default,
                p.default,
                w.default,
                y.default,
                k.default,
                v.default,
                b.default,
              ]),
              this.loadExplorers(e),
              (this.derivation = I));
            const { feeData: o, explorers: c } = e;
            (this.setFeeData(o),
              (this.gasPriceConfig = null),
              (this.bannedTokens = []));
            const d = c.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3BaseUrl = d.baseUrl),
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
            const { default: e } = await this.loadLib(Y);
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
              (this.unspendableBalance = e.unspendableBalance || D),
              (this.gasLimit = Number(e.gasLimit) || j),
              (this.stakingGasLimit = Number(e.stakingGasLimit) || q),
              (this.maxGasLimit = Number(e.maxGasLimit) || q),
              (this.nftGasLimitCoefficient =
                Number(e.nftGasLimitCoefficient) || 1),
              (this.nftGasPriceCoefficient = Number(e.nftGasPriceCoefficient)),
              (this.gasLimitCoefficient = Number(e.gasLimitCoefficient) || 1),
              (this.gasPriceCoefficient = Number(e.gasPriceCoefficient) || 0),
              (this.defaultGasPrice = Number(e.defaultGasPrice) || 1),
              (this.defaultMaxGasPrice = Number(e.defaultMaxGasPrice) || 100),
              (this.resendTimeout = e.resendTimeout));
          }
          isFeeDynamic() {
            return !0;
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(U + ": getTransactions: address is not loaded");
            const [e, { tokenTransactions: t }] = await Promise.all(
                [
                  this.getProvider("history").getTransactions({
                    address: this.address,
                  }),
                  this.getProvider("token-history").getTokensTransactions({
                    address: this.address,
                  }),
                ].map((e) => e.catch((e) => (console.error(e), []))),
              ),
              s = t.reduce((e, t) => {
                const s = t.contract.toLowerCase(),
                  r = this.tokens[s],
                  n = !!r;
                return (
                  e.push(new f.default({ ...t, amount: n ? t.amount : null })),
                  e
                );
              }, []);
            return e.concat(s);
          }
          manageSocket() {
            (this.eventEmitter.on("receive", async (e) => {
              let { address: t, hash: s, ticker: r } = e;
              this.ticker === r &&
                this.getProvider("socket").getSocketTransaction({
                  address: t,
                  hash: s,
                  tokens: this.tokens,
                  type: "receive",
                });
            }),
              this.eventEmitter.on("confirm", async (e) => {
                let { address: t, hash: s, ticker: r } = e;
                this.ticker === r &&
                  this.getProvider("socket").getSocketTransaction({
                    address: t,
                    hash: s,
                    tokens: this.tokens,
                    type: "confirm",
                  });
              }));
          }
          getExcludedTokenList() {
            return ["TRX", "EOS", "ICX", "VEN", "AION", "BTT", "KIN", "BNB"]
              .concat(Array.isArray(this.bannedTokens) ? this.bannedTokens : [])
              .map((e) => e.toLowerCase());
          }
          async loadWallet(e) {
            const [t, { hdkey: s }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib(Z),
              ]),
              r = s.fromMasterSeed(e),
              n = r.getWallet(),
              a = t.eth.accounts.privateKeyToAccount(n.getPrivateKeyString());
            if (!a)
              throw new Error(this.wallet.ticker + " can't get the wallet");
            return (
              S(Q, this, a.privateKey),
              (this.address = a.address),
              { id: this.id, privateKey: R(Q, this), address: this.address }
            );
          }
          async validateAddress(e) {
            const t = await this.getCoreLibrary();
            return t.utils.isAddress(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              isSendAll: s = !1,
              userFee: r = null,
              amount: n,
              nonce: a,
              userGasPrice: i,
              multiplier: o,
              gasLimit: c,
              paymentData: d = null,
            } = e;
            const l = c || (await this.estimateGas(n, t)) || this.gasLimit,
              u = i || (await this.getGasPrice()),
              h = {
                to: t,
                value: n,
                gas: l,
                chainId: F,
                gasPrice: u,
                nonce: a || (await this.getNonce()),
              };
            "" !== d && null !== d && (h.data = d);
            const f = await this.getCoreLibrary(),
              m = await f.eth.accounts.signTransaction(h, R(Q, this));
            return m.rawTransaction;
          }
          async createTokenTransaction(e) {
            let {
              address: t,
              amount: s,
              custom: r,
              userGasPrice: n,
              gasLimit: a,
              contract: i,
              multiplier: o,
            } = e;
            const c = B(ee, this, te).call(this, i, t, s);
            return this.createTransaction({
              address: i,
              amount: V,
              paymentData: c,
              userGasPrice: n,
              gasLimit: a || (await this.estimateGas(s, t, i)),
              multiplier: o,
            });
          }
          sendTransaction(e) {
            return this.getProvider("send").sendTransaction(e);
          }
          async checkTransaction(e) {
            const {
              coin: t,
              address: s,
              amount: r,
              memo: n,
              txid: a,
              nonce: i,
              fee: o,
            } = e;
            try {
              const e = new f.default({
                ticker: t.ticker,
                walletid: t.id,
                name: t.name,
                alias: t.alias,
                txid: a,
                direction: this.address === s,
                otherSideAddress: s,
                amount: (0, h.toCurrency)(r, t.decimal),
                datetime: new Date(),
                memo: n,
                nonce: i,
                confirmations: 1,
                fee: o,
                feeTicker: this.ticker,
              });
              (await m.default.filterAndUpdateTransactions([e]),
                this.eventEmitter.emit("socket::newtx::outgoing", {
                  id: this.id,
                  ticker: t.ticker,
                }),
                setTimeout(async () => {
                  await this.getBalance();
                }, J));
            } catch (c) {
              console.warn(this.ticker, "Unable to check transaction");
            }
          }
          async getMaxFeePerGas(e) {
            const { standard: t } = await this.getModerateGasPrice();
            if (!t)
              throw new l.ExternalError({
                type: u.EXTERNAL_ERROR,
                error: "Failed to get getMaxFeePerGas",
                instance: this,
              });
            return t.mul(new this.BN(e)).toString();
          }
          async getGasPriceForSendNft(e) {
            const t = await this.getGasPrice(!0),
              s = Number(t) + e * K,
              r = this.defaultMaxGasPrice * K;
            return s > r ? r : s;
          }
          async estimateGasForSendNft(e, t, s, r) {
            void 0 === r && (r = 1);
            const n = { from: e, to: t, value: V, data: s },
              a = await this.getCoreLibrary(),
              i = await a.eth
                .estimateGas(n)
                .catch(
                  (e) => (
                    e.message.includes(z) ||
                      o.default.error({ instance: this, error: e }),
                    this.maxGasLimit
                  ),
                );
            return Math.round(i * this.nftGasLimitCoefficient);
          }
          async getNftTransferGasParams(e, t, s) {
            let { userGasPrice: r, userGasLimit: n } = s;
            const {
                address: a,
                nftGasPriceCoefficient: i,
                nftGasLimitCoefficient: o,
                gasPriceCoefficient: c,
                gasLimitCoefficient: d,
                defaultGasPrice: l,
                gasLimit: u = q,
              } = this,
              h = i || c,
              f = o || d,
              m = [(l + h) * K, Math.ceil(u * f)],
              T = (await this.getNonce()).toNumber(),
              [g, p] = await Promise.allSettled([
                r || this.getGasPriceForSendNft(h),
                n || this.estimateGasForSendNft(a, e, t, f),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : m[t])),
              );
            return { gasLimit: p, gasPrice: g, nonce: T };
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: s,
              tokenStandard: r,
              toAddress: n = null,
              userOptions: a = {},
            } = e;
            const i =
              n && n.toLowerCase() !== this.address.toLowerCase() ? n : $;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  i,
                  t,
                  s,
                  r,
                ),
                { gasLimit: n, gasPrice: o } =
                  await this.getNftTransferGasParams(t, e, a);
              return new this.BN(o).mul(new this.BN(n));
            } catch (o) {
              throw new l.ExternalError({
                type: u.EXTERNAL_ERROR,
                error: o,
                instance: this,
              });
            }
          }
          async createNftTransaction(e) {
            let { contractAddress: t, data: s, userOptions: r = {} } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: n,
                  nonce: a,
                } = await this.getNftTransferGasParams(t, s, r),
                i = { to: t, value: V, gas: e, data: s, nonce: a, gasPrice: n },
                o = await this.getCoreLibrary(),
                { rawTransaction: c } = await o.eth.accounts.signTransaction(
                  i,
                  R(Q, this),
                );
              return c;
            } catch (n) {
              throw (
                console.warn(n),
                new l.ExternalError({
                  type: u.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          async getNonce() {
            const e = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await e.eth.getTransactionCount(this.address, H),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let {
              amount: t = 1,
              address: s,
              contract: r = null,
              userGasPrice: n = null,
              gasLimit: a = null,
            } = void 0 === e ? {} : e;
            const i = n || (await this.getGasPrice()),
              o = a || (await this.estimateGas(t, s, r));
            return new this.BN(i).mul(new this.BN(o));
          }
          async getGasPrice(e) {
            var t;
            void 0 === e && (e = !1);
            const { node: s } =
                null !==
                  (t = await this.getProvider("node")
                    .getGasPrice()
                    .catch((e) => {
                      console.warn(`rawGasPrice for ${_} error:`, e);
                    })) && void 0 !== t
                  ? t
                  : {},
              r = Number(s) || this.defaultGasPrice * K;
            return e ? r : r + this.gasPriceCoefficient * K;
          }
          async estimateGas(e, t, s) {
            const r = t || $,
              n = { from: this.address, to: r, value: e };
            s && (n.data = B(ee, this, te).call(this, s, r, e));
            const a = await this.getCoreLibrary(),
              i = await a.eth
                .estimateGas(n)
                .catch(
                  (e) => (
                    e.message.includes(z) ||
                      o.default.error({ instance: this, error: e }),
                    s ? this.maxGasLimit : this.gasLimit
                  ),
                );
            return Math.round(i * this.gasLimitCoefficient);
          }
          async availableBalance(e) {
            if (!this.balance) return null;
            const t = (e && new this.BN(e)) || (await this.getFee()),
              s = new this.BN(this.balance)
                .sub(t)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(s).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(s);
          }
          async getInfo(e) {
            if ((await this.initCoreLibrary(), e && e.isToken)) {
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
            return {
              balance: null === t || void 0 === t ? void 0 : t.balance,
              balances: this.balances,
            };
          }
          getUserValidators() {
            return this.getPredefinedValidators();
          }
          createToken(e) {
            return new i.ARBToken({ parent: this, ...e });
          }
          async getUserTokenList() {
            const e = (
              (await this.getProvider("token")
                .getUserTokenList(this.address)
                .catch((e) => console.warn(e))) || []
            ).filter((e) => {
              var t;
              return null === (t = e.supportedStandards) || void 0 === t
                ? void 0
                : t.includes("erc20");
            });
            return (
              e.forEach((e) => {
                const t = e.contract,
                  s = this.tokens[t],
                  r = this.tokens[t.toLowerCase()];
                (s && (s.balance = e.balance), r && (r.balance = e.balance));
              }),
              e
            );
          }
          async getTokenList() {
            return (
              (this.bannedTokens = await this.getBannedTokenList()),
              B(ee, this, se).call(this, W)
            );
          }
          getBannedTokenList() {
            return B(ee, this, se).call(this, X);
          }
          getTokenFromUserList(e, t) {
            return { ...e, source: t, visibility: !0 };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            S(Q, this, e);
          }
          getGasRange(e) {
            return (void 0 === e && (e = "send"), this.feeData[e]);
          }
          get isL2() {
            return !0;
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, R(Q, this));
          }
          signWithCustomSigner(t) {
            let { data: s, signer: r } = t;
            return r({ ...s, privateKey: e.from(R(Q, this).slice(2), "hex") });
          }
        }
        function te(e, t, s) {
          return this.getProvider("send").createSendTokenContract(
            e,
            this.address,
            t,
            s,
          );
        }
        async function se(e) {
          try {
            return await c.default.get(e);
          } catch (t) {
            return (
              o.default.error({ instance: this, error: t }),
              c.default.getLocal(e)
            );
          }
        }
        t.default = ARBCoin;
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
        d = s(4),
        l = s(27),
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
              this.getTransactionsUrl(t, s || 0, r || this.defaultTxLimit, n),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                s || 0,
                r || this.defaultTxLimit,
                n,
                a,
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
            walletid: (0, d.getTokenId)({
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
            d = c ? r : s.sub(r).sub(n);
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
        d = s(813);
      const l = "transactionHash",
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
              .on(l, (e) => {
                t({ tx: e });
              })
              .catch((e) => s(e));
          });
        }
        async getNftContractData(e, t, s, r, n) {
          if (![d.ERC721_TOKEN_STANDARD, d.ERC1155_TOKEN_STANDARD].includes(n))
            throw new i.InternalError({
              type: a.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: o } = e,
            c = {
              [d.ERC1155_TOKEN_STANDARD]: (e, t, s, r) => {
                const n = new this.web3.eth.Contract(h, s);
                return n.methods.safeTransferFrom(e, t, r, 1, u).encodeABI();
              },
              [d.ERC721_TOKEN_STANDARD]: (e, t, s, r) => {
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
    3269: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NftMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var n = r(s(823));
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
        d = s(67),
        l = s(160),
        u = s(813),
        h = s(384);
      const f = "https://deep-index.moralis.io/api/v2/",
        m = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        T = [
          [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
          [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD],
        ],
        g = "get",
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
          return (0, d.getStringWithEnsuredEndChar)(e, "/") === f;
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
                  s.push(
                    Promise.all([
                      t,
                      n.default.get(e).catch((e) => {
                        throw new Error(JSON.stringify({ index: t, error: e }));
                      }),
                    ]),
                  ),
                  { contractAddress: r, tokenId: o, tokenStandard: l }
                );
              }
              try {
                const { name: e, description: t, image: s } = JSON.parse(u);
                return {
                  contractAddress: r,
                  tokenId: o,
                  tokenStandard: l,
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
          for (const [t, s] of T) if (t.test(e)) return s;
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
            return new l.ETHNftToken(
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
              g,
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
            limit: s = this.defaultTxLimit,
            cursor: r = null,
          } = e;
          try {
            const e = await this.request(
              this.getNftTransactionsUrl(t),
              g,
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
        d = s(67);
      const l = 1e3,
        u = "PC65R3S3YXXM8H2WIRJQWCSUUAR8JKRGJ4",
        h = "account",
        f = "txlist",
        m = "tokentx",
        T = "balance",
        g = 0,
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
            startblock: g,
            endblock: p,
            sort: w,
            apikey: u,
          };
        }
        async getBalance(e) {
          const t = { module: h, action: T, address: e, apikey: u },
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
          return new Date(Number(e.timeStamp) * l);
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
              action: m,
              address: t,
              startblock: g,
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
          return (0, d.toCurrency)(e.value, Number(e.tokenDecimal));
        }
      }
      t.default = PolyscanExplorer;
    },
  },
]);
