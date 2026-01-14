(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [296, 32],
  {
    2687: function (e, t, s) {
      "use strict";
      (function (e) {
        var r = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var a = r(s(69)),
          i = r(s(14)),
          n = r(s(230)),
          o = r(s(8)),
          c = s(19),
          d = s(27),
          l = s(840),
          u = r(s(28)),
          h = r(s(388)),
          f = r(s(7619)),
          g = r(s(7621)),
          p = r(s(794)),
          y = s(2806);
        function m(e, t, s) {
          (T(e, t), t.set(e, s));
        }
        function T(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function b(e, t) {
          return e.get(w(e, t));
        }
        function x(e, t, s) {
          return (e.set(w(e, t), s), s);
        }
        function w(e, t, s) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : s;
          throw new TypeError("Private element is not present on this object");
        }
        const v = new p.default(() =>
            Promise.resolve().then(s.t.bind(null, 2792, 7)),
          ),
          k = new p.default(() => s.e(393).then(s.t.bind(null, 3560, 7))),
          _ = "Tezos",
          E = "XTZ",
          P = "m/44'/1729'/0'/0/0",
          U = 6,
          A = "275000",
          D = 32,
          M = 20;
        var O = new WeakMap();
        class XTZCoin extends (0, y.HasProviders)(n.default) {
          constructor(e) {
            let {
              alias: t,
              notify: s,
              feeData: r,
              explorers: i,
              txWebUrl: n,
              socket: c,
              id: d,
            } = e;
            const l = {
              id: d,
              alias: t,
              notify: s,
              name: _,
              ticker: E,
              decimal: U,
              unspendableBalance: A,
              explorers: i,
              txWebUrl: n,
              socket: c,
              feeData: r,
            };
            (o.default.register("stake_validators_tezos"),
              super(l),
              m(this, O, void 0),
              (0, a.default)(this, "libsodiumWrappers", void 0),
              (this.derivation = P),
              this.setExplorersModules([f.default, g.default]),
              this.loadExplorers(l),
              (this.network = ""),
              (this.prefix = {
                tz1: new Uint8Array([6, 161, 159]),
                edpk: new Uint8Array([13, 15, 37, 217]),
                edsk: new Uint8Array([43, 246, 78, 7]),
                edsig: new Uint8Array([9, 245, 205, 134, 18]),
              }),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (e, t, s) => {
                  (this.getInfo(),
                    t && t.direction
                      ? this.eventEmitter.emit("socket::newtx", {
                          id: this.id,
                          ticker: s,
                          amount: t.amount,
                          txid: t.txid,
                        })
                      : this.eventEmitter.emit("socket::newtx::outgoing", {
                          id: this.id,
                          ticker: s,
                        }));
                },
              ));
          }
          async getLibsodiumWrappers() {
            if (!this.libsodiumWrappers) {
              const { default: e } = await k.get();
              (await e.ready, (this.libsodiumWrappers = e));
            }
            return this.libsodiumWrappers;
          }
          loadWallet(e) {
            return new Promise(async (t, s) => {
              const r = await this.getLibsodiumWrappers(),
                a = r.crypto_sign_seed_keypair(e.slice(0, D));
              a || s(new Error(this.ticker + " can't get a privateKey"));
              const [i, n] = await Promise.all([
                this.bs58EncodeWithPrefix(a.privateKey, this.prefix.edsk),
                this.bs58EncodeWithPrefix(
                  r.crypto_generichash(M, a.publicKey),
                  this.prefix.tz1,
                ),
              ]);
              (x(O, this, i),
                (this.address = n),
                t({ id: this.id, privateKey: i, address: n }));
            });
          }
          async getAddress() {
            if (b(O, this)) {
              const e = await this.getLibsodiumWrappers();
              return this.bs58EncodeWithPrefix(
                e.crypto_generichash(
                  M,
                  await this.bs58Decode(b(O, this), this.prefix.edsk).slice(D),
                ),
                this.prefix.tz1,
              );
            }
            return new c.WalletError({
              type: d.LOAD_WALLET_ERROR,
              error: new Error("privateKey is empty!"),
              instance: this,
            });
          }
          async validateAddress(e) {
            if (!e) return !1;
            try {
              return (await this.bs58Decode(e, this.prefix.tz1), !0);
            } catch (t) {
              return !1;
            }
          }
          async create(e) {
            if (!b(O, this))
              throw new Error("[XTZ] forge() error: no privateKey");
            const [t, s] = await Promise.all([
                this.getFee(),
                this.bs58EncodeWithPrefix(
                  (await this.bs58Decode(b(O, this), this.prefix.edsk)).slice(
                    D,
                  ),
                  this.prefix.edpk,
                ),
              ]),
              r = { headers: { "Content-Type": "application/json" } },
              a = this.getProvider("send").config.baseUrl,
              [n, o, l] = await Promise.all([
                i.default
                  .get(a + "/chains/main/blocks/head/header")
                  .then((e) => e.data),
                i.default
                  .get(
                    `${a}/chains/main/blocks/head/context/contracts/${this.address}/counter`,
                  )
                  .then((e) => e.data),
                i.default
                  .get(
                    `${a}/chains/main/blocks/head/context/contracts/${this.address}/manager_key`,
                  )
                  .then((e) => e.data),
              ]),
              u = [];
            let h = Number(o);
            (l ||
              ((h += 1),
              u.push({
                kind: "reveal",
                fee: t.toString(),
                gas_limit: this.feeData.gasLimit,
                storage_limit: this.feeData.storageLimit,
                public_key: s,
                source: this.address,
                counter: String(h),
              })),
              (h += 1),
              (e.counter = String(h)),
              u.push(
                Object.assign(e, {
                  fee: t.toString(),
                  source: this.address,
                  counter: String(h),
                  gas_limit: this.feeData.gasLimit,
                  storage_limit: this.feeData.storageLimit,
                }),
              ));
            const f = { branch: n.hash, contents: u },
              g = n.protocol,
              p = await i.default.post(
                `${a}/chains/${n.chain_id}/blocks/${n.hash}/helpers/forge/operations`,
                f,
                r,
              ),
              y = p.data;
            f.protocol = g;
            const m = await this.sign(y),
              T = m.sbytes;
            f.signature = m.edsig;
            const x = await i.default.post(
              a + "/chains/main/blocks/head/helpers/preapply/operations",
              [f],
              r,
            );
            if (!Array.isArray(x.data))
              throw new c.ExplorerRequestError({
                type: d.SEND_TRANSACTION_TYPE,
                error: new TypeError(
                  this.ticker + " node fail check transaction!",
                ),
                instance: this,
              });
            const w = x.data.reduce(
              (t, s, r) => (
                t.push(
                  ...s.contents.reduce((t, s) => {
                    let { destination: r, metadata: a } = s;
                    return (
                      "transaction" === e.kind &&
                        r &&
                        r !== e.destination &&
                        t.push("operation is malicious, destination changed"),
                      "undefined" !== typeof a.operation_result &&
                        "failed" === a.operation_result.status &&
                        t.push(...a.operation_result.errors),
                      t
                    );
                  }, []),
                ),
                t
              ),
              [],
            );
            if (w.length > 0)
              throw new c.ExplorerRequestError({
                type: d.SEND_TRANSACTION_TYPE,
                error: w.join(),
                instance: this,
              });
            return T;
          }
          async createTransaction(e) {
            let { address: t, amount: s } = e;
            return this.create({
              kind: "transaction",
              amount: s.toString(),
              destination: t,
            });
          }
          async createDelegationTransaction(e) {
            return this.create({ kind: "delegation", delegate: e });
          }
          async sendTransaction(e) {
            const t = { headers: { "Content-Type": "application/json" } },
              s = this.getProvider("send").config.baseUrl;
            try {
              const r = await i.default.post(
                s + "/injection/operation",
                JSON.stringify(e),
                t,
              );
              return { txid: r.data };
            } catch (r) {
              throw new c.ExplorerRequestError({
                type: d.SEND_TRANSACTION_TYPE,
                error: r,
                instance: this,
              });
            }
          }
          async sign(e) {
            const t = 3,
              s = new Uint8Array([t]);
            let r = this.hex2buf(e);
            r = this.mergebuf(s, r);
            const a = await this.getLibsodiumWrappers(),
              i = a.crypto_sign_detached(
                a.crypto_generichash(D, r),
                await this.bs58Decode(b(O, this), this.prefix.edsk),
                "uint8array",
              ),
              n = await this.bs58EncodeWithPrefix(i, this.prefix.edsig),
              o = e + this.buf2hex(i);
            return { bytes: e, sig: i, edsig: n, sbytes: o };
          }
          async bs58EncodeWithPrefix(t, s) {
            const r = new Uint8Array(s.length + t.length);
            (r.set(s), r.set(t, s.length));
            const { default: a } = await v.get();
            return a.encode(e.from(r, "hex"));
          }
          async bs58Decode(e, t) {
            const { default: s } = await v.get();
            return s.decode(e).slice(t.length);
          }
          buf2hex(e) {
            const t = new Uint8Array(e),
              s = [];
            for (let r = 0; r < t.length; r += 1) {
              const e = 16,
                a = -2,
                i = t[r].toString(e),
                n = ("00" + i).slice(a);
              s.push(n);
            }
            return s.join("");
          }
          hex2buf(e) {
            return new Uint8Array(
              e.match(/[\da-f]{2}/gi).map((e) => parseInt(e, 16)),
            );
          }
          mergebuf(e, t) {
            const s = new Uint8Array(e.length + t.length);
            return (s.set(e), s.set(t, e.length), s);
          }
          async getInfo() {
            return (
              await this.getBalance(),
              {
                balance: this.balance,
                balances: this.balances,
                transactions: [],
              }
            );
          }
          async getBalance() {
            this.balance = this.toMinimalUnit(
              await this.getProvider("balance").getBalance(this.address),
            );
            const e = await this.getProvider("balance")
              .getDelegate(this.address)
              .catch((e) => console.error(e));
            this.balances = {
              available: this.toCurrencyUnit(this.balance),
              staking: {
                total: e ? this.toCurrencyUnit(this.balance) : "0",
                validator: e || "",
              },
            };
          }
          getTransactions(e) {
            let { pageNum: t = 0 } = void 0 === e ? {} : e;
            return this.getProvider("history").getTransactions({
              address: this.address,
              pageNum: t,
            });
          }
          getTransaction(e) {
            return this.getProvider("history").getTransaction(this.address, e);
          }
          async getPredefinedValidators() {
            var e;
            const t = l.coinStakings.find(
              (e) => e.getName().toLowerCase() === this.ticker.toLowerCase(),
            );
            if (
              !t ||
              (null === (e = t.validators) || void 0 === e
                ? void 0
                : e.length) > 0
            )
              return;
            o.default.register("stake_validators_tezos");
            const s = await o.default
              .get("stake_validators_tezos")
              .catch(
                (e) => (
                  u.default.error(e),
                  h.default.find((e) => e.currency === this.ticker)
                ),
              );
            t.modifyPredefinedValidators(
              s.filter((e) => e.stakingCapacity > e.stakingBalance),
            );
          }
          setPrivateKey(e) {
            x(O, this, e);
          }
        }
        t.default = XTZCoin;
      }).call(this, s(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    2853: function (e, t, s) {
      "use strict";
      var r = s(0);
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
            return i.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var a = r(s(2886)),
        i = r(s(2887)),
        n = r(s(2888));
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
      var a = r(s(81));
      const i = ["reward", "unfreeze", "freeze", "vote"],
        n = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: s,
                tokens: r,
                type: n,
                scriptPubKey: o,
              } = e;
              const c = await this.getTransaction(t, s, r);
              (await a.default.filterAndUpdateTransactions([c]),
                "receive" === n &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${c.walletid}::new-socket-tx`,
                    { unconfirmedTx: c },
                  ),
                "confirm" === n &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    c.walletid,
                    c,
                    c.ticker,
                  ),
                i.forEach((e) => {
                  n === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${n}`,
                      c || {},
                    );
                }));
            }
          };
      t.default = n;
    },
    7619: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(s(7620));
      class TzktIoV1Explorer extends a.default {
        getTransactionsUrl(e) {
          return this.config.baseUrl + "/operations/transactions";
        }
        getTransactionUrl(e) {
          return `${this.config.baseUrl}/operations/transactions/${e}`;
        }
        getExtraParam(e, t) {
          return e * t;
        }
        setExtraParam() {}
        getTransactionsParams(e, t, s) {
          return {
            "anyof.sender.target": e,
            limit: t,
            offset: s,
            "sort.desc": "id",
          };
        }
      }
      t.default = TzktIoV1Explorer;
    },
    7620: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(s(129));
      class TzktAbstractExplorer extends a.default {
        getAllowedTickers() {
          return ["XTZ"];
        }
        modifyTransactionsResponse(e, t) {
          return super.modifyTransactionsResponse(e, t);
        }
        getTxConfirmations(e) {
          return "applied" === e.status ? 1 : 0;
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDirection(e, t) {
          return t.sender.address !== e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t)
            ? t.sender.address
            : (t.target && t.target.address) || "";
        }
        getTxValue(e, t) {
          return this.wallet.toCurrencyUnit(t.amount);
        }
        getTxDateTime(e) {
          return new Date(e.timestamp);
        }
        getTxMemo(e) {
          return "";
        }
        async getTransaction(e, t) {
          const s = await this.request(
            this.getTransactionUrl(t),
            this.getTransactionsMethod(),
            this.getTransactionsParams(e, void 0, 0),
            "tx",
            this.getTransactionsOptions(),
          );
          return this.modifyTransactionResponse(s, e);
        }
        async getTransactions(e) {
          let { address: t, pageNum: s, limit: r = this.defaultTxLimit } = e;
          const a = await this.request(
            this.getTransactionsUrl(t),
            this.getTransactionsMethod(),
            this.getTransactionsParams(t, r, this.getExtraParam(s, r)),
            "txs",
            this.getTransactionsOptions(),
          );
          return (
            this.setExtraParam(a[a.length - 1]),
            this.modifyTransactionsResponse(a, t)
          );
        }
        getTxFee() {
          return this.wallet.toCurrencyUnit(this.wallet.feeDefault);
        }
      }
      t.default = TzktAbstractExplorer;
    },
    7621: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = s(2853),
        i = r(s(7622));
      class TezosNodeWithBlockscannerExplorer extends (0,
      a.HasBlockscannerMixin)(i.default) {}
      t.default = TezosNodeWithBlockscannerExplorer;
    },
    7622: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = r(s(129));
      class TezosNodeExplorer extends a.default {
        getAllowedTickers() {
          return ["XTZ"];
        }
        getInfoUrl(e) {
          return `${this.config.baseUrl}/chains/main/blocks/head/context/contracts/${e}/balance`;
        }
        getDelegate(e) {
          return this.request(
            `${this.config.baseUrl}/chains/main/blocks/head/context/contracts/${e}/delegate`,
          );
        }
        getTransaction(e, t) {
          return super.modifyTransactionResponse(t, e);
        }
        async isValidator(e) {
          const t = await this.request(
            `${this.config.baseUrl}/chains/main/blocks/head/context/delegates/${e}`,
          ).catch((e) => console.warn(e));
          return !!t;
        }
        modifyInfoResponse(e) {
          return { balance: e };
        }
        getTxDirection(e, t) {
          return t.contents[0].destination === e;
        }
        getTxConfirmations(e) {
          return 1;
        }
        getTxDateTime(e) {
          return new Date();
        }
        getTxValue(e, t) {
          return this.wallet.toCurrencyUnit(t.contents[0].amount);
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t)
            ? t.contents[0].source
            : t.contents[0].destination;
        }
      }
      t.default = TezosNodeExplorer;
    },
  },
]);
