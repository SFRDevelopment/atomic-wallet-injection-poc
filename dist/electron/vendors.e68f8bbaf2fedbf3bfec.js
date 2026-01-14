(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [275],
  {
    2712: function (e, t, o) {
      "use strict";
      (function (e) {
        var n = o(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.LUNC_SEND_TYPES = void 0));
        var a = n(o(105)),
          s = n(o(230)),
          i = n(o(73)),
          r = n(o(28)),
          d = n(o(870)),
          l = m(o(8)),
          u = n(o(8108)),
          c = n(o(8109)),
          p = n(o(2977)),
          h = n(o(8110)),
          f = n(o(794)),
          v = o(2806);
        function m(e, t) {
          if ("function" == typeof WeakMap)
            var o = new WeakMap(),
              n = new WeakMap();
          return (m = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var a,
              s,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t ? n : o)) {
              if (a.has(e)) return a.get(e);
              a.set(e, i);
            }
            for (const o in e)
              "default" !== o &&
                {}.hasOwnProperty.call(e, o) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, o)) &&
                (s.get || s.set)
                  ? a(i, o, s)
                  : (i[o] = e[o]));
            return i;
          })(e, t);
        }
        function g(e, t, o) {
          (k(e, t), t.set(e, o));
        }
        function k(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function b(e, t, o) {
          return (e.set(O(e, t), o), o);
        }
        function y(e, t) {
          return e.get(O(e, t));
        }
        function O(e, t, o) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : o;
          throw new TypeError("Private element is not present on this object");
        }
        const S = (t.LUNC_SEND_TYPES = {
            SEND: "send",
            STAKE: "stake",
            UNSTAKE: "unstake",
            CLAIM: "claim",
          }),
          R = "Terra Classic",
          w = "LUNC",
          N = "m/44'/330'/0'/0/0",
          T = 6,
          x = "0",
          C = "uluna",
          A = "terra1y6z0mzhlgkxr6q0xrykqalce3vhnvujurv96e6",
          P = "terravaloper1qqu376azltyc5wnsje5qgwru5mtj2yqdhar97v",
          E = {
            [S.SEND]: 12e4,
            [S.STAKE]: 8e5,
            [S.UNSTAKE]: 8e5,
            [S.CLAIM]: 35e5,
            max: 35e5,
          },
          B = { uluna: "60" },
          I = "terraSdk";
        var U = new WeakMap();
        class LUNCCoin extends (0, v.StakingMixin)(
          (0, v.HasProviders)((0, v.HasTokensMixin)(s.default)),
        ) {
          constructor(e) {
            let {
              alias: t,
              notify: n,
              feeData: s,
              explorers: i,
              txWebUrl: r,
              socket: d,
              isTestnet: l,
              id: v,
            } = e;
            const m = {
              id: v,
              alias: t,
              notify: n,
              name: R,
              ticker: w,
              decimal: T,
              unspendableBalance: x,
              txWebUrl: r,
              explorers: i,
              socket: d,
              feeData: s,
              denom: C,
              dependencies: {
                [I]: new f.default(() =>
                  Promise.resolve().then(o.t.bind(null, 4301, 7)),
                ),
              },
            };
            (super(m),
              g(this, U, void 0),
              (this.derivation = N),
              this.setExplorersModules([
                c.default,
                u.default,
                h.default,
                p.default,
              ]),
              this.loadExplorers(m),
              this.setFeeData(s),
              (this.BigNumber = a.default),
              (this.bannedTokens = []),
              (this.isTestnet = l),
              (this.fields.paymentId = !0),
              (this.tokens = {}),
              (this.nonce = 0),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (e, t, o) => {
                  this.eventEmitter.emit("socket::tx::confirmed", {
                    id: e,
                    ticker: o,
                  });
                },
              ));
          }
          loadLib() {
            return super.loadLib(I);
          }
          setFeeData(e) {
            var t;
            (void 0 === e && (e = {}),
              super.setFeeData(e),
              (this.gasLimit = e.gasLimit),
              (this.gasLimitCoefficient = e.gasLimitCoefficient),
              (this.gasPriceCoefficient = e.gasPriceCoefficient),
              (this.reserveForStake = e.reserveForStake),
              (this.resendTimeout = e.resendTimeout),
              (this.gasPrices = {
                uluna:
                  (null === (t = e.defaultGasPrice) || void 0 === t
                    ? void 0
                    : t.uluna) || B.uluna,
              }));
          }
          isFeeDynamic() {
            return !0;
          }
          getTickerFromContractAddress(e) {
            var t;
            return null === (t = this.tokens[e]) || void 0 === t
              ? void 0
              : t.ticker;
          }
          createToken(e) {
            return new d.default({
              parent: this,
              ...e,
              config: { ...this.feeData, ...e.config },
            });
          }
          getExcludedTokenList() {
            return [];
          }
          isTokenExcluded(e) {
            var t, o;
            const n =
                null === (t = e.contract) || void 0 === t
                  ? void 0
                  : t.toLowerCase(),
              a =
                null === (o = e.denom) || void 0 === o
                  ? void 0
                  : o.toLowerCase();
            return !this.getExcludedTokenList().some((e) => {
              let { denom: t, contract: o } = e;
              return (a && a === t) || (n && n === o);
            });
          }
          async loadWallet(e, t) {
            const { MnemonicKey: o } = await this.loadLib(),
              n = new o({ mnemonic: t });
            return (
              await this.setPrivateKey(n.privateKey.toString("hex")),
              { id: this.id, privateKey: y(U, this), address: this.address }
            );
          }
          getAddress() {
            return y(U, this)
              ? this.address
              : new Error(this.ticker + " private key is empty");
          }
          async validateAddress(e) {
            const { AccAddress: t } = await this.loadLib();
            return t.validate(e);
          }
          createMsgPayloadBySendType(e, t) {
            let { amount: o, validators: n, denom: a } = t;
            switch (e) {
              case S.STAKE:
                return { validator: P, amount: this.toMinimalUnit(o) };
              case S.UNSTAKE:
                return { validator: P, amount: o };
              case S.CLAIM:
                return { validators: n };
              default:
                return {
                  amount: o,
                  fromAddress: this.address,
                  toAddress: A,
                  denom: a,
                };
            }
          }
          createMsgsBySendType(e, t) {
            let {
              validator: o,
              amount: n,
              toAddress: a,
              validators: s,
              denom: i,
            } = t;
            switch (e) {
              case S.STAKE:
                return [this.createMsgDelegate({ validator: o, amount: n })];
              case S.UNSTAKE:
                return [this.createMsgUndelegate({ validator: o, amount: n })];
              case S.CLAIM:
                return this.createMsgsWithdraw({ validators: s });
              default:
                return [
                  this.createMsgSend({
                    amount: n,
                    fromAddress: this.address,
                    toAddress: a,
                    denom: i,
                  }),
                ];
            }
          }
          async createMsgSend(e) {
            let { amount: t, fromAddress: o, toAddress: n, denom: a } = e;
            const { MsgSend: s } = await this.loadLib();
            return new s(o, n, { [a]: t });
          }
          async createMsgDelegate(e) {
            let { validator: t, amount: o } = e;
            const { Coin: n, MsgDelegate: a } = await this.loadLib(),
              s = new n(this.denom, String(o));
            return new a(this.address, t, s);
          }
          async createMsgRedelegate(e) {
            let { fromValidator: t, validator: o, amount: n } = e;
            const { Coin: a, MsgBeginRedelegate: s } = await this.loadLib(),
              i = new a(this.denom, String(n));
            return new s(this.address, t, o, i);
          }
          async createMsgUndelegate(e) {
            let { validator: t, amount: o } = e;
            const { Coin: n, MsgUndelegate: a } = await this.loadLib(),
              s = new n(this.denom, String(o));
            return new a(this.address, t, s);
          }
          async createMsgsWithdraw(e) {
            let { validators: t } = e;
            const { MsgWithdrawDelegatorReward: o } = await this.loadLib();
            return t.map((e) => new o(this.address, e));
          }
          isToken(e) {
            return this.denom !== e;
          }
          async getFee(e) {
            var t;
            let {
              custom: o,
              sendType: n,
              sendAmount: a,
              denom: s = this.denom,
              address: i = A,
            } = void 0 === e ? {} : e;
            n =
              (null === (t = n) || void 0 === t ? void 0 : t.toLowerCase()) ||
              S.SEND;
            try {
              const e = await this.getGasPricesList(),
                { fee: t, tax: r } = await this.estimateFeeAndTax({
                  sendType: n,
                  amount: a || this.indivisibleBalance.toString(),
                  gasPrices: e,
                  address: i,
                  denom: s,
                  memo: o,
                });
              return t.amount[0].denom === r.denom
                ? (Number(t.amount[0].amount) + Number(r.amount)).toString()
                : t.amount[0].amount;
            } catch (u) {
              var d, l;
              r.default.error({ instance: this, error: u });
              const e =
                  Number(
                    null === (d = this.gasLimit) || void 0 === d
                      ? void 0
                      : d[n],
                  ) ||
                  E[n] ||
                  E.max,
                t =
                  Number(
                    null === (l = this.gasPrices) || void 0 === l
                      ? void 0
                      : l.uluna,
                  ) || Number(B.uluna);
              return (e * t).toFixed(0);
            }
          }
          async estimateFeeAndTax(e) {
            let {
              sendType: t,
              gasLimit: o,
              amount: n,
              gasPrices: a,
              msgs: s,
              address: i,
              denom: r,
              memo: d,
            } = e;
            if (!s) {
              let e;
              t === S.CLAIM &&
                (([e] = await this.getProvider("balance").getValidators(
                  this.address,
                )),
                (e = e.map((e) => {
                  let { operator_address: t } = e;
                  return t;
                })));
              const o = this.createMsgPayloadBySendType(t, {
                amount: n,
                validators: e,
                fromAddress: this.address,
                toAddress: i,
                denom: r,
              });
              s = await this.createMsgsBySendType(t, o);
            }
            const { Coin: l } = await this.loadLib(),
              [u, c] = await Promise.all([
                this.getProvider("estimate_fee").estimateFee(
                  await this.getSigners(),
                  {
                    msgs: s,
                    gas: null !== o && void 0 !== o ? o : "auto",
                    gasPrices: a,
                    gasAdjustment: this.gasLimitCoefficient || 8,
                    feeDenoms: ["uluna"],
                    memo: d,
                  },
                ),
                t === S.SEND
                  ? (
                      await this.getProvider("estimate_fee").calculateTax(
                        new l(r, n),
                      )
                    ).toAmino()
                  : { denom: r, amount: "0" },
              ]);
            return { fee: u.toAmino(), tax: c };
          }
          async getSigners() {
            const e = await this.getProvider("node").getAccountInfo(
              this.address,
            );
            return [
              {
                sequenceNumber: e.getSequenceNumber(),
                publicKey: e.getPublicKey(),
              },
            ];
          }
          async availableBalance(e) {
            return this.BigNumber(this.balance).isGreaterThan(0)
              ? this.toCurrencyUnit(
                  this.BigNumber(this.balance)
                    .minus(e || 0)
                    .toFixed(),
                )
              : "0";
          }
          async createTransaction(e) {
            var t;
            let {
              memo: o,
              amount: n,
              address: a,
              denom: s = this.denom,
              sendType: i,
            } = e;
            i =
              (null === (t = i) || void 0 === t ? void 0 : t.toLowerCase()) ||
              S.SEND;
            const [r, d, { Fee: l }] = await Promise.all([
                this.createMsgSend({
                  amount: n,
                  fromAddress: this.address,
                  toAddress: a,
                  denom: s,
                }),
                this.getGasPricesList().catch(
                  (e) => (console.error(e), this.gasPrices),
                ),
                this.loadLib(),
              ]),
              { fee: u, tax: c } = await this.estimateFeeAndTax({
                amount: n,
                sendType: i,
                gasPrices: d,
                msgs: [r],
                denom: s,
              }),
              p = u.amount;
            p[0].denom === c.denom
              ? (p[0].amount = Number(p[0].amount) + Number(c.amount))
              : p.push(c);
            const h = l.fromAmino(u);
            return this.createAndSignTx({ msgs: [r], memo: o, fee: h });
          }
          async getUserTokenList() {
            try {
              for (
                var e = arguments.length, t = new Array(e), o = 0;
                o < e;
                o++
              )
                t[o] = arguments[o];
              const [n, a] = await Promise.all([
                  this.getProvider("token").getUserTokenList(
                    this.address,
                    !0,
                    ...t,
                  ),
                  this.getProvider("denom").getUserDenomList(
                    this.address,
                    ...t,
                  ),
                ]),
                s = Object.values(this.tokens)
                  .map((e) => e.ticker)
                  .concat(this.ticker);
              return n.concat(a).filter((e) => !s.includes(e.symbol));
            } catch (n) {
              return (
                (n.message = `[${this.ticker}] getUserTokenList error: ${n.message || "Unknown error"}.`),
                r.default.error({ instance: this, error: n }),
                []
              );
            }
          }
          async getTokenList() {
            try {
              return l.default.get(l.ConfigKey.LunaClassicTokens);
            } catch (e) {
              return (r.default.error({ instance: this, error: e }), []);
            }
          }
          getTokenFromUserList(e, t) {
            return {
              ...this.getTokenBase(e),
              visibility: !0,
              denom: e.denom,
              source: t,
            };
          }
          getTokenBase(e) {
            var t;
            const o =
              null === (t = e.contract) || void 0 === t
                ? void 0
                : t.toLowerCase();
            return {
              name: e.name,
              ticker: e.ticker,
              decimal: Number(e.decimal) || 0,
              contract: o,
              parentTicker: this.ticker,
              uniqueField: o,
              confirmed: e.confirmed,
              notify: e.notify,
            };
          }
          getTokenFromCommonList(e, t) {
            return {
              ...this.getTokenBase(e),
              visibility: !1 !== e.visibility,
              denom: e.denom.toLowerCase(),
              source: t,
              notify: Boolean(e.notify),
            };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          async setPrivateKey(t, o) {
            const { RawKey: n } = await this.loadLib(),
              a = new n(e.from(t, "hex"));
            (b(U, this, a.privateKey.toString("hex")),
              (this.address = a.accAddress),
              (this.publicKey = a.publicKey.key),
              (this.rawKey = a));
          }
          getGasRange(e) {
            return (void 0 === e && (e = "send"), this.feeData[e]);
          }
          async getInfo(e) {
            if (
              (this.getGasPricesList().then((e) => {
                this.gasPrices = e;
              }),
              !e || (!e.onlyCoin && !1 !== e.isToken))
            ) {
              var t;
              const o = e
                  ? null ===
                      (t = Object.values(this.tokens).find(
                        (t) => t.ticker === e.ticker,
                      )) || void 0 === t
                    ? void 0
                    : t.denom
                  : null,
                n = e
                  ? { [e.contract || e.ticker]: { denom: o, ...e } }
                  : this.tokens;
              await Promise.all(
                Object.values(n).map(async (e) => {
                  try {
                    var t;
                    let o;
                    if (
                      (e.contract
                        ? (o = await this.getProvider(
                            "node",
                          ).getTokenBalanceByContractAddress({
                            address: this.address,
                            contractAddress: e.contract.toLowerCase(),
                          }))
                        : e.denom &&
                          (o = await this.getProvider("balance").getBalance(
                            this.address,
                            !1,
                            e.denom,
                          )),
                      !o)
                    )
                      throw new Error(
                        `${this.ticker} can't get balance of token with ${e.contract ? "contract address" : "denom"} ${e.contract || e.denom}`,
                      );
                    [
                      e.contract,
                      null === (t = e.contract) || void 0 === t
                        ? void 0
                        : t.toLowerCase(),
                      e.ticker,
                    ]
                      .filter((e) => e && this.tokens[e])
                      .forEach((e) => {
                        this.tokens[e].balance = o.toString();
                      });
                  } catch (o) {
                    r.default.error({ instance: this, error: o });
                  }
                }),
              );
            }
            try {
              const e = await this.getProvider("balance").getBalance(
                this.address,
                !1,
                this.denom,
              );
              if ("string" !== typeof e)
                throw new TypeError(`[${this.ticker}] can't get balance`);
              this.balance = e;
            } catch (o) {
              r.default.error({ instance: this, error: o });
            }
            try {
              await this.getStakingInfo();
            } catch (o) {
              (console.warn("Could not get staking info"),
                r.default.error({ instance: this, error: o }));
            }
            return { balance: this.balance };
          }
          async createTokenTransaction(e) {
            let { memo: t, denom: o, amount: n, address: a, multiplier: s } = e;
            return this.createTransaction({
              memo: t,
              denom: o,
              amount: n,
              address: a,
              multiplier: s,
            });
          }
          async getGasPrice(e, t) {
            (void 0 === e && (e = !1), void 0 === t && (t = !1));
            try {
              this.gasPrices = await this.getGasPricesList();
            } catch (n) {
              console.error(n);
            }
            const { uluna: o } = this.gasPrices;
            return new this.BN(o.split(".")[0]);
          }
          getGasPricesList() {
            return l.default.get(l.ConfigKey.LunaClassicGasPrice);
          }
          async getBalance() {
            return (await this.getInfo()).balance;
          }
          async createAndSignTx(e) {
            return this.getProvider("node")
              .getLcdWallet(this.rawKey)
              .createAndSignTx(e);
          }
          async createDelegationTransaction(e, t, o) {
            void 0 === o && (o = "");
            const n = await this.createMsgDelegate({ validator: e, amount: t }),
              { uluna: a } = this.gasPrices;
            return this.createAndSignTx({
              msgs: [n],
              memo: o,
              gasPrices: { uluna: a },
              feeDenoms: ["uluna"],
            });
          }
          async createRedelegationTransaction(e, t, o, n) {
            void 0 === n && (n = "");
            const a = await this.createMsgRedelegate({
                fromValidator: e,
                validator: t,
                amount: o,
              }),
              { uluna: s } = this.gasPrices;
            return this.createAndSignTx({
              msgs: [a],
              memo: n,
              gasPrices: { uluna: s },
              feeDenoms: ["uluna"],
            });
          }
          async createUnbondingDelegationTransaction(e, t, o) {
            void 0 === o && (o = "");
            const n = await this.createMsgUndelegate({
                validator: e,
                amount: t,
              }),
              { uluna: a } = this.gasPrices;
            return this.createAndSignTx({
              msgs: [n],
              gasPrices: { uluna: a },
              feeDenoms: ["uluna"],
              memo: o,
            });
          }
          async createWithdrawDelegationTransaction(e) {
            void 0 === e && (e = "");
            const [t] = await this.getProvider("balance").getValidators(
                this.address,
              ),
              o = await this.createMsgsWithdraw({
                validators: t.map((e) => {
                  let { operator_address: t } = e;
                  return t;
                }),
              }),
              { uluna: n } = this.gasPrices;
            return this.createAndSignTx({
              msgs: o,
              gasPrices: { uluna: n },
              feeDenoms: ["uluna"],
              memo: e,
            });
          }
          async sendTransaction(e) {
            const t = await this.getProvider("send").sendTransaction(e);
            if (void 0 !== t.code) throw new Error(t.raw_log);
            return { txid: t.txhash };
          }
          async fetchStakingInfo() {
            const e = this.getProvider("balance"),
              t = {},
              [o, n, a] = await Promise.all([
                this.calculateStakedBalance(
                  await e.getStakedDelegations(this.address),
                  t,
                ),
                this.calculateRewards(await e.getRewardsBalance(this.address)),
                this.calculateUnstakingBalance(
                  await e.getUnbondingDelegations(this.address),
                ),
              ]);
            return { rewards: n, staked: o, unstaking: a, validators: t };
          }
          async calculateAvailableForStake(e) {
            var t, o;
            let { balance: n } = e;
            const a = (
                (Number(
                  null === (t = this.gasLimit) || void 0 === t
                    ? void 0
                    : t[S.STAKE],
                ) || E[S.STAKE]) *
                (Number(
                  null === (o = this.gasPrices) || void 0 === o
                    ? void 0
                    : o.uluna,
                ) || Number(B.uluna))
              ).toFixed(0),
              s = n
                .toBN()
                .sub(new this.BN(a))
                .sub(new this.BN(this.reserveForStake));
            return new i.default(s.isNeg() ? "0" : s, this);
          }
          calculateTotal(e) {
            let { balance: t, staked: o, unstaking: n, rewards: a } = e;
            return new i.default(
              t.toBN().add(o.toBN()).add(n.toBN()).add(a.toBN()).toString(),
              this,
            );
          }
          calculateAvailableBalance(e) {
            var t, o;
            return new i.default(
              null !==
                (t =
                  null === (o = e.find((e) => e.denom === this.denom)) ||
                  void 0 === o
                    ? void 0
                    : o.amount) && void 0 !== t
                ? t
                : "0",
              this,
            );
          }
          calculateRewards(e) {
            var t, o, n, a;
            return new i.default(
              (null === (t = e.total) ||
              void 0 === t ||
              null === (o = t._coins) ||
              void 0 === o ||
              null === (n = o.uluna) ||
              void 0 === n ||
              null === (a = n.amount) ||
              void 0 === a
                ? void 0
                : a.toString().split(".")[0]) || "0",
              this,
            );
          }
          calculateStakedBalance(e, t) {
            return new i.default(
              (null === e || void 0 === e ? void 0 : e.length) > 0
                ? this.getTotalDelegations(e, t).toString()
                : "0",
              this,
            );
          }
          calculateUnstakingBalance(e) {
            const t = { validators: {} };
            if ((null === e || void 0 === e ? void 0 : e.length) > 0) {
              const o = e.reduce((e, o) => {
                let { entries: n, validator_address: a } = o;
                const s = a;
                return (
                  (t.validators[s] = n
                    .map((e) => new this.BN(e.balance.toString()))
                    .reduce((e, t) => e.add(new this.BN(t)), new this.BN("0"))),
                  e.add(t.validators[s])
                );
              }, new this.BN("0"));
              t.total = o;
            }
            return new i.default(t.total || "0", this);
          }
          getTotalDelegations(e, t) {
            return e.reduce((e, o) => {
              let { validator_address: n, balance: a } = o;
              return (
                (t[n] = {
                  address: n,
                  staked: new i.default(new this.BN(a.amount.toString()), this),
                }),
                e.add(new this.BN(a.amount.toString()))
              );
            }, new this.BN("0"));
          }
          isRedelegationSupported() {
            return !0;
          }
        }
        t.default = LUNCCoin;
      }).call(this, o(2).Buffer);
    },
    2853: function (e, t, o) {
      "use strict";
      var n = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var a = n(o(2886)),
        s = n(o(2887)),
        i = n(o(2888));
    },
    2886: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = (e) =>
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
      t.default = n;
    },
    2887: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = (e) =>
        class extends e {
          getTransactionsModifiedResponse(e, t, o) {
            return (
              void 0 === o && (o = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(e) },
                super.getTransactionsModifiedResponse(e, t, o),
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
              o = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === o[t] ? "transfer" : o[t];
          }
        };
      t.default = n;
    },
    2888: function (e, t, o) {
      "use strict";
      var n = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(o(81));
      const s = ["reward", "unfreeze", "freeze", "vote"],
        i = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: o,
                tokens: n,
                type: i,
                scriptPubKey: r,
              } = e;
              const d = await this.getTransaction(t, o, n);
              (await a.default.filterAndUpdateTransactions([d]),
                "receive" === i &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${d.walletid}::new-socket-tx`,
                    { unconfirmedTx: d },
                  ),
                "confirm" === i &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    d.walletid,
                    d,
                    d.ticker,
                  ),
                s.forEach((e) => {
                  i === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${i}`,
                      d || {},
                    );
                }));
            }
          };
      t.default = i;
    },
    2977: function (e, t, o) {
      "use strict";
      (function (e) {
        var n = o(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var a = o(3090),
          s = n(o(129)),
          i = o(19),
          r = o(27),
          d = o(4),
          l = o(2853);
        const u = 50;
        class CosmosNodeExplorerV2 extends (0,
        l.CosmosNodeTransactionTypeMixin)(s.default) {
          constructor() {
            (super(...arguments),
              (this.defaultTxLimit = u),
              (this.canPaginate = !1),
              (this.lastKnownHeight = 0));
          }
          getInitParams() {
            if (!this.config.baseUrl)
              throw new Error(
                `${this.wallet.ticker} ${this.constructor.name}: explorer config have no baseUrl`,
              );
            return {
              baseURL: this.config.baseUrl,
              headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                Expires: 0,
              },
            };
          }
          getAllowedTickers() {
            return ["ATOM", "BAND", "OSMO", "KAVA", "FET"];
          }
          async request() {
            const e = await super.request(...arguments);
            return (
              e &&
                e.height &&
                this.lastKnownHeight < Number(e.height) &&
                (this.lastKnownHeight = e.height),
              e && e.result ? e.result : e
            );
          }
          async getAuth(e) {
            const t = await this.request("cosmos/auth/v1beta1/accounts/" + e);
            return t.account.base_account || t.account;
          }
          getLatestBlockUrl() {
            return "cosmos/base/tendermint/v1beta1/blocks/latest";
          }
          getSendTransactionUrl() {
            return "cosmos/tx/v1beta1/txs";
          }
          getSendTransactionParams(t) {
            return {
              tx_bytes: e.from(t).toString("base64"),
              mode: "BROADCAST_MODE_SYNC",
            };
          }
          modifySendTransactionResponse(e) {
            var t;
            if (e.tx_response.code)
              throw new i.ExplorerRequestError({
                type: r.SEND_TRANSACTION_TYPE,
                error: new Error(JSON.stringify(e)),
                instance: this,
              });
            return {
              txid:
                null === (t = e.tx_response) || void 0 === t
                  ? void 0
                  : t.txhash,
            };
          }
          async sendDelegationTransaction(e, t) {
            const o = await this.request(
              `staking/delegators/${e}/delegations`,
              "post",
              t,
            );
            if (o.value && "0" === o.value.account_number)
              throw new i.ExplorerRequestError({
                type: r.SEND_TRANSACTION_TYPE,
                error: new Error(o),
                instance: this,
              });
            return o.value;
          }
          async getTransaction(e, t) {
            const o = await this.request("txs/" + t);
            return this.modifyTransactionResponse(o, e);
          }
          async getTransactions(e) {
            let { address: t, limit: o, denom: n } = e;
            const s = await this.request(
                `/cosmos/tx/v1beta1/txs?events=message.sender=%27${t}%27&query=message.sender=%27${t}%27`,
              ),
              i = await this.request(
                `/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${t}%27&query=transfer.recipient=%27${t}%27`,
              ),
              r = new Map();
            (s.tx_responses.forEach((e) => {
              r.set(e.txhash, { ...e, direction: !1 });
            }),
              i.tx_responses.forEach((e) => {
                r.set(e.txhash, { ...e, direction: !0 });
              }));
            const d = [];
            for (const [, a] of r.entries()) d.push(a);
            d.sort((e, t) => Number(e.height) < Number(t.height));
            const l = d
                .flatMap((e) => [
                  ...e.tx.body.messages.map((t) => {
                    var o, n, s;
                    let i;
                    const r =
                      null === (o = e.tx) ||
                      void 0 === o ||
                      null === (n = o.auth_info) ||
                      void 0 === n ||
                      null === (s = n.fee) ||
                      void 0 === s
                        ? void 0
                        : s.amount;
                    var d, l, u;
                    r && Array.isArray(e.tx.auth_info.fee.amount)
                      ? (i = e.tx.auth_info.fee.amount.reduce(
                          (e, t) => e + parseInt(t.amount, 10),
                          0,
                        ))
                      : (i =
                          null === (d = e.tx) ||
                          void 0 === d ||
                          null === (l = d.auth_info) ||
                          void 0 === l ||
                          null === (u = l.fee) ||
                          void 0 === u
                            ? void 0
                            : u.amount);
                    return {
                      ...t,
                      ...(0, a.pick)(
                        e,
                        "from_address",
                        "to_address",
                        "amount",
                        "txhash",
                        "height",
                        "gas_used",
                        "gas_wanted",
                        "direction",
                        "logs",
                        "timestamp",
                      ),
                      memo: e.tx.body.memo,
                      messages: e.tx.body.messages,
                      fee: i,
                    };
                  }),
                ])
                .filter(
                  (e) =>
                    "MsgBeginRedelegate" !== this.getTransactionNativeType(e),
                ),
              u = (e) => {
                let { "@type": t, txhash: o } = e;
                return `${o}/${t}`;
              };
            return this.modifyTransactionsResponse((0, a.uniqBy)(l, u), t);
          }
          getTxValue(e, t) {
            var o;
            const n = Array.isArray(t.amount)
              ? t.amount[0].amount
              : (null === (o = t.amount) || void 0 === o ? void 0 : o.amount) ||
                t.withdraw_amount ||
                this.getAmountFromLogs(t);
            return this.wallet.toCurrencyUnit(n);
          }
          getAmountFromLogs(e) {
            return (e.logs || [])
              .reduce((e, t) => {
                let { events: o } = t;
                return e.concat(o || []);
              }, [])
              .filter((e) => {
                let { type: t } = e;
                return "transfer" === t;
              })
              .reduce((e, t) => {
                let { attributes: o } = t;
                return e.concat(o);
              }, [])
              .filter((e) => {
                let { key: t } = e;
                return "amount" === t;
              })
              .reduce((e, t) => {
                let { value: o } = t;
                return e + parseInt((o || "0").replace(/\D/gi, ""), 10);
              }, 0);
          }
          getTxDirection(e, t) {
            return t.direction;
          }
          getTxOtherSideAddress(e, t) {
            return this.getTxDirection(e, t)
              ? t.from_address || t.validator_address
              : t.to_address;
          }
          getTxDateTime(e) {
            return new Date(e.timestamp);
          }
          getTxConfirmations(e) {
            return this.lastKnownHeight
              ? this.lastKnownHeight - Number(e.height)
              : 1;
          }
          getTxHash(e) {
            return e.txhash;
          }
          getTxMemo(e) {
            return e.memo;
          }
          getTxType(e) {
            return this.getTransactionType(e);
          }
          async getTotalBalance(e) {
            try {
              const { balances: t } = await this.request(
                "cosmos/bank/v1beta1/balances/" + e,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          async getRewardsBalance(e) {
            try {
              const { total: t } = await this.request(
                `cosmos/distribution/v1beta1/delegators/${e}/rewards`,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return "0";
          }
          async getStakedDelegations(e) {
            try {
              const { delegation_responses: t } = await this.request(
                "cosmos/staking/v1beta1/delegations/" + e,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          async getUnbondingDelegations(e) {
            try {
              const { unbonding_responses: t } = await this.request(
                `cosmos/staking/v1beta1/delegators/${e}/unbonding_delegations`,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          modifyLatestBlockResponse(e) {
            if (!e)
              throw new Error(
                "[CosmosNodeExplorer] wrong latest block response",
              );
            const t = Object.hasOwnProperty.call(e, "block")
              ? "block"
              : "block_meta";
            return (
              (this.chainId = e[t].header.chain_id),
              (this.lastKnownHeight = Number(e[t].header.height) || 0),
              e
            );
          }
          async getChainId() {
            return (await this.getLatestBlock(), this.chainId);
          }
          async getSignerData(e) {
            const { sequence: t = "0", account_number: o } =
                await this.getAuth(e),
              n = this.chainId || (await this.getChainId());
            return { sequence: t, accountNumber: o, chainId: n };
          }
          async getValidators(e) {
            const { validators: t } = await this.request(
              `cosmos/distribution/v1beta1/delegators/${e}/validators`,
            );
            return t.map(d.sanitizeString);
          }
          getTxFee(e) {
            return this.wallet.toCurrencyUnit(
              e.fee || this.wallet.feeDefault || 0,
            );
          }
          async getGasEstimation(e) {
            const {
              gas_info: { gas_used: t },
            } = await super.request(
              "cosmos/tx/v1beta1/simulate",
              "post",
              this.getSendTransactionParams(e),
            );
            return t;
          }
        }
        t.default = CosmosNodeExplorerV2;
      }).call(this, o(2).Buffer);
    },
    3429: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TxProof =
            t.BlockMeta =
            t.LightBlock =
            t.SignedHeader =
            t.Proposal =
            t.CommitSig =
            t.Commit =
            t.Vote =
            t.Data =
            t.Header =
            t.BlockID =
            t.Part =
            t.PartSetHeader =
            t.signedMsgTypeToJSON =
            t.signedMsgTypeFromJSON =
            t.SignedMsgType =
            t.blockIDFlagToJSON =
            t.blockIDFlagFromJSON =
            t.BlockIDFlag =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          s = n(o(2755)),
          i = o(3677),
          r = o(3678),
          d = o(3679),
          l = o(2993);
        var u, c;
        function p(e) {
          switch (e) {
            case 0:
            case "BLOCK_ID_FLAG_UNKNOWN":
              return u.BLOCK_ID_FLAG_UNKNOWN;
            case 1:
            case "BLOCK_ID_FLAG_ABSENT":
              return u.BLOCK_ID_FLAG_ABSENT;
            case 2:
            case "BLOCK_ID_FLAG_COMMIT":
              return u.BLOCK_ID_FLAG_COMMIT;
            case 3:
            case "BLOCK_ID_FLAG_NIL":
              return u.BLOCK_ID_FLAG_NIL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return u.UNRECOGNIZED;
          }
        }
        function h(e) {
          switch (e) {
            case u.BLOCK_ID_FLAG_UNKNOWN:
              return "BLOCK_ID_FLAG_UNKNOWN";
            case u.BLOCK_ID_FLAG_ABSENT:
              return "BLOCK_ID_FLAG_ABSENT";
            case u.BLOCK_ID_FLAG_COMMIT:
              return "BLOCK_ID_FLAG_COMMIT";
            case u.BLOCK_ID_FLAG_NIL:
              return "BLOCK_ID_FLAG_NIL";
            default:
              return "UNKNOWN";
          }
        }
        function f(e) {
          switch (e) {
            case 0:
            case "SIGNED_MSG_TYPE_UNKNOWN":
              return c.SIGNED_MSG_TYPE_UNKNOWN;
            case 1:
            case "SIGNED_MSG_TYPE_PREVOTE":
              return c.SIGNED_MSG_TYPE_PREVOTE;
            case 2:
            case "SIGNED_MSG_TYPE_PRECOMMIT":
              return c.SIGNED_MSG_TYPE_PRECOMMIT;
            case 32:
            case "SIGNED_MSG_TYPE_PROPOSAL":
              return c.SIGNED_MSG_TYPE_PROPOSAL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function v(e) {
          switch (e) {
            case c.SIGNED_MSG_TYPE_UNKNOWN:
              return "SIGNED_MSG_TYPE_UNKNOWN";
            case c.SIGNED_MSG_TYPE_PREVOTE:
              return "SIGNED_MSG_TYPE_PREVOTE";
            case c.SIGNED_MSG_TYPE_PRECOMMIT:
              return "SIGNED_MSG_TYPE_PRECOMMIT";
            case c.SIGNED_MSG_TYPE_PROPOSAL:
              return "SIGNED_MSG_TYPE_PROPOSAL";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "tendermint.types"),
          (function (e) {
            ((e[(e["BLOCK_ID_FLAG_UNKNOWN"] = 0)] = "BLOCK_ID_FLAG_UNKNOWN"),
              (e[(e["BLOCK_ID_FLAG_ABSENT"] = 1)] = "BLOCK_ID_FLAG_ABSENT"),
              (e[(e["BLOCK_ID_FLAG_COMMIT"] = 2)] = "BLOCK_ID_FLAG_COMMIT"),
              (e[(e["BLOCK_ID_FLAG_NIL"] = 3)] = "BLOCK_ID_FLAG_NIL"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((u = t.BlockIDFlag || (t.BlockIDFlag = {}))),
          (t.blockIDFlagFromJSON = p),
          (t.blockIDFlagToJSON = h),
          (function (e) {
            ((e[(e["SIGNED_MSG_TYPE_UNKNOWN"] = 0)] =
              "SIGNED_MSG_TYPE_UNKNOWN"),
              (e[(e["SIGNED_MSG_TYPE_PREVOTE"] = 1)] =
                "SIGNED_MSG_TYPE_PREVOTE"),
              (e[(e["SIGNED_MSG_TYPE_PRECOMMIT"] = 2)] =
                "SIGNED_MSG_TYPE_PRECOMMIT"),
              (e[(e["SIGNED_MSG_TYPE_PROPOSAL"] = 32)] =
                "SIGNED_MSG_TYPE_PROPOSAL"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = t.SignedMsgType || (t.SignedMsgType = {}))),
          (t.signedMsgTypeFromJSON = f),
          (t.signedMsgTypeToJSON = v));
        const m = { total: 0 };
        t.PartSetHeader = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.total && t.uint32(8).uint32(e.total),
              0 !== e.hash.length && t.uint32(18).bytes(e.hash),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, m);
            a.hash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.total = o.uint32();
                  break;
                case 2:
                  a.hash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.hash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = Number(e.total))
                : (t.total = 0),
              void 0 !== e.hash && null !== e.hash && (t.hash = E(e.hash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total && (t.total = e.total),
              void 0 !== e.hash &&
                (t.hash = I(void 0 !== e.hash ? e.hash : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.total && null !== e.total
                ? (t.total = e.total)
                : (t.total = 0),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = new Uint8Array()),
              t
            );
          },
        };
        const g = { index: 0 };
        t.Part = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.index && t.uint32(8).uint32(e.index),
              0 !== e.bytes.length && t.uint32(18).bytes(e.bytes),
              void 0 !== e.proof &&
                i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, g);
            a.bytes = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.index = o.uint32();
                  break;
                case 2:
                  a.bytes = o.bytes();
                  break;
                case 3:
                  a.proof = i.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              (t.bytes = new Uint8Array()),
              void 0 !== e.index && null !== e.index
                ? (t.index = Number(e.index))
                : (t.index = 0),
              void 0 !== e.bytes && null !== e.bytes && (t.bytes = E(e.bytes)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.index && (t.index = e.index),
              void 0 !== e.bytes &&
                (t.bytes = I(void 0 !== e.bytes ? e.bytes : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = 0),
              void 0 !== e.bytes && null !== e.bytes
                ? (t.bytes = e.bytes)
                : (t.bytes = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromPartial(e.proof))
                : (t.proof = void 0),
              t
            );
          },
        };
        const k = {};
        t.BlockID = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              0 !== e.hash.length && o.uint32(10).bytes(e.hash),
              void 0 !== e.partSetHeader &&
                t.PartSetHeader.encode(
                  e.partSetHeader,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, k);
            i.hash = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.hash = n.bytes();
                  break;
                case 2:
                  i.partSetHeader = t.PartSetHeader.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, k);
            return (
              (o.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (o.hash = E(e.hash)),
              void 0 !== e.partSetHeader && null !== e.partSetHeader
                ? (o.partSetHeader = t.PartSetHeader.fromJSON(e.partSetHeader))
                : (o.partSetHeader = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.hash &&
                (o.hash = I(void 0 !== e.hash ? e.hash : new Uint8Array())),
              void 0 !== e.partSetHeader &&
                (o.partSetHeader = e.partSetHeader
                  ? t.PartSetHeader.toJSON(e.partSetHeader)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, k);
            return (
              void 0 !== e.hash && null !== e.hash
                ? (o.hash = e.hash)
                : (o.hash = new Uint8Array()),
              void 0 !== e.partSetHeader && null !== e.partSetHeader
                ? (o.partSetHeader = t.PartSetHeader.fromPartial(
                    e.partSetHeader,
                  ))
                : (o.partSetHeader = void 0),
              o
            );
          },
        };
        const b = { chainId: "", height: a.default.ZERO };
        t.Header = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== e.version &&
                r.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(),
              "" !== e.chainId && o.uint32(18).string(e.chainId),
              e.height.isZero() || o.uint32(24).int64(e.height),
              void 0 !== e.time &&
                l.Timestamp.encode(U(e.time), o.uint32(34).fork()).ldelim(),
              void 0 !== e.lastBlockId &&
                t.BlockID.encode(e.lastBlockId, o.uint32(42).fork()).ldelim(),
              0 !== e.lastCommitHash.length &&
                o.uint32(50).bytes(e.lastCommitHash),
              0 !== e.dataHash.length && o.uint32(58).bytes(e.dataHash),
              0 !== e.validatorsHash.length &&
                o.uint32(66).bytes(e.validatorsHash),
              0 !== e.nextValidatorsHash.length &&
                o.uint32(74).bytes(e.nextValidatorsHash),
              0 !== e.consensusHash.length &&
                o.uint32(82).bytes(e.consensusHash),
              0 !== e.appHash.length && o.uint32(90).bytes(e.appHash),
              0 !== e.lastResultsHash.length &&
                o.uint32(98).bytes(e.lastResultsHash),
              0 !== e.evidenceHash.length &&
                o.uint32(106).bytes(e.evidenceHash),
              0 !== e.proposerAddress.length &&
                o.uint32(114).bytes(e.proposerAddress),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, b);
            ((i.lastCommitHash = new Uint8Array()),
              (i.dataHash = new Uint8Array()),
              (i.validatorsHash = new Uint8Array()),
              (i.nextValidatorsHash = new Uint8Array()),
              (i.consensusHash = new Uint8Array()),
              (i.appHash = new Uint8Array()),
              (i.lastResultsHash = new Uint8Array()),
              (i.evidenceHash = new Uint8Array()),
              (i.proposerAddress = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.version = r.Consensus.decode(n, n.uint32());
                  break;
                case 2:
                  i.chainId = n.string();
                  break;
                case 3:
                  i.height = n.int64();
                  break;
                case 4:
                  i.time = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 5:
                  i.lastBlockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  i.lastCommitHash = n.bytes();
                  break;
                case 7:
                  i.dataHash = n.bytes();
                  break;
                case 8:
                  i.validatorsHash = n.bytes();
                  break;
                case 9:
                  i.nextValidatorsHash = n.bytes();
                  break;
                case 10:
                  i.consensusHash = n.bytes();
                  break;
                case 11:
                  i.appHash = n.bytes();
                  break;
                case 12:
                  i.lastResultsHash = n.bytes();
                  break;
                case 13:
                  i.evidenceHash = n.bytes();
                  break;
                case 14:
                  i.proposerAddress = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, b);
            return (
              (o.lastCommitHash = new Uint8Array()),
              (o.dataHash = new Uint8Array()),
              (o.validatorsHash = new Uint8Array()),
              (o.nextValidatorsHash = new Uint8Array()),
              (o.consensusHash = new Uint8Array()),
              (o.appHash = new Uint8Array()),
              (o.lastResultsHash = new Uint8Array()),
              (o.evidenceHash = new Uint8Array()),
              (o.proposerAddress = new Uint8Array()),
              void 0 !== e.version && null !== e.version
                ? (o.version = r.Consensus.fromJSON(e.version))
                : (o.version = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = String(e.chainId))
                : (o.chainId = ""),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = J(e.time))
                : (o.time = void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (o.lastBlockId = t.BlockID.fromJSON(e.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== e.lastCommitHash &&
                null !== e.lastCommitHash &&
                (o.lastCommitHash = E(e.lastCommitHash)),
              void 0 !== e.dataHash &&
                null !== e.dataHash &&
                (o.dataHash = E(e.dataHash)),
              void 0 !== e.validatorsHash &&
                null !== e.validatorsHash &&
                (o.validatorsHash = E(e.validatorsHash)),
              void 0 !== e.nextValidatorsHash &&
                null !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = E(e.nextValidatorsHash)),
              void 0 !== e.consensusHash &&
                null !== e.consensusHash &&
                (o.consensusHash = E(e.consensusHash)),
              void 0 !== e.appHash &&
                null !== e.appHash &&
                (o.appHash = E(e.appHash)),
              void 0 !== e.lastResultsHash &&
                null !== e.lastResultsHash &&
                (o.lastResultsHash = E(e.lastResultsHash)),
              void 0 !== e.evidenceHash &&
                null !== e.evidenceHash &&
                (o.evidenceHash = E(e.evidenceHash)),
              void 0 !== e.proposerAddress &&
                null !== e.proposerAddress &&
                (o.proposerAddress = E(e.proposerAddress)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.version &&
                (o.version = e.version
                  ? r.Consensus.toJSON(e.version)
                  : void 0),
              void 0 !== e.chainId && (o.chainId = e.chainId),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.time && (o.time = e.time.toISOString()),
              void 0 !== e.lastBlockId &&
                (o.lastBlockId = e.lastBlockId
                  ? t.BlockID.toJSON(e.lastBlockId)
                  : void 0),
              void 0 !== e.lastCommitHash &&
                (o.lastCommitHash = I(
                  void 0 !== e.lastCommitHash
                    ? e.lastCommitHash
                    : new Uint8Array(),
                )),
              void 0 !== e.dataHash &&
                (o.dataHash = I(
                  void 0 !== e.dataHash ? e.dataHash : new Uint8Array(),
                )),
              void 0 !== e.validatorsHash &&
                (o.validatorsHash = I(
                  void 0 !== e.validatorsHash
                    ? e.validatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.nextValidatorsHash &&
                (o.nextValidatorsHash = I(
                  void 0 !== e.nextValidatorsHash
                    ? e.nextValidatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.consensusHash &&
                (o.consensusHash = I(
                  void 0 !== e.consensusHash
                    ? e.consensusHash
                    : new Uint8Array(),
                )),
              void 0 !== e.appHash &&
                (o.appHash = I(
                  void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                )),
              void 0 !== e.lastResultsHash &&
                (o.lastResultsHash = I(
                  void 0 !== e.lastResultsHash
                    ? e.lastResultsHash
                    : new Uint8Array(),
                )),
              void 0 !== e.evidenceHash &&
                (o.evidenceHash = I(
                  void 0 !== e.evidenceHash ? e.evidenceHash : new Uint8Array(),
                )),
              void 0 !== e.proposerAddress &&
                (o.proposerAddress = I(
                  void 0 !== e.proposerAddress
                    ? e.proposerAddress
                    : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, b);
            return (
              void 0 !== e.version && null !== e.version
                ? (o.version = r.Consensus.fromPartial(e.version))
                : (o.version = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = e.chainId)
                : (o.chainId = ""),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = e.time)
                : (o.time = void 0),
              void 0 !== e.lastBlockId && null !== e.lastBlockId
                ? (o.lastBlockId = t.BlockID.fromPartial(e.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== e.lastCommitHash && null !== e.lastCommitHash
                ? (o.lastCommitHash = e.lastCommitHash)
                : (o.lastCommitHash = new Uint8Array()),
              void 0 !== e.dataHash && null !== e.dataHash
                ? (o.dataHash = e.dataHash)
                : (o.dataHash = new Uint8Array()),
              void 0 !== e.validatorsHash && null !== e.validatorsHash
                ? (o.validatorsHash = e.validatorsHash)
                : (o.validatorsHash = new Uint8Array()),
              void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash
                ? (o.nextValidatorsHash = e.nextValidatorsHash)
                : (o.nextValidatorsHash = new Uint8Array()),
              void 0 !== e.consensusHash && null !== e.consensusHash
                ? (o.consensusHash = e.consensusHash)
                : (o.consensusHash = new Uint8Array()),
              void 0 !== e.appHash && null !== e.appHash
                ? (o.appHash = e.appHash)
                : (o.appHash = new Uint8Array()),
              void 0 !== e.lastResultsHash && null !== e.lastResultsHash
                ? (o.lastResultsHash = e.lastResultsHash)
                : (o.lastResultsHash = new Uint8Array()),
              void 0 !== e.evidenceHash && null !== e.evidenceHash
                ? (o.evidenceHash = e.evidenceHash)
                : (o.evidenceHash = new Uint8Array()),
              void 0 !== e.proposerAddress && null !== e.proposerAddress
                ? (o.proposerAddress = e.proposerAddress)
                : (o.proposerAddress = new Uint8Array()),
              o
            );
          },
        };
        const y = {};
        t.Data = {
          encode(e, t) {
            void 0 === t && (t = s.default.Writer.create());
            for (const o of e.txs) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, y);
            a.txs = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.txs.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, y);
            if (((t.txs = []), void 0 !== e.txs && null !== e.txs))
              for (const o of e.txs) t.txs.push(E(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.txs
                ? (t.txs = e.txs.map((e) =>
                    I(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.txs = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, y);
            if (((t.txs = []), void 0 !== e.txs && null !== e.txs))
              for (const o of e.txs) t.txs.push(o);
            return t;
          },
        };
        const O = {
          type: 0,
          height: a.default.ZERO,
          round: 0,
          validatorIndex: 0,
        };
        t.Vote = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              0 !== e.type && o.uint32(8).int32(e.type),
              e.height.isZero() || o.uint32(16).int64(e.height),
              0 !== e.round && o.uint32(24).int32(e.round),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(34).fork()).ldelim(),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  U(e.timestamp),
                  o.uint32(42).fork(),
                ).ldelim(),
              0 !== e.validatorAddress.length &&
                o.uint32(50).bytes(e.validatorAddress),
              0 !== e.validatorIndex && o.uint32(56).int32(e.validatorIndex),
              0 !== e.signature.length && o.uint32(66).bytes(e.signature),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, O);
            ((i.validatorAddress = new Uint8Array()),
              (i.signature = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.type = n.int32();
                  break;
                case 2:
                  i.height = n.int64();
                  break;
                case 3:
                  i.round = n.int32();
                  break;
                case 4:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 5:
                  i.timestamp = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 6:
                  i.validatorAddress = n.bytes();
                  break;
                case 7:
                  i.validatorIndex = n.int32();
                  break;
                case 8:
                  i.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, O);
            return (
              (o.validatorAddress = new Uint8Array()),
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = f(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = J(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (o.validatorAddress = E(e.validatorAddress)),
              void 0 !== e.validatorIndex && null !== e.validatorIndex
                ? (o.validatorIndex = Number(e.validatorIndex))
                : (o.validatorIndex = 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = E(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = v(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.validatorAddress &&
                (o.validatorAddress = I(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.validatorIndex &&
                (o.validatorIndex = e.validatorIndex),
              void 0 !== e.signature &&
                (o.signature = I(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, O);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = e.timestamp)
                : (o.timestamp = void 0),
              void 0 !== e.validatorAddress && null !== e.validatorAddress
                ? (o.validatorAddress = e.validatorAddress)
                : (o.validatorAddress = new Uint8Array()),
              void 0 !== e.validatorIndex && null !== e.validatorIndex
                ? (o.validatorIndex = e.validatorIndex)
                : (o.validatorIndex = 0),
              void 0 !== e.signature && null !== e.signature
                ? (o.signature = e.signature)
                : (o.signature = new Uint8Array()),
              o
            );
          },
        };
        const S = { height: a.default.ZERO, round: 0 };
        t.Commit = {
          encode(e, o) {
            (void 0 === o && (o = s.default.Writer.create()),
              e.height.isZero() || o.uint32(8).int64(e.height),
              0 !== e.round && o.uint32(16).int32(e.round),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(26).fork()).ldelim());
            for (const n of e.signatures)
              t.CommitSig.encode(n, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, S);
            i.signatures = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.height = n.int64();
                  break;
                case 2:
                  i.round = n.int32();
                  break;
                case 3:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 4:
                  i.signatures.push(t.CommitSig.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, S);
            if (
              ((o.signatures = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures)
                o.signatures.push(t.CommitSig.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              e.signatures
                ? (o.signatures = e.signatures.map((e) =>
                    e ? t.CommitSig.toJSON(e) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, S);
            if (
              ((o.signatures = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures)
                o.signatures.push(t.CommitSig.fromPartial(n));
            return o;
          },
        };
        const R = { blockIdFlag: 0 };
        t.CommitSig = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag),
              0 !== e.validatorAddress.length &&
                t.uint32(18).bytes(e.validatorAddress),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  U(e.timestamp),
                  t.uint32(26).fork(),
                ).ldelim(),
              0 !== e.signature.length && t.uint32(34).bytes(e.signature),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, R);
            ((a.validatorAddress = new Uint8Array()),
              (a.signature = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.blockIdFlag = o.int32();
                  break;
                case 2:
                  a.validatorAddress = o.bytes();
                  break;
                case 3:
                  a.timestamp = H(l.Timestamp.decode(o, o.uint32()));
                  break;
                case 4:
                  a.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, R);
            return (
              (t.validatorAddress = new Uint8Array()),
              (t.signature = new Uint8Array()),
              void 0 !== e.blockIdFlag && null !== e.blockIdFlag
                ? (t.blockIdFlag = p(e.blockIdFlag))
                : (t.blockIdFlag = 0),
              void 0 !== e.validatorAddress &&
                null !== e.validatorAddress &&
                (t.validatorAddress = E(e.validatorAddress)),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = J(e.timestamp))
                : (t.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (t.signature = E(e.signature)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.blockIdFlag && (t.blockIdFlag = h(e.blockIdFlag)),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = I(
                  void 0 !== e.validatorAddress
                    ? e.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== e.timestamp &&
                (t.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (t.signature = I(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, R);
            return (
              void 0 !== e.blockIdFlag && null !== e.blockIdFlag
                ? (t.blockIdFlag = e.blockIdFlag)
                : (t.blockIdFlag = 0),
              void 0 !== e.validatorAddress && null !== e.validatorAddress
                ? (t.validatorAddress = e.validatorAddress)
                : (t.validatorAddress = new Uint8Array()),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (t.timestamp = e.timestamp)
                : (t.timestamp = void 0),
              void 0 !== e.signature && null !== e.signature
                ? (t.signature = e.signature)
                : (t.signature = new Uint8Array()),
              t
            );
          },
        };
        const w = { type: 0, height: a.default.ZERO, round: 0, polRound: 0 };
        t.Proposal = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              0 !== e.type && o.uint32(8).int32(e.type),
              e.height.isZero() || o.uint32(16).int64(e.height),
              0 !== e.round && o.uint32(24).int32(e.round),
              0 !== e.polRound && o.uint32(32).int32(e.polRound),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(42).fork()).ldelim(),
              void 0 !== e.timestamp &&
                l.Timestamp.encode(
                  U(e.timestamp),
                  o.uint32(50).fork(),
                ).ldelim(),
              0 !== e.signature.length && o.uint32(58).bytes(e.signature),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, w);
            i.signature = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.type = n.int32();
                  break;
                case 2:
                  i.height = n.int64();
                  break;
                case 3:
                  i.round = n.int32();
                  break;
                case 4:
                  i.polRound = n.int32();
                  break;
                case 5:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 6:
                  i.timestamp = H(l.Timestamp.decode(n, n.uint32()));
                  break;
                case 7:
                  i.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, w);
            return (
              (o.signature = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (o.type = f(e.type))
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.polRound && null !== e.polRound
                ? (o.polRound = Number(e.polRound))
                : (o.polRound = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = J(e.timestamp))
                : (o.timestamp = void 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (o.signature = E(e.signature)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = v(e.type)),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.round && (o.round = e.round),
              void 0 !== e.polRound && (o.polRound = e.polRound),
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.timestamp &&
                (o.timestamp = e.timestamp.toISOString()),
              void 0 !== e.signature &&
                (o.signature = I(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, w);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.polRound && null !== e.polRound
                ? (o.polRound = e.polRound)
                : (o.polRound = 0),
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = e.timestamp)
                : (o.timestamp = void 0),
              void 0 !== e.signature && null !== e.signature
                ? (o.signature = e.signature)
                : (o.signature = new Uint8Array()),
              o
            );
          },
        };
        const N = {};
        t.SignedHeader = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== e.header &&
                t.Header.encode(e.header, o.uint32(10).fork()).ldelim(),
              void 0 !== e.commit &&
                t.Commit.encode(e.commit, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, N);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.header = t.Header.decode(n, n.uint32());
                  break;
                case 2:
                  i.commit = t.Commit.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, N);
            return (
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.Commit.fromJSON(e.commit))
                : (o.commit = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.header &&
                (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
              void 0 !== e.commit &&
                (o.commit = e.commit ? t.Commit.toJSON(e.commit) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, N);
            return (
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.Commit.fromPartial(e.commit))
                : (o.commit = void 0),
              o
            );
          },
        };
        const T = {};
        t.LightBlock = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== e.signedHeader &&
                t.SignedHeader.encode(
                  e.signedHeader,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.validatorSet &&
                d.ValidatorSet.encode(
                  e.validatorSet,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, T);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.signedHeader = t.SignedHeader.decode(n, n.uint32());
                  break;
                case 2:
                  i.validatorSet = d.ValidatorSet.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, T);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (o.signedHeader = t.SignedHeader.fromJSON(e.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (o.validatorSet = d.ValidatorSet.fromJSON(e.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.signedHeader &&
                (o.signedHeader = e.signedHeader
                  ? t.SignedHeader.toJSON(e.signedHeader)
                  : void 0),
              void 0 !== e.validatorSet &&
                (o.validatorSet = e.validatorSet
                  ? d.ValidatorSet.toJSON(e.validatorSet)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, T);
            return (
              void 0 !== e.signedHeader && null !== e.signedHeader
                ? (o.signedHeader = t.SignedHeader.fromPartial(e.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== e.validatorSet && null !== e.validatorSet
                ? (o.validatorSet = d.ValidatorSet.fromPartial(e.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
        };
        const x = { blockSize: a.default.ZERO, numTxs: a.default.ZERO };
        t.BlockMeta = {
          encode(e, o) {
            return (
              void 0 === o && (o = s.default.Writer.create()),
              void 0 !== e.blockId &&
                t.BlockID.encode(e.blockId, o.uint32(10).fork()).ldelim(),
              e.blockSize.isZero() || o.uint32(16).int64(e.blockSize),
              void 0 !== e.header &&
                t.Header.encode(e.header, o.uint32(26).fork()).ldelim(),
              e.numTxs.isZero() || o.uint32(32).int64(e.numTxs),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, x);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.blockId = t.BlockID.decode(n, n.uint32());
                  break;
                case 2:
                  i.blockSize = n.int64();
                  break;
                case 3:
                  i.header = t.Header.decode(n, n.uint32());
                  break;
                case 4:
                  i.numTxs = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, x);
            return (
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromJSON(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.blockSize && null !== e.blockSize
                ? (o.blockSize = a.default.fromString(e.blockSize))
                : (o.blockSize = a.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = a.default.fromString(e.numTxs))
                : (o.numTxs = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.blockId &&
                (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0),
              void 0 !== e.blockSize &&
                (o.blockSize = (e.blockSize || a.default.ZERO).toString()),
              void 0 !== e.header &&
                (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
              void 0 !== e.numTxs &&
                (o.numTxs = (e.numTxs || a.default.ZERO).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, x);
            return (
              void 0 !== e.blockId && null !== e.blockId
                ? (o.blockId = t.BlockID.fromPartial(e.blockId))
                : (o.blockId = void 0),
              void 0 !== e.blockSize && null !== e.blockSize
                ? (o.blockSize = e.blockSize)
                : (o.blockSize = a.default.ZERO),
              void 0 !== e.header && null !== e.header
                ? (o.header = t.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.numTxs && null !== e.numTxs
                ? (o.numTxs = e.numTxs)
                : (o.numTxs = a.default.ZERO),
              o
            );
          },
        };
        const C = {};
        t.TxProof = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              void 0 !== e.proof &&
                i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, C);
            ((a.rootHash = new Uint8Array()), (a.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.rootHash = o.bytes();
                  break;
                case 2:
                  a.data = o.bytes();
                  break;
                case 3:
                  a.proof = i.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, C);
            return (
              (t.rootHash = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.rootHash &&
                null !== e.rootHash &&
                (t.rootHash = E(e.rootHash)),
              void 0 !== e.data && null !== e.data && (t.data = E(e.data)),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromJSON(e.proof))
                : (t.proof = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.rootHash &&
                (t.rootHash = I(
                  void 0 !== e.rootHash ? e.rootHash : new Uint8Array(),
                )),
              void 0 !== e.data &&
                (t.data = I(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.proof &&
                (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, C);
            return (
              void 0 !== e.rootHash && null !== e.rootHash
                ? (t.rootHash = e.rootHash)
                : (t.rootHash = new Uint8Array()),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (t.proof = i.Proof.fromPartial(e.proof))
                : (t.proof = void 0),
              t
            );
          },
        };
        var A = (() => {
          if ("undefined" !== typeof A) return A;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const P =
          A.atob || ((e) => A.Buffer.from(e, "base64").toString("binary"));
        function E(e) {
          const t = P(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const B =
          A.btoa || ((e) => A.Buffer.from(e, "binary").toString("base64"));
        function I(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return B(t.join(""));
        }
        function U(e) {
          const t = j(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function H(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function J(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : H(l.Timestamp.fromJSON(e));
        }
        function j(e) {
          return a.default.fromNumber(e);
        }
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure());
      }).call(this, o(13));
    },
    3677: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ProofOps =
            t.ProofOp =
            t.DominoOp =
            t.ValueOp =
            t.Proof =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          s = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const i = { total: a.default.ZERO, index: a.default.ZERO };
        t.Proof = {
          encode(e, t = s.default.Writer.create()) {
            (e.total.isZero() || t.uint32(8).int64(e.total),
              e.index.isZero() || t.uint32(16).int64(e.index),
              0 !== e.leafHash.length && t.uint32(26).bytes(e.leafHash));
            for (const o of e.aunts) t.uint32(34).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, i);
            ((a.aunts = []), (a.leafHash = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.total = o.int64();
                  break;
                case 2:
                  a.index = o.int64();
                  break;
                case 3:
                  a.leafHash = o.bytes();
                  break;
                case 4:
                  a.aunts.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, i);
            if (
              ((t.aunts = []),
              (t.leafHash = new Uint8Array()),
              void 0 !== e.total && null !== e.total
                ? (t.total = a.default.fromString(e.total))
                : (t.total = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (t.index = a.default.fromString(e.index))
                : (t.index = a.default.ZERO),
              void 0 !== e.leafHash &&
                null !== e.leafHash &&
                (t.leafHash = h(e.leafHash)),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const o of e.aunts) t.aunts.push(h(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.total &&
                (t.total = (e.total || a.default.ZERO).toString()),
              void 0 !== e.index &&
                (t.index = (e.index || a.default.ZERO).toString()),
              void 0 !== e.leafHash &&
                (t.leafHash = v(
                  void 0 !== e.leafHash ? e.leafHash : new Uint8Array(),
                )),
              e.aunts
                ? (t.aunts = e.aunts.map((e) =>
                    v(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.aunts = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, i);
            if (
              ((t.aunts = []),
              void 0 !== e.total && null !== e.total
                ? (t.total = e.total)
                : (t.total = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = a.default.ZERO),
              void 0 !== e.leafHash && null !== e.leafHash
                ? (t.leafHash = e.leafHash)
                : (t.leafHash = new Uint8Array()),
              void 0 !== e.aunts && null !== e.aunts)
            )
              for (const o of e.aunts) t.aunts.push(o);
            return t;
          },
        };
        const r = {};
        t.ValueOp = {
          encode(e, o = s.default.Writer.create()) {
            return (
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              void 0 !== e.proof &&
                t.Proof.encode(e.proof, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, r);
            i.key = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.key = n.bytes();
                  break;
                case 2:
                  i.proof = t.Proof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, r);
            return (
              (o.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = h(e.key)),
              void 0 !== e.proof && null !== e.proof
                ? (o.proof = t.Proof.fromJSON(e.proof))
                : (o.proof = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = v(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.proof &&
                (o.proof = e.proof ? t.Proof.toJSON(e.proof) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, r);
            return (
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.proof && null !== e.proof
                ? (o.proof = t.Proof.fromPartial(e.proof))
                : (o.proof = void 0),
              o
            );
          },
        };
        const d = { key: "", input: "", output: "" };
        t.DominoOp = {
          encode(e, t = s.default.Writer.create()) {
            return (
              "" !== e.key && t.uint32(10).string(e.key),
              "" !== e.input && t.uint32(18).string(e.input),
              "" !== e.output && t.uint32(26).string(e.output),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, d);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.key = o.string();
                  break;
                case 2:
                  a.input = o.string();
                  break;
                case 3:
                  a.output = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = String(e.key))
                : (t.key = ""),
              void 0 !== e.input && null !== e.input
                ? (t.input = String(e.input))
                : (t.input = ""),
              void 0 !== e.output && null !== e.output
                ? (t.output = String(e.output))
                : (t.output = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key && (t.key = e.key),
              void 0 !== e.input && (t.input = e.input),
              void 0 !== e.output && (t.output = e.output),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = ""),
              void 0 !== e.input && null !== e.input
                ? (t.input = e.input)
                : (t.input = ""),
              void 0 !== e.output && null !== e.output
                ? (t.output = e.output)
                : (t.output = ""),
              t
            );
          },
        };
        const l = { type: "" };
        t.ProofOp = {
          encode(e, t = s.default.Writer.create()) {
            return (
              "" !== e.type && t.uint32(10).string(e.type),
              0 !== e.key.length && t.uint32(18).bytes(e.key),
              0 !== e.data.length && t.uint32(26).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, l);
            ((a.key = new Uint8Array()), (a.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.type = o.string();
                  break;
                case 2:
                  a.key = o.bytes();
                  break;
                case 3:
                  a.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              (t.key = new Uint8Array()),
              (t.data = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (t.type = String(e.type))
                : (t.type = ""),
              void 0 !== e.key && null !== e.key && (t.key = h(e.key)),
              void 0 !== e.data && null !== e.data && (t.data = h(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.type && (t.type = e.type),
              void 0 !== e.key &&
                (t.key = v(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.data &&
                (t.data = v(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.type && null !== e.type
                ? (t.type = e.type)
                : (t.type = ""),
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const u = {};
        t.ProofOps = {
          encode(e, o = s.default.Writer.create()) {
            for (const n of e.ops)
              t.ProofOp.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, u);
            i.ops = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.ops.push(t.ProofOp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, u);
            if (((o.ops = []), void 0 !== e.ops && null !== e.ops))
              for (const n of e.ops) o.ops.push(t.ProofOp.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.ops
                ? (o.ops = e.ops.map((e) => (e ? t.ProofOp.toJSON(e) : void 0)))
                : (o.ops = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, u);
            if (((o.ops = []), void 0 !== e.ops && null !== e.ops))
              for (const n of e.ops) o.ops.push(t.ProofOp.fromPartial(n));
            return o;
          },
        };
        var c = (() => {
          if ("undefined" !== typeof c) return c;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const p =
          c.atob || ((e) => c.Buffer.from(e, "base64").toString("binary"));
        function h(e) {
          const t = p(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const f =
          c.btoa || ((e) => c.Buffer.from(e, "binary").toString("base64"));
        function v(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return f(t.join(""));
        }
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure());
      }).call(this, o(13));
    },
    3678: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Consensus = t.App = t.protobufPackage = void 0));
      const a = n(o(2754)),
        s = n(o(2755));
      t.protobufPackage = "tendermint.version";
      const i = { protocol: a.default.UZERO, software: "" };
      t.App = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.protocol.isZero() || t.uint32(8).uint64(e.protocol),
            "" !== e.software && t.uint32(18).string(e.software),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, i);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.protocol = o.uint64();
                break;
              case 2:
                a.software = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (t.protocol = a.default.fromString(e.protocol))
              : (t.protocol = a.default.UZERO),
            void 0 !== e.software && null !== e.software
              ? (t.software = String(e.software))
              : (t.software = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.protocol &&
              (t.protocol = (e.protocol || a.default.UZERO).toString()),
            void 0 !== e.software && (t.software = e.software),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, i);
          return (
            void 0 !== e.protocol && null !== e.protocol
              ? (t.protocol = e.protocol)
              : (t.protocol = a.default.UZERO),
            void 0 !== e.software && null !== e.software
              ? (t.software = e.software)
              : (t.software = ""),
            t
          );
        },
      };
      const r = { block: a.default.UZERO, app: a.default.UZERO };
      ((t.Consensus = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.block.isZero() || t.uint32(8).uint64(e.block),
            e.app.isZero() || t.uint32(16).uint64(e.app),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, r);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.block = o.uint64();
                break;
              case 2:
                a.app = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = a.default.fromString(e.block))
              : (t.block = a.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = a.default.fromString(e.app))
              : (t.app = a.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.block &&
              (t.block = (e.block || a.default.UZERO).toString()),
            void 0 !== e.app && (t.app = (e.app || a.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, r);
          return (
            void 0 !== e.block && null !== e.block
              ? (t.block = e.block)
              : (t.block = a.default.UZERO),
            void 0 !== e.app && null !== e.app
              ? (t.app = e.app)
              : (t.app = a.default.UZERO),
            t
          );
        },
      }),
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure()));
    },
    3679: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SimpleValidator =
            t.Validator =
            t.ValidatorSet =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          s = n(o(2755)),
          i = o(3680);
        t.protobufPackage = "tendermint.types";
        const r = { totalVotingPower: a.default.ZERO };
        t.ValidatorSet = {
          encode(e, o) {
            void 0 === o && (o = s.default.Writer.create());
            for (const n of e.validators)
              t.Validator.encode(n, o.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.proposer &&
                t.Validator.encode(e.proposer, o.uint32(18).fork()).ldelim(),
              e.totalVotingPower.isZero() ||
                o.uint32(24).int64(e.totalVotingPower),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const i = Object.assign({}, r);
            i.validators = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  i.validators.push(t.Validator.decode(n, n.uint32()));
                  break;
                case 2:
                  i.proposer = t.Validator.decode(n, n.uint32());
                  break;
                case 3:
                  i.totalVotingPower = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return i;
          },
          fromJSON(e) {
            const o = Object.assign({}, r);
            if (
              ((o.validators = []),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.Validator.fromJSON(n));
            return (
              void 0 !== e.proposer && null !== e.proposer
                ? (o.proposer = t.Validator.fromJSON(e.proposer))
                : (o.proposer = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = a.default.fromString(
                    e.totalVotingPower,
                  ))
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              e.validators
                ? (o.validators = e.validators.map((e) =>
                    e ? t.Validator.toJSON(e) : void 0,
                  ))
                : (o.validators = []),
              void 0 !== e.proposer &&
                (o.proposer = e.proposer
                  ? t.Validator.toJSON(e.proposer)
                  : void 0),
              void 0 !== e.totalVotingPower &&
                (o.totalVotingPower = (
                  e.totalVotingPower || a.default.ZERO
                ).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, r);
            if (
              ((o.validators = []),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.Validator.fromPartial(n));
            return (
              void 0 !== e.proposer && null !== e.proposer
                ? (o.proposer = t.Validator.fromPartial(e.proposer))
                : (o.proposer = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = e.totalVotingPower)
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
        };
        const d = {
          votingPower: a.default.ZERO,
          proposerPriority: a.default.ZERO,
        };
        t.Validator = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              0 !== e.address.length && t.uint32(10).bytes(e.address),
              void 0 !== e.pubKey &&
                i.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
              e.votingPower.isZero() || t.uint32(24).int64(e.votingPower),
              e.proposerPriority.isZero() ||
                t.uint32(32).int64(e.proposerPriority),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, d);
            a.address = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.address = o.bytes();
                  break;
                case 2:
                  a.pubKey = i.PublicKey.decode(o, o.uint32());
                  break;
                case 3:
                  a.votingPower = o.int64();
                  break;
                case 4:
                  a.proposerPriority = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            return (
              (t.address = new Uint8Array()),
              void 0 !== e.address &&
                null !== e.address &&
                (t.address = p(e.address)),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = a.default.fromString(e.votingPower))
                : (t.votingPower = a.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (t.proposerPriority = a.default.fromString(
                    e.proposerPriority,
                  ))
                : (t.proposerPriority = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.address &&
                (t.address = f(
                  void 0 !== e.address ? e.address : new Uint8Array(),
                )),
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || a.default.ZERO).toString()),
              void 0 !== e.proposerPriority &&
                (t.proposerPriority = (
                  e.proposerPriority || a.default.ZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
            return (
              void 0 !== e.address && null !== e.address
                ? (t.address = e.address)
                : (t.address = new Uint8Array()),
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = e.votingPower)
                : (t.votingPower = a.default.ZERO),
              void 0 !== e.proposerPriority && null !== e.proposerPriority
                ? (t.proposerPriority = e.proposerPriority)
                : (t.proposerPriority = a.default.ZERO),
              t
            );
          },
        };
        const l = { votingPower: a.default.ZERO };
        t.SimpleValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              void 0 !== e.pubKey &&
                i.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
              e.votingPower.isZero() || t.uint32(16).int64(e.votingPower),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, l);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.pubKey = i.PublicKey.decode(o, o.uint32());
                  break;
                case 2:
                  a.votingPower = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = a.default.fromString(e.votingPower))
                : (t.votingPower = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.votingPower &&
                (t.votingPower = (e.votingPower || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, l);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = i.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.votingPower && null !== e.votingPower
                ? (t.votingPower = e.votingPower)
                : (t.votingPower = a.default.ZERO),
              t
            );
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const c =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function p(e) {
          const t = c(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const h =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function f(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return h(t.join(""));
        }
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure());
      }).call(this, o(13));
    },
    3680: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PublicKey = t.protobufPackage = void 0));
        const a = n(o(2754)),
          s = n(o(2755));
        t.protobufPackage = "tendermint.crypto";
        const i = {};
        t.PublicKey = {
          encode(e, t = s.default.Writer.create()) {
            return (
              void 0 !== e.ed25519 && t.uint32(10).bytes(e.ed25519),
              void 0 !== e.secp256k1 && t.uint32(18).bytes(e.secp256k1),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, i);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.ed25519 = o.bytes();
                  break;
                case 2:
                  a.secp256k1 = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, i);
            return (
              void 0 !== e.ed25519 &&
                null !== e.ed25519 &&
                (t.ed25519 = l(e.ed25519)),
              void 0 !== e.secp256k1 &&
                null !== e.secp256k1 &&
                (t.secp256k1 = l(e.secp256k1)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.ed25519 &&
                (t.ed25519 = void 0 !== e.ed25519 ? c(e.ed25519) : void 0),
              void 0 !== e.secp256k1 &&
                (t.secp256k1 =
                  void 0 !== e.secp256k1 ? c(e.secp256k1) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, i);
            return (
              void 0 !== e.ed25519 && null !== e.ed25519
                ? (t.ed25519 = e.ed25519)
                : (t.ed25519 = void 0),
              void 0 !== e.secp256k1 && null !== e.secp256k1
                ? (t.secp256k1 = e.secp256k1)
                : (t.secp256k1 = void 0),
              t
            );
          },
        };
        var r = (() => {
          if ("undefined" !== typeof r) return r;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          r.atob || ((e) => r.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = d(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const u =
          r.btoa || ((e) => r.Buffer.from(e, "binary").toString("base64"));
        function c(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return u(t.join(""));
        }
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure());
      }).call(this, o(13));
    },
    5138: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.ABCIApplicationApplySnapshotChunkDesc =
            t.ABCIApplicationLoadSnapshotChunkDesc =
            t.ABCIApplicationOfferSnapshotDesc =
            t.ABCIApplicationListSnapshotsDesc =
            t.ABCIApplicationEndBlockDesc =
            t.ABCIApplicationBeginBlockDesc =
            t.ABCIApplicationInitChainDesc =
            t.ABCIApplicationCommitDesc =
            t.ABCIApplicationQueryDesc =
            t.ABCIApplicationCheckTxDesc =
            t.ABCIApplicationDeliverTxDesc =
            t.ABCIApplicationSetOptionDesc =
            t.ABCIApplicationInfoDesc =
            t.ABCIApplicationFlushDesc =
            t.ABCIApplicationEchoDesc =
            t.ABCIApplicationDesc =
            t.ABCIApplicationClientImpl =
            t.Snapshot =
            t.Evidence =
            t.VoteInfo =
            t.ValidatorUpdate =
            t.Validator =
            t.TxResult =
            t.EventAttribute =
            t.Event =
            t.LastCommitInfo =
            t.BlockParams =
            t.ConsensusParams =
            t.ResponseApplySnapshotChunk =
            t.ResponseLoadSnapshotChunk =
            t.ResponseOfferSnapshot =
            t.ResponseListSnapshots =
            t.ResponseCommit =
            t.ResponseEndBlock =
            t.ResponseDeliverTx =
            t.ResponseCheckTx =
            t.ResponseBeginBlock =
            t.ResponseQuery =
            t.ResponseInitChain =
            t.ResponseSetOption =
            t.ResponseInfo =
            t.ResponseFlush =
            t.ResponseEcho =
            t.ResponseException =
            t.Response =
            t.RequestApplySnapshotChunk =
            t.RequestLoadSnapshotChunk =
            t.RequestOfferSnapshot =
            t.RequestListSnapshots =
            t.RequestCommit =
            t.RequestEndBlock =
            t.RequestDeliverTx =
            t.RequestCheckTx =
            t.RequestBeginBlock =
            t.RequestQuery =
            t.RequestInitChain =
            t.RequestSetOption =
            t.RequestInfo =
            t.RequestFlush =
            t.RequestEcho =
            t.Request =
            t.responseApplySnapshotChunk_ResultToJSON =
            t.responseApplySnapshotChunk_ResultFromJSON =
            t.ResponseApplySnapshotChunk_Result =
            t.responseOfferSnapshot_ResultToJSON =
            t.responseOfferSnapshot_ResultFromJSON =
            t.ResponseOfferSnapshot_Result =
            t.evidenceTypeToJSON =
            t.evidenceTypeFromJSON =
            t.EvidenceType =
            t.checkTxTypeToJSON =
            t.checkTxTypeFromJSON =
            t.CheckTxType =
            t.protobufPackage =
              void 0));
        const a = n(o(2754)),
          s = o(2889),
          i = n(o(2755)),
          r = o(3429),
          d = o(3677),
          l = o(5139),
          u = o(3680),
          c = o(2890),
          p = o(2993);
        var h, f, v, m;
        function g(e) {
          switch (e) {
            case 0:
            case "NEW":
              return h.NEW;
            case 1:
            case "RECHECK":
              return h.RECHECK;
            case -1:
            case "UNRECOGNIZED":
            default:
              return h.UNRECOGNIZED;
          }
        }
        function k(e) {
          switch (e) {
            case h.NEW:
              return "NEW";
            case h.RECHECK:
              return "RECHECK";
            default:
              return "UNKNOWN";
          }
        }
        function b(e) {
          switch (e) {
            case 0:
            case "UNKNOWN":
              return f.UNKNOWN;
            case 1:
            case "DUPLICATE_VOTE":
              return f.DUPLICATE_VOTE;
            case 2:
            case "LIGHT_CLIENT_ATTACK":
              return f.LIGHT_CLIENT_ATTACK;
            case -1:
            case "UNRECOGNIZED":
            default:
              return f.UNRECOGNIZED;
          }
        }
        function y(e) {
          switch (e) {
            case f.UNKNOWN:
              return "UNKNOWN";
            case f.DUPLICATE_VOTE:
              return "DUPLICATE_VOTE";
            case f.LIGHT_CLIENT_ATTACK:
              return "LIGHT_CLIENT_ATTACK";
            default:
              return "UNKNOWN";
          }
        }
        function O(e) {
          switch (e) {
            case 0:
            case "UNKNOWN":
              return v.UNKNOWN;
            case 1:
            case "ACCEPT":
              return v.ACCEPT;
            case 2:
            case "ABORT":
              return v.ABORT;
            case 3:
            case "REJECT":
              return v.REJECT;
            case 4:
            case "REJECT_FORMAT":
              return v.REJECT_FORMAT;
            case 5:
            case "REJECT_SENDER":
              return v.REJECT_SENDER;
            case -1:
            case "UNRECOGNIZED":
            default:
              return v.UNRECOGNIZED;
          }
        }
        function S(e) {
          switch (e) {
            case v.UNKNOWN:
              return "UNKNOWN";
            case v.ACCEPT:
              return "ACCEPT";
            case v.ABORT:
              return "ABORT";
            case v.REJECT:
              return "REJECT";
            case v.REJECT_FORMAT:
              return "REJECT_FORMAT";
            case v.REJECT_SENDER:
              return "REJECT_SENDER";
            default:
              return "UNKNOWN";
          }
        }
        function R(e) {
          switch (e) {
            case 0:
            case "UNKNOWN":
              return m.UNKNOWN;
            case 1:
            case "ACCEPT":
              return m.ACCEPT;
            case 2:
            case "ABORT":
              return m.ABORT;
            case 3:
            case "RETRY":
              return m.RETRY;
            case 4:
            case "RETRY_SNAPSHOT":
              return m.RETRY_SNAPSHOT;
            case 5:
            case "REJECT_SNAPSHOT":
              return m.REJECT_SNAPSHOT;
            case -1:
            case "UNRECOGNIZED":
            default:
              return m.UNRECOGNIZED;
          }
        }
        function w(e) {
          switch (e) {
            case m.UNKNOWN:
              return "UNKNOWN";
            case m.ACCEPT:
              return "ACCEPT";
            case m.ABORT:
              return "ABORT";
            case m.RETRY:
              return "RETRY";
            case m.RETRY_SNAPSHOT:
              return "RETRY_SNAPSHOT";
            case m.REJECT_SNAPSHOT:
              return "REJECT_SNAPSHOT";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "tendermint.abci"),
          (function (e) {
            ((e[(e["NEW"] = 0)] = "NEW"),
              (e[(e["RECHECK"] = 1)] = "RECHECK"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((h = t.CheckTxType || (t.CheckTxType = {}))),
          (t.checkTxTypeFromJSON = g),
          (t.checkTxTypeToJSON = k),
          (function (e) {
            ((e[(e["UNKNOWN"] = 0)] = "UNKNOWN"),
              (e[(e["DUPLICATE_VOTE"] = 1)] = "DUPLICATE_VOTE"),
              (e[(e["LIGHT_CLIENT_ATTACK"] = 2)] = "LIGHT_CLIENT_ATTACK"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((f = t.EvidenceType || (t.EvidenceType = {}))),
          (t.evidenceTypeFromJSON = b),
          (t.evidenceTypeToJSON = y),
          (function (e) {
            ((e[(e["UNKNOWN"] = 0)] = "UNKNOWN"),
              (e[(e["ACCEPT"] = 1)] = "ACCEPT"),
              (e[(e["ABORT"] = 2)] = "ABORT"),
              (e[(e["REJECT"] = 3)] = "REJECT"),
              (e[(e["REJECT_FORMAT"] = 4)] = "REJECT_FORMAT"),
              (e[(e["REJECT_SENDER"] = 5)] = "REJECT_SENDER"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })(
            (v =
              t.ResponseOfferSnapshot_Result ||
              (t.ResponseOfferSnapshot_Result = {})),
          ),
          (t.responseOfferSnapshot_ResultFromJSON = O),
          (t.responseOfferSnapshot_ResultToJSON = S),
          (function (e) {
            ((e[(e["UNKNOWN"] = 0)] = "UNKNOWN"),
              (e[(e["ACCEPT"] = 1)] = "ACCEPT"),
              (e[(e["ABORT"] = 2)] = "ABORT"),
              (e[(e["RETRY"] = 3)] = "RETRY"),
              (e[(e["RETRY_SNAPSHOT"] = 4)] = "RETRY_SNAPSHOT"),
              (e[(e["REJECT_SNAPSHOT"] = 5)] = "REJECT_SNAPSHOT"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })(
            (m =
              t.ResponseApplySnapshotChunk_Result ||
              (t.ResponseApplySnapshotChunk_Result = {})),
          ),
          (t.responseApplySnapshotChunk_ResultFromJSON = R),
          (t.responseApplySnapshotChunk_ResultToJSON = w));
        const N = {};
        t.Request = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.echo &&
                t.RequestEcho.encode(e.echo, o.uint32(10).fork()).ldelim(),
              void 0 !== e.flush &&
                t.RequestFlush.encode(e.flush, o.uint32(18).fork()).ldelim(),
              void 0 !== e.info &&
                t.RequestInfo.encode(e.info, o.uint32(26).fork()).ldelim(),
              void 0 !== e.setOption &&
                t.RequestSetOption.encode(
                  e.setOption,
                  o.uint32(34).fork(),
                ).ldelim(),
              void 0 !== e.initChain &&
                t.RequestInitChain.encode(
                  e.initChain,
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.query &&
                t.RequestQuery.encode(e.query, o.uint32(50).fork()).ldelim(),
              void 0 !== e.beginBlock &&
                t.RequestBeginBlock.encode(
                  e.beginBlock,
                  o.uint32(58).fork(),
                ).ldelim(),
              void 0 !== e.checkTx &&
                t.RequestCheckTx.encode(
                  e.checkTx,
                  o.uint32(66).fork(),
                ).ldelim(),
              void 0 !== e.deliverTx &&
                t.RequestDeliverTx.encode(
                  e.deliverTx,
                  o.uint32(74).fork(),
                ).ldelim(),
              void 0 !== e.endBlock &&
                t.RequestEndBlock.encode(
                  e.endBlock,
                  o.uint32(82).fork(),
                ).ldelim(),
              void 0 !== e.commit &&
                t.RequestCommit.encode(e.commit, o.uint32(90).fork()).ldelim(),
              void 0 !== e.listSnapshots &&
                t.RequestListSnapshots.encode(
                  e.listSnapshots,
                  o.uint32(98).fork(),
                ).ldelim(),
              void 0 !== e.offerSnapshot &&
                t.RequestOfferSnapshot.encode(
                  e.offerSnapshot,
                  o.uint32(106).fork(),
                ).ldelim(),
              void 0 !== e.loadSnapshotChunk &&
                t.RequestLoadSnapshotChunk.encode(
                  e.loadSnapshotChunk,
                  o.uint32(114).fork(),
                ).ldelim(),
              void 0 !== e.applySnapshotChunk &&
                t.RequestApplySnapshotChunk.encode(
                  e.applySnapshotChunk,
                  o.uint32(122).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, N);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.echo = t.RequestEcho.decode(n, n.uint32());
                  break;
                case 2:
                  s.flush = t.RequestFlush.decode(n, n.uint32());
                  break;
                case 3:
                  s.info = t.RequestInfo.decode(n, n.uint32());
                  break;
                case 4:
                  s.setOption = t.RequestSetOption.decode(n, n.uint32());
                  break;
                case 5:
                  s.initChain = t.RequestInitChain.decode(n, n.uint32());
                  break;
                case 6:
                  s.query = t.RequestQuery.decode(n, n.uint32());
                  break;
                case 7:
                  s.beginBlock = t.RequestBeginBlock.decode(n, n.uint32());
                  break;
                case 8:
                  s.checkTx = t.RequestCheckTx.decode(n, n.uint32());
                  break;
                case 9:
                  s.deliverTx = t.RequestDeliverTx.decode(n, n.uint32());
                  break;
                case 10:
                  s.endBlock = t.RequestEndBlock.decode(n, n.uint32());
                  break;
                case 11:
                  s.commit = t.RequestCommit.decode(n, n.uint32());
                  break;
                case 12:
                  s.listSnapshots = t.RequestListSnapshots.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 13:
                  s.offerSnapshot = t.RequestOfferSnapshot.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 14:
                  s.loadSnapshotChunk = t.RequestLoadSnapshotChunk.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 15:
                  s.applySnapshotChunk = t.RequestApplySnapshotChunk.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, N);
            return (
              void 0 !== e.echo && null !== e.echo
                ? (o.echo = t.RequestEcho.fromJSON(e.echo))
                : (o.echo = void 0),
              void 0 !== e.flush && null !== e.flush
                ? (o.flush = t.RequestFlush.fromJSON(e.flush))
                : (o.flush = void 0),
              void 0 !== e.info && null !== e.info
                ? (o.info = t.RequestInfo.fromJSON(e.info))
                : (o.info = void 0),
              void 0 !== e.setOption && null !== e.setOption
                ? (o.setOption = t.RequestSetOption.fromJSON(e.setOption))
                : (o.setOption = void 0),
              void 0 !== e.initChain && null !== e.initChain
                ? (o.initChain = t.RequestInitChain.fromJSON(e.initChain))
                : (o.initChain = void 0),
              void 0 !== e.query && null !== e.query
                ? (o.query = t.RequestQuery.fromJSON(e.query))
                : (o.query = void 0),
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? (o.beginBlock = t.RequestBeginBlock.fromJSON(e.beginBlock))
                : (o.beginBlock = void 0),
              void 0 !== e.checkTx && null !== e.checkTx
                ? (o.checkTx = t.RequestCheckTx.fromJSON(e.checkTx))
                : (o.checkTx = void 0),
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? (o.deliverTx = t.RequestDeliverTx.fromJSON(e.deliverTx))
                : (o.deliverTx = void 0),
              void 0 !== e.endBlock && null !== e.endBlock
                ? (o.endBlock = t.RequestEndBlock.fromJSON(e.endBlock))
                : (o.endBlock = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.RequestCommit.fromJSON(e.commit))
                : (o.commit = void 0),
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? (o.listSnapshots = t.RequestListSnapshots.fromJSON(
                    e.listSnapshots,
                  ))
                : (o.listSnapshots = void 0),
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? (o.offerSnapshot = t.RequestOfferSnapshot.fromJSON(
                    e.offerSnapshot,
                  ))
                : (o.offerSnapshot = void 0),
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? (o.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromJSON(
                    e.loadSnapshotChunk,
                  ))
                : (o.loadSnapshotChunk = void 0),
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? (o.applySnapshotChunk = t.RequestApplySnapshotChunk.fromJSON(
                    e.applySnapshotChunk,
                  ))
                : (o.applySnapshotChunk = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.echo &&
                (o.echo = e.echo ? t.RequestEcho.toJSON(e.echo) : void 0),
              void 0 !== e.flush &&
                (o.flush = e.flush ? t.RequestFlush.toJSON(e.flush) : void 0),
              void 0 !== e.info &&
                (o.info = e.info ? t.RequestInfo.toJSON(e.info) : void 0),
              void 0 !== e.setOption &&
                (o.setOption = e.setOption
                  ? t.RequestSetOption.toJSON(e.setOption)
                  : void 0),
              void 0 !== e.initChain &&
                (o.initChain = e.initChain
                  ? t.RequestInitChain.toJSON(e.initChain)
                  : void 0),
              void 0 !== e.query &&
                (o.query = e.query ? t.RequestQuery.toJSON(e.query) : void 0),
              void 0 !== e.beginBlock &&
                (o.beginBlock = e.beginBlock
                  ? t.RequestBeginBlock.toJSON(e.beginBlock)
                  : void 0),
              void 0 !== e.checkTx &&
                (o.checkTx = e.checkTx
                  ? t.RequestCheckTx.toJSON(e.checkTx)
                  : void 0),
              void 0 !== e.deliverTx &&
                (o.deliverTx = e.deliverTx
                  ? t.RequestDeliverTx.toJSON(e.deliverTx)
                  : void 0),
              void 0 !== e.endBlock &&
                (o.endBlock = e.endBlock
                  ? t.RequestEndBlock.toJSON(e.endBlock)
                  : void 0),
              void 0 !== e.commit &&
                (o.commit = e.commit
                  ? t.RequestCommit.toJSON(e.commit)
                  : void 0),
              void 0 !== e.listSnapshots &&
                (o.listSnapshots = e.listSnapshots
                  ? t.RequestListSnapshots.toJSON(e.listSnapshots)
                  : void 0),
              void 0 !== e.offerSnapshot &&
                (o.offerSnapshot = e.offerSnapshot
                  ? t.RequestOfferSnapshot.toJSON(e.offerSnapshot)
                  : void 0),
              void 0 !== e.loadSnapshotChunk &&
                (o.loadSnapshotChunk = e.loadSnapshotChunk
                  ? t.RequestLoadSnapshotChunk.toJSON(e.loadSnapshotChunk)
                  : void 0),
              void 0 !== e.applySnapshotChunk &&
                (o.applySnapshotChunk = e.applySnapshotChunk
                  ? t.RequestApplySnapshotChunk.toJSON(e.applySnapshotChunk)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, N);
            return (
              void 0 !== e.echo && null !== e.echo
                ? (o.echo = t.RequestEcho.fromPartial(e.echo))
                : (o.echo = void 0),
              void 0 !== e.flush && null !== e.flush
                ? (o.flush = t.RequestFlush.fromPartial(e.flush))
                : (o.flush = void 0),
              void 0 !== e.info && null !== e.info
                ? (o.info = t.RequestInfo.fromPartial(e.info))
                : (o.info = void 0),
              void 0 !== e.setOption && null !== e.setOption
                ? (o.setOption = t.RequestSetOption.fromPartial(e.setOption))
                : (o.setOption = void 0),
              void 0 !== e.initChain && null !== e.initChain
                ? (o.initChain = t.RequestInitChain.fromPartial(e.initChain))
                : (o.initChain = void 0),
              void 0 !== e.query && null !== e.query
                ? (o.query = t.RequestQuery.fromPartial(e.query))
                : (o.query = void 0),
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? (o.beginBlock = t.RequestBeginBlock.fromPartial(e.beginBlock))
                : (o.beginBlock = void 0),
              void 0 !== e.checkTx && null !== e.checkTx
                ? (o.checkTx = t.RequestCheckTx.fromPartial(e.checkTx))
                : (o.checkTx = void 0),
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? (o.deliverTx = t.RequestDeliverTx.fromPartial(e.deliverTx))
                : (o.deliverTx = void 0),
              void 0 !== e.endBlock && null !== e.endBlock
                ? (o.endBlock = t.RequestEndBlock.fromPartial(e.endBlock))
                : (o.endBlock = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.RequestCommit.fromPartial(e.commit))
                : (o.commit = void 0),
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? (o.listSnapshots = t.RequestListSnapshots.fromPartial(
                    e.listSnapshots,
                  ))
                : (o.listSnapshots = void 0),
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? (o.offerSnapshot = t.RequestOfferSnapshot.fromPartial(
                    e.offerSnapshot,
                  ))
                : (o.offerSnapshot = void 0),
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? (o.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromPartial(
                    e.loadSnapshotChunk,
                  ))
                : (o.loadSnapshotChunk = void 0),
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? (o.applySnapshotChunk =
                    t.RequestApplySnapshotChunk.fromPartial(
                      e.applySnapshotChunk,
                    ))
                : (o.applySnapshotChunk = void 0),
              o
            );
          },
        };
        const T = { message: "" };
        t.RequestEcho = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.message && t.uint32(10).string(e.message),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, T);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.message = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, T);
            return (
              void 0 !== e.message && null !== e.message
                ? (t.message = String(e.message))
                : (t.message = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.message && (t.message = e.message), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, T);
            return (
              void 0 !== e.message && null !== e.message
                ? (t.message = e.message)
                : (t.message = ""),
              t
            );
          },
        };
        const x = {};
        t.RequestFlush = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, x);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, x);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, x);
            return t;
          },
        };
        const C = {
          version: "",
          blockVersion: a.default.UZERO,
          p2pVersion: a.default.UZERO,
        };
        t.RequestInfo = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.version && t.uint32(10).string(e.version),
              e.blockVersion.isZero() || t.uint32(16).uint64(e.blockVersion),
              e.p2pVersion.isZero() || t.uint32(24).uint64(e.p2pVersion),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, C);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.version = o.string();
                  break;
                case 2:
                  a.blockVersion = o.uint64();
                  break;
                case 3:
                  a.p2pVersion = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, C);
            return (
              void 0 !== e.version && null !== e.version
                ? (t.version = String(e.version))
                : (t.version = ""),
              void 0 !== e.blockVersion && null !== e.blockVersion
                ? (t.blockVersion = a.default.fromString(e.blockVersion))
                : (t.blockVersion = a.default.UZERO),
              void 0 !== e.p2pVersion && null !== e.p2pVersion
                ? (t.p2pVersion = a.default.fromString(e.p2pVersion))
                : (t.p2pVersion = a.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.version && (t.version = e.version),
              void 0 !== e.blockVersion &&
                (t.blockVersion = (
                  e.blockVersion || a.default.UZERO
                ).toString()),
              void 0 !== e.p2pVersion &&
                (t.p2pVersion = (e.p2pVersion || a.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, C);
            return (
              void 0 !== e.version && null !== e.version
                ? (t.version = e.version)
                : (t.version = ""),
              void 0 !== e.blockVersion && null !== e.blockVersion
                ? (t.blockVersion = e.blockVersion)
                : (t.blockVersion = a.default.UZERO),
              void 0 !== e.p2pVersion && null !== e.p2pVersion
                ? (t.p2pVersion = e.p2pVersion)
                : (t.p2pVersion = a.default.UZERO),
              t
            );
          },
        };
        const A = { key: "", value: "" };
        t.RequestSetOption = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.key && t.uint32(10).string(e.key),
              "" !== e.value && t.uint32(18).string(e.value),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, A);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.key = o.string();
                  break;
                case 2:
                  a.value = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, A);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = String(e.key))
                : (t.key = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = String(e.value))
                : (t.value = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key && (t.key = e.key),
              void 0 !== e.value && (t.value = e.value),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, A);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = ""),
              t
            );
          },
        };
        const P = { chainId: "", initialHeight: a.default.ZERO };
        t.RequestInitChain = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.time &&
                p.Timestamp.encode(ye(e.time), o.uint32(10).fork()).ldelim(),
              "" !== e.chainId && o.uint32(18).string(e.chainId),
              void 0 !== e.consensusParams &&
                t.ConsensusParams.encode(
                  e.consensusParams,
                  o.uint32(26).fork(),
                ).ldelim());
            for (const n of e.validators)
              t.ValidatorUpdate.encode(n, o.uint32(34).fork()).ldelim();
            return (
              0 !== e.appStateBytes.length &&
                o.uint32(42).bytes(e.appStateBytes),
              e.initialHeight.isZero() || o.uint32(48).int64(e.initialHeight),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, P);
            ((s.validators = []), (s.appStateBytes = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.time = Oe(p.Timestamp.decode(n, n.uint32()));
                  break;
                case 2:
                  s.chainId = n.string();
                  break;
                case 3:
                  s.consensusParams = t.ConsensusParams.decode(n, n.uint32());
                  break;
                case 4:
                  s.validators.push(t.ValidatorUpdate.decode(n, n.uint32()));
                  break;
                case 5:
                  s.appStateBytes = n.bytes();
                  break;
                case 6:
                  s.initialHeight = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, P);
            if (
              ((o.validators = []),
              (o.appStateBytes = new Uint8Array()),
              void 0 !== e.time && null !== e.time
                ? (o.time = Se(e.time))
                : (o.time = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = String(e.chainId))
                : (o.chainId = ""),
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? (o.consensusParams = t.ConsensusParams.fromJSON(
                    e.consensusParams,
                  ))
                : (o.consensusParams = void 0),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.ValidatorUpdate.fromJSON(n));
            return (
              void 0 !== e.appStateBytes &&
                null !== e.appStateBytes &&
                (o.appStateBytes = ge(e.appStateBytes)),
              void 0 !== e.initialHeight && null !== e.initialHeight
                ? (o.initialHeight = a.default.fromString(e.initialHeight))
                : (o.initialHeight = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.time && (o.time = e.time.toISOString()),
              void 0 !== e.chainId && (o.chainId = e.chainId),
              void 0 !== e.consensusParams &&
                (o.consensusParams = e.consensusParams
                  ? t.ConsensusParams.toJSON(e.consensusParams)
                  : void 0),
              e.validators
                ? (o.validators = e.validators.map((e) =>
                    e ? t.ValidatorUpdate.toJSON(e) : void 0,
                  ))
                : (o.validators = []),
              void 0 !== e.appStateBytes &&
                (o.appStateBytes = be(
                  void 0 !== e.appStateBytes
                    ? e.appStateBytes
                    : new Uint8Array(),
                )),
              void 0 !== e.initialHeight &&
                (o.initialHeight = (
                  e.initialHeight || a.default.ZERO
                ).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, P);
            if (
              ((o.validators = []),
              void 0 !== e.time && null !== e.time
                ? (o.time = e.time)
                : (o.time = void 0),
              void 0 !== e.chainId && null !== e.chainId
                ? (o.chainId = e.chainId)
                : (o.chainId = ""),
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? (o.consensusParams = t.ConsensusParams.fromPartial(
                    e.consensusParams,
                  ))
                : (o.consensusParams = void 0),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.ValidatorUpdate.fromPartial(n));
            return (
              void 0 !== e.appStateBytes && null !== e.appStateBytes
                ? (o.appStateBytes = e.appStateBytes)
                : (o.appStateBytes = new Uint8Array()),
              void 0 !== e.initialHeight && null !== e.initialHeight
                ? (o.initialHeight = e.initialHeight)
                : (o.initialHeight = a.default.ZERO),
              o
            );
          },
        };
        const E = { path: "", height: a.default.ZERO, prove: !1 };
        t.RequestQuery = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.data.length && t.uint32(10).bytes(e.data),
              "" !== e.path && t.uint32(18).string(e.path),
              e.height.isZero() || t.uint32(24).int64(e.height),
              !0 === e.prove && t.uint32(32).bool(e.prove),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, E);
            a.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.data = o.bytes();
                  break;
                case 2:
                  a.path = o.string();
                  break;
                case 3:
                  a.height = o.int64();
                  break;
                case 4:
                  a.prove = o.bool();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, E);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = ge(e.data)),
              void 0 !== e.path && null !== e.path
                ? (t.path = String(e.path))
                : (t.path = ""),
              void 0 !== e.height && null !== e.height
                ? (t.height = a.default.fromString(e.height))
                : (t.height = a.default.ZERO),
              void 0 !== e.prove && null !== e.prove
                ? (t.prove = Boolean(e.prove))
                : (t.prove = !1),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = be(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.path && (t.path = e.path),
              void 0 !== e.height &&
                (t.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.prove && (t.prove = e.prove),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, E);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.path && null !== e.path
                ? (t.path = e.path)
                : (t.path = ""),
              void 0 !== e.height && null !== e.height
                ? (t.height = e.height)
                : (t.height = a.default.ZERO),
              void 0 !== e.prove && null !== e.prove
                ? (t.prove = e.prove)
                : (t.prove = !1),
              t
            );
          },
        };
        const B = {};
        t.RequestBeginBlock = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.hash.length && o.uint32(10).bytes(e.hash),
              void 0 !== e.header &&
                r.Header.encode(e.header, o.uint32(18).fork()).ldelim(),
              void 0 !== e.lastCommitInfo &&
                t.LastCommitInfo.encode(
                  e.lastCommitInfo,
                  o.uint32(26).fork(),
                ).ldelim());
            for (const n of e.byzantineValidators)
              t.Evidence.encode(n, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, B);
            ((s.byzantineValidators = []), (s.hash = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.hash = n.bytes();
                  break;
                case 2:
                  s.header = r.Header.decode(n, n.uint32());
                  break;
                case 3:
                  s.lastCommitInfo = t.LastCommitInfo.decode(n, n.uint32());
                  break;
                case 4:
                  s.byzantineValidators.push(t.Evidence.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, B);
            if (
              ((o.byzantineValidators = []),
              (o.hash = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash && (o.hash = ge(e.hash)),
              void 0 !== e.header && null !== e.header
                ? (o.header = r.Header.fromJSON(e.header))
                : (o.header = void 0),
              void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo
                ? (o.lastCommitInfo = t.LastCommitInfo.fromJSON(
                    e.lastCommitInfo,
                  ))
                : (o.lastCommitInfo = void 0),
              void 0 !== e.byzantineValidators &&
                null !== e.byzantineValidators)
            )
              for (const n of e.byzantineValidators)
                o.byzantineValidators.push(t.Evidence.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.hash &&
                (o.hash = be(void 0 !== e.hash ? e.hash : new Uint8Array())),
              void 0 !== e.header &&
                (o.header = e.header ? r.Header.toJSON(e.header) : void 0),
              void 0 !== e.lastCommitInfo &&
                (o.lastCommitInfo = e.lastCommitInfo
                  ? t.LastCommitInfo.toJSON(e.lastCommitInfo)
                  : void 0),
              e.byzantineValidators
                ? (o.byzantineValidators = e.byzantineValidators.map((e) =>
                    e ? t.Evidence.toJSON(e) : void 0,
                  ))
                : (o.byzantineValidators = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, B);
            if (
              ((o.byzantineValidators = []),
              void 0 !== e.hash && null !== e.hash
                ? (o.hash = e.hash)
                : (o.hash = new Uint8Array()),
              void 0 !== e.header && null !== e.header
                ? (o.header = r.Header.fromPartial(e.header))
                : (o.header = void 0),
              void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo
                ? (o.lastCommitInfo = t.LastCommitInfo.fromPartial(
                    e.lastCommitInfo,
                  ))
                : (o.lastCommitInfo = void 0),
              void 0 !== e.byzantineValidators &&
                null !== e.byzantineValidators)
            )
              for (const n of e.byzantineValidators)
                o.byzantineValidators.push(t.Evidence.fromPartial(n));
            return o;
          },
        };
        const I = { type: 0 };
        t.RequestCheckTx = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.tx.length && t.uint32(10).bytes(e.tx),
              0 !== e.type && t.uint32(16).int32(e.type),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, I);
            a.tx = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.tx = o.bytes();
                  break;
                case 2:
                  a.type = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, I);
            return (
              (t.tx = new Uint8Array()),
              void 0 !== e.tx && null !== e.tx && (t.tx = ge(e.tx)),
              void 0 !== e.type && null !== e.type
                ? (t.type = g(e.type))
                : (t.type = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.tx &&
                (t.tx = be(void 0 !== e.tx ? e.tx : new Uint8Array())),
              void 0 !== e.type && (t.type = k(e.type)),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, I);
            return (
              void 0 !== e.tx && null !== e.tx
                ? (t.tx = e.tx)
                : (t.tx = new Uint8Array()),
              void 0 !== e.type && null !== e.type
                ? (t.type = e.type)
                : (t.type = 0),
              t
            );
          },
        };
        const U = {};
        t.RequestDeliverTx = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.tx.length && t.uint32(10).bytes(e.tx),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, U);
            a.tx = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.tx = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, U);
            return (
              (t.tx = new Uint8Array()),
              void 0 !== e.tx && null !== e.tx && (t.tx = ge(e.tx)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.tx &&
                (t.tx = be(void 0 !== e.tx ? e.tx : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, U);
            return (
              void 0 !== e.tx && null !== e.tx
                ? (t.tx = e.tx)
                : (t.tx = new Uint8Array()),
              t
            );
          },
        };
        const H = { height: a.default.ZERO };
        t.RequestEndBlock = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.height.isZero() || t.uint32(8).int64(e.height),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, H);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.height = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, H);
            return (
              void 0 !== e.height && null !== e.height
                ? (t.height = a.default.fromString(e.height))
                : (t.height = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.height &&
                (t.height = (e.height || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, H);
            return (
              void 0 !== e.height && null !== e.height
                ? (t.height = e.height)
                : (t.height = a.default.ZERO),
              t
            );
          },
        };
        const J = {};
        t.RequestCommit = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, J);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, J);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, J);
            return t;
          },
        };
        const j = {};
        t.RequestListSnapshots = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, j);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, j);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, j);
            return t;
          },
        };
        const D = {};
        t.RequestOfferSnapshot = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.snapshot &&
                t.Snapshot.encode(e.snapshot, o.uint32(10).fork()).ldelim(),
              0 !== e.appHash.length && o.uint32(18).bytes(e.appHash),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, D);
            s.appHash = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.snapshot = t.Snapshot.decode(n, n.uint32());
                  break;
                case 2:
                  s.appHash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, D);
            return (
              (o.appHash = new Uint8Array()),
              void 0 !== e.snapshot && null !== e.snapshot
                ? (o.snapshot = t.Snapshot.fromJSON(e.snapshot))
                : (o.snapshot = void 0),
              void 0 !== e.appHash &&
                null !== e.appHash &&
                (o.appHash = ge(e.appHash)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.snapshot &&
                (o.snapshot = e.snapshot
                  ? t.Snapshot.toJSON(e.snapshot)
                  : void 0),
              void 0 !== e.appHash &&
                (o.appHash = be(
                  void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, D);
            return (
              void 0 !== e.snapshot && null !== e.snapshot
                ? (o.snapshot = t.Snapshot.fromPartial(e.snapshot))
                : (o.snapshot = void 0),
              void 0 !== e.appHash && null !== e.appHash
                ? (o.appHash = e.appHash)
                : (o.appHash = new Uint8Array()),
              o
            );
          },
        };
        const _ = { height: a.default.UZERO, format: 0, chunk: 0 };
        t.RequestLoadSnapshotChunk = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.height.isZero() || t.uint32(8).uint64(e.height),
              0 !== e.format && t.uint32(16).uint32(e.format),
              0 !== e.chunk && t.uint32(24).uint32(e.chunk),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, _);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.height = o.uint64();
                  break;
                case 2:
                  a.format = o.uint32();
                  break;
                case 3:
                  a.chunk = o.uint32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, _);
            return (
              void 0 !== e.height && null !== e.height
                ? (t.height = a.default.fromString(e.height))
                : (t.height = a.default.UZERO),
              void 0 !== e.format && null !== e.format
                ? (t.format = Number(e.format))
                : (t.format = 0),
              void 0 !== e.chunk && null !== e.chunk
                ? (t.chunk = Number(e.chunk))
                : (t.chunk = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.height &&
                (t.height = (e.height || a.default.UZERO).toString()),
              void 0 !== e.format && (t.format = e.format),
              void 0 !== e.chunk && (t.chunk = e.chunk),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, _);
            return (
              void 0 !== e.height && null !== e.height
                ? (t.height = e.height)
                : (t.height = a.default.UZERO),
              void 0 !== e.format && null !== e.format
                ? (t.format = e.format)
                : (t.format = 0),
              void 0 !== e.chunk && null !== e.chunk
                ? (t.chunk = e.chunk)
                : (t.chunk = 0),
              t
            );
          },
        };
        const Z = { index: 0, sender: "" };
        t.RequestApplySnapshotChunk = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.index && t.uint32(8).uint32(e.index),
              0 !== e.chunk.length && t.uint32(18).bytes(e.chunk),
              "" !== e.sender && t.uint32(26).string(e.sender),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, Z);
            a.chunk = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.index = o.uint32();
                  break;
                case 2:
                  a.chunk = o.bytes();
                  break;
                case 3:
                  a.sender = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, Z);
            return (
              (t.chunk = new Uint8Array()),
              void 0 !== e.index && null !== e.index
                ? (t.index = Number(e.index))
                : (t.index = 0),
              void 0 !== e.chunk && null !== e.chunk && (t.chunk = ge(e.chunk)),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = String(e.sender))
                : (t.sender = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.index && (t.index = e.index),
              void 0 !== e.chunk &&
                (t.chunk = be(void 0 !== e.chunk ? e.chunk : new Uint8Array())),
              void 0 !== e.sender && (t.sender = e.sender),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, Z);
            return (
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = 0),
              void 0 !== e.chunk && null !== e.chunk
                ? (t.chunk = e.chunk)
                : (t.chunk = new Uint8Array()),
              void 0 !== e.sender && null !== e.sender
                ? (t.sender = e.sender)
                : (t.sender = ""),
              t
            );
          },
        };
        const L = {};
        t.Response = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.exception &&
                t.ResponseException.encode(
                  e.exception,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.echo &&
                t.ResponseEcho.encode(e.echo, o.uint32(18).fork()).ldelim(),
              void 0 !== e.flush &&
                t.ResponseFlush.encode(e.flush, o.uint32(26).fork()).ldelim(),
              void 0 !== e.info &&
                t.ResponseInfo.encode(e.info, o.uint32(34).fork()).ldelim(),
              void 0 !== e.setOption &&
                t.ResponseSetOption.encode(
                  e.setOption,
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.initChain &&
                t.ResponseInitChain.encode(
                  e.initChain,
                  o.uint32(50).fork(),
                ).ldelim(),
              void 0 !== e.query &&
                t.ResponseQuery.encode(e.query, o.uint32(58).fork()).ldelim(),
              void 0 !== e.beginBlock &&
                t.ResponseBeginBlock.encode(
                  e.beginBlock,
                  o.uint32(66).fork(),
                ).ldelim(),
              void 0 !== e.checkTx &&
                t.ResponseCheckTx.encode(
                  e.checkTx,
                  o.uint32(74).fork(),
                ).ldelim(),
              void 0 !== e.deliverTx &&
                t.ResponseDeliverTx.encode(
                  e.deliverTx,
                  o.uint32(82).fork(),
                ).ldelim(),
              void 0 !== e.endBlock &&
                t.ResponseEndBlock.encode(
                  e.endBlock,
                  o.uint32(90).fork(),
                ).ldelim(),
              void 0 !== e.commit &&
                t.ResponseCommit.encode(e.commit, o.uint32(98).fork()).ldelim(),
              void 0 !== e.listSnapshots &&
                t.ResponseListSnapshots.encode(
                  e.listSnapshots,
                  o.uint32(106).fork(),
                ).ldelim(),
              void 0 !== e.offerSnapshot &&
                t.ResponseOfferSnapshot.encode(
                  e.offerSnapshot,
                  o.uint32(114).fork(),
                ).ldelim(),
              void 0 !== e.loadSnapshotChunk &&
                t.ResponseLoadSnapshotChunk.encode(
                  e.loadSnapshotChunk,
                  o.uint32(122).fork(),
                ).ldelim(),
              void 0 !== e.applySnapshotChunk &&
                t.ResponseApplySnapshotChunk.encode(
                  e.applySnapshotChunk,
                  o.uint32(130).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, L);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.exception = t.ResponseException.decode(n, n.uint32());
                  break;
                case 2:
                  s.echo = t.ResponseEcho.decode(n, n.uint32());
                  break;
                case 3:
                  s.flush = t.ResponseFlush.decode(n, n.uint32());
                  break;
                case 4:
                  s.info = t.ResponseInfo.decode(n, n.uint32());
                  break;
                case 5:
                  s.setOption = t.ResponseSetOption.decode(n, n.uint32());
                  break;
                case 6:
                  s.initChain = t.ResponseInitChain.decode(n, n.uint32());
                  break;
                case 7:
                  s.query = t.ResponseQuery.decode(n, n.uint32());
                  break;
                case 8:
                  s.beginBlock = t.ResponseBeginBlock.decode(n, n.uint32());
                  break;
                case 9:
                  s.checkTx = t.ResponseCheckTx.decode(n, n.uint32());
                  break;
                case 10:
                  s.deliverTx = t.ResponseDeliverTx.decode(n, n.uint32());
                  break;
                case 11:
                  s.endBlock = t.ResponseEndBlock.decode(n, n.uint32());
                  break;
                case 12:
                  s.commit = t.ResponseCommit.decode(n, n.uint32());
                  break;
                case 13:
                  s.listSnapshots = t.ResponseListSnapshots.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 14:
                  s.offerSnapshot = t.ResponseOfferSnapshot.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 15:
                  s.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 16:
                  s.applySnapshotChunk = t.ResponseApplySnapshotChunk.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, L);
            return (
              void 0 !== e.exception && null !== e.exception
                ? (o.exception = t.ResponseException.fromJSON(e.exception))
                : (o.exception = void 0),
              void 0 !== e.echo && null !== e.echo
                ? (o.echo = t.ResponseEcho.fromJSON(e.echo))
                : (o.echo = void 0),
              void 0 !== e.flush && null !== e.flush
                ? (o.flush = t.ResponseFlush.fromJSON(e.flush))
                : (o.flush = void 0),
              void 0 !== e.info && null !== e.info
                ? (o.info = t.ResponseInfo.fromJSON(e.info))
                : (o.info = void 0),
              void 0 !== e.setOption && null !== e.setOption
                ? (o.setOption = t.ResponseSetOption.fromJSON(e.setOption))
                : (o.setOption = void 0),
              void 0 !== e.initChain && null !== e.initChain
                ? (o.initChain = t.ResponseInitChain.fromJSON(e.initChain))
                : (o.initChain = void 0),
              void 0 !== e.query && null !== e.query
                ? (o.query = t.ResponseQuery.fromJSON(e.query))
                : (o.query = void 0),
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? (o.beginBlock = t.ResponseBeginBlock.fromJSON(e.beginBlock))
                : (o.beginBlock = void 0),
              void 0 !== e.checkTx && null !== e.checkTx
                ? (o.checkTx = t.ResponseCheckTx.fromJSON(e.checkTx))
                : (o.checkTx = void 0),
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? (o.deliverTx = t.ResponseDeliverTx.fromJSON(e.deliverTx))
                : (o.deliverTx = void 0),
              void 0 !== e.endBlock && null !== e.endBlock
                ? (o.endBlock = t.ResponseEndBlock.fromJSON(e.endBlock))
                : (o.endBlock = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.ResponseCommit.fromJSON(e.commit))
                : (o.commit = void 0),
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? (o.listSnapshots = t.ResponseListSnapshots.fromJSON(
                    e.listSnapshots,
                  ))
                : (o.listSnapshots = void 0),
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? (o.offerSnapshot = t.ResponseOfferSnapshot.fromJSON(
                    e.offerSnapshot,
                  ))
                : (o.offerSnapshot = void 0),
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? (o.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.fromJSON(
                    e.loadSnapshotChunk,
                  ))
                : (o.loadSnapshotChunk = void 0),
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? (o.applySnapshotChunk = t.ResponseApplySnapshotChunk.fromJSON(
                    e.applySnapshotChunk,
                  ))
                : (o.applySnapshotChunk = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.exception &&
                (o.exception = e.exception
                  ? t.ResponseException.toJSON(e.exception)
                  : void 0),
              void 0 !== e.echo &&
                (o.echo = e.echo ? t.ResponseEcho.toJSON(e.echo) : void 0),
              void 0 !== e.flush &&
                (o.flush = e.flush ? t.ResponseFlush.toJSON(e.flush) : void 0),
              void 0 !== e.info &&
                (o.info = e.info ? t.ResponseInfo.toJSON(e.info) : void 0),
              void 0 !== e.setOption &&
                (o.setOption = e.setOption
                  ? t.ResponseSetOption.toJSON(e.setOption)
                  : void 0),
              void 0 !== e.initChain &&
                (o.initChain = e.initChain
                  ? t.ResponseInitChain.toJSON(e.initChain)
                  : void 0),
              void 0 !== e.query &&
                (o.query = e.query ? t.ResponseQuery.toJSON(e.query) : void 0),
              void 0 !== e.beginBlock &&
                (o.beginBlock = e.beginBlock
                  ? t.ResponseBeginBlock.toJSON(e.beginBlock)
                  : void 0),
              void 0 !== e.checkTx &&
                (o.checkTx = e.checkTx
                  ? t.ResponseCheckTx.toJSON(e.checkTx)
                  : void 0),
              void 0 !== e.deliverTx &&
                (o.deliverTx = e.deliverTx
                  ? t.ResponseDeliverTx.toJSON(e.deliverTx)
                  : void 0),
              void 0 !== e.endBlock &&
                (o.endBlock = e.endBlock
                  ? t.ResponseEndBlock.toJSON(e.endBlock)
                  : void 0),
              void 0 !== e.commit &&
                (o.commit = e.commit
                  ? t.ResponseCommit.toJSON(e.commit)
                  : void 0),
              void 0 !== e.listSnapshots &&
                (o.listSnapshots = e.listSnapshots
                  ? t.ResponseListSnapshots.toJSON(e.listSnapshots)
                  : void 0),
              void 0 !== e.offerSnapshot &&
                (o.offerSnapshot = e.offerSnapshot
                  ? t.ResponseOfferSnapshot.toJSON(e.offerSnapshot)
                  : void 0),
              void 0 !== e.loadSnapshotChunk &&
                (o.loadSnapshotChunk = e.loadSnapshotChunk
                  ? t.ResponseLoadSnapshotChunk.toJSON(e.loadSnapshotChunk)
                  : void 0),
              void 0 !== e.applySnapshotChunk &&
                (o.applySnapshotChunk = e.applySnapshotChunk
                  ? t.ResponseApplySnapshotChunk.toJSON(e.applySnapshotChunk)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, L);
            return (
              void 0 !== e.exception && null !== e.exception
                ? (o.exception = t.ResponseException.fromPartial(e.exception))
                : (o.exception = void 0),
              void 0 !== e.echo && null !== e.echo
                ? (o.echo = t.ResponseEcho.fromPartial(e.echo))
                : (o.echo = void 0),
              void 0 !== e.flush && null !== e.flush
                ? (o.flush = t.ResponseFlush.fromPartial(e.flush))
                : (o.flush = void 0),
              void 0 !== e.info && null !== e.info
                ? (o.info = t.ResponseInfo.fromPartial(e.info))
                : (o.info = void 0),
              void 0 !== e.setOption && null !== e.setOption
                ? (o.setOption = t.ResponseSetOption.fromPartial(e.setOption))
                : (o.setOption = void 0),
              void 0 !== e.initChain && null !== e.initChain
                ? (o.initChain = t.ResponseInitChain.fromPartial(e.initChain))
                : (o.initChain = void 0),
              void 0 !== e.query && null !== e.query
                ? (o.query = t.ResponseQuery.fromPartial(e.query))
                : (o.query = void 0),
              void 0 !== e.beginBlock && null !== e.beginBlock
                ? (o.beginBlock = t.ResponseBeginBlock.fromPartial(
                    e.beginBlock,
                  ))
                : (o.beginBlock = void 0),
              void 0 !== e.checkTx && null !== e.checkTx
                ? (o.checkTx = t.ResponseCheckTx.fromPartial(e.checkTx))
                : (o.checkTx = void 0),
              void 0 !== e.deliverTx && null !== e.deliverTx
                ? (o.deliverTx = t.ResponseDeliverTx.fromPartial(e.deliverTx))
                : (o.deliverTx = void 0),
              void 0 !== e.endBlock && null !== e.endBlock
                ? (o.endBlock = t.ResponseEndBlock.fromPartial(e.endBlock))
                : (o.endBlock = void 0),
              void 0 !== e.commit && null !== e.commit
                ? (o.commit = t.ResponseCommit.fromPartial(e.commit))
                : (o.commit = void 0),
              void 0 !== e.listSnapshots && null !== e.listSnapshots
                ? (o.listSnapshots = t.ResponseListSnapshots.fromPartial(
                    e.listSnapshots,
                  ))
                : (o.listSnapshots = void 0),
              void 0 !== e.offerSnapshot && null !== e.offerSnapshot
                ? (o.offerSnapshot = t.ResponseOfferSnapshot.fromPartial(
                    e.offerSnapshot,
                  ))
                : (o.offerSnapshot = void 0),
              void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk
                ? (o.loadSnapshotChunk =
                    t.ResponseLoadSnapshotChunk.fromPartial(
                      e.loadSnapshotChunk,
                    ))
                : (o.loadSnapshotChunk = void 0),
              void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk
                ? (o.applySnapshotChunk =
                    t.ResponseApplySnapshotChunk.fromPartial(
                      e.applySnapshotChunk,
                    ))
                : (o.applySnapshotChunk = void 0),
              o
            );
          },
        };
        const V = { error: "" };
        t.ResponseException = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.error && t.uint32(10).string(e.error),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, V);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.error = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, V);
            return (
              void 0 !== e.error && null !== e.error
                ? (t.error = String(e.error))
                : (t.error = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.error && (t.error = e.error), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, V);
            return (
              void 0 !== e.error && null !== e.error
                ? (t.error = e.error)
                : (t.error = ""),
              t
            );
          },
        };
        const q = { message: "" };
        t.ResponseEcho = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.message && t.uint32(10).string(e.message),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, q);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.message = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, q);
            return (
              void 0 !== e.message && null !== e.message
                ? (t.message = String(e.message))
                : (t.message = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.message && (t.message = e.message), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, q);
            return (
              void 0 !== e.message && null !== e.message
                ? (t.message = e.message)
                : (t.message = ""),
              t
            );
          },
        };
        const M = {};
        t.ResponseFlush = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, M);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, M);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, M);
            return t;
          },
        };
        const K = {
          data: "",
          version: "",
          appVersion: a.default.UZERO,
          lastBlockHeight: a.default.ZERO,
        };
        t.ResponseInfo = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.data && t.uint32(10).string(e.data),
              "" !== e.version && t.uint32(18).string(e.version),
              e.appVersion.isZero() || t.uint32(24).uint64(e.appVersion),
              e.lastBlockHeight.isZero() ||
                t.uint32(32).int64(e.lastBlockHeight),
              0 !== e.lastBlockAppHash.length &&
                t.uint32(42).bytes(e.lastBlockAppHash),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, K);
            a.lastBlockAppHash = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.data = o.string();
                  break;
                case 2:
                  a.version = o.string();
                  break;
                case 3:
                  a.appVersion = o.uint64();
                  break;
                case 4:
                  a.lastBlockHeight = o.int64();
                  break;
                case 5:
                  a.lastBlockAppHash = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, K);
            return (
              (t.lastBlockAppHash = new Uint8Array()),
              void 0 !== e.data && null !== e.data
                ? (t.data = String(e.data))
                : (t.data = ""),
              void 0 !== e.version && null !== e.version
                ? (t.version = String(e.version))
                : (t.version = ""),
              void 0 !== e.appVersion && null !== e.appVersion
                ? (t.appVersion = a.default.fromString(e.appVersion))
                : (t.appVersion = a.default.UZERO),
              void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight
                ? (t.lastBlockHeight = a.default.fromString(e.lastBlockHeight))
                : (t.lastBlockHeight = a.default.ZERO),
              void 0 !== e.lastBlockAppHash &&
                null !== e.lastBlockAppHash &&
                (t.lastBlockAppHash = ge(e.lastBlockAppHash)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data && (t.data = e.data),
              void 0 !== e.version && (t.version = e.version),
              void 0 !== e.appVersion &&
                (t.appVersion = (e.appVersion || a.default.UZERO).toString()),
              void 0 !== e.lastBlockHeight &&
                (t.lastBlockHeight = (
                  e.lastBlockHeight || a.default.ZERO
                ).toString()),
              void 0 !== e.lastBlockAppHash &&
                (t.lastBlockAppHash = be(
                  void 0 !== e.lastBlockAppHash
                    ? e.lastBlockAppHash
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, K);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = ""),
              void 0 !== e.version && null !== e.version
                ? (t.version = e.version)
                : (t.version = ""),
              void 0 !== e.appVersion && null !== e.appVersion
                ? (t.appVersion = e.appVersion)
                : (t.appVersion = a.default.UZERO),
              void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight
                ? (t.lastBlockHeight = e.lastBlockHeight)
                : (t.lastBlockHeight = a.default.ZERO),
              void 0 !== e.lastBlockAppHash && null !== e.lastBlockAppHash
                ? (t.lastBlockAppHash = e.lastBlockAppHash)
                : (t.lastBlockAppHash = new Uint8Array()),
              t
            );
          },
        };
        const G = { code: 0, log: "", info: "" };
        t.ResponseSetOption = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.code && t.uint32(8).uint32(e.code),
              "" !== e.log && t.uint32(26).string(e.log),
              "" !== e.info && t.uint32(34).string(e.info),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, G);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.code = o.uint32();
                  break;
                case 3:
                  a.log = o.string();
                  break;
                case 4:
                  a.info = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, G);
            return (
              void 0 !== e.code && null !== e.code
                ? (t.code = Number(e.code))
                : (t.code = 0),
              void 0 !== e.log && null !== e.log
                ? (t.log = String(e.log))
                : (t.log = ""),
              void 0 !== e.info && null !== e.info
                ? (t.info = String(e.info))
                : (t.info = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.code && (t.code = e.code),
              void 0 !== e.log && (t.log = e.log),
              void 0 !== e.info && (t.info = e.info),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, G);
            return (
              void 0 !== e.code && null !== e.code
                ? (t.code = e.code)
                : (t.code = 0),
              void 0 !== e.log && null !== e.log
                ? (t.log = e.log)
                : (t.log = ""),
              void 0 !== e.info && null !== e.info
                ? (t.info = e.info)
                : (t.info = ""),
              t
            );
          },
        };
        const W = {};
        t.ResponseInitChain = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.consensusParams &&
                t.ConsensusParams.encode(
                  e.consensusParams,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const n of e.validators)
              t.ValidatorUpdate.encode(n, o.uint32(18).fork()).ldelim();
            return (0 !== e.appHash.length && o.uint32(26).bytes(e.appHash), o);
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, W);
            ((s.validators = []), (s.appHash = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.consensusParams = t.ConsensusParams.decode(n, n.uint32());
                  break;
                case 2:
                  s.validators.push(t.ValidatorUpdate.decode(n, n.uint32()));
                  break;
                case 3:
                  s.appHash = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, W);
            if (
              ((o.validators = []),
              (o.appHash = new Uint8Array()),
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? (o.consensusParams = t.ConsensusParams.fromJSON(
                    e.consensusParams,
                  ))
                : (o.consensusParams = void 0),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.ValidatorUpdate.fromJSON(n));
            return (
              void 0 !== e.appHash &&
                null !== e.appHash &&
                (o.appHash = ge(e.appHash)),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.consensusParams &&
                (o.consensusParams = e.consensusParams
                  ? t.ConsensusParams.toJSON(e.consensusParams)
                  : void 0),
              e.validators
                ? (o.validators = e.validators.map((e) =>
                    e ? t.ValidatorUpdate.toJSON(e) : void 0,
                  ))
                : (o.validators = []),
              void 0 !== e.appHash &&
                (o.appHash = be(
                  void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, W);
            if (
              ((o.validators = []),
              void 0 !== e.consensusParams && null !== e.consensusParams
                ? (o.consensusParams = t.ConsensusParams.fromPartial(
                    e.consensusParams,
                  ))
                : (o.consensusParams = void 0),
              void 0 !== e.validators && null !== e.validators)
            )
              for (const n of e.validators)
                o.validators.push(t.ValidatorUpdate.fromPartial(n));
            return (
              void 0 !== e.appHash && null !== e.appHash
                ? (o.appHash = e.appHash)
                : (o.appHash = new Uint8Array()),
              o
            );
          },
        };
        const F = {
          code: 0,
          log: "",
          info: "",
          index: a.default.ZERO,
          height: a.default.ZERO,
          codespace: "",
        };
        t.ResponseQuery = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.code && t.uint32(8).uint32(e.code),
              "" !== e.log && t.uint32(26).string(e.log),
              "" !== e.info && t.uint32(34).string(e.info),
              e.index.isZero() || t.uint32(40).int64(e.index),
              0 !== e.key.length && t.uint32(50).bytes(e.key),
              0 !== e.value.length && t.uint32(58).bytes(e.value),
              void 0 !== e.proofOps &&
                d.ProofOps.encode(e.proofOps, t.uint32(66).fork()).ldelim(),
              e.height.isZero() || t.uint32(72).int64(e.height),
              "" !== e.codespace && t.uint32(82).string(e.codespace),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, F);
            ((a.key = new Uint8Array()), (a.value = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.code = o.uint32();
                  break;
                case 3:
                  a.log = o.string();
                  break;
                case 4:
                  a.info = o.string();
                  break;
                case 5:
                  a.index = o.int64();
                  break;
                case 6:
                  a.key = o.bytes();
                  break;
                case 7:
                  a.value = o.bytes();
                  break;
                case 8:
                  a.proofOps = d.ProofOps.decode(o, o.uint32());
                  break;
                case 9:
                  a.height = o.int64();
                  break;
                case 10:
                  a.codespace = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, F);
            return (
              (t.key = new Uint8Array()),
              (t.value = new Uint8Array()),
              void 0 !== e.code && null !== e.code
                ? (t.code = Number(e.code))
                : (t.code = 0),
              void 0 !== e.log && null !== e.log
                ? (t.log = String(e.log))
                : (t.log = ""),
              void 0 !== e.info && null !== e.info
                ? (t.info = String(e.info))
                : (t.info = ""),
              void 0 !== e.index && null !== e.index
                ? (t.index = a.default.fromString(e.index))
                : (t.index = a.default.ZERO),
              void 0 !== e.key && null !== e.key && (t.key = ge(e.key)),
              void 0 !== e.value && null !== e.value && (t.value = ge(e.value)),
              void 0 !== e.proofOps && null !== e.proofOps
                ? (t.proofOps = d.ProofOps.fromJSON(e.proofOps))
                : (t.proofOps = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = a.default.fromString(e.height))
                : (t.height = a.default.ZERO),
              void 0 !== e.codespace && null !== e.codespace
                ? (t.codespace = String(e.codespace))
                : (t.codespace = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.code && (t.code = e.code),
              void 0 !== e.log && (t.log = e.log),
              void 0 !== e.info && (t.info = e.info),
              void 0 !== e.index &&
                (t.index = (e.index || a.default.ZERO).toString()),
              void 0 !== e.key &&
                (t.key = be(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (t.value = be(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.proofOps &&
                (t.proofOps = e.proofOps
                  ? d.ProofOps.toJSON(e.proofOps)
                  : void 0),
              void 0 !== e.height &&
                (t.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.codespace && (t.codespace = e.codespace),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, F);
            return (
              void 0 !== e.code && null !== e.code
                ? (t.code = e.code)
                : (t.code = 0),
              void 0 !== e.log && null !== e.log
                ? (t.log = e.log)
                : (t.log = ""),
              void 0 !== e.info && null !== e.info
                ? (t.info = e.info)
                : (t.info = ""),
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = a.default.ZERO),
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = new Uint8Array()),
              void 0 !== e.proofOps && null !== e.proofOps
                ? (t.proofOps = d.ProofOps.fromPartial(e.proofOps))
                : (t.proofOps = void 0),
              void 0 !== e.height && null !== e.height
                ? (t.height = e.height)
                : (t.height = a.default.ZERO),
              void 0 !== e.codespace && null !== e.codespace
                ? (t.codespace = e.codespace)
                : (t.codespace = ""),
              t
            );
          },
        };
        const z = {};
        t.ResponseBeginBlock = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.events)
              t.Event.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, z);
            s.events = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.events.push(t.Event.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, z);
            if (((o.events = []), void 0 !== e.events && null !== e.events))
              for (const n of e.events) o.events.push(t.Event.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? t.Event.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, z);
            if (((o.events = []), void 0 !== e.events && null !== e.events))
              for (const n of e.events) o.events.push(t.Event.fromPartial(n));
            return o;
          },
        };
        const Y = {
          code: 0,
          log: "",
          info: "",
          gasWanted: a.default.ZERO,
          gasUsed: a.default.ZERO,
          codespace: "",
        };
        t.ResponseCheckTx = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.code && o.uint32(8).uint32(e.code),
              0 !== e.data.length && o.uint32(18).bytes(e.data),
              "" !== e.log && o.uint32(26).string(e.log),
              "" !== e.info && o.uint32(34).string(e.info),
              e.gasWanted.isZero() || o.uint32(40).int64(e.gasWanted),
              e.gasUsed.isZero() || o.uint32(48).int64(e.gasUsed));
            for (const n of e.events)
              t.Event.encode(n, o.uint32(58).fork()).ldelim();
            return ("" !== e.codespace && o.uint32(66).string(e.codespace), o);
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, Y);
            ((s.events = []), (s.data = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.code = n.uint32();
                  break;
                case 2:
                  s.data = n.bytes();
                  break;
                case 3:
                  s.log = n.string();
                  break;
                case 4:
                  s.info = n.string();
                  break;
                case 5:
                  s.gasWanted = n.int64();
                  break;
                case 6:
                  s.gasUsed = n.int64();
                  break;
                case 7:
                  s.events.push(t.Event.decode(n, n.uint32()));
                  break;
                case 8:
                  s.codespace = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, Y);
            if (
              ((o.events = []),
              (o.data = new Uint8Array()),
              void 0 !== e.code && null !== e.code
                ? (o.code = Number(e.code))
                : (o.code = 0),
              void 0 !== e.data && null !== e.data && (o.data = ge(e.data)),
              void 0 !== e.log && null !== e.log
                ? (o.log = String(e.log))
                : (o.log = ""),
              void 0 !== e.info && null !== e.info
                ? (o.info = String(e.info))
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = a.default.fromString(e.gasWanted))
                : (o.gasWanted = a.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = a.default.fromString(e.gasUsed))
                : (o.gasUsed = a.default.ZERO),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromJSON(n));
            return (
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = String(e.codespace))
                : (o.codespace = ""),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.code && (o.code = e.code),
              void 0 !== e.data &&
                (o.data = be(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.log && (o.log = e.log),
              void 0 !== e.info && (o.info = e.info),
              void 0 !== e.gasWanted &&
                (o.gasWanted = (e.gasWanted || a.default.ZERO).toString()),
              void 0 !== e.gasUsed &&
                (o.gasUsed = (e.gasUsed || a.default.ZERO).toString()),
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? t.Event.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              void 0 !== e.codespace && (o.codespace = e.codespace),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, Y);
            if (
              ((o.events = []),
              void 0 !== e.code && null !== e.code
                ? (o.code = e.code)
                : (o.code = 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = e.data)
                : (o.data = new Uint8Array()),
              void 0 !== e.log && null !== e.log
                ? (o.log = e.log)
                : (o.log = ""),
              void 0 !== e.info && null !== e.info
                ? (o.info = e.info)
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = e.gasWanted)
                : (o.gasWanted = a.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = e.gasUsed)
                : (o.gasUsed = a.default.ZERO),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromPartial(n));
            return (
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = e.codespace)
                : (o.codespace = ""),
              o
            );
          },
        };
        const $ = {
          code: 0,
          log: "",
          info: "",
          gasWanted: a.default.ZERO,
          gasUsed: a.default.ZERO,
          codespace: "",
        };
        t.ResponseDeliverTx = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.code && o.uint32(8).uint32(e.code),
              0 !== e.data.length && o.uint32(18).bytes(e.data),
              "" !== e.log && o.uint32(26).string(e.log),
              "" !== e.info && o.uint32(34).string(e.info),
              e.gasWanted.isZero() || o.uint32(40).int64(e.gasWanted),
              e.gasUsed.isZero() || o.uint32(48).int64(e.gasUsed));
            for (const n of e.events)
              t.Event.encode(n, o.uint32(58).fork()).ldelim();
            return ("" !== e.codespace && o.uint32(66).string(e.codespace), o);
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, $);
            ((s.events = []), (s.data = new Uint8Array()));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.code = n.uint32();
                  break;
                case 2:
                  s.data = n.bytes();
                  break;
                case 3:
                  s.log = n.string();
                  break;
                case 4:
                  s.info = n.string();
                  break;
                case 5:
                  s.gasWanted = n.int64();
                  break;
                case 6:
                  s.gasUsed = n.int64();
                  break;
                case 7:
                  s.events.push(t.Event.decode(n, n.uint32()));
                  break;
                case 8:
                  s.codespace = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, $);
            if (
              ((o.events = []),
              (o.data = new Uint8Array()),
              void 0 !== e.code && null !== e.code
                ? (o.code = Number(e.code))
                : (o.code = 0),
              void 0 !== e.data && null !== e.data && (o.data = ge(e.data)),
              void 0 !== e.log && null !== e.log
                ? (o.log = String(e.log))
                : (o.log = ""),
              void 0 !== e.info && null !== e.info
                ? (o.info = String(e.info))
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = a.default.fromString(e.gasWanted))
                : (o.gasWanted = a.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = a.default.fromString(e.gasUsed))
                : (o.gasUsed = a.default.ZERO),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromJSON(n));
            return (
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = String(e.codespace))
                : (o.codespace = ""),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.code && (o.code = e.code),
              void 0 !== e.data &&
                (o.data = be(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.log && (o.log = e.log),
              void 0 !== e.info && (o.info = e.info),
              void 0 !== e.gasWanted &&
                (o.gasWanted = (e.gasWanted || a.default.ZERO).toString()),
              void 0 !== e.gasUsed &&
                (o.gasUsed = (e.gasUsed || a.default.ZERO).toString()),
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? t.Event.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              void 0 !== e.codespace && (o.codespace = e.codespace),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, $);
            if (
              ((o.events = []),
              void 0 !== e.code && null !== e.code
                ? (o.code = e.code)
                : (o.code = 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = e.data)
                : (o.data = new Uint8Array()),
              void 0 !== e.log && null !== e.log
                ? (o.log = e.log)
                : (o.log = ""),
              void 0 !== e.info && null !== e.info
                ? (o.info = e.info)
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = e.gasWanted)
                : (o.gasWanted = a.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = e.gasUsed)
                : (o.gasUsed = a.default.ZERO),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromPartial(n));
            return (
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = e.codespace)
                : (o.codespace = ""),
              o
            );
          },
        };
        const Q = {};
        t.ResponseEndBlock = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.validatorUpdates)
              t.ValidatorUpdate.encode(n, o.uint32(10).fork()).ldelim();
            void 0 !== e.consensusParamUpdates &&
              t.ConsensusParams.encode(
                e.consensusParamUpdates,
                o.uint32(18).fork(),
              ).ldelim();
            for (const n of e.events)
              t.Event.encode(n, o.uint32(26).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, Q);
            ((s.validatorUpdates = []), (s.events = []));
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.validatorUpdates.push(
                    t.ValidatorUpdate.decode(n, n.uint32()),
                  );
                  break;
                case 2:
                  s.consensusParamUpdates = t.ConsensusParams.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                case 3:
                  s.events.push(t.Event.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, Q);
            if (
              ((o.validatorUpdates = []),
              (o.events = []),
              void 0 !== e.validatorUpdates && null !== e.validatorUpdates)
            )
              for (const n of e.validatorUpdates)
                o.validatorUpdates.push(t.ValidatorUpdate.fromJSON(n));
            if (
              (void 0 !== e.consensusParamUpdates &&
              null !== e.consensusParamUpdates
                ? (o.consensusParamUpdates = t.ConsensusParams.fromJSON(
                    e.consensusParamUpdates,
                  ))
                : (o.consensusParamUpdates = void 0),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.validatorUpdates
                ? (o.validatorUpdates = e.validatorUpdates.map((e) =>
                    e ? t.ValidatorUpdate.toJSON(e) : void 0,
                  ))
                : (o.validatorUpdates = []),
              void 0 !== e.consensusParamUpdates &&
                (o.consensusParamUpdates = e.consensusParamUpdates
                  ? t.ConsensusParams.toJSON(e.consensusParamUpdates)
                  : void 0),
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? t.Event.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, Q);
            if (
              ((o.validatorUpdates = []),
              (o.events = []),
              void 0 !== e.validatorUpdates && null !== e.validatorUpdates)
            )
              for (const n of e.validatorUpdates)
                o.validatorUpdates.push(t.ValidatorUpdate.fromPartial(n));
            if (
              (void 0 !== e.consensusParamUpdates &&
              null !== e.consensusParamUpdates
                ? (o.consensusParamUpdates = t.ConsensusParams.fromPartial(
                    e.consensusParamUpdates,
                  ))
                : (o.consensusParamUpdates = void 0),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events) o.events.push(t.Event.fromPartial(n));
            return o;
          },
        };
        const X = { retainHeight: a.default.ZERO };
        t.ResponseCommit = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              e.retainHeight.isZero() || t.uint32(24).int64(e.retainHeight),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, X);
            a.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 2:
                  a.data = o.bytes();
                  break;
                case 3:
                  a.retainHeight = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, X);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = ge(e.data)),
              void 0 !== e.retainHeight && null !== e.retainHeight
                ? (t.retainHeight = a.default.fromString(e.retainHeight))
                : (t.retainHeight = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = be(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.retainHeight &&
                (t.retainHeight = (
                  e.retainHeight || a.default.ZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, X);
            return (
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.retainHeight && null !== e.retainHeight
                ? (t.retainHeight = e.retainHeight)
                : (t.retainHeight = a.default.ZERO),
              t
            );
          },
        };
        const ee = {};
        t.ResponseListSnapshots = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.snapshots)
              t.Snapshot.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, ee);
            s.snapshots = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.snapshots.push(t.Snapshot.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, ee);
            if (
              ((o.snapshots = []),
              void 0 !== e.snapshots && null !== e.snapshots)
            )
              for (const n of e.snapshots)
                o.snapshots.push(t.Snapshot.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.snapshots
                ? (o.snapshots = e.snapshots.map((e) =>
                    e ? t.Snapshot.toJSON(e) : void 0,
                  ))
                : (o.snapshots = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, ee);
            if (
              ((o.snapshots = []),
              void 0 !== e.snapshots && null !== e.snapshots)
            )
              for (const n of e.snapshots)
                o.snapshots.push(t.Snapshot.fromPartial(n));
            return o;
          },
        };
        const te = { result: 0 };
        t.ResponseOfferSnapshot = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, te);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.result = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, te);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = O(e.result))
                : (t.result = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.result && (t.result = S(e.result)), t);
          },
          fromPartial(e) {
            const t = Object.assign({}, te);
            return (
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              t
            );
          },
        };
        const oe = {};
        t.ResponseLoadSnapshotChunk = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.chunk.length && t.uint32(10).bytes(e.chunk),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, oe);
            a.chunk = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.chunk = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, oe);
            return (
              (t.chunk = new Uint8Array()),
              void 0 !== e.chunk && null !== e.chunk && (t.chunk = ge(e.chunk)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.chunk &&
                (t.chunk = be(void 0 !== e.chunk ? e.chunk : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, oe);
            return (
              void 0 !== e.chunk && null !== e.chunk
                ? (t.chunk = e.chunk)
                : (t.chunk = new Uint8Array()),
              t
            );
          },
        };
        const ne = { result: 0, refetchChunks: 0, rejectSenders: "" };
        t.ResponseApplySnapshotChunk = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              0 !== e.result && t.uint32(8).int32(e.result),
              t.uint32(18).fork());
            for (const o of e.refetchChunks) t.uint32(o);
            t.ldelim();
            for (const o of e.rejectSenders) t.uint32(26).string(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, ne);
            ((a.refetchChunks = []), (a.rejectSenders = []));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.result = o.int32();
                  break;
                case 2:
                  if (2 === (7 & e)) {
                    const e = o.uint32() + o.pos;
                    while (o.pos < e) a.refetchChunks.push(o.uint32());
                  } else a.refetchChunks.push(o.uint32());
                  break;
                case 3:
                  a.rejectSenders.push(o.string());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, ne);
            if (
              ((t.refetchChunks = []),
              (t.rejectSenders = []),
              void 0 !== e.result && null !== e.result
                ? (t.result = R(e.result))
                : (t.result = 0),
              void 0 !== e.refetchChunks && null !== e.refetchChunks)
            )
              for (const o of e.refetchChunks) t.refetchChunks.push(Number(o));
            if (void 0 !== e.rejectSenders && null !== e.rejectSenders)
              for (const o of e.rejectSenders) t.rejectSenders.push(String(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.result && (t.result = w(e.result)),
              e.refetchChunks
                ? (t.refetchChunks = e.refetchChunks.map((e) => e))
                : (t.refetchChunks = []),
              e.rejectSenders
                ? (t.rejectSenders = e.rejectSenders.map((e) => e))
                : (t.rejectSenders = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, ne);
            if (
              ((t.refetchChunks = []),
              (t.rejectSenders = []),
              void 0 !== e.result && null !== e.result
                ? (t.result = e.result)
                : (t.result = 0),
              void 0 !== e.refetchChunks && null !== e.refetchChunks)
            )
              for (const o of e.refetchChunks) t.refetchChunks.push(o);
            if (void 0 !== e.rejectSenders && null !== e.rejectSenders)
              for (const o of e.rejectSenders) t.rejectSenders.push(o);
            return t;
          },
        };
        const ae = {};
        t.ConsensusParams = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.block &&
                t.BlockParams.encode(e.block, o.uint32(10).fork()).ldelim(),
              void 0 !== e.evidence &&
                l.EvidenceParams.encode(
                  e.evidence,
                  o.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.validator &&
                l.ValidatorParams.encode(
                  e.validator,
                  o.uint32(26).fork(),
                ).ldelim(),
              void 0 !== e.version &&
                l.VersionParams.encode(e.version, o.uint32(34).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, ae);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.block = t.BlockParams.decode(n, n.uint32());
                  break;
                case 2:
                  s.evidence = l.EvidenceParams.decode(n, n.uint32());
                  break;
                case 3:
                  s.validator = l.ValidatorParams.decode(n, n.uint32());
                  break;
                case 4:
                  s.version = l.VersionParams.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, ae);
            return (
              void 0 !== e.block && null !== e.block
                ? (o.block = t.BlockParams.fromJSON(e.block))
                : (o.block = void 0),
              void 0 !== e.evidence && null !== e.evidence
                ? (o.evidence = l.EvidenceParams.fromJSON(e.evidence))
                : (o.evidence = void 0),
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = l.ValidatorParams.fromJSON(e.validator))
                : (o.validator = void 0),
              void 0 !== e.version && null !== e.version
                ? (o.version = l.VersionParams.fromJSON(e.version))
                : (o.version = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.block &&
                (o.block = e.block ? t.BlockParams.toJSON(e.block) : void 0),
              void 0 !== e.evidence &&
                (o.evidence = e.evidence
                  ? l.EvidenceParams.toJSON(e.evidence)
                  : void 0),
              void 0 !== e.validator &&
                (o.validator = e.validator
                  ? l.ValidatorParams.toJSON(e.validator)
                  : void 0),
              void 0 !== e.version &&
                (o.version = e.version
                  ? l.VersionParams.toJSON(e.version)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, ae);
            return (
              void 0 !== e.block && null !== e.block
                ? (o.block = t.BlockParams.fromPartial(e.block))
                : (o.block = void 0),
              void 0 !== e.evidence && null !== e.evidence
                ? (o.evidence = l.EvidenceParams.fromPartial(e.evidence))
                : (o.evidence = void 0),
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = l.ValidatorParams.fromPartial(e.validator))
                : (o.validator = void 0),
              void 0 !== e.version && null !== e.version
                ? (o.version = l.VersionParams.fromPartial(e.version))
                : (o.version = void 0),
              o
            );
          },
        };
        const se = { maxBytes: a.default.ZERO, maxGas: a.default.ZERO };
        t.BlockParams = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.maxBytes.isZero() || t.uint32(8).int64(e.maxBytes),
              e.maxGas.isZero() || t.uint32(16).int64(e.maxGas),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, se);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.maxBytes = o.int64();
                  break;
                case 2:
                  a.maxGas = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, se);
            return (
              void 0 !== e.maxBytes && null !== e.maxBytes
                ? (t.maxBytes = a.default.fromString(e.maxBytes))
                : (t.maxBytes = a.default.ZERO),
              void 0 !== e.maxGas && null !== e.maxGas
                ? (t.maxGas = a.default.fromString(e.maxGas))
                : (t.maxGas = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.maxBytes &&
                (t.maxBytes = (e.maxBytes || a.default.ZERO).toString()),
              void 0 !== e.maxGas &&
                (t.maxGas = (e.maxGas || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, se);
            return (
              void 0 !== e.maxBytes && null !== e.maxBytes
                ? (t.maxBytes = e.maxBytes)
                : (t.maxBytes = a.default.ZERO),
              void 0 !== e.maxGas && null !== e.maxGas
                ? (t.maxGas = e.maxGas)
                : (t.maxGas = a.default.ZERO),
              t
            );
          },
        };
        const ie = { round: 0 };
        t.LastCommitInfo = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.round && o.uint32(8).int32(e.round));
            for (const n of e.votes)
              t.VoteInfo.encode(n, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, ie);
            s.votes = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.round = n.int32();
                  break;
                case 2:
                  s.votes.push(t.VoteInfo.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, ie);
            if (
              ((o.votes = []),
              void 0 !== e.round && null !== e.round
                ? (o.round = Number(e.round))
                : (o.round = 0),
              void 0 !== e.votes && null !== e.votes)
            )
              for (const n of e.votes) o.votes.push(t.VoteInfo.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.round && (o.round = e.round),
              e.votes
                ? (o.votes = e.votes.map((e) =>
                    e ? t.VoteInfo.toJSON(e) : void 0,
                  ))
                : (o.votes = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, ie);
            if (
              ((o.votes = []),
              void 0 !== e.round && null !== e.round
                ? (o.round = e.round)
                : (o.round = 0),
              void 0 !== e.votes && null !== e.votes)
            )
              for (const n of e.votes) o.votes.push(t.VoteInfo.fromPartial(n));
            return o;
          },
        };
        const re = { type: "" };
        t.Event = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              "" !== e.type && o.uint32(10).string(e.type));
            for (const n of e.attributes)
              t.EventAttribute.encode(n, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, re);
            s.attributes = [];
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.type = n.string();
                  break;
                case 2:
                  s.attributes.push(t.EventAttribute.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, re);
            if (
              ((o.attributes = []),
              void 0 !== e.type && null !== e.type
                ? (o.type = String(e.type))
                : (o.type = ""),
              void 0 !== e.attributes && null !== e.attributes)
            )
              for (const n of e.attributes)
                o.attributes.push(t.EventAttribute.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = e.type),
              e.attributes
                ? (o.attributes = e.attributes.map((e) =>
                    e ? t.EventAttribute.toJSON(e) : void 0,
                  ))
                : (o.attributes = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, re);
            if (
              ((o.attributes = []),
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = ""),
              void 0 !== e.attributes && null !== e.attributes)
            )
              for (const n of e.attributes)
                o.attributes.push(t.EventAttribute.fromPartial(n));
            return o;
          },
        };
        const de = { index: !1 };
        t.EventAttribute = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.key.length && t.uint32(10).bytes(e.key),
              0 !== e.value.length && t.uint32(18).bytes(e.value),
              !0 === e.index && t.uint32(24).bool(e.index),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, de);
            ((a.key = new Uint8Array()), (a.value = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.key = o.bytes();
                  break;
                case 2:
                  a.value = o.bytes();
                  break;
                case 3:
                  a.index = o.bool();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, de);
            return (
              (t.key = new Uint8Array()),
              (t.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (t.key = ge(e.key)),
              void 0 !== e.value && null !== e.value && (t.value = ge(e.value)),
              void 0 !== e.index && null !== e.index
                ? (t.index = Boolean(e.index))
                : (t.index = !1),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key &&
                (t.key = be(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (t.value = be(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.index && (t.index = e.index),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, de);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = new Uint8Array()),
              void 0 !== e.index && null !== e.index
                ? (t.index = e.index)
                : (t.index = !1),
              t
            );
          },
        };
        const le = { height: a.default.ZERO, index: 0 };
        t.TxResult = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              e.height.isZero() || o.uint32(8).int64(e.height),
              0 !== e.index && o.uint32(16).uint32(e.index),
              0 !== e.tx.length && o.uint32(26).bytes(e.tx),
              void 0 !== e.result &&
                t.ResponseDeliverTx.encode(
                  e.result,
                  o.uint32(34).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, le);
            s.tx = new Uint8Array();
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.height = n.int64();
                  break;
                case 2:
                  s.index = n.uint32();
                  break;
                case 3:
                  s.tx = n.bytes();
                  break;
                case 4:
                  s.result = t.ResponseDeliverTx.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, le);
            return (
              (o.tx = new Uint8Array()),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (o.index = Number(e.index))
                : (o.index = 0),
              void 0 !== e.tx && null !== e.tx && (o.tx = ge(e.tx)),
              void 0 !== e.result && null !== e.result
                ? (o.result = t.ResponseDeliverTx.fromJSON(e.result))
                : (o.result = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.index && (o.index = e.index),
              void 0 !== e.tx &&
                (o.tx = be(void 0 !== e.tx ? e.tx : new Uint8Array())),
              void 0 !== e.result &&
                (o.result = e.result
                  ? t.ResponseDeliverTx.toJSON(e.result)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, le);
            return (
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.index && null !== e.index
                ? (o.index = e.index)
                : (o.index = 0),
              void 0 !== e.tx && null !== e.tx
                ? (o.tx = e.tx)
                : (o.tx = new Uint8Array()),
              void 0 !== e.result && null !== e.result
                ? (o.result = t.ResponseDeliverTx.fromPartial(e.result))
                : (o.result = void 0),
              o
            );
          },
        };
        const ue = { power: a.default.ZERO };
        t.Validator = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.address.length && t.uint32(10).bytes(e.address),
              e.power.isZero() || t.uint32(24).int64(e.power),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, ue);
            a.address = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.address = o.bytes();
                  break;
                case 3:
                  a.power = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, ue);
            return (
              (t.address = new Uint8Array()),
              void 0 !== e.address &&
                null !== e.address &&
                (t.address = ge(e.address)),
              void 0 !== e.power && null !== e.power
                ? (t.power = a.default.fromString(e.power))
                : (t.power = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.address &&
                (t.address = be(
                  void 0 !== e.address ? e.address : new Uint8Array(),
                )),
              void 0 !== e.power &&
                (t.power = (e.power || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, ue);
            return (
              void 0 !== e.address && null !== e.address
                ? (t.address = e.address)
                : (t.address = new Uint8Array()),
              void 0 !== e.power && null !== e.power
                ? (t.power = e.power)
                : (t.power = a.default.ZERO),
              t
            );
          },
        };
        const ce = { power: a.default.ZERO };
        t.ValidatorUpdate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.pubKey &&
                u.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
              e.power.isZero() || t.uint32(16).int64(e.power),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, ce);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.pubKey = u.PublicKey.decode(o, o.uint32());
                  break;
                case 2:
                  a.power = o.int64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, ce);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = u.PublicKey.fromJSON(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.power && null !== e.power
                ? (t.power = a.default.fromString(e.power))
                : (t.power = a.default.ZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.pubKey &&
                (t.pubKey = e.pubKey ? u.PublicKey.toJSON(e.pubKey) : void 0),
              void 0 !== e.power &&
                (t.power = (e.power || a.default.ZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, ce);
            return (
              void 0 !== e.pubKey && null !== e.pubKey
                ? (t.pubKey = u.PublicKey.fromPartial(e.pubKey))
                : (t.pubKey = void 0),
              void 0 !== e.power && null !== e.power
                ? (t.power = e.power)
                : (t.power = a.default.ZERO),
              t
            );
          },
        };
        const pe = { signedLastBlock: !1 };
        t.VoteInfo = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.validator &&
                t.Validator.encode(e.validator, o.uint32(10).fork()).ldelim(),
              !0 === e.signedLastBlock && o.uint32(16).bool(e.signedLastBlock),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, pe);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.validator = t.Validator.decode(n, n.uint32());
                  break;
                case 2:
                  s.signedLastBlock = n.bool();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, pe);
            return (
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = t.Validator.fromJSON(e.validator))
                : (o.validator = void 0),
              void 0 !== e.signedLastBlock && null !== e.signedLastBlock
                ? (o.signedLastBlock = Boolean(e.signedLastBlock))
                : (o.signedLastBlock = !1),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.validator &&
                (o.validator = e.validator
                  ? t.Validator.toJSON(e.validator)
                  : void 0),
              void 0 !== e.signedLastBlock &&
                (o.signedLastBlock = e.signedLastBlock),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, pe);
            return (
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = t.Validator.fromPartial(e.validator))
                : (o.validator = void 0),
              void 0 !== e.signedLastBlock && null !== e.signedLastBlock
                ? (o.signedLastBlock = e.signedLastBlock)
                : (o.signedLastBlock = !1),
              o
            );
          },
        };
        const he = {
          type: 0,
          height: a.default.ZERO,
          totalVotingPower: a.default.ZERO,
        };
        t.Evidence = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              0 !== e.type && o.uint32(8).int32(e.type),
              void 0 !== e.validator &&
                t.Validator.encode(e.validator, o.uint32(18).fork()).ldelim(),
              e.height.isZero() || o.uint32(24).int64(e.height),
              void 0 !== e.time &&
                p.Timestamp.encode(ye(e.time), o.uint32(34).fork()).ldelim(),
              e.totalVotingPower.isZero() ||
                o.uint32(40).int64(e.totalVotingPower),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let a = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, he);
            while (n.pos < a) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.type = n.int32();
                  break;
                case 2:
                  s.validator = t.Validator.decode(n, n.uint32());
                  break;
                case 3:
                  s.height = n.int64();
                  break;
                case 4:
                  s.time = Oe(p.Timestamp.decode(n, n.uint32()));
                  break;
                case 5:
                  s.totalVotingPower = n.int64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, he);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = b(e.type))
                : (o.type = 0),
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = t.Validator.fromJSON(e.validator))
                : (o.validator = void 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = a.default.fromString(e.height))
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = Se(e.time))
                : (o.time = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = a.default.fromString(
                    e.totalVotingPower,
                  ))
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = y(e.type)),
              void 0 !== e.validator &&
                (o.validator = e.validator
                  ? t.Validator.toJSON(e.validator)
                  : void 0),
              void 0 !== e.height &&
                (o.height = (e.height || a.default.ZERO).toString()),
              void 0 !== e.time && (o.time = e.time.toISOString()),
              void 0 !== e.totalVotingPower &&
                (o.totalVotingPower = (
                  e.totalVotingPower || a.default.ZERO
                ).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, he);
            return (
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = 0),
              void 0 !== e.validator && null !== e.validator
                ? (o.validator = t.Validator.fromPartial(e.validator))
                : (o.validator = void 0),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = a.default.ZERO),
              void 0 !== e.time && null !== e.time
                ? (o.time = e.time)
                : (o.time = void 0),
              void 0 !== e.totalVotingPower && null !== e.totalVotingPower
                ? (o.totalVotingPower = e.totalVotingPower)
                : (o.totalVotingPower = a.default.ZERO),
              o
            );
          },
        };
        const fe = { height: a.default.UZERO, format: 0, chunks: 0 };
        t.Snapshot = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.height.isZero() || t.uint32(8).uint64(e.height),
              0 !== e.format && t.uint32(16).uint32(e.format),
              0 !== e.chunks && t.uint32(24).uint32(e.chunks),
              0 !== e.hash.length && t.uint32(34).bytes(e.hash),
              0 !== e.metadata.length && t.uint32(42).bytes(e.metadata),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const a = Object.assign({}, fe);
            ((a.hash = new Uint8Array()), (a.metadata = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  a.height = o.uint64();
                  break;
                case 2:
                  a.format = o.uint32();
                  break;
                case 3:
                  a.chunks = o.uint32();
                  break;
                case 4:
                  a.hash = o.bytes();
                  break;
                case 5:
                  a.metadata = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const t = Object.assign({}, fe);
            return (
              (t.hash = new Uint8Array()),
              (t.metadata = new Uint8Array()),
              void 0 !== e.height && null !== e.height
                ? (t.height = a.default.fromString(e.height))
                : (t.height = a.default.UZERO),
              void 0 !== e.format && null !== e.format
                ? (t.format = Number(e.format))
                : (t.format = 0),
              void 0 !== e.chunks && null !== e.chunks
                ? (t.chunks = Number(e.chunks))
                : (t.chunks = 0),
              void 0 !== e.hash && null !== e.hash && (t.hash = ge(e.hash)),
              void 0 !== e.metadata &&
                null !== e.metadata &&
                (t.metadata = ge(e.metadata)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.height &&
                (t.height = (e.height || a.default.UZERO).toString()),
              void 0 !== e.format && (t.format = e.format),
              void 0 !== e.chunks && (t.chunks = e.chunks),
              void 0 !== e.hash &&
                (t.hash = be(void 0 !== e.hash ? e.hash : new Uint8Array())),
              void 0 !== e.metadata &&
                (t.metadata = be(
                  void 0 !== e.metadata ? e.metadata : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, fe);
            return (
              void 0 !== e.height && null !== e.height
                ? (t.height = e.height)
                : (t.height = a.default.UZERO),
              void 0 !== e.format && null !== e.format
                ? (t.format = e.format)
                : (t.format = 0),
              void 0 !== e.chunks && null !== e.chunks
                ? (t.chunks = e.chunks)
                : (t.chunks = 0),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = new Uint8Array()),
              void 0 !== e.metadata && null !== e.metadata
                ? (t.metadata = e.metadata)
                : (t.metadata = new Uint8Array()),
              t
            );
          },
        };
        class ABCIApplicationClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.Echo = this.Echo.bind(this)),
              (this.Flush = this.Flush.bind(this)),
              (this.Info = this.Info.bind(this)),
              (this.SetOption = this.SetOption.bind(this)),
              (this.DeliverTx = this.DeliverTx.bind(this)),
              (this.CheckTx = this.CheckTx.bind(this)),
              (this.Query = this.Query.bind(this)),
              (this.Commit = this.Commit.bind(this)),
              (this.InitChain = this.InitChain.bind(this)),
              (this.BeginBlock = this.BeginBlock.bind(this)),
              (this.EndBlock = this.EndBlock.bind(this)),
              (this.ListSnapshots = this.ListSnapshots.bind(this)),
              (this.OfferSnapshot = this.OfferSnapshot.bind(this)),
              (this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this)),
              (this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this)));
          }
          Echo(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationEchoDesc,
              t.RequestEcho.fromPartial(e),
              o,
            );
          }
          Flush(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationFlushDesc,
              t.RequestFlush.fromPartial(e),
              o,
            );
          }
          Info(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationInfoDesc,
              t.RequestInfo.fromPartial(e),
              o,
            );
          }
          SetOption(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationSetOptionDesc,
              t.RequestSetOption.fromPartial(e),
              o,
            );
          }
          DeliverTx(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationDeliverTxDesc,
              t.RequestDeliverTx.fromPartial(e),
              o,
            );
          }
          CheckTx(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationCheckTxDesc,
              t.RequestCheckTx.fromPartial(e),
              o,
            );
          }
          Query(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationQueryDesc,
              t.RequestQuery.fromPartial(e),
              o,
            );
          }
          Commit(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationCommitDesc,
              t.RequestCommit.fromPartial(e),
              o,
            );
          }
          InitChain(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationInitChainDesc,
              t.RequestInitChain.fromPartial(e),
              o,
            );
          }
          BeginBlock(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationBeginBlockDesc,
              t.RequestBeginBlock.fromPartial(e),
              o,
            );
          }
          EndBlock(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationEndBlockDesc,
              t.RequestEndBlock.fromPartial(e),
              o,
            );
          }
          ListSnapshots(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationListSnapshotsDesc,
              t.RequestListSnapshots.fromPartial(e),
              o,
            );
          }
          OfferSnapshot(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationOfferSnapshotDesc,
              t.RequestOfferSnapshot.fromPartial(e),
              o,
            );
          }
          LoadSnapshotChunk(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationLoadSnapshotChunkDesc,
              t.RequestLoadSnapshotChunk.fromPartial(e),
              o,
            );
          }
          ApplySnapshotChunk(e, o) {
            return this.rpc.unary(
              t.ABCIApplicationApplySnapshotChunkDesc,
              t.RequestApplySnapshotChunk.fromPartial(e),
              o,
            );
          }
        }
        ((t.ABCIApplicationClientImpl = ABCIApplicationClientImpl),
          (t.ABCIApplicationDesc = {
            serviceName: "tendermint.abci.ABCIApplication",
          }),
          (t.ABCIApplicationEchoDesc = {
            methodName: "Echo",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestEcho.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseEcho.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationFlushDesc = {
            methodName: "Flush",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestFlush.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseFlush.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationInfoDesc = {
            methodName: "Info",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestInfo.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseInfo.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationSetOptionDesc = {
            methodName: "SetOption",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestSetOption.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseSetOption.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationDeliverTxDesc = {
            methodName: "DeliverTx",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestDeliverTx.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseDeliverTx.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationCheckTxDesc = {
            methodName: "CheckTx",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestCheckTx.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseCheckTx.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationQueryDesc = {
            methodName: "Query",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestQuery.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseQuery.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationCommitDesc = {
            methodName: "Commit",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestCommit.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseCommit.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationInitChainDesc = {
            methodName: "InitChain",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestInitChain.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseInitChain.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationBeginBlockDesc = {
            methodName: "BeginBlock",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestBeginBlock.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseBeginBlock.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationEndBlockDesc = {
            methodName: "EndBlock",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestEndBlock.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseEndBlock.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationListSnapshotsDesc = {
            methodName: "ListSnapshots",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestListSnapshots.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseListSnapshots.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationOfferSnapshotDesc = {
            methodName: "OfferSnapshot",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestOfferSnapshot.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseOfferSnapshot.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationLoadSnapshotChunkDesc = {
            methodName: "LoadSnapshotChunk",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestLoadSnapshotChunk.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseLoadSnapshotChunk.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.ABCIApplicationApplySnapshotChunkDesc = {
            methodName: "ApplySnapshotChunk",
            service: t.ABCIApplicationDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.RequestApplySnapshotChunk.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.ResponseApplySnapshotChunk.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }));
        class GrpcWebImpl {
          constructor(e, t) {
            ((this.host = e), (this.options = t));
          }
          unary(e, t, o) {
            var n;
            const a = Object.assign(Object.assign({}, t), e.requestType),
              i =
                o && this.options.metadata
                  ? new c.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (n = this.options) || void 0 === n
                            ? void 0
                            : n.metadata.headersMap,
                        ),
                        null === o || void 0 === o ? void 0 : o.headersMap,
                      ),
                    )
                  : o || this.options.metadata;
            return new Promise((t, o) => {
              s.grpc.unary(e, {
                request: a,
                host: this.host,
                metadata: i,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === s.grpc.Code.OK) t(e.message);
                  else {
                    const t = new Error(e.statusMessage);
                    ((t.code = e.status), (t.metadata = e.trailers), o(t));
                  }
                },
              });
            });
          }
        }
        t.GrpcWebImpl = GrpcWebImpl;
        var ve = (() => {
          if ("undefined" !== typeof ve) return ve;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const me =
          ve.atob || ((e) => ve.Buffer.from(e, "base64").toString("binary"));
        function ge(e) {
          const t = me(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const ke =
          ve.btoa || ((e) => ve.Buffer.from(e, "binary").toString("base64"));
        function be(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return ke(t.join(""));
        }
        function ye(e) {
          const t = Re(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function Oe(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function Se(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : Oe(p.Timestamp.fromJSON(e));
        }
        function Re(e) {
          return a.default.fromNumber(e);
        }
        i.default.util.Long !== a.default &&
          ((i.default.util.Long = a.default), i.default.configure());
      }).call(this, o(13));
    },
    5139: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashedParams =
          t.VersionParams =
          t.ValidatorParams =
          t.EvidenceParams =
          t.BlockParams =
          t.ConsensusParams =
          t.protobufPackage =
            void 0));
      const a = n(o(2754)),
        s = n(o(2755)),
        i = o(3296);
      t.protobufPackage = "tendermint.types";
      const r = {};
      t.ConsensusParams = {
        encode(e, o) {
          return (
            void 0 === o && (o = s.default.Writer.create()),
            void 0 !== e.block &&
              t.BlockParams.encode(e.block, o.uint32(10).fork()).ldelim(),
            void 0 !== e.evidence &&
              t.EvidenceParams.encode(e.evidence, o.uint32(18).fork()).ldelim(),
            void 0 !== e.validator &&
              t.ValidatorParams.encode(
                e.validator,
                o.uint32(26).fork(),
              ).ldelim(),
            void 0 !== e.version &&
              t.VersionParams.encode(e.version, o.uint32(34).fork()).ldelim(),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let a = void 0 === o ? n.len : n.pos + o;
          const i = Object.assign({}, r);
          while (n.pos < a) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                i.block = t.BlockParams.decode(n, n.uint32());
                break;
              case 2:
                i.evidence = t.EvidenceParams.decode(n, n.uint32());
                break;
              case 3:
                i.validator = t.ValidatorParams.decode(n, n.uint32());
                break;
              case 4:
                i.version = t.VersionParams.decode(n, n.uint32());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return i;
        },
        fromJSON(e) {
          const o = Object.assign({}, r);
          return (
            void 0 !== e.block && null !== e.block
              ? (o.block = t.BlockParams.fromJSON(e.block))
              : (o.block = void 0),
            void 0 !== e.evidence && null !== e.evidence
              ? (o.evidence = t.EvidenceParams.fromJSON(e.evidence))
              : (o.evidence = void 0),
            void 0 !== e.validator && null !== e.validator
              ? (o.validator = t.ValidatorParams.fromJSON(e.validator))
              : (o.validator = void 0),
            void 0 !== e.version && null !== e.version
              ? (o.version = t.VersionParams.fromJSON(e.version))
              : (o.version = void 0),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.block &&
              (o.block = e.block ? t.BlockParams.toJSON(e.block) : void 0),
            void 0 !== e.evidence &&
              (o.evidence = e.evidence
                ? t.EvidenceParams.toJSON(e.evidence)
                : void 0),
            void 0 !== e.validator &&
              (o.validator = e.validator
                ? t.ValidatorParams.toJSON(e.validator)
                : void 0),
            void 0 !== e.version &&
              (o.version = e.version
                ? t.VersionParams.toJSON(e.version)
                : void 0),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, r);
          return (
            void 0 !== e.block && null !== e.block
              ? (o.block = t.BlockParams.fromPartial(e.block))
              : (o.block = void 0),
            void 0 !== e.evidence && null !== e.evidence
              ? (o.evidence = t.EvidenceParams.fromPartial(e.evidence))
              : (o.evidence = void 0),
            void 0 !== e.validator && null !== e.validator
              ? (o.validator = t.ValidatorParams.fromPartial(e.validator))
              : (o.validator = void 0),
            void 0 !== e.version && null !== e.version
              ? (o.version = t.VersionParams.fromPartial(e.version))
              : (o.version = void 0),
            o
          );
        },
      };
      const d = {
        maxBytes: a.default.ZERO,
        maxGas: a.default.ZERO,
        timeIotaMs: a.default.ZERO,
      };
      t.BlockParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.maxBytes.isZero() || t.uint32(8).int64(e.maxBytes),
            e.maxGas.isZero() || t.uint32(16).int64(e.maxGas),
            e.timeIotaMs.isZero() || t.uint32(24).int64(e.timeIotaMs),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.maxBytes = o.int64();
                break;
              case 2:
                a.maxGas = o.int64();
                break;
              case 3:
                a.timeIotaMs = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = a.default.fromString(e.maxBytes))
              : (t.maxBytes = a.default.ZERO),
            void 0 !== e.maxGas && null !== e.maxGas
              ? (t.maxGas = a.default.fromString(e.maxGas))
              : (t.maxGas = a.default.ZERO),
            void 0 !== e.timeIotaMs && null !== e.timeIotaMs
              ? (t.timeIotaMs = a.default.fromString(e.timeIotaMs))
              : (t.timeIotaMs = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxBytes &&
              (t.maxBytes = (e.maxBytes || a.default.ZERO).toString()),
            void 0 !== e.maxGas &&
              (t.maxGas = (e.maxGas || a.default.ZERO).toString()),
            void 0 !== e.timeIotaMs &&
              (t.timeIotaMs = (e.timeIotaMs || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = e.maxBytes)
              : (t.maxBytes = a.default.ZERO),
            void 0 !== e.maxGas && null !== e.maxGas
              ? (t.maxGas = e.maxGas)
              : (t.maxGas = a.default.ZERO),
            void 0 !== e.timeIotaMs && null !== e.timeIotaMs
              ? (t.timeIotaMs = e.timeIotaMs)
              : (t.timeIotaMs = a.default.ZERO),
            t
          );
        },
      };
      const l = { maxAgeNumBlocks: a.default.ZERO, maxBytes: a.default.ZERO };
      t.EvidenceParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.maxAgeNumBlocks.isZero() || t.uint32(8).int64(e.maxAgeNumBlocks),
            void 0 !== e.maxAgeDuration &&
              i.Duration.encode(e.maxAgeDuration, t.uint32(18).fork()).ldelim(),
            e.maxBytes.isZero() || t.uint32(24).int64(e.maxBytes),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.maxAgeNumBlocks = o.int64();
                break;
              case 2:
                a.maxAgeDuration = i.Duration.decode(o, o.uint32());
                break;
              case 3:
                a.maxBytes = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks
              ? (t.maxAgeNumBlocks = a.default.fromString(e.maxAgeNumBlocks))
              : (t.maxAgeNumBlocks = a.default.ZERO),
            void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration
              ? (t.maxAgeDuration = i.Duration.fromJSON(e.maxAgeDuration))
              : (t.maxAgeDuration = void 0),
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = a.default.fromString(e.maxBytes))
              : (t.maxBytes = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxAgeNumBlocks &&
              (t.maxAgeNumBlocks = (
                e.maxAgeNumBlocks || a.default.ZERO
              ).toString()),
            void 0 !== e.maxAgeDuration &&
              (t.maxAgeDuration = e.maxAgeDuration
                ? i.Duration.toJSON(e.maxAgeDuration)
                : void 0),
            void 0 !== e.maxBytes &&
              (t.maxBytes = (e.maxBytes || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks
              ? (t.maxAgeNumBlocks = e.maxAgeNumBlocks)
              : (t.maxAgeNumBlocks = a.default.ZERO),
            void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration
              ? (t.maxAgeDuration = i.Duration.fromPartial(e.maxAgeDuration))
              : (t.maxAgeDuration = void 0),
            void 0 !== e.maxBytes && null !== e.maxBytes
              ? (t.maxBytes = e.maxBytes)
              : (t.maxBytes = a.default.ZERO),
            t
          );
        },
      };
      const u = { pubKeyTypes: "" };
      t.ValidatorParams = {
        encode(e, t) {
          void 0 === t && (t = s.default.Writer.create());
          for (const o of e.pubKeyTypes) t.uint32(10).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, u);
          a.pubKeyTypes = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.pubKeyTypes.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.pubKeyTypes = []),
            void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
          )
            for (const o of e.pubKeyTypes) t.pubKeyTypes.push(String(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.pubKeyTypes
              ? (t.pubKeyTypes = e.pubKeyTypes.map((e) => e))
              : (t.pubKeyTypes = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.pubKeyTypes = []),
            void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
          )
            for (const o of e.pubKeyTypes) t.pubKeyTypes.push(o);
          return t;
        },
      };
      const c = { appVersion: a.default.UZERO };
      t.VersionParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.appVersion.isZero() || t.uint32(8).uint64(e.appVersion),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.appVersion = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.appVersion && null !== e.appVersion
              ? (t.appVersion = a.default.fromString(e.appVersion))
              : (t.appVersion = a.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.appVersion &&
              (t.appVersion = (e.appVersion || a.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.appVersion && null !== e.appVersion
              ? (t.appVersion = e.appVersion)
              : (t.appVersion = a.default.UZERO),
            t
          );
        },
      };
      const p = { blockMaxBytes: a.default.ZERO, blockMaxGas: a.default.ZERO };
      ((t.HashedParams = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.blockMaxBytes.isZero() || t.uint32(8).int64(e.blockMaxBytes),
            e.blockMaxGas.isZero() || t.uint32(16).int64(e.blockMaxGas),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const a = Object.assign({}, p);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                a.blockMaxBytes = o.int64();
                break;
              case 2:
                a.blockMaxGas = o.int64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes
              ? (t.blockMaxBytes = a.default.fromString(e.blockMaxBytes))
              : (t.blockMaxBytes = a.default.ZERO),
            void 0 !== e.blockMaxGas && null !== e.blockMaxGas
              ? (t.blockMaxGas = a.default.fromString(e.blockMaxGas))
              : (t.blockMaxGas = a.default.ZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.blockMaxBytes &&
              (t.blockMaxBytes = (
                e.blockMaxBytes || a.default.ZERO
              ).toString()),
            void 0 !== e.blockMaxGas &&
              (t.blockMaxGas = (e.blockMaxGas || a.default.ZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes
              ? (t.blockMaxBytes = e.blockMaxBytes)
              : (t.blockMaxBytes = a.default.ZERO),
            void 0 !== e.blockMaxGas && null !== e.blockMaxGas
              ? (t.blockMaxGas = e.blockMaxGas)
              : (t.blockMaxGas = a.default.ZERO),
            t
          );
        },
      }),
        s.default.util.Long !== a.default &&
          ((s.default.util.Long = a.default), s.default.configure()));
    },
    8108: function (e, t, o) {
      "use strict";
      var n = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(o(28)),
        s = n(o(129));
      const i = {
        MsgWithdrawDelegationReward: "reward",
        MsgDelegate: "stake",
        MsgUndelegate: "unstake",
        MsgSend: "transfer",
      };
      class TerraClassicFCDExplorer extends s.default {
        constructor() {
          (super(...arguments), (this.network = "classic"));
        }
        getAllowedTickers() {
          return ["LUNC"];
        }
        getTransactionsUrl() {
          return "/v1/txs";
        }
        getTransactionsParams(e, t, o) {
          return { account: e, offset: t, limit: o };
        }
        modifyLatestBlockResponse(e) {
          return e.height;
        }
        getLatestBlockUrl() {
          return "/oracle/denoms/actives";
        }
        getGasPrices() {
          return this.request("/v1/txs/gas_prices", "GET");
        }
        getCosmosTxType(e) {}
        getTxType(e) {
          var t, o, n, a;
          const s = Array.isArray(
              null === (t = e.tx) ||
                void 0 === t ||
                null === (o = t.value) ||
                void 0 === o
                ? void 0
                : o.msg,
            )
              ? null === (n = e.tx) ||
                void 0 === n ||
                null === (a = n.value) ||
                void 0 === a
                ? void 0
                : a.msg
              : [],
            r = s.map((e) => {
              let { type: t } = e;
              return t.split("/").pop();
            })[0];
          if (void 0 === i[r]) throw new Error(`[LUNC] txType ${r} not found`);
          return i[r];
        }
        getTxDenom(e) {
          return e.tx.value.msg[0].value;
        }
        getTxCoins(e, t) {
          var o, n, a, s;
          const i = this.getTxType(t);
          if ("reward" === i) {
            const o = t.logs.reduce((t, o) => {
              var n;
              const a =
                null === (n = o.events) || void 0 === n
                  ? void 0
                  : n.find(
                      (t) =>
                        "coin_received" === t.type &&
                        t.attributes.find((t) => {
                          let { key: o, value: n } = t;
                          return "receiver" === o && n === e;
                        }),
                    );
              if (a) {
                var s, i;
                const e =
                  null === (s = a.attributes) ||
                  void 0 === s ||
                  null ===
                    (i = s.find((e) => {
                      let { key: t } = e;
                      return "amount" === t;
                    })) ||
                  void 0 === i
                    ? void 0
                    : i.value;
                if (e) {
                  const o = /(\d*)uluna/.exec(e);
                  null !== o && (t += BigInt(o[1]));
                }
              }
              return t;
            }, 0n);
            return { denom: "uluna", amount: o.toString() };
          }
          let r =
            null === (o = t.tx) ||
            void 0 === o ||
            null === (n = o.value) ||
            void 0 === n ||
            null === (a = n.msg[0]) ||
            void 0 === a ||
            null === (s = a.value) ||
            void 0 === s
              ? void 0
              : s.amount;
          return (
            Array.isArray(r) &&
              (r = r.find((e) => {
                let { denom: t } = e;
                return ["uluna", "uusd"].includes(t);
              })),
            r
          );
        }
        getTxAssetId(e) {
          if (e === this.wallet.ticker) return this.wallet.id;
          const t = this.wallet.tokens(),
            o = Object.keys(t).find((o) => {
              var n;
              return (
                (null === (n = t[o]) || void 0 === n ? void 0 : n.ticker) === e
              );
            });
          return o ? t[o].id : null;
        }
        getTxDirection(e, t) {
          const o = this.getTxType(t);
          switch (o) {
            case "stake":
              return !1;
            case "unstake":
              return !0;
            case "reward":
              return !0;
            default: {
              const { to_address: o } = t.tx.value.msg[0].value;
              return o === e;
            }
          }
        }
        getTxOtherSideAddress(e, t) {
          const o = this.getTxType(t),
            {
              validator_address: n,
              from_address: a,
              to_address: s,
            } = t.tx.value.msg[0].value;
          switch (o) {
            case "stake":
            case "unstake":
            case "reward":
              return n;
            default:
              return this.getTxDirection(e, t) ? a : s;
          }
        }
        getTxFee(e) {
          var t;
          return this.wallet.toCurrencyUnit(
            null === (t = e.tx.value.fee.amount[0]) || void 0 === t
              ? void 0
              : t.amount,
          );
        }
        getTickerFromDenom(e) {
          return e ? ("uluna" === e ? "LUNC" : "uusd" === e ? "USTC" : e) : "";
        }
        async modifyTransactionsResponse(e, t) {
          let o,
            { txs: n } = e;
          if (!Array.isArray(n)) return [];
          try {
            o = await this.getLatestBlock();
          } catch (s) {
            return (
              a.default.error({ error: s, instance: this.wallet }),
              console.warn(
                "[TerraClassicFCDExplorer] modifyTransactionsResponse error: Could not get latest block",
              ),
              null
            );
          }
          return n
            .map((e) => {
              const n = this.getTxCoins(t, e),
                i = this.getTickerFromDenom(n.denom);
              if (!i) return [];
              const r = this.getTxAssetId(i);
              if (!r) return [];
              try {
                const a = {
                  ticker: i,
                  name: this.wallet.name,
                  walletid: r,
                  txType: this.getTxType(e),
                  txid: e.txhash,
                  direction: this.getTxDirection(t, e),
                  otherSideAddress: this.getTxOtherSideAddress(t, e),
                  amount: this.wallet.toCurrencyUnit(n.amount),
                  datetime: new Date(e.timestamp),
                  memo: e.tx.value.memo,
                  alias: this.wallet.alias,
                  fee: this.getTxFee(e),
                  feeTicker: this.wallet.ticker,
                  confirmations: o ? o - e.height : 1,
                };
                return a;
              } catch (s) {
                return (
                  a.default.error({ error: s, instance: this.wallet }),
                  console.warn(
                    "[TerraClassicFCDExplorer] modifyTransactionsResponse error: Could not parse tx:",
                    e,
                  ),
                  null
                );
              }
            })
            .filter((e) => e);
        }
      }
      t.default = TerraClassicFCDExplorer;
    },
    8109: function (e, t, o) {
      "use strict";
      var n = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = o(4301),
        s = n(o(129));
      const i = 0,
        r = "columbus-5",
        d = "https://terra-classic-lcd.publicnode.com",
        l = 3e4;
      class TerraClassicLCDExplorer extends s.default {
        constructor(e) {
          var t, o;
          let { wallet: n, config: s } = e;
          (super(...arguments),
            (this.lcdClient = new a.LCDClient({
              chainID:
                (null === (t = s.options) || void 0 === t
                  ? void 0
                  : t.chainID) || r,
              URL: s.baseUrl || d,
              isClassic: !0,
            })),
            (this.cacheTime =
              Number(
                null === (o = s.options) || void 0 === o ? void 0 : o.cacheTime,
              ) || l),
            (this.cache = {}));
        }
        getAllowedTickers() {
          return ["LUNA", "LUNC"];
        }
        getLcdWallet(e) {
          return this.lcdClient.wallet(e);
        }
        isCached(e) {
          var t;
          return (
            (null === (t = this.cache[e]) || void 0 === t ? void 0 : t.time) &&
            new Date().getTime() - this.cache[e].time.getTime() < this.cacheTime
          );
        }
        putCache(e, t) {
          this.cache[e] = { value: t, time: new Date() };
        }
        getCache(e) {
          return this.cache[e].value;
        }
        async getBalance(e, t, o) {
          var n;
          void 0 === o && (o = this.wallet.denom);
          const a = "getBalance";
          this.isCached(a) || this.putCache(a, this.lcdClient.bank.balance(e));
          const s = await this.getCache(a),
            r = s[i];
          return (
            (null === (n = r.get(o)) || void 0 === n
              ? void 0
              : n.amount.toString()) || "0"
          );
        }
        async getTokenBalanceByContractAddress(e) {
          let { address: t, contractAddress: o } = e;
          const n = await this.lcdClient.wasm.contractQuery(o, {
            balance: { address: t },
          });
          return n.balance || "0";
        }
        async sendTransaction(e) {
          return this.lcdClient.tx.broadcastSync(e);
        }
        async getUserDenomList(e) {
          try {
            await this.getBalance(e);
            const t = this.getCache("getBalance"),
              o = Object.keys(t._coins);
            return o.map((e) => ({
              symbol: this.wallet.getTickerFromDenom(e),
              name: "Terra " + this.wallet.getTickerFromDenom(e),
              decimals: this.wallet.decimal,
              denom: e,
            }));
          } catch (t) {
            return [];
          }
        }
        async estimateFee(e, t) {
          return this.lcdClient.tx.estimateFee(e, t);
        }
        async calculateTax(e) {
          return this.lcdClient.utils.calculateTax(e);
        }
        getAccountInfo(e) {
          return this.lcdClient.auth.accountInfo(e);
        }
        async getValidators(e) {
          return this.lcdClient.staking.bondedValidators(e);
        }
        async getStakingInfo(e) {
          const t = await this.getValidators(e);
          return { validators: t };
        }
        async getStakedDelegations(e) {
          const t = "getStakedDelegations";
          this.isCached(t) ||
            this.putCache(t, this.lcdClient.staking.delegations(e));
          const [o] = await this.getCache(t);
          return o;
        }
        async getRewardsBalance(e) {
          const t = "getRewardsBalance";
          return (
            this.isCached(t) ||
              this.putCache(t, this.lcdClient.distribution.rewards(e)),
            this.getCache(t)
          );
        }
        async getUnbondingDelegations(e) {
          const t = "getUnbondingDelegations";
          this.isCached(t) ||
            this.putCache(t, this.lcdClient.staking.unbondingDelegations(e));
          const [o] = await this.getCache(t);
          return o;
        }
      }
      t.default = TerraClassicLCDExplorer;
    },
    8110: function (e, t, o) {
      "use strict";
      var n = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(o(105)),
        s = n(o(3090)),
        i = n(o(8)),
        r = n(o(129)),
        d = n(o(28));
      const l = "https://assets.terra.money/cw20/tokens.json",
        u = 40;
      class TerraMantleExplorer extends r.default {
        getAllowedTickers() {
          return ["LUNA", "LUNC"];
        }
        async getUserTokenList(e, t) {
          void 0 === t && (t = !1);
          const o = u,
            n = Object.values(await this.getTokenList(t)),
            i = n.map((t) => {
              let { token: o } = t;
              const n = JSON.stringify(`{"balance": { "address" : "${e}" } }`);
              return `${o}: WasmContractsContractAddressStore(ContractAddress: "${o}", QueryMsg : ${n}) {\n Result\n }\n`;
            }),
            r = await Promise.all(
              s.default
                .chunk(i, o)
                .map(async (e) =>
                  this.request("/", "POST", {
                    operationName: null,
                    variables: {},
                    query: `{\n ${e.join()}}\n`,
                  }),
                ),
            );
          return n
            .map((e) => {
              const t = r
                .map((e) => e.data)
                .filter(Boolean)
                .some((t) => {
                  try {
                    var o;
                    const { balance: n } = JSON.parse(
                      null === (o = t[e.token]) || void 0 === o
                        ? void 0
                        : o.Result,
                    );
                    return new a.default(n).isGreaterThan(0);
                  } catch (n) {
                    return !1;
                  }
                });
              return t ? e : null;
            })
            .filter(Boolean);
        }
        async getTokenList(e) {
          void 0 === e && (e = !1);
          const t = await this.request(l, "GET");
          return e
            ? t.classic
            : this.wallet.isTestnet()
              ? t.testnet
              : t.mainnet;
        }
        async getBannedTokensList() {
          let e;
          try {
            e = await i.default.get("luna-tokens-banned");
          } catch (t) {
            d.default.error({ instance: this, error: t });
          }
          return Array.isArray(e) ? e : [];
        }
      }
      t.default = TerraMantleExplorer;
    },
  },
]);
