(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [69],
  {
    102: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = c(i(8)),
        n = r(i(28)),
        a = i(438),
        o = i(4);
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const l = "USD",
        u = (t, e) => (e.sort(), `${t}-${e.join(",")}`);
      class Rates {
        constructor() {
          ((this.cache = { popular: {}, other: {} }),
            (this.data = {}),
            (this.dexRatesCache = null),
            (this.popularCoins = []),
            (this.ratesProviders = {
              atomicRaki: new a.AtomicRaki(),
              coinMarketCap: new a.CoinMarketCap(),
              cryptoCompare: new a.CryptoCompare(),
            }),
            (this.ratesSettings = {
              popular: [
                { provider: "atomicRaki", ttlSec: 60 },
                { provider: "cryptoCompare", ttlSec: 60 },
              ],
              other: [
                { provider: "coinMarketCap", ttlSec: 180 },
                { provider: "cryptoCompare", ttlSec: 180 },
              ],
            }));
        }
        async getRatesFromDb(t) {
          return (
            void 0 === t && (t = void 0),
            t ? o.db.rates.where({ fiat: t }) : o.db.rates
          );
        }
        async updateRatesInDb(t) {
          await this._insertBatch(t);
        }
        async getRatesFromNet(t, e, i) {
          await Promise.all(
            [
              s.default.get(s.ConfigKey.Rates).then((t) => {
                var e;
                this.popularCoins =
                  (null === (e = t.providers[t.enabledProviders].tickers) ||
                  void 0 === e
                    ? void 0
                    : e.split(",")) || [];
              }),
              s.default.get(s.ConfigKey.RatesSettings).then((t) => {
                this.ratesSettings = t;
              }),
            ].map((t) =>
              t.catch((t) => {
                n.default.error({ instance: this, error: t });
              }),
            ),
          );
          const r = await Promise.all(
            Object.keys(this.ratesSettings).map(async (r) => {
              let s = [],
                n = [];
              for (const [o, { provider: c, ttlSec: l }] of this.ratesSettings[
                r
              ].entries()) {
                var a;
                const d = t
                  .filter((t) => {
                    let { ticker: e, confirmed: i } = t;
                    return (
                      i && this.popularCoins.includes(e) === ("popular" === r)
                    );
                  })
                  .concat(n);
                n = [];
                const h = u(
                  c,
                  d.map((t) => {
                    let { id: e } = t;
                    return e;
                  }),
                );
                if (
                  !i &&
                  (null === (a = this.cache[r][h]) || void 0 === a
                    ? void 0
                    : a.expired) > Date.now()
                )
                  return this.cache[r][h].data;
                const f = await this.fetchRates(d, e, r, c);
                if (f.fetched) {
                  const t = await this.ratesProviders[c].getTargetTickersMap(d),
                    e = [];
                  for (const r of d) {
                    const i =
                      f.data.find((e) => {
                        let { ticker: i } = e;
                        return i === t[r.id];
                      }) || {};
                    i.rate > 0
                      ? e.push(Object.assign({ walletId: r.id }, i))
                      : n.push(r);
                  }
                  s = s.concat(e);
                  const i = 1e3;
                  this.cache[r][h] = { data: e, expired: Date.now() + l * i };
                }
                if (0 === n.length || o === this.ratesSettings[r].length - 1)
                  return s;
              }
              return (console.error(`no rates fetched for ${r} coins`), []);
            }),
          );
          return r.flat(1);
        }
        async fetchRates(t, e, i, r) {
          try {
            const i = await this.ratesProviders[r].get(t, e);
            return { fetched: !0, data: i };
          } catch (s) {
            return (console.error(s), { fetched: !1 });
          }
        }
        setRate(t, e, i) {
          let { id: r } = t;
          (this.data[r] || (this.data[r] = {}), (this.data[r][e] = i));
        }
        updateDataRate(t, e, i) {
          (this.data[t] || (this.data[t] = {}), (this.data[t][e] = i));
        }
        async initRates() {
          const t = await this.getRatesFromDb();
          await t.each((t) => {
            let {
              rate: e = 0,
              change: i = 0,
              supply: r = 0,
              volume: s = 0,
              marketCap: n = 0,
              fiat: a,
              walletId: o,
            } = t;
            const c = {
              rate: e,
              change: i,
              supply: r,
              volume: s,
              marketCap: n,
            };
            this.updateDataRate(o, a, c);
          });
        }
        async updateRates() {
          const t = Object.keys(this.data)
            .map((t) =>
              Object.keys(this.data[t]).map((e) => {
                const i = this.data[t][e] || {};
                return {
                  id: e + t,
                  fiat: e,
                  walletId: t,
                  timestamp: new Date().getTime(),
                  rate: i.rate || 0,
                  change: i.change || 0,
                  volume: i.volume || 0,
                  supply: i.supply || 0,
                  marketCap: i.marketCap || 0,
                };
              }),
            )
            .flat();
          await this.updateRatesInDb(t);
        }
        getRate(t, e) {
          let { id: i, confirmed: r } = t;
          if (!r) return;
          const s = this.data[i];
          return s && s[e];
        }
        async getRates(t, e, i) {
          (void 0 === e && (e = l), void 0 === i && (i = !1));
          const r = await this.getRatesFromNet(t, e, i);
          return (
            o.requestQueueState.setAsCompleted(o.REQUEST_TYPE.INITIAL_RATES),
            r.length > 0 &&
              (r.forEach((t) => {
                let { walletId: i, ...r } = t;
                this.updateDataRate(i, e, r);
              }),
              await this.updateRates()),
            this.data
          );
        }
        convertToUSD(t, e, i) {
          let { id: r, confirmed: s } = e;
          return (s || (t && r && i)) &&
            Object.keys(this.data).includes(r) &&
            "undefined" !== typeof this.data[r][i]
            ? Number(t) * this.data[r][i.toUpperCase()].rate
            : 0;
        }
        getCoinPrice(t, e) {
          return this.getRateField(t, e, "rate");
        }
        getChangeDay(t, e) {
          return this.getRateField(t, e, "change");
        }
        getMarketCap(t, e) {
          return this.getRateField(t, e, "marketCap");
        }
        getRateField(t, e, i) {
          let { id: r, confirmed: s } = void 0 === t ? {} : t;
          if (!s) return 0;
          try {
            return this.data[r][e][i];
          } catch (n) {
            return 0;
          }
        }
        async _insertBatch(t) {
          await o.db.rates.bulkPut(t);
        }
        async _update(t) {
          const e = await o.db.rates
            .where({
              ticker: t.ticker.toUpperCase(),
              fiat: t.fiat.toUpperCase(),
            })
            .first()
            .catch((t) => n.default.error({ instance: this, error: t }));
          if (null !== e && void 0 !== e && e.id)
            return (await o.db.rates.update(e.id, t), t);
        }
      }
      e.default = new Rates();
    },
    103: function (t, e, i) {
      "use strict";
      (i.r(e),
        i.d(e, "ACTIVITY_TYPES", function () {
          return g;
        }));
      var r,
        s,
        n,
        a,
        o,
        c = i(35),
        l = i(26),
        u = i.n(l),
        d = (t, e, i) => {
          if (!e.has(t)) throw TypeError("Cannot " + i);
        },
        h = (t, e, i) => (
          d(t, e, "read from private field"),
          i ? i.call(t) : e.get(t)
        ),
        f = (t, e, i) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, i);
        },
        m = (t, e, i, r) => (
          d(t, e, "write to private field"),
          r ? r.call(t, i) : e.set(t, i),
          i
        ),
        p = (t, e, i) => (d(t, e, "access private method"), i);
      const g = { balance: "balance", history: "history" },
        y = ["BTC", "ETH"],
        w = ["XMR"],
        v = () => ({ balance: {}, history: {} }),
        b = (t) => {
          var e, i;
          return "string" === typeof t
            ? t
            : t && "object" === typeof t
              ? String(
                  null != (i = null != (e = t.deprecatedParent) ? e : t.id)
                    ? i
                    : "",
                )
              : "";
        };
      class ActiveWalletsList {
        constructor() {
          (f(this, a),
            (this.storageId = "activeWallets"),
            f(this, r, []),
            f(this, s, v()),
            f(this, n, localStorage),
            this.synchronize(),
            u.a.on(c["WALLETS"].DEACTIVATE_COIN, ({ id: t }) =>
              this.deactivate(t),
            ));
        }
        deactivate(t) {
          const e = b(t);
          (m(
            this,
            r,
            h(this, r).filter((t) => t !== e),
          ),
            p(this, a, o).call(this));
        }
        activate(t) {
          const e = b(t);
          e &&
            !h(this, r).includes(e) &&
            (h(this, r).push(e), p(this, a, o).call(this));
        }
        isActive(t) {
          const e = b(t);
          if (y.includes(e)) return !0;
          const i = h(this, r).includes(e);
          if (i || w.includes(e)) return i;
          const n = Object.values(g);
          return (
            !!n.some((t) => h(this, s)[t][e]) ||
            n.some((t) => null == h(this, s)[t][e])
          );
        }
        trackActivity(t, e, i) {
          const r = b(t);
          h(this, s)[e][r] ||
            ((h(this, s)[e][r] = i), p(this, a, o).call(this));
        }
        setAllActivitiesAsNegative(t) {
          const e = Object.values(g),
            i = new Set(t.map((t) => b(t)));
          (i.forEach((t) => {
            t &&
              !y.includes(t) &&
              e.forEach((e) => {
                h(this, s)[e][t] = !1;
              });
          }),
            p(this, a, o).call(this));
        }
        reset() {
          (m(this, r, []), m(this, s, v()), p(this, a, o).call(this));
        }
        synchronize() {
          const t = h(this, n).getItem(this.storageId);
          try {
            const e = JSON.parse(t || "{}");
            (m(this, r, e.activatedWalletsIdCollection || []),
              m(this, s, e.activityChecked || v()));
          } catch (e) {
            (console.error(e), m(this, r, []), m(this, s, v()));
          }
        }
      }
      ((r = new WeakMap()),
        (s = new WeakMap()),
        (n = new WeakMap()),
        (a = new WeakSet()),
        (o = function () {
          h(this, n).setItem(
            this.storageId,
            JSON.stringify({
              activatedWalletsIdCollection: h(this, r),
              activityChecked: h(this, s),
            }),
          );
        }),
        (e["default"] = new ActiveWalletsList()));
    },
    1241: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(452));
      class AboutInfo {
        constructor(t) {
          if (!(0, s.default)(t))
            throw new TypeError(
              "AboutInfo: constructor arguments object must be used",
            );
          if (!("string" === typeof t.title && t.title.length > 0))
            throw new TypeError("AboutInfo: must have correct title");
          if (
            ((this.title = t.title),
            !("string" === typeof t.contentUrl && t.contentUrl.length > 0))
          )
            throw new TypeError("AboutInfo: must have correct contentUrl");
          ((this.contentUrl = t.contentUrl),
            (0, s.default)(t.previewUrl)
              ? (this.previewUrl = {
                  desktop:
                    "string" === typeof t.previewUrl.desktop
                      ? t.previewUrl.desktop
                      : "",
                  mobile:
                    "string" === typeof t.previewUrl.mobile
                      ? t.previewUrl.mobile
                      : "",
                })
              : (this.previewUrl = { desktop: "", mobile: "" }));
        }
      }
      e.default = AboutInfo;
    },
    1243: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(462)),
        n = r(i(26)),
        a = i(27);
      const o = "https://zeus.atomicwallet.io";
      class Socket {
        constructor(t, e) {
          ((this.user = t),
            (this.endpoint = e || o),
            (this.socket = (0, s.default)(this.endpoint, {
              transports: ["websocket"],
            })),
            (this.subs = null),
            this.socket.on("connect", () => {
              this.subscribe();
            }),
            this.socket.on("disconnect", () => {
              this.socket.connect();
            }));
        }
        subscribe() {
          (this.socket.emit("subscribe", this.user), this.listen());
        }
        listen() {
          this.subs = a.TxEventTypes.map(
            (t) => (
              this.socket.off(t),
              this.socket.on(t, (e) => {
                n.default.emit(t, e);
              })
            ),
          );
        }
        disconnect() {
          this.socket.disconnect();
        }
      }
      e.default = Socket;
    },
    127: function (t, e, i) {
      "use strict";
      (i.r(e),
        i.d(e, "CoinFeature", function () {
          return r;
        }));
      var r = ((t) => (
        (t["Nft"] = "nft"),
        (t["CustomTokens"] = "customTokens"),
        (t["Tokens"] = "tokens"),
        t
      ))(r || {});
    },
    129: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(14)),
        n = r(i(462)),
        a = r(i(81)),
        o = r(i(26)),
        c = r(i(80)),
        l = r(i(339)),
        u = i(67),
        d = i(19),
        h = i(27),
        f = i(384),
        m = i(4);
      const p = 100;
      class Explorer {
        constructor(t) {
          var e, i;
          let { wallet: r, config: s } = t;
          ((this.config = s),
            (this.defaultTxLimit =
              null !== (e = s.txLimit) && void 0 !== e ? e : p),
            (this.wallet = r),
            this.setAxiosClient(),
            (this.socket = {}),
            (this.webUrl = s.webUrl),
            (this.clients = {}),
            (this.eventEmitter = o.default),
            (this.txNotifier = new l.default(r)),
            (this.canPaginate = !1),
            (this.lastGetInfoRequestTime = null),
            (this.lastGetTxsRequestTime = null),
            (this.defaultRequestTimeout =
              null !== (i = s.defaultRequestTimeout) && void 0 !== i
                ? i
                : null));
        }
        get name() {
          return this.constructor.name;
        }
        updateParams(t) {
          ((this.config = t),
            t.defaultRequestTimeout &&
              (this.defaultRequestTimeout = t.defaultRequestTimeout),
            t.baseUrl &&
              this.config.baseUrl !== t.baseUrl &&
              ((this.config.baseUrl = t.baseUrl), this.setAxiosClient()),
            (this.webUrl = t.webUrl));
        }
        setSocketClient(t) {
          this.socket[this.wallet.ticker] = (0, n.default)(t, {
            transports: ["websocket"],
          });
        }
        setAxiosClient() {
          this.client = s.default.create(this.getInitParams());
        }
        toBNMinimalUnit(t) {
          return new this.wallet.BN(
            this.wallet.toMinimalUnit(null !== t && void 0 !== t ? t : 0),
          );
        }
        toBNCurrencyUnit(t) {
          return new this.wallet.BN(
            this.wallet.toCurrencyUnit(null !== t && void 0 !== t ? t : 0),
          );
        }
        getWebTransactionUrl(t) {
          return `${this.webUrl}${t}`;
        }
        getAllowedTickers() {
          return [];
        }
        getInitParams() {
          if (!this.config.baseUrl)
            throw new Error(
              `${this.wallet.ticker} ${this.constructor.name}: explorer config have no baseUrl`,
            );
          return { baseURL: this.config.baseUrl };
        }
        getApiPrefix() {
          return "api";
        }
        async checkTransaction(t, e) {
          var i;
          let {
            coin: r,
            address: s,
            amount: n,
            memo: o,
            txid: l,
            nonce: d,
            fee: h,
            feeTicker: f,
          } = e;
          const m = new c.default({
            ticker: r.ticker,
            walletid: r.id,
            name: r.name,
            alias: r.alias,
            explorer: this.constructor.name,
            txid: l,
            direction: t === s,
            otherSideAddress: s,
            amount: (0, u.toCurrency)(n, r.decimal),
            datetime: new Date(),
            memo: o,
            nonce: d,
            confirmations: 0,
            fee: h,
            feeTicker:
              null !== (i = null !== f && void 0 !== f ? f : r.feeTicker) &&
              void 0 !== i
                ? i
                : this.getTxFeeTicker(),
          });
          return (await a.default.filterAndUpdateTransactions([m]), m);
        }
        async getInfo(t) {
          if (!t || "string" !== typeof t)
            throw this.createError(
              "getInfo: address must be string with length > 0",
            );
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE <
              this.lastGetInfoRequestTime
          )
            return this.modifyInfoResponse(void 0);
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE >
              this.lastGetInfoRequestTime &&
            (this.lastGetInfoRequestTime = Date.now());
          const e = await this.request(
            this.getInfoUrl(t),
            this.getInfoMethod(),
            this.getInfoParams(t),
            h.GET_BALANCE_TYPE,
            this.getInfoOptions(),
          );
          return this.modifyInfoResponse(e);
        }
        getInfoUrl(t) {
          throw new d.UndeclaredAbstractMethodError("getInfoUrl", this);
        }
        getInfoMethod() {
          return "get";
        }
        getInfoParams(t) {
          return {};
        }
        getInfoOptions() {
          return {
            transformResponse: [
              (t) => JSON.parse(t.replace(/:(\d+)([,}])/g, ':"$1"$2')),
            ],
          };
        }
        getTransactionOptions() {
          return {};
        }
        getTransactionsOptions() {
          return {};
        }
        getTokenBalancesOptions() {
          return {};
        }
        modifyGetTokenBalancesResponse(t, e) {
          return t;
        }
        getUtxoOptions() {
          return {};
        }
        getLatestBlockOptions() {
          return {};
        }
        getSendOptions() {
          return {};
        }
        modifyInfoResponse(t) {
          return t;
        }
        async getTransaction(t, e, i) {
          void 0 === i && (i = []);
          const r = await this.request(
            this.getTransactionUrl(e),
            this.getTransactionMethod(),
            this.getTransactionParams(e),
            h.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
          return this.modifyTransactionResponse(r, t, i);
        }
        getTransactionModifiedResponse(t, e, i) {
          return (
            void 0 === i && (i = this.wallet.ticker),
            Object.assign(
              { explorer: this.constructor.name, locktime: t && t.lockTime },
              this.getTransactionsModifiedResponse(t, e, i),
            )
          );
        }
        getTransactionsModifiedResponse(t, e, i) {
          return (
            void 0 === i && (i = this.wallet.ticker),
            {
              ticker: i,
              name: this.wallet.name,
              walletid: this.wallet.id,
              txid: this.getTxHash(t),
              direction: this.getTxDirection(e, t),
              otherSideAddress: this.getTxOtherSideAddress(e, t),
              amount: this.getTxValue(e, t),
              datetime: this.getTxDateTime(t),
              memo: this.getTxMemo(t),
              confirmations: this.getTxConfirmations(t),
              nonce: this.getTxNonce(t),
              alias: this.wallet.alias,
              fee: this.getTxFee(t),
              feeTicker: this.getTxFeeTicker(),
              txType: this.getTxType(t),
            }
          );
        }
        getTransactionUrl(t) {
          throw new d.UndeclaredAbstractMethodError("getTransactionUrl", this);
        }
        getTransactionMethod() {
          return "get";
        }
        getTransactionParams(t) {
          return {};
        }
        modifyTransactionResponse(t, e, i) {
          return (
            void 0 === i && (i = this.wallet.ticker),
            new c.default(this.getTransactionModifiedResponse(t, e, i))
          );
        }
        async getTransactions(t) {
          let { address: e, offset: i, limit: r, pageNum: s } = t;
          if (
            this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE <
              this.lastGetTxsRequestTime
          )
            return [];
          this.defaultRequestTimeout &&
            Date.now() - this.defaultRequestTimeout * h.ONE_MINUTE >
              this.lastGetTxsRequestTime &&
            (this.lastGetTxsRequestTime = Date.now());
          const n = await this.request(
            this.getTransactionsUrl(e, i || 0, r || this.defaultTxLimit, s),
            this.getTransactionsMethod(),
            this.getTransactionsParams(e, i || 0, r || this.defaultTxLimit, s),
            h.GET_TRANSACTIONS_TYPE,
            this.getTransactionsOptions(),
          );
          return this.modifyTransactionsResponse(n, e);
        }
        getTransactionsUrl(t, e, i, r) {
          throw new d.UndeclaredAbstractMethodError("getTransactionsUrl", this);
        }
        getTokenBalancesUrl(t) {
          throw new d.UndeclaredAbstractMethodError(
            "getTokenBalancesUrl",
            this,
          );
        }
        getTransactionsMethod() {
          return "get";
        }
        getTokenBalancesMethod() {
          return "get";
        }
        getTransactionsParams(t, e, i, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === i && (i = this.defaultTxLimit),
            { from: e, to: e + i }
          );
        }
        getTokenBalancesParams(t) {
          return {};
        }
        modifyTransactionsResponse(t, e) {
          return Array.isArray(t)
            ? t.map(
                (t) =>
                  new c.default(this.getTransactionsModifiedResponse(t, e)),
              )
            : [];
        }
        async getUnspentOutputs(t, e) {
          const i = await this.request(
            this.getUnspentOutputsUrl(t),
            this.getUnspentOutputsMethod(),
            this.getUnspentOutputsParams(t),
            h.GET_UTXO_TYPE,
            this.getUtxoOptions(),
          );
          return this.modifyUnspentOutputsResponse(t, i, e);
        }
        getUnspentOutputsUrl(t) {
          throw new d.UndeclaredAbstractMethodError(
            "getUnspentOutputsUrl",
            this,
          );
        }
        getUnspentOutputsMethod() {
          return "get";
        }
        getUnspentOutputsParams(t) {
          return {};
        }
        modifyUnspentOutputsResponse(t, e, i) {
          return e;
        }
        async sendTransaction(t) {
          const e = await this.request(
            this.getSendTransactionUrl(),
            this.getSendTransactionMethod(),
            this.getSendTransactionParams(t),
            h.SEND_TRANSACTION_TYPE,
            this.getSendOptions(),
          );
          return this.modifySendTransactionResponse(e);
        }
        getSendTransactionUrl() {
          throw new d.UndeclaredAbstractMethodError(
            "getSendTransactionUrl",
            this,
          );
        }
        getSendTransactionMethod() {
          return "post";
        }
        getSendTransactionParam() {
          return "txid";
        }
        getSendTransactionParams(t) {
          return { [this.getSendTransactionParam()]: t };
        }
        modifySendTransactionResponse(t) {
          return t;
        }
        getHeaders() {
          return {};
        }
        handleRequestError(t, e) {
          let { url: i, method: r, params: s, type: n, options: a } = e;
          const {
              headers: o,
              method: c,
              baseURL: l,
              url: u,
              data: h,
            } = (null === t || void 0 === t ? void 0 : t.config) || {},
            f = {
              request: { headers: o, method: c, baseURL: l, url: u, data: h },
            };
          if (t.response) {
            const {
                data: e,
                status: i,
                statusText: r,
                headers: s,
              } = t.response,
              n = { data: e, status: i, statusText: r, headers: s };
            f.response = n;
          } else f.response = "No response data available";
          throw new d.ExplorerRequestError({
            type: n,
            error: new Error(JSON.stringify(f)),
            errorData: f,
            url: `${this.config.baseUrl}${i}`,
            instance: this,
          });
        }
        async request(t, e, i, r, s) {
          if (
            (void 0 === e && (e = "get"),
            void 0 === i && (i = {}),
            void 0 === r && (r = h.UNDEFINED_OPERATION_ERROR),
            void 0 === s && (s = {}),
            -1 !== t.search("undefined"))
          )
            throw new Error("corrupted url: " + t);
          try {
            return this.modifyGeneralResponse(
              await this.client.request({
                url: t,
                method: e,
                ["get" === e ? "params" : "data"]: i,
                ...s,
              }),
            );
          } catch (n) {
            if (n.isAxiosError)
              return this.handleRequestError(n, {
                url: t,
                method: e,
                params: i,
                type: r,
                options: s,
              });
            throw new d.ExplorerRequestError({
              type: r,
              error: n,
              url: `${this.config.baseUrl}${t}`,
              instance: this,
            });
          }
        }
        modifyGeneralResponse(t) {
          return t.data;
        }
        getTxNonce(t) {}
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(
            t.fee || this.wallet.feeDefault || 0,
          );
        }
        getTxValue(t, e) {
          throw new d.UndeclaredAbstractMethodError("getTxValue", this);
        }
        getTxDirection(t, e) {
          return (
            e.vin &&
            !e.vin.find((e) => {
              let { addr: i } = e;
              return i === t;
            }) &&
            !0
          );
        }
        getTxOtherSideAddress(t, e) {
          if (e.vin) {
            if (this.getTxDirection(t, e)) return e.vin[0].addr;
            const i = e.vout.find((e) => {
              let {
                scriptPubKey: { addresses: i },
              } = e;
              return !i.includes(t);
            });
            if (i) return i.scriptPubKey.addresses[0];
          }
          return "...";
        }
        getTxDateTime(t) {
          return new Date(Number(t.time + "000"));
        }
        getTxDate(t) {
          return this.getTxDateTime(t).toDateString().slice(4);
        }
        getTxTime(t) {
          return this.getTxDateTime(t).toTimeString().slice(0, 5);
        }
        getTxConfirmations(t) {
          return t.confirmations || 0;
        }
        getTxHash(t) {
          return t.txid;
        }
        getTxMemo(t) {
          return "";
        }
        getTxFeeTicker() {
          return this.wallet.ticker;
        }
        getTxType(t) {
          return f.TxTypes[t.type] || f.TxTypes.TRANSFER;
        }
        async getBalance(t, e) {
          void 0 === e && (e = !1);
          const i = await this.getInfo(t);
          return i && i.balance
            ? e
              ? i.balance
              : String(this.wallet.toCurrencyUnit(i.balance))
            : null;
        }
        getLatestBlockUrl() {
          throw new d.UndeclaredAbstractMethodError("getLatestBlockUrl", this);
        }
        getLatestBlockMethod() {
          return "get";
        }
        getLatestBlockParams() {
          return {};
        }
        modifyLatestBlockResponse(t) {
          return (0, m.sanitizeObject)(t);
        }
        async getLatestBlock() {
          const t = await this.request(
            this.getLatestBlockUrl(),
            this.getLatestBlockMethod(),
            this.getLatestBlockParams(),
            h.GET_LATEST_BLOCK_TYPE,
            this.getLatestBlockOptions(),
          );
          return this.modifyLatestBlockResponse(t);
        }
        getBlockUrl() {
          throw new d.UndeclaredAbstractMethodError("getBlockUrl", this);
        }
        getBlockMethod() {
          throw new d.UndeclaredAbstractMethodError("getBlockMethod", this);
        }
        getBlockParams() {
          throw new d.UndeclaredAbstractMethodError("getBlockParams", this);
        }
        getBlockOptions() {
          throw new d.UndeclaredAbstractMethodError("getBlockParams", this);
        }
        async getBlock(t) {
          const e = await this.request(
            this.getBlockUrl(t),
            this.getBlockMethod(),
            this.getBlockParams(),
            h.GET_BLOCK_TYPE,
            this.getBlockOptions(),
          );
          return this.modifyGetBlockResponse(e);
        }
        modifyGetBlockResponse(t) {
          return t;
        }
        getTxLimit() {
          return this.defaultTxLimit;
        }
        createError(t) {
          return new Error(
            `[${this.wallet.ticker}] ${this.constructor.name} Error: ${t}`,
          );
        }
        async getSocketTransaction(t) {
          let { address: e, hash: i, tokens: r, type: s, scriptPubKey: n } = t;
          const o = await this.getTransaction(e, i, r);
          (await a.default.filterAndUpdateTransactions([o]),
            this.txNotifier.notify(s, o, o.walletid, o.ticker, i));
        }
        makeNftInfoUrl(t, e) {
          throw new d.UndeclaredAbstractMethodError("makeNftInfoUrl", this);
        }
        async fetchNftList(t) {
          throw new d.UndeclaredAbstractMethodError("fetchNftList", this);
        }
        async sendNft(t, e, i, r, s, n) {
          throw new d.UndeclaredAbstractMethodError("fetchNftList", this);
        }
      }
      e.default = Explorer;
    },
    1874: function (t, e) {
      function i(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      ((i.keys = function () {
        return [];
      }),
        (i.resolve = i),
        (t.exports = i),
        (i.id = 1874));
    },
    1989: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BalanceNotifier = void 0));
      var s = r(i(69)),
        n = i(35);
      class BalanceNotifier {
        constructor(t, e) {
          ((0, s.default)(this, "socket", null),
            (0, s.default)(this, "config", null),
            (0, s.default)(this, "hash", null),
            (this.config = e),
            t.on(n.WALLETS.BALANCE_UPDATED, (t) => {
              let { wallet: e } = t;
              if (!this.socket)
                return void console.warn(
                  "Could not send balance change: socket is not initialized.",
                );
              if (!this.config)
                return void console.warn(
                  "Could not send balance change: balance tracking config is not loaded.",
                );
              if (!this.hash)
                return void console.warn(
                  "Could not send balance change: atomicId hash is not loaded.",
                );
              const i = this.config.some((t) => {
                let { ticker: i, contract: r, network: s, chainId: n } = t;
                return e.isMatch({
                  ticker: i,
                  contract: r,
                  network: s,
                  chainId: n,
                });
              });
              i &&
                this.socket.emit("balances", {
                  atomicId: this.hash,
                  ticker: e.ticker,
                  amount: e.divisibleBalance,
                  network: e.deprecatedParent,
                  contract: e.contract,
                  chainId: e.chainId,
                });
            }));
        }
      }
      e.BalanceNotifier = BalanceNotifier;
    },
    2019: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(14)),
        n = r(i(337)),
        a = i(426),
        o = i(19),
        c = i(4),
        l = i(27),
        u = i(193);
      class SimplexDb {
        async getSimplexTransactionsFromDb() {
          const t = await c.db.simplexTxs.toArray();
          return t;
        }
        async getSimplexTransactionsFromNet(t) {
          const e = {
              url: "https://apollo.atomicwallet.io/simplex/buy/user",
              params: { atomicId: t },
              method: "get",
            },
            { data: i } = await (0, s.default)(e).catch((t) => {
              throw new o.ExternalError({
                type: l.EXTERNAL_ERROR,
                error: t,
                instance: this,
              });
            }),
            r = i,
            n = r.map((t) => ({
              id: t.paymentId,
              quoteId: t.quoteId,
              userId: t.atomicId,
              status: t.status,
              txHash: t.payoutHash,
              payinHash: t.payinHash,
              payoutHash: t.payoutHash,
              refundAddress: t.refundAddress,
              payoutAddress: t.payoutAddress,
              payinAddress: t.payinAddress,
              payinExtraId: t.payinExtraId,
              fromCurrency: t.fromCurrency,
              toCurrency: t.toCurrency,
              amountToSend: t.amountSend,
              amountToReceive: t.amountReceive,
              expectedCashbackAmount:
                t.Cashbacks.length > 0
                  ? t.Cashbacks[0].expectedCashbackAmount
                  : "0",
              timestamp: t.createdAt,
            }));
          return (await this._insertBatch(n), n);
        }
        async addSimplexTransactionToDb(t) {
          return (await c.db.simplexTxs.add(t), t);
        }
        postCashbackBuyTx(t) {
          let { buyParams: e, cashbackParams: i } = t;
          if (null !== e && void 0 !== e && e.to) {
            const {
              ticker: t,
              deprecatedParent: i,
              contract: r,
              id: s,
            } = null === e || void 0 === e ? void 0 : e.to;
            Object.assign(e, {
              to: { ticker: t, network: i, contract: r, coinId: s },
            });
          }
          const r = {
            url: "https://apollo.atomicwallet.io/v2/simplex/buy",
            data: { buyParams: e, cashbackParams: i },
            method: "post",
          };
          return (0, s.default)(r);
        }
        getLiveTransactions() {
          return (0, a.liveQuery)(() => c.db.buyHistory.toArray());
        }
        async getTransactionList(t) {
          try {
            const { items: e } =
                (await u.exchangerV2.getTransactionList(t)) || [],
              i = (await c.db.buyHistory.toArray()) || [];
            return (
              (0, n.default)(i, e) ||
                (await c.db.transaction("rw", c.db.buyHistory, async () => {
                  (await c.db.buyHistory.clear(),
                    await c.db.buyHistory.bulkPut(e));
                })),
              e
            );
          } catch (e) {
            return (console.warn(e), []);
          }
        }
        async _insertBatch(t) {
          return (await c.db.simplexTxs.bulkPut(t), t);
        }
      }
      e.default = SimplexDb;
    },
    2020: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.walletToString = e.default = void 0));
      var s = i(68),
        n = r(i(2021)),
        a = r(i(8)),
        o = r(i(37)),
        c = i(855),
        l = i(331),
        u = r(i(2029));
      function d(t, e) {
        (h(t, e), e.add(t));
      }
      function h(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function f(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const m = (t, e) => `${e || ""}-${t || ""}`.toLowerCase();
      e.walletToString = m;
      const p = (t) => {
        let { contract: e, deprecatedParent: i, ticker: r } = t;
        return { contract: e, network: i, ticker: r };
      };
      function g(t, e) {
        let { ticker: i = "", contract: r = "", parentTicker: s = "" } = e;
        const n = Array.from(t).filter((t) => {
          var e;
          return (
            t.ticker.toLowerCase() ===
              (null === i || void 0 === i ? void 0 : i.toLowerCase()) &&
            (!r ||
              (null === (e = t.contract) || void 0 === e
                ? void 0
                : e.toLowerCase()) === r.toLowerCase())
          );
        });
        return n.length > 1 && s
          ? n.find((t) => {
              let { deprecatedParent: e } = t;
              return e.toLowerCase() === s.toLowerCase();
            })
          : n[0];
      }
      var y = new WeakSet();
      class Exchanges {
        constructor() {
          (d(this, y),
            (this.cashback = new n.default(
              "https://apollo.atomicwallet.io",
              "v2/transactions",
              "transactions",
              "transaction",
            )),
            (this.db = new u.default()),
            (this.services = { changenow: new c.Changenow() }));
        }
        async getAvailableWalletIdCollection(t, e) {
          const i = await a.default.get("excludedMoveCurrency2"),
            r = new Set(
              i.map((t) => {
                let { excludedTicker: e, excludedNetwork: i } = t;
                return m(e, i);
              }),
            ),
            n = this.getService(this.getCurrentServiceName());
          return t.reduce((t, i) => {
            const a = n.getInternalContract(i),
              { ticker: o, parentTicker: c } = n.getInternalWalletData(i);
            if (r.has(m(o, c))) return t;
            if (["cchain", "xchain"].includes(i.network) && null !== a)
              return t;
            if ("band" === i.ticker && "band" !== i.network) return t;
            const l = g(e, { contract: a, ticker: o, parentTicker: c });
            if (
              "AVAX" === o &&
              i.network !== (null === l || void 0 === l ? void 0 : l.network)
            )
              return t;
            if (
              l &&
              s.CoinRestrictionPolicy.isAllowed(l.ticker, s.ACTION_EXCHANGE) &&
              !t.includes(l.id)
            )
              return t.concat(l.id);
            const u = g(e, { contract: a, parentTicker: c, ticker: o });
            return u &&
              s.CoinRestrictionPolicy.isAllowed(u.parent, s.ACTION_EXCHANGE) &&
              !t.includes(u.id)
              ? t.concat(u.id)
              : t;
          }, []);
        }
        getCurrentServiceName() {
          return "changenow";
        }
        getExchangeTransactionFromDb() {
          return this.db.getBatch();
        }
        async getExchangeTransactionsFromNet(t, e) {
          void 0 === e && (e = {});
          const i = await this.cashback.listTxs({ atomicId: t, ...e });
          return this.db.insertTxs(i);
        }
        getPreorder(t, e, i, r) {
          return {
            preorderFrom: t.ticker,
            preorderTo: e.ticker,
            preorderFromAmount: i,
            preorderToAmount: r,
            preorderTimestamp: Date.now(),
          };
        }
        getService(t) {
          return this.services[t];
        }
        isAvailableToBuy(t) {
          return this.getService(this.getCurrentServiceName()).isAvailableToBuy(
            t,
          );
        }
        addExchangeTransactionToDb(t, e, i, r, s, n) {
          let { estimatedAwcCashback: a } = r;
          return this.db.insertTx(
            Object.assign({}, t, { from: p(t.from), to: p(t.to) }),
            e,
            i,
            a,
            s,
            n,
          );
        }
        async updateExchangeTransactionsInDb(t) {
          return this.db.updateBatch(t);
        }
        postCashbackExchangeTx(t, e, i, r, s, n, a) {
          return this.cashback.addTx({
            txParams: {
              orderId: t.id,
              atomicId: e,
              status: "waiting",
              fromCurrency: t.from.ticker,
              toCurrency: t.to.ticker,
              from: p(t.from),
              to: p(t.to),
              amountSend: i,
              amountReceive: t.amountToReceive,
              payinAddress: t.payinAddress,
              payinExtraId: t.payinExtraId,
              payoutAddress: t.payoutAddress,
              refundAddress: s,
              createdAt: t.timestamp,
              ...n,
            },
            cashbackParams: {
              atomicId: r.hash,
              bnbAddress: r.bnbAddr,
              ethAddress: r.ethAddr,
              expectedCashbackAmount: r.estimatedAwcCashback,
              expectedCashbackAmountRate: r.estimatedAwcCashbackRate,
              awcBep2Balance: r.awcBep2Balance,
              awcBep2Rate: r.awcBep2Rate,
              exchangeService: a,
              platform: o.default.getPlatform(),
              walletVersion: o.default.getVersion(),
            },
          });
        }
        async sendTransaction(t, e, i, r, n, a, o) {
          var c;
          if ((void 0 === o && (o = null), !i || !a))
            throw new Error(
              "Invalid exchange transaction, no address or orderId is specified",
            );
          let u = null,
            d = null,
            h = null,
            f = null,
            m = null;
          const p = t instanceof s.Token;
          o && ((m = o.fee), (h = o.gasPrice), (f = o.gasLimit));
          try {
            const s = {
                address: i,
                amount: r,
                memo: n,
                userGasPrice: h,
                gasLimit: f,
                userFee: m,
                txStatType: l.TX_STAT_TYPES.EXCHANGE,
              },
              a = p ? await t.createTransaction(s) : {};
            u = p
              ? await e.createTokenTransaction(a)
              : await t.createTransaction(s);
          } catch (g) {
            throw (console.error("Create tx error", g), new Error(g));
          }
          try {
            ((d = await e.sendTransaction(u)),
              await this.updateExchangeTransactionsInDb([
                { id: a, payinHash: d.txid },
              ]));
          } catch (g) {
            throw (console.error("Send tx error", g), new Error(g));
          }
          return (
            null !== (c = d) &&
              void 0 !== c &&
              c.txid &&
              (await e
                .checkTransaction({
                  address: i,
                  amount: r,
                  memo: n,
                  txid: d.txid,
                  coin: t,
                })
                .catch((t) => console.warn(t))),
            d
          );
        }
        getSenderWalletByTx(t, e) {
          return f(y, this, w).call(this, t, e, "from");
        }
        getReceiverWalletByTx(t, e) {
          return f(y, this, w).call(this, t, e, "to");
        }
        getStatus(t) {
          return this.cashback.getTx({ orderId: t });
        }
      }
      function w(t, e, i) {
        return g(
          t,
          e[i]
            ? {
                ticker: e[i].ticker,
                contract: e[i].contract,
                parentTicker: e[i].network,
              }
            : this.getService(
                this.getCurrentServiceName(),
              ).getInternalWalletData({ legacyTicker: e[i + "Currency"] }),
        );
      }
      e.default = Exchanges;
    },
    2021: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(14)),
        n = r(i(37));
      class ExchangeCashback {
        constructor(t, e, i, r) {
          ((this.baseUrl = t),
            (this.addUri = e),
            (this.listUri = i),
            (this.getUri = r));
        }
        addTx(t) {
          return this.submitRequest(this.addUri, "post", t, "data", null);
        }
        getTx(t) {
          return this.submitRequest(this.getUri, "get", t, "params", []);
        }
        listTxs(t) {
          return this.submitRequest(this.listUri, "get", t, "params", []);
        }
        async submitRequest(t, e, i, r, a) {
          try {
            const a = n.default.getUserAgentHttpHeader(),
              { data: o } = await (0, s.default)({
                url: `${this.baseUrl}/${t}`,
                [r]: i,
                method: e,
                headers: a,
              });
            return o;
          } catch (o) {
            return (console.error(o), a);
          }
        }
      }
      e.default = ExchangeCashback;
    },
    2027: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      class ExchangeTransaction {
        constructor(t) {
          let {
            from: e,
            to: i,
            address: r,
            refundAddress: s,
            fromAmount: n,
            extraId: a,
            kycData: o,
            preorder: c = {},
            status: l,
            payInHash: u,
            payOutHash: d,
          } = t;
          ((this.from = e),
            (this.to = i),
            (this.address = r),
            (this.refundAddress = s),
            (this.fromAmount = n),
            (this.extraId = a),
            (this.kycData = o),
            (this.preorder = c),
            (this.status = l),
            (this.payInHash = u),
            (this.payOutHash = u));
        }
      }
      e.default = ExchangeTransaction;
    },
    2029: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(2030));
      class ExchangeTxCache extends s.default {
        constructor() {
          super("exchangeTxs", "id");
        }
        insertTx(t, e, i, r, s, n) {
          return (
            void 0 === n && (n = {}),
            this.insertItem({
              id: t.id,
              userId: e,
              status: "In process",
              txHash: null,
              payinHash: null,
              payoutHash: null,
              refundAddress: s,
              payoutAddress: t.payoutAddress,
              payinAddress: t.payinAddress,
              payinExtraId: t.payinExtraId,
              fromCurrency: t.from.ticker,
              from: t.from,
              toCurrency: t.to.ticker,
              to: t.to,
              amountToSend: i,
              amountToReceive: t.amountToReceive,
              expectedCashbackAmount: r,
              timestamp: new Date().toISOString(),
              ...n,
            })
          );
        }
        insertTxs(t) {
          return this.insertBatch(
            t.map((t) => ({
              id: t.orderId,
              userId: t.atomicId,
              status: t.status,
              txHash: t.payoutHash,
              payinHash: t.payinHash,
              payoutHash: t.payoutHash,
              refundAddress: t.refundAddress,
              payoutAddress: t.payoutAddress,
              payinAddress: t.payinAddress,
              payinExtraId: t.payinExtraId,
              fromCurrency: t.fromCurrency,
              from: t.from,
              toCurrency: t.toCurrency,
              to: t.to,
              amountToSend: t.amountSend,
              amountToReceive: t.amountReceive,
              expectedCashbackAmount:
                t.Cashbacks.length > 0
                  ? t.Cashbacks[0].expectedCashbackAmount
                  : "0",
              timestamp: t.createdAt,
            })),
          );
        }
      }
      e.default = ExchangeTxCache;
    },
    2030: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = i(4),
        n = r(i(28));
      class IndexedDbTable extends Array {
        constructor(t, e, i) {
          (void 0 === e && (e = "id"),
            void 0 === i &&
              (i = (t) => {
                let { id: e } = t;
                return { id: e };
              }),
            super(),
            (this.tableName = t),
            (this.primaryKey = e),
            (this.getSearchCriterion = i));
        }
        get table() {
          return s.db[this.tableName];
        }
        getBatch(t) {
          return (void 0 === t && (t = {}), this.getItems(t).toArray());
        }
        async getItem(t) {
          return (void 0 === t && (t = {}), this.getItems(t).first());
        }
        getItems(t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(t).length > 0 ? this.table.where(t) : this.table
          );
        }
        async insertBatch(t) {
          try {
            return (await this.table.bulkPut(t), t);
          } catch (e) {
            return (n.default.error({ instance: this, error: e }), []);
          }
        }
        async insertItem(t) {
          try {
            return (await this.table.add(t), t);
          } catch (e) {
            n.default.error({ instance: this, error: e });
          }
        }
        removeItem(t) {
          return this.table.delete(t);
        }
        async updateBatch(t) {
          try {
            return (await Promise.all(t.map((t) => this.updateItem(t))), t);
          } catch (e) {
            return (n.default.error({ instance: this, error: e }), []);
          }
        }
        async updateItem(t) {
          try {
            const e = await this.getItem(this.getSearchCriterion(t));
            if (e && e[this.primaryKey])
              return (await this.table.update(e[this.primaryKey], t), t);
          } catch (e) {
            n.default.error({ instance: this, error: e });
          }
        }
      }
      e.default = IndexedDbTable;
    },
    2031: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(4);
      function s(t, e, i) {
        (n(t, e), e.set(t, i));
      }
      function n(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function a(t, e) {
        return t.get(c(t, e));
      }
      function o(t, e, i) {
        return (t.set(c(t, e), i), i);
      }
      function c(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const l = [
        "b75742882b159cfc26e273e0e867c656",
        "398580b2fdc69a9522498508f8e01401",
        "e1326549e8ba36b606d8cec00d930139",
      ];
      var u = new WeakMap(),
        d = new WeakMap();
      class Membership {
        constructor(t, e) {
          (void 0 === e && (e = l),
            s(this, u, void 0),
            s(this, d, void 0),
            o(u, this, t),
            o(d, this, e));
        }
        async getBalance() {
          const t = await Promise.all(
            a(d, this).map(async (t) => {
              const e = a(u, this).getWallet(t);
              return void 0 === e
                ? 0
                : (0, r.isBalanceCached)(e.id)
                  ? (0, r.getCachedBalance)(e.id)
                  : (await e.getInfo(), Number(e.toCurrencyUnit(e.balance)));
            }),
          );
          return t.reduce((t, e) => t + e);
        }
      }
      e.default = Membership;
    },
    2032: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(8)),
        n = r(i(28));
      const a = "price-alerts-config",
        o = "price-alerts",
        c = "default-price-alerts",
        l = ["BTC", "ETH", "TRX"];
      class PriceAlerts {
        getTopicForCoin(t) {
          return `${t}-${o}`;
        }
        getDefaultCoinsTopic() {
          return c;
        }
        async getCoinsForSubscription() {
          try {
            return await s.default.get(a);
          } catch (t) {
            return (n.default.error({ instance: this, error: t }), {});
          }
        }
        async getDefaultPriceAlertTickers() {
          try {
            const t = await this.getCoinsForSubscription();
            return Object.entries(t)
              .filter((t) => {
                let [, e] = t;
                return !0 === e.default;
              })
              .map((t) => {
                let [e] = t;
                return e;
              });
          } catch (t) {
            return (n.default.error({ instance: this, error: t }), l);
          }
        }
      }
      const u = new PriceAlerts();
      e.default = u;
    },
    2040: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.TxPushSubscription = e.NOTIFICATION_TYPE = void 0));
      var s = r(i(14)),
        n = i(19),
        a = i(27);
      function o(t, e, i) {
        (c(t, e), e.set(t, i));
      }
      function c(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function l(t, e) {
        return t.get(d(t, e));
      }
      function u(t, e, i) {
        return (t.set(d(t, e), i), i);
      }
      function d(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const h = (e.NOTIFICATION_TYPE = "IncomingTransaction");
      var f = new WeakMap();
      class TxPushSubscription {
        constructor(t) {
          let { serviceBaseUrl: e } = t;
          (o(this, f, void 0),
            u(f, this, s.default.create({ baseURL: e })),
            l(f, this).interceptors.response.use(void 0, (t) => {
              var e;
              return Number(
                null === (e = t.response) || void 0 === e ? void 0 : e.status,
              ) >= a.HTTP_STATUS_SERVER_ERROR
                ? Promise.reject(
                    new n.ExternalError({ error: t, instance: this }),
                  )
                : Promise.reject(
                    new n.InternalError({ error: t, instance: this }),
                  );
            }));
        }
        requestHeaders(t) {
          let { atomicId: e } = t;
          return { "X-Atomic-Id": e };
        }
        async subscribe(t) {
          await l(f, this).post(
            "/subscriptions/subscribe",
            { type: h, ...t },
            { headers: this.requestHeaders(t) },
          );
        }
        async unsubscribe(t) {
          await l(f, this).post(
            "/subscriptions/unsubscribe",
            { type: h, ...t },
            { headers: this.requestHeaders(t) },
          );
        }
        async getActiveSubscriptions(t) {
          const e = await l(f, this).get("/subscriptions", {
            params: { atomicId: t },
            headers: this.requestHeaders({ atomicId: t }),
          });
          if (!Array.isArray(e.data))
            throw new n.ExternalError({
              error: "Wrong response body",
              url: `${e.baseURL}${e.url}`,
              instance: this,
            });
          return e.data;
        }
        async getAvailableIds(t) {
          var e;
          const i = await l(f, this).get("/notifications/coins-list");
          if (!Array.isArray(i.data))
            throw new n.ExternalError({
              error: "Wrong response body",
              url: `${i.baseURL}${i.url}`,
              instance: this,
            });
          const r =
            null === i || void 0 === i || null === (e = i.data) || void 0 === e
              ? void 0
              : e.map((t) => {
                  let { id: e } = t;
                  return e;
                });
          return t
            .getWalletsByIds(r)
            .filter((t) => t.isActivated)
            .map((t) => {
              let { id: e, address: i } = t;
              return { id: e, address: i };
            });
        }
      }
      e.TxPushSubscription = TxPushSubscription;
      e.default = new TxPushSubscription({
        serviceBaseUrl: "https://atomic-notify.atomicwallet.io",
      });
    },
    21: function (t, e, i) {
      "use strict";
      (i.r(e),
        i.d(e, "TokenSource", function () {
          return O;
        }));
      var r,
        s,
        n,
        a = i(11),
        o = i.n(a),
        c = i(228),
        l = i(4),
        u = i(81),
        d = i.n(u),
        h = i(85),
        f = Object.defineProperty,
        m = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        g = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        v = (t, e, i) =>
          e in t
            ? f(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (t[e] = i),
        b = (t, e) => {
          for (var i in e || (e = {})) y.call(e, i) && v(t, i, e[i]);
          if (g) for (var i of g(e)) w.call(e, i) && v(t, i, e[i]);
          return t;
        },
        T = (t, e) => m(t, p(e)),
        k = (t, e, i) => {
          if (!e.has(t)) throw TypeError("Cannot " + i);
        },
        C = (t, e, i) => (
          k(t, e, "read from private field"),
          i ? i.call(t) : e.get(t)
        ),
        S = (t, e, i) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, i);
        },
        x = (t, e, i, r) => (
          k(t, e, "write to private field"),
          r ? r.call(t, i) : e.set(t, i),
          i
        ),
        E = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      const P = new Set(["BNB", "TRX", "ETH", "MATIC", "BSC", "LUNA", "BASE"]);
      class Token_Token extends c["default"] {
        constructor(t) {
          (super(t),
            S(this, r, void 0),
            S(this, s, void 0),
            S(this, n, void 0),
            (this.fields = { paymentId: !1 }),
            x(this, r, t.parent),
            x(this, n, t.contract),
            x(
              this,
              s,
              Object(l["getTokenId"])({
                contract: this.contract,
                parent: C(this, r).id,
                ticker: this.ticker,
              }),
            ),
            (this.source = t.source),
            (this.visibility = t.visibility),
            (this.confirmed = t.confirmed),
            (this.decimal = t.decimal),
            t.config && (this.config = t.config),
            (this.BN = o.a),
            (this.balance = ""),
            (this.transactions = []),
            (this.isSetBalance = !1),
            (this.notify = Boolean(t.notify)),
            this.manageEvents());
        }
        get id() {
          return C(this, s);
        }
        set id(t) {
          x(this, s, t);
        }
        get contract() {
          return C(this, n);
        }
        set contract(t) {
          x(this, n, t);
        }
        get address() {
          return C(this, r).address;
        }
        get network() {
          return C(this, r).id;
        }
        get networkType() {
          return C(this, r).networkType;
        }
        get feeWallet() {
          return C(this, r);
        }
        get feeTicker() {
          return C(this, r).id;
        }
        get deprecatedParent() {
          return C(this, r).id;
        }
        get txWebUrl() {
          return C(this, r).txWebUrl;
        }
        get coreLibrary() {
          return C(this, r).coreLibrary;
        }
        get isCustom() {
          return "custom" === this.source;
        }
        getWebTransactionUrl(t) {
          return C(this, r).getWebTransactionUrl(t);
        }
        getTxLimit() {
          return C(this, r).getTxLimit();
        }
        loadWallet(t) {
          return E(this, null, function* () {
            return this;
          });
        }
        validateAddress(t) {
          return E(this, null, function* () {
            return C(this, r).validateAddress(t);
          });
        }
        createTransaction(t) {
          return C(this, r).createTokenTransaction(
            T(b({}, t), { contract: this.contract }),
          );
        }
        createRawTransactions(t) {
          return C(this, r).createTransaction(t);
        }
        sendTransaction(t) {
          return C(this, r).sendTransaction(t);
        }
        getInfo() {
          return E(this, null, function* () {
            return (
              C(this, r).getTokenInfo &&
                (this.balance = yield C(this, r).getTokenInfo({
                  contract: this.contract,
                })),
              { balance: this.balance }
            );
          });
        }
        availableBalance() {
          return E(this, null, function* () {
            return this.divisibleBalance ? String(this.divisibleBalance) : "0";
          });
        }
        isAvailableForFee(t) {
          return E(this, null, function* () {
            var e;
            return null == (e = C(this, r).indivisibleBalance)
              ? void 0
              : e.gte(new this.BN(t));
          });
        }
        getFee(t) {
          return C(this, r).getFee(t);
        }
        getGasPrice(t, e) {
          return C(this, r).getGasPrice(t, e);
        }
        estimateGas(t, e, i, s) {
          return C(this, r).estimateGas(t, e, i, s);
        }
        getTokenTransactions() {
          return E(this, null, function* () {
            try {
              const t = yield C(this, r).getTokenTransactions({
                contract: this.contract,
              });
              if (t.length > 0) {
                const e = t.filter((t) => t.walletId === C(this, s));
                yield d.a.filterAndUpdateTransactions(e);
                const { topic: i, payload: r } = Object(
                  h["HISTORY_WALLET_UPDATED"],
                )(this.id, e);
                (this.eventEmitter.emit(i, r), (this.transactions = e));
              }
              return t;
            } catch (t) {
              return this.transactions;
            }
          });
        }
        getTransactions(t, e) {
          return E(this, null, function* () {
            try {
              const i = yield C(this, r).getTransactions({
                contract: this.contract,
                offset: t,
                limit: e,
              });
              if (i.length > 0) {
                const t = i.filter((t) => t.walletId === C(this, s));
                yield d.a.filterAndUpdateTransactions(t);
                const { topic: e, payload: r } = Object(
                  h["HISTORY_WALLET_UPDATED"],
                )(this.id, t);
                (this.eventEmitter.emit(e, r), (this.transactions = t));
              }
              return i;
            } catch (i) {
              return this.transactions;
            }
          });
        }
        checkTransaction(t) {
          return C(this, r).checkTransaction(t);
        }
        getTransaction(t) {
          return E(this, null, function* () {
            return C(this, r).getTransaction(t);
          });
        }
        updateTokenParamsFromServer(t) {
          (null == t ? void 0 : t.feeData) &&
            Object.entries(t.feeData).forEach(([t, e]) => {
              "undefined" !== typeof this[t] &&
                "undefined" !== typeof e &&
                "__proto__" !== t &&
                (this[t] = e);
            });
        }
        isTagShown() {
          return P.has(C(this, r).id);
        }
        manageEvents() {
          this.eventEmitter.on(
            `${C(this, r).id}-${this.id}::new-socket-tx`,
            ({ unconfirmedTx: t }) => {
              this.eventEmitter.emit(C(this, r).id + "::new-token-tx", {
                token: this,
                unconfirmedTx: t,
              });
            },
          );
        }
        get isActivated() {
          return C(this, r).isActivated;
        }
        activate() {
          return E(this, null, function* () {
            return C(this, r).activate();
          });
        }
        deactivate() {
          return C(this, r).deactivate();
        }
        removeTokenFromDb(t) {
          return C(this, r).removeTokenFromDb(t);
        }
      }
      ((r = new WeakMap()), (s = new WeakMap()), (n = new WeakMap()));
      var A = Token_Token,
        O = ((t) => (
          (t["List"] = "list"),
          (t["User"] = "user"),
          (t["Custom"] = "custom"),
          t
        ))(O || {});
      e["default"] = A;
    },
    228: function (t, e, i) {
      "use strict";
      var r = i(792);
      i(460);
      e["default"] = r["a"];
    },
    230: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i(791),
        s = i(461);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      e["default"] = r["a"];
    },
    248: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(1147)),
        n = r(i(14)),
        a = r(i(28)),
        o = l(i(8)),
        c = i(4);
      function l(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (l = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const u = "USD",
        d = "BTC",
        h = 24,
        f = 7,
        m = 31,
        p = 365,
        g = 30,
        y = "lYK43WJ95Y3195O",
        w = { BNB: "BSC", USDC: "TRX-USDC", USDT: "TRX-USDT" },
        v = {
          chartDataSettings: {
            type: "atomicServiceGetReverse",
            baseUrl: "https://raki.atomicwallet.io/",
          },
          mainChartEndPoint: "lastWeek",
          requestTimeouts: {
            atomicServicePostReverse: {
              lastYear: 18e4,
              lastHour: 18e4,
              last24Hour: 18e4,
              lastWeek: 6e5,
              lastMonth: 18e5,
              allTime: 18e5,
            },
            atomicServiceGetReverse: {
              lastYear: 18e4,
              lastHour: 18e4,
              last24Hour: 18e4,
              lastWeek: 6e5,
              lastMonth: 18e5,
              allTime: 18e5,
            },
            atomicServicePost: {
              lastYear: 18e4,
              lastHour: 18e4,
              last24Hour: 18e4,
              lastWeek: 6e5,
              lastMonth: 18e5,
              allTime: 18e5,
            },
            atomicServiceGet: {
              lastYear: 18e4,
              lastHour: 18e4,
              last24Hour: 18e4,
              lastWeek: 6e5,
              lastMonth: 18e5,
              allTime: 18e5,
            },
            cryptocompare: { last24Hour: 18e4, allTime: 6e4 },
          },
        },
        b = ["atomicServicePost", "atomicServicePostReverse"],
        T = ["atomicServiceGetReverse", "atomicServicePostReverse"];
      class ChartData {
        constructor() {
          ((this.data = {}),
            (this.dataToUpdate = {}),
            (this.lastRequestTimes = {
              lastYear: null,
              last24Hour: null,
              lastWeek: null,
              lastMonth: null,
              allTime: null,
            }),
            (this.isReverse = !0),
            (this.isMobile = !1),
            (this.isLoading = !1),
            (this.fiat = u),
            (this.chartRequestList = {}),
            (this.platformVersion = null),
            (this.chartDataSettings = v.chartDataSettings),
            (this.mainChartEndPoint = v.mainChartEndPoint),
            (this.requestTimeouts =
              v.requestTimeouts[this.chartDataSettings.type]),
            (this.isReverse = T.includes(this.chartDataSettings.type)));
        }
        async fetchSettings() {
          const t = await o.default
            .get(o.ConfigKey.ChartSettings)
            .catch(
              (t) => (a.default.error({ instance: this, error: t }), null),
            );
          t &&
            ((this.chartDataSettings =
              t.chartDataSettings || v.chartDataSettings),
            (this.mainChartEndPoint =
              t.mainChartEndPoint || v.mainChartEndPoint),
            (this.isReverse = T.includes(this.chartDataSettings.type)),
            (this.requestTimeouts =
              (t.requestTimeouts &&
                t.requestTimeouts[this.chartDataSettings.type]) ||
              v.requestTimeouts[this.chartDataSettings.type]));
        }
        setFiat(t) {
          this.fiat = t;
        }
        async getChartDataFromDb(t) {
          let { fiat: e = this.fiat, endPoint: i } = void 0 === t ? {} : t;
          const r = await c.db.chartData.where({ fiat: e, endPoint: i });
          return r;
        }
        async getChartDataTickerFromDb(t) {
          const e = await c.db.chartData.where({ fiat: this.fiat, ticker: t });
          return e;
        }
        async setChartData(t, e, i, r) {
          if (
            (t[r] ||
              (Object.defineProperty(t, Object.keys(r)[0], {}), (t[r] = {})),
            t[r][this.fiat])
          ) {
            const s = Object.assign({}, t[r][this.fiat]);
            ((s[i] = e), (t[r][this.fiat] = s));
          } else ((t[r][this.fiat] = {}), (t[r][this.fiat][i] = e));
          if (Object.keys(w).includes(r)) {
            const n = w[r];
            t[n] = (0, s.default)(t[n] || {}, { [this.fiat]: { [i]: e } });
          }
        }
        async initChartData(t) {
          const e = t
            ? await this.getChartDataTickerFromDb(t)
            : await this.getChartDataFromDb({ endPoint: "lastWeek" });
          e.each((t) => {
            let { data: e = [], endPoint: i, ticker: r } = t;
            this.setChartData(this.data, e, i, r);
          });
        }
        updateChartData(t) {
          const e = Object.keys(t).filter((e) => t[e][this.fiat]),
            i = e
              .map(
                (e) =>
                  t[e][this.fiat] &&
                  Object.keys(t[e][this.fiat]).map((i) => ({
                    id: e + this.fiat + i,
                    data: t[e][this.fiat][i],
                    fiat: this.fiat,
                    ticker: e,
                    endPoint: i,
                  })),
              )
              .flat();
          this._insertBatch(i);
        }
        async getCryptoCompareData(t) {
          const e = await (0, n.default)({ method: "get", url: t }).catch((t) =>
            a.default.error({ instance: this, error: t }),
          );
          return e.data && e.data.Data.Data && "Error" !== e.data.Response
            ? e.data.Data.Data
            : "";
        }
        async getCryptoCompareHistoryData(t) {
          let {
            ticker: e,
            isRequestTimeSave: i,
            isGetAtOnce: r,
            isMainChart: s,
            endPoint: n,
          } = t;
          const a = `?tsym=${this.fiat}&fsym=${e}`,
            o = {
              last24Hour: "",
              lastYear: "",
              lastMonth: "",
              lastWeek: "",
              allTime: "",
            };
          let c = !1,
            l = !1;
          const u = Date.now();
          if (s) {
            const t = ["allTime", "lastWeek", "lastMonth", "lastYear"];
            ((c = t.includes(this.mainChartEndPoint) || t.includes(n)),
              (l =
                "last24Hour" === this.mainChartEndPoint ||
                this.mainChartEndPoint === n));
          }
          return (
            (c ||
              r ||
              u - this.requestTimeouts.allTime >
                this.lastRequestTimes.allTime) &&
              (i && (this.lastRequestTimes.allTime = u),
              (o.allTime = await this.getCryptoCompareData(
                `${this.chartDataSettings.baseUrl}v2/histoday${a}&limit=740`,
              )),
              o.allTime &&
                ((o.lastWeek = o.allTime.slice(-f)),
                (o.lastMonth = o.allTime.slice(-m)),
                (o.lastYear = o.allTime.slice(-p)))),
            (l ||
              r ||
              u - this.requestTimeouts.last24Hour >
                this.lastRequestTimes.last24Hour) &&
              (i && (this.lastRequestTimes.last24Hour = u),
              (o.last24Hour = await this.getCryptoCompareData(
                `${this.chartDataSettings.baseUrl}v2/histominute${a}&limit=1440`,
              ))),
            o
          );
        }
        async processCryptoCompareData(t) {
          let { tickers: e, isGetAtOnce: i, isMainChart: r, endPoints: s } = t;
          const n = e.length;
          for (let a = 0; a < n; a++) {
            const t = n === a + 1,
              o = e[a];
            for (const e of s) {
              const s = {
                  ticker: o,
                  isRequestTimeSave: t,
                  isGetAtOnce: i,
                  isMainChart: r,
                  endPoint: e,
                },
                n = await this.getCryptoCompareHistoryData(s);
              for (const t in n) this.setChartData(this.data, n[t], t, o);
            }
          }
          this.updateChartData(this.data);
        }
        async getAtomicServiceHistoryData(t, e, i) {
          const r = this.isMobile && "lastWeek" === e ? "lastWeekHourly" : e,
            s = b.includes(this.chartDataSettings.type) ? "post" : "get",
            a = this.chartDataSettings.baseUrl + r,
            o =
              "get" === s ? `${a}?tickers=${t.join(",")}&fiat=${this.fiat}` : a,
            c = { url: o, method: s, headers: { Authorization: y } };
          "post" === s && (c.data = { tickers: t.join(","), fiat: this.fiat });
          const l = await (0, n.default)(c).catch((t) => {
            console.warn("Fetch chart data error", t);
          });
          l &&
            l.data &&
            (i && (this.dataToUpdate = {}),
            t.forEach((t) => {
              if (!l.data[t]) return;
              const r = this.isReverse ? l.data[t].reverse() : l.data[t];
              if (
                (i && this.setChartData(this.dataToUpdate, r, e, t),
                this.setChartData(this.data, r, e, t),
                "allTime" === e)
              ) {
                const e = r.slice(-p),
                  s = r.slice(-m);
                (i &&
                  (this.setChartData(this.dataToUpdate, e, "lastYear", t),
                  this.isMobile &&
                    this.setChartData(this.dataToUpdate, s, "lastMonth", t)),
                  this.setChartData(this.data, e, "lastYear", t),
                  this.isMobile &&
                    this.setChartData(this.data, s, "lastMonth", t));
              }
              if (this.isMobile && "lastWeek" === e) {
                const e = r.slice(-f * h),
                  s = r.slice(-h);
                (i &&
                  (this.setChartData(this.dataToUpdate, e, "lastWeek", t),
                  this.setChartData(this.dataToUpdate, s, "last24Hour", t)),
                  this.setChartData(this.data, e, "lastWeek", t),
                  this.setChartData(this.data, s, "last24Hour", t));
              }
            }));
        }
        async processAtomicServiceData(t) {
          let { tickers: e, isGetAtOnce: i, isMainChart: r, endPoints: s } = t,
            n = ["last24Hour", "lastWeek", "lastMonth", "allTime"];
          const a = r || s.length || 1 === e.length,
            o =
              "lastYear" === this.mainChartEndPoint
                ? "allTime"
                : this.mainChartEndPoint;
          r
            ? (n = [o])
            : s.length > 0
              ? (n = s)
              : ((n = n.filter((t) => t !== o)), n.unshift(o));
          const l = n.length,
            u = Date.now(),
            d = (0, c.chunkArray)(e, g),
            h = d.length,
            f = [];
          for (let c = 0; c < l; c++) {
            const t = n[c],
              e = u - this.requestTimeouts[t];
            if (i || e > this.lastRequestTimes[t])
              for (let i = 0; i < h; i++)
                (h === i + 1 && (this.lastRequestTimes[t] = u),
                  f.push(this.getAtomicServiceHistoryData(d[i], t, a)));
          }
          (await Promise.allSettled(f), this.updateChartData(this.data));
        }
        async getHistoryDataFromNetByEndpoint(t, e, i) {
          (void 0 === i && (i = u),
            await this.getHistoryDataFromNet([t], i, !0, !1, [e]));
        }
        async getHistoryDataFromNet(t, e, i, r, s) {
          if (
            (void 0 === e && (e = u),
            void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            void 0 === s && (s = []),
            !t || 0 === t.length)
          )
            return;
          (this.fiat === e ||
            (this.fiat === u && e === d) ||
            ((this.fiat = e === d ? u : e), (this.isLoading = !0)),
            1 === t.length
              ? await this.initChartData(t[0])
              : await this.initChartData(),
            this.getCoinChartData(d) && (this.isLoading = !1));
          const n = {
            tickers: t,
            isGetAtOnce: i,
            isMainChart: r,
            endPoints: s,
          };
          ("cryptocompare" === this.chartDataSettings.type
            ? await this.processCryptoCompareData(n)
            : await this.processAtomicServiceData(n),
            (this.isLoading = !1));
        }
        getMainChartData(t) {
          try {
            return this.data[t][this.fiat][this.mainChartEndPoint];
          } catch (e) {
            return [];
          }
        }
        getCoinChartData(t) {
          try {
            return this.data[t][this.fiat];
          } catch (e) {
            return [];
          }
        }
        isEmptyChart(t) {
          var e, i;
          const { CoinMarketCap: r, CryptoCompare: s } = this.chartRequestList;
          return (
            !(!r && !s) &&
            !(
              (null !== r &&
                void 0 !== r &&
                null !== (e = r.assets) &&
                void 0 !== e &&
                e.includes(t)) ||
              (null !== s &&
                void 0 !== s &&
                null !== (i = s.assets) &&
                void 0 !== i &&
                i.includes(t))
            )
          );
        }
        async getChartsRequestFrequency() {
          try {
            const t = await o.default.get("charts_request_frequency");
            this.chartRequestList =
              null === t || void 0 === t ? void 0 : t.sources;
          } catch (t) {
            console.warn(t);
          }
        }
        isPriceChart(t) {
          try {
            const e = this.getMainChartData(t, this.fiat);
            return e.length > 0;
          } catch (e) {
            return !1;
          }
        }
        async _insertBatch(t) {
          await c.db.chartData.bulkPut(t);
        }
        async getChartDataForEndpoint(t, e, i, r) {
          (void 0 === i && (i = !1), void 0 === r && (r = !1));
          let s = null;
          if ("cryptocompare" === this.chartDataSettings.type) {
            const n = {
                ticker: t,
                isRequestTimeSave: !1,
                isMainChart: r,
                isGetAtOnce: i,
                endPoint: e,
              },
              a = await this.getCryptoCompareHistoryData(n);
            s = { cryptoCompareData: a };
          } else {
            var a;
            const i = b.includes(this.chartDataSettings.type) ? "post" : "get",
              r = this.chartDataSettings.baseUrl + e,
              o = "get" === i ? `${r}?tickers=${t}&fiat=${this.fiat}` : r,
              c = { url: o, method: i, headers: { Authorization: y } };
            "post" === i && (c.data = { tickers: t, fiat: this.fiat });
            const l = await (0, n.default)(c).catch((t) => {
                console.warn("Fetch chart data error", t);
              }),
              u = this.isReverse
                ? null === l ||
                  void 0 === l ||
                  null === (a = l.data[t]) ||
                  void 0 === a
                  ? void 0
                  : a.reverse()
                : null === l || void 0 === l
                  ? void 0
                  : l.data[t];
            if (u) {
              if ("allTime" === e) {
                const t = u.slice(-p),
                  e = u.slice(-m);
                s = { allTime: u, lastYear: t, lastMonth: e };
              }
              if ("lastWeek" === e) {
                const t = u.slice(-f * h),
                  e = u.slice(-h);
                s = { lastWeek: t, last24Hour: e };
              }
            }
          }
          return (this.updateChartData({ [t]: { [this.fiat]: s } }), s);
        }
      }
      const k = new ChartData();
      e.default = k;
    },
    256: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(14)),
        n = r(i(435)),
        a = d(i(8)),
        o = r(i(28)),
        c = i(438),
        l = i(4),
        u = r(i(1207));
      function d(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (d = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      function h(t, e) {
        (f(t, e), e.add(t));
      }
      function f(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function m(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const p = 5,
        g = 10;
      var y = new WeakSet();
      class Buy {
        constructor() {
          (h(this, y),
            (this.rates = new c.CryptoCompare()),
            (this.settings = n.default["simplex-settings_v3"]),
            (this.settings.simplexTickers = n.default["simplex-aliases"]));
        }
        async fetchSettings() {
          var t;
          const [e, i] = await Promise.all(
            [
              a.default.get(a.ConfigKey.SimplexSettings),
              a.default.get(a.ConfigKey.SimplexAliases),
            ].map((t) => t.catch((t) => (o.default.error(t), null))),
          );
          (e && "object" === typeof e && this.isValidSettings(e)
            ? (o.default.info(
                "Buy settings validated and applied successfully",
              ),
              (this.settings = e))
            : o.default.warn(
                "Buy settings validation failed or settings are null/undefined",
              ),
            i && "object" === typeof i && this.isValidAliases(i)
              ? (o.default.info(
                  "Buy aliases validated and applied successfully",
                ),
                (this.settings.simplexTickers = i))
              : o.default.warn(
                  "Buy aliases validation failed or aliases are null/undefined",
                ));
          let r = await this.getAvailableFiats(this.settings.simplexApiUrl)
            .then((t) => {
              let { data: e } = t;
              return (null === e || void 0 === e ? void 0 : e.result) || null;
            })
            .catch((t) => o.default.error(t));
          if (r && "object" === typeof r) {
            const t = {};
            for (const [e, i] of Object.entries(r))
              this.isValidFiatData(i)
                ? (t[e] = {
                    ticker_symbol: (0, l.sanitizeString)(i.ticker_symbol),
                    min_amount: this.parseNumericString(i.min_amount),
                    max_amount: this.parseNumericString(i.max_amount),
                  })
                : o.default.warn(
                    `Invalid fiat data from Simplex API for ${e}:`,
                    i,
                  );
            r = Object.keys(t).length > 0 ? t : null;
          } else
            (o.default.warn("No fiat data available for Simplex API"),
              (r = null));
          const { excludedFiat: s = [] } = this.settings,
            n = Object.values(null !== (t = r) && void 0 !== t ? t : {});
          ((this.settings.fiats = u.default.reduce((t, e) => {
            const i = n.find((t) => {
              let { ticker_symbol: i } = t;
              return i === e.code;
            });
            return (
              !s.includes(e.code) &&
                i &&
                (t[e.code] = {
                  min: i.min_amount,
                  max: i.max_amount,
                  ...e,
                  fee: m(y, this, w).call(this, i.min_amount),
                }),
              t
            );
          }, {})),
            o.default.info("Simplex API successfully fetched"));
        }
        getAvailableFiats(t) {
          const e = {
            method: "get",
            baseURL: t,
            url: "/supportedFiatCurrencies",
          };
          return (0, s.default)(e);
        }
        async getSettings(t) {
          const e = this.settings.fiats[t];
          if (["USD", "EUR", "KHR", "BND"].includes(t)) return e;
          try {
            const i = await this.getUsdPrice(t),
              r = 60,
              s = 19990,
              n = 10;
            return {
              min: Math.max(Math.round(i * r), e.min),
              max: Math.min(Math.round(i * s), e.max),
              fee: Math.ceil(i * n),
              default: e.default,
            };
          } catch (i) {
            return e;
          }
        }
        getSimplexTicker(t) {
          let { contract: e, deprecatedParent: i, ticker: r } = t;
          const s = Object.entries(this.settings.simplexTickers).find((t) => {
            let [, { contract: s, network: n, ticker: a }] = t;
            const o =
                !s &&
                !e &&
                (null === a || void 0 === a ? void 0 : a.toLowerCase()) ===
                  r.toLowerCase(),
              c = s && e && s.toLowerCase() === e.toLowerCase();
            return (
              i.toLowerCase() ===
                (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
              (o || c)
            );
          });
          return s ? s[0] : r;
        }
        getAvailableWallet(t) {
          let { id: e } = t;
          return this.settings.availableWallets.find((t) => {
            let { id: i } = t;
            return i.toUpperCase() === e.toUpperCase();
          });
        }
        isAvailable(t) {
          return void 0 !== this.getAvailableWallet(t);
        }
        isValidSettings(t) {
          if (null == t)
            return (
              o.default.warn(
                "Buy settings validation failed: settings is null",
              ),
              !1
            );
          if ("object" !== typeof t)
            return (
              o.default.warn(
                "Buy settings validation failed: settings is not an object",
              ),
              !1
            );
          const e = [
              "simplexApiUrl",
              "excludedFiat",
              "availableWallets",
              "fiats",
              "exchangesTags",
              "simplexTags",
            ],
            i = Object.keys(t);
          if (!i.every((t) => e.includes(t)))
            return (
              o.default.warn(
                "Buy settings validation failed: contains disallowed properties",
              ),
              !1
            );
          if (
            !Object.prototype.hasOwnProperty.call(t, "simplexApiUrl") ||
            "string" !== typeof t.simplexApiUrl
          )
            return (
              o.default.warn(
                "Buy settings validation failed: invalid or missing simplexApiUrl",
              ),
              !1
            );
          const r = /^https:\/\/([a-zA-Z0-9-]+\.)*atomicwallet\.io(\/.*)?$/;
          return r.test(t.simplexApiUrl)
            ? void 0 === t.excludedFiat || Array.isArray(t.excludedFiat)
              ? void 0 === t.availableWallets ||
                Array.isArray(t.availableWallets)
                ? void 0 === t.fiats || this.isValidFiatsObject(t.fiats)
                  ? void 0 !== t.exchangesTags &&
                    "object" !== typeof t.exchangesTags
                    ? (o.default.warn(
                        "Buy settings validation failed: exchangesTags is not an object",
                      ),
                      !1)
                    : void 0 === t.simplexTags ||
                      "object" === typeof t.simplexTags ||
                      (o.default.warn(
                        "Buy settings validation failed: simplexTags is not an object",
                      ),
                      !1)
                  : (o.default.warn(
                      "Buy settings validation failed: invalid fiats object",
                    ),
                    !1)
                : (o.default.warn(
                    "Buy settings validation failed: availableWallets is not an array",
                  ),
                  !1)
              : (o.default.warn(
                  "Buy settings validation failed: excludedFiat is not an array",
                ),
                !1)
            : (o.default.warn(
                "Buy settings validation failed: simplexApiUrl not on allowed domain",
              ),
              !1);
        }
        isValidFiatsObject(t) {
          if (null == t) return !1;
          if ("object" !== typeof t || Array.isArray(t)) return !1;
          for (const [e, i] of Object.entries(t)) {
            if ("string" !== typeof e || /^\d+$/.test(e))
              return (
                o.default.warn(
                  `Buy fiats validation failed: key '${e}' is not a valid string`,
                ),
                !1
              );
            if ("object" !== typeof i)
              return (
                o.default.warn(
                  `Buy fiats validation failed: value for '${e}' is not an object`,
                ),
                !1
              );
            const t = ["min", "max", "default", "fee"],
              r = Object.keys(i);
            if (!r.every((e) => t.includes(e)))
              return (
                o.default.warn(
                  `Buy fiats validation failed: invalid properties for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.min && "number" !== typeof i.min)
              return (
                o.default.warn(
                  `Buy fiats validation failed: min is not a number for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.max && "number" !== typeof i.max)
              return (
                o.default.warn(
                  `Buy fiats validation failed: max is not a number for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.default && "number" !== typeof i.default)
              return (
                o.default.warn(
                  `Buy fiats validation failed: default is not a number for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.fee && "number" !== typeof i.fee)
              return (
                o.default.warn(
                  `Buy fiats validation failed: fee is not a number for '${e}'`,
                ),
                !1
              );
          }
          return !0;
        }
        isValidFiatData(t) {
          if (null == t) return !1;
          if ("object" !== typeof t) return !1;
          if (!t.ticker_symbol || "string" !== typeof t.ticker_symbol)
            return !1;
          const e = this.parseNumericString(t.min_amount),
            i = this.parseNumericString(t.max_amount);
          return !(e <= 0 || i <= e);
        }
        parseNumericString(t) {
          if ("number" === typeof t && !isNaN(t) && isFinite(t)) return t;
          if ("string" === typeof t) {
            const e = parseFloat(t);
            return isNaN(e) || !isFinite(e) ? 0 : e;
          }
          return 0;
        }
        isValidAliases(t) {
          if (null == t) return !1;
          if ("object" !== typeof t || Array.isArray(t)) return !1;
          for (const [e, i] of Object.entries(t)) {
            if ("string" !== typeof e || e !== e.trim())
              return (
                o.default.warn(
                  `Buy aliases validation failed: key '${e}' is not a valid string`,
                ),
                !1
              );
            if (/^\d+$/.test(e))
              return (
                o.default.warn(
                  `Buy aliases validation failed: key '${e}' appears to be numeric`,
                ),
                !1
              );
            if ("object" !== typeof i)
              return (
                o.default.warn(
                  `Buy aliases validation failed: value for '${e}' is not an object`,
                ),
                !1
              );
            const t = ["contract", "network", "ticker"],
              r = Object.keys(i);
            if (!r.every((e) => t.includes(e)))
              return (
                o.default.warn(
                  `Buy aliases validation failed: invalid properties for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.contract && "string" !== typeof i.contract)
              return (
                o.default.warn(
                  `Buy aliases validation failed: contract is not a string for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.network && "string" !== typeof i.network)
              return (
                o.default.warn(
                  `Buy aliases validation failed: network is not a string for '${e}'`,
                ),
                !1
              );
            if (void 0 !== i.ticker && "string" !== typeof i.ticker)
              return (
                o.default.warn(
                  `Buy aliases validation failed: ticker is not a string for '${e}'`,
                ),
                !1
              );
          }
          return !0;
        }
        async getUsdPrice(t) {
          const e = "USD",
            i = await this.rates.get([{ id: e, ticker: e }], t),
            { rate: r } =
              i.find((t) => {
                let { ticker: i } = t;
                return i === e;
              }) || {};
          if (!r) throw new Error("No rate for " + t);
          return r;
        }
      }
      function w(t) {
        const e = ((Number(t) / 100) * p).toFixed(0);
        return Number(e) > g ? Number(e) : g;
      }
      e.default = new Buy();
    },
    257: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(1208)),
        n = c(i(8)),
        a = r(i(28)),
        o = r(i(37));
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const l = (t) => {
          const e = ["<", "<=", ">=", ">"];
          for (const i of e) if (0 === t.indexOf(i)) return i;
          return "=";
        },
        u = (t, e) => {
          const i = l(t);
          return s.default.compare(e, t.replace(i, ""), i);
        };
      class CoinRestrictionPolicy {
        constructor() {
          this.restrictions = {};
        }
        fetchSettings() {
          return n.default
            .get(n.ConfigKey.DisabledCoins)
            .then((t) => {
              this.restrictions = t;
            })
            .catch((t) => {
              a.default.error({ instance: this, error: t });
            });
        }
        getMessage(t, e) {
          var i;
          return null === (i = this.getRestrictions(t, e)[0]) || void 0 === i
            ? void 0
            : i.message;
        }
        getRestrictions(t, e) {
          return (this.restrictions[t] || [])
            .filter((t) => {
              let { actions: i } = t;
              return i.includes("all") || i.includes(e);
            })
            .filter((t) => {
              let { platforms: e } = t;
              return e.includes("all") || e.includes(o.default.getPlatform());
            })
            .filter((t) => {
              let { versions: e } = t;
              const i = e[o.default.getPlatform()] || ["all"];
              return (
                i.includes("all") ||
                i.reduce((t, e) => t || u(e, o.default.getVersion()), !1)
              );
            });
        }
        isAllowed(t, e) {
          return 0 === this.getRestrictions(t, e).length;
        }
      }
      e.default = new CoinRestrictionPolicy();
    },
    258: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(4),
        s = i(160);
      const n = 1e3,
        a = 60,
        o = 5 * a * n,
        c = (t) => {
          let { coinId: e, contractAddress: i, tokenId: r } = t;
          return `${e},${l(i)},${r}`;
        },
        l = (t) => (null === t ? "" : t),
        u = (t) => ("" === t ? null : t);
      class NftHistory {
        async get(t) {
          void 0 === t && (t = []);
          const e = t.map((t) => t.id);
          await this.maintenance();
          const i =
              e.length > 0
                ? r.db.sentNfts.where("coinId").anyOf(e)
                : r.db.sentNfts.toCollection(),
            n = await i.toArray(),
            a = new Set(n.map((t) => c(t))),
            o =
              e.length > 0
                ? r.db.nfts.where("coinId").anyOf(e)
                : r.db.nfts.toCollection(),
            l = await o.and((t) => !1 === a.has(c(t))).toArray();
          return l.map((t) => {
            let {
              coinId: e,
              contractAddress: i,
              tokenId: r,
              blockchain: n,
              tokenStandard: a,
              name: o,
              description: c,
              imageUrl: l,
            } = t;
            return new s.NftToken(u(i), r, e, n, a, o, c, l);
          });
        }
        getOneOptimistic(t, e, i) {
          const { id: s } = t;
          return r.db.nfts
            .where("[coinId+contractAddress+tokenId]")
            .equals([s, l(e), i])
            .first();
        }
        async set(t, e) {
          const { id: i } = t;
          return (
            await r.db.nfts.where({ coinId: i }).delete(),
            r.db.nfts.bulkAdd(
              e.map((t) => ((t.contractAddress = l(t.contractAddress)), t)),
            )
          );
        }
        delete(t, e, i) {
          const { id: s } = t;
          return r.db.sentNfts.add({
            coinId: s,
            contractAddress: l(e),
            tokenId: i,
            expiredAt: Date.now() + o,
          });
        }
        async maintenance() {
          const t = r.db.sentNfts.where("expiredAt").below(Date.now()),
            e = await t.toArray();
          return (
            e.forEach(async (t) => {
              let { coinId: e, tokenId: i, contractAddress: s } = t;
              await r.db.nfts
                .where({ coinId: e, tokenId: i, contractAddress: s })
                .delete();
            }),
            r.db.sentNfts.where("expiredAt").below(Date.now()).delete()
          );
        }
        reset() {
          return Promise.all([r.db.nfts.clear(), r.db.sentNfts.clear()]);
        }
      }
      const d = new NftHistory();
      e.default = d;
    },
    26: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(52));
      const n = new s.default();
      n.setMaxListeners(0);
      e.default = n;
    },
    2653: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i(21),
        s = i(73),
        n = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      const a = 1e9,
        o = "21000",
        c = [],
        l = new Set([
          "ETH",
          "BSC",
          "AVAX",
          "MATIC",
          "FLR",
          "FTM",
          "S",
          "FIL",
          "OP",
          "ETHOP",
        ]),
        u = new Set(["LTC", "BTC"]),
        d = [
          "ETH",
          "LUNA",
          "LUNС",
          "BSC",
          "AVAX",
          "MATIC",
          "FLR",
          "FTM",
          "S",
          "FIL",
          "OP",
          "ETHOP",
        ],
        h = new Set([...l, ...u]),
        f = new Set(["BSC", "ETH", "LUNC", "LUNA", "THETA", "FLR"]);
      class FeePlugin_FeePlugin {
        constructor(t) {
          ((this.initialized = !1),
            (this.wallet = t),
            (this.customGas = c),
            (this.utxo = []),
            (this.minGasLimit = o),
            (this.defaultSatPerByte = this.getDefaultSatPerByte()));
        }
        get isCoinWithGas() {
          return d.includes(this.wallet.feeWallet.ticker);
        }
        init(t) {
          return n(this, null, function* () {
            var e, i;
            if (this.initialized && !t) return this;
            const s = this.wallet instanceof r["default"],
              n = new Set(d);
            if (
              this.isCustomFeeSupported() &&
              n.has(this.wallet.feeWallet.ticker)
            ) {
              const t = yield this.wallet.getGasPrice(!1, !0),
                r =
                  ("ETH" === this.wallet.feeWallet.ticker &&
                    ((null ==
                    (i = null == (e = this.wallet) ? void 0 : e.gasPriceConfig)
                      ? void 0
                      : i.fast) *
                      a) /
                      10) ||
                  t,
                n = yield this.wallet.getGasPrice(!0, s);
              ((this.nodeGasPrice = (Number(n) / a)
                .toString()
                .replace(/\.\d+[1-9]/, "")),
                (this.defaultGasPrice = (Number(r) / a)
                  .toString()
                  .replace(/\.\d+[1-9]/, "")),
                (s || ["LUNC", "LUNA"].includes(this.wallet.ticker)) &&
                this.wallet.contract
                  ? ((this.minGasLimit = String(
                      ["LUNC", "LUNA"].includes(this.wallet.feeWallet.ticker)
                        ? yield this.wallet.estimateGas(
                            "1",
                            "",
                            this.wallet.contract,
                            this.wallet.denom,
                          )
                        : yield this.wallet.estimateGas(
                            "1",
                            "",
                            this.wallet.contract,
                          ),
                    )),
                    (this.defaultGasLimit = this.minGasLimit))
                  : (this.defaultGasLimit = String(this.wallet.gasLimit)));
            }
            return ((this.initialized = !0), this);
          });
        }
        setWallet(t) {
          return ((this.wallet = t), this);
        }
        getUtxo() {
          return n(this, null, function* () {
            try {
              const t = yield this.wallet.getUnspentOutputs();
              return t;
            } catch (t) {
              return [];
            }
          });
        }
        getDefaultSatPerByte() {
          try {
            const t = this.wallet.getFeePerByte();
            return t && String(t);
          } catch (t) {
            return "1";
          }
        }
        setCustomGas(t) {
          return ((this.customGas = t), this);
        }
        setCustomSatoshi(t) {
          return ((this.satPerByte = t), this);
        }
        reset() {
          return ((this.customGas = c), (this.satPerByte = void 0), this);
        }
        isCustomFeeSupported() {
          return h.has(this.wallet.feeWallet.ticker);
        }
        calculate(t = "0", e, i) {
          return n(this, null, function* () {
            var n, a;
            [this.wallet.ticker, this.wallet.feeWallet.ticker].some(
              (t) => !f.has(t),
            ) && (this.utxo = yield this.getUtxo());
            const o = this.wallet instanceof r["default"],
              c = null,
              l = this.wallet.toMinimalUnit(t.toString());
            let u = null;
            u =
              "ADA" === this.wallet.id
                ? { utxos: this.utxo, address: e, sendAmount: l }
                : "TRX" === this.wallet.feeWallet.id
                  ? { address: e, amount: l, contract: this.wallet.contract }
                  : "ZIL" !== this.wallet.feeWallet.ticker &&
                      "VTHO" !== this.wallet.ticker
                    ? {
                        feePerByte: this.satPerByte || this.defaultSatPerByte,
                        userGasPrice:
                          (null == (n = this.customGas) ? void 0 : n[0]) || c,
                        utxos: this.utxo,
                        gasLimit:
                          (null == (a = this.customGas) ? void 0 : a[1]) ||
                          this.defaultGasLimit,
                        address: e,
                        sendAmount: l,
                        isToken: o,
                        contract: this.wallet.contract,
                        denom: this.wallet.denom,
                        custom: i,
                      }
                    : null;
            const d = yield u
              ? this.wallet.feeWallet.getFee(u)
              : this.wallet.feeWallet.getFee();
            return new s["default"](d.toString(), this.wallet.feeWallet);
          });
        }
      }
      e["default"] = FeePlugin_FeePlugin;
    },
    28: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(14)),
        n = r(i(37));
      function a(t, e) {
        (c(t, e), e.add(t));
      }
      function o(t, e, i) {
        (c(t, e), e.set(t, i));
      }
      function c(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function l(t, e) {
        return t.get(d(t, e));
      }
      function u(t, e, i) {
        return (t.set(d(t, e), i), i);
      }
      function d(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const h = "SendLogs",
        f = 1e4,
        m = "https://ob.atomicwallet.io/reportBugs";
      var p = new WeakMap(),
        g = new WeakMap(),
        y = new WeakMap(),
        w = new WeakSet();
      class Logger {
        constructor() {
          (a(this, w), o(this, p, null), o(this, g, null), o(this, y, []));
        }
        setUserId(t) {
          u(g, this, t);
        }
        startCloudSync(t) {
          (void 0 === t && (t = m),
            clearInterval(l(p, this)),
            u(
              p,
              this,
              setInterval(() => d(w, this, T).call(this, t), f),
            ));
        }
        log(t) {
          (console.log("[Logger::log]", t),
            l(y, this).push(d(w, this, b).call(this, t, "info")));
        }
        info(t) {
          console.info("[Logger::info]", t);
        }
        warn(t) {
          console.warn("[Logger::warn]", t);
        }
        error(t) {
          (console.error("[Logger::error]", t),
            "KIN" !== t.currency &&
              this.isConnected() &&
              l(y, this).push(d(w, this, b).call(this, t, "error")));
        }
        isConnected() {
          return window.navigator.onLine;
        }
        isEmpty() {
          return 0 === l(y, this).length;
        }
      }
      function v() {
        u(y, this, []);
      }
      function b(t, e) {
        const i = "object" === typeof t.error ? t.error.toString() : t.error;
        return {
          date: new Date(),
          userId: l(g, this),
          currency: t.currency || t.instance.constructor.name,
          platform: n.default.getPlatform(),
          errorType: t.type || "",
          appVersion: n.default.getVersion(),
          coreVersion: n.default.getCoreVersion(),
          errorMessage: t.url ? `${t.url} :: ${i}` : i,
          errorStack: t.error.stack || "no stack trace",
        };
      }
      function T(t) {
        if (!this.isConnected())
          return void console.warn(
            "[Logger] Send logs cancelled while is offline",
          );
        if (this.isEmpty()) return;
        const e = { logs: l(y, this), enabled: !0, userId: l(g, this) };
        s.default
          .post(t, e, { headers: { "Content-Type": "application/json" } })
          .then(() => {
            d(w, this, v).call(this);
          })
          .catch((t) => {
            this.error({ type: h, error: t, instance: this });
          });
      }
      const k = new Logger();
      e.default = k;
    },
    332: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i(52),
        s = i(126),
        n = i(4),
        a = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      class MemesTradesActivityEmitter extends r["EventEmitter"] {
        constructor(t) {
          (super(),
            (this.isClosed = !1),
            (this.wsClient = null),
            (this.wsClientReconnectTimer = null),
            (this.wsClientReconnectDelay = 3e3),
            (this.websocketUrl =
              "wss://datastream.solanatracker.io/3564171c-660d-4e03-9c69-9a9b596a8acd"),
            (this.mint = t),
            (this.wsClient = this.connectToServer()),
            this.fetchTrades());
        }
        fetchTrades() {
          return a(this, null, function* () {
            try {
              const { data: t } = yield s["solTrackerClient"].get(
                "/trades/" + this.mint,
              );
              Array.isArray(null == t ? void 0 : t.trades) &&
                this.broadcastTxs(t.trades);
            } catch (t) {
              console.error(t);
            }
          });
        }
        close() {
          ((this.isClosed = !0),
            this.removeAllListeners(),
            this.wsClient && (this.wsClient.close(), (this.wsClient = null)),
            this.clearWsReconnectTimer(),
            console.warn(
              "✅->❌ MemeCoinEstimatedActivityEmitter has been closed and cleaned up.",
            ));
        }
        clearWsReconnectTimer() {
          this.wsClientReconnectTimer &&
            clearTimeout(this.wsClientReconnectTimer);
        }
        setWsReconnectTimer() {
          (this.clearWsReconnectTimer(),
            (this.wsClientReconnectTimer = setTimeout(
              this.connectToServer.bind(this),
              this.wsClientReconnectDelay,
            )));
        }
        handleWsDisconnection() {
          this.isClosed ||
            (console.warn(
              `🔄 Reconnecting in ${this.wsClientReconnectDelay / 1e3} seconds...`,
            ),
            this.setWsReconnectTimer(),
            (this.wsClientReconnectDelay = Math.min(
              2 * this.wsClientReconnectDelay,
              3e4,
            )));
        }
        connectToServer() {
          const t = new WebSocket(this.websocketUrl);
          return (
            t.addEventListener("open", () => {
              (console.warn("✅ Connected to the server via WebSocket"),
                (this.wsClientReconnectDelay = 3e3),
                t.send(
                  JSON.stringify({
                    type: "join",
                    room: "transaction:" + this.mint,
                  }),
                ));
            }),
            t.addEventListener("error", (t) => {
              (console.error("❌ Connection error:", t),
                this.handleWsDisconnection());
            }),
            (t.onclose = () => {
              (console.warn("❌ Connection closed, reconnecting"),
                this.handleWsDisconnection());
            }),
            t.addEventListener("message", (t) => {
              try {
                const { data: e } = t;
                if (e) {
                  const t = Object(n["sanitizeObject"])(
                    JSON.parse(e.toString()),
                  );
                  Array.isArray(null == t ? void 0 : t.data) &&
                    this.broadcastTxs(t.data);
                }
              } catch (e) {
                console.error("Failed to parse data from server:", e);
              }
            }),
            t
          );
        }
        sanitizeTxs(t) {
          return t.map((t) => ({
            tx: Object(n["sanitizeString"])(t.tx),
            type: Object(n["sanitizeString"])(t.type),
            time: Object(n["sanitizeNumber"])(t.time),
            volume: Object(n["sanitizeNumber"])(t.volume),
          }));
        }
        broadcastTxs(t) {
          this.emit("dataCreate", this.sanitizeTxs(t));
        }
      }
      e["default"] = MemesTradesActivityEmitter;
    },
    338: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(1241)),
        n = r(i(8));
      const a = "about-tab";
      class AboutInfoList {
        async get(t) {
          let e;
          function i(t, e) {
            const { id: i, ticker: r, contract: s, deprecatedParent: n } = e,
              {
                id: a,
                ticker: o,
                contract: c,
                network: l,
              } = null === t || void 0 === t ? void 0 : t.where;
            return a && i
              ? a.toLowerCase() === i.toLowerCase()
              : (!l || !n || l.toLowerCase() === n.toLowerCase()) &&
                  (c || s
                    ? (null === c || void 0 === c
                        ? void 0
                        : c.toLowerCase()) ===
                      (null === s || void 0 === s ? void 0 : s.toLowerCase())
                    : (null === o || void 0 === o
                        ? void 0
                        : o.toLowerCase()) ===
                      (null === r || void 0 === r ? void 0 : r.toLowerCase()));
          }
          try {
            if (((e = await n.default.get(a)), e)) {
              const r = e.find((e) => i(e, t));
              return (
                (null === r || void 0 === r ? void 0 : r.items) || []
              ).reduce((t, e) => {
                try {
                  return t.concat(new s.default(e));
                } catch (i) {
                  return (console.warn(i), t);
                }
              }, []);
            }
          } catch (r) {
            console.warn(r);
          }
          return null;
        }
      }
      e.default = new AboutInfoList();
    },
    339: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(26));
      const n = ["reward", "unfreeze", "freeze", "vote"];
      class TxNotifier {
        constructor(t) {
          ((this.eventEmitter = s.default), (this.wallet = t));
        }
        notify(t, e, i, r, s) {
          ("receive" === t &&
            this.eventEmitter.emit(
              `${this.wallet.ticker}-${i}::new-socket-tx`,
              { unconfirmedTx: e },
            ),
            "confirm" === t &&
              this.eventEmitter.emit(
                this.wallet.ticker + "::confirmed-socket-tx",
                i,
                e,
                r,
                s,
              ),
            n.forEach((i) => {
              t === i &&
                this.eventEmitter.emit(
                  `${this.wallet.ticker}::confirmed-${t}`,
                  e || {},
                );
            }));
        }
      }
      e.default = TxNotifier;
    },
    37: function (t, e, i) {
      const { version: r } = i(412),
        s = Symbol("unknownOS"),
        n = "Desktop",
        a = "Extension",
        o = "Mobile",
        c = "ios",
        l = "Unknown",
        u = {
          [c]: "iOS",
          android: "Android",
          win32: "Windows",
          darwin: "macOS",
          linux: "Linux",
        },
        d = Object.freeze({
          android: ["android", o],
          browser: ["android", o],
          desktop: ["desktop", n],
          extension: ["extension", a],
          ios: ["ios", o],
        });
      class PlatformVersion {
        constructor(t) {
          (void 0 === t && (t = r), (this.coreVersion = t));
        }
        setPlatform(t) {
          var e;
          [this.platform, this.platformType] =
            null !== (e = d[t]) && void 0 !== e ? e : d.desktop;
        }
        getPlatform() {
          return this.platform;
        }
        getPlatformType() {
          var t;
          return null !== (t = this.platformType) && void 0 !== t ? t : l;
        }
        setVersion(t) {
          this.version = t;
        }
        getVersion() {
          return this.version;
        }
        setOS(t) {
          const e = t.toLowerCase();
          this.os = u[e] ? e : s;
        }
        getOS() {
          return this.os === s ? l.toLowerCase() : this.os;
        }
        getOSName() {
          var t;
          return null !== (t = u[this.os]) && void 0 !== t ? t : l;
        }
        isIOS() {
          return this.getOS() === c;
        }
        setCoreVersion(t) {
          this.coreVersion = t;
        }
        getCoreVersion() {
          return this.coreVersion;
        }
        getUserAgentHttpHeader() {
          return {
            "x-user-agent": `AtomicWallet (${this.getPlatformType()})/${this.getVersion()} (${this.getOSName()}, atomic-core ${this.getCoreVersion()})`,
          };
        }
        getAvailablePlatforms() {
          return Object.entries(d).reduce((t, e) => {
            let [i, [r]] = e;
            return ((t[i] = r), t);
          }, {});
        }
      }
      t.exports = {
        __esModule: !0,
        default: new PlatformVersion(),
        PlatformVersion: PlatformVersion,
        supportedOsTypes: u,
        UNKNOWN_VALUE: l,
        platforms: d,
      };
    },
    433: function (t, e, i) {
      "use strict";
      (function (t) {
        var r = i(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var s = i(27),
          n = r(i(434));
        class Environment {
          constructor() {
            this.settings = n.default;
          }
          get(t) {
            return this.getSection()[t] || this.getDefaultSection()[t];
          }
          getSection() {
            const e = "default";
            if (t.env.STAGING)
              return this.settings["true" === t.env.STAGING ? "stage" : e];
            const i =
              this.getEnvironmentFromStorage() || t.env.ATOMIC_CONFIG_MODE || e;
            return this.settings[i] || this.settings[e];
          }
          getDefaultSection() {
            return this.settings.default;
          }
          getEnvironmentFromStorage() {
            try {
              var t;
              return null !== (t = localStorage.getItem(s.LOCAL_ENV_CONFIG)) &&
                void 0 !== t
                ? t
                : null;
            } catch (e) {
              return (console.warn(e), null);
            }
          }
        }
        e.default = new Environment();
      }).call(this, i(18));
    },
    437: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        (e.startSettingsSync = p));
      var s = r(i(105)),
        n = u(i(8)),
        a = r(i(102)),
        o = r(i(1146)),
        c = r(i(26)),
        l = i(35);
      function u(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (u = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const d = "USD",
        h = 6e5;
      let f,
        m = o.default;
      async function p() {
        async function t() {
          clearTimeout(f);
          try {
            m = await n.default.get(n.ConfigKey.CashbackSettings);
          } catch (e) {
            console.error("Fetch cashback settings failed:", e);
          }
          f = setTimeout(t, h);
        }
        (await t(),
          c.default.on(l.CONFIGS.UPDATED, (t) => {
            let { id: e, config: i } = t;
            e === n.ConfigKey.CashbackSettings && (m = i);
          }));
      }
      class Cashback {
        get settings() {
          return m;
        }
        currentLevel(t) {
          if (!t && "0" !== String(t)) return this.settings[0];
          const e = this.settings[this.settings.length - 1];
          return t >= e.minAWC
            ? e
            : this.settings.find((e) => t >= e.minAWC && t < e.maxAWC);
        }
        async getCoinRate(t) {
          await a.default.getRates([t], d, !0);
          const e = Number(a.default.getCoinPrice(t, d));
          return e || 0;
        }
        async calculateCashback(t, e, i) {
          const r = a.default.getCoinPrice(e, d) || (await this.getCoinRate(e)),
            n =
              a.default.getCoinPrice(this.cashbackWallet, d) ||
              (await this.getCoinRate(this.cashbackWallet));
          if (r * n === 0) return "0";
          const o = this.currentLevel(i).percent,
            c = 2,
            l = 8;
          return new s.default(r)
            .multipliedBy(t)
            .multipliedBy(o)
            .dividedBy(n)
            .toFixed(l, c)
            .toString();
        }
        setCashbackWallet(t) {
          this.cashbackWallet = t;
        }
      }
      const g = new Cashback();
      e.default = g;
    },
    458: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        (e.startSettingsSync = p));
      var s = r(i(14)),
        n = r(i(28)),
        a = u(i(8)),
        o = r(i(26)),
        c = i(27),
        l = i(35);
      function u(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (u = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const d = "https://atomic-reviews.atomicwallet.io/conversation",
        h = 6e5;
      let f,
        m = c.REVIEW_SETTINGS_DEFAULT;
      async function p() {
        async function t() {
          clearTimeout(f);
          try {
            m = await a.default.get(a.ConfigKey.ReviewSettings);
          } catch (t) {
            console.error("Fetch reviews settings failed:", t);
          }
          f = setTimeout(p, h);
        }
        (await t(),
          o.default.on(l.CONFIGS.UPDATED, (t) => {
            let { id: e, config: i } = t;
            e === a.ConfigKey.ReviewSettings && (m = i);
          }));
      }
      class Reviews {
        get settings() {
          return m;
        }
        async sendReview(t) {
          let {
            atomicId: e,
            email: i,
            rating: r,
            operatingSystem: a,
            appVersion: o,
            platform: c,
            text: l,
            subject: u,
            topic: h,
            tags: f = ["reviews"],
          } = t;
          await s.default
            .post(d, {
              atomicId: e,
              email: i,
              rating: r,
              operatingSystem: a,
              appVersion: o,
              platform: c,
              text: l,
              subject: u,
              topic: h,
              tags: f,
            })
            .catch((t) => {
              n.default.error({ instance: this, error: t });
            });
        }
      }
      e.default = Reviews;
    },
    460: function (t, e) {},
    461: function (t, e) {},
    676: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          e.WALLETS_KEY =
          e.MNEMONIC_KEY =
          e.ALL_KEYS =
          e.ADDRESSES_KEY =
            void 0));
      var s = r(i(816));
      function n(t, e, i) {
        (a(t, e), e.set(t, i));
      }
      function a(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function o(t, e) {
        return t.get(l(t, e));
      }
      function c(t, e, i) {
        return (t.set(l(t, e), i), i);
      }
      function l(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const u = 5,
        d = (e.MNEMONIC_KEY = "general_mnemonic"),
        h = (e.WALLETS_KEY = "wallets"),
        f = ((e.ADDRESSES_KEY = "addresses"), (e.ALL_KEYS = [d, h]));
      var m = new WeakMap(),
        p = new WeakMap();
      class SecureStorage {
        constructor(t, e) {
          (n(this, m, void 0),
            n(this, p, void 0),
            c(m, this, e),
            c(p, this, t));
        }
        decode(t, e) {
          if (!e) throw new Error("No password");
          return s.default.AES.decrypt(t.toString(), e).toString(
            s.default.enc.Utf8,
          );
        }
        encode(t, e) {
          if (!e) throw new Error("No password");
          return s.default.AES.encrypt(t, String(e));
        }
        exists(t) {
          return new Promise((e) => {
            this.getItemWrap(
              t,
              (t) => {
                e("null" !== t);
              },
              () => e(!1),
            );
          });
        }
        get(t) {
          return new Promise((e, i) => {
            this.getItemWrap(
              t,
              (t) => {
                "null" === t && i(new Error("Wrong password!"));
                try {
                  t = this.decode(t, o(m, this));
                } catch (r) {
                  i(r);
                }
                e(t);
              },
              i,
            );
          });
        }
        getItemWrap(t, e, i) {
          o(p, this).getItem(t, e, (r) => {
            (("function" !== typeof o(p, this).getString ||
              (r && r.code !== u)) &&
              i(r),
              o(p, this).getString(t, e, i));
          });
        }
        set(t, e) {
          return new Promise((i, r) => {
            o(p, this).setItem(t, this.encode(e, o(m, this)).toString(), i, r);
          });
        }
        remove(t) {
          return new Promise((e, i) => {
            o(p, this).remove(t, e, i);
          });
        }
        checkPassword(t) {
          return new Promise((e, i) => {
            o(p, this).getItem(
              d,
              (r) => {
                "null" === r && i(new Error("No mnemonic"));
                try {
                  const s = this.decode(r, t);
                  (s || i(new Error("Wrong password!")), e(s));
                } catch (s) {
                  i(s);
                }
              },
              i,
            );
          });
        }
        getByPassword(t, e) {
          return new Promise((i, r) => {
            o(p, this).getItem(
              t,
              (t) => {
                "null" === t && r(new Error("Wrong password!"));
                try {
                  i(this.decode(t, e));
                } catch (s) {
                  r(s);
                }
              },
              r,
            );
          });
        }
        getAllByPassword(t, e) {
          return Promise.all(
            t.map(async (t) =>
              (await this.exists(t)) ? this.getByPassword(t, e) : null,
            ),
          );
        }
        changePassword(t, e) {
          return new Promise((i, r) => {
            ((t && e) || r(new Error("No password set!")),
              this.getAllByPassword(f, t)
                .then(
                  (t) => (
                    c(m, this, e),
                    Promise.all(
                      f.map((e, i) =>
                        null === t[i] ? Promise.resolve() : this.set(e, t[i]),
                      ),
                    )
                  ),
                )
                .then(() => {
                  i();
                })
                .catch(() => {
                  r(new Error("Wrong password"));
                }));
          });
        }
        clear() {
          return Promise.all(f.map((t) => this.remove(t))).then(() => {
            c(m, this, "");
          });
        }
        setPassword(t) {
          c(m, this, t);
        }
      }
      e.default = SecureStorage;
    },
    73: function (t, e, i) {
      "use strict";
      (i.r(e),
        i.d(e, "default", function () {
          return Amount;
        }));
      var r,
        s,
        n = i(105),
        a = i.n(n),
        o = i(11),
        c = i.n(o),
        l = i(67),
        u = i(102),
        d = i.n(u),
        h = (t, e, i) => {
          if (!e.has(t)) throw TypeError("Cannot " + i);
        },
        f = (t, e, i) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, i);
        },
        m = (t, e, i) => (h(t, e, "access private method"), i);
      const p = new a.a("0.01"),
        g = new a.a("0.000001");
      class Amount {
        constructor(t, { id: e, ticker: i, decimal: s, confirmed: n = !0 }) {
          if ((f(this, r), !t || !i || !s || !e))
            throw new Error(
              "Initial values should be defined: `amount`, `id`, `ticker`, `decimal`",
            );
          if (t.toString().includes("."))
            throw new TypeError("Amount should be passed in minimal units");
          if (!Number.isInteger(s))
            throw new TypeError("Decimal should be integer");
          ((this.amount = new c.a(t)),
            (this.ticker = i),
            (this.id = e),
            (this.decimal = s),
            (this.confirmed = n));
        }
        toCurrency(t = !1) {
          const e = Object(l["toCurrency"])(this.amount, this.decimal);
          return t ? `${e} ${this.ticker}` : e;
        }
        toMinimal(t = !1) {
          const e = this.amount.toString();
          return t ? `${e} ${this.ticker}` : e;
        }
        toBN() {
          return this.amount;
        }
        toJSON() {
          return this.toMinimal();
        }
        toFiat(t, e = !1) {
          if (!t)
            throw new Error(this.ticker + ": Fiat ticker should be defined");
          const { rate: i } =
            d.a.getRate({ id: this.id, confirmed: this.confirmed }, t) || {};
          if (!i)
            throw new Error(
              `${this.ticker}: Fiat rate for ${t} is not exist yet`,
            );
          const n = new a.a(Object(l["toCurrency"])(this.amount, this.decimal))
            .multipliedBy(i)
            .toString();
          return `${m(this, r, s).call(this, n)} ${e ? t : ""}`.trim();
        }
      }
      ((r = new WeakSet()),
        (s = function (t) {
          const e = new a.a(t);
          return e.gte(g) && e.lt(p) ? e.toFormat(6) : e.toFormat(2);
        }));
    },
    74: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TokensConfigKey =
          e.FIVE_SECONDS =
          e.FIVE_MINUTES =
          e.ConfigKey =
          e.CONFIG_CACHE_TTL =
            void 0));
      const r = (e.ConfigKey = {
          AboutTab: "about-tab",
          AvaxCGasPrice: "avax-c-gas-price",
          AvaxTokens: "avax-tokens",
          AvaxTokensBanned: "avax-tokens-banned",
          Banner: "banner",
          BnbTokens: "bnb-tokens",
          SuiTokens: "sui-tokens",
          SuiTokensBanned: "sui-tokens-banned",
          CashbackSettings: "cashback-settings",
          ChartSettings: "chart-data-settings-new",
          CoinMarketCapSupportedCoins: "coinmarketcap-supported-coins",
          DisabledCoins: "disabled-coins",
          EthereumGasPrice: "eth-gas-price",
          EthereumTokens: "ethereum-tokens",
          EthereumTokensBanned: "ethereum-tokens-banned",
          FantomGasPrice: "ftm-gas-price",
          FantomTokens: "fantom-tokens",
          FantomTokensBanned: "fantom-tokens-banned",
          FlareTokens: "flare-tokens",
          FlareTokensBanned: "flare-tokens-banned",
          OptimismTokens: "optimism-tokens",
          OptimismTokensBanned: "optimism-tokens-banned",
          FlareClaimExecutors: "flare-claim-executors",
          ArbitrumTokens: "arbitrum-tokens",
          ArbitrumTokensBanned: "arbitrum-tokens-banned",
          BscTokens: "bsc-tokens",
          BscTokensBanned: "bsc-tokens-banned",
          PolygonTokens: "polygon-tokens",
          PolygonTokensBanned: "polygon-tokens-banned",
          PolygonGasPrice: "polygon-gas-price",
          ExchangeDisabledCurrencyV2: "excludedMoveCurrency2",
          FontIcon: "icon-font-config",
          LearnStaking: "learn-staking",
          LogSettings: "logs-settings",
          SimplexSettings: "simplex-settings_v3",
          SimplexAliases: "simplex-aliases",
          StakingCoins: "staking-coins-list",
          SmpxUniqueTickers: "smpx-unique-tickers",
          WalletsFee: "wallets_fee_10",
          LunaClassicGasPrice: "lunc-gas-price",
          LunaClassicTokens: "luna-classic-tokens",
          LunaTokensBanned: "luna-tokens-banned",
          BalanceTracking: "balance-tracking",
          TrxTokens: "trx-tokens",
          TrxTokensBanned: "trx-tokens-banned",
          SolTokens: "sol-tokens",
          SolTokensBanned: "sol-tokens-banned",
          TonTokens: "ton-tokens",
          TonTokensBanned: "ton-tokens-banned",
          GeneralConfig: "general-config",
          IpfsGateway: "ipfs-gateway",
          FiltersAndGroups: "move-lists",
          CoinsTips: "coins_tips",
          ExchangeDisabledCurrency: "excludedMoveCurrency",
          ReleaseNotesDesktop: "new-release-features-desktop",
          PriceAlerts: "price-alerts-config",
          Rates: "rates-list",
          RatesSettings: "rates-settings",
          ReferralProgramTexts: "referral-program-texts",
          ReviewSettings: "review-settings",
          TextsDesktop: "texts_desktop",
          ReleaseNotesMobile: "new-release-features-mobile",
          ServiceMessage: "service-message",
          SingleSocketSettingsMobile: "single-socket-settings-mobile",
          LegacyExchangeDisabledCurrency: "excludedExchangeCurrency",
          WalletsFeeExtension: "wallets_fee_extension",
          ChangeNowOmniTickers: "cn-omni-tickers",
          ChangeNowUniqueTickers: "cn-unique-tickers",
          ChangeNowSettings: "cn-settings",
          LegacyRates: "rates-config",
          LegacySimplexSettings: "simplex-settings_v2",
          ChartRequestFrequency: "charts_request_frequency",
          BitcoinFeeForecast: "bitcoin-fee-forecast",
          Memes: "memes",
        }),
        s = (e.TokensConfigKey = {
          ETHTokens: r.EthereumTokens,
          BSCTokens: r.BscTokens,
          ARBTokens: r.ArbitrumTokens,
          TRXTokens: r.TrxTokens,
          FLRTokens: r.FlareTokens,
          MATICTokens: r.PolygonTokens,
          LUNCTokens: r.LunaClassicTokens,
          FTMTokens: r.FantomTokens,
          OPTokens: r.OptimismTokens,
          BNBTokens: r.BnbTokens,
          SUITokens: r.SuiTokens,
        }),
        n = (e.FIVE_MINUTES = 3e5),
        a = (e.FIVE_SECONDS = 5e3);
      e.CONFIG_CACHE_TTL = {
        [r.AvaxCGasPrice]: a,
        [r.EthereumGasPrice]: a,
        [r.ServiceMessage]: n,
        [r.PolygonGasPrice]: a,
        [r.WalletsFee]: n,
        [r.ChangeNowSettings]: n,
        [r.BitcoinFeeForecast]: 0,
        ...Object.fromEntries(Object.values(s).map((t) => [t, n])),
      };
    },
    79: function (t, e, i) {
      "use strict";
      (i.r(e),
        i.d(e, "default", function () {
          return _;
        }),
        i.d(e, "validateMemesConfig", function () {
          return A;
        }),
        i.d(e, "memesHistory", function () {
          return U;
        }));
      var r = i(1),
        s = i(14),
        n = i.n(s),
        a = i(52),
        o = i(409),
        c = i.n(o),
        l = i(8),
        u = i.n(l),
        d = i(26),
        h = i.n(d),
        f = i(124),
        m = i.n(f),
        p = i(126),
        g = i(4),
        y = Object.defineProperty,
        w = Object.defineProperties,
        v = Object.getOwnPropertyDescriptors,
        b = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        C = (t, e, i) =>
          e in t
            ? y(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (t[e] = i),
        S = (t, e) => {
          for (var i in e || (e = {})) T.call(e, i) && C(t, i, e[i]);
          if (b) for (var i of b(e)) k.call(e, i) && C(t, i, e[i]);
          return t;
        },
        x = (t, e) => w(t, v(e)),
        E = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      const P = { ignoreTokens: [] };
      function A(t) {
        if (!t || "object" !== typeof t)
          return (
            console.error("Memes: Invalid config object, using defaults"),
            S({}, P)
          );
        const e = S({}, P);
        if (!t.domain || "string" !== typeof t.domain || "" === t.domain.trim())
          return (
            console.error(
              "Memes: No domain configured, skipping initialization",
            ),
            e
          );
        try {
          (new URL("https://" + t.domain.trim()), (e.domain = t.domain.trim()));
        } catch (i) {
          return (
            console.error("Memes: Invalid domain format: " + t.domain, i),
            e
          );
        }
        if (
          (void 0 !== t.ignoreTokens &&
            (Array.isArray(t.ignoreTokens)
              ? (e.ignoreTokens = t.ignoreTokens
                  .filter((t) => {
                    try {
                      return (new r["PublicKey"](t), !0);
                    } catch (i) {
                      return (
                        console.warn(
                          "Memes: Invalid Solana address in ignoreTokens: " + t,
                        ),
                        !1
                      );
                    }
                  })
                  .map((t) => t.trim()))
              : console.error(
                  "Memes: ignoreTokens must be an array, ignoring",
                )),
          void 0 !== t.feeReceiverPublicKey)
        )
          try {
            (new r["PublicKey"](t.feeReceiverPublicKey),
              (e.feeReceiverPublicKey = t.feeReceiverPublicKey.trim()));
          } catch (i) {
            console.error(
              "Memes: Invalid feeReceiverPublicKey: " + t.feeReceiverPublicKey,
            );
          }
        if (void 0 !== t.gmgnVaultFeePublicKey)
          try {
            (new r["PublicKey"](t.gmgnVaultFeePublicKey),
              (e.gmgnVaultFeePublicKey = t.gmgnVaultFeePublicKey.trim()));
          } catch (i) {
            console.error(
              "Memes: Invalid gmgnVaultFeePublicKey: " +
                t.gmgnVaultFeePublicKey,
            );
          }
        return (
          console.log(
            "Memes: Configuration validated successfully. Domain: " +
              (e.domain || "not configured"),
          ),
          e
        );
      }
      const O = { column: "age", direction: "desc" },
        M = { isChecked: !1 },
        I = { query: "" };
      function D() {
        const t = [
          "1m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "3h",
          "4h",
          "5h",
          "6h",
          "12h",
          "24h",
        ];
        return t.reduce(
          (t, e) => (
            (t[e] = {
              buyers: 0,
              sellers: 0,
              volume: { buys: 0, sells: 0, total: 0 },
              transactions: 0,
              buys: 0,
              sells: 0,
              wallets: 0,
              price: 0,
              priceChangePercentage: 0,
            }),
            t
          ),
          {},
        );
      }
      class Memes_MemeCoinDataEmitter extends a["EventEmitter"] {
        constructor(
          { sort: t, showMyMemes: e, search: i } = {
            sort: O,
            showMyMemes: M,
            search: I,
          },
        ) {
          (super(),
            (this.topMemes = []),
            (this.myMemes = []),
            (this.toIgnoreTokens = new Set()),
            (this.rws = null),
            (this.config = P),
            this.setMaxListeners(0),
            (this.sort = t),
            (this.showMyMemes = e),
            (this.search = i),
            (this.solana = m.a.getWallet("SOL")),
            h.a.on("update", (t) => this.processWalletUpdate(t)),
            u.a
              .get(l["ConfigKey"].Memes)
              .then((t) => {
                this.config = A(t);
              })
              .catch((t) => {
                console.error(
                  "Memes: failed to fetch " + l["ConfigKey"].Memes,
                  t,
                );
              })
              .finally(() => {
                if (!this.config.domain) return;
                let t, e;
                try {
                  ((t = new URL(
                    "/api/ws",
                    "wss://" + this.config.domain,
                  ).toString()),
                    (e = new URL(
                      "/swaps/1m",
                      "https://" + this.config.domain,
                    ).toString()));
                } catch (i) {
                  return void console.error(
                    "Memes: Invalid URLs constructed from config",
                    i,
                  );
                }
                ((this.rws = this.newSocket(t)),
                  this.config.ignoreTokens &&
                    this.config.ignoreTokens.length > 0 &&
                    (this.toIgnoreTokens = new Set(this.config.ignoreTokens)),
                  n.a
                    .get(e)
                    .then((t) => {
                      var e;
                      const i = null != (e = t.headers.date) ? e : new Date(),
                        r = new Date(i).getTime();
                      (this.emit("server-timestamp", r),
                        this.transformAndBroadcastData(
                          this.sanitizeMemesResponse(t.data),
                        ));
                    })
                    .catch((t) =>
                      console.error("Memes: failed to load memes coin data", t),
                    ));
              }),
            this.solana
              .initTokenBalances()
              .catch((t) =>
                console.error("Memes: failed to update token balances", t),
              ));
        }
        close() {
          var t;
          (this.removeAllListeners(),
            null == (t = this.rws) || t.close(),
            clearInterval(this.myMemesInterval),
            console.warn(
              "✅->❌ MemeCoinDataEmitter has been closed and cleaned up.",
            ));
        }
        processWalletUpdate({ id: t }) {
          var e;
          console.warn(`Memes: ${t} updated`);
          const i = this.topMemes.concat(this.myMemes).find((e) => {
            var i;
            return (null == (i = e.tokenInstance) ? void 0 : i.id) === t;
          });
          i &&
            ((i.value =
              Number(
                null == (e = i.tokenInstance) ? void 0 : e.divisibleBalance,
              ) || 0),
            this.emit("dataCreate", this.filterData(this)));
        }
        getInitialData() {
          return this.topMemes.length >= this.myMemes.length
            ? this.topMemes
            : this.myMemes;
        }
        newSocket(t, e) {
          const i = new c.a(t, void 0, e);
          return (
            i.addEventListener("message", (t) => {
              try {
                const { data: e } = t,
                  i = JSON.parse(e.toString());
                this.transformAndBroadcastData(this.sanitizeMemesResponse(i));
              } catch (e) {
                console.error("Failed to parse data from server:", e);
              }
            }),
            i
          );
        }
        sanitizeMemesResponse(t) {
          return Array.isArray(t)
            ? t.map((t) => Object(g["sanitizeObject"])(t))
            : [];
        }
        transformData(t) {
          const e = Date.now(),
            i = t.filter((t) => !this.toIgnoreTokens.has(t.id));
          (i.forEach((t) => {
            ((t["age-sort"] = e - t.age), (t.valueFiat = 0));
            const i = this.solana.tokens[t.id.toLowerCase()];
            i &&
              ((t.tokenInstance = i),
              (t.value = Number(i.divisibleBalance || 0)),
              (t.valueFiat = t.price ? Number(t.price) * Number(t.value) : 0));
          }),
            (this.topMemes = i));
        }
        refreshMyMemes() {
          return E(this, null, function* () {
            const t = (yield this.fetchAllTokensInWallet(
                this.solana.address,
              )).filter(({ token: t }) => !this.toIgnoreTokens.has(t.mint)),
              e = t.filter((t) => t.value >= 0.01),
              i = e.map(({ token: t }) => t.mint),
              r = (yield Promise.allSettled(
                i.map(this.fetchSoltrackerTokenStats),
              )).map((t) =>
                "fulfilled" === t.status && Object.keys(t.value).length > 0
                  ? t.value
                  : D(),
              );
            e.length !== r.length &&
              console.warn(
                "MemeCoinDataEmitter: invariant is Broken - tokensWithoutDust.length !== stats.length",
              );
            const s = e.map((t, e) =>
              this.solTrackerDataToMemeCoinData(x(S({}, t), { stats: r[e] })),
            );
            this.myMemes = s;
          });
        }
        solTrackerDataToMemeCoinData({
          token: t,
          pools: e,
          events: i,
          balance: r,
          value: s,
          stats: n,
        }) {
          var a, o, c, l, u, d, h, f, m, p, g;
          const y = Date.now(),
            w = e[0];
          return this.sanitizeMemeCoinData({
            id: t.mint,
            name: t.name,
            icon: t.image,
            age:
              null != (o = null == (a = t.creation) ? void 0 : a.created_time)
                ? o
                : 0,
            "age-sort": 0,
            liq: null != (c = null == w ? void 0 : w.liquidity.usd) ? c : 0,
            tokenInstance: this.solana.tokens[t.mint.toLowerCase()],
            mc: null != (l = null == w ? void 0 : w.marketCap.usd) ? l : 0,
            txsCount1min: null == (u = n["1m"]) ? void 0 : u.transactions,
            txsBuysCount1min: null == (d = n["1m"]) ? void 0 : d.buys,
            txsSellsCount1min: null == (h = n["1m"]) ? void 0 : h.sells,
            volume1min: null == (f = n["1m"]) ? void 0 : f.volume.total,
            volume5min: null == (m = n["5m"]) ? void 0 : m.volume.total,
            volume1hour: null == (p = n["1h"]) ? void 0 : p.volume.total,
            price: null != (g = null == w ? void 0 : w.price.usd) ? g : 0,
            priceChange1min: i["1m"].priceChangePercentage,
            priceChange5min: i["5m"].priceChangePercentage,
            priceChange1hour: i["1h"].priceChangePercentage,
            decimal: t.decimals,
            ticker: t.symbol,
            hotLevel: 0,
            processedAt: y,
            value: r,
            valueFiat: s,
          });
        }
        missingMyMemesFromTopMemes(t = this.topMemes, e = this.solana.tokens) {
          const i = new Set(t.map((t) => t.id));
          return Object.keys(this.solana.tokens).filter((t) => !i.has(t));
        }
        fetchAllTokensInWallet(t) {
          return E(this, null, function* () {
            const { data: e } = yield p["solTrackerClient"].get("/wallet/" + t);
            return e.tokens;
          });
        }
        fetchSoltrackerTokenStats(t) {
          return E(this, null, function* () {
            const { data: e } = yield p["solTrackerClient"].get("/stats/" + t);
            return e;
          });
        }
        sanitizeMemeCoinData(t) {
          let e;
          try {
            e = new r["PublicKey"](t.id).toBase58();
          } catch (s) {
            (console.error(s), (e = ""));
          }
          const i = {
            id: e,
            name: Object(g["sanitizeString"])(t.name),
            icon: Object(g["sanitizeUrl"])(t.icon),
            ticker: Object(g["sanitizeString"])(t.ticker),
            age: Object(g["sanitizeNumber"])(t.age),
            "age-sort": Object(g["sanitizeNumber"])(t["age-sort"]),
            liq: Object(g["sanitizeNumber"])(t.liq),
            mc: Object(g["sanitizeNumber"])(t.mc),
            txsCount1min: Object(g["sanitizeNumber"])(t.txsCount1min),
            txsBuysCount1min: Object(g["sanitizeNumber"])(t.txsBuysCount1min),
            txsSellsCount1min: Object(g["sanitizeNumber"])(t.txsSellsCount1min),
            volume1min: Object(g["sanitizeNumber"])(t.volume1min),
            volume5min: Object(g["sanitizeNumber"])(t.volume5min),
            volume1hour: Object(g["sanitizeNumber"])(t.volume1hour),
            price: Object(g["sanitizeNumber"])(t.price),
            priceChange1min: Object(g["sanitizeNumber"])(t.priceChange1min),
            priceChange5min: Object(g["sanitizeNumber"])(t.priceChange5min),
            priceChange1hour: Object(g["sanitizeNumber"])(t.priceChange1hour),
            decimal: Object(g["sanitizeNumber"])(t.decimal),
            hotLevel: Object(g["sanitizeNumber"])(t.hotLevel),
            processedAt: Object(g["sanitizeNumber"])(t.processedAt),
            value: Object(g["sanitizeNumber"])(t.value),
            valueFiat: Object(g["sanitizeNumber"])(t.valueFiat),
            tokenInstance: t.tokenInstance,
          };
          return i;
        }
        transformAndBroadcastData(t) {
          const e = t.map(this.sanitizeMemeCoinData);
          (this.transformData(e),
            this.emit("dataCreate", this.filterData(this)));
        }
        handleSort(t) {
          if (!t) throw new Error("event must be defined");
          ((this.sort = t), this.emit("dataCreate", this.filterData(this)));
        }
        handleCheckMyMemes(t) {
          return E(this, null, function* () {
            if (!t) throw new Error("event must be defined");
            ((this.showMyMemes = t),
              this.showMyMemes.isChecked
                ? ((this.myMemesInterval = setInterval(
                    this.refreshMyMemes.bind(this),
                    5e3,
                  )),
                  0 === this.myMemes.length && (yield this.refreshMyMemes()))
                : clearInterval(this.myMemesInterval),
              this.emit("dataCreate", this.filterData(this)));
          });
        }
        handleSearch(t) {
          if (!t) throw new Error("event must be defined");
          ((this.search = t), this.emit("dataCreate", this.filterData(this)));
        }
        filterData({ topMemes: t, myMemes: e, search: i, sort: r }) {
          let s = this.showMyMemes.isChecked ? e : t;
          return (
            (s = i.query
              ? s.filter((t) => {
                  var e;
                  const r =
                      -1 ===
                      t.name
                        .toLowerCase()
                        .search((null != (e = i.query) ? e : "").toLowerCase()),
                    s = !r;
                  return s;
                })
              : s),
            (s = s.sort((t, e) => {
              const i = t[r.column + "-sort"] || t[r.column],
                s = e[r.column + "-sort"] || e[r.column];
              return "undefined" === typeof i || "undefined" === typeof s
                ? 0
                : i < s
                  ? "asc" === r.direction
                    ? 1
                    : -1
                  : i > s
                    ? "asc" === r.direction
                      ? -1
                      : 1
                    : 0;
            })),
            s
          );
        }
      }
      var _ = Memes_MemeCoinDataEmitter,
        R = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      class MemesHistory_MemesHistory {
        put(t) {
          return R(this, null, function* () {
            yield g["db"].memesHistory.put(t);
          });
        }
        updateStatus(t, e) {
          return R(this, null, function* () {
            const i = yield g["db"].memesHistory.where({ txid: t }).first();
            i && (yield g["db"].memesHistory.update(i.txid, { status: e }));
          });
        }
        updateToAmount(t, e) {
          return R(this, null, function* () {
            const i = yield g["db"].memesHistory.where({ txid: t }).first();
            i &&
              ((i.to.amount = e), yield g["db"].memesHistory.update(i.txid, i));
          });
        }
        getByJetton(t) {
          return R(this, null, function* () {
            return g["db"].memesHistory
              .where("from.contract")
              .equals(t)
              .or("to.contract")
              .equals(t)
              .toArray();
          });
        }
        getAll() {
          return R(this, null, function* () {
            return g["db"].memesHistory.toArray();
          });
        }
        findById(t) {
          return R(this, null, function* () {
            return g["db"].memesHistory.where({ txid: t }).first();
          });
        }
      }
      const U = new MemesHistory_MemesHistory();
      i(332);
    },
    791: function (t, e, i) {
      "use strict";
      var r,
        s,
        n,
        a = i(11),
        o = i.n(a),
        c = i(337),
        l = i.n(c),
        u = i(28),
        d = i.n(u),
        h = i(228),
        f = i(339),
        m = i.n(f),
        p = i(19),
        g = i(27),
        y = i(4),
        w = i(793),
        v = i(103),
        b = i(127),
        T = Object.defineProperty,
        k = Object.defineProperties,
        C = Object.getOwnPropertyDescriptors,
        S = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        P = (t, e, i) =>
          e in t
            ? T(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (t[e] = i),
        A = (t, e) => {
          for (var i in e || (e = {})) x.call(e, i) && P(t, i, e[i]);
          if (S) for (var i of S(e)) E.call(e, i) && P(t, i, e[i]);
          return t;
        },
        O = (t, e) => k(t, C(e)),
        M = (t, e, i) => {
          if (!e.has(t)) throw TypeError("Cannot " + i);
        },
        I = (t, e, i) => (
          M(t, e, "read from private field"),
          i ? i.call(t) : e.get(t)
        ),
        D = (t, e, i) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, i);
        },
        _ = (t, e, i, r) => (
          M(t, e, "write to private field"),
          r ? r.call(t, i) : e.set(t, i),
          i
        ),
        R = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      const U = ["ETH"],
        L = 3e3;
      class Coin extends h["default"] {
        constructor(t) {
          var e, i, a, c;
          (super(t),
            D(this, r, void 0),
            D(this, s, void 0),
            D(this, n, void 0),
            (this.walletLoadPromise = null),
            (this.isWalletLoaded = !1),
            (this.dependencies = t.dependencies || {}),
            (this.config = t),
            _(this, r, t.id),
            (this.dependencies = null != (e = t.dependencies) ? e : {}),
            (this.explorersModules = {}),
            (this.coreLibrary = t.coreLibrary),
            (this.coreLib = t.coreLib),
            _(this, s, ""),
            _(this, n, ""),
            (this.socket = t.socket),
            (this.unspendableBalance = t.unspendableBalance),
            (this.feeData = t.feeData),
            (this.txWebUrl = t.txWebUrl),
            (this.network = t.network),
            (this.chainId = t.chainId),
            (this.denom = t.denom),
            (this.atomicId = t.atomicId),
            (this.BN = o.a),
            (this.fields = {}),
            (this.plugins = []),
            (this.explorers = []),
            (this.transactions = []),
            (this.confirmed = !0),
            (this.plugins = [new w["DomainsPlugin"]()]),
            (this.txNotifier = new m.a(this)),
            (this.features =
              null !=
              (c =
                null != (a = t.features)
                  ? a
                  : null == (i = t.coinData)
                    ? void 0
                    : i.features)
                ? c
                : []),
            this.manageSocket(),
            this.manageEvents());
        }
        loadLib(t) {
          return R(this, null, function* () {
            try {
              return yield this.dependencies[t].get();
            } catch (e) {
              throw (
                console.error(
                  `[${this.id}] Error: Could not load "${t}" dependency`,
                  e,
                ),
                e
              );
            }
          });
        }
        set id(t) {
          _(this, r, t);
        }
        get id() {
          return I(this, r);
        }
        set address(t) {
          _(this, s, t);
        }
        get address() {
          return I(this, s);
        }
        get derivation() {
          return I(this, n);
        }
        set derivation(t) {
          _(this, n, t);
        }
        get deprecatedParent() {
          return this.id;
        }
        get isCustomTokenSupported() {
          return (
            U.includes(this.id) ||
            this.isFeatureSupported(b["CoinFeature"].CustomTokens)
          );
        }
        get isTokensSupported() {
          return this.isFeatureSupported(b["CoinFeature"].Tokens);
        }
        get feeWallet() {
          return this;
        }
        get instance() {
          const t = this;
          return {
            get id() {
              return t.id;
            },
            get ticker() {
              return t.ticker;
            },
            get chainId() {
              return t.chainId;
            },
            get name() {
              return t.name;
            },
            get alias() {
              return t.alias;
            },
            get assetName() {
              return t.assetName;
            },
            get decimal() {
              return t.decimal;
            },
            get parent() {
              return t.id;
            },
            get feeCoefficient() {
              return t.coefficient;
            },
            get feeDefault() {
              var e;
              return null == (e = t.feeData) ? void 0 : e.fee;
            },
            get reserveForStake() {
              var e;
              return null == (e = t.feeData) ? void 0 : e.reserveForStake;
            },
            get gasLimit() {
              return t.gasLimit;
            },
            get address() {
              return t.address;
            },
            get account() {
              return t.address;
            },
            get coreLibrary() {
              return t.coreLibrary;
            },
            get coreLib() {
              return t.coreLib;
            },
            get denom() {
              return t.denom;
            },
            get feeTRC20() {
              var e;
              return null == (e = t.feeData) ? void 0 : e.feeTRC20;
            },
            get l2Name() {
              return t.l2Name;
            },
            get atomicId() {
              return t.atomicId;
            },
            feeDenom: () => this.feeDenom,
            getTickerFromDenom: (t) => this.getTickerFromDenom(t),
            isTestnet: () => this.isTestnet,
            toCurrencyUnit: (t, e) => this.toCurrencyUnit(t, e),
            toMinimalUnit: (t) => this.toMinimalUnit(t),
            getClient: () => {
              var t;
              return null == (t = this.getClient) ? void 0 : t.call(this);
            },
            tokens: () => this.tokens,
            getFee: (t) => this.getFee(t),
            getTokens: () => this.tokens,
            getProvider: (t) => this.getProvider(t),
            getTRC20Fee: (t) => this.getTRC20Fee(t),
            BN: o(),
          };
        }
        get explorer() {
          return this.explorers[0];
        }
        get privateKeysObject() {
          return this.KeysObject || !1;
        }
        set privateKeysObject(t) {
          this.KeysObject = t;
        }
        setExplorersModules(t) {
          t.forEach((t) => {
            this.explorersModules[t.name] = t;
          });
        }
        isFeeDynamic() {
          return !1;
        }
        getWebTransactionUrl(t) {
          return `${this.txWebUrl}${t}`;
        }
        manageSocket() {
          g["TxEventTypes"].forEach((t) => {
            this.eventEmitter.on(t, (e) =>
              R(
                this,
                [e],
                function* ({ ticker: e, address: i, hash: r, transaction: s }) {
                  var n, a;
                  if (this.ticker === e) {
                    if (void 0 !== s)
                      return this.txNotifier.notify(
                        t,
                        {
                          amount: this.toCurrencyUnit(String(s.amount)),
                          direction:
                            this.address.toLowerCase() === s.to.toLowerCase(),
                          txid: r,
                        },
                        this.id,
                        this.ticker,
                        r,
                      );
                    let e;
                    if ("function" === typeof this.getScriptPubKey)
                      try {
                        e = yield this.getScriptPubKey();
                      } catch (o) {
                        console.warn(o);
                      }
                    const c =
                      null !=
                      (a =
                        null == (n = this.getProvider)
                          ? void 0
                          : n.call(this, "socket"))
                        ? a
                        : this.explorer;
                    if (
                      "function" !==
                      typeof (null == c ? void 0 : c.getSocketTransaction)
                    )
                      throw new p["UndeclaredAbstractMethodError"](
                        "getSocketTransaction",
                        c,
                      );
                    return c.getSocketTransaction({
                      address: i,
                      hash: r,
                      scriptPubKey: e,
                      tokens: this.tokens,
                      type: t,
                    });
                  }
                  return null;
                },
              ),
            );
          });
        }
        manageEvents() {
          (this.eventEmitter.on(`update::${this.id}::balance`, (t) => {
            t ? (this.balance = t) : this.getInfo();
          }),
            this.eventEmitter.on(`update::${this.ticker}::token`, (t) => {
              this.eventEmitter.emit("update::balance", t);
            }),
            this.eventEmitter.on(
              `${this.id}-${this.id}::new-socket-tx`,
              ({ unconfirmedBalance: t, unconfirmedTx: e }) => {
                (t && (this.balance = t),
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
            ),
            this.eventEmitter.on(
              this.id + "::new-token-tx",
              ({ token: t, unconfirmedTx: e }) => {
                const { ticker: i, id: r } = t;
                e && e.direction
                  ? this.eventEmitter.emit("socket::newtx", {
                      id: r,
                      ticker: i,
                      amount: e.amount,
                      txid: e.txid,
                    })
                  : this.eventEmitter.emit("socket::newtx::outgoing", {
                      id: r,
                      ticker: i,
                    });
              },
            ),
            this.eventEmitter.on(
              this.ticker + "::confirmed-socket-tx",
              (t, e) => this.onConfirmSocketTx(e),
            ));
        }
        onConfirmSocketTx(t) {}
        getFee(t) {
          return R(this, null, function* () {
            return new this.BN(this.fee || 0);
          });
        }
        getAddress() {
          throw new p["UndeclaredAbstractMethodError"]("getAddress", this);
        }
        setAddress(t) {
          this.address = t;
        }
        setPrivateKey(t) {
          throw new p["UndeclaredAbstractMethodError"](
            "async setPrivateKey",
            this,
          );
        }
        validateAddress(t) {
          return R(this, null, function* () {
            throw new p["UndeclaredAbstractMethodError"](
              "validateAddress",
              this,
            );
          });
        }
        loadWallet(t, e) {
          return R(this, null, function* () {
            throw new p["UndeclaredAbstractMethodError"](
              "async loadWallet",
              this,
            );
          });
        }
        startWalletLoading(t) {
          return R(this, null, function* () {
            return (
              this.walletLoadPromise ||
                (this.walletLoadPromise = t()
                  .then((t) => ((this.isWalletLoaded = !0), t))
                  .finally(() => {
                    this.walletLoadPromise = null;
                  })),
              this.walletLoadPromise
            );
          });
        }
        ensureWalletInitialized() {
          return R(this, null, function* () {
            if (!this.isWalletLoaded) {
              if (!this.walletLoadPromise)
                throw new Error("Wallet is not loaded. Call loadWallet first.");
              yield this.walletLoadPromise;
            }
          });
        }
        checkTransaction(t) {
          return R(this, null, function* () {
            try {
              yield this.explorer.checkTransaction(this.address, t);
            } catch (e) {
              console.warn(this.ticker, "Unable to check transaction");
            }
            (this.eventEmitter.emit("socket::newtx::outgoing", {
              id: this.id,
              ticker: t.coin.ticker,
            }),
              setTimeout(
                () =>
                  R(this, null, function* () {
                    yield this.getBalance();
                  }),
                L,
              ));
          });
        }
        getInfo() {
          return R(this, null, function* () {
            try {
              if (!this.explorer) return { balance: this.balance };
              const { balance: t = null, nonce: e = null } =
                yield this.explorer.getInfo(this.address);
              return (
                t && (this.balance = t),
                e && (this.nonce = Number(e)),
                { balance: this.balance, nonce: this.nonce || null }
              );
            } catch (t) {
              return { balance: this.balance };
            }
          });
        }
        getBalance() {
          return R(this, null, function* () {
            const { balance: t } = yield this.getInfo();
            return ((this.balance = t), t);
          });
        }
        getTransactions(t) {
          return R(this, null, function* () {
            if (this.explorer) {
              if (!this.address)
                throw new Error(
                  `[${this.ticker}] getTransactions error: address is not loaded`,
                );
              const e = yield this.explorer
                .getTransactions(O(A({}, t), { address: this.address }))
                .catch((t) => {
                  throw new p["ExplorerRequestError"]({
                    type: g["GET_TRANSACTIONS_TYPE"],
                    error: t,
                    instance: this,
                  });
                });
              return e;
            }
            return this.transactions;
          });
        }
        availableBalance(t) {
          return R(this, null, function* () {
            var e, i;
            const r =
              ((null == (e = this.balances) ? void 0 : e.available) &&
                this.toMinimalUnit(
                  null == (i = this.balances) ? void 0 : i.available,
                )) ||
              this.balance;
            if (!r) return "";
            const s = (t && new this.BN(t)) || new this.BN(yield this.getFee()),
              n = new this.BN(r)
                .sub(s)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(n).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(n);
          });
        }
        isAvailableForSend(t, e) {
          return R(this, null, function* () {
            if (Number(t) < 0) return !1;
            if (!this.balance) return !1;
            const i = e ? this.toMinimalUnit(e) : void 0,
              r = new this.BN(
                this.toMinimalUnit(yield this.availableBalance(i)),
              ),
              s = new this.BN(this.toMinimalUnit(t));
            return (!s.isZero() || !r.isZero()) && s.lte(r);
          });
        }
        createExplorer(t) {
          var e;
          const i =
              "ETHNftMoralisExplorer" === t.className ? "MoralisExplorer" : "",
            r =
              null != (e = this.explorersModules[t.className])
                ? e
                : this.explorersModules[i];
          if (!r)
            throw new p["ExternalError"]({
              error: `Could't create explorer instance: class ${t.className} not found`,
              instance: this,
            });
          const s = new r({ wallet: this.instance, config: t });
          return (this.explorers.push(s), s);
        }
        processExplorerConfig(t) {
          var e;
          const i =
            null != (e = this.explorers.find((e) => l()(t, e.config)))
              ? e
              : this.createExplorer(t);
          return i ? (i.updateParams(t), i) : null;
        }
        setFeeData(t = {}) {
          ((this.feeData = t), Object(y["safeUpdateObject"])(this, t));
        }
        updateCoinParamsFromServer(t) {
          this.config !== t &&
            (Object(y["safeUpdateObject"])(this.config, t),
            this.setFeeData(t.feeData),
            this.loadExplorers(t));
        }
        install() {
          this.plugins.forEach((t) => {
            t.install(this);
          });
        }
        loadExplorers({ explorers: t, txWebUrl: e, submitUrl: i }) {
          t.forEach((t) => {
            try {
              this.processExplorerConfig(
                O(A({}, t), { submitUrl: i, webUrl: e }),
              );
            } catch (r) {
              d.a.error({ instance: this, error: r });
            }
          });
        }
        getUnspentOutputs() {
          return R(this, null, function* () {
            let t;
            return (
              "function" === typeof this.getScriptPubKey &&
                (t = yield this.getScriptPubKey()),
              this.explorer && this.explorer.getUnspentOutputs(this.address, t)
            );
          });
        }
        createTokenTransactionOnce(t) {
          return this.canRun("createTokenTransaction")
            ? this.createTokenTransaction(t)
            : {};
        }
        get isActivated() {
          return v["default"].isActive(this);
        }
        activate() {
          return R(this, null, function* () {
            v["default"].activate(this);
          });
        }
        deactivate() {
          v["default"].deactivate(this);
        }
        isFeatureSupported(t) {
          if (!Object.values(b["CoinFeature"]).includes(t))
            throw new Error(
              `Feature '${t}' does not exist in the CoinFeature enum`,
            );
          return this.features.includes(t);
        }
        isNftSupported() {
          return this.isFeatureSupported(b["CoinFeature"].Nft);
        }
      }
      ((r = new WeakMap()),
        (s = new WeakMap()),
        (n = new WeakMap()),
        (e["a"] = Coin));
    },
    792: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return AbstractWallet;
      });
      var r,
        s,
        n,
        a = i(11),
        o = i.n(a),
        c = i(26),
        l = i.n(c),
        u = i(338),
        d = i.n(u),
        h = i(67),
        f = i(35),
        m = i(73),
        p = (t, e, i) => {
          if (!e.has(t)) throw TypeError("Cannot " + i);
        },
        g = (t, e, i) => (
          p(t, e, "read from private field"),
          i ? i.call(t) : e.get(t)
        ),
        y = (t, e, i) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, i);
        },
        w = (t, e, i, r) => (
          p(t, e, "write to private field"),
          r ? r.call(t, i) : e.set(t, i),
          i
        ),
        v = (t, e, i) =>
          new Promise((r, s) => {
            var n = (t) => {
                try {
                  o(i.next(t));
                } catch (e) {
                  s(e);
                }
              },
              a = (t) => {
                try {
                  o(i.throw(t));
                } catch (e) {
                  s(e);
                }
              },
              o = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(n, a);
            o((i = i.apply(t, e)).next());
          });
      const b = 5e3,
        T = {};
      class AbstractWallet {
        constructor({ name: t, ticker: e, decimal: i }) {
          (y(this, r, void 0),
            y(this, s, void 0),
            y(this, n, void 0),
            (this.indivisibleBalance = null),
            (this.divisibleBalance = null),
            w(this, r, t),
            w(this, s, e),
            w(this, n, i),
            (this.alias = "atomic"));
        }
        set ticker(t) {
          w(this, s, t);
        }
        get ticker() {
          return g(this, s);
        }
        set decimal(t) {
          w(this, n, t);
        }
        get decimal() {
          return g(this, n);
        }
        set name(t) {
          w(this, r, t);
        }
        get name() {
          return g(this, r);
        }
        get networkType() {
          return "";
        }
        get explorer() {
          return null;
        }
        get eventEmitter() {
          return l.a;
        }
        isStakingSupported() {
          return !1;
        }
        toMinimalUnit(t, e) {
          return Object(h["toMinimal"])(t || "0", e || this.decimal);
        }
        toCurrencyUnit(t, e) {
          return Object(h["toCurrency"])(
            t instanceof m["default"] ? t.amount : t,
            e || g(this, n),
          );
        }
        get balance() {
          return this.indivisibleBalance
            ? this.indivisibleBalance.toString()
            : null;
        }
        set balance(t) {
          const e = null !== t && "" !== t && void 0 !== t,
            i = this.divisibleBalance;
          (e &&
            ((this.indivisibleBalance = new o.a(String(t))),
            (this.divisibleBalance = this.toCurrencyUnit(t))),
            this.eventEmitter &&
              this.eventEmitter.emit(
                `update::${this.deprecatedParent}::token`,
                this.id,
              ),
            this.eventEmitter &&
              this.divisibleBalance !== i &&
              i &&
              this.eventEmitter.emit(f["WALLETS"].BALANCE_UPDATED, {
                wallet: this,
              }));
        }
        get feeTicker() {
          return this.ticker;
        }
        getFeeSettings() {
          return {};
        }
        canRun(t) {
          var e;
          return (
            (null != (e = T[t]) ? e : 0) + b <= Date.now() &&
            ((T[t] = Date.now()), !0)
          );
        }
        sendTransaction(t) {
          return v(this, null, function* () {
            return this.explorer && this.explorer.sendTransaction(t);
          });
        }
        createTransactionOnce(t) {
          return this.canRun("createTransaction")
            ? this.createTransaction(t)
            : {};
        }
        sendTransactionOnce(t) {
          return this.canRun("sendTransaction") ? this.sendTransaction(t) : {};
        }
        sendRawTransactionOnce(t) {
          return this.canRun("sendRawTransaction")
            ? this.sendRawTransaction(t)
            : {};
        }
        getTransaction(t) {
          return v(this, null, function* () {
            return (
              this.explorer && this.explorer.getTransaction(this.address, t)
            );
          });
        }
        isAvailableForSend(t, e) {
          return v(this, null, function* () {
            const e = yield this.availableBalance();
            return new o.a(this.toMinimalUnit(t)).lte(
              new o.a(this.toMinimalUnit(e)),
            );
          });
        }
        getUserTicker() {
          return this.ticker;
        }
        validateMemo(t) {
          var e;
          const i = null == (e = this.config) ? void 0 : e.memoRegexp;
          return !!i && new RegExp(i).test(t);
        }
        getTxLimit() {
          return this.explorer && this.explorer.getTxLimit();
        }
        get canPaginate() {
          return this.explorer && this.explorer.canPaginate;
        }
        getAboutInfo() {
          return v(this, null, function* () {
            return d.a.get(this);
          });
        }
        isNftSupported() {
          return !1;
        }
        isMatch({
          ticker: t,
          contract: e,
          parent: i,
          address: r,
          network: s,
          chainId: n,
        }) {
          const a = {
            contract: e,
            parent: i,
            address: r,
            network: s,
            chainId: n,
          };
          if (!t) throw new Error("Parameter `ticker` or `id` is required");
          const o = this.ticker.toLowerCase() === t.toLowerCase();
          return Object.keys(a).reduce(
            (t, e) =>
              t &&
              (!this[e] ||
                !a[e] ||
                this[e].toString().toLowerCase() ===
                  a[e].toString().toLowerCase()),
            o,
          );
        }
      }
      ((r = new WeakMap()), (s = new WeakMap()), (n = new WeakMap()));
    },
    794: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const r = null;
      class LazyLoadedLib {
        constructor(t) {
          ((this.importLib = t), (this.promise = r));
        }
        async get() {
          return (this.isLibLoaded() || this.loadLib(), this.promise);
        }
        isLibLoaded() {
          return this.promise !== r;
        }
        loadLib() {
          this.promise = this.importLib();
        }
        static getInstance(t) {
          if ("string" !== typeof t)
            throw new TypeError("importLibName not defined");
          return new LazyLoadedLib(() => i(1874)(t));
        }
        static getLazyImported(t, e) {
          return LazyLoadedLib.getInstance(t).get(e);
        }
      }
      e.default = LazyLoadedLib;
    },
    8: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ConfigKey", {
          enumerable: !0,
          get: function () {
            return n.ConfigKey;
          },
        }),
        Object.defineProperty(e, "TokensConfigKey", {
          enumerable: !0,
          get: function () {
            return n.TokensConfigKey;
          },
        }),
        (e.default = void 0));
      var s = r(i(961)),
        n = i(74);
      e.default = new s.default();
    },
    80: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      class Transaction {
        constructor(t) {
          if ("object" !== typeof t)
            throw new TypeError(
              "Transaction: constructor arguments object must be used",
            );
          if (arguments.length > 1)
            throw new Error("Transaction: constructor accepts only 1 argument");
          if ((t.alias || (t.alias = "atomic"), !t.ticker))
            throw new Error("Transaction: must have ticker");
          if (!t.datetime)
            throw new Error("Transaction: must have datetime object");
          "string" === typeof t.datetime && (t.datetime = new Date(t.datetime));
          for (const [e, i] of Object.entries(t)) this[e] = i;
          (t.timestamp || (this.timestamp = t.datetime.getTime()),
            (this.date = this.getDate()),
            (this.time = this.getTime()));
        }
        getDateTime() {
          return new Date(Number("" + this.timestamp));
        }
        getDate() {
          return this.datetime.toDateString().slice(4);
        }
        getTime() {
          return this.datetime.toTimeString().slice(0, 5);
        }
        getStatus() {
          return this.confirmations > 1
            ? { text: "Confirmed", color: "#06CE91" }
            : { text: "Pending" };
        }
        getHash() {
          return this.txid;
        }
        static makeTransactionId(t) {
          var e;
          return (
            t.txid +
            t.walletid +
            (null !== (e = t.direction) && void 0 !== e
              ? e
              : t.otherSideAddress)
          );
        }
        static fromHistory(t) {
          const e = new this(t);
          return (
            (e.direction = "in" === t.direction),
            (e.datetime = e.getDateTime()),
            (e.otherSideAddress = t.recepient),
            e
          );
        }
      }
      e.default = Transaction;
    },
    81: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var s = r(i(80)),
        n = r(i(28)),
        a = i(4);
      const o = 10;
      class History {
        constructor() {
          this.processing = !1;
        }
        async getTransactionIds() {
          this.processing = !0;
          const t = await a.db.transactions.toArray().finally(() => {
            this.processing = !1;
          });
          return t.map((t) => {
            let { txid: e, ticker: i, walletid: r, alias: s } = t;
            return { txid: e, ticker: i, walletid: r, alias: s };
          });
        }
        async findTransaction(t) {
          this.processing = !0;
          const e = await a.db.transactions
            .where({ txid: t })
            .first()
            .finally(() => {
              this.processing = !1;
            });
          return e;
        }
        async removeTransaction(t) {
          this.processing = !0;
          const e = await a.db.transactions
            .where({ ...t, alias: "atomic" })
            .delete()
            .finally(() => {
              this.processing = !1;
            });
          return e;
        }
        async selectTransactions(t) {
          (void 0 === t && (t = null), (this.processing = !0));
          let e = [];
          if (t) {
            const { ticker: i, ...r } = t;
            e = await a.db.transactions
              .where({ ...r, alias: "atomic" })
              .and((t) => {
                var e;
                return (
                  "string" !== typeof i ||
                  (null === (e = t.ticker) || void 0 === e
                    ? void 0
                    : e.toLowerCase()) === i.toLowerCase()
                );
              })
              .toArray()
              .finally(() => {
                this.processing = !1;
              });
          } else
            e = await a.db.transactions.toArray().finally(() => {
              this.processing = !1;
            });
          return e.reduce((t, e) => {
            try {
              t.push(s.default.fromHistory(e));
            } catch (i) {
              console.error("Error parsing transaction:", i, e);
            }
            return t;
          }, []);
        }
        async filterAndUpdateTransactions(t) {
          const e = await Promise.all(
            t
              .map(async (t) => {
                if (!t) return null;
                const e = { ...t };
                return (
                  (e.fee = await (null === t || void 0 === t ? void 0 : t.fee)),
                  (e.confirmations = await (null === t || void 0 === t
                    ? void 0
                    : t.confirmations)),
                  e
                );
              })
              .filter(Boolean),
          );
          await this.putTransactions(e).catch((t) =>
            n.default.error({ instance: this, error: t }),
          );
          const i = t.filter(
            (t) => "ZEC" === (null === t || void 0 === t ? void 0 : t.ticker),
          );
          await this.bulkUpdateConfirmations(i);
        }
        async putTransactions(t) {
          return (
            (t = t.filter(Boolean).map(this._prepareTransactionForIDB)),
            t.length > 0 &&
              ((this.processing = !0), await a.db.transactions.bulkPut(t)),
            t
          );
        }
        async updateTransaction(t) {
          this.processing = !0;
          const e = await a.db.transactions
            .where({
              txid: t.txid,
              ticker: t.ticker,
              alias: t.alias,
              walletid: t.walletid,
            })
            .first();
          if (e && e.id) return (await a.db.transactions.update(e.id, t), t);
        }
        async bulkUpdateConfirmations(t) {
          await a.db.transactions.bulkUpdate(
            t.map((t) => ({
              key: s.default.makeTransactionId({
                ...t,
                direction: !t.direction,
              }),
              changes: { confirmations: t.confirmations },
            })),
          );
        }
        async clearTransactions() {
          await a.db.transactions.clear();
        }
        _prepareTransactionForIDB(t) {
          const e = Object.keys(t).reduce((e, i) => {
            if ("undefined" === typeof t[i]) return e;
            if (
              ("txid" !== i || e.id || (e.id = s.default.makeTransactionId(t)),
              ["date", "time"].includes(i))
            )
              return e;
            if ("direction" === i) e[i] = t[i] ? "in" : "out";
            else if ("otherSideAddress" === i) {
              var r;
              e.recepient =
                null === (r = t[i]) || void 0 === r ? void 0 : r.toString();
            } else {
              var n;
              e[i] =
                null === (n = t[i]) || void 0 === n ? void 0 : n.toString();
            }
            return e;
          }, {});
          return e;
        }
        async updatePendingOrInsert(t, e) {
          const i = await this.selectTransactions({
              txid: "pending",
              ticker: t.ticker,
              alias: "atomic",
            }),
            r = i.find(
              (e) =>
                e.amount === t.amount && e.recepient === t.otherSideAddress,
            );
          r
            ? ((this.processing = !0),
              r &&
                r.id &&
                (await a.db.transactions.delete(r.id).finally(() => {
                  this.processing = !1;
                })))
            : await this.filterAndUpdateTransactions([t]);
        }
        async xmrHasFrozenBalance() {
          const t = await this.selectTransactions({ ticker: "XMR" });
          return !!t.find((t) => t.confirmations < o);
        }
      }
      const c = new History();
      e.default = c;
    },
    840: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.coinStakings = void 0),
        (e.fetchPredefinedValidators = y));
      var s = r(i(14)),
        n = r(i(2017)),
        a = f(i(8)),
        o = r(i(28)),
        c = r(i(37)),
        l = r(i(388)),
        u = i(126),
        d = i(27),
        h = i(2018);
      function f(t, e) {
        if ("function" == typeof WeakMap)
          var i = new WeakMap(),
            r = new WeakMap();
        return (f = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var s,
            n,
            a = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return a;
          if ((s = e ? r : i)) {
            if (s.has(t)) return s.get(t);
            s.set(t, a);
          }
          for (const i in t)
            "default" !== i &&
              {}.hasOwnProperty.call(t, i) &&
              ((n =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, i)) &&
              (n.get || n.set)
                ? s(a, i, n)
                : (a[i] = t[i]));
          return a;
        })(t, e);
      }
      const m = "https://apollo.atomicwallet.io/stakings",
        p = {
          ADA: "stake_validators_ada",
          SOL: "stake_validators_sol",
          XTZ: "stake_validators_tezos",
          ZIL: "stake_validators_zil",
        },
        g = (e.coinStakings = Object.keys(p).map((t) => new n.default(t)));
      async function y() {
        Object.keys(p).forEach(async (t) => {
          const e = g.find(
            (e) => e.getName().toLowerCase() === t.toLowerCase(),
          );
          if (!e) return;
          a.default.register(p[t]);
          const i = await a.default
            .get(p[t])
            .catch(
              (e) => (
                o.default.error(e),
                l.default.find((e) => e.currency === t)
              ),
            );
          e.modifyPredefinedValidators(
            "XTZ" === t
              ? Array.isArray(i) &&
                  i.filter((t) => t.stakingCapacity > t.stakingBalance)
              : i,
          );
        });
      }
      class Stakings extends Array {
        constructor() {
          (super(...arguments),
            (this.settings = d.STAKING_SETTINGS_DEFAULT),
            this.push(...g));
        }
        async fetchSettings() {
          const t =
            (await a.default
              .get(a.ConfigKey.StakingCoins)
              .catch(
                (t) => (o.default.error({ instance: this, error: t }), null),
              )) || d.STAKING_SETTINGS_DEFAULT;
          return (
            (this.settings = t.filter((t) => {
              let { platforms: e = [] } = t;
              return e.some((t) =>
                (0, h.isSupportedAppVersion)(
                  c.default.getPlatform(),
                  c.default.getVersion(),
                  t,
                ),
              );
            })),
            this.settings
          );
        }
        getStakingInterface(t) {
          return this.find(
            (e) => e.getName().toLowerCase() === t.toLowerCase(),
          );
        }
        saveSuccessStaking(t) {
          const e = { method: "post", url: m, data: t };
          (u.Everstake.submitEverstakeTx({
            provider: t.provider,
            currency: t.currency,
            hash: t.hash,
          }),
            (0, s.default)(e));
        }
      }
      e.default = Stakings;
    },
    961: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.APP_VERSION_DB_KEY = void 0));
      var s = r(i(14)),
        n = i(4),
        a = r(i(26)),
        o = i(35),
        c = i(27),
        l = i(19),
        u = r(i(433)),
        d = r(i(37)),
        h = r(i(996)),
        f = r(i(28)),
        m = r(i(435)),
        p = i(74);
      function g(t, e) {
        (w(t, e), e.add(t));
      }
      function y(t, e, i) {
        (w(t, e), e.set(t, i));
      }
      function w(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function v(t, e, i) {
        return (t.set(T(t, e), i), i);
      }
      function b(t, e) {
        return t.get(T(t, e));
      }
      function T(t, e, i) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : i;
        throw new TypeError("Private element is not present on this object");
      }
      const k = "config",
        C = 6e5,
        S = new Set(Object.values(p.ConfigKey)),
        x = [
          /<[^>]*>/,
          /eval\s*[(]/i,
          /new\s*Function\s*[(]/i,
          /^(?:__proto__|prototype|constructor)$/i,
        ],
        E = (e.APP_VERSION_DB_KEY = "__appVersion__"),
        P = {
          "0x9813037ee2218799597d83d4a5b6f3b6778218d9": {
            contract: "0x9813037ee2218799597d83d4a5b6f3b6778218d9",
            config: {
              stakingGasLimit: 3e5,
              unstakingGasLimit: 35e4,
              claimRewardsGasLimit: 17e4,
              withdrawGasLimit: 34e4,
              approvalGasLimit: 5e4,
              stakingContract: "0x65218A41Fb92637254B4f8c97448d3dF343A3064",
            },
            isStakable: !0,
          },
        },
        A = () => Date.now();
      var O = new WeakMap(),
        M = new WeakMap(),
        I = new WeakMap(),
        D = new WeakSet();
      class ConfigManager {
        constructor(t) {
          (g(this, D),
            y(this, O, void 0),
            y(this, M, (0, h.default)()),
            y(this, I, void 0),
            (this.cached = {}),
            (this.baseUrl = t || u.default.get("CONFIGS_BASE_URL")),
            a.default.on(o.CONFIGS.UPDATE, T(D, this, _).bind(this)));
        }
        register(t, e) {
          if (
            (T(D, this, L).call(this, t),
            S.add(t),
            void 0 !== (null === e || void 0 === e ? void 0 : e.cacheTtl))
          ) {
            if (!Number.isInteger(e.cacheTtl) || e.cacheTtl < 0)
              throw new TypeError("cacheTtl must be a positive number or 0");
            p.CONFIG_CACHE_TTL[t] = e.cacheTtl;
          }
        }
        async get(t, e, i) {
          if (
            (void 0 === e && (e = !1),
            void 0 === i && (i = {}),
            T(D, this, R).call(this, t),
            e || 0 === T(D, this, q).call(this, t))
          )
            return T(D, this, j).call(this, t, i);
          await T(D, this, N).call(this);
          try {
            var r;
            const e =
              null !== (r = T(D, this, F).call(this, t)) && void 0 !== r
                ? r
                : await T(D, this, W)
                    .call(this, t)
                    .catch((t) => {
                      console.error(t);
                    });
            if (e)
              return (
                T(D, this, G).call(this, t) &&
                  a.default.emit(o.CONFIGS.UPDATE, { id: t, options: i }),
                e
              );
            const s = T(D, this, H).call(this, t);
            if ((a.default.emit(o.CONFIGS.UPDATE, { id: t, options: i }), s))
              return s;
          } catch (s) {}
          return T(D, this, j).call(this, t, i);
        }
        async getLocal(t) {
          var e, i;
          const r =
            null !==
              (e =
                null !== (i = T(D, this, F).call(this, t)) && void 0 !== i
                  ? i
                  : await T(D, this, W)
                      .call(this, t)
                      .catch((t) => {
                        console.error(t);
                      })) && void 0 !== e
              ? e
              : T(D, this, H).call(this, t);
          return r;
        }
        getWhitelistedFallbackTokens() {
          const t = [],
            e = ["-tokens", "wallets_fee"];
          return (
            Object.entries(m.default).forEach((i) => {
              let [r, s] = i;
              const n = e.some((t) => r.includes(t));
              n && S.has(r) && Array.isArray(s) && t.push(...s);
            }),
            t.filter((t) => "object" === typeof t)
          );
        }
      }
      function _(t) {
        let { id: e, options: i } = t;
        T(D, this, G).call(this, e) &&
          T(D, this, j)
            .call(this, e, i)
            .catch(() => {});
      }
      function R(t) {
        if (!S.has(t)) throw new l.UnknownConfigKeyError(t);
      }
      function U(t, e) {
        if ((void 0 !== e && "object" !== typeof e) || "undefined" === typeof e)
          throw new Error(t + ".json is not valid json file");
        for (const [i, r] of Object.entries(e))
          x.forEach((e) => {
            if (e.test(JSON.stringify(r)))
              throw new Error(
                `Config entry id="${t}" with key="${i}" is not valid`,
              );
          });
      }
      function L(t) {
        if ("string" !== typeof t || !t.trim())
          throw new TypeError("Config id must be a non-empty string");
        for (const e of x)
          if (e.test(t)) throw new Error("Forbidden config id: " + t);
      }
      function N() {
        return (
          b(O, this) ||
            v(
              O,
              this,
              (async () => {
                try {
                  var t, e;
                  const i =
                      null !== (t = d.default.getVersion()) && void 0 !== t
                        ? t
                        : d.default.getCoreVersion(),
                    r =
                      null ===
                        (e = await n.db.configs.where({ id: E }).first()) ||
                      void 0 === e
                        ? void 0
                        : e.data;
                  i !== r &&
                    (await n.db.configs.clear(),
                    await n.db.configs.put({ id: E, data: i }));
                } catch (i) {
                  f.default.error(i);
                }
              })(),
            ),
          b(O, this)
        );
      }
      async function B(t, e) {
        void 0 === e && (e = {});
        try {
          const { data: i } = await s.default.get(
            `${this.baseUrl}/${k}/${t}.json`,
            {
              headers: { ...d.default.getUserAgentHttpHeader(), ...e.headers },
              ...e,
            },
          );
          if (void 0 === i)
            throw new l.ExternalError({
              type: c.EXTERNAL_ERROR,
              error: t + ".json is empty file",
              instance: this,
            });
          return (T(D, this, U).call(this, t, i), i);
        } catch (i) {
          throw (
            a.default.emit(o.CONFIGS.FAILED_FETCH, { id: t }),
            new l.ExternalError({
              type: c.EXTERNAL_ERROR,
              error: i,
              instance: this,
            })
          );
        }
      }
      async function j(t, e) {
        return b(M, this).call(this, t, async () => {
          try {
            const i = await T(D, this, B).call(this, t, e);
            return (
              await T(D, this, $).call(this, t, i),
              a.default.emit(o.CONFIGS.UPDATED, { id: t, config: i }),
              i
            );
          } catch (i) {
            throw new l.ExternalError({
              type: c.EXTERNAL_ERROR,
              error: `${t}: ${i}`,
              instance: this,
            });
          }
        });
      }
      function F(t) {
        var e;
        return null === (e = this.cached[t]) || void 0 === e ? void 0 : e.data;
      }
      async function W(t) {
        var e;
        const i =
          null === (e = await n.db.configs.where({ id: t }).first()) ||
          void 0 === e
            ? void 0
            : e.data;
        return (T(D, this, U).call(this, t, i), i);
      }
      function H(t) {
        T(D, this, R).call(this, t);
        const e = m.default[t];
        if ("ethereum-tokens" === t) {
          const t = Object.keys(P);
          e.forEach((e) => {
            t.includes(e.contract) &&
              Object.values(P[e.contract]).forEach((t) => {
                let [i, r] = t;
                e[i] = e[r];
              });
          });
        }
        return (T(D, this, U).call(this, t, e), e);
      }
      async function $(t, e) {
        ((this.cached[t] = {
          data: e,
          expired: A() + T(D, this, q).call(this, t),
        }),
          await n.db.configs.put({ id: t, data: e }));
      }
      function G(t) {
        var e, i;
        const r =
          null !==
            (e =
              null === (i = this.cached[t]) || void 0 === i
                ? void 0
                : i.expired) && void 0 !== e
            ? e
            : 0;
        return A() > r;
      }
      function q(t) {
        var e;
        return null !== (e = p.CONFIG_CACHE_TTL[t]) && void 0 !== e ? e : C;
      }
      e.default = ConfigManager;
    },
  },
]);
