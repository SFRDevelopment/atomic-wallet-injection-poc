(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [420],
  {
    2678: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(r(69)),
        i = s(r(81)),
        a = s(r(230)),
        o = r(19),
        c = r(27),
        u = s(r(794)),
        d = s(r(7391));
      function l(e, t, r) {
        (h(e, t), t.set(e, r));
      }
      function h(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function p(e, t) {
        return e.get(w(e, t));
      }
      function g(e, t, r) {
        return (e.set(w(e, t), r), r);
      }
      function w(e, t, r) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : r;
        throw new TypeError("Private element is not present on this object");
      }
      const f = new u.default(() => r.e(367).then(r.t.bind(null, 10182, 7))),
        T = new u.default(() => r.e(320).then(r.t.bind(null, 3602, 7))),
        y = new u.default(() =>
          Promise.all([
            r.e(0),
            r.e(22),
            r.e(309),
            r.e(224),
            r.e(132),
            r.e(153),
          ]).then(r.t.bind(null, 10187, 7)),
        ),
        x = new u.default(() => r.e(138).then(r.t.bind(null, 3218, 7))),
        m = "Ripple",
        b = "XRP",
        v = "m/44'/144'/0'/0/0",
        S = 6,
        E = "10000000",
        _ = 6e3;
      var A = new WeakMap();
      class XRPCoin extends a.default {
        constructor(e) {
          var t;
          let {
            alias: r,
            notify: s,
            feeData: i,
            explorers: a,
            txWebUrl: o,
            socket: c,
            id: u,
          } = e;
          const h = {
            id: u,
            alias: r,
            notify: s,
            name: m,
            ticker: b,
            decimal: S,
            unspendableBalance:
              null !== (t = i.unspendableBalance) && void 0 !== t ? t : E,
            explorers: a,
            txWebUrl: o,
            socket: c,
          };
          (super(h),
            l(this, A, void 0),
            (0, n.default)(this, "rippleApi", void 0),
            (this.derivation = v),
            this.setExplorersModules([d.default]),
            this.loadExplorers(h),
            (this.fee = i.fee),
            (this.fields.paymentId = !0),
            (this.isSubscribedToNewTxs = !1));
        }
        async getRippleApi() {
          if (this.rippleApi) return this.rippleApi;
          const { RippleAPI: e } = await y.get();
          return (
            (this.rippleApi = new e({
              server: this.explorer.config.baseUrl
                .replace("https", "wss")
                .replace(/:\d+/, ""),
            })),
            this.rippleApi
          );
        }
        loadWallet(e) {
          return new Promise(async (t, r) => {
            const [{ default: s }, n] = await Promise.all([T.get(), x.get()]),
              i = n.bip32.fromSeed(e),
              a = i.derivePath(this.derivation),
              o = s.generateSeed({ entropy: a.chainCode }),
              c = s.deriveKeypair(o);
            (o || r(new Error("Ripple can't get a secret!!!")),
              g(A, this, o),
              (this.address = s.deriveAddress(c.publicKey)),
              t({
                id: this.id,
                privateKey: p(A, this),
                address: this.address,
              }));
          });
        }
        async getAddress() {
          if (p(A, this)) {
            const { default: e } = await T.get(),
              t = e.deriveKeypair(p(A, this));
            return e.deriveAddress(t.publicKey);
          }
          return new Error("Ripple secret (private key) is empty!!!");
        }
        async validateAddress(e) {
          const { default: t } = await f.get();
          try {
            const r = t.decodeAccountID(e);
            return Array.isArray(r);
          } catch (r) {
            return !1;
          }
        }
        async sendTransaction(e) {
          const t = await this.getRippleApi(),
            r = await t.submit(e),
            s = ["tesSUCCESS", "terQUEUED", "telINSUF_FEE_P"];
          if (r && s.includes(r.engine_result)) return { txid: r.tx_json.hash };
          const n = await this.explorer.checkStatusTransaction(
            null === r || void 0 === r ? void 0 : r.tx_json.hash,
          );
          if ("success" === n) return { txid: r.tx_json.hash };
          throw new o.WalletError({
            type: c.SEND_TRANSACTION_TYPE,
            error: new Error(r && r.engine_result),
            instance: this,
          });
        }
        async createTransaction(e) {
          let { address: t, amount: r, memo: s } = e;
          const n = {
            source: {
              address: this.address,
              maxAmount: { value: "0.01", currency: "XRP" },
            },
            destination: {
              address: t,
              amount: { value: this.toCurrencyUnit(r), currency: "XRP" },
            },
          };
          s && (n.destination.tag = parseInt(s, 10));
          const i = await this.getRippleApi(),
            { txJSON: a } = await i.preparePayment(this.address, n),
            o = await this.explorer.getCurrentLedger(),
            c = 5,
            u = JSON.parse(a),
            d = { ...u, LastLedgerSequence: o + c },
            l = i.sign(JSON.stringify(d), p(A, this));
          return l.signedTransaction;
        }
        async createClaimFlareTransaction(e) {
          if (!e) throw new Error("no message key");
          const { sequence: t } = await this.explorer.getInfo(this.address),
            {
              validated_ledger: { seq: r },
            } = await this.explorer.getServerInfo(),
            s = await this.getFee(),
            n = 5,
            i = {
              TransactionType: "AccountSet",
              Account: this.address,
              Fee: s.toString(),
              Sequence: t,
              LastLedgerSequence: r + n,
              MessageKey: e,
            },
            a = await this.getRippleApi(),
            o = a.sign(JSON.stringify(i), p(A, this));
          return o.signedTransaction;
        }
        async getFee() {
          return new this.BN(this.fee);
        }
        async connectSocket() {
          const e = await this.getRippleApi();
          (e.connect(), this.runSocketHealthcheck());
        }
        runSocketHealthcheck() {
          setInterval(async () => {
            const e = await this.getRippleApi();
            if (!e.isConnected())
              return ((this.isSubscribedToNewTxs = !1), void e.connect());
            await this.subscribeToNewTxs();
          }, _);
        }
        async subscribeToNewTxs() {
          const e = await this.getRippleApi();
          e.isConnected() &&
            !this.isSubscribedToNewTxs &&
            ((this.isSubscribedToNewTxs = !0),
            e.connection.on("transaction", async (e) => {
              let { transaction: t } = e;
              try {
                const e = await this.explorer.checkStatusTransaction(t.hash);
                if ("success" !== e) return;
                const r = await this.explorer.getTransaction(
                  this.address,
                  t.hash,
                );
                (await i.default.filterAndUpdateTransactions([r]),
                  (this.balance = await this.getBalance()),
                  r.direction
                    ? this.eventEmitter.emit("socket::newtx", {
                        id: this.id,
                        ticker: this.ticker,
                        amount: r.amount,
                        txid: r.txid,
                      })
                    : this.eventEmitter.emit("socket::newtx::outgoing", {
                        id: this.id,
                        ticker: this.ticker,
                      }));
              } catch (r) {
                console.error(r);
              }
            }),
            e.request("subscribe", { accounts: [this.address] }));
        }
        setPrivateKey(e) {
          g(A, this, e);
        }
      }
      t.default = XRPCoin;
    },
    7391: function (e, t, r) {
      "use strict";
      var s = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(r(129)),
        i = r(19),
        a = r(27);
      const o = 946684800;
      class RippleExplorer extends n.default {
        constructor() {
          (super(...arguments), (this.requestId = 0));
        }
        getInitParams() {
          return {
            baseURL: this.config.baseUrl,
            headers: { "Content-Type": "text/plain" },
            credentials: !1,
          };
        }
        async checkStatusTransaction(e) {
          const t = await this.request(
            this.getTransactionUrl(e),
            this.getTransactionMethod(),
            this.getTransactionParams(e),
            a.GET_TRANSACTION_TYPE,
            this.getTransactionOptions(),
          );
          return t.status;
        }
        getAllowedTickers() {
          return ["XRP"];
        }
        getInfoUrl(e) {
          return "account_info";
        }
        getInfoParams(e) {
          return { account: e };
        }
        modifyInfoResponse(e) {
          return {
            balance: e.account_data.Balance,
            transactions: [],
            sequence: e.account_data.Sequence,
          };
        }
        getTransactionsUrl(e) {
          return "account_tx";
        }
        getTransactionsParams(e) {
          return { account: e, limit: 999 };
        }
        modifyTransactionsResponse(e, t) {
          return (
            (this.currentLedgerVersion = e.ledger_index_max),
            e.transactions.map((e) => {
              let { tx: r } = e;
              return this.modifyTransactionResponse(r, t);
            })
          );
        }
        getTransactionUrl(e) {
          return "tx";
        }
        getTransactionParams(e) {
          return { transaction: e, binary: !1 };
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDirection(e, t) {
          return t.Destination === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? t.Account : t.Destination;
        }
        getTxValue(e, t) {
          return Number(this.wallet.toCurrencyUnit(t.Amount));
        }
        getTxDateTime(e) {
          const t = e.date + o;
          return new Date(Number(t + "000"));
        }
        getTxMemo(e) {
          return (e.DestinationTag && String(e.DestinationTag)) || "";
        }
        getTxConfirmations(e) {
          return this.currentLedgerVersion - e.inLedger;
        }
        async sendTransaction(e) {
          const t = await this.request("submit", null, { tx_blob: e });
          if ("tesSUCCESS" === !t.engine_result)
            throw new i.ExplorerRequestError({
              type: a.SEND_TRANSACTION_TYPE,
              error: new Error(t.engine_result),
              instance: this,
            });
          return { txid: t.tx_json.hash };
        }
        async getFee() {
          const e = await this.request("fee");
          return e.drops.median_fee;
        }
        async getCurrentLedger() {
          const e = await this.request("ledger_current");
          return e.ledger_current_index;
        }
        async getServerInfo() {
          const e = await this.request("server_info");
          return e.info;
        }
        async request(e, t, r, s) {
          (void 0 === r && (r = {}),
            void 0 === s && (s = a.UNDEFINED_OPERATION_ERROR),
            (this.requestId += 1));
          const n = {
              jsonrpc: "2.0",
              method: e,
              params: [r],
              id: this.requestId,
            },
            o = await this.client.post("", JSON.stringify(n)).catch((t) => {
              throw new i.ExplorerRequestError({
                type: s,
                error: t,
                url: e,
                instance: this,
              });
            });
          if ("actNotFound" === o.data.result.error)
            return { account_data: { Balance: 0 } };
          if ("error" === o.data.result.status)
            throw new i.ExplorerRequestError({
              type: s,
              url: e,
              error: new Error(o.data.result.error_message),
              instance: this,
            });
          return o.data.result;
        }
        getTxFee(e) {
          return this.wallet.toCurrencyUnit((e && e.Fee) || 0);
        }
      }
      t.default = RippleExplorer;
    },
  },
]);
