(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [249],
  {
    2657: function (e, t, o) {
      "use strict";
      var r = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = b(o(3218)),
        i = r(o(803)),
        a = r(o(2838)),
        s = o(3914),
        d = o(3915),
        l = o(2800),
        u = o(2968),
        c = r(o(73)),
        f = o(27),
        g = o(19),
        m = r(o(230)),
        v = r(o(2977)),
        p = o(2806),
        h = o(4912);
      function b(e, t) {
        if ("function" == typeof WeakMap)
          var o = new WeakMap(),
            r = new WeakMap();
        return (b = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            i,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((n = t ? r : o)) {
            if (n.has(e)) return n.get(e);
            n.set(e, a);
          }
          for (const o in e)
            "default" !== o &&
              {}.hasOwnProperty.call(e, o) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, o)) &&
              (i.get || i.set)
                ? n(a, o, i)
                : (a[o] = e[o]));
          return a;
        })(e, t);
      }
      function y(e, t, o) {
        (S(e, t), t.set(e, o));
      }
      function S(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function k(e, t) {
        return e.get(w(e, t));
      }
      function A(e, t, o) {
        return (e.set(w(e, t), o), o);
      }
      function w(e, t, o) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : o;
        throw new TypeError("Private element is not present on this object");
      }
      var O = new WeakMap();
      class COSMOSCoin extends (0, p.StakingMixin)(
        (0, p.HasBlockScanner)((0, p.HasProviders)(m.default)),
      ) {
        constructor(e) {
          const { prefix: t, denom: o, feeData: r, derivation: n } = e;
          (super({ ...e, unspendableBalance: r.unspendableBalance }),
            y(this, O, void 0),
            (this.derivation = n),
            (this.prefix = t),
            (this.denom = o),
            (this.fee = r.fee),
            (this.sendFeeGas = r.sendFeeGas),
            (this.stakingFeeGas = r.stakingFeeGas),
            (this.reserveForStake = r.reserveForStake),
            (this.reStakingFeeGas = r.reStakingFeeGas),
            (this.claimFeeGas = r.claimFeeGas),
            (this.minClaimSum = r.minClaimSum),
            (this.transactions = []),
            (this.fields.paymentId = !0),
            this.eventEmitter.on(
              this.ticker + "::confirmed-socket-tx",
              (e, t) => {
                this.onConfirmSocketTx(t);
              },
            ),
            this.setExplorersModules([v.default]),
            this.loadExplorers(e));
        }
        async loadWallet(e, t) {
          const o = n.bip32.fromSeed(e),
            r = o.derivePath(this.derivation);
          if (!r)
            throw new g.WalletError({
              type: f.WALLET_ERROR,
              error: new Error("can't get a privateKey!"),
              instance: this,
            });
          const a = n.crypto.hash160(r.publicKey);
          return (
            A(O, this, r.toWIF()),
            (this.address = i.default.encode(
              this.prefix,
              i.default.toWords(a),
            )),
            this.setPrivateKey(r.toWIF(), t),
            { id: this.id, privateKey: k(O, this), address: this.address }
          );
        }
        getAddress() {
          if (k(O, this)) {
            const e = n.ECPair.fromWIF(k(O, this)),
              t = n.crypto.hash160(e.publicKey);
            return i.default.encode(this.prefix, i.default.toWords(t));
          }
          return new g.WalletError({
            type: f.WALLET_ERROR,
            error: new Error("privateKey is empty!"),
            instance: this,
          });
        }
        getSignKeys() {
          const e = n.ECPair.fromWIF(k(O, this)),
            t = a.default.decode(k(O, this));
          return {
            privateKey: t.privateKey.toString("hex"),
            publicKey: e.publicKey.toString("hex"),
          };
        }
        async validateAddress(e) {
          try {
            const { prefix: t } = i.default.decode(e);
            return t === this.prefix;
          } catch (t) {
            return !1;
          }
        }
        async getTransaction(e) {
          return this.getProvider("history2").getTransaction(this.address, e);
        }
        async getTransactions(e) {
          let {
            address: t = this.address,
            offset: o = 0,
            limit: r = this.explorer.defaultTxLimit,
            pageNum: n = 0,
          } = e;
          return (
            (this.transactions = await this.getProvider("history2")
              .getTransactions({
                address: t,
                offset: o,
                limit: r,
                pageNum: n,
                denom: this.denom,
              })
              .catch((e) => {
                throw new g.ExplorerRequestError({
                  type: f.GET_TRANSACTIONS_TYPE,
                  error: e,
                  instance: this,
                });
              })),
            this.transactions
          );
        }
        async getTransactionBlueprint(e) {
          let { type: t, ...o } = e;
          if (h.CosmosTxTypes[t]) return h.CosmosTxTypes[t](o);
          if (t === f.ATOM_MSG_TYPES.Withdraw)
            return this.getProvider("send2").getTransactionRewardsBlueprint({
              from: this.address,
              ...o,
            });
          throw new Error(`[${this.ticker}] no ${t} tx blueprint found`);
        }
        async sign(e, t, o) {
          (void 0 === o && (o = ""),
            (this.signer =
              this.signer ||
              (await s.SigningStargateClient.offline(this.wallet))));
          const r = await this.getProvider("send2").getSignerData(this.address);
          return this.signer.signDirect(this.address, e, t, o, r);
        }
        createTransaction(e) {
          let { address: t, amount: o, memo: r = "" } = e;
          const n = [
              {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: {
                  fromAddress: this.address,
                  toAddress: t,
                  amount: [{ denom: this.denom, amount: o }],
                },
              },
            ],
            i = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.sendFeeGas,
            };
          return this.sign(n, i, r);
        }
        async sendTransaction(e) {
          const t = d.TxRaw.encode(e).finish();
          return this.getProvider("send2").sendTransaction(t);
        }
        createDelegationTransaction(e, t, o) {
          void 0 === o && (o = "");
          const r = [
              {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: {
                  delegatorAddress: this.address,
                  validatorAddress: e,
                  amount: { denom: this.denom, amount: t },
                },
              },
            ],
            n = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.stakingFeeGas,
            };
          return this.sign(r, n, o);
        }
        createRedelegationTransaction(e, t, o, r) {
          void 0 === r && (r = "");
          const n = [
              {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: {
                  delegatorAddress: this.address,
                  validatorSrcAddress: e,
                  validatorDstAddress: t,
                  amount: { denom: this.denom, amount: o },
                },
              },
            ],
            i = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.reStakingFeeGas,
            };
          return this.sign(n, i);
        }
        createUnbondingDelegationTransaction(e, t) {
          const o = [
              {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: {
                  delegatorAddress: this.address,
                  validatorAddress: e,
                  amount: { denom: this.denom, amount: t },
                },
              },
            ],
            r = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.stakingFeeGas,
            };
          return this.sign(o, r);
        }
        async createWithdrawDelegationTransaction(e) {
          const t = await this.getProvider("balance2").getValidators(
              this.address,
            ),
            o = t.map((e) => ({
              typeUrl:
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
              value: { delegatorAddress: this.address, validatorAddress: e },
            })),
            r = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.claimFeeGas,
            };
          return this.sign(o, r);
        }
        async getInfo() {
          return (
            (this.balance = this.calculateAvailableBalance(
              await this.getProvider("balance2").getTotalBalance(this.address),
            ).toBN()),
            await this.getStakingInfo(),
            { balance: this.balance, balances: this.balances }
          );
        }
        async fetchStakingInfo() {
          const e = this.getProvider("balance2");
          await e.getLatestBlock();
          const t = {},
            o = this.calculateStakedBalance(
              await e.getStakedDelegations(this.address),
              t,
            );
          return {
            rewards: this.calculateRewards(
              await e.getRewardsBalance(this.address),
            ),
            staked: o,
            unstaking: this.calculateUnstakingBalance(
              await e.getUnbondingDelegations(this.address),
            ),
            validators: t,
          };
        }
        async calculateAvailableForStake(e) {
          let { balance: t } = e;
          const o = t
            .toBN()
            .sub(new this.BN(this.fee))
            .sub(new this.BN(this.reserveForStake));
          return new c.default(o.isNeg() ? "0" : o, this);
        }
        calculateTotal(e) {
          let { balance: t, staked: o, unstaking: r, rewards: n } = e;
          return new c.default(
            t.toBN().add(o.toBN()).add(r.toBN()).add(n.toBN()).toString(),
            this,
          );
        }
        calculateAvailableBalance(e) {
          var t, o;
          return new c.default(
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
          var t, o, r;
          return new c.default(
            null !==
              (t =
                null === e ||
                void 0 === e ||
                null === (o = e.find((e) => e.denom === this.denom)) ||
                void 0 === o ||
                null === (r = o.amount) ||
                void 0 === r
                  ? void 0
                  : r.split(".")[0]) && void 0 !== t
              ? t
              : "0",
            this,
          );
        }
        calculateStakedBalance(e, t) {
          return new c.default(
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
              let { entries: r, validator_address: n } = o;
              const i = n;
              return (
                (t.validators[i] = r
                  .map((e) => new this.BN(e.balance.split(".")[0]))
                  .reduce((e, t) => e.add(new this.BN(t)), new this.BN("0"))),
                e.add(t.validators[i])
              );
            }, new this.BN("0"));
            t.total = o.toString().split(".")[0];
          }
          return new c.default(t.total || "0", this);
        }
        getTotalDelegations(e, t) {
          return e.reduce((e, o) => {
            let { delegation: r, balance: n } = o;
            return (
              (t[r.validator_address] = {
                address: r.validator_address,
                staked: new c.default(new this.BN(n.amount), this),
              }),
              e.add(new this.BN(n.amount))
            );
          }, new this.BN("0"));
        }
        setPrivateKey(e, t) {
          A(O, this, e);
          const o = (0, l.stringToPath)(this.derivation);
          u.DirectSecp256k1HdWallet.fromMnemonic(t, {
            hdPaths: [o],
            prefix: this.prefix,
          }).then((e) => {
            this.wallet = e;
          });
        }
        isRedelegationSupported() {
          return !0;
        }
      }
      t.default = COSMOSCoin;
    },
    2730: function (e, t, o) {
      "use strict";
      o.r(t);
      var r = o(3218),
        n = o(803),
        i = o.n(n),
        a = o(3914),
        s = o(3915),
        d = o(2800),
        l = o(2968),
        u = o(8417),
        c = o(8418),
        f = o(27),
        g = o(19),
        m = o(2657),
        v = o.n(m),
        p = (e, t, o) =>
          new Promise((r, n) => {
            var i = (e) => {
                try {
                  s(o.next(e));
                } catch (t) {
                  n(t);
                }
              },
              a = (e) => {
                try {
                  s(o.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              s = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
            s((o = o.apply(e, t)).next());
          });
      class BABYCoin extends v.a {
        constructor(e) {
          (super(e),
            (this.privateKey = ""),
            (this.registry = new l["Registry"]([])),
            (this.address = ""),
            (this.signer = void 0));
          const {
            MsgWrappedDelegate: t,
            MsgWrappedBeginRedelegate: o,
            MsgWrappedUndelegate: r,
          } = c["BabylonEpochingV1Tx"];
          (this.registry.register("/babylon.epoching.v1.MsgWrappedDelegate", t),
            this.registry.register(
              "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
              o,
            ),
            this.registry.register(
              "/babylon.epoching.v1.MsgWrappedUndelegate",
              r,
            ),
            this.registry.register(
              "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
              u["MsgWithdrawDelegatorReward"],
            ));
        }
        loadWallet(e, t) {
          return p(this, null, function* () {
            const o = r["bip32"].fromSeed(e),
              n = o.derivePath(this.derivation);
            if (!n)
              throw new g["WalletError"]({
                type: f["WALLET_ERROR"],
                error: new Error("can't get a privateKey!"),
                instance: this,
              });
            const a = r["crypto"].hash160(n.publicKey);
            return (
              (this.privateKey = n.toWIF()),
              (this.address = i.a.encode(this.prefix, i.a.toWords(a))),
              this.setPrivateKey(n.toWIF(), t),
              {
                id: this.id,
                privateKey: this.privateKey,
                address: this.address,
              }
            );
          });
        }
        getAddress() {
          if (this.privateKey) {
            const e = r["ECPair"].fromWIF(this.privateKey),
              t = r["crypto"].hash160(e.publicKey);
            return i.a.encode(this.prefix, i.a.toWords(t));
          }
          throw new g["WalletError"]({
            type: f["WALLET_ERROR"],
            error: new Error("privateKey is empty!"),
            instance: this,
          });
        }
        sign(e, t, o = "") {
          return p(this, null, function* () {
            this.signer =
              this.signer ||
              (yield a["SigningStargateClient"].offline(this.wallet, {
                registry: this.registry,
              }));
            const r = yield this.getProvider("send2").getSignerData(
              this.address,
            );
            return this.signer.sign(this.address, e, t, o, r);
          });
        }
        sendTransaction(e) {
          return p(this, null, function* () {
            const t = s["TxRaw"].encode(e).finish();
            return this.getProvider("send2").sendTransaction(t);
          });
        }
        createDelegationTransaction(e, t, o = "") {
          const r = [
              {
                typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
                value: {
                  msg: {
                    delegatorAddress: this.address,
                    validatorAddress: e,
                    amount: { denom: this.denom, amount: t },
                  },
                },
              },
            ],
            n = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.stakingFeeGas,
            };
          return this.sign(r, n, o);
        }
        createRedelegationTransaction(e, t, o, r = "") {
          const n = [
              {
                typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
                value: {
                  msg: {
                    delegatorAddress: this.address,
                    validatorSrcAddress: e,
                    validatorDstAddress: t,
                    amount: { denom: this.denom, amount: o },
                  },
                },
              },
            ],
            i = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.reStakingFeeGas,
            };
          return this.sign(n, i);
        }
        createUnbondingDelegationTransaction(e, t) {
          const o = [
              {
                typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
                value: {
                  msg: {
                    delegatorAddress: this.address,
                    validatorAddress: e,
                    amount: { denom: this.denom, amount: t },
                  },
                },
              },
            ],
            r = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.stakingFeeGas,
            };
          return this.sign(o, r);
        }
        setPrivateKey(e, t) {
          this.privateKey = e;
          const o = Object(d["stringToPath"])(this.derivation);
          l["DirectSecp256k1HdWallet"]
            .fromMnemonic(t, { hdPaths: [o], prefix: this.prefix })
            .then((e) => {
              this.wallet = e;
            });
        }
      }
      t["default"] = BABYCoin;
    },
    2853: function (e, t, o) {
      "use strict";
      var r = o(0);
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
            return i.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }));
      var n = r(o(2886)),
        i = r(o(2887)),
        a = r(o(2888));
    },
    2886: function (e, t, o) {
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
    2887: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = (e) =>
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
      t.default = r;
    },
    2888: function (e, t, o) {
      "use strict";
      var r = o(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(o(81));
      const i = ["reward", "unfreeze", "freeze", "vote"],
        a = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: o,
                tokens: r,
                type: a,
                scriptPubKey: s,
              } = e;
              const d = await this.getTransaction(t, o, r);
              (await n.default.filterAndUpdateTransactions([d]),
                "receive" === a &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${d.walletid}::new-socket-tx`,
                    { unconfirmedTx: d },
                  ),
                "confirm" === a &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    d.walletid,
                    d,
                    d.ticker,
                  ),
                i.forEach((e) => {
                  a === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${a}`,
                      d || {},
                    );
                }));
            }
          };
      t.default = a;
    },
    2977: function (e, t, o) {
      "use strict";
      (function (e) {
        var r = o(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var n = o(3090),
          i = r(o(129)),
          a = o(19),
          s = o(27),
          d = o(4),
          l = o(2853);
        const u = 50;
        class CosmosNodeExplorerV2 extends (0,
        l.CosmosNodeTransactionTypeMixin)(i.default) {
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
              throw new a.ExplorerRequestError({
                type: s.SEND_TRANSACTION_TYPE,
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
              throw new a.ExplorerRequestError({
                type: s.SEND_TRANSACTION_TYPE,
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
            let { address: t, limit: o, denom: r } = e;
            const i = await this.request(
                `/cosmos/tx/v1beta1/txs?events=message.sender=%27${t}%27&query=message.sender=%27${t}%27`,
              ),
              a = await this.request(
                `/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${t}%27&query=transfer.recipient=%27${t}%27`,
              ),
              s = new Map();
            (i.tx_responses.forEach((e) => {
              s.set(e.txhash, { ...e, direction: !1 });
            }),
              a.tx_responses.forEach((e) => {
                s.set(e.txhash, { ...e, direction: !0 });
              }));
            const d = [];
            for (const [, n] of s.entries()) d.push(n);
            d.sort((e, t) => Number(e.height) < Number(t.height));
            const l = d
                .flatMap((e) => [
                  ...e.tx.body.messages.map((t) => {
                    var o, r, i;
                    let a;
                    const s =
                      null === (o = e.tx) ||
                      void 0 === o ||
                      null === (r = o.auth_info) ||
                      void 0 === r ||
                      null === (i = r.fee) ||
                      void 0 === i
                        ? void 0
                        : i.amount;
                    var d, l, u;
                    s && Array.isArray(e.tx.auth_info.fee.amount)
                      ? (a = e.tx.auth_info.fee.amount.reduce(
                          (e, t) => e + parseInt(t.amount, 10),
                          0,
                        ))
                      : (a =
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
                      ...(0, n.pick)(
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
                      fee: a,
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
            return this.modifyTransactionsResponse((0, n.uniqBy)(l, u), t);
          }
          getTxValue(e, t) {
            var o;
            const r = Array.isArray(t.amount)
              ? t.amount[0].amount
              : (null === (o = t.amount) || void 0 === o ? void 0 : o.amount) ||
                t.withdraw_amount ||
                this.getAmountFromLogs(t);
            return this.wallet.toCurrencyUnit(r);
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
              r = this.chainId || (await this.getChainId());
            return { sequence: t, accountNumber: o, chainId: r };
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
    3587: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Any = t.protobufPackage = void 0));
        const n = r(o(2754)),
          i = r(o(2755));
        t.protobufPackage = "google.protobuf";
        const a = { typeUrl: "" };
        t.Any = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.typeUrl && t.uint32(10).string(e.typeUrl),
              0 !== e.value.length && t.uint32(18).bytes(e.value),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, a);
            n.value = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.typeUrl = o.string();
                  break;
                case 2:
                  n.value = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              (t.value = new Uint8Array()),
              void 0 !== e.typeUrl && null !== e.typeUrl
                ? (t.typeUrl = String(e.typeUrl))
                : (t.typeUrl = ""),
              void 0 !== e.value && null !== e.value && (t.value = l(e.value)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl),
              void 0 !== e.value &&
                (t.value = c(void 0 !== e.value ? e.value : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, a);
            return (
              void 0 !== e.typeUrl && null !== e.typeUrl
                ? (t.typeUrl = e.typeUrl)
                : (t.typeUrl = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = new Uint8Array()),
              t
            );
          },
        };
        var s = (() => {
          if ("undefined" !== typeof s) return s;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          s.atob || ((e) => s.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = d(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const u =
          s.btoa || ((e) => s.Buffer.from(e, "binary").toString("base64"));
        function c(e) {
          const t = [];
          for (let o = 0; o < e.byteLength; ++o)
            t.push(String.fromCharCode(e[o]));
          return u(t.join(""));
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    3588: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompactBitArray = t.MultiSignature = t.protobufPackage = void 0));
        const n = r(o(2754)),
          i = r(o(2755));
        t.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const a = {};
        t.MultiSignature = {
          encode(e, t = i.default.Writer.create()) {
            for (const o of e.signatures) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, a);
            n.signatures = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(u(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.signatures
                ? (t.signatures = e.signatures.map((e) =>
                    f(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.signatures = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, a);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(o);
            return t;
          },
        };
        const s = { extraBitsStored: 0 };
        t.CompactBitArray = {
          encode(e, t = i.default.Writer.create()) {
            return (
              0 !== e.extraBitsStored && t.uint32(8).uint32(e.extraBitsStored),
              0 !== e.elems.length && t.uint32(18).bytes(e.elems),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, s);
            n.elems = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.extraBitsStored = o.uint32();
                  break;
                case 2:
                  n.elems = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
            return (
              (t.elems = new Uint8Array()),
              void 0 !== e.extraBitsStored && null !== e.extraBitsStored
                ? (t.extraBitsStored = Number(e.extraBitsStored))
                : (t.extraBitsStored = 0),
              void 0 !== e.elems && null !== e.elems && (t.elems = u(e.elems)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.extraBitsStored &&
                (t.extraBitsStored = e.extraBitsStored),
              void 0 !== e.elems &&
                (t.elems = f(void 0 !== e.elems ? e.elems : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, s);
            return (
              void 0 !== e.extraBitsStored && null !== e.extraBitsStored
                ? (t.extraBitsStored = e.extraBitsStored)
                : (t.extraBitsStored = 0),
              void 0 !== e.elems && null !== e.elems
                ? (t.elems = e.elems)
                : (t.elems = new Uint8Array()),
              t
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const l =
          d.atob || ((e) => d.Buffer.from(e, "base64").toString("binary"));
        function u(e) {
          const t = l(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function f(e) {
          const t = [];
          for (let o = 0; o < e.byteLength; ++o)
            t.push(String.fromCharCode(e[o]));
          return c(t.join(""));
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    3915: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Fee =
            t.ModeInfo_Multi =
            t.ModeInfo_Single =
            t.ModeInfo =
            t.SignerInfo =
            t.AuthInfo =
            t.TxBody =
            t.SignDoc =
            t.TxRaw =
            t.Tx =
            t.protobufPackage =
              void 0));
        const n = r(o(2754)),
          i = r(o(2755)),
          a = o(3587),
          s = o(4474),
          d = o(3588),
          l = o(3916);
        t.protobufPackage = "cosmos.tx.v1beta1";
        const u = {};
        t.Tx = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.body &&
                t.TxBody.encode(e.body, o.uint32(10).fork()).ldelim(),
              void 0 !== e.authInfo &&
                t.AuthInfo.encode(e.authInfo, o.uint32(18).fork()).ldelim());
            for (const t of e.signatures) o.uint32(26).bytes(t);
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, u);
            a.signatures = [];
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.body = t.TxBody.decode(r, r.uint32());
                  break;
                case 2:
                  a.authInfo = t.AuthInfo.decode(r, r.uint32());
                  break;
                case 3:
                  a.signatures.push(r.bytes());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, u);
            if (
              ((o.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (o.body = t.TxBody.fromJSON(e.body))
                : (o.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (o.authInfo = t.AuthInfo.fromJSON(e.authInfo))
                : (o.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) o.signatures.push(A(t));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.body &&
                (o.body = e.body ? t.TxBody.toJSON(e.body) : void 0),
              void 0 !== e.authInfo &&
                (o.authInfo = e.authInfo
                  ? t.AuthInfo.toJSON(e.authInfo)
                  : void 0),
              e.signatures
                ? (o.signatures = e.signatures.map((e) =>
                    O(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, u);
            if (
              ((o.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (o.body = t.TxBody.fromPartial(e.body))
                : (o.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (o.authInfo = t.AuthInfo.fromPartial(e.authInfo))
                : (o.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) o.signatures.push(t);
            return o;
          },
        };
        const c = {};
        t.TxRaw = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes),
              0 !== e.authInfoBytes.length &&
                t.uint32(18).bytes(e.authInfoBytes));
            for (const o of e.signatures) t.uint32(26).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, c);
            ((n.signatures = []),
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()));
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.bodyBytes = o.bytes();
                  break;
                case 2:
                  n.authInfoBytes = o.bytes();
                  break;
                case 3:
                  n.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            if (
              ((t.signatures = []),
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = A(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = A(e.authInfoBytes)),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(A(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = O(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = O(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              e.signatures
                ? (t.signatures = e.signatures.map((e) =>
                    O(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.signatures = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            if (
              ((t.signatures = []),
              void 0 !== e.bodyBytes && null !== e.bodyBytes
                ? (t.bodyBytes = e.bodyBytes)
                : (t.bodyBytes = new Uint8Array()),
              void 0 !== e.authInfoBytes && null !== e.authInfoBytes
                ? (t.authInfoBytes = e.authInfoBytes)
                : (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(o);
            return t;
          },
        };
        const f = { chainId: "", accountNumber: n.default.UZERO };
        t.SignDoc = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes),
              0 !== e.authInfoBytes.length &&
                t.uint32(18).bytes(e.authInfoBytes),
              "" !== e.chainId && t.uint32(26).string(e.chainId),
              e.accountNumber.isZero() || t.uint32(32).uint64(e.accountNumber),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, f);
            ((n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()));
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.bodyBytes = o.bytes();
                  break;
                case 2:
                  n.authInfoBytes = o.bytes();
                  break;
                case 3:
                  n.chainId = o.string();
                  break;
                case 4:
                  n.accountNumber = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = A(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = A(e.authInfoBytes)),
              void 0 !== e.chainId && null !== e.chainId
                ? (t.chainId = String(e.chainId))
                : (t.chainId = ""),
              void 0 !== e.accountNumber && null !== e.accountNumber
                ? (t.accountNumber = n.default.fromString(e.accountNumber))
                : (t.accountNumber = n.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = O(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = O(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== e.chainId && (t.chainId = e.chainId),
              void 0 !== e.accountNumber &&
                (t.accountNumber = (
                  e.accountNumber || n.default.UZERO
                ).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return (
              void 0 !== e.bodyBytes && null !== e.bodyBytes
                ? (t.bodyBytes = e.bodyBytes)
                : (t.bodyBytes = new Uint8Array()),
              void 0 !== e.authInfoBytes && null !== e.authInfoBytes
                ? (t.authInfoBytes = e.authInfoBytes)
                : (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.chainId && null !== e.chainId
                ? (t.chainId = e.chainId)
                : (t.chainId = ""),
              void 0 !== e.accountNumber && null !== e.accountNumber
                ? (t.accountNumber = e.accountNumber)
                : (t.accountNumber = n.default.UZERO),
              t
            );
          },
        };
        const g = { memo: "", timeoutHeight: n.default.UZERO };
        t.TxBody = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const o of e.messages)
              a.Any.encode(o, t.uint32(10).fork()).ldelim();
            ("" !== e.memo && t.uint32(18).string(e.memo),
              e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight));
            for (const o of e.extensionOptions)
              a.Any.encode(o, t.uint32(8186).fork()).ldelim();
            for (const o of e.nonCriticalExtensionOptions)
              a.Any.encode(o, t.uint32(16378).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, g);
            ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []));
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.messages.push(a.Any.decode(o, o.uint32()));
                  break;
                case 2:
                  n.memo = o.string();
                  break;
                case 3:
                  n.timeoutHeight = o.uint64();
                  break;
                case 1023:
                  n.extensionOptions.push(a.Any.decode(o, o.uint32()));
                  break;
                case 2047:
                  n.nonCriticalExtensionOptions.push(
                    a.Any.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const o of e.messages) t.messages.push(a.Any.fromJSON(o));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = String(e.memo))
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = n.default.fromString(e.timeoutHeight))
                : (t.timeoutHeight = n.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const o of e.extensionOptions)
                t.extensionOptions.push(a.Any.fromJSON(o));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const o of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(a.Any.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.messages
                ? (t.messages = e.messages.map((e) =>
                    e ? a.Any.toJSON(e) : void 0,
                  ))
                : (t.messages = []),
              void 0 !== e.memo && (t.memo = e.memo),
              void 0 !== e.timeoutHeight &&
                (t.timeoutHeight = (
                  e.timeoutHeight || n.default.UZERO
                ).toString()),
              e.extensionOptions
                ? (t.extensionOptions = e.extensionOptions.map((e) =>
                    e ? a.Any.toJSON(e) : void 0,
                  ))
                : (t.extensionOptions = []),
              e.nonCriticalExtensionOptions
                ? (t.nonCriticalExtensionOptions =
                    e.nonCriticalExtensionOptions.map((e) =>
                      e ? a.Any.toJSON(e) : void 0,
                    ))
                : (t.nonCriticalExtensionOptions = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const o of e.messages) t.messages.push(a.Any.fromPartial(o));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = e.memo)
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = e.timeoutHeight)
                : (t.timeoutHeight = n.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const o of e.extensionOptions)
                t.extensionOptions.push(a.Any.fromPartial(o));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const o of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(a.Any.fromPartial(o));
            return t;
          },
        };
        const m = {};
        t.AuthInfo = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const r of e.signerInfos)
              t.SignerInfo.encode(r, o.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.fee &&
                t.Fee.encode(e.fee, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, m);
            a.signerInfos = [];
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.signerInfos.push(t.SignerInfo.decode(r, r.uint32()));
                  break;
                case 2:
                  a.fee = t.Fee.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, m);
            if (
              ((o.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const r of e.signerInfos)
                o.signerInfos.push(t.SignerInfo.fromJSON(r));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (o.fee = t.Fee.fromJSON(e.fee))
                : (o.fee = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              e.signerInfos
                ? (o.signerInfos = e.signerInfos.map((e) =>
                    e ? t.SignerInfo.toJSON(e) : void 0,
                  ))
                : (o.signerInfos = []),
              void 0 !== e.fee &&
                (o.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, m);
            if (
              ((o.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const r of e.signerInfos)
                o.signerInfos.push(t.SignerInfo.fromPartial(r));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (o.fee = t.Fee.fromPartial(e.fee))
                : (o.fee = void 0),
              o
            );
          },
        };
        const v = { sequence: n.default.UZERO };
        t.SignerInfo = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.publicKey &&
                a.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(),
              void 0 !== e.modeInfo &&
                t.ModeInfo.encode(e.modeInfo, o.uint32(18).fork()).ldelim(),
              e.sequence.isZero() || o.uint32(24).uint64(e.sequence),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const s = Object.assign({}, v);
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.publicKey = a.Any.decode(r, r.uint32());
                  break;
                case 2:
                  s.modeInfo = t.ModeInfo.decode(r, r.uint32());
                  break;
                case 3:
                  s.sequence = r.uint64();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, v);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (o.publicKey = a.Any.fromJSON(e.publicKey))
                : (o.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (o.modeInfo = t.ModeInfo.fromJSON(e.modeInfo))
                : (o.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (o.sequence = n.default.fromString(e.sequence))
                : (o.sequence = n.default.UZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.publicKey &&
                (o.publicKey = e.publicKey
                  ? a.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.modeInfo &&
                (o.modeInfo = e.modeInfo
                  ? t.ModeInfo.toJSON(e.modeInfo)
                  : void 0),
              void 0 !== e.sequence &&
                (o.sequence = (e.sequence || n.default.UZERO).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, v);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (o.publicKey = a.Any.fromPartial(e.publicKey))
                : (o.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (o.modeInfo = t.ModeInfo.fromPartial(e.modeInfo))
                : (o.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (o.sequence = e.sequence)
                : (o.sequence = n.default.UZERO),
              o
            );
          },
        };
        const p = {};
        t.ModeInfo = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.single &&
                t.ModeInfo_Single.encode(
                  e.single,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.ModeInfo_Multi.encode(e.multi, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, p);
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.single = t.ModeInfo_Single.decode(r, r.uint32());
                  break;
                case 2:
                  a.multi = t.ModeInfo_Multi.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (o.single = t.ModeInfo_Single.fromJSON(e.single))
                : (o.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (o.multi = t.ModeInfo_Multi.fromJSON(e.multi))
                : (o.multi = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.single &&
                (o.single = e.single
                  ? t.ModeInfo_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (o.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (o.single = t.ModeInfo_Single.fromPartial(e.single))
                : (o.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (o.multi = t.ModeInfo_Multi.fromPartial(e.multi))
                : (o.multi = void 0),
              o
            );
          },
        };
        const h = { mode: 0 };
        t.ModeInfo_Single = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.mode && t.uint32(8).int32(e.mode),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, h);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.mode = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = s.signModeFromJSON(e.mode))
                : (t.mode = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.mode && (t.mode = s.signModeToJSON(e.mode)),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = e.mode)
                : (t.mode = 0),
              t
            );
          },
        };
        const b = {};
        t.ModeInfo_Multi = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.bitarray &&
                d.CompactBitArray.encode(
                  e.bitarray,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const r of e.modeInfos)
              t.ModeInfo.encode(r, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, b);
            a.modeInfos = [];
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.bitarray = d.CompactBitArray.decode(r, r.uint32());
                  break;
                case 2:
                  a.modeInfos.push(t.ModeInfo.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, b);
            if (
              ((o.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (o.bitarray = d.CompactBitArray.fromJSON(e.bitarray))
                : (o.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const r of e.modeInfos)
                o.modeInfos.push(t.ModeInfo.fromJSON(r));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.bitarray &&
                (o.bitarray = e.bitarray
                  ? d.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.modeInfos
                ? (o.modeInfos = e.modeInfos.map((e) =>
                    e ? t.ModeInfo.toJSON(e) : void 0,
                  ))
                : (o.modeInfos = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, b);
            if (
              ((o.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (o.bitarray = d.CompactBitArray.fromPartial(e.bitarray))
                : (o.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const r of e.modeInfos)
                o.modeInfos.push(t.ModeInfo.fromPartial(r));
            return o;
          },
        };
        const y = { gasLimit: n.default.UZERO, payer: "", granter: "" };
        t.Fee = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const o of e.amount)
              l.Coin.encode(o, t.uint32(10).fork()).ldelim();
            return (
              e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit),
              "" !== e.payer && t.uint32(26).string(e.payer),
              "" !== e.granter && t.uint32(34).string(e.granter),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, y);
            n.amount = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.amount.push(l.Coin.decode(o, o.uint32()));
                  break;
                case 2:
                  n.gasLimit = o.uint64();
                  break;
                case 3:
                  n.payer = o.string();
                  break;
                case 4:
                  n.granter = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, y);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const o of e.amount) t.amount.push(l.Coin.fromJSON(o));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = n.default.fromString(e.gasLimit))
                : (t.gasLimit = n.default.UZERO),
              void 0 !== e.payer && null !== e.payer
                ? (t.payer = String(e.payer))
                : (t.payer = ""),
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = String(e.granter))
                : (t.granter = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.amount
                ? (t.amount = e.amount.map((e) =>
                    e ? l.Coin.toJSON(e) : void 0,
                  ))
                : (t.amount = []),
              void 0 !== e.gasLimit &&
                (t.gasLimit = (e.gasLimit || n.default.UZERO).toString()),
              void 0 !== e.payer && (t.payer = e.payer),
              void 0 !== e.granter && (t.granter = e.granter),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, y);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const o of e.amount) t.amount.push(l.Coin.fromPartial(o));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = e.gasLimit)
                : (t.gasLimit = n.default.UZERO),
              void 0 !== e.payer && null !== e.payer
                ? (t.payer = e.payer)
                : (t.payer = ""),
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = e.granter)
                : (t.granter = ""),
              t
            );
          },
        };
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const k =
          S.atob || ((e) => S.Buffer.from(e, "base64").toString("binary"));
        function A(e) {
          const t = k(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const w =
          S.btoa || ((e) => S.Buffer.from(e, "binary").toString("base64"));
        function O(e) {
          const t = [];
          for (let o = 0; o < e.byteLength; ++o)
            t.push(String.fromCharCode(e[o]));
          return w(t.join(""));
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    3916: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DecProto =
          t.IntProto =
          t.DecCoin =
          t.Coin =
          t.protobufPackage =
            void 0));
      const n = r(o(2754)),
        i = r(o(2755));
      t.protobufPackage = "cosmos.base.v1beta1";
      const a = { denom: "", amount: "" };
      t.Coin = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, a);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.denom = o.string();
                break;
              case 2:
                n.amount = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            t
          );
        },
      };
      const s = { denom: "", amount: "" };
      t.DecCoin = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, s);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.denom = o.string();
                break;
              case 2:
                n.amount = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            t
          );
        },
      };
      const d = { int: "" };
      t.IntProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.int && t.uint32(10).string(e.int),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, d);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.int = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.int && null !== e.int
              ? (t.int = String(e.int))
              : (t.int = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.int && (t.int = e.int), t);
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.int && null !== e.int ? (t.int = e.int) : (t.int = ""),
            t
          );
        },
      };
      const l = { dec: "" };
      ((t.DecProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.dec && t.uint32(10).string(e.dec),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, l);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.dec = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.dec && null !== e.dec
              ? (t.dec = String(e.dec))
              : (t.dec = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.dec && (t.dec = e.dec), t);
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.dec && null !== e.dec ? (t.dec = e.dec) : (t.dec = ""),
            t
          );
        },
      }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    4474: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SignatureDescriptor_Data_Multi =
            t.SignatureDescriptor_Data_Single =
            t.SignatureDescriptor_Data =
            t.SignatureDescriptor =
            t.SignatureDescriptors =
            t.signModeToJSON =
            t.signModeFromJSON =
            t.SignMode =
            t.protobufPackage =
              void 0));
        const n = r(o(2754)),
          i = r(o(2755)),
          a = o(3587),
          s = o(3588);
        var d;
        function l(e) {
          switch (e) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return d.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return d.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return d.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return d.SIGN_MODE_LEGACY_AMINO_JSON;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function u(e) {
          switch (e) {
            case d.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case d.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case d.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case d.SIGN_MODE_LEGACY_AMINO_JSON:
              return "SIGN_MODE_LEGACY_AMINO_JSON";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "cosmos.tx.signing.v1beta1"),
          (function (e) {
            ((e[(e["SIGN_MODE_UNSPECIFIED"] = 0)] = "SIGN_MODE_UNSPECIFIED"),
              (e[(e["SIGN_MODE_DIRECT"] = 1)] = "SIGN_MODE_DIRECT"),
              (e[(e["SIGN_MODE_TEXTUAL"] = 2)] = "SIGN_MODE_TEXTUAL"),
              (e[(e["SIGN_MODE_LEGACY_AMINO_JSON"] = 127)] =
                "SIGN_MODE_LEGACY_AMINO_JSON"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((d = t.SignMode || (t.SignMode = {}))),
          (t.signModeFromJSON = l),
          (t.signModeToJSON = u));
        const c = {};
        t.SignatureDescriptors = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const r of e.signatures)
              t.SignatureDescriptor.encode(r, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, c);
            a.signatures = [];
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.signatures.push(
                    t.SignatureDescriptor.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, c);
            if (
              ((o.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                o.signatures.push(t.SignatureDescriptor.fromJSON(r));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.signatures
                ? (o.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor.toJSON(e) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, c);
            if (
              ((o.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                o.signatures.push(t.SignatureDescriptor.fromPartial(r));
            return o;
          },
        };
        const f = { sequence: n.default.UZERO };
        t.SignatureDescriptor = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.publicKey &&
                a.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(),
              void 0 !== e.data &&
                t.SignatureDescriptor_Data.encode(
                  e.data,
                  o.uint32(18).fork(),
                ).ldelim(),
              e.sequence.isZero() || o.uint32(24).uint64(e.sequence),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const s = Object.assign({}, f);
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.publicKey = a.Any.decode(r, r.uint32());
                  break;
                case 2:
                  s.data = t.SignatureDescriptor_Data.decode(r, r.uint32());
                  break;
                case 3:
                  s.sequence = r.uint64();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, f);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (o.publicKey = a.Any.fromJSON(e.publicKey))
                : (o.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = t.SignatureDescriptor_Data.fromJSON(e.data))
                : (o.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (o.sequence = n.default.fromString(e.sequence))
                : (o.sequence = n.default.UZERO),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.publicKey &&
                (o.publicKey = e.publicKey
                  ? a.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.data &&
                (o.data = e.data
                  ? t.SignatureDescriptor_Data.toJSON(e.data)
                  : void 0),
              void 0 !== e.sequence &&
                (o.sequence = (e.sequence || n.default.UZERO).toString()),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, f);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (o.publicKey = a.Any.fromPartial(e.publicKey))
                : (o.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = t.SignatureDescriptor_Data.fromPartial(e.data))
                : (o.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (o.sequence = e.sequence)
                : (o.sequence = n.default.UZERO),
              o
            );
          },
        };
        const g = {};
        t.SignatureDescriptor_Data = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.single &&
                t.SignatureDescriptor_Data_Single.encode(
                  e.single,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.SignatureDescriptor_Data_Multi.encode(
                  e.multi,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, g);
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.single = t.SignatureDescriptor_Data_Single.decode(
                    r,
                    r.uint32(),
                  );
                  break;
                case 2:
                  a.multi = t.SignatureDescriptor_Data_Multi.decode(
                    r,
                    r.uint32(),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.single && null !== e.single
                ? (o.single = t.SignatureDescriptor_Data_Single.fromJSON(
                    e.single,
                  ))
                : (o.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (o.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi))
                : (o.multi = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.single &&
                (o.single = e.single
                  ? t.SignatureDescriptor_Data_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (o.multi = e.multi
                  ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.single && null !== e.single
                ? (o.single = t.SignatureDescriptor_Data_Single.fromPartial(
                    e.single,
                  ))
                : (o.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (o.multi = t.SignatureDescriptor_Data_Multi.fromPartial(
                    e.multi,
                  ))
                : (o.multi = void 0),
              o
            );
          },
        };
        const m = { mode: 0 };
        t.SignatureDescriptor_Data_Single = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.mode && t.uint32(8).int32(e.mode),
              0 !== e.signature.length && t.uint32(18).bytes(e.signature),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = Object.assign({}, m);
            n.signature = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.mode = o.int32();
                  break;
                case 2:
                  n.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.signature = new Uint8Array()),
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = l(e.mode))
                : (t.mode = 0),
              void 0 !== e.signature &&
                null !== e.signature &&
                (t.signature = b(e.signature)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.mode && (t.mode = u(e.mode)),
              void 0 !== e.signature &&
                (t.signature = S(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = e.mode)
                : (t.mode = 0),
              void 0 !== e.signature && null !== e.signature
                ? (t.signature = e.signature)
                : (t.signature = new Uint8Array()),
              t
            );
          },
        };
        const v = {};
        t.SignatureDescriptor_Data_Multi = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.bitarray &&
                s.CompactBitArray.encode(
                  e.bitarray,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const r of e.signatures)
              t.SignatureDescriptor_Data.encode(
                r,
                o.uint32(18).fork(),
              ).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = Object.assign({}, v);
            a.signatures = [];
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.bitarray = s.CompactBitArray.decode(r, r.uint32());
                  break;
                case 2:
                  a.signatures.push(
                    t.SignatureDescriptor_Data.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, v);
            if (
              ((o.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (o.bitarray = s.CompactBitArray.fromJSON(e.bitarray))
                : (o.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                o.signatures.push(t.SignatureDescriptor_Data.fromJSON(r));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.bitarray &&
                (o.bitarray = e.bitarray
                  ? s.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.signatures
                ? (o.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor_Data.toJSON(e) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, v);
            if (
              ((o.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (o.bitarray = s.CompactBitArray.fromPartial(e.bitarray))
                : (o.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                o.signatures.push(t.SignatureDescriptor_Data.fromPartial(r));
            return o;
          },
        };
        var p = (() => {
          if ("undefined" !== typeof p) return p;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const h =
          p.atob || ((e) => p.Buffer.from(e, "base64").toString("binary"));
        function b(e) {
          const t = h(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const y =
          p.btoa || ((e) => p.Buffer.from(e, "binary").toString("base64"));
        function S(e) {
          const t = [];
          for (let o = 0; o < e.byteLength; ++o)
            t.push(String.fromCharCode(e[o]));
          return y(t.join(""));
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    5288: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Timestamp = t.protobufPackage = void 0));
      const n = r(o(3186)),
        i = r(o(3187));
      function a() {
        return { seconds: "0", nanos: 0 };
      }
      function s(e) {
        return e.toString();
      }
      function d(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "google.protobuf"),
        (t.Timestamp = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.seconds && t.uint32(8).int64(e.seconds),
              0 !== e.nanos && t.uint32(16).int32(e.nanos),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = a();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.seconds = s(o.int64());
                  break;
                case 2:
                  n.nanos = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              seconds: d(e.seconds) ? String(e.seconds) : "0",
              nanos: d(e.nanos) ? Number(e.nanos) : 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.seconds && (t.seconds = e.seconds),
              void 0 !== e.nanos && (t.nanos = Math.round(e.nanos)),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = a();
            return (
              (r.seconds = null !== (t = e.seconds) && void 0 !== t ? t : "0"),
              (r.nanos = null !== (o = e.nanos) && void 0 !== o ? o : 0),
              r
            );
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    6267: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Any = t.protobufPackage = void 0));
        const n = r(o(3186)),
          i = r(o(3187));
        function a() {
          return { typeUrl: "", value: new Uint8Array() };
        }
        ((t.protobufPackage = "google.protobuf"),
          (t.Any = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                "" !== e.typeUrl && t.uint32(10).string(e.typeUrl),
                0 !== e.value.length && t.uint32(18).bytes(e.value),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = a();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.typeUrl = o.string();
                    break;
                  case 2:
                    n.value = o.bytes();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                typeUrl: f(e.typeUrl) ? String(e.typeUrl) : "",
                value: f(e.value) ? l(e.value) : new Uint8Array(),
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl),
                void 0 !== e.value &&
                  (t.value = c(
                    void 0 !== e.value ? e.value : new Uint8Array(),
                  )),
                t
              );
            },
            fromPartial(e) {
              var t, o;
              const r = a();
              return (
                (r.typeUrl = null !== (t = e.typeUrl) && void 0 !== t ? t : ""),
                (r.value =
                  null !== (o = e.value) && void 0 !== o
                    ? o
                    : new Uint8Array()),
                r
              );
            },
          }));
        var s = (() => {
          if ("undefined" !== typeof s) return s;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          s.atob || ((e) => s.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = d(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const u =
          s.btoa || ((e) => s.Buffer.from(e, "binary").toString("base64"));
        function c(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return u(t.join(""));
        }
        function f(e) {
          return null !== e && void 0 !== e;
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    6268: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DecProto =
          t.IntProto =
          t.DecCoin =
          t.Coin =
          t.protobufPackage =
            void 0));
      const n = r(o(3186)),
        i = r(o(3187));
      function a() {
        return { denom: "", amount: "" };
      }
      function s() {
        return { denom: "", amount: "" };
      }
      function d() {
        return { int: "" };
      }
      function l() {
        return { dec: "" };
      }
      function u(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "cosmos.base.v1beta1"),
        (t.Coin = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.denom && t.uint32(10).string(e.denom),
              "" !== e.amount && t.uint32(18).string(e.amount),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = a();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.denom = o.string();
                  break;
                case 2:
                  n.amount = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              denom: u(e.denom) ? String(e.denom) : "",
              amount: u(e.amount) ? String(e.amount) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.denom && (t.denom = e.denom),
              void 0 !== e.amount && (t.amount = e.amount),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = a();
            return (
              (r.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
              (r.amount = null !== (o = e.amount) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.DecCoin = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.denom && t.uint32(10).string(e.denom),
              "" !== e.amount && t.uint32(18).string(e.amount),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = s();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.denom = o.string();
                  break;
                case 2:
                  n.amount = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              denom: u(e.denom) ? String(e.denom) : "",
              amount: u(e.amount) ? String(e.amount) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.denom && (t.denom = e.denom),
              void 0 !== e.amount && (t.amount = e.amount),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = s();
            return (
              (r.denom = null !== (t = e.denom) && void 0 !== t ? t : ""),
              (r.amount = null !== (o = e.amount) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.IntProto = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.int && t.uint32(10).string(e.int),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = d();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.int = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { int: u(e.int) ? String(e.int) : "" };
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.int && (t.int = e.int), t);
          },
          fromPartial(e) {
            var t;
            const o = d();
            return ((o.int = null !== (t = e.int) && void 0 !== t ? t : ""), o);
          },
        }),
        (t.DecProto = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.dec && t.uint32(10).string(e.dec),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = l();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.dec = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { dec: u(e.dec) ? String(e.dec) : "" };
          },
          toJSON(e) {
            const t = {};
            return (void 0 !== e.dec && (t.dec = e.dec), t);
          },
          fromPartial(e) {
            var t;
            const o = l();
            return ((o.dec = null !== (t = e.dec) && void 0 !== t ? t : ""), o);
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8417: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgFundCommunityPoolResponse =
          t.MsgFundCommunityPool =
          t.MsgWithdrawValidatorCommissionResponse =
          t.MsgWithdrawValidatorCommission =
          t.MsgWithdrawDelegatorRewardResponse =
          t.MsgWithdrawDelegatorReward =
          t.MsgSetWithdrawAddressResponse =
          t.MsgSetWithdrawAddress =
          t.protobufPackage =
            void 0));
      const n = r(o(2754)),
        i = r(o(2755)),
        a = o(3916);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const s = { delegatorAddress: "", withdrawAddress: "" };
      t.MsgSetWithdrawAddress = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.withdrawAddress && t.uint32(18).string(e.withdrawAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, s);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.delegatorAddress = o.string();
                break;
              case 2:
                n.withdrawAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.withdrawAddress && null !== e.withdrawAddress
              ? (t.withdrawAddress = String(e.withdrawAddress))
              : (t.withdrawAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.withdrawAddress &&
              (t.withdrawAddress = e.withdrawAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.withdrawAddress && null !== e.withdrawAddress
              ? (t.withdrawAddress = e.withdrawAddress)
              : (t.withdrawAddress = ""),
            t
          );
        },
      };
      const d = {};
      t.MsgSetWithdrawAddressResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, d);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return t;
        },
      };
      const l = { delegatorAddress: "", validatorAddress: "" };
      t.MsgWithdrawDelegatorReward = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, l);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.delegatorAddress = o.string();
                break;
              case 2:
                n.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            t
          );
        },
      };
      const u = {};
      t.MsgWithdrawDelegatorRewardResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, u);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return t;
        },
      };
      const c = { validatorAddress: "" };
      t.MsgWithdrawValidatorCommission = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, c);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            t
          );
        },
      };
      const f = {};
      t.MsgWithdrawValidatorCommissionResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, f);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return t;
        },
      };
      const g = { depositor: "" };
      t.MsgFundCommunityPool = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.amount)
            a.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return ("" !== e.depositor && t.uint32(18).string(e.depositor), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, g);
          n.amount = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                n.amount.push(a.Coin.decode(o, o.uint32()));
                break;
              case 2:
                n.depositor = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const o of e.amount) t.amount.push(a.Coin.fromJSON(o));
          return (
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const o of e.amount) t.amount.push(a.Coin.fromPartial(o));
          return (
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = e.depositor)
              : (t.depositor = ""),
            t
          );
        },
      };
      const m = {};
      t.MsgFundCommunityPoolResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const n = Object.assign({}, m);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return n;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this)),
            (this.WithdrawDelegatorReward =
              this.WithdrawDelegatorReward.bind(this)),
            (this.WithdrawValidatorCommission =
              this.WithdrawValidatorCommission.bind(this)),
            (this.FundCommunityPool = this.FundCommunityPool.bind(this)));
        }
        SetWithdrawAddress(e) {
          const o = t.MsgSetWithdrawAddress.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "SetWithdrawAddress",
              o,
            );
          return r.then((e) =>
            t.MsgSetWithdrawAddressResponse.decode(new i.default.Reader(e)),
          );
        }
        WithdrawDelegatorReward(e) {
          const o = t.MsgWithdrawDelegatorReward.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawDelegatorReward",
              o,
            );
          return r.then((e) =>
            t.MsgWithdrawDelegatorRewardResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        WithdrawValidatorCommission(e) {
          const o = t.MsgWithdrawValidatorCommission.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawValidatorCommission",
              o,
            );
          return r.then((e) =>
            t.MsgWithdrawValidatorCommissionResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        FundCommunityPool(e) {
          const o = t.MsgFundCommunityPool.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "FundCommunityPool",
              o,
            );
          return r.then((e) =>
            t.MsgFundCommunityPoolResponse.decode(new i.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8419: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgUpdateParamsResponse =
          t.MsgUpdateParams =
          t.MsgWrappedEditValidatorResponse =
          t.MsgWrappedEditValidator =
          t.MsgWrappedCancelUnbondingDelegationResponse =
          t.MsgWrappedCancelUnbondingDelegation =
          t.MsgWrappedBeginRedelegateResponse =
          t.MsgWrappedBeginRedelegate =
          t.MsgWrappedUndelegateResponse =
          t.MsgWrappedUndelegate =
          t.MsgWrappedDelegateResponse =
          t.MsgWrappedDelegate =
          t.protobufPackage =
            void 0));
      const n = r(o(3186)),
        i = r(o(3187)),
        a = o(8427),
        s = o(8435);
      function d() {
        return { msg: void 0 };
      }
      function l() {
        return {};
      }
      function u() {
        return { msg: void 0 };
      }
      function c() {
        return {};
      }
      function f() {
        return { msg: void 0 };
      }
      function g() {
        return {};
      }
      function m() {
        return { msg: void 0 };
      }
      function v() {
        return {};
      }
      function p() {
        return { msg: void 0 };
      }
      function h() {
        return {};
      }
      function b() {
        return { authority: "", params: void 0 };
      }
      function y() {
        return {};
      }
      function S(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "babylon.epoching.v1"),
        (t.MsgWrappedDelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.msg &&
                a.MsgDelegate.encode(e.msg, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = d();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.msg = a.MsgDelegate.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { msg: S(e.msg) ? a.MsgDelegate.fromJSON(e.msg) : void 0 };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msg &&
                (t.msg = e.msg ? a.MsgDelegate.toJSON(e.msg) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = d();
            return (
              (t.msg =
                void 0 !== e.msg && null !== e.msg
                  ? a.MsgDelegate.fromPartial(e.msg)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgWrappedDelegateResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = l();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = l();
            return t;
          },
        }),
        (t.MsgWrappedUndelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.msg &&
                a.MsgUndelegate.encode(e.msg, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = u();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.msg = a.MsgUndelegate.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { msg: S(e.msg) ? a.MsgUndelegate.fromJSON(e.msg) : void 0 };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msg &&
                (t.msg = e.msg ? a.MsgUndelegate.toJSON(e.msg) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = u();
            return (
              (t.msg =
                void 0 !== e.msg && null !== e.msg
                  ? a.MsgUndelegate.fromPartial(e.msg)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgWrappedUndelegateResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = c();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = c();
            return t;
          },
        }),
        (t.MsgWrappedBeginRedelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.msg &&
                a.MsgBeginRedelegate.encode(
                  e.msg,
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = f();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.msg = a.MsgBeginRedelegate.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              msg: S(e.msg) ? a.MsgBeginRedelegate.fromJSON(e.msg) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msg &&
                (t.msg = e.msg ? a.MsgBeginRedelegate.toJSON(e.msg) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = f();
            return (
              (t.msg =
                void 0 !== e.msg && null !== e.msg
                  ? a.MsgBeginRedelegate.fromPartial(e.msg)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgWrappedBeginRedelegateResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = g();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = g();
            return t;
          },
        }),
        (t.MsgWrappedCancelUnbondingDelegation = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.msg &&
                a.MsgCancelUnbondingDelegation.encode(
                  e.msg,
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = m();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.msg = a.MsgCancelUnbondingDelegation.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              msg: S(e.msg)
                ? a.MsgCancelUnbondingDelegation.fromJSON(e.msg)
                : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msg &&
                (t.msg = e.msg
                  ? a.MsgCancelUnbondingDelegation.toJSON(e.msg)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = m();
            return (
              (t.msg =
                void 0 !== e.msg && null !== e.msg
                  ? a.MsgCancelUnbondingDelegation.fromPartial(e.msg)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgWrappedCancelUnbondingDelegationResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = v();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = v();
            return t;
          },
        }),
        (t.MsgWrappedEditValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.msg &&
                a.MsgEditValidator.encode(e.msg, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = p();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.msg = a.MsgEditValidator.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              msg: S(e.msg) ? a.MsgEditValidator.fromJSON(e.msg) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msg &&
                (t.msg = e.msg ? a.MsgEditValidator.toJSON(e.msg) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = p();
            return (
              (t.msg =
                void 0 !== e.msg && null !== e.msg
                  ? a.MsgEditValidator.fromPartial(e.msg)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgWrappedEditValidatorResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = h();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = h();
            return t;
          },
        }),
        (t.MsgUpdateParams = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.authority && t.uint32(10).string(e.authority),
              void 0 !== e.params &&
                s.Params.encode(e.params, t.uint32(18).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = b();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.authority = o.string();
                  break;
                case 2:
                  n.params = s.Params.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              authority: S(e.authority) ? String(e.authority) : "",
              params: S(e.params) ? s.Params.fromJSON(e.params) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.authority && (t.authority = e.authority),
              void 0 !== e.params &&
                (t.params = e.params ? s.Params.toJSON(e.params) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = b();
            return (
              (o.authority =
                null !== (t = e.authority) && void 0 !== t ? t : ""),
              (o.params =
                void 0 !== e.params && null !== e.params
                  ? s.Params.fromPartial(e.params)
                  : void 0),
              o
            );
          },
        }),
        (t.MsgUpdateParamsResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = y();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = y();
            return t;
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8427: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgValidatorBondResponse =
          t.MsgValidatorBond =
          t.MsgEnableTokenizeSharesResponse =
          t.MsgEnableTokenizeShares =
          t.MsgDisableTokenizeSharesResponse =
          t.MsgDisableTokenizeShares =
          t.MsgTransferTokenizeShareRecordResponse =
          t.MsgTransferTokenizeShareRecord =
          t.MsgRedeemTokensForSharesResponse =
          t.MsgRedeemTokensForShares =
          t.MsgTokenizeSharesResponse =
          t.MsgTokenizeShares =
          t.MsgCancelUnbondingDelegationResponse =
          t.MsgCancelUnbondingDelegation =
          t.MsgUnbondValidatorResponse =
          t.MsgUnbondValidator =
          t.MsgUndelegateResponse =
          t.MsgUndelegate =
          t.MsgBeginRedelegateResponse =
          t.MsgBeginRedelegate =
          t.MsgDelegateResponse =
          t.MsgDelegate =
          t.MsgEditValidatorResponse =
          t.MsgEditValidator =
          t.MsgCreateValidatorResponse =
          t.MsgCreateValidator =
          t.protobufPackage =
            void 0));
      const n = r(o(3186)),
        i = r(o(3187)),
        a = o(5288),
        s = o(8428),
        d = o(6267),
        l = o(6268);
      function u() {
        return {
          description: void 0,
          commission: void 0,
          minSelfDelegation: "",
          delegatorAddress: "",
          validatorAddress: "",
          pubkey: void 0,
          value: void 0,
        };
      }
      function c() {
        return {};
      }
      function f() {
        return {
          description: void 0,
          validatorAddress: "",
          commissionRate: "",
          minSelfDelegation: "",
        };
      }
      function g() {
        return {};
      }
      function m() {
        return { delegatorAddress: "", validatorAddress: "", amount: void 0 };
      }
      function v() {
        return {};
      }
      function p() {
        return {
          delegatorAddress: "",
          validatorSrcAddress: "",
          validatorDstAddress: "",
          amount: void 0,
        };
      }
      function h() {
        return { completionTime: void 0 };
      }
      function b() {
        return { delegatorAddress: "", validatorAddress: "", amount: void 0 };
      }
      function y() {
        return { completionTime: void 0 };
      }
      function S() {
        return { validatorAddress: "" };
      }
      function k() {
        return {};
      }
      function A() {
        return {
          delegatorAddress: "",
          validatorAddress: "",
          amount: void 0,
          creationHeight: "0",
        };
      }
      function w() {
        return {};
      }
      function O() {
        return {
          delegatorAddress: "",
          validatorAddress: "",
          amount: void 0,
          tokenizedShareOwner: "",
        };
      }
      function N() {
        return { amount: void 0 };
      }
      function R() {
        return { delegatorAddress: "", amount: void 0 };
      }
      function T() {
        return { amount: void 0 };
      }
      function D() {
        return { tokenizeShareRecordId: "0", sender: "", newOwner: "" };
      }
      function I() {
        return {};
      }
      function P() {
        return { delegatorAddress: "" };
      }
      function _() {
        return {};
      }
      function J() {
        return { delegatorAddress: "" };
      }
      function M() {
        return { completionTime: void 0 };
      }
      function U() {
        return { delegatorAddress: "", validatorAddress: "" };
      }
      function E() {
        return {};
      }
      function B(e) {
        const t = Math.trunc(e.getTime() / 1e3).toString(),
          o = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: o };
      }
      function C(e) {
        let t = 1e3 * Number(e.seconds);
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function x(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : C(a.Timestamp.fromJSON(e));
      }
      function H(e) {
        return e.toString();
      }
      function W(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "cosmos.staking.v1beta1"),
        (t.MsgCreateValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.description &&
                s.Description.encode(
                  e.description,
                  t.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.commission &&
                s.CommissionRates.encode(
                  e.commission,
                  t.uint32(18).fork(),
                ).ldelim(),
              "" !== e.minSelfDelegation &&
                t.uint32(26).string(e.minSelfDelegation),
              "" !== e.delegatorAddress &&
                t.uint32(34).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(42).string(e.validatorAddress),
              void 0 !== e.pubkey &&
                d.Any.encode(e.pubkey, t.uint32(50).fork()).ldelim(),
              void 0 !== e.value &&
                l.Coin.encode(e.value, t.uint32(58).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = u();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.description = s.Description.decode(o, o.uint32());
                  break;
                case 2:
                  n.commission = s.CommissionRates.decode(o, o.uint32());
                  break;
                case 3:
                  n.minSelfDelegation = o.string();
                  break;
                case 4:
                  n.delegatorAddress = o.string();
                  break;
                case 5:
                  n.validatorAddress = o.string();
                  break;
                case 6:
                  n.pubkey = d.Any.decode(o, o.uint32());
                  break;
                case 7:
                  n.value = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              description: W(e.description)
                ? s.Description.fromJSON(e.description)
                : void 0,
              commission: W(e.commission)
                ? s.CommissionRates.fromJSON(e.commission)
                : void 0,
              minSelfDelegation: W(e.minSelfDelegation)
                ? String(e.minSelfDelegation)
                : "",
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              pubkey: W(e.pubkey) ? d.Any.fromJSON(e.pubkey) : void 0,
              value: W(e.value) ? l.Coin.fromJSON(e.value) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.description &&
                (t.description = e.description
                  ? s.Description.toJSON(e.description)
                  : void 0),
              void 0 !== e.commission &&
                (t.commission = e.commission
                  ? s.CommissionRates.toJSON(e.commission)
                  : void 0),
              void 0 !== e.minSelfDelegation &&
                (t.minSelfDelegation = e.minSelfDelegation),
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.pubkey &&
                (t.pubkey = e.pubkey ? d.Any.toJSON(e.pubkey) : void 0),
              void 0 !== e.value &&
                (t.value = e.value ? l.Coin.toJSON(e.value) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = u();
            return (
              (n.description =
                void 0 !== e.description && null !== e.description
                  ? s.Description.fromPartial(e.description)
                  : void 0),
              (n.commission =
                void 0 !== e.commission && null !== e.commission
                  ? s.CommissionRates.fromPartial(e.commission)
                  : void 0),
              (n.minSelfDelegation =
                null !== (t = e.minSelfDelegation) && void 0 !== t ? t : ""),
              (n.delegatorAddress =
                null !== (o = e.delegatorAddress) && void 0 !== o ? o : ""),
              (n.validatorAddress =
                null !== (r = e.validatorAddress) && void 0 !== r ? r : ""),
              (n.pubkey =
                void 0 !== e.pubkey && null !== e.pubkey
                  ? d.Any.fromPartial(e.pubkey)
                  : void 0),
              (n.value =
                void 0 !== e.value && null !== e.value
                  ? l.Coin.fromPartial(e.value)
                  : void 0),
              n
            );
          },
        }),
        (t.MsgCreateValidatorResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = c();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = c();
            return t;
          },
        }),
        (t.MsgEditValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.description &&
                s.Description.encode(
                  e.description,
                  t.uint32(10).fork(),
                ).ldelim(),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              "" !== e.commissionRate && t.uint32(26).string(e.commissionRate),
              "" !== e.minSelfDelegation &&
                t.uint32(34).string(e.minSelfDelegation),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = f();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.description = s.Description.decode(o, o.uint32());
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.commissionRate = o.string();
                  break;
                case 4:
                  n.minSelfDelegation = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              description: W(e.description)
                ? s.Description.fromJSON(e.description)
                : void 0,
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              commissionRate: W(e.commissionRate)
                ? String(e.commissionRate)
                : "",
              minSelfDelegation: W(e.minSelfDelegation)
                ? String(e.minSelfDelegation)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.description &&
                (t.description = e.description
                  ? s.Description.toJSON(e.description)
                  : void 0),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.commissionRate &&
                (t.commissionRate = e.commissionRate),
              void 0 !== e.minSelfDelegation &&
                (t.minSelfDelegation = e.minSelfDelegation),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = f();
            return (
              (n.description =
                void 0 !== e.description && null !== e.description
                  ? s.Description.fromPartial(e.description)
                  : void 0),
              (n.validatorAddress =
                null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
              (n.commissionRate =
                null !== (o = e.commissionRate) && void 0 !== o ? o : ""),
              (n.minSelfDelegation =
                null !== (r = e.minSelfDelegation) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.MsgEditValidatorResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = g();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = g();
            return t;
          },
        }),
        (t.MsgDelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = m();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = m();
            return (
              (r.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (r.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              (r.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              r
            );
          },
        }),
        (t.MsgDelegateResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = v();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = v();
            return t;
          },
        }),
        (t.MsgBeginRedelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorSrcAddress &&
                t.uint32(18).string(e.validatorSrcAddress),
              "" !== e.validatorDstAddress &&
                t.uint32(26).string(e.validatorDstAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(34).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = p();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorSrcAddress = o.string();
                  break;
                case 3:
                  n.validatorDstAddress = o.string();
                  break;
                case 4:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorSrcAddress: W(e.validatorSrcAddress)
                ? String(e.validatorSrcAddress)
                : "",
              validatorDstAddress: W(e.validatorDstAddress)
                ? String(e.validatorDstAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorSrcAddress &&
                (t.validatorSrcAddress = e.validatorSrcAddress),
              void 0 !== e.validatorDstAddress &&
                (t.validatorDstAddress = e.validatorDstAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = p();
            return (
              (n.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (n.validatorSrcAddress =
                null !== (o = e.validatorSrcAddress) && void 0 !== o ? o : ""),
              (n.validatorDstAddress =
                null !== (r = e.validatorDstAddress) && void 0 !== r ? r : ""),
              (n.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              n
            );
          },
        }),
        (t.MsgBeginRedelegateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.completionTime &&
                a.Timestamp.encode(
                  B(e.completionTime),
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = h();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.completionTime = C(a.Timestamp.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              completionTime: W(e.completionTime)
                ? x(e.completionTime)
                : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.completionTime &&
                (t.completionTime = e.completionTime.toISOString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = h();
            return (
              (o.completionTime =
                null !== (t = e.completionTime) && void 0 !== t ? t : void 0),
              o
            );
          },
        }),
        (t.MsgUndelegate = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = b();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = b();
            return (
              (r.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (r.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              (r.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              r
            );
          },
        }),
        (t.MsgUndelegateResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.completionTime &&
                a.Timestamp.encode(
                  B(e.completionTime),
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = y();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.completionTime = C(a.Timestamp.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              completionTime: W(e.completionTime)
                ? x(e.completionTime)
                : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.completionTime &&
                (t.completionTime = e.completionTime.toISOString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = y();
            return (
              (o.completionTime =
                null !== (t = e.completionTime) && void 0 !== t ? t : void 0),
              o
            );
          },
        }),
        (t.MsgUnbondValidator = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.validatorAddress &&
                t.uint32(10).string(e.validatorAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = S();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.validatorAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = S();
            return (
              (o.validatorAddress =
                null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
              o
            );
          },
        }),
        (t.MsgUnbondValidatorResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = k();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = k();
            return t;
          },
        }),
        (t.MsgCancelUnbondingDelegation = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
              "0" !== e.creationHeight && t.uint32(32).int64(e.creationHeight),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = A();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                case 4:
                  n.creationHeight = H(o.int64());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
              creationHeight: W(e.creationHeight)
                ? String(e.creationHeight)
                : "0",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              void 0 !== e.creationHeight &&
                (t.creationHeight = e.creationHeight),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = A();
            return (
              (n.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (n.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              (n.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              (n.creationHeight =
                null !== (r = e.creationHeight) && void 0 !== r ? r : "0"),
              n
            );
          },
        }),
        (t.MsgCancelUnbondingDelegationResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = w();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = w();
            return t;
          },
        }),
        (t.MsgTokenizeShares = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(),
              "" !== e.tokenizedShareOwner &&
                t.uint32(34).string(e.tokenizedShareOwner),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = O();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                case 4:
                  n.tokenizedShareOwner = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
              tokenizedShareOwner: W(e.tokenizedShareOwner)
                ? String(e.tokenizedShareOwner)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              void 0 !== e.tokenizedShareOwner &&
                (t.tokenizedShareOwner = e.tokenizedShareOwner),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = O();
            return (
              (n.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (n.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              (n.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              (n.tokenizedShareOwner =
                null !== (r = e.tokenizedShareOwner) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.MsgTokenizeSharesResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = N();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0 };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = N();
            return (
              (t.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgRedeemTokensForShares = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(18).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = R();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = R();
            return (
              (o.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (o.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              o
            );
          },
        }),
        (t.MsgRedeemTokensForSharesResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.amount &&
                l.Coin.encode(e.amount, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = T();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.amount = l.Coin.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return { amount: W(e.amount) ? l.Coin.fromJSON(e.amount) : void 0 };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.amount &&
                (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = T();
            return (
              (t.amount =
                void 0 !== e.amount && null !== e.amount
                  ? l.Coin.fromPartial(e.amount)
                  : void 0),
              t
            );
          },
        }),
        (t.MsgTransferTokenizeShareRecord = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.tokenizeShareRecordId &&
                t.uint32(8).uint64(e.tokenizeShareRecordId),
              "" !== e.sender && t.uint32(18).string(e.sender),
              "" !== e.newOwner && t.uint32(26).string(e.newOwner),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = D();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.tokenizeShareRecordId = H(o.uint64());
                  break;
                case 2:
                  n.sender = o.string();
                  break;
                case 3:
                  n.newOwner = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              tokenizeShareRecordId: W(e.tokenizeShareRecordId)
                ? String(e.tokenizeShareRecordId)
                : "0",
              sender: W(e.sender) ? String(e.sender) : "",
              newOwner: W(e.newOwner) ? String(e.newOwner) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.tokenizeShareRecordId &&
                (t.tokenizeShareRecordId = e.tokenizeShareRecordId),
              void 0 !== e.sender && (t.sender = e.sender),
              void 0 !== e.newOwner && (t.newOwner = e.newOwner),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = D();
            return (
              (n.tokenizeShareRecordId =
                null !== (t = e.tokenizeShareRecordId) && void 0 !== t
                  ? t
                  : "0"),
              (n.sender = null !== (o = e.sender) && void 0 !== o ? o : ""),
              (n.newOwner = null !== (r = e.newOwner) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.MsgTransferTokenizeShareRecordResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = I();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = I();
            return t;
          },
        }),
        (t.MsgDisableTokenizeShares = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = P();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = P();
            return (
              (o.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              o
            );
          },
        }),
        (t.MsgDisableTokenizeSharesResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = _();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = _();
            return t;
          },
        }),
        (t.MsgEnableTokenizeShares = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = J();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = J();
            return (
              (o.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              o
            );
          },
        }),
        (t.MsgEnableTokenizeSharesResponse = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.completionTime &&
                a.Timestamp.encode(
                  B(e.completionTime),
                  t.uint32(10).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = M();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.completionTime = C(a.Timestamp.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              completionTime: W(e.completionTime)
                ? x(e.completionTime)
                : void 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.completionTime &&
                (t.completionTime = e.completionTime.toISOString()),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = M();
            return (
              (o.completionTime =
                null !== (t = e.completionTime) && void 0 !== t ? t : void 0),
              o
            );
          },
        }),
        (t.MsgValidatorBond = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = U();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: W(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: W(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = U();
            return (
              (r.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (r.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.MsgValidatorBondResponse = {
          encode(e, t) {
            return (void 0 === t && (t = i.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = E();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {};
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = E();
            return t;
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8428: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Pool =
          t.RedelegationResponse =
          t.RedelegationEntryResponse =
          t.DelegationResponse =
          t.Params =
          t.Redelegation =
          t.RedelegationEntry =
          t.UnbondingDelegationEntry =
          t.UnbondingDelegation =
          t.Delegation =
          t.DVVTriplets =
          t.DVVTriplet =
          t.DVPairs =
          t.DVPair =
          t.ValAddresses =
          t.Validator =
          t.Description =
          t.Commission =
          t.CommissionRates =
          t.HistoricalInfo =
          t.bondStatusToJSON =
          t.bondStatusFromJSON =
          t.BondStatus =
          t.protobufPackage =
            void 0));
      const n = r(o(3186)),
        i = r(o(3187)),
        a = o(5288),
        s = o(8429),
        d = o(6267),
        l = o(8434),
        u = o(6268);
      var c;
      function f(e) {
        switch (e) {
          case 0:
          case "BOND_STATUS_UNSPECIFIED":
            return c.BOND_STATUS_UNSPECIFIED;
          case 1:
          case "BOND_STATUS_UNBONDED":
            return c.BOND_STATUS_UNBONDED;
          case 2:
          case "BOND_STATUS_UNBONDING":
            return c.BOND_STATUS_UNBONDING;
          case 3:
          case "BOND_STATUS_BONDED":
            return c.BOND_STATUS_BONDED;
          case -1:
          case "UNRECOGNIZED":
          default:
            return c.UNRECOGNIZED;
        }
      }
      function g(e) {
        switch (e) {
          case c.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
          case c.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
          case c.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
          case c.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
          default:
            return "UNKNOWN";
        }
      }
      function m() {
        return { header: void 0, valset: [] };
      }
      function v() {
        return { rate: "", maxRate: "", maxChangeRate: "" };
      }
      function p() {
        return { commissionRates: void 0, updateTime: void 0 };
      }
      function h() {
        return {
          moniker: "",
          identity: "",
          website: "",
          securityContact: "",
          details: "",
        };
      }
      function b() {
        return {
          operatorAddress: "",
          consensusPubkey: void 0,
          jailed: !1,
          status: 0,
          tokens: "",
          delegatorShares: "",
          description: void 0,
          unbondingHeight: "0",
          unbondingTime: void 0,
          commission: void 0,
          minSelfDelegation: "",
        };
      }
      function y() {
        return { addresses: [] };
      }
      function S() {
        return { delegatorAddress: "", validatorAddress: "" };
      }
      function k() {
        return { pairs: [] };
      }
      function A() {
        return {
          delegatorAddress: "",
          validatorSrcAddress: "",
          validatorDstAddress: "",
        };
      }
      function w() {
        return { triplets: [] };
      }
      function O() {
        return { delegatorAddress: "", validatorAddress: "", shares: "" };
      }
      function N() {
        return { delegatorAddress: "", validatorAddress: "", entries: [] };
      }
      function R() {
        return {
          creationHeight: "0",
          completionTime: void 0,
          initialBalance: "",
          balance: "",
        };
      }
      function T() {
        return {
          creationHeight: "0",
          completionTime: void 0,
          initialBalance: "",
          sharesDst: "",
        };
      }
      function D() {
        return {
          delegatorAddress: "",
          validatorSrcAddress: "",
          validatorDstAddress: "",
          entries: [],
        };
      }
      function I() {
        return {
          unbondingTime: void 0,
          maxValidators: 0,
          maxEntries: 0,
          historicalEntries: 0,
          bondDenom: "",
        };
      }
      function P() {
        return { delegation: void 0, balance: void 0 };
      }
      function _() {
        return { redelegationEntry: void 0, balance: "" };
      }
      function J() {
        return { redelegation: void 0, entries: [] };
      }
      function M() {
        return { notBondedTokens: "", bondedTokens: "" };
      }
      function U(e) {
        const t = Math.trunc(e.getTime() / 1e3).toString(),
          o = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: o };
      }
      function E(e) {
        let t = 1e3 * Number(e.seconds);
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function B(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : E(a.Timestamp.fromJSON(e));
      }
      function C(e) {
        return e.toString();
      }
      function x(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "cosmos.staking.v1beta1"),
        (function (e) {
          ((e[(e["BOND_STATUS_UNSPECIFIED"] = 0)] = "BOND_STATUS_UNSPECIFIED"),
            (e[(e["BOND_STATUS_UNBONDED"] = 1)] = "BOND_STATUS_UNBONDED"),
            (e[(e["BOND_STATUS_UNBONDING"] = 2)] = "BOND_STATUS_UNBONDING"),
            (e[(e["BOND_STATUS_BONDED"] = 3)] = "BOND_STATUS_BONDED"),
            (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
        })((c = t.BondStatus || (t.BondStatus = {}))),
        (t.bondStatusFromJSON = f),
        (t.bondStatusToJSON = g),
        (t.HistoricalInfo = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.header &&
                s.Header.encode(e.header, o.uint32(10).fork()).ldelim());
            for (const r of e.valset)
              t.Validator.encode(r, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = m();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.header = s.Header.decode(r, r.uint32());
                  break;
                case 2:
                  a.valset.push(t.Validator.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              header: x(e.header) ? s.Header.fromJSON(e.header) : void 0,
              valset: Array.isArray(
                null === e || void 0 === e ? void 0 : e.valset,
              )
                ? e.valset.map((e) => t.Validator.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.header &&
                (o.header = e.header ? s.Header.toJSON(e.header) : void 0),
              e.valset
                ? (o.valset = e.valset.map((e) =>
                    e ? t.Validator.toJSON(e) : void 0,
                  ))
                : (o.valset = []),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = m();
            return (
              (r.header =
                void 0 !== e.header && null !== e.header
                  ? s.Header.fromPartial(e.header)
                  : void 0),
              (r.valset =
                (null === (o = e.valset) || void 0 === o
                  ? void 0
                  : o.map((e) => t.Validator.fromPartial(e))) || []),
              r
            );
          },
        }),
        (t.CommissionRates = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.rate && t.uint32(10).string(e.rate),
              "" !== e.maxRate && t.uint32(18).string(e.maxRate),
              "" !== e.maxChangeRate && t.uint32(26).string(e.maxChangeRate),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = v();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.rate = o.string();
                  break;
                case 2:
                  n.maxRate = o.string();
                  break;
                case 3:
                  n.maxChangeRate = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              rate: x(e.rate) ? String(e.rate) : "",
              maxRate: x(e.maxRate) ? String(e.maxRate) : "",
              maxChangeRate: x(e.maxChangeRate) ? String(e.maxChangeRate) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.rate && (t.rate = e.rate),
              void 0 !== e.maxRate && (t.maxRate = e.maxRate),
              void 0 !== e.maxChangeRate && (t.maxChangeRate = e.maxChangeRate),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = v();
            return (
              (n.rate = null !== (t = e.rate) && void 0 !== t ? t : ""),
              (n.maxRate = null !== (o = e.maxRate) && void 0 !== o ? o : ""),
              (n.maxChangeRate =
                null !== (r = e.maxChangeRate) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.Commission = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.commissionRates &&
                t.CommissionRates.encode(
                  e.commissionRates,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.updateTime &&
                a.Timestamp.encode(
                  U(e.updateTime),
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const s = p();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.commissionRates = t.CommissionRates.decode(r, r.uint32());
                  break;
                case 2:
                  s.updateTime = E(a.Timestamp.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            return {
              commissionRates: x(e.commissionRates)
                ? t.CommissionRates.fromJSON(e.commissionRates)
                : void 0,
              updateTime: x(e.updateTime) ? B(e.updateTime) : void 0,
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.commissionRates &&
                (o.commissionRates = e.commissionRates
                  ? t.CommissionRates.toJSON(e.commissionRates)
                  : void 0),
              void 0 !== e.updateTime &&
                (o.updateTime = e.updateTime.toISOString()),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = p();
            return (
              (r.commissionRates =
                void 0 !== e.commissionRates && null !== e.commissionRates
                  ? t.CommissionRates.fromPartial(e.commissionRates)
                  : void 0),
              (r.updateTime =
                null !== (o = e.updateTime) && void 0 !== o ? o : void 0),
              r
            );
          },
        }),
        (t.Description = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.moniker && t.uint32(10).string(e.moniker),
              "" !== e.identity && t.uint32(18).string(e.identity),
              "" !== e.website && t.uint32(26).string(e.website),
              "" !== e.securityContact &&
                t.uint32(34).string(e.securityContact),
              "" !== e.details && t.uint32(42).string(e.details),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = h();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.moniker = o.string();
                  break;
                case 2:
                  n.identity = o.string();
                  break;
                case 3:
                  n.website = o.string();
                  break;
                case 4:
                  n.securityContact = o.string();
                  break;
                case 5:
                  n.details = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              moniker: x(e.moniker) ? String(e.moniker) : "",
              identity: x(e.identity) ? String(e.identity) : "",
              website: x(e.website) ? String(e.website) : "",
              securityContact: x(e.securityContact)
                ? String(e.securityContact)
                : "",
              details: x(e.details) ? String(e.details) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.moniker && (t.moniker = e.moniker),
              void 0 !== e.identity && (t.identity = e.identity),
              void 0 !== e.website && (t.website = e.website),
              void 0 !== e.securityContact &&
                (t.securityContact = e.securityContact),
              void 0 !== e.details && (t.details = e.details),
              t
            );
          },
          fromPartial(e) {
            var t, o, r, n, i;
            const a = h();
            return (
              (a.moniker = null !== (t = e.moniker) && void 0 !== t ? t : ""),
              (a.identity = null !== (o = e.identity) && void 0 !== o ? o : ""),
              (a.website = null !== (r = e.website) && void 0 !== r ? r : ""),
              (a.securityContact =
                null !== (n = e.securityContact) && void 0 !== n ? n : ""),
              (a.details = null !== (i = e.details) && void 0 !== i ? i : ""),
              a
            );
          },
        }),
        (t.Validator = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              "" !== e.operatorAddress &&
                o.uint32(10).string(e.operatorAddress),
              void 0 !== e.consensusPubkey &&
                d.Any.encode(e.consensusPubkey, o.uint32(18).fork()).ldelim(),
              !0 === e.jailed && o.uint32(24).bool(e.jailed),
              0 !== e.status && o.uint32(32).int32(e.status),
              "" !== e.tokens && o.uint32(42).string(e.tokens),
              "" !== e.delegatorShares &&
                o.uint32(50).string(e.delegatorShares),
              void 0 !== e.description &&
                t.Description.encode(
                  e.description,
                  o.uint32(58).fork(),
                ).ldelim(),
              "0" !== e.unbondingHeight &&
                o.uint32(64).int64(e.unbondingHeight),
              void 0 !== e.unbondingTime &&
                a.Timestamp.encode(
                  U(e.unbondingTime),
                  o.uint32(74).fork(),
                ).ldelim(),
              void 0 !== e.commission &&
                t.Commission.encode(e.commission, o.uint32(82).fork()).ldelim(),
              "" !== e.minSelfDelegation &&
                o.uint32(90).string(e.minSelfDelegation),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const s = b();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.operatorAddress = r.string();
                  break;
                case 2:
                  s.consensusPubkey = d.Any.decode(r, r.uint32());
                  break;
                case 3:
                  s.jailed = r.bool();
                  break;
                case 4:
                  s.status = r.int32();
                  break;
                case 5:
                  s.tokens = r.string();
                  break;
                case 6:
                  s.delegatorShares = r.string();
                  break;
                case 7:
                  s.description = t.Description.decode(r, r.uint32());
                  break;
                case 8:
                  s.unbondingHeight = C(r.int64());
                  break;
                case 9:
                  s.unbondingTime = E(a.Timestamp.decode(r, r.uint32()));
                  break;
                case 10:
                  s.commission = t.Commission.decode(r, r.uint32());
                  break;
                case 11:
                  s.minSelfDelegation = r.string();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            return {
              operatorAddress: x(e.operatorAddress)
                ? String(e.operatorAddress)
                : "",
              consensusPubkey: x(e.consensusPubkey)
                ? d.Any.fromJSON(e.consensusPubkey)
                : void 0,
              jailed: !!x(e.jailed) && Boolean(e.jailed),
              status: x(e.status) ? f(e.status) : 0,
              tokens: x(e.tokens) ? String(e.tokens) : "",
              delegatorShares: x(e.delegatorShares)
                ? String(e.delegatorShares)
                : "",
              description: x(e.description)
                ? t.Description.fromJSON(e.description)
                : void 0,
              unbondingHeight: x(e.unbondingHeight)
                ? String(e.unbondingHeight)
                : "0",
              unbondingTime: x(e.unbondingTime) ? B(e.unbondingTime) : void 0,
              commission: x(e.commission)
                ? t.Commission.fromJSON(e.commission)
                : void 0,
              minSelfDelegation: x(e.minSelfDelegation)
                ? String(e.minSelfDelegation)
                : "",
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.operatorAddress &&
                (o.operatorAddress = e.operatorAddress),
              void 0 !== e.consensusPubkey &&
                (o.consensusPubkey = e.consensusPubkey
                  ? d.Any.toJSON(e.consensusPubkey)
                  : void 0),
              void 0 !== e.jailed && (o.jailed = e.jailed),
              void 0 !== e.status && (o.status = g(e.status)),
              void 0 !== e.tokens && (o.tokens = e.tokens),
              void 0 !== e.delegatorShares &&
                (o.delegatorShares = e.delegatorShares),
              void 0 !== e.description &&
                (o.description = e.description
                  ? t.Description.toJSON(e.description)
                  : void 0),
              void 0 !== e.unbondingHeight &&
                (o.unbondingHeight = e.unbondingHeight),
              void 0 !== e.unbondingTime &&
                (o.unbondingTime = e.unbondingTime.toISOString()),
              void 0 !== e.commission &&
                (o.commission = e.commission
                  ? t.Commission.toJSON(e.commission)
                  : void 0),
              void 0 !== e.minSelfDelegation &&
                (o.minSelfDelegation = e.minSelfDelegation),
              o
            );
          },
          fromPartial(e) {
            var o, r, n, i, a, s, l, u;
            const c = b();
            return (
              (c.operatorAddress =
                null !== (o = e.operatorAddress) && void 0 !== o ? o : ""),
              (c.consensusPubkey =
                void 0 !== e.consensusPubkey && null !== e.consensusPubkey
                  ? d.Any.fromPartial(e.consensusPubkey)
                  : void 0),
              (c.jailed = null !== (r = e.jailed) && void 0 !== r && r),
              (c.status = null !== (n = e.status) && void 0 !== n ? n : 0),
              (c.tokens = null !== (i = e.tokens) && void 0 !== i ? i : ""),
              (c.delegatorShares =
                null !== (a = e.delegatorShares) && void 0 !== a ? a : ""),
              (c.description =
                void 0 !== e.description && null !== e.description
                  ? t.Description.fromPartial(e.description)
                  : void 0),
              (c.unbondingHeight =
                null !== (s = e.unbondingHeight) && void 0 !== s ? s : "0"),
              (c.unbondingTime =
                null !== (l = e.unbondingTime) && void 0 !== l ? l : void 0),
              (c.commission =
                void 0 !== e.commission && null !== e.commission
                  ? t.Commission.fromPartial(e.commission)
                  : void 0),
              (c.minSelfDelegation =
                null !== (u = e.minSelfDelegation) && void 0 !== u ? u : ""),
              c
            );
          },
        }),
        (t.ValAddresses = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const o of e.addresses) t.uint32(10).string(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = y();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.addresses.push(o.string());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              addresses: Array.isArray(
                null === e || void 0 === e ? void 0 : e.addresses,
              )
                ? e.addresses.map((e) => String(e))
                : [],
            };
          },
          toJSON(e) {
            const t = {};
            return (
              e.addresses
                ? (t.addresses = e.addresses.map((e) => e))
                : (t.addresses = []),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = y();
            return (
              (o.addresses =
                (null === (t = e.addresses) || void 0 === t
                  ? void 0
                  : t.map((e) => e)) || []),
              o
            );
          },
        }),
        (t.DVPair = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = S();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: x(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: x(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = S();
            return (
              (r.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (r.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.DVPairs = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const r of e.pairs)
              t.DVPair.encode(r, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = k();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.pairs.push(t.DVPair.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              pairs: Array.isArray(
                null === e || void 0 === e ? void 0 : e.pairs,
              )
                ? e.pairs.map((e) => t.DVPair.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              e.pairs
                ? (o.pairs = e.pairs.map((e) =>
                    e ? t.DVPair.toJSON(e) : void 0,
                  ))
                : (o.pairs = []),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = k();
            return (
              (r.pairs =
                (null === (o = e.pairs) || void 0 === o
                  ? void 0
                  : o.map((e) => t.DVPair.fromPartial(e))) || []),
              r
            );
          },
        }),
        (t.DVVTriplet = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorSrcAddress &&
                t.uint32(18).string(e.validatorSrcAddress),
              "" !== e.validatorDstAddress &&
                t.uint32(26).string(e.validatorDstAddress),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = A();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorSrcAddress = o.string();
                  break;
                case 3:
                  n.validatorDstAddress = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: x(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorSrcAddress: x(e.validatorSrcAddress)
                ? String(e.validatorSrcAddress)
                : "",
              validatorDstAddress: x(e.validatorDstAddress)
                ? String(e.validatorDstAddress)
                : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorSrcAddress &&
                (t.validatorSrcAddress = e.validatorSrcAddress),
              void 0 !== e.validatorDstAddress &&
                (t.validatorDstAddress = e.validatorDstAddress),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = A();
            return (
              (n.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (n.validatorSrcAddress =
                null !== (o = e.validatorSrcAddress) && void 0 !== o ? o : ""),
              (n.validatorDstAddress =
                null !== (r = e.validatorDstAddress) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.DVVTriplets = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const r of e.triplets)
              t.DVVTriplet.encode(r, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = w();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.triplets.push(t.DVVTriplet.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              triplets: Array.isArray(
                null === e || void 0 === e ? void 0 : e.triplets,
              )
                ? e.triplets.map((e) => t.DVVTriplet.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              e.triplets
                ? (o.triplets = e.triplets.map((e) =>
                    e ? t.DVVTriplet.toJSON(e) : void 0,
                  ))
                : (o.triplets = []),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = w();
            return (
              (r.triplets =
                (null === (o = e.triplets) || void 0 === o
                  ? void 0
                  : o.map((e) => t.DVVTriplet.fromPartial(e))) || []),
              r
            );
          },
        }),
        (t.Delegation = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                t.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                t.uint32(18).string(e.validatorAddress),
              "" !== e.shares && t.uint32(26).string(e.shares),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = O();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.delegatorAddress = o.string();
                  break;
                case 2:
                  n.validatorAddress = o.string();
                  break;
                case 3:
                  n.shares = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              delegatorAddress: x(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: x(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              shares: x(e.shares) ? String(e.shares) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.delegatorAddress &&
                (t.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (t.validatorAddress = e.validatorAddress),
              void 0 !== e.shares && (t.shares = e.shares),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const n = O();
            return (
              (n.delegatorAddress =
                null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
              (n.validatorAddress =
                null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
              (n.shares = null !== (r = e.shares) && void 0 !== r ? r : ""),
              n
            );
          },
        }),
        (t.UnbondingDelegation = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                o.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorAddress &&
                o.uint32(18).string(e.validatorAddress));
            for (const r of e.entries)
              t.UnbondingDelegationEntry.encode(
                r,
                o.uint32(26).fork(),
              ).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = N();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.delegatorAddress = r.string();
                  break;
                case 2:
                  a.validatorAddress = r.string();
                  break;
                case 3:
                  a.entries.push(
                    t.UnbondingDelegationEntry.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              delegatorAddress: x(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorAddress: x(e.validatorAddress)
                ? String(e.validatorAddress)
                : "",
              entries: Array.isArray(
                null === e || void 0 === e ? void 0 : e.entries,
              )
                ? e.entries.map((e) => t.UnbondingDelegationEntry.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.delegatorAddress &&
                (o.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorAddress &&
                (o.validatorAddress = e.validatorAddress),
              e.entries
                ? (o.entries = e.entries.map((e) =>
                    e ? t.UnbondingDelegationEntry.toJSON(e) : void 0,
                  ))
                : (o.entries = []),
              o
            );
          },
          fromPartial(e) {
            var o, r, n;
            const i = N();
            return (
              (i.delegatorAddress =
                null !== (o = e.delegatorAddress) && void 0 !== o ? o : ""),
              (i.validatorAddress =
                null !== (r = e.validatorAddress) && void 0 !== r ? r : ""),
              (i.entries =
                (null === (n = e.entries) || void 0 === n
                  ? void 0
                  : n.map((e) => t.UnbondingDelegationEntry.fromPartial(e))) ||
                []),
              i
            );
          },
        }),
        (t.UnbondingDelegationEntry = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.creationHeight && t.uint32(8).int64(e.creationHeight),
              void 0 !== e.completionTime &&
                a.Timestamp.encode(
                  U(e.completionTime),
                  t.uint32(18).fork(),
                ).ldelim(),
              "" !== e.initialBalance && t.uint32(26).string(e.initialBalance),
              "" !== e.balance && t.uint32(34).string(e.balance),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = R();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.creationHeight = C(o.int64());
                  break;
                case 2:
                  n.completionTime = E(a.Timestamp.decode(o, o.uint32()));
                  break;
                case 3:
                  n.initialBalance = o.string();
                  break;
                case 4:
                  n.balance = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              creationHeight: x(e.creationHeight)
                ? String(e.creationHeight)
                : "0",
              completionTime: x(e.completionTime)
                ? B(e.completionTime)
                : void 0,
              initialBalance: x(e.initialBalance)
                ? String(e.initialBalance)
                : "",
              balance: x(e.balance) ? String(e.balance) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.creationHeight &&
                (t.creationHeight = e.creationHeight),
              void 0 !== e.completionTime &&
                (t.completionTime = e.completionTime.toISOString()),
              void 0 !== e.initialBalance &&
                (t.initialBalance = e.initialBalance),
              void 0 !== e.balance && (t.balance = e.balance),
              t
            );
          },
          fromPartial(e) {
            var t, o, r, n;
            const i = R();
            return (
              (i.creationHeight =
                null !== (t = e.creationHeight) && void 0 !== t ? t : "0"),
              (i.completionTime =
                null !== (o = e.completionTime) && void 0 !== o ? o : void 0),
              (i.initialBalance =
                null !== (r = e.initialBalance) && void 0 !== r ? r : ""),
              (i.balance = null !== (n = e.balance) && void 0 !== n ? n : ""),
              i
            );
          },
        }),
        (t.RedelegationEntry = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.creationHeight && t.uint32(8).int64(e.creationHeight),
              void 0 !== e.completionTime &&
                a.Timestamp.encode(
                  U(e.completionTime),
                  t.uint32(18).fork(),
                ).ldelim(),
              "" !== e.initialBalance && t.uint32(26).string(e.initialBalance),
              "" !== e.sharesDst && t.uint32(34).string(e.sharesDst),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = T();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.creationHeight = C(o.int64());
                  break;
                case 2:
                  n.completionTime = E(a.Timestamp.decode(o, o.uint32()));
                  break;
                case 3:
                  n.initialBalance = o.string();
                  break;
                case 4:
                  n.sharesDst = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              creationHeight: x(e.creationHeight)
                ? String(e.creationHeight)
                : "0",
              completionTime: x(e.completionTime)
                ? B(e.completionTime)
                : void 0,
              initialBalance: x(e.initialBalance)
                ? String(e.initialBalance)
                : "",
              sharesDst: x(e.sharesDst) ? String(e.sharesDst) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.creationHeight &&
                (t.creationHeight = e.creationHeight),
              void 0 !== e.completionTime &&
                (t.completionTime = e.completionTime.toISOString()),
              void 0 !== e.initialBalance &&
                (t.initialBalance = e.initialBalance),
              void 0 !== e.sharesDst && (t.sharesDst = e.sharesDst),
              t
            );
          },
          fromPartial(e) {
            var t, o, r, n;
            const i = T();
            return (
              (i.creationHeight =
                null !== (t = e.creationHeight) && void 0 !== t ? t : "0"),
              (i.completionTime =
                null !== (o = e.completionTime) && void 0 !== o ? o : void 0),
              (i.initialBalance =
                null !== (r = e.initialBalance) && void 0 !== r ? r : ""),
              (i.sharesDst =
                null !== (n = e.sharesDst) && void 0 !== n ? n : ""),
              i
            );
          },
        }),
        (t.Redelegation = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              "" !== e.delegatorAddress &&
                o.uint32(10).string(e.delegatorAddress),
              "" !== e.validatorSrcAddress &&
                o.uint32(18).string(e.validatorSrcAddress),
              "" !== e.validatorDstAddress &&
                o.uint32(26).string(e.validatorDstAddress));
            for (const r of e.entries)
              t.RedelegationEntry.encode(r, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = D();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.delegatorAddress = r.string();
                  break;
                case 2:
                  a.validatorSrcAddress = r.string();
                  break;
                case 3:
                  a.validatorDstAddress = r.string();
                  break;
                case 4:
                  a.entries.push(t.RedelegationEntry.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              delegatorAddress: x(e.delegatorAddress)
                ? String(e.delegatorAddress)
                : "",
              validatorSrcAddress: x(e.validatorSrcAddress)
                ? String(e.validatorSrcAddress)
                : "",
              validatorDstAddress: x(e.validatorDstAddress)
                ? String(e.validatorDstAddress)
                : "",
              entries: Array.isArray(
                null === e || void 0 === e ? void 0 : e.entries,
              )
                ? e.entries.map((e) => t.RedelegationEntry.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.delegatorAddress &&
                (o.delegatorAddress = e.delegatorAddress),
              void 0 !== e.validatorSrcAddress &&
                (o.validatorSrcAddress = e.validatorSrcAddress),
              void 0 !== e.validatorDstAddress &&
                (o.validatorDstAddress = e.validatorDstAddress),
              e.entries
                ? (o.entries = e.entries.map((e) =>
                    e ? t.RedelegationEntry.toJSON(e) : void 0,
                  ))
                : (o.entries = []),
              o
            );
          },
          fromPartial(e) {
            var o, r, n, i;
            const a = D();
            return (
              (a.delegatorAddress =
                null !== (o = e.delegatorAddress) && void 0 !== o ? o : ""),
              (a.validatorSrcAddress =
                null !== (r = e.validatorSrcAddress) && void 0 !== r ? r : ""),
              (a.validatorDstAddress =
                null !== (n = e.validatorDstAddress) && void 0 !== n ? n : ""),
              (a.entries =
                (null === (i = e.entries) || void 0 === i
                  ? void 0
                  : i.map((e) => t.RedelegationEntry.fromPartial(e))) || []),
              a
            );
          },
        }),
        (t.Params = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.unbondingTime &&
                l.Duration.encode(
                  e.unbondingTime,
                  t.uint32(10).fork(),
                ).ldelim(),
              0 !== e.maxValidators && t.uint32(16).uint32(e.maxValidators),
              0 !== e.maxEntries && t.uint32(24).uint32(e.maxEntries),
              0 !== e.historicalEntries &&
                t.uint32(32).uint32(e.historicalEntries),
              "" !== e.bondDenom && t.uint32(42).string(e.bondDenom),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = I();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.unbondingTime = l.Duration.decode(o, o.uint32());
                  break;
                case 2:
                  n.maxValidators = o.uint32();
                  break;
                case 3:
                  n.maxEntries = o.uint32();
                  break;
                case 4:
                  n.historicalEntries = o.uint32();
                  break;
                case 5:
                  n.bondDenom = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              unbondingTime: x(e.unbondingTime)
                ? l.Duration.fromJSON(e.unbondingTime)
                : void 0,
              maxValidators: x(e.maxValidators) ? Number(e.maxValidators) : 0,
              maxEntries: x(e.maxEntries) ? Number(e.maxEntries) : 0,
              historicalEntries: x(e.historicalEntries)
                ? Number(e.historicalEntries)
                : 0,
              bondDenom: x(e.bondDenom) ? String(e.bondDenom) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.unbondingTime &&
                (t.unbondingTime = e.unbondingTime
                  ? l.Duration.toJSON(e.unbondingTime)
                  : void 0),
              void 0 !== e.maxValidators &&
                (t.maxValidators = Math.round(e.maxValidators)),
              void 0 !== e.maxEntries &&
                (t.maxEntries = Math.round(e.maxEntries)),
              void 0 !== e.historicalEntries &&
                (t.historicalEntries = Math.round(e.historicalEntries)),
              void 0 !== e.bondDenom && (t.bondDenom = e.bondDenom),
              t
            );
          },
          fromPartial(e) {
            var t, o, r, n;
            const i = I();
            return (
              (i.unbondingTime =
                void 0 !== e.unbondingTime && null !== e.unbondingTime
                  ? l.Duration.fromPartial(e.unbondingTime)
                  : void 0),
              (i.maxValidators =
                null !== (t = e.maxValidators) && void 0 !== t ? t : 0),
              (i.maxEntries =
                null !== (o = e.maxEntries) && void 0 !== o ? o : 0),
              (i.historicalEntries =
                null !== (r = e.historicalEntries) && void 0 !== r ? r : 0),
              (i.bondDenom =
                null !== (n = e.bondDenom) && void 0 !== n ? n : ""),
              i
            );
          },
        }),
        (t.DelegationResponse = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.delegation &&
                t.Delegation.encode(e.delegation, o.uint32(10).fork()).ldelim(),
              void 0 !== e.balance &&
                u.Coin.encode(e.balance, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = P();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.delegation = t.Delegation.decode(r, r.uint32());
                  break;
                case 2:
                  a.balance = u.Coin.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              delegation: x(e.delegation)
                ? t.Delegation.fromJSON(e.delegation)
                : void 0,
              balance: x(e.balance) ? u.Coin.fromJSON(e.balance) : void 0,
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.delegation &&
                (o.delegation = e.delegation
                  ? t.Delegation.toJSON(e.delegation)
                  : void 0),
              void 0 !== e.balance &&
                (o.balance = e.balance ? u.Coin.toJSON(e.balance) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = P();
            return (
              (o.delegation =
                void 0 !== e.delegation && null !== e.delegation
                  ? t.Delegation.fromPartial(e.delegation)
                  : void 0),
              (o.balance =
                void 0 !== e.balance && null !== e.balance
                  ? u.Coin.fromPartial(e.balance)
                  : void 0),
              o
            );
          },
        }),
        (t.RedelegationEntryResponse = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.redelegationEntry &&
                t.RedelegationEntry.encode(
                  e.redelegationEntry,
                  o.uint32(10).fork(),
                ).ldelim(),
              "" !== e.balance && o.uint32(34).string(e.balance),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = _();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.redelegationEntry = t.RedelegationEntry.decode(
                    r,
                    r.uint32(),
                  );
                  break;
                case 4:
                  a.balance = r.string();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              redelegationEntry: x(e.redelegationEntry)
                ? t.RedelegationEntry.fromJSON(e.redelegationEntry)
                : void 0,
              balance: x(e.balance) ? String(e.balance) : "",
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.redelegationEntry &&
                (o.redelegationEntry = e.redelegationEntry
                  ? t.RedelegationEntry.toJSON(e.redelegationEntry)
                  : void 0),
              void 0 !== e.balance && (o.balance = e.balance),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = _();
            return (
              (r.redelegationEntry =
                void 0 !== e.redelegationEntry && null !== e.redelegationEntry
                  ? t.RedelegationEntry.fromPartial(e.redelegationEntry)
                  : void 0),
              (r.balance = null !== (o = e.balance) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.RedelegationResponse = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.redelegation &&
                t.Redelegation.encode(
                  e.redelegation,
                  o.uint32(10).fork(),
                ).ldelim());
            for (const r of e.entries)
              t.RedelegationEntryResponse.encode(
                r,
                o.uint32(18).fork(),
              ).ldelim();
            return o;
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === o ? r.len : r.pos + o;
            const a = J();
            while (r.pos < n) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.redelegation = t.Redelegation.decode(r, r.uint32());
                  break;
                case 2:
                  a.entries.push(
                    t.RedelegationEntryResponse.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            return {
              redelegation: x(e.redelegation)
                ? t.Redelegation.fromJSON(e.redelegation)
                : void 0,
              entries: Array.isArray(
                null === e || void 0 === e ? void 0 : e.entries,
              )
                ? e.entries.map((e) => t.RedelegationEntryResponse.fromJSON(e))
                : [],
            };
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.redelegation &&
                (o.redelegation = e.redelegation
                  ? t.Redelegation.toJSON(e.redelegation)
                  : void 0),
              e.entries
                ? (o.entries = e.entries.map((e) =>
                    e ? t.RedelegationEntryResponse.toJSON(e) : void 0,
                  ))
                : (o.entries = []),
              o
            );
          },
          fromPartial(e) {
            var o;
            const r = J();
            return (
              (r.redelegation =
                void 0 !== e.redelegation && null !== e.redelegation
                  ? t.Redelegation.fromPartial(e.redelegation)
                  : void 0),
              (r.entries =
                (null === (o = e.entries) || void 0 === o
                  ? void 0
                  : o.map((e) => t.RedelegationEntryResponse.fromPartial(e))) ||
                []),
              r
            );
          },
        }),
        (t.Pool = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.notBondedTokens &&
                t.uint32(10).string(e.notBondedTokens),
              "" !== e.bondedTokens && t.uint32(18).string(e.bondedTokens),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = M();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.notBondedTokens = o.string();
                  break;
                case 2:
                  n.bondedTokens = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              notBondedTokens: x(e.notBondedTokens)
                ? String(e.notBondedTokens)
                : "",
              bondedTokens: x(e.bondedTokens) ? String(e.bondedTokens) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.notBondedTokens &&
                (t.notBondedTokens = e.notBondedTokens),
              void 0 !== e.bondedTokens && (t.bondedTokens = e.bondedTokens),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = M();
            return (
              (r.notBondedTokens =
                null !== (t = e.notBondedTokens) && void 0 !== t ? t : ""),
              (r.bondedTokens =
                null !== (o = e.bondedTokens) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8429: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
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
        const n = r(o(3186)),
          i = r(o(3187)),
          a = o(5288),
          s = o(8430),
          d = o(8431),
          l = o(8432);
        var u, c;
        function f(e) {
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
        function g(e) {
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
        function m(e) {
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
        function p() {
          return { total: 0, hash: new Uint8Array() };
        }
        function h() {
          return { index: 0, bytes: new Uint8Array(), proof: void 0 };
        }
        function b() {
          return { hash: new Uint8Array(), partSetHeader: void 0 };
        }
        function y() {
          return {
            version: void 0,
            chainId: "",
            height: "0",
            time: void 0,
            lastBlockId: void 0,
            lastCommitHash: new Uint8Array(),
            dataHash: new Uint8Array(),
            validatorsHash: new Uint8Array(),
            nextValidatorsHash: new Uint8Array(),
            consensusHash: new Uint8Array(),
            appHash: new Uint8Array(),
            lastResultsHash: new Uint8Array(),
            evidenceHash: new Uint8Array(),
            proposerAddress: new Uint8Array(),
          };
        }
        function S() {
          return { txs: [] };
        }
        function k() {
          return {
            type: 0,
            height: "0",
            round: 0,
            blockId: void 0,
            timestamp: void 0,
            validatorAddress: new Uint8Array(),
            validatorIndex: 0,
            signature: new Uint8Array(),
          };
        }
        function A() {
          return { height: "0", round: 0, blockId: void 0, signatures: [] };
        }
        function w() {
          return {
            blockIdFlag: 0,
            validatorAddress: new Uint8Array(),
            timestamp: void 0,
            signature: new Uint8Array(),
          };
        }
        function O() {
          return {
            type: 0,
            height: "0",
            round: 0,
            polRound: 0,
            blockId: void 0,
            timestamp: void 0,
            signature: new Uint8Array(),
          };
        }
        function N() {
          return { header: void 0, commit: void 0 };
        }
        function R() {
          return { signedHeader: void 0, validatorSet: void 0 };
        }
        function T() {
          return {
            blockId: void 0,
            blockSize: "0",
            header: void 0,
            numTxs: "0",
          };
        }
        function D() {
          return {
            rootHash: new Uint8Array(),
            data: new Uint8Array(),
            proof: void 0,
          };
        }
        ((t.protobufPackage = "tendermint.types"),
          (function (e) {
            ((e[(e["BLOCK_ID_FLAG_UNKNOWN"] = 0)] = "BLOCK_ID_FLAG_UNKNOWN"),
              (e[(e["BLOCK_ID_FLAG_ABSENT"] = 1)] = "BLOCK_ID_FLAG_ABSENT"),
              (e[(e["BLOCK_ID_FLAG_COMMIT"] = 2)] = "BLOCK_ID_FLAG_COMMIT"),
              (e[(e["BLOCK_ID_FLAG_NIL"] = 3)] = "BLOCK_ID_FLAG_NIL"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((u = t.BlockIDFlag || (t.BlockIDFlag = {}))),
          (t.blockIDFlagFromJSON = f),
          (t.blockIDFlagToJSON = g),
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
          (t.signedMsgTypeFromJSON = m),
          (t.signedMsgTypeToJSON = v),
          (t.PartSetHeader = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                0 !== e.total && t.uint32(8).uint32(e.total),
                0 !== e.hash.length && t.uint32(18).bytes(e.hash),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = p();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.total = o.uint32();
                    break;
                  case 2:
                    n.hash = o.bytes();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                total: x(e.total) ? Number(e.total) : 0,
                hash: x(e.hash) ? _(e.hash) : new Uint8Array(),
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.total && (t.total = Math.round(e.total)),
                void 0 !== e.hash &&
                  (t.hash = M(void 0 !== e.hash ? e.hash : new Uint8Array())),
                t
              );
            },
            fromPartial(e) {
              var t, o;
              const r = p();
              return (
                (r.total = null !== (t = e.total) && void 0 !== t ? t : 0),
                (r.hash =
                  null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array()),
                r
              );
            },
          }),
          (t.Part = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                0 !== e.index && t.uint32(8).uint32(e.index),
                0 !== e.bytes.length && t.uint32(18).bytes(e.bytes),
                void 0 !== e.proof &&
                  s.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = h();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.index = o.uint32();
                    break;
                  case 2:
                    n.bytes = o.bytes();
                    break;
                  case 3:
                    n.proof = s.Proof.decode(o, o.uint32());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                index: x(e.index) ? Number(e.index) : 0,
                bytes: x(e.bytes) ? _(e.bytes) : new Uint8Array(),
                proof: x(e.proof) ? s.Proof.fromJSON(e.proof) : void 0,
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.index && (t.index = Math.round(e.index)),
                void 0 !== e.bytes &&
                  (t.bytes = M(
                    void 0 !== e.bytes ? e.bytes : new Uint8Array(),
                  )),
                void 0 !== e.proof &&
                  (t.proof = e.proof ? s.Proof.toJSON(e.proof) : void 0),
                t
              );
            },
            fromPartial(e) {
              var t, o;
              const r = h();
              return (
                (r.index = null !== (t = e.index) && void 0 !== t ? t : 0),
                (r.bytes =
                  null !== (o = e.bytes) && void 0 !== o
                    ? o
                    : new Uint8Array()),
                (r.proof =
                  void 0 !== e.proof && null !== e.proof
                    ? s.Proof.fromPartial(e.proof)
                    : void 0),
                r
              );
            },
          }),
          (t.BlockID = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
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
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = b();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.hash = r.bytes();
                    break;
                  case 2:
                    a.partSetHeader = t.PartSetHeader.decode(r, r.uint32());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                hash: x(e.hash) ? _(e.hash) : new Uint8Array(),
                partSetHeader: x(e.partSetHeader)
                  ? t.PartSetHeader.fromJSON(e.partSetHeader)
                  : void 0,
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.hash &&
                  (o.hash = M(void 0 !== e.hash ? e.hash : new Uint8Array())),
                void 0 !== e.partSetHeader &&
                  (o.partSetHeader = e.partSetHeader
                    ? t.PartSetHeader.toJSON(e.partSetHeader)
                    : void 0),
                o
              );
            },
            fromPartial(e) {
              var o;
              const r = b();
              return (
                (r.hash =
                  null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array()),
                (r.partSetHeader =
                  void 0 !== e.partSetHeader && null !== e.partSetHeader
                    ? t.PartSetHeader.fromPartial(e.partSetHeader)
                    : void 0),
                r
              );
            },
          }),
          (t.Header = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                void 0 !== e.version &&
                  d.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(),
                "" !== e.chainId && o.uint32(18).string(e.chainId),
                "0" !== e.height && o.uint32(24).int64(e.height),
                void 0 !== e.time &&
                  a.Timestamp.encode(U(e.time), o.uint32(34).fork()).ldelim(),
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
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const s = y();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    s.version = d.Consensus.decode(r, r.uint32());
                    break;
                  case 2:
                    s.chainId = r.string();
                    break;
                  case 3:
                    s.height = C(r.int64());
                    break;
                  case 4:
                    s.time = E(a.Timestamp.decode(r, r.uint32()));
                    break;
                  case 5:
                    s.lastBlockId = t.BlockID.decode(r, r.uint32());
                    break;
                  case 6:
                    s.lastCommitHash = r.bytes();
                    break;
                  case 7:
                    s.dataHash = r.bytes();
                    break;
                  case 8:
                    s.validatorsHash = r.bytes();
                    break;
                  case 9:
                    s.nextValidatorsHash = r.bytes();
                    break;
                  case 10:
                    s.consensusHash = r.bytes();
                    break;
                  case 11:
                    s.appHash = r.bytes();
                    break;
                  case 12:
                    s.lastResultsHash = r.bytes();
                    break;
                  case 13:
                    s.evidenceHash = r.bytes();
                    break;
                  case 14:
                    s.proposerAddress = r.bytes();
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return s;
            },
            fromJSON(e) {
              return {
                version: x(e.version)
                  ? d.Consensus.fromJSON(e.version)
                  : void 0,
                chainId: x(e.chainId) ? String(e.chainId) : "",
                height: x(e.height) ? String(e.height) : "0",
                time: x(e.time) ? B(e.time) : void 0,
                lastBlockId: x(e.lastBlockId)
                  ? t.BlockID.fromJSON(e.lastBlockId)
                  : void 0,
                lastCommitHash: x(e.lastCommitHash)
                  ? _(e.lastCommitHash)
                  : new Uint8Array(),
                dataHash: x(e.dataHash) ? _(e.dataHash) : new Uint8Array(),
                validatorsHash: x(e.validatorsHash)
                  ? _(e.validatorsHash)
                  : new Uint8Array(),
                nextValidatorsHash: x(e.nextValidatorsHash)
                  ? _(e.nextValidatorsHash)
                  : new Uint8Array(),
                consensusHash: x(e.consensusHash)
                  ? _(e.consensusHash)
                  : new Uint8Array(),
                appHash: x(e.appHash) ? _(e.appHash) : new Uint8Array(),
                lastResultsHash: x(e.lastResultsHash)
                  ? _(e.lastResultsHash)
                  : new Uint8Array(),
                evidenceHash: x(e.evidenceHash)
                  ? _(e.evidenceHash)
                  : new Uint8Array(),
                proposerAddress: x(e.proposerAddress)
                  ? _(e.proposerAddress)
                  : new Uint8Array(),
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.version &&
                  (o.version = e.version
                    ? d.Consensus.toJSON(e.version)
                    : void 0),
                void 0 !== e.chainId && (o.chainId = e.chainId),
                void 0 !== e.height && (o.height = e.height),
                void 0 !== e.time && (o.time = e.time.toISOString()),
                void 0 !== e.lastBlockId &&
                  (o.lastBlockId = e.lastBlockId
                    ? t.BlockID.toJSON(e.lastBlockId)
                    : void 0),
                void 0 !== e.lastCommitHash &&
                  (o.lastCommitHash = M(
                    void 0 !== e.lastCommitHash
                      ? e.lastCommitHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.dataHash &&
                  (o.dataHash = M(
                    void 0 !== e.dataHash ? e.dataHash : new Uint8Array(),
                  )),
                void 0 !== e.validatorsHash &&
                  (o.validatorsHash = M(
                    void 0 !== e.validatorsHash
                      ? e.validatorsHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.nextValidatorsHash &&
                  (o.nextValidatorsHash = M(
                    void 0 !== e.nextValidatorsHash
                      ? e.nextValidatorsHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.consensusHash &&
                  (o.consensusHash = M(
                    void 0 !== e.consensusHash
                      ? e.consensusHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.appHash &&
                  (o.appHash = M(
                    void 0 !== e.appHash ? e.appHash : new Uint8Array(),
                  )),
                void 0 !== e.lastResultsHash &&
                  (o.lastResultsHash = M(
                    void 0 !== e.lastResultsHash
                      ? e.lastResultsHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.evidenceHash &&
                  (o.evidenceHash = M(
                    void 0 !== e.evidenceHash
                      ? e.evidenceHash
                      : new Uint8Array(),
                  )),
                void 0 !== e.proposerAddress &&
                  (o.proposerAddress = M(
                    void 0 !== e.proposerAddress
                      ? e.proposerAddress
                      : new Uint8Array(),
                  )),
                o
              );
            },
            fromPartial(e) {
              var o, r, n, i, a, s, l, u, c, f, g, m;
              const v = y();
              return (
                (v.version =
                  void 0 !== e.version && null !== e.version
                    ? d.Consensus.fromPartial(e.version)
                    : void 0),
                (v.chainId = null !== (o = e.chainId) && void 0 !== o ? o : ""),
                (v.height = null !== (r = e.height) && void 0 !== r ? r : "0"),
                (v.time = null !== (n = e.time) && void 0 !== n ? n : void 0),
                (v.lastBlockId =
                  void 0 !== e.lastBlockId && null !== e.lastBlockId
                    ? t.BlockID.fromPartial(e.lastBlockId)
                    : void 0),
                (v.lastCommitHash =
                  null !== (i = e.lastCommitHash) && void 0 !== i
                    ? i
                    : new Uint8Array()),
                (v.dataHash =
                  null !== (a = e.dataHash) && void 0 !== a
                    ? a
                    : new Uint8Array()),
                (v.validatorsHash =
                  null !== (s = e.validatorsHash) && void 0 !== s
                    ? s
                    : new Uint8Array()),
                (v.nextValidatorsHash =
                  null !== (l = e.nextValidatorsHash) && void 0 !== l
                    ? l
                    : new Uint8Array()),
                (v.consensusHash =
                  null !== (u = e.consensusHash) && void 0 !== u
                    ? u
                    : new Uint8Array()),
                (v.appHash =
                  null !== (c = e.appHash) && void 0 !== c
                    ? c
                    : new Uint8Array()),
                (v.lastResultsHash =
                  null !== (f = e.lastResultsHash) && void 0 !== f
                    ? f
                    : new Uint8Array()),
                (v.evidenceHash =
                  null !== (g = e.evidenceHash) && void 0 !== g
                    ? g
                    : new Uint8Array()),
                (v.proposerAddress =
                  null !== (m = e.proposerAddress) && void 0 !== m
                    ? m
                    : new Uint8Array()),
                v
              );
            },
          }),
          (t.Data = {
            encode(e, t) {
              void 0 === t && (t = i.default.Writer.create());
              for (const o of e.txs) t.uint32(10).bytes(o);
              return t;
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = S();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.txs.push(o.bytes());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                txs: Array.isArray(null === e || void 0 === e ? void 0 : e.txs)
                  ? e.txs.map((e) => _(e))
                  : [],
              };
            },
            toJSON(e) {
              const t = {};
              return (
                e.txs
                  ? (t.txs = e.txs.map((e) =>
                      M(void 0 !== e ? e : new Uint8Array()),
                    ))
                  : (t.txs = []),
                t
              );
            },
            fromPartial(e) {
              var t;
              const o = S();
              return (
                (o.txs =
                  (null === (t = e.txs) || void 0 === t
                    ? void 0
                    : t.map((e) => e)) || []),
                o
              );
            },
          }),
          (t.Vote = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                0 !== e.type && o.uint32(8).int32(e.type),
                "0" !== e.height && o.uint32(16).int64(e.height),
                0 !== e.round && o.uint32(24).int32(e.round),
                void 0 !== e.blockId &&
                  t.BlockID.encode(e.blockId, o.uint32(34).fork()).ldelim(),
                void 0 !== e.timestamp &&
                  a.Timestamp.encode(
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
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const s = k();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    s.type = r.int32();
                    break;
                  case 2:
                    s.height = C(r.int64());
                    break;
                  case 3:
                    s.round = r.int32();
                    break;
                  case 4:
                    s.blockId = t.BlockID.decode(r, r.uint32());
                    break;
                  case 5:
                    s.timestamp = E(a.Timestamp.decode(r, r.uint32()));
                    break;
                  case 6:
                    s.validatorAddress = r.bytes();
                    break;
                  case 7:
                    s.validatorIndex = r.int32();
                    break;
                  case 8:
                    s.signature = r.bytes();
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return s;
            },
            fromJSON(e) {
              return {
                type: x(e.type) ? m(e.type) : 0,
                height: x(e.height) ? String(e.height) : "0",
                round: x(e.round) ? Number(e.round) : 0,
                blockId: x(e.blockId) ? t.BlockID.fromJSON(e.blockId) : void 0,
                timestamp: x(e.timestamp) ? B(e.timestamp) : void 0,
                validatorAddress: x(e.validatorAddress)
                  ? _(e.validatorAddress)
                  : new Uint8Array(),
                validatorIndex: x(e.validatorIndex)
                  ? Number(e.validatorIndex)
                  : 0,
                signature: x(e.signature) ? _(e.signature) : new Uint8Array(),
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.type && (o.type = v(e.type)),
                void 0 !== e.height && (o.height = e.height),
                void 0 !== e.round && (o.round = Math.round(e.round)),
                void 0 !== e.blockId &&
                  (o.blockId = e.blockId
                    ? t.BlockID.toJSON(e.blockId)
                    : void 0),
                void 0 !== e.timestamp &&
                  (o.timestamp = e.timestamp.toISOString()),
                void 0 !== e.validatorAddress &&
                  (o.validatorAddress = M(
                    void 0 !== e.validatorAddress
                      ? e.validatorAddress
                      : new Uint8Array(),
                  )),
                void 0 !== e.validatorIndex &&
                  (o.validatorIndex = Math.round(e.validatorIndex)),
                void 0 !== e.signature &&
                  (o.signature = M(
                    void 0 !== e.signature ? e.signature : new Uint8Array(),
                  )),
                o
              );
            },
            fromPartial(e) {
              var o, r, n, i, a, s, d;
              const l = k();
              return (
                (l.type = null !== (o = e.type) && void 0 !== o ? o : 0),
                (l.height = null !== (r = e.height) && void 0 !== r ? r : "0"),
                (l.round = null !== (n = e.round) && void 0 !== n ? n : 0),
                (l.blockId =
                  void 0 !== e.blockId && null !== e.blockId
                    ? t.BlockID.fromPartial(e.blockId)
                    : void 0),
                (l.timestamp =
                  null !== (i = e.timestamp) && void 0 !== i ? i : void 0),
                (l.validatorAddress =
                  null !== (a = e.validatorAddress) && void 0 !== a
                    ? a
                    : new Uint8Array()),
                (l.validatorIndex =
                  null !== (s = e.validatorIndex) && void 0 !== s ? s : 0),
                (l.signature =
                  null !== (d = e.signature) && void 0 !== d
                    ? d
                    : new Uint8Array()),
                l
              );
            },
          }),
          (t.Commit = {
            encode(e, o) {
              (void 0 === o && (o = i.default.Writer.create()),
                "0" !== e.height && o.uint32(8).int64(e.height),
                0 !== e.round && o.uint32(16).int32(e.round),
                void 0 !== e.blockId &&
                  t.BlockID.encode(e.blockId, o.uint32(26).fork()).ldelim());
              for (const r of e.signatures)
                t.CommitSig.encode(r, o.uint32(34).fork()).ldelim();
              return o;
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = A();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.height = C(r.int64());
                    break;
                  case 2:
                    a.round = r.int32();
                    break;
                  case 3:
                    a.blockId = t.BlockID.decode(r, r.uint32());
                    break;
                  case 4:
                    a.signatures.push(t.CommitSig.decode(r, r.uint32()));
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                height: x(e.height) ? String(e.height) : "0",
                round: x(e.round) ? Number(e.round) : 0,
                blockId: x(e.blockId) ? t.BlockID.fromJSON(e.blockId) : void 0,
                signatures: Array.isArray(
                  null === e || void 0 === e ? void 0 : e.signatures,
                )
                  ? e.signatures.map((e) => t.CommitSig.fromJSON(e))
                  : [],
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.height && (o.height = e.height),
                void 0 !== e.round && (o.round = Math.round(e.round)),
                void 0 !== e.blockId &&
                  (o.blockId = e.blockId
                    ? t.BlockID.toJSON(e.blockId)
                    : void 0),
                e.signatures
                  ? (o.signatures = e.signatures.map((e) =>
                      e ? t.CommitSig.toJSON(e) : void 0,
                    ))
                  : (o.signatures = []),
                o
              );
            },
            fromPartial(e) {
              var o, r, n;
              const i = A();
              return (
                (i.height = null !== (o = e.height) && void 0 !== o ? o : "0"),
                (i.round = null !== (r = e.round) && void 0 !== r ? r : 0),
                (i.blockId =
                  void 0 !== e.blockId && null !== e.blockId
                    ? t.BlockID.fromPartial(e.blockId)
                    : void 0),
                (i.signatures =
                  (null === (n = e.signatures) || void 0 === n
                    ? void 0
                    : n.map((e) => t.CommitSig.fromPartial(e))) || []),
                i
              );
            },
          }),
          (t.CommitSig = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag),
                0 !== e.validatorAddress.length &&
                  t.uint32(18).bytes(e.validatorAddress),
                void 0 !== e.timestamp &&
                  a.Timestamp.encode(
                    U(e.timestamp),
                    t.uint32(26).fork(),
                  ).ldelim(),
                0 !== e.signature.length && t.uint32(34).bytes(e.signature),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = w();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.blockIdFlag = o.int32();
                    break;
                  case 2:
                    n.validatorAddress = o.bytes();
                    break;
                  case 3:
                    n.timestamp = E(a.Timestamp.decode(o, o.uint32()));
                    break;
                  case 4:
                    n.signature = o.bytes();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                blockIdFlag: x(e.blockIdFlag) ? f(e.blockIdFlag) : 0,
                validatorAddress: x(e.validatorAddress)
                  ? _(e.validatorAddress)
                  : new Uint8Array(),
                timestamp: x(e.timestamp) ? B(e.timestamp) : void 0,
                signature: x(e.signature) ? _(e.signature) : new Uint8Array(),
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.blockIdFlag && (t.blockIdFlag = g(e.blockIdFlag)),
                void 0 !== e.validatorAddress &&
                  (t.validatorAddress = M(
                    void 0 !== e.validatorAddress
                      ? e.validatorAddress
                      : new Uint8Array(),
                  )),
                void 0 !== e.timestamp &&
                  (t.timestamp = e.timestamp.toISOString()),
                void 0 !== e.signature &&
                  (t.signature = M(
                    void 0 !== e.signature ? e.signature : new Uint8Array(),
                  )),
                t
              );
            },
            fromPartial(e) {
              var t, o, r, n;
              const i = w();
              return (
                (i.blockIdFlag =
                  null !== (t = e.blockIdFlag) && void 0 !== t ? t : 0),
                (i.validatorAddress =
                  null !== (o = e.validatorAddress) && void 0 !== o
                    ? o
                    : new Uint8Array()),
                (i.timestamp =
                  null !== (r = e.timestamp) && void 0 !== r ? r : void 0),
                (i.signature =
                  null !== (n = e.signature) && void 0 !== n
                    ? n
                    : new Uint8Array()),
                i
              );
            },
          }),
          (t.Proposal = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                0 !== e.type && o.uint32(8).int32(e.type),
                "0" !== e.height && o.uint32(16).int64(e.height),
                0 !== e.round && o.uint32(24).int32(e.round),
                0 !== e.polRound && o.uint32(32).int32(e.polRound),
                void 0 !== e.blockId &&
                  t.BlockID.encode(e.blockId, o.uint32(42).fork()).ldelim(),
                void 0 !== e.timestamp &&
                  a.Timestamp.encode(
                    U(e.timestamp),
                    o.uint32(50).fork(),
                  ).ldelim(),
                0 !== e.signature.length && o.uint32(58).bytes(e.signature),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const s = O();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    s.type = r.int32();
                    break;
                  case 2:
                    s.height = C(r.int64());
                    break;
                  case 3:
                    s.round = r.int32();
                    break;
                  case 4:
                    s.polRound = r.int32();
                    break;
                  case 5:
                    s.blockId = t.BlockID.decode(r, r.uint32());
                    break;
                  case 6:
                    s.timestamp = E(a.Timestamp.decode(r, r.uint32()));
                    break;
                  case 7:
                    s.signature = r.bytes();
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return s;
            },
            fromJSON(e) {
              return {
                type: x(e.type) ? m(e.type) : 0,
                height: x(e.height) ? String(e.height) : "0",
                round: x(e.round) ? Number(e.round) : 0,
                polRound: x(e.polRound) ? Number(e.polRound) : 0,
                blockId: x(e.blockId) ? t.BlockID.fromJSON(e.blockId) : void 0,
                timestamp: x(e.timestamp) ? B(e.timestamp) : void 0,
                signature: x(e.signature) ? _(e.signature) : new Uint8Array(),
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.type && (o.type = v(e.type)),
                void 0 !== e.height && (o.height = e.height),
                void 0 !== e.round && (o.round = Math.round(e.round)),
                void 0 !== e.polRound && (o.polRound = Math.round(e.polRound)),
                void 0 !== e.blockId &&
                  (o.blockId = e.blockId
                    ? t.BlockID.toJSON(e.blockId)
                    : void 0),
                void 0 !== e.timestamp &&
                  (o.timestamp = e.timestamp.toISOString()),
                void 0 !== e.signature &&
                  (o.signature = M(
                    void 0 !== e.signature ? e.signature : new Uint8Array(),
                  )),
                o
              );
            },
            fromPartial(e) {
              var o, r, n, i, a, s;
              const d = O();
              return (
                (d.type = null !== (o = e.type) && void 0 !== o ? o : 0),
                (d.height = null !== (r = e.height) && void 0 !== r ? r : "0"),
                (d.round = null !== (n = e.round) && void 0 !== n ? n : 0),
                (d.polRound =
                  null !== (i = e.polRound) && void 0 !== i ? i : 0),
                (d.blockId =
                  void 0 !== e.blockId && null !== e.blockId
                    ? t.BlockID.fromPartial(e.blockId)
                    : void 0),
                (d.timestamp =
                  null !== (a = e.timestamp) && void 0 !== a ? a : void 0),
                (d.signature =
                  null !== (s = e.signature) && void 0 !== s
                    ? s
                    : new Uint8Array()),
                d
              );
            },
          }),
          (t.SignedHeader = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                void 0 !== e.header &&
                  t.Header.encode(e.header, o.uint32(10).fork()).ldelim(),
                void 0 !== e.commit &&
                  t.Commit.encode(e.commit, o.uint32(18).fork()).ldelim(),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = N();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.header = t.Header.decode(r, r.uint32());
                    break;
                  case 2:
                    a.commit = t.Commit.decode(r, r.uint32());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                header: x(e.header) ? t.Header.fromJSON(e.header) : void 0,
                commit: x(e.commit) ? t.Commit.fromJSON(e.commit) : void 0,
              };
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
              const o = N();
              return (
                (o.header =
                  void 0 !== e.header && null !== e.header
                    ? t.Header.fromPartial(e.header)
                    : void 0),
                (o.commit =
                  void 0 !== e.commit && null !== e.commit
                    ? t.Commit.fromPartial(e.commit)
                    : void 0),
                o
              );
            },
          }),
          (t.LightBlock = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                void 0 !== e.signedHeader &&
                  t.SignedHeader.encode(
                    e.signedHeader,
                    o.uint32(10).fork(),
                  ).ldelim(),
                void 0 !== e.validatorSet &&
                  l.ValidatorSet.encode(
                    e.validatorSet,
                    o.uint32(18).fork(),
                  ).ldelim(),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = R();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.signedHeader = t.SignedHeader.decode(r, r.uint32());
                    break;
                  case 2:
                    a.validatorSet = l.ValidatorSet.decode(r, r.uint32());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                signedHeader: x(e.signedHeader)
                  ? t.SignedHeader.fromJSON(e.signedHeader)
                  : void 0,
                validatorSet: x(e.validatorSet)
                  ? l.ValidatorSet.fromJSON(e.validatorSet)
                  : void 0,
              };
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
                    ? l.ValidatorSet.toJSON(e.validatorSet)
                    : void 0),
                o
              );
            },
            fromPartial(e) {
              const o = R();
              return (
                (o.signedHeader =
                  void 0 !== e.signedHeader && null !== e.signedHeader
                    ? t.SignedHeader.fromPartial(e.signedHeader)
                    : void 0),
                (o.validatorSet =
                  void 0 !== e.validatorSet && null !== e.validatorSet
                    ? l.ValidatorSet.fromPartial(e.validatorSet)
                    : void 0),
                o
              );
            },
          }),
          (t.BlockMeta = {
            encode(e, o) {
              return (
                void 0 === o && (o = i.default.Writer.create()),
                void 0 !== e.blockId &&
                  t.BlockID.encode(e.blockId, o.uint32(10).fork()).ldelim(),
                "0" !== e.blockSize && o.uint32(16).int64(e.blockSize),
                void 0 !== e.header &&
                  t.Header.encode(e.header, o.uint32(26).fork()).ldelim(),
                "0" !== e.numTxs && o.uint32(32).int64(e.numTxs),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = T();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.blockId = t.BlockID.decode(r, r.uint32());
                    break;
                  case 2:
                    a.blockSize = C(r.int64());
                    break;
                  case 3:
                    a.header = t.Header.decode(r, r.uint32());
                    break;
                  case 4:
                    a.numTxs = C(r.int64());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                blockId: x(e.blockId) ? t.BlockID.fromJSON(e.blockId) : void 0,
                blockSize: x(e.blockSize) ? String(e.blockSize) : "0",
                header: x(e.header) ? t.Header.fromJSON(e.header) : void 0,
                numTxs: x(e.numTxs) ? String(e.numTxs) : "0",
              };
            },
            toJSON(e) {
              const o = {};
              return (
                void 0 !== e.blockId &&
                  (o.blockId = e.blockId
                    ? t.BlockID.toJSON(e.blockId)
                    : void 0),
                void 0 !== e.blockSize && (o.blockSize = e.blockSize),
                void 0 !== e.header &&
                  (o.header = e.header ? t.Header.toJSON(e.header) : void 0),
                void 0 !== e.numTxs && (o.numTxs = e.numTxs),
                o
              );
            },
            fromPartial(e) {
              var o, r;
              const n = T();
              return (
                (n.blockId =
                  void 0 !== e.blockId && null !== e.blockId
                    ? t.BlockID.fromPartial(e.blockId)
                    : void 0),
                (n.blockSize =
                  null !== (o = e.blockSize) && void 0 !== o ? o : "0"),
                (n.header =
                  void 0 !== e.header && null !== e.header
                    ? t.Header.fromPartial(e.header)
                    : void 0),
                (n.numTxs = null !== (r = e.numTxs) && void 0 !== r ? r : "0"),
                n
              );
            },
          }),
          (t.TxProof = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash),
                0 !== e.data.length && t.uint32(18).bytes(e.data),
                void 0 !== e.proof &&
                  s.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = D();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.rootHash = o.bytes();
                    break;
                  case 2:
                    n.data = o.bytes();
                    break;
                  case 3:
                    n.proof = s.Proof.decode(o, o.uint32());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                rootHash: x(e.rootHash) ? _(e.rootHash) : new Uint8Array(),
                data: x(e.data) ? _(e.data) : new Uint8Array(),
                proof: x(e.proof) ? s.Proof.fromJSON(e.proof) : void 0,
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.rootHash &&
                  (t.rootHash = M(
                    void 0 !== e.rootHash ? e.rootHash : new Uint8Array(),
                  )),
                void 0 !== e.data &&
                  (t.data = M(void 0 !== e.data ? e.data : new Uint8Array())),
                void 0 !== e.proof &&
                  (t.proof = e.proof ? s.Proof.toJSON(e.proof) : void 0),
                t
              );
            },
            fromPartial(e) {
              var t, o;
              const r = D();
              return (
                (r.rootHash =
                  null !== (t = e.rootHash) && void 0 !== t
                    ? t
                    : new Uint8Array()),
                (r.data =
                  null !== (o = e.data) && void 0 !== o ? o : new Uint8Array()),
                (r.proof =
                  void 0 !== e.proof && null !== e.proof
                    ? s.Proof.fromPartial(e.proof)
                    : void 0),
                r
              );
            },
          }));
        var I = (() => {
          if ("undefined" !== typeof I) return I;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const P =
          I.atob || ((e) => I.Buffer.from(e, "base64").toString("binary"));
        function _(e) {
          const t = P(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const J =
          I.btoa || ((e) => I.Buffer.from(e, "binary").toString("base64"));
        function M(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return J(t.join(""));
        }
        function U(e) {
          const t = Math.trunc(e.getTime() / 1e3).toString(),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function E(e) {
          let t = 1e3 * Number(e.seconds);
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function B(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : E(a.Timestamp.fromJSON(e));
        }
        function C(e) {
          return e.toString();
        }
        function x(e) {
          return null !== e && void 0 !== e;
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    8430: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
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
        const n = r(o(3186)),
          i = r(o(3187));
        function a() {
          return {
            total: "0",
            index: "0",
            leafHash: new Uint8Array(),
            aunts: [],
          };
        }
        function s() {
          return { key: new Uint8Array(), proof: void 0 };
        }
        function d() {
          return { key: "", input: "", output: "" };
        }
        function l() {
          return { type: "", key: new Uint8Array(), data: new Uint8Array() };
        }
        function u() {
          return { ops: [] };
        }
        ((t.protobufPackage = "tendermint.crypto"),
          (t.Proof = {
            encode(e, t = i.default.Writer.create()) {
              ("0" !== e.total && t.uint32(8).int64(e.total),
                "0" !== e.index && t.uint32(16).int64(e.index),
                0 !== e.leafHash.length && t.uint32(26).bytes(e.leafHash));
              for (const o of e.aunts) t.uint32(34).bytes(o);
              return t;
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = a();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.total = p(o.int64());
                    break;
                  case 2:
                    n.index = p(o.int64());
                    break;
                  case 3:
                    n.leafHash = o.bytes();
                    break;
                  case 4:
                    n.aunts.push(o.bytes());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                total: h(e.total) ? String(e.total) : "0",
                index: h(e.index) ? String(e.index) : "0",
                leafHash: h(e.leafHash) ? g(e.leafHash) : new Uint8Array(),
                aunts: Array.isArray(
                  null === e || void 0 === e ? void 0 : e.aunts,
                )
                  ? e.aunts.map((e) => g(e))
                  : [],
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.total && (t.total = e.total),
                void 0 !== e.index && (t.index = e.index),
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
              var t, o, r, n;
              const i = a();
              return (
                (i.total = null !== (t = e.total) && void 0 !== t ? t : "0"),
                (i.index = null !== (o = e.index) && void 0 !== o ? o : "0"),
                (i.leafHash =
                  null !== (r = e.leafHash) && void 0 !== r
                    ? r
                    : new Uint8Array()),
                (i.aunts =
                  (null === (n = e.aunts) || void 0 === n
                    ? void 0
                    : n.map((e) => e)) || []),
                i
              );
            },
          }),
          (t.ValueOp = {
            encode(e, o = i.default.Writer.create()) {
              return (
                0 !== e.key.length && o.uint32(10).bytes(e.key),
                void 0 !== e.proof &&
                  t.Proof.encode(e.proof, o.uint32(18).fork()).ldelim(),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = s();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.key = r.bytes();
                    break;
                  case 2:
                    a.proof = t.Proof.decode(r, r.uint32());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                key: h(e.key) ? g(e.key) : new Uint8Array(),
                proof: h(e.proof) ? t.Proof.fromJSON(e.proof) : void 0,
              };
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
              var o;
              const r = s();
              return (
                (r.key =
                  null !== (o = e.key) && void 0 !== o ? o : new Uint8Array()),
                (r.proof =
                  void 0 !== e.proof && null !== e.proof
                    ? t.Proof.fromPartial(e.proof)
                    : void 0),
                r
              );
            },
          }),
          (t.DominoOp = {
            encode(e, t = i.default.Writer.create()) {
              return (
                "" !== e.key && t.uint32(10).string(e.key),
                "" !== e.input && t.uint32(18).string(e.input),
                "" !== e.output && t.uint32(26).string(e.output),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = d();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.key = o.string();
                    break;
                  case 2:
                    n.input = o.string();
                    break;
                  case 3:
                    n.output = o.string();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                key: h(e.key) ? String(e.key) : "",
                input: h(e.input) ? String(e.input) : "",
                output: h(e.output) ? String(e.output) : "",
              };
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
              var t, o, r;
              const n = d();
              return (
                (n.key = null !== (t = e.key) && void 0 !== t ? t : ""),
                (n.input = null !== (o = e.input) && void 0 !== o ? o : ""),
                (n.output = null !== (r = e.output) && void 0 !== r ? r : ""),
                n
              );
            },
          }),
          (t.ProofOp = {
            encode(e, t = i.default.Writer.create()) {
              return (
                "" !== e.type && t.uint32(10).string(e.type),
                0 !== e.key.length && t.uint32(18).bytes(e.key),
                0 !== e.data.length && t.uint32(26).bytes(e.data),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = l();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.type = o.string();
                    break;
                  case 2:
                    n.key = o.bytes();
                    break;
                  case 3:
                    n.data = o.bytes();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                type: h(e.type) ? String(e.type) : "",
                key: h(e.key) ? g(e.key) : new Uint8Array(),
                data: h(e.data) ? g(e.data) : new Uint8Array(),
              };
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
              var t, o, r;
              const n = l();
              return (
                (n.type = null !== (t = e.type) && void 0 !== t ? t : ""),
                (n.key =
                  null !== (o = e.key) && void 0 !== o ? o : new Uint8Array()),
                (n.data =
                  null !== (r = e.data) && void 0 !== r ? r : new Uint8Array()),
                n
              );
            },
          }),
          (t.ProofOps = {
            encode(e, o = i.default.Writer.create()) {
              for (const r of e.ops)
                t.ProofOp.encode(r, o.uint32(10).fork()).ldelim();
              return o;
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = u();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.ops.push(t.ProofOp.decode(r, r.uint32()));
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                ops: Array.isArray(null === e || void 0 === e ? void 0 : e.ops)
                  ? e.ops.map((e) => t.ProofOp.fromJSON(e))
                  : [],
              };
            },
            toJSON(e) {
              const o = {};
              return (
                e.ops
                  ? (o.ops = e.ops.map((e) =>
                      e ? t.ProofOp.toJSON(e) : void 0,
                    ))
                  : (o.ops = []),
                o
              );
            },
            fromPartial(e) {
              var o;
              const r = u();
              return (
                (r.ops =
                  (null === (o = e.ops) || void 0 === o
                    ? void 0
                    : o.map((e) => t.ProofOp.fromPartial(e))) || []),
                r
              );
            },
          }));
        var c = (() => {
          if ("undefined" !== typeof c) return c;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const f =
          c.atob || ((e) => c.Buffer.from(e, "base64").toString("binary"));
        function g(e) {
          const t = f(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const m =
          c.btoa || ((e) => c.Buffer.from(e, "binary").toString("base64"));
        function v(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return m(t.join(""));
        }
        function p(e) {
          return e.toString();
        }
        function h(e) {
          return null !== e && void 0 !== e;
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    8431: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Consensus = t.App = t.protobufPackage = void 0));
      const n = r(o(3186)),
        i = r(o(3187));
      function a() {
        return { protocol: "0", software: "" };
      }
      function s() {
        return { block: "0", app: "0" };
      }
      function d(e) {
        return e.toString();
      }
      function l(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "tendermint.version"),
        (t.App = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.protocol && t.uint32(8).uint64(e.protocol),
              "" !== e.software && t.uint32(18).string(e.software),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = a();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.protocol = d(o.uint64());
                  break;
                case 2:
                  n.software = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              protocol: l(e.protocol) ? String(e.protocol) : "0",
              software: l(e.software) ? String(e.software) : "",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.protocol && (t.protocol = e.protocol),
              void 0 !== e.software && (t.software = e.software),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = a();
            return (
              (r.protocol =
                null !== (t = e.protocol) && void 0 !== t ? t : "0"),
              (r.software = null !== (o = e.software) && void 0 !== o ? o : ""),
              r
            );
          },
        }),
        (t.Consensus = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.block && t.uint32(8).uint64(e.block),
              "0" !== e.app && t.uint32(16).uint64(e.app),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = s();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.block = d(o.uint64());
                  break;
                case 2:
                  n.app = d(o.uint64());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              block: l(e.block) ? String(e.block) : "0",
              app: l(e.app) ? String(e.app) : "0",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.block && (t.block = e.block),
              void 0 !== e.app && (t.app = e.app),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = s();
            return (
              (r.block = null !== (t = e.block) && void 0 !== t ? t : "0"),
              (r.app = null !== (o = e.app) && void 0 !== o ? o : "0"),
              r
            );
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8432: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
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
        const n = r(o(3186)),
          i = r(o(3187)),
          a = o(8433);
        function s() {
          return { validators: [], proposer: void 0, totalVotingPower: "0" };
        }
        function d() {
          return {
            address: new Uint8Array(),
            pubKey: void 0,
            votingPower: "0",
            proposerPriority: "0",
          };
        }
        function l() {
          return { pubKey: void 0, votingPower: "0" };
        }
        ((t.protobufPackage = "tendermint.types"),
          (t.ValidatorSet = {
            encode(e, o) {
              void 0 === o && (o = i.default.Writer.create());
              for (const r of e.validators)
                t.Validator.encode(r, o.uint32(10).fork()).ldelim();
              return (
                void 0 !== e.proposer &&
                  t.Validator.encode(e.proposer, o.uint32(18).fork()).ldelim(),
                "0" !== e.totalVotingPower &&
                  o.uint32(24).int64(e.totalVotingPower),
                o
              );
            },
            decode(e, o) {
              const r =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let n = void 0 === o ? r.len : r.pos + o;
              const a = s();
              while (r.pos < n) {
                const e = r.uint32();
                switch (e >>> 3) {
                  case 1:
                    a.validators.push(t.Validator.decode(r, r.uint32()));
                    break;
                  case 2:
                    a.proposer = t.Validator.decode(r, r.uint32());
                    break;
                  case 3:
                    a.totalVotingPower = v(r.int64());
                    break;
                  default:
                    r.skipType(7 & e);
                    break;
                }
              }
              return a;
            },
            fromJSON(e) {
              return {
                validators: Array.isArray(
                  null === e || void 0 === e ? void 0 : e.validators,
                )
                  ? e.validators.map((e) => t.Validator.fromJSON(e))
                  : [],
                proposer: p(e.proposer)
                  ? t.Validator.fromJSON(e.proposer)
                  : void 0,
                totalVotingPower: p(e.totalVotingPower)
                  ? String(e.totalVotingPower)
                  : "0",
              };
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
                  (o.totalVotingPower = e.totalVotingPower),
                o
              );
            },
            fromPartial(e) {
              var o, r;
              const n = s();
              return (
                (n.validators =
                  (null === (o = e.validators) || void 0 === o
                    ? void 0
                    : o.map((e) => t.Validator.fromPartial(e))) || []),
                (n.proposer =
                  void 0 !== e.proposer && null !== e.proposer
                    ? t.Validator.fromPartial(e.proposer)
                    : void 0),
                (n.totalVotingPower =
                  null !== (r = e.totalVotingPower) && void 0 !== r ? r : "0"),
                n
              );
            },
          }),
          (t.Validator = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                0 !== e.address.length && t.uint32(10).bytes(e.address),
                void 0 !== e.pubKey &&
                  a.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
                "0" !== e.votingPower && t.uint32(24).int64(e.votingPower),
                "0" !== e.proposerPriority &&
                  t.uint32(32).int64(e.proposerPriority),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = d();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.address = o.bytes();
                    break;
                  case 2:
                    n.pubKey = a.PublicKey.decode(o, o.uint32());
                    break;
                  case 3:
                    n.votingPower = v(o.int64());
                    break;
                  case 4:
                    n.proposerPriority = v(o.int64());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                address: p(e.address) ? f(e.address) : new Uint8Array(),
                pubKey: p(e.pubKey) ? a.PublicKey.fromJSON(e.pubKey) : void 0,
                votingPower: p(e.votingPower) ? String(e.votingPower) : "0",
                proposerPriority: p(e.proposerPriority)
                  ? String(e.proposerPriority)
                  : "0",
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.address &&
                  (t.address = m(
                    void 0 !== e.address ? e.address : new Uint8Array(),
                  )),
                void 0 !== e.pubKey &&
                  (t.pubKey = e.pubKey ? a.PublicKey.toJSON(e.pubKey) : void 0),
                void 0 !== e.votingPower && (t.votingPower = e.votingPower),
                void 0 !== e.proposerPriority &&
                  (t.proposerPriority = e.proposerPriority),
                t
              );
            },
            fromPartial(e) {
              var t, o, r;
              const n = d();
              return (
                (n.address =
                  null !== (t = e.address) && void 0 !== t
                    ? t
                    : new Uint8Array()),
                (n.pubKey =
                  void 0 !== e.pubKey && null !== e.pubKey
                    ? a.PublicKey.fromPartial(e.pubKey)
                    : void 0),
                (n.votingPower =
                  null !== (o = e.votingPower) && void 0 !== o ? o : "0"),
                (n.proposerPriority =
                  null !== (r = e.proposerPriority) && void 0 !== r ? r : "0"),
                n
              );
            },
          }),
          (t.SimpleValidator = {
            encode(e, t) {
              return (
                void 0 === t && (t = i.default.Writer.create()),
                void 0 !== e.pubKey &&
                  a.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(),
                "0" !== e.votingPower && t.uint32(16).int64(e.votingPower),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = l();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.pubKey = a.PublicKey.decode(o, o.uint32());
                    break;
                  case 2:
                    n.votingPower = v(o.int64());
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                pubKey: p(e.pubKey) ? a.PublicKey.fromJSON(e.pubKey) : void 0,
                votingPower: p(e.votingPower) ? String(e.votingPower) : "0",
              };
            },
            toJSON(e) {
              const t = {};
              return (
                void 0 !== e.pubKey &&
                  (t.pubKey = e.pubKey ? a.PublicKey.toJSON(e.pubKey) : void 0),
                void 0 !== e.votingPower && (t.votingPower = e.votingPower),
                t
              );
            },
            fromPartial(e) {
              var t;
              const o = l();
              return (
                (o.pubKey =
                  void 0 !== e.pubKey && null !== e.pubKey
                    ? a.PublicKey.fromPartial(e.pubKey)
                    : void 0),
                (o.votingPower =
                  null !== (t = e.votingPower) && void 0 !== t ? t : "0"),
                o
              );
            },
          }));
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const c =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function f(e) {
          const t = c(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const g =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function m(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return g(t.join(""));
        }
        function v(e) {
          return e.toString();
        }
        function p(e) {
          return null !== e && void 0 !== e;
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    8433: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PublicKey = t.protobufPackage = void 0));
        const n = r(o(3186)),
          i = r(o(3187));
        function a() {
          return { ed25519: void 0, secp256k1: void 0 };
        }
        ((t.protobufPackage = "tendermint.crypto"),
          (t.PublicKey = {
            encode(e, t = i.default.Writer.create()) {
              return (
                void 0 !== e.ed25519 && t.uint32(10).bytes(e.ed25519),
                void 0 !== e.secp256k1 && t.uint32(18).bytes(e.secp256k1),
                t
              );
            },
            decode(e, t) {
              const o =
                e instanceof i.default.Reader ? e : new i.default.Reader(e);
              let r = void 0 === t ? o.len : o.pos + t;
              const n = a();
              while (o.pos < r) {
                const e = o.uint32();
                switch (e >>> 3) {
                  case 1:
                    n.ed25519 = o.bytes();
                    break;
                  case 2:
                    n.secp256k1 = o.bytes();
                    break;
                  default:
                    o.skipType(7 & e);
                    break;
                }
              }
              return n;
            },
            fromJSON(e) {
              return {
                ed25519: f(e.ed25519) ? l(e.ed25519) : void 0,
                secp256k1: f(e.secp256k1) ? l(e.secp256k1) : void 0,
              };
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
              var t, o;
              const r = a();
              return (
                (r.ed25519 =
                  null !== (t = e.ed25519) && void 0 !== t ? t : void 0),
                (r.secp256k1 =
                  null !== (o = e.secp256k1) && void 0 !== o ? o : void 0),
                r
              );
            },
          }));
        var s = (() => {
          if ("undefined" !== typeof s) return s;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const d =
          s.atob || ((e) => s.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = d(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const u =
          s.btoa || ((e) => s.Buffer.from(e, "binary").toString("base64"));
        function c(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return u(t.join(""));
        }
        function f(e) {
          return null !== e && void 0 !== e;
        }
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure());
      }).call(this, o(13));
    },
    8434: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Duration = t.protobufPackage = void 0));
      const n = r(o(3186)),
        i = r(o(3187));
      function a() {
        return { seconds: "0", nanos: 0 };
      }
      function s(e) {
        return e.toString();
      }
      function d(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "google.protobuf"),
        (t.Duration = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.seconds && t.uint32(8).int64(e.seconds),
              0 !== e.nanos && t.uint32(16).int32(e.nanos),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = a();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.seconds = s(o.int64());
                  break;
                case 2:
                  n.nanos = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              seconds: d(e.seconds) ? String(e.seconds) : "0",
              nanos: d(e.nanos) ? Number(e.nanos) : 0,
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.seconds && (t.seconds = e.seconds),
              void 0 !== e.nanos && (t.nanos = Math.round(e.nanos)),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = a();
            return (
              (r.seconds = null !== (t = e.seconds) && void 0 !== t ? t : "0"),
              (r.nanos = null !== (o = e.nanos) && void 0 !== o ? o : 0),
              r
            );
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
    8435: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params = t.protobufPackage = void 0));
      const n = r(o(3186)),
        i = r(o(3187));
      function a() {
        return { epochInterval: "0" };
      }
      function s(e) {
        return e.toString();
      }
      function d(e) {
        return null !== e && void 0 !== e;
      }
      ((t.protobufPackage = "babylon.epoching.v1"),
        (t.Params = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "0" !== e.epochInterval && t.uint32(8).uint64(e.epochInterval),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const n = a();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  n.epochInterval = s(o.uint64());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            return {
              epochInterval: d(e.epochInterval) ? String(e.epochInterval) : "0",
            };
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.epochInterval && (t.epochInterval = e.epochInterval),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = a();
            return (
              (o.epochInterval =
                null !== (t = e.epochInterval) && void 0 !== t ? t : "0"),
              o
            );
          },
        }),
        i.default.util.Long !== n.default &&
          ((i.default.util.Long = n.default), i.default.configure()));
    },
  },
]);
