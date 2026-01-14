(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [370, 32],
  {
    2665: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(14)),
        i = r(s(230)),
        a = r(s(794)),
        o = s(27),
        l = r(s(2858)),
        c = s(2806);
      function d(e, t, s) {
        (u(e, t), t.set(e, s));
      }
      function u(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function f(e, t) {
        return e.get(m(e, t));
      }
      function h(e, t, s) {
        return (e.set(m(e, t), s), s);
      }
      function m(e, t, s) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : s;
        throw new TypeError("Private element is not present on this object");
      }
      const { BITCORE: T } = o.LIB_NAME_INDEX,
        g = "Bitcoin",
        p = "BTC",
        w = "m/44'/0'/0'/0/0",
        v = 8,
        k = "0",
        y = "https://services.atomicwallet.io/config/bitcoin-fee-cache.json";
      var B = new WeakMap(),
        x = new WeakMap();
      class BTCCoin extends (0, c.BitcoreMixin)(
        (0, c.BitcoinLikeFeeMixin)(i.default),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: r,
            feeData: n,
            explorers: i,
            txWebUrl: o,
            socket: c,
            id: u,
          } = e;
          const f = {
            id: u,
            alias: t,
            notify: r,
            name: g,
            ticker: p,
            decimal: v,
            unspendableBalance: k,
            explorers: i,
            txWebUrl: o,
            socket: c,
            dependencies: {
              [T]: new a.default(() =>
                Promise.all([s.e(18), s.e(15), s.e(17)]).then(
                  s.t.bind(null, 3636, 7),
                ),
              ),
            },
          };
          (super(f),
            d(this, B, y),
            d(this, x, void 0),
            (this.derivation = w),
            this.setExplorersModules([l.default]),
            this.loadExplorers(f),
            (this.feePerByte = n.feePerByte),
            (this.coefficient = n.coefficient),
            (this.resendTimeout = n.resendTimeout),
            (this.feeRecommended = null),
            (this.networkName = "mainnet"));
        }
        setPrivateKey(e) {
          (super.setPrivateKey(e), h(x, this, e));
        }
        updateCoinParamsFromServer(e) {
          (super.updateCoinParamsFromServer(e),
            h(B, this, e.feesEstimateUrl),
            n.default
              .get(f(B, this))
              .then((e) => {
                var t;
                null !== e &&
                  void 0 !== e &&
                  null !== (t = e.data) &&
                  void 0 !== t &&
                  t.fastestFee &&
                  ((this.feePerByte = e.data.fastestFee),
                  (this.feeRecommended = e.data));
              })
              .catch((e) => {
                console.warn("Bitcoinfees is unavailable", e);
              }));
        }
        async createTransaction(e) {
          let { address: t, amount: s, memo: r, userFee: n } = e;
          const i = await this.loadLib(T),
            a = await this.getUnspentOutputs(),
            o = this.explorer.calculateBalance(a),
            l = new this.BN(String(s)),
            c = (n && new this.BN(n)) || (await this.getFee()),
            d = o.lt(l.add(c)) ? o.sub(c) : l,
            u = o.sub(l).sub(c),
            h = new i.Transaction()
              .from(a)
              .to([{ address: t, satoshis: Number(d.toString()) }])
              .fee(Number(c.toString()));
          return (
            u.gt(new this.BN(0)) &&
              h.to([{ address: a[0].address, satoshis: Number(u.toString()) }]),
            h.enableRBF(),
            h.sign(f(x, this).toString()),
            h.serialize()
          );
        }
        async getEstimatedTimeCfg(e) {
          void 0 === e && (e = !0);
          try {
            if (null === this.feeRecommended || e) {
              const { data: e } = await n.default.get(f(B, this));
              ((this.feePerByte = e.fastestFee),
                (this.feeRecommended = "object" !== typeof e ? null : e));
            }
          } catch (t) {
            console.error(t);
          }
          return this.feeRecommended;
        }
        async getEstimatedTimeTx(e, t) {
          void 0 === t && (t = "label");
          const s = 6e4,
            r = {
              fastestFee: { time: s, label: "1-15 min" },
              halfHourFee: { time: 30 * s, label: "15-30 min" },
              hourFee: { time: 60 * s, label: "30-60 min" },
            };
          let n = null;
          try {
            const s = await this.getEstimatedTimeCfg();
            n = Object.keys(r).find(
              (t) => e >= (null === s || void 0 === s ? void 0 : s[t]),
            );
          } finally {
            return r[n || "hourFee"][t];
          }
        }
        async availableBalance(e) {
          const t = (e && new this.BN(e)) || (await this.getFee()),
            s = new this.BN(this.balance)
              .sub(t)
              .sub(new this.BN(this.unspendableBalance));
          return new this.BN(s).lt(new this.BN(0))
            ? "0"
            : this.toCurrencyUnit(s);
        }
        async validateAddress(e) {
          const t = await this.loadLib(T);
          return t.Address.isValid(e || this.address, t.Networks.livenet.alias);
        }
      }
      t.default = BTCCoin;
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
        i = r(s(129)),
        a = r(s(81)),
        o = r(s(28)),
        l = r(s(80)),
        c = s(4),
        d = s(27),
        u = s(67);
      const f = 2;
      class BlockbookV2Explorer extends i.default {
        constructor() {
          (super(...arguments), (this.version = f), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: s, scriptPubKey: r } = e;
          const n = await this.getTransaction(t, s),
            i = await this.getUnspentOutputs(t, r),
            o = this.calculateBalance(i).toString();
          (await a.default.filterAndUpdateTransactions([n]),
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
          let { address: t, offset: s, limit: r, pageNum: n, contract: i } = e;
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE >
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
                i,
              ),
              d.GET_TRANSACTIONS_TYPE,
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
          const i = this.getTransactionsParams(e, t, s, r);
          return { ...i, contract: n };
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
            i = s
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            a = super.modifyTransactionsResponse(n, t);
          return r.length > 0
            ? {
                transactions: a,
                failed: i,
                tokenTransactions: this.modifyTokenTransactionsResponse(r, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: a, failed: i }
              : a;
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
          let { transfer: r, selfAddress: n, tx: i } = e;
          const a =
            (null === (t = this.wallet.tokens()[r.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            r.decimals ||
            this.wallet.decimal;
          return new l.default({
            ticker: r.symbol.toUpperCase(),
            txid: this.getTxHash(i),
            walletid: (0, c.getTokenId)({
              ticker: r.symbol,
              contract: null !== (s = r.token) && void 0 !== s ? s : r.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(i),
            feeTicker: this.wallet.parent,
            direction: r.to.toLowerCase() === n.toLowerCase(),
            otherSideAddress:
              r.to.toLowerCase() === n.toLowerCase()
                ? r.from.toLowerCase()
                : r.to.toLowerCase(),
            amount: r.value ? (0, u.toCurrency)(r.value, a) : "0",
            datetime: this.getTxDateTime(i),
            memo: this.getTxMemo(i),
            confirmations: this.getTxConfirmations(i),
            nonce: this.getTxNonce(i),
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
            let { txid: r, vout: n, value: i, height: a } = t;
            return {
              txid: r,
              txId: r,
              vout: n,
              script: s,
              value: i,
              address: e,
              outputIndex: n,
              satoshis: Number(i),
              height: a,
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
          let i = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((i = i.concat(t.addresses)),
              t.addresses.includes(e) &&
                (s = s.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((i = i.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (r = r.add(new this.wallet.BN(t.value))));
            }));
          const a = i.every((t) => t === e),
            o = this.wallet.decimal;
          if (a) {
            if ("KMD" === this.wallet.ticker) {
              const e = r.sub(s);
              if (e.gten(0)) return (0, u.toCurrency)(e, o);
            }
            return (0, u.toCurrency)(t.fees, o);
          }
          const l = this.getTxDirection(e, t),
            c = l ? r : s.sub(r).sub(n);
          return (0, u.toCurrency)(c, o);
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
          const i = r.reduce((t, s) => (s === e ? t + 1 : t), 0);
          if (i === r.length) return e;
          const a = r.find((t) => t !== e);
          return a;
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
            d.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = BlockbookV2Explorer;
    },
  },
]);
