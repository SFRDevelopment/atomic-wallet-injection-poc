(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [347, 32],
  {
    2672: function (t, e, s) {
      "use strict";
      s.r(e);
      var r,
        n,
        i,
        a = s(230),
        o = s(19),
        d = s(8),
        l = s.n(d),
        u = s(27),
        c = s(37),
        h = s.n(c),
        g = s(28),
        y = s.n(g),
        p = s(388),
        f = s(840),
        m = s(794),
        A = s.n(m),
        T = s(7198),
        w = s.n(T),
        b = s(7199),
        x = s(7200),
        v = s.n(x),
        P = s(2806),
        U = (t, e, s) => {
          if (!e.has(t)) throw TypeError("Cannot " + s);
        },
        S = (t, e, s) => (
          U(t, e, "read from private field"),
          s ? s.call(t) : e.get(t)
        ),
        k = (t, e, s) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, s);
        },
        E = (t, e, s, r) => (
          U(t, e, "write to private field"),
          r ? r.call(t, s) : e.set(t, s),
          s
        ),
        L = (t, e, s) =>
          new Promise((r, n) => {
            var i = (t) => {
                try {
                  o(s.next(t));
                } catch (e) {
                  n(e);
                }
              },
              a = (t) => {
                try {
                  o(s.throw(t));
                } catch (e) {
                  n(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(i, a);
            o((s = s.apply(t, e)).next());
          });
      const N = "Cardano",
        B = "ADA",
        O = 6,
        _ = "m/44'/1815'/0'/0/0",
        D = "0",
        C = "https://adalite.io/api/txs/submit",
        R = "1000000",
        W = "AdaLibApi",
        K = 56,
        I = /(pool[0-9a-zA-Z]{2,50}|[0-9a-fA-F]{6,})/;
      class ADACoin extends Object(P["HasProviders"])(a["default"]) {
        constructor({
          alias: t,
          notify: e,
          feeData: a,
          explorers: o,
          txWebUrl: d,
          submitUrl: u,
          socket: c,
          id: h,
        }) {
          const g = {
            id: h,
            alias: t,
            notify: e,
            name: N,
            ticker: B,
            decimal: O,
            unspendableBalance: D,
            explorers: o,
            txWebUrl: d,
            socket: c,
            feeData: a,
            submitUrl: u || C,
            dustAmount: R,
            dependencies: {
              [W]: new A.a(() => Promise.resolve().then(s.bind(null, 5862))),
            },
          };
          (l.a.register("stake_validators_ada"),
            super(g),
            k(this, r, void 0),
            k(this, n, void 0),
            k(this, i, void 0),
            (this.coreLibrary = null),
            (this.cardanoWalletV2 = null),
            (this.cardanoWalletV4 = null),
            (this.loadLibsPromise = w()(this.loadLibs.bind(this))),
            (this.derivation = _),
            this.setExplorersModules([b["a"], v.a]),
            this.loadExplorers(g),
            E(this, r, {}),
            (this.feePerByte = a.feePerByte),
            (this.constantPart = a.constantPart),
            (this.feeParams = {
              feeCoefficient: this.feePerByte || "44",
              feeConst: this.constantPart || "2800000",
            }),
            (this.dustAmount = R));
        }
        getCoreLibrary() {
          return L(this, null, function* () {
            if (this.coreLibrary) return this.coreLibrary;
            const [{ default: t }] = yield Promise.all([
              this.loadLib(W),
              this.loadLibsPromise(),
            ]);
            return (
              (this.coreLibrary = new t(
                this.cardanoWalletV2,
                this.cardanoWalletV4,
                this.feeParams,
              )),
              this.coreLibrary
            );
          });
        }
        loadLibs() {
          return L(this, null, function* () {
            if (this.cardanoWalletV2 && this.cardanoWalletV4)
              return [this.cardanoWalletV2, this.cardanoWalletV4];
            const t = window.fetch;
            if ("Mobile" === h.a.getPlatformType()) {
              const t = (t, e) => {
                try {
                  WebAssembly.instantiateStreaming = void 0;
                } catch (s) {
                  console.warn("[ADA] WebAssembly not supported");
                }
                return new Promise(function (s, r) {
                  const n = new XMLHttpRequest();
                  (t.endsWith(".wasm") && (n.responseType = "arraybuffer"),
                    n.open((e && e.method) || "GET", t),
                    n.addEventListener("load", function () {
                      this.status >= 200 && this.status < 300
                        ? s({
                            json: () => JSON.parse(n.response),
                            ok: !0,
                            arrayBuffer: () => n.response,
                          })
                        : r(
                            new Error(
                              `[ADA] wasm load error: status ${this.status}: ${n.statusText}`,
                            ),
                          );
                    }),
                    n.addEventListener("error", function () {
                      r(
                        new Error(
                          `[ADA] wasm load error: status ${this.status}: ${n.statusText}`,
                        ),
                      );
                    }),
                    n.send());
                });
              };
              window.fetch = t;
            }
            const e = "ios" === h.a.getOS(),
              r = [s.e(400).then(s.t.bind(null, 6439, 7))],
              n = e
                ? [
                    Promise.all([s.e(395), s.e(427)]).then(
                      s.t.bind(null, 9211, 7),
                    ),
                  ]
                : [
                    Promise.all([s.e(396), s.e(424)]).then(
                      s.t.bind(null, 9214, 7),
                    ),
                  ];
            return Promise.all([...r, ...n])
              .then((t) => {
                ((this.cardanoWalletV2 = t[0]), (this.cardanoWalletV4 = t[1]));
              })
              .catch((t) => {
                console.error(t);
              })
              .finally(() => {
                window.fetch = t;
              });
          });
        }
        validateStakePoolAddress(t) {
          return t.length === K && I.test(t);
        }
        setPrivateKey(t, e) {
          return L(this, null, function* () {
            let s = t;
            (null == t ? void 0 : t.shelleyKey) && (s = t.shelleyKey);
            const a = yield this.getCoreLibrary(),
              o = a.validateShelleyPrivateKey(s);
            if (!o)
              throw (
                (S(this, r).byronKey = s),
                new Error("Legacy Byron Private key appears")
              );
            ((S(this, r).shelleyKey = s),
              (S(this, r).byronKey = t.byronKey),
              (S(this, r).byronAddress = t.byronAddress),
              E(this, i, a.getCip1852AccountFromPrivateKey(s)),
              E(this, n, a.getLegacyAccountFromMnemonic(e)));
          });
        }
        setAddress(t) {
          return L(this, null, function* () {
            const e = yield this.getCoreLibrary(),
              s = e.validateShelleyAddress(t);
            s ? (this.address = t) : (S(this, r).byronAddress = t);
          });
        }
        getAddress() {
          return S(this, r).shelleyKey
            ? this.address
            : new o["WalletError"]({
                type: u["LOAD_WALLET_ERROR"],
                error: new Error("Could not get address, pkey is not exists"),
                instance: this,
              });
        }
        loadWallet(t, e) {
          return L(this, null, function* () {
            try {
              const t = yield this.getCoreLibrary();
              ((S(this, r).shelleyKey = yield t.getPrivateKeyByMnemonic(e)),
                (S(this, r).byronKey =
                  yield t.getLegacyPrivateKeyByMnemonic(e)),
                E(this, n, t.getLegacyAccountFromMnemonic(e)),
                (S(this, r).byronAddress =
                  yield t.getLegacyAddressByPrivateKeySync(
                    S(this, r).byronKey,
                  )),
                (this.address = yield t.getAddressByPrivateKey()));
            } catch (t) {
              (console.error(t),
                console.error(
                  "ADA load walled failed, core library is not initialized",
                ));
            }
            return {
              id: this.id,
              privateKey: S(this, r),
              address: this.address,
            };
          });
        }
        validateAddress(t) {
          return L(this, null, function* () {
            const e = yield this.getCoreLibrary();
            return e.validateAddress(t);
          });
        }
        isDustAmount(t, e) {
          return L(this, null, function* () {
            const s = e || (yield this.availableBalance()),
              r = new this.BN(this.dustAmount),
              n = new this.BN(this.toMinimalUnit(s)),
              i = new this.BN(this.toMinimalUnit(t)),
              a = n.sub(i);
            return i.lt(r)
              ? "Minimal amount to send is 1 ADA"
              : !(!a.gt(new this.BN("0")) || !a.lt(r)) &&
                  "Minimal change is 1 ADA, try to send another amount";
          });
        }
        createTransaction(t) {
          return L(
            this,
            arguments,
            function* ({
              address: t,
              amount: e,
              changeAddress: s = this.address,
            }) {
              if ("string" !== typeof t)
                throw new TypeError(
                  "ADA: createTransaction: address must be string",
                );
              if ("string" !== typeof e)
                throw new TypeError(
                  "ADA: createTransaction: amount must be string",
                );
              if (!S(this, r).shelleyKey)
                throw new o["WalletError"]({
                  type: u["SEND_TRANSACTION_TYPE"],
                  error: new Error("privateKey must be loaded"),
                  instance: this,
                });
              const [a, d, l] = yield Promise.all([
                this.getProvider("block").getLatestBlock(),
                this.getUnspentOutputs(s),
                this.getCoreLibrary(),
              ]);
              try {
                return l.createTransaction({
                  address: t,
                  amount: e,
                  changeAddress: s,
                  utxo: d,
                  slotNo: a.slot_no,
                  legacyAccount: S(this, n),
                  cip: S(this, i),
                });
              } catch (c) {
                throw new o["WalletError"]({
                  type: u["SEND_TRANSACTION_TYPE"],
                  error: c,
                  instance: this,
                });
              }
            },
          );
        }
        createClaimTransaction(t) {
          return L(this, null, function* () {
            const e = t || (yield this.getLegacyAddressUnspentOutputs());
            if (!e || 0 === e.length) throw new Error("Nothing to claim");
            const [s, n, i] = yield Promise.all([
                this.getProvider("block").getLatestBlock(),
                this.getLegacyAddressAvailableBalance({
                  address: this.address,
                  legacyUtxo: e,
                }),
                this.getCoreLibrary(),
              ]),
              a = i.createTransaction({
                address: this.address,
                amount: n,
                changeAddress: S(this, r).byronAddress,
                utxo: e,
                slotNo: s.slot_no,
              });
            return a;
          });
        }
        getLegacyAddressUnspentOutputs() {
          return L(this, null, function* () {
            const { byronAddress: t } = S(this, r),
              e = yield this.getUnspentOutputs(t);
            return e;
          });
        }
        getLegacyAddressAvailableBalance(t) {
          return L(this, arguments, function* ({ legacyUtxo: t, address: e }) {
            const { byronAddress: s } = S(this, r),
              n = t || (yield this.getUnspentOutputs(s)),
              i = n.reduce(
                (t, e) => t.add(new this.BN(e.amount)),
                new this.BN("0"),
              );
            if (0 === Number(i)) return i;
            const a = yield this.getFee({
                amount: i,
                address: e,
                utxos: n,
                changeAddress: s,
              }),
              o = i.sub(a);
            return o.lt(new this.BN(this.dustAmount))
              ? new this.BN("0")
              : o.toString();
          });
        }
        getUnspentOutputs(t = this.address) {
          return this.getProvider("utxo").getUnspentOutputs(t);
        }
        getFee() {
          return L(
            this,
            arguments,
            function* ({
              amount: t = null,
              address: e,
              utxos: s,
              changeAddress: r,
              certs: n,
            } = {}) {
              const i = e && e.length > 0 ? e : this.address,
                [a, o, d] = yield Promise.all([
                  s || (yield this.getUnspentOutputs(r || this.address)),
                  this.getProvider("block").getLatestBlock(),
                  this.getCoreLibrary(),
                ]);
              let l = Number(t);
              l || (l = Number(this.balance) ? this.balance : "1");
              const u = d.estimateFee({
                address: i,
                amount: this.toMinimalUnit(l),
                outputs: a,
                ttl: o.slot_no,
                certs: n,
              });
              return new this.BN(u);
            },
          );
        }
        getVoteFee() {
          return L(this, arguments, function* ({ utxos: t } = {}) {
            const [e] = yield Promise.all([this.getCoreLibrary()]),
              s = this.address,
              r = Number(this.balance),
              n = e.cardano.Certificates.new(),
              i = e.getRewardAddress(this.address);
            return (
              n.add(e.createVoteDelegationCertificate(i.payment_cred())),
              this.getFee({ amount: r, utxos: t, address: s, certs: n })
            );
          });
        }
        getInfo() {
          return L(this, null, function* () {
            const [t, e] = yield Promise.all([
                this.getBalance(),
                this.getCoreLibrary(),
              ]),
              s = e.getRewardAddress(this.address).to_address().to_bech32(),
              r = yield this.getProvider("balance").getAccountState(s);
            return (
              (this.balance = t),
              (this.balances = {
                available: this.toCurrencyUnit(t),
                rewards: r && r.reward,
                staking: {
                  total: r && r.poolId ? this.balance : "0",
                  validator: r && r.poolId,
                },
              }),
              { balance: this.balance, balances: this.balances }
            );
          });
        }
        createDelegationTransaction(t, e) {
          return L(this, null, function* () {
            if (!S(this, r).shelleyKey)
              throw new o["WalletError"]({
                type: u["SEND_TRANSACTION_TYPE"],
                error: new Error("privateKey must be loaded"),
                instance: this,
              });
            const [s, n, i] = yield Promise.all([
              this.getProvider("block").getLatestBlock(),
              this.getUnspentOutputs(this.address),
              this.getCoreLibrary(),
            ]);
            return i.createDelegationTransaction({
              utxo: n,
              slotNo: s.slot_no,
              paymentAddress: this.address,
              poolId: t,
              stakeAddressRegistered: e,
            });
          });
        }
        stake(t) {
          return L(this, null, function* () {
            const e = yield this.getCoreLibrary(),
              s = e.getRewardAddressHexFromAddressStr(this.address),
              { [s]: r } =
                yield this.getProvider("regHistory").getRegistrationHistory(s),
              n = r && r[0] && "StakeRegistration" === r[0].certType,
              i = yield this.createDelegationTransaction(t, n);
            return this.sendTransaction(i);
          });
        }
        claim() {
          return L(this, null, function* () {
            let t = yield this.getUnspentOutputs(this.address);
            const [e, s] = yield Promise.all([
                this.getProvider("block").getLatestBlock(),
                this.getCoreLibrary(),
              ]),
              r = s.getRewardAddress(this.address).to_address().to_bech32(),
              { drepView: a } =
                yield this.getProvider("stake").getAccountState(r);
            if (!a) {
              const r = yield this.availableBalance(
                  yield this.getVoteFee({ utxos: t }),
                ),
                a = yield s.createVoteDelegationTransaction({
                  address: this.address,
                  amount: this.toMinimalUnit(r),
                  changeAddress: this.address,
                  utxo: t,
                  slotNo: e.slot_no,
                  legacyAccount: S(this, n),
                  cip: S(this, i),
                });
              (yield this.sendTransaction(a), (t = a.utxo));
            }
            const o = s.getRewardAddress(this.address),
              d = o.to_address().to_bech32(),
              l = yield this.getProvider("balance").getAccountState(d),
              u = yield s.createWithdrawalTransaction({
                paymentAddress: this.address,
                utxo: t,
                slotNo: e.slot_no,
                rewardAddress: o,
                amountToWithdraw: l.reward,
              });
            return this.sendTransaction(u);
          });
        }
        getDelegatedPoolKey() {
          const t = this.getProvider("history").lastDelegationCert;
          return t ? t.poolKeyHash : "";
        }
        getPredefinedValidators() {
          return L(this, null, function* () {
            var t;
            const e = f["coinStakings"].find(
              (t) => t.getName().toLowerCase() === this.ticker.toLowerCase(),
            );
            if (!e || (null == (t = e.validators) ? void 0 : t.length) > 0)
              return;
            l.a.register("stake_validators_ada");
            const s = yield l.a
              .get("stake_validators_ada")
              .catch(
                (t) => (
                  y.a.error(t),
                  p.find((t) => t.currency === this.ticker)
                ),
              );
            e.modifyPredefinedValidators(s);
          });
        }
      }
      ((r = new WeakMap()),
        (n = new WeakMap()),
        (i = new WeakMap()),
        (e["default"] = ADACoin));
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    7198: function (t, e, s) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = (t) => {
        let e = null;
        return () => (
          e ||
            (e = t().finally(() => {
              e = null;
            })),
          e
        );
      };
      e.default = r;
    },
    7199: function (t, e, s) {
      "use strict";
      (function (t) {
        var r = s(11),
          n = s.n(r),
          i = s(129),
          a = s.n(i),
          o = s(27),
          d = (t, e, s) =>
            new Promise((r, n) => {
              var i = (t) => {
                  try {
                    o(s.next(t));
                  } catch (e) {
                    n(e);
                  }
                },
                a = (t) => {
                  try {
                    o(s.throw(t));
                  } catch (e) {
                    n(e);
                  }
                },
                o = (t) =>
                  t.done ? r(t.value) : Promise.resolve(t.value).then(i, a);
              o((s = s.apply(t, e)).next());
            });
        class AdaAtomicExplorer extends a.a {
          getAllowedTickers() {
            return ["ADA"];
          }
          getApiPrefix() {
            return "/";
          }
          getLatestBlockUrl() {
            return this.getApiPrefix() + "lastblock";
          }
          getInfoUrl(t) {
            return this.getApiPrefix() + "balance";
          }
          getInfoParams(t) {
            return { address: t };
          }
          getAccountStateUrl() {
            return this.getApiPrefix() + "stakingAccount";
          }
          getTransactionUrl() {
            return this.getApiPrefix() + "tx";
          }
          getTransactionParams(t) {
            return { txid: t };
          }
          getTransactionsUrl() {
            return this.getApiPrefix() + "txs";
          }
          getTransactionsParams(t, e = 0, s = this.defaultTxLimit) {
            return { address: t, limit: s };
          }
          getUnspentOutputsUrl() {
            return this.getApiPrefix() + "utxo";
          }
          getUnspentOutputsParams(t) {
            return { address: t };
          }
          getSendTransactionUrl() {
            return this.getApiPrefix() + "submit";
          }
          getSendTransactionMethod() {
            return "POST";
          }
          getSendTransactionParams(e) {
            return { tx: t.from(e).toString("hex"), network: "mainnet" };
          }
          getTxHash(t) {
            return t.hash;
          }
          getTxDirection(t, e) {
            return !e.inputs.find(({ address: e }) => t === e);
          }
          getTxOtherSideAddress(t, e) {
            const s = !this.getTxDirection(t, e);
            if (!s) {
              const s = e.inputs.find(({ address: e }) => e !== t);
              return s.address;
            }
            {
              const s = e.outputs.find(({ address: e }) => e !== t);
              if (s) return s.address;
            }
            return t;
          }
          getTxValueSatoshis(t, e) {
            const s = this.getTxDirection(t, e),
              r = e.inputs.concat(e.outputs).every(({ address: e }) => e === t);
            if (r)
              return e.outputs.reduce(
                (t, e) => t.add(new n.a(e.value)),
                new n.a("0"),
              );
            const i = e.outputs.reduce(
              (e, r) =>
                s
                  ? r.address === t
                    ? e.add(new n.a(r.value))
                    : e
                  : r.address !== t
                    ? e.add(new n.a(r.value))
                    : e,
              new n.a("0"),
            );
            return i;
          }
          getTxValue(t, e) {
            return this.wallet.toCurrencyUnit(this.getTxValueSatoshis(t, e));
          }
          getTxDateTime(t) {
            return new Date(t.block.time);
          }
          getBalance(t) {
            return d(this, null, function* () {
              const e = yield this.getInfo(t);
              return e && e.balance;
            });
          }
          getAccountState(t) {
            return d(this, null, function* () {
              return this.request(
                this.getAccountStateUrl(),
                "get",
                { address: t },
                this.getInfoOptions(),
              ).catch((t) => console.warn("Error", t));
            });
          }
          modifyInfoResponse(t) {
            let e = t.balance;
            return (0 === Number(e) && (e = "0"), { balance: e });
          }
          modifyUnspentOutputsResponse(t, e) {
            return e.map(
              ({ amount: t, hash: e, tx_index: s, receiver: r }) => ({
                amount: t,
                tx_hash: e,
                tx_index: s,
                receiver: r,
              }),
            );
          }
          modifySendTransactionResponse(t, e) {
            return (console.warn("RESPONSE", t), { txid: e });
          }
          sendTransaction(t) {
            return d(this, arguments, function* ({ rawtx: t, txid: e }) {
              const s = yield this.request(
                this.getSendTransactionUrl(),
                this.getSendTransactionMethod(),
                this.getSendTransactionParams(t),
                o["SEND_TRANSACTION_TYPE"],
                this.getSendOptions(),
              );
              return this.modifySendTransactionResponse(s, e);
            });
          }
          getTxFee() {
            return null;
          }
          getTxConfirmations() {
            return 1;
          }
        }
        e["a"] = AdaAtomicExplorer;
      }).call(this, s(2).Buffer);
    },
    7200: function (t, e, s) {
      "use strict";
      (function (t) {
        var r = s(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var n = r(s(129)),
          i = s(19),
          a = s(27);
        class YoroExplorer extends n.default {
          constructor() {
            (super(...arguments),
              (this.lastTx = void 0),
              (this.updating = !1),
              (this.txs = []),
              (this.lastDelegationCert = null));
          }
          getAllowedTickers() {
            return ["ADA"];
          }
          async getInfo(t) {
            const e = await this.getBalance(t);
            return { balance: e, transactions: this.wallet.transactions };
          }
          async getTransactions(t) {
            let {
              address: e,
              offset: s = 0,
              limit: r = this.defaultTxLimit,
            } = t;
            const { hash: n = null } = await this.getLatestBlock();
            if (!n) return this.txs;
            const i = await this.getTransactionsQueued({
              blockHash: n,
              address: e,
            });
            return i
              .filter(
                ((t) => (e) => {
                  let { txid: s } = e;
                  return !t.has(s) && t.add(s);
                })(new Set()),
              )
              .sort((t, e) => e.timestamp - t.timestamp);
          }
          async getTransactionsQueued(t) {
            let { blockHash: e, address: s, recursion: r = !1, after: n } = t;
            if (this.updating && !r) return this.txs;
            if ((this.updating || r || (this.txs = []), this.lastTx)) {
              const t = { tx: this.lastTx.hash, block: this.lastTx.block_hash };
              n = n || t;
            }
            this.updating = !0;
            const i = String(e),
              a = await this.request(
                this.getTransactionsUrl(s),
                this.getTransactionsMethod(),
                this.getTransactionsParams(s, i, n),
                "GetTxs",
                this.getInfoOptions(),
              ).catch(() => {
                this.updating = !1;
              });
            if (!a) return ((this.updating = !1), this.txs);
            const o = this.modifyTransactionsResponse(a, s);
            if ((this.txs.push(...o), a.length > 0)) {
              const t = a[a.length - 1];
              t.certificates.length > 0 &&
                t.certificates.forEach((t) => {
                  "StakeDelegation" === t.kind && (this.lastDelegationCert = t);
                });
              const e = { tx: t.hash, block: t.block_hash };
              this.lastTx = t;
              const r = await this.getTransactionsQueued({
                blockHash: i,
                address: s,
                recursion: !0,
                after: e,
              });
              return r;
            }
            return ((this.lastUpdatedTx = !1), (this.updating = !1), this.txs);
          }
          getLatestBlockUrl() {
            return "/api/v2/bestblock";
          }
          getTransactionsUrl(t) {
            return "/api/v2/txs/history";
          }
          getUnspentOutputsUrl() {
            return "/api/txs/utxoForAddresses";
          }
          getUTXOUrl() {
            return "/api/txs/utxoForAddresses";
          }
          getRegistrationHistoryUrl() {
            return "/api/getRegistrationHistory";
          }
          getTxUrl(t) {
            return "/api/txs/summary/" + t;
          }
          getAccountStateUrl() {
            return "/api/getAccountState";
          }
          getInfoOptions() {
            return { headers: { "tangata-manu": "atomic" } };
          }
          getBroadcastUrl() {
            return this.config.submitUrl || "api/txs/signed";
          }
          getTransactionsMethod() {
            return "post";
          }
          getTransactionsParams(t, e, s) {
            return (
              void 0 === s && (s = void 0),
              { addresses: [t], untilBlock: e, after: s }
            );
          }
          modifyTransactionsResponse(t, e) {
            return super.modifyTransactionsResponse(t.reverse(), e);
          }
          getTxHash(t) {
            return t.hash;
          }
          getTxDirection(t, e) {
            return !e.inputs.find((e) => t === e.address);
          }
          getTxOtherSideAddress(t, e) {
            const s = this.getTxDirection(t, e);
            if (s) {
              const s = e.inputs.find((e) => t !== e.address);
              return s.address;
            }
            const r = e.outputs.find((e) => t !== e.address);
            return r ? r.address : t;
          }
          getTxValue(t, e) {
            const s = this.getTxDirection(t, e),
              r = [];
            e.outputs.forEach((e, n) => {
              s && e.address === t
                ? r.push(n)
                : s || e.address === t || r.push(n);
            });
            const n = e.inputs.map((t) => t.address),
              i = e.outputs.map((t) => t.address),
              a = n.concat(i).every((e) => e === t);
            let o;
            if (a) {
              const t = e.outputs.reduce(
                  (t, e) => t.add(new this.wallet.BN(e.amount)),
                  new this.wallet.BN(0),
                ),
                s = e.inputs.reduce(
                  (t, e) => t.add(new this.wallet.BN(e.amount)),
                  new this.wallet.BN(0),
                );
              o = s.sub(t).toString();
            } else
              o = r
                .reduce(
                  (t, s) => t.add(new this.wallet.BN(e.outputs[s].amount)),
                  new this.wallet.BN(0),
                )
                .toString();
            return this.wallet.toCurrencyUnit(o);
          }
          getTxDateTime(t) {
            return new Date(t.time);
          }
          getTxConfirmations(t) {
            return Number(t.best_block_num) - Number(t.block_num);
          }
          async getBalance(t) {
            const e = await this.getUTXO(t).catch((t) => {
                throw new i.ExplorerRequestError({
                  type: a.GET_BALANCE_TYPE,
                  error: t,
                  url: this.getUTXOUrl(),
                  instance: this,
                });
              }),
              s = e.reduce((t, e) => {
                let { amount: s } = e;
                return t.add(new this.wallet.BN(s));
              }, new this.wallet.BN(0));
            return s.toString();
          }
          async getUnspentOutputs(t) {
            return this.getUTXO(t);
          }
          async getUTXO(t) {
            const e = await this.request(
              this.getUTXOUrl(),
              "post",
              { addresses: [t] },
              void 0,
              this.getInfoOptions(),
            ).catch((t) => {
              throw new i.ExplorerRequestError({
                type: a.GET_UTXO_TYPE,
                error: t,
                url: this.getUTXOUrl(),
                instance: this,
              });
            });
            return e;
          }
          async sendTransaction(e) {
            let { rawtx: s, txid: r } = e;
            const n = t.from(s),
              o = n.toString("base64"),
              d = await this.request(
                this.getBroadcastUrl(),
                "post",
                { signedTx: o },
                void 0,
                this.getInfoOptions(),
              ).catch((t) => {
                throw new i.ExplorerRequestError({
                  type: a.SEND_TRANSACTION_TYPE,
                  error: t,
                  url: this.getBroadcastUrl(),
                  instance: this,
                });
              });
            if (!d)
              throw new i.ExplorerRequestError({
                type: a.SEND_TRANSACTION_TYPE,
                error:
                  "ADA: sendTransaction: response.data doesn't have Right property",
                url: this.getBroadcastUrl(),
                instance: this,
              });
            return { txid: r };
          }
          async getTxSummary(t) {
            return this.request(
              this.getTxUrl(t),
              "get",
              {},
              void 0,
              this.getInfoOptions(),
            );
          }
          async getTxsSummary(t) {
            const e = [];
            for (const s of t) {
              const t = await this.getTxSummary(s);
              e.push(t);
            }
            return e;
          }
          async getRegistrationHistory(t) {
            return this.request(
              this.getRegistrationHistoryUrl(),
              "post",
              { addresses: [t] },
              void 0,
              this.getInfoOptions(),
            );
          }
          async getAccountState(t) {
            return this.request(
              this.getAccountStateUrl(),
              "post",
              { addresses: [t] },
              void 0,
              this.getInfoOptions(),
            );
          }
        }
        e.default = YoroExplorer;
      }).call(this, s(2).Buffer);
    },
  },
]);
