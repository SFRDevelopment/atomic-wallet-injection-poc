(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [345, 32],
  {
    2693: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(230)),
        a = s(19),
        i = r(s(7836)),
        o = r(s(2858)),
        c = r(s(794)),
        l = s(27),
        u = r(s(7837)),
        d = s(2806);
      function h(e, t, s) {
        (f(e, t), t.set(e, s));
      }
      function f(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function T(e, t, s) {
        return (e.set(g(e, t), s), s);
      }
      function w(e, t) {
        return e.get(g(e, t));
      }
      function g(e, t, s) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : s;
        throw new TypeError("Private element is not present on this object");
      }
      const m = "Komodo",
        p = "KMD",
        y = "m/44'/141'/0'/0/0",
        k = 8,
        v = "0",
        x = "0x892F2085",
        b = 499999999,
        B = 1e3,
        C = 1e6,
        E = 4,
        { BITGO: A } = l.LIB_NAME_INDEX;
      var N = new WeakMap();
      class KMDCoin extends (0, d.HasProviders)(
        (0, d.BitgoMixin)((0, d.BitcoinLikeFeeMixin)(n.default)),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: r,
            feeData: n,
            explorers: a,
            txWebUrl: l,
            socket: u,
            id: d,
          } = e;
          const f = {
              mainnet: {
                messagePrefix: "",
                bip32: { public: 76067358, private: 76066276 },
                pubKeyHash: 60,
                scriptHash: 5,
                wif: 188,
                coin: "zec",
                consensusBranchId: { 1: 0, 2: 0, 3: 1537743641, 4: 1991772603 },
              },
            },
            T = {
              id: d,
              alias: t,
              notify: r,
              name: m,
              ticker: p,
              decimal: k,
              unspendableBalance: v,
              explorers: a,
              txWebUrl: l,
              socket: u,
              dependencies: {
                [A]: new c.default(() =>
                  s
                    .e(143)
                    .then(s.t.bind(null, 10466, 7))
                    .then((e) => {
                      let { default: t } = e;
                      return ((t.networks.zcash = f.mainnet), t);
                    }),
                ),
              },
            };
          (super(T),
            h(this, N, void 0),
            (this.derivation = y),
            this.setExplorersModules([o.default, i.default]),
            this.loadExplorers(T),
            (this.feePerByte = n.feePerByte),
            (this.coefficient = n.coefficient),
            (this.transactions = []),
            (this.balance = null),
            (this.balances = null));
        }
        loadCoreLibrary() {
          return super.loadLib(A);
        }
        async getNetwork() {
          const e = await this.loadCoreLibrary();
          return e.networks.zcash;
        }
        async getTransactionBuilder() {
          const e = await this.loadCoreLibrary(),
            t = new e.TransactionBuilder(await this.getNetwork());
          return (
            t.setVersion(E),
            t.setLockTime(parseInt(Date.now() / B, 10)),
            t.setVersionGroupId(parseInt(x, 16)),
            t.setExpiryHeight(b),
            t
          );
        }
        async signInput(e, t, s, r) {
          const n = await this.loadCoreLibrary();
          return e.sign(s, t, null, n.Transaction.SIGHASH_ALL, r.satoshis);
        }
        async calculateReward(e) {
          const t = await this.getUnspentOutputs(e),
            s = await Promise.all(
              t.map((e) => {
                let { txid: t } = e;
                return this.getTransaction(t);
              }),
            ),
            { blockHash: r } = await this.getProvider("utxo").getLatestBlock(),
            n = await this.getProvider("utxo").getBlock(r);
          t.forEach((e) => {
            const t = s.find((t) => t.txid === e.txid);
            ((e.locktime = t && t.locktime),
              (e.tiptime = n.time),
              (e.satoshis = Number(e.satoshis)));
          });
          const { inputs: a, reward: i } = (0, u.default)(t);
          return { inputs: a, reward: i };
        }
        async createClaimTransaction(e) {
          const { inputs: t = [], reward: s } =
            e || (await this.calculateReward(this.address));
          if (0 === t.length)
            throw new Error("Claim is unavailable, please try again later.");
          if (s.toNumber() < C)
            throw new Error(
              "Current reward is too low. Minimal amount is 0.01 KMD.",
            );
          const r = t.reduce((e, t) => {
              let { value: s } = t;
              return e.add(new this.BN(s));
            }, new this.BN(0)),
            n = await this.buildTx(
              t,
              this.address,
              r.add(s).toNumber(),
              new this.BN(0),
              w(N, this),
            );
          return n;
        }
        async getInfo() {
          const { balance: e, balances: t } = await this.getProvider(
            "balance",
          ).getInfo(this.address);
          if (((this.balance = e), t))
            this.balances = {
              rewards: t.interest > 0 ? String(t.interest) : "0",
            };
          else {
            const { reward: e } = await this.calculateReward(this.address);
            let t = e && this.toCurrencyUnit(e);
            (t ||
              (t = await this.getProvider("rewards")
                .getRewards(this.address)
                .catch((e) => console.warn(e))),
              (this.balances = { rewards: String(t) }));
          }
          return { balance: this.balance, balances: this.balances };
        }
        async claim() {
          try {
            const e = await this.createClaimTransaction();
            return await this.sendTransaction(e);
          } catch (e) {
            throw new a.WalletError({
              type: "claimError",
              error: e,
              instance: this,
            });
          }
        }
        setPrivateKey(e) {
          (super.setPrivateKey(e), T(N, this, e));
        }
      }
      t.default = KMDCoin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    2858: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(8)),
        a = r(s(129)),
        i = r(s(81)),
        o = r(s(28)),
        c = r(s(80)),
        l = s(4),
        u = s(27),
        d = s(67);
      const h = 2;
      class BlockbookV2Explorer extends a.default {
        constructor() {
          (super(...arguments), (this.version = h), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: s, scriptPubKey: r } = e;
          const n = await this.getTransaction(t, s),
            a = await this.getUnspentOutputs(t, r),
            o = this.calculateBalance(a).toString();
          (await i.default.filterAndUpdateTransactions([n]),
            this.eventEmitter.emit(
              `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
              { unconfirmedTx: n, unconfirmedBalance: o },
            ));
        }
        getAllowedTickers() {
          return [
            "BTC",
            "BSC",
            "BCD",
            "BTG",
            "BCH",
            "BSV",
            "DOGE",
            "LTC",
            "DGB",
            "DASH",
            "RVN",
            "KMD",
            "ETH",
            "DCR",
            "QTUM",
            "ZEC",
            "YEC",
            "GRS",
          ];
        }
        getNnTickers() {
          return ["DOGE", "ZEC"];
        }
        getApiPrefix() {
          return `api/v${this.version}/`;
        }
        getLatestBlockUrl() {
          return this.getApiPrefix() + "block-index/last";
        }
        getBlockUrl(e) {
          return `${this.getApiPrefix()}block/${e}`;
        }
        getBlockMethod() {
          return "get";
        }
        getBlockParams() {
          return {};
        }
        getBlockOptions() {
          return {};
        }
        getAddressUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getInfoOptions() {
          return this.config.options || {};
        }
        getUserTokenListParams() {
          return {};
        }
        getTransactionsOptions() {
          return "BSC" === this.wallet.ticker
            ? { headers: { "api-key": "ypa5Llv3B3fyToNsMkkaiEIIGKdcRYqU" } }
            : {};
        }
        getInfoParams() {
          return this.config.options || {};
        }
        getSendOptions() {
          var e;
          return "BSV" === this.wallet.ticker
            ? { headers: { "Content-Type": "text/plain" } }
            : null !== (e = this.config) && void 0 !== e && e.useJson
              ? { headers: { "Content-Type": "application/json" } }
              : {};
        }
        modifyInfoResponse(e) {
          const t = new this.wallet.BN(e.unconfirmedBalance),
            s = new this.wallet.BN(e.balance),
            r = s.add(t).toString(),
            n = {};
          return (
            e.tokens &&
              e.tokens.forEach((e) => {
                n[e.symbol] = e.balance;
              }),
            {
              balance: r,
              tokenBalances: n,
              unconfirmedBalance: t.toString(),
              transactions: [],
            }
          );
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}tx/${e}`;
        }
        getTransactionParams() {
          return this.getInfoParams();
        }
        getTransactionsUrl(e) {
          return `${this.getApiPrefix()}address/${e}`;
        }
        getTransactionsParams(e, t, s, r) {
          (void 0 === t && (t = 0), void 0 === s && (s = this.defaultTxLimit));
          const n = this.getInfoParams();
          return { ...n, page: r, pageSize: s, details: "txs", filter: "All" };
        }
        async getTokenTransactions(e) {
          let { address: t, offset: s, limit: r, pageNum: n, contract: a } = e;
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * u.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * u.ONE_MINUTE >
              this.lastGetTxsRequestTime &&
            (this.lastGetTxsRequestTime = Date.now());
          try {
            const e = await this.request(
              this.getTransactionsUrl(t, s || 0, r || this.defaultTxLimit, n),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                s || 0,
                r || this.defaultTxLimit,
                n,
                a,
              ),
              u.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyTokenTransactionsResponse(
              (null === e || void 0 === e ? void 0 : e.transactions) || [],
              t,
            );
          } catch {
            return [];
          }
        }
        getTokenTransactionsParams(e, t, s, r, n) {
          const a = this.getTransactionsParams(e, t, s, r);
          return { ...a, contract: n };
        }
        modifyTransactionResponse(e, t) {
          if (e.tokenTransfers && 0 === Number(e.value)) {
            const s = {};
            e.tokenTransfers.forEach((r) => {
              r.symbol &&
                (s[r.token] || (s[r.token] = []),
                s[r.token].push(
                  this.getTransactionFromTokenTransfer({
                    transfer: r,
                    selfAddress: t,
                    tx: e,
                  }),
                ));
            });
            for (const e in s) {
              const r = s[e];
              if (0 !== r.length)
                for (const e of r) {
                  const { otherSideAddress: s } = e;
                  if (
                    [s.toLowerCase(), t.toLowerCase()].includes(t.toLowerCase())
                  )
                    return e;
                }
            }
          }
          return super.modifyTransactionResponse(e, t);
        }
        modifyTransactionsResponse(e, t) {
          const s = e && !!e.transactions,
            r = s
              ? e.transactions.filter(
                  (e) =>
                    e.tokenTransfers &&
                    Array.isArray(e.tokenTransfers) &&
                    0 === Number(e.value),
                )
              : [],
            n = s
              ? e.transactions.filter(
                  (e) =>
                    (!e.tokenTransfers || 0 !== Number(e.value)) &&
                    !(e.ethereumSpecific && 0 === e.ethereumSpecific.status),
                )
              : [],
            a = s
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            i = super.modifyTransactionsResponse(n, t);
          return r.length > 0
            ? {
                transactions: i,
                failed: a,
                tokenTransactions: this.modifyTokenTransactionsResponse(r, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: i, failed: a }
              : i;
        }
        modifyTokenTransactionsResponse(e, t) {
          var s;
          return null !==
            (s =
              null === e || void 0 === e
                ? void 0
                : e
                    .map((e) => {
                      var s;
                      return null === (s = e.tokenTransfers) || void 0 === s
                        ? void 0
                        : s
                            .filter((e) =>
                              this.filterTokenTransferTransactions(t, e),
                            )
                            .map((s) =>
                              this.getTransactionFromTokenTransfer({
                                transfer: s,
                                selfAddress: t,
                                tx: e,
                              }),
                            );
                    })
                    .flat()) && void 0 !== s
            ? s
            : [];
        }
        filterTokenTransferTransactions(e, t) {
          return !(
            ![t.to.toLowerCase(), t.from.toLowerCase()].includes(
              e.toLowerCase(),
            ) || !t.symbol
          );
        }
        getTransactionFromTokenTransfer(e) {
          var t, s;
          let { transfer: r, selfAddress: n, tx: a } = e;
          const i =
            (null === (t = this.wallet.tokens()[r.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            r.decimals ||
            this.wallet.decimal;
          return new c.default({
            ticker: r.symbol.toUpperCase(),
            txid: this.getTxHash(a),
            walletid: (0, l.getTokenId)({
              ticker: r.symbol,
              contract: null !== (s = r.token) && void 0 !== s ? s : r.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(a),
            feeTicker: this.wallet.parent,
            direction: r.to.toLowerCase() === n.toLowerCase(),
            otherSideAddress:
              r.to.toLowerCase() === n.toLowerCase()
                ? r.from.toLowerCase()
                : r.to.toLowerCase(),
            amount: r.value ? (0, d.toCurrency)(r.value, i) : "0",
            datetime: this.getTxDateTime(a),
            memo: this.getTxMemo(a),
            confirmations: this.getTxConfirmations(a),
            nonce: this.getTxNonce(a),
            alias: this.wallet.alias,
          });
        }
        getUnspentOutputsUrl(e) {
          return `${this.getApiPrefix()}utxo/${e}`;
        }
        getUnspentOutputsParams(e) {
          return this.getInfoParams();
        }
        modifyUnspentOutputsResponse(e, t, s) {
          if (!s) throw this.createError("No scriptPubKey");
          return t.map((t) => {
            let { txid: r, vout: n, value: a, height: i } = t;
            return {
              txid: r,
              txId: r,
              vout: n,
              script: s,
              value: a,
              address: e,
              outputIndex: n,
              satoshis: Number(a),
              height: i,
            };
          });
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "sendtx/";
        }
        getSendTransactionParams(e) {
          var t;
          return null !== (t = this.config) && void 0 !== t && t.useJson
            ? JSON.stringify(e)
            : e;
        }
        modifySendTransactionResponse(e) {
          return { txid: e.result };
        }
        getTxDateTime(e) {
          return e.blockTime
            ? new Date(Number(e.blockTime + "000"))
            : new Date();
        }
        getTxValue(e, t) {
          let s = new this.wallet.BN(0),
            r = new this.wallet.BN(0);
          if (!t.vin || !t.vout) return "0";
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout.forEach((e) => {
                Array.isArray(e.addresses) &&
                  e.addresses.length > 0 &&
                  (r = r.add(new this.wallet.BN(e.value)));
              }),
              this.wallet.toCurrencyUnit(r)
            );
          const n = new this.wallet.BN(t.fees);
          let a = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((a = a.concat(t.addresses)),
              t.addresses.includes(e) &&
                (s = s.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((a = a.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (r = r.add(new this.wallet.BN(t.value))));
            }));
          const i = a.every((t) => t === e),
            o = this.wallet.decimal;
          if (i) {
            if ("KMD" === this.wallet.ticker) {
              const e = r.sub(s);
              if (e.gten(0)) return (0, d.toCurrency)(e, o);
            }
            return (0, d.toCurrency)(t.fees, o);
          }
          const c = this.getTxDirection(e, t),
            l = c ? r : s.sub(r).sub(n);
          return (0, d.toCurrency)(l, o);
        }
        getTxNonce(e) {
          if (e.ethereumSpecific) return e.ethereumSpecific.nonce;
        }
        getTxDirection(e, t) {
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return (
              t.vout[0].addresses &&
              t.vout[0].addresses[0].toLowerCase() === e.toLowerCase()
            );
          const s =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t === e);
                }),
            r =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t === e);
                }),
            n =
              t.vout &&
              t.vout
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t !== e);
                });
          return !(!r || s) || !(!s || !r || n || "KMD" !== this.wallet.ticker);
        }
        getTxOtherSideAddress(e, t) {
          if (!e) throw new Error("selfAddress is not defined");
          const s = this.getTxDirection(e, t);
          if (["ETH", "BSC"].includes(this.wallet.ticker))
            return s
              ? t.vin[0].addresses[0]
              : (t.vout[0].addresses && t.vout[0].addresses[0]) || e;
          if (!t.vin) return "...";
          let r = [],
            n = [];
          if (
            (t.vout.forEach((e) => {
              r = r.concat(e.addresses);
            }),
            t.vin.forEach((e) => {
              n = n.concat(e.addresses);
            }),
            s)
          ) {
            const s =
              t.vin &&
              t.vin
                .filter((e) => {
                  let { addresses: t } = e;
                  return Array.isArray(t);
                })
                .some((t) => {
                  let { addresses: s } = t;
                  return s.some((t) => t !== e);
                });
            return s ? n.find((t) => t !== e) : "Claim";
          }
          const a = r.reduce((t, s) => (s === e ? t + 1 : t), 0);
          if (a === r.length) return e;
          const i = r.find((t) => t !== e);
          return i;
        }
        calculateBalance(e) {
          return (
            void 0 === e && (e = []),
            e.reduce((e, t) => {
              let { value: s } = t;
              return new this.wallet.BN(s).add(e);
            }, new this.wallet.BN("0"))
          );
        }
        getUserTokenList(e) {
          return this.request(
            this.getInfoUrl(e),
            "get",
            this.getUserTokenListParams(),
            "",
            this.getTransactionsOptions(),
          ).then((e) =>
            e.tokens.map((e) => ({
              contractAddress: e.contract,
              decimals: 0,
              ...e,
            })),
          );
        }
        async getBannedTokensList() {
          let e;
          try {
            e = await n.default.get("ethereum-tokens-banned");
          } catch (t) {
            o.default.error({ instance: this, error: t });
          }
          return Array.isArray(e) ? e : [];
        }
        async getNonce(e) {
          const t = await this.request(this.getInfoUrl(e));
          return t.nonce;
        }
        getTokensInfo() {
          return 0;
        }
        getTokenBalanceByContractAddress(e) {
          let { info: t, tokenTicker: s } = e;
          if ("undefined" === t && "undefined" === t.tokenBalances)
            throw new Error(
              "BlockbookV2Explorer: getTokenBalanceByContractAddress error: info.tokenBalances must be object",
            );
          return t.tokenBalances[s];
        }
        async getTransactionUnmodified(e) {
          return this.request(
            this.getTransactionUrl(e),
            this.getTransactionMethod(),
            this.getTransactionParams(e),
            u.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = BlockbookV2Explorer;
    },
    7836: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(129)),
        a = s(19),
        i = s(27);
      class AtomicExplorer extends n.default {
        getAllowedTickers() {
          return ["KMD"];
        }
        async getInfo(e) {
          const t = await this.request("rewards?address=" + e);
          if ("success" !== t.msg)
            throw new a.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error(JSON.stringify(t)),
              instance: this,
            });
          return { balance: t.result.balanceSats, balances: t.result };
        }
        async getRewards(e) {
          const t = await this.request("rewards?address=" + e);
          if ("success" !== t.msg)
            throw new a.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error(JSON.stringify(t)),
              instance: this,
            });
          return t.result.interest;
        }
      }
      t.default = AtomicExplorer;
    },
    7837: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(11));
      const a = 7777777,
        i = 5e8,
        o = 1e9,
        c = 1e6,
        l = 60,
        u = 44640,
        d = 525600,
        h = 10512e3,
        f = (e) => {
          const t = [],
            s = e.reduce((e, s) => {
              const { tiptime: r, locktime: f, height: T, satoshis: w } = s,
                g = Math.floor((r - f) / l);
              if (T >= a || f < i || w < o || g < l || !T) return e;
              const m = T >= c ? u : d;
              let p = Math.min(g, m);
              p -= 59;
              const y = new n.default(Math.floor(w / h) * p);
              return (y.lt(new n.default(0)) || ((e = e.add(y)), t.push(s)), e);
            }, new n.default(0));
          return { inputs: t, reward: s };
        };
      t.default = f;
    },
  },
]);
