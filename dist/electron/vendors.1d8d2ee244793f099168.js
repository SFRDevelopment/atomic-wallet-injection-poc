(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [374, 32],
  {
    2668: function (t, e, a) {
      "use strict";
      (function (t) {
        var i = a(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var n = i(a(11)),
          s = i(a(230)),
          r = i(a(73)),
          o = i(a(794)),
          l = i(a(7182)),
          d = a(2806);
        function c(t, e, a) {
          (u(t, e), e.set(t, a));
        }
        function u(t, e) {
          if (e.has(t))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function h(t, e) {
          return t.get(w(t, e));
        }
        function g(t, e, a) {
          return (t.set(w(t, e), a), a);
        }
        function w(t, e, a) {
          if ("function" == typeof t ? t === e : t.has(e))
            return arguments.length < 3 ? e : a;
          throw new TypeError("Private element is not present on this object");
        }
        const m = new o.default(() =>
            Promise.all([a.e(268), a.e(283), a.e(389)]).then(
              a.t.bind(null, 8925, 7),
            ),
          ),
          f = new o.default(() =>
            Promise.all([a.e(209), a.e(141)]).then(a.t.bind(null, 8946, 7)),
          ),
          T = new o.default(() => a.e(415).then(a.t.bind(null, 4742, 7))),
          v = "MultiversX",
          k = "EGLD",
          p = "m/44'/508'/0'/0'/0'",
          b = 18,
          x = "1",
          y = "0",
          S = "10000",
          L = 1e9,
          N = 5e4,
          A = 1e7,
          B = (t) => (
            (t = new n.default(t).toString(16)),
            t.length % 2 === 1 ? "0" + t : t
          ),
          P = {
            STAKE: "delegate",
            UNSTAKE: (t) => "unDelegate@" + B(t),
            CLAIM: "claimRewards",
            WITHDRAW: "withdraw",
          };
        var D = new WeakMap();
        class EGLDCoin extends (0, d.StakingMixin)(
          (0, d.HasProviders)(s.default),
        ) {
          constructor(t) {
            let {
              alias: e,
              notify: a,
              feeData: i,
              explorers: n,
              txWebUrl: s,
              socket: r,
              id: o,
            } = t;
            const d = {
              id: o,
              alias: e,
              notify: a,
              name: v,
              ticker: k,
              decimal: b,
              unspendableBalance: y,
              explorers: n,
              txWebUrl: s,
              socket: r,
              feeData: i,
            };
            (super(d),
              c(this, D, void 0),
              (this.derivation = p),
              this.setExplorersModules([l.default]),
              this.loadExplorers(d),
              (this.gasPrice = i.gasPrice || L),
              (this.gasLimit = i.gasLimit || N),
              (this.stakingGasLimit = i.stakingGasLimit || A),
              (this.reserveForStake = i.reserveForStake || S),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (t, e) => {
                  (this.getInfo(),
                    e && e.direction
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
                },
              ));
          }
          async loadWallet(e, a) {
            const { account: i } = await m.get(),
              n = new i();
            return (
              (e = n.privateKeyFromMnemonic(a)),
              n.loadFromSeed(t.from(e, "hex")),
              g(D, this, n.privateKeyAsString()),
              (this.address = n.address()),
              { id: this.id, privateKey: h(D, this), address: this.address }
            );
          }
          async createTransaction(e) {
            let { address: a, amount: i, data: n = "", gasLimit: s } = e;
            const [
                { Address: r, Transaction: o, TransactionPayload: l },
                { Signature: d },
                { account: c },
              ] = await Promise.all([f.get(), T.get(), m.get()]),
              u = r.fromBech32(this.address),
              g = new o({
                nonce: this.nonce,
                value: i,
                receiver: r.fromBech32(a),
                sender: u,
                gasPrice: Number(this.gasPrice),
                gasLimit: Number(s || this.gasLimit),
                data: new l(n),
                chainID: x,
                version: 1,
              }),
              w = g.serializeForSigning(u),
              v = new c();
            return (
              v.loadFromPrivateKey(t.from(h(D, this), "hex")),
              g.applySignature(d.fromHex(v.sign(w)), u),
              g.toSendable()
            );
          }
          createDelegationTransaction(t) {
            let { validator: e, amount: a } = t;
            return this.createTransaction({
              address: e,
              amount: a,
              data: P.STAKE,
              gasLimit: this.stakingGasLimit,
            });
          }
          createUnDelegationTransaction(t) {
            let { validator: e, amount: a } = t;
            return this.createTransaction({
              address: e,
              amount: "0",
              data: P.UNSTAKE(a),
              gasLimit: this.stakingGasLimit,
            });
          }
          createClaimTransaction(t) {
            let { validator: e } = t;
            return this.createTransaction({
              address: e,
              amount: "0",
              data: P.CLAIM,
              gasLimit: this.stakingGasLimit,
            });
          }
          createWithdrawTransaction(t) {
            let { validator: e } = t;
            return this.createTransaction({
              address: e,
              amount: "0",
              data: P.WITHDRAW,
              gasLimit: this.stakingGasLimit,
            });
          }
          calculateTotal(t) {
            let {
              balance: e,
              staked: a,
              unstaking: i,
              availableWithdrawals: n,
              rewards: s,
            } = t;
            return new r.default(
              e
                .toBN()
                .add(a.toBN())
                .add(i.toBN())
                .add(s.toBN())
                .add(n.toBN())
                .toString(),
              this,
            );
          }
          async calculateAvailableForStake(t) {
            let { balance: e } = t;
            const a = await this.getFee({ gasLimit: this.stakingGasLimit }),
              i = e
                .toBN()
                .sub(new this.BN(this.reserveForStake))
                .sub(a)
                .sub(new this.BN(this.unspendableBalance));
            return new r.default(i.isNeg() ? "0" : i, this);
          }
          async sendTransaction(t) {
            const e = await this.getProvider("send").sendTransaction(t);
            return (e && (this.nonce = Number(this.nonce) + 1), e);
          }
          async getInfo() {
            const { balance: t, nonce: e } = await this.getProvider(
              "balance",
            ).getInfo(this.address);
            return (
              t && (this.balance = t),
              e && (this.nonce = Number(e || "0")),
              await this.getStakingInfo(),
              { balance: this.balance, balances: this.balances }
            );
          }
          getFee(t) {
            let { gasLimit: e, userGasPrice: a } = void 0 === t ? {} : t;
            return new n.default(String(a || this.gasPrice)).mul(
              new this.BN(e || this.gasLimit),
            );
          }
          async validateAddress(t) {
            try {
              const { Address: e } = await f.get();
              return !!e.fromBech32(t);
            } catch (e) {
              return !1;
            }
          }
          setPrivateKey(t) {
            g(D, this, t);
          }
        }
        e.default = EGLDCoin;
      }).call(this, a(2).Buffer);
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    7182: function (t, e, a) {
      "use strict";
      var i = a(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(a(129)),
        s = i(a(73)),
        r = i(a(80));
      const o = {
        delegate: "stake",
        unDelegate: "unstake",
        withdraw: "withdraw",
        claimRewards: "reward",
      };
      class ElrondApiExplorer extends n.default {
        getAllowedTickers() {
          return ["EGLD"];
        }
        getInfoUrl(t) {
          return "/accounts/" + t;
        }
        getTransactionsUrl(t) {
          return `/accounts/${t}/transactions`;
        }
        getTransactionsParams(t, e, a, i) {
          return (
            void 0 === e && (e = 0),
            void 0 === a && (a = this.defaultTxLimit),
            { from: e, to: e + a, withScResults: !0 }
          );
        }
        getTransfersrUrl(t) {
          return `/accounts/${t}/transfers`;
        }
        getStakingInfoUrl(t) {
          return `/accounts/${t}/delegation`;
        }
        getSendTransactionUrl() {
          return "/transactions";
        }
        getSendTransactionParams(t) {
          return t;
        }
        getTransactionUrl(t) {
          return this.getTransactionsUrl(t);
        }
        modifyInfoResponse(t) {
          const { balance: e, nonce: a } = t;
          return { balance: e, nonce: a };
        }
        modifySendTransactionResponse(t) {
          return { txid: t.txHash };
        }
        modifyTransactionsResponse(t, e) {
          return Array.isArray(t)
            ? t.map(
                (t) =>
                  new r.default({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    txid: this.getTxHash(t),
                    walletid: this.wallet.id,
                    fee: this.getTxFee(t),
                    feeTicker: this.wallet.parent,
                    direction: this.getTxDirection(e, t),
                    otherSideAddress: this.getTxOtherSideAddress(e, t),
                    amount: this.getTxValue(e, t),
                    datetime: this.getTxDateTime(t),
                    memo: this.getTxMemo(t),
                    confirmations: this.getTxConfirmations(t),
                    txType: this.getTransactionType(t),
                    alias: this.wallet.alias,
                  }),
              )
            : [];
        }
        getTransactionType(t) {
          return o[t.function] || "transfer";
        }
        getTxConfirmations(t) {
          return t.round;
        }
        getTxHash(t) {
          return t.txHash;
        }
        getTxDirection(t, e) {
          return e.receiver === t;
        }
        getTxOtherSideAddress(t, e) {
          return this.getTxDirection(t, e) ? e.sender : e.receiver;
        }
        getTxValue(t, e) {
          const a = this.getTransactionType(e);
          return "unstake" === a
            ? this.wallet.toCurrencyUnit(e.action.arguments.value)
            : ["transfer", "stake"].includes(a)
              ? this.wallet.toCurrencyUnit(e.value)
              : this.wallet.toCurrencyUnit(
                  this.getValueFromSmartContractResults(t, e),
                );
        }
        getValueFromSmartContractResults(t, e) {
          let { results: a = [] } = void 0 === e ? {} : e;
          return a
            .reduce(
              (e, a) =>
                a.receiver === t ? e.add(new this.wallet.BN(a.value)) : e,
              new this.wallet.BN("0"),
            )
            .toString();
        }
        getTxNonce(t) {
          return t.nonce;
        }
        getTxDateTime(t) {
          return new Date(Number(t.timestamp + "000"));
        }
        async fetchStakingInfo(t) {
          const e = await this.request(
            this.getStakingInfoUrl(t),
            this.getInfoMethod(),
          );
          return this.modifyFetchStakingInfo(e);
        }
        modifyFetchStakingInfo(t) {
          const e = t.reduce((t, e) => {
              let {
                contract: a,
                userUnBondable: i,
                userActiveStake: n,
                claimableRewards: r,
                userUndelegatedList: o = [],
              } = e;
              const l = o
                .filter((t) => {
                  let { seconds: e } = t;
                  return e > 0;
                })
                .reduce((t, e) => {
                  let { amount: a } = e;
                  return ((t = t.add(new this.wallet.BN(a))), t);
                }, new this.wallet.BN("0"));
              return (
                (t[a] = {
                  address: a,
                  staked: new s.default(n, this.wallet),
                  unstaking: new s.default(l, this.wallet),
                  rewards: new s.default(r, this.wallet),
                  availableWithdrawals: new s.default(i, this.wallet),
                  pendingWithdrawals: new s.default(l, this.wallet),
                }),
                t
              );
            }, {}),
            [a, i, n, r] = [
              "staked",
              "availableWithdrawals",
              "pendingWithdrawals",
              "rewards",
            ].map((t) =>
              Object.values(e).reduce(
                (e, a) => new this.wallet.BN(e).add(a[t].toBN()).toString(),
                "0",
              ),
            );
          return {
            staked: new s.default(a, this.wallet),
            unstaking: new s.default(n, this.wallet),
            pendingWithdrawals: new s.default(n, this.wallet),
            availableWithdrawals: new s.default(i, this.wallet),
            rewards: new s.default(r, this.wallet),
            validators: e,
          };
        }
      }
      e.default = ElrondApiExplorer;
    },
  },
]);
