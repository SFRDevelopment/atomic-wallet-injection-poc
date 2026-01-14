(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [356, 32],
  {
    2690: function (e, t, s) {
      "use strict";
      (function (e) {
        var r = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var n = r(s(230)),
          a = r(s(794)),
          i = s(27),
          o = r(s(2858)),
          c = r(s(7624)),
          u = s(2806);
        function l(e, t, s) {
          (d(e, t), t.set(e, s));
        }
        function d(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function h(e, t) {
          return e.get(p(e, t));
        }
        function f(e, t, s) {
          return (e.set(p(e, t), s), s);
        }
        function p(e, t, s) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : s;
          throw new TypeError("Private element is not present on this object");
        }
        const g = "ZCash",
          T = "ZEC",
          m = "m/44'/133'/0'/0/0",
          w = 8,
          v = "0",
          y = "0x892F2085",
          k = 499999999,
          x = 4,
          B = 3370586197,
          { BITGO: C } = i.LIB_NAME_INDEX;
        var A = new WeakMap();
        class ZECCoin extends (0, u.HasProviders)(
          (0, u.BitgoMixin)(n.default),
        ) {
          constructor(e) {
            let {
              alias: t,
              notify: r,
              feeData: n,
              explorers: i,
              txWebUrl: u,
              socket: d,
              id: h,
            } = e;
            const f = {
              id: h,
              alias: t,
              notify: r,
              name: g,
              ticker: T,
              decimal: w,
              unspendableBalance: v,
              explorers: i,
              txWebUrl: u,
              socket: d,
              feeData: n,
              dependencies: {
                [C]: new a.default(() =>
                  s
                    .e(144)
                    .then(s.t.bind(null, 10440, 7))
                    .then((e) => {
                      let { default: t } = e;
                      return ((t.networks.zcash.consensusBranchId[4] = B), t);
                    }),
                ),
              },
            };
            (super(f),
              l(this, A, void 0),
              (this.derivation = m),
              this.setExplorersModules([o.default, c.default]),
              this.loadExplorers(f),
              (this.feePerByte = n.feePerByte),
              (this.coefficient = n.coefficient),
              (this.transactions = []));
          }
          setPrivateKey(e) {
            (super.setPrivateKey(e), f(A, this, e));
          }
          loadCoreLibrary() {
            return super.loadLib(C);
          }
          async getNetwork() {
            const e = await this.loadCoreLibrary();
            return e.networks.zcash;
          }
          async getBranchId() {
            const e = await this.loadCoreLibrary();
            return e.networks.zcash.consensusBranchId[4];
          }
          async setBranchId(e) {
            const t = await this.loadCoreLibrary();
            t.networks.zcash.consensusBranchId[4] = e;
          }
          async getFee(e) {
            let {
              utxos: t = null,
              outputCount: s = 2,
              userFee: r = null,
            } = void 0 === e ? {} : e;
            const n = this.getProvider("send"),
              a = t || (await this.getUnspentOutputs()),
              i = n.calculateZip317Fee({
                utxos: a,
                outputCount: s,
                userFee: r,
              });
            return new this.BN(i.toString());
          }
          getMinimumFee() {
            const e = this.getProvider("send");
            return new this.BN(e.getMinimumFee().toString());
          }
          getFeePerAction() {
            const e = this.getProvider("send");
            return new this.BN(e.getFeePerAction().toString());
          }
          calculateBalance(e) {
            return (
              void 0 === e && (e = []),
              e.reduce((e, t) => {
                let { value: s } = t;
                return new this.BN(s).add(e);
              }, new this.BN("0"))
            );
          }
          async createTransaction(t) {
            let { address: s, amount: r, memo: n, userFee: a } = t;
            await this.loadCoreLibrary();
            const i = this.getProvider("send"),
              o = await this.getUnspentOutputs(),
              c = this.calculateBalance(o),
              u = new this.BN(String(r));
            let l;
            if (a) l = new this.BN(a.toString());
            else {
              const e = i.getFeeForAmount(parseInt(u.toString()), o);
              l = new this.BN(e.toString());
            }
            const d = u.add(l);
            if (c.lt(d))
              throw new Error(
                `Insufficient balance. Required: ${d.toString()}, Available: ${c.toString()}`,
              );
            const f = u,
              p = c.sub(d),
              g = await this.getTransactionBuilder();
            (o.forEach((t) => {
              g.addInput(t.txid, t.vout, null, e.from(t.script, "hex"));
            }),
              g.addOutput(s, Number(f.toString())),
              p.gt(new this.BN(0)) &&
                g.addOutput(o[0].address, Number(p.toString())));
            const T = await this.getKeyForSignFromPrivateKey(h(A, this));
            for (let e = 0; e < o.length; e++)
              await this.signInput(g, T, e, o[e]);
            const m = g.build(),
              w = m.toHex();
            return w;
          }
          async getTransactionBuilder() {
            const e = await this.loadCoreLibrary(),
              t = new e.TransactionBuilder(await this.getNetwork());
            return (
              t.setVersion(x),
              t.setLockTime(0),
              t.setVersionGroupId(parseInt(y, 16)),
              t.setExpiryHeight(k),
              t
            );
          }
          async signInput(e, t, s, r) {
            const n = await this.loadCoreLibrary();
            return e.sign(
              s,
              t,
              null,
              n.Transaction.SIGHASH_ALL,
              r.satoshis || parseInt(r.value, 10),
              void 0,
              !0,
            );
          }
          updateCoinParamsFromServer(e) {
            (super.updateCoinParamsFromServer(e),
              e.branchId && (this.branchId = e.branchId));
          }
        }
        t.default = ZECCoin;
      }).call(this, s(2).Buffer);
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
        u = s(4),
        l = s(27),
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
            Date.now() - this.defaultRequestTimeout * l.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * l.ONE_MINUTE >
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
              l.GET_TRANSACTIONS_TYPE,
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
            walletid: (0, u.getTokenId)({
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
            u = c ? r : s.sub(r).sub(n);
          return (0, d.toCurrency)(u, o);
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
            l.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.fees) || 0);
        }
      }
      t.default = BlockbookV2Explorer;
    },
    7624: function (e, t, s) {
      "use strict";
      var r = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = r(s(69)),
        a = r(s(129));
      class ZcashExplorer extends a.default {
        constructor() {
          var e;
          super(...arguments);
          const t =
            (null === (e = this.wallet) || void 0 === e ? void 0 : e.feeData) ||
            {};
          ((this.zip317BaseFee =
            parseInt(t.zip317BaseFee) || ZcashExplorer.DEFAULT_ZIP317_BASE_FEE),
            (this.zip317PerActionFee =
              parseInt(t.zip317PerActionFee) ||
              ZcashExplorer.DEFAULT_ZIP317_PER_ACTION_FEE));
        }
        getAllowedTickers() {
          return ["ZEC"];
        }
        getSendTransactionUrl() {
          return this.config.baseUrl;
        }
        getSendTransactionParams(e) {
          return { method: "sendrawtransaction", params: [e] };
        }
        modifySendTransactionResponse(e) {
          return { txid: e.result };
        }
        calculateZip317Fee(e) {
          let {
            utxos: t = [],
            outputCount: s = 2,
            userFee: r = null,
          } = void 0 === e ? {} : e;
          if (r) return r;
          const n = t.length,
            a = n + s,
            i = this.zip317BaseFee,
            o = a * this.zip317PerActionFee,
            c = i + o;
          return c;
        }
        getMinimumFee() {
          return this.zip317BaseFee;
        }
        getFeePerAction() {
          return this.zip317PerActionFee;
        }
        calculateOutputCount(e, t, s) {
          const r = e + s,
            n = t - r;
          return n > 0 ? 2 : 1;
        }
        getFeeForAmount(e, t) {
          void 0 === t && (t = []);
          const s = t.reduce(
            (e, t) => e + parseInt(t.value || t.amount || 0),
            0,
          );
          let r = 2,
            n = this.calculateZip317Fee({ utxos: t, outputCount: r });
          const a = e + n;
          return (
            s <= a &&
              ((r = 1),
              (n = this.calculateZip317Fee({ utxos: t, outputCount: r }))),
            n
          );
        }
        async sendTransaction(e, t) {
          void 0 === t && (t = {});
          try {
            const t = await super.sendTransaction(e);
            return t;
          } catch (s) {
            if (
              s.message &&
              s.message.includes("unpaid action limit exceeded")
            ) {
              const e = s.message.match(
                /(\d+) action\(s\) exceeds limit of (\d+)/,
              );
              if (e) {
                const [, t, s] = e,
                  r = this.calculateZip317Fee({
                    utxos: new Array(Math.max(1, parseInt(t) - 1)).fill({}),
                    outputCount: 1,
                  });
                throw new Error(
                  `ZIP-317 fee required: Transaction has ${t} actions but limit is ${s}. Minimum suggested fee: ${r} zatoshis (${r / 1e8} ZEC). Base fee: ${this.zip317BaseFee}, Per-action fee: ${this.zip317PerActionFee}. Use createTransaction with proper fee calculation or specify userFee parameter.`,
                );
              }
            }
            throw s;
          }
        }
      }
      ((0, n.default)(ZcashExplorer, "DEFAULT_ZIP317_BASE_FEE", 1e4),
        (0, n.default)(ZcashExplorer, "DEFAULT_ZIP317_PER_ACTION_FEE", 5e3));
      t.default = ZcashExplorer;
    },
  },
]);
