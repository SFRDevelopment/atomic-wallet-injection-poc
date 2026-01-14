(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [339, 32],
  {
    2704: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = r(s(230)),
        n = r(s(2858)),
        a = r(s(8010)),
        o = r(s(8011)),
        l = r(s(794)),
        d = s(27),
        u = s(2806);
      function c(e, t, s) {
        (h(e, t), t.set(e, s));
      }
      function h(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function f(e, t, s) {
        return (e.set(w(e, t), s), s);
      }
      function T(e, t) {
        return e.get(w(e, t));
      }
      function w(e, t, s) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : s;
        throw new TypeError("Private element is not present on this object");
      }
      const p = "Decred",
        g = "DCR",
        m = "m/42'/999'/0'/0/0",
        v = 8,
        x = "0",
        { BITCORE: y } = d.LIB_NAME_INDEX;
      var k = new WeakMap();
      class DCRCoin extends (0, u.BitcoreMixin)(
        (0, u.BitcoinLikeFeeMixin)(i.default),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: r,
            feeData: i,
            explorers: d,
            txWebUrl: u,
            socket: h,
            id: f,
          } = e;
          const T = {
            id: f,
            alias: t,
            notify: r,
            name: p,
            ticker: g,
            decimal: v,
            unspendableBalance: x,
            explorers: d,
            txWebUrl: u,
            socket: h,
            dependencies: {
              [y]: new l.default(() =>
                Promise.all([s.e(200), s.e(307), s.e(266)]).then(
                  s.t.bind(null, 11323, 7),
                ),
              ),
            },
          };
          (super(T),
            c(this, k, void 0),
            (this.derivation = m),
            this.setExplorersModules([n.default, a.default, o.default]),
            this.loadExplorers(T),
            (this.feePerByte = i.feePerByte),
            (this.coefficient = i.coefficient));
        }
        async getNetwork() {
          const e = await this.loadLib(y);
          return e.Networks.dcrdlivenet;
        }
        getDeriveFunctionName() {
          return "derive";
        }
        async createTransaction(e) {
          let { address: t, amount: s } = e;
          const r = (
              await this.getUnspentOutputs(this.address, this.getScriptPubKey())
            ).map((e) => ({ amount: this.toCurrencyUnit(e.value), ...e })),
            i = this.explorer.calculateBalance(r),
            n = new this.BN(String(s)),
            a = await this.getFee(s),
            o = i.lt(n.add(a)) ? i.sub(a) : n,
            l = i.sub(n).sub(a),
            d = await this.loadLib(y),
            u = new d.Transaction()
              .from(r)
              .to(t, Number(o.toString()))
              .fee(Number(a.toString()))
              .change(this.address);
          return (
            l.gt(new this.BN(0)) && u.to(r[0].address, Number(l.toString())),
            u.sign(T(k, this).toString()),
            u.serialize()
          );
        }
        setPrivateKey(e) {
          (super.setPrivateKey(e), f(k, this, e));
        }
      }
      t.default = DCRCoin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    2858: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = r(s(8)),
        n = r(s(129)),
        a = r(s(81)),
        o = r(s(28)),
        l = r(s(80)),
        d = s(4),
        u = s(27),
        c = s(67);
      const h = 2;
      class BlockbookV2Explorer extends n.default {
        constructor() {
          (super(...arguments), (this.version = h), (this.canPaginate = !0));
        }
        async getSocketTransaction(e) {
          let { address: t, hash: s, scriptPubKey: r } = e;
          const i = await this.getTransaction(t, s),
            n = await this.getUnspentOutputs(t, r),
            o = this.calculateBalance(n).toString();
          (await a.default.filterAndUpdateTransactions([i]),
            this.eventEmitter.emit(
              `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
              { unconfirmedTx: i, unconfirmedBalance: o },
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
            i = {};
          return (
            e.tokens &&
              e.tokens.forEach((e) => {
                i[e.symbol] = e.balance;
              }),
            {
              balance: r,
              tokenBalances: i,
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
          const i = this.getInfoParams();
          return { ...i, page: r, pageSize: s, details: "txs", filter: "All" };
        }
        async getTokenTransactions(e) {
          let { address: t, offset: s, limit: r, pageNum: i, contract: n } = e;
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
              this.getTransactionsUrl(t, s || 0, r || this.defaultTxLimit, i),
              this.getTransactionsMethod(),
              this.getTokenTransactionsParams(
                t,
                s || 0,
                r || this.defaultTxLimit,
                i,
                n,
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
        getTokenTransactionsParams(e, t, s, r, i) {
          const n = this.getTransactionsParams(e, t, s, r);
          return { ...n, contract: i };
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
            i = s
              ? e.transactions.filter(
                  (e) =>
                    (!e.tokenTransfers || 0 !== Number(e.value)) &&
                    !(e.ethereumSpecific && 0 === e.ethereumSpecific.status),
                )
              : [],
            n = s
              ? e.transactions.filter(
                  (e) => e.ethereumSpecific && 0 === e.ethereumSpecific.status,
                )
              : [],
            a = super.modifyTransactionsResponse(i, t);
          return r.length > 0
            ? {
                transactions: a,
                failed: n,
                tokenTransactions: this.modifyTokenTransactionsResponse(r, t),
              }
            : ["ETH", "BSC"].includes(this.wallet.parent)
              ? { transactions: a, failed: n }
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
          let { transfer: r, selfAddress: i, tx: n } = e;
          const a =
            (null === (t = this.wallet.tokens()[r.contract.toLowerCase()]) ||
            void 0 === t
              ? void 0
              : t.decimal) ||
            r.decimals ||
            this.wallet.decimal;
          return new l.default({
            ticker: r.symbol.toUpperCase(),
            txid: this.getTxHash(n),
            walletid: (0, d.getTokenId)({
              ticker: r.symbol,
              contract: null !== (s = r.token) && void 0 !== s ? s : r.contract,
              parent: this.wallet.id,
            }),
            fee: this.getTxFee(n),
            feeTicker: this.wallet.parent,
            direction: r.to.toLowerCase() === i.toLowerCase(),
            otherSideAddress:
              r.to.toLowerCase() === i.toLowerCase()
                ? r.from.toLowerCase()
                : r.to.toLowerCase(),
            amount: r.value ? (0, c.toCurrency)(r.value, a) : "0",
            datetime: this.getTxDateTime(n),
            memo: this.getTxMemo(n),
            confirmations: this.getTxConfirmations(n),
            nonce: this.getTxNonce(n),
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
            let { txid: r, vout: i, value: n, height: a } = t;
            return {
              txid: r,
              txId: r,
              vout: i,
              script: s,
              value: n,
              address: e,
              outputIndex: i,
              satoshis: Number(n),
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
          const i = new this.wallet.BN(t.fees);
          let n = [];
          (t.vin.forEach((t) => {
            Array.isArray(t.addresses) &&
              ((n = n.concat(t.addresses)),
              t.addresses.includes(e) &&
                (s = s.add(new this.wallet.BN(t.value))));
          }),
            t.vout.forEach((t) => {
              Array.isArray(t.addresses) &&
                ((n = n.concat(t.addresses)),
                t.addresses.includes(e) &&
                  (r = r.add(new this.wallet.BN(t.value))));
            }));
          const a = n.every((t) => t === e),
            o = this.wallet.decimal;
          if (a) {
            if ("KMD" === this.wallet.ticker) {
              const e = r.sub(s);
              if (e.gten(0)) return (0, c.toCurrency)(e, o);
            }
            return (0, c.toCurrency)(t.fees, o);
          }
          const l = this.getTxDirection(e, t),
            d = l ? r : s.sub(r).sub(i);
          return (0, c.toCurrency)(d, o);
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
            i =
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
          return !(!r || s) || !(!s || !r || i || "KMD" !== this.wallet.ticker);
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
            i = [];
          if (
            (t.vout.forEach((e) => {
              r = r.concat(e.addresses);
            }),
            t.vin.forEach((e) => {
              i = i.concat(e.addresses);
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
            return s ? i.find((t) => t !== e) : "Claim";
          }
          const n = r.reduce((t, s) => (s === e ? t + 1 : t), 0);
          if (n === r.length) return e;
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
            e = await i.default.get("ethereum-tokens-banned");
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
    8010: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = r(s(14)),
        n = r(s(5881)),
        a = r(s(129)),
        o = s(19),
        l = s(27),
        d = r(s(80));
      class InsightExplorer extends a.default {
        constructor() {
          (super(...arguments), (this.canPaginate = !0));
        }
        getAllowedTickers() {
          return [
            "BTC",
            "LTC",
            "ZEC",
            "DGB",
            "DASH",
            "DOGE",
            "BTG",
            "QTUM",
            "BCH",
            "BSV",
            "SMART",
            "DCR",
            "GRS",
            "YEC",
            "RVN",
            "KMD",
            "BCD",
          ];
        }
        getWalletAddress(e) {
          return ["BCH", "BSV"].includes(this.wallet.ticker) &&
            n.default.isCashAddress(e)
            ? n.default.toLegacyAddress(e)
            : e;
        }
        getApiPrefix() {
          return ["BTG", "BCD"].includes(this.wallet.ticker)
            ? "insight-api/"
            : "YEC" === this.wallet.ticker
              ? "api/YEC/mainnet/"
              : "KMD" === this.wallet.ticker
                ? "insight-api-komodo/"
                : "api/";
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}addr/${e}`;
        }
        modifyInfoResponse(e) {
          return { balance: e.balanceSat, transactions: [] };
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}tx/${e}`;
        }
        getTransactionsUrl(e) {
          return "DCR" === this.wallet.ticker
            ? `${this.getApiPrefix()}addr/${e}/txs`
            : `${this.getApiPrefix()}txs?address=${e}`;
        }
        getTransactionsParams(e, t, s, r) {
          return { pageNum: r };
        }
        modifyTransactionsResponse(e, t) {
          return "DCR" === this.wallet.ticker
            ? Promise.all(
                e.transactions.map(async (e) => this.getTransaction(e)),
              )
            : super.modifyTransactionsResponse(e.txs, t);
        }
        getUnspentOutputsUrl(e) {
          return "YEC" === this.wallet.ticker
            ? `${this.getApiPrefix()}address/${e}/`
            : `${this.getApiPrefix()}addr/${e}/utxo`;
        }
        getUnspentOutputsParams() {
          return "YEC" === this.wallet.ticker
            ? { unspent: !0, limit: 1e3 }
            : {};
        }
        modifyUnspentOutputsResponse(e, t) {
          return "YEC" === this.wallet.ticker
            ? t.map((e) => {
                let {
                  address: t,
                  mintTxid: s,
                  mintIndex: r,
                  script: i,
                  value: n,
                } = e;
                return {
                  txid: s,
                  vout: r,
                  script: i,
                  value: n,
                  address: t,
                  outputIndex: r,
                  satoshis: n,
                };
              })
            : t.map((e) => {
                let {
                  address: t,
                  txid: s,
                  vout: r,
                  scriptPubKey: i,
                  satoshis: n,
                  amount: a,
                } = e;
                return {
                  txid: s,
                  txId: s,
                  vout: r,
                  script: i,
                  value: n || a,
                  address: this.modifyUnspentAddress(t),
                  outputIndex: r,
                  satoshis:
                    "DGB" === this.wallet.ticker
                      ? Number(this.wallet.toMinimalUnit(n || a))
                      : n || a,
                  atoms: Number(n),
                };
              });
        }
        modifyUnspentAddress(e) {
          return ["BCH", "BSV"].includes(this.wallet.ticker)
            ? n.default.isCashAddress(e)
              ? e
              : n.default.toCashAddress(e)
            : e;
        }
        getSendTransactionUrl() {
          return this.getApiPrefix() + "tx/send";
        }
        getSendTransactionParam() {
          return "YEC" === this.wallet.ticker ? "rawTx" : "rawtx";
        }
        async sendTransaction(e) {
          let t;
          const s = `${this.config.baseUrl}${this.getSendTransactionUrl()}`;
          try {
            t =
              "BTG" === this.wallet.ticker
                ? await i.default.post(
                    s,
                    `${this.getSendTransactionParam()}=${e}`,
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    },
                  )
                : await i.default.post(s, {
                    [this.getSendTransactionParam()]: e,
                  });
          } catch (r) {
            throw new o.ExplorerRequestError({
              type: l.SEND_TRANSACTION_TYPE,
              error: r,
              url: s,
              instance: this,
            });
          }
          return this.modifyGeneralResponse(
            this.modifySendTransactionResponse(t),
          );
        }
        getTxDateTime(e) {
          return e.time ? new Date(Number(e.time + "000")) : new Date();
        }
        getTxValue(e, t) {
          let s = new this.wallet.BN(0),
            r = new this.wallet.BN(0);
          if (!t.vin || !t.vout) return 0;
          (t.vin.forEach((t) => {
            t.addr === e && (s = s.add(new this.wallet.BN(t.valueSat)));
          }),
            t.vout.forEach((t) => {
              t.scriptPubKey.addresses &&
                t.scriptPubKey.addresses.length > 0 &&
                t.scriptPubKey.addresses[0] === e &&
                (r = r.add(
                  new this.wallet.BN(this.wallet.toMinimalUnit(t.value)),
                ));
            }));
          const i = s.sub(r),
            n = i.lt(new this.wallet.BN(0)),
            a = i.abs();
          return Number(
            this.wallet.toCurrencyUnit(
              n
                ? a
                : a.sub(new this.wallet.BN(this.wallet.toMinimalUnit(t.fees))),
            ),
          );
        }
        getTxDirection(e, t) {
          return (
            t.vin &&
            !t.vin.find((t) => {
              let { addr: s } = t;
              return s === e;
            })
          );
        }
        getTxOtherSideAddress(e, t) {
          if (!t.vin) return "...";
          if (this.getTxDirection(e, t)) return t.vin[0].addr;
          let s = new this.wallet.BN(0),
            r = "...";
          return (
            t.vout.forEach((t) => {
              t.scriptPubKey &&
                t.scriptPubKey.addresses &&
                t.scriptPubKey.addresses.length > 0 &&
                t.scriptPubKey.addresses[0] !== e &&
                s.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) &&
                ((s = new this.wallet.BN(this.wallet.toMinimalUnit(t.value))),
                (r = t.scriptPubKey.addresses[0]));
            }),
            r
          );
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
        modifyTransactionResponse(e, t) {
          return new d.default({
            ticker: this.wallet.ticker,
            name: this.wallet.name,
            walletid: this.wallet.id,
            txid: this.getTxHash(e),
            fee: this.getTxFee(e),
            feeTicker: this.wallet.parent,
            direction: this.getTxDirection(t, e),
            otherSideAddress: this.getTxOtherSideAddress(t, e),
            amount: this.getTxValue(t, e),
            datetime: this.getTxDateTime(e),
            memo: this.getTxMemo(e),
            confirmations: this.getTxConfirmations(e),
            alias: this.wallet.alias,
            locktime: e.locktime,
          });
        }
        getTxFee(e) {
          return "SMART" === this.wallet.ticker
            ? (e && e.fees) || 0
            : this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = InsightExplorer;
    },
    8011: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = r(s(129));
      class DcrDataExplorer extends i.default {
        getAllowedTickers() {
          return ["DCR"];
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}/address/${e}/totals`;
        }
        modifyInfoResponse(e) {
          return {
            balance: this.wallet.toMinimalUnit(e.dcr_unspent),
            transactions: [],
          };
        }
        getTransactionUrl(e) {
          return `${this.getApiPrefix()}/tx/${e}`;
        }
        getTransactionsUrl(e, t, s) {
          return `${this.getApiPrefix()}/address/${e}/count/${s}/skip/${t}/raw`;
        }
        async getTransactions(e) {
          let { address: t, offset: s = 0, limit: r = this.defaultTxLimit } = e;
          const i = await this.request(
            this.getTransactionsUrl(t, s, r),
            this.getTransactionsMethod(),
            this.getTransactionsParams(),
            "GetTxs",
          );
          return this.modifyTransactionsResponse(i, t);
        }
        getTxValue(e, t) {
          let s = new this.wallet.BN(0),
            r = new this.wallet.BN(0),
            i = new this.wallet.BN(0),
            n = new this.wallet.BN(0);
          (t.vin.forEach((t) => {
            (t.prevOut.addresses &&
              t.prevOut.addresses.length > 0 &&
              t.prevOut.addresses[0] === e &&
              (s = s.add(
                new this.wallet.BN(this.wallet.toMinimalUnit(t.amountin)),
              )),
              (i = i.add(
                new this.wallet.BN(this.wallet.toMinimalUnit(t.amountin)),
              )));
          }),
            t.vout.forEach((t) => {
              (t.scriptPubKey.addresses &&
                t.scriptPubKey.addresses.length > 0 &&
                t.scriptPubKey.addresses[0] === e &&
                (r = r.add(
                  new this.wallet.BN(this.wallet.toMinimalUnit(t.value)),
                )),
                (n = n.add(
                  new this.wallet.BN(this.wallet.toMinimalUnit(t.value)),
                )));
            }));
          const a = s.sub(r),
            o = a.lt(new this.wallet.BN(0)),
            l = a.abs(),
            d = i.sub(n);
          return Number(this.wallet.toCurrencyUnit(o ? l : l.sub(d)));
        }
        getTxDirection(e, t) {
          return (
            t.vin &&
            !t.vin.find((t) => {
              let { prevOut: s } = t;
              return (
                s.addresses && s.addresses.length > 0 && s.addresses[0] === e
              );
            })
          );
        }
        getTxOtherSideAddress(e, t) {
          if (!t.vin) return "...";
          if (this.getTxDirection(e, t))
            return t.vin[0].prevOut.addresses &&
              t.vin[0].prevOut.addresses.length > 0
              ? t.vin[0].prevOut.addresses[0]
              : "...";
          let s = new this.wallet.BN(0),
            r = "...";
          return (
            t.vout.forEach((t) => {
              t.scriptPubKey.addresses.length > 0 &&
                t.scriptPubKey.addresses[0] !== e &&
                s.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) &&
                ((s = new this.wallet.BN(this.wallet.toMinimalUnit(t.value))),
                (r = t.scriptPubKey.addresses[0]));
            }),
            r
          );
        }
      }
      t.default = DcrDataExplorer;
    },
  },
]);
