(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [376, 32],
  {
    2698: function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var s = i(n(230)),
          r = n(19),
          a = n(27),
          o = i(n(794)),
          c = i(n(8006)),
          l = n(2806);
        function h(t, e, n) {
          (d(t, e), e.set(t, n));
        }
        function d(t, e) {
          if (e.has(t))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function u(t, e) {
          return t.get(w(t, e));
        }
        function g(t, e, n) {
          return (t.set(w(t, e), n), n);
        }
        function w(t, e, n) {
          if ("function" == typeof t ? t === e : t.has(e))
            return arguments.length < 3 ? e : n;
          throw new TypeError("Private element is not present on this object");
        }
        const f = new o.default(() => n.e(390).then(n.t.bind(null, 10493, 7))),
          m = new o.default(() =>
            Promise.resolve().then(n.t.bind(null, 5863, 7)),
          ),
          k = new o.default(() => n.e(421).then(n.t.bind(null, 5572, 7))),
          p = new o.default(() => n.e(402).then(n.t.bind(null, 10496, 7))),
          y = new o.default(() => n.e(357).then(n.t.bind(null, 10497, 7))),
          b = "Nano",
          T = "NANO",
          x = "m/44'/165'/0'/0/0",
          v = 30,
          P = "0",
          A =
            "0000000000000000000000000000000000000000000000000000000000000006",
          E =
            "0000000000000000000000000000000000000000000000000000000000000000",
          S =
            "nano_35btiz1mgfwp95c3ckazmzbp5gepduxtijuijd9xebeau8u1gsbea41smjca",
          U = 5e3,
          N = 64,
          _ = "Account not found",
          B = { frontier: E, representative: S };
        var I = new WeakMap();
        class NANOCoin extends (0, l.HasProviders)(s.default) {
          constructor(t) {
            let {
              alias: e,
              notify: n,
              feeData: i,
              explorers: s,
              txWebUrl: r,
              socket: a,
              id: o,
            } = t;
            const l = {
              id: o,
              alias: e,
              notify: n,
              name: b,
              ticker: T,
              decimal: v,
              unspendableBalance: P,
              explorers: s,
              txWebUrl: r,
              socket: a,
            };
            (super(l),
              h(this, I, void 0),
              (this.derivation = x),
              this.setExplorersModules([c.default]),
              this.loadExplorers(l),
              (this.fee = i.fee),
              (this.transactions = []),
              this.eventEmitter.on(`${this.id}-${this.id}::mine-txs`, () => {
                this.confirmAllPendingBlocks();
              }),
              this.eventEmitter.on(`${this.id}-${this.id}::new-socket-tx`, () =>
                this.getInfo(),
              ),
              (this.account_state = {}));
          }
          connectSocket() {
            this.getProvider("socket").connectSocket(this.address);
          }
          async getPublicKeyHexAndAccountKeyPair(e) {
            const n = await this.generateAccountKeyPair(e),
              i = t.from(n.publicKey).toString("hex");
            return { accountKeyPair: n, publicKeyHex: i };
          }
          async loadWallet(e, n) {
            try {
              const [{ default: e }, { accountFromKey: i }] = await Promise.all(
                  [m.get(), p.get()],
                ),
                s = e.mnemonicToEntropy(n),
                r = 0,
                a = this.hexToUint8(s),
                o = await this.generateAccountSecretKeyBytes(a, r),
                { accountKeyPair: c, publicKeyHex: l } =
                  await this.getPublicKeyHexAndAccountKeyPair(o);
              return (
                (this.address = i(l).replace("xrb", "nano")),
                g(I, this, t.from(c.secretKey).toString("hex")),
                { id: this.id, privateKey: u(I, this), address: this.address }
              );
            } catch (i) {
              throw new r.WalletError({
                type: a.WALLET_ERROR,
                error: i,
                instance: this,
              });
            }
          }
          async getAddress() {
            if (u(I, this)) {
              const t = this.hexToUint8(u(I, this)),
                [{ publicKeyHex: e }, { accountFromKey: n }] =
                  await Promise.all([
                    this.getPublicKeyHexAndAccountKeyPair(t),
                    p.get(),
                  ]);
              return n(e).replace("xrb", "nano");
            }
            return new r.WalletError({
              type: a.WALLET_ERROR,
              error: new Error("privateKey is empty!"),
              instance: this,
            });
          }
          async validateAddress(t) {
            const { default: e } = await y.get();
            return e(t);
          }
          async createTransaction(t) {
            let { address: e, amount: n } = t;
            await this.getInfo();
            const [i, s] = await Promise.all([
                this.getWork(this.account_state.frontier),
                this.getAccountPublicKey(e),
              ]),
              r = new this.BN(this.balance).sub(new this.BN(n)),
              a = this.hexToUint8(s),
              o = await this.signSendBlock(a, r),
              c = {
                type: "state",
                account: this.address,
                previous: this.account_state.frontier,
                representative: this.account_state.representative,
                balance: r.toString(),
                link: s,
                work: i,
                signature: o,
              };
            return { block: c, subtype: "send" };
          }
          async createReceiveTransaction(t) {
            let e = !0;
            try {
              (await this.getInfo(), (e = !1));
            } catch (u) {
              console.warn(
                "NANO: getInfo throws an error, probably trying to receive first tx for a given acc",
              );
            }
            const [n, i] = await Promise.all([
                this.getProvider("tx").getBlockInfo(t),
                this.getAccountPublicKey(this.address),
              ]),
              s = e ? i : this.account_state.frontier,
              o = await this.getWork(s);
            if (!o)
              throw new r.WalletError({
                type: a.WALLET_ERROR,
                error: new Error("[NANO] could not get work for " + s),
                instance: this,
              });
            const c = e
                ? new this.BN(n.amount)
                : new this.BN(this.balance).add(new this.BN(n.amount)),
              l = this.hexToUint8(t),
              h = await this.signSendBlock(l, c),
              d = {
                type: "state",
                account: this.address,
                previous: this.account_state.frontier,
                representative: this.account_state.representative,
                balance: c.toString(),
                link: t,
                work: o,
                signature: h,
              };
            return { block: d, subtype: "receive" };
          }
          async generateAccountSecretKeyBytes(t, e) {
            const n = this.hexToUint8(this.decToHex(e, 4)),
              i = await f.get(),
              s = i.blake2bInit(32);
            return (
              i.blake2bUpdate(s, t),
              i.blake2bUpdate(s, n),
              i.blake2bFinal(s)
            );
          }
          async getAccountPublicKey(t) {
            const { keyFromAccount: e } = await p.get();
            return e(t.replace("nano", "xrb"));
          }
          async generateAccountKeyPair(t) {
            const { default: e } = await k.get();
            return e.sign.keyPair.fromSecretKey(t);
          }
          hexToUint8(t) {
            const e = Math.floor(t.length / 2),
              n = new Uint8Array(e);
            for (let i = 0; i < e; i += 1)
              n[i] = parseInt(t.substr(2 * i, 2), 16);
            return n;
          }
          decToHex(t, e) {
            void 0 === e && (e = null);
            let n = Number(t).toString(16);
            if ((n.length % 2 !== 0 && (n = "0" + n), e > n.length / 2)) {
              const t = e - n.length / 2;
              for (let e = 0; e < t; e += 1) n = "00" + n;
            }
            return n;
          }
          async signSendBlock(e, n) {
            const [i, { default: s }] = await Promise.all([f.get(), k.get()]),
              r = i.blake2bInit(32, null);
            let a = n.toString(16);
            while (a.length < 32) a = "0" + a;
            const [o, c] = await Promise.all([
              this.getAccountPublicKey(this.address),
              this.getAccountPublicKey(this.account_state.representative),
            ]);
            (i.blake2bUpdate(r, this.hexToUint8(A)),
              i.blake2bUpdate(r, this.hexToUint8(o)),
              i.blake2bUpdate(r, this.hexToUint8(this.account_state.frontier)),
              i.blake2bUpdate(r, this.hexToUint8(c)),
              i.blake2bUpdate(r, this.hexToUint8(a)),
              i.blake2bUpdate(r, e));
            const l = i.blake2bFinal(r),
              h = this.hexToUint8(u(I, this)),
              d = s.sign.detached(l, h);
            return t.from(d).toString("hex");
          }
          async getWork(t) {
            return this.getProvider("workGenerate").workGenerate(t);
          }
          async confirmAllPendingBlocks() {
            const t = await this.getProvider("history").getPendingTransactions(
              this.address,
            );
            if (Array.isArray(t.blocks))
              for (const e of t.blocks) await this.confirmPendingBlock(e);
          }
          async confirmPendingBlock(t) {
            if ("string" !== typeof t || t.length !== N)
              throw new Error(
                "[NANO] confirmPendingBlock error: incorrect block hash: " + t,
              );
            const e = await this.createReceiveTransaction(t);
            (await this.sendTransaction(e),
              await new Promise((t, e) =>
                setTimeout(async () => {
                  t(!0);
                }, U),
              ));
          }
          async getTransactions() {
            this.confirmAllPendingBlocks();
            const t = this.account_state.pending
              ? this.account_state.pending.blocks
              : [];
            return this.getProvider("history").getTransactions({
              address: this.address,
              pending: t,
            });
          }
          async getInfo() {
            try {
              const t = await this.explorer.getInfo(this.address);
              return ((this.balance = t.balance), (this.account_state = t), t);
            } catch (t) {
              throw (
                t.message === _ &&
                  ((this.balance = "0"), (this.account_state = B)),
                t
              );
            }
          }
          async pushTx(t) {
            if ("pending" === t.txid)
              return (
                (this.transactions = [t, ...this.transactions]),
                void (
                  t.direction &&
                  this.eventEmitter.emit("socket::newtx", {
                    id: this.id,
                    ticker: this.ticker,
                    amount: t.amount,
                  })
                )
              );
            const e = this.transactions.find((e) => e.txid === t.txid);
            if (!e) {
              const e = this.transactions.find(
                (e) =>
                  "pending" === e.txid &&
                  e.otherSideAddress === t.otherSideAddress,
              );
              e
                ? ((e.txid = t.txid),
                  (this.transactions = [...this.transactions]))
                : ((this.transactions = [t, ...this.transactions]),
                  t.direction &&
                    this.eventEmitter.emit("socket::newtx", {
                      id: this.id,
                      ticker: this.ticker,
                      amount: t.amount,
                    }));
            }
          }
          setPrivateKey(t) {
            g(I, this, t);
          }
        }
        e.default = NANOCoin;
      }).call(this, n(2).Buffer);
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    8006: function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var s = i(n(409)),
          r = i(n(129)),
          a = n(19),
          o = n(27),
          c = i(n(80)),
          l = i(n(81));
        const h = {
          WebSocket: t.WebSocket,
          connectionTimeout: 2e3,
          maxReconnectionDelay: 2e4,
          minReconnectionDelay: 1e4,
          maxRetries: 10,
        };
        class NanonodeExplorer extends r.default {
          getAllowedTickers() {
            return ["NANO"];
          }
          getBaseUrl() {
            return "" + this.config.baseUrl;
          }
          getSendTransactionUrl() {
            return this.getBaseUrl();
          }
          getInfoUrl(t) {
            return this.getBaseUrl();
          }
          getTransactionUrl(t) {
            return ((this.requestedTxId = t), "");
          }
          getActionMethod() {
            return "POST";
          }
          getTransactionsMethod() {
            return this.getActionMethod();
          }
          getInfoMethod() {
            return this.getActionMethod();
          }
          getTransactionMethod() {
            return this.getActionMethod();
          }
          getSendTransactionParams(t) {
            return { action: "process", json_block: !0, ...t };
          }
          workGenerateParams(t) {
            return { action: "work_generate", hash: t };
          }
          pendingTransactionsParams(t) {
            return { action: "pending", account: t, count: "100" };
          }
          blockInfoParams(t) {
            return {
              action: "block_info",
              hash: t,
              json_block: !0,
              source: !0,
            };
          }
          getInfoParams(t) {
            return {
              action: "account_info",
              account: t,
              pending: !0,
              representative: !0,
            };
          }
          getTransactionsParams(t, e, n) {
            return (
              void 0 === e && (e = 0),
              void 0 === n && (n = this.defaultTxLimit),
              { action: "account_history", account: t, count: "100" }
            );
          }
          modifySendTransactionResponse(t) {
            if ("undefined" !== typeof t.error)
              throw new a.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(t.error),
                instance: this,
              });
            return (
              this.eventEmitter.emit("socket::newtx::outgoing", {
                id: this.wallet.id,
                ticker: this.wallet.ticker,
              }),
              { txid: t.hash }
            );
          }
          async workGenerate(t) {
            const e = await this.request(
              this.getBaseUrl(),
              this.getActionMethod(),
              this.workGenerateParams(t),
              "Work generate",
              this.getSendOptions(),
            );
            return e.work;
          }
          async getPendingTransactions(t) {
            const e = await this.request(
              this.getBaseUrl(),
              this.getActionMethod(),
              this.pendingTransactionsParams(t),
            );
            return e;
          }
          async getBlockInfo(t) {
            const e = await this.request(
              this.getBaseUrl(),
              this.getActionMethod(),
              this.blockInfoParams(t),
              "Block info",
              this.getSendOptions(),
            );
            return ((e.requestedTxId = t), e);
          }
          modifyInfoResponse(t) {
            if (t.error) throw new Error(t.error);
            return t;
          }
          modifyTransactionResponse(t, e) {
            return (
              (t.hash = t.requestedTxId),
              super.modifyTransactionResponse(t, e)
            );
          }
          async getTransactions(t) {
            let {
              address: e,
              offset: n = 0,
              limit: i = this.defaultTxLimit,
              pending: s,
            } = t;
            const r = await this.request(
              this.getBaseUrl(),
              this.getTransactionsMethod(),
              this.getTransactionsParams(e, n, i),
              o.GET_TRANSACTIONS_TYPE,
            );
            if (r.error) throw new Error(r.error);
            return this.modifyTransactionsResponse(
              r.history,
              this.wallet.address,
              this.wallet.ticker,
              s,
            );
          }
          modifyTransactionsResponse(t, e, n, i) {
            return (
              void 0 === n && (n = this.wallet.ticker),
              Array.isArray(t)
                ? t.map(
                    (t) =>
                      new c.default({
                        ticker: n,
                        name: this.wallet.name,
                        walletid: this.wallet.id,
                        txid: this.getTxHash(t),
                        fee: this.getTxFee(t),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: this.getTxConfirmations(t, i),
                        alias: this.wallet.alias,
                      }),
                  )
                : []
            );
          }
          getTxHash(t) {
            return t.hash;
          }
          getTxDirection(t, e) {
            return "receive" === e.type;
          }
          getTxOtherSideAddress(t, e) {
            return e.account;
          }
          getTxValue(t, e) {
            return Number(this.wallet.toCurrencyUnit(e.amount));
          }
          getTxDateTime(t) {
            return new Date(Number(t.local_timestamp + "000"));
          }
          getTxConfirmations(t, e) {
            return e && e.includes(t.hash) ? 0 : 1;
          }
          async getTransaction(t, e) {
            const n = await this.getBlockInfo(e);
            return this.modifyTransactionResponse(n, t);
          }
          setSocketClient(t) {
            this.socket[this.wallet.ticker] = new s.default(t, [], h);
          }
          async connectSocket(t) {
            const { websocketUrl: e } = this.config,
              { ticker: n } = this.wallet;
            if (!e)
              throw new a.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(
                  `[${n}] connectSocket error: no websocket url in coin config`,
                ),
                instance: this,
              });
            this.setSocketClient(e);
            const i = this.socket[n];
            return (
              i.addEventListener("message", async (e) => {
                const n = JSON.parse(e.data).data;
                ("send" === n.subtype && this.processSendEvent(n, t),
                  "receive" === n.subtype && this.processReceiveEvent(n, t));
              }),
              new Promise((n, s) => {
                (i.addEventListener(
                  "open",
                  () => (
                    i.removeEventListener("error"),
                    n(i.send(JSON.stringify({ event: "subscribe", data: [t] })))
                  ),
                ),
                  i.addEventListener(
                    "error",
                    (t) => (
                      console.error("[NANO][socket] connection failed", e, t),
                      s(t)
                    ),
                  ));
              })
            );
          }
          disconnectSocket() {
            this.socket[this.wallet.ticker].close();
          }
          updateParams(t) {
            (super.updateParams(t),
              t.websocketUrl &&
                this.config.websocketUrl !== t.websocketUrl &&
                ((this.config.websocketUrl = t.websocketUrl),
                this.disconnectSocket(),
                this.connectSocket(this.wallet.address)));
          }
          async processSendEvent(t, e) {
            if (t.confirmed) return;
            const n = t.account !== e;
            if (
              (this.eventEmitter.emit(
                `${this.wallet.parent}-${this.wallet.id}::mine-txs`,
              ),
              n)
            )
              return;
            const i = new c.default({
              ticker: this.wallet.ticker,
              name: this.wallet.name,
              walletid: this.wallet.id,
              txid: n ? "pending" : t.hash,
              direction: n,
              otherSideAddress: n ? t.account : t.block.link_as_account,
              amount: this.wallet.toCurrencyUnit(t.amount),
              datetime: new Date(),
              alias: this.wallet.alias,
            });
            (await l.default.updatePendingOrInsert(i),
              this.eventEmitter.emit(
                `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
                { unconfirmedTx: i },
              ));
          }
          async processReceiveEvent(t) {
            const e = await this.getBlockInfo(t.block.link),
              n = new c.default({
                ticker: this.wallet.ticker,
                name: this.wallet.name,
                txid: t.hash,
                walletid: this.wallet.id,
                direction: !0,
                otherSideAddress: e.block_account,
                amount: this.wallet.toCurrencyUnit(t.amount),
                datetime: new Date(),
                alias: this.wallet.alias,
              });
            (await l.default.updatePendingOrInsert(n),
              this.eventEmitter.emit(
                `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
                { unconfirmedTx: n },
              ));
          }
          async getInfo(t) {
            const e = await super.getInfo(t);
            return (
              e.pending > 0 &&
                (e.pending = await this.getPendingTransactions(t)),
              e
            );
          }
          getTxFee() {
            return 0;
          }
        }
        e.default = NanonodeExplorer;
      }).call(this, n(13));
    },
  },
]);
