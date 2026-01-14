(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [302, 32],
  {
    2718: function (t, e, a) {
      "use strict";
      (function (t) {
        var r = a(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var s = r(a(69)),
          n = r(a(230)),
          i = a(805),
          o = r(a(8141)),
          c = r(a(8142)),
          d = r(a(28)),
          l = r(a(8)),
          u = a(74),
          h = a(19),
          f = a(4),
          m = a(27),
          g = a(67),
          w = r(a(73)),
          T = r(a(80)),
          y = r(a(81)),
          p = a(3269),
          k = r(a(794)),
          b = r(a(815)),
          v = r(a(8143)),
          N = r(a(3279)),
          E = r(a(3210)),
          C = r(a(158)),
          P = r(a(382)),
          L = r(a(386));
        function A(t, e, a) {
          (x(t, e), e.set(t, a));
        }
        function x(t, e) {
          if (e.has(t))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function S(t, e) {
          return t.get(_(t, e));
        }
        function R(t, e, a) {
          return (t.set(_(t, e), a), a);
        }
        function _(t, e, a) {
          if ("function" == typeof t ? t === e : t.has(e))
            return arguments.length < 3 ? e : a;
          throw new TypeError("Private element is not present on this object");
        }
        const F = "Fantom",
          G = "FTM",
          B = "m/44'/1007'/0'/0/0",
          D = 18,
          I = "0",
          U = 250,
          O = u.ConfigKey.FantomGasPrice,
          M = 1e4,
          K = 1e9,
          j = "0x29625E10Cfe090294DC0eC579E322ce87C822745",
          X = 21e3,
          W = 15e4,
          q = "pending",
          J = "0x0",
          $ = "0xF07A4a4d2fDE367A55FaC93761ecc8181148b826",
          z = 3e3,
          H = "web3Sdk",
          V = "ethereumJsWalletSdk";
        var Z = new WeakMap();
        class FTMCoin extends (0, L.default)(
          (0, p.NftMixin)((0, C.default)((0, P.default)(n.default))),
        ) {
          constructor(t) {
            var e, r;
            (super({
              ...t,
              name: null !== (e = t.name) && void 0 !== e ? e : F,
              ticker: null !== (r = t.ticker) && void 0 !== r ? r : G,
              decimal: D,
              unspendableBalance: I,
              dependencies: {
                [H]: new k.default(() =>
                  Promise.resolve().then(a.t.bind(null, 2654, 7)),
                ),
                [V]: new k.default(() => a.e(16).then(a.t.bind(null, 2655, 7))),
              },
            }),
              A(this, Z, void 0),
              (0, s.default)(this, "web3BaseUrl", void 0),
              (0, s.default)(this, "coreLibrary", null),
              (this.derivation = B),
              this.setExplorersModules([
                b.default,
                v.default,
                N.default,
                E.default,
              ]),
              this.loadExplorers(t));
            const { feeData: n, explorers: i, txWebUrl: o } = t;
            (this.setFeeData(n),
              (this.balance = "0"),
              (this.gasPriceConfig = null),
              (this.bannedTokens = []));
            const c = i.find((t) => {
              let { className: e } = t;
              return "Web3Explorer" === e;
            });
            ((this.web3 = new b.default({
              wallet: this.instance,
              config: { ...c, webUrl: o },
            })),
              (this.web3BaseUrl = c.baseUrl),
              (this.fields.paymentId = !1),
              (this.tokens = {}),
              (this.nonce = new this.BN("0")),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (t, e, a) => {
                  this.eventEmitter.emit("socket::tx::confirmed", {
                    id: t,
                    ticker: a,
                  });
                },
              ));
          }
          async initCoreLibrary() {
            if (this.coreLibrary) return;
            const { default: t } = await this.loadLib(H);
            this.coreLibrary = new t(this.web3BaseUrl);
          }
          async getCoreLibrary() {
            return (
              this.coreLibrary || (await this.initCoreLibrary()),
              this.coreLibrary
            );
          }
          setFeeData(t) {
            (void 0 === t && (t = {}),
              super.setFeeData(t),
              (this.gasLimit = Number(t.gasLimit)),
              (this.stakingGasLimit = Number(t.stakingGasLimit) || W),
              (this.nftGasLimitCoefficient = Number(t.nftGasLimitCoefficient)),
              (this.nftGasPriceCoefficient = Number(t.nftGasPriceCoefficient)),
              (this.gasLimitCoefficient = Number(t.gasLimitCoefficient)),
              (this.gasPriceCoefficient = Number(t.gasPriceCoefficient)),
              (this.defaultGasPrice = Number(t.defaultGasPrice)),
              (this.defaultMaxGasPrice = Number(t.defaultMaxGasPrice)),
              (this.resendTimeout = t.resendTimeout));
          }
          isFeeDynamic() {
            return !0;
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(G + ": getTransactions: address is not loaded");
            const [
                t,
                { nftTransactions: e = [] },
                { rawTokenTransactions: a = [] },
              ] = await Promise.all(
                [
                  this.getProvider("history").getTransactions({
                    address: this.address,
                  }),
                  this.getProvider("nft-history").getNftTransactions({
                    address: this.address,
                  }),
                  this.getProvider("token").getRawTokenTransactions({
                    address: this.address,
                  }),
                ].map((t) => t.catch(() => [])),
              ),
              r = a.reduce((t, e) => {
                var a, r;
                const s = e.contract.toLowerCase(),
                  n = this.tokens[s],
                  i = !!n,
                  o =
                    null !==
                      (a = null === n || void 0 === n ? void 0 : n.ticker) &&
                    void 0 !== a
                      ? a
                      : e.ticker;
                return (
                  t.push(
                    new T.default({
                      ...e,
                      ticker: o,
                      name:
                        null !==
                          (r = null === n || void 0 === n ? void 0 : n.name) &&
                        void 0 !== r
                          ? r
                          : e.name,
                      walletid: (0, f.getTokenId)({
                        ticker: o,
                        contract: s,
                        parent: this.ticker,
                      }),
                      amount: i
                        ? (0, g.toCurrency)(e.value, Number(n.decimal))
                        : null,
                    }),
                  ),
                  t
                );
              }, []);
            return t.concat(e).concat(r);
          }
          manageSocket() {
            (this.eventEmitter.on("receive", async (t) => {
              let { address: e, hash: a, ticker: r } = t;
              this.ticker === r &&
                this.getProvider("socket").getSocketTransaction({
                  address: e,
                  hash: a,
                  tokens: this.tokens,
                  type: "receive",
                });
            }),
              this.eventEmitter.on("confirm", async (t) => {
                let { address: e, hash: a, ticker: r } = t;
                this.ticker === r &&
                  this.getProvider("socket").getSocketTransaction({
                    address: e,
                    hash: a,
                    tokens: this.tokens,
                    type: "confirm",
                  });
              }));
          }
          getExcludedTokenList() {
            return ["TRX", "EOS", "ICX", "VEN", "AION", "BTT", "KIN", "BNB"]
              .concat(Array.isArray(this.bannedTokens) ? this.bannedTokens : [])
              .map((t) => t.toLowerCase());
          }
          getFeeSettings() {
            return l.default.get(O);
          }
          async loadWallet(t) {
            const [e, { hdkey: a }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib(V),
              ]),
              r = a.fromMasterSeed(t),
              s = r.getWallet(),
              n = e.eth.accounts.privateKeyToAccount(s.getPrivateKeyString());
            if (!n)
              throw new Error(this.wallet.ticker + " can't get the wallet");
            return (
              R(Z, this, n.privateKey),
              (this.address = n.address),
              { id: this.id, privateKey: S(Z, this), address: this.address }
            );
          }
          async validateAddress(t) {
            const e = await this.getCoreLibrary();
            return e.utils.isAddress(t);
          }
          async createTransaction(t) {
            let e,
              {
                address: a,
                isSendAll: r = !1,
                userFee: s = null,
                amount: n,
                nonce: i,
                userGasPrice: o,
                multiplier: c = this.gasPriceCoefficient,
                gasLimit: d,
                paymentData: l = null,
              } = t;
            if (!o) {
              const t =
                r && s
                  ? Number(s) / Number(this.gasLimit)
                  : await this.getGasPrice();
              e = Number(t.toString()) * c;
            }
            const u = l ? d || this.gasLimit : X,
              [h] = await Promise.all([this.getCoreLibrary(), this.getNonce()]),
              f = {
                to: a,
                value: n,
                gas: u,
                chainId: U,
                gasPrice: new this.BN(o || e),
                nonce: i || this.nonce,
              };
            "" !== l && null !== l && (f.data = l);
            const m = await h.eth.accounts.signTransaction(f, S(Z, this));
            return m.rawTransaction;
          }
          async createTokenTransaction(t) {
            let {
              address: e,
              amount: a,
              custom: r,
              userGasPrice: s,
              gasLimit: n,
              contract: i,
              multiplier: o,
              nonce: c,
            } = t;
            const d = this.getProvider("send").createSendTokenContract(
              i,
              this.address,
              e,
              a,
              c,
            );
            return this.createTransaction({
              address: i,
              amount: "0x0",
              paymentData: d,
              userGasPrice: s,
              gasLimit: n || (await this.estimateGas(a, e)),
              multiplier: o,
              nonce: c,
            });
          }
          async sendTransaction(t) {
            const e = await this.getProvider("send").sendTransaction(t);
            return e;
          }
          async checkTransaction(t) {
            const {
              coin: e,
              address: a,
              amount: r,
              memo: s,
              txid: n,
              nonce: i,
              fee: o,
              feeTicker: c,
            } = t;
            try {
              var d;
              const t = new T.default({
                ticker: e.ticker,
                walletid: e.id,
                name: e.name,
                alias: e.alias,
                txid: n,
                direction: this.address === a,
                otherSideAddress: a,
                amount: (0, g.toCurrency)(r, e.decimal),
                datetime: new Date(),
                memo: s,
                nonce: i,
                confirmations: 1,
                fee: o,
                feeTicker:
                  null !== (d = null !== c && void 0 !== c ? c : e.feeTicker) &&
                  void 0 !== d
                    ? d
                    : this.ticker,
              });
              (await y.default.filterAndUpdateTransactions([t]),
                this.eventEmitter.emit("socket::newtx::outgoing", {
                  id: this.id,
                  ticker: e.ticker,
                }),
                setTimeout(async () => {
                  await this.getBalance();
                }, z));
            } catch (l) {
              console.warn(this.ticker, "Unable to check transaction");
            }
          }
          async getMaxFeePerGas(t) {
            const { standard: e } = await this.getModerateGasPrice();
            if (!e)
              throw new h.ExternalError({
                type: m.EXTERNAL_ERROR,
                error: "Failed to get getMaxFeePerGas",
                instance: this,
              });
            return e.mul(new this.BN(t)).toString();
          }
          async getGasPriceForSendNft(t) {
            try {
              var e;
              const { node: a } =
                  null !== (e = await this.getProvider("node").getGasPrice()) &&
                  void 0 !== e
                    ? e
                    : {},
                r = Number(a) + t * K,
                s = this.defaultMaxGasPrice * K;
              return r > s ? s : r;
            } catch (a) {
              throw a;
            }
          }
          async estimateGasForSendNft(t, e, a, r) {
            void 0 === r && (r = 1);
            try {
              const s = await this.getProvider("nft-send").estimateGas(
                t,
                e,
                null,
                a,
              );
              return Math.ceil(s * r);
            } catch (s) {
              throw (
                console.warn(s),
                new h.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: s,
                  instance: this,
                })
              );
            }
          }
          async getNftTransferGasParams(t, e, a) {
            let { userGasPrice: r, userGasLimit: s } = a;
            const {
                address: n,
                nftGasPriceCoefficient: i,
                nftGasLimitCoefficient: o,
                gasPriceCoefficient: c,
                gasLimitCoefficient: d,
                defaultGasPrice: l,
                gasLimit: u = W,
              } = this,
              h = i || c,
              f = o || d,
              m = [(l + h) * K, Math.ceil(u * f)],
              g = (await this.getNonce()).toNumber(),
              [w, T] = await Promise.allSettled([
                r || this.getGasPriceForSendNft(h),
                s || this.estimateGasForSendNft(n, t, e, f),
              ]).then((t) =>
                t.map((t, e) => ("fulfilled" === t.status ? t.value : m[e])),
              );
            return { gasLimit: T, gasPrice: w, nonce: g };
          }
          async getNftFee(t) {
            let {
              contractAddress: e,
              tokenId: a,
              tokenStandard: r,
              toAddress: s = null,
              userOptions: n = {},
            } = t;
            const i =
              s && s.toLowerCase() !== this.address.toLowerCase() ? s : j;
            try {
              const t = await this.getProvider("nft-send").getNftContractData(
                  this,
                  i,
                  e,
                  a,
                  r,
                ),
                { gasLimit: s, gasPrice: o } =
                  await this.getNftTransferGasParams(e, t, n);
              return new this.BN(o).mul(new this.BN(s));
            } catch (o) {
              throw new h.ExternalError({
                type: m.EXTERNAL_ERROR,
                error: o,
                instance: this,
              });
            }
          }
          async createNftTransaction(t) {
            let { contractAddress: e, data: a, userOptions: r = {} } = t;
            try {
              const {
                  gasLimit: t,
                  gasPrice: s,
                  nonce: n,
                } = await this.getNftTransferGasParams(e, a, r),
                i = {
                  to: e,
                  value: J,
                  gas: t,
                  data: a,
                  nonce: n,
                  maxFeePerGas: s,
                },
                o = await this.getCoreLibrary(),
                { rawTransaction: c } = await o.eth.accounts.signTransaction(
                  i,
                  S(Z, this),
                );
              return c;
            } catch (s) {
              throw (
                console.warn(s),
                new h.ExternalError({
                  type: m.EXTERNAL_ERROR,
                  error: s,
                  instance: this,
                })
              );
            }
          }
          async getNonce() {
            const t = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await t.eth.getTransactionCount(this.address, q),
              )),
              this.nonce
            );
          }
          async getFee(t) {
            let { userGasPrice: e = null, gasLimit: a = null } =
              void 0 === t ? {} : t;
            const r = e || (await this.getGasPrice());
            return new this.BN(String(r)).mul(new this.BN(a || this.gasLimit));
          }
          async getGasPrice() {
            const { node: t } = await this.getProvider("node")
              .getGasPrice()
              .catch((t) => {
                console.warn(`rawGasPrice for ${F} error:`, t);
              });
            return (
              Number(
                null !== t && void 0 !== t ? t : this.defaultGasPrice * K,
              ) +
              this.gasPriceCoefficient * K
            );
          }
          async getModerateGasPrice() {
            let t;
            try {
              t = await l.default.get(O, !1, { timeout: M });
            } catch (e) {
              console.warn(e);
            }
            return t && t.fastest && t.safeLow
              ? {
                  fastest: new this.BN((t.fastest / 10) * K),
                  standard: new this.BN((t.safeLow / 10) * K),
                }
              : {};
          }
          async estimateGas(t, e, a, r) {
            void 0 === r && (r = W);
            const s = this.getProvider("send").createSendTokenContract(
                a,
                this.address,
                j,
                t,
              ),
              n = await this.getCoreLibrary(),
              i = await n.eth
                .estimateGas({
                  from: this.address,
                  nonce: Number(this.nonce.add(new this.BN(1))),
                  to: a,
                  data: s,
                })
                .catch((t) => d.default.error({ instance: this, error: t }));
            return i ? Math.round(i * this.gasLimitCoefficient).toString() : r;
          }
          async availableBalance(t) {
            if (!this.balance) return null;
            const e = (t && new this.BN(t)) || (await this.getFee()),
              a = new this.BN(this.balance)
                .sub(e)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(a).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(a);
          }
          async getInfo(t) {
            if ((await this.initCoreLibrary(), t && t.isToken)) {
              const e = await this.getProvider(
                  "node",
                ).getTokenBalanceByContractAddress({
                  address: this.address,
                  contractAddress: t.contract.toLowerCase(),
                }),
                a = [t.contract, t.contract.toLowerCase()];
              a.forEach((t) => {
                this.tokens[t] && (this.tokens[t].balance = e.toString());
              });
            }
            const e = await this.getProvider("balance")
              .getInfo(this.address)
              .catch((t) => console.warn(t));
            if (
              (e && e.balance && (this.balance = e.balance),
              null === t || void 0 === t || !t.onlyCoin)
            ) {
              const t = Object.values(this.tokens);
              this.getProvider("node").getTokensInfo(t, this.address);
            }
            return { balance: e.balance, balances: this.balances };
          }
          async getStakingInfo() {
            const t = await this.getPredefinedValidators(),
              e = Object.values(this.tokens).filter((e) => {
                let { contract: a } = e;
                return t.some((t) => {
                  let { address: e } = t;
                  return e.toLowerCase() === a.toLowerCase();
                });
              });
            await this.getProvider("stake").getTokensInfo(e, this.address);
            const a = e.reduce(
              (t, e) => {
                let {
                  contract: a,
                  balance: r = "0",
                  ticker: s,
                  id: n,
                  decimal: i,
                } = e;
                return (
                  (t.staked = new w.default(
                    t.staked.toBN().add(new this.BN(r)),
                    this,
                  )),
                  (t.validators[a] = {
                    address: a,
                    staked: new w.default(r, { ticker: s, id: n, decimal: i }),
                  }),
                  t
                );
              },
              { staked: new w.default("0", this), validators: {} },
            );
            return (
              this.setBalances(await this.makeStakingInfoStruct(a)),
              this.balances
            );
          }
          calculateTotal(t) {
            var e;
            let { staked: a } = t;
            const r = new this.BN(
              null !== (e = this.balance) && void 0 !== e ? e : 0,
            ).add(a.toBN());
            return new w.default(r, this);
          }
          async calculateAvailableForStake() {
            const t = await this.getFee({ gasLimit: this.stakingGasLimit }),
              e = await this.getFee(),
              a = t.add(e),
              r = await this.availableBalance(a);
            return new w.default(this.toMinimalUnit(r), this);
          }
          getUserValidators() {
            return this.getPredefinedValidators();
          }
          async createDelegationTransaction(t) {
            let { address: e, amount: a, gasLimit: r } = t;
            const s = this.createSmartContractCall({
                smartContractAddress: e,
                action: "stake",
                args: [$],
              }),
              n = await this.createTransaction({
                address: e,
                amount: a,
                paymentData: s,
                gasLimit:
                  this.stakingGasLimit || (await this.estimateGas(a, e)),
              });
            return n;
          }
          createToken(t) {
            return new i.FTMToken({ parent: this, ...t });
          }
          async getUserTokenList() {
            const t =
              (await this.getProvider("token")
                .getUserTokenList(this.address)
                .catch((t) => console.warn(t))) || [];
            return (
              t.forEach((t) => {
                const e = t.contract,
                  a = this.tokens[e],
                  r = this.tokens[e.toLowerCase()];
                (a && (a.balance = t.balance), r && (r.balance = t.balance));
              }),
              t
            );
          }
          async getTokenList() {
            let t;
            this.bannedTokens = await this.getBannedTokenList();
            try {
              t = await l.default.get(u.ConfigKey.FantomTokens);
            } catch (e) {
              d.default.error({ instance: this, error: e });
            }
            return t || o.default;
          }
          async getBannedTokenList() {
            let t;
            try {
              t = await l.default.get(u.ConfigKey.FantomTokensBanned);
            } catch (e) {
              d.default.error({ instance: this, error: e });
            }
            return t || c.default;
          }
          getTokenObject(t, e) {
            return (
              void 0 === e && (e = "user"),
              "user" === e
                ? this.getTokenFromUserList(t, e)
                : this.getTokenFromCommonList(t, e)
            );
          }
          getTokenFromUserList(t, e) {
            return {
              name: t.name,
              ticker: t.symbol,
              decimal: Number(t.decimals) || 0,
              contract: t.contractAddress.toLowerCase(),
              parentTicker: G,
              uniqueField: t.contractAddress.toLowerCase(),
              source: e,
              visibility: !0,
              confirmed: t.confirmed,
              notify: t.notify,
            };
          }
          getTokenFromCommonList(t, e) {
            return {
              name: t.name,
              ticker: t.ticker,
              decimal: Number(t.decimal) || 0,
              contract: t.contract.toLowerCase(),
              parentTicker: G,
              uniqueField: t.contract.toLowerCase(),
              source: e,
              visibility: !1 !== t.visibility,
              confirmed: t.confirmed,
              notify: Boolean(t.notify),
            };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(t) {
            R(Z, this, t);
          }
          getGasRange(t) {
            return (void 0 === t && (t = "send"), this.feeData[t]);
          }
          async getEstimatedTimeCfg(t) {
            void 0 === t && (t = !1);
            try {
              const e = !this.gasPriceConfig || t;
              this.gasPriceConfig = e
                ? await this.web3.getGasPriceConfig()
                : this.gasPriceConfig;
            } catch (e) {
              console.error(e);
            }
            return this.gasPriceConfig;
          }
          async getEstimatedTimeTx(t, e) {
            void 0 === e && (e = !1);
            const a = 10,
              r = await this.getEstimatedTimeCfg(),
              s = ["fastest", "fast", "average"].find(
                (e) => (null === r || void 0 === r ? void 0 : r[e]) <= t * a,
              );
            if (e) {
              const t = {
                fastest: "<30 sec",
                fast: "<2 min",
                average: "<5 min",
              };
              return t[s] || "<30 min";
            }
            return s;
          }
          signData(t) {
            return this.coreLibrary.eth.accounts.sign(t, S(Z, this));
          }
          signWithCustomSigner(e) {
            let { data: a, signer: r } = e;
            return r({ ...a, privateKey: t.from(S(Z, this).slice(2), "hex") });
          }
        }
        e.default = FTMCoin;
      }).call(this, a(2).Buffer);
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    3210: function (t, e, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.erc721Abi = e.erc1155Abi = e.default = void 0));
      var s = r(a(2654)),
        n = a(27),
        i = a(19),
        o = a(67),
        c = r(a(129)),
        d = a(813);
      const l = "transactionHash",
        u = "0x0",
        h = (e.erc1155Abi = [
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
        f = (e.erc721Abi = [
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
        constructor(t) {
          let { wallet: e, config: a } = t;
          (super({ wallet: e, config: a }),
            (this.baseUrl = (0, o.getStringWithEnsuredEndChar)(a.baseUrl, "/")),
            (this.web3 = new s.default(a.baseUrl)),
            (this.ticker = e.ticker));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        makeNftInfoUrl(t, e) {
          return `${this.baseUrl}${t}?a=${e}`;
        }
        async getGasPrice() {
          return this.web3.eth.getGasPrice();
        }
        estimateGas(t, e, a, r) {
          void 0 === a && (a = null);
          const s = { from: t, to: e, data: r };
          return (a && (s.nonce = a + 1), this.web3.eth.estimateGas(s));
        }
        sendTransaction(t) {
          return new Promise((e, a) => {
            this.wallet.coreLibrary.eth
              .sendSignedTransaction(t)
              .on(l, (t) => {
                e({ tx: t });
              })
              .catch((t) => a(t));
          });
        }
        async getNftContractData(t, e, a, r, s) {
          if (![d.ERC721_TOKEN_STANDARD, d.ERC1155_TOKEN_STANDARD].includes(s))
            throw new i.InternalError({
              type: n.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: o } = t,
            c = {
              [d.ERC1155_TOKEN_STANDARD]: (t, e, a, r) => {
                const s = new this.web3.eth.Contract(h, a);
                return s.methods.safeTransferFrom(t, e, r, 1, u).encodeABI();
              },
              [d.ERC721_TOKEN_STANDARD]: (t, e, a, r) => {
                const s = new this.web3.eth.Contract(f, a);
                return s.methods.safeTransferFrom(t, e, r).encodeABI();
              },
            };
          return c[s](o, e, a, r);
        }
        async sendNft(t, e, a, r, s, o) {
          try {
            const n = await this.getNftContractData(t, e, a, r, s),
              i = await t.createNftTransaction({
                toAddress: e,
                contractAddress: a,
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
      e.default = ETHNftExplorer;
    },
    3269: function (t, e, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "NftMixin", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var s = r(a(823));
    },
    3279: function (t, e, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(a(14)),
        n = a(19),
        i = a(27),
        o = r(a(129)),
        c = a(3280),
        d = a(67),
        l = a(160),
        u = a(813),
        h = a(384);
      const f = "https://deep-index.moralis.io/api/v2/",
        m = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        g = [
          [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
          [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD],
        ],
        w = "get",
        T = 100,
        y = 100,
        p = "NFT";
      class MoralisExplorer extends o.default {
        constructor(t) {
          let { wallet: e, config: a } = t;
          (super({ wallet: e, config: a }), (this.chain = a.chain || "eth"));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        async getInfo(t, e) {
          try {
            const a = await this.request(
              this.getInfoUrl(t),
              this.getInfoMethod(),
              this.getInfoParams(t, this.chain, e),
            );
            return this.modifyInfoResponse(a);
          } catch (a) {
            throw new n.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: a,
              instance: this,
            });
          }
        }
        getInfoUrl(t) {
          return `/${t}/nft`;
        }
        getIsApiKeyRequired(t) {
          return (0, d.getStringWithEnsuredEndChar)(t, "/") === f;
        }
        getInitParams() {
          const t = super.getInitParams(),
            e = { accept: "application/json" };
          return (
            this.getIsApiKeyRequired(
              null === t || void 0 === t ? void 0 : t.baseURL,
            ) && (e["X-API-Key"] = m),
            { ...t, headers: e }
          );
        }
        getInfoParams(t, e, a) {
          return { chain: e, format: "decimal", exclude_spam: !a };
        }
        async modifyInfoResponse(t) {
          const { result: e } = t,
            a = [],
            r = e.map((t, e) => {
              const {
                token_address: r,
                token_id: o,
                token_uri: d,
                contract_type: l,
                metadata: u,
              } = t;
              if (!u) {
                const t = (0, c.getTransformedTokenUri)({
                  tokenId: o,
                  tokenUri: d,
                });
                return (
                  a.push(
                    Promise.all([
                      e,
                      s.default.get(t).catch((t) => {
                        throw new Error(JSON.stringify({ index: e, error: t }));
                      }),
                    ]),
                  ),
                  { contractAddress: r, tokenId: o, tokenStandard: l }
                );
              }
              try {
                const { name: t, description: e, image: a } = JSON.parse(u);
                return {
                  contractAddress: r,
                  tokenId: o,
                  tokenStandard: l,
                  name: t,
                  description: e,
                  imageUrl: a,
                };
              } catch (h) {
                throw (
                  console.warn(h),
                  new n.InternalError({
                    type: i.INTERNAL_ERROR,
                    error: h,
                    instance: this,
                  })
                );
              }
            });
          try {
            const t = await Promise.allSettled(a);
            t.forEach((t) => {
              if ("fulfilled" === t.status) {
                const {
                    value: [e, { data: a }],
                  } = t,
                  { name: s, description: n, image: i } = a;
                r[e] = { ...r[e], name: s, description: n, imageUrl: i };
              } else {
                const {
                  reason: { message: a },
                } = t;
                try {
                  const { index: t, message: e } = JSON.parse(a);
                  console.warn(
                    "Failed to get NFT metadata for tokenUri=" + r[t],
                    e,
                  );
                } catch (e) {
                  console.warn(e);
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
          return r;
        }
        fixTokenStandard(t) {
          for (const [e, a] of g) if (e.test(t)) return a;
          return u.UNRECOGNIZED_TOKEN_STANDARD;
        }
        async fetchNftList(t, e) {
          const { address: a } = t,
            r = await this.getInfo(a, e);
          return r.map((e) => {
            let {
              contractAddress: a,
              tokenId: r,
              tokenStandard: s,
              name: n,
              description: i,
              imageUrl: o,
            } = e;
            return new l.ETHNftToken(
              a,
              r,
              t.id,
              this.fixTokenStandard(s),
              n,
              i,
              o,
            );
          });
        }
        async getRawTokenTransactions(t) {
          let {
            address: e,
            limit: a = this.defaultTxLimit,
            cursor: r = null,
          } = t;
          try {
            const t = await this.request(
              this.getTokenTransactionsUrl(e),
              w,
              this.getTokenTransactionsParams(a, r),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyRawTokenTransactionsResponse(t, e);
          } catch (s) {
            return (console.warn(s), []);
          }
        }
        getTokenTransactionsUrl(t) {
          return `/${t}/erc20/transfers`;
        }
        getTokenTransactionsParams(t, e) {
          const a = t > T ? T : t;
          return { chain: this.chain, limit: a, cursor: e };
        }
        modifyRawTokenTransactionsResponse(t, e) {
          const {
              total: a,
              page: r,
              page_size: s,
              cursor: n,
              result: i,
            } = null !== t && void 0 !== t ? t : { result: [] },
            o = i.reduce((t, a, r) => {
              try {
                const r = this.getTokenTxDirection(e, a);
                return (
                  t.push({
                    contract: a.address,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: a.transaction_hash,
                    direction: r,
                    otherSideAddress: r ? a.from_address : a.to_address,
                    value: a.value,
                    datetime: new Date(a.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    ticker: a.token_symbol,
                    name: a.token_name,
                  }),
                  t
                );
              } catch (s) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(s),
                  t
                );
              }
            }, []);
          return {
            total: a,
            page: r,
            pageSize: s,
            cursor: n,
            rawTokenTransactions: o,
          };
        }
        getTokenTxDirection(t, e) {
          return e.to_address.toLowerCase() === t.toLowerCase();
        }
        async getUserTokenList(t) {
          const e = await this.request(
            this.getUserTokenListUrl(t),
            w,
            this.getInfoParams(t, this.chain),
            "",
            this.getTransactionsOptions(),
          );
          return this.modifyUserTokenList(e);
        }
        modifyUserTokenList(t) {
          return (
            void 0 === t && (t = []),
            t.map((t) => ({
              contract: t.token_address,
              contractAddress: t.token_address,
              decimals: 0,
              ...t,
            }))
          );
        }
        getUserTokenListUrl(t) {
          return `/${t}/erc20`;
        }
        async getNftTransactions(t) {
          let {
            address: e,
            limit: a = this.defaultTxLimit,
            cursor: r = null,
          } = t;
          try {
            const t = await this.request(
              this.getNftTransactionsUrl(e),
              w,
              this.getNftTransactionsParams(a, r),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyNftTransactionsResponse(t, e);
          } catch (s) {
            return (console.warn(s), []);
          }
        }
        getNftTransactionsUrl(t) {
          return `/${t}/nft/transfers`;
        }
        getNftTransactionsParams(t, e) {
          const a = t > y ? y : t;
          return {
            chain: this.chain,
            limit: a,
            format: "decimal",
            direction: "both",
            cursor: e,
          };
        }
        modifyNftTransactionsResponse(t, e) {
          const {
              total: a,
              page: r,
              page_size: s,
              cursor: n,
              result: i,
            } = null !== t && void 0 !== t ? t : { result: [] },
            o = i.reduce((t, a, r) => {
              try {
                const r = this.getTokenTxDirection(e, a);
                return (
                  t.push({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    contract: a.token_address,
                    contractType: a.contract_type,
                    tokenId: a.token_id,
                    txid: a.transaction_hash,
                    direction: r,
                    otherSideAddress: r ? a.from_address : a.to_address,
                    datetime: new Date(a.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    txType: h.TxTypes.TRANSFERNFT,
                    isNft: !0,
                    amount: p,
                  }),
                  t
                );
              } catch (s) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(s),
                  t
                );
              }
            }, []);
          return {
            total: a,
            page: r,
            pageSize: s,
            cursor: n,
            nftTransactions: o,
          };
        }
      }
      e.default = MoralisExplorer;
    },
    3280: function (t, e, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getTransformedTokenUri", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var s = r(a(3281));
    },
    3281: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const r = new Map([
          [
            /https:\/\/api\.opensea\.io\/api\/v1\/metadata\/.*\/0x{id}\/?$/,
            [
              "0x{id}",
              (t) => {
                let { tokenId: e } = t;
                return e;
              },
            ],
          ],
        ]),
        s = (t) => {
          const { tokenUri: e } = t;
          let a = e;
          return (
            r.forEach((e, r) => {
              let [s, n] = e;
              const i = n(t);
              a = r.test(a) ? a.replace(s, i) : a;
            }),
            a
          );
        };
      e.default = s;
    },
    8141: function (t) {
      t.exports = JSON.parse(
        '[{"name":"ProjectMars","ticker":"MARS","contract":"0xBE41772587872A92184873d55B09C6bB6F59f895","decimal":"9","visibility":true},{"name":"Wrapped Fantom","ticker":"WFTM","contract":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83","decimal":"18","visibility":true},{"name":"USDCoin","ticker":"USDC","contract":"0x04068DA6C83AFCFA0e13ba15A6696662335D5B75","decimal":"6","visibility":true},{"name":"SpookySwap","ticker":"BOO","contract":"0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE","decimal":"18","visibility":true},{"name":"SpiritSwap","ticker":"SPIRIT","contract":"0x5cc61a78f164885776aa610fb0fe1257df78e59b","decimal":"18","visibility":true},{"name":"DAI","ticker":"DAI","contract":"0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E","decimal":"18","visibility":true}]',
      );
    },
    8142: function (t) {
      t.exports = JSON.parse("[]");
    },
    8143: function (t, e, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = a(67),
        n = r(a(129)),
        i = r(a(80));
      const o = 1,
        c = "account",
        d = "txlist";
      class FtmExplorer extends n.default {
        constructor(t) {
          let { wallet: e, config: a } = t;
          (super({ wallet: e, config: a }),
            (this.baseUrl = (0, s.getStringWithEnsuredEndChar)(a.baseUrl, "/")),
            (this.ticker = e.ticker));
        }
        getAllowedTickers() {
          return ["FTM"];
        }
        getTransactionsParams(t, e, a, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === a && (a = this.defaultTxLimit),
            void 0 === r && (r = 1),
            {
              module: c,
              action: d,
              address: t,
              page: String(r),
              offset: String(a),
              sort: "desc",
            }
          );
        }
        getTransactionsUrl(t) {
          return "";
        }
        modifyTransactionsResponse(t, e, a) {
          void 0 === a && (a = this.wallet.ticker);
          const r = Array.isArray(
            null === t || void 0 === t ? void 0 : t.result,
          )
            ? t.result
            : [];
          return r.reduce((t, r, n) => {
            try {
              const n = this.getTxDirection(e, r);
              return (
                t.push(
                  new i.default({
                    ticker: a,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    txid: r.hash,
                    direction: n,
                    otherSideAddress: n ? r.from : r.to,
                    amount: (0, s.toCurrency)(r.value, this.wallet.decimal),
                    datetime: this.getTxDateTime(r),
                    memo: "",
                    confirmations: r.confirmations,
                    fee: this.getTxFee(r),
                    feeTicker: a,
                  }),
                ),
                t
              );
            } catch (o) {
              return (
                console.warn("[FTM] tx parse failed"),
                console.error(o),
                t
              );
            }
          }, []);
        }
        getTxDirection(t, e) {
          return e.to.toLowerCase() === t.toLowerCase();
        }
        getTxDateTime(t) {
          return (0, s.convertTimestampToDateTime)(Number(t.timeStamp), o);
        }
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(
            BigInt(t.gasUsed) * BigInt(t.gasPrice),
          );
        }
      }
      e.default = FtmExplorer;
    },
  },
]);
