(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [398],
  {
    2722: function (e, t, a) {
      "use strict";
      (function (e) {
        var i = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var s = i(a(69)),
          r = i(a(230)),
          n = a(805),
          o = i(a(8386)),
          c = i(a(8387)),
          d = i(a(28)),
          h = i(a(8)),
          l = a(74),
          u = a(19),
          m = a(27),
          f = a(67),
          g = i(a(80)),
          w = i(a(81)),
          y = i(a(853)),
          k = i(a(846)),
          L = i(a(815)),
          b = i(a(794)),
          P = i(a(158)),
          T = i(a(382)),
          v = i(a(386)),
          C = i(a(881));
        function N(e, t, a) {
          (p(e, t), t.set(e, a));
        }
        function p(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function G(e, t) {
          return e.get(F(e, t));
        }
        function E(e, t, a) {
          return (e.set(F(e, t), a), a);
        }
        function F(e, t, a) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : a;
          throw new TypeError("Private element is not present on this object");
        }
        const x = "Ethereum OP",
          B = "ETHOP",
          O = "OP",
          S = "m/44'/614'/0'/0/0",
          A = 18,
          R = "0",
          D = 10,
          M = 1e9,
          U = 5e4 * M,
          _ = "0x29625E10Cfe090294DC0eC579E322ce87C822745",
          I = "0x420000000000000000000000000000000000000F",
          K = "0x",
          W = 21e3,
          X = 15e4,
          j = 5e3,
          J = 400,
          V = "pending",
          q = "0x0",
          z = 3e3,
          H = l.ConfigKey.OptimismTokens,
          $ = l.ConfigKey.OptimismTokensBanned,
          Q = "web3Sdk",
          Y = "ethereumJsWalletSdk";
        var Z = new WeakMap();
        class OPCoin extends (0, v.default)(
          (0, P.default)((0, T.default)(r.default)),
        ) {
          constructor(e) {
            let {
              alias: t,
              notify: i,
              feeData: r,
              explorers: n,
              txWebUrl: o,
              socket: c,
              id: d,
              features: h,
            } = e;
            const l = {
              id: d,
              alias: t,
              notify: i,
              name: x,
              l2Name: O,
              ticker: B,
              network: O,
              decimal: A,
              unspendableBalance: R,
              txWebUrl: o,
              explorers: n,
              socket: c,
              feeData: r,
              chainId: D,
              dependencies: {
                [Q]: new b.default(() =>
                  Promise.all([
                    a.e(0),
                    a.e(7),
                    a.e(8),
                    a.e(10),
                    a.e(14),
                    a.e(13),
                    a.e(12),
                    a.e(11),
                    a.e(32),
                  ]).then(a.t.bind(null, 2654, 7)),
                ),
                [Y]: new b.default(() =>
                  Promise.all([a.e(0), a.e(26)]).then(a.t.bind(null, 2655, 7)),
                ),
              },
              features: h,
            };
            (super(l),
              N(this, Z, void 0),
              (0, s.default)(this, "web3BaseUrl", void 0),
              (0, s.default)(this, "coreLibrary", null),
              (this.derivation = S),
              this.setExplorersModules([L.default, y.default, k.default]),
              this.loadExplorers(l),
              this.setFeeData(r),
              (this.gasPriceConfig = null),
              (this.bannedTokens = []));
            const u = n.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3BaseUrl = u.baseUrl),
              (this.fields.paymentId = !1),
              (this.tokens = {}),
              (this.nonce = new this.BN("0")),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (e, t, a) => {
                  this.eventEmitter.emit("socket::tx::confirmed", {
                    id: e,
                    ticker: a,
                  });
                },
              ));
          }
          async initCoreLibrary() {
            if (this.coreLibrary) return;
            const { default: e } = await this.loadLib(Q);
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
              (this.gasLimit = Number(e.gasLimit)),
              (this.stakingGasLimit = Number(e.stakingGasLimit) || X),
              (this.nftGasLimitCoefficient = Number(e.nftGasLimitCoefficient)),
              (this.nftGasPriceCoefficient = Number(e.nftGasPriceCoefficient)),
              (this.gasLimitCoefficient = Number(e.gasLimitCoefficient)),
              (this.gasPriceCoefficient = Number(e.gasPriceCoefficient)),
              (this.defaultGasPrice = Number(e.defaultGasPrice)),
              (this.defaultMaxGasPrice = Number(e.defaultMaxGasPrice)),
              (this.resendTimeout = e.resendTimeout),
              (this.maxGasLimitL1 = Number(e.maxGasLimitL1) || j),
              (this.maxGasPriceL1 = Number(e.maxGasPriceL1) || J));
          }
          isFeeDynamic() {
            return !0;
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(B + ": getTransactions: address is not loaded");
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
              a = t.reduce((e, t) => {
                const a = t.contract.toLowerCase(),
                  i = this.tokens[a],
                  s = !!i;
                return (
                  e.push(new g.default({ ...t, amount: s ? t.amount : null })),
                  e
                );
              }, []);
            return e.concat(a);
          }
          manageSocket() {
            (this.eventEmitter.on("receive", async (e) => {
              let { address: t, hash: a, ticker: i } = e;
              this.ticker === i &&
                this.getProvider("socket").getSocketTransaction({
                  address: t,
                  hash: a,
                  tokens: this.tokens,
                  type: "receive",
                });
            }),
              this.eventEmitter.on("confirm", async (e) => {
                let { address: t, hash: a, ticker: i } = e;
                this.ticker === i &&
                  this.getProvider("socket").getSocketTransaction({
                    address: t,
                    hash: a,
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
            const [t, { hdkey: a }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib(Y),
              ]),
              i = a.fromMasterSeed(e),
              s = i.getWallet(),
              r = t.eth.accounts.privateKeyToAccount(s.getPrivateKeyString());
            if (!r)
              throw new Error(this.wallet.ticker + " can't get the wallet");
            return (
              E(Z, this, r.privateKey),
              (this.address = r.address),
              { id: this.id, privateKey: G(Z, this), address: this.address }
            );
          }
          async validateAddress(e) {
            const t = await this.getCoreLibrary();
            return t.utils.isAddress(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              isSendAll: a = !1,
              userFee: i = null,
              amount: s,
              nonce: r,
              userGasPrice: n,
              multiplier: o,
              gasLimit: c,
              paymentData: d = null,
            } = e;
            const h = d ? c || this.gasLimit : W;
            let l,
              u = s;
            if (!d && a && i) {
              const e = await this.getCoinFeeL1FromOracle(),
                t = new this.BN(i).sub(e);
              ((l = Math.floor(new this.BN(t).div(new this.BN(h)).toNumber())),
                (u = Number(s) - U));
            }
            const m = l || n || (await this.getGasPrice()),
              f = {
                to: t,
                value: u,
                gas: h,
                chainId: D,
                gasPrice: m,
                nonce: r || (await this.getNonce()),
              };
            "" !== d && null !== d && (f.data = d);
            const g = await this.getCoreLibrary(),
              w = await g.eth.accounts.signTransaction(f, G(Z, this));
            return w.rawTransaction;
          }
          _getTransferTokenContractData(e, t, a) {
            return this.getProvider("send").createSendTokenContract(
              e,
              this.address,
              t,
              a,
            );
          }
          async createTokenTransaction(e) {
            let {
              address: t,
              amount: a,
              custom: i,
              userGasPrice: s,
              gasLimit: r,
              contract: n,
              multiplier: o,
            } = e;
            const c = this._getTransferTokenContractData(n, t, a);
            return this.createTransaction({
              address: n,
              amount: q,
              paymentData: c,
              userGasPrice: s,
              gasLimit: r || (await this.estimateGas(a, t)),
              multiplier: o,
            });
          }
          sendTransaction(e) {
            return this.getProvider("send").sendTransaction(e);
          }
          async checkTransaction(e) {
            const {
              coin: t,
              address: a,
              amount: i,
              memo: s,
              txid: r,
              nonce: n,
              fee: o,
            } = e;
            try {
              const e = new g.default({
                ticker: t.ticker,
                walletid: t.id,
                name: t.name,
                alias: t.alias,
                txid: r,
                direction: this.address === a,
                otherSideAddress: a,
                amount: (0, f.toCurrency)(i, t.decimal),
                datetime: new Date(),
                memo: s,
                nonce: n,
                confirmations: 1,
                fee: o,
                feeTicker: this.ticker,
              });
              (await w.default.filterAndUpdateTransactions([e]),
                this.eventEmitter.emit("socket::newtx::outgoing", {
                  id: this.id,
                  ticker: t.ticker,
                }),
                setTimeout(async () => {
                  await this.getBalance();
                }, z));
            } catch (c) {
              console.warn(this.ticker, "Unable to check transaction");
            }
          }
          async getMaxFeePerGas(e) {
            const { standard: t } = await this.getModerateGasPrice();
            if (!t)
              throw new u.ExternalError({
                type: m.EXTERNAL_ERROR,
                error: "Failed to get getMaxFeePerGas",
                instance: this,
              });
            return t.mul(new this.BN(e)).toString();
          }
          async getGasPriceForSendNft(e) {
            try {
              var t;
              const { node: a } =
                  null !== (t = await this.getProvider("node").getGasPrice()) &&
                  void 0 !== t
                    ? t
                    : {},
                i = Number(a) + e * M,
                s = this.defaultMaxGasPrice * M;
              return i > s ? s : i;
            } catch (a) {
              throw a;
            }
          }
          async estimateGasForSendNft(e, t, a, i) {
            void 0 === i && (i = 1);
            try {
              const s = await this.getProvider("nft-send").estimateGas(
                e,
                t,
                null,
                a,
              );
              return Math.ceil(s * i);
            } catch (s) {
              throw (
                console.warn(s),
                new u.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: s,
                  instance: this,
                })
              );
            }
          }
          async getNftTransferGasParams(e, t, a) {
            let { userGasPrice: i, userGasLimit: s } = a;
            const {
                address: r,
                nftGasPriceCoefficient: n,
                nftGasLimitCoefficient: o,
                gasPriceCoefficient: c,
                gasLimitCoefficient: d,
                defaultGasPrice: h,
                gasLimit: l = X,
              } = this,
              u = n || c,
              m = o || d,
              f = [(h + u) * M, Math.ceil(l * m)],
              g = (await this.getNonce()).toNumber(),
              [w, y] = await Promise.allSettled([
                i || this.getGasPriceForSendNft(u),
                s || this.estimateGasForSendNft(r, e, t, m),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : f[t])),
              );
            return { gasLimit: y, gasPrice: w, nonce: g };
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: a,
              tokenStandard: i,
              toAddress: s = null,
              userOptions: r = {},
            } = e;
            const n =
              s && s.toLowerCase() !== this.address.toLowerCase() ? s : _;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  n,
                  t,
                  a,
                  i,
                ),
                { gasLimit: s, gasPrice: o } =
                  await this.getNftTransferGasParams(t, e, r);
              return new this.BN(o).mul(new this.BN(s));
            } catch (o) {
              throw new u.ExternalError({
                type: m.EXTERNAL_ERROR,
                error: o,
                instance: this,
              });
            }
          }
          async createNftTransaction(e) {
            let { contractAddress: t, data: a, userOptions: i = {} } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: s,
                  nonce: r,
                } = await this.getNftTransferGasParams(t, a, i),
                n = {
                  to: t,
                  value: q,
                  gas: e,
                  data: a,
                  nonce: r,
                  maxFeePerGas: s,
                },
                o = await this.getCoreLibrary(),
                { rawTransaction: c } = await o.eth.accounts.signTransaction(
                  n,
                  G(Z, this),
                );
              return c;
            } catch (s) {
              throw (
                console.warn(s),
                new u.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: s,
                  instance: this,
                })
              );
            }
          }
          async getNonce() {
            const e = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await e.eth.getTransactionCount(this.address, V),
              )),
              this.nonce
            );
          }
          async _getFeeL1FromOracle(e) {
            const t = await this.getCoreLibrary(),
              a = new t.eth.Contract(C.default, I),
              i = await a.methods
                .getL1Fee(e)
                .call()
                .catch(
                  async (e) => (
                    d.default.error({ instance: this, error: e }),
                    new this.BN(this.maxGasLimitL1)
                      .mul(new this.BN(await this._getGasPriceL1FromConfig()))
                      .mul(new this.BN(M))
                  ),
                );
            return new this.BN(String(i));
          }
          async _getGasPriceL1FromConfig() {
            const { fast: e } = await h.default
              .get(l.ConfigKey.EthereumGasPrice)
              .catch(
                (e) => (
                  d.default.error({ instance: this, error: e }),
                  this.maxGasPriceL1
                ),
              );
            return e;
          }
          getCoinFeeL1FromOracle() {
            return this._getFeeL1FromOracle(K);
          }
          getTokenFeeL1FromOracle(e, t) {
            const a = this._getTransferTokenContractData(e, _, t);
            return this._getFeeL1FromOracle(a);
          }
          async getFee(e) {
            let {
              userGasPrice: t = null,
              gasLimit: a = null,
              contract: i = null,
              amount: s = 1,
            } = void 0 === e ? {} : e;
            const r = t || (await this.getGasPrice()),
              n =
                a ||
                (i
                  ? await this.estimateGas(s, null, i, this.gasLimit)
                  : this.gasLimit),
              o = new this.BN(r).mul(new this.BN(n)),
              c = i
                ? await this.getTokenFeeL1FromOracle(i, s)
                : await this.getCoinFeeL1FromOracle();
            return new this.BN(c).add(o);
          }
          async getGasPrice(e) {
            var t;
            void 0 === e && (e = !1);
            const { node: a } =
                null !==
                  (t = await this.getProvider("node")
                    .getGasPrice()
                    .catch((e) => {
                      console.warn(`rawGasPrice for ${x} error:`, e);
                    })) && void 0 !== t
                  ? t
                  : {},
              i =
                Number(null === a || void 0 === a ? void 0 : a.toString()) ||
                this.defaultGasPrice * M;
            return e ? i : i + this.gasPriceCoefficient * M;
          }
          async estimateGas(e, t, a, i) {
            void 0 === i && (i = X);
            const s = this.getProvider("send").getERC20ABI(),
              r = await this.getCoreLibrary(),
              n = new r.eth.Contract(s, a),
              o = await n.methods
                .transfer(_, e)
                .estimateGas({ from: this.address })
                .catch(
                  (e) => (d.default.error({ instance: this, error: e }), i),
                );
            return Math.round(o * this.gasLimitCoefficient);
          }
          async availableBalance(e) {
            if (!this.balance) return null;
            const t = (e && new this.BN(e)) || (await this.getFee()),
              a = new this.BN(this.balance)
                .sub(t)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(a).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(a);
          }
          async getInfo(e) {
            if ((await this.initCoreLibrary(), e && e.isToken)) {
              const t = await this.getProvider(
                  "node",
                ).getTokenBalanceByContractAddress({
                  address: this.address,
                  contractAddress: e.contract.toLowerCase(),
                }),
                a = [e.contract, e.contract.toLowerCase()];
              a.forEach((e) => {
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
            return new n.OPToken({ parent: this, ...e });
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
                  a = this.tokens[t],
                  i = this.tokens[t.toLowerCase()];
                (a && (a.balance = e.balance), i && (i.balance = e.balance));
              }),
              e
            );
          }
          async getTokenList() {
            let e;
            this.bannedTokens = await this.getBannedTokenList();
            try {
              e = await h.default.get(H);
            } catch (t) {
              d.default.error({ instance: this, error: t });
            }
            return e || o.default;
          }
          async getBannedTokenList() {
            let e;
            try {
              e = await h.default.get($);
            } catch (t) {
              d.default.error({ instance: this, error: t });
            }
            return e || c.default;
          }
          getTokenObject(e, t) {
            return (
              void 0 === t && (t = "user"),
              "user" === t
                ? this.getTokenFromUserList(e, t)
                : this.getTokenFromCommonList(e, t)
            );
          }
          getTokenFromUserList(e, t) {
            return { ...e, source: t, visibility: !0 };
          }
          getTokenFromCommonList(e, t) {
            return {
              name: e.name,
              ticker: e.ticker,
              decimal: Number(e.decimal) || 0,
              contract: e.contract.toLowerCase(),
              parentTicker: B,
              uniqueField: e.contract.toLowerCase(),
              source: t,
              visibility: !1 !== e.visibility,
              confirmed: e.confirmed,
              notify: Boolean(e.notify),
            };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            E(Z, this, e);
          }
          getGasRange(e) {
            return (void 0 === e && (e = "send"), this.feeData[e]);
          }
          get isL2() {
            return !0;
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, G(Z, this));
          }
          signWithCustomSigner(t) {
            let { data: a, signer: i } = t;
            return i({ ...a, privateKey: e.from(G(Z, this).slice(2), "hex") });
          }
        }
        t.default = OPCoin;
      }).call(this, a(2).Buffer);
    },
    8386: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Optimism","ticker":"OP","contract":"0x4200000000000000000000000000000000000042","decimal":"18","visibility":true}]',
      );
    },
    8387: function (e) {
      e.exports = JSON.parse("[]");
    },
  },
]);
