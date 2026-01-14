(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [391, 32],
  {
    2721: function (e, t, s) {
      "use strict";
      (function (e) {
        var i = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var a = i(s(69)),
          n = i(s(11)),
          r = i(s(230)),
          o = i(s(28)),
          c = i(s(8)),
          d = s(19),
          h = s(27),
          l = s(854),
          u = i(s(815)),
          g = i(s(794)),
          f = s(2806);
        function w(e, t, s) {
          (m(e, t), t.set(e, s));
        }
        function m(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function y(e, t) {
          return e.get(v(e, t));
        }
        function b(e, t, s) {
          return (e.set(v(e, t), s), s);
        }
        function v(e, t, s) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : s;
          throw new TypeError("Private element is not present on this object");
        }
        const k = "Filecoin",
          P = "FIL",
          L = 18,
          p = "0",
          C = 314,
          B = "eth-gas-price",
          T = 1e4,
          E = 1e9,
          S = "0xbdd5468D969e585E38B5a0EEADDb56D5B76814ff",
          N = "6000000",
          x = "pending",
          F = "web3Sdk",
          G = "ethereumJsWalletSdk",
          D = "filecoinAddressSdk";
        var A = new WeakMap();
        class FILCoin extends (0, f.HasProviders)(r.default) {
          constructor(e) {
            let {
              alias: t,
              notify: i,
              feeData: n,
              explorers: r,
              txWebUrl: o,
              socket: c,
              id: d,
            } = e;
            const h = {
              id: d,
              alias: t,
              notify: i,
              name: k,
              ticker: P,
              decimal: L,
              unspendableBalance: p,
              txWebUrl: o,
              explorers: r,
              socket: c,
              feeData: n,
              dependencies: {
                [F]: new g.default(() =>
                  Promise.all([
                    s.e(7),
                    s.e(8),
                    s.e(23),
                    s.e(33),
                    s.e(29),
                    s.e(27),
                    s.e(25),
                  ]).then(s.t.bind(null, 2654, 7)),
                ),
                [G]: new g.default(() => s.e(48).then(s.t.bind(null, 2655, 7))),
                [D]: new g.default(() =>
                  Promise.all([
                    s.e(7),
                    s.e(8),
                    s.e(215),
                    s.e(184),
                    s.e(208),
                  ]).then(s.t.bind(null, 11370, 7)),
                ),
              },
            };
            (super(h),
              w(this, A, void 0),
              (0, a.default)(this, "web3BaseUrl", void 0),
              (0, a.default)(this, "coreLibrary", null),
              this.setExplorersModules([u.default]),
              this.loadExplorers(h),
              this.setFeeData(n));
            const l = r.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3 = new u.default({
              wallet: this.instance,
              config: { ...l, webUrl: o },
            })),
              (this.web3BaseUrl = l.baseUrl),
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
            const { default: e } = await this.loadLib(F);
            this.coreLibrary = new e(this.web3BaseUrl);
          }
          async getCoreLibrary() {
            return (
              this.coreLibrary || (await this.initCoreLibrary()),
              this.coreLibrary
            );
          }
          getFilecoinAddressSdk() {
            return this.loadLib(D);
          }
          setFeeData(e) {
            (void 0 === e && (e = {}),
              super.setFeeData(e),
              (this.gasLimit = String(e.gasLimit)),
              (this.gasLimitCoefficient = e.gasLimitCoefficient));
          }
          isFeeDynamic() {
            return !0;
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(P + ": getTransactions: address is not loaded");
            const {
                transactions: e = [],
                tokenTransactions: t = [],
                failed: s = [],
              } = await this.getProvider("history").getTransactions({
                address: this.address,
              }),
              i = await Promise.all(
                s.map((e) => {
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
              let { address: t, hash: s, ticker: i } = e;
              this.ticker === i &&
                this.getProvider("socket").getSocketTransaction({
                  address: t,
                  hash: s,
                  tokens: this.tokens,
                  type: "receive",
                });
            }),
              this.eventEmitter.on("confirm", async (e) => {
                let { address: t, hash: s, ticker: i } = e;
                this.ticker === i &&
                  this.getProvider("socket").getSocketTransaction({
                    address: t,
                    hash: s,
                    tokens: this.tokens,
                    type: "confirm",
                  });
              }));
          }
          getFeeSettings() {
            return c.default.get(B);
          }
          async loadWallet(e) {
            const [t, { hdkey: s }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib(G),
              ]),
              i = s.fromMasterSeed(e),
              a = i.getWallet(),
              n = t.eth.accounts.privateKeyToAccount(a.getPrivateKeyString());
            if (!n)
              throw new Error(this.wallet.ticker + " can't get the wallet");
            return (
              b(A, this, n.privateKey),
              (this.address = n.address),
              { id: this.id, privateKey: y(A, this), address: this.address }
            );
          }
          async validateAddress(e) {
            const [t, { validateAddressString: s }] = await Promise.all([
              this.getCoreLibrary(),
              this.getFilecoinAddressSdk(),
            ]);
            return (0, l.isStartsWith)(e, "0x") ? t.utils.isAddress(e) : s(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              amount: s,
              paymentData: i = null,
              nonce: a,
              gasLimit: n = this.gasLimit,
            } = e;
            const [r, { ethAddressFromDelegated: o }] = await Promise.all([
                this.getCoreLibrary(),
                this.getFilecoinAddressSdk(),
                this.getNonce(),
              ]),
              c = {
                to: (0, l.isStartsWith)(t, "0x") ? t : o(t),
                value: s,
                gas: n || this.gasLimit,
                chainId: C,
                nonce: a || this.nonce,
                type: 2,
              };
            "" !== i && null !== i && (c.data = i);
            const d = await r.eth.accounts.signTransaction(c, y(A, this));
            return d.rawTransaction;
          }
          sendTransaction(e) {
            return this.getProvider("send").sendTransaction(e);
          }
          async getMaxFeePerGas(e) {
            const { standard: t } = await this.getModerateGasPrice();
            if (!t)
              throw new d.ExternalError({
                type: h.EXTERNAL_ERROR,
                error: "Failed to get getMaxFeePerGas",
                instance: this,
              });
            return t.mul(new n.default(e)).toString();
          }
          async getNonce() {
            const e = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await e.eth.getTransactionCount(this.address, x),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let { userGasPrice: t = null, gasLimit: s = null } =
              void 0 === e ? {} : e;
            const i = t || (await this.getGasPrice());
            return new n.default(String(i)).mul(
              new this.BN(s || this.gasLimit),
            );
          }
          async getGasPrice(e) {
            void 0 === e && (e = !1);
            const t = await this.getModerateGasPrice(),
              { fastest: s = null, standard: i = null } =
                null !== t && void 0 !== t && t.fastest
                  ? t
                  : await this.getProvider("node").getGasPrice();
            if (e) return i || this.defaultGasPrice;
            if (!s) return this.defaultGasPrice;
            const a = new this.BN(this.gasPriceCoefficient),
              n = new this.BN(Number(s) / E),
              r = n.add(a);
            return new this.BN(Number(r) * E);
          }
          async getModerateGasPrice() {
            let e;
            try {
              e = await c.default.get(B, !1, { timeout: T });
            } catch (t) {
              console.warn(t);
            }
            return e && e.fastest && e.safeLow
              ? {
                  fastest: new this.BN((e.fastest / 10) * E),
                  standard: new this.BN((e.safeLow / 10) * E),
                }
              : {};
          }
          async estimateGas(e, t, s, i) {
            void 0 === i && (i = N);
            const a = this.getProvider("send").createSendTokenContract(
                s,
                this.address,
                S,
                e,
              ),
              n = await this.getCoreLibrary(),
              r = await n.eth
                .estimateGas({
                  from: this.address,
                  nonce: Number(this.nonce.add(new this.BN(1))),
                  to: s,
                  data: a,
                })
                .catch((e) => o.default.error({ instance: this, error: e }));
            return r ? Math.round(r * this.gasLimitCoefficient).toString() : i;
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
            const t = await this.getProvider("balance").getInfo(this.address);
            return (
              t && t.balance && (this.balance = t.balance),
              { balance: t.balance, balances: this.balances }
            );
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            b(A, this, e);
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
            const s = 10,
              i = await this.getEstimatedTimeCfg(),
              a = ["fastest", "fast", "average"].find(
                (t) => (null === i || void 0 === i ? void 0 : i[t]) <= e * s,
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
            return this.coreLibrary.eth.accounts.sign(e, y(A, this));
          }
          signWithCustomSigner(t) {
            let { data: s, signer: i } = t;
            return i({ ...s, privateKey: e.from(y(A, this).slice(2), "hex") });
          }
        }
        t.default = FILCoin;
      }).call(this, s(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
  },
]);
