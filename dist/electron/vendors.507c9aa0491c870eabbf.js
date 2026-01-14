(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [197],
  {
    2657: function (e, t, n) {
      "use strict";
      var r = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = b(n(3218)),
        i = r(n(803)),
        s = r(n(2838)),
        a = n(3914),
        u = n(3915),
        c = n(2800),
        l = n(2968),
        d = r(n(73)),
        f = n(27),
        p = n(19),
        h = r(n(230)),
        y = r(n(2977)),
        g = n(2806),
        m = n(4912);
      function b(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (b = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((o = t ? r : n)) {
            if (o.has(e)) return o.get(e);
            o.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? o(s, n, i)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      function v(e, t, n) {
        (S(e, t), t.set(e, n));
      }
      function S(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function I(e, t) {
        return e.get(k(e, t));
      }
      function w(e, t, n) {
        return (e.set(k(e, t), n), n);
      }
      function k(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
      }
      var E = new WeakMap();
      class COSMOSCoin extends (0, g.StakingMixin)(
        (0, g.HasBlockScanner)((0, g.HasProviders)(h.default)),
      ) {
        constructor(e) {
          const { prefix: t, denom: n, feeData: r, derivation: o } = e;
          (super({ ...e, unspendableBalance: r.unspendableBalance }),
            v(this, E, void 0),
            (this.derivation = o),
            (this.prefix = t),
            (this.denom = n),
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
            this.setExplorersModules([y.default]),
            this.loadExplorers(e));
        }
        async loadWallet(e, t) {
          const n = o.bip32.fromSeed(e),
            r = n.derivePath(this.derivation);
          if (!r)
            throw new p.WalletError({
              type: f.WALLET_ERROR,
              error: new Error("can't get a privateKey!"),
              instance: this,
            });
          const s = o.crypto.hash160(r.publicKey);
          return (
            w(E, this, r.toWIF()),
            (this.address = i.default.encode(
              this.prefix,
              i.default.toWords(s),
            )),
            this.setPrivateKey(r.toWIF(), t),
            { id: this.id, privateKey: I(E, this), address: this.address }
          );
        }
        getAddress() {
          if (I(E, this)) {
            const e = o.ECPair.fromWIF(I(E, this)),
              t = o.crypto.hash160(e.publicKey);
            return i.default.encode(this.prefix, i.default.toWords(t));
          }
          return new p.WalletError({
            type: f.WALLET_ERROR,
            error: new Error("privateKey is empty!"),
            instance: this,
          });
        }
        getSignKeys() {
          const e = o.ECPair.fromWIF(I(E, this)),
            t = s.default.decode(I(E, this));
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
            offset: n = 0,
            limit: r = this.explorer.defaultTxLimit,
            pageNum: o = 0,
          } = e;
          return (
            (this.transactions = await this.getProvider("history2")
              .getTransactions({
                address: t,
                offset: n,
                limit: r,
                pageNum: o,
                denom: this.denom,
              })
              .catch((e) => {
                throw new p.ExplorerRequestError({
                  type: f.GET_TRANSACTIONS_TYPE,
                  error: e,
                  instance: this,
                });
              })),
            this.transactions
          );
        }
        async getTransactionBlueprint(e) {
          let { type: t, ...n } = e;
          if (m.CosmosTxTypes[t]) return m.CosmosTxTypes[t](n);
          if (t === f.ATOM_MSG_TYPES.Withdraw)
            return this.getProvider("send2").getTransactionRewardsBlueprint({
              from: this.address,
              ...n,
            });
          throw new Error(`[${this.ticker}] no ${t} tx blueprint found`);
        }
        async sign(e, t, n) {
          (void 0 === n && (n = ""),
            (this.signer =
              this.signer ||
              (await a.SigningStargateClient.offline(this.wallet))));
          const r = await this.getProvider("send2").getSignerData(this.address);
          return this.signer.signDirect(this.address, e, t, n, r);
        }
        createTransaction(e) {
          let { address: t, amount: n, memo: r = "" } = e;
          const o = [
              {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: {
                  fromAddress: this.address,
                  toAddress: t,
                  amount: [{ denom: this.denom, amount: n }],
                },
              },
            ],
            i = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.sendFeeGas,
            };
          return this.sign(o, i, r);
        }
        async sendTransaction(e) {
          const t = u.TxRaw.encode(e).finish();
          return this.getProvider("send2").sendTransaction(t);
        }
        createDelegationTransaction(e, t, n) {
          void 0 === n && (n = "");
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
            o = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.stakingFeeGas,
            };
          return this.sign(r, o, n);
        }
        createRedelegationTransaction(e, t, n, r) {
          void 0 === r && (r = "");
          const o = [
              {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: {
                  delegatorAddress: this.address,
                  validatorSrcAddress: e,
                  validatorDstAddress: t,
                  amount: { denom: this.denom, amount: n },
                },
              },
            ],
            i = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.reStakingFeeGas,
            };
          return this.sign(o, i);
        }
        createUnbondingDelegationTransaction(e, t) {
          const n = [
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
          return this.sign(n, r);
        }
        async createWithdrawDelegationTransaction(e) {
          const t = await this.getProvider("balance2").getValidators(
              this.address,
            ),
            n = t.map((e) => ({
              typeUrl:
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
              value: { delegatorAddress: this.address, validatorAddress: e },
            })),
            r = {
              amount: [{ denom: this.denom, amount: this.fee }],
              gas: this.claimFeeGas,
            };
          return this.sign(n, r);
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
            n = this.calculateStakedBalance(
              await e.getStakedDelegations(this.address),
              t,
            );
          return {
            rewards: this.calculateRewards(
              await e.getRewardsBalance(this.address),
            ),
            staked: n,
            unstaking: this.calculateUnstakingBalance(
              await e.getUnbondingDelegations(this.address),
            ),
            validators: t,
          };
        }
        async calculateAvailableForStake(e) {
          let { balance: t } = e;
          const n = t
            .toBN()
            .sub(new this.BN(this.fee))
            .sub(new this.BN(this.reserveForStake));
          return new d.default(n.isNeg() ? "0" : n, this);
        }
        calculateTotal(e) {
          let { balance: t, staked: n, unstaking: r, rewards: o } = e;
          return new d.default(
            t.toBN().add(n.toBN()).add(r.toBN()).add(o.toBN()).toString(),
            this,
          );
        }
        calculateAvailableBalance(e) {
          var t, n;
          return new d.default(
            null !==
              (t =
                null === (n = e.find((e) => e.denom === this.denom)) ||
                void 0 === n
                  ? void 0
                  : n.amount) && void 0 !== t
              ? t
              : "0",
            this,
          );
        }
        calculateRewards(e) {
          var t, n, r;
          return new d.default(
            null !==
              (t =
                null === e ||
                void 0 === e ||
                null === (n = e.find((e) => e.denom === this.denom)) ||
                void 0 === n ||
                null === (r = n.amount) ||
                void 0 === r
                  ? void 0
                  : r.split(".")[0]) && void 0 !== t
              ? t
              : "0",
            this,
          );
        }
        calculateStakedBalance(e, t) {
          return new d.default(
            (null === e || void 0 === e ? void 0 : e.length) > 0
              ? this.getTotalDelegations(e, t).toString()
              : "0",
            this,
          );
        }
        calculateUnstakingBalance(e) {
          const t = { validators: {} };
          if ((null === e || void 0 === e ? void 0 : e.length) > 0) {
            const n = e.reduce((e, n) => {
              let { entries: r, validator_address: o } = n;
              const i = o;
              return (
                (t.validators[i] = r
                  .map((e) => new this.BN(e.balance.split(".")[0]))
                  .reduce((e, t) => e.add(new this.BN(t)), new this.BN("0"))),
                e.add(t.validators[i])
              );
            }, new this.BN("0"));
            t.total = n.toString().split(".")[0];
          }
          return new d.default(t.total || "0", this);
        }
        getTotalDelegations(e, t) {
          return e.reduce((e, n) => {
            let { delegation: r, balance: o } = n;
            return (
              (t[r.validator_address] = {
                address: r.validator_address,
                staked: new d.default(new this.BN(o.amount), this),
              }),
              e.add(new this.BN(o.amount))
            );
          }, new this.BN("0"));
        }
        setPrivateKey(e, t) {
          w(E, this, e);
          const n = (0, c.stringToPath)(this.derivation);
          l.DirectSecp256k1HdWallet.fromMnemonic(t, {
            hdPaths: [n],
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
    2775: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e[(e["UNSIGNED_TX"] = 0)] = "UNSIGNED_TX"),
            (e[(e["GLOBAL_XPUB"] = 1)] = "GLOBAL_XPUB"));
        })(t.GlobalTypes || (t.GlobalTypes = {})),
        (t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"]),
        (function (e) {
          ((e[(e["NON_WITNESS_UTXO"] = 0)] = "NON_WITNESS_UTXO"),
            (e[(e["WITNESS_UTXO"] = 1)] = "WITNESS_UTXO"),
            (e[(e["PARTIAL_SIG"] = 2)] = "PARTIAL_SIG"),
            (e[(e["SIGHASH_TYPE"] = 3)] = "SIGHASH_TYPE"),
            (e[(e["REDEEM_SCRIPT"] = 4)] = "REDEEM_SCRIPT"),
            (e[(e["WITNESS_SCRIPT"] = 5)] = "WITNESS_SCRIPT"),
            (e[(e["BIP32_DERIVATION"] = 6)] = "BIP32_DERIVATION"),
            (e[(e["FINAL_SCRIPTSIG"] = 7)] = "FINAL_SCRIPTSIG"),
            (e[(e["FINAL_SCRIPTWITNESS"] = 8)] = "FINAL_SCRIPTWITNESS"),
            (e[(e["POR_COMMITMENT"] = 9)] = "POR_COMMITMENT"),
            (e[(e["TAP_KEY_SIG"] = 19)] = "TAP_KEY_SIG"),
            (e[(e["TAP_SCRIPT_SIG"] = 20)] = "TAP_SCRIPT_SIG"),
            (e[(e["TAP_LEAF_SCRIPT"] = 21)] = "TAP_LEAF_SCRIPT"),
            (e[(e["TAP_BIP32_DERIVATION"] = 22)] = "TAP_BIP32_DERIVATION"),
            (e[(e["TAP_INTERNAL_KEY"] = 23)] = "TAP_INTERNAL_KEY"),
            (e[(e["TAP_MERKLE_ROOT"] = 24)] = "TAP_MERKLE_ROOT"));
        })(t.InputTypes || (t.InputTypes = {})),
        (t.INPUT_TYPE_NAMES = [
          "nonWitnessUtxo",
          "witnessUtxo",
          "partialSig",
          "sighashType",
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "finalScriptSig",
          "finalScriptWitness",
          "porCommitment",
          "tapKeySig",
          "tapScriptSig",
          "tapLeafScript",
          "tapBip32Derivation",
          "tapInternalKey",
          "tapMerkleRoot",
        ]),
        (function (e) {
          ((e[(e["REDEEM_SCRIPT"] = 0)] = "REDEEM_SCRIPT"),
            (e[(e["WITNESS_SCRIPT"] = 1)] = "WITNESS_SCRIPT"),
            (e[(e["BIP32_DERIVATION"] = 2)] = "BIP32_DERIVATION"),
            (e[(e["TAP_INTERNAL_KEY"] = 5)] = "TAP_INTERNAL_KEY"),
            (e[(e["TAP_TREE"] = 6)] = "TAP_TREE"),
            (e[(e["TAP_BIP32_DERIVATION"] = 7)] = "TAP_BIP32_DERIVATION"));
        })(t.OutputTypes || (t.OutputTypes = {})),
        (t.OUTPUT_TYPE_NAMES = [
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "tapInternalKey",
          "tapTree",
          "tapBip32Derivation",
        ]));
    },
    2853: function (e, t, n) {
      "use strict";
      var r = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return o.default;
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
            return s.default;
          },
        }));
      var o = r(n(2886)),
        i = r(n(2887)),
        s = r(n(2888));
    },
    2886: function (e, t, n) {
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
    2887: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = (e) =>
        class extends e {
          getTransactionsModifiedResponse(e, t, n) {
            return (
              void 0 === n && (n = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(e) },
                super.getTransactionsModifiedResponse(e, t, n),
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
              n = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === n[t] ? "transfer" : n[t];
          }
        };
      t.default = r;
    },
    2888: function (e, t, n) {
      "use strict";
      var r = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(81));
      const i = ["reward", "unfreeze", "freeze", "vote"],
        s = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: n,
                tokens: r,
                type: s,
                scriptPubKey: a,
              } = e;
              const u = await this.getTransaction(t, n, r);
              (await o.default.filterAndUpdateTransactions([u]),
                "receive" === s &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${u.walletid}::new-socket-tx`,
                    { unconfirmedTx: u },
                  ),
                "confirm" === s &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    u.walletid,
                    u,
                    u.ticker,
                  ),
                i.forEach((e) => {
                  s === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${s}`,
                      u || {},
                    );
                }));
            }
          };
      t.default = s;
    },
    2898: function (e, t, n) {
      var r = n(46).Buffer;
      function o(e) {
        if (e.length < 8) return !1;
        if (e.length > 72) return !1;
        if (48 !== e[0]) return !1;
        if (e[1] !== e.length - 2) return !1;
        if (2 !== e[2]) return !1;
        var t = e[3];
        if (0 === t) return !1;
        if (5 + t >= e.length) return !1;
        if (2 !== e[4 + t]) return !1;
        var n = e[5 + t];
        return (
          0 !== n &&
          6 + t + n === e.length &&
          !(128 & e[4]) &&
          !(t > 1 && 0 === e[4] && !(128 & e[5])) &&
          !(128 & e[t + 6]) &&
          !(n > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
        );
      }
      function i(e) {
        if (e.length < 8) throw new Error("DER sequence length is too short");
        if (e.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== e[0]) throw new Error("Expected DER sequence");
        if (e[1] !== e.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== e[2]) throw new Error("Expected DER integer");
        var t = e[3];
        if (0 === t) throw new Error("R length is zero");
        if (5 + t >= e.length) throw new Error("R length is too long");
        if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
        var n = e[5 + t];
        if (0 === n) throw new Error("S length is zero");
        if (6 + t + n !== e.length) throw new Error("S length is invalid");
        if (128 & e[4]) throw new Error("R value is negative");
        if (t > 1 && 0 === e[4] && !(128 & e[5]))
          throw new Error("R value excessively padded");
        if (128 & e[t + 6]) throw new Error("S value is negative");
        if (n > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
          throw new Error("S value excessively padded");
        return { r: e.slice(4, 4 + t), s: e.slice(6 + t) };
      }
      function s(e, t) {
        var n = e.length,
          o = t.length;
        if (0 === n) throw new Error("R length is zero");
        if (0 === o) throw new Error("S length is zero");
        if (n > 33) throw new Error("R length is too long");
        if (o > 33) throw new Error("S length is too long");
        if (128 & e[0]) throw new Error("R value is negative");
        if (128 & t[0]) throw new Error("S value is negative");
        if (n > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("R value excessively padded");
        if (o > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("S value excessively padded");
        var i = r.allocUnsafe(6 + n + o);
        return (
          (i[0] = 48),
          (i[1] = i.length - 2),
          (i[2] = 2),
          (i[3] = e.length),
          e.copy(i, 4),
          (i[4 + n] = 2),
          (i[5 + n] = t.length),
          t.copy(i, 6 + n),
          i
        );
      }
      e.exports = { check: o, decode: i, encode: s };
    },
    2918: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = 9007199254740991;
        function r(e) {
          if (e < 0 || e > n || e % 1 !== 0)
            throw new RangeError("value out of range");
        }
        function o(t, n, i) {
          if ((r(t), n || (n = e.allocUnsafe(s(t))), !e.isBuffer(n)))
            throw new TypeError("buffer must be a Buffer instance");
          return (
            i || (i = 0),
            t < 253
              ? (n.writeUInt8(t, i), Object.assign(o, { bytes: 1 }))
              : t <= 65535
                ? (n.writeUInt8(253, i),
                  n.writeUInt16LE(t, i + 1),
                  Object.assign(o, { bytes: 3 }))
                : t <= 4294967295
                  ? (n.writeUInt8(254, i),
                    n.writeUInt32LE(t, i + 1),
                    Object.assign(o, { bytes: 5 }))
                  : (n.writeUInt8(255, i),
                    n.writeUInt32LE(t >>> 0, i + 1),
                    n.writeUInt32LE((t / 4294967296) | 0, i + 5),
                    Object.assign(o, { bytes: 9 })),
            n
          );
        }
        function i(t, n) {
          if (!e.isBuffer(t))
            throw new TypeError("buffer must be a Buffer instance");
          n || (n = 0);
          const o = t.readUInt8(n);
          if (o < 253) return (Object.assign(i, { bytes: 1 }), o);
          if (253 === o)
            return (Object.assign(i, { bytes: 3 }), t.readUInt16LE(n + 1));
          if (254 === o)
            return (Object.assign(i, { bytes: 5 }), t.readUInt32LE(n + 1));
          {
            Object.assign(i, { bytes: 9 });
            const e = t.readUInt32LE(n + 1),
              o = t.readUInt32LE(n + 5),
              s = 4294967296 * o + e;
            return (r(s), s);
          }
        }
        function s(e) {
          return (r(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9);
        }
        ((t.encode = o), (t.decode = i), (t.encodingLength = s));
      }).call(this, n(2).Buffer);
    },
    2977: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = n(3090),
          i = r(n(129)),
          s = n(19),
          a = n(27),
          u = n(4),
          c = n(2853);
        const l = 50;
        class CosmosNodeExplorerV2 extends (0,
        c.CosmosNodeTransactionTypeMixin)(i.default) {
          constructor() {
            (super(...arguments),
              (this.defaultTxLimit = l),
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
              throw new s.ExplorerRequestError({
                type: a.SEND_TRANSACTION_TYPE,
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
            const n = await this.request(
              `staking/delegators/${e}/delegations`,
              "post",
              t,
            );
            if (n.value && "0" === n.value.account_number)
              throw new s.ExplorerRequestError({
                type: a.SEND_TRANSACTION_TYPE,
                error: new Error(n),
                instance: this,
              });
            return n.value;
          }
          async getTransaction(e, t) {
            const n = await this.request("txs/" + t);
            return this.modifyTransactionResponse(n, e);
          }
          async getTransactions(e) {
            let { address: t, limit: n, denom: r } = e;
            const i = await this.request(
                `/cosmos/tx/v1beta1/txs?events=message.sender=%27${t}%27&query=message.sender=%27${t}%27`,
              ),
              s = await this.request(
                `/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${t}%27&query=transfer.recipient=%27${t}%27`,
              ),
              a = new Map();
            (i.tx_responses.forEach((e) => {
              a.set(e.txhash, { ...e, direction: !1 });
            }),
              s.tx_responses.forEach((e) => {
                a.set(e.txhash, { ...e, direction: !0 });
              }));
            const u = [];
            for (const [, o] of a.entries()) u.push(o);
            u.sort((e, t) => Number(e.height) < Number(t.height));
            const c = u
                .flatMap((e) => [
                  ...e.tx.body.messages.map((t) => {
                    var n, r, i;
                    let s;
                    const a =
                      null === (n = e.tx) ||
                      void 0 === n ||
                      null === (r = n.auth_info) ||
                      void 0 === r ||
                      null === (i = r.fee) ||
                      void 0 === i
                        ? void 0
                        : i.amount;
                    var u, c, l;
                    a && Array.isArray(e.tx.auth_info.fee.amount)
                      ? (s = e.tx.auth_info.fee.amount.reduce(
                          (e, t) => e + parseInt(t.amount, 10),
                          0,
                        ))
                      : (s =
                          null === (u = e.tx) ||
                          void 0 === u ||
                          null === (c = u.auth_info) ||
                          void 0 === c ||
                          null === (l = c.fee) ||
                          void 0 === l
                            ? void 0
                            : l.amount);
                    return {
                      ...t,
                      ...(0, o.pick)(
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
                      fee: s,
                    };
                  }),
                ])
                .filter(
                  (e) =>
                    "MsgBeginRedelegate" !== this.getTransactionNativeType(e),
                ),
              l = (e) => {
                let { "@type": t, txhash: n } = e;
                return `${n}/${t}`;
              };
            return this.modifyTransactionsResponse((0, o.uniqBy)(c, l), t);
          }
          getTxValue(e, t) {
            var n;
            const r = Array.isArray(t.amount)
              ? t.amount[0].amount
              : (null === (n = t.amount) || void 0 === n ? void 0 : n.amount) ||
                t.withdraw_amount ||
                this.getAmountFromLogs(t);
            return this.wallet.toCurrencyUnit(r);
          }
          getAmountFromLogs(e) {
            return (e.logs || [])
              .reduce((e, t) => {
                let { events: n } = t;
                return e.concat(n || []);
              }, [])
              .filter((e) => {
                let { type: t } = e;
                return "transfer" === t;
              })
              .reduce((e, t) => {
                let { attributes: n } = t;
                return e.concat(n);
              }, [])
              .filter((e) => {
                let { key: t } = e;
                return "amount" === t;
              })
              .reduce((e, t) => {
                let { value: n } = t;
                return e + parseInt((n || "0").replace(/\D/gi, ""), 10);
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
            const { sequence: t = "0", account_number: n } =
                await this.getAuth(e),
              r = this.chainId || (await this.getChainId());
            return { sequence: t, accountNumber: n, chainId: r };
          }
          async getValidators(e) {
            const { validators: t } = await this.request(
              `cosmos/distribution/v1beta1/delegators/${e}/validators`,
            );
            return t.map(u.sanitizeString);
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
      }).call(this, n(2).Buffer);
    },
    3111: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(2775),
        o = n(3710),
        i = n(3711),
        s = n(3712),
        a = n(3713),
        u = n(3714),
        c = n(3715),
        l = n(3716),
        d = n(3717),
        f = n(3718),
        p = n(3719),
        h = n(3720),
        y = n(3721),
        g = n(3722),
        m = n(3723),
        b = n(3308),
        v = n(3724),
        S = n(3725),
        I = n(3726),
        w = n(3727),
        k = n(3728),
        E = { unsignedTx: i, globalXpub: o, checkPubkey: v.makeChecker([]) };
      t.globals = E;
      const T = {
        nonWitnessUtxo: u,
        partialSig: c,
        sighashType: d,
        finalScriptSig: s,
        finalScriptWitness: a,
        porCommitment: l,
        witnessUtxo: g,
        bip32Derivation: b.makeConverter(r.InputTypes.BIP32_DERIVATION),
        redeemScript: S.makeConverter(r.InputTypes.REDEEM_SCRIPT),
        witnessScript: k.makeConverter(r.InputTypes.WITNESS_SCRIPT),
        checkPubkey: v.makeChecker([
          r.InputTypes.PARTIAL_SIG,
          r.InputTypes.BIP32_DERIVATION,
        ]),
        tapKeySig: f,
        tapScriptSig: y,
        tapLeafScript: p,
        tapBip32Derivation: I.makeConverter(r.InputTypes.TAP_BIP32_DERIVATION),
        tapInternalKey: w.makeConverter(r.InputTypes.TAP_INTERNAL_KEY),
        tapMerkleRoot: h,
      };
      t.inputs = T;
      const _ = {
        bip32Derivation: b.makeConverter(r.OutputTypes.BIP32_DERIVATION),
        redeemScript: S.makeConverter(r.OutputTypes.REDEEM_SCRIPT),
        witnessScript: k.makeConverter(r.OutputTypes.WITNESS_SCRIPT),
        checkPubkey: v.makeChecker([r.OutputTypes.BIP32_DERIVATION]),
        tapBip32Derivation: I.makeConverter(r.OutputTypes.TAP_BIP32_DERIVATION),
        tapTree: m,
        tapInternalKey: w.makeConverter(r.OutputTypes.TAP_INTERNAL_KEY),
      };
      t.outputs = _;
    },
    3112: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2918);
        function o(e) {
          if (e.length < 1) return e;
          let t = e.length - 1,
            n = 0;
          for (let r = 0; r < e.length / 2; r++)
            ((n = e[r]), (e[r] = e[t]), (e[t] = n), t--);
          return e;
        }
        function i(t) {
          const n = t.map(s);
          return (n.push(e.from([0])), e.concat(n));
        }
        function s(t) {
          const n = t.key.length,
            o = t.value.length,
            i = r.encodingLength(n),
            s = r.encodingLength(o),
            a = e.allocUnsafe(i + n + s + o);
          return (
            r.encode(n, a, 0),
            t.key.copy(a, i),
            r.encode(o, a, i + n),
            t.value.copy(a, i + n + s),
            a
          );
        }
        function a(e, t) {
          if ("number" !== typeof e)
            throw new Error("cannot write a non-number as a number");
          if (e < 0)
            throw new Error(
              "specified a negative value for writing an unsigned value",
            );
          if (e > t) throw new Error("RangeError: value out of range");
          if (Math.floor(e) !== e)
            throw new Error("value has a fractional component");
        }
        function u(e, t) {
          const n = e.readUInt32LE(t);
          let r = e.readUInt32LE(t + 4);
          return ((r *= 4294967296), a(r + n, 9007199254740991), r + n);
        }
        function c(e, t, n) {
          return (
            a(t, 9007199254740991),
            e.writeInt32LE(-1 & t, n),
            e.writeUInt32LE(Math.floor(t / 4294967296), n + 4),
            n + 8
          );
        }
        ((t.range = (e) => [...Array(e).keys()]),
          (t.reverseBuffer = o),
          (t.keyValsToBuffer = i),
          (t.keyValToBuffer = s),
          (t.readUInt64LE = u),
          (t.writeUInt64LE = c));
      }).call(this, n(2).Buffer);
    },
    3177: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(3178);
      ((t.fromSeed = r.fromSeed),
        (t.fromBase58 = r.fromBase58),
        (t.fromPublicKey = r.fromPublicKey),
        (t.fromPrivateKey = r.fromPrivateKey));
    },
    3178: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(3179),
          o = n(2792),
          i = n(2819),
          s = n(2758),
          a = n(2838),
          u = s.BufferN(32),
          c = s.compile({
            wif: s.UInt8,
            bip32: { public: s.UInt32, private: s.UInt32 },
          }),
          l = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bc",
            bip32: { public: 76067358, private: 76066276 },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128,
          },
          d = 2147483648,
          f = Math.pow(2, 31) - 1;
        function p(e) {
          return s.String(e) && null !== e.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
        }
        function h(e) {
          return s.UInt32(e) && e <= f;
        }
        class BIP32 {
          constructor(e, t, n, r, o, i, a) {
            (void 0 === o && (o = 0),
              void 0 === i && (i = 0),
              void 0 === a && (a = 0),
              (this.__D = e),
              (this.__Q = t),
              (this.chainCode = n),
              (this.network = r),
              (this.__DEPTH = o),
              (this.__INDEX = i),
              (this.__PARENT_FINGERPRINT = a),
              s(c, r),
              (this.lowR = !1));
          }
          get depth() {
            return this.__DEPTH;
          }
          get index() {
            return this.__INDEX;
          }
          get parentFingerprint() {
            return this.__PARENT_FINGERPRINT;
          }
          get publicKey() {
            return (
              void 0 === this.__Q &&
                (this.__Q = i.pointFromScalar(this.__D, !0)),
              this.__Q
            );
          }
          get privateKey() {
            return this.__D;
          }
          get identifier() {
            return r.hash160(this.publicKey);
          }
          get fingerprint() {
            return this.identifier.slice(0, 4);
          }
          get compressed() {
            return !0;
          }
          isNeutered() {
            return void 0 === this.__D;
          }
          neutered() {
            return v(
              this.publicKey,
              this.chainCode,
              this.network,
              this.depth,
              this.index,
              this.parentFingerprint,
            );
          }
          toBase58() {
            const t = this.network,
              n = this.isNeutered() ? t.bip32.public : t.bip32.private,
              r = e.allocUnsafe(78);
            return (
              r.writeUInt32BE(n, 0),
              r.writeUInt8(this.depth, 4),
              r.writeUInt32BE(this.parentFingerprint, 5),
              r.writeUInt32BE(this.index, 9),
              this.chainCode.copy(r, 13),
              this.isNeutered()
                ? this.publicKey.copy(r, 45)
                : (r.writeUInt8(0, 45), this.privateKey.copy(r, 46)),
              o.encode(r)
            );
          }
          toWIF() {
            if (!this.privateKey) throw new TypeError("Missing private key");
            return a.encode(this.network.wif, this.privateKey, !0);
          }
          derive(t) {
            s(s.UInt32, t);
            const n = t >= d,
              o = e.allocUnsafe(37);
            if (n) {
              if (this.isNeutered())
                throw new TypeError(
                  "Missing private key for hardened child key",
                );
              ((o[0] = 0), this.privateKey.copy(o, 1), o.writeUInt32BE(t, 33));
            } else (this.publicKey.copy(o, 0), o.writeUInt32BE(t, 33));
            const a = r.hmacSHA512(this.chainCode, o),
              u = a.slice(0, 32),
              c = a.slice(32);
            if (!i.isPrivate(u)) return this.derive(t + 1);
            let l;
            if (this.isNeutered()) {
              const e = i.pointAddScalar(this.publicKey, u, !0);
              if (null === e) return this.derive(t + 1);
              l = v(
                e,
                c,
                this.network,
                this.depth + 1,
                t,
                this.fingerprint.readUInt32BE(0),
              );
            } else {
              const e = i.privateAdd(this.privateKey, u);
              if (null == e) return this.derive(t + 1);
              l = m(
                e,
                c,
                this.network,
                this.depth + 1,
                t,
                this.fingerprint.readUInt32BE(0),
              );
            }
            return l;
          }
          deriveHardened(e) {
            return (s(h, e), this.derive(e + d));
          }
          derivePath(e) {
            s(p, e);
            let t = e.split("/");
            if ("m" === t[0]) {
              if (this.parentFingerprint)
                throw new TypeError("Expected master, got child");
              t = t.slice(1);
            }
            return t.reduce((e, t) => {
              let n;
              return "'" === t.slice(-1)
                ? ((n = parseInt(t.slice(0, -1), 10)), e.deriveHardened(n))
                : ((n = parseInt(t, 10)), e.derive(n));
            }, this);
          }
          sign(t, n) {
            if (!this.privateKey) throw new Error("Missing private key");
            if ((void 0 === n && (n = this.lowR), !1 === n))
              return i.sign(t, this.privateKey);
            {
              let n = i.sign(t, this.privateKey);
              const r = e.alloc(32, 0);
              let o = 0;
              while (n[0] > 127)
                (o++,
                  r.writeUIntLE(o, 0, 6),
                  (n = i.signWithEntropy(t, this.privateKey, r)));
              return n;
            }
          }
          verify(e, t) {
            return i.verify(e, this.publicKey, t);
          }
        }
        function y(e, t) {
          const n = o.decode(e);
          if (78 !== n.length) throw new TypeError("Invalid buffer length");
          t = t || l;
          const r = n.readUInt32BE(0);
          if (r !== t.bip32.private && r !== t.bip32.public)
            throw new TypeError("Invalid network version");
          const i = n[4],
            s = n.readUInt32BE(5);
          if (0 === i && 0 !== s)
            throw new TypeError("Invalid parent fingerprint");
          const a = n.readUInt32BE(9);
          if (0 === i && 0 !== a) throw new TypeError("Invalid index");
          const u = n.slice(13, 45);
          let c;
          if (r === t.bip32.private) {
            if (0 !== n.readUInt8(45))
              throw new TypeError("Invalid private key");
            const e = n.slice(46, 78);
            c = m(e, u, t, i, a, s);
          } else {
            const e = n.slice(45, 78);
            c = v(e, u, t, i, a, s);
          }
          return c;
        }
        function g(e, t, n) {
          return m(e, t, n);
        }
        function m(e, t, n, r, o, a) {
          if (
            (s(
              { privateKey: u, chainCode: u },
              { privateKey: e, chainCode: t },
            ),
            (n = n || l),
            !i.isPrivate(e))
          )
            throw new TypeError("Private key not in range [1, n)");
          return new BIP32(e, void 0, t, n, r, o, a);
        }
        function b(e, t, n) {
          return v(e, t, n);
        }
        function v(e, t, n, r, o, a) {
          if (
            (s(
              { publicKey: s.BufferN(33), chainCode: u },
              { publicKey: e, chainCode: t },
            ),
            (n = n || l),
            !i.isPoint(e))
          )
            throw new TypeError("Point is not on the curve");
          return new BIP32(void 0, e, t, n, r, o, a);
        }
        function S(t, n) {
          if ((s(s.Buffer, t), t.length < 16))
            throw new TypeError("Seed should be at least 128 bits");
          if (t.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          n = n || l;
          const o = r.hmacSHA512(e.from("Bitcoin seed", "utf8"), t),
            i = o.slice(0, 32),
            a = o.slice(32);
          return g(i, a, n);
        }
        ((t.fromBase58 = y),
          (t.fromPrivateKey = g),
          (t.fromPublicKey = b),
          (t.fromSeed = S));
      }).call(this, n(2).Buffer);
    },
    3179: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(797),
        o = n(2828);
      function i(e) {
        const t = r("sha256").update(e).digest();
        try {
          return r("rmd160").update(t).digest();
        } catch (n) {
          return r("ripemd160").update(t).digest();
        }
      }
      function s(e, t) {
        return o("sha512", e).update(t).digest();
      }
      ((t.hash160 = i), (t.hmacSHA512 = s));
    },
    3307: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        r(n(3709)),
        r(n(3729)));
    },
    3308: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = (e) => [...Array(e).keys()],
          r = (e) =>
            (33 === e.length && [2, 3].includes(e[0])) ||
            (65 === e.length && 4 === e[0]);
        function o(t, o) {
          function i(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode bip32Derivation with key 0x" +
                  e.key.toString("hex"),
              );
            const r = e.key.slice(1);
            if (!o(r))
              throw new Error(
                "Decode Error: bip32Derivation has invalid pubkey in key 0x" +
                  e.key.toString("hex"),
              );
            if ((e.value.length / 4) % 1 !== 0)
              throw new Error(
                "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4",
              );
            const i = {
              masterFingerprint: e.value.slice(0, 4),
              pubkey: r,
              path: "m",
            };
            for (const t of n(e.value.length / 4 - 1)) {
              const n = e.value.readUInt32LE(4 * t + 4),
                r = !!(2147483648 & n),
                o = 2147483647 & n;
              i.path += "/" + o.toString(10) + (r ? "'" : "");
            }
            return i;
          }
          function s(n) {
            const r = e.from([t]),
              o = e.concat([r, n.pubkey]),
              i = n.path.split("/"),
              s = e.allocUnsafe(4 * i.length);
            n.masterFingerprint.copy(s, 0);
            let a = 4;
            return (
              i.slice(1).forEach((e) => {
                const t = "'" === e.slice(-1);
                let n = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                (t && (n += 2147483648), s.writeUInt32LE(n, a), (a += 4));
              }),
              { key: o, value: s }
            );
          }
          void 0 === o && (o = r);
          const a =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
          function u(t) {
            return (
              e.isBuffer(t.pubkey) &&
              e.isBuffer(t.masterFingerprint) &&
              "string" === typeof t.path &&
              o(t.pubkey) &&
              4 === t.masterFingerprint.length
            );
          }
          function c(e, t, n) {
            const r = t.pubkey.toString("hex");
            return (
              !n.has(r) &&
              (n.add(r),
              0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
            );
          }
          return {
            decode: i,
            encode: s,
            check: u,
            expected: a,
            canAddToArray: c,
          };
        }
        t.makeConverter = o;
      }).call(this, n(2).Buffer);
    },
    3309: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(3111);
        function o(e, t) {
          const n = e[t];
          if (void 0 === n) throw new Error("No input #" + t);
          return n;
        }
        function i(e, t) {
          const n = e[t];
          if (void 0 === n) throw new Error("No output #" + t);
          return n;
        }
        function s(e, t, n) {
          if (e.key[0] < n)
            throw new Error(
              "Use the method for your specific key instead of addUnknownKeyVal*",
            );
          if (t && 0 !== t.filter((t) => t.key.equals(e.key)).length)
            throw new Error("Duplicate Key: " + e.key.toString("hex"));
        }
        function a(e) {
          let t = 0;
          return (
            Object.keys(e).forEach((e) => {
              Number(isNaN(Number(e))) && t++;
            }),
            t
          );
        }
        function u(e, t) {
          let n = !1;
          if (t.nonWitnessUtxo || t.witnessUtxo) {
            const e = !!t.redeemScript,
              r = !!t.witnessScript,
              o = !e || !!t.finalScriptSig,
              i = !r || !!t.finalScriptWitness,
              s = !!t.finalScriptSig || !!t.finalScriptWitness;
            n = o && i && s;
          }
          if (!1 === n)
            throw new Error(
              `Input #${e} has too much or too little data to clean`,
            );
        }
        function c(e, t, n, r) {
          throw new Error(
            `Data for ${e} key ${t} is incorrect: Expected ${n} and got ${JSON.stringify(r)}`,
          );
        }
        function l(e) {
          return (t, n) => {
            for (const o of Object.keys(t)) {
              const i = t[o],
                {
                  canAdd: s,
                  canAddToArray: a,
                  check: u,
                  expected: l,
                } = r[e + "s"][o] || {},
                d = !!a;
              if (u)
                if (d) {
                  if (!Array.isArray(i) || (n[o] && !Array.isArray(n[o])))
                    throw new Error(`Key type ${o} must be an array`);
                  i.every(u) || c(e, o, l, i);
                  const t = n[o] || [],
                    r = new Set();
                  if (!i.every((e) => a(t, e, r)))
                    throw new Error("Can not add duplicate data to array");
                  n[o] = t.concat(i);
                } else {
                  if ((u(i) || c(e, o, l, i), !s(n, i)))
                    throw new Error("Can not add duplicate data to " + e);
                  n[o] = i;
                }
            }
          };
        }
        function d(e, n) {
          const r = e.length - 1,
            i = o(e, r);
          t.updateInput(n, i);
        }
        function f(e, n) {
          const r = e.length - 1,
            o = i(e, r);
          t.updateOutput(n, o);
        }
        function p(t, n) {
          if (!e.isBuffer(n) || n.length < 4)
            throw new Error("Set Version: Invalid Transaction");
          return (n.writeUInt32LE(t, 0), n);
        }
        function h(t, n) {
          if (!e.isBuffer(n) || n.length < 4)
            throw new Error("Set Locktime: Invalid Transaction");
          return (n.writeUInt32LE(t, n.length - 4), n);
        }
        ((t.checkForInput = o),
          (t.checkForOutput = i),
          (t.checkHasKey = s),
          (t.getEnumLength = a),
          (t.inputCheckUncleanFinalized = u),
          (t.updateGlobal = l("global")),
          (t.updateInput = l("input")),
          (t.updateOutput = l("output")),
          (t.addInputAttributes = d),
          (t.addOutputAttributes = f),
          (t.defaultVersionSetter = p),
          (t.defaultLocktimeSetter = h));
      }).call(this, n(2).Buffer);
    },
    3587: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Any = t.protobufPackage = void 0));
        const o = r(n(2754)),
          i = r(n(2755));
        t.protobufPackage = "google.protobuf";
        const s = { typeUrl: "" };
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
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, s);
            o.value = new Uint8Array();
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.typeUrl = n.string();
                  break;
                case 2:
                  o.value = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
            return (
              (t.value = new Uint8Array()),
              void 0 !== e.typeUrl && null !== e.typeUrl
                ? (t.typeUrl = String(e.typeUrl))
                : (t.typeUrl = ""),
              void 0 !== e.value && null !== e.value && (t.value = c(e.value)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl),
              void 0 !== e.value &&
                (t.value = d(void 0 !== e.value ? e.value : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, s);
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
        var a = (() => {
          if ("undefined" !== typeof a) return a;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const u =
          a.atob || ((e) => a.Buffer.from(e, "base64").toString("binary"));
        function c(e) {
          const t = u(e),
            n = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
          return n;
        }
        const l =
          a.btoa || ((e) => a.Buffer.from(e, "binary").toString("base64"));
        function d(e) {
          const t = [];
          for (let n = 0; n < e.byteLength; ++n)
            t.push(String.fromCharCode(e[n]));
          return l(t.join(""));
        }
        i.default.util.Long !== o.default &&
          ((i.default.util.Long = o.default), i.default.configure());
      }).call(this, n(13));
    },
    3588: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompactBitArray = t.MultiSignature = t.protobufPackage = void 0));
        const o = r(n(2754)),
          i = r(n(2755));
        t.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const s = {};
        t.MultiSignature = {
          encode(e, t = i.default.Writer.create()) {
            for (const n of e.signatures) t.uint32(10).bytes(n);
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, s);
            o.signatures = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.signatures.push(n.bytes());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures) t.signatures.push(l(n));
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
            const t = Object.assign({}, s);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures) t.signatures.push(n);
            return t;
          },
        };
        const a = { extraBitsStored: 0 };
        t.CompactBitArray = {
          encode(e, t = i.default.Writer.create()) {
            return (
              0 !== e.extraBitsStored && t.uint32(8).uint32(e.extraBitsStored),
              0 !== e.elems.length && t.uint32(18).bytes(e.elems),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, a);
            o.elems = new Uint8Array();
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.extraBitsStored = n.uint32();
                  break;
                case 2:
                  o.elems = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              (t.elems = new Uint8Array()),
              void 0 !== e.extraBitsStored && null !== e.extraBitsStored
                ? (t.extraBitsStored = Number(e.extraBitsStored))
                : (t.extraBitsStored = 0),
              void 0 !== e.elems && null !== e.elems && (t.elems = l(e.elems)),
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
            const t = Object.assign({}, a);
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
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const c =
          u.atob || ((e) => u.Buffer.from(e, "base64").toString("binary"));
        function l(e) {
          const t = c(e),
            n = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
          return n;
        }
        const d =
          u.btoa || ((e) => u.Buffer.from(e, "binary").toString("base64"));
        function f(e) {
          const t = [];
          for (let n = 0; n < e.byteLength; ++n)
            t.push(String.fromCharCode(e[n]));
          return d(t.join(""));
        }
        i.default.util.Long !== o.default &&
          ((i.default.util.Long = o.default), i.default.configure());
      }).call(this, n(13));
    },
    3707: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(3708),
          o = n(3307),
          i = n(2775),
          s = n(3309);
        class Psbt {
          constructor(e) {
            ((this.inputs = []),
              (this.outputs = []),
              (this.globalMap = { unsignedTx: e }));
          }
          static fromBase64(t, n) {
            const r = e.from(t, "base64");
            return this.fromBuffer(r, n);
          }
          static fromHex(t, n) {
            const r = e.from(t, "hex");
            return this.fromBuffer(r, n);
          }
          static fromBuffer(e, t) {
            const n = o.psbtFromBuffer(e, t),
              r = new this(n.globalMap.unsignedTx);
            return (Object.assign(r, n), r);
          }
          toBase64() {
            const e = this.toBuffer();
            return e.toString("base64");
          }
          toHex() {
            const e = this.toBuffer();
            return e.toString("hex");
          }
          toBuffer() {
            return o.psbtToBuffer(this);
          }
          updateGlobal(e) {
            return (s.updateGlobal(e, this.globalMap), this);
          }
          updateInput(e, t) {
            const n = s.checkForInput(this.inputs, e);
            return (s.updateInput(t, n), this);
          }
          updateOutput(e, t) {
            const n = s.checkForOutput(this.outputs, e);
            return (s.updateOutput(t, n), this);
          }
          addUnknownKeyValToGlobal(e) {
            return (
              s.checkHasKey(
                e,
                this.globalMap.unknownKeyVals,
                s.getEnumLength(i.GlobalTypes),
              ),
              this.globalMap.unknownKeyVals ||
                (this.globalMap.unknownKeyVals = []),
              this.globalMap.unknownKeyVals.push(e),
              this
            );
          }
          addUnknownKeyValToInput(e, t) {
            const n = s.checkForInput(this.inputs, e);
            return (
              s.checkHasKey(t, n.unknownKeyVals, s.getEnumLength(i.InputTypes)),
              n.unknownKeyVals || (n.unknownKeyVals = []),
              n.unknownKeyVals.push(t),
              this
            );
          }
          addUnknownKeyValToOutput(e, t) {
            const n = s.checkForOutput(this.outputs, e);
            return (
              s.checkHasKey(
                t,
                n.unknownKeyVals,
                s.getEnumLength(i.OutputTypes),
              ),
              n.unknownKeyVals || (n.unknownKeyVals = []),
              n.unknownKeyVals.push(t),
              this
            );
          }
          addInput(e) {
            (this.globalMap.unsignedTx.addInput(e),
              this.inputs.push({ unknownKeyVals: [] }));
            const t = e.unknownKeyVals || [],
              n = this.inputs.length - 1;
            if (!Array.isArray(t))
              throw new Error("unknownKeyVals must be an Array");
            return (
              t.forEach((e) => this.addUnknownKeyValToInput(n, e)),
              s.addInputAttributes(this.inputs, e),
              this
            );
          }
          addOutput(e) {
            (this.globalMap.unsignedTx.addOutput(e),
              this.outputs.push({ unknownKeyVals: [] }));
            const t = e.unknownKeyVals || [],
              n = this.outputs.length - 1;
            if (!Array.isArray(t))
              throw new Error("unknownKeyVals must be an Array");
            return (
              t.forEach((e) => this.addUnknownKeyValToOutput(n, e)),
              s.addOutputAttributes(this.outputs, e),
              this
            );
          }
          clearFinalizedInput(e) {
            const t = s.checkForInput(this.inputs, e);
            s.inputCheckUncleanFinalized(e, t);
            for (const n of Object.keys(t))
              [
                "witnessUtxo",
                "nonWitnessUtxo",
                "finalScriptSig",
                "finalScriptWitness",
                "unknownKeyVals",
              ].includes(n) || delete t[n];
            return this;
          }
          combine() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const o = r.combine([this].concat(t));
            return (Object.assign(this, o), this);
          }
          getTransaction() {
            return this.globalMap.unsignedTx.toBuffer();
          }
        }
        t.Psbt = Psbt;
      }).call(this, n(2).Buffer);
    },
    3708: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(3307);
      function o(e) {
        const t = e[0],
          n = r.psbtToKeyVals(t),
          o = e.slice(1);
        if (0 === o.length) throw new Error("Combine: Nothing to combine");
        const u = s(t);
        if (void 0 === u) throw new Error("Combine: Self missing transaction");
        const c = a(n.globalKeyVals),
          l = n.inputKeyVals.map(a),
          d = n.outputKeyVals.map(a);
        for (const f of o) {
          const e = s(f);
          if (void 0 === e || !e.toBuffer().equals(u.toBuffer()))
            throw new Error(
              "Combine: One of the Psbts does not have the same transaction.",
            );
          const t = r.psbtToKeyVals(f),
            o = a(t.globalKeyVals);
          o.forEach(i(c, n.globalKeyVals, t.globalKeyVals));
          const p = t.inputKeyVals.map(a);
          p.forEach((e, r) =>
            e.forEach(i(l[r], n.inputKeyVals[r], t.inputKeyVals[r])),
          );
          const h = t.outputKeyVals.map(a);
          h.forEach((e, r) =>
            e.forEach(i(d[r], n.outputKeyVals[r], t.outputKeyVals[r])),
          );
        }
        return r.psbtFromKeyVals(u, {
          globalMapKeyVals: n.globalKeyVals,
          inputKeyVals: n.inputKeyVals,
          outputKeyVals: n.outputKeyVals,
        });
      }
      function i(e, t, n) {
        return (r) => {
          if (e.has(r)) return;
          const o = n.filter((e) => e.key.toString("hex") === r)[0];
          (t.push(o), e.add(r));
        };
      }
      function s(e) {
        return e.globalMap.unsignedTx;
      }
      function a(e) {
        const t = new Set();
        return (
          e.forEach((e) => {
            const n = e.key.toString("hex");
            if (t.has(n))
              throw new Error("Combine: KeyValue Map keys should be unique");
            t.add(n);
          }),
          t
        );
      }
      t.combine = o;
    },
    3709: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(3111),
          o = n(3112),
          i = n(2918),
          s = n(2775);
        function a(e, t) {
          let n = 0;
          function r() {
            const t = i.decode(e, n);
            n += i.encodingLength(t);
            const r = e.slice(n, n + t);
            return ((n += t), r);
          }
          function a() {
            const t = e.readUInt32BE(n);
            return ((n += 4), t);
          }
          function u() {
            const t = e.readUInt8(n);
            return ((n += 1), t);
          }
          function l() {
            const e = r(),
              t = r();
            return { key: e, value: t };
          }
          function d() {
            if (n >= e.length)
              throw new Error("Format Error: Unexpected End of PSBT");
            const t = 0 === e.readUInt8(n);
            return (t && n++, t);
          }
          if (1886610036 !== a())
            throw new Error("Format Error: Invalid Magic Number");
          if (255 !== u())
            throw new Error(
              "Format Error: Magic Number must be followed by 0xff separator",
            );
          const f = [],
            p = {};
          while (!d()) {
            const e = l(),
              t = e.key.toString("hex");
            if (p[t])
              throw new Error(
                "Format Error: Keys must be unique for global keymap: key " + t,
              );
            ((p[t] = 1), f.push(e));
          }
          const h = f.filter((e) => e.key[0] === s.GlobalTypes.UNSIGNED_TX);
          if (1 !== h.length)
            throw new Error("Format Error: Only one UNSIGNED_TX allowed");
          const y = t(h[0].value),
            { inputCount: g, outputCount: m } = y.getInputOutputCounts(),
            b = [],
            v = [];
          for (const i of o.range(g)) {
            const e = {},
              t = [];
            while (!d()) {
              const n = l(),
                r = n.key.toString("hex");
              if (e[r])
                throw new Error(
                  "Format Error: Keys must be unique for each input: input index " +
                    i +
                    " key " +
                    r,
                );
              ((e[r] = 1), t.push(n));
            }
            b.push(t);
          }
          for (const i of o.range(m)) {
            const e = {},
              t = [];
            while (!d()) {
              const n = l(),
                r = n.key.toString("hex");
              if (e[r])
                throw new Error(
                  "Format Error: Keys must be unique for each output: output index " +
                    i +
                    " key " +
                    r,
                );
              ((e[r] = 1), t.push(n));
            }
            v.push(t);
          }
          return c(y, {
            globalMapKeyVals: f,
            inputKeyVals: b,
            outputKeyVals: v,
          });
        }
        function u(t, n, r) {
          if (!n.equals(e.from([r])))
            throw new Error(
              `Format Error: Invalid ${t} key: ${n.toString("hex")}`,
            );
        }
        function c(e, t) {
          let { globalMapKeyVals: n, inputKeyVals: i, outputKeyVals: a } = t;
          const c = { unsignedTx: e };
          let l = 0;
          for (const o of n)
            switch (o.key[0]) {
              case s.GlobalTypes.UNSIGNED_TX:
                if ((u("global", o.key, s.GlobalTypes.UNSIGNED_TX), l > 0))
                  throw new Error(
                    "Format Error: GlobalMap has multiple UNSIGNED_TX",
                  );
                l++;
                break;
              case s.GlobalTypes.GLOBAL_XPUB:
                (void 0 === c.globalXpub && (c.globalXpub = []),
                  c.globalXpub.push(r.globals.globalXpub.decode(o)));
                break;
              default:
                (c.unknownKeyVals || (c.unknownKeyVals = []),
                  c.unknownKeyVals.push(o));
            }
          const d = i.length,
            f = a.length,
            p = [],
            h = [];
          for (const y of o.range(d)) {
            const e = {};
            for (const t of i[y])
              switch ((r.inputs.checkPubkey(t), t.key[0])) {
                case s.InputTypes.NON_WITNESS_UTXO:
                  if (
                    (u("input", t.key, s.InputTypes.NON_WITNESS_UTXO),
                    void 0 !== e.nonWitnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple NON_WITNESS_UTXO",
                    );
                  e.nonWitnessUtxo = r.inputs.nonWitnessUtxo.decode(t);
                  break;
                case s.InputTypes.WITNESS_UTXO:
                  if (
                    (u("input", t.key, s.InputTypes.WITNESS_UTXO),
                    void 0 !== e.witnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_UTXO",
                    );
                  e.witnessUtxo = r.inputs.witnessUtxo.decode(t);
                  break;
                case s.InputTypes.PARTIAL_SIG:
                  (void 0 === e.partialSig && (e.partialSig = []),
                    e.partialSig.push(r.inputs.partialSig.decode(t)));
                  break;
                case s.InputTypes.SIGHASH_TYPE:
                  if (
                    (u("input", t.key, s.InputTypes.SIGHASH_TYPE),
                    void 0 !== e.sighashType)
                  )
                    throw new Error(
                      "Format Error: Input has multiple SIGHASH_TYPE",
                    );
                  e.sighashType = r.inputs.sighashType.decode(t);
                  break;
                case s.InputTypes.REDEEM_SCRIPT:
                  if (
                    (u("input", t.key, s.InputTypes.REDEEM_SCRIPT),
                    void 0 !== e.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple REDEEM_SCRIPT",
                    );
                  e.redeemScript = r.inputs.redeemScript.decode(t);
                  break;
                case s.InputTypes.WITNESS_SCRIPT:
                  if (
                    (u("input", t.key, s.InputTypes.WITNESS_SCRIPT),
                    void 0 !== e.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_SCRIPT",
                    );
                  e.witnessScript = r.inputs.witnessScript.decode(t);
                  break;
                case s.InputTypes.BIP32_DERIVATION:
                  (void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                    e.bip32Derivation.push(r.inputs.bip32Derivation.decode(t)));
                  break;
                case s.InputTypes.FINAL_SCRIPTSIG:
                  (u("input", t.key, s.InputTypes.FINAL_SCRIPTSIG),
                    (e.finalScriptSig = r.inputs.finalScriptSig.decode(t)));
                  break;
                case s.InputTypes.FINAL_SCRIPTWITNESS:
                  (u("input", t.key, s.InputTypes.FINAL_SCRIPTWITNESS),
                    (e.finalScriptWitness =
                      r.inputs.finalScriptWitness.decode(t)));
                  break;
                case s.InputTypes.POR_COMMITMENT:
                  (u("input", t.key, s.InputTypes.POR_COMMITMENT),
                    (e.porCommitment = r.inputs.porCommitment.decode(t)));
                  break;
                case s.InputTypes.TAP_KEY_SIG:
                  (u("input", t.key, s.InputTypes.TAP_KEY_SIG),
                    (e.tapKeySig = r.inputs.tapKeySig.decode(t)));
                  break;
                case s.InputTypes.TAP_SCRIPT_SIG:
                  (void 0 === e.tapScriptSig && (e.tapScriptSig = []),
                    e.tapScriptSig.push(r.inputs.tapScriptSig.decode(t)));
                  break;
                case s.InputTypes.TAP_LEAF_SCRIPT:
                  (void 0 === e.tapLeafScript && (e.tapLeafScript = []),
                    e.tapLeafScript.push(r.inputs.tapLeafScript.decode(t)));
                  break;
                case s.InputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === e.tapBip32Derivation &&
                    (e.tapBip32Derivation = []),
                    e.tapBip32Derivation.push(
                      r.inputs.tapBip32Derivation.decode(t),
                    ));
                  break;
                case s.InputTypes.TAP_INTERNAL_KEY:
                  (u("input", t.key, s.InputTypes.TAP_INTERNAL_KEY),
                    (e.tapInternalKey = r.inputs.tapInternalKey.decode(t)));
                  break;
                case s.InputTypes.TAP_MERKLE_ROOT:
                  (u("input", t.key, s.InputTypes.TAP_MERKLE_ROOT),
                    (e.tapMerkleRoot = r.inputs.tapMerkleRoot.decode(t)));
                  break;
                default:
                  (e.unknownKeyVals || (e.unknownKeyVals = []),
                    e.unknownKeyVals.push(t));
              }
            p.push(e);
          }
          for (const y of o.range(f)) {
            const e = {};
            for (const t of a[y])
              switch ((r.outputs.checkPubkey(t), t.key[0])) {
                case s.OutputTypes.REDEEM_SCRIPT:
                  if (
                    (u("output", t.key, s.OutputTypes.REDEEM_SCRIPT),
                    void 0 !== e.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple REDEEM_SCRIPT",
                    );
                  e.redeemScript = r.outputs.redeemScript.decode(t);
                  break;
                case s.OutputTypes.WITNESS_SCRIPT:
                  if (
                    (u("output", t.key, s.OutputTypes.WITNESS_SCRIPT),
                    void 0 !== e.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple WITNESS_SCRIPT",
                    );
                  e.witnessScript = r.outputs.witnessScript.decode(t);
                  break;
                case s.OutputTypes.BIP32_DERIVATION:
                  (void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                    e.bip32Derivation.push(
                      r.outputs.bip32Derivation.decode(t),
                    ));
                  break;
                case s.OutputTypes.TAP_INTERNAL_KEY:
                  (u("output", t.key, s.OutputTypes.TAP_INTERNAL_KEY),
                    (e.tapInternalKey = r.outputs.tapInternalKey.decode(t)));
                  break;
                case s.OutputTypes.TAP_TREE:
                  (u("output", t.key, s.OutputTypes.TAP_TREE),
                    (e.tapTree = r.outputs.tapTree.decode(t)));
                  break;
                case s.OutputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === e.tapBip32Derivation &&
                    (e.tapBip32Derivation = []),
                    e.tapBip32Derivation.push(
                      r.outputs.tapBip32Derivation.decode(t),
                    ));
                  break;
                default:
                  (e.unknownKeyVals || (e.unknownKeyVals = []),
                    e.unknownKeyVals.push(t));
              }
            h.push(e);
          }
          return { globalMap: c, inputs: p, outputs: h };
        }
        ((t.psbtFromBuffer = a),
          (t.checkKeyBuffer = u),
          (t.psbtFromKeyVals = c));
      }).call(this, n(2).Buffer);
    },
    3710: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775),
          o = (e) => [...Array(e).keys()];
        function i(e) {
          if (e.key[0] !== r.GlobalTypes.GLOBAL_XPUB)
            throw new Error(
              "Decode Error: could not decode globalXpub with key 0x" +
                e.key.toString("hex"),
            );
          if (79 !== e.key.length || ![2, 3].includes(e.key[46]))
            throw new Error(
              "Decode Error: globalXpub has invalid extended pubkey in key 0x" +
                e.key.toString("hex"),
            );
          if ((e.value.length / 4) % 1 !== 0)
            throw new Error(
              "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4",
            );
          const t = e.key.slice(1),
            n = {
              masterFingerprint: e.value.slice(0, 4),
              extendedPubkey: t,
              path: "m",
            };
          for (const r of o(e.value.length / 4 - 1)) {
            const t = e.value.readUInt32LE(4 * r + 4),
              o = !!(2147483648 & t),
              i = 2147483647 & t;
            n.path += "/" + i.toString(10) + (o ? "'" : "");
          }
          return n;
        }
        function s(t) {
          const n = e.from([r.GlobalTypes.GLOBAL_XPUB]),
            o = e.concat([n, t.extendedPubkey]),
            i = t.path.split("/"),
            s = e.allocUnsafe(4 * i.length);
          t.masterFingerprint.copy(s, 0);
          let a = 4;
          return (
            i.slice(1).forEach((e) => {
              const t = "'" === e.slice(-1);
              let n = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
              (t && (n += 2147483648), s.writeUInt32LE(n, a), (a += 4));
            }),
            { key: o, value: s }
          );
        }
        function a(t) {
          const n = t.extendedPubkey,
            r = t.masterFingerprint,
            o = t.path;
          return (
            e.isBuffer(n) &&
            78 === n.length &&
            [2, 3].indexOf(n[45]) > -1 &&
            e.isBuffer(r) &&
            4 === r.length &&
            "string" === typeof o &&
            !!o.match(/^m(\/\d+'?)*$/)
          );
        }
        function u(e, t, n) {
          const r = t.extendedPubkey.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 ===
              e.filter((e) => e.extendedPubkey.equals(t.extendedPubkey)).length)
          );
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected =
            "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }"),
          (t.check = a),
          (t.canAddToArray = u));
      }).call(this, n(2).Buffer);
    },
    3711: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(t) {
          return {
            key: e.from([r.GlobalTypes.UNSIGNED_TX]),
            value: t.toBuffer(),
          };
        }
        t.encode = o;
      }).call(this, n(2).Buffer);
    },
    3712: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.FINAL_SCRIPTSIG)
            throw new Error(
              "Decode Error: could not decode finalScriptSig with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function i(t) {
          const n = e.from([r.InputTypes.FINAL_SCRIPTSIG]);
          return { key: n, value: t };
        }
        function s(t) {
          return e.isBuffer(t);
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.finalScriptSig;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "Buffer"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3713: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.FINAL_SCRIPTWITNESS)
            throw new Error(
              "Decode Error: could not decode finalScriptWitness with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function i(t) {
          const n = e.from([r.InputTypes.FINAL_SCRIPTWITNESS]);
          return { key: n, value: t };
        }
        function s(t) {
          return e.isBuffer(t);
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.finalScriptWitness;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "Buffer"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3714: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.NON_WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode nonWitnessUtxo with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function i(t) {
          return { key: e.from([r.InputTypes.NON_WITNESS_UTXO]), value: t };
        }
        function s(t) {
          return e.isBuffer(t);
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.nonWitnessUtxo;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "Buffer"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3715: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.PARTIAL_SIG)
            throw new Error(
              "Decode Error: could not decode partialSig with key 0x" +
                e.key.toString("hex"),
            );
          if (
            (34 !== e.key.length && 66 !== e.key.length) ||
            ![2, 3, 4].includes(e.key[1])
          )
            throw new Error(
              "Decode Error: partialSig has invalid pubkey in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.key.slice(1);
          return { pubkey: t, signature: e.value };
        }
        function i(t) {
          const n = e.from([r.InputTypes.PARTIAL_SIG]);
          return { key: e.concat([n, t.pubkey]), value: t.signature };
        }
        function s(t) {
          return (
            e.isBuffer(t.pubkey) &&
            e.isBuffer(t.signature) &&
            [33, 65].includes(t.pubkey.length) &&
            [2, 3, 4].includes(t.pubkey[0]) &&
            a(t.signature)
          );
        }
        function a(t) {
          if (!e.isBuffer(t) || t.length < 9) return !1;
          if (48 !== t[0]) return !1;
          if (t.length !== t[1] + 3) return !1;
          if (2 !== t[2]) return !1;
          const n = t[3];
          if (n > 33 || n < 1) return !1;
          if (2 !== t[3 + n + 1]) return !1;
          const r = t[3 + n + 2];
          return !(r > 33 || r < 1) && t.length === 3 + n + 2 + r + 2;
        }
        function u(e, t, n) {
          const r = t.pubkey.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r), 0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
          );
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "{ pubkey: Buffer; signature: Buffer; }"),
          (t.check = s),
          (t.canAddToArray = u));
      }).call(this, n(2).Buffer);
    },
    3716: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.POR_COMMITMENT)
            throw new Error(
              "Decode Error: could not decode porCommitment with key 0x" +
                e.key.toString("hex"),
            );
          return e.value.toString("utf8");
        }
        function i(t) {
          const n = e.from([r.InputTypes.POR_COMMITMENT]);
          return { key: n, value: e.from(t, "utf8") };
        }
        function s(e) {
          return "string" === typeof e;
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.porCommitment;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "string"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3717: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.SIGHASH_TYPE)
            throw new Error(
              "Decode Error: could not decode sighashType with key 0x" +
                e.key.toString("hex"),
            );
          return e.value.readUInt32LE(0);
        }
        function i(t) {
          const n = e.from([r.InputTypes.SIGHASH_TYPE]),
            o = e.allocUnsafe(4);
          return (o.writeUInt32LE(t, 0), { key: n, value: o });
        }
        function s(e) {
          return "number" === typeof e;
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.sighashType;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "number"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3718: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.TAP_KEY_SIG || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapKeySig with key 0x" +
                e.key.toString("hex"),
            );
          if (!s(e.value))
            throw new Error(
              "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature",
            );
          return e.value;
        }
        function i(t) {
          const n = e.from([r.InputTypes.TAP_KEY_SIG]);
          return { key: n, value: t };
        }
        function s(t) {
          return e.isBuffer(t) && (64 === t.length || 65 === t.length);
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.tapKeySig;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "Buffer"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3719: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.TAP_LEAF_SCRIPT)
            throw new Error(
              "Decode Error: could not decode tapLeafScript with key 0x" +
                e.key.toString("hex"),
            );
          if ((e.key.length - 2) % 32 !== 0)
            throw new Error(
              "Decode Error: tapLeafScript has invalid control block in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.value[e.value.length - 1];
          if ((254 & e.key[1]) !== t)
            throw new Error(
              "Decode Error: tapLeafScript bad leaf version in key 0x" +
                e.key.toString("hex"),
            );
          const n = e.value.slice(0, -1),
            o = e.key.slice(1);
          return { controlBlock: o, script: n, leafVersion: t };
        }
        function i(t) {
          const n = e.from([r.InputTypes.TAP_LEAF_SCRIPT]),
            o = e.from([t.leafVersion]);
          return {
            key: e.concat([n, t.controlBlock]),
            value: e.concat([t.script, o]),
          };
        }
        function s(t) {
          return (
            e.isBuffer(t.controlBlock) &&
            (t.controlBlock.length - 1) % 32 === 0 &&
            (254 & t.controlBlock[0]) === t.leafVersion &&
            e.isBuffer(t.script)
          );
        }
        function a(e, t, n) {
          const r = t.controlBlock.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 === e.filter((e) => e.controlBlock.equals(t.controlBlock)).length)
          );
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected =
            "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }"),
          (t.check = s),
          (t.canAddToArray = a));
      }).call(this, n(2).Buffer);
    },
    3720: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.TAP_MERKLE_ROOT || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapMerkleRoot with key 0x" +
                e.key.toString("hex"),
            );
          if (!s(e.value))
            throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
          return e.value;
        }
        function i(t) {
          const n = e.from([r.InputTypes.TAP_MERKLE_ROOT]);
          return { key: n, value: t };
        }
        function s(t) {
          return e.isBuffer(t) && 32 === t.length;
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.tapMerkleRoot;
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected = "Buffer"),
          (t.check = s),
          (t.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3721: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775);
        function o(e) {
          if (e.key[0] !== r.InputTypes.TAP_SCRIPT_SIG)
            throw new Error(
              "Decode Error: could not decode tapScriptSig with key 0x" +
                e.key.toString("hex"),
            );
          if (65 !== e.key.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid key 0x" +
                e.key.toString("hex"),
            );
          if (64 !== e.value.length && 65 !== e.value.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid signature in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.key.slice(1, 33),
            n = e.key.slice(33);
          return { pubkey: t, leafHash: n, signature: e.value };
        }
        function i(t) {
          const n = e.from([r.InputTypes.TAP_SCRIPT_SIG]);
          return {
            key: e.concat([n, t.pubkey, t.leafHash]),
            value: t.signature,
          };
        }
        function s(t) {
          return (
            e.isBuffer(t.pubkey) &&
            e.isBuffer(t.leafHash) &&
            e.isBuffer(t.signature) &&
            32 === t.pubkey.length &&
            32 === t.leafHash.length &&
            (64 === t.signature.length || 65 === t.signature.length)
          );
        }
        function a(e, t, n) {
          const r = t.pubkey.toString("hex") + t.leafHash.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 ===
              e.filter(
                (e) =>
                  e.pubkey.equals(t.pubkey) && e.leafHash.equals(t.leafHash),
              ).length)
          );
        }
        ((t.decode = o),
          (t.encode = i),
          (t.expected =
            "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }"),
          (t.check = s),
          (t.canAddToArray = a));
      }).call(this, n(2).Buffer);
    },
    3722: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775),
          o = n(3112),
          i = n(2918);
        function s(e) {
          if (e.key[0] !== r.InputTypes.WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode witnessUtxo with key 0x" +
                e.key.toString("hex"),
            );
          const t = o.readUInt64LE(e.value, 0);
          let n = 8;
          const s = i.decode(e.value, n);
          n += i.encodingLength(s);
          const a = e.value.slice(n);
          if (a.length !== s)
            throw new Error(
              "Decode Error: WITNESS_UTXO script is not proper length",
            );
          return { script: a, value: t };
        }
        function a(t) {
          const { script: n, value: s } = t,
            a = i.encodingLength(n.length),
            u = e.allocUnsafe(8 + a + n.length);
          return (
            o.writeUInt64LE(u, s, 0),
            i.encode(n.length, u, 8),
            n.copy(u, 8 + a),
            { key: e.from([r.InputTypes.WITNESS_UTXO]), value: u }
          );
        }
        function u(t) {
          return e.isBuffer(t.script) && "number" === typeof t.value;
        }
        function c(e, t) {
          return !!e && !!t && void 0 === e.witnessUtxo;
        }
        ((t.decode = s),
          (t.encode = a),
          (t.expected = "{ script: Buffer; value: number; }"),
          (t.check = u),
          (t.canAdd = c));
      }).call(this, n(2).Buffer);
    },
    3723: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2775),
          o = n(2918);
        function i(e) {
          if (e.key[0] !== r.OutputTypes.TAP_TREE || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapTree with key 0x" +
                e.key.toString("hex"),
            );
          let t = 0;
          const n = [];
          while (t < e.value.length) {
            const r = e.value[t++],
              i = e.value[t++],
              s = o.decode(e.value, t);
            ((t += o.encodingLength(s)),
              n.push({
                depth: r,
                leafVersion: i,
                script: e.value.slice(t, t + s),
              }),
              (t += s));
          }
          return { leaves: n };
        }
        function s(t) {
          const n = e.from([r.OutputTypes.TAP_TREE]),
            i = [].concat(
              ...t.leaves.map((t) => [
                e.of(t.depth, t.leafVersion),
                o.encode(t.script.length),
                t.script,
              ]),
            );
          return { key: n, value: e.concat(i) };
        }
        function a(t) {
          return (
            Array.isArray(t.leaves) &&
            t.leaves.every(
              (t) =>
                t.depth >= 0 &&
                t.depth <= 128 &&
                (254 & t.leafVersion) === t.leafVersion &&
                e.isBuffer(t.script),
            )
          );
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.tapTree;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected =
            "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }"),
          (t.check = a),
          (t.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3724: function (e, t, n) {
      "use strict";
      function r(e) {
        return t;
        function t(t) {
          let n;
          if (
            e.includes(t.key[0]) &&
            ((n = t.key.slice(1)),
            (33 !== n.length && 65 !== n.length) || ![2, 3, 4].includes(n[0]))
          )
            throw new Error(
              "Format Error: invalid pubkey in key 0x" + t.key.toString("hex"),
            );
          return n;
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeChecker = r));
    },
    3725: function (e, t, n) {
      "use strict";
      (function (e) {
        function n(t) {
          function n(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode redeemScript with key 0x" +
                  e.key.toString("hex"),
              );
            return e.value;
          }
          function r(n) {
            const r = e.from([t]);
            return { key: r, value: n };
          }
          const o = "Buffer";
          function i(t) {
            return e.isBuffer(t);
          }
          function s(e, t) {
            return !!e && !!t && void 0 === e.redeemScript;
          }
          return { decode: n, encode: r, check: i, expected: o, canAdd: s };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3726: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(2918),
          o = n(3308),
          i = (e) => 32 === e.length;
        function s(t) {
          const n = o.makeConverter(t, i);
          function s(e) {
            const t = r.decode(e.value),
              o = r.encodingLength(t),
              i = n.decode({ key: e.key, value: e.value.slice(o + 32 * t) }),
              s = new Array(t);
            for (let n = 0, r = o; n < t; n++, r += 32)
              s[n] = e.value.slice(r, r + 32);
            return Object.assign({}, i, { leafHashes: s });
          }
          function a(t) {
            const o = n.encode(t),
              i = r.encodingLength(t.leafHashes.length),
              s = e.allocUnsafe(i);
            r.encode(t.leafHashes.length, s);
            const a = e.concat([s, ...t.leafHashes, o.value]);
            return Object.assign({}, o, { value: a });
          }
          const u =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
          function c(t) {
            return (
              Array.isArray(t.leafHashes) &&
              t.leafHashes.every((t) => e.isBuffer(t) && 32 === t.length) &&
              n.check(t)
            );
          }
          return {
            decode: s,
            encode: a,
            check: c,
            expected: u,
            canAddToArray: n.canAddToArray,
          };
        }
        t.makeConverter = s;
      }).call(this, n(2).Buffer);
    },
    3727: function (e, t, n) {
      "use strict";
      (function (e) {
        function n(t) {
          function n(e) {
            if (e.key[0] !== t || 1 !== e.key.length)
              throw new Error(
                "Decode Error: could not decode tapInternalKey with key 0x" +
                  e.key.toString("hex"),
              );
            if (32 !== e.value.length)
              throw new Error(
                "Decode Error: tapInternalKey not a 32-byte x-only pubkey",
              );
            return e.value;
          }
          function r(n) {
            const r = e.from([t]);
            return { key: r, value: n };
          }
          const o = "Buffer";
          function i(t) {
            return e.isBuffer(t) && 32 === t.length;
          }
          function s(e, t) {
            return !!e && !!t && void 0 === e.tapInternalKey;
          }
          return { decode: n, encode: r, check: i, expected: o, canAdd: s };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3728: function (e, t, n) {
      "use strict";
      (function (e) {
        function n(t) {
          function n(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode witnessScript with key 0x" +
                  e.key.toString("hex"),
              );
            return e.value;
          }
          function r(n) {
            const r = e.from([t]);
            return { key: r, value: n };
          }
          const o = "Buffer";
          function i(t) {
            return e.isBuffer(t);
          }
          function s(e, t) {
            return !!e && !!t && void 0 === e.witnessScript;
          }
          return { decode: n, encode: r, check: i, expected: o, canAdd: s };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3729: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(3111),
          o = n(3112);
        function i(t) {
          let { globalMap: n, inputs: r, outputs: i } = t;
          const {
              globalKeyVals: s,
              inputKeyVals: a,
              outputKeyVals: c,
            } = u({ globalMap: n, inputs: r, outputs: i }),
            l = o.keyValsToBuffer(s),
            d = (t) =>
              0 === t.length ? [e.from([0])] : t.map(o.keyValsToBuffer),
            f = d(a),
            p = d(c),
            h = e.allocUnsafe(5);
          return (
            h.writeUIntBE(482972169471, 0, 5),
            e.concat([h, l].concat(f, p))
          );
        }
        t.psbtToBuffer = i;
        const s = (e, t) => e.key.compare(t.key);
        function a(e, t) {
          const n = new Set(),
            r = Object.entries(e).reduce((e, r) => {
              let [o, i] = r;
              if ("unknownKeyVals" === o) return e;
              const s = t[o];
              if (void 0 === s) return e;
              const a = (Array.isArray(i) ? i : [i]).map(s.encode),
                u = a.map((e) => e.key.toString("hex"));
              return (
                u.forEach((e) => {
                  if (n.has(e))
                    throw new Error("Serialize Error: Duplicate key: " + e);
                  n.add(e);
                }),
                e.concat(a)
              );
            }, []),
            o = e.unknownKeyVals
              ? e.unknownKeyVals.filter((e) => !n.has(e.key.toString("hex")))
              : [];
          return r.concat(o).sort(s);
        }
        function u(e) {
          let { globalMap: t, inputs: n, outputs: o } = e;
          return {
            globalKeyVals: a(t, r.globals),
            inputKeyVals: n.map((e) => a(e, r.inputs)),
            outputKeyVals: o.map((e) => a(e, r.outputs)),
          };
        }
        t.psbtToKeyVals = u;
      }).call(this, n(2).Buffer);
    },
    3915: function (e, t, n) {
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
        const o = r(n(2754)),
          i = r(n(2755)),
          s = n(3587),
          a = n(4474),
          u = n(3588),
          c = n(3916);
        t.protobufPackage = "cosmos.tx.v1beta1";
        const l = {};
        t.Tx = {
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.body &&
                t.TxBody.encode(e.body, n.uint32(10).fork()).ldelim(),
              void 0 !== e.authInfo &&
                t.AuthInfo.encode(e.authInfo, n.uint32(18).fork()).ldelim());
            for (const t of e.signatures) n.uint32(26).bytes(t);
            return n;
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, l);
            s.signatures = [];
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.body = t.TxBody.decode(r, r.uint32());
                  break;
                case 2:
                  s.authInfo = t.AuthInfo.decode(r, r.uint32());
                  break;
                case 3:
                  s.signatures.push(r.bytes());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, l);
            if (
              ((n.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (n.body = t.TxBody.fromJSON(e.body))
                : (n.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (n.authInfo = t.AuthInfo.fromJSON(e.authInfo))
                : (n.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) n.signatures.push(w(t));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.body &&
                (n.body = e.body ? t.TxBody.toJSON(e.body) : void 0),
              void 0 !== e.authInfo &&
                (n.authInfo = e.authInfo
                  ? t.AuthInfo.toJSON(e.authInfo)
                  : void 0),
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    E(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, l);
            if (
              ((n.signatures = []),
              void 0 !== e.body && null !== e.body
                ? (n.body = t.TxBody.fromPartial(e.body))
                : (n.body = void 0),
              void 0 !== e.authInfo && null !== e.authInfo
                ? (n.authInfo = t.AuthInfo.fromPartial(e.authInfo))
                : (n.authInfo = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const t of e.signatures) n.signatures.push(t);
            return n;
          },
        };
        const d = {};
        t.TxRaw = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes),
              0 !== e.authInfoBytes.length &&
                t.uint32(18).bytes(e.authInfoBytes));
            for (const n of e.signatures) t.uint32(26).bytes(n);
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, d);
            ((o.signatures = []),
              (o.bodyBytes = new Uint8Array()),
              (o.authInfoBytes = new Uint8Array()));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.bodyBytes = n.bytes();
                  break;
                case 2:
                  o.authInfoBytes = n.bytes();
                  break;
                case 3:
                  o.signatures.push(n.bytes());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, d);
            if (
              ((t.signatures = []),
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = w(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = w(e.authInfoBytes)),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const n of e.signatures) t.signatures.push(w(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = E(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = E(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              e.signatures
                ? (t.signatures = e.signatures.map((e) =>
                    E(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.signatures = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, d);
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
              for (const n of e.signatures) t.signatures.push(n);
            return t;
          },
        };
        const f = { chainId: "", accountNumber: o.default.UZERO };
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
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, f);
            ((o.bodyBytes = new Uint8Array()),
              (o.authInfoBytes = new Uint8Array()));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.bodyBytes = n.bytes();
                  break;
                case 2:
                  o.authInfoBytes = n.bytes();
                  break;
                case 3:
                  o.chainId = n.string();
                  break;
                case 4:
                  o.accountNumber = n.uint64();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return (
              (t.bodyBytes = new Uint8Array()),
              (t.authInfoBytes = new Uint8Array()),
              void 0 !== e.bodyBytes &&
                null !== e.bodyBytes &&
                (t.bodyBytes = w(e.bodyBytes)),
              void 0 !== e.authInfoBytes &&
                null !== e.authInfoBytes &&
                (t.authInfoBytes = w(e.authInfoBytes)),
              void 0 !== e.chainId && null !== e.chainId
                ? (t.chainId = String(e.chainId))
                : (t.chainId = ""),
              void 0 !== e.accountNumber && null !== e.accountNumber
                ? (t.accountNumber = o.default.fromString(e.accountNumber))
                : (t.accountNumber = o.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.bodyBytes &&
                (t.bodyBytes = E(
                  void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array(),
                )),
              void 0 !== e.authInfoBytes &&
                (t.authInfoBytes = E(
                  void 0 !== e.authInfoBytes
                    ? e.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== e.chainId && (t.chainId = e.chainId),
              void 0 !== e.accountNumber &&
                (t.accountNumber = (
                  e.accountNumber || o.default.UZERO
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
                : (t.accountNumber = o.default.UZERO),
              t
            );
          },
        };
        const p = { memo: "", timeoutHeight: o.default.UZERO };
        t.TxBody = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const n of e.messages)
              s.Any.encode(n, t.uint32(10).fork()).ldelim();
            ("" !== e.memo && t.uint32(18).string(e.memo),
              e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight));
            for (const n of e.extensionOptions)
              s.Any.encode(n, t.uint32(8186).fork()).ldelim();
            for (const n of e.nonCriticalExtensionOptions)
              s.Any.encode(n, t.uint32(16378).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, p);
            ((o.messages = []),
              (o.extensionOptions = []),
              (o.nonCriticalExtensionOptions = []));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.messages.push(s.Any.decode(n, n.uint32()));
                  break;
                case 2:
                  o.memo = n.string();
                  break;
                case 3:
                  o.timeoutHeight = n.uint64();
                  break;
                case 1023:
                  o.extensionOptions.push(s.Any.decode(n, n.uint32()));
                  break;
                case 2047:
                  o.nonCriticalExtensionOptions.push(
                    s.Any.decode(n, n.uint32()),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const n of e.messages) t.messages.push(s.Any.fromJSON(n));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = String(e.memo))
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = o.default.fromString(e.timeoutHeight))
                : (t.timeoutHeight = o.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const n of e.extensionOptions)
                t.extensionOptions.push(s.Any.fromJSON(n));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const n of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(s.Any.fromJSON(n));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.messages
                ? (t.messages = e.messages.map((e) =>
                    e ? s.Any.toJSON(e) : void 0,
                  ))
                : (t.messages = []),
              void 0 !== e.memo && (t.memo = e.memo),
              void 0 !== e.timeoutHeight &&
                (t.timeoutHeight = (
                  e.timeoutHeight || o.default.UZERO
                ).toString()),
              e.extensionOptions
                ? (t.extensionOptions = e.extensionOptions.map((e) =>
                    e ? s.Any.toJSON(e) : void 0,
                  ))
                : (t.extensionOptions = []),
              e.nonCriticalExtensionOptions
                ? (t.nonCriticalExtensionOptions =
                    e.nonCriticalExtensionOptions.map((e) =>
                      e ? s.Any.toJSON(e) : void 0,
                    ))
                : (t.nonCriticalExtensionOptions = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            if (
              ((t.messages = []),
              (t.extensionOptions = []),
              (t.nonCriticalExtensionOptions = []),
              void 0 !== e.messages && null !== e.messages)
            )
              for (const n of e.messages) t.messages.push(s.Any.fromPartial(n));
            if (
              (void 0 !== e.memo && null !== e.memo
                ? (t.memo = e.memo)
                : (t.memo = ""),
              void 0 !== e.timeoutHeight && null !== e.timeoutHeight
                ? (t.timeoutHeight = e.timeoutHeight)
                : (t.timeoutHeight = o.default.UZERO),
              void 0 !== e.extensionOptions && null !== e.extensionOptions)
            )
              for (const n of e.extensionOptions)
                t.extensionOptions.push(s.Any.fromPartial(n));
            if (
              void 0 !== e.nonCriticalExtensionOptions &&
              null !== e.nonCriticalExtensionOptions
            )
              for (const n of e.nonCriticalExtensionOptions)
                t.nonCriticalExtensionOptions.push(s.Any.fromPartial(n));
            return t;
          },
        };
        const h = {};
        t.AuthInfo = {
          encode(e, n) {
            void 0 === n && (n = i.default.Writer.create());
            for (const r of e.signerInfos)
              t.SignerInfo.encode(r, n.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.fee &&
                t.Fee.encode(e.fee, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, h);
            s.signerInfos = [];
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.signerInfos.push(t.SignerInfo.decode(r, r.uint32()));
                  break;
                case 2:
                  s.fee = t.Fee.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, h);
            if (
              ((n.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const r of e.signerInfos)
                n.signerInfos.push(t.SignerInfo.fromJSON(r));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (n.fee = t.Fee.fromJSON(e.fee))
                : (n.fee = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              e.signerInfos
                ? (n.signerInfos = e.signerInfos.map((e) =>
                    e ? t.SignerInfo.toJSON(e) : void 0,
                  ))
                : (n.signerInfos = []),
              void 0 !== e.fee &&
                (n.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, h);
            if (
              ((n.signerInfos = []),
              void 0 !== e.signerInfos && null !== e.signerInfos)
            )
              for (const r of e.signerInfos)
                n.signerInfos.push(t.SignerInfo.fromPartial(r));
            return (
              void 0 !== e.fee && null !== e.fee
                ? (n.fee = t.Fee.fromPartial(e.fee))
                : (n.fee = void 0),
              n
            );
          },
        };
        const y = { sequence: o.default.UZERO };
        t.SignerInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.publicKey &&
                s.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(),
              void 0 !== e.modeInfo &&
                t.ModeInfo.encode(e.modeInfo, n.uint32(18).fork()).ldelim(),
              e.sequence.isZero() || n.uint32(24).uint64(e.sequence),
              n
            );
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const a = Object.assign({}, y);
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.publicKey = s.Any.decode(r, r.uint32());
                  break;
                case 2:
                  a.modeInfo = t.ModeInfo.decode(r, r.uint32());
                  break;
                case 3:
                  a.sequence = r.uint64();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const n = Object.assign({}, y);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = s.Any.fromJSON(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (n.modeInfo = t.ModeInfo.fromJSON(e.modeInfo))
                : (n.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = o.default.fromString(e.sequence))
                : (n.sequence = o.default.UZERO),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.publicKey &&
                (n.publicKey = e.publicKey
                  ? s.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.modeInfo &&
                (n.modeInfo = e.modeInfo
                  ? t.ModeInfo.toJSON(e.modeInfo)
                  : void 0),
              void 0 !== e.sequence &&
                (n.sequence = (e.sequence || o.default.UZERO).toString()),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, y);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = s.Any.fromPartial(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.modeInfo && null !== e.modeInfo
                ? (n.modeInfo = t.ModeInfo.fromPartial(e.modeInfo))
                : (n.modeInfo = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = e.sequence)
                : (n.sequence = o.default.UZERO),
              n
            );
          },
        };
        const g = {};
        t.ModeInfo = {
          encode(e, n) {
            return (
              void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.single &&
                t.ModeInfo_Single.encode(
                  e.single,
                  n.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.ModeInfo_Multi.encode(e.multi, n.uint32(18).fork()).ldelim(),
              n
            );
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, g);
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.single = t.ModeInfo_Single.decode(r, r.uint32());
                  break;
                case 2:
                  s.multi = t.ModeInfo_Multi.decode(r, r.uint32());
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, g);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.ModeInfo_Single.fromJSON(e.single))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.ModeInfo_Multi.fromJSON(e.multi))
                : (n.multi = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.single &&
                (n.single = e.single
                  ? t.ModeInfo_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (n.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, g);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.ModeInfo_Single.fromPartial(e.single))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.ModeInfo_Multi.fromPartial(e.multi))
                : (n.multi = void 0),
              n
            );
          },
        };
        const m = { mode: 0 };
        t.ModeInfo_Single = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.mode && t.uint32(8).int32(e.mode),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, m);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.mode = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = a.signModeFromJSON(e.mode))
                : (t.mode = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.mode && (t.mode = a.signModeToJSON(e.mode)),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
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
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.bitarray &&
                u.CompactBitArray.encode(
                  e.bitarray,
                  n.uint32(10).fork(),
                ).ldelim());
            for (const r of e.modeInfos)
              t.ModeInfo.encode(r, n.uint32(18).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, b);
            s.modeInfos = [];
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.bitarray = u.CompactBitArray.decode(r, r.uint32());
                  break;
                case 2:
                  s.modeInfos.push(t.ModeInfo.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, b);
            if (
              ((n.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = u.CompactBitArray.fromJSON(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const r of e.modeInfos)
                n.modeInfos.push(t.ModeInfo.fromJSON(r));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.bitarray &&
                (n.bitarray = e.bitarray
                  ? u.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.modeInfos
                ? (n.modeInfos = e.modeInfos.map((e) =>
                    e ? t.ModeInfo.toJSON(e) : void 0,
                  ))
                : (n.modeInfos = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, b);
            if (
              ((n.modeInfos = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = u.CompactBitArray.fromPartial(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.modeInfos && null !== e.modeInfos)
            )
              for (const r of e.modeInfos)
                n.modeInfos.push(t.ModeInfo.fromPartial(r));
            return n;
          },
        };
        const v = { gasLimit: o.default.UZERO, payer: "", granter: "" };
        t.Fee = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const n of e.amount)
              c.Coin.encode(n, t.uint32(10).fork()).ldelim();
            return (
              e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit),
              "" !== e.payer && t.uint32(26).string(e.payer),
              "" !== e.granter && t.uint32(34).string(e.granter),
              t
            );
          },
          decode(e, t) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, v);
            o.amount = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.amount.push(c.Coin.decode(n, n.uint32()));
                  break;
                case 2:
                  o.gasLimit = n.uint64();
                  break;
                case 3:
                  o.payer = n.string();
                  break;
                case 4:
                  o.granter = n.string();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const n of e.amount) t.amount.push(c.Coin.fromJSON(n));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = o.default.fromString(e.gasLimit))
                : (t.gasLimit = o.default.UZERO),
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
                    e ? c.Coin.toJSON(e) : void 0,
                  ))
                : (t.amount = []),
              void 0 !== e.gasLimit &&
                (t.gasLimit = (e.gasLimit || o.default.UZERO).toString()),
              void 0 !== e.payer && (t.payer = e.payer),
              void 0 !== e.granter && (t.granter = e.granter),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
              for (const n of e.amount) t.amount.push(c.Coin.fromPartial(n));
            return (
              void 0 !== e.gasLimit && null !== e.gasLimit
                ? (t.gasLimit = e.gasLimit)
                : (t.gasLimit = o.default.UZERO),
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
        const I =
          S.atob || ((e) => S.Buffer.from(e, "base64").toString("binary"));
        function w(e) {
          const t = I(e),
            n = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
          return n;
        }
        const k =
          S.btoa || ((e) => S.Buffer.from(e, "binary").toString("base64"));
        function E(e) {
          const t = [];
          for (let n = 0; n < e.byteLength; ++n)
            t.push(String.fromCharCode(e[n]));
          return k(t.join(""));
        }
        i.default.util.Long !== o.default &&
          ((i.default.util.Long = o.default), i.default.configure());
      }).call(this, n(13));
    },
    3916: function (e, t, n) {
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
      const o = r(n(2754)),
        i = r(n(2755));
      t.protobufPackage = "cosmos.base.v1beta1";
      const s = { denom: "", amount: "" };
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
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, s);
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.denom = n.string();
                break;
              case 2:
                o.amount = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      const a = { denom: "", amount: "" };
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
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, a);
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.denom = n.string();
                break;
              case 2:
                o.amount = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
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
      const u = { int: "" };
      t.IntProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.int && t.uint32(10).string(e.int),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, u);
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.int = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
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
          const t = Object.assign({}, u);
          return (
            void 0 !== e.int && null !== e.int ? (t.int = e.int) : (t.int = ""),
            t
          );
        },
      };
      const c = { dec: "" };
      ((t.DecProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.dec && t.uint32(10).string(e.dec),
            t
          );
        },
        decode(e, t) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? n.len : n.pos + t;
          const o = Object.assign({}, c);
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                o.dec = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return o;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
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
          const t = Object.assign({}, c);
          return (
            void 0 !== e.dec && null !== e.dec ? (t.dec = e.dec) : (t.dec = ""),
            t
          );
        },
      }),
        i.default.util.Long !== o.default &&
          ((i.default.util.Long = o.default), i.default.configure()));
    },
    4474: function (e, t, n) {
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
        const o = r(n(2754)),
          i = r(n(2755)),
          s = n(3587),
          a = n(3588);
        var u;
        function c(e) {
          switch (e) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return u.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return u.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return u.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return u.SIGN_MODE_LEGACY_AMINO_JSON;
            case -1:
            case "UNRECOGNIZED":
            default:
              return u.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case u.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case u.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case u.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case u.SIGN_MODE_LEGACY_AMINO_JSON:
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
          })((u = t.SignMode || (t.SignMode = {}))),
          (t.signModeFromJSON = c),
          (t.signModeToJSON = l));
        const d = {};
        t.SignatureDescriptors = {
          encode(e, n) {
            void 0 === n && (n = i.default.Writer.create());
            for (const r of e.signatures)
              t.SignatureDescriptor.encode(r, n.uint32(10).fork()).ldelim();
            return n;
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, d);
            s.signatures = [];
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.signatures.push(
                    t.SignatureDescriptor.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, d);
            if (
              ((n.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                n.signatures.push(t.SignatureDescriptor.fromJSON(r));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor.toJSON(e) : void 0,
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, d);
            if (
              ((n.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                n.signatures.push(t.SignatureDescriptor.fromPartial(r));
            return n;
          },
        };
        const f = { sequence: o.default.UZERO };
        t.SignatureDescriptor = {
          encode(e, n) {
            return (
              void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.publicKey &&
                s.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(),
              void 0 !== e.data &&
                t.SignatureDescriptor_Data.encode(
                  e.data,
                  n.uint32(18).fork(),
                ).ldelim(),
              e.sequence.isZero() || n.uint32(24).uint64(e.sequence),
              n
            );
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const a = Object.assign({}, f);
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  a.publicKey = s.Any.decode(r, r.uint32());
                  break;
                case 2:
                  a.data = t.SignatureDescriptor_Data.decode(r, r.uint32());
                  break;
                case 3:
                  a.sequence = r.uint64();
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const n = Object.assign({}, f);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = s.Any.fromJSON(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (n.data = t.SignatureDescriptor_Data.fromJSON(e.data))
                : (n.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = o.default.fromString(e.sequence))
                : (n.sequence = o.default.UZERO),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.publicKey &&
                (n.publicKey = e.publicKey
                  ? s.Any.toJSON(e.publicKey)
                  : void 0),
              void 0 !== e.data &&
                (n.data = e.data
                  ? t.SignatureDescriptor_Data.toJSON(e.data)
                  : void 0),
              void 0 !== e.sequence &&
                (n.sequence = (e.sequence || o.default.UZERO).toString()),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, f);
            return (
              void 0 !== e.publicKey && null !== e.publicKey
                ? (n.publicKey = s.Any.fromPartial(e.publicKey))
                : (n.publicKey = void 0),
              void 0 !== e.data && null !== e.data
                ? (n.data = t.SignatureDescriptor_Data.fromPartial(e.data))
                : (n.data = void 0),
              void 0 !== e.sequence && null !== e.sequence
                ? (n.sequence = e.sequence)
                : (n.sequence = o.default.UZERO),
              n
            );
          },
        };
        const p = {};
        t.SignatureDescriptor_Data = {
          encode(e, n) {
            return (
              void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.single &&
                t.SignatureDescriptor_Data_Single.encode(
                  e.single,
                  n.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.multi &&
                t.SignatureDescriptor_Data_Multi.encode(
                  e.multi,
                  n.uint32(18).fork(),
                ).ldelim(),
              n
            );
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, p);
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.single = t.SignatureDescriptor_Data_Single.decode(
                    r,
                    r.uint32(),
                  );
                  break;
                case 2:
                  s.multi = t.SignatureDescriptor_Data_Multi.decode(
                    r,
                    r.uint32(),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.SignatureDescriptor_Data_Single.fromJSON(
                    e.single,
                  ))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi))
                : (n.multi = void 0),
              n
            );
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.single &&
                (n.single = e.single
                  ? t.SignatureDescriptor_Data_Single.toJSON(e.single)
                  : void 0),
              void 0 !== e.multi &&
                (n.multi = e.multi
                  ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi)
                  : void 0),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, p);
            return (
              void 0 !== e.single && null !== e.single
                ? (n.single = t.SignatureDescriptor_Data_Single.fromPartial(
                    e.single,
                  ))
                : (n.single = void 0),
              void 0 !== e.multi && null !== e.multi
                ? (n.multi = t.SignatureDescriptor_Data_Multi.fromPartial(
                    e.multi,
                  ))
                : (n.multi = void 0),
              n
            );
          },
        };
        const h = { mode: 0 };
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
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? n.len : n.pos + t;
            const o = Object.assign({}, h);
            o.signature = new Uint8Array();
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  o.mode = n.int32();
                  break;
                case 2:
                  o.signature = n.bytes();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return o;
          },
          fromJSON(e) {
            const t = Object.assign({}, h);
            return (
              (t.signature = new Uint8Array()),
              void 0 !== e.mode && null !== e.mode
                ? (t.mode = c(e.mode))
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
              void 0 !== e.mode && (t.mode = l(e.mode)),
              void 0 !== e.signature &&
                (t.signature = S(
                  void 0 !== e.signature ? e.signature : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, h);
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
        const y = {};
        t.SignatureDescriptor_Data_Multi = {
          encode(e, n) {
            (void 0 === n && (n = i.default.Writer.create()),
              void 0 !== e.bitarray &&
                a.CompactBitArray.encode(
                  e.bitarray,
                  n.uint32(10).fork(),
                ).ldelim());
            for (const r of e.signatures)
              t.SignatureDescriptor_Data.encode(
                r,
                n.uint32(18).fork(),
              ).ldelim();
            return n;
          },
          decode(e, n) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let o = void 0 === n ? r.len : r.pos + n;
            const s = Object.assign({}, y);
            s.signatures = [];
            while (r.pos < o) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  s.bitarray = a.CompactBitArray.decode(r, r.uint32());
                  break;
                case 2:
                  s.signatures.push(
                    t.SignatureDescriptor_Data.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const n = Object.assign({}, y);
            if (
              ((n.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = a.CompactBitArray.fromJSON(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                n.signatures.push(t.SignatureDescriptor_Data.fromJSON(r));
            return n;
          },
          toJSON(e) {
            const n = {};
            return (
              void 0 !== e.bitarray &&
                (n.bitarray = e.bitarray
                  ? a.CompactBitArray.toJSON(e.bitarray)
                  : void 0),
              e.signatures
                ? (n.signatures = e.signatures.map((e) =>
                    e ? t.SignatureDescriptor_Data.toJSON(e) : void 0,
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(e) {
            const n = Object.assign({}, y);
            if (
              ((n.signatures = []),
              void 0 !== e.bitarray && null !== e.bitarray
                ? (n.bitarray = a.CompactBitArray.fromPartial(e.bitarray))
                : (n.bitarray = void 0),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const r of e.signatures)
                n.signatures.push(t.SignatureDescriptor_Data.fromPartial(r));
            return n;
          },
        };
        var g = (() => {
          if ("undefined" !== typeof g) return g;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const m =
          g.atob || ((e) => g.Buffer.from(e, "base64").toString("binary"));
        function b(e) {
          const t = m(e),
            n = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
          return n;
        }
        const v =
          g.btoa || ((e) => g.Buffer.from(e, "binary").toString("base64"));
        function S(e) {
          const t = [];
          for (let n = 0; n < e.byteLength; ++n)
            t.push(String.fromCharCode(e[n]));
          return v(t.join(""));
        }
        i.default.util.Long !== o.default &&
          ((i.default.util.Long = o.default), i.default.configure());
      }).call(this, n(13));
    },
  },
]);
