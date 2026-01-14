(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [273, 32],
  {
    2666: function (e, t, a) {
      "use strict";
      (function (e) {
        var i = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var r = i(a(69)),
          n = i(a(11)),
          s = i(a(230)),
          c = i(a(404)),
          o = i(a(871)),
          d = i(a(4106)),
          l = i(a(7151)),
          f = i(a(28)),
          u = N(a(8)),
          b = a(3269),
          m = a(19),
          h = a(27),
          y = a(7152),
          g = i(a(73)),
          k = i(a(794)),
          T = i(a(4107)),
          v = i(a(815)),
          w = i(a(3210)),
          p = i(a(3279)),
          x = a(45),
          C = i(a(158)),
          A = i(a(382)),
          E = i(a(386));
        function N(e, t) {
          if ("function" == typeof WeakMap)
            var a = new WeakMap(),
              i = new WeakMap();
          return (N = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var r,
              n,
              s = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return s;
            if ((r = t ? i : a)) {
              if (r.has(e)) return r.get(e);
              r.set(e, s);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((n =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (n.get || n.set)
                  ? r(s, a, n)
                  : (s[a] = e[a]));
            return s;
          })(e, t);
        }
        function B(e, t, a) {
          (P(e, t), t.set(e, a));
        }
        function P(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function D(e, t) {
          return e.get(L(e, t));
        }
        function S(e, t, a) {
          return (e.set(L(e, t), a), a);
        }
        function L(e, t, a) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : a;
          throw new TypeError("Private element is not present on this object");
        }
        const R = "Ethereum",
          F = "ETH",
          O = "m/44'/0'/0'/0/0",
          U = 18,
          _ = "0",
          I = 1,
          M = "eth-gas-price",
          G = 1e4,
          H = 1e9,
          K = "0xbdd5468D969e585E38B5a0EEADDb56D5B76814ff",
          j = "150000",
          X = "pending",
          $ = "0x0",
          V = "0xF07A4a4d2fDE367A55FaC93761ecc8181148b826",
          q = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
        var W = new WeakMap();
        class ETHCoin extends (0, y.StakingMixin)(
          (0, E.default)(
            (0, b.NftMixin)((0, C.default)((0, A.default)(s.default))),
          ),
        ) {
          constructor(e) {
            var t, i;
            (super({
              ...e,
              name: null !== (t = e.name) && void 0 !== t ? t : R,
              ticker: null !== (i = e.ticker) && void 0 !== i ? i : F,
              decimal: U,
              unspendableBalance: _,
              dependencies: {
                web3: new k.default(() =>
                  Promise.resolve().then(a.t.bind(null, 2654, 7)),
                ),
                hdkey: new k.default(() =>
                  a.e(16).then(a.t.bind(null, 2655, 7)),
                ),
              },
            }),
              B(this, W, void 0),
              (0, r.default)(this, "web3BaseUrl", void 0),
              (0, r.default)(this, "coreLibrary", null),
              (this.derivation = O),
              this.setExplorersModules([
                v.default,
                p.default,
                w.default,
                T.default,
              ]),
              this.loadExplorers(e));
            const { feeData: n, explorers: s, txWebUrl: c } = e;
            (this.setFeeData(n),
              (this.gasPriceConfig = null),
              (this.bannedTokens = []));
            const o = s.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3 = new v.default({
              wallet: this.instance,
              config: { ...o, webUrl: c },
            })),
              (this.web3BaseUrl = o.baseUrl),
              (this.tokens = {}),
              (this.fields.paymentId = !1),
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
              (this.stakingGasLimit = e.stakingGasLimit || j),
              (this.nftGasLimitCoefficient = e.nftGasLimitCoefficient),
              (this.nftGasPriceCoefficient = e.nftGasPriceCoefficient),
              (this.gasLimitCoefficient = e.gasLimitCoefficient),
              (this.gasPriceCoefficient = e.gasPriceCoefficient),
              (this.defaultGasPrice = new this.BN(e.defaultGasPrice * H)),
              (this.defaultMaxGasPrice = e.defaultMaxGasPrice),
              (this.resendTimeout = e.resendTimeout));
          }
          isFeeDynamic() {
            return !0;
          }
          getTokenTransactions(e) {
            let { contract: t } = e;
            if (!t)
              throw new Error(
                this.ticker + ": `contract` parameter should be defined",
              );
            return this.getProvider("tokenHistory").getTokenTransactions({
              address: this.address,
              contract: t,
            });
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(F + ": getTransactions: address is not loaded");
            const {
                transactions: e = [],
                tokenTransactions: t = [],
                failed: a = [],
              } = await this.getProvider("history").getTransactions({
                address: this.address,
              }),
              i = await Promise.all(
                a.map((e) => {
                  let { txid: t } = e;
                  return this.getProvider("history").getTransaction(
                    this.address,
                    t,
                    this.tokens,
                  );
                }),
              );
            return e.concat(t).concat(i);
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
          getFeeSettings() {
            return u.default.get(M);
          }
          async loadWallet(e) {
            const [t, { hdkey: a }] = await Promise.all([
              this.getCoreLibrary(),
              this.loadLib("hdkey"),
            ]);
            return new Promise(async (i, r) => {
              const n = a.fromMasterSeed(e),
                s = n.getWallet(),
                c = await t.eth.accounts.privateKeyToAccount(
                  s.getPrivateKeyString(),
                );
              c
                ? (S(W, this, c.privateKey),
                  (this.address = c.address),
                  this.getNonce(),
                  i({
                    id: this.id,
                    privateKey: D(W, this),
                    address: this.address,
                  }))
                : r(new Error(F + " cant get a wallet!"));
            });
          }
          async getAddress() {
            try {
              const e = await this.getCoreLibrary();
              S(
                W,
                this,
                e.eth.accounts.privateKeyToAccount(D(W, this)).address,
              );
            } catch (e) {
              f.default.error({ instance: this, error: e });
            }
            return D(W, this);
          }
          async validateAddress(e) {
            const t = await this.getCoreLibrary();
            return t.utils.isAddress(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              amount: a,
              paymentData: i = null,
              nonce: r,
              userGasPrice: n,
              gasLimit: s = this.gasLimit,
              multiplier: c = this.gasPriceCoefficient,
            } = e;
            const o = await this.getCoreLibrary();
            let d;
            if ((await this.getNonce(), !n)) {
              const e = await this.getGasPrice();
              d = Number(e.toString()) * c;
            }
            const l = {
              to: t,
              value: a,
              gas: s,
              chainId: I,
              gasPrice: new this.BN(n || d),
              nonce: r || this.nonce,
            };
            "" !== i && null !== i && (l.data = i);
            const f = await o.eth.accounts.signTransaction(l, D(W, this));
            return f.rawTransaction;
          }
          async createTokenTransaction(e) {
            let {
                address: t,
                amount: a,
                custom: i,
                userGasPrice: r,
                gasLimit: n,
                contract: s,
                multiplier: c,
                nonce: o,
              } = e,
              d = a;
            if (s.toLowerCase() === q.toLowerCase()) {
              const e = await this.getCoreLibrary(),
                t = new e.eth.Contract(x.ERC20_ABI, q),
                i = await t.methods.balanceOf(this.address).call(),
                r = new this.BN(i),
                n = new this.BN(a),
                s = new this.BN(5);
              if (r.sub(n).lt(s)) {
                const e = r.sub(s);
                d = e.toString();
              }
            }
            const l = this.getProvider("send").createSendTokenContract(
              s,
              this.address,
              t,
              d,
              o,
            );
            return this.createTransaction({
              address: s,
              amount: "0x0",
              paymentData: l,
              userGasPrice: r,
              gasLimit: n || (await this.estimateGas(d, t)),
              multiplier: c,
              nonce: o,
            });
          }
          async sendTransaction(e) {
            const t = await this.getProvider("send").sendTransaction(e);
            return (t && (this.nonce = this.nonce.add(new this.BN(1))), t);
          }
          async getMaxFeePerGas(e) {
            const { standard: t } = await this.getModerateGasPrice();
            if (!t)
              throw new m.ExternalError({
                type: h.EXTERNAL_ERROR,
                error: "Failed to get getMaxFeePerGas",
                instance: this,
              });
            return t.mul(new n.default(e)).toString();
          }
          async estimateGasForSendNft(e, t, a, i, r) {
            void 0 === r && (r = 1);
            try {
              const n = await this.getProvider("nft-send").estimateGas(
                e,
                t,
                a,
                i,
              );
              return Math.ceil(n * r).toString();
            } catch (n) {
              throw (
                console.warn(n),
                new m.ExternalError({
                  type: h.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          async getNftTransferGasParams(e, t, a) {
            let { userGasPrice: i, userGasLimit: r } = a;
            const {
                address: s,
                nftGasPriceCoefficient: c,
                nftGasLimitCoefficient: o,
                gasPriceCoefficient: d,
                gasLimitCoefficient: l,
                defaultGasPrice: f,
                gasLimit: u = j,
              } = this,
              b = c || d,
              m = o || l,
              h = [
                new n.default(f).mul(new n.default(b)).toString(),
                Math.ceil(Number(u) * m).toString(),
              ],
              y = (await this.getNonce()).toNumber(),
              [g, k] = await Promise.allSettled([
                i || this.getMaxFeePerGas(b),
                r || this.estimateGasForSendNft(s, e, y, t, m),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : h[t])),
              );
            return { gasLimit: k, gasPrice: g, nonce: y };
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: a,
              tokenStandard: i,
              toAddress: r,
              userOptions: s = {},
            } = e;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  r,
                  t,
                  a,
                  i,
                ),
                { gasLimit: c, gasPrice: o } =
                  await this.getNftTransferGasParams(r, e, s);
              return new n.default(o).mul(new n.default(c));
            } catch (c) {
              throw new m.ExternalError({
                type: h.EXTERNAL_ERROR,
                error: c,
                instance: this,
              });
            }
          }
          async createNftTransaction(e) {
            let {
              toAddress: t,
              contractAddress: a,
              data: i,
              userOptions: r = {},
            } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: n,
                  nonce: s,
                } = await this.getNftTransferGasParams(t, i, r),
                c = {
                  to: a,
                  value: $,
                  gas: e,
                  data: i,
                  nonce: s,
                  maxFeePerGas: n,
                },
                o = await this.getCoreLibrary(),
                { rawTransaction: d } = await o.eth.accounts.signTransaction(
                  c,
                  D(W, this),
                );
              return d;
            } catch (n) {
              throw (
                console.warn(n),
                new m.ExternalError({
                  type: h.EXTERNAL_ERROR,
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
                await e.eth.getTransactionCount(this.address, X),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let { userGasPrice: t = null, gasLimit: a = null } =
              void 0 === e ? {} : e;
            const i = t || (await this.getGasPrice());
            return new n.default(String(i)).mul(
              new this.BN(a || this.gasLimit),
            );
          }
          async getGasPrice(e) {
            void 0 === e && (e = !1);
            const t = await this.getModerateGasPrice(),
              { fastest: a = null, standard: i = null } =
                null !== t && void 0 !== t && t.fastest
                  ? t
                  : await this.getProvider("node").getGasPrice();
            if (e) return i || this.defaultGasPrice;
            if (!a) return this.defaultGasPrice;
            const r = new this.BN(this.gasPriceCoefficient),
              n = new this.BN(Number(a) / H),
              s = n.add(r);
            return new this.BN(Number(s) * H);
          }
          async getModerateGasPrice() {
            let e;
            try {
              e = await u.default.get(M, !1, { timeout: G });
            } catch (t) {
              console.warn(t);
            }
            return e && e.fastest && e.safeLow
              ? {
                  fastest: new this.BN((e.fastest / 10) * H),
                  standard: new this.BN((e.safeLow / 10) * H),
                }
              : {};
          }
          async estimateGas(e, t, a, i) {
            void 0 === i && (i = j);
            const r = this.getProvider("send").createSendTokenContract(
                a,
                this.address,
                K,
                e,
              ),
              n = await this.getCoreLibrary(),
              s = await n.eth
                .estimateGas({
                  from: this.address,
                  nonce: Number(this.nonce.add(new this.BN(1))),
                  to: a,
                  data: r,
                })
                .catch((e) => f.default.error({ instance: this, error: e }));
            return s ? Math.round(s * this.gasLimitCoefficient).toString() : i;
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
            return (
              await this.getStakingInfo(),
              {
                balance: null === t || void 0 === t ? void 0 : t.balance,
                balances: this.balances,
              }
            );
          }
          getTokenInfo(e) {
            let { contract: t } = e;
            return this.web3.getTokenBalanceByContractAddress({
              address: this.address,
              contractAddress: t,
            });
          }
          async getStakingInfo() {
            const e = await this.getPredefinedValidators(),
              t = Object.values(this.tokens).filter((t) => {
                let { contract: a } = t;
                return e.some((e) => {
                  let { address: t } = e;
                  return t.toLowerCase() === a.toLowerCase();
                });
              });
            await this.getProvider("stake").getTokensInfo(t, this.address);
            const a = t.reduce(
              (e, t) => {
                let {
                  contract: a,
                  balance: i = "0",
                  ticker: r,
                  id: n,
                  decimal: s,
                } = t;
                return (
                  (e.staked = new g.default(
                    e.staked.toBN().add(new this.BN(i)),
                    this,
                  )),
                  (e.validators[a] = {
                    address: a,
                    staked: new g.default(i, { ticker: r, id: n, decimal: s }),
                  }),
                  e
                );
              },
              { staked: new g.default("0", this), validators: {} },
            );
            return (
              this.setBalances(await this.makeStakingInfoStruct(a)),
              this.balances
            );
          }
          calculateTotal(e) {
            var t;
            let { staked: a } = e;
            const i = new this.BN(
              null !== (t = this.balance) && void 0 !== t ? t : 0,
            ).add(a.toBN());
            return new g.default(i, this);
          }
          async calculateAvailableForStake() {
            const e = await this.getFee({ gasLimit: this.stakingGasLimit }),
              t = await this.getFee(),
              a = e.add(t),
              i = await this.availableBalance(a);
            return new g.default(this.toMinimalUnit(i), this);
          }
          getUserValidators() {
            return this.getPredefinedValidators();
          }
          async createDelegationTransaction(e) {
            let { address: t, amount: a, gasLimit: i } = e;
            const r = this.createSmartContractCall({
                smartContractAddress: t,
                action: "stake",
                args: [V],
              }),
              n = await this.createTransaction({
                address: t,
                amount: a,
                paymentData: r,
                gasLimit:
                  this.stakingGasLimit || (await this.estimateGas(a, t)),
              });
            return n;
          }
          createToken(e) {
            return e.isStakable
              ? new o.default({ parent: this, ...e })
              : new c.default({ parent: this, ...e });
          }
          async getUserTokenList() {
            const e =
              (await this.getProvider("token")
                .getUserTokenList(this.address)
                .catch((e) => console.warn(e))) || [];
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
              e = await u.default.get(u.ConfigKey.EthereumTokens);
            } catch (t) {
              f.default.error({ instance: this, error: t });
            }
            return e || d.default;
          }
          async getBannedTokenList() {
            let e;
            try {
              e = await u.default.get("ethereum-tokens-banned");
            } catch (t) {
              f.default.error({ instance: this, error: t });
            }
            return e || l.default;
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
            return {
              name: e.name,
              ticker: e.symbol,
              decimal: Number(e.decimals) || 0,
              contract: e.contractAddress.toLowerCase(),
              parentTicker: F,
              uniqueField: e.contractAddress.toLowerCase(),
              isCustom: !1,
              visibility: !0,
              confirmed: e.confirmed,
              isStakable: e.isStakable,
              config: e.config,
              notify: e.notify,
              source: t,
            };
          }
          getTokenFromCommonList(e, t) {
            var a;
            return {
              name: e.name,
              ticker: e.ticker,
              decimal: Number(e.decimal) || 0,
              contract: e.contract.toLowerCase(),
              parentTicker: F,
              uniqueField: e.contract.toLowerCase(),
              isCustom: null !== (a = e.isCustom) && void 0 !== a && a,
              visibility: !1 !== e.visibility,
              confirmed: e.confirmed,
              isStakable: e.isStakable,
              config: e.config,
              notify: Boolean(e.notify),
              source: t,
            };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            S(W, this, e);
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
            const a = 10,
              i = await this.getEstimatedTimeCfg(),
              r = ["fastest", "fast", "average"].find(
                (t) => (null === i || void 0 === i ? void 0 : i[t]) <= e * a,
              );
            if (t) {
              const e = {
                fastest: "<30 sec",
                fast: "<2 min",
                average: "<5 min",
              };
              return e[r] || "<30 min";
            }
            return r;
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, D(W, this));
          }
          signWithCustomSigner(t) {
            let { data: a, signer: i } = t;
            return i({ ...a, privateKey: e.from(D(W, this).slice(2), "hex") });
          }
        }
        t.default = ETHCoin;
      }).call(this, a(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2853: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var r = i(a(2886)),
        n = i(a(2887)),
        s = i(a(2888));
    },
    2858: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(a(8)),
        n = i(a(129)),
        s = i(a(81)),
        c = i(a(28)),
        o = i(a(80)),
        d = a(4),
        l = a(27),
        f = a(67);
      const u = 2;
      class BlockbookV2Explorer extends n.default {
        constructor() {
          (super(...arguments), (this.version = u), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: a, scriptPubKey: i } = e;
          const r = await this.getTransaction(t, a),
            n = await this.getUnspentOutputs(t, i),
            c = this.calculateBalance(n).toString();
          (await s.default.filterAndUpdateTransactions([r]),
            this.eventEmitter.emit(
              `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
              { unconfirmedTx: r, unconfirmedBalance: c },
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
            a = new this.wallet.BN(e.balance),
            i = a.add(t).toString(),
            r = {};
          return (
            e.tokens &&
              e.tokens.forEach((e) => {
                r[e.symbol] = e.balance;
              }),
            {
              balance: i,
              tokenBalances: r,
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
        getTransactionsParams(e, t, a, i) {
          (void 0 === t && (t = 0), void 0 === a && (a = this.defaultTxLimit));
          const r = this.getInfoParams();
          return { ...r, page: i, pageSize: a, details: "txs", filter: "All" };
        }
        async getTokenTransactions(e) {
          let { address: t, offset: a, limit: i, pageNum: r, contract: n } = e;
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
              this.getTransactionsUrl(t, a || 0, i || this.defaultTxLimit, r),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                a || 0,
                i || this.defaultTxLimit,
                r,
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
        getTokenTransactionsParams(e, t, a, i, r) {
          const n = this.getTransactionsParams(e, t, a, i);
          return { ...n, contract: r };
        }
        modifyTransactionResponse(e, t) {
          if (e.tokenTransfers && 0 === Number(e.value)) {
            const a = {};
            e.tokenTransfers.forEach((i) => {
              i.symbol &&
                (a[i.token] || (a[i.token] = []),
                a[i.token].push(
                  this.getTransactionFromTokenTransfer({
                    transfer: i,
                    selfAddress: t,
                    tx: e,
                  }),
                ));
            });
            for (const e in a) {
              const i = a[e];
              if (0 !== i.length)
                for (const e of i) {
                  const { otherSideAddress: a } = e;
                  if (
                    [a.toLowerCase(), t.toLowerCase()].includes(t.toLowerCase())
                  )
                    return e;
                }
            }
          }
          return super.modifyTransactionResponse(e, t);
        }
        modifyTransactionsResponse(e, t) {
          const a = e && !!e.transactions,
            i = a
              ? e.transactions.filter(
                  (e) =>
                    e.tokenTransfers &&
                    Array.isArray(e.tokenTransfers) &&
                    0 === Number(e.value),
                )
              : [],
            r = a
              ? e.transactions.filter(
                  (e) =>
                    (!e.tokenTransfers || 0 !== Number(e.value)) &&
                    !(e.ethereumSpecific && 0 === e.ethereumSpecific.status),
                )
              : [],
            n = a
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            s = super.modifyTransactionsResponse(r, t);
          return i.length > 0
            ? {
                transactions: s,
                failed: n,
                tokenTransactions: this.modifyTokenTransactionsResponse(i, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: s, failed: n }
              : s;
        }
        modifyTokenTransactionsResponse(e, t) {
          var a;
          return null !==
            (a =
              null === e || void 0 === e
                ? void 0
                : e
                    .map((e) => {
                      var a;
                      return null === (a = e.tokenTransfers) || void 0 === a
                        ? void 0
                        : a
                            .filter((e) =>
                              this.filterTokenTransferTransactions(t, e),
                            )
                            .map((a) =>
                              this.getTransactionFromTokenTransfer({
                                transfer: a,
                                selfAddress: t,
                                tx: e,
                              }),
                            );
                    })
                    .flat()) && void 0 !== a
            ? a
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
          var t, a;
          let { transfer: i, selfAddress: r, tx: n } = e;
          const s =
            (null === (t = this.wallet.tokens()[i.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            i.decimals ||
            this.wallet.decimal;
          return new o.default({
            ticker: i.symbol.toUpperCase(),
            txid: this.getTxHash(n),
            walletid: (0, d.getTokenId)({
              ticker: i.symbol,
              contract: null !== (a = i.token) && void 0 !== a ? a : i.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(n),
            feeTicker: this.wallet.parent,
            direction: i.to.toLowerCase() === r.toLowerCase(),
            otherSideAddress:
              i.to.toLowerCase() === r.toLowerCase()
                ? i.from.toLowerCase()
                : i.to.toLowerCase(),
            amount: i.value ? (0, f.toCurrency)(i.value, s) : "0",
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
        modifyUnspentOutputsResponse(e, t, a) {
          if (!a) throw this.createError("No scriptPubKey");
          return t.map((t) => {
            let { txid: i, vout: r, value: n, height: s } = t;
            return {
              txid: i,
              txId: i,
              vout: r,
              script: a,
              value: n,
              address: e,
              outputIndex: r,
              satoshis: Number(n),
              height: s,
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
          let a = new this.wallet.BN(0),
            i = new this.wallet.BN(0);
          if (!t.vin || !t.vout) return "0";
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout.forEach((e) => {
                Array.isArray(e.addresses) &&
                  e.addresses.length > 0 &&
                  (i = i.add(new this.wallet.BN(e.value)));
              }),
              this.wallet.toCurrencyUnit(i)
            );
          const r = new this.wallet.BN(t.fees);
          let n = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((n = n.concat(t.addresses)),
              t.addresses.includes(e) &&
                (a = a.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((n = n.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (i = i.add(new this.wallet.BN(t.value))));
            }));
          const s = n.every((t) => t === e),
            c = this.wallet.decimal;
          if (s) {
            if ("KMD" === this.wallet.ticker) {
              const e = i.sub(a);
              if (e.gten(0)) return (0, f.toCurrency)(e, c);
            }
            return (0, f.toCurrency)(t.fees, c);
          }
          const o = this.getTxDirection(e, t),
            d = o ? i : a.sub(i).sub(r);
          return (0, f.toCurrency)(d, c);
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
          const a =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: a } = t;
                  return a.some((t) => t === e);
                }),
            i =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: a } = t;
                  return a.some((t) => t === e);
                }),
            r =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: a } = t;
                  return a.some((t) => t !== e);
                });
          return !(!i || a) || !(!a || !i || r || "KMD" !== this.wallet.ticker);
        }
        getTxOtherSideAddress(e, t) {
          if (!e) throw new Error("selfAddress is not defined");
          const a = this.getTxDirection(e, t);
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return a
              ? t.vin[0].addresses[0]
              : (t.vout[0].addresses && t.vout[0].addresses[0]) || e;
          if (!t.vin) return "...";
          let i = [],
            r = [];
          if (
            (t.vout.forEach((e) => {
              i = i.concat(e.addresses);
            }),
            t.vin.forEach((e) => {
              r = r.concat(e.addresses);
            }),
            a)
          ) {
            const a =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: a } = t;
                  return a.some((t) => t !== e);
                });
            return a ? r.find((t) => t !== e) : "Claim";
          }
          const n = i.reduce((t, a) => (a === e ? t + 1 : t), 0);
          if (n === i.length) return e;
          const s = i.find((t) => t !== e);
          return s;
        }
        calculateBalance(e) {
          return (
            void 0 === e && (e = []),
            e.reduce((e, t) => {
              let { value: a } = t;
              return new this.wallet.BN(a).add(e);
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
            e = await r.default.get("ethereum-tokens-banned");
          } catch (t) {
            c.default.error({ instance: this, error: t });
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
          let { info: t, tokenTicker: a } = e;
          if ("undefined" === t && "undefined" === t.tokenBalances)
            throw new Error(
              "BlockbookV2Explorer: getTokenBalanceByContractAddress error: info.tokenBalances must be object",
            );
          return t.tokenBalances[a];
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
    2886: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const i = (e) =>
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
      t.default = i;
    },
    2887: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const i = (e) =>
        class extends e {
          getTransactionsModifiedResponse(e, t, a) {
            return (
              void 0 === a && (a = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(e) },
                super.getTransactionsModifiedResponse(e, t, a),
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
              a = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === a[t] ? "transfer" : a[t];
          }
        };
      t.default = i;
    },
    2888: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(a(81));
      const n = ["reward", "unfreeze", "freeze", "vote"],
        s = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: a,
                tokens: i,
                type: s,
                scriptPubKey: c,
              } = e;
              const o = await this.getTransaction(t, a, i);
              (await r.default.filterAndUpdateTransactions([o]),
                "receive" === s &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${o.walletid}::new-socket-tx`,
                    { unconfirmedTx: o },
                  ),
                "confirm" === s &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    o.walletid,
                    o,
                    o.ticker,
                  ),
                n.forEach((e) => {
                  s === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${s}`,
                      o || {},
                    );
                }));
            }
          };
      t.default = s;
    },
    3210: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erc721Abi = t.erc1155Abi = t.default = void 0));
      var r = i(a(2654)),
        n = a(27),
        s = a(19),
        c = a(67),
        o = i(a(129)),
        d = a(813);
      const l = "transactionHash",
        f = "0x0",
        u = (t.erc1155Abi = [
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
        b = (t.erc721Abi = [
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
      class ETHNftExplorer extends o.default {
        constructor(e) {
          let { wallet: t, config: a } = e;
          (super({ wallet: t, config: a }),
            (this.baseUrl = (0, c.getStringWithEnsuredEndChar)(a.baseUrl, "/")),
            (this.web3 = new r.default(a.baseUrl)),
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
        estimateGas(e, t, a, i) {
          void 0 === a && (a = null);
          const r = { from: e, to: t, data: i };
          return (a && (r.nonce = a + 1), this.web3.eth.estimateGas(r));
        }
        sendTransaction(e) {
          return new Promise((t, a) => {
            this.wallet.coreLibrary.eth
              .sendSignedTransaction(e)
              .on(l, (e) => {
                t({ tx: e });
              })
              .catch((e) => a(e));
          });
        }
        async getNftContractData(e, t, a, i, r) {
          if (![d.ERC721_TOKEN_STANDARD, d.ERC1155_TOKEN_STANDARD].includes(r))
            throw new s.InternalError({
              type: n.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: c } = e,
            o = {
              [d.ERC1155_TOKEN_STANDARD]: (e, t, a, i) => {
                const r = new this.web3.eth.Contract(u, a);
                return r.methods.safeTransferFrom(e, t, i, 1, f).encodeABI();
              },
              [d.ERC721_TOKEN_STANDARD]: (e, t, a, i) => {
                const r = new this.web3.eth.Contract(b, a);
                return r.methods.safeTransferFrom(e, t, i).encodeABI();
              },
            };
          return o[r](c, t, a, i);
        }
        async sendNft(e, t, a, i, r, c) {
          try {
            const n = await this.getNftContractData(e, t, a, i, r),
              s = await e.createNftTransaction({
                toAddress: t,
                contractAddress: a,
                data: n,
                userOptions: c,
              });
            return await this.sendTransaction(s);
          } catch (o) {
            throw (
              console.warn(o),
              new s.ExternalError({
                type: n.EXTERNAL_ERROR,
                error: o,
                instance: this,
              })
            );
          }
        }
      }
      t.default = ETHNftExplorer;
    },
    3269: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NftMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }));
      var r = i(a(823));
    },
    3279: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(a(14)),
        n = a(19),
        s = a(27),
        c = i(a(129)),
        o = a(3280),
        d = a(67),
        l = a(160),
        f = a(813),
        u = a(384);
      const b = "https://deep-index.moralis.io/api/v2/",
        m = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        h = [
          [f.erc721StandardTest, f.ERC721_TOKEN_STANDARD],
          [f.erc1155StandardTest, f.ERC1155_TOKEN_STANDARD],
        ],
        y = "get",
        g = 100,
        k = 100,
        T = "NFT";
      class MoralisExplorer extends c.default {
        constructor(e) {
          let { wallet: t, config: a } = e;
          (super({ wallet: t, config: a }), (this.chain = a.chain || "eth"));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        async getInfo(e, t) {
          try {
            const a = await this.request(
              this.getInfoUrl(e),
              this.getInfoMethod(),
              this.getInfoParams(e, this.chain, t),
            );
            return this.modifyInfoResponse(a);
          } catch (a) {
            throw new n.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: a,
              instance: this,
            });
          }
        }
        getInfoUrl(e) {
          return `/${e}/nft`;
        }
        getIsApiKeyRequired(e) {
          return (0, d.getStringWithEnsuredEndChar)(e, "/") === b;
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
        getInfoParams(e, t, a) {
          return { chain: t, format: "decimal", exclude_spam: !a };
        }
        async modifyInfoResponse(e) {
          const { result: t } = e,
            a = [],
            i = t.map((e, t) => {
              const {
                token_address: i,
                token_id: c,
                token_uri: d,
                contract_type: l,
                metadata: f,
              } = e;
              if (!f) {
                const e = (0, o.getTransformedTokenUri)({
                  tokenId: c,
                  tokenUri: d,
                });
                return (
                  a.push(
                    Promise.all([
                      t,
                      r.default.get(e).catch((e) => {
                        throw new Error(JSON.stringify({ index: t, error: e }));
                      }),
                    ]),
                  ),
                  { contractAddress: i, tokenId: c, tokenStandard: l }
                );
              }
              try {
                const { name: e, description: t, image: a } = JSON.parse(f);
                return {
                  contractAddress: i,
                  tokenId: c,
                  tokenStandard: l,
                  name: e,
                  description: t,
                  imageUrl: a,
                };
              } catch (u) {
                throw (
                  console.warn(u),
                  new n.InternalError({
                    type: s.INTERNAL_ERROR,
                    error: u,
                    instance: this,
                  })
                );
              }
            });
          try {
            const e = await Promise.allSettled(a);
            e.forEach((e) => {
              if ("fulfilled" === e.status) {
                const {
                    value: [t, { data: a }],
                  } = e,
                  { name: r, description: n, image: s } = a;
                i[t] = { ...i[t], name: r, description: n, imageUrl: s };
              } else {
                const {
                  reason: { message: a },
                } = e;
                try {
                  const { index: e, message: t } = JSON.parse(a);
                  console.warn(
                    "Failed to get NFT metadata for tokenUri=" + i[e],
                    t,
                  );
                } catch (t) {
                  console.warn(t);
                }
              }
            });
          } catch (c) {
            throw (
              console.warn(c),
              new n.ExternalError({
                type: s.EXTERNAL_ERROR,
                error: c,
                instance: this,
              })
            );
          }
          return i;
        }
        fixTokenStandard(e) {
          for (const [t, a] of h) if (t.test(e)) return a;
          return f.UNRECOGNIZED_TOKEN_STANDARD;
        }
        async fetchNftList(e, t) {
          const { address: a } = e,
            i = await this.getInfo(a, t);
          return i.map((t) => {
            let {
              contractAddress: a,
              tokenId: i,
              tokenStandard: r,
              name: n,
              description: s,
              imageUrl: c,
            } = t;
            return new l.ETHNftToken(
              a,
              i,
              e.id,
              this.fixTokenStandard(r),
              n,
              s,
              c,
            );
          });
        }
        async getRawTokenTransactions(e) {
          let {
            address: t,
            limit: a = this.defaultTxLimit,
            cursor: i = null,
          } = e;
          try {
            const e = await this.request(
              this.getTokenTransactionsUrl(t),
              y,
              this.getTokenTransactionsParams(a, i),
              s.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyRawTokenTransactionsResponse(e, t);
          } catch (r) {
            return (console.warn(r), []);
          }
        }
        getTokenTransactionsUrl(e) {
          return `/${e}/erc20/transfers`;
        }
        getTokenTransactionsParams(e, t) {
          const a = e > g ? g : e;
          return { chain: this.chain, limit: a, cursor: t };
        }
        modifyRawTokenTransactionsResponse(e, t) {
          const {
              total: a,
              page: i,
              page_size: r,
              cursor: n,
              result: s,
            } = null !== e && void 0 !== e ? e : { result: [] },
            c = s.reduce((e, a, i) => {
              try {
                const i = this.getTokenTxDirection(t, a);
                return (
                  e.push({
                    contract: a.address,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: a.transaction_hash,
                    direction: i,
                    otherSideAddress: i ? a.from_address : a.to_address,
                    value: a.value,
                    datetime: new Date(a.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    ticker: a.token_symbol,
                    name: a.token_name,
                  }),
                  e
                );
              } catch (r) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(r),
                  e
                );
              }
            }, []);
          return {
            total: a,
            page: i,
            pageSize: r,
            cursor: n,
            rawTokenTransactions: c,
          };
        }
        getTokenTxDirection(e, t) {
          return t.to_address.toLowerCase() === e.toLowerCase();
        }
        async getUserTokenList(e) {
          const t = await this.request(
            this.getUserTokenListUrl(e),
            y,
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
            limit: a = this.defaultTxLimit,
            cursor: i = null,
          } = e;
          try {
            const e = await this.request(
              this.getNftTransactionsUrl(t),
              y,
              this.getNftTransactionsParams(a, i),
              s.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyNftTransactionsResponse(e, t);
          } catch (r) {
            return (console.warn(r), []);
          }
        }
        getNftTransactionsUrl(e) {
          return `/${e}/nft/transfers`;
        }
        getNftTransactionsParams(e, t) {
          const a = e > k ? k : e;
          return {
            chain: this.chain,
            limit: a,
            format: "decimal",
            direction: "both",
            cursor: t,
          };
        }
        modifyNftTransactionsResponse(e, t) {
          const {
              total: a,
              page: i,
              page_size: r,
              cursor: n,
              result: s,
            } = null !== e && void 0 !== e ? e : { result: [] },
            c = s.reduce((e, a, i) => {
              try {
                const i = this.getTokenTxDirection(t, a);
                return (
                  e.push({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    contract: a.token_address,
                    contractType: a.contract_type,
                    tokenId: a.token_id,
                    txid: a.transaction_hash,
                    direction: i,
                    otherSideAddress: i ? a.from_address : a.to_address,
                    datetime: new Date(a.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    txType: u.TxTypes.TRANSFERNFT,
                    isNft: !0,
                    amount: T,
                  }),
                  e
                );
              } catch (r) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(r),
                  e
                );
              }
            }, []);
          return {
            total: a,
            page: i,
            pageSize: r,
            cursor: n,
            nftTransactions: c,
          };
        }
      }
      t.default = MoralisExplorer;
    },
    3280: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getTransformedTokenUri", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }));
      var r = i(a(3281));
    },
    3281: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const i = new Map([
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
        r = (e) => {
          const { tokenUri: t } = e;
          let a = t;
          return (
            i.forEach((t, i) => {
              let [r, n] = t;
              const s = n(e);
              a = i.test(a) ? a.replace(r, s) : a;
            }),
            a
          );
        };
      t.default = r;
    },
    4106: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Atomic Wallet Token","ticker":"AWC","contract":"0xad22f63404f7305e4713ccbd4f296f34770513f4","decimal":"8","visibility":true},{"name":"Tether USD","ticker":"USDT","contract":"0xdac17f958d2ee523a2206206994597c13d831ec7","decimal":"6","visibility":true},{"name":"GeminiDollar","ticker":"GUSD","contract":"0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd","decimal":"2","visibility":true},{"name":"TrueUSD","ticker":"TUSD","contract":"0x0000000000085d4780B73119b644AE5ecd22b376","decimal":"18","visibility":true},{"name":"Pax Dollar","ticker":"USDP","contract":"0x8e870d67f660d95d5be530380d0ec0bd388289e1","decimal":"18","visibility":true},{"name":"USDCoin","ticker":"USDC","contract":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","decimal":"6","visibility":true},{"name":"StableUSD","ticker":"USDS","contract":"0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe","decimal":"6","visibility":true},{"name":"Pundi X-old","ticker":"NPXS","contract":"0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3","decimal":"18","visibility":false},{"name":"Pundi X","ticker":"PUNDIX","contract":"0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38","decimal":"18","visibility":true},{"name":"Crypto.com Chain","ticker":"CRO","contract":"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b","decimal":"8","visibility":true},{"name":"Basic Attention Token","ticker":"BAT","contract":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF","decimal":"18","visibility":true},{"name":"district0x","ticker":"DNT","contract":"0x0AbdAce70D3790235af448C88547603b945604ea","decimal":"18","visibility":true},{"name":"0x","ticker":"ZRX","contract":"0xE41d2489571d322189246DaFA5ebDe1F4699F498","decimal":"18","visibility":true},{"name":"Salt","ticker":"SALT","contract":"0x4156D3342D5c385a87D264F90653733592000581","decimal":"8","visibility":true},{"name":"DigixDAO","ticker":"DGD","contract":"0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A","decimal":"9","visibility":true},{"name":"iExecRLC","ticker":"RLC","contract":"0x607F4C5BB672230e8672085532f7e901544a7375","decimal":"9","visibility":true},{"name":"Gnosis","ticker":"GNO","contract":"0x6810e776880C02933D47DB1b9fc05908e5386b96","decimal":"18","visibility":true},{"name":"Lunyr","ticker":"LUN","contract":"0xfa05A73FfE78ef8f1a739473e462c54bae6567D9","decimal":"18","visibility":true},{"name":"Augur 0ld","ticker":"REP","contract":"0x1985365e9f78359a9B6AD760e32412f4a445E862","decimal":"18","visibility":false},{"name":"Augur","ticker":"REP","contract":"0x221657776846890989a759ba2973e427dff5c9bb","decimal":"18","visibility":true},{"name":"Aragon","ticker":"ANT","contract":"0xa117000000f279D81A1D3cc75430fAA017FA5A2e","decimal":"18","visibility":true},{"name":"Bancor","ticker":"BNT","contract":"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C","decimal":"18","visibility":true},{"name":"Civic","ticker":"CVC","contract":"0x41e5560054824eA6B0732E656E3Ad64E20e94E45","decimal":"8","visibility":true},{"name":"TenXPay","ticker":"PAY","contract":"0xB97048628DB6B661D4C2aA833e95Dbe1A905B280","decimal":"18","visibility":true},{"name":"OmiseGO","ticker":"OMG","contract":"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07","decimal":"18","visibility":true},{"name":"Monaco","ticker":"MCO","contract":"0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d","decimal":"8","visibility":true},{"name":"SwarmCity","ticker":"SWT","contract":"0xB9e7F8568e08d5659f5D29C4997173d84CdF2607","decimal":"18","visibility":false},{"name":"Patientory","ticker":"PTOY","contract":"0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06","decimal":"8","visibility":false},{"name":"STORJ","ticker":"STORJ","contract":"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC","decimal":"8","visibility":true},{"name":"FunFair","ticker":"FUN","contract":"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b","decimal":"8","visibility":true},{"name":"Humaniq","ticker":"HMQ","contract":"0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908","decimal":"8","visibility":false},{"name":"Numeraire","ticker":"NMR","contract":"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671","decimal":"18","visibility":true},{"name":"Golem","ticker":"GLM","contract":"0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429","decimal":"18","visibility":true},{"name":"Melon","ticker":"MLN","contract":"0xec67005c4e498ec7f55e092bd1d35cbc47c91892","decimal":"18","visibility":false},{"name":"Viberate","ticker":"VIB","contract":"0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724","decimal":"18","visibility":false},{"name":"RipioCreditNetwork","ticker":"RCN","contract":"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6","decimal":"18","visibility":true},{"name":"PowerLedger","ticker":"POWR","contract":"0x595832f8fc6bf59c85c527fec3740a1b7a361269","decimal":"6","visibility":true},{"name":"Populous","ticker":"PPT","contract":"0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a","decimal":"8","visibility":true},{"name":"Bread","ticker":"BRD","contract":"0x558ec3152e2eb2174905cd19aea4e34a23de9ad6","decimal":"18","visibility":false},{"name":"Dentacoin","ticker":"DCN","contract":"0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6","decimal":"0","visibility":true},{"name":"SONM","ticker":"SNM","contract":"0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63","decimal":"18","visibility":true},{"name":"Aeron","ticker":"ARN","contract":"0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6","decimal":"8","visibility":true},{"name":"Polymath","ticker":"POLY","contract":"0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec","decimal":"18","visibility":true},{"name":"NEXO","ticker":"NEXO","contract":"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206","decimal":"18","visibility":true},{"name":"EnjinCoin","ticker":"ENJ","contract":"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c","decimal":"18","visibility":true},{"name":"KyberNetwork Legacy","ticker":"KNCL","contract":"0xdd974D5C2e2928deA5F71b9825b8b646686BD200","decimal":"18","visibility":false},{"name":"KyberNetwork v2","ticker":"KNC","contract":"0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202","decimal":"18","visibility":true},{"name":"DENT","ticker":"DENT","contract":"0x3597bfD533a99c9aa083587B074434E61Eb0A258","decimal":"8","visibility":true},{"name":"SAI","ticker":"SAI","contract":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","decimal":"18","visibility":true},{"name":"ChainLinkToken","ticker":"LINK","contract":"0x514910771af9ca656af840dff83e8264ecf986ca","decimal":"18","visibility":true},{"name":"Maker","ticker":"MKR","contract":"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","decimal":"18","visibility":true},{"name":"Decentraland","ticker":"MANA","contract":"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942","decimal":"18","visibility":true},{"name":"Kin ERC20","ticker":"KIN","contract":"0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5","decimal":"18","visibility":false},{"name":"Holo","ticker":"HOT","contract":"0x6c6ee5e31d828de241282b9606c8e98ea48526e2","decimal":"18","visibility":true},{"name":"Digitex Futures","ticker":"DGTX","contract":"0x1c83501478f1320977047008496dacbd60bb15ef","decimal":"18","visibility":true},{"name":"Sentinel","ticker":"SENT","contract":"0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037","decimal":"8","visibility":false},{"name":"UNUS SED LEO","ticker":"LEO","contract":"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3","decimal":"18","visibility":true},{"name":"Credits","ticker":"CS","contract":"0x46b9ad944d1059450da1163511069c718f699d31","decimal":"6","visibility":true},{"name":"IQeon","ticker":"IQN","contract":"0x0db8d8b76bc361bacbb72e2c491e06085a97ab31","decimal":"18","visibility":false},{"name":"Matic ETH","ticker":"MATIC","contract":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0","decimal":"18","visibility":true},{"name":"Hydro","ticker":"HYDRO","contract":"0xebbdf302c940c6bfd49c6b165f457fdb324649bc","decimal":"18","visibility":true},{"name":"Metal","ticker":"MTL","contract":"0xF433089366899D83a9f26A773D59ec7eCF30355e","decimal":"8","visibility":true},{"name":"Constellation","ticker":"DAG","contract":"0xa8258abc8f2811dd48eccd209db68f25e3e34667","decimal":"8","visibility":false},{"name":"DAI","ticker":"DAI","contract":"0x6B175474E89094C44Da98b954EedeAC495271d0F","decimal":"18","visibility":true},{"name":"AmaCoin","ticker":"AMA","contract":"0x1dd0df760eb950083c1925da19fc7ac1356a190b","decimal":"18","visibility":true},{"name":"Celer","ticker":"CELR","contract":"0x4f9254c83eb525f9fcf346490bbb3ed28a81c667","decimal":"18","visibility":false},{"name":"Jobchain","ticker":"JOB","contract":"0xdfbc9050F5B01DF53512DCC39B4f2B2BBaCD517A","decimal":"8","visibility":false},{"name":"Origin Protocol","ticker":"OGN","contract":"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26","decimal":"18","visibility":true},{"name":"HEX","ticker":"HEX","contract":"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39","decimal":"8","visibility":true},{"name":"Binance USD","ticker":"BUSD","contract":"0x4Fabb145d64652a948d72533023f6E7A623C7C53","decimal":"18","visibility":true},{"name":"CryptoSoul","ticker":"SOUL","contract":"0xbb1f24c0c1554b9990222f036b0aad6ee4caec29","decimal":"18","visibility":false},{"name":"Reserve","ticker":"RSV","contract":"0x196f4727526eA7FB1e17b2071B3d8eAA38486988","decimal":"18","visibility":true},{"name":"Cartesi","ticker":"CTSI","contract":"0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d","decimal":"18","visibility":false},{"name":"Reserve Rights","ticker":"RSR","contract":"0x320623b8e4ff03373931769a31fc52a4e78b5d70","decimal":"18","visibility":true},{"name":"COTI","ticker":"COTI","contract":"0xddb3422497e61e13543bea06989c0789117555c5","decimal":"18","visibility":true},{"name":"Band Protocol","ticker":"BAND","contract":"0xba11d00c5f74255f56a5e366f4f77f5a186d7f55","decimal":"18","visibility":false},{"name":"Compound","ticker":"COMP","contract":"0xc00e94cb662c3520282e6f5717214004a7f26888","decimal":"18","visibility":true},{"name":"Aave","ticker":"LEND","contract":"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03","decimal":"18","visibility":true},{"name":"Ren","ticker":"REN","contract":"0x408e41876cccdc0f92210600ef50372656052a38","decimal":"18","visibility":true},{"name":"Synthetix Network","ticker":"SNX","contract":"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f","decimal":"18","visibility":true},{"name":"FTX Token","ticker":"FTT","contract":"0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9","decimal":"18","visibility":true},{"name":"ShareToken","ticker":"SHR","contract":"0xd98f75b1a3261dab9eed4956c93f33749027a964","decimal":"2","visibility":false},{"name":"Uniswap","ticker":"UNI","contract":"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","decimal":"18","visibility":true},{"name":"Aave","ticker":"AAVE","contract":"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9","decimal":"18","visibility":true},{"name":"SHIBA INU","ticker":"SHIB","contract":"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce","decimal":"18","visibility":true},{"name":"Aelf","ticker":"ELF","contract":"0xbf2179859fc6d5bee9bf9158632dc51678a4100e","decimal":"18","visibility":true},{"name":"Axie Infinity","ticker":"AXS","contract":"0xbb0e17ef65f82ab018d8edd776e8dd940327b28b","decimal":"18","visibility":true},{"name":"SushiSwap","ticker":"SUSHI","contract":"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2","decimal":"18","visibility":true},{"name":"Chiliz","ticker":"CHZ","contract":"0x3506424f91fd33084466f402d5d97f05f8e3b4af","decimal":"18","visibility":true},{"name":"Chromia","ticker":"CHR","contract":"0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2","decimal":"6","visibility":true},{"name":"Graph","ticker":"GRT","contract":"0xc944e90c64b2c07662a292be6244bdf05cda44a7","decimal":"18","visibility":true},{"name":"Quant","ticker":"QNT","contract":"0x4a220e6096b25eadb88358cb44068a3248254675","decimal":"18","visibility":true},{"name":"StatusNetwork","ticker":"SNT","contract":"0x744d70fdbe2ba4cf95131626614a1763df805b9e","decimal":"18","visibility":true},{"name":"1inch","ticker":"1INCH","contract":"0x111111111117dc0aa78b770fa6a738034120c302","decimal":"18","visibility":true},{"name":"The Sandbox","ticker":"SAND","contract":"0x3845badAde8e6dFF049820680d1F14bD3903a5d0","decimal":"18","visibility":true},{"name":"Fantom","ticker":"FTM","contract":"0x4e15361fd6b4bb609fa63c81a2be19d873717870","decimal":"18","visibility":true},{"name":"Gala","ticker":"GALA","contract":"0x15d4c048f83bd7e37d49ea4c83a07267ec4203da","decimal":"8","visibility":true},{"name":"Amp","ticker":"AMP","contract":"0xff20817765cb7f73d4bde2e66e067e58d11095c2","decimal":"18","visibility":true},{"name":"ApeCoin","ticker":"APE","contract":"0x4d224452801aced8b2f0aebe155379bb5d594381","decimal":"18","visibility":true},{"name":"Lido DAO","ticker":"LDO","contract":"0x5a98fcbea516cf06857215779fd812ca3bef1b32","decimal":"18","visibility":true},{"name":"Yearn.finance","ticker":"YFI","contract":"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e","decimal":"18","visibility":true},{"name":"Balancer","ticker":"BAL","contract":"0xba100000625a3754423978a60c9317c58a424e3D","decimal":"18","visibility":true},{"name":"Ethereum Name Service","ticker":"ENS","contract":"0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72","decimal":"18","visibility":true},{"name":"APENFT","ticker":"NFT","contract":"0x198d14f2ad9ce69e76ea330b374de4957c3f850a","decimal":"6","visibility":true},{"name":"Loopring","ticker":"LRC","contract":"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd","decimal":"18","visibility":true},{"name":"Verasity","ticker":"VRA","contract":"0xf411903cbc70a74d22900a5de66a2dda66507255","decimal":"18","visibility":true},{"name":"Wrapped Bitcoin","ticker":"WBTC","contract":"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","decimal":"8","visibility":true},{"name":"Huobi Token","ticker":"HT","contract":"0x6f259637dcd74c767781e37bc6133cd6a68aa161","decimal":"18","visibility":true},{"name":"PAX Gold","ticker":"PAXG","contract":"0x45804880de22913dafe09f4980848ece6ecbaf78","decimal":"18","visibility":true},{"name":"Convex Finance","ticker":"CVX","contract":"0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b","decimal":"18","visibility":true},{"name":"Audius","ticker":"AUDIO","contract":"0x18aaa7115705e8be94bffebde57af9bfc265b998","decimal":"18","visibility":true},{"name":"Livepeer","ticker":"LPT","contract":"0x58b6a8a3302369daec383334672404ee733ab239","decimal":"18","visibility":true},{"name":"Celsius","ticker":"CEL","contract":"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d","decimal":"4","visibility":true},{"name":"SwissBorg","ticker":"CHSB","contract":"0xba9d4199fab4f26efe3551d490e3821486f135ba","decimal":"8","visibility":true},{"name":"Swipe","ticker":"SXP","contract":"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9","decimal":"18","visibility":true},{"name":"Dogelon Mars","ticker":"ELON","contract":"0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3","decimal":"18","visibility":true},{"name":"Ocean Protocol","ticker":"OCEAN","contract":"0x967da4048cd07ab37855c090aaf366e4ce1b9f48","decimal":"18","visibility":true},{"name":"Curve DAO","ticker":"CRV","contract":"0xd533a949740bb3306d119cc777fa900ba034cd52","decimal":"18","visibility":true},{"name":"Oasis Network","ticker":"ROSE","contract":"0x26b80fbfc01b71495f477d5237071242e0d959d7","decimal":"18","visibility":true},{"name":"Reef","ticker":"REEF","contract":"0xfe3e6a25e6b192a42a44ecddcd13796471735acf","decimal":"18","visibility":true},{"name":"Wrapped TON Coin","ticker":"TONCOIN","contract":"0x582d872a1b094fc48f5de31d3b73f2d9be47def1","decimal":"9","visibility":true},{"name":"Liquid staked Ether 2.0","ticker":"stETH","contract":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","decimal":"18","visibility":true},{"name":"BitDAO","ticker":"BIT","contract":"0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5","decimal":"18","visibility":true},{"name":"Chain","ticker":"XCN","contract":"0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18","decimal":"18","visibility":true}]',
      );
    },
    4107: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(2853),
        n = i(a(2858));
      class BlockbookV2WithBlockscannerExplorer extends (0,
      r.HasBlockscannerMixin)(n.default) {}
      t.default = BlockbookV2WithBlockscannerExplorer;
    },
    7151: function (e) {
      e.exports = JSON.parse(
        '["0xc92e74b131D7b1D46E60e07F3FaE5d8877Dd03F0","0x426CA1eA2406c07d75Db9585F22781c096e3d0E0","0x75f2ff3f2d5a789762622d7c039373ca6b8ad74a","0xd0834d08c83dbe216811aaea0eeffb2349e57634","0xafa09d4f43ce49b1317651667a8bc62b878ae888","0x576097fa17e1f702bb9167f0f08f2ea0898a3ea5","0x85332b222787EacAb0fFf68cf3b884798823528C","0xe2d66561b39eadbd488868af8493fb55d4b9d084","0xe0d96560a6145c55549c821fb67299317bca0cb8","0xcf6afbb480351a27950f96923094a0ce1559cc26","0xdbb094bbf86ba42315704d7b38f51918cef0c386","0x4c9d5672ae33522240532206ab45508116daf263","0xa4ce90b5f9e2e1eb95ef7f74bace5e19c4dd989d","0xd375a513692336cf9eebce5e38869b447948016f","0xc154ace99343350e9b303f861ca84d6ebe2d33dc","0xe96377378336d7e465e1af647c2da18d6825fc71","0xe2d66561b39eadbd488868af8493fb55d4b9d084","0xcf6afbb480351a27950f96923094a0ce1559cc26","0xe0d96560a6145c55549c821fb67299317bca0cb8","0x5d0fa08aeb173ade44b0cf7f31d506d8e04f0ac8","0xa5996f6b731b349e25d7d5f4dd93a5ce9947841f","0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2","0xb810ad9007e4f2d9aab2e7181a0385d02437ea6e","0x1a1b161962a7efe85be39a24f18ad7d4a504e10c","0xe302bf71b1f6f3024e7642f9c824ac86b58436a0","0x77d0112d005d21c1740a323f513bb088916b9a14","0xB4532aF6092f29aBA0fD9Ff5eAAA85b6029bE470","0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e"]',
      );
    },
    7152: function (e, t, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "StakingMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }));
      var r = i(a(397));
    },
  },
]);
