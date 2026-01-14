(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [276],
  {
    2677: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = o(r(230)),
        i = r(805),
        a = r(19),
        s = r(27),
        p = o(r(73)),
        c = w(r(8)),
        u = o(r(28)),
        l = o(r(7214)),
        h = o(r(7215)),
        f = o(r(794)),
        d = o(r(7216)),
        y = o(r(7246)),
        g = o(r(7388)),
        v = o(r(7390)),
        b = r(2806);
      function w(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            o = new WeakMap();
        return (w = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var n,
            i,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((n = e ? o : r)) {
            if (n.has(t)) return n.get(t);
            n.set(t, a);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (i.get || i.set)
                ? n(a, r, i)
                : (a[r] = t[r]));
          return a;
        })(t, e);
      }
      function m(t, e, r) {
        (T(t, e), e.set(t, r));
      }
      function T(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function x(t, e) {
        return t.get(k(t, e));
      }
      function S(t, e, r) {
        return (t.set(k(t, e), r), r);
      }
      function k(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const A = new f.default(() => r.e(329).then(r.t.bind(null, 4975, 7))),
        E = new f.default(() =>
          Promise.resolve().then(r.t.bind(null, 4628, 7)),
        ),
        C = new f.default(() => Promise.resolve().then(r.t.bind(null, 872, 7))),
        F = "Tron",
        P = "TRX",
        B = "m/44'/195'/0'",
        U = 6,
        R = "0",
        j = 13500,
        I = 15e3,
        M = 345,
        _ = 1e-4,
        O = 0.001,
        D = 1e8,
        N = 2.3,
        V = 1.85;
      var W = new WeakMap();
      class TRXCoin extends (0, b.StakingMixin)(
        (0, b.HasProviders)((0, b.HasTokensMixin)(n.default)),
      ) {
        constructor(t) {
          let {
            alias: e,
            notify: r,
            feeData: o,
            explorers: n,
            txWebUrl: i,
            socket: a,
            id: s,
          } = t;
          const p = {
            id: s,
            alias: e,
            notify: r,
            name: F,
            ticker: P,
            decimal: U,
            unspendableBalance: R,
            explorers: n,
            txWebUrl: i,
            socket: a,
            feeData: o,
          };
          (super(p),
            m(this, W, void 0),
            (this.derivation = B),
            this.setExplorersModules([
              d.default,
              y.default,
              g.default,
              v.default,
            ]),
            this.loadExplorers(p),
            this.setFeeData(o),
            (this.transactions = []),
            (this.tokens = {}),
            (this.bannedTokens = []),
            this.eventEmitter.on(
              this.ticker + "::confirmed-socket-tx",
              (t, e, r) => {
                (this.getInfo(),
                  e && e.direction
                    ? this.eventEmitter.emit("socket::newtx", {
                        id: t,
                        ticker: r,
                        amount: e.amount,
                        txid: e.txid,
                      })
                    : this.eventEmitter.emit("socket::newtx::outgoing", {
                        id: t,
                        ticker: r,
                      }));
              },
            ));
        }
        setFeeData(t) {
          (void 0 === t && (t = {}),
            super.setFeeData(t),
            (this.dynamicTrc20EnergyEnabled = !!t.dynamicTrc20EnergyEnabled));
        }
        async loadTokensList(t) {
          const e = await this.getTokenList();
          e.forEach((e) => {
            const r = this.createToken({
              name: e.name,
              ticker: e.ticker,
              decimal: e.decimal,
              contract: e.contract,
              uniqueField: e.contract,
              source: "list",
              visibility: !0,
              confirmed: !0,
              config: { feeData: { energy: e.energy } },
              notify: Boolean(e.notify),
            });
            (t.addWallet(r), (this.tokens[e.contract] = r));
          });
        }
        async fetchUserTokens() {
          return [];
        }
        createToken(t) {
          return new i.TRXToken({ parent: this, ...t });
        }
        loadWallet(t) {
          return new Promise(async (e, r) => {
            const { default: o } = await A.get(),
              { default: n } = await E.get(),
              i = o.fromMasterSeed(t),
              p = i.derive(this.derivation),
              c = n.utils.crypto.getAddressFromPriKey(p._privateKey);
            (p ||
              r(
                new a.WalletError({
                  type: s.WALLET_ERROR,
                  error: new Error("private key is empty"),
                  instance: this,
                }),
              ),
              S(W, this, n.utils.bytes.byteArray2hexStr(p._privateKey)),
              (this.address = n.utils.crypto.getBase58CheckAddress(c)),
              (this.tronWeb = new n({
                fullHost: this.getProvider("node").config.baseUrl,
                privateKey: x(W, this),
              })),
              e({
                id: this.id,
                privateKey: x(W, this),
                address: this.address,
              }));
          });
        }
        async getAddress() {
          if (x(W, this)) {
            const { default: t } = await E.get(),
              e = t.utils.crypto.getAddressFromPriKey(
                t.utils.bytes.hexStr2byteArray(x(W, this)),
              );
            return t.utils.crypto.getBase58CheckAddress(e);
          }
          throw new a.WalletError({
            type: s.WALLET_ERROR,
            error: new Error("can't get private key"),
            instance: this,
          });
        }
        async validateAddress(t) {
          try {
            const { default: e } = await E.get();
            return e.utils.crypto.isAddressValid(t);
          } catch (e) {
            return !1;
          }
        }
        async createTransaction(t) {
          let { address: e, amount: r } = t;
          return { address: e, amount: r };
        }
        async createTokenTransaction(t) {
          return t;
        }
        async sendTransaction(t) {
          let {
            address: e,
            amount: r,
            contract: o = null,
            userFee: n = null,
            transfer: i = !1,
          } = t;
          const p = [];
          if (i)
            return this.sendTokenTransaction({
              address: e,
              amount: r,
              contract: o,
              feeLimit: n,
            });
          try {
            const t = await this.tronWeb.trx.send(e, r, x(W, this));
            return { txid: t.transaction.txID };
          } catch (c) {
            p.push(c);
          }
          try {
            const t = this.getProvider(
              "send",
            ).helper.transactionBuilder.buildTransferTransaction(
              "TRX",
              this.address,
              e,
              r,
            );
            return this.getProvider("send").sendTransaction(t, x(W, this));
          } catch (c) {
            p.push(c);
          }
          throw new a.WalletError({
            type: s.SEND_TRANSACTION_TYPE,
            error: new Error(p),
            instance: this,
          });
        }
        async sendTokenTransaction(t) {
          let { address: e, amount: r, contract: o, feeLimit: n } = t;
          const i = Number(o) ? "trc10" : "trc20";
          if ("trc20" === i)
            try {
              const t = await this.tronWeb.contract().at(o),
                i = await t
                  .transfer(e, r)
                  .send(
                    { feeLimit: null !== n && void 0 !== n ? n : D },
                    x(W, this),
                  );
              return { txid: i };
            } catch (c) {
              throw new a.WalletError({
                type: s.SEND_TRANSACTION_TYPE,
                error: new Error(c),
                instance: this,
              });
            }
          const p = await this.tronWeb.trx.sendToken(e, r, o, {
            privateKey: x(W, this),
          });
          return { txid: p.transaction.txID };
        }
        async encodeParameters(t) {
          const { utils: e } = await C.get(),
            { AbiCoder: r } = e,
            o = /^(41)/;
          if (0 === t.length) return "";
          const n = new r(),
            i = [],
            a = [];
          for (let p = 0; p < t.length; p++) {
            let { value: e } = t[p];
            const { type: r } = t[p];
            ("address" === r
              ? (e = e.replace(o, "0x"))
              : "address[]" === r &&
                (e = e.map((t) =>
                  this.tronWeb.address.toHex(t).replace(o, "0x"),
                )),
              i.push(r),
              a.push(e));
          }
          try {
            return n.encode(i, a).replace(/^(0x)/, "");
          } catch (s) {
            return (console.warn(s), "");
          }
        }
        async sendRawTransaction(t) {
          try {
            const e = await await this.tronWeb.trx.sendRawTransaction(t);
            return { txid: e.transaction.txID };
          } catch (e) {
            throw new a.WalletError({
              type: s.SEND_TRANSACTION_TYPE,
              error: new Error(e),
              instance: this,
            });
          }
        }
        async estimateDynamicEnergy(t) {
          var e, r, o;
          let { address: n, amount: i, contract: a } = t;
          const s = Number(this.feeData.defaultTrc20TransferEnergy || j),
            p =
              (null === (e = this.tokens[a]) ||
              void 0 === e ||
              null === (r = e.config) ||
              void 0 === r ||
              null === (o = r.feeData) ||
              void 0 === o
                ? void 0
                : o.energy) || s;
          if (!this.dynamicTrc20EnergyEnabled) return p;
          const c = [
              { type: "address", value: this.tronWeb.address.toHex(n) },
              { type: "uint256", value: i },
            ],
            l = {
              owner_address: this.address,
              contract_address: a,
              function_selector: "transfer(address,uint256)",
              parameter: await this.encodeParameters(c),
              visible: !0,
            },
            h = await this.getProvider("dynamicEnergy")
              .getEstimatedEnergy(l)
              .catch((t) => u.default.error({ instance: this, error: t }));
          return h || p;
        }
        async getFee(t) {
          let { contract: e, address: r, amount: o = "0" } = t;
          r || (r = this.address);
          try {
            if (this.isTRC20Token(e)) {
              const t = this.getProvider("history"),
                n = await t
                  .getAccount(this.address)
                  .catch(() => ({
                    bandwidth: { energyRemaining: 0, freeNetRemaining: 0 },
                  })),
                { energyRemaining: i, freeNetRemaining: a } = n.bandwidth,
                s = !!r && (await t.isFirstTransfer(r).catch(() => !0));
              let p = await this.estimateDynamicEnergy({
                address: r,
                contract: e,
                amount: o,
              });
              const c =
                  await this.getProvider(
                    "dynamicEnergy",
                  ).getDynamicEnergyParameters(),
                u = c.getEnergyFee || _,
                l = c.getTransactionFee || O,
                h = s ? V : N;
              (s && (p += I), (p = Math.ceil(p * h)));
              const f = p - i,
                d = M - a;
              let y = 0;
              f > 0 && (y = f * u);
              let g = 0;
              return (d > 0 && (g = d * l), this.toMinimalUnit(y + g));
            }
          } catch (i) {
            var n;
            return (
              u.default.error({ instance: this, error: i }),
              null === (n = this.feeData) || void 0 === n ? void 0 : n.feeTRC20
            );
          }
          return new this.BN(this.feeData.fee);
        }
        getTRC20Fee(t) {
          const e = this.transactions.find((e) => e.txid === t.transaction_id);
          return (null === e || void 0 === e ? void 0 : e.fee) || null;
        }
        async getTransactions() {
          const { transactions: t = [], transfers: e = [] } =
              await this.getProvider("history")
                .getTransactions({ address: this.address })
                .catch((t) => (console.error(t), {})),
            { trc20transfers: r = [] } = await this.getProvider("trc20History")
              .getTransactions({ address: this.address })
              .catch((t) => (console.error(t), {})),
            o = e
              .map((t) => {
                const e = this.tokens[t.tokenName];
                return (
                  e &&
                  this.getProvider("history").modifyTokenTransactionResponse(
                    t,
                    this.address,
                    e.ticker,
                    e.decimal,
                  )
                );
              })
              .filter(Boolean);
          return t.concat(o).concat(r);
        }
        async getTransaction(t) {
          return this.getProvider("tx").getTransaction(this.address, t);
        }
        isTRC20Token(t) {
          var e;
          return (
            (null === (e = this.tokens[t]) || void 0 === e
              ? void 0
              : e.contract.indexOf("100")) < 0
          );
        }
        async getInfo() {
          const {
            balance: t,
            assetV2: e = [],
            stakingInfo: r = {},
          } = await this.getProvider("balance").getInfo(this.address);
          ((this.balance = t),
            e.forEach((t) => {
              const e = this.tokens[t.key];
              e && (this.tokens[t.key].balance = t.value);
            }),
            this.getProvider("tokens")
              .getInfo(this.address)
              .then((t) => {
                let { assets: e = [] } = t;
                Object.keys(this.tokens).forEach((t) => {
                  const r = this.isTRC20Token(t);
                  if (!r) return;
                  const o = e.find(
                    (e) => e.tokenId.toLowerCase() === t.toLowerCase(),
                  );
                  this.tokens[t].balance = (o && o.balance) || 0;
                });
              })
              .catch((t) =>
                console.warn(
                  `[${this.ticker}] Tronscan Error: failed to fetch trc20 tokens,`,
                  t,
                ),
              ));
          const { tronPowerLimit: o = 0, tronPowerUsed: n = 0 } =
            await this.getProvider("validators").getAccountResource(
              this.address,
            );
          if (r) {
            var i, a;
            const t = await this.getProvider("validators").getInfo(
                this.address,
              ),
              e =
                null !==
                  (i =
                    null === t ||
                    void 0 === t ||
                    null === (a = t.votes) ||
                    void 0 === a
                      ? void 0
                      : a.reduce((t, e) => {
                          let { vote_address: r, vote_count: o } = e;
                          return (
                            (t[r] = {
                              address: r,
                              staked: new p.default(o, this),
                            }),
                            t
                          );
                        }, {})) && void 0 !== i
                  ? i
                  : {},
              { availableWithdrawals: s, pendingWithdrawals: c } =
                this.calculateFrozenForWithdraw(
                  null === t || void 0 === t ? void 0 : t.unfrozenV2,
                ),
              u = new p.default(r.frozenBalanceForEnergy.toString(), this),
              { frozenVotesV1: l } = this.calculateFrozenVotesV1(r.frozen, u),
              { frozenVotes: h } = this.calculateFrozenVotes(o),
              f = this.calculateStakedAmount(r.votes),
              d = this.calculateAvailableVotes(h, n),
              y = this.calculateRewards(r.reward),
              g = { frozenVotesV1: l };
            this.setBalances(
              await this.makeStakingInfoStruct({
                staked: f,
                availableVotes: d,
                frozenVotes: h,
                frozenEnergy: u,
                rewards: y,
                pendingWithdrawals: c,
                availableWithdrawals: s,
                validators: e,
                additional: g,
              }),
            );
          }
          return { balance: this.balance, balances: this.balances };
        }
        async getStakingInfo() {
          return (await this.getInfo(), this.balances);
        }
        getFrozenV1Votes() {
          const { frozenVotesV1: t } = this.getAdditionalInfo();
          return t;
        }
        calculateStakedAmount(t) {
          var e, r;
          return new p.default(
            this.toMinimalUnit(
              null !==
                (e =
                  null === (r = t[0]) || void 0 === r
                    ? void 0
                    : r.vote_count) && void 0 !== e
                ? e
                : "0",
            ),
            this,
          );
        }
        calculateFrozenVotes(t) {
          return { frozenVotes: new p.default(this.toMinimalUnit(t), this) };
        }
        calculateFrozenVotesV1(t, e) {
          const r =
              t.length > 0
                ? new this.BN(t[0].frozen_balance).add(e.toBN()).toString()
                : "0",
            o = t.length > 0 ? t[0].expire_time : "0";
          return {
            frozenVotesV1: new p.default(r, this),
            frozenVotesExpiration: o,
          };
        }
        calculateAvailableVotes(t, e) {
          return new p.default(
            t.toBN().sub(new this.BN(this.toMinimalUnit(e))),
            this,
          );
        }
        calculateFrozenForWithdraw(t) {
          void 0 === t && (t = []);
          const e = Math.max(
              ...t.map((t) => {
                let { unfreeze_expire_time: e } = t;
                return e;
              }),
            ),
            r = t.reduce((t, e) => {
              let { unfreeze_amount: r } = e;
              return ((t = t.add(new this.BN(r))), t);
            }, new this.BN("0"));
          return {
            availableWithdrawals:
              Date.now() >= e
                ? new p.default(r, this)
                : new p.default("0", this),
            pendingWithdrawals:
              Date.now() < e
                ? new p.default(r, this)
                : new p.default("0", this),
          };
        }
        calculateAvailableForStake(t) {
          var e, r;
          let { balance: o } = t;
          const n = o
            .toBN()
            .sub(new this.BN(this.feeData.fee))
            .sub(
              new this.BN(
                null !==
                  (e =
                    null === (r = this.feeData.reserveForStake) || void 0 === r
                      ? void 0
                      : r.toString()) && void 0 !== e
                  ? e
                  : "0",
              ),
            );
          return new p.default(n.isNeg() ? "0" : n, this);
        }
        calculateTotal(t) {
          let { balance: e, frozenVotes: r, rewards: o } = t;
          return new p.default(e.toBN().add(r.toBN()).add(o.toBN()), this);
        }
        calculateRewards(t) {
          var e;
          return new p.default(
            null !== (e = null === t || void 0 === t ? void 0 : t.toString()) &&
              void 0 !== e
              ? e
              : "0",
            this,
          );
        }
        async setPrivateKey(t) {
          if ((S(W, this, t), !this.tronWeb)) {
            const { default: e } = await E.get();
            this.tronWeb = new e({
              fullHost: this.getProvider("node").config.baseUrl,
              privateKey: t,
            });
          }
        }
        async createDelegationTransaction(t, e) {
          const r = this.getAvailableVotes(),
            o = r.toBN().gte(new this.BN(e));
          return (
            o || (await this.createFreezeTransaction(e), await this.getInfo()),
            this.createVoteTransaction(t, this.toCurrencyUnit(e))
          );
        }
        async createFreezeTransaction(t) {
          const e = [];
          try {
            const e = await this.tronWeb.transactionBuilder.freezeBalanceV2(
                t,
                "BANDWIDTH",
                this.address,
              ),
              r = await this.tronWeb.trx.sign(e, x(W, this)),
              o = await this.sendRawTransaction(r);
            return o;
          } catch (r) {
            e.push(r);
          }
          throw new a.WalletError({
            type: s.SEND_TRANSACTION_TYPE,
            error: new Error(e),
            instance: this,
          });
        }
        async createVoteTransaction(t, e) {
          const r = [];
          try {
            const r = await this.tronWeb.transactionBuilder.vote(
                { [t]: e },
                this.address,
              ),
              o = await this.tronWeb.trx.sign(r, x(W, this));
            return o;
          } catch (o) {
            r.push(o);
          }
          throw new a.WalletError({
            type: s.SEND_TRANSACTION_TYPE,
            error: new Error(r),
            instance: this,
          });
        }
        async createUnfreezeTransaction(t, e) {
          void 0 === e && (e = !1);
          const r = [];
          try {
            const r = e
                ? await this.tronWeb.transactionBuilder.unfreezeBalance(
                    "BANDWIDTH",
                    this.address,
                  )
                : await this.tronWeb.transactionBuilder.unfreezeBalanceV2(
                    t,
                    "BANDWIDTH",
                    this.address,
                  ),
              o = await this.tronWeb.trx.sign(r, x(W, this)),
              n = await this.tronWeb.trx.sendRawTransaction(o);
            return { txid: n.transaction.txID };
          } catch (o) {
            r.push(o);
          }
          throw new a.WalletError({
            type: s.SEND_TRANSACTION_TYPE,
            error: new Error(r),
            instance: this,
          });
        }
        async createWithdrawFrozenTransaction() {
          const t = [];
          try {
            const t =
                await this.tronWeb.transactionBuilder.withdrawExpireUnfreeze(
                  this.address,
                ),
              e = await this.tronWeb.trx.sign(t, x(W, this)),
              r = await this.tronWeb.trx.sendRawTransaction(e);
            return { txid: r.transaction.txID };
          } catch (e) {
            t.push(e);
          }
          throw new a.WalletError({
            type: s.SEND_TRANSACTION_TYPE,
            error: new Error(t),
            instance: this,
          });
        }
        async createWithdrawRewardTransaction() {
          const t = await this.tronWeb.transactionBuilder.withdrawBlockRewards(
              this.address,
            ),
            e = await this.tronWeb.trx.sign(t, x(W, this));
          return e;
        }
        async getTokenList() {
          this.bannedTokens = await this.getBannedTokenList();
          try {
            return await c.default.get(c.ConfigKey.TrxTokens);
          } catch (t) {
            u.default.error({ instance: this, error: t });
          }
          return l.default;
        }
        async getBannedTokenList() {
          let t;
          try {
            t = await c.default.get(c.ConfigKey.TrxTokensBanned);
          } catch (e) {
            u.default.error({ instance: this, error: e });
          }
          return t || h.default;
        }
      }
      e.default = TRXCoin;
    },
    2853: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(e, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var n = o(r(2886)),
        i = o(r(2887)),
        a = o(r(2888));
    },
    2886: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const o = (t) =>
        class extends t {
          getSendTransactionUrl() {
            return this.config.baseUrl;
          }
          getSendTransactionParams(t) {
            return { method: "sendrawtransaction", params: [t] };
          }
          modifySendTransactionResponse(t) {
            return { txid: t.result };
          }
        };
      e.default = o;
    },
    2887: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const o = (t) =>
        class extends t {
          getTransactionsModifiedResponse(t, e, r) {
            return (
              void 0 === r && (r = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(t) },
                super.getTransactionsModifiedResponse(t, e, r),
              )
            );
          }
          getTransactionNativeType(t) {
            const e = Array.isArray(
              null === t || void 0 === t ? void 0 : t.messages,
            )
              ? t.messages
              : [];
            return e.map((t) => {
              let { "@type": e } = t;
              return e.split(".").pop();
            })[0];
          }
          getTransactionType(t) {
            const e = this.getTransactionNativeType(t),
              r = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === r[e] ? "transfer" : r[e];
          }
        };
      e.default = o;
    },
    2888: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = o(r(81));
      const i = ["reward", "unfreeze", "freeze", "vote"],
        a = (t) =>
          class extends t {
            async getSocketTransaction(t) {
              let {
                address: e,
                hash: r,
                tokens: o,
                type: a,
                scriptPubKey: s,
              } = t;
              const p = await this.getTransaction(e, r, o);
              (await n.default.filterAndUpdateTransactions([p]),
                "receive" === a &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${p.walletid}::new-socket-tx`,
                    { unconfirmedTx: p },
                  ),
                "confirm" === a &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    p.walletid,
                    p,
                    p.ticker,
                  ),
                i.forEach((t) => {
                  a === t &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${a}`,
                      p || {},
                    );
                }));
            }
          };
      e.default = a;
    },
    5907: function (t, e, r) {
      (function (t) {
        var r =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, r) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = r.value);
                },
          o =
            "undefined" != typeof window && window === this
              ? this
              : "undefined" != typeof t && null != t
                ? t
                : this;
        function n(t, e) {
          if (e) {
            var n = o;
            t = t.split(".");
            for (var i = 0; i < t.length - 1; i++) {
              var a = t[i];
              (a in n || (n[a] = {}), (n = n[a]));
            }
            ((t = t[t.length - 1]),
              (i = n[t]),
              (e = e(i)),
              e != i &&
                null != e &&
                r(n, t, { configurable: !0, writable: !0, value: e }));
          }
        }
        function i(t) {
          var e = 0;
          return function () {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
          };
        }
        function a() {
          ((a = function () {}), o.Symbol || (o.Symbol = p));
        }
        function s(t, e) {
          ((this.a = t),
            r(this, "description", {
              configurable: !0,
              writable: !0,
              value: e,
            }));
        }
        s.prototype.toString = function () {
          return this.a;
        };
        var p = (function () {
          function t(r) {
            if (this instanceof t)
              throw new TypeError("Symbol is not a constructor");
            return new s("jscomp_symbol_" + (r || "") + "_" + e++, r);
          }
          var e = 0;
          return t;
        })();
        function c() {
          a();
          var t = o.Symbol.iterator;
          (t || (t = o.Symbol.iterator = o.Symbol("Symbol.iterator")),
            "function" != typeof Array.prototype[t] &&
              r(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return u(i(this));
                },
              }),
            (c = function () {}));
        }
        function u(t) {
          return (
            c(),
            (t = { next: t }),
            (t[o.Symbol.iterator] = function () {
              return this;
            }),
            t
          );
        }
        function l(t, e) {
          (c(), t instanceof String && (t += ""));
          var r = 0,
            o = {
              next: function () {
                if (r < t.length) {
                  var n = r++;
                  return { value: e(n, t[n]), done: !1 };
                }
                return (
                  (o.next = function () {
                    return { done: !0, value: void 0 };
                  }),
                  o.next()
                );
              },
            };
          return (
            (o[Symbol.iterator] = function () {
              return o;
            }),
            o
          );
        }
        n("Array.prototype.entries", function (t) {
          return (
            t ||
            function () {
              return l(this, function (t, e) {
                return [t, e];
              });
            }
          );
        });
        var h = this || self;
        function f(t, e, r) {
          ((t = t.split(".")),
            (r = r || h),
            t[0] in r ||
              "undefined" == typeof r.execScript ||
              r.execScript("var " + t[0]));
          for (var o; t.length && (o = t.shift()); )
            t.length || void 0 === e
              ? (r = r[o] && r[o] !== Object.prototype[o] ? r[o] : (r[o] = {}))
              : (r[o] = e);
        }
        function d(t) {
          var e = typeof t;
          if ("object" == e) {
            if (!t) return "null";
            if (t instanceof Array) return "array";
            if (t instanceof Object) return e;
            var r = Object.prototype.toString.call(t);
            if ("[object Window]" == r) return "object";
            if (
              "[object Array]" == r ||
              ("number" == typeof t.length &&
                "undefined" != typeof t.splice &&
                "undefined" != typeof t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == r ||
              ("undefined" != typeof t.call &&
                "undefined" != typeof t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == e && "undefined" == typeof t.call)
            return "object";
          return e;
        }
        function y(t) {
          var e = typeof t;
          return ("object" == e && null != t) || "function" == e;
        }
        function g(t, e, r) {
          f(t, e, r);
        }
        function v(t, e) {
          function r() {}
          ((r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t));
        }
        var b =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " ",
          );
        function w(t, e) {
          for (var r, o, n = 1; n < arguments.length; n++) {
            for (r in ((o = arguments[n]), o)) t[r] = o[r];
            for (var i = 0; i < b.length; i++)
              ((r = b[i]),
                Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]));
          }
        }
        var m = Array.prototype.forEach
            ? function (t, e) {
                Array.prototype.forEach.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var r = t.length,
                    o = "string" === typeof t ? t.split("") : t,
                    n = 0;
                  n < r;
                  n++
                )
                  n in o && e.call(void 0, o[n], n, t);
              },
          T = Array.prototype.map
            ? function (t, e) {
                return Array.prototype.map.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var r = t.length,
                    o = Array(r),
                    n = "string" === typeof t ? t.split("") : t,
                    i = 0;
                  i < r;
                  i++
                )
                  i in n && (o[i] = e.call(void 0, n[i], i, t));
                return o;
              };
        function x(t, e, r) {
          return 2 >= arguments.length
            ? Array.prototype.slice.call(t, e)
            : Array.prototype.slice.call(t, e, r);
        }
        function S(t, e, r, o) {
          var n = "Assertion failed";
          if (r) {
            n += ": " + r;
            var i = o;
          } else t && ((n += ": " + t), (i = e));
          throw Error(n, i || []);
        }
        function k(t, e, r) {
          for (var o = [], n = 2; n < arguments.length; ++n)
            o[n - 2] = arguments[n];
          return (t || S("", null, e, o), t);
        }
        function A(t, e, r) {
          for (var o = [], n = 2; n < arguments.length; ++n)
            o[n - 2] = arguments[n];
          "string" !== typeof t &&
            S("Expected string but got %s: %s.", [d(t), t], e, o);
        }
        function E(t, e, r) {
          for (var o = [], n = 2; n < arguments.length; ++n)
            o[n - 2] = arguments[n];
          Array.isArray(t) ||
            S("Expected array but got %s: %s.", [d(t), t], e, o);
        }
        function C(t, e) {
          for (var r = [], o = 1; o < arguments.length; ++o)
            r[o - 1] = arguments[o];
          throw Error("Failure" + (t ? ": " + t : ""), r);
        }
        function F(t, e, r, o) {
          for (var n = [], i = 3; i < arguments.length; ++i)
            n[i - 3] = arguments[i];
          t instanceof e ||
            S("Expected instanceof %s but got %s.", [P(e), P(t)], r, n);
        }
        function P(t) {
          return t instanceof Function
            ? t.displayName || t.name || "unknown type name"
            : t instanceof Object
              ? t.constructor.displayName ||
                t.constructor.name ||
                Object.prototype.toString.call(t)
              : null === t
                ? "null"
                : typeof t;
        }
        function B(t, e) {
          if (
            ((this.f = t),
            (this.b = e),
            (this.a = {}),
            (this.arrClean = !0),
            0 < this.f.length)
          ) {
            for (t = 0; t < this.f.length; t++) {
              e = this.f[t];
              var r = e[0];
              this.a[r.toString()] = new I(r, e[1]);
            }
            this.arrClean = !0;
          }
        }
        function U(t) {
          ((this.a = 0), (this.b = t));
        }
        function R(t, e) {
          return t.b ? (e.a || (e.a = new t.b(e.value)), e.a) : e.value;
        }
        function j(t) {
          t = t.a;
          var e,
            r = [];
          for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
          return r;
        }
        function I(t, e) {
          ((this.key = t), (this.value = e), (this.a = void 0));
        }
        function M(t) {
          if (8192 >= t.length) return String.fromCharCode.apply(null, t);
          for (var e = "", r = 0; r < t.length; r += 8192)
            e += String.fromCharCode.apply(null, x(t, r, r + 8192));
          return e;
        }
        (f("jspb.Map", B, void 0),
          (B.prototype.g = function () {
            if (this.arrClean) {
              if (this.b) {
                var t,
                  e = this.a;
                for (t in e)
                  if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var r = e[t].a;
                    r && r.g();
                  }
              }
            } else {
              for (
                this.f.length = 0, e = j(this), e.sort(), t = 0;
                t < e.length;
                t++
              ) {
                var o = this.a[e[t]];
                ((r = o.a) && r.g(), this.f.push([o.key, o.value]));
              }
              this.arrClean = !0;
            }
            return this.f;
          }),
          (B.prototype.toArray = B.prototype.g),
          (B.prototype.Lc = function (t, e) {
            for (var r = this.g(), o = [], n = 0; n < r.length; n++) {
              var i = this.a[r[n][0].toString()];
              R(this, i);
              var a = i.a;
              a ? (k(e), o.push([i.key, e(t, a)])) : o.push([i.key, i.value]);
            }
            return o;
          }),
          (B.prototype.toObject = B.prototype.Lc),
          (B.fromObject = function (t, e, r) {
            e = new B([], e);
            for (var o = 0; o < t.length; o++) {
              var n = t[o][0],
                i = r(t[o][1]);
              e.set(n, i);
            }
            return e;
          }),
          (U.prototype.next = function () {
            return this.a < this.b.length
              ? { done: !1, value: this.b[this.a++] }
              : { done: !0, value: void 0 };
          }),
          "undefined" != typeof Symbol &&
            (U.prototype[Symbol.iterator] = function () {
              return this;
            }),
          (B.prototype.Jb = function () {
            return j(this).length;
          }),
          (B.prototype.getLength = B.prototype.Jb),
          (B.prototype.clear = function () {
            ((this.a = {}), (this.arrClean = !1));
          }),
          (B.prototype.clear = B.prototype.clear),
          (B.prototype.Cb = function (t) {
            t = t.toString();
            var e = this.a.hasOwnProperty(t);
            return (delete this.a[t], (this.arrClean = !1), e);
          }),
          (B.prototype.del = B.prototype.Cb),
          (B.prototype.Eb = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) {
              var o = this.a[e[r]];
              t.push([o.key, o.value]);
            }
            return t;
          }),
          (B.prototype.getEntryList = B.prototype.Eb),
          (B.prototype.entries = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) {
              var o = this.a[e[r]];
              t.push([o.key, R(this, o)]);
            }
            return new U(t);
          }),
          (B.prototype.entries = B.prototype.entries),
          (B.prototype.keys = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) t.push(this.a[e[r]].key);
            return new U(t);
          }),
          (B.prototype.keys = B.prototype.keys),
          (B.prototype.values = function () {
            var t = [],
              e = j(this);
            e.sort();
            for (var r = 0; r < e.length; r++) t.push(R(this, this.a[e[r]]));
            return new U(t);
          }),
          (B.prototype.values = B.prototype.values),
          (B.prototype.forEach = function (t, e) {
            var r = j(this);
            r.sort();
            for (var o = 0; o < r.length; o++) {
              var n = this.a[r[o]];
              t.call(e, R(this, n), n.key, this);
            }
          }),
          (B.prototype.forEach = B.prototype.forEach),
          (B.prototype.set = function (t, e) {
            var r = new I(t);
            return (
              this.b ? ((r.a = e), (r.value = e.g())) : (r.value = e),
              (this.a[t.toString()] = r),
              (this.arrClean = !1),
              this
            );
          }),
          (B.prototype.set = B.prototype.set),
          (B.prototype.get = function (t) {
            if ((t = this.a[t.toString()])) return R(this, t);
          }),
          (B.prototype.get = B.prototype.get),
          (B.prototype.has = function (t) {
            return t.toString() in this.a;
          }),
          (B.prototype.has = B.prototype.has),
          (B.prototype.Ic = function (t, e, r, o, n) {
            var i = j(this);
            i.sort();
            for (var a = 0; a < i.length; a++) {
              var s = this.a[i[a]];
              (e.Va(t),
                r.call(e, 1, s.key),
                this.b ? o.call(e, 2, R(this, s), n) : o.call(e, 2, s.value),
                e.Ya());
            }
          }),
          (B.prototype.serializeBinary = B.prototype.Ic),
          (B.deserializeBinary = function (t, e, r, o, n, i, a) {
            for (; e.na() && !e.bb(); ) {
              var s = e.f;
              1 == s
                ? (i = r.call(e))
                : 2 == s &&
                  (t.b
                    ? (k(n), a || (a = new t.b()), o.call(e, a, n))
                    : (a = o.call(e)));
            }
            (k(void 0 != i), k(void 0 != a), t.set(i, a));
          }));
        var _ = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C",
          },
          O = { "'": "\\'" },
          D = {},
          N = null;
        function V(t, e) {
          (void 0 === e && (e = 0), L(), (e = D[e]));
          for (var r = [], o = 0; o < t.length; o += 3) {
            var n = t[o],
              i = o + 1 < t.length,
              a = i ? t[o + 1] : 0,
              s = o + 2 < t.length,
              p = s ? t[o + 2] : 0,
              c = n >> 2;
            ((n = ((3 & n) << 4) | (a >> 4)),
              (a = ((15 & a) << 2) | (p >> 6)),
              (p &= 63),
              s || ((p = 64), i || (a = 64)),
              r.push(e[c], e[n], e[a] || "", e[p] || ""));
          }
          return r.join("");
        }
        function W(t) {
          var e = t.length,
            r = (3 * e) / 4;
          r % 3
            ? (r = Math.floor(r))
            : -1 != "=.".indexOf(t[e - 1]) &&
              (r = -1 != "=.".indexOf(t[e - 2]) ? r - 2 : r - 1);
          var o = new Uint8Array(r),
            n = 0;
          return (
            z(t, function (t) {
              o[n++] = t;
            }),
            o.subarray(0, n)
          );
        }
        function z(t, e) {
          function r(e) {
            for (; o < t.length; ) {
              var r = t.charAt(o++),
                n = N[r];
              if (null != n) return n;
              if (!/^[\s\xa0]*$/.test(r))
                throw Error("Unknown base64 encoding at char: " + r);
            }
            return e;
          }
          L();
          for (var o = 0; ; ) {
            var n = r(-1),
              i = r(0),
              a = r(64),
              s = r(64);
            if (64 === s && -1 === n) break;
            (e((n << 2) | (i >> 4)),
              64 != a &&
                (e(((i << 4) & 240) | (a >> 2)),
                64 != s && e(((a << 6) & 192) | s)));
          }
        }
        function L() {
          if (!N) {
            N = {};
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    "",
                  ),
                e = ["+/=", "+/", "-_=", "-_.", "-_"],
                r = 0;
              5 > r;
              r++
            ) {
              var o = t.concat(e[r].split(""));
              D[r] = o;
              for (var n = 0; n < o.length; n++) {
                var i = o[n];
                void 0 === N[i] && (N[i] = n);
              }
            }
          }
        }
        function H(t, e) {
          if (t) throw Error("Invalid UTF8");
          e.push(65533);
        }
        function q(t, e) {
          return (
            (e = String.fromCharCode.apply(null, e)),
            null == t ? e : t + e
          );
        }
        (f("jspb.ConstBinaryMessage", function () {}, void 0),
          f("jspb.BinaryMessage", function () {}, void 0),
          f(
            "jspb.BinaryConstants.FieldType",
            {
              yb: -1,
              de: 1,
              FLOAT: 2,
              je: 3,
              se: 4,
              ie: 5,
              xb: 6,
              wb: 7,
              BOOL: 8,
              qe: 9,
              he: 10,
              ke: 11,
              be: 12,
              re: 13,
              fe: 14,
              le: 15,
              me: 16,
              ne: 17,
              oe: 18,
              ge: 30,
              ue: 31,
            },
            void 0,
          ),
          f(
            "jspb.BinaryConstants.WireType",
            { yb: -1, te: 0, xb: 1, ce: 2, pe: 3, ee: 4, wb: 5 },
            void 0,
          ),
          f(
            "jspb.BinaryConstants.FieldTypeToWireType",
            function (t) {
              switch (t) {
                case 5:
                case 3:
                case 13:
                case 4:
                case 17:
                case 18:
                case 8:
                case 14:
                case 31:
                  return 0;
                case 1:
                case 6:
                case 16:
                case 30:
                  return 1;
                case 9:
                case 11:
                case 12:
                  return 2;
                case 2:
                case 7:
                case 15:
                  return 5;
                default:
                  return -1;
              }
            },
            void 0,
          ),
          f("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0),
          f("jspb.BinaryConstants.FLOAT32_EPS", 1401298464324817e-60, void 0),
          f("jspb.BinaryConstants.FLOAT32_MIN", 11754943508222875e-54, void 0),
          f("jspb.BinaryConstants.FLOAT32_MAX", 34028234663852886e22, void 0),
          f("jspb.BinaryConstants.FLOAT64_EPS", 5e-324, void 0),
          f("jspb.BinaryConstants.FLOAT64_MIN", 22250738585072014e-324, void 0),
          f("jspb.BinaryConstants.FLOAT64_MAX", 17976931348623157e292, void 0),
          f("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0),
          f("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0),
          f("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0),
          f("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0),
          f("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0),
          f("jspb.BinaryConstants.TWO_TO_63", 0x8000000000000000, void 0),
          f("jspb.BinaryConstants.TWO_TO_64", 0x10000000000000000, void 0),
          f("jspb.BinaryConstants.ZERO_HASH", "\0\0\0\0\0\0\0\0", void 0));
        var G,
          Z,
          X = void 0,
          J = "undefined" !== typeof TextDecoder,
          K = 0,
          $ = 0;
        function Y(t) {
          var e = t >>> 0;
          ((t = Math.floor((t - e) / 4294967296) >>> 0), (K = e), ($ = t));
        }
        function Q(t) {
          var e = 0 > t;
          t = Math.abs(t);
          var r = t >>> 0;
          ((t = Math.floor((t - r) / 4294967296)),
            (t >>>= 0),
            e &&
              ((t = ~t >>> 0),
              (r = 1 + (~r >>> 0)),
              4294967295 < r && ((r = 0), t++, 4294967295 < t && (t = 0))),
            (K = r),
            ($ = t));
        }
        function tt(t) {
          var e = 0 > t;
          ((t = 2 * Math.abs(t)), Y(t), (t = K));
          var r = $;
          (e &&
            (0 == t
              ? 0 == r
                ? (r = t = 4294967295)
                : (r--, (t = 4294967295))
              : t--),
            (K = t),
            ($ = r));
        }
        function et(t) {
          var e = 0 > t ? 1 : 0;
          if (((t = e ? -t : t), 0 === t))
            0 < 1 / t ? (K = $ = 0) : (($ = 0), (K = 2147483648));
          else if (isNaN(t)) (($ = 0), (K = 2147483647));
          else if (34028234663852886e22 < t)
            (($ = 0), (K = ((e << 31) | 2139095040) >>> 0));
          else if (11754943508222875e-54 > t)
            ((t = Math.round(t / Math.pow(2, -149))),
              ($ = 0),
              (K = ((e << 31) | t) >>> 0));
          else {
            var r = Math.floor(Math.log(t) / Math.LN2);
            ((t *= Math.pow(2, -r)),
              (t = Math.round(8388608 * t)),
              16777216 <= t && ++r,
              ($ = 0),
              (K = ((e << 31) | ((r + 127) << 23) | (8388607 & t)) >>> 0));
          }
        }
        function rt(t) {
          var e = 0 > t ? 1 : 0;
          if (((t = e ? -t : t), 0 === t))
            (($ = 0 < 1 / t ? 0 : 2147483648), (K = 0));
          else if (isNaN(t)) (($ = 2147483647), (K = 4294967295));
          else if (17976931348623157e292 < t)
            (($ = ((e << 31) | 2146435072) >>> 0), (K = 0));
          else if (22250738585072014e-324 > t)
            ((t /= Math.pow(2, -1074)),
              ($ = ((e << 31) | (t / 4294967296)) >>> 0),
              (K = t >>> 0));
          else {
            var r = t,
              o = 0;
            if (2 <= r) for (; 2 <= r && 1023 > o; ) (o++, (r /= 2));
            else for (; 1 > r && -1022 < o; ) ((r *= 2), o--);
            ((t *= Math.pow(2, -o)),
              ($ =
                ((e << 31) | ((o + 1023) << 20) | ((1048576 * t) & 1048575)) >>>
                0),
              (K = (4503599627370496 * t) >>> 0));
          }
        }
        function ot(t) {
          var e = t.charCodeAt(4),
            r = t.charCodeAt(5),
            o = t.charCodeAt(6),
            n = t.charCodeAt(7);
          ((K =
            (t.charCodeAt(0) +
              (t.charCodeAt(1) << 8) +
              (t.charCodeAt(2) << 16) +
              (t.charCodeAt(3) << 24)) >>>
            0),
            ($ = (e + (r << 8) + (o << 16) + (n << 24)) >>> 0));
        }
        function nt(t, e) {
          return 4294967296 * e + (t >>> 0);
        }
        function it(t, e) {
          var r = 2147483648 & e;
          return (
            r &&
              ((t = (1 + ~t) >>> 0),
              (e = ~e >>> 0),
              0 == t && (e = (e + 1) >>> 0)),
            (t = nt(t, e)),
            r ? -t : t
          );
        }
        function at(t, e, r) {
          var o = e >> 31;
          return r((t << 1) ^ o, ((e << 1) | (t >>> 31)) ^ o);
        }
        function st(t, e) {
          return pt(t, e, it);
        }
        function pt(t, e, r) {
          var o = -(1 & t);
          return r(((t >>> 1) | (e << 31)) ^ o, (e >>> 1) ^ o);
        }
        function ct(t) {
          var e = 2 * (t >> 31) + 1,
            r = (t >>> 23) & 255;
          return (
            (t &= 8388607),
            255 == r
              ? t
                ? NaN
                : (1 / 0) * e
              : 0 == r
                ? e * Math.pow(2, -149) * t
                : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23))
          );
        }
        function ut(t, e) {
          var r = 2 * (e >> 31) + 1,
            o = (e >>> 20) & 2047;
          return (
            (t = 4294967296 * (1048575 & e) + t),
            2047 == o
              ? t
                ? NaN
                : (1 / 0) * r
              : 0 == o
                ? r * Math.pow(2, -1074) * t
                : r * Math.pow(2, o - 1075) * (t + 4503599627370496)
          );
        }
        function lt(t, e) {
          return String.fromCharCode(
            (t >>> 0) & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            (t >>> 24) & 255,
            (e >>> 0) & 255,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            (e >>> 24) & 255,
          );
        }
        function ht(t, e) {
          function r(t, e) {
            return (
              (t = t ? String(t) : ""),
              e ? "0000000".slice(t.length) + t : t
            );
          }
          if (2097151 >= e) return "" + nt(t, e);
          var o = (((t >>> 24) | (e << 8)) >>> 0) & 16777215;
          return (
            (e = (e >> 16) & 65535),
            (t = (16777215 & t) + 6777216 * o + 6710656 * e),
            (o += 8147497 * e),
            (e *= 2),
            1e7 <= t && ((o += Math.floor(t / 1e7)), (t %= 1e7)),
            1e7 <= o && ((e += Math.floor(o / 1e7)), (o %= 1e7)),
            r(e, 0) + r(o, e) + r(t, 1)
          );
        }
        function ft(t, e) {
          var r = 2147483648 & e;
          return (
            r && ((t = (1 + ~t) >>> 0), (e = (~e + (0 == t ? 1 : 0)) >>> 0)),
            (t = ht(t, e)),
            r ? "-" + t : t
          );
        }
        function dt(t, e) {
          (ot(t), (t = K));
          var r = $;
          return e ? ft(t, r) : ht(t, r);
        }
        function yt(t) {
          function e(t, e) {
            for (var r = 0; 8 > r && (1 !== t || 0 < e); r++)
              ((e = t * n[r] + e), (n[r] = 255 & e), (e >>>= 8));
          }
          function r() {
            for (var t = 0; 8 > t; t++) n[t] = 255 & ~n[t];
          }
          k(0 < t.length);
          var o = !1;
          "-" === t[0] && ((o = !0), (t = t.slice(1)));
          for (var n = [0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < t.length; i++)
            e(10, t.charCodeAt(i) - 48);
          return (o && (r(), e(1, 1)), M(n));
        }
        function gt(t) {
          return String.fromCharCode(10 > t ? 48 + t : 87 + t);
        }
        function vt(t) {
          return 97 <= t ? t - 97 + 10 : t - 48;
        }
        function bt(t, e, r, o, n) {
          var i = 0;
          if (128 > o) for (; e < r && t[e++] == o; ) (i++, (e += n));
          else
            for (; e < r; ) {
              for (var a = o; 128 < a; ) {
                if (t[e++] != ((127 & a) | 128)) return i;
                a >>= 7;
              }
              if (t[e++] != a) break;
              (i++, (e += n));
            }
          return i;
        }
        function wt(t) {
          return t.constructor === Uint8Array
            ? t
            : t.constructor === ArrayBuffer || t.constructor === Array
              ? new Uint8Array(t)
              : t.constructor === String
                ? W(t)
                : t instanceof Uint8Array
                  ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                  : (C("Type not convertible to Uint8Array."),
                    new Uint8Array(0));
        }
        function mt(t, e, r) {
          ((this.b = null),
            (this.a = this.f = this.h = 0),
            (this.v = !1),
            t && this.H(t, e, r));
        }
        (f(
          "jspb.utils.getSplit64Low",
          function () {
            return K;
          },
          void 0,
        ),
          f(
            "jspb.utils.getSplit64High",
            function () {
              return $;
            },
            void 0,
          ),
          f("jspb.utils.splitUint64", Y, void 0),
          f("jspb.utils.splitInt64", Q, void 0),
          f("jspb.utils.splitZigzag64", tt, void 0),
          f("jspb.utils.splitFloat32", et, void 0),
          f("jspb.utils.splitFloat64", rt, void 0),
          f("jspb.utils.splitHash64", ot, void 0),
          f("jspb.utils.joinUint64", nt, void 0),
          f("jspb.utils.joinInt64", it, void 0),
          f("jspb.utils.toZigzag64", at, void 0),
          f("jspb.utils.joinZigzag64", st, void 0),
          f("jspb.utils.fromZigzag64", pt, void 0),
          f("jspb.utils.joinFloat32", ct, void 0),
          f("jspb.utils.joinFloat64", ut, void 0),
          f("jspb.utils.joinHash64", lt, void 0),
          f("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0),
          f("jspb.utils.joinUnsignedDecimalString", ht, void 0),
          f("jspb.utils.joinSignedDecimalString", ft, void 0),
          f("jspb.utils.hash64ToDecimalString", dt, void 0),
          f(
            "jspb.utils.hash64ArrayToDecimalStrings",
            function (t, e) {
              for (var r = Array(t.length), o = 0; o < t.length; o++)
                r[o] = dt(t[o], e);
              return r;
            },
            void 0,
          ),
          f("jspb.utils.decimalStringToHash64", yt, void 0),
          f(
            "jspb.utils.splitDecimalString",
            function (t) {
              ot(yt(t));
            },
            void 0,
          ),
          f(
            "jspb.utils.hash64ToHexString",
            function (t) {
              var e = Array(18);
              ((e[0] = "0"), (e[1] = "x"));
              for (var r = 0; 8 > r; r++) {
                var o = t.charCodeAt(7 - r);
                ((e[2 * r + 2] = gt(o >> 4)), (e[2 * r + 3] = gt(15 & o)));
              }
              return e.join("");
            },
            void 0,
          ),
          f(
            "jspb.utils.hexStringToHash64",
            function (t) {
              ((t = t.toLowerCase()),
                k(18 == t.length),
                k("0" == t[0]),
                k("x" == t[1]));
              for (var e = "", r = 0; 8 > r; r++)
                e =
                  String.fromCharCode(
                    16 * vt(t.charCodeAt(2 * r + 2)) +
                      vt(t.charCodeAt(2 * r + 3)),
                  ) + e;
              return e;
            },
            void 0,
          ),
          f(
            "jspb.utils.hash64ToNumber",
            function (t, e) {
              (ot(t), (t = K));
              var r = $;
              return e ? it(t, r) : nt(t, r);
            },
            void 0,
          ),
          f(
            "jspb.utils.numberToHash64",
            function (t) {
              return (Q(t), lt(K, $));
            },
            void 0,
          ),
          f(
            "jspb.utils.countVarints",
            function (t, e, r) {
              for (var o = 0, n = e; n < r; n++) o += t[n] >> 7;
              return r - e - o;
            },
            void 0,
          ),
          f(
            "jspb.utils.countVarintFields",
            function (t, e, r, o) {
              var n = 0;
              if (((o *= 8), 128 > o))
                for (; e < r && t[e++] == o; )
                  for (n++; ; ) {
                    var i = t[e++];
                    if (0 == (128 & i)) break;
                  }
              else
                for (; e < r; ) {
                  for (i = o; 128 < i; ) {
                    if (t[e] != ((127 & i) | 128)) return n;
                    (e++, (i >>= 7));
                  }
                  if (t[e++] != i) break;
                  for (n++; (i = t[e++]), 0 != (128 & i); );
                }
              return n;
            },
            void 0,
          ),
          f(
            "jspb.utils.countFixed32Fields",
            function (t, e, r, o) {
              return bt(t, e, r, 8 * o + 5, 4);
            },
            void 0,
          ),
          f(
            "jspb.utils.countFixed64Fields",
            function (t, e, r, o) {
              return bt(t, e, r, 8 * o + 1, 8);
            },
            void 0,
          ),
          f(
            "jspb.utils.countDelimitedFields",
            function (t, e, r, o) {
              var n = 0;
              for (o = 8 * o + 2; e < r; ) {
                for (var i = o; 128 < i; ) {
                  if (t[e++] != ((127 & i) | 128)) return n;
                  i >>= 7;
                }
                if (t[e++] != i) break;
                n++;
                for (
                  var a = 0, s = 1;
                  (i = t[e++]),
                    (a += (127 & i) * s),
                    (s *= 128),
                    0 != (128 & i);
                );
                e += a;
              }
              return n;
            },
            void 0,
          ),
          f(
            "jspb.utils.debugBytesToTextFormat",
            function (t) {
              var e = '"';
              if (t) {
                t = wt(t);
                for (var r = 0; r < t.length; r++)
                  ((e += "\\x"),
                    16 > t[r] && (e += "0"),
                    (e += t[r].toString(16)));
              }
              return e + '"';
            },
            void 0,
          ),
          f(
            "jspb.utils.debugScalarToTextFormat",
            function (t) {
              if ("string" === typeof t) {
                t = String(t);
                for (var e = ['"'], r = 0; r < t.length; r++) {
                  var o,
                    n = t.charAt(r),
                    i = n.charCodeAt(0),
                    a = r + 1;
                  ((o = _[n]) ||
                    ((31 < i && 127 > i) ||
                      ((i = n),
                      i in O
                        ? (n = O[i])
                        : i in _
                          ? (n = O[i] = _[i])
                          : ((o = i.charCodeAt(0)),
                            31 < o && 127 > o
                              ? (n = i)
                              : (256 > o
                                  ? ((n = "\\x"),
                                    (16 > o || 256 < o) && (n += "0"))
                                  : ((n = "\\u"), 4096 > o && (n += "0")),
                                (n += o.toString(16).toUpperCase())),
                            (n = O[i] = n))),
                    (o = n)),
                    (e[a] = o));
                }
                (e.push('"'), (t = e.join("")));
              } else t = t.toString();
              return t;
            },
            void 0,
          ),
          f(
            "jspb.utils.stringToByteArray",
            function (t) {
              for (var e = new Uint8Array(t.length), r = 0; r < t.length; r++) {
                var o = t.charCodeAt(r);
                if (255 < o)
                  throw Error(
                    "Conversion error: string contains codepoint outside of byte range",
                  );
                e[r] = o;
              }
              return e;
            },
            void 0,
          ),
          f("jspb.utils.byteSourceToUint8Array", wt, void 0),
          f("jspb.BinaryDecoder", mt, void 0));
        var Tt = [];
        function xt(t, e, r) {
          if (Tt.length) {
            var o = Tt.pop();
            return (t && o.H(t, e, r), o);
          }
          return new mt(t, e, r);
        }
        function St(t) {
          t.a > t.f && C("Read past the end " + t.a + " > " + t.f);
        }
        function kt(t, e, r) {
          ((this.a = xt(t, e, r)),
            (this.O = this.a.B()),
            (this.b = this.f = -1),
            (this.h = !1),
            (this.v = null));
        }
        ((mt.getInstanceCacheLength = function () {
          return Tt.length;
        }),
          (mt.alloc = xt),
          (mt.prototype.Ca = function () {
            (this.clear(), 100 > Tt.length && Tt.push(this));
          }),
          (mt.prototype.free = mt.prototype.Ca),
          (mt.prototype.clone = function () {
            return xt(this.b, this.h, this.f - this.h);
          }),
          (mt.prototype.clone = mt.prototype.clone),
          (mt.prototype.clear = function () {
            ((this.b = null), (this.a = this.f = this.h = 0), (this.v = !1));
          }),
          (mt.prototype.clear = mt.prototype.clear),
          (mt.prototype.Y = function () {
            return this.b;
          }),
          (mt.prototype.getBuffer = mt.prototype.Y),
          (mt.prototype.H = function (t, e, r) {
            ((this.b = wt(t)),
              (this.h = void 0 !== e ? e : 0),
              (this.f = void 0 !== r ? this.h + r : this.b.length),
              (this.a = this.h));
          }),
          (mt.prototype.setBlock = mt.prototype.H),
          (mt.prototype.Db = function () {
            return this.f;
          }),
          (mt.prototype.getEnd = mt.prototype.Db),
          (mt.prototype.setEnd = function (t) {
            this.f = t;
          }),
          (mt.prototype.setEnd = mt.prototype.setEnd),
          (mt.prototype.reset = function () {
            this.a = this.h;
          }),
          (mt.prototype.reset = mt.prototype.reset),
          (mt.prototype.B = function () {
            return this.a;
          }),
          (mt.prototype.getCursor = mt.prototype.B),
          (mt.prototype.Ma = function (t) {
            this.a = t;
          }),
          (mt.prototype.setCursor = mt.prototype.Ma),
          (mt.prototype.advance = function (t) {
            ((this.a += t), St(this));
          }),
          (mt.prototype.advance = mt.prototype.advance),
          (mt.prototype.ya = function () {
            return this.a == this.f;
          }),
          (mt.prototype.atEnd = mt.prototype.ya),
          (mt.prototype.Qb = function () {
            return this.a > this.f;
          }),
          (mt.prototype.pastEnd = mt.prototype.Qb),
          (mt.prototype.getError = function () {
            return this.v || 0 > this.a || this.a > this.f;
          }),
          (mt.prototype.getError = mt.prototype.getError),
          (mt.prototype.w = function (t) {
            for (var e = 128, r = 0, o = 0, n = 0; 4 > n && 128 <= e; n++)
              ((e = this.b[this.a++]), (r |= (127 & e) << (7 * n)));
            if (
              (128 <= e &&
                ((e = this.b[this.a++]),
                (r |= (127 & e) << 28),
                (o |= (127 & e) >> 4)),
              128 <= e)
            )
              for (n = 0; 5 > n && 128 <= e; n++)
                ((e = this.b[this.a++]), (o |= (127 & e) << (7 * n + 3)));
            if (128 > e) return t(r >>> 0, o >>> 0);
            (C("Failed to read varint, encoding is invalid."), (this.v = !0));
          }),
          (mt.prototype.readSplitVarint64 = mt.prototype.w),
          (mt.prototype.ea = function (t) {
            return this.w(function (e, r) {
              return pt(e, r, t);
            });
          }),
          (mt.prototype.readSplitZigzagVarint64 = mt.prototype.ea),
          (mt.prototype.sa = function (t) {
            var e = this.b,
              r = this.a;
            this.a += 8;
            for (var o = 0, n = 0, i = r + 7; i >= r; i--)
              ((o = (o << 8) | e[i]), (n = (n << 8) | e[i + 4]));
            return t(o, n);
          }),
          (mt.prototype.readSplitFixed64 = mt.prototype.sa),
          (mt.prototype.kb = function () {
            for (; 128 & this.b[this.a]; ) this.a++;
            this.a++;
          }),
          (mt.prototype.skipVarint = mt.prototype.kb),
          (mt.prototype.mb = function (t) {
            for (; 128 < t; ) (this.a--, (t >>>= 7));
            this.a--;
          }),
          (mt.prototype.unskipVarint = mt.prototype.mb),
          (mt.prototype.s = function () {
            var t = this.b,
              e = t[this.a],
              r = 127 & e;
            return 128 > e
              ? ((this.a += 1), St(this), r)
              : ((e = t[this.a + 1]),
                (r |= (127 & e) << 7),
                128 > e
                  ? ((this.a += 2), St(this), r)
                  : ((e = t[this.a + 2]),
                    (r |= (127 & e) << 14),
                    128 > e
                      ? ((this.a += 3), St(this), r)
                      : ((e = t[this.a + 3]),
                        (r |= (127 & e) << 21),
                        128 > e
                          ? ((this.a += 4), St(this), r)
                          : ((e = t[this.a + 4]),
                            (r |= (15 & e) << 28),
                            128 > e
                              ? ((this.a += 5), St(this), r >>> 0)
                              : ((this.a += 5),
                                128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  128 <= t[this.a++] &&
                                  k(!1),
                                St(this),
                                r)))));
          }),
          (mt.prototype.readUnsignedVarint32 = mt.prototype.s),
          (mt.prototype.da = function () {
            return ~~this.s();
          }),
          (mt.prototype.readSignedVarint32 = mt.prototype.da),
          (mt.prototype.O = function () {
            return this.s().toString();
          }),
          (mt.prototype.Ea = function () {
            return this.da().toString();
          }),
          (mt.prototype.readSignedVarint32String = mt.prototype.Ea),
          (mt.prototype.Ia = function () {
            var t = this.s();
            return (t >>> 1) ^ -(1 & t);
          }),
          (mt.prototype.readZigzagVarint32 = mt.prototype.Ia),
          (mt.prototype.Ga = function () {
            return this.w(nt);
          }),
          (mt.prototype.readUnsignedVarint64 = mt.prototype.Ga),
          (mt.prototype.Ha = function () {
            return this.w(ht);
          }),
          (mt.prototype.readUnsignedVarint64String = mt.prototype.Ha),
          (mt.prototype.ra = function () {
            return this.w(it);
          }),
          (mt.prototype.readSignedVarint64 = mt.prototype.ra),
          (mt.prototype.Fa = function () {
            return this.w(ft);
          }),
          (mt.prototype.readSignedVarint64String = mt.prototype.Fa),
          (mt.prototype.Ja = function () {
            return this.w(st);
          }),
          (mt.prototype.readZigzagVarint64 = mt.prototype.Ja),
          (mt.prototype.fb = function () {
            return this.ea(lt);
          }),
          (mt.prototype.readZigzagVarintHash64 = mt.prototype.fb),
          (mt.prototype.Ka = function () {
            return this.ea(ft);
          }),
          (mt.prototype.readZigzagVarint64String = mt.prototype.Ka),
          (mt.prototype.Fc = function () {
            var t = this.b[this.a];
            return ((this.a += 1), St(this), t);
          }),
          (mt.prototype.readUint8 = mt.prototype.Fc),
          (mt.prototype.Dc = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1];
            return ((this.a += 2), St(this), (t << 0) | (e << 8));
          }),
          (mt.prototype.readUint16 = mt.prototype.Dc),
          (mt.prototype.m = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1],
              r = this.b[this.a + 2],
              o = this.b[this.a + 3];
            return (
              (this.a += 4),
              St(this),
              ((t << 0) | (e << 8) | (r << 16) | (o << 24)) >>> 0
            );
          }),
          (mt.prototype.readUint32 = mt.prototype.m),
          (mt.prototype.fa = function () {
            var t = this.m(),
              e = this.m();
            return nt(t, e);
          }),
          (mt.prototype.readUint64 = mt.prototype.fa),
          (mt.prototype.ga = function () {
            var t = this.m(),
              e = this.m();
            return ht(t, e);
          }),
          (mt.prototype.readUint64String = mt.prototype.ga),
          (mt.prototype.Xb = function () {
            var t = this.b[this.a];
            return ((this.a += 1), St(this), (t << 24) >> 24);
          }),
          (mt.prototype.readInt8 = mt.prototype.Xb),
          (mt.prototype.Vb = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1];
            return (
              (this.a += 2),
              St(this),
              (((t << 0) | (e << 8)) << 16) >> 16
            );
          }),
          (mt.prototype.readInt16 = mt.prototype.Vb),
          (mt.prototype.P = function () {
            var t = this.b[this.a],
              e = this.b[this.a + 1],
              r = this.b[this.a + 2],
              o = this.b[this.a + 3];
            return (
              (this.a += 4),
              St(this),
              (t << 0) | (e << 8) | (r << 16) | (o << 24)
            );
          }),
          (mt.prototype.readInt32 = mt.prototype.P),
          (mt.prototype.ba = function () {
            var t = this.m(),
              e = this.m();
            return it(t, e);
          }),
          (mt.prototype.readInt64 = mt.prototype.ba),
          (mt.prototype.ca = function () {
            var t = this.m(),
              e = this.m();
            return ft(t, e);
          }),
          (mt.prototype.readInt64String = mt.prototype.ca),
          (mt.prototype.aa = function () {
            var t = this.m();
            return ct(t, 0);
          }),
          (mt.prototype.readFloat = mt.prototype.aa),
          (mt.prototype.Z = function () {
            var t = this.m(),
              e = this.m();
            return ut(t, e);
          }),
          (mt.prototype.readDouble = mt.prototype.Z),
          (mt.prototype.oa = function () {
            var t = !!this.b[this.a++];
            return (St(this), t);
          }),
          (mt.prototype.readBool = mt.prototype.oa),
          (mt.prototype.qa = function () {
            return this.da();
          }),
          (mt.prototype.readEnum = mt.prototype.qa),
          (mt.prototype.ta = function (t, e) {
            var r = this.a;
            ((this.a += t), St(this));
            var o = k(this.b);
            if (J) {
              var n;
              e
                ? (n = G) || (n = G = new TextDecoder("utf-8", { fatal: !0 }))
                : (n = Z) || (n = Z = new TextDecoder("utf-8", { fatal: !1 }));
              var i = r + t;
              o = 0 === r && i === o.length ? o : o.subarray(r, i);
              try {
                var a = n.decode(o);
              } catch (u) {
                if (e) {
                  if (void 0 === X) {
                    try {
                      n.decode(new Uint8Array([128]));
                    } catch (l) {}
                    try {
                      (n.decode(new Uint8Array([97])), (X = !0));
                    } catch (l) {
                      X = !1;
                    }
                  }
                  e = !X;
                }
                throw (e && (G = void 0), u);
              }
            } else {
              ((t = r + t), (a = []));
              for (var s, p, c = null; r < t; )
                ((s = o[r++]),
                  128 > s
                    ? a.push(s)
                    : 224 > s
                      ? r >= t
                        ? H(e, a)
                        : ((p = o[r++]),
                          194 > s || 128 !== (192 & p)
                            ? (r--, H(e, a))
                            : ((s = ((31 & s) << 6) | (63 & p)),
                              k(128 <= s && 2047 >= s),
                              a.push(s)))
                      : 240 > s
                        ? r >= t - 1
                          ? H(e, a)
                          : ((p = o[r++]),
                            128 !== (192 & p) ||
                            (224 === s && 160 > p) ||
                            (237 === s && 160 <= p) ||
                            128 !== (192 & (n = o[r++]))
                              ? (r--, H(e, a))
                              : ((s =
                                  ((15 & s) << 12) |
                                  ((63 & p) << 6) |
                                  (63 & n)),
                                k(2048 <= s && 65535 >= s),
                                k(55296 > s || 57343 < s),
                                a.push(s)))
                        : 244 >= s
                          ? r >= t - 2
                            ? H(e, a)
                            : ((p = o[r++]),
                              128 !== (192 & p) ||
                              0 !== (p - 144 + (s << 28)) >> 30 ||
                              128 !== (192 & (n = o[r++])) ||
                              128 !== (192 & (i = o[r++]))
                                ? (r--, H(e, a))
                                : ((s =
                                    ((7 & s) << 18) |
                                    ((63 & p) << 12) |
                                    ((63 & n) << 6) |
                                    (63 & i)),
                                  k(65536 <= s && 1114111 >= s),
                                  (s -= 65536),
                                  a.push(
                                    55296 + ((s >> 10) & 1023),
                                    56320 + (1023 & s),
                                  )))
                          : H(e, a),
                  8192 <= a.length && ((c = q(c, a)), (a.length = 0)));
              (k(r === t, "expected " + r + " === " + t), (a = q(c, a)));
            }
            return a;
          }),
          (mt.prototype.readString = mt.prototype.ta),
          (mt.prototype.pa = function (t) {
            if (0 > t || this.a + t > this.b.length)
              return (
                (this.v = !0),
                C("Invalid byte length!"),
                new Uint8Array(0)
              );
            var e = this.b.subarray(this.a, this.a + t);
            return ((this.a += t), St(this), e);
          }),
          (mt.prototype.readBytes = mt.prototype.pa),
          (mt.prototype.ha = function () {
            return this.w(lt);
          }),
          (mt.prototype.readVarintHash64 = mt.prototype.ha),
          (mt.prototype.$ = function () {
            var t = this.b,
              e = this.a,
              r = t[e],
              o = t[e + 1],
              n = t[e + 2],
              i = t[e + 3],
              a = t[e + 4],
              s = t[e + 5],
              p = t[e + 6];
            return (
              (t = t[e + 7]),
              (this.a += 8),
              String.fromCharCode(r, o, n, i, a, s, p, t)
            );
          }),
          (mt.prototype.readFixedHash64 = mt.prototype.$),
          k(!0),
          f("jspb.BinaryReader", kt, void 0));
        var At = [];
        function Et(t, e, r) {
          if (At.length) {
            var o = At.pop();
            return (t && o.a.H(t, e, r), o);
          }
          return new kt(t, e, r);
        }
        function Ct(t, e) {
          k(2 == t.b);
          var r = t.a.s();
          r = t.a.B() + r;
          for (var o = []; t.a.B() < r; ) o.push(e.call(t.a));
          return o;
        }
        function Ft(t, e, r, o, n) {
          ((this.la = t),
            (this.Ba = e),
            (this.ka = r),
            (this.Na = o),
            (this.ma = n));
        }
        function Pt(t, e, r, o, n, i) {
          ((this.Za = t),
            (this.za = e),
            (this.Aa = r),
            (this.Wa = o),
            (this.Ab = n),
            (this.Nb = i));
        }
        function Bt() {}
        ((kt.clearInstanceCache = function () {
          At = [];
        }),
          (kt.getInstanceCacheLength = function () {
            return At.length;
          }),
          (kt.alloc = Et),
          (kt.prototype.zb = Et),
          (kt.prototype.alloc = kt.prototype.zb),
          (kt.prototype.Ca = function () {
            (this.a.clear(),
              (this.b = this.f = -1),
              (this.h = !1),
              (this.v = null),
              100 > At.length && At.push(this));
          }),
          (kt.prototype.free = kt.prototype.Ca),
          (kt.prototype.Fb = function () {
            return this.O;
          }),
          (kt.prototype.getFieldCursor = kt.prototype.Fb),
          (kt.prototype.B = function () {
            return this.a.B();
          }),
          (kt.prototype.getCursor = kt.prototype.B),
          (kt.prototype.Y = function () {
            return this.a.Y();
          }),
          (kt.prototype.getBuffer = kt.prototype.Y),
          (kt.prototype.Hb = function () {
            return this.f;
          }),
          (kt.prototype.getFieldNumber = kt.prototype.Hb),
          (kt.prototype.Lb = function () {
            return this.b;
          }),
          (kt.prototype.getWireType = kt.prototype.Lb),
          (kt.prototype.Mb = function () {
            return 2 == this.b;
          }),
          (kt.prototype.isDelimited = kt.prototype.Mb),
          (kt.prototype.bb = function () {
            return 4 == this.b;
          }),
          (kt.prototype.isEndGroup = kt.prototype.bb),
          (kt.prototype.getError = function () {
            return this.h || this.a.getError();
          }),
          (kt.prototype.getError = kt.prototype.getError),
          (kt.prototype.H = function (t, e, r) {
            (this.a.H(t, e, r), (this.b = this.f = -1));
          }),
          (kt.prototype.setBlock = kt.prototype.H),
          (kt.prototype.reset = function () {
            (this.a.reset(), (this.b = this.f = -1));
          }),
          (kt.prototype.reset = kt.prototype.reset),
          (kt.prototype.advance = function (t) {
            this.a.advance(t);
          }),
          (kt.prototype.advance = kt.prototype.advance),
          (kt.prototype.na = function () {
            if (this.a.ya()) return !1;
            if (this.getError()) return (C("Decoder hit an error"), !1);
            this.O = this.a.B();
            var t = this.a.s(),
              e = t >>> 3;
            return (
              (t &= 7),
              0 != t && 5 != t && 1 != t && 2 != t && 3 != t && 4 != t
                ? (C("Invalid wire type: %s (at position %s)", t, this.O),
                  (this.h = !0),
                  !1)
                : ((this.f = e), (this.b = t), !0)
            );
          }),
          (kt.prototype.nextField = kt.prototype.na),
          (kt.prototype.Oa = function () {
            this.a.mb((this.f << 3) | this.b);
          }),
          (kt.prototype.unskipHeader = kt.prototype.Oa),
          (kt.prototype.Kc = function () {
            var t = this.f;
            for (this.Oa(); this.na() && this.f == t; ) this.C();
            this.a.ya() || this.Oa();
          }),
          (kt.prototype.skipMatchingFields = kt.prototype.Kc),
          (kt.prototype.lb = function () {
            0 != this.b
              ? (C("Invalid wire type for skipVarintField"), this.C())
              : this.a.kb();
          }),
          (kt.prototype.skipVarintField = kt.prototype.lb),
          (kt.prototype.gb = function () {
            if (2 != this.b)
              (C("Invalid wire type for skipDelimitedField"), this.C());
            else {
              var t = this.a.s();
              this.a.advance(t);
            }
          }),
          (kt.prototype.skipDelimitedField = kt.prototype.gb),
          (kt.prototype.hb = function () {
            5 != this.b
              ? (C("Invalid wire type for skipFixed32Field"), this.C())
              : this.a.advance(4);
          }),
          (kt.prototype.skipFixed32Field = kt.prototype.hb),
          (kt.prototype.ib = function () {
            1 != this.b
              ? (C("Invalid wire type for skipFixed64Field"), this.C())
              : this.a.advance(8);
          }),
          (kt.prototype.skipFixed64Field = kt.prototype.ib),
          (kt.prototype.jb = function () {
            var t = this.f;
            do {
              if (!this.na()) {
                (C("Unmatched start-group tag: stream EOF"), (this.h = !0));
                break;
              }
              if (4 == this.b) {
                this.f != t && (C("Unmatched end-group tag"), (this.h = !0));
                break;
              }
              this.C();
            } while (1);
          }),
          (kt.prototype.skipGroup = kt.prototype.jb),
          (kt.prototype.C = function () {
            switch (this.b) {
              case 0:
                this.lb();
                break;
              case 1:
                this.ib();
                break;
              case 2:
                this.gb();
                break;
              case 5:
                this.hb();
                break;
              case 3:
                this.jb();
                break;
              default:
                C("Invalid wire encoding for field.");
            }
          }),
          (kt.prototype.skipField = kt.prototype.C),
          (kt.prototype.Gc = function (t, e) {
            (null === this.v && (this.v = {}), k(!this.v[t]), (this.v[t] = e));
          }),
          (kt.prototype.registerReadCallback = kt.prototype.Gc),
          (kt.prototype.Hc = function (t) {
            return (k(null !== this.v), (t = this.v[t]), k(t), t(this));
          }),
          (kt.prototype.runReadCallback = kt.prototype.Hc),
          (kt.prototype.Yb = function (t, e) {
            k(2 == this.b);
            var r = this.a.f,
              o = this.a.s();
            ((o = this.a.B() + o),
              this.a.setEnd(o),
              e(t, this),
              this.a.Ma(o),
              this.a.setEnd(r));
          }),
          (kt.prototype.readMessage = kt.prototype.Yb),
          (kt.prototype.Ub = function (t, e, r) {
            (k(3 == this.b),
              k(this.f == t),
              r(e, this),
              this.h ||
                4 == this.b ||
                (C("Group submessage did not end with an END_GROUP tag"),
                (this.h = !0)));
          }),
          (kt.prototype.readGroup = kt.prototype.Ub),
          (kt.prototype.Gb = function () {
            k(2 == this.b);
            var t = this.a.s(),
              e = this.a.B(),
              r = e + t;
            return ((t = xt(this.a.Y(), e, t)), this.a.Ma(r), t);
          }),
          (kt.prototype.getFieldDecoder = kt.prototype.Gb),
          (kt.prototype.P = function () {
            return (k(0 == this.b), this.a.da());
          }),
          (kt.prototype.readInt32 = kt.prototype.P),
          (kt.prototype.Wb = function () {
            return (k(0 == this.b), this.a.Ea());
          }),
          (kt.prototype.readInt32String = kt.prototype.Wb),
          (kt.prototype.ba = function () {
            return (k(0 == this.b), this.a.ra());
          }),
          (kt.prototype.readInt64 = kt.prototype.ba),
          (kt.prototype.ca = function () {
            return (k(0 == this.b), this.a.Fa());
          }),
          (kt.prototype.readInt64String = kt.prototype.ca),
          (kt.prototype.m = function () {
            return (k(0 == this.b), this.a.s());
          }),
          (kt.prototype.readUint32 = kt.prototype.m),
          (kt.prototype.Ec = function () {
            return (k(0 == this.b), this.a.O());
          }),
          (kt.prototype.readUint32String = kt.prototype.Ec),
          (kt.prototype.fa = function () {
            return (k(0 == this.b), this.a.Ga());
          }),
          (kt.prototype.readUint64 = kt.prototype.fa),
          (kt.prototype.ga = function () {
            return (k(0 == this.b), this.a.Ha());
          }),
          (kt.prototype.readUint64String = kt.prototype.ga),
          (kt.prototype.zc = function () {
            return (k(0 == this.b), this.a.Ia());
          }),
          (kt.prototype.readSint32 = kt.prototype.zc),
          (kt.prototype.Ac = function () {
            return (k(0 == this.b), this.a.Ja());
          }),
          (kt.prototype.readSint64 = kt.prototype.Ac),
          (kt.prototype.Bc = function () {
            return (k(0 == this.b), this.a.Ka());
          }),
          (kt.prototype.readSint64String = kt.prototype.Bc),
          (kt.prototype.Rb = function () {
            return (k(5 == this.b), this.a.m());
          }),
          (kt.prototype.readFixed32 = kt.prototype.Rb),
          (kt.prototype.Sb = function () {
            return (k(1 == this.b), this.a.fa());
          }),
          (kt.prototype.readFixed64 = kt.prototype.Sb),
          (kt.prototype.Tb = function () {
            return (k(1 == this.b), this.a.ga());
          }),
          (kt.prototype.readFixed64String = kt.prototype.Tb),
          (kt.prototype.vc = function () {
            return (k(5 == this.b), this.a.P());
          }),
          (kt.prototype.readSfixed32 = kt.prototype.vc),
          (kt.prototype.wc = function () {
            return (k(5 == this.b), this.a.P().toString());
          }),
          (kt.prototype.readSfixed32String = kt.prototype.wc),
          (kt.prototype.xc = function () {
            return (k(1 == this.b), this.a.ba());
          }),
          (kt.prototype.readSfixed64 = kt.prototype.xc),
          (kt.prototype.yc = function () {
            return (k(1 == this.b), this.a.ca());
          }),
          (kt.prototype.readSfixed64String = kt.prototype.yc),
          (kt.prototype.aa = function () {
            return (k(5 == this.b), this.a.aa());
          }),
          (kt.prototype.readFloat = kt.prototype.aa),
          (kt.prototype.Z = function () {
            return (k(1 == this.b), this.a.Z());
          }),
          (kt.prototype.readDouble = kt.prototype.Z),
          (kt.prototype.oa = function () {
            return (k(0 == this.b), !!this.a.s());
          }),
          (kt.prototype.readBool = kt.prototype.oa),
          (kt.prototype.qa = function () {
            return (k(0 == this.b), this.a.ra());
          }),
          (kt.prototype.readEnum = kt.prototype.qa),
          (kt.prototype.ta = function () {
            k(2 == this.b);
            var t = this.a.s();
            return this.a.ta(t, !0);
          }),
          (kt.prototype.readString = kt.prototype.ta),
          (kt.prototype.pa = function () {
            k(2 == this.b);
            var t = this.a.s();
            return this.a.pa(t);
          }),
          (kt.prototype.readBytes = kt.prototype.pa),
          (kt.prototype.ha = function () {
            return (k(0 == this.b), this.a.ha());
          }),
          (kt.prototype.readVarintHash64 = kt.prototype.ha),
          (kt.prototype.Cc = function () {
            return (k(0 == this.b), this.a.fb());
          }),
          (kt.prototype.readSintHash64 = kt.prototype.Cc),
          (kt.prototype.w = function (t) {
            return (k(0 == this.b), this.a.w(t));
          }),
          (kt.prototype.readSplitVarint64 = kt.prototype.w),
          (kt.prototype.ea = function (t) {
            return (
              k(0 == this.b),
              this.a.w(function (e, r) {
                return pt(e, r, t);
              })
            );
          }),
          (kt.prototype.readSplitZigzagVarint64 = kt.prototype.ea),
          (kt.prototype.$ = function () {
            return (k(1 == this.b), this.a.$());
          }),
          (kt.prototype.readFixedHash64 = kt.prototype.$),
          (kt.prototype.sa = function (t) {
            return (k(1 == this.b), this.a.sa(t));
          }),
          (kt.prototype.readSplitFixed64 = kt.prototype.sa),
          (kt.prototype.gc = function () {
            return Ct(this, this.a.da);
          }),
          (kt.prototype.readPackedInt32 = kt.prototype.gc),
          (kt.prototype.hc = function () {
            return Ct(this, this.a.Ea);
          }),
          (kt.prototype.readPackedInt32String = kt.prototype.hc),
          (kt.prototype.ic = function () {
            return Ct(this, this.a.ra);
          }),
          (kt.prototype.readPackedInt64 = kt.prototype.ic),
          (kt.prototype.jc = function () {
            return Ct(this, this.a.Fa);
          }),
          (kt.prototype.readPackedInt64String = kt.prototype.jc),
          (kt.prototype.qc = function () {
            return Ct(this, this.a.s);
          }),
          (kt.prototype.readPackedUint32 = kt.prototype.qc),
          (kt.prototype.rc = function () {
            return Ct(this, this.a.O);
          }),
          (kt.prototype.readPackedUint32String = kt.prototype.rc),
          (kt.prototype.sc = function () {
            return Ct(this, this.a.Ga);
          }),
          (kt.prototype.readPackedUint64 = kt.prototype.sc),
          (kt.prototype.tc = function () {
            return Ct(this, this.a.Ha);
          }),
          (kt.prototype.readPackedUint64String = kt.prototype.tc),
          (kt.prototype.nc = function () {
            return Ct(this, this.a.Ia);
          }),
          (kt.prototype.readPackedSint32 = kt.prototype.nc),
          (kt.prototype.oc = function () {
            return Ct(this, this.a.Ja);
          }),
          (kt.prototype.readPackedSint64 = kt.prototype.oc),
          (kt.prototype.pc = function () {
            return Ct(this, this.a.Ka);
          }),
          (kt.prototype.readPackedSint64String = kt.prototype.pc),
          (kt.prototype.bc = function () {
            return Ct(this, this.a.m);
          }),
          (kt.prototype.readPackedFixed32 = kt.prototype.bc),
          (kt.prototype.cc = function () {
            return Ct(this, this.a.fa);
          }),
          (kt.prototype.readPackedFixed64 = kt.prototype.cc),
          (kt.prototype.dc = function () {
            return Ct(this, this.a.ga);
          }),
          (kt.prototype.readPackedFixed64String = kt.prototype.dc),
          (kt.prototype.kc = function () {
            return Ct(this, this.a.P);
          }),
          (kt.prototype.readPackedSfixed32 = kt.prototype.kc),
          (kt.prototype.lc = function () {
            return Ct(this, this.a.ba);
          }),
          (kt.prototype.readPackedSfixed64 = kt.prototype.lc),
          (kt.prototype.mc = function () {
            return Ct(this, this.a.ca);
          }),
          (kt.prototype.readPackedSfixed64String = kt.prototype.mc),
          (kt.prototype.fc = function () {
            return Ct(this, this.a.aa);
          }),
          (kt.prototype.readPackedFloat = kt.prototype.fc),
          (kt.prototype.$b = function () {
            return Ct(this, this.a.Z);
          }),
          (kt.prototype.readPackedDouble = kt.prototype.$b),
          (kt.prototype.Zb = function () {
            return Ct(this, this.a.oa);
          }),
          (kt.prototype.readPackedBool = kt.prototype.Zb),
          (kt.prototype.ac = function () {
            return Ct(this, this.a.qa);
          }),
          (kt.prototype.readPackedEnum = kt.prototype.ac),
          (kt.prototype.uc = function () {
            return Ct(this, this.a.ha);
          }),
          (kt.prototype.readPackedVarintHash64 = kt.prototype.uc),
          (kt.prototype.ec = function () {
            return Ct(this, this.a.$);
          }),
          (kt.prototype.readPackedFixedHash64 = kt.prototype.ec),
          f("jspb.ExtensionFieldInfo", Ft, void 0),
          f("jspb.ExtensionFieldBinaryInfo", Pt, void 0),
          (Ft.prototype.F = function () {
            return !!this.ka;
          }),
          (Ft.prototype.isMessageType = Ft.prototype.F),
          f("jspb.Message", Bt, void 0),
          (Bt.GENERATE_TO_OBJECT = !0),
          (Bt.GENERATE_FROM_OBJECT = !0));
        var Ut = "function" == typeof Uint8Array;
        ((Bt.prototype.Ib = function () {
          return this.b;
        }),
          (Bt.prototype.getJsPbMessageId = Bt.prototype.Ib),
          (Bt.initialize = function (t, e, r, o, n, i) {
            if (
              ((t.c = null),
              e || (e = r ? [r] : []),
              (t.b = r ? String(r) : void 0),
              (t.D = 0 === r ? -1 : 0),
              (t.u = e),
              (r = t.u.length),
              (e = -1),
              !r ||
              ((e = r - 1),
              (r = t.u[e]),
              null === r ||
                "object" != typeof r ||
                Array.isArray(r) ||
                (Ut && r instanceof Uint8Array))
                ? -1 < o
                  ? ((t.G = Math.max(o, e + 1 - t.D)), (t.i = null))
                  : (t.G = Number.MAX_VALUE)
                : ((t.G = e - t.D), (t.i = r)),
              (t.a = {}),
              n)
            )
              for (o = 0; o < n.length; o++)
                ((e = n[o]),
                  e < t.G
                    ? ((e += t.D), (t.u[e] = t.u[e] || Rt))
                    : (jt(t), (t.i[e] = t.i[e] || Rt)));
            if (i && i.length) for (o = 0; o < i.length; o++) qt(t, i[o]);
          }));
        var Rt = Object.freeze ? Object.freeze([]) : [];
        function jt(t) {
          var e = t.G + t.D;
          t.u[e] || (t.i = t.u[e] = {});
        }
        function It(t, e, r) {
          for (var o = [], n = 0; n < t.length; n++)
            o[n] = e.call(t[n], r, t[n]);
          return o;
        }
        function Mt(t, e) {
          if (e < t.G) {
            e += t.D;
            var r = t.u[e];
            return r === Rt ? (t.u[e] = []) : r;
          }
          if (t.i) return ((r = t.i[e]), r === Rt ? (t.i[e] = []) : r);
        }
        function _t(t, e) {
          return ((t = Mt(t, e)), null == t ? t : +t);
        }
        function Ot(t, e) {
          return ((t = Mt(t, e)), null == t ? t : !!t);
        }
        function Dt(t) {
          return null == t || "string" === typeof t
            ? t
            : Ut && t instanceof Uint8Array
              ? V(t)
              : (C("Cannot coerce to b64 string: " + d(t)), null);
        }
        function Nt(t) {
          return null == t || t instanceof Uint8Array
            ? t
            : "string" === typeof t
              ? W(t)
              : (C("Cannot coerce to Uint8Array: " + d(t)), null);
        }
        function Vt(t) {
          if (t && 1 < t.length) {
            var e = d(t[0]);
            m(t, function (t) {
              d(t) != e &&
                C(
                  "Inconsistent type in JSPB repeated field array. Got " +
                    d(t) +
                    " expected " +
                    e,
                );
            });
          }
        }
        function Wt(t, e, r) {
          return ((t = Mt(t, e)), null == t ? r : t);
        }
        function zt(t, e, r) {
          return (
            F(t, Bt),
            e < t.G ? (t.u[e + t.D] = r) : (jt(t), (t.i[e] = r)),
            t
          );
        }
        function Lt(t, e, r, o) {
          return (
            F(t, Bt),
            r !== o
              ? zt(t, e, r)
              : e < t.G
                ? (t.u[e + t.D] = null)
                : (jt(t), delete t.i[e]),
            t
          );
        }
        function Ht(t, e, r, o) {
          return (
            F(t, Bt),
            (r = qt(t, r)) &&
              r !== e &&
              void 0 !== o &&
              (t.c && r in t.c && (t.c[r] = void 0), zt(t, r, void 0)),
            zt(t, e, o)
          );
        }
        function qt(t, e) {
          for (var r, o, n = 0; n < e.length; n++) {
            var i = e[n],
              a = Mt(t, i);
            null != a && ((r = i), (o = a), zt(t, i, void 0));
          }
          return r ? (zt(t, r, o), r) : 0;
        }
        function Gt(t, e, r) {
          if ((t.c || (t.c = {}), !t.c[r])) {
            for (var o = Mt(t, r), n = [], i = 0; i < o.length; i++)
              n[i] = new e(o[i]);
            t.c[r] = n;
          }
        }
        function Zt(t) {
          if (t.c)
            for (var e in t.c) {
              var r = t.c[e];
              if (Array.isArray(r))
                for (var o = 0; o < r.length; o++) r[o] && r[o].g();
              else r && r.g();
            }
        }
        function Xt(t, e) {
          ((t = t || {}), (e = e || {}));
          var r,
            o = {};
          for (r in t) o[r] = 0;
          for (r in e) o[r] = 0;
          for (r in o) if (!Jt(t[r], e[r])) return !1;
          return !0;
        }
        function Jt(t, e) {
          if (t == e) return !0;
          if (!y(t) || !y(e))
            return (
              !!(
                ("number" === typeof t && isNaN(t)) ||
                ("number" === typeof e && isNaN(e))
              ) && String(t) == String(e)
            );
          if (t.constructor != e.constructor) return !1;
          if (Ut && t.constructor === Uint8Array) {
            if (t.length != e.length) return !1;
            for (var r = 0; r < t.length; r++) if (t[r] != e[r]) return !1;
            return !0;
          }
          if (t.constructor === Array) {
            var o = void 0,
              n = void 0,
              i = Math.max(t.length, e.length);
            for (r = 0; r < i; r++) {
              var a = t[r],
                s = e[r];
              if (
                (a &&
                  a.constructor == Object &&
                  (k(void 0 === o),
                  k(r === t.length - 1),
                  (o = a),
                  (a = void 0)),
                s &&
                  s.constructor == Object &&
                  (k(void 0 === n),
                  k(r === e.length - 1),
                  (n = s),
                  (s = void 0)),
                !Jt(a, s))
              )
                return !1;
            }
            return (!o && !n) || ((o = o || {}), (n = n || {}), Xt(o, n));
          }
          if (t.constructor === Object) return Xt(t, e);
          throw Error("Invalid type in JSPB array");
        }
        function Kt(t) {
          return new t.constructor($t(t.g()));
        }
        function $t(t) {
          if (Array.isArray(t)) {
            for (var e = Array(t.length), r = 0; r < t.length; r++) {
              var o = t[r];
              null != o && (e[r] = "object" == typeof o ? $t(k(o)) : o);
            }
            return e;
          }
          if (Ut && t instanceof Uint8Array) return new Uint8Array(t);
          for (r in ((e = {}), t))
            ((o = t[r]),
              null != o && (e[r] = "object" == typeof o ? $t(k(o)) : o));
          return e;
        }
        ((Bt.toObjectList = It),
          (Bt.toObjectExtension = function (t, e, r, o, n) {
            for (var i in r) {
              var a = r[i],
                s = o.call(t, a);
              if (null != s) {
                for (var p in a.Ba) if (a.Ba.hasOwnProperty(p)) break;
                e[p] = a.Na ? (a.ma ? It(s, a.Na, n) : a.Na(n, s)) : s;
              }
            }
          }),
          (Bt.serializeBinaryExtensions = function (t, e, r, o) {
            for (var n in r) {
              var i = r[n],
                a = i.Za;
              if (!i.Aa)
                throw Error(
                  "Message extension present that was generated without binary serialization support",
                );
              var s = o.call(t, a);
              if (null != s)
                if (a.F()) {
                  if (!i.Wa)
                    throw Error(
                      "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
                    );
                  i.Aa.call(e, a.la, s, i.Wa);
                } else i.Aa.call(e, a.la, s);
            }
          }),
          (Bt.readBinaryExtension = function (t, e, r, o, n) {
            var i = r[e.f];
            if (i) {
              if (((r = i.Za), !i.za))
                throw Error(
                  "Deserializing extension whose generated code does not support binary format",
                );
              if (r.F()) {
                var a = new r.ka();
                i.za.call(e, a, i.Ab);
              } else a = i.za.call(e);
              r.ma && !i.Nb
                ? (e = o.call(t, r))
                  ? e.push(a)
                  : n.call(t, r, [a])
                : n.call(t, r, a);
            } else e.C();
          }),
          (Bt.getField = Mt),
          (Bt.getRepeatedField = function (t, e) {
            return Mt(t, e);
          }),
          (Bt.getOptionalFloatingPointField = _t),
          (Bt.getBooleanField = Ot),
          (Bt.getRepeatedFloatingPointField = function (t, e) {
            var r = Mt(t, e);
            if ((t.a || (t.a = {}), !t.a[e])) {
              for (var o = 0; o < r.length; o++) r[o] = +r[o];
              t.a[e] = !0;
            }
            return r;
          }),
          (Bt.getRepeatedBooleanField = function (t, e) {
            var r = Mt(t, e);
            if ((t.a || (t.a = {}), !t.a[e])) {
              for (var o = 0; o < r.length; o++) r[o] = !!r[o];
              t.a[e] = !0;
            }
            return r;
          }),
          (Bt.bytesAsB64 = Dt),
          (Bt.bytesAsU8 = Nt),
          (Bt.bytesListAsB64 = function (t) {
            return (Vt(t), t.length && "string" !== typeof t[0] ? T(t, Dt) : t);
          }),
          (Bt.bytesListAsU8 = function (t) {
            return (
              Vt(t),
              !t.length || t[0] instanceof Uint8Array ? t : T(t, Nt)
            );
          }),
          (Bt.getFieldWithDefault = Wt),
          (Bt.getBooleanFieldWithDefault = function (t, e, r) {
            return ((t = Ot(t, e)), null == t ? r : t);
          }),
          (Bt.getFloatingPointFieldWithDefault = function (t, e, r) {
            return ((t = _t(t, e)), null == t ? r : t);
          }),
          (Bt.getFieldProto3 = Wt),
          (Bt.getMapField = function (t, e, r, o) {
            if ((t.c || (t.c = {}), e in t.c)) return t.c[e];
            var n = Mt(t, e);
            if (!n) {
              if (r) return;
              ((n = []), zt(t, e, n));
            }
            return (t.c[e] = new B(n, o));
          }),
          (Bt.setField = zt),
          (Bt.setProto3IntField = function (t, e, r) {
            return Lt(t, e, r, 0);
          }),
          (Bt.setProto3FloatField = function (t, e, r) {
            return Lt(t, e, r, 0);
          }),
          (Bt.setProto3BooleanField = function (t, e, r) {
            return Lt(t, e, r, !1);
          }),
          (Bt.setProto3StringField = function (t, e, r) {
            return Lt(t, e, r, "");
          }),
          (Bt.setProto3BytesField = function (t, e, r) {
            return Lt(t, e, r, "");
          }),
          (Bt.setProto3EnumField = function (t, e, r) {
            return Lt(t, e, r, 0);
          }),
          (Bt.setProto3StringIntField = function (t, e, r) {
            return Lt(t, e, r, "0");
          }),
          (Bt.addToRepeatedField = function (t, e, r, o) {
            return (
              F(t, Bt),
              (e = Mt(t, e)),
              void 0 != o ? e.splice(o, 0, r) : e.push(r),
              t
            );
          }),
          (Bt.setOneofField = Ht),
          (Bt.computeOneofCase = qt),
          (Bt.getWrapperField = function (t, e, r, o) {
            if ((t.c || (t.c = {}), !t.c[r])) {
              var n = Mt(t, r);
              (o || n) && (t.c[r] = new e(n));
            }
            return t.c[r];
          }),
          (Bt.getRepeatedWrapperField = function (t, e, r) {
            return (Gt(t, e, r), (e = t.c[r]), e == Rt && (e = t.c[r] = []), e);
          }),
          (Bt.setWrapperField = function (t, e, r) {
            (F(t, Bt), t.c || (t.c = {}));
            var o = r ? r.g() : r;
            return ((t.c[e] = r), zt(t, e, o));
          }),
          (Bt.setOneofWrapperField = function (t, e, r, o) {
            (F(t, Bt), t.c || (t.c = {}));
            var n = o ? o.g() : o;
            return ((t.c[e] = o), Ht(t, e, r, n));
          }),
          (Bt.setRepeatedWrapperField = function (t, e, r) {
            (F(t, Bt), t.c || (t.c = {}), (r = r || []));
            for (var o = [], n = 0; n < r.length; n++) o[n] = r[n].g();
            return ((t.c[e] = r), zt(t, e, o));
          }),
          (Bt.addToRepeatedWrapperField = function (t, e, r, o, n) {
            Gt(t, o, e);
            var i = t.c[e];
            return (
              i || (i = t.c[e] = []),
              (r = r || new o()),
              (t = Mt(t, e)),
              void 0 != n
                ? (i.splice(n, 0, r), t.splice(n, 0, r.g()))
                : (i.push(r), t.push(r.g())),
              r
            );
          }),
          (Bt.toMap = function (t, e, r, o) {
            for (var n = {}, i = 0; i < t.length; i++)
              n[e.call(t[i])] = r ? r.call(t[i], o, t[i]) : t[i];
            return n;
          }),
          (Bt.prototype.g = function () {
            return (Zt(this), this.u);
          }),
          (Bt.prototype.toArray = Bt.prototype.g),
          (Bt.prototype.toString = function () {
            return (Zt(this), this.u.toString());
          }),
          (Bt.prototype.getExtension = function (t) {
            if (this.i) {
              this.c || (this.c = {});
              var e = t.la;
              if (t.ma) {
                if (t.F())
                  return (
                    this.c[e] ||
                      (this.c[e] = T(this.i[e] || [], function (e) {
                        return new t.ka(e);
                      })),
                    this.c[e]
                  );
              } else if (t.F())
                return (
                  !this.c[e] && this.i[e] && (this.c[e] = new t.ka(this.i[e])),
                  this.c[e]
                );
              return this.i[e];
            }
          }),
          (Bt.prototype.getExtension = Bt.prototype.getExtension),
          (Bt.prototype.Jc = function (t, e) {
            (this.c || (this.c = {}), jt(this));
            var r = t.la;
            return (
              t.ma
                ? ((e = e || []),
                  t.F()
                    ? ((this.c[r] = e),
                      (this.i[r] = T(e, function (t) {
                        return t.g();
                      })))
                    : (this.i[r] = e))
                : t.F()
                  ? ((this.c[r] = e), (this.i[r] = e ? e.g() : e))
                  : (this.i[r] = e),
              this
            );
          }),
          (Bt.prototype.setExtension = Bt.prototype.Jc),
          (Bt.difference = function (t, e) {
            if (!(t instanceof e.constructor))
              throw Error("Messages have different types.");
            var r = t.g();
            e = e.g();
            var o = [],
              n = 0,
              i = r.length > e.length ? r.length : e.length;
            for (t.b && ((o[0] = t.b), (n = 1)); n < i; n++)
              Jt(r[n], e[n]) || (o[n] = e[n]);
            return new t.constructor(o);
          }),
          (Bt.equals = function (t, e) {
            return (
              t == e ||
              (!(!t || !e) && t instanceof e.constructor && Jt(t.g(), e.g()))
            );
          }),
          (Bt.compareExtensions = Xt),
          (Bt.compareFields = Jt),
          (Bt.prototype.Bb = function () {
            return Kt(this);
          }),
          (Bt.prototype.cloneMessage = Bt.prototype.Bb),
          (Bt.prototype.clone = function () {
            return Kt(this);
          }),
          (Bt.prototype.clone = Bt.prototype.clone),
          (Bt.clone = function (t) {
            return Kt(t);
          }),
          (Bt.copyInto = function (t, e) {
            (F(t, Bt),
              F(e, Bt),
              k(
                t.constructor == e.constructor,
                "Copy source and target message should have the same type.",
              ),
              (t = Kt(t)));
            for (
              var r = e.g(), o = t.g(), n = (r.length = 0);
              n < o.length;
              n++
            )
              r[n] = o[n];
            ((e.c = t.c), (e.i = t.i));
          }),
          (Bt.registerMessageType = function (t, e) {
            e.ve = t;
          }));
        var Yt = {
          dump: function (t) {
            return (
              F(t, Bt, "jspb.Message instance expected"),
              k(
                t.getExtension,
                "Only unobfuscated and unoptimized compilation modes supported.",
              ),
              Yt.X(t)
            );
          },
        };
        function Qt() {
          this.a = [];
        }
        function te(t, e) {
          ((this.lo = t), (this.hi = e));
        }
        function ee(t, e) {
          var r = 65535 & t;
          t >>>= 16;
          var o = 65535 & e,
            n = e >>> 16;
          for (
            e = r * o + 65536 * ((r * n) & 65535) + 65536 * ((t * o) & 65535),
              r = t * n + ((r * n) >>> 16) + ((t * o) >>> 16);
            4294967296 <= e;
          )
            ((e -= 4294967296), (r += 1));
          return new te(e >>> 0, r >>> 0);
        }
        function re(t) {
          for (
            var e = new te(0, 0), r = new te(0, 0), o = 0;
            o < t.length;
            o++
          ) {
            if ("0" > t[o] || "9" < t[o]) return null;
            ((r.lo = parseInt(t[o], 10)), (e = e.eb(10).add(r)));
          }
          return e;
        }
        function oe(t, e) {
          ((this.lo = t), (this.hi = e));
        }
        function ne(t) {
          var e = 0 < t.length && "-" == t[0];
          return (
            e && (t = t.substring(1)),
            (t = re(t)),
            null === t
              ? null
              : (e && (t = new te(0, 0).sub(t)), new oe(t.lo, t.hi))
          );
        }
        function ie() {
          ((this.f = []), (this.b = 0), (this.a = new Qt()), (this.h = []));
        }
        function ae(t, e) {
          var r = t.a.end();
          (t.f.push(r), t.f.push(e), (t.b += r.length + e.length));
        }
        function se(t, e) {
          return (
            ce(t, e, 2),
            (e = t.a.end()),
            t.f.push(e),
            (t.b += e.length),
            e.push(t.b),
            e
          );
        }
        function pe(t, e) {
          var r = e.pop();
          for (r = t.b + t.a.length() - r, k(0 <= r); 127 < r; )
            (e.push((127 & r) | 128), (r >>>= 7), t.b++);
          (e.push(r), t.b++);
        }
        function ce(t, e, r) {
          (k(1 <= e && e == Math.floor(e)), t.a.j(8 * e + r));
        }
        function ue(t, e, r) {
          null != r && (ce(t, e, 0), t.a.j(r));
        }
        function le(t, e, r) {
          null != r && (ce(t, e, 0), t.a.M(r));
        }
        (f("jspb.debug.dump", Yt.dump, void 0),
          (Yt.X = function (t) {
            var e = d(t);
            if (
              "number" == e ||
              "string" == e ||
              "boolean" == e ||
              "null" == e ||
              "undefined" == e ||
              ("undefined" !== typeof Uint8Array && t instanceof Uint8Array)
            )
              return t;
            if ("array" == e) return (E(t), T(t, Yt.X));
            if (t instanceof B) {
              var r = {};
              t = t.entries();
              for (var o = t.next(); !o.done; o = t.next())
                r[o.value[0]] = Yt.X(o.value[1]);
              return r;
            }
            (F(t, Bt, "Only messages expected: " + t), (e = t.constructor));
            var n = { $name: e.name || e.displayName };
            for (s in e.prototype) {
              var i = /^get([A-Z]\w*)/.exec(s);
              if (i && "getExtension" != s && "getJsPbMessageId" != s) {
                var a = "has" + i[1];
                (t[a] && !t[a]()) || ((a = t[s]()), (n[Yt.$a(i[1])] = Yt.X(a)));
              }
            }
            if (t.extensionObject_)
              return (
                (n.$extensions =
                  "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly"),
                n
              );
            for (o in e.extensions)
              if (/^\d+$/.test(o)) {
                a = e.extensions[o];
                var s = t.getExtension(a);
                ((i = void 0), (a = a.Ba));
                var p = [],
                  c = 0;
                for (i in a) p[c++] = i;
                ((i = p[0]),
                  null != s &&
                    (r || (r = n.$extensions = {}), (r[Yt.$a(i)] = Yt.X(s))));
              }
            return n;
          }),
          (Yt.$a = function (t) {
            return t.replace(/^[A-Z]/, function (t) {
              return t.toLowerCase();
            });
          }),
          f("jspb.BinaryEncoder", Qt, void 0),
          (Qt.prototype.length = function () {
            return this.a.length;
          }),
          (Qt.prototype.length = Qt.prototype.length),
          (Qt.prototype.end = function () {
            var t = this.a;
            return ((this.a = []), t);
          }),
          (Qt.prototype.end = Qt.prototype.end),
          (Qt.prototype.l = function (t, e) {
            for (
              k(t == Math.floor(t)),
                k(e == Math.floor(e)),
                k(0 <= t && 4294967296 > t),
                k(0 <= e && 4294967296 > e);
              0 < e || 127 < t;
            )
              (this.a.push((127 & t) | 128),
                (t = ((t >>> 7) | (e << 25)) >>> 0),
                (e >>>= 7));
            this.a.push(t);
          }),
          (Qt.prototype.writeSplitVarint64 = Qt.prototype.l),
          (Qt.prototype.A = function (t, e) {
            (k(t == Math.floor(t)),
              k(e == Math.floor(e)),
              k(0 <= t && 4294967296 > t),
              k(0 <= e && 4294967296 > e),
              this.o(t),
              this.o(e));
          }),
          (Qt.prototype.writeSplitFixed64 = Qt.prototype.A),
          (Qt.prototype.j = function (t) {
            for (k(t == Math.floor(t)), k(0 <= t && 4294967296 > t); 127 < t; )
              (this.a.push((127 & t) | 128), (t >>>= 7));
            this.a.push(t);
          }),
          (Qt.prototype.writeUnsignedVarint32 = Qt.prototype.j),
          (Qt.prototype.M = function (t) {
            if (
              (k(t == Math.floor(t)),
              k(-2147483648 <= t && 2147483648 > t),
              0 <= t)
            )
              this.j(t);
            else {
              for (var e = 0; 9 > e; e++)
                (this.a.push((127 & t) | 128), (t >>= 7));
              this.a.push(1);
            }
          }),
          (Qt.prototype.writeSignedVarint32 = Qt.prototype.M),
          (Qt.prototype.va = function (t) {
            (k(t == Math.floor(t)),
              k(0 <= t && 0x10000000000000000 > t),
              Q(t),
              this.l(K, $));
          }),
          (Qt.prototype.writeUnsignedVarint64 = Qt.prototype.va),
          (Qt.prototype.ua = function (t) {
            (k(t == Math.floor(t)),
              k(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              Q(t),
              this.l(K, $));
          }),
          (Qt.prototype.writeSignedVarint64 = Qt.prototype.ua),
          (Qt.prototype.wa = function (t) {
            (k(t == Math.floor(t)),
              k(-2147483648 <= t && 2147483648 > t),
              this.j(((t << 1) ^ (t >> 31)) >>> 0));
          }),
          (Qt.prototype.writeZigzagVarint32 = Qt.prototype.wa),
          (Qt.prototype.xa = function (t) {
            (k(t == Math.floor(t)),
              k(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              tt(t),
              this.l(K, $));
          }),
          (Qt.prototype.writeZigzagVarint64 = Qt.prototype.xa),
          (Qt.prototype.Ta = function (t) {
            this.W(yt(t));
          }),
          (Qt.prototype.writeZigzagVarint64String = Qt.prototype.Ta),
          (Qt.prototype.W = function (t) {
            var e = this;
            (ot(t),
              at(K, $, function (t, r) {
                e.l(t >>> 0, r >>> 0);
              }));
          }),
          (Qt.prototype.writeZigzagVarintHash64 = Qt.prototype.W),
          (Qt.prototype.ae = function (t) {
            (k(t == Math.floor(t)),
              k(0 <= t && 256 > t),
              this.a.push((t >>> 0) & 255));
          }),
          (Qt.prototype.writeUint8 = Qt.prototype.ae),
          (Qt.prototype.$d = function (t) {
            (k(t == Math.floor(t)),
              k(0 <= t && 65536 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255));
          }),
          (Qt.prototype.writeUint16 = Qt.prototype.$d),
          (Qt.prototype.o = function (t) {
            (k(t == Math.floor(t)),
              k(0 <= t && 4294967296 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255),
              this.a.push((t >>> 16) & 255),
              this.a.push((t >>> 24) & 255));
          }),
          (Qt.prototype.writeUint32 = Qt.prototype.o),
          (Qt.prototype.V = function (t) {
            (k(t == Math.floor(t)),
              k(0 <= t && 0x10000000000000000 > t),
              Y(t),
              this.o(K),
              this.o($));
          }),
          (Qt.prototype.writeUint64 = Qt.prototype.V),
          (Qt.prototype.Pc = function (t) {
            (k(t == Math.floor(t)),
              k(-128 <= t && 128 > t),
              this.a.push((t >>> 0) & 255));
          }),
          (Qt.prototype.writeInt8 = Qt.prototype.Pc),
          (Qt.prototype.Oc = function (t) {
            (k(t == Math.floor(t)),
              k(-32768 <= t && 32768 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255));
          }),
          (Qt.prototype.writeInt16 = Qt.prototype.Oc),
          (Qt.prototype.S = function (t) {
            (k(t == Math.floor(t)),
              k(-2147483648 <= t && 2147483648 > t),
              this.a.push((t >>> 0) & 255),
              this.a.push((t >>> 8) & 255),
              this.a.push((t >>> 16) & 255),
              this.a.push((t >>> 24) & 255));
          }),
          (Qt.prototype.writeInt32 = Qt.prototype.S),
          (Qt.prototype.T = function (t) {
            (k(t == Math.floor(t)),
              k(-0x8000000000000000 <= t && 0x8000000000000000 > t),
              Q(t),
              this.A(K, $));
          }),
          (Qt.prototype.writeInt64 = Qt.prototype.T),
          (Qt.prototype.ja = function (t) {
            (k(t == Math.floor(t)),
              k(-0x8000000000000000 <= +t && 0x8000000000000000 > +t),
              ot(yt(t)),
              this.A(K, $));
          }),
          (Qt.prototype.writeInt64String = Qt.prototype.ja),
          (Qt.prototype.L = function (t) {
            (k(
              1 / 0 === t ||
                -1 / 0 === t ||
                isNaN(t) ||
                (-34028234663852886e22 <= t && 34028234663852886e22 >= t),
            ),
              et(t),
              this.o(K));
          }),
          (Qt.prototype.writeFloat = Qt.prototype.L),
          (Qt.prototype.J = function (t) {
            (k(
              1 / 0 === t ||
                -1 / 0 === t ||
                isNaN(t) ||
                (-17976931348623157e292 <= t && 17976931348623157e292 >= t),
            ),
              rt(t),
              this.o(K),
              this.o($));
          }),
          (Qt.prototype.writeDouble = Qt.prototype.J),
          (Qt.prototype.I = function (t) {
            (k("boolean" === typeof t || "number" === typeof t),
              this.a.push(t ? 1 : 0));
          }),
          (Qt.prototype.writeBool = Qt.prototype.I),
          (Qt.prototype.R = function (t) {
            (k(t == Math.floor(t)),
              k(-2147483648 <= t && 2147483648 > t),
              this.M(t));
          }),
          (Qt.prototype.writeEnum = Qt.prototype.R),
          (Qt.prototype.ia = function (t) {
            this.a.push.apply(this.a, t);
          }),
          (Qt.prototype.writeBytes = Qt.prototype.ia),
          (Qt.prototype.N = function (t) {
            (ot(t), this.l(K, $));
          }),
          (Qt.prototype.writeVarintHash64 = Qt.prototype.N),
          (Qt.prototype.K = function (t) {
            (ot(t), this.o(K), this.o($));
          }),
          (Qt.prototype.writeFixedHash64 = Qt.prototype.K),
          (Qt.prototype.U = function (t) {
            var e = this.a.length;
            A(t);
            for (var r = 0; r < t.length; r++) {
              var o = t.charCodeAt(r);
              if (128 > o) this.a.push(o);
              else if (2048 > o)
                (this.a.push((o >> 6) | 192), this.a.push((63 & o) | 128));
              else if (65536 > o)
                if (55296 <= o && 56319 >= o && r + 1 < t.length) {
                  var n = t.charCodeAt(r + 1);
                  56320 <= n &&
                    57343 >= n &&
                    ((o = 1024 * (o - 55296) + n - 56320 + 65536),
                    this.a.push((o >> 18) | 240),
                    this.a.push(((o >> 12) & 63) | 128),
                    this.a.push(((o >> 6) & 63) | 128),
                    this.a.push((63 & o) | 128),
                    r++);
                } else
                  (this.a.push((o >> 12) | 224),
                    this.a.push(((o >> 6) & 63) | 128),
                    this.a.push((63 & o) | 128));
            }
            return this.a.length - e;
          }),
          (Qt.prototype.writeString = Qt.prototype.U),
          f("jspb.arith.UInt64", te, void 0),
          (te.prototype.cmp = function (t) {
            return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
              ? -1
              : this.hi == t.hi && this.lo == t.lo
                ? 0
                : 1;
          }),
          (te.prototype.cmp = te.prototype.cmp),
          (te.prototype.La = function () {
            return new te(
              ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
              (this.hi >>> 1) >>> 0,
            );
          }),
          (te.prototype.rightShift = te.prototype.La),
          (te.prototype.Da = function () {
            return new te(
              (this.lo << 1) >>> 0,
              ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
            );
          }),
          (te.prototype.leftShift = te.prototype.Da),
          (te.prototype.cb = function () {
            return !!(2147483648 & this.hi);
          }),
          (te.prototype.msb = te.prototype.cb),
          (te.prototype.Ob = function () {
            return !!(1 & this.lo);
          }),
          (te.prototype.lsb = te.prototype.Ob),
          (te.prototype.Ua = function () {
            return 0 == this.lo && 0 == this.hi;
          }),
          (te.prototype.zero = te.prototype.Ua),
          (te.prototype.add = function (t) {
            return new te(
              (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + t.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
                0,
            );
          }),
          (te.prototype.add = te.prototype.add),
          (te.prototype.sub = function (t) {
            return new te(
              (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - t.hi) & 4294967295) >>> 0) -
                (0 > this.lo - t.lo ? 1 : 0)) >>>
                0,
            );
          }),
          (te.prototype.sub = te.prototype.sub),
          (te.mul32x32 = ee),
          (te.prototype.eb = function (t) {
            var e = ee(this.lo, t);
            return ((t = ee(this.hi, t)), (t.hi = t.lo), (t.lo = 0), e.add(t));
          }),
          (te.prototype.mul = te.prototype.eb),
          (te.prototype.Xa = function (t) {
            if (0 == t) return [];
            var e = new te(0, 0),
              r = new te(this.lo, this.hi);
            t = new te(t, 0);
            for (var o = new te(1, 0); !t.cb(); ) ((t = t.Da()), (o = o.Da()));
            for (; !o.Ua(); )
              (0 >= t.cmp(r) && ((e = e.add(o)), (r = r.sub(t))),
                (t = t.La()),
                (o = o.La()));
            return [e, r];
          }),
          (te.prototype.div = te.prototype.Xa),
          (te.prototype.toString = function () {
            for (var t = "", e = this; !e.Ua(); ) {
              e = e.Xa(10);
              var r = e[0];
              ((t = e[1].lo + t), (e = r));
            }
            return ("" == t && (t = "0"), t);
          }),
          (te.prototype.toString = te.prototype.toString),
          (te.fromString = re),
          (te.prototype.clone = function () {
            return new te(this.lo, this.hi);
          }),
          (te.prototype.clone = te.prototype.clone),
          f("jspb.arith.Int64", oe, void 0),
          (oe.prototype.add = function (t) {
            return new oe(
              (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + t.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
                0,
            );
          }),
          (oe.prototype.add = oe.prototype.add),
          (oe.prototype.sub = function (t) {
            return new oe(
              (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - t.hi) & 4294967295) >>> 0) -
                (0 > this.lo - t.lo ? 1 : 0)) >>>
                0,
            );
          }),
          (oe.prototype.sub = oe.prototype.sub),
          (oe.prototype.clone = function () {
            return new oe(this.lo, this.hi);
          }),
          (oe.prototype.clone = oe.prototype.clone),
          (oe.prototype.toString = function () {
            var t = 0 != (2147483648 & this.hi),
              e = new te(this.lo, this.hi);
            return (
              t && (e = new te(0, 0).sub(e)),
              (t ? "-" : "") + e.toString()
            );
          }),
          (oe.prototype.toString = oe.prototype.toString),
          (oe.fromString = ne),
          f("jspb.BinaryWriter", ie, void 0),
          (ie.prototype.pb = function (t, e, r) {
            ae(this, t.subarray(e, r));
          }),
          (ie.prototype.writeSerializedMessage = ie.prototype.pb),
          (ie.prototype.Pb = function (t, e, r) {
            null != t && null != e && null != r && this.pb(t, e, r);
          }),
          (ie.prototype.maybeWriteSerializedMessage = ie.prototype.Pb),
          (ie.prototype.reset = function () {
            ((this.f = []), this.a.end(), (this.b = 0), (this.h = []));
          }),
          (ie.prototype.reset = ie.prototype.reset),
          (ie.prototype.ab = function () {
            k(0 == this.h.length);
            for (
              var t = new Uint8Array(this.b + this.a.length()),
                e = this.f,
                r = e.length,
                o = 0,
                n = 0;
              n < r;
              n++
            ) {
              var i = e[n];
              (t.set(i, o), (o += i.length));
            }
            return (
              (e = this.a.end()),
              t.set(e, o),
              (o += e.length),
              k(o == t.length),
              (this.f = [t]),
              t
            );
          }),
          (ie.prototype.getResultBuffer = ie.prototype.ab),
          (ie.prototype.Kb = function (t) {
            return V(this.ab(), t);
          }),
          (ie.prototype.getResultBase64String = ie.prototype.Kb),
          (ie.prototype.Va = function (t) {
            this.h.push(se(this, t));
          }),
          (ie.prototype.beginSubMessage = ie.prototype.Va),
          (ie.prototype.Ya = function () {
            (k(0 <= this.h.length), pe(this, this.h.pop()));
          }),
          (ie.prototype.endSubMessage = ie.prototype.Ya),
          (ie.prototype.Mc = function (t, e, r) {
            switch (t) {
              case 1:
                this.J(e, r);
                break;
              case 2:
                this.L(e, r);
                break;
              case 3:
                this.T(e, r);
                break;
              case 4:
                this.V(e, r);
                break;
              case 5:
                this.S(e, r);
                break;
              case 6:
                this.Qa(e, r);
                break;
              case 7:
                this.Pa(e, r);
                break;
              case 8:
                this.I(e, r);
                break;
              case 9:
                this.U(e, r);
                break;
              case 10:
                C("Group field type not supported in writeAny()");
                break;
              case 11:
                C("Message field type not supported in writeAny()");
                break;
              case 12:
                this.ia(e, r);
                break;
              case 13:
                this.o(e, r);
                break;
              case 14:
                this.R(e, r);
                break;
              case 15:
                this.Ra(e, r);
                break;
              case 16:
                this.Sa(e, r);
                break;
              case 17:
                this.rb(e, r);
                break;
              case 18:
                this.sb(e, r);
                break;
              case 30:
                this.K(e, r);
                break;
              case 31:
                this.N(e, r);
                break;
              default:
                C("Invalid field type in writeAny()");
            }
          }),
          (ie.prototype.writeAny = ie.prototype.Mc),
          (ie.prototype.S = function (t, e) {
            null != e &&
              (k(-2147483648 <= e && 2147483648 > e), le(this, t, e));
          }),
          (ie.prototype.writeInt32 = ie.prototype.S),
          (ie.prototype.ob = function (t, e) {
            null != e &&
              ((e = parseInt(e, 10)),
              k(-2147483648 <= e && 2147483648 > e),
              le(this, t, e));
          }),
          (ie.prototype.writeInt32String = ie.prototype.ob),
          (ie.prototype.T = function (t, e) {
            null != e &&
              (k(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              null != e && (ce(this, t, 0), this.a.ua(e)));
          }),
          (ie.prototype.writeInt64 = ie.prototype.T),
          (ie.prototype.ja = function (t, e) {
            null != e && ((e = ne(e)), ce(this, t, 0), this.a.l(e.lo, e.hi));
          }),
          (ie.prototype.writeInt64String = ie.prototype.ja),
          (ie.prototype.o = function (t, e) {
            null != e && (k(0 <= e && 4294967296 > e), ue(this, t, e));
          }),
          (ie.prototype.writeUint32 = ie.prototype.o),
          (ie.prototype.ub = function (t, e) {
            null != e &&
              ((e = parseInt(e, 10)),
              k(0 <= e && 4294967296 > e),
              ue(this, t, e));
          }),
          (ie.prototype.writeUint32String = ie.prototype.ub),
          (ie.prototype.V = function (t, e) {
            null != e &&
              (k(0 <= e && 0x10000000000000000 > e),
              null != e && (ce(this, t, 0), this.a.va(e)));
          }),
          (ie.prototype.writeUint64 = ie.prototype.V),
          (ie.prototype.vb = function (t, e) {
            null != e && ((e = re(e)), ce(this, t, 0), this.a.l(e.lo, e.hi));
          }),
          (ie.prototype.writeUint64String = ie.prototype.vb),
          (ie.prototype.rb = function (t, e) {
            null != e &&
              (k(-2147483648 <= e && 2147483648 > e),
              null != e && (ce(this, t, 0), this.a.wa(e)));
          }),
          (ie.prototype.writeSint32 = ie.prototype.rb),
          (ie.prototype.sb = function (t, e) {
            null != e &&
              (k(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              null != e && (ce(this, t, 0), this.a.xa(e)));
          }),
          (ie.prototype.writeSint64 = ie.prototype.sb),
          (ie.prototype.Zd = function (t, e) {
            null != e && null != e && (ce(this, t, 0), this.a.W(e));
          }),
          (ie.prototype.writeSintHash64 = ie.prototype.Zd),
          (ie.prototype.Yd = function (t, e) {
            null != e && null != e && (ce(this, t, 0), this.a.Ta(e));
          }),
          (ie.prototype.writeSint64String = ie.prototype.Yd),
          (ie.prototype.Pa = function (t, e) {
            null != e &&
              (k(0 <= e && 4294967296 > e), ce(this, t, 5), this.a.o(e));
          }),
          (ie.prototype.writeFixed32 = ie.prototype.Pa),
          (ie.prototype.Qa = function (t, e) {
            null != e &&
              (k(0 <= e && 0x10000000000000000 > e),
              ce(this, t, 1),
              this.a.V(e));
          }),
          (ie.prototype.writeFixed64 = ie.prototype.Qa),
          (ie.prototype.nb = function (t, e) {
            null != e && ((e = re(e)), ce(this, t, 1), this.a.A(e.lo, e.hi));
          }),
          (ie.prototype.writeFixed64String = ie.prototype.nb),
          (ie.prototype.Ra = function (t, e) {
            null != e &&
              (k(-2147483648 <= e && 2147483648 > e),
              ce(this, t, 5),
              this.a.S(e));
          }),
          (ie.prototype.writeSfixed32 = ie.prototype.Ra),
          (ie.prototype.Sa = function (t, e) {
            null != e &&
              (k(-0x8000000000000000 <= e && 0x8000000000000000 > e),
              ce(this, t, 1),
              this.a.T(e));
          }),
          (ie.prototype.writeSfixed64 = ie.prototype.Sa),
          (ie.prototype.qb = function (t, e) {
            null != e && ((e = ne(e)), ce(this, t, 1), this.a.A(e.lo, e.hi));
          }),
          (ie.prototype.writeSfixed64String = ie.prototype.qb),
          (ie.prototype.L = function (t, e) {
            null != e && (ce(this, t, 5), this.a.L(e));
          }),
          (ie.prototype.writeFloat = ie.prototype.L),
          (ie.prototype.J = function (t, e) {
            null != e && (ce(this, t, 1), this.a.J(e));
          }),
          (ie.prototype.writeDouble = ie.prototype.J),
          (ie.prototype.I = function (t, e) {
            null != e &&
              (k("boolean" === typeof e || "number" === typeof e),
              ce(this, t, 0),
              this.a.I(e));
          }),
          (ie.prototype.writeBool = ie.prototype.I),
          (ie.prototype.R = function (t, e) {
            null != e &&
              (k(-2147483648 <= e && 2147483648 > e),
              ce(this, t, 0),
              this.a.M(e));
          }),
          (ie.prototype.writeEnum = ie.prototype.R),
          (ie.prototype.U = function (t, e) {
            null != e && ((t = se(this, t)), this.a.U(e), pe(this, t));
          }),
          (ie.prototype.writeString = ie.prototype.U),
          (ie.prototype.ia = function (t, e) {
            null != e &&
              ((e = wt(e)), ce(this, t, 2), this.a.j(e.length), ae(this, e));
          }),
          (ie.prototype.writeBytes = ie.prototype.ia),
          (ie.prototype.Qc = function (t, e, r) {
            null != e && ((t = se(this, t)), r(e, this), pe(this, t));
          }),
          (ie.prototype.writeMessage = ie.prototype.Qc),
          (ie.prototype.Rc = function (t, e, r) {
            null != e &&
              (ce(this, 1, 3),
              ce(this, 2, 0),
              this.a.M(t),
              (t = se(this, 3)),
              r(e, this),
              pe(this, t),
              ce(this, 1, 4));
          }),
          (ie.prototype.writeMessageSet = ie.prototype.Rc),
          (ie.prototype.Nc = function (t, e, r) {
            null != e && (ce(this, t, 3), r(e, this), ce(this, t, 4));
          }),
          (ie.prototype.writeGroup = ie.prototype.Nc),
          (ie.prototype.K = function (t, e) {
            null != e && (k(8 == e.length), ce(this, t, 1), this.a.K(e));
          }),
          (ie.prototype.writeFixedHash64 = ie.prototype.K),
          (ie.prototype.N = function (t, e) {
            null != e && (k(8 == e.length), ce(this, t, 0), this.a.N(e));
          }),
          (ie.prototype.writeVarintHash64 = ie.prototype.N),
          (ie.prototype.A = function (t, e, r) {
            (ce(this, t, 1), this.a.A(e, r));
          }),
          (ie.prototype.writeSplitFixed64 = ie.prototype.A),
          (ie.prototype.l = function (t, e, r) {
            (ce(this, t, 0), this.a.l(e, r));
          }),
          (ie.prototype.writeSplitVarint64 = ie.prototype.l),
          (ie.prototype.tb = function (t, e, r) {
            ce(this, t, 0);
            var o = this.a;
            at(e, r, function (t, e) {
              o.l(t >>> 0, e >>> 0);
            });
          }),
          (ie.prototype.writeSplitZigzagVarint64 = ie.prototype.tb),
          (ie.prototype.Dd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) le(this, t, e[r]);
          }),
          (ie.prototype.writeRepeatedInt32 = ie.prototype.Dd),
          (ie.prototype.Ed = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ob(t, e[r]);
          }),
          (ie.prototype.writeRepeatedInt32String = ie.prototype.Ed),
          (ie.prototype.Fd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.ua(o));
              }
          }),
          (ie.prototype.writeRepeatedInt64 = ie.prototype.Fd),
          (ie.prototype.Pd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.A(t, r(e[n]), o(e[n]));
          }),
          (ie.prototype.writeRepeatedSplitFixed64 = ie.prototype.Pd),
          (ie.prototype.Qd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.l(t, r(e[n]), o(e[n]));
          }),
          (ie.prototype.writeRepeatedSplitVarint64 = ie.prototype.Qd),
          (ie.prototype.Rd = function (t, e, r, o) {
            if (null != e)
              for (var n = 0; n < e.length; n++) this.tb(t, r(e[n]), o(e[n]));
          }),
          (ie.prototype.writeRepeatedSplitZigzagVarint64 = ie.prototype.Rd),
          (ie.prototype.Gd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ja(t, e[r]);
          }),
          (ie.prototype.writeRepeatedInt64String = ie.prototype.Gd),
          (ie.prototype.Td = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) ue(this, t, e[r]);
          }),
          (ie.prototype.writeRepeatedUint32 = ie.prototype.Td),
          (ie.prototype.Ud = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ub(t, e[r]);
          }),
          (ie.prototype.writeRepeatedUint32String = ie.prototype.Ud),
          (ie.prototype.Vd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.va(o));
              }
          }),
          (ie.prototype.writeRepeatedUint64 = ie.prototype.Vd),
          (ie.prototype.Wd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.vb(t, e[r]);
          }),
          (ie.prototype.writeRepeatedUint64String = ie.prototype.Wd),
          (ie.prototype.Ld = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.wa(o));
              }
          }),
          (ie.prototype.writeRepeatedSint32 = ie.prototype.Ld),
          (ie.prototype.Md = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.xa(o));
              }
          }),
          (ie.prototype.writeRepeatedSint64 = ie.prototype.Md),
          (ie.prototype.Nd = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.Ta(o));
              }
          }),
          (ie.prototype.writeRepeatedSint64String = ie.prototype.Nd),
          (ie.prototype.Od = function (t, e) {
            if (null != e)
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                null != o && (ce(this, t, 0), this.a.W(o));
              }
          }),
          (ie.prototype.writeRepeatedSintHash64 = ie.prototype.Od),
          (ie.prototype.xd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Pa(t, e[r]);
          }),
          (ie.prototype.writeRepeatedFixed32 = ie.prototype.xd),
          (ie.prototype.yd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Qa(t, e[r]);
          }),
          (ie.prototype.writeRepeatedFixed64 = ie.prototype.yd),
          (ie.prototype.zd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.nb(t, e[r]);
          }),
          (ie.prototype.writeRepeatedFixed64String = ie.prototype.zd),
          (ie.prototype.Id = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Ra(t, e[r]);
          }),
          (ie.prototype.writeRepeatedSfixed32 = ie.prototype.Id),
          (ie.prototype.Jd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.Sa(t, e[r]);
          }),
          (ie.prototype.writeRepeatedSfixed64 = ie.prototype.Jd),
          (ie.prototype.Kd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.qb(t, e[r]);
          }),
          (ie.prototype.writeRepeatedSfixed64String = ie.prototype.Kd),
          (ie.prototype.Bd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.L(t, e[r]);
          }),
          (ie.prototype.writeRepeatedFloat = ie.prototype.Bd),
          (ie.prototype.vd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.J(t, e[r]);
          }),
          (ie.prototype.writeRepeatedDouble = ie.prototype.vd),
          (ie.prototype.td = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.I(t, e[r]);
          }),
          (ie.prototype.writeRepeatedBool = ie.prototype.td),
          (ie.prototype.wd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.R(t, e[r]);
          }),
          (ie.prototype.writeRepeatedEnum = ie.prototype.wd),
          (ie.prototype.Sd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.U(t, e[r]);
          }),
          (ie.prototype.writeRepeatedString = ie.prototype.Sd),
          (ie.prototype.ud = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.ia(t, e[r]);
          }),
          (ie.prototype.writeRepeatedBytes = ie.prototype.ud),
          (ie.prototype.Hd = function (t, e, r) {
            if (null != e)
              for (var o = 0; o < e.length; o++) {
                var n = se(this, t);
                (r(e[o], this), pe(this, n));
              }
          }),
          (ie.prototype.writeRepeatedMessage = ie.prototype.Hd),
          (ie.prototype.Cd = function (t, e, r) {
            if (null != e)
              for (var o = 0; o < e.length; o++)
                (ce(this, t, 3), r(e[o], this), ce(this, t, 4));
          }),
          (ie.prototype.writeRepeatedGroup = ie.prototype.Cd),
          (ie.prototype.Ad = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.K(t, e[r]);
          }),
          (ie.prototype.writeRepeatedFixedHash64 = ie.prototype.Ad),
          (ie.prototype.Xd = function (t, e) {
            if (null != e) for (var r = 0; r < e.length; r++) this.N(t, e[r]);
          }),
          (ie.prototype.writeRepeatedVarintHash64 = ie.prototype.Xd),
          (ie.prototype.$c = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.M(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedInt32 = ie.prototype.$c),
          (ie.prototype.ad = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.M(parseInt(e[r], 10));
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedInt32String = ie.prototype.ad),
          (ie.prototype.bd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.ua(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedInt64 = ie.prototype.bd),
          (ie.prototype.ld = function (t, e, r, o) {
            if (null != e) {
              t = se(this, t);
              for (var n = 0; n < e.length; n++) this.a.A(r(e[n]), o(e[n]));
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSplitFixed64 = ie.prototype.ld),
          (ie.prototype.md = function (t, e, r, o) {
            if (null != e) {
              t = se(this, t);
              for (var n = 0; n < e.length; n++) this.a.l(r(e[n]), o(e[n]));
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSplitVarint64 = ie.prototype.md),
          (ie.prototype.nd = function (t, e, r, o) {
            if (null != e) {
              t = se(this, t);
              for (var n = this.a, i = 0; i < e.length; i++)
                at(r(e[i]), o(e[i]), function (t, e) {
                  n.l(t >>> 0, e >>> 0);
                });
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSplitZigzagVarint64 = ie.prototype.nd),
          (ie.prototype.cd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) {
                var o = ne(e[r]);
                this.a.l(o.lo, o.hi);
              }
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedInt64String = ie.prototype.cd),
          (ie.prototype.od = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.j(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedUint32 = ie.prototype.od),
          (ie.prototype.pd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.j(parseInt(e[r], 10));
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedUint32String = ie.prototype.pd),
          (ie.prototype.qd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.va(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedUint64 = ie.prototype.qd),
          (ie.prototype.rd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) {
                var o = re(e[r]);
                this.a.l(o.lo, o.hi);
              }
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedUint64String = ie.prototype.rd),
          (ie.prototype.gd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.wa(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSint32 = ie.prototype.gd),
          (ie.prototype.hd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.xa(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSint64 = ie.prototype.hd),
          (ie.prototype.jd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.W(yt(e[r]));
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSint64String = ie.prototype.jd),
          (ie.prototype.kd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.W(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedSintHash64 = ie.prototype.kd),
          (ie.prototype.Vc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.o(e[t]);
          }),
          (ie.prototype.writePackedFixed32 = ie.prototype.Vc),
          (ie.prototype.Wc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.V(e[t]);
          }),
          (ie.prototype.writePackedFixed64 = ie.prototype.Wc),
          (ie.prototype.Xc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              ) {
                var r = re(e[t]);
                this.a.A(r.lo, r.hi);
              }
          }),
          (ie.prototype.writePackedFixed64String = ie.prototype.Xc),
          (ie.prototype.dd = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.S(e[t]);
          }),
          (ie.prototype.writePackedSfixed32 = ie.prototype.dd),
          (ie.prototype.ed = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.T(e[t]);
          }),
          (ie.prototype.writePackedSfixed64 = ie.prototype.ed),
          (ie.prototype.fd = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.ja(e[t]);
          }),
          (ie.prototype.writePackedSfixed64String = ie.prototype.fd),
          (ie.prototype.Zc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(4 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.L(e[t]);
          }),
          (ie.prototype.writePackedFloat = ie.prototype.Zc),
          (ie.prototype.Tc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.J(e[t]);
          }),
          (ie.prototype.writePackedDouble = ie.prototype.Tc),
          (ie.prototype.Sc = function (t, e) {
            if (null != e && e.length)
              for (ce(this, t, 2), this.a.j(e.length), t = 0; t < e.length; t++)
                this.a.I(e[t]);
          }),
          (ie.prototype.writePackedBool = ie.prototype.Sc),
          (ie.prototype.Uc = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.R(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedEnum = ie.prototype.Uc),
          (ie.prototype.Yc = function (t, e) {
            if (null != e && e.length)
              for (
                ce(this, t, 2), this.a.j(8 * e.length), t = 0;
                t < e.length;
                t++
              )
                this.a.K(e[t]);
          }),
          (ie.prototype.writePackedFixedHash64 = ie.prototype.Yc),
          (ie.prototype.sd = function (t, e) {
            if (null != e && e.length) {
              t = se(this, t);
              for (var r = 0; r < e.length; r++) this.a.N(e[r]);
              pe(this, t);
            }
          }),
          (ie.prototype.writePackedVarintHash64 = ie.prototype.sd),
          (e.debug = Yt),
          (e.Map = B),
          (e.Message = Bt),
          (e.BinaryReader = kt),
          (e.BinaryWriter = ie),
          (e.ExtensionFieldInfo = Ft),
          (e.ExtensionFieldBinaryInfo = Pt),
          (e.exportSymbol = g),
          (e.inherits = v),
          (e.object = { extend: w }),
          (e.typeOf = d));
      }).call(this, r(13));
    },
    5908: function (t, e, r) {
      var o = r(5907),
        n = o,
        i =
          ("undefined" !== typeof globalThis && globalThis) ||
          ("undefined" !== typeof window && window) ||
          ("undefined" !== typeof i && i) ||
          ("undefined" !== typeof self && self) ||
          function () {
            return this;
          }.call(null) ||
          Function("return this")();
      (n.exportSymbol("proto.google.protobuf.Any", null, i),
        (proto.google.protobuf.Any = function (t) {
          o.Message.initialize(this, t, 0, -1, null, null);
        }),
        n.inherits(proto.google.protobuf.Any, o.Message),
        n.DEBUG &&
          !COMPILED &&
          (proto.google.protobuf.Any.displayName = "proto.google.protobuf.Any"),
        o.Message.GENERATE_TO_OBJECT &&
          ((proto.google.protobuf.Any.prototype.toObject = function (t) {
            return proto.google.protobuf.Any.toObject(t, this);
          }),
          (proto.google.protobuf.Any.toObject = function (t, e) {
            var r = {
              typeUrl: o.Message.getFieldWithDefault(e, 1, ""),
              value: e.getValue_asB64(),
            };
            return (t && (r.$jspbMessageInstance = e), r);
          })),
        (proto.google.protobuf.Any.deserializeBinary = function (t) {
          var e = new o.BinaryReader(t),
            r = new proto.google.protobuf.Any();
          return proto.google.protobuf.Any.deserializeBinaryFromReader(r, e);
        }),
        (proto.google.protobuf.Any.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var r = e.getFieldNumber();
            switch (r) {
              case 1:
                var o = e.readString();
                t.setTypeUrl(o);
                break;
              case 2:
                o = e.readBytes();
                t.setValue(o);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.google.protobuf.Any.prototype.serializeBinary = function () {
          var t = new o.BinaryWriter();
          return (
            proto.google.protobuf.Any.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.google.protobuf.Any.serializeBinaryToWriter = function (t, e) {
          var r = void 0;
          ((r = t.getTypeUrl()),
            r.length > 0 && e.writeString(1, r),
            (r = t.getValue_asU8()),
            r.length > 0 && e.writeBytes(2, r));
        }),
        (proto.google.protobuf.Any.prototype.getTypeUrl = function () {
          return o.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.google.protobuf.Any.prototype.setTypeUrl = function (t) {
          return o.Message.setProto3StringField(this, 1, t);
        }),
        (proto.google.protobuf.Any.prototype.getValue = function () {
          return o.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.google.protobuf.Any.prototype.getValue_asB64 = function () {
          return o.Message.bytesAsB64(this.getValue());
        }),
        (proto.google.protobuf.Any.prototype.getValue_asU8 = function () {
          return o.Message.bytesAsU8(this.getValue());
        }),
        (proto.google.protobuf.Any.prototype.setValue = function (t) {
          return o.Message.setProto3BytesField(this, 2, t);
        }),
        n.object.extend(e, proto.google.protobuf),
        (proto.google.protobuf.Any.prototype.getTypeName = function () {
          return this.getTypeUrl().split("/").pop();
        }),
        (proto.google.protobuf.Any.prototype.pack = function (t, e, r) {
          (r || (r = "type.googleapis.com/"),
            "/" != r.substr(-1)
              ? this.setTypeUrl(r + "/" + e)
              : this.setTypeUrl(r + e),
            this.setValue(t));
        }),
        (proto.google.protobuf.Any.prototype.unpack = function (t, e) {
          return this.getTypeName() == e ? t(this.getValue_asU8()) : null;
        }));
    },
    7214: function (t) {
      t.exports = JSON.parse(
        '[{"name":"BitTorrent","ticker":"BTT","decimal":6,"contract":"1002000","isCustom":false},{"name":"Tether USD TRX","ticker":"TRX-USDT","decimal":6,"contract":"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","isCustom":false,"energy":14631},{"name":"WINK","ticker":"WIN","decimal":6,"contract":"TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7","isCustom":false,"energy":13248},{"name":"JUST","ticker":"JST","decimal":18,"contract":"TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9","isCustom":false,"energy":13516},{"name":"Bridge Token","ticker":"BRG","decimal":6,"contract":"TJvqNiWUN2v2NBG12UhfV7WSvReJkRP3VC","isCustom":false,"energy":13429},{"name":"USDCoin TRX","ticker":"TRX-USDC","decimal":6,"contract":"TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8","isCustom":false}]',
      );
    },
    7215: function (t) {
      t.exports = JSON.parse("[]");
    },
    7216: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = o(r(7217)),
        i = o(r(7244)),
        a = o(r(129)),
        s = o(r(80)),
        p = r(19),
        c = r(4),
        u = r(27);
      const l = {
          AccountCreateContract: 0,
          TransferContract: 1,
          TransferAssetContract: 2,
          VoteAssetContract: 3,
          VoteWitnessContract: 4,
          WitnessCreateContract: 5,
          AssetIssueContract: 6,
          WitnessUpdateContract: 8,
          ParticipateAssetIssueContract: 9,
          AccountUpdateContract: 10,
          FreezeBalanceContract: 11,
          UnfreezeBalanceContract: 12,
          WithdrawBalanceContract: 13,
          UnfreezeAssetContract: 14,
          UpdateAssetContract: 15,
          ProposalCreateContract: 16,
          ProposalApproveContract: 17,
          ProposalDeleteContract: 18,
          SetAccountIdContract: 19,
          CustomContract: 20,
          CreateSmartContract: 30,
          TriggerSmartContract: 31,
          GetContract: 32,
          UpdateSettingContract: 33,
          ExchangeCreateContract: 41,
          ExchangeInjectContract: 42,
          ExchangeWithdrawContract: 43,
          ExchangeTransactionContract: 44,
          UpdateEnergyLimitContract: 45,
          AccountPermissionUpdateContract: 46,
          PermissionAddKeyContract: 47,
          PermissionUpdateKeyContract: 48,
          PermissionDeleteKeyContract: 49,
          FreezeBalanceV2Contract: 54,
          UnfreezeBalanceV2Contract: 55,
        },
        h = 50;
      class TronscanExplorer extends a.default {
        constructor() {
          (super(...arguments),
            (this.httpclient = new n.default.Client(
              this.config.baseUrl.replace("/api/", ""),
            )),
            (this.helper = n.default),
            (this.defaultTxLimit = h),
            this.client &&
              i.default.use(this.client, { requestsPerSecond: 5 }));
        }
        getAllowedTickers() {
          return ["TRX", "BTT", "WIN", "USDC", "BTTOLD"];
        }
        getInfoUrl(t) {
          return "account?address=" + t;
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { start: e, limit: r }
          );
        }
        modifyInfoResponse(t) {
          return { balance: String(t.balance), assets: t.trc20token_balances };
        }
        getAccount(t) {
          return this.request("account?address=" + t);
        }
        getVotes(t) {
          return this.request("vote?voter=" + t);
        }
        getTransactionUrl(t) {
          return "transaction-info?hash=" + t;
        }
        getLatestBlockUrl() {
          return "block/latest";
        }
        async getTransactions(t) {
          let { address: e, offset: r = 0, limit: o = this.defaultTxLimit } = t;
          return super.getTransactions({ address: e, offset: r, limit: o });
        }
        getTransactionsUrl(t) {
          return "transaction?sort=-timestamp&address=" + t;
        }
        modifyTransactionsResponse(t, e, r) {
          void 0 === r && (r = this.wallet.ticker);
          const o = t.data.filter((t) => {
              var e;
              return (
                "trx" !==
                (null === (e = t.tokenInfo) || void 0 === e
                  ? void 0
                  : e.tokenAbbr)
              );
            }),
            n = t.data
              .filter((t) => {
                var r;
                return (
                  ("trx" ===
                    (null === (r = t.tokenInfo) || void 0 === r
                      ? void 0
                      : r.tokenAbbr) &&
                    [t.ownerAddress, t.toAddress].includes(e)) ||
                  "vote" === this.getTransactionType(t) ||
                  ("regular" === this.getTransactionType(t) && "0" === t.amount)
                );
              })
              .map((t) =>
                this.getTransaction(
                  e,
                  t,
                  this.getBatchTxValue(e, t),
                  r,
                  this.wallet.id,
                  this.wallet.name,
                ),
              );
          return { transactions: n, transfers: o };
        }
        modifyTransactionResponse(t, e, r) {
          return (
            void 0 === r && (r = this.wallet.ticker),
            this.getTransaction(
              e,
              t,
              this.getTxValue(e, t),
              this.wallet.ticker,
              this.wallet.id,
              this.wallet.name,
            )
          );
        }
        modifyTokenTransactionResponse(t, e, r, o) {
          return this.getTransaction(
            e,
            t,
            this.getTxValue(e, t, o),
            r,
            (0, c.getTokenId)({
              ticker: r,
              contract: t.tokenName,
              parent: this.wallet.parent,
            }),
          );
        }
        getSendTransactionUrl() {
          return "broadcast";
        }
        getSendTransactionParam() {
          return "transaction";
        }
        modifySendTransactionResponse(t) {
          if ("SUCCESS" !== t.data.code)
            throw new p.ExplorerRequestError({
              type: u.SEND_TRANSACTION_TYPE,
              error: t.data.message,
              instance: this,
            });
          return { txid: this.lastSendingTransactionHash };
        }
        async sendTransaction(t, e) {
          try {
            return (
              (this.httpclient.apiUrl = this.config.baseUrl.replace(
                "/api/",
                "",
              )),
              await this.httpclient.sendTransaction(e, t),
              { txid: this.SHA256(t.getRawData().serializeBinary()) }
            );
          } catch (r) {
            throw new p.ExplorerRequestError({
              type: u.SEND_TRANSACTION_TYPE,
              error: r,
              instance: this,
            });
          }
        }
        async getBalance() {
          const t = await this.getInfo();
          return this.wallet.toCurrencyUnit(t.balance);
        }
        getTxHash(t) {
          return t.hash;
        }
        getTxDirection(t, e) {
          return (
            (e.contractType !== l.FreezeBalanceContract ||
              e.ownerAddress.toLowerCase() !== t.toLowerCase()) &&
            (e.toAddress.toLowerCase() === t.toLowerCase() ||
              ("" === e.toAddress &&
                e.ownerAddress.toLowerCase() === t.toLowerCase()))
          );
        }
        getTxOtherSideAddress(t, e) {
          switch (e.contractType) {
            case l.FreezeBalanceContract:
              return "Freeze 1.0";
            case l.FreezeBalanceV2Contract:
              return "Freeze 2.0";
            case l.UnfreezeBalanceContract:
            case l.UnfreezeAssetContract:
              return "Unfreeze 1.0";
            case l.WithdrawBalanceContract:
              return "Reward";
            case l.TransferContract:
            default:
              return e.toAddress.toLowerCase() === t.toLowerCase()
                ? e.ownerAddress
                : e.toAddress;
          }
        }
        getBatchTxValue(t, e, r) {
          return (
            void 0 === r && (r = this.wallet.decimal),
            "vote" === this.getTransactionType(e)
              ? e.amount
              : this.wallet.toCurrencyUnit(e.amount, r)
          );
        }
        getTxValue(t, e, r) {
          switch ((void 0 === r && (r = this.wallet.decimal), e.contractType)) {
            case l.FreezeBalanceContract:
              return "Freeze";
            case l.UnfreezeBalanceContract:
            case l.UnfreezeAssetContract:
            case l.UnfreezeBalanceV2Contract:
              return this.wallet.toCurrencyUnit(e.info.unfreeze_amount, r);
            case l.WithdrawBalanceContract:
              return "Reward";
            case l.TransferContract:
            default:
              return this.wallet.toCurrencyUnit(e.amount, r);
          }
        }
        getTxDateTime(t) {
          return new Date(Number(t.timestamp));
        }
        getTxConfirmations(t) {
          return Number(t.confirmed);
        }
        SHA256(t) {
          const e = new n.default.sha256("SHA-256", "HEX"),
            r = n.default.bytes.byteArray2hexStr(t);
          return (e.update(r), e.getHash("HEX"));
        }
        getTokenTransfers(t, e) {
          return (
            void 0 === e && (e = 10),
            this.request(
              `token_trc20/transfers?limit=${e}&start=0&sort=-timestamp&count=false&relatedAddress=${t}`,
            )
          );
        }
        getTxFee(t) {
          var e;
          return this.wallet.toCurrencyUnit(
            (null === t || void 0 === t || null === (e = t.cost) || void 0 === e
              ? void 0
              : e.fee) || this.wallet.feeDefault,
          );
        }
        getTransaction(t, e, r, o, n, i) {
          return new s.default({
            alias: this.wallet.alias,
            amount: r,
            confirmations: this.getTxConfirmations(e),
            datetime: this.getTxDateTime(e),
            direction: this.getTxDirection(t, e),
            fee: this.getTxFee(e),
            feeTicker: this.wallet.parent,
            memo: this.getTxMemo(e),
            name: i,
            otherSideAddress: this.getTxOtherSideAddress(t, e),
            ticker: o,
            txid: this.getTxHash(e),
            txType: this.getTransactionType(e),
            walletid: n,
          });
        }
        getTransactionInfo(t) {
          return this.request("transaction-info?hash=" + t);
        }
        getTransactionType(t) {
          let { contractType: e } = t;
          const r = {
            freeze: [l.FreezeBalanceContract],
            reward: [l.WithdrawBalanceContract, l.ExchangeWithdrawContract],
            unstake: [
              l.UnfreezeBalanceContract,
              l.UnfreezeAssetContract,
              l.UnfreezeBalanceV2Contract,
            ],
            vote: [l.VoteAssetContract, l.VoteWitnessContract],
          };
          for (const o of Object.keys(r)) if (r[o].includes(e)) return o;
          return "regular";
        }
        async isFirstTransfer(t) {
          const { token_transfers: e } = await this.getTokenTransfers(t, 1);
          return !e.length;
        }
      }
      e.default = TronscanExplorer;
    },
    7237: function (t, e, r) {
      (function (e) {
        (function () {
          "use strict";
          function r(t) {
            var r;
            return (
              (r = t instanceof e ? t : e.from(t.toString(), "binary")),
              r.toString("base64")
            );
          }
          t.exports = r;
        })();
      }).call(this, r(2).Buffer);
    },
    7244: function (t, e, r) {
      "use strict";
      var o =
          (this && this.__awaiter) ||
          function (t, e, r, o) {
            function n(t) {
              return t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  });
            }
            return new (r || (r = Promise))(function (r, i) {
              function a(t) {
                try {
                  p(o.next(t));
                } catch (e) {
                  i(e);
                }
              }
              function s(t) {
                try {
                  p(o["throw"](t));
                } catch (e) {
                  i(e);
                }
              }
              function p(t) {
                t.done ? r(t.value) : n(t.value).then(a, s);
              }
              p((o = o.apply(t, e || [])).next());
            });
          },
        n =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              o,
              n,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(t) {
              return function (e) {
                return p([t, e]);
              };
            }
            function p(i) {
              if (r) throw new TypeError("Generator is already executing.");
              while (a)
                try {
                  if (
                    ((r = 1),
                    o &&
                      (n =
                        2 & i[0]
                          ? o["return"]
                          : i[0]
                            ? o["throw"] || ((n = o["return"]) && n.call(o), 0)
                            : o.next) &&
                      !(n = n.call(o, i[1])).done)
                  )
                    return n;
                  switch (((o = 0), n && (i = [2 & i[0], n.value]), i[0])) {
                    case 0:
                    case 1:
                      n = i;
                      break;
                    case 4:
                      return (a.label++, { value: i[1], done: !1 });
                    case 5:
                      (a.label++, (o = i[1]), (i = [0]));
                      continue;
                    case 7:
                      ((i = a.ops.pop()), a.trys.pop());
                      continue;
                    default:
                      if (
                        ((n = a.trys),
                        !(n = n.length > 0 && n[n.length - 1]) &&
                          (6 === i[0] || 2 === i[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!n || (i[1] > n[0] && i[1] < n[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < n[1]) {
                        ((a.label = n[1]), (n = i));
                        break;
                      }
                      if (n && a.label < n[2]) {
                        ((a.label = n[2]), a.ops.push(i));
                        break;
                      }
                      (n[2] && a.ops.pop(), a.trys.pop());
                      continue;
                  }
                  i = e.call(t, a);
                } catch (s) {
                  ((i = [6, s]), (o = 0));
                } finally {
                  r = n = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            }
          },
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          },
        a = this;
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.use = void 0));
      var s = i(r(7245)),
        p = function (t, e) {
          var r = new s.default({
              requestsPerSecond: e.requestsPerSecond,
              promiseImplementation: e.promiseImplementation,
            }),
            i = function (t) {
              return o(void 0, void 0, void 0, function () {
                return n(this, function (e) {
                  return [2, t];
                });
              });
            };
          t.interceptors.request.use(function (t) {
            return r.add(i.bind(a, t));
          });
        };
      ((e.use = p), (e.default = { use: p }));
    },
    7246: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = o(r(4628)),
        i = o(r(129)),
        a = o(r(80)),
        s = r(4),
        p = o(r(28));
      const c = new Set([
          "getDynamicEnergyThreshold",
          "getDynamicEnergyIncreaseFactor",
          "getDynamicEnergyMaxFactor",
          "getEnergyFee",
          "getTransactionFee",
        ]),
        u = new Set(["getEnergyFee", "getTransactionFee"]),
        l = 1e6,
        h = 200;
      class TrongridExplorer extends i.default {
        constructor() {
          (super(...arguments), (this.defaultTxLimit = h));
        }
        addressHex(t) {
          return n.default.address.toHex(t);
        }
        getAllowedTickers() {
          return ["TRX"];
        }
        getApiPrefix() {
          return "v1/";
        }
        getInfoUrl(t) {
          return `${this.getApiPrefix()}accounts/${this.addressHex(t)}`;
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { address: t, limit: r }
          );
        }
        modifyInfoResponse(t) {
          var e, r, o;
          return {
            unfrozenV2:
              null === (e = t.data[0]) || void 0 === e ? void 0 : e.unfrozenV2,
            votes: null === (r = t.data[0]) || void 0 === r ? void 0 : r.votes,
            balance:
              null === (o = t.data[0]) || void 0 === o ? void 0 : o.balance,
          };
        }
        getTransactionUrl(t) {
          return "transaction-info?hash=" + t;
        }
        getTransactionsUrl(t) {
          return `${this.getApiPrefix()}accounts/${this.addressHex(t)}/transactions/trc20`;
        }
        getContractInfoUrl() {
          return "wallet/getcontractinfo";
        }
        getContractInfoMethod() {
          return "POST";
        }
        getContractInfoParams(t) {
          return { value: t, visible: !0 };
        }
        getChainParametersUrl() {
          return "wallet/getchainparameters";
        }
        getAccountResourceUrl() {
          return "wallet/getaccountresource";
        }
        getAccountResourceMethod() {
          return "post";
        }
        getAccountResourceParams(t) {
          return { address: t, visible: !0 };
        }
        getContractInfo(t) {
          return this.request(
            this.getContractInfoUrl(),
            this.getContractInfoMethod(),
            this.getContractInfoParams(t),
          );
        }
        getChainParameters() {
          return this.request(
            this.getChainParametersUrl(),
            this.getInfoMethod(),
          );
        }
        getAccountResource(t) {
          return this.request(
            this.getAccountResourceUrl(),
            this.getAccountResourceMethod(),
            this.getAccountResourceParams(t),
          );
        }
        getEstimatedEnergyUrl() {
          return "wallet/triggerconstantcontract";
        }
        getEstimatedEnergyMethod() {
          return "POST";
        }
        getEstimatedEnergyParameters(t) {
          return t;
        }
        async getDynamicEnergyParameters() {
          const { chainParameter: t = [] } = await this.request(
            this.getChainParametersUrl(),
            this.getInfoMethod(),
          );
          return this.modifyDynamicEnergyParametersResponse(t);
        }
        modifyDynamicEnergyParametersResponse(t) {
          return t.reduce((t, e) => {
            let { key: r, value: o } = e;
            return (c.has(r) && (t[r] = u.has(r) ? o / l : o), t);
          }, {});
        }
        modifyEstimagedEnergyResponse(t) {
          var e, r;
          const o =
            "FAILED" ===
            (null === t ||
            void 0 === t ||
            null === (e = t.transaction) ||
            void 0 === e ||
            null === (r = e.ret[0]) ||
            void 0 === r
              ? void 0
              : r.ret);
          if (!o) return null === t || void 0 === t ? void 0 : t.energy_used;
          p.default.error({
            instance: this,
            error: new Error(
              "[TrongridExplorer]: Failed to call estimate energy, node rejects tx with REVERT opcode, probably invalid tx was passed",
            ),
          });
        }
        async getEstimatedEnergy(t) {
          const e = await this.request(
            this.getEstimatedEnergyUrl(),
            this.getEstimatedEnergyMethod(),
            this.getEstimatedEnergyParameters(t),
            "TRX_ESTIMATE_ENERGY_REQUEST",
            { timeout: 1e4 },
          );
          return this.modifyEstimagedEnergyResponse(e);
        }
        modifyTransactionsResponse(t, e, r) {
          void 0 === r && (r = this.wallet.ticker);
          const o = t.data
            .filter((t) => {
              var e;
              return null === t ||
                void 0 === t ||
                null === (e = t.token_info) ||
                void 0 === e
                ? void 0
                : e.symbol;
            })
            .map(
              (t) =>
                new a.default({
                  ticker: this.getTxAsset(t),
                  name: t.token_info.name,
                  txid: this.getTxHash(t),
                  walletid: (0, s.getTokenId)({
                    contract: t.token_info.address,
                    parent: this.wallet.parent,
                    ticker: this.getTxAsset(t),
                  }),
                  fee: this.wallet.getTRC20Fee(t),
                  feeTicker: this.wallet.parent,
                  direction: this.getTxDirection(e, t),
                  otherSideAddress: this.getTxOtherSideAddress(e, t),
                  amount: this.getTxValue(e, t, t.token_info.decimals),
                  datetime: this.getTxDateTime(t),
                  memo: this.getTxMemo(t),
                  confirmations: this.getTxConfirmations(t),
                  alias: this.wallet.alias,
                }),
            );
          return { trc20transfers: o };
        }
        async getBalance() {
          const t = await this.getInfo();
          return this.wallet.toCurrencyUnit(t.balance);
        }
        getTxAsset(t) {
          const e = t.token_info.symbol;
          return "USDT" === e ? "TRX-USDT" : "USDC" === e ? "TRX-USDC" : e;
        }
        getTxHash(t) {
          return t.transaction_id;
        }
        getTxDirection(t, e) {
          return e.to === t;
        }
        getTxOtherSideAddress(t, e) {
          return this.getTxDirection(t, e) ? e.from : e.to;
        }
        getTxValue(t, e, r) {
          return (
            void 0 === r && (r = this.wallet.decimal),
            this.wallet.toCurrencyUnit(e.value, r)
          );
        }
        getTxDateTime(t) {
          return new Date(Number(t.block_timestamp));
        }
        getTxConfirmations(t) {
          return 1;
        }
      }
      e.default = TrongridExplorer;
    },
    7388: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(2853),
        i = o(r(7389));
      class TronNodeWithBlockscannerExplorer extends (0,
      n.HasBlockscannerMixin)(i.default) {}
      e.default = TronNodeWithBlockscannerExplorer;
    },
    7389: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = o(r(4628)),
        i = o(r(11)),
        a = o(r(129)),
        s = o(r(80)),
        p = r(4),
        c = r(27),
        u = r(67);
      class TronNodeExplorer extends a.default {
        getAllowedTickers() {
          return ["TRX", "BTT", "USDT", "WIN", "USDC", "BTTOLD"];
        }
        getInfoUrl(t) {
          return "wallet/getaccount";
        }
        getInfoMethod() {
          return "post";
        }
        getInfoParams(t) {
          return { address: n.default.address.toHex(t) };
        }
        getRewardUrl() {
          return "wallet/getReward";
        }
        getRewardMethod() {
          return "post";
        }
        getRewardParams(t) {
          return { address: t };
        }
        getTransactionUrl(t) {
          return "wallet/gettransactionbyid?value=" + t;
        }
        getTxHash(t) {
          return t.txID;
        }
        getTxValue(t, e) {
          let r = null;
          return (
            (r =
              "FreezeBalanceContract" === e.raw_data.contract[0].type ||
              "UnfreezeBalanceContract" === e.raw_data.contract[0].type
                ? e.raw_data.contract[0].parameter.value.frozen_balance
                : e.raw_data.contract[0].parameter.value.amount),
            (0, u.toCurrency)(r, this.wallet.decimal)
          );
        }
        getTxDirection(t, e) {
          return (
            n.default.address.fromHex(
              e.raw_data.contract[0].parameter.value.owner_address,
            ) !== t
          );
        }
        getTxOtherSideAddress(t, e) {
          const r = n.default.address.fromHex(
            e.raw_data.contract[0].parameter.value.owner_address,
          );
          let o = null;
          return (
            (o =
              "VoteWitnessContract" === e.raw_data.contract[0].type
                ? n.default.address.fromHex(
                    e.raw_data.contract[0].parameter.value.votes[0]
                      .vote_address,
                  )
                : "FreezeBalanceContract" === e.raw_data.contract[0].type
                  ? "Freeze balance"
                  : "UnfreezeBalanceContract" === e.raw_data.contract[0].type
                    ? "Unfreeze balance"
                    : "WithdrawBalanceContract" === e.raw_data.contract[0].type
                      ? "Reward"
                      : n.default.address.fromHex(
                          e.raw_data.contract[0].parameter.value.to_address,
                        )),
            this.getTxDirection(t, e) ? r : o
          );
        }
        getTxDateTime(t) {
          return new Date(t.raw_data.timestamp);
        }
        getTxConfirmations(t) {
          return 1;
        }
        getTxAsset(t, e) {
          if (t.raw_data.contract[0].parameter.value.asset_name) {
            const r = n.default.toAscii(
              t.raw_data.contract[0].parameter.value.asset_name,
            );
            return e[r] && e[r].ticker;
          }
          return this.wallet.ticker;
        }
        getTxAssetId(t) {
          if (t.raw_data.contract[0].parameter.value.asset_name) {
            const e = n.default.toAscii(
              t.raw_data.contract[0].parameter.value.asset_name,
            );
            return (0, p.getTokenId)({
              ticker: this.wallet.tokens()[e].ticker,
              contract: e,
              parent: this.wallet.parent,
            });
          }
          return this.wallet.id;
        }
        modifyTransactionResponse(t, e, r) {
          return new s.default({
            ticker: this.getTxAsset(t, r),
            name: this.wallet.name,
            alias: this.wallet.alias,
            walletid: this.getTxAssetId(t),
            explorer: this.constructor.name,
            txid: this.getTxHash(t),
            fee: this.getTxFee(t),
            feeTicker: this.wallet.parent,
            direction: this.getTxDirection(e, t),
            otherSideAddress: this.getTxOtherSideAddress(e, t),
            amount: this.getTxValue(e, t),
            datetime: this.getTxDateTime(t),
            memo: this.getTxMemo(t),
            confirmations: this.getTxConfirmations(t),
          });
        }
        async getInfo(t) {
          if (!t || "string" !== typeof t)
            throw this.createError(
              "getInfo: address must be string with length > 0",
            );
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * c.ONE_MINUTE <
              this.lastGetInfoRequestTime
          )
            return this.modifyInfoResponse(void 0);
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * c.ONE_MINUTE >
              this.lastGetInfoRequestTime &&
            (this.lastGetInfoRequestTime = Date.now());
          const e = await this.request(
              this.getInfoUrl(t),
              this.getInfoMethod(),
              this.getInfoParams(t),
              c.GET_BALANCE_TYPE,
              this.getInfoOptions(),
            ),
            r = await this.request(
              this.getRewardUrl(),
              this.getRewardMethod(),
              this.getRewardParams(t),
              c.GET_BALANCE_TYPE,
              this.getInfoOptions(),
            );
          return (e && r && (e.reward = r.reward), this.modifyInfoResponse(e));
        }
        modifyInfoResponse(t) {
          if (t.Error) throw new Error(t.Error);
          const {
              balance: e = 0,
              frozen: r = [],
              votes: o = [],
              account_resource: n = {},
              reward: a = "0",
              assetV2: s,
            } = t || {},
            { frozen_balance_for_energy: { frozen_balance: p = 0 } = {} } = n,
            c = new i.default(e).toString();
          return {
            balance: c,
            assetV2: s,
            stakingInfo: {
              frozen: r,
              votes: o,
              reward: a,
              accountResource: n,
              frozenBalanceForEnergy: p,
            },
          };
        }
      }
      e.default = TronNodeExplorer;
    },
    7390: function (t, e, r) {
      "use strict";
      var o = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      o(r(105));
      var n = o(r(129)),
        i = o(r(28)),
        a = o(r(794));
      function s(t, e) {
        (p(t, e), e.add(t));
      }
      function p(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function c(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const u = new a.default(() =>
          Promise.resolve().then(r.t.bind(null, 4628, 7)),
        ),
        l = "0".repeat(63) + "1",
        h = [
          {
            type: "function",
            stateMutability: "view",
            name: "getMassBalancesErc20",
            inputs: [
              { type: "address[]", name: "accountAddresses" },
              { type: "address[]", name: "contractAddresses" },
            ],
            outputs: [{ type: "uint256[2000]", name: "balances" }],
          },
          {
            type: "function",
            stateMutability: "view",
            name: "getMassBalancesEth",
            inputs: [{ type: "address[]", name: "accountAddresses" }],
            outputs: [{ type: "uint256[2000]", name: "balances" }],
          },
        ];
      var f = new WeakSet();
      class TronwebExplorer extends n.default {
        constructor() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          (super(...e),
            s(this, f),
            (this.baseUrl = e[0].config.baseUrl),
            (this.tronWeb = null),
            (this.contractAddress = null));
        }
        getAllowedTickers() {
          return ["TRX"];
        }
        async getInfo(t) {
          try {
            const e = Object.values(this.wallet.tokens() || {});
            if (0 === e.length) return { assets: [] };
            const { default: r } = await u.get(),
              o = e
                .map((t) => t.contract)
                .filter((t) => {
                  if (!t) return !1;
                  try {
                    return r.utils.crypto.isAddressValid(t);
                  } catch (e) {
                    return (
                      i.default.info("Failed to validate contract address"),
                      i.default.error(e),
                      !1
                    );
                  }
                });
            if (0 === o.length) return { assets: [] };
            const n = new Array(o.length).fill(t),
              a = await c(f, this, g).call(this, n, o),
              s = o.map((t, e) => ({ tokenId: t, balance: a[e] || "0" }));
            return { assets: s };
          } catch (e) {
            return (
              i.default.info("Failed to fetch TRC20 token balances"),
              i.default.error(e),
              { assets: [] }
            );
          }
        }
        async getTokenBalanceByContractAddress(t) {
          let { address: e, contractAddress: r } = t;
          try {
            const t = await c(f, this, g).call(this, [e], [r]);
            return t[0] || "0";
          } catch (o) {
            return (
              i.default.info(
                "Failed to fetch token balance by contract address",
              ),
              i.default.error(o),
              "0"
            );
          }
        }
      }
      async function d() {
        if (this.tronWeb) return this.tronWeb;
        const { default: t } = await u.get();
        return (
          (this.tronWeb = new t({ fullHost: this.baseUrl, privateKey: l })),
          this.tronWeb
        );
      }
      async function y(t) {
        if (
          (void 0 === t && (t = "TDMxorMXZn2bmY9v3fgkcRado15weeEo6a"),
          this.contractAddress === t && this.tronWeb)
        )
          return this.tronWeb.contract(h, t);
        this.contractAddress = t;
        const e = await c(f, this, d).call(this);
        return e.contract(h, t);
      }
      async function g(t, e) {
        if (!t || !Array.isArray(t) || 0 === t.length)
          throw new Error("Accounts array is required and must not be empty");
        if (!e || !Array.isArray(e) || 0 === e.length)
          throw new Error("Contracts array is required and must not be empty");
        if (t.length !== e.length)
          throw new Error(
            "Accounts and contracts arrays must have the same length",
          );
        try {
          const r = await c(f, this, y).call(this),
            o = await r.methods.getMassBalancesErc20([...t], [...e]).call();
          return o && o.balances ? o.balances.map((t) => t.toString()) : [];
        } catch (r) {
          if (
            (i.default.info("Failed to fetch TRC20 balances"),
            i.default.error(r),
            c(f, this, v).call(this, r))
          )
            throw new Error("limits_exceeded");
          throw r;
        }
      }
      function v(t) {
        return (
          (t.toJSON && 429 === t.toJSON().status) ||
          (t.message &&
            (t.message.includes("exceed") ||
              t.message.includes("limit") ||
              "Request failed with status code 403" === t.message))
        );
      }
      e.default = TronwebExplorer;
    },
  },
]);
