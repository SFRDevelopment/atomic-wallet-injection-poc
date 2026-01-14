(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [340, 32],
  {
    2675: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var r = a(n(230)),
          s = a(n(794)),
          i = n(19),
          o = n(27),
          c = a(n(7209)),
          d = a(n(7210)),
          l = a(n(7211)),
          u = n(2806);
        function h(e, t, n) {
          (g(e, t), t.set(e, n));
        }
        function g(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function f(e, t) {
          return e.get(m(e, t));
        }
        function p(e, t, n) {
          return (e.set(m(e, t), n), n);
        }
        function m(e, t, n) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : n;
          throw new TypeError("Private element is not present on this object");
        }
        const w = "Polkadot",
          T = "DOT",
          x = "m/44'/354'/0'/0/0",
          b = 10,
          y = "10000000000",
          v = 0,
          P = 32,
          S = "Stash",
          E = new s.default(() =>
            Promise.all([n.e(21), n.e(24)]).then(n.t.bind(null, 4527, 7)),
          ),
          k = new s.default(() =>
            Promise.all([
              n.e(21),
              n.e(24),
              n.e(54),
              n.e(36),
              n.e(40),
              n.e(35),
              n.e(125),
            ]).then(n.t.bind(null, 9352, 7)),
          ),
          M = new s.default(() => n.e(21).then(n.t.bind(null, 2757, 7))),
          A = new s.default(() => n.e(350).then(n.t.bind(null, 9910, 7)));
        var N = new WeakMap();
        class DOTCoin extends (0, u.HasProviders)(
          (0, u.HasBlockScanner)(r.default),
        ) {
          constructor(e) {
            let {
              alias: t,
              notify: n,
              feeData: a,
              explorers: r,
              txWebUrl: s,
              socket: i,
              id: o,
            } = e;
            const u = {
              id: o,
              alias: t,
              notify: n,
              name: w,
              ticker: T,
              decimal: b,
              unspendableBalance: y,
              explorers: r,
              txWebUrl: s,
              feeData: a,
              socket: i,
            };
            (super(u),
              h(this, N, void 0),
              (this.derivation = x),
              this.setExplorersModules([c.default, d.default, l.default]),
              this.loadExplorers(u),
              (this.fee = a.fee),
              (this.nonce = 0),
              (this.transactions = []));
          }
          async loadWallet(e, t) {
            const { Sr25519Account: n } = await A.get(),
              a = e.slice(0, P),
              r = n.other.fromMiniSecret(a);
            return (
              p(N, this, a.toString("hex")),
              (this.address = r.prefixedAddress(v)),
              { id: this.id, privateKey: f(N, this), address: this.address }
            );
          }
          async validateAddress(e) {
            const { Sr25519Account: t } = await A.get();
            try {
              const n = await t.utils.encodeSubstrateAddress(
                t.utils.decodeSubstrateAddress(e),
                v,
              );
              return n === e;
            } catch (n) {
              return (console.warn(n), !1);
            }
          }
          async getInfo() {
            const {
              balance: e,
              balances: t = {},
              nonce: n,
            } = await this.getProvider("balance").getInfo(this.address);
            return (
              e && (this.balance = e),
              n && (this.nonce = n),
              t && Object.keys(t).length > 0 && (this.balances = t),
              { balance: e, balances: this.balances }
            );
          }
          async createTransaction(t) {
            let { address: n, amount: a } = t;
            if (!n || 0 === !n.length)
              throw new i.WalletError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error("Destination address must be specified"),
                instance: this,
              });
            const [
                { number: r, hash: s },
                {
                  genesisHash: c,
                  specVersion: d,
                  txVersion: l,
                  specName: u,
                  chainName: h,
                },
                g,
                { EXTRINSIC_VERSION: p },
                { getRegistry: m, construct: w, methods: T },
              ] = await Promise.all([
                this.getProvider("meta").getLatestBlock(),
                this.getProvider("meta").getTxMeta(),
                this.getProvider("meta").getMetadata(),
                E.get(),
                k.get(),
              ]),
              x = m({
                chainName: h,
                specName: u,
                specVersion: d,
                metadataRpc: g,
              }),
              b = {
                address: this.address,
                blockHash: s,
                blockNumber: x.createType("BlockNumber", r).toNumber(),
                genesisHash: c,
                nonce: this.nonce,
                tip: 0,
                eraPeriod: 64,
                specVersion: d,
                transactionVersion: l,
                metadataRpc: g,
              },
              y = T.balances.transferKeepAlive({ dest: n, value: a }, b, {
                metadataRpc: g,
                registry: x,
              }),
              v = w.signingPayload(y, { registry: x }),
              { Sr25519Account: P } = await A.get(),
              S = P.other.fromMiniSecret(e.from(f(N, this), "hex")),
              { u8aConcat: D } = await M.get(),
              { signature: _ } = x
                .createType("ExtrinsicPayload", v, { version: p })
                .sign({ sign: (e) => D(new Uint8Array([1]), S.sign(e)) });
            return w.signedTx(y, _, { metadataRpc: g, registry: x });
          }
          async sendTransaction(e) {
            return this.getProvider("send").sendTransaction({
              rawtx: e,
              privateKey: f(N, this),
            });
          }
          async createDelegationTransaction(e, t) {
            const n = {
              address: this.address,
              amount: t,
              validatorAddresses: [e],
              rewardDestination: S,
            };
            return this.getProvider("send").sendDelegationTransaction({
              rawtx: n,
              privateKey: f(N, this),
            });
          }
          async createUnDelegationTransaction(e) {
            const t = { amount: e };
            return this.getProvider("send").sendUnDelegationTransaction({
              rawtx: t,
              privateKey: f(N, this),
            });
          }
          setPrivateKey(e) {
            p(N, this, e);
          }
        }
        t.default = DOTCoin;
      }).call(this, n(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    7209: function (e, t, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(n(129));
      class PolkadotSidecarExplorer extends r.default {
        getAllowedTickers() {
          return ["DOT"];
        }
        getInfoUrl(e) {
          return `accounts/${e}/balance-info`;
        }
        getLatestBlockUrl() {
          return "blocks/head";
        }
        getSendTransactionUrl() {
          return "transaction";
        }
        getSendTransactionParam() {
          return "tx";
        }
        getTxMetaUrl() {
          return "transaction/material";
        }
        getTxMetaMethod() {
          return super.getInfoMethod();
        }
        getTxMetaParams() {
          return { noMeta: !1 };
        }
        getMetadataUrl() {
          return "runtime/metadata/v15";
        }
        getMetadataMethod() {
          return super.getInfoMethod();
        }
        getMetadata() {
          return this.request(this.getMetadataUrl(), this.getTxMetaMethod());
        }
        getTxMeta() {
          return this.request(
            this.getTxMetaUrl(),
            this.getTxMetaMethod(),
            this.getTxMetaParams(),
          );
        }
        async sendTransaction(e) {
          let { rawtx: t } = e;
          return super.sendTransaction(t);
        }
        modifyInfoResponse(e) {
          if (!e) return {};
          const { free: t, frozen: n, nonce: a } = e,
            r = new this.wallet.BN(t).sub(new this.wallet.BN(n)).toString(),
            s = {
              available: this.wallet.toCurrencyUnit(r),
              free: t,
              frozen: n,
            };
          return { balance: r, balances: s, nonce: a };
        }
        modifySendTransactionResponse(e) {
          return { txid: e.hash };
        }
      }
      t.default = PolkadotSidecarExplorer;
    },
    7210: function (e, t, n) {
      "use strict";
      var a = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(n(11)),
        s = a(n(129));
      class PolkaScanExplorer extends s.default {
        getAllowedTickers() {
          return ["DOT"];
        }
        getApiPrefix() {
          return "api";
        }
        getInfoUrl(e) {
          return this.getApiPrefix() + "/scan/search";
        }
        getInfoMethod() {
          return "POST";
        }
        getInfoParams(e) {
          return { key: e, page: 0, row: 1 };
        }
        modifyInfoResponse(e) {
          const t = { balance: 0, ring_lock: 0, nonce: 0 };
          return (
            e.data &&
              e.data.account &&
              ((t.balance = new r.default(
                this.wallet.toMinimalUnit(e.data.account.balance),
              )
                .sub(
                  new r.default(
                    this.wallet.toMinimalUnit(e.data.account.ring_lock),
                  ),
                )
                .toString()),
              (t.ring_lock = e.data.account.ring_lock),
              (t.nonce = e.data.account.nonce)),
            {
              balance: t.balance,
              balances: {
                available: this.wallet.toCurrencyUnit(t.balance),
                staking: t.ring_lock,
              },
              transactions: this.wallet.transactions,
              nonce: t.nonce,
            }
          );
        }
        getTransactionUrl(e) {
          return this.getApiPrefix() + "/scan/extrinsic";
        }
        getTransactionMethod() {
          return "POST";
        }
        getTransactionParams(e) {
          return { hash: e };
        }
        getTransactionsMethod() {
          return "POST";
        }
        getTransactionsUrl(e) {
          return this.getApiPrefix() + "/v2/scan/transfers";
        }
        getTransactionsParams(e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = this.defaultTxLimit),
            {
              address: e,
              page:
                t > this.defaultTxLimit
                  ? parseInt(t / this.defaultTxLimit, 10)
                  : 0,
              row: n,
            }
          );
        }
        modifyTransactionsResponse(e, t) {
          var n;
          return null !== e &&
            void 0 !== e &&
            null !== (n = e.data) &&
            void 0 !== n &&
            n.transfers
            ? super.modifyTransactionsResponse(
                e.data.transfers.filter((e) => {
                  let { success: t } = e;
                  return t;
                }),
                t,
              )
            : [];
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDirection(e, t) {
          return t.to === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? t.from : t.to;
        }
        getTxValue(e, t) {
          return Number(t.amount);
        }
        getTxDateTime(e) {
          return new Date(Number(e.block_timestamp + "000"));
        }
        getTxConfirmations(e) {
          return Number(e.success) || 0;
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fee) || 0);
        }
      }
      t.default = PolkaScanExplorer;
    },
    7211: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var r = a(n(129)),
          s = a(n(794)),
          i = n(19),
          o = n(27);
        const c = new s.default(() =>
          Promise.all([
            n.e(21),
            n.e(24),
            n.e(54),
            n.e(36),
            n.e(40),
            n.e(35),
            n.e(174),
            n.e(133),
            n.e(126),
          ]).then(n.t.bind(null, 9912, 7)),
        );
        class PolkadotNodeExplorer extends r.default {
          constructor() {
            (super(...arguments), (this.endpoint = null));
          }
          async loadEndpoint() {
            if (!this.endpoint) {
              const e = await c.get("WsProvider"),
                t = new e(this.config.baseUrl),
                n = await c.get("ApiPromise");
              this.endpoint = await n.create({ provider: t });
            }
            return !0;
          }
          getAllowedTickers() {
            return ["DOT"];
          }
          async getInfo(e) {
            if (!e) return {};
            await this.loadEndpoint();
            const { nonce: t, data: n } =
              await this.endpoint.query.system.account(e);
            return {
              balance: n.free.sub(n.miscFrozen).toString(),
              balances: {
                available: n.free.sub(n.miscFrozen).toString(),
                free: n.free.toString(),
                frozen: n.miscFrozen.toString(),
              },
              transactions: this.wallet.transactions,
              nonce: t.toString(),
            };
          }
          async sendTransaction(e) {
            let { rawtx: t, privateKey: n } = e;
            await this.loadEndpoint();
            const a = await this.endpoint.rpc.author.submitExtrinsic(t);
            return { txid: a.toHex() };
          }
          async sendDelegationTransaction(t) {
            let { rawtx: n, privateKey: a } = t;
            await this.loadEndpoint();
            const r = await c.get("Keyring"),
              s = new r({ type: "sr25519" }),
              d = e.from(a, "hex"),
              l = s.addFromSeed(d),
              u = this.endpoint.tx.staking.bond(
                l.publicKey,
                Number(n.amount),
                n.rewardDestination,
              );
            try {
              return new Promise((e) => {
                u.signAndSend(l, async (t) => {
                  let { events: a = [], status: r } = t;
                  if (r.isInBlock)
                    try {
                      const t = this.endpoint.tx.staking.nominate(
                          n.validatorAddresses,
                        ),
                        a = await t.signAndSend(l);
                      return e({ txid: a.toString("hex") });
                    } catch (s) {
                      throw new i.ExplorerRequestError({
                        type: o.SEND_TRANSACTION_TYPE,
                        error: new Error(s.message),
                        instance: this,
                      });
                    }
                });
              });
            } catch (h) {
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(h.message),
                instance: this,
              });
            }
          }
          async sendUnDelegationTransaction(t) {
            let { rawtx: n, privateKey: a } = t;
            await this.loadEndpoint();
            const r = await c.get("Keyring"),
              s = new r({ type: "sr25519" }),
              d = e.from(a, "hex"),
              l = s.addFromSeed(d);
            try {
              const e = this.endpoint.tx.staking.unbond(Number(n.amount)),
                t = await e.signAndSend(l);
              return { txid: t.toString("hex") };
            } catch (u) {
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(u.message),
                instance: this,
              });
            }
          }
        }
        t.default = PolkadotNodeExplorer;
      }).call(this, n(2).Buffer);
    },
  },
]);
