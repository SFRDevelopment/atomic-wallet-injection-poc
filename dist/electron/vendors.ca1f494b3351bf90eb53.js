(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [354, 32],
  {
    2709: function (e, t, i) {
      "use strict";
      var s = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(230)),
        r = i(805),
        a = s(i(794)),
        o = s(i(8068)),
        l = s(i(8069)),
        c = i(2806);
      function h(e, t) {
        (u(e, t), t.add(e));
      }
      function d(e, t, i) {
        (u(e, t), t.set(e, i));
      }
      function u(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function f(e, t, i) {
        return (e.set(g(e, t), i), i);
      }
      function m(e, t) {
        return e.get(g(e, t));
      }
      function g(e, t, i) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : i;
        throw new TypeError("Private element is not present on this object");
      }
      const T = "GAS",
        p = "GAS",
        x = 8,
        w = "NEO",
        b = "NEO",
        k = "m/44'/888'/0'/0",
        y = 0,
        v = "0";
      var N = new WeakMap(),
        E = new WeakSet();
      class NEO3Coin extends (0, c.Neo3Mixin)(
        (0, c.NeoMixin)((0, c.HasProviders)((0, c.HasTokensMixin)(n.default))),
      ) {
        constructor(e) {
          let {
            alias: t,
            notify: s,
            feeData: n,
            explorers: r,
            txWebUrl: c,
            socket: u,
            id: f,
          } = e;
          const m = {
            id: f,
            alias: t,
            notify: s,
            name: w,
            ticker: b,
            decimal: y,
            unspendableBalance: v,
            txWebUrl: c,
            explorers: r,
            socket: u,
            dependencies: {
              coreLib: new a.default(() =>
                i.e(435).then(i.t.bind(null, 11365, 7)),
              ),
            },
          };
          (super(m),
            h(this, E),
            d(this, N, void 0),
            (this.derivation = k),
            this.setExplorersModules([o.default, l.default]),
            this.loadExplorers(m),
            g(E, this, A).call(this),
            (this.balances = null));
        }
        get feeWallet() {
          return m(N, this);
        }
        get feeTicker() {
          return "GAS";
        }
        async isAvailableForFee(e) {
          const t = !e || e.isZero() ? await this.getFee() : e;
          return new this.BN(m(N, this).balance).gte(t);
        }
        async loadTokensList(e) {
          var t;
          (e.addWallet(m(N, this)),
            null === (t = this.bus) ||
              void 0 === t ||
              t.$emit("update::coin-list"));
        }
        createToken(e) {
          return new r.NEOToken({ parent: this, ...e });
        }
        getTokenList() {
          return [
            {
              id: m(N, this).id,
              name: m(N, this).name,
              ticker: m(N, this).ticker,
              decimal: m(N, this).decimal,
              visibility: m(N, this).visibility,
            },
          ];
        }
        getTokenTransactions(e) {
          return super.getTransactions(e);
        }
      }
      function A() {
        (f(
          N,
          this,
          this.createToken({
            name: T,
            ticker: p,
            decimal: x,
            visibility: !0,
            confirmed: !0,
            source: "list",
            parent: this,
          }),
        ),
          (this.tokens[m(N, this).id] = m(N, this)));
      }
      t.default = NEO3Coin;
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    8068: function (e, t, i) {
      "use strict";
      var s = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(129)),
        r = s(i(80));
      const a = 1e3;
      class DoraExplorer extends n.default {
        constructor(e) {
          (super(e),
            (this.ticker = this.wallet.ticker.toUpperCase().substr(0, 3)),
            (this.height = 0));
        }
        getAllowedTickers() {
          return ["NEO", "GAS"];
        }
        getInitParams() {
          const e = super.getInitParams();
          return { ...e, headers: { "X-Referer": "https://atomicwallet.io" } };
        }
        async getInfo(e) {
          let t = [];
          this.request("height").then((e) => {
            this.height = Number(e.height);
          });
          try {
            t = await this.request("balance/" + e);
          } catch (n) {
            console.error(n);
          }
          const i = { NEO: "0", GAS: "0" };
          let s;
          return (
            t.forEach((e) => {
              let { symbol: t, balance: n } = e;
              (t === this.ticker && (s = n),
                ["NEO", "GAS"].includes(t) && (i[t] = n));
            }),
            { balance: s, balances: i }
          );
        }
        async getTransactions(e) {
          let { address: t } = e;
          const i = await this.request(`transfer_history/${t}/1`);
          return this.modifyTransactionsResponse(i, t);
        }
        modifyTransactionsResponse(e, t) {
          const i = e.items.filter((e) => "GAS" === e.symbol),
            s = e.items.filter((e) => "NEO" === e.symbol),
            n = s.map(
              (e) =>
                new r.default({
                  ticker: this.ticker,
                  name: this.wallet.name,
                  alias: this.wallet.alias,
                  txid: this.getTxHash(e),
                  walletid: this.wallet.id,
                  datetime: this.getTxDateTime(e),
                  amount: this.getTxValue(t, e),
                  direction: this.getTxDirection(t, e),
                  confirmations: this.getTxConfirmations(e),
                  otherSideAddress: this.getTxOtherSideAddress(t, e),
                }),
            ),
            a = i.map(
              (e) =>
                new r.default({
                  ticker: e.symbol,
                  name: e.symbol,
                  alias: this.wallet.alias,
                  txid: this.getTxHash(e),
                  walletid: "GAS3",
                  datetime: this.getTxDateTime(e),
                  amount: this.getTxValue(t, e),
                  direction: this.getTxDirection(t, e),
                  confirmations: this.getTxConfirmations(e),
                  otherSideAddress: this.getTxOtherSideAddress(t, e),
                }),
            );
          return [...n, ...a];
        }
        getTxConfirmations(e) {
          return this.height ? this.height - e.block : 1;
        }
        getTxHash(e) {
          return e.txid;
        }
        getTxDirection(e, t) {
          return t.to === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? t.from : t.to;
        }
        getTxValue(e, t) {
          return t.amount;
        }
        getTxDateTime(e) {
          return new Date(Number(e.time.split(".")[0]) * a);
        }
      }
      t.default = DoraExplorer;
    },
    8069: function (e, t, i) {
      "use strict";
      var s = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = s(i(129));
      class NeoNodeExplorer extends n.default {
        constructor() {
          super(...arguments);
          const { wallet: e, config: t } =
            arguments.length <= 0 ? void 0 : arguments[0];
          this.nodeClientPromise = e.coreLib.api.NetworkFacade.fromConfig({
            node: t.baseUrl,
          });
        }
        getAllowedTickers() {
          return ["NEO", "GAS"];
        }
        async sendTransaction(e) {
          let { tx: t, signingConfig: i } = e;
          const s = await this.getClient();
          return s.transferToken([t], i);
        }
        async getFeeInformation(e) {
          const t = await this.getClient();
          return e.getFeeInformation(t);
        }
        async sendRawTransaction(e) {
          const t = await this.getClient();
          return t.sendRawTransaction(e);
        }
        async getClient() {
          return (await this.nodeClientPromise).client;
        }
      }
      t.default = NeoNodeExplorer;
    },
  },
]);
